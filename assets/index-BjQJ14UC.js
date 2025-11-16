(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const u of d)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function s(d){const u={};return d.integrity&&(u.integrity=d.integrity),d.referrerPolicy&&(u.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?u.credentials="include":d.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(d){if(d.ep)return;d.ep=!0;const u=s(d);fetch(d.href,u)}})();function EB(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ud={exports:{}},Mi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function FB(){if(Wg)return Mi;Wg=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(o,d,u){var f=null;if(u!==void 0&&(f=""+u),d.key!==void 0&&(f=""+d.key),"key"in d){u={};for(var x in d)x!=="key"&&(u[x]=d[x])}else u=d;return d=u.ref,{$$typeof:i,type:o,key:f,ref:d!==void 0?d:null,props:u}}return Mi.Fragment=r,Mi.jsx=s,Mi.jsxs=s,Mi}var qg;function jB(){return qg||(qg=1,ud.exports=FB()),ud.exports}var n=jB(),fd={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function SB(){if(Pg)return pe;Pg=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),B=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function M(C){return C===null||typeof C!="object"?null:(C=S&&C[S]||C["@@iterator"],typeof C=="function"?C:null)}var oA={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},AA=Object.assign,dA={};function DA(C,Z,gA){this.props=C,this.context=Z,this.refs=dA,this.updater=gA||oA}DA.prototype.isReactComponent={},DA.prototype.setState=function(C,Z){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,Z,"setState")},DA.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function NA(){}NA.prototype=DA.prototype;function pA(C,Z,gA){this.props=C,this.context=Z,this.refs=dA,this.updater=gA||oA}var JA=pA.prototype=new NA;JA.constructor=pA,AA(JA,DA.prototype),JA.isPureReactComponent=!0;var mA=Array.isArray,bA={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function OA(C,Z,gA,hA,jA,YA){return gA=YA.ref,{$$typeof:i,type:C,key:Z,ref:gA!==void 0?gA:null,props:YA}}function V(C,Z){return OA(C.type,Z,void 0,void 0,void 0,C.props)}function lA(C){return typeof C=="object"&&C!==null&&C.$$typeof===i}function _A(C){var Z={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(gA){return Z[gA]})}var XA=/\/+/g;function QA(C,Z){return typeof C=="object"&&C!==null&&C.key!=null?_A(""+C.key):Z.toString(36)}function LA(){}function qA(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(LA,LA):(C.status="pending",C.then(function(Z){C.status==="pending"&&(C.status="fulfilled",C.value=Z)},function(Z){C.status==="pending"&&(C.status="rejected",C.reason=Z)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function WA(C,Z,gA,hA,jA){var YA=typeof C;(YA==="undefined"||YA==="boolean")&&(C=null);var L=!1;if(C===null)L=!0;else switch(YA){case"bigint":case"string":case"number":L=!0;break;case"object":switch(C.$$typeof){case i:case r:L=!0;break;case v:return L=C._init,WA(L(C._payload),Z,gA,hA,jA)}}if(L)return jA=jA(C),L=hA===""?"."+QA(C,0):hA,mA(jA)?(gA="",L!=null&&(gA=L.replace(XA,"$&/")+"/"),WA(jA,Z,gA,"",function(BA){return BA})):jA!=null&&(lA(jA)&&(jA=V(jA,gA+(jA.key==null||C&&C.key===jA.key?"":(""+jA.key).replace(XA,"$&/")+"/")+L)),Z.push(jA)),1;L=0;var TA=hA===""?".":hA+":";if(mA(C))for(var kA=0;kA<C.length;kA++)hA=C[kA],YA=TA+QA(hA,kA),L+=WA(hA,Z,gA,YA,jA);else if(kA=M(C),typeof kA=="function")for(C=kA.call(C),kA=0;!(hA=C.next()).done;)hA=hA.value,YA=TA+QA(hA,kA++),L+=WA(hA,Z,gA,YA,jA);else if(YA==="object"){if(typeof C.then=="function")return WA(qA(C),Z,gA,hA,jA);throw Z=String(C),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return L}function Y(C,Z,gA){if(C==null)return C;var hA=[],jA=0;return WA(C,hA,"","",function(YA){return Z.call(gA,YA,jA++)}),hA}function xA(C){if(C._status===-1){var Z=C._result;Z=Z(),Z.then(function(gA){(C._status===0||C._status===-1)&&(C._status=1,C._result=gA)},function(gA){(C._status===0||C._status===-1)&&(C._status=2,C._result=gA)}),C._status===-1&&(C._status=0,C._result=Z)}if(C._status===1)return C._result.default;throw C._result}var EA=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function PA(){}return pe.Children={map:Y,forEach:function(C,Z,gA){Y(C,function(){Z.apply(this,arguments)},gA)},count:function(C){var Z=0;return Y(C,function(){Z++}),Z},toArray:function(C){return Y(C,function(Z){return Z})||[]},only:function(C){if(!lA(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},pe.Component=DA,pe.Fragment=s,pe.Profiler=d,pe.PureComponent=pA,pe.StrictMode=o,pe.Suspense=g,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=bA,pe.__COMPILER_RUNTIME={__proto__:null,c:function(C){return bA.H.useMemoCache(C)}},pe.cache=function(C){return function(){return C.apply(null,arguments)}},pe.cloneElement=function(C,Z,gA){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var hA=AA({},C.props),jA=C.key,YA=void 0;if(Z!=null)for(L in Z.ref!==void 0&&(YA=void 0),Z.key!==void 0&&(jA=""+Z.key),Z)!G.call(Z,L)||L==="key"||L==="__self"||L==="__source"||L==="ref"&&Z.ref===void 0||(hA[L]=Z[L]);var L=arguments.length-2;if(L===1)hA.children=gA;else if(1<L){for(var TA=Array(L),kA=0;kA<L;kA++)TA[kA]=arguments[kA+2];hA.children=TA}return OA(C.type,jA,void 0,void 0,YA,hA)},pe.createContext=function(C){return C={$$typeof:f,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:u,_context:C},C},pe.createElement=function(C,Z,gA){var hA,jA={},YA=null;if(Z!=null)for(hA in Z.key!==void 0&&(YA=""+Z.key),Z)G.call(Z,hA)&&hA!=="key"&&hA!=="__self"&&hA!=="__source"&&(jA[hA]=Z[hA]);var L=arguments.length-2;if(L===1)jA.children=gA;else if(1<L){for(var TA=Array(L),kA=0;kA<L;kA++)TA[kA]=arguments[kA+2];jA.children=TA}if(C&&C.defaultProps)for(hA in L=C.defaultProps,L)jA[hA]===void 0&&(jA[hA]=L[hA]);return OA(C,YA,void 0,void 0,null,jA)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(C){return{$$typeof:x,render:C}},pe.isValidElement=lA,pe.lazy=function(C){return{$$typeof:v,_payload:{_status:-1,_result:C},_init:xA}},pe.memo=function(C,Z){return{$$typeof:B,type:C,compare:Z===void 0?null:Z}},pe.startTransition=function(C){var Z=bA.T,gA={};bA.T=gA;try{var hA=C(),jA=bA.S;jA!==null&&jA(gA,hA),typeof hA=="object"&&hA!==null&&typeof hA.then=="function"&&hA.then(PA,EA)}catch(YA){EA(YA)}finally{bA.T=Z}},pe.unstable_useCacheRefresh=function(){return bA.H.useCacheRefresh()},pe.use=function(C){return bA.H.use(C)},pe.useActionState=function(C,Z,gA){return bA.H.useActionState(C,Z,gA)},pe.useCallback=function(C,Z){return bA.H.useCallback(C,Z)},pe.useContext=function(C){return bA.H.useContext(C)},pe.useDebugValue=function(){},pe.useDeferredValue=function(C,Z){return bA.H.useDeferredValue(C,Z)},pe.useEffect=function(C,Z,gA){var hA=bA.H;if(typeof gA=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return hA.useEffect(C,Z)},pe.useId=function(){return bA.H.useId()},pe.useImperativeHandle=function(C,Z,gA){return bA.H.useImperativeHandle(C,Z,gA)},pe.useInsertionEffect=function(C,Z){return bA.H.useInsertionEffect(C,Z)},pe.useLayoutEffect=function(C,Z){return bA.H.useLayoutEffect(C,Z)},pe.useMemo=function(C,Z){return bA.H.useMemo(C,Z)},pe.useOptimistic=function(C,Z){return bA.H.useOptimistic(C,Z)},pe.useReducer=function(C,Z,gA){return bA.H.useReducer(C,Z,gA)},pe.useRef=function(C){return bA.H.useRef(C)},pe.useState=function(C){return bA.H.useState(C)},pe.useSyncExternalStore=function(C,Z,gA){return bA.H.useSyncExternalStore(C,Z,gA)},pe.useTransition=function(){return bA.H.useTransition()},pe.version="19.1.0",pe}var Ap;function lu(){return Ap||(Ap=1,fd.exports=SB()),fd.exports}var k=lu();const kB=EB(k);var hd={exports:{}},Di={},gd={exports:{}},pd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep;function HB(){return ep||(ep=1,function(i){function r(Y,xA){var EA=Y.length;Y.push(xA);A:for(;0<EA;){var PA=EA-1>>>1,C=Y[PA];if(0<d(C,xA))Y[PA]=xA,Y[EA]=C,EA=PA;else break A}}function s(Y){return Y.length===0?null:Y[0]}function o(Y){if(Y.length===0)return null;var xA=Y[0],EA=Y.pop();if(EA!==xA){Y[0]=EA;A:for(var PA=0,C=Y.length,Z=C>>>1;PA<Z;){var gA=2*(PA+1)-1,hA=Y[gA],jA=gA+1,YA=Y[jA];if(0>d(hA,EA))jA<C&&0>d(YA,hA)?(Y[PA]=YA,Y[jA]=EA,PA=jA):(Y[PA]=hA,Y[gA]=EA,PA=gA);else if(jA<C&&0>d(YA,EA))Y[PA]=YA,Y[jA]=EA,PA=jA;else break A}}return xA}function d(Y,xA){var EA=Y.sortIndex-xA.sortIndex;return EA!==0?EA:Y.id-xA.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var f=Date,x=f.now();i.unstable_now=function(){return f.now()-x}}var g=[],B=[],v=1,S=null,M=3,oA=!1,AA=!1,dA=!1,DA=!1,NA=typeof setTimeout=="function"?setTimeout:null,pA=typeof clearTimeout=="function"?clearTimeout:null,JA=typeof setImmediate<"u"?setImmediate:null;function mA(Y){for(var xA=s(B);xA!==null;){if(xA.callback===null)o(B);else if(xA.startTime<=Y)o(B),xA.sortIndex=xA.expirationTime,r(g,xA);else break;xA=s(B)}}function bA(Y){if(dA=!1,mA(Y),!AA)if(s(g)!==null)AA=!0,G||(G=!0,QA());else{var xA=s(B);xA!==null&&WA(bA,xA.startTime-Y)}}var G=!1,OA=-1,V=5,lA=-1;function _A(){return DA?!0:!(i.unstable_now()-lA<V)}function XA(){if(DA=!1,G){var Y=i.unstable_now();lA=Y;var xA=!0;try{A:{AA=!1,dA&&(dA=!1,pA(OA),OA=-1),oA=!0;var EA=M;try{e:{for(mA(Y),S=s(g);S!==null&&!(S.expirationTime>Y&&_A());){var PA=S.callback;if(typeof PA=="function"){S.callback=null,M=S.priorityLevel;var C=PA(S.expirationTime<=Y);if(Y=i.unstable_now(),typeof C=="function"){S.callback=C,mA(Y),xA=!0;break e}S===s(g)&&o(g),mA(Y)}else o(g);S=s(g)}if(S!==null)xA=!0;else{var Z=s(B);Z!==null&&WA(bA,Z.startTime-Y),xA=!1}}break A}finally{S=null,M=EA,oA=!1}xA=void 0}}finally{xA?QA():G=!1}}}var QA;if(typeof JA=="function")QA=function(){JA(XA)};else if(typeof MessageChannel<"u"){var LA=new MessageChannel,qA=LA.port2;LA.port1.onmessage=XA,QA=function(){qA.postMessage(null)}}else QA=function(){NA(XA,0)};function WA(Y,xA){OA=NA(function(){Y(i.unstable_now())},xA)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Y){Y.callback=null},i.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<Y?Math.floor(1e3/Y):5},i.unstable_getCurrentPriorityLevel=function(){return M},i.unstable_next=function(Y){switch(M){case 1:case 2:case 3:var xA=3;break;default:xA=M}var EA=M;M=xA;try{return Y()}finally{M=EA}},i.unstable_requestPaint=function(){DA=!0},i.unstable_runWithPriority=function(Y,xA){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var EA=M;M=Y;try{return xA()}finally{M=EA}},i.unstable_scheduleCallback=function(Y,xA,EA){var PA=i.unstable_now();switch(typeof EA=="object"&&EA!==null?(EA=EA.delay,EA=typeof EA=="number"&&0<EA?PA+EA:PA):EA=PA,Y){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=EA+C,Y={id:v++,callback:xA,priorityLevel:Y,startTime:EA,expirationTime:C,sortIndex:-1},EA>PA?(Y.sortIndex=EA,r(B,Y),s(g)===null&&Y===s(B)&&(dA?(pA(OA),OA=-1):dA=!0,WA(bA,EA-PA))):(Y.sortIndex=C,r(g,Y),AA||oA||(AA=!0,G||(G=!0,QA()))),Y},i.unstable_shouldYield=_A,i.unstable_wrapCallback=function(Y){var xA=M;return function(){var EA=M;M=xA;try{return Y.apply(this,arguments)}finally{M=EA}}}}(pd)),pd}var tp;function NB(){return tp||(tp=1,gd.exports=HB()),gd.exports}var xd={exports:{}},St={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np;function MB(){if(np)return St;np=1;var i=lu();function r(g){var B="https://react.dev/errors/"+g;if(1<arguments.length){B+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)B+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+g+"; visit "+B+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(r(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},d=Symbol.for("react.portal");function u(g,B,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:S==null?null:""+S,children:g,containerInfo:B,implementation:v}}var f=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(g,B){if(g==="font")return"";if(typeof B=="string")return B==="use-credentials"?B:""}return St.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,St.createPortal=function(g,B){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!B||B.nodeType!==1&&B.nodeType!==9&&B.nodeType!==11)throw Error(r(299));return u(g,B,null,v)},St.flushSync=function(g){var B=f.T,v=o.p;try{if(f.T=null,o.p=2,g)return g()}finally{f.T=B,o.p=v,o.d.f()}},St.preconnect=function(g,B){typeof g=="string"&&(B?(B=B.crossOrigin,B=typeof B=="string"?B==="use-credentials"?B:"":void 0):B=null,o.d.C(g,B))},St.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},St.preinit=function(g,B){if(typeof g=="string"&&B&&typeof B.as=="string"){var v=B.as,S=x(v,B.crossOrigin),M=typeof B.integrity=="string"?B.integrity:void 0,oA=typeof B.fetchPriority=="string"?B.fetchPriority:void 0;v==="style"?o.d.S(g,typeof B.precedence=="string"?B.precedence:void 0,{crossOrigin:S,integrity:M,fetchPriority:oA}):v==="script"&&o.d.X(g,{crossOrigin:S,integrity:M,fetchPriority:oA,nonce:typeof B.nonce=="string"?B.nonce:void 0})}},St.preinitModule=function(g,B){if(typeof g=="string")if(typeof B=="object"&&B!==null){if(B.as==null||B.as==="script"){var v=x(B.as,B.crossOrigin);o.d.M(g,{crossOrigin:v,integrity:typeof B.integrity=="string"?B.integrity:void 0,nonce:typeof B.nonce=="string"?B.nonce:void 0})}}else B==null&&o.d.M(g)},St.preload=function(g,B){if(typeof g=="string"&&typeof B=="object"&&B!==null&&typeof B.as=="string"){var v=B.as,S=x(v,B.crossOrigin);o.d.L(g,v,{crossOrigin:S,integrity:typeof B.integrity=="string"?B.integrity:void 0,nonce:typeof B.nonce=="string"?B.nonce:void 0,type:typeof B.type=="string"?B.type:void 0,fetchPriority:typeof B.fetchPriority=="string"?B.fetchPriority:void 0,referrerPolicy:typeof B.referrerPolicy=="string"?B.referrerPolicy:void 0,imageSrcSet:typeof B.imageSrcSet=="string"?B.imageSrcSet:void 0,imageSizes:typeof B.imageSizes=="string"?B.imageSizes:void 0,media:typeof B.media=="string"?B.media:void 0})}},St.preloadModule=function(g,B){if(typeof g=="string")if(B){var v=x(B.as,B.crossOrigin);o.d.m(g,{as:typeof B.as=="string"&&B.as!=="script"?B.as:void 0,crossOrigin:v,integrity:typeof B.integrity=="string"?B.integrity:void 0})}else o.d.m(g)},St.requestFormReset=function(g){o.d.r(g)},St.unstable_batchedUpdates=function(g,B){return g(B)},St.useFormState=function(g,B,v){return f.H.useFormState(g,B,v)},St.useFormStatus=function(){return f.H.useHostTransitionStatus()},St.version="19.1.0",St}var ap;function DB(){if(ap)return xd.exports;ap=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),xd.exports=MB(),xd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rp;function TB(){if(rp)return Di;rp=1;var i=NB(),r=lu(),s=DB();function o(A){var e="https://react.dev/errors/"+A;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+A+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)}function u(A){var e=A,t=A;if(A.alternate)for(;e.return;)e=e.return;else{A=e;do e=A,(e.flags&4098)!==0&&(t=e.return),A=e.return;while(A)}return e.tag===3?t:null}function f(A){if(A.tag===13){var e=A.memoizedState;if(e===null&&(A=A.alternate,A!==null&&(e=A.memoizedState)),e!==null)return e.dehydrated}return null}function x(A){if(u(A)!==A)throw Error(o(188))}function g(A){var e=A.alternate;if(!e){if(e=u(A),e===null)throw Error(o(188));return e!==A?null:A}for(var t=A,a=e;;){var l=t.return;if(l===null)break;var c=l.alternate;if(c===null){if(a=l.return,a!==null){t=a;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===t)return x(l),A;if(c===a)return x(l),e;c=c.sibling}throw Error(o(188))}if(t.return!==a.return)t=l,a=c;else{for(var h=!1,w=l.child;w;){if(w===t){h=!0,t=l,a=c;break}if(w===a){h=!0,a=l,t=c;break}w=w.sibling}if(!h){for(w=c.child;w;){if(w===t){h=!0,t=c,a=l;break}if(w===a){h=!0,a=c,t=l;break}w=w.sibling}if(!h)throw Error(o(189))}}if(t.alternate!==a)throw Error(o(190))}if(t.tag!==3)throw Error(o(188));return t.stateNode.current===t?A:e}function B(A){var e=A.tag;if(e===5||e===26||e===27||e===6)return A;for(A=A.child;A!==null;){if(e=B(A),e!==null)return e;A=A.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),oA=Symbol.for("react.portal"),AA=Symbol.for("react.fragment"),dA=Symbol.for("react.strict_mode"),DA=Symbol.for("react.profiler"),NA=Symbol.for("react.provider"),pA=Symbol.for("react.consumer"),JA=Symbol.for("react.context"),mA=Symbol.for("react.forward_ref"),bA=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),OA=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),lA=Symbol.for("react.activity"),_A=Symbol.for("react.memo_cache_sentinel"),XA=Symbol.iterator;function QA(A){return A===null||typeof A!="object"?null:(A=XA&&A[XA]||A["@@iterator"],typeof A=="function"?A:null)}var LA=Symbol.for("react.client.reference");function qA(A){if(A==null)return null;if(typeof A=="function")return A.$$typeof===LA?null:A.displayName||A.name||null;if(typeof A=="string")return A;switch(A){case AA:return"Fragment";case DA:return"Profiler";case dA:return"StrictMode";case bA:return"Suspense";case G:return"SuspenseList";case lA:return"Activity"}if(typeof A=="object")switch(A.$$typeof){case oA:return"Portal";case JA:return(A.displayName||"Context")+".Provider";case pA:return(A._context.displayName||"Context")+".Consumer";case mA:var e=A.render;return A=A.displayName,A||(A=e.displayName||e.name||"",A=A!==""?"ForwardRef("+A+")":"ForwardRef"),A;case OA:return e=A.displayName||null,e!==null?e:qA(A.type)||"Memo";case V:e=A._payload,A=A._init;try{return qA(A(e))}catch{}}return null}var WA=Array.isArray,Y=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,xA=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,EA={pending:!1,data:null,method:null,action:null},PA=[],C=-1;function Z(A){return{current:A}}function gA(A){0>C||(A.current=PA[C],PA[C]=null,C--)}function hA(A,e){C++,PA[C]=A.current,A.current=e}var jA=Z(null),YA=Z(null),L=Z(null),TA=Z(null);function kA(A,e){switch(hA(L,e),hA(YA,A),hA(jA,null),e.nodeType){case 9:case 11:A=(A=e.documentElement)&&(A=A.namespaceURI)?Qg(A):0;break;default:if(A=e.tagName,e=e.namespaceURI)e=Qg(e),A=Ug(e,A);else switch(A){case"svg":A=1;break;case"math":A=2;break;default:A=0}}gA(jA),hA(jA,A)}function BA(){gA(jA),gA(YA),gA(L)}function z(A){A.memoizedState!==null&&hA(TA,A);var e=jA.current,t=Ug(e,A.type);e!==t&&(hA(YA,A),hA(jA,t))}function q(A){YA.current===A&&(gA(jA),gA(YA)),TA.current===A&&(gA(TA),ji._currentValue=EA)}var RA=Object.prototype.hasOwnProperty,FA=i.unstable_scheduleCallback,IA=i.unstable_cancelCallback,rA=i.unstable_shouldYield,ae=i.unstable_requestPaint,re=i.unstable_now,le=i.unstable_getCurrentPriorityLevel,we=i.unstable_ImmediatePriority,Ne=i.unstable_UserBlockingPriority,se=i.unstable_NormalPriority,Qe=i.unstable_LowPriority,lt=i.unstable_IdlePriority,We=i.log,nt=i.unstable_setDisableYieldValue,Te=null,xe=null;function K(A){if(typeof We=="function"&&nt(A),xe&&typeof xe.setStrictMode=="function")try{xe.setStrictMode(Te,A)}catch{}}var uA=Math.clz32?Math.clz32:sA,KA=Math.log,O=Math.LN2;function sA(A){return A>>>=0,A===0?32:31-(KA(A)/O|0)|0}var MA=256,fA=4194304;function CA(A){var e=A&42;if(e!==0)return e;switch(A&-A){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return A&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return A&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return A}}function de(A,e,t){var a=A.pendingLanes;if(a===0)return 0;var l=0,c=A.suspendedLanes,h=A.pingedLanes;A=A.warmLanes;var w=a&134217727;return w!==0?(a=w&~c,a!==0?l=CA(a):(h&=w,h!==0?l=CA(h):t||(t=w&~A,t!==0&&(l=CA(t))))):(w=a&~c,w!==0?l=CA(w):h!==0?l=CA(h):t||(t=a&~A,t!==0&&(l=CA(t)))),l===0?0:e!==0&&e!==l&&(e&c)===0&&(c=l&-l,t=e&-e,c>=t||c===32&&(t&4194048)!==0)?e:l}function Be(A,e){return(A.pendingLanes&~(A.suspendedLanes&~A.pingedLanes)&e)===0}function he(A,e){switch(A){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ge(){var A=MA;return MA<<=1,(MA&4194048)===0&&(MA=256),A}function ye(){var A=fA;return fA<<=1,(fA&62914560)===0&&(fA=4194304),A}function Se(A){for(var e=[],t=0;31>t;t++)e.push(A);return e}function _e(A,e){A.pendingLanes|=e,e!==268435456&&(A.suspendedLanes=0,A.pingedLanes=0,A.warmLanes=0)}function Ge(A,e,t,a,l,c){var h=A.pendingLanes;A.pendingLanes=t,A.suspendedLanes=0,A.pingedLanes=0,A.warmLanes=0,A.expiredLanes&=t,A.entangledLanes&=t,A.errorRecoveryDisabledLanes&=t,A.shellSuspendCounter=0;var w=A.entanglements,N=A.expirationTimes,eA=A.hiddenUpdates;for(t=h&~t;0<t;){var vA=31-uA(t),SA=1<<vA;w[vA]=0,N[vA]=-1;var tA=eA[vA];if(tA!==null)for(eA[vA]=null,vA=0;vA<tA.length;vA++){var aA=tA[vA];aA!==null&&(aA.lane&=-536870913)}t&=~SA}a!==0&&H(A,a,0),c!==0&&l===0&&A.tag!==0&&(A.suspendedLanes|=c&~(h&~e))}function H(A,e,t){A.pendingLanes|=e,A.suspendedLanes&=~e;var a=31-uA(e);A.entangledLanes|=e,A.entanglements[a]=A.entanglements[a]|1073741824|t&4194090}function wA(A,e){var t=A.entangledLanes|=e;for(A=A.entanglements;t;){var a=31-uA(t),l=1<<a;l&e|A[a]&e&&(A[a]|=e),t&=~l}}function HA(A){switch(A){case 2:A=1;break;case 8:A=4;break;case 32:A=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:A=128;break;case 268435456:A=134217728;break;default:A=0}return A}function GA(A){return A&=-A,2<A?8<A?(A&134217727)!==0?32:268435456:8:2}function j(){var A=xA.p;return A!==0?A:(A=window.event,A===void 0?32:Yg(A.type))}function nA(A,e){var t=xA.p;try{return xA.p=A,e()}finally{xA.p=t}}var y=Math.random().toString(36).slice(2),I="__reactFiber$"+y,_="__reactProps$"+y,b="__reactContainer$"+y,Q="__reactEvents$"+y,E="__reactListeners$"+y,D="__reactHandles$"+y,m="__reactResources$"+y,F="__reactMarker$"+y;function U(A){delete A[I],delete A[_],delete A[Q],delete A[E],delete A[D]}function $(A){var e=A[I];if(e)return e;for(var t=A.parentNode;t;){if(e=t[b]||t[I]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(A=Sg(A);A!==null;){if(t=A[I])return t;A=Sg(A)}return e}A=t,t=A.parentNode}return null}function W(A){if(A=A[I]||A[b]){var e=A.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return A}return null}function zA(A){var e=A.tag;if(e===5||e===26||e===27||e===6)return A.stateNode;throw Error(o(33))}function iA(A){var e=A[m];return e||(e=A[m]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function p(A){A[F]=!0}var T=new Set,X={};function yA(A,e){cA(A,e),cA(A+"Capture",e)}function cA(A,e){for(X[A]=e,A=0;A<e.length;A++)T.add(e[A])}var $A=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ZA={},Ae={};function ke(A){return RA.call(Ae,A)?!0:RA.call(ZA,A)?!1:$A.test(A)?Ae[A]=!0:(ZA[A]=!0,!1)}function Ue(A,e,t){if(ke(e))if(t===null)A.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":A.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){A.removeAttribute(e);return}}A.setAttribute(e,""+t)}}function Je(A,e,t){if(t===null)A.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":A.removeAttribute(e);return}A.setAttribute(e,""+t)}}function ct(A,e,t,a){if(a===null)A.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":A.removeAttribute(t);return}A.setAttributeNS(e,t,""+a)}}var qe,xt;function at(A){if(qe===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);qe=e&&e[1]||"",xt=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qe+A+xt}var Ft=!1;function mt(A,e){if(!A||Ft)return"";Ft=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var SA=function(){throw Error()};if(Object.defineProperty(SA.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(SA,[])}catch(aA){var tA=aA}Reflect.construct(A,[],SA)}else{try{SA.call()}catch(aA){tA=aA}A.call(SA.prototype)}}else{try{throw Error()}catch(aA){tA=aA}(SA=A())&&typeof SA.catch=="function"&&SA.catch(function(){})}}catch(aA){if(aA&&tA&&typeof aA.stack=="string")return[aA.stack,tA.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=a.DetermineComponentFrameRoot(),h=c[0],w=c[1];if(h&&w){var N=h.split(`
`),eA=w.split(`
`);for(l=a=0;a<N.length&&!N[a].includes("DetermineComponentFrameRoot");)a++;for(;l<eA.length&&!eA[l].includes("DetermineComponentFrameRoot");)l++;if(a===N.length||l===eA.length)for(a=N.length-1,l=eA.length-1;1<=a&&0<=l&&N[a]!==eA[l];)l--;for(;1<=a&&0<=l;a--,l--)if(N[a]!==eA[l]){if(a!==1||l!==1)do if(a--,l--,0>l||N[a]!==eA[l]){var vA=`
`+N[a].replace(" at new "," at ");return A.displayName&&vA.includes("<anonymous>")&&(vA=vA.replace("<anonymous>",A.displayName)),vA}while(1<=a&&0<=l);break}}}finally{Ft=!1,Error.prepareStackTrace=t}return(t=A?A.displayName||A.name:"")?at(t):""}function zr(A){switch(A.tag){case 26:case 27:case 5:return at(A.type);case 16:return at("Lazy");case 13:return at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return mt(A.type,!1);case 11:return mt(A.type.render,!1);case 1:return mt(A.type,!0);case 31:return at("Activity");default:return""}}function Gn(A){try{var e="";do e+=zr(A),A=A.return;while(A);return e}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function Jt(A){switch(typeof A){case"bigint":case"boolean":case"number":case"string":case"undefined":return A;case"object":return A;default:return""}}function Bu(A){var e=A.type;return(A=A.nodeName)&&A.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function y0(A){var e=Bu(A)?"checked":"value",t=Object.getOwnPropertyDescriptor(A.constructor.prototype,e),a=""+A[e];if(!A.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,c=t.set;return Object.defineProperty(A,e,{configurable:!0,get:function(){return l.call(this)},set:function(h){a=""+h,c.call(this,h)}}),Object.defineProperty(A,e,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(h){a=""+h},stopTracking:function(){A._valueTracker=null,delete A[e]}}}}function io(A){A._valueTracker||(A._valueTracker=y0(A))}function bu(A){if(!A)return!1;var e=A._valueTracker;if(!e)return!0;var t=e.getValue(),a="";return A&&(a=Bu(A)?A.checked?"true":"false":A.value),A=a,A!==t?(e.setValue(A),!0):!1}function oo(A){if(A=A||(typeof document<"u"?document:void 0),typeof A>"u")return null;try{return A.activeElement||A.body}catch{return A.body}}var v0=/[\n"\\]/g;function Zt(A){return A.replace(v0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ll(A,e,t,a,l,c,h,w){A.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?A.type=h:A.removeAttribute("type"),e!=null?h==="number"?(e===0&&A.value===""||A.value!=e)&&(A.value=""+Jt(e)):A.value!==""+Jt(e)&&(A.value=""+Jt(e)):h!=="submit"&&h!=="reset"||A.removeAttribute("value"),e!=null?cl(A,h,Jt(e)):t!=null?cl(A,h,Jt(t)):a!=null&&A.removeAttribute("value"),l==null&&c!=null&&(A.defaultChecked=!!c),l!=null&&(A.checked=l&&typeof l!="function"&&typeof l!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?A.name=""+Jt(w):A.removeAttribute("name")}function wu(A,e,t,a,l,c,h,w){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(A.type=c),e!=null||t!=null){if(!(c!=="submit"&&c!=="reset"||e!=null))return;t=t!=null?""+Jt(t):"",e=e!=null?""+Jt(e):t,w||e===A.value||(A.value=e),A.defaultValue=e}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,A.checked=w?A.checked:!!a,A.defaultChecked=!!a,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(A.name=h)}function cl(A,e,t){e==="number"&&oo(A.ownerDocument)===A||A.defaultValue===""+t||(A.defaultValue=""+t)}function Xa(A,e,t,a){if(A=A.options,e){e={};for(var l=0;l<t.length;l++)e["$"+t[l]]=!0;for(t=0;t<A.length;t++)l=e.hasOwnProperty("$"+A[t].value),A[t].selected!==l&&(A[t].selected=l),l&&a&&(A[t].defaultSelected=!0)}else{for(t=""+Jt(t),e=null,l=0;l<A.length;l++){if(A[l].value===t){A[l].selected=!0,a&&(A[l].defaultSelected=!0);return}e!==null||A[l].disabled||(e=A[l])}e!==null&&(e.selected=!0)}}function yu(A,e,t){if(e!=null&&(e=""+Jt(e),e!==A.value&&(A.value=e),t==null)){A.defaultValue!==e&&(A.defaultValue=e);return}A.defaultValue=t!=null?""+Jt(t):""}function vu(A,e,t,a){if(e==null){if(a!=null){if(t!=null)throw Error(o(92));if(WA(a)){if(1<a.length)throw Error(o(93));a=a[0]}t=a}t==null&&(t=""),e=t}t=Jt(e),A.defaultValue=t,a=A.textContent,a===t&&a!==""&&a!==null&&(A.value=a)}function Va(A,e){if(e){var t=A.firstChild;if(t&&t===A.lastChild&&t.nodeType===3){t.nodeValue=e;return}}A.textContent=e}var C0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cu(A,e,t){var a=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?A.setProperty(e,""):e==="float"?A.cssFloat="":A[e]="":a?A.setProperty(e,t):typeof t!="number"||t===0||C0.has(e)?e==="float"?A.cssFloat=t:A[e]=(""+t).trim():A[e]=t+"px"}function Qu(A,e,t){if(e!=null&&typeof e!="object")throw Error(o(62));if(A=A.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?A.setProperty(a,""):a==="float"?A.cssFloat="":A[a]="");for(var l in e)a=e[l],e.hasOwnProperty(l)&&t[l]!==a&&Cu(A,l,a)}else for(var c in e)e.hasOwnProperty(c)&&Cu(A,c,e[c])}function dl(A){if(A.indexOf("-")===-1)return!1;switch(A){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Q0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),U0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function so(A){return U0.test(""+A)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":A}var ul=null;function fl(A){return A=A.target||A.srcElement||window,A.correspondingUseElement&&(A=A.correspondingUseElement),A.nodeType===3?A.parentNode:A}var Ja=null,Za=null;function Uu(A){var e=W(A);if(e&&(A=e.stateNode)){var t=A[_]||null;A:switch(A=e.stateNode,e.type){case"input":if(ll(A,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=A;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Zt(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var a=t[e];if(a!==A&&a.form===A.form){var l=a[_]||null;if(!l)throw Error(o(90));ll(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<t.length;e++)a=t[e],a.form===A.form&&bu(a)}break A;case"textarea":yu(A,t.value,t.defaultValue);break A;case"select":e=t.value,e!=null&&Xa(A,!!t.multiple,e,!1)}}}var hl=!1;function Eu(A,e,t){if(hl)return A(e,t);hl=!0;try{var a=A(e);return a}finally{if(hl=!1,(Ja!==null||Za!==null)&&(Jo(),Ja&&(e=Ja,A=Za,Za=Ja=null,Uu(e),A)))for(e=0;e<A.length;e++)Uu(A[e])}}function Rr(A,e){var t=A.stateNode;if(t===null)return null;var a=t[_]||null;if(a===null)return null;t=a[e];A:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(A=A.type,a=!(A==="button"||A==="input"||A==="select"||A==="textarea")),A=!a;break A;default:A=!1}if(A)return null;if(t&&typeof t!="function")throw Error(o(231,e,typeof t));return t}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gl=!1;if(Cn)try{var _r={};Object.defineProperty(_r,"passive",{get:function(){gl=!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{gl=!1}var Yn=null,pl=null,lo=null;function Fu(){if(lo)return lo;var A,e=pl,t=e.length,a,l="value"in Yn?Yn.value:Yn.textContent,c=l.length;for(A=0;A<t&&e[A]===l[A];A++);var h=t-A;for(a=1;a<=h&&e[t-a]===l[c-a];a++);return lo=l.slice(A,1<a?1-a:void 0)}function co(A){var e=A.keyCode;return"charCode"in A?(A=A.charCode,A===0&&e===13&&(A=13)):A=e,A===10&&(A=13),32<=A||A===13?A:0}function uo(){return!0}function ju(){return!1}function Dt(A){function e(t,a,l,c,h){this._reactName=t,this._targetInst=l,this.type=a,this.nativeEvent=c,this.target=h,this.currentTarget=null;for(var w in A)A.hasOwnProperty(w)&&(t=A[w],this[w]=t?t(c):c[w]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?uo:ju,this.isPropagationStopped=ju,this}return v(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),e}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(A){return A.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fo=Dt(Ca),Gr=v({},Ca,{view:0,detail:0}),E0=Dt(Gr),xl,ml,Yr,ho=v({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bl,button:0,buttons:0,relatedTarget:function(A){return A.relatedTarget===void 0?A.fromElement===A.srcElement?A.toElement:A.fromElement:A.relatedTarget},movementX:function(A){return"movementX"in A?A.movementX:(A!==Yr&&(Yr&&A.type==="mousemove"?(xl=A.screenX-Yr.screenX,ml=A.screenY-Yr.screenY):ml=xl=0,Yr=A),xl)},movementY:function(A){return"movementY"in A?A.movementY:ml}}),Su=Dt(ho),F0=v({},ho,{dataTransfer:0}),j0=Dt(F0),S0=v({},Gr,{relatedTarget:0}),Bl=Dt(S0),k0=v({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),H0=Dt(k0),N0=v({},Ca,{clipboardData:function(A){return"clipboardData"in A?A.clipboardData:window.clipboardData}}),M0=Dt(N0),D0=v({},Ca,{data:0}),ku=Dt(D0),T0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},L0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O0(A){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(A):(A=L0[A])?!!e[A]:!1}function bl(){return O0}var K0=v({},Gr,{key:function(A){if(A.key){var e=T0[A.key]||A.key;if(e!=="Unidentified")return e}return A.type==="keypress"?(A=co(A),A===13?"Enter":String.fromCharCode(A)):A.type==="keydown"||A.type==="keyup"?I0[A.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bl,charCode:function(A){return A.type==="keypress"?co(A):0},keyCode:function(A){return A.type==="keydown"||A.type==="keyup"?A.keyCode:0},which:function(A){return A.type==="keypress"?co(A):A.type==="keydown"||A.type==="keyup"?A.keyCode:0}}),z0=Dt(K0),R0=v({},ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hu=Dt(R0),_0=v({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bl}),G0=Dt(_0),Y0=v({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),X0=Dt(Y0),V0=v({},ho,{deltaX:function(A){return"deltaX"in A?A.deltaX:"wheelDeltaX"in A?-A.wheelDeltaX:0},deltaY:function(A){return"deltaY"in A?A.deltaY:"wheelDeltaY"in A?-A.wheelDeltaY:"wheelDelta"in A?-A.wheelDelta:0},deltaZ:0,deltaMode:0}),J0=Dt(V0),Z0=v({},Ca,{newState:0,oldState:0}),$0=Dt(Z0),W0=[9,13,27,32],wl=Cn&&"CompositionEvent"in window,Xr=null;Cn&&"documentMode"in document&&(Xr=document.documentMode);var q0=Cn&&"TextEvent"in window&&!Xr,Nu=Cn&&(!wl||Xr&&8<Xr&&11>=Xr),Mu=" ",Du=!1;function Tu(A,e){switch(A){case"keyup":return W0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iu(A){return A=A.detail,typeof A=="object"&&"data"in A?A.data:null}var $a=!1;function P0(A,e){switch(A){case"compositionend":return Iu(e);case"keypress":return e.which!==32?null:(Du=!0,Mu);case"textInput":return A=e.data,A===Mu&&Du?null:A;default:return null}}function Am(A,e){if($a)return A==="compositionend"||!wl&&Tu(A,e)?(A=Fu(),lo=pl=Yn=null,$a=!1,A):null;switch(A){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Nu&&e.locale!=="ko"?null:e.data;default:return null}}var em={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lu(A){var e=A&&A.nodeName&&A.nodeName.toLowerCase();return e==="input"?!!em[A.type]:e==="textarea"}function Ou(A,e,t,a){Ja?Za?Za.push(a):Za=[a]:Ja=a,e=As(e,"onChange"),0<e.length&&(t=new fo("onChange","change",null,t,a),A.push({event:t,listeners:e}))}var Vr=null,Jr=null;function tm(A){bg(A,0)}function go(A){var e=zA(A);if(bu(e))return A}function Ku(A,e){if(A==="change")return e}var zu=!1;if(Cn){var yl;if(Cn){var vl="oninput"in document;if(!vl){var Ru=document.createElement("div");Ru.setAttribute("oninput","return;"),vl=typeof Ru.oninput=="function"}yl=vl}else yl=!1;zu=yl&&(!document.documentMode||9<document.documentMode)}function _u(){Vr&&(Vr.detachEvent("onpropertychange",Gu),Jr=Vr=null)}function Gu(A){if(A.propertyName==="value"&&go(Jr)){var e=[];Ou(e,Jr,A,fl(A)),Eu(tm,e)}}function nm(A,e,t){A==="focusin"?(_u(),Vr=e,Jr=t,Vr.attachEvent("onpropertychange",Gu)):A==="focusout"&&_u()}function am(A){if(A==="selectionchange"||A==="keyup"||A==="keydown")return go(Jr)}function rm(A,e){if(A==="click")return go(e)}function im(A,e){if(A==="input"||A==="change")return go(e)}function om(A,e){return A===e&&(A!==0||1/A===1/e)||A!==A&&e!==e}var Kt=typeof Object.is=="function"?Object.is:om;function Zr(A,e){if(Kt(A,e))return!0;if(typeof A!="object"||A===null||typeof e!="object"||e===null)return!1;var t=Object.keys(A),a=Object.keys(e);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var l=t[a];if(!RA.call(e,l)||!Kt(A[l],e[l]))return!1}return!0}function Yu(A){for(;A&&A.firstChild;)A=A.firstChild;return A}function Xu(A,e){var t=Yu(A);A=0;for(var a;t;){if(t.nodeType===3){if(a=A+t.textContent.length,A<=e&&a>=e)return{node:t,offset:e-A};A=a}A:{for(;t;){if(t.nextSibling){t=t.nextSibling;break A}t=t.parentNode}t=void 0}t=Yu(t)}}function Vu(A,e){return A&&e?A===e?!0:A&&A.nodeType===3?!1:e&&e.nodeType===3?Vu(A,e.parentNode):"contains"in A?A.contains(e):A.compareDocumentPosition?!!(A.compareDocumentPosition(e)&16):!1:!1}function Ju(A){A=A!=null&&A.ownerDocument!=null&&A.ownerDocument.defaultView!=null?A.ownerDocument.defaultView:window;for(var e=oo(A.document);e instanceof A.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)A=e.contentWindow;else break;e=oo(A.document)}return e}function Cl(A){var e=A&&A.nodeName&&A.nodeName.toLowerCase();return e&&(e==="input"&&(A.type==="text"||A.type==="search"||A.type==="tel"||A.type==="url"||A.type==="password")||e==="textarea"||A.contentEditable==="true")}var sm=Cn&&"documentMode"in document&&11>=document.documentMode,Wa=null,Ql=null,$r=null,Ul=!1;function Zu(A,e,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ul||Wa==null||Wa!==oo(a)||(a=Wa,"selectionStart"in a&&Cl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),$r&&Zr($r,a)||($r=a,a=As(Ql,"onSelect"),0<a.length&&(e=new fo("onSelect","select",null,e,t),A.push({event:e,listeners:a}),e.target=Wa)))}function Qa(A,e){var t={};return t[A.toLowerCase()]=e.toLowerCase(),t["Webkit"+A]="webkit"+e,t["Moz"+A]="moz"+e,t}var qa={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},El={},$u={};Cn&&($u=document.createElement("div").style,"AnimationEvent"in window||(delete qa.animationend.animation,delete qa.animationiteration.animation,delete qa.animationstart.animation),"TransitionEvent"in window||delete qa.transitionend.transition);function Ua(A){if(El[A])return El[A];if(!qa[A])return A;var e=qa[A],t;for(t in e)if(e.hasOwnProperty(t)&&t in $u)return El[A]=e[t];return A}var Wu=Ua("animationend"),qu=Ua("animationiteration"),Pu=Ua("animationstart"),lm=Ua("transitionrun"),cm=Ua("transitionstart"),dm=Ua("transitioncancel"),Af=Ua("transitionend"),ef=new Map,Fl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fl.push("scrollEnd");function sn(A,e){ef.set(A,e),yA(e,[A])}var tf=new WeakMap;function $t(A,e){if(typeof A=="object"&&A!==null){var t=tf.get(A);return t!==void 0?t:(e={value:A,source:e,stack:Gn(e)},tf.set(A,e),e)}return{value:A,source:e,stack:Gn(e)}}var Wt=[],Pa=0,jl=0;function po(){for(var A=Pa,e=jl=Pa=0;e<A;){var t=Wt[e];Wt[e++]=null;var a=Wt[e];Wt[e++]=null;var l=Wt[e];Wt[e++]=null;var c=Wt[e];if(Wt[e++]=null,a!==null&&l!==null){var h=a.pending;h===null?l.next=l:(l.next=h.next,h.next=l),a.pending=l}c!==0&&nf(t,l,c)}}function xo(A,e,t,a){Wt[Pa++]=A,Wt[Pa++]=e,Wt[Pa++]=t,Wt[Pa++]=a,jl|=a,A.lanes|=a,A=A.alternate,A!==null&&(A.lanes|=a)}function Sl(A,e,t,a){return xo(A,e,t,a),mo(A)}function Ar(A,e){return xo(A,null,null,e),mo(A)}function nf(A,e,t){A.lanes|=t;var a=A.alternate;a!==null&&(a.lanes|=t);for(var l=!1,c=A.return;c!==null;)c.childLanes|=t,a=c.alternate,a!==null&&(a.childLanes|=t),c.tag===22&&(A=c.stateNode,A===null||A._visibility&1||(l=!0)),A=c,c=c.return;return A.tag===3?(c=A.stateNode,l&&e!==null&&(l=31-uA(t),A=c.hiddenUpdates,a=A[l],a===null?A[l]=[e]:a.push(e),e.lane=t|536870912),c):null}function mo(A){if(50<wi)throw wi=0,Tc=null,Error(o(185));for(var e=A.return;e!==null;)A=e,e=A.return;return A.tag===3?A.stateNode:null}var er={};function um(A,e,t,a){this.tag=A,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(A,e,t,a){return new um(A,e,t,a)}function kl(A){return A=A.prototype,!(!A||!A.isReactComponent)}function Qn(A,e){var t=A.alternate;return t===null?(t=zt(A.tag,e,A.key,A.mode),t.elementType=A.elementType,t.type=A.type,t.stateNode=A.stateNode,t.alternate=A,A.alternate=t):(t.pendingProps=e,t.type=A.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=A.flags&65011712,t.childLanes=A.childLanes,t.lanes=A.lanes,t.child=A.child,t.memoizedProps=A.memoizedProps,t.memoizedState=A.memoizedState,t.updateQueue=A.updateQueue,e=A.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=A.sibling,t.index=A.index,t.ref=A.ref,t.refCleanup=A.refCleanup,t}function af(A,e){A.flags&=65011714;var t=A.alternate;return t===null?(A.childLanes=0,A.lanes=e,A.child=null,A.subtreeFlags=0,A.memoizedProps=null,A.memoizedState=null,A.updateQueue=null,A.dependencies=null,A.stateNode=null):(A.childLanes=t.childLanes,A.lanes=t.lanes,A.child=t.child,A.subtreeFlags=0,A.deletions=null,A.memoizedProps=t.memoizedProps,A.memoizedState=t.memoizedState,A.updateQueue=t.updateQueue,A.type=t.type,e=t.dependencies,A.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),A}function Bo(A,e,t,a,l,c){var h=0;if(a=A,typeof A=="function")kl(A)&&(h=1);else if(typeof A=="string")h=hB(A,t,jA.current)?26:A==="html"||A==="head"||A==="body"?27:5;else A:switch(A){case lA:return A=zt(31,t,e,l),A.elementType=lA,A.lanes=c,A;case AA:return Ea(t.children,l,c,e);case dA:h=8,l|=24;break;case DA:return A=zt(12,t,e,l|2),A.elementType=DA,A.lanes=c,A;case bA:return A=zt(13,t,e,l),A.elementType=bA,A.lanes=c,A;case G:return A=zt(19,t,e,l),A.elementType=G,A.lanes=c,A;default:if(typeof A=="object"&&A!==null)switch(A.$$typeof){case NA:case JA:h=10;break A;case pA:h=9;break A;case mA:h=11;break A;case OA:h=14;break A;case V:h=16,a=null;break A}h=29,t=Error(o(130,A===null?"null":typeof A,"")),a=null}return e=zt(h,t,e,l),e.elementType=A,e.type=a,e.lanes=c,e}function Ea(A,e,t,a){return A=zt(7,A,a,e),A.lanes=t,A}function Hl(A,e,t){return A=zt(6,A,null,e),A.lanes=t,A}function Nl(A,e,t){return e=zt(4,A.children!==null?A.children:[],A.key,e),e.lanes=t,e.stateNode={containerInfo:A.containerInfo,pendingChildren:null,implementation:A.implementation},e}var tr=[],nr=0,bo=null,wo=0,qt=[],Pt=0,Fa=null,Un=1,En="";function ja(A,e){tr[nr++]=wo,tr[nr++]=bo,bo=A,wo=e}function rf(A,e,t){qt[Pt++]=Un,qt[Pt++]=En,qt[Pt++]=Fa,Fa=A;var a=Un;A=En;var l=32-uA(a)-1;a&=~(1<<l),t+=1;var c=32-uA(e)+l;if(30<c){var h=l-l%5;c=(a&(1<<h)-1).toString(32),a>>=h,l-=h,Un=1<<32-uA(e)+l|t<<l|a,En=c+A}else Un=1<<c|t<<l|a,En=A}function Ml(A){A.return!==null&&(ja(A,1),rf(A,1,0))}function Dl(A){for(;A===bo;)bo=tr[--nr],tr[nr]=null,wo=tr[--nr],tr[nr]=null;for(;A===Fa;)Fa=qt[--Pt],qt[Pt]=null,En=qt[--Pt],qt[Pt]=null,Un=qt[--Pt],qt[Pt]=null}var Nt=null,et=null,Me=!1,Sa=null,fn=!1,Tl=Error(o(519));function ka(A){var e=Error(o(418,""));throw Pr($t(e,A)),Tl}function of(A){var e=A.stateNode,t=A.type,a=A.memoizedProps;switch(e[I]=A,e[_]=a,t){case"dialog":Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":case"embed":Ce("load",e);break;case"video":case"audio":for(t=0;t<vi.length;t++)Ce(vi[t],e);break;case"source":Ce("error",e);break;case"img":case"image":case"link":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"input":Ce("invalid",e),wu(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),io(e);break;case"select":Ce("invalid",e);break;case"textarea":Ce("invalid",e),vu(e,a.value,a.defaultValue,a.children),io(e)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||a.suppressHydrationWarning===!0||Cg(e.textContent,t)?(a.popover!=null&&(Ce("beforetoggle",e),Ce("toggle",e)),a.onScroll!=null&&Ce("scroll",e),a.onScrollEnd!=null&&Ce("scrollend",e),a.onClick!=null&&(e.onclick=es),e=!0):e=!1,e||ka(A)}function sf(A){for(Nt=A.return;Nt;)switch(Nt.tag){case 5:case 13:fn=!1;return;case 27:case 3:fn=!0;return;default:Nt=Nt.return}}function Wr(A){if(A!==Nt)return!1;if(!Me)return sf(A),Me=!0,!1;var e=A.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=A.type,t=!(t!=="form"&&t!=="button")||qc(A.type,A.memoizedProps)),t=!t),t&&et&&ka(A),sf(A),e===13){if(A=A.memoizedState,A=A!==null?A.dehydrated:null,!A)throw Error(o(317));A:{for(A=A.nextSibling,e=0;A;){if(A.nodeType===8)if(t=A.data,t==="/$"){if(e===0){et=cn(A.nextSibling);break A}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++;A=A.nextSibling}et=null}}else e===27?(e=et,oa(A.type)?(A=td,td=null,et=A):et=e):et=Nt?cn(A.stateNode.nextSibling):null;return!0}function qr(){et=Nt=null,Me=!1}function lf(){var A=Sa;return A!==null&&(Lt===null?Lt=A:Lt.push.apply(Lt,A),Sa=null),A}function Pr(A){Sa===null?Sa=[A]:Sa.push(A)}var Il=Z(null),Ha=null,Fn=null;function Xn(A,e,t){hA(Il,e._currentValue),e._currentValue=t}function jn(A){A._currentValue=Il.current,gA(Il)}function Ll(A,e,t){for(;A!==null;){var a=A.alternate;if((A.childLanes&e)!==e?(A.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),A===t)break;A=A.return}}function Ol(A,e,t,a){var l=A.child;for(l!==null&&(l.return=A);l!==null;){var c=l.dependencies;if(c!==null){var h=l.child;c=c.firstContext;A:for(;c!==null;){var w=c;c=l;for(var N=0;N<e.length;N++)if(w.context===e[N]){c.lanes|=t,w=c.alternate,w!==null&&(w.lanes|=t),Ll(c.return,t,A),a||(h=null);break A}c=w.next}}else if(l.tag===18){if(h=l.return,h===null)throw Error(o(341));h.lanes|=t,c=h.alternate,c!==null&&(c.lanes|=t),Ll(h,t,A),h=null}else h=l.child;if(h!==null)h.return=l;else for(h=l;h!==null;){if(h===A){h=null;break}if(l=h.sibling,l!==null){l.return=h.return,h=l;break}h=h.return}l=h}}function Ai(A,e,t,a){A=null;for(var l=e,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var h=l.alternate;if(h===null)throw Error(o(387));if(h=h.memoizedProps,h!==null){var w=l.type;Kt(l.pendingProps.value,h.value)||(A!==null?A.push(w):A=[w])}}else if(l===TA.current){if(h=l.alternate,h===null)throw Error(o(387));h.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(A!==null?A.push(ji):A=[ji])}l=l.return}A!==null&&Ol(e,A,t,a),e.flags|=262144}function yo(A){for(A=A.firstContext;A!==null;){if(!Kt(A.context._currentValue,A.memoizedValue))return!0;A=A.next}return!1}function Na(A){Ha=A,Fn=null,A=A.dependencies,A!==null&&(A.firstContext=null)}function jt(A){return cf(Ha,A)}function vo(A,e){return Ha===null&&Na(A),cf(A,e)}function cf(A,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},Fn===null){if(A===null)throw Error(o(308));Fn=e,A.dependencies={lanes:0,firstContext:e},A.flags|=524288}else Fn=Fn.next=e;return t}var fm=typeof AbortController<"u"?AbortController:function(){var A=[],e=this.signal={aborted:!1,addEventListener:function(t,a){A.push(a)}};this.abort=function(){e.aborted=!0,A.forEach(function(t){return t()})}},hm=i.unstable_scheduleCallback,gm=i.unstable_NormalPriority,ht={$$typeof:JA,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Kl(){return{controller:new fm,data:new Map,refCount:0}}function ei(A){A.refCount--,A.refCount===0&&hm(gm,function(){A.controller.abort()})}var ti=null,zl=0,ar=0,rr=null;function pm(A,e){if(ti===null){var t=ti=[];zl=0,ar=_c(),rr={status:"pending",value:void 0,then:function(a){t.push(a)}}}return zl++,e.then(df,df),e}function df(){if(--zl===0&&ti!==null){rr!==null&&(rr.status="fulfilled");var A=ti;ti=null,ar=0,rr=null;for(var e=0;e<A.length;e++)(0,A[e])()}}function xm(A,e){var t=[],a={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return A.then(function(){a.status="fulfilled",a.value=e;for(var l=0;l<t.length;l++)(0,t[l])(e)},function(l){for(a.status="rejected",a.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),a}var uf=Y.S;Y.S=function(A,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&pm(A,e),uf!==null&&uf(A,e)};var Ma=Z(null);function Rl(){var A=Ma.current;return A!==null?A:Xe.pooledCache}function Co(A,e){e===null?hA(Ma,Ma.current):hA(Ma,e.pool)}function ff(){var A=Rl();return A===null?null:{parent:ht._currentValue,pool:A}}var ni=Error(o(460)),hf=Error(o(474)),Qo=Error(o(542)),_l={then:function(){}};function gf(A){return A=A.status,A==="fulfilled"||A==="rejected"}function Uo(){}function pf(A,e,t){switch(t=A[t],t===void 0?A.push(e):t!==e&&(e.then(Uo,Uo),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw A=e.reason,mf(A),A;default:if(typeof e.status=="string")e.then(Uo,Uo);else{if(A=Xe,A!==null&&100<A.shellSuspendCounter)throw Error(o(482));A=e,A.status="pending",A.then(function(a){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=a}},function(a){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw A=e.reason,mf(A),A}throw ai=e,ni}}var ai=null;function xf(){if(ai===null)throw Error(o(459));var A=ai;return ai=null,A}function mf(A){if(A===ni||A===Qo)throw Error(o(483))}var Vn=!1;function Gl(A){A.updateQueue={baseState:A.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yl(A,e){A=A.updateQueue,e.updateQueue===A&&(e.updateQueue={baseState:A.baseState,firstBaseUpdate:A.firstBaseUpdate,lastBaseUpdate:A.lastBaseUpdate,shared:A.shared,callbacks:null})}function Jn(A){return{lane:A,tag:0,payload:null,callback:null,next:null}}function Zn(A,e,t){var a=A.updateQueue;if(a===null)return null;if(a=a.shared,(Ie&2)!==0){var l=a.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),a.pending=e,e=mo(A),nf(A,null,t),e}return xo(A,a,e,t),mo(A)}function ri(A,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var a=e.lanes;a&=A.pendingLanes,t|=a,e.lanes=t,wA(A,t)}}function Xl(A,e){var t=A.updateQueue,a=A.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var l=null,c=null;if(t=t.firstBaseUpdate,t!==null){do{var h={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};c===null?l=c=h:c=c.next=h,t=t.next}while(t!==null);c===null?l=c=e:c=c.next=e}else l=c=e;t={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:a.shared,callbacks:a.callbacks},A.updateQueue=t;return}A=t.lastBaseUpdate,A===null?t.firstBaseUpdate=e:A.next=e,t.lastBaseUpdate=e}var Vl=!1;function ii(){if(Vl){var A=rr;if(A!==null)throw A}}function oi(A,e,t,a){Vl=!1;var l=A.updateQueue;Vn=!1;var c=l.firstBaseUpdate,h=l.lastBaseUpdate,w=l.shared.pending;if(w!==null){l.shared.pending=null;var N=w,eA=N.next;N.next=null,h===null?c=eA:h.next=eA,h=N;var vA=A.alternate;vA!==null&&(vA=vA.updateQueue,w=vA.lastBaseUpdate,w!==h&&(w===null?vA.firstBaseUpdate=eA:w.next=eA,vA.lastBaseUpdate=N))}if(c!==null){var SA=l.baseState;h=0,vA=eA=N=null,w=c;do{var tA=w.lane&-536870913,aA=tA!==w.lane;if(aA?(je&tA)===tA:(a&tA)===tA){tA!==0&&tA===ar&&(Vl=!0),vA!==null&&(vA=vA.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});A:{var fe=A,ce=w;tA=e;var ze=t;switch(ce.tag){case 1:if(fe=ce.payload,typeof fe=="function"){SA=fe.call(ze,SA,tA);break A}SA=fe;break A;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=ce.payload,tA=typeof fe=="function"?fe.call(ze,SA,tA):fe,tA==null)break A;SA=v({},SA,tA);break A;case 2:Vn=!0}}tA=w.callback,tA!==null&&(A.flags|=64,aA&&(A.flags|=8192),aA=l.callbacks,aA===null?l.callbacks=[tA]:aA.push(tA))}else aA={lane:tA,tag:w.tag,payload:w.payload,callback:w.callback,next:null},vA===null?(eA=vA=aA,N=SA):vA=vA.next=aA,h|=tA;if(w=w.next,w===null){if(w=l.shared.pending,w===null)break;aA=w,w=aA.next,aA.next=null,l.lastBaseUpdate=aA,l.shared.pending=null}}while(!0);vA===null&&(N=SA),l.baseState=N,l.firstBaseUpdate=eA,l.lastBaseUpdate=vA,c===null&&(l.shared.lanes=0),na|=h,A.lanes=h,A.memoizedState=SA}}function Bf(A,e){if(typeof A!="function")throw Error(o(191,A));A.call(e)}function bf(A,e){var t=A.callbacks;if(t!==null)for(A.callbacks=null,A=0;A<t.length;A++)Bf(t[A],e)}var ir=Z(null),Eo=Z(0);function wf(A,e){A=Tn,hA(Eo,A),hA(ir,e),Tn=A|e.baseLanes}function Jl(){hA(Eo,Tn),hA(ir,ir.current)}function Zl(){Tn=Eo.current,gA(ir),gA(Eo)}var $n=0,me=null,Oe=null,dt=null,Fo=!1,or=!1,Da=!1,jo=0,si=0,sr=null,mm=0;function rt(){throw Error(o(321))}function $l(A,e){if(e===null)return!1;for(var t=0;t<e.length&&t<A.length;t++)if(!Kt(A[t],e[t]))return!1;return!0}function Wl(A,e,t,a,l,c){return $n=c,me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Y.H=A===null||A.memoizedState===null?ah:rh,Da=!1,c=t(a,l),Da=!1,or&&(c=vf(e,t,a,l)),yf(A),c}function yf(A){Y.H=Do;var e=Oe!==null&&Oe.next!==null;if($n=0,dt=Oe=me=null,Fo=!1,si=0,sr=null,e)throw Error(o(300));A===null||Bt||(A=A.dependencies,A!==null&&yo(A)&&(Bt=!0))}function vf(A,e,t,a){me=A;var l=0;do{if(or&&(sr=null),si=0,or=!1,25<=l)throw Error(o(301));if(l+=1,dt=Oe=null,A.updateQueue!=null){var c=A.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Y.H=Qm,c=e(t,a)}while(or);return c}function Bm(){var A=Y.H,e=A.useState()[0];return e=typeof e.then=="function"?li(e):e,A=A.useState()[0],(Oe!==null?Oe.memoizedState:null)!==A&&(me.flags|=1024),e}function ql(){var A=jo!==0;return jo=0,A}function Pl(A,e,t){e.updateQueue=A.updateQueue,e.flags&=-2053,A.lanes&=~t}function Ac(A){if(Fo){for(A=A.memoizedState;A!==null;){var e=A.queue;e!==null&&(e.pending=null),A=A.next}Fo=!1}$n=0,dt=Oe=me=null,or=!1,si=jo=0,sr=null}function Tt(){var A={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?me.memoizedState=dt=A:dt=dt.next=A,dt}function ut(){if(Oe===null){var A=me.alternate;A=A!==null?A.memoizedState:null}else A=Oe.next;var e=dt===null?me.memoizedState:dt.next;if(e!==null)dt=e,Oe=A;else{if(A===null)throw me.alternate===null?Error(o(467)):Error(o(310));Oe=A,A={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},dt===null?me.memoizedState=dt=A:dt=dt.next=A}return dt}function ec(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function li(A){var e=si;return si+=1,sr===null&&(sr=[]),A=pf(sr,A,e),e=me,(dt===null?e.memoizedState:dt.next)===null&&(e=e.alternate,Y.H=e===null||e.memoizedState===null?ah:rh),A}function So(A){if(A!==null&&typeof A=="object"){if(typeof A.then=="function")return li(A);if(A.$$typeof===JA)return jt(A)}throw Error(o(438,String(A)))}function tc(A){var e=null,t=me.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var a=me.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=ec(),me.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(A),a=0;a<A;a++)t[a]=_A;return e.index++,t}function Sn(A,e){return typeof e=="function"?e(A):e}function ko(A){var e=ut();return nc(e,Oe,A)}function nc(A,e,t){var a=A.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var l=A.baseQueue,c=a.pending;if(c!==null){if(l!==null){var h=l.next;l.next=c.next,c.next=h}e.baseQueue=l=c,a.pending=null}if(c=A.baseState,l===null)A.memoizedState=c;else{e=l.next;var w=h=null,N=null,eA=e,vA=!1;do{var SA=eA.lane&-536870913;if(SA!==eA.lane?(je&SA)===SA:($n&SA)===SA){var tA=eA.revertLane;if(tA===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:eA.action,hasEagerState:eA.hasEagerState,eagerState:eA.eagerState,next:null}),SA===ar&&(vA=!0);else if(($n&tA)===tA){eA=eA.next,tA===ar&&(vA=!0);continue}else SA={lane:0,revertLane:eA.revertLane,action:eA.action,hasEagerState:eA.hasEagerState,eagerState:eA.eagerState,next:null},N===null?(w=N=SA,h=c):N=N.next=SA,me.lanes|=tA,na|=tA;SA=eA.action,Da&&t(c,SA),c=eA.hasEagerState?eA.eagerState:t(c,SA)}else tA={lane:SA,revertLane:eA.revertLane,action:eA.action,hasEagerState:eA.hasEagerState,eagerState:eA.eagerState,next:null},N===null?(w=N=tA,h=c):N=N.next=tA,me.lanes|=SA,na|=SA;eA=eA.next}while(eA!==null&&eA!==e);if(N===null?h=c:N.next=w,!Kt(c,A.memoizedState)&&(Bt=!0,vA&&(t=rr,t!==null)))throw t;A.memoizedState=c,A.baseState=h,A.baseQueue=N,a.lastRenderedState=c}return l===null&&(a.lanes=0),[A.memoizedState,a.dispatch]}function ac(A){var e=ut(),t=e.queue;if(t===null)throw Error(o(311));t.lastRenderedReducer=A;var a=t.dispatch,l=t.pending,c=e.memoizedState;if(l!==null){t.pending=null;var h=l=l.next;do c=A(c,h.action),h=h.next;while(h!==l);Kt(c,e.memoizedState)||(Bt=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),t.lastRenderedState=c}return[c,a]}function Cf(A,e,t){var a=me,l=ut(),c=Me;if(c){if(t===void 0)throw Error(o(407));t=t()}else t=e();var h=!Kt((Oe||l).memoizedState,t);h&&(l.memoizedState=t,Bt=!0),l=l.queue;var w=Ef.bind(null,a,l,A);if(ci(2048,8,w,[A]),l.getSnapshot!==e||h||dt!==null&&dt.memoizedState.tag&1){if(a.flags|=2048,lr(9,Ho(),Uf.bind(null,a,l,t,e),null),Xe===null)throw Error(o(349));c||($n&124)!==0||Qf(a,e,t)}return t}function Qf(A,e,t){A.flags|=16384,A={getSnapshot:e,value:t},e=me.updateQueue,e===null?(e=ec(),me.updateQueue=e,e.stores=[A]):(t=e.stores,t===null?e.stores=[A]:t.push(A))}function Uf(A,e,t,a){e.value=t,e.getSnapshot=a,Ff(e)&&jf(A)}function Ef(A,e,t){return t(function(){Ff(e)&&jf(A)})}function Ff(A){var e=A.getSnapshot;A=A.value;try{var t=e();return!Kt(A,t)}catch{return!0}}function jf(A){var e=Ar(A,2);e!==null&&Xt(e,A,2)}function rc(A){var e=Tt();if(typeof A=="function"){var t=A;if(A=t(),Da){K(!0);try{t()}finally{K(!1)}}}return e.memoizedState=e.baseState=A,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:A},e}function Sf(A,e,t,a){return A.baseState=t,nc(A,Oe,typeof a=="function"?a:Sn)}function bm(A,e,t,a,l){if(Mo(A))throw Error(o(485));if(A=e.action,A!==null){var c={payload:l,action:A,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){c.listeners.push(h)}};Y.T!==null?t(!0):c.isTransition=!1,a(c),t=e.pending,t===null?(c.next=e.pending=c,kf(e,c)):(c.next=t.next,e.pending=t.next=c)}}function kf(A,e){var t=e.action,a=e.payload,l=A.state;if(e.isTransition){var c=Y.T,h={};Y.T=h;try{var w=t(l,a),N=Y.S;N!==null&&N(h,w),Hf(A,e,w)}catch(eA){ic(A,e,eA)}finally{Y.T=c}}else try{c=t(l,a),Hf(A,e,c)}catch(eA){ic(A,e,eA)}}function Hf(A,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){Nf(A,e,a)},function(a){return ic(A,e,a)}):Nf(A,e,t)}function Nf(A,e,t){e.status="fulfilled",e.value=t,Mf(e),A.state=t,e=A.pending,e!==null&&(t=e.next,t===e?A.pending=null:(t=t.next,e.next=t,kf(A,t)))}function ic(A,e,t){var a=A.pending;if(A.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=t,Mf(e),e=e.next;while(e!==a)}A.action=null}function Mf(A){A=A.listeners;for(var e=0;e<A.length;e++)(0,A[e])()}function Df(A,e){return e}function Tf(A,e){if(Me){var t=Xe.formState;if(t!==null){A:{var a=me;if(Me){if(et){e:{for(var l=et,c=fn;l.nodeType!==8;){if(!c){l=null;break e}if(l=cn(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){et=cn(l.nextSibling),a=l.data==="F!";break A}}ka(a)}a=!1}a&&(e=t[0])}}return t=Tt(),t.memoizedState=t.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Df,lastRenderedState:e},t.queue=a,t=eh.bind(null,me,a),a.dispatch=t,a=rc(!1),c=dc.bind(null,me,!1,a.queue),a=Tt(),l={state:e,dispatch:null,action:A,pending:null},a.queue=l,t=bm.bind(null,me,l,c,t),l.dispatch=t,a.memoizedState=A,[e,t,!1]}function If(A){var e=ut();return Lf(e,Oe,A)}function Lf(A,e,t){if(e=nc(A,e,Df)[0],A=ko(Sn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=li(e)}catch(h){throw h===ni?Qo:h}else a=e;e=ut();var l=e.queue,c=l.dispatch;return t!==e.memoizedState&&(me.flags|=2048,lr(9,Ho(),wm.bind(null,l,t),null)),[a,c,A]}function wm(A,e){A.action=e}function Of(A){var e=ut(),t=Oe;if(t!==null)return Lf(e,t,A);ut(),e=e.memoizedState,t=ut();var a=t.queue.dispatch;return t.memoizedState=A,[e,a,!1]}function lr(A,e,t,a){return A={tag:A,create:t,deps:a,inst:e,next:null},e=me.updateQueue,e===null&&(e=ec(),me.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=A.next=A:(a=t.next,t.next=A,A.next=a,e.lastEffect=A),A}function Ho(){return{destroy:void 0,resource:void 0}}function Kf(){return ut().memoizedState}function No(A,e,t,a){var l=Tt();a=a===void 0?null:a,me.flags|=A,l.memoizedState=lr(1|e,Ho(),t,a)}function ci(A,e,t,a){var l=ut();a=a===void 0?null:a;var c=l.memoizedState.inst;Oe!==null&&a!==null&&$l(a,Oe.memoizedState.deps)?l.memoizedState=lr(e,c,t,a):(me.flags|=A,l.memoizedState=lr(1|e,c,t,a))}function zf(A,e){No(8390656,8,A,e)}function Rf(A,e){ci(2048,8,A,e)}function _f(A,e){return ci(4,2,A,e)}function Gf(A,e){return ci(4,4,A,e)}function Yf(A,e){if(typeof e=="function"){A=A();var t=e(A);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return A=A(),e.current=A,function(){e.current=null}}function Xf(A,e,t){t=t!=null?t.concat([A]):null,ci(4,4,Yf.bind(null,e,A),t)}function oc(){}function Vf(A,e){var t=ut();e=e===void 0?null:e;var a=t.memoizedState;return e!==null&&$l(e,a[1])?a[0]:(t.memoizedState=[A,e],A)}function Jf(A,e){var t=ut();e=e===void 0?null:e;var a=t.memoizedState;if(e!==null&&$l(e,a[1]))return a[0];if(a=A(),Da){K(!0);try{A()}finally{K(!1)}}return t.memoizedState=[a,e],a}function sc(A,e,t){return t===void 0||($n&1073741824)!==0?A.memoizedState=e:(A.memoizedState=t,A=Wh(),me.lanes|=A,na|=A,t)}function Zf(A,e,t,a){return Kt(t,e)?t:ir.current!==null?(A=sc(A,t,a),Kt(A,e)||(Bt=!0),A):($n&42)===0?(Bt=!0,A.memoizedState=t):(A=Wh(),me.lanes|=A,na|=A,e)}function $f(A,e,t,a,l){var c=xA.p;xA.p=c!==0&&8>c?c:8;var h=Y.T,w={};Y.T=w,dc(A,!1,e,t);try{var N=l(),eA=Y.S;if(eA!==null&&eA(w,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var vA=xm(N,a);di(A,e,vA,Yt(A))}else di(A,e,a,Yt(A))}catch(SA){di(A,e,{then:function(){},status:"rejected",reason:SA},Yt())}finally{xA.p=c,Y.T=h}}function ym(){}function lc(A,e,t,a){if(A.tag!==5)throw Error(o(476));var l=Wf(A).queue;$f(A,l,e,EA,t===null?ym:function(){return qf(A),t(a)})}function Wf(A){var e=A.memoizedState;if(e!==null)return e;e={memoizedState:EA,baseState:EA,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:EA},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:t},next:null},A.memoizedState=e,A=A.alternate,A!==null&&(A.memoizedState=e),e}function qf(A){var e=Wf(A).next.queue;di(A,e,{},Yt())}function cc(){return jt(ji)}function Pf(){return ut().memoizedState}function Ah(){return ut().memoizedState}function vm(A){for(var e=A.return;e!==null;){switch(e.tag){case 24:case 3:var t=Yt();A=Jn(t);var a=Zn(e,A,t);a!==null&&(Xt(a,e,t),ri(a,e,t)),e={cache:Kl()},A.payload=e;return}e=e.return}}function Cm(A,e,t){var a=Yt();t={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},Mo(A)?th(e,t):(t=Sl(A,e,t,a),t!==null&&(Xt(t,A,a),nh(t,e,a)))}function eh(A,e,t){var a=Yt();di(A,e,t,a)}function di(A,e,t,a){var l={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(Mo(A))th(e,l);else{var c=A.alternate;if(A.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var h=e.lastRenderedState,w=c(h,t);if(l.hasEagerState=!0,l.eagerState=w,Kt(w,h))return xo(A,e,l,0),Xe===null&&po(),!1}catch{}finally{}if(t=Sl(A,e,l,a),t!==null)return Xt(t,A,a),nh(t,e,a),!0}return!1}function dc(A,e,t,a){if(a={lane:2,revertLane:_c(),action:a,hasEagerState:!1,eagerState:null,next:null},Mo(A)){if(e)throw Error(o(479))}else e=Sl(A,t,a,2),e!==null&&Xt(e,A,2)}function Mo(A){var e=A.alternate;return A===me||e!==null&&e===me}function th(A,e){or=Fo=!0;var t=A.pending;t===null?e.next=e:(e.next=t.next,t.next=e),A.pending=e}function nh(A,e,t){if((t&4194048)!==0){var a=e.lanes;a&=A.pendingLanes,t|=a,e.lanes=t,wA(A,t)}}var Do={readContext:jt,use:So,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useLayoutEffect:rt,useInsertionEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useSyncExternalStore:rt,useId:rt,useHostTransitionStatus:rt,useFormState:rt,useActionState:rt,useOptimistic:rt,useMemoCache:rt,useCacheRefresh:rt},ah={readContext:jt,use:So,useCallback:function(A,e){return Tt().memoizedState=[A,e===void 0?null:e],A},useContext:jt,useEffect:zf,useImperativeHandle:function(A,e,t){t=t!=null?t.concat([A]):null,No(4194308,4,Yf.bind(null,e,A),t)},useLayoutEffect:function(A,e){return No(4194308,4,A,e)},useInsertionEffect:function(A,e){No(4,2,A,e)},useMemo:function(A,e){var t=Tt();e=e===void 0?null:e;var a=A();if(Da){K(!0);try{A()}finally{K(!1)}}return t.memoizedState=[a,e],a},useReducer:function(A,e,t){var a=Tt();if(t!==void 0){var l=t(e);if(Da){K(!0);try{t(e)}finally{K(!1)}}}else l=e;return a.memoizedState=a.baseState=l,A={pending:null,lanes:0,dispatch:null,lastRenderedReducer:A,lastRenderedState:l},a.queue=A,A=A.dispatch=Cm.bind(null,me,A),[a.memoizedState,A]},useRef:function(A){var e=Tt();return A={current:A},e.memoizedState=A},useState:function(A){A=rc(A);var e=A.queue,t=eh.bind(null,me,e);return e.dispatch=t,[A.memoizedState,t]},useDebugValue:oc,useDeferredValue:function(A,e){var t=Tt();return sc(t,A,e)},useTransition:function(){var A=rc(!1);return A=$f.bind(null,me,A.queue,!0,!1),Tt().memoizedState=A,[!1,A]},useSyncExternalStore:function(A,e,t){var a=me,l=Tt();if(Me){if(t===void 0)throw Error(o(407));t=t()}else{if(t=e(),Xe===null)throw Error(o(349));(je&124)!==0||Qf(a,e,t)}l.memoizedState=t;var c={value:t,getSnapshot:e};return l.queue=c,zf(Ef.bind(null,a,c,A),[A]),a.flags|=2048,lr(9,Ho(),Uf.bind(null,a,c,t,e),null),t},useId:function(){var A=Tt(),e=Xe.identifierPrefix;if(Me){var t=En,a=Un;t=(a&~(1<<32-uA(a)-1)).toString(32)+t,e="«"+e+"R"+t,t=jo++,0<t&&(e+="H"+t.toString(32)),e+="»"}else t=mm++,e="«"+e+"r"+t.toString(32)+"»";return A.memoizedState=e},useHostTransitionStatus:cc,useFormState:Tf,useActionState:Tf,useOptimistic:function(A){var e=Tt();e.memoizedState=e.baseState=A;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=dc.bind(null,me,!0,t),t.dispatch=e,[A,e]},useMemoCache:tc,useCacheRefresh:function(){return Tt().memoizedState=vm.bind(null,me)}},rh={readContext:jt,use:So,useCallback:Vf,useContext:jt,useEffect:Rf,useImperativeHandle:Xf,useInsertionEffect:_f,useLayoutEffect:Gf,useMemo:Jf,useReducer:ko,useRef:Kf,useState:function(){return ko(Sn)},useDebugValue:oc,useDeferredValue:function(A,e){var t=ut();return Zf(t,Oe.memoizedState,A,e)},useTransition:function(){var A=ko(Sn)[0],e=ut().memoizedState;return[typeof A=="boolean"?A:li(A),e]},useSyncExternalStore:Cf,useId:Pf,useHostTransitionStatus:cc,useFormState:If,useActionState:If,useOptimistic:function(A,e){var t=ut();return Sf(t,Oe,A,e)},useMemoCache:tc,useCacheRefresh:Ah},Qm={readContext:jt,use:So,useCallback:Vf,useContext:jt,useEffect:Rf,useImperativeHandle:Xf,useInsertionEffect:_f,useLayoutEffect:Gf,useMemo:Jf,useReducer:ac,useRef:Kf,useState:function(){return ac(Sn)},useDebugValue:oc,useDeferredValue:function(A,e){var t=ut();return Oe===null?sc(t,A,e):Zf(t,Oe.memoizedState,A,e)},useTransition:function(){var A=ac(Sn)[0],e=ut().memoizedState;return[typeof A=="boolean"?A:li(A),e]},useSyncExternalStore:Cf,useId:Pf,useHostTransitionStatus:cc,useFormState:Of,useActionState:Of,useOptimistic:function(A,e){var t=ut();return Oe!==null?Sf(t,Oe,A,e):(t.baseState=A,[A,t.queue.dispatch])},useMemoCache:tc,useCacheRefresh:Ah},cr=null,ui=0;function To(A){var e=ui;return ui+=1,cr===null&&(cr=[]),pf(cr,A,e)}function fi(A,e){e=e.props.ref,A.ref=e!==void 0?e:null}function Io(A,e){throw e.$$typeof===S?Error(o(525)):(A=Object.prototype.toString.call(e),Error(o(31,A==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":A)))}function ih(A){var e=A._init;return e(A._payload)}function oh(A){function e(J,R){if(A){var P=J.deletions;P===null?(J.deletions=[R],J.flags|=16):P.push(R)}}function t(J,R){if(!A)return null;for(;R!==null;)e(J,R),R=R.sibling;return null}function a(J){for(var R=new Map;J!==null;)J.key!==null?R.set(J.key,J):R.set(J.index,J),J=J.sibling;return R}function l(J,R){return J=Qn(J,R),J.index=0,J.sibling=null,J}function c(J,R,P){return J.index=P,A?(P=J.alternate,P!==null?(P=P.index,P<R?(J.flags|=67108866,R):P):(J.flags|=67108866,R)):(J.flags|=1048576,R)}function h(J){return A&&J.alternate===null&&(J.flags|=67108866),J}function w(J,R,P,UA){return R===null||R.tag!==6?(R=Hl(P,J.mode,UA),R.return=J,R):(R=l(R,P),R.return=J,R)}function N(J,R,P,UA){var ne=P.type;return ne===AA?vA(J,R,P.props.children,UA,P.key):R!==null&&(R.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===V&&ih(ne)===R.type)?(R=l(R,P.props),fi(R,P),R.return=J,R):(R=Bo(P.type,P.key,P.props,null,J.mode,UA),fi(R,P),R.return=J,R)}function eA(J,R,P,UA){return R===null||R.tag!==4||R.stateNode.containerInfo!==P.containerInfo||R.stateNode.implementation!==P.implementation?(R=Nl(P,J.mode,UA),R.return=J,R):(R=l(R,P.children||[]),R.return=J,R)}function vA(J,R,P,UA,ne){return R===null||R.tag!==7?(R=Ea(P,J.mode,UA,ne),R.return=J,R):(R=l(R,P),R.return=J,R)}function SA(J,R,P){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=Hl(""+R,J.mode,P),R.return=J,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case M:return P=Bo(R.type,R.key,R.props,null,J.mode,P),fi(P,R),P.return=J,P;case oA:return R=Nl(R,J.mode,P),R.return=J,R;case V:var UA=R._init;return R=UA(R._payload),SA(J,R,P)}if(WA(R)||QA(R))return R=Ea(R,J.mode,P,null),R.return=J,R;if(typeof R.then=="function")return SA(J,To(R),P);if(R.$$typeof===JA)return SA(J,vo(J,R),P);Io(J,R)}return null}function tA(J,R,P,UA){var ne=R!==null?R.key:null;if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return ne!==null?null:w(J,R,""+P,UA);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case M:return P.key===ne?N(J,R,P,UA):null;case oA:return P.key===ne?eA(J,R,P,UA):null;case V:return ne=P._init,P=ne(P._payload),tA(J,R,P,UA)}if(WA(P)||QA(P))return ne!==null?null:vA(J,R,P,UA,null);if(typeof P.then=="function")return tA(J,R,To(P),UA);if(P.$$typeof===JA)return tA(J,R,vo(J,P),UA);Io(J,P)}return null}function aA(J,R,P,UA,ne){if(typeof UA=="string"&&UA!==""||typeof UA=="number"||typeof UA=="bigint")return J=J.get(P)||null,w(R,J,""+UA,ne);if(typeof UA=="object"&&UA!==null){switch(UA.$$typeof){case M:return J=J.get(UA.key===null?P:UA.key)||null,N(R,J,UA,ne);case oA:return J=J.get(UA.key===null?P:UA.key)||null,eA(R,J,UA,ne);case V:var be=UA._init;return UA=be(UA._payload),aA(J,R,P,UA,ne)}if(WA(UA)||QA(UA))return J=J.get(P)||null,vA(R,J,UA,ne,null);if(typeof UA.then=="function")return aA(J,R,P,To(UA),ne);if(UA.$$typeof===JA)return aA(J,R,P,vo(R,UA),ne);Io(R,UA)}return null}function fe(J,R,P,UA){for(var ne=null,be=null,ie=R,ue=R=0,wt=null;ie!==null&&ue<P.length;ue++){ie.index>ue?(wt=ie,ie=null):wt=ie.sibling;var He=tA(J,ie,P[ue],UA);if(He===null){ie===null&&(ie=wt);break}A&&ie&&He.alternate===null&&e(J,ie),R=c(He,R,ue),be===null?ne=He:be.sibling=He,be=He,ie=wt}if(ue===P.length)return t(J,ie),Me&&ja(J,ue),ne;if(ie===null){for(;ue<P.length;ue++)ie=SA(J,P[ue],UA),ie!==null&&(R=c(ie,R,ue),be===null?ne=ie:be.sibling=ie,be=ie);return Me&&ja(J,ue),ne}for(ie=a(ie);ue<P.length;ue++)wt=aA(ie,J,ue,P[ue],UA),wt!==null&&(A&&wt.alternate!==null&&ie.delete(wt.key===null?ue:wt.key),R=c(wt,R,ue),be===null?ne=wt:be.sibling=wt,be=wt);return A&&ie.forEach(function(ua){return e(J,ua)}),Me&&ja(J,ue),ne}function ce(J,R,P,UA){if(P==null)throw Error(o(151));for(var ne=null,be=null,ie=R,ue=R=0,wt=null,He=P.next();ie!==null&&!He.done;ue++,He=P.next()){ie.index>ue?(wt=ie,ie=null):wt=ie.sibling;var ua=tA(J,ie,He.value,UA);if(ua===null){ie===null&&(ie=wt);break}A&&ie&&ua.alternate===null&&e(J,ie),R=c(ua,R,ue),be===null?ne=ua:be.sibling=ua,be=ua,ie=wt}if(He.done)return t(J,ie),Me&&ja(J,ue),ne;if(ie===null){for(;!He.done;ue++,He=P.next())He=SA(J,He.value,UA),He!==null&&(R=c(He,R,ue),be===null?ne=He:be.sibling=He,be=He);return Me&&ja(J,ue),ne}for(ie=a(ie);!He.done;ue++,He=P.next())He=aA(ie,J,ue,He.value,UA),He!==null&&(A&&He.alternate!==null&&ie.delete(He.key===null?ue:He.key),R=c(He,R,ue),be===null?ne=He:be.sibling=He,be=He);return A&&ie.forEach(function(UB){return e(J,UB)}),Me&&ja(J,ue),ne}function ze(J,R,P,UA){if(typeof P=="object"&&P!==null&&P.type===AA&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case M:A:{for(var ne=P.key;R!==null;){if(R.key===ne){if(ne=P.type,ne===AA){if(R.tag===7){t(J,R.sibling),UA=l(R,P.props.children),UA.return=J,J=UA;break A}}else if(R.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===V&&ih(ne)===R.type){t(J,R.sibling),UA=l(R,P.props),fi(UA,P),UA.return=J,J=UA;break A}t(J,R);break}else e(J,R);R=R.sibling}P.type===AA?(UA=Ea(P.props.children,J.mode,UA,P.key),UA.return=J,J=UA):(UA=Bo(P.type,P.key,P.props,null,J.mode,UA),fi(UA,P),UA.return=J,J=UA)}return h(J);case oA:A:{for(ne=P.key;R!==null;){if(R.key===ne)if(R.tag===4&&R.stateNode.containerInfo===P.containerInfo&&R.stateNode.implementation===P.implementation){t(J,R.sibling),UA=l(R,P.children||[]),UA.return=J,J=UA;break A}else{t(J,R);break}else e(J,R);R=R.sibling}UA=Nl(P,J.mode,UA),UA.return=J,J=UA}return h(J);case V:return ne=P._init,P=ne(P._payload),ze(J,R,P,UA)}if(WA(P))return fe(J,R,P,UA);if(QA(P)){if(ne=QA(P),typeof ne!="function")throw Error(o(150));return P=ne.call(P),ce(J,R,P,UA)}if(typeof P.then=="function")return ze(J,R,To(P),UA);if(P.$$typeof===JA)return ze(J,R,vo(J,P),UA);Io(J,P)}return typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint"?(P=""+P,R!==null&&R.tag===6?(t(J,R.sibling),UA=l(R,P),UA.return=J,J=UA):(t(J,R),UA=Hl(P,J.mode,UA),UA.return=J,J=UA),h(J)):t(J,R)}return function(J,R,P,UA){try{ui=0;var ne=ze(J,R,P,UA);return cr=null,ne}catch(ie){if(ie===ni||ie===Qo)throw ie;var be=zt(29,ie,null,J.mode);return be.lanes=UA,be.return=J,be}finally{}}}var dr=oh(!0),sh=oh(!1),An=Z(null),hn=null;function Wn(A){var e=A.alternate;hA(gt,gt.current&1),hA(An,A),hn===null&&(e===null||ir.current!==null||e.memoizedState!==null)&&(hn=A)}function lh(A){if(A.tag===22){if(hA(gt,gt.current),hA(An,A),hn===null){var e=A.alternate;e!==null&&e.memoizedState!==null&&(hn=A)}}else qn()}function qn(){hA(gt,gt.current),hA(An,An.current)}function kn(A){gA(An),hn===A&&(hn=null),gA(gt)}var gt=Z(0);function Lo(A){for(var e=A;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||ed(t)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===A)break;for(;e.sibling===null;){if(e.return===null||e.return===A)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function uc(A,e,t,a){e=A.memoizedState,t=t(a,e),t=t==null?e:v({},e,t),A.memoizedState=t,A.lanes===0&&(A.updateQueue.baseState=t)}var fc={enqueueSetState:function(A,e,t){A=A._reactInternals;var a=Yt(),l=Jn(a);l.payload=e,t!=null&&(l.callback=t),e=Zn(A,l,a),e!==null&&(Xt(e,A,a),ri(e,A,a))},enqueueReplaceState:function(A,e,t){A=A._reactInternals;var a=Yt(),l=Jn(a);l.tag=1,l.payload=e,t!=null&&(l.callback=t),e=Zn(A,l,a),e!==null&&(Xt(e,A,a),ri(e,A,a))},enqueueForceUpdate:function(A,e){A=A._reactInternals;var t=Yt(),a=Jn(t);a.tag=2,e!=null&&(a.callback=e),e=Zn(A,a,t),e!==null&&(Xt(e,A,t),ri(e,A,t))}};function ch(A,e,t,a,l,c,h){return A=A.stateNode,typeof A.shouldComponentUpdate=="function"?A.shouldComponentUpdate(a,c,h):e.prototype&&e.prototype.isPureReactComponent?!Zr(t,a)||!Zr(l,c):!0}function dh(A,e,t,a){A=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,a),e.state!==A&&fc.enqueueReplaceState(e,e.state,null)}function Ta(A,e){var t=e;if("ref"in e){t={};for(var a in e)a!=="ref"&&(t[a]=e[a])}if(A=A.defaultProps){t===e&&(t=v({},t));for(var l in A)t[l]===void 0&&(t[l]=A[l])}return t}var Oo=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function uh(A){Oo(A)}function fh(A){console.error(A)}function hh(A){Oo(A)}function Ko(A,e){try{var t=A.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function gh(A,e,t){try{var a=A.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function hc(A,e,t){return t=Jn(t),t.tag=3,t.payload={element:null},t.callback=function(){Ko(A,e)},t}function ph(A){return A=Jn(A),A.tag=3,A}function xh(A,e,t,a){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=a.value;A.payload=function(){return l(c)},A.callback=function(){gh(e,t,a)}}var h=t.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(A.callback=function(){gh(e,t,a),typeof l!="function"&&(aa===null?aa=new Set([this]):aa.add(this));var w=a.stack;this.componentDidCatch(a.value,{componentStack:w!==null?w:""})})}function Um(A,e,t,a,l){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=t.alternate,e!==null&&Ai(e,t,l,!0),t=An.current,t!==null){switch(t.tag){case 13:return hn===null?Lc():t.alternate===null&&tt===0&&(tt=3),t.flags&=-257,t.flags|=65536,t.lanes=l,a===_l?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([a]):e.add(a),Kc(A,a,l)),!1;case 22:return t.flags|=65536,a===_l?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([a]):t.add(a)),Kc(A,a,l)),!1}throw Error(o(435,t.tag))}return Kc(A,a,l),Lc(),!1}if(Me)return e=An.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,a!==Tl&&(A=Error(o(422),{cause:a}),Pr($t(A,t)))):(a!==Tl&&(e=Error(o(423),{cause:a}),Pr($t(e,t))),A=A.current.alternate,A.flags|=65536,l&=-l,A.lanes|=l,a=$t(a,t),l=hc(A.stateNode,a,l),Xl(A,l),tt!==4&&(tt=2)),!1;var c=Error(o(520),{cause:a});if(c=$t(c,t),bi===null?bi=[c]:bi.push(c),tt!==4&&(tt=2),e===null)return!0;a=$t(a,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,A=l&-l,t.lanes|=A,A=hc(t.stateNode,a,A),Xl(t,A),!1;case 1:if(e=t.type,c=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(aa===null||!aa.has(c))))return t.flags|=65536,l&=-l,t.lanes|=l,l=ph(l),xh(l,A,t,a),Xl(t,l),!1}t=t.return}while(t!==null);return!1}var mh=Error(o(461)),Bt=!1;function vt(A,e,t,a){e.child=A===null?sh(e,null,t,a):dr(e,A.child,t,a)}function Bh(A,e,t,a,l){t=t.render;var c=e.ref;if("ref"in a){var h={};for(var w in a)w!=="ref"&&(h[w]=a[w])}else h=a;return Na(e),a=Wl(A,e,t,h,c,l),w=ql(),A!==null&&!Bt?(Pl(A,e,l),Hn(A,e,l)):(Me&&w&&Ml(e),e.flags|=1,vt(A,e,a,l),e.child)}function bh(A,e,t,a,l){if(A===null){var c=t.type;return typeof c=="function"&&!kl(c)&&c.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=c,wh(A,e,c,a,l)):(A=Bo(t.type,null,a,e,e.mode,l),A.ref=e.ref,A.return=e,e.child=A)}if(c=A.child,!yc(A,l)){var h=c.memoizedProps;if(t=t.compare,t=t!==null?t:Zr,t(h,a)&&A.ref===e.ref)return Hn(A,e,l)}return e.flags|=1,A=Qn(c,a),A.ref=e.ref,A.return=e,e.child=A}function wh(A,e,t,a,l){if(A!==null){var c=A.memoizedProps;if(Zr(c,a)&&A.ref===e.ref)if(Bt=!1,e.pendingProps=a=c,yc(A,l))(A.flags&131072)!==0&&(Bt=!0);else return e.lanes=A.lanes,Hn(A,e,l)}return gc(A,e,t,a,l)}function yh(A,e,t){var a=e.pendingProps,l=a.children,c=A!==null?A.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=c!==null?c.baseLanes|t:t,A!==null){for(l=e.child=A.child,c=0;l!==null;)c=c|l.lanes|l.childLanes,l=l.sibling;e.childLanes=c&~a}else e.childLanes=0,e.child=null;return vh(A,e,a,t)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},A!==null&&Co(e,c!==null?c.cachePool:null),c!==null?wf(e,c):Jl(),lh(e);else return e.lanes=e.childLanes=536870912,vh(A,e,c!==null?c.baseLanes|t:t,t)}else c!==null?(Co(e,c.cachePool),wf(e,c),qn(),e.memoizedState=null):(A!==null&&Co(e,null),Jl(),qn());return vt(A,e,l,t),e.child}function vh(A,e,t,a){var l=Rl();return l=l===null?null:{parent:ht._currentValue,pool:l},e.memoizedState={baseLanes:t,cachePool:l},A!==null&&Co(e,null),Jl(),lh(e),A!==null&&Ai(A,e,a,!0),null}function zo(A,e){var t=e.ref;if(t===null)A!==null&&A.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(o(284));(A===null||A.ref!==t)&&(e.flags|=4194816)}}function gc(A,e,t,a,l){return Na(e),t=Wl(A,e,t,a,void 0,l),a=ql(),A!==null&&!Bt?(Pl(A,e,l),Hn(A,e,l)):(Me&&a&&Ml(e),e.flags|=1,vt(A,e,t,l),e.child)}function Ch(A,e,t,a,l,c){return Na(e),e.updateQueue=null,t=vf(e,a,t,l),yf(A),a=ql(),A!==null&&!Bt?(Pl(A,e,c),Hn(A,e,c)):(Me&&a&&Ml(e),e.flags|=1,vt(A,e,t,c),e.child)}function Qh(A,e,t,a,l){if(Na(e),e.stateNode===null){var c=er,h=t.contextType;typeof h=="object"&&h!==null&&(c=jt(h)),c=new t(a,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=fc,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=a,c.state=e.memoizedState,c.refs={},Gl(e),h=t.contextType,c.context=typeof h=="object"&&h!==null?jt(h):er,c.state=e.memoizedState,h=t.getDerivedStateFromProps,typeof h=="function"&&(uc(e,t,h,a),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(h=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),h!==c.state&&fc.enqueueReplaceState(c,c.state,null),oi(e,a,c,l),ii(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(A===null){c=e.stateNode;var w=e.memoizedProps,N=Ta(t,w);c.props=N;var eA=c.context,vA=t.contextType;h=er,typeof vA=="object"&&vA!==null&&(h=jt(vA));var SA=t.getDerivedStateFromProps;vA=typeof SA=="function"||typeof c.getSnapshotBeforeUpdate=="function",w=e.pendingProps!==w,vA||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(w||eA!==h)&&dh(e,c,a,h),Vn=!1;var tA=e.memoizedState;c.state=tA,oi(e,a,c,l),ii(),eA=e.memoizedState,w||tA!==eA||Vn?(typeof SA=="function"&&(uc(e,t,SA,a),eA=e.memoizedState),(N=Vn||ch(e,t,N,a,tA,eA,h))?(vA||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=eA),c.props=a,c.state=eA,c.context=h,a=N):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{c=e.stateNode,Yl(A,e),h=e.memoizedProps,vA=Ta(t,h),c.props=vA,SA=e.pendingProps,tA=c.context,eA=t.contextType,N=er,typeof eA=="object"&&eA!==null&&(N=jt(eA)),w=t.getDerivedStateFromProps,(eA=typeof w=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h!==SA||tA!==N)&&dh(e,c,a,N),Vn=!1,tA=e.memoizedState,c.state=tA,oi(e,a,c,l),ii();var aA=e.memoizedState;h!==SA||tA!==aA||Vn||A!==null&&A.dependencies!==null&&yo(A.dependencies)?(typeof w=="function"&&(uc(e,t,w,a),aA=e.memoizedState),(vA=Vn||ch(e,t,vA,a,tA,aA,N)||A!==null&&A.dependencies!==null&&yo(A.dependencies))?(eA||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,aA,N),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,aA,N)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||h===A.memoizedProps&&tA===A.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===A.memoizedProps&&tA===A.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=aA),c.props=a,c.state=aA,c.context=N,a=vA):(typeof c.componentDidUpdate!="function"||h===A.memoizedProps&&tA===A.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===A.memoizedProps&&tA===A.memoizedState||(e.flags|=1024),a=!1)}return c=a,zo(A,e),a=(e.flags&128)!==0,c||a?(c=e.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,A!==null&&a?(e.child=dr(e,A.child,null,l),e.child=dr(e,null,t,l)):vt(A,e,t,l),e.memoizedState=c.state,A=e.child):A=Hn(A,e,l),A}function Uh(A,e,t,a){return qr(),e.flags|=256,vt(A,e,t,a),e.child}var pc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(A){return{baseLanes:A,cachePool:ff()}}function mc(A,e,t){return A=A!==null?A.childLanes&~t:0,e&&(A|=en),A}function Eh(A,e,t){var a=e.pendingProps,l=!1,c=(e.flags&128)!==0,h;if((h=c)||(h=A!==null&&A.memoizedState===null?!1:(gt.current&2)!==0),h&&(l=!0,e.flags&=-129),h=(e.flags&32)!==0,e.flags&=-33,A===null){if(Me){if(l?Wn(e):qn(),Me){var w=et,N;if(N=w){A:{for(N=w,w=fn;N.nodeType!==8;){if(!w){w=null;break A}if(N=cn(N.nextSibling),N===null){w=null;break A}}w=N}w!==null?(e.memoizedState={dehydrated:w,treeContext:Fa!==null?{id:Un,overflow:En}:null,retryLane:536870912,hydrationErrors:null},N=zt(18,null,null,0),N.stateNode=w,N.return=e,e.child=N,Nt=e,et=null,N=!0):N=!1}N||ka(e)}if(w=e.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return ed(w)?e.lanes=32:e.lanes=536870912,null;kn(e)}return w=a.children,a=a.fallback,l?(qn(),l=e.mode,w=Ro({mode:"hidden",children:w},l),a=Ea(a,l,t,null),w.return=e,a.return=e,w.sibling=a,e.child=w,l=e.child,l.memoizedState=xc(t),l.childLanes=mc(A,h,t),e.memoizedState=pc,a):(Wn(e),Bc(e,w))}if(N=A.memoizedState,N!==null&&(w=N.dehydrated,w!==null)){if(c)e.flags&256?(Wn(e),e.flags&=-257,e=bc(A,e,t)):e.memoizedState!==null?(qn(),e.child=A.child,e.flags|=128,e=null):(qn(),l=a.fallback,w=e.mode,a=Ro({mode:"visible",children:a.children},w),l=Ea(l,w,t,null),l.flags|=2,a.return=e,l.return=e,a.sibling=l,e.child=a,dr(e,A.child,null,t),a=e.child,a.memoizedState=xc(t),a.childLanes=mc(A,h,t),e.memoizedState=pc,e=l);else if(Wn(e),ed(w)){if(h=w.nextSibling&&w.nextSibling.dataset,h)var eA=h.dgst;h=eA,a=Error(o(419)),a.stack="",a.digest=h,Pr({value:a,source:null,stack:null}),e=bc(A,e,t)}else if(Bt||Ai(A,e,t,!1),h=(t&A.childLanes)!==0,Bt||h){if(h=Xe,h!==null&&(a=t&-t,a=(a&42)!==0?1:HA(a),a=(a&(h.suspendedLanes|t))!==0?0:a,a!==0&&a!==N.retryLane))throw N.retryLane=a,Ar(A,a),Xt(h,A,a),mh;w.data==="$?"||Lc(),e=bc(A,e,t)}else w.data==="$?"?(e.flags|=192,e.child=A.child,e=null):(A=N.treeContext,et=cn(w.nextSibling),Nt=e,Me=!0,Sa=null,fn=!1,A!==null&&(qt[Pt++]=Un,qt[Pt++]=En,qt[Pt++]=Fa,Un=A.id,En=A.overflow,Fa=e),e=Bc(e,a.children),e.flags|=4096);return e}return l?(qn(),l=a.fallback,w=e.mode,N=A.child,eA=N.sibling,a=Qn(N,{mode:"hidden",children:a.children}),a.subtreeFlags=N.subtreeFlags&65011712,eA!==null?l=Qn(eA,l):(l=Ea(l,w,t,null),l.flags|=2),l.return=e,a.return=e,a.sibling=l,e.child=a,a=l,l=e.child,w=A.child.memoizedState,w===null?w=xc(t):(N=w.cachePool,N!==null?(eA=ht._currentValue,N=N.parent!==eA?{parent:eA,pool:eA}:N):N=ff(),w={baseLanes:w.baseLanes|t,cachePool:N}),l.memoizedState=w,l.childLanes=mc(A,h,t),e.memoizedState=pc,a):(Wn(e),t=A.child,A=t.sibling,t=Qn(t,{mode:"visible",children:a.children}),t.return=e,t.sibling=null,A!==null&&(h=e.deletions,h===null?(e.deletions=[A],e.flags|=16):h.push(A)),e.child=t,e.memoizedState=null,t)}function Bc(A,e){return e=Ro({mode:"visible",children:e},A.mode),e.return=A,A.child=e}function Ro(A,e){return A=zt(22,A,null,e),A.lanes=0,A.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},A}function bc(A,e,t){return dr(e,A.child,null,t),A=Bc(e,e.pendingProps.children),A.flags|=2,e.memoizedState=null,A}function Fh(A,e,t){A.lanes|=e;var a=A.alternate;a!==null&&(a.lanes|=e),Ll(A.return,e,t)}function wc(A,e,t,a,l){var c=A.memoizedState;c===null?A.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:l}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=t,c.tailMode=l)}function jh(A,e,t){var a=e.pendingProps,l=a.revealOrder,c=a.tail;if(vt(A,e,a.children,t),a=gt.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(A!==null&&(A.flags&128)!==0)A:for(A=e.child;A!==null;){if(A.tag===13)A.memoizedState!==null&&Fh(A,t,e);else if(A.tag===19)Fh(A,t,e);else if(A.child!==null){A.child.return=A,A=A.child;continue}if(A===e)break A;for(;A.sibling===null;){if(A.return===null||A.return===e)break A;A=A.return}A.sibling.return=A.return,A=A.sibling}a&=1}switch(hA(gt,a),l){case"forwards":for(t=e.child,l=null;t!==null;)A=t.alternate,A!==null&&Lo(A)===null&&(l=t),t=t.sibling;t=l,t===null?(l=e.child,e.child=null):(l=t.sibling,t.sibling=null),wc(e,!1,l,t,c);break;case"backwards":for(t=null,l=e.child,e.child=null;l!==null;){if(A=l.alternate,A!==null&&Lo(A)===null){e.child=l;break}A=l.sibling,l.sibling=t,t=l,l=A}wc(e,!0,t,null,c);break;case"together":wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Hn(A,e,t){if(A!==null&&(e.dependencies=A.dependencies),na|=e.lanes,(t&e.childLanes)===0)if(A!==null){if(Ai(A,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(A!==null&&e.child!==A.child)throw Error(o(153));if(e.child!==null){for(A=e.child,t=Qn(A,A.pendingProps),e.child=t,t.return=e;A.sibling!==null;)A=A.sibling,t=t.sibling=Qn(A,A.pendingProps),t.return=e;t.sibling=null}return e.child}function yc(A,e){return(A.lanes&e)!==0?!0:(A=A.dependencies,!!(A!==null&&yo(A)))}function Em(A,e,t){switch(e.tag){case 3:kA(e,e.stateNode.containerInfo),Xn(e,ht,A.memoizedState.cache),qr();break;case 27:case 5:z(e);break;case 4:kA(e,e.stateNode.containerInfo);break;case 10:Xn(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(Wn(e),e.flags|=128,null):(t&e.child.childLanes)!==0?Eh(A,e,t):(Wn(e),A=Hn(A,e,t),A!==null?A.sibling:null);Wn(e);break;case 19:var l=(A.flags&128)!==0;if(a=(t&e.childLanes)!==0,a||(Ai(A,e,t,!1),a=(t&e.childLanes)!==0),l){if(a)return jh(A,e,t);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),hA(gt,gt.current),a)break;return null;case 22:case 23:return e.lanes=0,yh(A,e,t);case 24:Xn(e,ht,A.memoizedState.cache)}return Hn(A,e,t)}function Sh(A,e,t){if(A!==null)if(A.memoizedProps!==e.pendingProps)Bt=!0;else{if(!yc(A,t)&&(e.flags&128)===0)return Bt=!1,Em(A,e,t);Bt=(A.flags&131072)!==0}else Bt=!1,Me&&(e.flags&1048576)!==0&&rf(e,wo,e.index);switch(e.lanes=0,e.tag){case 16:A:{A=e.pendingProps;var a=e.elementType,l=a._init;if(a=l(a._payload),e.type=a,typeof a=="function")kl(a)?(A=Ta(a,A),e.tag=1,e=Qh(null,e,a,A,t)):(e.tag=0,e=gc(null,e,a,A,t));else{if(a!=null){if(l=a.$$typeof,l===mA){e.tag=11,e=Bh(null,e,a,A,t);break A}else if(l===OA){e.tag=14,e=bh(null,e,a,A,t);break A}}throw e=qA(a)||a,Error(o(306,e,""))}}return e;case 0:return gc(A,e,e.type,e.pendingProps,t);case 1:return a=e.type,l=Ta(a,e.pendingProps),Qh(A,e,a,l,t);case 3:A:{if(kA(e,e.stateNode.containerInfo),A===null)throw Error(o(387));a=e.pendingProps;var c=e.memoizedState;l=c.element,Yl(A,e),oi(e,a,null,t);var h=e.memoizedState;if(a=h.cache,Xn(e,ht,a),a!==c.cache&&Ol(e,[ht],t,!0),ii(),a=h.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:h.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=Uh(A,e,a,t);break A}else if(a!==l){l=$t(Error(o(424)),e),Pr(l),e=Uh(A,e,a,t);break A}else{switch(A=e.stateNode.containerInfo,A.nodeType){case 9:A=A.body;break;default:A=A.nodeName==="HTML"?A.ownerDocument.body:A}for(et=cn(A.firstChild),Nt=e,Me=!0,Sa=null,fn=!0,t=sh(e,null,a,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(qr(),a===l){e=Hn(A,e,t);break A}vt(A,e,a,t)}e=e.child}return e;case 26:return zo(A,e),A===null?(t=Mg(e.type,null,e.pendingProps,null))?e.memoizedState=t:Me||(t=e.type,A=e.pendingProps,a=ts(L.current).createElement(t),a[I]=e,a[_]=A,Qt(a,t,A),p(a),e.stateNode=a):e.memoizedState=Mg(e.type,A.memoizedProps,e.pendingProps,A.memoizedState),null;case 27:return z(e),A===null&&Me&&(a=e.stateNode=kg(e.type,e.pendingProps,L.current),Nt=e,fn=!0,l=et,oa(e.type)?(td=l,et=cn(a.firstChild)):et=l),vt(A,e,e.pendingProps.children,t),zo(A,e),A===null&&(e.flags|=4194304),e.child;case 5:return A===null&&Me&&((l=a=et)&&(a=eB(a,e.type,e.pendingProps,fn),a!==null?(e.stateNode=a,Nt=e,et=cn(a.firstChild),fn=!1,l=!0):l=!1),l||ka(e)),z(e),l=e.type,c=e.pendingProps,h=A!==null?A.memoizedProps:null,a=c.children,qc(l,c)?a=null:h!==null&&qc(l,h)&&(e.flags|=32),e.memoizedState!==null&&(l=Wl(A,e,Bm,null,null,t),ji._currentValue=l),zo(A,e),vt(A,e,a,t),e.child;case 6:return A===null&&Me&&((A=t=et)&&(t=tB(t,e.pendingProps,fn),t!==null?(e.stateNode=t,Nt=e,et=null,A=!0):A=!1),A||ka(e)),null;case 13:return Eh(A,e,t);case 4:return kA(e,e.stateNode.containerInfo),a=e.pendingProps,A===null?e.child=dr(e,null,a,t):vt(A,e,a,t),e.child;case 11:return Bh(A,e,e.type,e.pendingProps,t);case 7:return vt(A,e,e.pendingProps,t),e.child;case 8:return vt(A,e,e.pendingProps.children,t),e.child;case 12:return vt(A,e,e.pendingProps.children,t),e.child;case 10:return a=e.pendingProps,Xn(e,e.type,a.value),vt(A,e,a.children,t),e.child;case 9:return l=e.type._context,a=e.pendingProps.children,Na(e),l=jt(l),a=a(l),e.flags|=1,vt(A,e,a,t),e.child;case 14:return bh(A,e,e.type,e.pendingProps,t);case 15:return wh(A,e,e.type,e.pendingProps,t);case 19:return jh(A,e,t);case 31:return a=e.pendingProps,t=e.mode,a={mode:a.mode,children:a.children},A===null?(t=Ro(a,t),t.ref=e.ref,e.child=t,t.return=e,e=t):(t=Qn(A.child,a),t.ref=e.ref,e.child=t,t.return=e,e=t),e;case 22:return yh(A,e,t);case 24:return Na(e),a=jt(ht),A===null?(l=Rl(),l===null&&(l=Xe,c=Kl(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=t),l=c),e.memoizedState={parent:a,cache:l},Gl(e),Xn(e,ht,l)):((A.lanes&t)!==0&&(Yl(A,e),oi(e,null,null,t),ii()),l=A.memoizedState,c=e.memoizedState,l.parent!==a?(l={parent:a,cache:a},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),Xn(e,ht,a)):(a=c.cache,Xn(e,ht,a),a!==l.cache&&Ol(e,[ht],t,!0))),vt(A,e,e.pendingProps.children,t),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function Nn(A){A.flags|=4}function kh(A,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)A.flags&=-16777217;else if(A.flags|=16777216,!Og(e)){if(e=An.current,e!==null&&((je&4194048)===je?hn!==null:(je&62914560)!==je&&(je&536870912)===0||e!==hn))throw ai=_l,hf;A.flags|=8192}}function _o(A,e){e!==null&&(A.flags|=4),A.flags&16384&&(e=A.tag!==22?ye():536870912,A.lanes|=e,gr|=e)}function hi(A,e){if(!Me)switch(A.tailMode){case"hidden":e=A.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?A.tail=null:t.sibling=null;break;case"collapsed":t=A.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e||A.tail===null?A.tail=null:A.tail.sibling=null:a.sibling=null}}function Pe(A){var e=A.alternate!==null&&A.alternate.child===A.child,t=0,a=0;if(e)for(var l=A.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=A,l=l.sibling;else for(l=A.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=A,l=l.sibling;return A.subtreeFlags|=a,A.childLanes=t,e}function Fm(A,e,t){var a=e.pendingProps;switch(Dl(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(e),null;case 1:return Pe(e),null;case 3:return t=e.stateNode,a=null,A!==null&&(a=A.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),jn(ht),BA(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(A===null||A.child===null)&&(Wr(e)?Nn(e):A===null||A.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,lf())),Pe(e),null;case 26:return t=e.memoizedState,A===null?(Nn(e),t!==null?(Pe(e),kh(e,t)):(Pe(e),e.flags&=-16777217)):t?t!==A.memoizedState?(Nn(e),Pe(e),kh(e,t)):(Pe(e),e.flags&=-16777217):(A.memoizedProps!==a&&Nn(e),Pe(e),e.flags&=-16777217),null;case 27:q(e),t=L.current;var l=e.type;if(A!==null&&e.stateNode!=null)A.memoizedProps!==a&&Nn(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return Pe(e),null}A=jA.current,Wr(e)?of(e):(A=kg(l,a,t),e.stateNode=A,Nn(e))}return Pe(e),null;case 5:if(q(e),t=e.type,A!==null&&e.stateNode!=null)A.memoizedProps!==a&&Nn(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return Pe(e),null}if(A=jA.current,Wr(e))of(e);else{switch(l=ts(L.current),A){case 1:A=l.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:A=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":A=l.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":A=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":A=l.createElement("div"),A.innerHTML="<script><\/script>",A=A.removeChild(A.firstChild);break;case"select":A=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?A.multiple=!0:a.size&&(A.size=a.size);break;default:A=typeof a.is=="string"?l.createElement(t,{is:a.is}):l.createElement(t)}}A[I]=e,A[_]=a;A:for(l=e.child;l!==null;){if(l.tag===5||l.tag===6)A.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break A;for(;l.sibling===null;){if(l.return===null||l.return===e)break A;l=l.return}l.sibling.return=l.return,l=l.sibling}e.stateNode=A;A:switch(Qt(A,t,a),t){case"button":case"input":case"select":case"textarea":A=!!a.autoFocus;break A;case"img":A=!0;break A;default:A=!1}A&&Nn(e)}}return Pe(e),e.flags&=-16777217,null;case 6:if(A&&e.stateNode!=null)A.memoizedProps!==a&&Nn(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(o(166));if(A=L.current,Wr(e)){if(A=e.stateNode,t=e.memoizedProps,a=null,l=Nt,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}A[I]=e,A=!!(A.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||Cg(A.nodeValue,t)),A||ka(e)}else A=ts(A).createTextNode(a),A[I]=e,e.stateNode=A}return Pe(e),null;case 13:if(a=e.memoizedState,A===null||A.memoizedState!==null&&A.memoizedState.dehydrated!==null){if(l=Wr(e),a!==null&&a.dehydrated!==null){if(A===null){if(!l)throw Error(o(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[I]=e}else qr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Pe(e),l=!1}else l=lf(),A!==null&&A.memoizedState!==null&&(A.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(kn(e),e):(kn(e),null)}if(kn(e),(e.flags&128)!==0)return e.lanes=t,e;if(t=a!==null,A=A!==null&&A.memoizedState!==null,t){a=e.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var c=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==l&&(a.flags|=2048)}return t!==A&&t&&(e.child.flags|=8192),_o(e,e.updateQueue),Pe(e),null;case 4:return BA(),A===null&&Vc(e.stateNode.containerInfo),Pe(e),null;case 10:return jn(e.type),Pe(e),null;case 19:if(gA(gt),l=e.memoizedState,l===null)return Pe(e),null;if(a=(e.flags&128)!==0,c=l.rendering,c===null)if(a)hi(l,!1);else{if(tt!==0||A!==null&&(A.flags&128)!==0)for(A=e.child;A!==null;){if(c=Lo(A),c!==null){for(e.flags|=128,hi(l,!1),A=c.updateQueue,e.updateQueue=A,_o(e,A),e.subtreeFlags=0,A=t,t=e.child;t!==null;)af(t,A),t=t.sibling;return hA(gt,gt.current&1|2),e.child}A=A.sibling}l.tail!==null&&re()>Xo&&(e.flags|=128,a=!0,hi(l,!1),e.lanes=4194304)}else{if(!a)if(A=Lo(c),A!==null){if(e.flags|=128,a=!0,A=A.updateQueue,e.updateQueue=A,_o(e,A),hi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!Me)return Pe(e),null}else 2*re()-l.renderingStartTime>Xo&&t!==536870912&&(e.flags|=128,a=!0,hi(l,!1),e.lanes=4194304);l.isBackwards?(c.sibling=e.child,e.child=c):(A=l.last,A!==null?A.sibling=c:e.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=re(),e.sibling=null,A=gt.current,hA(gt,a?A&1|2:A&1),e):(Pe(e),null);case 22:case 23:return kn(e),Zl(),a=e.memoizedState!==null,A!==null?A.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(t&536870912)!==0&&(e.flags&128)===0&&(Pe(e),e.subtreeFlags&6&&(e.flags|=8192)):Pe(e),t=e.updateQueue,t!==null&&_o(e,t.retryQueue),t=null,A!==null&&A.memoizedState!==null&&A.memoizedState.cachePool!==null&&(t=A.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==t&&(e.flags|=2048),A!==null&&gA(Ma),null;case 24:return t=null,A!==null&&(t=A.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),jn(ht),Pe(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function jm(A,e){switch(Dl(e),e.tag){case 1:return A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 3:return jn(ht),BA(),A=e.flags,(A&65536)!==0&&(A&128)===0?(e.flags=A&-65537|128,e):null;case 26:case 27:case 5:return q(e),null;case 13:if(kn(e),A=e.memoizedState,A!==null&&A.dehydrated!==null){if(e.alternate===null)throw Error(o(340));qr()}return A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 19:return gA(gt),null;case 4:return BA(),null;case 10:return jn(e.type),null;case 22:case 23:return kn(e),Zl(),A!==null&&gA(Ma),A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 24:return jn(ht),null;case 25:return null;default:return null}}function Hh(A,e){switch(Dl(e),e.tag){case 3:jn(ht),BA();break;case 26:case 27:case 5:q(e);break;case 4:BA();break;case 13:kn(e);break;case 19:gA(gt);break;case 10:jn(e.type);break;case 22:case 23:kn(e),Zl(),A!==null&&gA(Ma);break;case 24:jn(ht)}}function gi(A,e){try{var t=e.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var l=a.next;t=l;do{if((t.tag&A)===A){a=void 0;var c=t.create,h=t.inst;a=c(),h.destroy=a}t=t.next}while(t!==l)}}catch(w){Ye(e,e.return,w)}}function Pn(A,e,t){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var c=l.next;a=c;do{if((a.tag&A)===A){var h=a.inst,w=h.destroy;if(w!==void 0){h.destroy=void 0,l=e;var N=t,eA=w;try{eA()}catch(vA){Ye(l,N,vA)}}}a=a.next}while(a!==c)}}catch(vA){Ye(e,e.return,vA)}}function Nh(A){var e=A.updateQueue;if(e!==null){var t=A.stateNode;try{bf(e,t)}catch(a){Ye(A,A.return,a)}}}function Mh(A,e,t){t.props=Ta(A.type,A.memoizedProps),t.state=A.memoizedState;try{t.componentWillUnmount()}catch(a){Ye(A,e,a)}}function pi(A,e){try{var t=A.ref;if(t!==null){switch(A.tag){case 26:case 27:case 5:var a=A.stateNode;break;case 30:a=A.stateNode;break;default:a=A.stateNode}typeof t=="function"?A.refCleanup=t(a):t.current=a}}catch(l){Ye(A,e,l)}}function gn(A,e){var t=A.ref,a=A.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(l){Ye(A,e,l)}finally{A.refCleanup=null,A=A.alternate,A!=null&&(A.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){Ye(A,e,l)}else t.current=null}function Dh(A){var e=A.type,t=A.memoizedProps,a=A.stateNode;try{A:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break A;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(l){Ye(A,A.return,l)}}function vc(A,e,t){try{var a=A.stateNode;$m(a,A.type,t,e),a[_]=e}catch(l){Ye(A,A.return,l)}}function Th(A){return A.tag===5||A.tag===3||A.tag===26||A.tag===27&&oa(A.type)||A.tag===4}function Cc(A){A:for(;;){for(;A.sibling===null;){if(A.return===null||Th(A.return))return null;A=A.return}for(A.sibling.return=A.return,A=A.sibling;A.tag!==5&&A.tag!==6&&A.tag!==18;){if(A.tag===27&&oa(A.type)||A.flags&2||A.child===null||A.tag===4)continue A;A.child.return=A,A=A.child}if(!(A.flags&2))return A.stateNode}}function Qc(A,e,t){var a=A.tag;if(a===5||a===6)A=A.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(A,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(A),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=es));else if(a!==4&&(a===27&&oa(A.type)&&(t=A.stateNode,e=null),A=A.child,A!==null))for(Qc(A,e,t),A=A.sibling;A!==null;)Qc(A,e,t),A=A.sibling}function Go(A,e,t){var a=A.tag;if(a===5||a===6)A=A.stateNode,e?t.insertBefore(A,e):t.appendChild(A);else if(a!==4&&(a===27&&oa(A.type)&&(t=A.stateNode),A=A.child,A!==null))for(Go(A,e,t),A=A.sibling;A!==null;)Go(A,e,t),A=A.sibling}function Ih(A){var e=A.stateNode,t=A.memoizedProps;try{for(var a=A.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);Qt(e,a,t),e[I]=A,e[_]=t}catch(c){Ye(A,A.return,c)}}var Mn=!1,it=!1,Uc=!1,Lh=typeof WeakSet=="function"?WeakSet:Set,bt=null;function Sm(A,e){if(A=A.containerInfo,$c=ss,A=Ju(A),Cl(A)){if("selectionStart"in A)var t={start:A.selectionStart,end:A.selectionEnd};else A:{t=(t=A.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var l=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{t.nodeType,c.nodeType}catch{t=null;break A}var h=0,w=-1,N=-1,eA=0,vA=0,SA=A,tA=null;e:for(;;){for(var aA;SA!==t||l!==0&&SA.nodeType!==3||(w=h+l),SA!==c||a!==0&&SA.nodeType!==3||(N=h+a),SA.nodeType===3&&(h+=SA.nodeValue.length),(aA=SA.firstChild)!==null;)tA=SA,SA=aA;for(;;){if(SA===A)break e;if(tA===t&&++eA===l&&(w=h),tA===c&&++vA===a&&(N=h),(aA=SA.nextSibling)!==null)break;SA=tA,tA=SA.parentNode}SA=aA}t=w===-1||N===-1?null:{start:w,end:N}}else t=null}t=t||{start:0,end:0}}else t=null;for(Wc={focusedElem:A,selectionRange:t},ss=!1,bt=e;bt!==null;)if(e=bt,A=e.child,(e.subtreeFlags&1024)!==0&&A!==null)A.return=e,bt=A;else for(;bt!==null;){switch(e=bt,c=e.alternate,A=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((A&1024)!==0&&c!==null){A=void 0,t=e,l=c.memoizedProps,c=c.memoizedState,a=t.stateNode;try{var fe=Ta(t.type,l,t.elementType===t.type);A=a.getSnapshotBeforeUpdate(fe,c),a.__reactInternalSnapshotBeforeUpdate=A}catch(ce){Ye(t,t.return,ce)}}break;case 3:if((A&1024)!==0){if(A=e.stateNode.containerInfo,t=A.nodeType,t===9)Ad(A);else if(t===1)switch(A.nodeName){case"HEAD":case"HTML":case"BODY":Ad(A);break;default:A.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((A&1024)!==0)throw Error(o(163))}if(A=e.sibling,A!==null){A.return=e.return,bt=A;break}bt=e.return}}function Oh(A,e,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Aa(A,t),a&4&&gi(5,t);break;case 1:if(Aa(A,t),a&4)if(A=t.stateNode,e===null)try{A.componentDidMount()}catch(h){Ye(t,t.return,h)}else{var l=Ta(t.type,e.memoizedProps);e=e.memoizedState;try{A.componentDidUpdate(l,e,A.__reactInternalSnapshotBeforeUpdate)}catch(h){Ye(t,t.return,h)}}a&64&&Nh(t),a&512&&pi(t,t.return);break;case 3:if(Aa(A,t),a&64&&(A=t.updateQueue,A!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{bf(A,e)}catch(h){Ye(t,t.return,h)}}break;case 27:e===null&&a&4&&Ih(t);case 26:case 5:Aa(A,t),e===null&&a&4&&Dh(t),a&512&&pi(t,t.return);break;case 12:Aa(A,t);break;case 13:Aa(A,t),a&4&&Rh(A,t),a&64&&(A=t.memoizedState,A!==null&&(A=A.dehydrated,A!==null&&(t=Om.bind(null,t),nB(A,t))));break;case 22:if(a=t.memoizedState!==null||Mn,!a){e=e!==null&&e.memoizedState!==null||it,l=Mn;var c=it;Mn=a,(it=e)&&!c?ea(A,t,(t.subtreeFlags&8772)!==0):Aa(A,t),Mn=l,it=c}break;case 30:break;default:Aa(A,t)}}function Kh(A){var e=A.alternate;e!==null&&(A.alternate=null,Kh(e)),A.child=null,A.deletions=null,A.sibling=null,A.tag===5&&(e=A.stateNode,e!==null&&U(e)),A.stateNode=null,A.return=null,A.dependencies=null,A.memoizedProps=null,A.memoizedState=null,A.pendingProps=null,A.stateNode=null,A.updateQueue=null}var Ze=null,It=!1;function Dn(A,e,t){for(t=t.child;t!==null;)zh(A,e,t),t=t.sibling}function zh(A,e,t){if(xe&&typeof xe.onCommitFiberUnmount=="function")try{xe.onCommitFiberUnmount(Te,t)}catch{}switch(t.tag){case 26:it||gn(t,e),Dn(A,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:it||gn(t,e);var a=Ze,l=It;oa(t.type)&&(Ze=t.stateNode,It=!1),Dn(A,e,t),Qi(t.stateNode),Ze=a,It=l;break;case 5:it||gn(t,e);case 6:if(a=Ze,l=It,Ze=null,Dn(A,e,t),Ze=a,It=l,Ze!==null)if(It)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(t.stateNode)}catch(c){Ye(t,e,c)}else try{Ze.removeChild(t.stateNode)}catch(c){Ye(t,e,c)}break;case 18:Ze!==null&&(It?(A=Ze,jg(A.nodeType===9?A.body:A.nodeName==="HTML"?A.ownerDocument.body:A,t.stateNode),Ni(A)):jg(Ze,t.stateNode));break;case 4:a=Ze,l=It,Ze=t.stateNode.containerInfo,It=!0,Dn(A,e,t),Ze=a,It=l;break;case 0:case 11:case 14:case 15:it||Pn(2,t,e),it||Pn(4,t,e),Dn(A,e,t);break;case 1:it||(gn(t,e),a=t.stateNode,typeof a.componentWillUnmount=="function"&&Mh(t,e,a)),Dn(A,e,t);break;case 21:Dn(A,e,t);break;case 22:it=(a=it)||t.memoizedState!==null,Dn(A,e,t),it=a;break;default:Dn(A,e,t)}}function Rh(A,e){if(e.memoizedState===null&&(A=e.alternate,A!==null&&(A=A.memoizedState,A!==null&&(A=A.dehydrated,A!==null))))try{Ni(A)}catch(t){Ye(e,e.return,t)}}function km(A){switch(A.tag){case 13:case 19:var e=A.stateNode;return e===null&&(e=A.stateNode=new Lh),e;case 22:return A=A.stateNode,e=A._retryCache,e===null&&(e=A._retryCache=new Lh),e;default:throw Error(o(435,A.tag))}}function Ec(A,e){var t=km(A);e.forEach(function(a){var l=Km.bind(null,A,a);t.has(a)||(t.add(a),a.then(l,l))})}function Rt(A,e){var t=e.deletions;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a],c=A,h=e,w=h;A:for(;w!==null;){switch(w.tag){case 27:if(oa(w.type)){Ze=w.stateNode,It=!1;break A}break;case 5:Ze=w.stateNode,It=!1;break A;case 3:case 4:Ze=w.stateNode.containerInfo,It=!0;break A}w=w.return}if(Ze===null)throw Error(o(160));zh(c,h,l),Ze=null,It=!1,c=l.alternate,c!==null&&(c.return=null),l.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)_h(e,A),e=e.sibling}var ln=null;function _h(A,e){var t=A.alternate,a=A.flags;switch(A.tag){case 0:case 11:case 14:case 15:Rt(e,A),_t(A),a&4&&(Pn(3,A,A.return),gi(3,A),Pn(5,A,A.return));break;case 1:Rt(e,A),_t(A),a&512&&(it||t===null||gn(t,t.return)),a&64&&Mn&&(A=A.updateQueue,A!==null&&(a=A.callbacks,a!==null&&(t=A.shared.hiddenCallbacks,A.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var l=ln;if(Rt(e,A),_t(A),a&512&&(it||t===null||gn(t,t.return)),a&4){var c=t!==null?t.memoizedState:null;if(a=A.memoizedState,t===null)if(a===null)if(A.stateNode===null){A:{a=A.type,t=A.memoizedProps,l=l.ownerDocument||l;e:switch(a){case"title":c=l.getElementsByTagName("title")[0],(!c||c[F]||c[I]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=l.createElement(a),l.head.insertBefore(c,l.querySelector("head > title"))),Qt(c,a,t),c[I]=A,p(c),a=c;break A;case"link":var h=Ig("link","href",l).get(a+(t.href||""));if(h){for(var w=0;w<h.length;w++)if(c=h[w],c.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&c.getAttribute("rel")===(t.rel==null?null:t.rel)&&c.getAttribute("title")===(t.title==null?null:t.title)&&c.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){h.splice(w,1);break e}}c=l.createElement(a),Qt(c,a,t),l.head.appendChild(c);break;case"meta":if(h=Ig("meta","content",l).get(a+(t.content||""))){for(w=0;w<h.length;w++)if(c=h[w],c.getAttribute("content")===(t.content==null?null:""+t.content)&&c.getAttribute("name")===(t.name==null?null:t.name)&&c.getAttribute("property")===(t.property==null?null:t.property)&&c.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&c.getAttribute("charset")===(t.charSet==null?null:t.charSet)){h.splice(w,1);break e}}c=l.createElement(a),Qt(c,a,t),l.head.appendChild(c);break;default:throw Error(o(468,a))}c[I]=A,p(c),a=c}A.stateNode=a}else Lg(l,A.type,A.stateNode);else A.stateNode=Tg(l,a,A.memoizedProps);else c!==a?(c===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):c.count--,a===null?Lg(l,A.type,A.stateNode):Tg(l,a,A.memoizedProps)):a===null&&A.stateNode!==null&&vc(A,A.memoizedProps,t.memoizedProps)}break;case 27:Rt(e,A),_t(A),a&512&&(it||t===null||gn(t,t.return)),t!==null&&a&4&&vc(A,A.memoizedProps,t.memoizedProps);break;case 5:if(Rt(e,A),_t(A),a&512&&(it||t===null||gn(t,t.return)),A.flags&32){l=A.stateNode;try{Va(l,"")}catch(aA){Ye(A,A.return,aA)}}a&4&&A.stateNode!=null&&(l=A.memoizedProps,vc(A,l,t!==null?t.memoizedProps:l)),a&1024&&(Uc=!0);break;case 6:if(Rt(e,A),_t(A),a&4){if(A.stateNode===null)throw Error(o(162));a=A.memoizedProps,t=A.stateNode;try{t.nodeValue=a}catch(aA){Ye(A,A.return,aA)}}break;case 3:if(rs=null,l=ln,ln=ns(e.containerInfo),Rt(e,A),ln=l,_t(A),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Ni(e.containerInfo)}catch(aA){Ye(A,A.return,aA)}Uc&&(Uc=!1,Gh(A));break;case 4:a=ln,ln=ns(A.stateNode.containerInfo),Rt(e,A),_t(A),ln=a;break;case 12:Rt(e,A),_t(A);break;case 13:Rt(e,A),_t(A),A.child.flags&8192&&A.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Nc=re()),a&4&&(a=A.updateQueue,a!==null&&(A.updateQueue=null,Ec(A,a)));break;case 22:l=A.memoizedState!==null;var N=t!==null&&t.memoizedState!==null,eA=Mn,vA=it;if(Mn=eA||l,it=vA||N,Rt(e,A),it=vA,Mn=eA,_t(A),a&8192)A:for(e=A.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(t===null||N||Mn||it||Ia(A)),t=null,e=A;;){if(e.tag===5||e.tag===26){if(t===null){N=t=e;try{if(c=N.stateNode,l)h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{w=N.stateNode;var SA=N.memoizedProps.style,tA=SA!=null&&SA.hasOwnProperty("display")?SA.display:null;w.style.display=tA==null||typeof tA=="boolean"?"":(""+tA).trim()}}catch(aA){Ye(N,N.return,aA)}}}else if(e.tag===6){if(t===null){N=e;try{N.stateNode.nodeValue=l?"":N.memoizedProps}catch(aA){Ye(N,N.return,aA)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===A)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===A)break A;for(;e.sibling===null;){if(e.return===null||e.return===A)break A;t===e&&(t=null),e=e.return}t===e&&(t=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=A.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,Ec(A,t))));break;case 19:Rt(e,A),_t(A),a&4&&(a=A.updateQueue,a!==null&&(A.updateQueue=null,Ec(A,a)));break;case 30:break;case 21:break;default:Rt(e,A),_t(A)}}function _t(A){var e=A.flags;if(e&2){try{for(var t,a=A.return;a!==null;){if(Th(a)){t=a;break}a=a.return}if(t==null)throw Error(o(160));switch(t.tag){case 27:var l=t.stateNode,c=Cc(A);Go(A,c,l);break;case 5:var h=t.stateNode;t.flags&32&&(Va(h,""),t.flags&=-33);var w=Cc(A);Go(A,w,h);break;case 3:case 4:var N=t.stateNode.containerInfo,eA=Cc(A);Qc(A,eA,N);break;default:throw Error(o(161))}}catch(vA){Ye(A,A.return,vA)}A.flags&=-3}e&4096&&(A.flags&=-4097)}function Gh(A){if(A.subtreeFlags&1024)for(A=A.child;A!==null;){var e=A;Gh(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),A=A.sibling}}function Aa(A,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Oh(A,e.alternate,e),e=e.sibling}function Ia(A){for(A=A.child;A!==null;){var e=A;switch(e.tag){case 0:case 11:case 14:case 15:Pn(4,e,e.return),Ia(e);break;case 1:gn(e,e.return);var t=e.stateNode;typeof t.componentWillUnmount=="function"&&Mh(e,e.return,t),Ia(e);break;case 27:Qi(e.stateNode);case 26:case 5:gn(e,e.return),Ia(e);break;case 22:e.memoizedState===null&&Ia(e);break;case 30:Ia(e);break;default:Ia(e)}A=A.sibling}}function ea(A,e,t){for(t=t&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,l=A,c=e,h=c.flags;switch(c.tag){case 0:case 11:case 15:ea(l,c,t),gi(4,c);break;case 1:if(ea(l,c,t),a=c,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(eA){Ye(a,a.return,eA)}if(a=c,l=a.updateQueue,l!==null){var w=a.stateNode;try{var N=l.shared.hiddenCallbacks;if(N!==null)for(l.shared.hiddenCallbacks=null,l=0;l<N.length;l++)Bf(N[l],w)}catch(eA){Ye(a,a.return,eA)}}t&&h&64&&Nh(c),pi(c,c.return);break;case 27:Ih(c);case 26:case 5:ea(l,c,t),t&&a===null&&h&4&&Dh(c),pi(c,c.return);break;case 12:ea(l,c,t);break;case 13:ea(l,c,t),t&&h&4&&Rh(l,c);break;case 22:c.memoizedState===null&&ea(l,c,t),pi(c,c.return);break;case 30:break;default:ea(l,c,t)}e=e.sibling}}function Fc(A,e){var t=null;A!==null&&A.memoizedState!==null&&A.memoizedState.cachePool!==null&&(t=A.memoizedState.cachePool.pool),A=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(A=e.memoizedState.cachePool.pool),A!==t&&(A!=null&&A.refCount++,t!=null&&ei(t))}function jc(A,e){A=null,e.alternate!==null&&(A=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==A&&(e.refCount++,A!=null&&ei(A))}function pn(A,e,t,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yh(A,e,t,a),e=e.sibling}function Yh(A,e,t,a){var l=e.flags;switch(e.tag){case 0:case 11:case 15:pn(A,e,t,a),l&2048&&gi(9,e);break;case 1:pn(A,e,t,a);break;case 3:pn(A,e,t,a),l&2048&&(A=null,e.alternate!==null&&(A=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==A&&(e.refCount++,A!=null&&ei(A)));break;case 12:if(l&2048){pn(A,e,t,a),A=e.stateNode;try{var c=e.memoizedProps,h=c.id,w=c.onPostCommit;typeof w=="function"&&w(h,e.alternate===null?"mount":"update",A.passiveEffectDuration,-0)}catch(N){Ye(e,e.return,N)}}else pn(A,e,t,a);break;case 13:pn(A,e,t,a);break;case 23:break;case 22:c=e.stateNode,h=e.alternate,e.memoizedState!==null?c._visibility&2?pn(A,e,t,a):xi(A,e):c._visibility&2?pn(A,e,t,a):(c._visibility|=2,ur(A,e,t,a,(e.subtreeFlags&10256)!==0)),l&2048&&Fc(h,e);break;case 24:pn(A,e,t,a),l&2048&&jc(e.alternate,e);break;default:pn(A,e,t,a)}}function ur(A,e,t,a,l){for(l=l&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var c=A,h=e,w=t,N=a,eA=h.flags;switch(h.tag){case 0:case 11:case 15:ur(c,h,w,N,l),gi(8,h);break;case 23:break;case 22:var vA=h.stateNode;h.memoizedState!==null?vA._visibility&2?ur(c,h,w,N,l):xi(c,h):(vA._visibility|=2,ur(c,h,w,N,l)),l&&eA&2048&&Fc(h.alternate,h);break;case 24:ur(c,h,w,N,l),l&&eA&2048&&jc(h.alternate,h);break;default:ur(c,h,w,N,l)}e=e.sibling}}function xi(A,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=A,a=e,l=a.flags;switch(a.tag){case 22:xi(t,a),l&2048&&Fc(a.alternate,a);break;case 24:xi(t,a),l&2048&&jc(a.alternate,a);break;default:xi(t,a)}e=e.sibling}}var mi=8192;function fr(A){if(A.subtreeFlags&mi)for(A=A.child;A!==null;)Xh(A),A=A.sibling}function Xh(A){switch(A.tag){case 26:fr(A),A.flags&mi&&A.memoizedState!==null&&pB(ln,A.memoizedState,A.memoizedProps);break;case 5:fr(A);break;case 3:case 4:var e=ln;ln=ns(A.stateNode.containerInfo),fr(A),ln=e;break;case 22:A.memoizedState===null&&(e=A.alternate,e!==null&&e.memoizedState!==null?(e=mi,mi=16777216,fr(A),mi=e):fr(A));break;default:fr(A)}}function Vh(A){var e=A.alternate;if(e!==null&&(A=e.child,A!==null)){e.child=null;do e=A.sibling,A.sibling=null,A=e;while(A!==null)}}function Bi(A){var e=A.deletions;if((A.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];bt=a,Zh(a,A)}Vh(A)}if(A.subtreeFlags&10256)for(A=A.child;A!==null;)Jh(A),A=A.sibling}function Jh(A){switch(A.tag){case 0:case 11:case 15:Bi(A),A.flags&2048&&Pn(9,A,A.return);break;case 3:Bi(A);break;case 12:Bi(A);break;case 22:var e=A.stateNode;A.memoizedState!==null&&e._visibility&2&&(A.return===null||A.return.tag!==13)?(e._visibility&=-3,Yo(A)):Bi(A);break;default:Bi(A)}}function Yo(A){var e=A.deletions;if((A.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];bt=a,Zh(a,A)}Vh(A)}for(A=A.child;A!==null;){switch(e=A,e.tag){case 0:case 11:case 15:Pn(8,e,e.return),Yo(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,Yo(e));break;default:Yo(e)}A=A.sibling}}function Zh(A,e){for(;bt!==null;){var t=bt;switch(t.tag){case 0:case 11:case 15:Pn(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ei(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,bt=a;else A:for(t=A;bt!==null;){a=bt;var l=a.sibling,c=a.return;if(Kh(a),a===t){bt=null;break A}if(l!==null){l.return=c,bt=l;break A}bt=c}}}var Hm={getCacheForType:function(A){var e=jt(ht),t=e.data.get(A);return t===void 0&&(t=A(),e.data.set(A,t)),t}},Nm=typeof WeakMap=="function"?WeakMap:Map,Ie=0,Xe=null,ve=null,je=0,Le=0,Gt=null,ta=!1,hr=!1,Sc=!1,Tn=0,tt=0,na=0,La=0,kc=0,en=0,gr=0,bi=null,Lt=null,Hc=!1,Nc=0,Xo=1/0,Vo=null,aa=null,Ct=0,ra=null,pr=null,xr=0,Mc=0,Dc=null,$h=null,wi=0,Tc=null;function Yt(){if((Ie&2)!==0&&je!==0)return je&-je;if(Y.T!==null){var A=ar;return A!==0?A:_c()}return j()}function Wh(){en===0&&(en=(je&536870912)===0||Me?ge():536870912);var A=An.current;return A!==null&&(A.flags|=32),en}function Xt(A,e,t){(A===Xe&&(Le===2||Le===9)||A.cancelPendingCommit!==null)&&(mr(A,0),ia(A,je,en,!1)),_e(A,t),((Ie&2)===0||A!==Xe)&&(A===Xe&&((Ie&2)===0&&(La|=t),tt===4&&ia(A,je,en,!1)),xn(A))}function qh(A,e,t){if((Ie&6)!==0)throw Error(o(327));var a=!t&&(e&124)===0&&(e&A.expiredLanes)===0||Be(A,e),l=a?Tm(A,e):Oc(A,e,!0),c=a;do{if(l===0){hr&&!a&&ia(A,e,0,!1);break}else{if(t=A.current.alternate,c&&!Mm(t)){l=Oc(A,e,!1),c=!1;continue}if(l===2){if(c=e,A.errorRecoveryDisabledLanes&c)var h=0;else h=A.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){e=h;A:{var w=A;l=bi;var N=w.current.memoizedState.isDehydrated;if(N&&(mr(w,h).flags|=256),h=Oc(w,h,!1),h!==2){if(Sc&&!N){w.errorRecoveryDisabledLanes|=c,La|=c,l=4;break A}c=Lt,Lt=l,c!==null&&(Lt===null?Lt=c:Lt.push.apply(Lt,c))}l=h}if(c=!1,l!==2)continue}}if(l===1){mr(A,0),ia(A,e,0,!0);break}A:{switch(a=A,c=l,c){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:ia(a,e,en,!ta);break A;case 2:Lt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(l=Nc+300-re(),10<l)){if(ia(a,e,en,!ta),de(a,0,!0)!==0)break A;a.timeoutHandle=Eg(Ph.bind(null,a,t,Lt,Vo,Hc,e,en,La,gr,ta,c,2,-0,0),l);break A}Ph(a,t,Lt,Vo,Hc,e,en,La,gr,ta,c,0,-0,0)}}break}while(!0);xn(A)}function Ph(A,e,t,a,l,c,h,w,N,eA,vA,SA,tA,aA){if(A.timeoutHandle=-1,SA=e.subtreeFlags,(SA&8192||(SA&16785408)===16785408)&&(Fi={stylesheets:null,count:0,unsuspend:gB},Xh(e),SA=xB(),SA!==null)){A.cancelPendingCommit=SA(ig.bind(null,A,e,c,t,a,l,h,w,N,vA,1,tA,aA)),ia(A,c,h,!eA);return}ig(A,e,c,t,a,l,h,w,N)}function Mm(A){for(var e=A;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var l=t[a],c=l.getSnapshot;l=l.value;try{if(!Kt(c(),l))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===A)break;for(;e.sibling===null;){if(e.return===null||e.return===A)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ia(A,e,t,a){e&=~kc,e&=~La,A.suspendedLanes|=e,A.pingedLanes&=~e,a&&(A.warmLanes|=e),a=A.expirationTimes;for(var l=e;0<l;){var c=31-uA(l),h=1<<c;a[c]=-1,l&=~h}t!==0&&H(A,t,e)}function Jo(){return(Ie&6)===0?(yi(0),!1):!0}function Ic(){if(ve!==null){if(Le===0)var A=ve.return;else A=ve,Fn=Ha=null,Ac(A),cr=null,ui=0,A=ve;for(;A!==null;)Hh(A.alternate,A),A=A.return;ve=null}}function mr(A,e){var t=A.timeoutHandle;t!==-1&&(A.timeoutHandle=-1,qm(t)),t=A.cancelPendingCommit,t!==null&&(A.cancelPendingCommit=null,t()),Ic(),Xe=A,ve=t=Qn(A.current,null),je=e,Le=0,Gt=null,ta=!1,hr=Be(A,e),Sc=!1,gr=en=kc=La=na=tt=0,Lt=bi=null,Hc=!1,(e&8)!==0&&(e|=e&32);var a=A.entangledLanes;if(a!==0)for(A=A.entanglements,a&=e;0<a;){var l=31-uA(a),c=1<<l;e|=A[l],a&=~c}return Tn=e,po(),t}function Ag(A,e){me=null,Y.H=Do,e===ni||e===Qo?(e=xf(),Le=3):e===hf?(e=xf(),Le=4):Le=e===mh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Gt=e,ve===null&&(tt=1,Ko(A,$t(e,A.current)))}function eg(){var A=Y.H;return Y.H=Do,A===null?Do:A}function tg(){var A=Y.A;return Y.A=Hm,A}function Lc(){tt=4,ta||(je&4194048)!==je&&An.current!==null||(hr=!0),(na&134217727)===0&&(La&134217727)===0||Xe===null||ia(Xe,je,en,!1)}function Oc(A,e,t){var a=Ie;Ie|=2;var l=eg(),c=tg();(Xe!==A||je!==e)&&(Vo=null,mr(A,e)),e=!1;var h=tt;A:do try{if(Le!==0&&ve!==null){var w=ve,N=Gt;switch(Le){case 8:Ic(),h=6;break A;case 3:case 2:case 9:case 6:An.current===null&&(e=!0);var eA=Le;if(Le=0,Gt=null,Br(A,w,N,eA),t&&hr){h=0;break A}break;default:eA=Le,Le=0,Gt=null,Br(A,w,N,eA)}}Dm(),h=tt;break}catch(vA){Ag(A,vA)}while(!0);return e&&A.shellSuspendCounter++,Fn=Ha=null,Ie=a,Y.H=l,Y.A=c,ve===null&&(Xe=null,je=0,po()),h}function Dm(){for(;ve!==null;)ng(ve)}function Tm(A,e){var t=Ie;Ie|=2;var a=eg(),l=tg();Xe!==A||je!==e?(Vo=null,Xo=re()+500,mr(A,e)):hr=Be(A,e);A:do try{if(Le!==0&&ve!==null){e=ve;var c=Gt;e:switch(Le){case 1:Le=0,Gt=null,Br(A,e,c,1);break;case 2:case 9:if(gf(c)){Le=0,Gt=null,ag(e);break}e=function(){Le!==2&&Le!==9||Xe!==A||(Le=7),xn(A)},c.then(e,e);break A;case 3:Le=7;break A;case 4:Le=5;break A;case 7:gf(c)?(Le=0,Gt=null,ag(e)):(Le=0,Gt=null,Br(A,e,c,7));break;case 5:var h=null;switch(ve.tag){case 26:h=ve.memoizedState;case 5:case 27:var w=ve;if(!h||Og(h)){Le=0,Gt=null;var N=w.sibling;if(N!==null)ve=N;else{var eA=w.return;eA!==null?(ve=eA,Zo(eA)):ve=null}break e}}Le=0,Gt=null,Br(A,e,c,5);break;case 6:Le=0,Gt=null,Br(A,e,c,6);break;case 8:Ic(),tt=6;break A;default:throw Error(o(462))}}Im();break}catch(vA){Ag(A,vA)}while(!0);return Fn=Ha=null,Y.H=a,Y.A=l,Ie=t,ve!==null?0:(Xe=null,je=0,po(),tt)}function Im(){for(;ve!==null&&!rA();)ng(ve)}function ng(A){var e=Sh(A.alternate,A,Tn);A.memoizedProps=A.pendingProps,e===null?Zo(A):ve=e}function ag(A){var e=A,t=e.alternate;switch(e.tag){case 15:case 0:e=Ch(t,e,e.pendingProps,e.type,void 0,je);break;case 11:e=Ch(t,e,e.pendingProps,e.type.render,e.ref,je);break;case 5:Ac(e);default:Hh(t,e),e=ve=af(e,Tn),e=Sh(t,e,Tn)}A.memoizedProps=A.pendingProps,e===null?Zo(A):ve=e}function Br(A,e,t,a){Fn=Ha=null,Ac(e),cr=null,ui=0;var l=e.return;try{if(Um(A,l,e,t,je)){tt=1,Ko(A,$t(t,A.current)),ve=null;return}}catch(c){if(l!==null)throw ve=l,c;tt=1,Ko(A,$t(t,A.current)),ve=null;return}e.flags&32768?(Me||a===1?A=!0:hr||(je&536870912)!==0?A=!1:(ta=A=!0,(a===2||a===9||a===3||a===6)&&(a=An.current,a!==null&&a.tag===13&&(a.flags|=16384))),rg(e,A)):Zo(e)}function Zo(A){var e=A;do{if((e.flags&32768)!==0){rg(e,ta);return}A=e.return;var t=Fm(e.alternate,e,Tn);if(t!==null){ve=t;return}if(e=e.sibling,e!==null){ve=e;return}ve=e=A}while(e!==null);tt===0&&(tt=5)}function rg(A,e){do{var t=jm(A.alternate,A);if(t!==null){t.flags&=32767,ve=t;return}if(t=A.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(A=A.sibling,A!==null)){ve=A;return}ve=A=t}while(A!==null);tt=6,ve=null}function ig(A,e,t,a,l,c,h,w,N){A.cancelPendingCommit=null;do $o();while(Ct!==0);if((Ie&6)!==0)throw Error(o(327));if(e!==null){if(e===A.current)throw Error(o(177));if(c=e.lanes|e.childLanes,c|=jl,Ge(A,t,c,h,w,N),A===Xe&&(ve=Xe=null,je=0),pr=e,ra=A,xr=t,Mc=c,Dc=l,$h=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(A.callbackNode=null,A.callbackPriority=0,zm(se,function(){return dg(),null})):(A.callbackNode=null,A.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=Y.T,Y.T=null,l=xA.p,xA.p=2,h=Ie,Ie|=4;try{Sm(A,e,t)}finally{Ie=h,xA.p=l,Y.T=a}}Ct=1,og(),sg(),lg()}}function og(){if(Ct===1){Ct=0;var A=ra,e=pr,t=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||t){t=Y.T,Y.T=null;var a=xA.p;xA.p=2;var l=Ie;Ie|=4;try{_h(e,A);var c=Wc,h=Ju(A.containerInfo),w=c.focusedElem,N=c.selectionRange;if(h!==w&&w&&w.ownerDocument&&Vu(w.ownerDocument.documentElement,w)){if(N!==null&&Cl(w)){var eA=N.start,vA=N.end;if(vA===void 0&&(vA=eA),"selectionStart"in w)w.selectionStart=eA,w.selectionEnd=Math.min(vA,w.value.length);else{var SA=w.ownerDocument||document,tA=SA&&SA.defaultView||window;if(tA.getSelection){var aA=tA.getSelection(),fe=w.textContent.length,ce=Math.min(N.start,fe),ze=N.end===void 0?ce:Math.min(N.end,fe);!aA.extend&&ce>ze&&(h=ze,ze=ce,ce=h);var J=Xu(w,ce),R=Xu(w,ze);if(J&&R&&(aA.rangeCount!==1||aA.anchorNode!==J.node||aA.anchorOffset!==J.offset||aA.focusNode!==R.node||aA.focusOffset!==R.offset)){var P=SA.createRange();P.setStart(J.node,J.offset),aA.removeAllRanges(),ce>ze?(aA.addRange(P),aA.extend(R.node,R.offset)):(P.setEnd(R.node,R.offset),aA.addRange(P))}}}}for(SA=[],aA=w;aA=aA.parentNode;)aA.nodeType===1&&SA.push({element:aA,left:aA.scrollLeft,top:aA.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<SA.length;w++){var UA=SA[w];UA.element.scrollLeft=UA.left,UA.element.scrollTop=UA.top}}ss=!!$c,Wc=$c=null}finally{Ie=l,xA.p=a,Y.T=t}}A.current=e,Ct=2}}function sg(){if(Ct===2){Ct=0;var A=ra,e=pr,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=Y.T,Y.T=null;var a=xA.p;xA.p=2;var l=Ie;Ie|=4;try{Oh(A,e.alternate,e)}finally{Ie=l,xA.p=a,Y.T=t}}Ct=3}}function lg(){if(Ct===4||Ct===3){Ct=0,ae();var A=ra,e=pr,t=xr,a=$h;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Ct=5:(Ct=0,pr=ra=null,cg(A,A.pendingLanes));var l=A.pendingLanes;if(l===0&&(aa=null),GA(t),e=e.stateNode,xe&&typeof xe.onCommitFiberRoot=="function")try{xe.onCommitFiberRoot(Te,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=Y.T,l=xA.p,xA.p=2,Y.T=null;try{for(var c=A.onRecoverableError,h=0;h<a.length;h++){var w=a[h];c(w.value,{componentStack:w.stack})}}finally{Y.T=e,xA.p=l}}(xr&3)!==0&&$o(),xn(A),l=A.pendingLanes,(t&4194090)!==0&&(l&42)!==0?A===Tc?wi++:(wi=0,Tc=A):wi=0,yi(0)}}function cg(A,e){(A.pooledCacheLanes&=e)===0&&(e=A.pooledCache,e!=null&&(A.pooledCache=null,ei(e)))}function $o(A){return og(),sg(),lg(),dg()}function dg(){if(Ct!==5)return!1;var A=ra,e=Mc;Mc=0;var t=GA(xr),a=Y.T,l=xA.p;try{xA.p=32>t?32:t,Y.T=null,t=Dc,Dc=null;var c=ra,h=xr;if(Ct=0,pr=ra=null,xr=0,(Ie&6)!==0)throw Error(o(331));var w=Ie;if(Ie|=4,Jh(c.current),Yh(c,c.current,h,t),Ie=w,yi(0,!1),xe&&typeof xe.onPostCommitFiberRoot=="function")try{xe.onPostCommitFiberRoot(Te,c)}catch{}return!0}finally{xA.p=l,Y.T=a,cg(A,e)}}function ug(A,e,t){e=$t(t,e),e=hc(A.stateNode,e,2),A=Zn(A,e,2),A!==null&&(_e(A,2),xn(A))}function Ye(A,e,t){if(A.tag===3)ug(A,A,t);else for(;e!==null;){if(e.tag===3){ug(e,A,t);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(aa===null||!aa.has(a))){A=$t(t,A),t=ph(2),a=Zn(e,t,2),a!==null&&(xh(t,a,e,A),_e(a,2),xn(a));break}}e=e.return}}function Kc(A,e,t){var a=A.pingCache;if(a===null){a=A.pingCache=new Nm;var l=new Set;a.set(e,l)}else l=a.get(e),l===void 0&&(l=new Set,a.set(e,l));l.has(t)||(Sc=!0,l.add(t),A=Lm.bind(null,A,e,t),e.then(A,A))}function Lm(A,e,t){var a=A.pingCache;a!==null&&a.delete(e),A.pingedLanes|=A.suspendedLanes&t,A.warmLanes&=~t,Xe===A&&(je&t)===t&&(tt===4||tt===3&&(je&62914560)===je&&300>re()-Nc?(Ie&2)===0&&mr(A,0):kc|=t,gr===je&&(gr=0)),xn(A)}function fg(A,e){e===0&&(e=ye()),A=Ar(A,e),A!==null&&(_e(A,e),xn(A))}function Om(A){var e=A.memoizedState,t=0;e!==null&&(t=e.retryLane),fg(A,t)}function Km(A,e){var t=0;switch(A.tag){case 13:var a=A.stateNode,l=A.memoizedState;l!==null&&(t=l.retryLane);break;case 19:a=A.stateNode;break;case 22:a=A.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(e),fg(A,t)}function zm(A,e){return FA(A,e)}var Wo=null,br=null,zc=!1,qo=!1,Rc=!1,Oa=0;function xn(A){A!==br&&A.next===null&&(br===null?Wo=br=A:br=br.next=A),qo=!0,zc||(zc=!0,_m())}function yi(A,e){if(!Rc&&qo){Rc=!0;do for(var t=!1,a=Wo;a!==null;){if(A!==0){var l=a.pendingLanes;if(l===0)var c=0;else{var h=a.suspendedLanes,w=a.pingedLanes;c=(1<<31-uA(42|A)+1)-1,c&=l&~(h&~w),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(t=!0,xg(a,c))}else c=je,c=de(a,a===Xe?c:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(c&3)===0||Be(a,c)||(t=!0,xg(a,c));a=a.next}while(t);Rc=!1}}function Rm(){hg()}function hg(){qo=zc=!1;var A=0;Oa!==0&&(Wm()&&(A=Oa),Oa=0);for(var e=re(),t=null,a=Wo;a!==null;){var l=a.next,c=gg(a,e);c===0?(a.next=null,t===null?Wo=l:t.next=l,l===null&&(br=t)):(t=a,(A!==0||(c&3)!==0)&&(qo=!0)),a=l}yi(A)}function gg(A,e){for(var t=A.suspendedLanes,a=A.pingedLanes,l=A.expirationTimes,c=A.pendingLanes&-62914561;0<c;){var h=31-uA(c),w=1<<h,N=l[h];N===-1?((w&t)===0||(w&a)!==0)&&(l[h]=he(w,e)):N<=e&&(A.expiredLanes|=w),c&=~w}if(e=Xe,t=je,t=de(A,A===e?t:0,A.cancelPendingCommit!==null||A.timeoutHandle!==-1),a=A.callbackNode,t===0||A===e&&(Le===2||Le===9)||A.cancelPendingCommit!==null)return a!==null&&a!==null&&IA(a),A.callbackNode=null,A.callbackPriority=0;if((t&3)===0||Be(A,t)){if(e=t&-t,e===A.callbackPriority)return e;switch(a!==null&&IA(a),GA(t)){case 2:case 8:t=Ne;break;case 32:t=se;break;case 268435456:t=lt;break;default:t=se}return a=pg.bind(null,A),t=FA(t,a),A.callbackPriority=e,A.callbackNode=t,e}return a!==null&&a!==null&&IA(a),A.callbackPriority=2,A.callbackNode=null,2}function pg(A,e){if(Ct!==0&&Ct!==5)return A.callbackNode=null,A.callbackPriority=0,null;var t=A.callbackNode;if($o()&&A.callbackNode!==t)return null;var a=je;return a=de(A,A===Xe?a:0,A.cancelPendingCommit!==null||A.timeoutHandle!==-1),a===0?null:(qh(A,a,e),gg(A,re()),A.callbackNode!=null&&A.callbackNode===t?pg.bind(null,A):null)}function xg(A,e){if($o())return null;qh(A,e,!0)}function _m(){Pm(function(){(Ie&6)!==0?FA(we,Rm):hg()})}function _c(){return Oa===0&&(Oa=ge()),Oa}function mg(A){return A==null||typeof A=="symbol"||typeof A=="boolean"?null:typeof A=="function"?A:so(""+A)}function Bg(A,e){var t=e.ownerDocument.createElement("input");return t.name=e.name,t.value=e.value,A.id&&t.setAttribute("form",A.id),e.parentNode.insertBefore(t,e),A=new FormData(A),t.parentNode.removeChild(t),A}function Gm(A,e,t,a,l){if(e==="submit"&&t&&t.stateNode===l){var c=mg((l[_]||null).action),h=a.submitter;h&&(e=(e=h[_]||null)?mg(e.formAction):h.getAttribute("formAction"),e!==null&&(c=e,h=null));var w=new fo("action","action",null,a,l);A.push({event:w,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Oa!==0){var N=h?Bg(l,h):new FormData(l);lc(t,{pending:!0,data:N,method:l.method,action:c},null,N)}}else typeof c=="function"&&(w.preventDefault(),N=h?Bg(l,h):new FormData(l),lc(t,{pending:!0,data:N,method:l.method,action:c},c,N))},currentTarget:l}]})}}for(var Gc=0;Gc<Fl.length;Gc++){var Yc=Fl[Gc],Ym=Yc.toLowerCase(),Xm=Yc[0].toUpperCase()+Yc.slice(1);sn(Ym,"on"+Xm)}sn(Wu,"onAnimationEnd"),sn(qu,"onAnimationIteration"),sn(Pu,"onAnimationStart"),sn("dblclick","onDoubleClick"),sn("focusin","onFocus"),sn("focusout","onBlur"),sn(lm,"onTransitionRun"),sn(cm,"onTransitionStart"),sn(dm,"onTransitionCancel"),sn(Af,"onTransitionEnd"),cA("onMouseEnter",["mouseout","mouseover"]),cA("onMouseLeave",["mouseout","mouseover"]),cA("onPointerEnter",["pointerout","pointerover"]),cA("onPointerLeave",["pointerout","pointerover"]),yA("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),yA("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),yA("onBeforeInput",["compositionend","keypress","textInput","paste"]),yA("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),yA("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),yA("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vi));function bg(A,e){e=(e&4)!==0;for(var t=0;t<A.length;t++){var a=A[t],l=a.event;a=a.listeners;A:{var c=void 0;if(e)for(var h=a.length-1;0<=h;h--){var w=a[h],N=w.instance,eA=w.currentTarget;if(w=w.listener,N!==c&&l.isPropagationStopped())break A;c=w,l.currentTarget=eA;try{c(l)}catch(vA){Oo(vA)}l.currentTarget=null,c=N}else for(h=0;h<a.length;h++){if(w=a[h],N=w.instance,eA=w.currentTarget,w=w.listener,N!==c&&l.isPropagationStopped())break A;c=w,l.currentTarget=eA;try{c(l)}catch(vA){Oo(vA)}l.currentTarget=null,c=N}}}}function Ce(A,e){var t=e[Q];t===void 0&&(t=e[Q]=new Set);var a=A+"__bubble";t.has(a)||(wg(e,A,2,!1),t.add(a))}function Xc(A,e,t){var a=0;e&&(a|=4),wg(t,A,a,e)}var Po="_reactListening"+Math.random().toString(36).slice(2);function Vc(A){if(!A[Po]){A[Po]=!0,T.forEach(function(t){t!=="selectionchange"&&(Vm.has(t)||Xc(t,!1,A),Xc(t,!0,A))});var e=A.nodeType===9?A:A.ownerDocument;e===null||e[Po]||(e[Po]=!0,Xc("selectionchange",!1,e))}}function wg(A,e,t,a){switch(Yg(e)){case 2:var l=bB;break;case 8:l=wB;break;default:l=od}t=l.bind(null,e,t,A),l=void 0,!gl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),a?l!==void 0?A.addEventListener(e,t,{capture:!0,passive:l}):A.addEventListener(e,t,!0):l!==void 0?A.addEventListener(e,t,{passive:l}):A.addEventListener(e,t,!1)}function Jc(A,e,t,a,l){var c=a;if((e&1)===0&&(e&2)===0&&a!==null)A:for(;;){if(a===null)return;var h=a.tag;if(h===3||h===4){var w=a.stateNode.containerInfo;if(w===l)break;if(h===4)for(h=a.return;h!==null;){var N=h.tag;if((N===3||N===4)&&h.stateNode.containerInfo===l)return;h=h.return}for(;w!==null;){if(h=$(w),h===null)return;if(N=h.tag,N===5||N===6||N===26||N===27){a=c=h;continue A}w=w.parentNode}}a=a.return}Eu(function(){var eA=c,vA=fl(t),SA=[];A:{var tA=ef.get(A);if(tA!==void 0){var aA=fo,fe=A;switch(A){case"keypress":if(co(t)===0)break A;case"keydown":case"keyup":aA=z0;break;case"focusin":fe="focus",aA=Bl;break;case"focusout":fe="blur",aA=Bl;break;case"beforeblur":case"afterblur":aA=Bl;break;case"click":if(t.button===2)break A;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":aA=Su;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":aA=j0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":aA=G0;break;case Wu:case qu:case Pu:aA=H0;break;case Af:aA=X0;break;case"scroll":case"scrollend":aA=E0;break;case"wheel":aA=J0;break;case"copy":case"cut":case"paste":aA=M0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":aA=Hu;break;case"toggle":case"beforetoggle":aA=$0}var ce=(e&4)!==0,ze=!ce&&(A==="scroll"||A==="scrollend"),J=ce?tA!==null?tA+"Capture":null:tA;ce=[];for(var R=eA,P;R!==null;){var UA=R;if(P=UA.stateNode,UA=UA.tag,UA!==5&&UA!==26&&UA!==27||P===null||J===null||(UA=Rr(R,J),UA!=null&&ce.push(Ci(R,UA,P))),ze)break;R=R.return}0<ce.length&&(tA=new aA(tA,fe,null,t,vA),SA.push({event:tA,listeners:ce}))}}if((e&7)===0){A:{if(tA=A==="mouseover"||A==="pointerover",aA=A==="mouseout"||A==="pointerout",tA&&t!==ul&&(fe=t.relatedTarget||t.fromElement)&&($(fe)||fe[b]))break A;if((aA||tA)&&(tA=vA.window===vA?vA:(tA=vA.ownerDocument)?tA.defaultView||tA.parentWindow:window,aA?(fe=t.relatedTarget||t.toElement,aA=eA,fe=fe?$(fe):null,fe!==null&&(ze=u(fe),ce=fe.tag,fe!==ze||ce!==5&&ce!==27&&ce!==6)&&(fe=null)):(aA=null,fe=eA),aA!==fe)){if(ce=Su,UA="onMouseLeave",J="onMouseEnter",R="mouse",(A==="pointerout"||A==="pointerover")&&(ce=Hu,UA="onPointerLeave",J="onPointerEnter",R="pointer"),ze=aA==null?tA:zA(aA),P=fe==null?tA:zA(fe),tA=new ce(UA,R+"leave",aA,t,vA),tA.target=ze,tA.relatedTarget=P,UA=null,$(vA)===eA&&(ce=new ce(J,R+"enter",fe,t,vA),ce.target=P,ce.relatedTarget=ze,UA=ce),ze=UA,aA&&fe)e:{for(ce=aA,J=fe,R=0,P=ce;P;P=wr(P))R++;for(P=0,UA=J;UA;UA=wr(UA))P++;for(;0<R-P;)ce=wr(ce),R--;for(;0<P-R;)J=wr(J),P--;for(;R--;){if(ce===J||J!==null&&ce===J.alternate)break e;ce=wr(ce),J=wr(J)}ce=null}else ce=null;aA!==null&&yg(SA,tA,aA,ce,!1),fe!==null&&ze!==null&&yg(SA,ze,fe,ce,!0)}}A:{if(tA=eA?zA(eA):window,aA=tA.nodeName&&tA.nodeName.toLowerCase(),aA==="select"||aA==="input"&&tA.type==="file")var ne=Ku;else if(Lu(tA))if(zu)ne=im;else{ne=am;var be=nm}else aA=tA.nodeName,!aA||aA.toLowerCase()!=="input"||tA.type!=="checkbox"&&tA.type!=="radio"?eA&&dl(eA.elementType)&&(ne=Ku):ne=rm;if(ne&&(ne=ne(A,eA))){Ou(SA,ne,t,vA);break A}be&&be(A,tA,eA),A==="focusout"&&eA&&tA.type==="number"&&eA.memoizedProps.value!=null&&cl(tA,"number",tA.value)}switch(be=eA?zA(eA):window,A){case"focusin":(Lu(be)||be.contentEditable==="true")&&(Wa=be,Ql=eA,$r=null);break;case"focusout":$r=Ql=Wa=null;break;case"mousedown":Ul=!0;break;case"contextmenu":case"mouseup":case"dragend":Ul=!1,Zu(SA,t,vA);break;case"selectionchange":if(sm)break;case"keydown":case"keyup":Zu(SA,t,vA)}var ie;if(wl)A:{switch(A){case"compositionstart":var ue="onCompositionStart";break A;case"compositionend":ue="onCompositionEnd";break A;case"compositionupdate":ue="onCompositionUpdate";break A}ue=void 0}else $a?Tu(A,t)&&(ue="onCompositionEnd"):A==="keydown"&&t.keyCode===229&&(ue="onCompositionStart");ue&&(Nu&&t.locale!=="ko"&&($a||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&$a&&(ie=Fu()):(Yn=vA,pl="value"in Yn?Yn.value:Yn.textContent,$a=!0)),be=As(eA,ue),0<be.length&&(ue=new ku(ue,A,null,t,vA),SA.push({event:ue,listeners:be}),ie?ue.data=ie:(ie=Iu(t),ie!==null&&(ue.data=ie)))),(ie=q0?P0(A,t):Am(A,t))&&(ue=As(eA,"onBeforeInput"),0<ue.length&&(be=new ku("onBeforeInput","beforeinput",null,t,vA),SA.push({event:be,listeners:ue}),be.data=ie)),Gm(SA,A,eA,t,vA)}bg(SA,e)})}function Ci(A,e,t){return{instance:A,listener:e,currentTarget:t}}function As(A,e){for(var t=e+"Capture",a=[];A!==null;){var l=A,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=Rr(A,t),l!=null&&a.unshift(Ci(A,l,c)),l=Rr(A,e),l!=null&&a.push(Ci(A,l,c))),A.tag===3)return a;A=A.return}return[]}function wr(A){if(A===null)return null;do A=A.return;while(A&&A.tag!==5&&A.tag!==27);return A||null}function yg(A,e,t,a,l){for(var c=e._reactName,h=[];t!==null&&t!==a;){var w=t,N=w.alternate,eA=w.stateNode;if(w=w.tag,N!==null&&N===a)break;w!==5&&w!==26&&w!==27||eA===null||(N=eA,l?(eA=Rr(t,c),eA!=null&&h.unshift(Ci(t,eA,N))):l||(eA=Rr(t,c),eA!=null&&h.push(Ci(t,eA,N)))),t=t.return}h.length!==0&&A.push({event:e,listeners:h})}var Jm=/\r\n?/g,Zm=/\u0000|\uFFFD/g;function vg(A){return(typeof A=="string"?A:""+A).replace(Jm,`
`).replace(Zm,"")}function Cg(A,e){return e=vg(e),vg(A)===e}function es(){}function Ke(A,e,t,a,l,c){switch(t){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Va(A,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Va(A,""+a);break;case"className":Je(A,"class",a);break;case"tabIndex":Je(A,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Je(A,t,a);break;case"style":Qu(A,a,c);break;case"data":if(e!=="object"){Je(A,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||t!=="href")){A.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){A.removeAttribute(t);break}a=so(""+a),A.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){A.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(t==="formAction"?(e!=="input"&&Ke(A,e,"name",l.name,l,null),Ke(A,e,"formEncType",l.formEncType,l,null),Ke(A,e,"formMethod",l.formMethod,l,null),Ke(A,e,"formTarget",l.formTarget,l,null)):(Ke(A,e,"encType",l.encType,l,null),Ke(A,e,"method",l.method,l,null),Ke(A,e,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){A.removeAttribute(t);break}a=so(""+a),A.setAttribute(t,a);break;case"onClick":a!=null&&(A.onclick=es);break;case"onScroll":a!=null&&Ce("scroll",A);break;case"onScrollEnd":a!=null&&Ce("scrollend",A);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(o(60));A.innerHTML=t}}break;case"multiple":A.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":A.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){A.removeAttribute("xlink:href");break}t=so(""+a),A.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?A.setAttribute(t,""+a):A.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?A.setAttribute(t,""):A.removeAttribute(t);break;case"capture":case"download":a===!0?A.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?A.setAttribute(t,a):A.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?A.setAttribute(t,a):A.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?A.removeAttribute(t):A.setAttribute(t,a);break;case"popover":Ce("beforetoggle",A),Ce("toggle",A),Ue(A,"popover",a);break;case"xlinkActuate":ct(A,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ct(A,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ct(A,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ct(A,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ct(A,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ct(A,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ct(A,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ct(A,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ct(A,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ue(A,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Q0.get(t)||t,Ue(A,t,a))}}function Zc(A,e,t,a,l,c){switch(t){case"style":Qu(A,a,c);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(o(60));A.innerHTML=t}}break;case"children":typeof a=="string"?Va(A,a):(typeof a=="number"||typeof a=="bigint")&&Va(A,""+a);break;case"onScroll":a!=null&&Ce("scroll",A);break;case"onScrollEnd":a!=null&&Ce("scrollend",A);break;case"onClick":a!=null&&(A.onclick=es);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!X.hasOwnProperty(t))A:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),e=t.slice(2,l?t.length-7:void 0),c=A[_]||null,c=c!=null?c[t]:null,typeof c=="function"&&A.removeEventListener(e,c,l),typeof a=="function")){typeof c!="function"&&c!==null&&(t in A?A[t]=null:A.hasAttribute(t)&&A.removeAttribute(t)),A.addEventListener(e,a,l);break A}t in A?A[t]=a:a===!0?A.setAttribute(t,""):Ue(A,t,a)}}}function Qt(A,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",A),Ce("load",A);var a=!1,l=!1,c;for(c in t)if(t.hasOwnProperty(c)){var h=t[c];if(h!=null)switch(c){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Ke(A,e,c,h,t,null)}}l&&Ke(A,e,"srcSet",t.srcSet,t,null),a&&Ke(A,e,"src",t.src,t,null);return;case"input":Ce("invalid",A);var w=c=h=l=null,N=null,eA=null;for(a in t)if(t.hasOwnProperty(a)){var vA=t[a];if(vA!=null)switch(a){case"name":l=vA;break;case"type":h=vA;break;case"checked":N=vA;break;case"defaultChecked":eA=vA;break;case"value":c=vA;break;case"defaultValue":w=vA;break;case"children":case"dangerouslySetInnerHTML":if(vA!=null)throw Error(o(137,e));break;default:Ke(A,e,a,vA,t,null)}}wu(A,c,w,N,eA,h,l,!1),io(A);return;case"select":Ce("invalid",A),a=h=c=null;for(l in t)if(t.hasOwnProperty(l)&&(w=t[l],w!=null))switch(l){case"value":c=w;break;case"defaultValue":h=w;break;case"multiple":a=w;default:Ke(A,e,l,w,t,null)}e=c,t=h,A.multiple=!!a,e!=null?Xa(A,!!a,e,!1):t!=null&&Xa(A,!!a,t,!0);return;case"textarea":Ce("invalid",A),c=l=a=null;for(h in t)if(t.hasOwnProperty(h)&&(w=t[h],w!=null))switch(h){case"value":a=w;break;case"defaultValue":l=w;break;case"children":c=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(o(91));break;default:Ke(A,e,h,w,t,null)}vu(A,a,l,c),io(A);return;case"option":for(N in t)if(t.hasOwnProperty(N)&&(a=t[N],a!=null))switch(N){case"selected":A.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ke(A,e,N,a,t,null)}return;case"dialog":Ce("beforetoggle",A),Ce("toggle",A),Ce("cancel",A),Ce("close",A);break;case"iframe":case"object":Ce("load",A);break;case"video":case"audio":for(a=0;a<vi.length;a++)Ce(vi[a],A);break;case"image":Ce("error",A),Ce("load",A);break;case"details":Ce("toggle",A);break;case"embed":case"source":case"link":Ce("error",A),Ce("load",A);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(eA in t)if(t.hasOwnProperty(eA)&&(a=t[eA],a!=null))switch(eA){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Ke(A,e,eA,a,t,null)}return;default:if(dl(e)){for(vA in t)t.hasOwnProperty(vA)&&(a=t[vA],a!==void 0&&Zc(A,e,vA,a,t,void 0));return}}for(w in t)t.hasOwnProperty(w)&&(a=t[w],a!=null&&Ke(A,e,w,a,t,null))}function $m(A,e,t,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,h=null,w=null,N=null,eA=null,vA=null;for(aA in t){var SA=t[aA];if(t.hasOwnProperty(aA)&&SA!=null)switch(aA){case"checked":break;case"value":break;case"defaultValue":N=SA;default:a.hasOwnProperty(aA)||Ke(A,e,aA,null,a,SA)}}for(var tA in a){var aA=a[tA];if(SA=t[tA],a.hasOwnProperty(tA)&&(aA!=null||SA!=null))switch(tA){case"type":c=aA;break;case"name":l=aA;break;case"checked":eA=aA;break;case"defaultChecked":vA=aA;break;case"value":h=aA;break;case"defaultValue":w=aA;break;case"children":case"dangerouslySetInnerHTML":if(aA!=null)throw Error(o(137,e));break;default:aA!==SA&&Ke(A,e,tA,aA,a,SA)}}ll(A,h,w,N,eA,vA,c,l);return;case"select":aA=h=w=tA=null;for(c in t)if(N=t[c],t.hasOwnProperty(c)&&N!=null)switch(c){case"value":break;case"multiple":aA=N;default:a.hasOwnProperty(c)||Ke(A,e,c,null,a,N)}for(l in a)if(c=a[l],N=t[l],a.hasOwnProperty(l)&&(c!=null||N!=null))switch(l){case"value":tA=c;break;case"defaultValue":w=c;break;case"multiple":h=c;default:c!==N&&Ke(A,e,l,c,a,N)}e=w,t=h,a=aA,tA!=null?Xa(A,!!t,tA,!1):!!a!=!!t&&(e!=null?Xa(A,!!t,e,!0):Xa(A,!!t,t?[]:"",!1));return;case"textarea":aA=tA=null;for(w in t)if(l=t[w],t.hasOwnProperty(w)&&l!=null&&!a.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ke(A,e,w,null,a,l)}for(h in a)if(l=a[h],c=t[h],a.hasOwnProperty(h)&&(l!=null||c!=null))switch(h){case"value":tA=l;break;case"defaultValue":aA=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(o(91));break;default:l!==c&&Ke(A,e,h,l,a,c)}yu(A,tA,aA);return;case"option":for(var fe in t)if(tA=t[fe],t.hasOwnProperty(fe)&&tA!=null&&!a.hasOwnProperty(fe))switch(fe){case"selected":A.selected=!1;break;default:Ke(A,e,fe,null,a,tA)}for(N in a)if(tA=a[N],aA=t[N],a.hasOwnProperty(N)&&tA!==aA&&(tA!=null||aA!=null))switch(N){case"selected":A.selected=tA&&typeof tA!="function"&&typeof tA!="symbol";break;default:Ke(A,e,N,tA,a,aA)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in t)tA=t[ce],t.hasOwnProperty(ce)&&tA!=null&&!a.hasOwnProperty(ce)&&Ke(A,e,ce,null,a,tA);for(eA in a)if(tA=a[eA],aA=t[eA],a.hasOwnProperty(eA)&&tA!==aA&&(tA!=null||aA!=null))switch(eA){case"children":case"dangerouslySetInnerHTML":if(tA!=null)throw Error(o(137,e));break;default:Ke(A,e,eA,tA,a,aA)}return;default:if(dl(e)){for(var ze in t)tA=t[ze],t.hasOwnProperty(ze)&&tA!==void 0&&!a.hasOwnProperty(ze)&&Zc(A,e,ze,void 0,a,tA);for(vA in a)tA=a[vA],aA=t[vA],!a.hasOwnProperty(vA)||tA===aA||tA===void 0&&aA===void 0||Zc(A,e,vA,tA,a,aA);return}}for(var J in t)tA=t[J],t.hasOwnProperty(J)&&tA!=null&&!a.hasOwnProperty(J)&&Ke(A,e,J,null,a,tA);for(SA in a)tA=a[SA],aA=t[SA],!a.hasOwnProperty(SA)||tA===aA||tA==null&&aA==null||Ke(A,e,SA,tA,a,aA)}var $c=null,Wc=null;function ts(A){return A.nodeType===9?A:A.ownerDocument}function Qg(A){switch(A){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ug(A,e){if(A===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return A===1&&e==="foreignObject"?0:A}function qc(A,e){return A==="textarea"||A==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pc=null;function Wm(){var A=window.event;return A&&A.type==="popstate"?A===Pc?!1:(Pc=A,!0):(Pc=null,!1)}var Eg=typeof setTimeout=="function"?setTimeout:void 0,qm=typeof clearTimeout=="function"?clearTimeout:void 0,Fg=typeof Promise=="function"?Promise:void 0,Pm=typeof queueMicrotask=="function"?queueMicrotask:typeof Fg<"u"?function(A){return Fg.resolve(null).then(A).catch(AB)}:Eg;function AB(A){setTimeout(function(){throw A})}function oa(A){return A==="head"}function jg(A,e){var t=e,a=0,l=0;do{var c=t.nextSibling;if(A.removeChild(t),c&&c.nodeType===8)if(t=c.data,t==="/$"){if(0<a&&8>a){t=a;var h=A.ownerDocument;if(t&1&&Qi(h.documentElement),t&2&&Qi(h.body),t&4)for(t=h.head,Qi(t),h=t.firstChild;h;){var w=h.nextSibling,N=h.nodeName;h[F]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&h.rel.toLowerCase()==="stylesheet"||t.removeChild(h),h=w}}if(l===0){A.removeChild(c),Ni(e);return}l--}else t==="$"||t==="$?"||t==="$!"?l++:a=t.charCodeAt(0)-48;else a=0;t=c}while(t);Ni(e)}function Ad(A){var e=A.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Ad(t),U(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}A.removeChild(t)}}function eB(A,e,t,a){for(;A.nodeType===1;){var l=t;if(A.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(A.nodeName!=="INPUT"||A.type!=="hidden"))break}else if(a){if(!A[F])switch(e){case"meta":if(!A.hasAttribute("itemprop"))break;return A;case"link":if(c=A.getAttribute("rel"),c==="stylesheet"&&A.hasAttribute("data-precedence"))break;if(c!==l.rel||A.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||A.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||A.getAttribute("title")!==(l.title==null?null:l.title))break;return A;case"style":if(A.hasAttribute("data-precedence"))break;return A;case"script":if(c=A.getAttribute("src"),(c!==(l.src==null?null:l.src)||A.getAttribute("type")!==(l.type==null?null:l.type)||A.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&A.hasAttribute("async")&&!A.hasAttribute("itemprop"))break;return A;default:return A}}else if(e==="input"&&A.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&A.getAttribute("name")===c)return A}else return A;if(A=cn(A.nextSibling),A===null)break}return null}function tB(A,e,t){if(e==="")return null;for(;A.nodeType!==3;)if((A.nodeType!==1||A.nodeName!=="INPUT"||A.type!=="hidden")&&!t||(A=cn(A.nextSibling),A===null))return null;return A}function ed(A){return A.data==="$!"||A.data==="$?"&&A.ownerDocument.readyState==="complete"}function nB(A,e){var t=A.ownerDocument;if(A.data!=="$?"||t.readyState==="complete")e();else{var a=function(){e(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),A._reactRetry=a}}function cn(A){for(;A!=null;A=A.nextSibling){var e=A.nodeType;if(e===1||e===3)break;if(e===8){if(e=A.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return A}var td=null;function Sg(A){A=A.previousSibling;for(var e=0;A;){if(A.nodeType===8){var t=A.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return A;e--}else t==="/$"&&e++}A=A.previousSibling}return null}function kg(A,e,t){switch(e=ts(t),A){case"html":if(A=e.documentElement,!A)throw Error(o(452));return A;case"head":if(A=e.head,!A)throw Error(o(453));return A;case"body":if(A=e.body,!A)throw Error(o(454));return A;default:throw Error(o(451))}}function Qi(A){for(var e=A.attributes;e.length;)A.removeAttributeNode(e[0]);U(A)}var tn=new Map,Hg=new Set;function ns(A){return typeof A.getRootNode=="function"?A.getRootNode():A.nodeType===9?A:A.ownerDocument}var In=xA.d;xA.d={f:aB,r:rB,D:iB,C:oB,L:sB,m:lB,X:dB,S:cB,M:uB};function aB(){var A=In.f(),e=Jo();return A||e}function rB(A){var e=W(A);e!==null&&e.tag===5&&e.type==="form"?qf(e):In.r(A)}var yr=typeof document>"u"?null:document;function Ng(A,e,t){var a=yr;if(a&&typeof e=="string"&&e){var l=Zt(e);l='link[rel="'+A+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),Hg.has(l)||(Hg.add(l),A={rel:A,crossOrigin:t,href:e},a.querySelector(l)===null&&(e=a.createElement("link"),Qt(e,"link",A),p(e),a.head.appendChild(e)))}}function iB(A){In.D(A),Ng("dns-prefetch",A,null)}function oB(A,e){In.C(A,e),Ng("preconnect",A,e)}function sB(A,e,t){In.L(A,e,t);var a=yr;if(a&&A&&e){var l='link[rel="preload"][as="'+Zt(e)+'"]';e==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+Zt(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+Zt(t.imageSizes)+'"]')):l+='[href="'+Zt(A)+'"]';var c=l;switch(e){case"style":c=vr(A);break;case"script":c=Cr(A)}tn.has(c)||(A=v({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:A,as:e},t),tn.set(c,A),a.querySelector(l)!==null||e==="style"&&a.querySelector(Ui(c))||e==="script"&&a.querySelector(Ei(c))||(e=a.createElement("link"),Qt(e,"link",A),p(e),a.head.appendChild(e)))}}function lB(A,e){In.m(A,e);var t=yr;if(t&&A){var a=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+Zt(a)+'"][href="'+Zt(A)+'"]',c=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Cr(A)}if(!tn.has(c)&&(A=v({rel:"modulepreload",href:A},e),tn.set(c,A),t.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Ei(c)))return}a=t.createElement("link"),Qt(a,"link",A),p(a),t.head.appendChild(a)}}}function cB(A,e,t){In.S(A,e,t);var a=yr;if(a&&A){var l=iA(a).hoistableStyles,c=vr(A);e=e||"default";var h=l.get(c);if(!h){var w={loading:0,preload:null};if(h=a.querySelector(Ui(c)))w.loading=5;else{A=v({rel:"stylesheet",href:A,"data-precedence":e},t),(t=tn.get(c))&&nd(A,t);var N=h=a.createElement("link");p(N),Qt(N,"link",A),N._p=new Promise(function(eA,vA){N.onload=eA,N.onerror=vA}),N.addEventListener("load",function(){w.loading|=1}),N.addEventListener("error",function(){w.loading|=2}),w.loading|=4,as(h,e,a)}h={type:"stylesheet",instance:h,count:1,state:w},l.set(c,h)}}}function dB(A,e){In.X(A,e);var t=yr;if(t&&A){var a=iA(t).hoistableScripts,l=Cr(A),c=a.get(l);c||(c=t.querySelector(Ei(l)),c||(A=v({src:A,async:!0},e),(e=tn.get(l))&&ad(A,e),c=t.createElement("script"),p(c),Qt(c,"link",A),t.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(l,c))}}function uB(A,e){In.M(A,e);var t=yr;if(t&&A){var a=iA(t).hoistableScripts,l=Cr(A),c=a.get(l);c||(c=t.querySelector(Ei(l)),c||(A=v({src:A,async:!0,type:"module"},e),(e=tn.get(l))&&ad(A,e),c=t.createElement("script"),p(c),Qt(c,"link",A),t.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(l,c))}}function Mg(A,e,t,a){var l=(l=L.current)?ns(l):null;if(!l)throw Error(o(446));switch(A){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(e=vr(t.href),t=iA(l).hoistableStyles,a=t.get(e),a||(a={type:"style",instance:null,count:0,state:null},t.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){A=vr(t.href);var c=iA(l).hoistableStyles,h=c.get(A);if(h||(l=l.ownerDocument||l,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(A,h),(c=l.querySelector(Ui(A)))&&!c._p&&(h.instance=c,h.state.loading=5),tn.has(A)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},tn.set(A,t),c||fB(l,A,t,h.state))),e&&a===null)throw Error(o(528,""));return h}if(e&&a!==null)throw Error(o(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Cr(t),t=iA(l).hoistableScripts,a=t.get(e),a||(a={type:"script",instance:null,count:0,state:null},t.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,A))}}function vr(A){return'href="'+Zt(A)+'"'}function Ui(A){return'link[rel="stylesheet"]['+A+"]"}function Dg(A){return v({},A,{"data-precedence":A.precedence,precedence:null})}function fB(A,e,t,a){A.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=A.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Qt(e,"link",t),p(e),A.head.appendChild(e))}function Cr(A){return'[src="'+Zt(A)+'"]'}function Ei(A){return"script[async]"+A}function Tg(A,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var a=A.querySelector('style[data-href~="'+Zt(t.href)+'"]');if(a)return e.instance=a,p(a),a;var l=v({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(A.ownerDocument||A).createElement("style"),p(a),Qt(a,"style",l),as(a,t.precedence,A),e.instance=a;case"stylesheet":l=vr(t.href);var c=A.querySelector(Ui(l));if(c)return e.state.loading|=4,e.instance=c,p(c),c;a=Dg(t),(l=tn.get(l))&&nd(a,l),c=(A.ownerDocument||A).createElement("link"),p(c);var h=c;return h._p=new Promise(function(w,N){h.onload=w,h.onerror=N}),Qt(c,"link",a),e.state.loading|=4,as(c,t.precedence,A),e.instance=c;case"script":return c=Cr(t.src),(l=A.querySelector(Ei(c)))?(e.instance=l,p(l),l):(a=t,(l=tn.get(c))&&(a=v({},t),ad(a,l)),A=A.ownerDocument||A,l=A.createElement("script"),p(l),Qt(l,"link",a),A.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,as(a,t.precedence,A));return e.instance}function as(A,e,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,c=l,h=0;h<a.length;h++){var w=a[h];if(w.dataset.precedence===e)c=w;else if(c!==l)break}c?c.parentNode.insertBefore(A,c.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(A,e.firstChild))}function nd(A,e){A.crossOrigin==null&&(A.crossOrigin=e.crossOrigin),A.referrerPolicy==null&&(A.referrerPolicy=e.referrerPolicy),A.title==null&&(A.title=e.title)}function ad(A,e){A.crossOrigin==null&&(A.crossOrigin=e.crossOrigin),A.referrerPolicy==null&&(A.referrerPolicy=e.referrerPolicy),A.integrity==null&&(A.integrity=e.integrity)}var rs=null;function Ig(A,e,t){if(rs===null){var a=new Map,l=rs=new Map;l.set(t,a)}else l=rs,a=l.get(t),a||(a=new Map,l.set(t,a));if(a.has(A))return a;for(a.set(A,null),t=t.getElementsByTagName(A),l=0;l<t.length;l++){var c=t[l];if(!(c[F]||c[I]||A==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var h=c.getAttribute(e)||"";h=A+h;var w=a.get(h);w?w.push(c):a.set(h,[c])}}return a}function Lg(A,e,t){A=A.ownerDocument||A,A.head.insertBefore(t,e==="title"?A.querySelector("head > title"):null)}function hB(A,e,t){if(t===1||e.itemProp!=null)return!1;switch(A){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return A=e.disabled,typeof e.precedence=="string"&&A==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Og(A){return!(A.type==="stylesheet"&&(A.state.loading&3)===0)}var Fi=null;function gB(){}function pB(A,e,t){if(Fi===null)throw Error(o(475));var a=Fi;if(e.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var l=vr(t.href),c=A.querySelector(Ui(l));if(c){A=c._p,A!==null&&typeof A=="object"&&typeof A.then=="function"&&(a.count++,a=is.bind(a),A.then(a,a)),e.state.loading|=4,e.instance=c,p(c);return}c=A.ownerDocument||A,t=Dg(t),(l=tn.get(l))&&nd(t,l),c=c.createElement("link"),p(c);var h=c;h._p=new Promise(function(w,N){h.onload=w,h.onerror=N}),Qt(c,"link",t),e.instance=c}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,A),(A=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=is.bind(a),A.addEventListener("load",e),A.addEventListener("error",e))}}function xB(){if(Fi===null)throw Error(o(475));var A=Fi;return A.stylesheets&&A.count===0&&rd(A,A.stylesheets),0<A.count?function(e){var t=setTimeout(function(){if(A.stylesheets&&rd(A,A.stylesheets),A.unsuspend){var a=A.unsuspend;A.unsuspend=null,a()}},6e4);return A.unsuspend=e,function(){A.unsuspend=null,clearTimeout(t)}}:null}function is(){if(this.count--,this.count===0){if(this.stylesheets)rd(this,this.stylesheets);else if(this.unsuspend){var A=this.unsuspend;this.unsuspend=null,A()}}}var os=null;function rd(A,e){A.stylesheets=null,A.unsuspend!==null&&(A.count++,os=new Map,e.forEach(mB,A),os=null,is.call(A))}function mB(A,e){if(!(e.state.loading&4)){var t=os.get(A);if(t)var a=t.get(null);else{t=new Map,os.set(A,t);for(var l=A.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var h=l[c];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(t.set(h.dataset.precedence,h),a=h)}a&&t.set(null,a)}l=e.instance,h=l.getAttribute("data-precedence"),c=t.get(h)||a,c===a&&t.set(null,l),t.set(h,l),this.count++,a=is.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),c?c.parentNode.insertBefore(l,c.nextSibling):(A=A.nodeType===9?A.head:A,A.insertBefore(l,A.firstChild)),e.state.loading|=4}}var ji={$$typeof:JA,Provider:null,Consumer:null,_currentValue:EA,_currentValue2:EA,_threadCount:0};function BB(A,e,t,a,l,c,h,w){this.tag=1,this.containerInfo=A,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Se(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Se(0),this.hiddenUpdates=Se(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Kg(A,e,t,a,l,c,h,w,N,eA,vA,SA){return A=new BB(A,e,t,h,w,N,eA,SA),e=1,c===!0&&(e|=24),c=zt(3,null,null,e),A.current=c,c.stateNode=A,e=Kl(),e.refCount++,A.pooledCache=e,e.refCount++,c.memoizedState={element:a,isDehydrated:t,cache:e},Gl(c),A}function zg(A){return A?(A=er,A):er}function Rg(A,e,t,a,l,c){l=zg(l),a.context===null?a.context=l:a.pendingContext=l,a=Jn(e),a.payload={element:t},c=c===void 0?null:c,c!==null&&(a.callback=c),t=Zn(A,a,e),t!==null&&(Xt(t,A,e),ri(t,A,e))}function _g(A,e){if(A=A.memoizedState,A!==null&&A.dehydrated!==null){var t=A.retryLane;A.retryLane=t!==0&&t<e?t:e}}function id(A,e){_g(A,e),(A=A.alternate)&&_g(A,e)}function Gg(A){if(A.tag===13){var e=Ar(A,67108864);e!==null&&Xt(e,A,67108864),id(A,67108864)}}var ss=!0;function bB(A,e,t,a){var l=Y.T;Y.T=null;var c=xA.p;try{xA.p=2,od(A,e,t,a)}finally{xA.p=c,Y.T=l}}function wB(A,e,t,a){var l=Y.T;Y.T=null;var c=xA.p;try{xA.p=8,od(A,e,t,a)}finally{xA.p=c,Y.T=l}}function od(A,e,t,a){if(ss){var l=sd(a);if(l===null)Jc(A,e,a,ls,t),Xg(A,a);else if(vB(l,A,e,t,a))a.stopPropagation();else if(Xg(A,a),e&4&&-1<yB.indexOf(A)){for(;l!==null;){var c=W(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var h=CA(c.pendingLanes);if(h!==0){var w=c;for(w.pendingLanes|=2,w.entangledLanes|=2;h;){var N=1<<31-uA(h);w.entanglements[1]|=N,h&=~N}xn(c),(Ie&6)===0&&(Xo=re()+500,yi(0))}}break;case 13:w=Ar(c,2),w!==null&&Xt(w,c,2),Jo(),id(c,2)}if(c=sd(a),c===null&&Jc(A,e,a,ls,t),c===l)break;l=c}l!==null&&a.stopPropagation()}else Jc(A,e,a,null,t)}}function sd(A){return A=fl(A),ld(A)}var ls=null;function ld(A){if(ls=null,A=$(A),A!==null){var e=u(A);if(e===null)A=null;else{var t=e.tag;if(t===13){if(A=f(e),A!==null)return A;A=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;A=null}else e!==A&&(A=null)}}return ls=A,null}function Yg(A){switch(A){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(le()){case we:return 2;case Ne:return 8;case se:case Qe:return 32;case lt:return 268435456;default:return 32}default:return 32}}var cd=!1,sa=null,la=null,ca=null,Si=new Map,ki=new Map,da=[],yB="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Xg(A,e){switch(A){case"focusin":case"focusout":sa=null;break;case"dragenter":case"dragleave":la=null;break;case"mouseover":case"mouseout":ca=null;break;case"pointerover":case"pointerout":Si.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ki.delete(e.pointerId)}}function Hi(A,e,t,a,l,c){return A===null||A.nativeEvent!==c?(A={blockedOn:e,domEventName:t,eventSystemFlags:a,nativeEvent:c,targetContainers:[l]},e!==null&&(e=W(e),e!==null&&Gg(e)),A):(A.eventSystemFlags|=a,e=A.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),A)}function vB(A,e,t,a,l){switch(e){case"focusin":return sa=Hi(sa,A,e,t,a,l),!0;case"dragenter":return la=Hi(la,A,e,t,a,l),!0;case"mouseover":return ca=Hi(ca,A,e,t,a,l),!0;case"pointerover":var c=l.pointerId;return Si.set(c,Hi(Si.get(c)||null,A,e,t,a,l)),!0;case"gotpointercapture":return c=l.pointerId,ki.set(c,Hi(ki.get(c)||null,A,e,t,a,l)),!0}return!1}function Vg(A){var e=$(A.target);if(e!==null){var t=u(e);if(t!==null){if(e=t.tag,e===13){if(e=f(t),e!==null){A.blockedOn=e,nA(A.priority,function(){if(t.tag===13){var a=Yt();a=HA(a);var l=Ar(t,a);l!==null&&Xt(l,t,a),id(t,a)}});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){A.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}A.blockedOn=null}function cs(A){if(A.blockedOn!==null)return!1;for(var e=A.targetContainers;0<e.length;){var t=sd(A.nativeEvent);if(t===null){t=A.nativeEvent;var a=new t.constructor(t.type,t);ul=a,t.target.dispatchEvent(a),ul=null}else return e=W(t),e!==null&&Gg(e),A.blockedOn=t,!1;e.shift()}return!0}function Jg(A,e,t){cs(A)&&t.delete(e)}function CB(){cd=!1,sa!==null&&cs(sa)&&(sa=null),la!==null&&cs(la)&&(la=null),ca!==null&&cs(ca)&&(ca=null),Si.forEach(Jg),ki.forEach(Jg)}function ds(A,e){A.blockedOn===e&&(A.blockedOn=null,cd||(cd=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,CB)))}var us=null;function Zg(A){us!==A&&(us=A,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){us===A&&(us=null);for(var e=0;e<A.length;e+=3){var t=A[e],a=A[e+1],l=A[e+2];if(typeof a!="function"){if(ld(a||t)===null)continue;break}var c=W(t);c!==null&&(A.splice(e,3),e-=3,lc(c,{pending:!0,data:l,method:t.method,action:a},a,l))}}))}function Ni(A){function e(N){return ds(N,A)}sa!==null&&ds(sa,A),la!==null&&ds(la,A),ca!==null&&ds(ca,A),Si.forEach(e),ki.forEach(e);for(var t=0;t<da.length;t++){var a=da[t];a.blockedOn===A&&(a.blockedOn=null)}for(;0<da.length&&(t=da[0],t.blockedOn===null);)Vg(t),t.blockedOn===null&&da.shift();if(t=(A.ownerDocument||A).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var l=t[a],c=t[a+1],h=l[_]||null;if(typeof c=="function")h||Zg(t);else if(h){var w=null;if(c&&c.hasAttribute("formAction")){if(l=c,h=c[_]||null)w=h.formAction;else if(ld(l)!==null)continue}else w=h.action;typeof w=="function"?t[a+1]=w:(t.splice(a,3),a-=3),Zg(t)}}}function dd(A){this._internalRoot=A}fs.prototype.render=dd.prototype.render=function(A){var e=this._internalRoot;if(e===null)throw Error(o(409));var t=e.current,a=Yt();Rg(t,a,A,e,null,null)},fs.prototype.unmount=dd.prototype.unmount=function(){var A=this._internalRoot;if(A!==null){this._internalRoot=null;var e=A.containerInfo;Rg(A.current,2,null,A,null,null),Jo(),e[b]=null}};function fs(A){this._internalRoot=A}fs.prototype.unstable_scheduleHydration=function(A){if(A){var e=j();A={blockedOn:null,target:A,priority:e};for(var t=0;t<da.length&&e!==0&&e<da[t].priority;t++);da.splice(t,0,A),t===0&&Vg(A)}};var $g=r.version;if($g!=="19.1.0")throw Error(o(527,$g,"19.1.0"));xA.findDOMNode=function(A){var e=A._reactInternals;if(e===void 0)throw typeof A.render=="function"?Error(o(188)):(A=Object.keys(A).join(","),Error(o(268,A)));return A=g(e),A=A!==null?B(A):null,A=A===null?null:A.stateNode,A};var QB={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hs.isDisabled&&hs.supportsFiber)try{Te=hs.inject(QB),xe=hs}catch{}}return Di.createRoot=function(A,e){if(!d(A))throw Error(o(299));var t=!1,a="",l=uh,c=fh,h=hh,w=null;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(h=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(w=e.unstable_transitionCallbacks)),e=Kg(A,1,!1,null,null,t,a,l,c,h,w,null),A[b]=e.current,Vc(A),new dd(e)},Di.hydrateRoot=function(A,e,t){if(!d(A))throw Error(o(299));var a=!1,l="",c=uh,h=fh,w=hh,N=null,eA=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(h=t.onCaughtError),t.onRecoverableError!==void 0&&(w=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(N=t.unstable_transitionCallbacks),t.formState!==void 0&&(eA=t.formState)),e=Kg(A,1,!0,e,t??null,a,l,c,h,w,N,eA),e.context=zg(null),t=e.current,a=Yt(),a=HA(a),l=Jn(a),l.callback=null,Zn(t,l,a),t=a,e.current.lanes=t,_e(e,t),xn(e),A[b]=e.current,Vc(A),new fs(e)},Di.version="19.1.0",Di}var ip;function IB(){if(ip)return hd.exports;ip=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),hd.exports=TB(),hd.exports}var LB=IB();/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OB=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),KB=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,o)=>o?o.toUpperCase():s.toLowerCase()),op=i=>{const r=KB(i);return r.charAt(0).toUpperCase()+r.slice(1)},sx=(...i)=>i.filter((r,s,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===s).join(" ").trim(),zB=i=>{for(const r in i)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var RB={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _B=k.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:d="",children:u,iconNode:f,...x},g)=>k.createElement("svg",{ref:g,...RB,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:sx("lucide",d),...!u&&!zB(x)&&{"aria-hidden":"true"},...x},[...f.map(([B,v])=>k.createElement(B,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=(i,r)=>{const s=k.forwardRef(({className:o,...d},u)=>k.createElement(_B,{ref:u,iconNode:r,className:sx(`lucide-${OB(op(i))}`,`lucide-${i}`,o),...d}));return s.displayName=op(i),s};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GB=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],YB=oe("activity",GB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XB=[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]],VB=oe("app-window",XB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JB=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Rn=oe("arrow-left",JB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZB=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],_n=oe("arrow-right",ZB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $B=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],lx=oe("book-open",$B);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WB=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],cx=oe("box",WB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qB=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],PB=oe("calendar",qB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"M8 6h10",key:"9lnwnk"}],["path",{d:"M6 12h9",key:"1g9pqf"}],["path",{d:"M11 18h7",key:"c8dzvl"}]],eb=oe("chart-no-axes-gantt",Ab);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],nb=oe("circle",tb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],rb=oe("cloud",ab);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],ob=oe("code",ib);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],wa=oe("copy",sb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],cb=oe("cpu",lb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],ub=oe("database",db);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]],hb=oe("diamond",fb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],bn=oe("download",gb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],xb=oe("file-text",pb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],dx=oe("git-branch",mb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],no=oe("git-merge",Bb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],wb=oe("globe",bb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],vb=oe("grid-3x3",yb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],Qb=oe("hard-drive",Cb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Bn=oe("image",Ub);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],ux=oe("layers",Eb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],jb=oe("list",Fb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],kb=oe("maximize-2",Sb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22",key:"1hyw0i"}],["path",{d:"m20 22-5-5",key:"1m27yz"}]],Nb=oe("merge",Hb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],Db=oe("message-square",Mb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["path",{d:"M5 12h14",key:"1ays0h"}]],cu=oe("minus",Tb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],fx=oe("moon",Ib);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],Ob=oe("mouse-pointer",Lb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],hx=oe("move",Kb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Rb=oe("network",zb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],gx=oe("palette",_b);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]],Yb=oe("pen-line",Gb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Vb=oe("pen",Xb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Zb=oe("play",Jb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],At=oe("plus",$b);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],qb=oe("refresh-cw",Wb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],px=oe("rotate-ccw",Pb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6.01 18H6",key:"19vcac"}],["path",{d:"M10.01 18H10",key:"uamcmx"}],["path",{d:"M15 10v4",key:"qjz1xs"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0",key:"1rif40"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0",key:"6a5xfq"}]],ew=oe("router",Aw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],ya=oe("save",tw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],aw=oe("server",nw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],iw=oe("shield",rw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],sw=oe("smartphone",ow);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],cw=oe("square",lw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],xx=oe("sun",dw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Fe=oe("trash-2",uw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],wn=oe("upload",fw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],gw=oe("user",hw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],du=oe("users",pw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ya=oe("x",xw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Bw=oe("zap",mw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Tr=oe("zoom-in",bw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Ir=oe("zoom-out",ww),yw=({projects:i,onCreateProject:r,onLoadProject:s,onDeleteProject:o})=>{const[d,u]=k.useState(!1);return n.jsxs("div",{className:"evolution-chart-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:"🌿"}),n.jsx("h2",{children:"Evolution Chart Maker"}),n.jsx("p",{children:"Visualize evolutionary relationships and timelines"}),n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(At,{size:16})," New Project"]}),i.length>0&&n.jsxs("div",{className:"project-list",children:[n.jsx("h3",{children:"Your Projects"}),i.map(f=>n.jsxs("div",{className:"project-card",onClick:()=>s(f),children:[n.jsxs("div",{className:"project-card-content",children:[n.jsx("div",{className:"project-card-name",children:f.name}),n.jsxs("div",{className:"project-card-meta",children:[n.jsx("span",{children:new Date(f.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[f.nodes?.length||0," nodes • ",f.connections?.length||0," connections"]})]})]}),n.jsxs("div",{className:"project-card-actions",children:[n.jsx("button",{onClick:x=>{x.stopPropagation(),s(f)},className:"open-btn",children:n.jsx(_n,{size:16})}),n.jsx("button",{onClick:x=>{x.stopPropagation(),confirm("Delete this project?")&&o(f.id)},className:"delete-btn",children:n.jsx(Fe,{size:16})})]})]},f.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Project"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Project Name"}),n.jsx("input",{type:"text",placeholder:"e.g., Mammalian Evolution",id:"projectName",autoFocus:!0})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Timeline Start"}),n.jsx("input",{type:"number",defaultValue:"500",id:"timelineStart"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Timeline End"}),n.jsx("input",{type:"number",defaultValue:"0",id:"timelineEnd"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Time Unit"}),n.jsxs("select",{id:"timeUnit",defaultValue:"mya",children:[n.jsx("option",{value:"bya",children:"Billion Years Ago (BYA)"}),n.jsx("option",{value:"mya",children:"Million Years Ago (MYA)"}),n.jsx("option",{value:"kya",children:"Thousand Years Ago (KYA)"}),n.jsx("option",{value:"ya",children:"Years Ago (YA)"})]})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const f=document.getElementById("projectName").value,x=parseFloat(document.getElementById("timelineStart").value),g=parseFloat(document.getElementById("timelineEnd").value),B=document.getElementById("timeUnit").value;f.trim()&&x>g&&(r(f,x,g,B),u(!1))},className:"create-btn",children:"Create Project"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},gs=[{value:"bya",label:"Billion Years Ago (BYA)",multiplier:1e9},{value:"mya",label:"Million Years Ago (MYA)",multiplier:1e6},{value:"kya",label:"Thousand Years Ago (KYA)",multiplier:1e3},{value:"ya",label:"Years Ago (YA)",multiplier:1}],vw=({project:i,nodes:r,connections:s,onUpdateProject:o,onBack:d})=>{const g=k.useRef(null),B=k.useRef(null),v=k.useRef(null),S=k.useRef(!1),M=k.useRef({x:0,y:0}),oA=k.useRef(null),[AA,dA]=k.useState(r||[]),[DA,NA]=k.useState(s||[]),[pA,JA]=k.useState(null),[mA,bA]=k.useState(null),[G,OA]=k.useState(i?.zoom||1),[V,lA]=k.useState(i?.pan||{x:0,y:0}),[_A,XA]=k.useState(!1),[QA,LA]=k.useState(null),[qA,WA]=k.useState(!1),[Y,xA]=k.useState(null),[EA,PA]=k.useState({}),[C,Z]=k.useState(!1),[gA,hA]=k.useState(0);k.useEffect(()=>{const O=()=>{B.current&&hA(B.current.scrollLeft)},sA=B.current;if(sA)return sA.addEventListener("scroll",O),()=>sA.removeEventListener("scroll",O)},[]),k.useEffect(()=>{if(i){const O=setTimeout(()=>{o({...i,nodes:AA,connections:DA,zoom:G,pan:V})},500);return()=>clearTimeout(O)}},[AA,DA,G,V,i,o]),k.useEffect(()=>{const O=setInterval(()=>{PA(sA=>{const MA={};return DA.forEach(fA=>{MA[fA.id]=((sA[fA.id]||0)+2)%100}),MA})},50);return()=>clearInterval(O)},[DA]);const jA=(O,sA)=>{const MA=gs.find(fA=>fA.value===sA)||gs[0];return O*MA.multiplier},YA=k.useCallback(O=>{if(!i)return 0;const sA=jA(O.value,O.unit),MA=jA(i.timelineStart,i.timeUnit),fA=jA(i.timelineEnd,i.timeUnit),CA=MA-fA;return(MA-sA)/CA*3e3},[i]),L=k.useCallback(O=>{if(!i)return 0;const sA=3e3,MA=jA(i.timelineStart,i.timeUnit),fA=jA(i.timelineEnd,i.timeUnit),CA=MA-fA,de=O/sA;return MA-de*CA},[i]),TA=(O,sA)=>{const MA=O%1===0?O.toFixed(0):O.toFixed(2);return sA==="bya"?`${MA} BYA`:sA==="mya"?`${MA} MYA`:sA==="kya"?`${MA} KYA`:`${MA} YA`},kA=k.useCallback(()=>{if(!i)return[];const O=jA(i.timelineStart,i.timeUnit),sA=jA(i.timelineEnd,i.timeUnit),MA=O-sA,fA=MA/G;let CA;i.timeUnit==="bya"?fA>5e11?CA=1e11:fA>1e11?CA=25e9:fA>5e10?CA=1e10:fA>2e10?CA=5e9:fA>1e10?CA=25e8:fA>5e9?CA=1e9:CA=5e7:i.timeUnit==="mya"?fA>5e8?CA=1e8:fA>1e8?CA=25e6:fA>5e7?CA=1e7:fA>2e7?CA=5e6:fA>1e7?CA=25e5:fA>5e6?CA=1e6:CA=5e5:i.timeUnit==="kya"?fA>5e5?CA=1e5:fA>1e5?CA=25e3:fA>5e4?CA=1e4:fA>2e4?CA=5e3:fA>1e4?CA=2500:fA>5e3?CA=1e3:CA=500:fA>5e3?CA=1e3:fA>2e3?CA=500:fA>1e3?CA=250:fA>500?CA=100:fA>200?CA=50:fA>100?CA=25:fA>50?CA=10:CA=5;const de=[],Be=Math.floor(sA/CA)*CA,he=Math.ceil(O/CA)*CA;for(let ge=Be;ge<=he;ge+=CA)if(ge>=sA&&ge<=O){let ye=ge,Se="ya";ge>=1e9?(ye=ge/1e9,Se="bya"):ge>=1e6?(ye=ge/1e6,Se="mya"):ge>=1e3&&(ye=ge/1e3,Se="kya"),de.push({value:ye,unit:Se,position:(O-ge)/MA})}return de},[i,G]),BA=()=>{const O={};AA.forEach(fA=>{O[fA.id]=0}),DA.forEach(fA=>{O[fA.from]=(O[fA.from]||0)+1,O[fA.to]=(O[fA.to]||0)+1});let sA=null,MA=0;return Object.entries(O).forEach(([fA,CA])=>{CA>MA&&(MA=CA,sA=fA)}),sA?AA.find(fA=>fA.id===parseInt(sA)):null},z=(O,sA)=>{if(!i||!B.current)return;const MA=B.current.getBoundingClientRect(),fA=B.current.scrollLeft,CA=B.current.scrollTop,de=O-MA.left+fA,Be=sA-MA.top+CA-80,ge=L(de/G)/(gs.find(Se=>Se.value===i.timeUnit)?.multiplier||1),ye={id:Date.now(),x:de/G,y:Math.max(20,Be/G),title:"New Species",description:"Description here...",imageSrc:"",timeline:{value:parseFloat(ge.toFixed(4)),unit:i.timeUnit}};dA([...AA,ye]),LA(ye),XA(!0)},q=O=>{dA(AA.map(sA=>sA.id===O.id?O:sA)),LA(null),XA(!1)},RA=O=>{dA(AA.filter(sA=>sA.id!==O)),NA(DA.filter(sA=>sA.from!==O&&sA.to!==O)),JA(null)},FA=(O,sA)=>{const MA={id:Date.now(),from:O,to:sA};NA([...DA,MA])},IA=O=>{NA(DA.filter(sA=>sA.id!==O)),bA(null)},rA=(O,sA)=>{qA||(O.stopPropagation(),S.current=!0,JA(sA),bA(null),M.current={x:O.clientX,y:O.clientY})},ae=k.useCallback(O=>{!S.current||!pA||(oA.current&&cancelAnimationFrame(oA.current),oA.current=requestAnimationFrame(()=>{const sA=O.clientX-M.current.x,MA=O.clientY-M.current.y;M.current={x:O.clientX,y:O.clientY};const fA=pA.x+sA/G,CA=Math.max(20,pA.y+MA/G),de={...pA,x:fA,y:CA};dA(Be=>Be.map(he=>he.id===pA.id?de:he)),JA(de)}))},[pA,G]),re=k.useCallback(()=>{S.current=!1,oA.current&&cancelAnimationFrame(oA.current)},[]),le=(O,sA)=>{O.stopPropagation(),qA?Y?Y!==sA.id&&(DA.find(fA=>fA.from===Y&&fA.to===sA.id||fA.from===sA.id&&fA.to===Y)||FA(Y,sA.id),WA(!1),xA(null)):xA(sA.id):S.current||(JA(sA),bA(null))},we=(O,sA)=>{const MA=YA(O.timeline)*G,fA=O.y*G+80,CA=MA+140*G/2,de=fA+25*G/2,Be=YA(sA.timeline)*G,he=sA.y*G+80,ge=Be+140*G/2,ye=he+25*G/2,Se=ge-CA,_e=ye-de,Ge=Math.atan2(_e,Se);let H,wA;const HA=Math.atan2(25*G/2,140*G/2);return Math.abs(Ge)<=HA?(H=MA+140*G,wA=de+Math.tan(Ge)*(140*G/2)):Math.abs(Ge)>=Math.PI-HA?(H=MA,wA=de-Math.tan(Ge)*(140*G/2)):Ge>0?(wA=fA+25*G,H=CA+25*G/2/Math.tan(Ge)):(wA=fA,H=CA-25*G/2/Math.tan(Ge)),{x:H,y:wA}},Ne=(O,sA)=>{if(!O||!sA)return"";const MA=we(O,sA),fA=we(sA,O),CA=fA.x-MA.x,de=fA.y-MA.y,Be=Math.sqrt(CA*CA+de*de),he=Math.min(Be*.4,150),ge=MA.x+he,ye=MA.y,Se=fA.x-he,_e=fA.y;return`M ${MA.x} ${MA.y} C ${ge} ${ye}, ${Se} ${_e}, ${fA.x} ${fA.y}`},se=(O,sA,MA)=>{if(!O||!sA)return{x:0,y:0,angle:0};const fA=we(O,sA),CA=we(sA,O),de=CA.x-fA.x,Be=CA.y-fA.y,he=Math.sqrt(de*de+Be*Be),ge=Math.min(he*.4,150),ye=fA.x+ge,Se=fA.y,_e=CA.x-ge,Ge=CA.y,H=MA/100,wA=1-H,HA=wA*wA,GA=H*H,j=HA*wA*fA.x+3*HA*H*ye+3*wA*GA*_e+GA*H*CA.x,nA=HA*wA*fA.y+3*HA*H*Se+3*wA*GA*Ge+GA*H*CA.y,y=3*HA*(ye-fA.x)+6*wA*H*(_e-ye)+3*GA*(CA.x-_e),I=3*HA*(Se-fA.y)+6*wA*H*(Ge-Se)+3*GA*(CA.y-Ge),_=Math.atan2(I,y)*180/Math.PI;return{x:j,y:nA,angle:_}},Qe=(O,sA)=>{const MA=we(O,sA),fA=we(sA,O);return{x:(MA.x+fA.x)/2,y:(MA.y+fA.y)/2}},lt=()=>{if(!i)return;const sA=JSON.stringify({project:i,nodes:AA,connections:DA,zoom:G,pan:V},null,2),MA=new Blob([sA],{type:"application/json"}),fA=URL.createObjectURL(MA),CA=document.createElement("a");CA.href=fA,CA.download=`${i.name.replace(/\s+/g,"-")}-evolution-chart.json`,CA.click(),URL.revokeObjectURL(fA)},We=O=>{const sA=O.target.files[0];if(!sA)return;const MA=new FileReader;MA.onload=fA=>{try{const CA=JSON.parse(fA.target.result);CA.project&&CA.nodes&&(o({...CA.project,nodes:CA.nodes,connections:CA.connections,zoom:CA.zoom,pan:CA.pan}),dA(CA.nodes),NA(CA.connections),OA(CA.zoom||1),lA(CA.pan||{x:0,y:0}))}catch{alert("Error parsing the file. Please check the file format.")}},MA.readAsText(sA)},nt=O=>{O.ctrlKey||O.metaKey?z(O.clientX,O.clientY):(JA(null),bA(null),qA&&(WA(!1),xA(null)))},Te=O=>{LA(O),XA(!0)},xe=O=>{OA(sA=>Math.max(.1,Math.min(5,sA+O)))},K=O=>{if(O.ctrlKey||O.metaKey){O.preventDefault();const sA=B.current.getBoundingClientRect();O.clientX-sA.left,O.clientY-sA.top;const MA=-O.deltaY*.001,fA=Math.max(.1,Math.min(5,G+MA));OA(fA)}},uA=k.useCallback(O=>{if(O.target.tagName==="INPUT"||O.target.tagName==="TEXTAREA")return;const sA=20;switch(O.key){case"ArrowUp":O.preventDefault(),B.current&&(B.current.scrollTop-=sA);break;case"ArrowDown":O.preventDefault(),B.current&&(B.current.scrollTop+=sA);break;case"ArrowLeft":O.preventDefault(),B.current&&(B.current.scrollLeft-=sA);break;case"ArrowRight":O.preventDefault(),B.current&&(B.current.scrollLeft+=sA);break}},[]);k.useEffect(()=>(document.addEventListener("keydown",uA),()=>{document.removeEventListener("keydown",uA)}),[uA]),k.useEffect(()=>(document.addEventListener("mousemove",ae),document.addEventListener("mouseup",re),()=>{document.removeEventListener("mousemove",ae),document.removeEventListener("mouseup",re),oA.current&&cancelAnimationFrame(oA.current)}),[ae,re]);const KA=BA();return n.jsxs("div",{className:`evolution-chart ${C?"dark":""}`,children:[n.jsxs("div",{className:"header",children:[n.jsxs("div",{className:"header-left",children:[n.jsx("h1",{children:"🧬 Evolution Chart Maker"}),n.jsx("span",{className:"project-name",children:i?.name})]}),n.jsxs("div",{className:"toolbar",children:[n.jsx("button",{onClick:d,className:"btn btn-primary",children:"← Back to Projects"}),n.jsx("button",{onClick:()=>{WA(!qA),xA(null)},className:`btn ${qA?"btn-danger":"btn-warning"}`,children:qA?"Cancel Connection":"🔗 Connect Nodes"}),n.jsxs("button",{onClick:()=>v.current?.click(),className:"btn btn-info",children:[n.jsx(wn,{size:16})," Import"]}),n.jsxs("button",{onClick:lt,className:"btn btn-success",children:[n.jsx(bn,{size:16})," Export"]}),n.jsxs("button",{onClick:()=>Z(!C),className:"btn btn-secondary",children:[C?n.jsx(xx,{size:16}):n.jsx(fx,{size:16}),C?" Light":" Dark"]}),n.jsxs("div",{className:"zoom-controls",children:[n.jsx("button",{onClick:()=>xe(.2),className:"zoom-btn",children:n.jsx(Tr,{size:16})}),n.jsxs("span",{className:"zoom-level",children:[Math.round(G*100),"%"]}),n.jsx("button",{onClick:()=>xe(-.2),className:"zoom-btn",children:n.jsx(Ir,{size:16})})]})]})]}),n.jsx("div",{className:"timeline",children:kA().map((O,sA)=>n.jsxs("div",{className:"timeline-marker",style:{left:`${O.position*3e3*G-gA}px`},children:[n.jsx("div",{className:"timeline-tick"}),n.jsx("span",{className:"timeline-label",children:TA(O.value,O.unit)})]},sA))}),n.jsx("div",{ref:B,className:"scroll-container",onWheel:K,children:n.jsxs("div",{ref:g,onClick:nt,className:"canvas",style:{cursor:qA?"crosshair":"default",width:`${3e3*G}px`,height:`${2e3*G}px`,minHeight:"100%"},children:[n.jsxs("svg",{className:"connections-layer",style:{width:"100%",height:"100%"},children:[n.jsxs("defs",{children:[n.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"10",refX:"9",refY:"3",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3, 0 6",className:"arrowhead"})}),n.jsx("marker",{id:"arrowhead-selected",markerWidth:"10",markerHeight:"10",refX:"9",refY:"3",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3, 0 6",className:"arrowhead-selected"})}),n.jsx("marker",{id:"arrowhead-central",markerWidth:"10",markerHeight:"10",refX:"9",refY:"3",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3, 0 6",className:"arrowhead-central"})})]}),DA.map(O=>{const sA=AA.find(he=>he.id===O.from),MA=AA.find(he=>he.id===O.to);if(!sA||!MA)return null;const fA=Qe(sA,MA),CA=mA===O.id||pA&&(pA.id===sA.id||pA.id===MA.id),de=KA&&(sA.id===KA.id||MA.id===KA.id),Be=se(sA,MA,EA[O.id]||0);return n.jsxs("g",{children:[n.jsx("path",{d:Ne(sA,MA),className:`connection-path ${CA?"selected":""} ${de?"central":""}`,strokeWidth:de?"3":"2",fill:"none",markerEnd:`url(#${CA?"arrowhead-selected":de?"arrowhead-central":"arrowhead"})`}),n.jsx("polygon",{points:"0,-4 8,0 0,4",className:`arrow ${CA?"selected":""} ${de?"central":""}`,transform:`translate(${Be.x}, ${Be.y}) rotate(${Be.angle})`}),CA&&n.jsx("circle",{cx:fA.x,cy:fA.y,r:10,className:"delete-connection",onClick:he=>{he.stopPropagation(),IA(O.id)},style:{cursor:"pointer",pointerEvents:"all"}})]},O.id)})]}),AA.map(O=>{const sA=KA&&KA.id===O.id,MA=pA?.id===O.id;return n.jsxs("div",{className:`node ${MA?"selected":""} ${sA?"central":""}`,style:{left:`${YA(O.timeline)*G}px`,top:`${O.y*G+80}px`,width:`${140*G}px`,height:`${25*G}px`,fontSize:`${13*G}px`},onMouseDown:fA=>rA(fA,O),onClick:fA=>le(fA,O),onDoubleClick:()=>Te(O),children:[O.imageSrc&&n.jsx("img",{src:O.imageSrc,alt:O.title,className:"node-image",style:{width:`${32*G}px`,height:`${32*G}px`}}),n.jsxs("div",{className:"node-content",children:[n.jsx("div",{className:"node-title",children:O.title}),n.jsx("div",{className:"node-time",children:TA(O.timeline.value,O.timeline.unit)})]}),MA&&n.jsx("button",{onClick:fA=>{fA.stopPropagation(),RA(O.id)},className:"delete-btn",style:{width:`${24*G}px`,height:`${24*G}px`,top:`${-8*G}px`,right:`${-8*G}px`},children:n.jsx(Fe,{size:14*G})})]},O.id)}),qA&&n.jsx("div",{className:"connection-hint",children:Y?"🎯 Select target node":"🎯 Select source node"}),n.jsxs("div",{className:"help-panel",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"💡 Ctrl+Click:"})," Create node"]}),n.jsxs("div",{children:[n.jsx("strong",{children:"🔗 Connect:"})," Link nodes"]}),n.jsxs("div",{children:[n.jsx("strong",{children:"🖱️ Drag:"})," Move vertically"]}),n.jsxs("div",{children:[n.jsx("strong",{children:"✏️ Double-click:"})," Edit"]}),n.jsxs("div",{children:[n.jsx("strong",{children:"📜 Scrollbars:"})," Navigate canvas"]}),n.jsxs("div",{children:[n.jsx("strong",{children:"⚡ Ctrl+Scroll:"})," Zoom"]}),n.jsxs("div",{children:[n.jsx("strong",{children:"⬆️⬇️⬅️➡️ Arrow keys:"})," Navigate"]})]})]})}),_A&&QA&&n.jsx("div",{className:"modal-overlay",onClick:()=>XA(!1),children:n.jsxs("div",{className:"modal",onClick:O=>O.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"✏️ Edit Node"}),n.jsx("button",{onClick:()=>XA(!1),className:"close-btn",children:n.jsx(Ya,{size:20})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Title"}),n.jsx("input",{type:"text",defaultValue:QA.title,placeholder:"Species name",id:"nodeTitle"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Image URL"}),n.jsx("input",{type:"text",defaultValue:QA.imageSrc,placeholder:"https://example.com/image.jpg",id:"nodeImage"})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Timeline Value"}),n.jsx("input",{type:"number",step:"any",defaultValue:QA.timeline.value,id:"nodeTimelineValue"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Time Unit"}),n.jsx("select",{id:"nodeTimelineUnit",defaultValue:QA.timeline.unit,children:gs.map(O=>n.jsx("option",{value:O.value,children:O.value.toUpperCase()},O.value))})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Description"}),n.jsx("textarea",{defaultValue:QA.description,placeholder:"Brief description...",rows:4,id:"nodeDescription"})]}),n.jsxs("div",{className:"form-actions",children:[n.jsx("button",{onClick:()=>XA(!1),className:"btn btn-secondary",children:"Cancel"}),n.jsx("button",{onClick:()=>{const O={...QA,title:document.getElementById("nodeTitle").value,imageSrc:document.getElementById("nodeImage").value,timeline:{value:parseFloat(document.getElementById("nodeTimelineValue").value),unit:document.getElementById("nodeTimelineUnit").value},description:document.getElementById("nodeDescription").value};q(O)},className:"btn btn-primary",children:"💾 Save Changes"})]})]})}),n.jsx("input",{ref:v,type:"file",accept:".json",onChange:We,style:{display:"none"}}),n.jsx("style",{jsx:!0,children:`
        .evolution-chart {
          width: 100vw;
          height: 100vh;
          background: white;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          overflow: hidden;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .evolution-chart.dark {
          background: #0f172a;
          color: #f8fafc;
        }
        
        .header {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          padding: 16px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          z-index: 1000;
          position: relative;
        }
        
        .dark .header {
          background: rgba(15, 23, 42, 0.98);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }
        
        .header-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .project-name {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
        }
        
        .toolbar {
          display: flex;
          gap: 10px;
          align-items: center;
          margin-right: 120px;
        }
        
        .btn {
          border: none;
          padding: 10px 18px;
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.2s;
          color: white;
        }
        
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .btn-secondary {
          background: #94a3b8;
        }
        
        .dark .btn-secondary {
          background: #475569;
        }
        
        .btn-success {
          background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
        }
        
        .btn-warning {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
        }
        
        .btn-danger {
          background: linear-gradient(135deg, #f87171 0%, #ef4444 100%);
        }
        
        .btn-info {
          background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
        }
        
        .zoom-controls {
          display: flex;
          gap: 8px;
          align-items: center;
          background: #f1f5f9;
          padding: 4px;
          border-radius: 10px;
        }
        
        .dark .zoom-controls {
          background: #1e293b;
        }
        
        .zoom-btn {
          padding: 8px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          background: white;
          display: flex;
          align-items: center;
          transition: all 0.2s;
        }
        
        .dark .zoom-btn {
          background: #334155;
          color: #f8fafc;
        }
        
        .zoom-btn:hover {
          background: #e2e8f0;
        }
        
        .dark .zoom-btn:hover {
          background: #475569;
        }
        
        .zoom-level {
          font-size: 13px;
          font-weight: 600;
          color: #475569;
          min-width: 45px;
          text-align: center;
        }
        
        .dark .zoom-level {
          color: #cbd5e1;
        }
        
        .timeline {
          position: absolute;
          top: 70px;
          left: 0;
          right: 0;
          height: 80px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 3px solid rgba(102, 126, 234, 0.3);
          z-index: 100;
          overflow: hidden;
        }
        
        .dark .timeline {
          background: rgba(15, 23, 42, 0.95);
          border-bottom: 3px solid rgba(102, 126, 234, 0.5);
        }
        
        .timeline-marker {
          position: absolute;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        
        .timeline-tick {
          width: 2px;
          height: 30px;
          background: linear-gradient(to bottom, #667eea, transparent);
          margin-bottom: 8px;
        }
        
        .timeline-label {
          font-size: 13px;
          font-weight: 700;
          color: #475569;
          white-space: nowrap;
          background: rgba(255,255,255,0.9);
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid rgba(102, 126, 234, 0.2);
        }
        
        .dark .timeline-label {
          color: #cbd5e1;
          background: rgba(30, 41, 59, 0.9);
          border: 1px solid rgba(102, 126, 234, 0.4);
        }
        
        .scroll-container {
          position: absolute;
          top: 150px;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: auto;
          background: #f8fafc;
        }
        
        .dark .scroll-container {
          background: #0f172a;
        }
        
        .scroll-container::-webkit-scrollbar {
          width: 12px;
          height: 12px;
        }
        
        .scroll-container::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
        }
        
        .dark .scroll-container::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        
        .scroll-container::-webkit-scrollbar-thumb {
          background: rgba(102, 126, 234, 0.3);
          border-radius: 6px;
        }
        
        .scroll-container::-webkit-scrollbar-thumb:hover {
          background: rgba(102, 126, 234, 0.5);
        }
        
        .dark .scroll-container::-webkit-scrollbar-thumb {
          background: rgba(102, 126, 234, 0.5);
        }
        
        .dark .scroll-container::-webkit-scrollbar-thumb:hover {
          background: rgba(102, 126, 234, 0.7);
        }
        
        .canvas {
          position: relative;
          background: #f8fafc;
          transition: background 0.3s ease;
        }
        
        .dark .canvas {
          background: #0f172a;
        }
        
        .connections-layer {
          position: absolute;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 1;
        }
        
        .connection-path {
          stroke: rgba(102, 126, 234, 0.6);
          transition: all 0.3s ease;
        }
        
        .dark .connection-path {
          stroke: rgba(102, 126, 234, 0.8);
        }
        
        .connection-path.selected {
          stroke: #fbbf24;
          stroke-width: 3;
        }
        
        .connection-path.central {
          stroke: #60a5fa;
          stroke-width: 3;
        }
        
        .arrowhead {
          fill: rgba(102, 126, 234, 0.6);
        }
        
        .dark .arrowhead {
          fill: rgba(102, 126, 234, 0.8);
        }
        
        .arrowhead-selected {
          fill: #fbbf24;
        }
        
        .arrowhead-central {
          fill: #60a5fa;
        }
        
        .arrow {
          fill: rgba(102, 126, 234, 0.6);
        }
        
        .dark .arrow {
          fill: rgba(102, 126, 234, 0.8);
        }
        
        .arrow.selected {
          fill: #fbbf24;
        }
        
        .arrow.central {
          fill: #60a5fa;
        }
        
        .delete-connection {
          fill: #ef4444;
          stroke: white;
          stroke-width: 2;
          transition: all 0.2s;
        }
        
        .delete-connection:hover {
          fill: #dc2626;
          transform: scale(1.1);
        }
        
        .node {
          position: absolute;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 10px;
          cursor: grab;
          z-index: 10;
          border: 2px solid rgba(148, 145, 145, 0.5);
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .dark .node {
          background: rgba(30, 41, 59, 0.95);
          border: 2px solid rgba(255,255,255,0.1);
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        
        .node:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        
        .dark .node:hover {
          box-shadow: 0 8px 25px rgba(0,0,0,0.4);
        }
        
        .node.selected {
          border: 2px solid #fbbf24;
          box-shadow: 0 8px 25px rgba(251, 191, 36, 0.3);
          z-index: 100;
        }
        
        .node.central {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15));
          border: 2px solid #60a5fa;
          box-shadow: 0 8px 25px rgba(96, 165, 250, 0.3);
        }
        
        .dark .node.central {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.25), rgba(118, 75, 162, 0.25));
        }
        
        .node.central.selected {
          border: 2px solid #fbbf24;
          box-shadow: 0 8px 25px rgba(251, 191, 36, 0.4);
        }
        
        .node:active {
          cursor: grabbing;
        }
        
        .node-image {
          object-fit: cover;
          border-radius: 50%;
          flex-shrink: 0;
          border: 2px solid rgba(102, 126, 234, 0.2);
        }
        
        .node-content {
          flex: 1;
          min-width: 0;
        }
        
        .node-title {
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 2px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .dark .node-title {
          color: #f8fafc;
        }
        
        .node-time {
          font-size: 0.85em;
          font-weight: 600;
          color: #64748b;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .dark .node-time {
          color: #94a3b8;
        }
        
        .delete-btn {
          position: absolute;
          background: #ef4444;
          color: white;
          border: 2px solid white;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 200;
          transition: all 0.2s;
        }
        
        .dark .delete-btn {
          border: 2px solid #0f172a;
        }
        
        .delete-btn:hover {
          background: #dc2626;
          transform: scale(1.1);
        }
        
        .connection-hint {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 12px 24px;
          border-radius: 24px;
          font-size: 14px;
          font-weight: 600;
          color: #475569;
          box-shadow: 0 8px 32px rgba(0,0,0,0.15);
          z-index: 1000;
          animation: pulse 2s infinite;
        }
        
        .dark .connection-hint {
          background: rgba(30, 41, 59, 0.95);
          color: #cbd5e1;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        
        @keyframes pulse {
          0%, 100% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(-50%) scale(1.05); }
        }
        
        .help-panel {
          position: fixed;
          bottom: 20px;
          left: 20px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 16px;
          border-radius: 12px;
          font-size: 12px;
          color: #475569;
          z-index: 100;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }
        
        .dark .help-panel {
          background: rgba(30, 41, 59, 0.95);
          color: #cbd5e1;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        
        .help-panel div {
          margin-bottom: 6px;
          line-height: 1.5;
        }
        
        .help-panel div:last-child {
          margin-bottom: 0;
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          animation: fadeIn 0.2s;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .modal {
          background: white;
          border-radius: 20px;
          padding: 28px;
          width: 480px;
          max-height: 85vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .dark .modal {
          background: #1e293b;
          color: #f8fafc;
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        
        .modal-header h2 {
          margin: 0;
          font-size: 22px;
          font-weight: 700;
          color: #1e293b;
        }
        
        .dark .modal-header h2 {
          color: #f8fafc;
        }
        
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          color: #64748b;
          transition: color 0.2s;
        }
        
        .dark .close-btn {
          color: #94a3b8;
        }
        
        .close-btn:hover {
          color: #1e293b;
        }
        
        .dark .close-btn:hover {
          color: #f8fafc;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #475569;
          font-size: 14px;
        }
        
        .dark .form-group label {
          color: #cbd5e1;
        }
        
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          font-size: 14px;
          font-family: inherit;
          transition: all 0.2s;
          background: white;
          color: #1e293b;
        }
        
        .dark .form-group input,
        .dark .form-group textarea,
        .dark .form-group select {
          background: #334155;
          border: 2px solid #475569;
          color: #f8fafc;
        }
        
        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .dark .form-group input:focus,
        .dark .form-group textarea:focus,
        .dark .form-group select:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
        }
        
        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }
        
        .form-row {
          display: flex;
          gap: 16px;
        }
        
        .form-row .form-group {
          flex: 1;
        }
        
        .form-actions {
          display: flex;
          gap: 12px;
          margin-top: 24px;
        }
        
        .form-actions .btn {
          flex: 1;
          justify-content: center;
        }
        
        select {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 16px;
          padding-right: 40px;
        }
        
        .dark select {
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23cbd5e1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
        }
      `})]})},Cw=({flowcharts:i,onCreateFlowchart:r,onLoadFlowchart:s,onDeleteFlowchart:o,onImportFlowchart:d})=>{const[u,f]=k.useState(!1),[x,g]=k.useState(!1),[B,v]=k.useState("");return n.jsxs("div",{className:"flowchart-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:"📊"}),n.jsx("h2",{children:"Flowchart Designer"}),n.jsx("p",{children:"Create and visualize complex processes with intuitive flowcharts"}),n.jsxs("div",{className:"action-buttons",children:[n.jsxs("button",{onClick:()=>f(!0),className:"primary-btn",children:[n.jsx(At,{size:16})," New Flowchart"]}),n.jsxs("button",{onClick:()=>g(!0),className:"secondary-btn",children:[n.jsx(wn,{size:16})," Import"]})]}),i.length>0&&n.jsxs("div",{className:"flowchart-list",children:[n.jsx("h3",{children:"Your Flowcharts"}),i.map(S=>n.jsxs("div",{className:"flowchart-card",onClick:()=>s(S),children:[n.jsxs("div",{className:"flowchart-card-content",children:[n.jsx("div",{className:"flowchart-card-name",children:S.name}),n.jsxs("div",{className:"flowchart-card-meta",children:[n.jsx("span",{children:new Date(S.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[S.nodes?.length||0," nodes • ",S.edges?.length||0," edges"]})]})]}),n.jsxs("div",{className:"flowchart-card-actions",children:[n.jsx("button",{onClick:M=>{M.stopPropagation(),s(S)},className:"open-btn",children:n.jsx(_n,{size:16})}),n.jsx("button",{onClick:M=>{M.stopPropagation(),confirm("Delete this flowchart?")&&o(S.id)},className:"delete-btn",children:n.jsx(Fe,{size:16})})]})]},S.id))]})]}),u&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Flowchart"}),n.jsx("button",{onClick:()=>f(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Flowchart Name"}),n.jsx("input",{type:"text",placeholder:"e.g., User Registration Flow",id:"flowchartName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>f(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const S=document.getElementById("flowchartName").value;S.trim()&&(r(S),f(!1))},className:"create-btn",children:"Create Flowchart"})]})]})}),x&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Import Flowchart"}),n.jsx("button",{onClick:()=>g(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Paste JSON Data"}),n.jsx("textarea",{value:B,onChange:S=>v(S.target.value),placeholder:"Paste your flowchart JSON here...",rows:8})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>g(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{try{d(B),g(!1),v("")}catch(S){alert("Invalid JSON: "+S.message)}},className:"create-btn",children:"Import"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},Qw=({flowchart:i,nodes:r,edges:s,jsonInput:o,onJsonInputChange:d,onImportJson:u,onUpdateFlowchart:f,onBack:x})=>{const[g,B]=k.useState("editor"),[v,S]=k.useState(null),[M,oA]=k.useState(null),[AA,dA]=k.useState(null),[DA,NA]=k.useState(null),[pA,JA]=k.useState(null),[mA,bA]=k.useState(null),[G,OA]=k.useState(""),[V,lA]=k.useState(!1),[_A,XA]=k.useState(null),[QA,LA]=k.useState(!1),[qA,WA]=k.useState(""),[Y,xA]=k.useState(null),[EA,PA]=k.useState("dark"),[C,Z]=k.useState(null),[gA,hA]=k.useState(null),[jA,YA]=k.useState(!1),[L,TA]=k.useState(!1),[kA,BA]=k.useState(null),[z,q]=k.useState(null),RA=k.useRef(null),FA=k.useRef(null),rA={dark:{background:"#1a1a1a",panel:"#242424",border:"#444",text:"rgba(255, 255, 255, 0.87)",nodeFill:"#646cff",nodeStroke:"#444dfcff",edgeStroke:"#646cff",highlight:"#a855f7",secondaryText:"#64748b",buttonHover:"#333",nodeText:"#ffffff"},light:{background:"#f5f5f5",panel:"#ffffff",border:"#ddd",text:"#1a1a1a",nodeFill:"#56acf3ff",nodeStroke:"#3ca0f3ff",edgeStroke:"#5e94e1ff",highlight:"#7c3aed",secondaryText:"#666",buttonHover:"#eee",nodeText:"#ffffff"},blue:{background:"#0f172a",panel:"#1e293b",border:"#334155",text:"#f8fafc",nodeFill:"#3b82f6",nodeStroke:"#6366f1",edgeStroke:"#3b82f6",highlight:"#6366f1",secondaryText:"#94a3b8",buttonHover:"#1e293b",nodeText:"#ffffff"}}[EA];k.useEffect(()=>{const b=E=>{if(E.key==="Control"||E.key==="Meta")YA(!0);else if(E.key==="Shift")TA(!0);else if(E.key==="Delete")M?Se():AA?_e():C&&Ge();else if(M&&!E.ctrlKey&&!E.metaKey){let D=0,m=0;const F=E.shiftKey?10:2;switch(E.key){case"ArrowUp":m=-F;break;case"ArrowDown":m=F;break;case"ArrowLeft":D=-F;break;case"ArrowRight":D=F;break;default:return}E.preventDefault(),ae(M.id,D,m)}else if(C&&!E.ctrlKey&&!E.metaKey){let D=0,m=0;const F=E.shiftKey?10:2;switch(E.key){case"ArrowUp":m=-F;break;case"ArrowDown":m=F;break;case"ArrowLeft":D=-F;break;case"ArrowRight":D=F;break;default:return}E.preventDefault(),re(C.edgeId,C.pointIndex,D,m)}},Q=E=>{E.key==="Control"||E.key==="Meta"?YA(!1):E.key==="Shift"&&TA(!1)};return document.addEventListener("keydown",b),document.addEventListener("keyup",Q),()=>{document.removeEventListener("keydown",b),document.removeEventListener("keyup",Q)}},[M,AA,C]);const ae=(b,Q,E)=>{const D=r.map(m=>m.id===b?{...m,x:m.x+Q,y:m.y+E}:m);f({...i,nodes:D})},re=(b,Q,E,D)=>{const m=s.map(F=>{if(F.id===b){const $=[...F.controlPoints||[]];return $[Q]&&($[Q]={x:$[Q].x+E,y:$[Q].y+D}),{...F,controlPoints:$}}return F});f({...i,edges:m})},le=()=>JSON.stringify({nodes:r,edges:s},null,2),we=()=>{const b=new Blob([le()],{type:"application/json"}),Q=URL.createObjectURL(b),E=document.createElement("a");E.href=Q,E.download=`${i?.name||"use-case-diagram"}.json`,document.body.appendChild(E),E.click(),document.body.removeChild(E),URL.revokeObjectURL(Q),B("json")},Ne=b=>{const Q=b.target.files[0];if(!Q)return;const E=new FileReader;E.onload=D=>{try{const m=JSON.parse(D.target.result);d(JSON.stringify(m,null,2)),B("json")}catch{alert("Invalid JSON file")}},E.readAsText(Q),b.target.value=""},se=()=>{try{const b=JSON.parse(o);f({...i,nodes:b.nodes||[],edges:b.edges||[]})}catch(b){alert("Invalid JSON: "+b.message)}},Qe=(b,Q,E)=>{const D=E.x+E.width/2,m=E.y+E.height/2,F=Math.abs(b-D),U=Math.abs(Q-m);return F/(E.width/2)+U/(E.height/2)<=1},lt=(b,Q,E)=>{const D=b-E.x,m=Q-E.y,F=E.height*.3;if(m<0||m>E.height)return!1;const U=m/E.height,$=-F+U*F*2,W=E.width+F-U*F*2;return D>=$&&D<=W},We=b=>{const Q=b.x+b.width/2,E=b.y+b.height/2;return b.type==="circle"||b.type==="oval"?(b.width/2,b.height/2,[{x:Q,y:b.y,label:"top"},{x:b.x+b.width,y:E,label:"right"},{x:Q,y:b.y+b.height,label:"bottom"},{x:b.x,y:E,label:"left"}]):b.type==="rhombus"?[{x:Q,y:b.y,label:"top"},{x:Q,y:b.y+b.height,label:"bottom"}]:b.type==="diamond"?[{x:Q,y:b.y,label:"top"},{x:b.x+b.width,y:E,label:"right"},{x:Q,y:b.y+b.height,label:"bottom"},{x:b.x,y:E,label:"left"}]:[{x:Q,y:b.y,label:"top"},{x:b.x+b.width,y:E,label:"right"},{x:Q,y:b.y+b.height,label:"bottom"},{x:b.x,y:E,label:"left"}]},nt=(b,Q,E)=>{const D=We(b);let m=D[0],F=1/0;for(const U of D){const $=Math.sqrt(Math.pow(U.x-Q,2)+Math.pow(U.y-E,2));$<F&&(F=$,m=U)}return m},Te=(b,Q,E,D=null)=>{const m=We(b);if(D){const F=m.find(U=>U.label===D);if(F)return F}return nt(b,Q,E)},xe=(b,Q,E=null)=>r.some(D=>{if(D.id===E)return!1;if(D.type==="circle"){const m=D.x+D.width/2,F=D.y+D.height/2;return Math.sqrt(Math.pow(b-m,2)+Math.pow(Q-F,2))<=D.width/2+5}else if(D.type==="oval"){const m=D.x+D.width/2,F=D.y+D.height/2,U=(b-m)/(D.width/2+5),$=(Q-F)/(D.height/2+5);return Math.pow(U,2)+Math.pow($,2)<=1}else return D.type==="diamond"?Qe(b,Q,{...D,width:D.width+10,height:D.height+10,x:D.x-5,y:D.y-5}):D.type==="rhombus"?lt(b,Q,{...D,width:D.width+10,height:D.height+10,x:D.x-5,y:D.y-5}):b>=D.x-5&&b<=D.x+D.width+5&&Q>=D.y-5&&Q<=D.y+D.height+5}),K=(b,Q,E)=>{const D=E.controlPoints||[],m=Te(b,Q.x+Q.width/2,Q.y+Q.height/2,E.fromAttachment),F=Te(Q,b.x+b.width/2,b.y+b.height/2,E.toAttachment);if(D&&D.length>0)return[m,...D,F];const U=F.x-m.x,$=F.y-m.y,W=Math.sqrt(U*U+$*$),zA=!uA(m,F,[b.id,Q.id]);if(W<80||zA)return[m,F];const iA=KA(m,F,b,Q);if(iA.length>2){const p=iA.slice(1,-1);(!E.controlPoints||E.controlPoints.length===0)&&setTimeout(()=>{const T=s.map(X=>X.id===E.id?{...X,controlPoints:p}:X);f({...i,edges:T})},0)}return iA},uA=(b,Q,E=[])=>{const D=Math.ceil(Math.sqrt(Math.pow(Q.x-b.x,2)+Math.pow(Q.y-b.y,2))/10);for(let m=0;m<=D;m++){const F=m/D,U=b.x+(Q.x-b.x)*F,$=b.y+(Q.y-b.y)*F;if(xe(U,$,...E))return!0}return!1},KA=(b,Q,E,D)=>{const m=Q.x-b.x,F=Q.y-b.y,U=[()=>{const $=b.x+m*.7,W=[b,{x:$,y:b.y},{x:$,y:Q.y},Q];return uA(W[1],W[2],[E.id,D.id])?null:W},()=>{const $=b.y+F*.7,W=[b,{x:b.x,y:$},{x:Q.x,y:$},Q];return uA(W[1],W[2],[E.id,D.id])?null:W},()=>{const $=Math.abs(F)>Math.abs(m)?100:50,W=b.x+m*.5+(m>0?$:-$);return[b,{x:W,y:b.y},{x:W,y:Q.y},Q]},()=>{const $=Math.abs(m)>Math.abs(F)?100:50,W=b.y+F*.5+(F>0?$:-$);return[b,{x:b.x,y:W},{x:Q.x,y:W},Q]}];for(const $ of U){const W=$();if(W)return W}return[b,Q]},O=b=>{if(b.length<=2)return{x:(b[0].x+b[b.length-1].x)/2,y:(b[0].y+b[b.length-1].y)/2};let Q=0,E=0;for(let D=0;D<b.length-1;D++){const m=Math.sqrt(Math.pow(b[D+1].x-b[D].x,2)+Math.pow(b[D+1].y-b[D].y,2));m>Q&&(Q=m,E=D)}return{x:(b[E].x+b[E+1].x)/2,y:(b[E].y+b[E+1].y)/2}},sA=(b,Q,E,D=8)=>{const m=b.x-Q.x,F=b.y-Q.y,U=E.x-Q.x,$=E.y-Q.y,W=m*U+F*$,zA=U*U+$*$;if(zA===0)return!1;const iA=W/zA;if(iA<0||iA>1)return!1;const p=Q.x+iA*U,T=Q.y+iA*$,X=b.x-p,yA=b.y-T;return Math.sqrt(X*X+yA*yA)<=D},MA=(b,Q)=>{for(const E of s){const D=r.find(U=>U.id===E.from),m=r.find(U=>U.id===E.to);if(!D||!m)continue;const F=K(D,m,E);for(let U=0;U<F.length-1;U++)if(sA({x:b,y:Q},F[U],F[U+1]))return E}return null},fA=(b,Q)=>{for(const E of s)if(E.controlPoints)for(let D=0;D<E.controlPoints.length;D++){const m=E.controlPoints[D];if(Math.sqrt(Math.pow(b-m.x,2)+Math.pow(Q-m.y,2))<=8)return{edgeId:E.id,pointIndex:D,point:m}}return null},CA=b=>{if(pA||mA)return;const E=b.currentTarget.getBoundingClientRect(),D=(b.clientX-E.left-i.pan.x)/i.zoom,m=(b.clientY-E.top-i.pan.y)/i.zoom,F=fA(D,m);if(F){Z(F),oA(null),dA(null);return}const U=r.find(W=>{if(W.type==="circle"){const zA=W.x+W.width/2,iA=W.y+W.height/2;return Math.sqrt(Math.pow(D-zA,2)+Math.pow(m-iA,2))<=W.width/2}else if(W.type==="oval"){const zA=W.x+W.width/2,iA=W.y+W.height/2,p=(D-zA)/(W.width/2),T=(m-iA)/(W.height/2);return Math.pow(p,2)+Math.pow(T,2)<=1}else return W.type==="diamond"?Qe(D,m,W):W.type==="rhombus"?lt(D,m,W):D>=W.x&&D<=W.x+W.width&&m>=W.y&&m<=W.y+W.height}),$=U?null:MA(D,m);if(L&&AA&&$&&$.id===AA.id){de(AA.id,D,m);return}if(jA&&U){BA({x:D,y:m,node:U}),XA(U),lA(!0);return}if(V&&U){if(!_A)XA(U);else if(U.id!==_A.id)if(_A.type==="diamond"||_A.type==="rhombus")xA({id:Date.now(),from:_A.id,to:U.id}),LA(!0);else{const W={id:Date.now(),from:_A.id,to:U.id,label:"",controlPoints:[]};f({...i,edges:[...s,W]}),XA(null),lA(!1),S(null),BA(null)}return}if(U){oA(U),dA(null),Z(null);return}if($){dA($),oA(null),Z(null);return}if(v&&v!=="arrow"){const W={id:Date.now(),type:v,x:D-(v==="circle"||v==="oval"?30:60),y:m-30,width:v==="circle"?60:v==="oval"?100:120,height:60,text:Be(v)};f({...i,nodes:[...r,W]}),S(null)}oA(null),dA(null),Z(null)},de=(b,Q,E)=>{const D=s.map(m=>{if(m.id===b){const F=m.controlPoints||[];return{...m,controlPoints:[...F,{x:Q,y:E}]}}return m});f({...i,edges:D})},Be=b=>{switch(b){case"oval":return"Start/End";case"diamond":return"Decision";case"rhombus":return"Decision";case"rectangle":return"Process";case"circle":return"Connector";default:return b.charAt(0).toUpperCase()+b.slice(1)}},he=b=>{JA(b.id),OA(b.text)},ge=b=>{bA(b.id),OA(b.label||"")},ye=()=>{if(pA){const b=r.map(Q=>Q.id===pA?{...Q,text:G}:Q);f({...i,nodes:b}),JA(null)}else if(mA){const b=s.map(Q=>Q.id===mA?{...Q,label:G}:Q);f({...i,edges:b}),bA(null)}OA("")},Se=()=>{if(!M)return;const b=r.filter(E=>E.id!==M.id),Q=s.filter(E=>E.from!==M.id&&E.to!==M.id);f({...i,nodes:b,edges:Q}),oA(null)},_e=()=>{if(!AA)return;const b=s.filter(Q=>Q.id!==AA.id);f({...i,edges:b}),dA(null)},Ge=()=>{if(!C)return;const b=s.map(Q=>{if(Q.id===C.edgeId){const D=(Q.controlPoints||[]).filter((m,F)=>F!==C.pointIndex);return{...Q,controlPoints:D}}return Q});f({...i,edges:b}),Z(null)},H=(b,Q)=>{if(pA||mA)return;const D=RA.current.getBoundingClientRect(),m=b.clientX-D.left,F=b.clientY-D.top;NA({nodeId:Q.id,startX:m,startY:F,originalX:Q.x,originalY:Q.y})},wA=(b,Q,E)=>{if(pA||mA)return;b.stopPropagation();const m=RA.current.getBoundingClientRect(),F=b.clientX-m.left,U=b.clientY-m.top,W=s.find(zA=>zA.id===Q)?.controlPoints?.[E];W&&hA({edgeId:Q,pointIndex:E,startX:F,startY:U,originalX:W.x,originalY:W.y})},HA=k.useCallback(b=>{if(DA){const E=RA.current.getBoundingClientRect(),D=b.clientX-E.left,m=b.clientY-E.top,F=(D-DA.startX)/i.zoom,U=(m-DA.startY)/i.zoom,$=r.map(W=>W.id===DA.nodeId?{...W,x:DA.originalX+F,y:DA.originalY+U}:W);f({...i,nodes:$})}else if(gA){const E=RA.current.getBoundingClientRect(),D=b.clientX-E.left,m=b.clientY-E.top,F=(D-gA.startX)/i.zoom,U=(m-gA.startY)/i.zoom,$=s.map(W=>{if(W.id===gA.edgeId){const iA=[...W.controlPoints||[]];return iA[gA.pointIndex]={x:gA.originalX+F,y:gA.originalY+U},{...W,controlPoints:iA}}return W});f({...i,edges:$})}else if(z){const E=RA.current.getBoundingClientRect(),D=(b.clientX-E.left-i.pan.x)/i.zoom,m=(b.clientY-E.top-i.pan.y)/i.zoom,F=z.edge,U=z.type,$=U==="from"?r.find(iA=>iA.id===F.from):r.find(iA=>iA.id===F.to);if(!$)return;const W=nt($,D,m),zA=s.map(iA=>iA.id===F.id?U==="from"?{...iA,fromAttachment:W.label}:{...iA,toAttachment:W.label}:iA);f({...i,edges:zA})}},[DA,gA,z,r,s,i,f]),GA=k.useCallback(()=>{NA(null),hA(null),q(null)},[]);k.useEffect(()=>{if(DA||gA||z)return document.addEventListener("mousemove",HA),document.addEventListener("mouseup",GA),()=>{document.removeEventListener("mousemove",HA),document.removeEventListener("mouseup",GA)}},[DA,gA,z,HA,GA]);const j=()=>{S("arrow"),lA(!0),XA(null),BA(null)},nA=()=>{if(!Y)return;const b={...Y,label:qA,controlPoints:[]};f({...i,edges:[...s,b]}),XA(null),lA(!1),S(null),LA(!1),xA(null),WA(""),BA(null)},y=()=>{const b=document.createElement("canvas"),Q=b.getContext("2d");let E=1/0,D=1/0,m=-1/0,F=-1/0;r.forEach(iA=>{E=Math.min(E,iA.x),D=Math.min(D,iA.y),m=Math.max(m,iA.x+iA.width),F=Math.max(F,iA.y+iA.height)}),s.forEach(iA=>{const p=r.find(X=>X.id===iA.from),T=r.find(X=>X.id===iA.to);p&&T&&K(p,T,iA).forEach(yA=>{E=Math.min(E,yA.x),D=Math.min(D,yA.y),m=Math.max(m,yA.x),F=Math.max(F,yA.y)})});const U=40;E-=U,D-=U,m+=U,F+=U;const $=m-E,W=F-D;b.width=$,b.height=W,Q.fillStyle=rA.background,Q.fillRect(0,0,$,W),s.forEach(iA=>{const p=r.find(X=>X.id===iA.from),T=r.find(X=>X.id===iA.to);if(p&&T){const yA=K(p,T,iA).map(Ae=>({x:Ae.x-E,y:Ae.y-D}));Q.strokeStyle=rA.edgeStroke,Q.lineWidth=2,Q.beginPath(),Q.moveTo(yA[0].x,yA[0].y);for(let Ae=1;Ae<yA.length;Ae++)Q.lineTo(yA[Ae].x,yA[Ae].y);Q.stroke();const cA=yA[yA.length-1],$A=yA[yA.length-2],ZA=Math.atan2(cA.y-$A.y,cA.x-$A.x);if(Q.fillStyle=rA.edgeStroke,Q.beginPath(),Q.moveTo(cA.x,cA.y),Q.lineTo(cA.x-12*Math.cos(ZA-Math.PI/6),cA.y-12*Math.sin(ZA-Math.PI/6)),Q.lineTo(cA.x-12*Math.cos(ZA+Math.PI/6),cA.y-12*Math.sin(ZA+Math.PI/6)),Q.closePath(),Q.fill(),iA.label){const Ae=O(yA);Q.fillStyle=rA.text,Q.font="12px Arial",Q.textAlign="center",Q.fillText(iA.label,Ae.x,Ae.y-5)}}}),r.forEach(iA=>{const p=iA.x-E,T=iA.y-D;if(Q.fillStyle=rA.nodeFill,Q.strokeStyle=rA.nodeStroke,Q.lineWidth=2,iA.type==="rectangle")Q.beginPath(),Q.roundRect(p,T,iA.width,iA.height,4),Q.fill(),Q.stroke();else if(iA.type==="circle")Q.beginPath(),Q.arc(p+iA.width/2,T+iA.height/2,iA.width/2,0,2*Math.PI),Q.fill(),Q.stroke();else if(iA.type==="diamond")Q.beginPath(),Q.moveTo(p+iA.width/2,T),Q.lineTo(p+iA.width,T+iA.height/2),Q.lineTo(p+iA.width/2,T+iA.height),Q.lineTo(p,T+iA.height/2),Q.closePath(),Q.fill(),Q.stroke();else if(iA.type==="rhombus"){const X=iA.height*.3;Q.beginPath(),Q.moveTo(p-X,T),Q.lineTo(p+iA.width-X,T),Q.lineTo(p+iA.width+X,T+iA.height),Q.lineTo(p+X,T+iA.height),Q.closePath(),Q.fill(),Q.stroke()}else iA.type==="oval"&&(Q.beginPath(),Q.ellipse(p+iA.width/2,T+iA.height/2,iA.width/2,iA.height/2,0,0,2*Math.PI),Q.fill(),Q.stroke());Q.fillStyle=rA.nodeText,Q.font="12px Arial",Q.textAlign="center",Q.textBaseline="middle",Q.fillText(iA.text,p+iA.width/2,T+iA.height/2)});const zA=document.createElement("a");zA.download=`${i.name||"flowchart"}.png`,zA.href=b.toDataURL("image/png"),zA.click()},I=b=>{const Q=M?.id===b.id,E=pA===b.id,D=V&&_A?.id===b.id;let m={position:"absolute",left:`${b.x}px`,top:`${b.y}px`,width:`${b.width}px`,height:`${b.height}px`,backgroundColor:Q?rA.highlight:rA.nodeFill,display:"flex",justifyContent:"center",alignItems:"center",color:rA.nodeText,cursor:"move",fontSize:"12px",fontWeight:"500",textAlign:"center",wordBreak:"break-word",padding:"8px",boxSizing:"border-box",border:Q?`2px solid ${rA.nodeStroke}`:D?"2px solid #f59e0b":"1px solid rgba(255,255,255,0.2)",userSelect:"none",transition:"all 0.2s ease",zIndex:Q?1e3:1};return b.type==="circle"||b.type==="oval"?m.borderRadius="50%":b.type==="diamond"?(m.clipPath="polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",m.borderRadius="0"):b.type==="rhombus"?(m.clipPath="polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",m.borderRadius="0"):m.borderRadius="8px",n.jsx("div",{style:m,onMouseDown:F=>H(F,b),onDoubleClick:()=>he(b),children:E?n.jsx("input",{type:"text",value:G,onChange:F=>OA(F.target.value),onBlur:ye,onKeyPress:F=>F.key==="Enter"&&ye(),style:{background:"rgba(255,255,255,0.2)",border:"none",color:rA.nodeText,textAlign:"center",fontSize:"12px",fontWeight:"500",width:"100%",outline:"none",borderRadius:"4px",padding:"2px"},autoFocus:!0}):b.text},b.id)},_=b=>{const Q=r.find(U=>U.id===b.from),E=r.find(U=>U.id===b.to);if(!Q||!E)return null;const D=K(Q,E,b),m=AA?.id===b.id,F=mA===b.id;return n.jsxs("div",{children:[D.map((U,$)=>{if($===D.length-1)return null;const W=D[$+1],zA=Math.sqrt(Math.pow(W.x-U.x,2)+Math.pow(W.y-U.y,2)),iA=Math.atan2(W.y-U.y,W.x-U.x)*180/Math.PI;return n.jsx("div",{style:{position:"absolute",left:`${U.x}px`,top:`${U.y-(m?1.5:1)}px`,width:`${zA}px`,height:m?"3px":"2px",backgroundColor:m?rA.highlight:rA.edgeStroke,transformOrigin:"0 50%",transform:`rotate(${iA}deg)`,cursor:"pointer",zIndex:m?10:2,borderRadius:"1px"},onClick:p=>{p.stopPropagation(),dA(b),oA(null),Z(null)},onDoubleClick:p=>{p.stopPropagation(),ge(b)}},`segment-${$}`)}),m&&n.jsxs(n.Fragment,{children:[n.jsx("div",{onMouseDown:U=>{U.stopPropagation();const W=RA.current.getBoundingClientRect();(U.clientX-W.left-i.pan.x)/i.zoom,(U.clientY-W.top-i.pan.y)/i.zoom,q({edge:b,type:"from",point:D[0]})},style:{position:"absolute",left:`${D[0].x-5}px`,top:`${D[0].y-5}px`,width:"10px",height:"10px",backgroundColor:"#f59e0b",border:"2px solid white",borderRadius:"50%",cursor:"move",zIndex:20,boxShadow:"0 2px 4px rgba(0,0,0,0.3)"},title:"Drag to change start attachment point"}),n.jsx("div",{onMouseDown:U=>{U.stopPropagation();const W=RA.current.getBoundingClientRect();(U.clientX-W.left-i.pan.x)/i.zoom,(U.clientY-W.top-i.pan.y)/i.zoom,q({edge:b,type:"to",point:D[D.length-1]})},style:{position:"absolute",left:`${D[D.length-1].x-5}px`,top:`${D[D.length-1].y-5}px`,width:"10px",height:"10px",backgroundColor:"#10b981",border:"2px solid white",borderRadius:"50%",cursor:"move",zIndex:20,boxShadow:"0 2px 4px rgba(0,0,0,0.3)"},title:"Drag to change end attachment point"})]}),b.controlPoints&&b.controlPoints.map((U,$)=>n.jsx("div",{style:{position:"absolute",left:`${U.x-6}px`,top:`${U.y-6}px`,width:"12px",height:"12px",backgroundColor:C?.edgeId===b.id&&C?.pointIndex===$?rA.highlight:rA.nodeStroke,border:"2px solid white",borderRadius:"50%",cursor:"move",zIndex:15,boxShadow:"0 2px 4px rgba(0,0,0,0.2)"},onMouseDown:W=>wA(W,b.id,$),onClick:W=>{W.stopPropagation(),Z({edgeId:b.id,pointIndex:$,point:U})}},`control-${$}`)),(()=>{const U=D[D.length-1],$=D[D.length-2],W=Math.atan2(U.y-$.y,U.x-$.x),zA=8,iA=Math.PI/6,p={x:U.x-zA*Math.cos(W-iA),y:U.y-zA*Math.sin(W-iA)},T={x:U.x-zA*Math.cos(W+iA),y:U.y-zA*Math.sin(W+iA)};return n.jsx("svg",{style:{position:"absolute",left:`${Math.min(U.x,p.x,T.x)-2}px`,top:`${Math.min(U.y,p.y,T.y)-2}px`,width:`${Math.max(U.x,p.x,T.x)-Math.min(U.x,p.x,T.x)+4}px`,height:`${Math.max(U.y,p.y,T.y)-Math.min(U.y,p.y,T.y)+4}px`,pointerEvents:"none",zIndex:m?11:3},children:n.jsx("polygon",{points:`${U.x-Math.min(U.x,p.x,T.x)+2},${U.y-Math.min(U.y,p.y,T.y)+2} ${p.x-Math.min(U.x,p.x,T.x)+2},${p.y-Math.min(U.y,p.y,T.y)+2} ${T.x-Math.min(U.x,p.x,T.x)+2},${T.y-Math.min(U.y,p.y,T.y)+2}`,fill:m?rA.highlight:rA.edgeStroke})})})(),(b.label||F)&&n.jsx("div",{style:{position:"absolute",left:`${O(D).x}px`,top:`${O(D).y-12}px`,color:rA.text,fontSize:"11px",fontWeight:"600",backgroundColor:rA.panel,padding:"4px 8px",borderRadius:"12px",border:`1px solid ${rA.border}`,transform:"translate(-50%, -50%)",cursor:"pointer",zIndex:m?12:4,minWidth:F?"80px":"auto",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},onClick:U=>{U.stopPropagation(),dA(b),oA(null),Z(null)},onDoubleClick:U=>{U.stopPropagation(),ge(b)},children:F?n.jsx("input",{type:"text",value:G,onChange:U=>OA(U.target.value),onBlur:ye,onKeyPress:U=>U.key==="Enter"&&ye(),style:{background:"transparent",border:"none",color:rA.text,textAlign:"center",fontSize:"11px",fontWeight:"600",width:"100%",outline:"none"},autoFocus:!0}):b.label})]},b.id)};return n.jsx("div",{style:{minHeight:"100vh",backgroundColor:rA.background,color:rA.text,fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},children:n.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto",padding:"24px"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"24px",padding:"20px",backgroundColor:rA.panel,borderRadius:"12px",border:`1px solid ${rA.border}`,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[n.jsx("h1",{style:{margin:"0",fontSize:"2rem",fontWeight:"700",background:"linear-gradient(135deg, #646cff, #a855f7)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:i.name}),n.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[n.jsx("div",{style:{display:"flex",gap:"4px",padding:"4px",backgroundColor:rA.background,borderRadius:"8px",border:`1px solid ${rA.border}`},children:[{key:"dark",label:"🌙",title:"Dark Theme"},{key:"light",label:"☀️",title:"Light Theme"},{key:"blue",label:"🌊",title:"Blue Theme"}].map(({key:b,label:Q,title:E})=>n.jsx("button",{onClick:()=>PA(b),title:E,style:{padding:"8px 12px",backgroundColor:EA===b?rA.nodeFill:"transparent",color:EA===b?"white":rA.text,border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"16px",transition:"all 0.2s",minWidth:"40px"},children:Q},b))}),n.jsx("button",{onClick:x,style:{padding:"12px 20px",backgroundColor:rA.panel,color:rA.text,border:`1px solid ${rA.nodeFill}`,borderRadius:"8px",cursor:"pointer",fontSize:"14px",fontWeight:"500",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"8px"},children:"← Back to List"})]})]}),n.jsxs("div",{style:{display:"flex",marginBottom:"24px",backgroundColor:rA.panel,borderRadius:"12px",padding:"4px",border:`1px solid ${rA.border}`,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[n.jsx("button",{onClick:()=>B("editor"),style:{padding:"12px 24px",border:"none",backgroundColor:g==="editor"?rA.nodeFill:"transparent",color:g==="editor"?"white":rA.text,cursor:"pointer",fontSize:"14px",fontWeight:"600",borderRadius:"8px",transition:"all 0.2s",flex:1,textAlign:"center"},children:"🎨 Flowchart Editor"}),n.jsx("button",{onClick:()=>{B("json"),d(le())},style:{padding:"12px 24px",border:"none",backgroundColor:g==="json"?rA.nodeFill:"transparent",color:g==="json"?"white":rA.text,cursor:"pointer",fontSize:"14px",fontWeight:"600",borderRadius:"8px",transition:"all 0.2s",flex:1,textAlign:"center"},children:"📝 JSON Editor"})]}),g==="editor"?n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"20px",backgroundColor:rA.panel,borderRadius:"12px",border:`1px solid ${rA.border}`,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"},children:[n.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[[{tool:"rectangle",icon:"▭",label:"Process"},{tool:"diamond",icon:"◆",label:"Diamond"},{tool:"rhombus",icon:"◇",label:"Slanted"},{tool:"circle",icon:"●",label:"Circle"},{tool:"oval",icon:"⬭",label:"Oval"}].map(({tool:b,icon:Q,label:E})=>n.jsxs("button",{onClick:()=>S(b),style:{padding:"10px 16px",backgroundColor:v===b?rA.nodeFill:rA.background,color:v===b?"white":rA.text,border:`1px solid ${rA.border}`,borderRadius:"8px",cursor:"pointer",fontSize:"13px",fontWeight:"500",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"6px"},children:[n.jsx("span",{style:{fontSize:"16px"},children:Q}),E]},b)),n.jsxs("button",{onClick:j,style:{padding:"10px 16px",backgroundColor:V?rA.nodeFill:rA.background,color:V?"white":rA.text,border:`1px solid ${rA.border}`,borderRadius:"8px",cursor:"pointer",fontSize:"13px",fontWeight:"500",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"6px"},children:[n.jsx("span",{style:{fontSize:"16px"},children:"→"}),V?_A?"Select Target":"Select Source":"Connect"]})]}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[M&&n.jsx("button",{onClick:Se,style:{padding:"8px 12px",backgroundColor:"#ef4444",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"🗑 Delete Node"}),AA&&n.jsx("button",{onClick:_e,style:{padding:"8px 12px",backgroundColor:"#ef4444",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"🗑 Delete Edge"}),C&&n.jsx("button",{onClick:Ge,style:{padding:"8px 12px",backgroundColor:"#ef4444",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"🗑 Delete Control Point"})]}),n.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"center",flexWrap:"wrap"},children:[n.jsx("button",{onClick:y,style:{padding:"8px 16px",backgroundColor:"#f59e0b",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"📸 Export PNG"}),n.jsx("button",{onClick:()=>navigator.clipboard.writeText(le()),style:{padding:"8px 16px",backgroundColor:"#a855f7",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"📋 Copy JSON"}),n.jsx("button",{onClick:we,style:{padding:"8px 16px",backgroundColor:"#10b981",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"📥 Export JSON"})]})]})}),(v||V||AA)&&n.jsxs("div",{style:{padding:"16px",backgroundColor:"rgba(100, 108, 255, 0.1)",border:`1px solid ${rA.nodeFill}`,borderRadius:"8px",color:rA.nodeFill,textAlign:"center",fontSize:"14px",fontWeight:"500"},children:[V?_A?`🎯 Click on target node to connect from "${_A.text}"`:"🎯 Click on a node to start connection":AA?"🔶 Edge selected: Drag orange (start) or green (end) circles to change attachment points":`🎨 Click on canvas to place a ${v}`,n.jsx("br",{}),jA&&"🔧 Ctrl pressed: Click on node edge to start connection from specific point",L&&AA&&"➕ Shift pressed: Click on edge to add control point",M&&"🎯 Node selected: Use arrow keys to move (Shift for larger steps)"]}),n.jsxs("div",{ref:RA,onClick:CA,style:{height:"700px",border:`2px dashed ${rA.border}`,borderRadius:"12px",backgroundColor:rA.background,display:"flex",justifyContent:"center",alignItems:"center",position:"relative",overflow:"hidden",cursor:v?"crosshair":"default",boxShadow:"inset 0 2px 4px rgba(0, 0, 0, 0.1)"},children:[r.length===0&&!v&&n.jsxs("div",{style:{textAlign:"center",color:rA.secondaryText,pointerEvents:"none"},children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"🎨"}),n.jsx("h3",{style:{margin:"0 0 8px 0",fontWeight:"600"},children:"Start Building Your Flowchart"}),n.jsx("p",{style:{margin:"0",fontSize:"14px"},children:"Select a tool from the toolbar above to begin"})]}),n.jsxs("div",{style:{position:"absolute",transform:`scale(${i.zoom}) translate(${i.pan.x}px, ${i.pan.y}px)`,transformOrigin:"0 0",width:"100%",height:"100%"},children:[s.map(_),r.map(I)]})]}),n.jsxs("div",{style:{padding:"16px",backgroundColor:rA.panel,borderRadius:"8px",border:`1px solid ${rA.border}`,fontSize:"13px",color:rA.secondaryText,textAlign:"center",lineHeight:"1.6"},children:["💡 ",n.jsx("strong",{children:"Pro Tips:"})," Single click to select • Double click to edit text • Drag nodes to move • Use Connect tool for arrows • Select edge and drag colored circles to change attachment points • Shift+Click on edge to add control point • Press Delete to remove selected items • Use arrow keys to move selected nodes and control points (Shift for larger steps)"]})]}):n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"},children:[n.jsxs("div",{style:{border:`1px solid ${rA.border}`,borderRadius:"12px",padding:"20px",backgroundColor:rA.panel,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[n.jsx("h3",{style:{marginTop:"0",marginBottom:"16px",color:rA.text,fontSize:"1.2rem",fontWeight:"600"},children:"📥 Import JSON"}),n.jsx("textarea",{value:o,onChange:b=>d(b.target.value),placeholder:"Paste your flowchart JSON here...",style:{width:"100%",minHeight:"400px",padding:"16px",border:`1px solid ${rA.border}`,borderRadius:"8px",fontFamily:'"Fira Code", "Cascadia Code", "SF Mono", Monaco, "Inconsolata", "Roboto Mono", monospace',fontSize:"13px",lineHeight:"1.5",marginBottom:"16px",backgroundColor:rA.background,color:rA.text,resize:"vertical",outline:"none",transition:"border-color 0.2s"}}),n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx("button",{onClick:se,style:{padding:"12px 20px",backgroundColor:"#10b981",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",flex:1,fontSize:"14px",fontWeight:"600",transition:"all 0.2s"},children:"📥 Import JSON"}),n.jsx("button",{onClick:()=>FA.current.click(),style:{padding:"12px 20px",backgroundColor:rA.nodeFill,color:"white",border:"none",borderRadius:"8px",cursor:"pointer",flex:1,fontSize:"14px",fontWeight:"600",transition:"all 0.2s"},children:"📁 Load File"}),n.jsx("input",{type:"file",ref:FA,onChange:Ne,accept:".json",style:{display:"none"}})]})]}),n.jsxs("div",{style:{border:`1px solid ${rA.border}`,borderRadius:"12px",padding:"20px",backgroundColor:rA.panel,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[n.jsx("h3",{style:{marginTop:"0",marginBottom:"16px",color:rA.text,fontSize:"1.2rem",fontWeight:"600"},children:"📤 Current Flowchart JSON"}),n.jsx("pre",{style:{backgroundColor:rA.background,padding:"16px",border:`1px solid ${rA.border}`,borderRadius:"8px",overflow:"auto",maxHeight:"450px",fontFamily:'"Fira Code", "Cascadia Code", "SF Mono", Monaco, "Inconsolata", "Roboto Mono", monospace',fontSize:"12px",lineHeight:"1.5",color:rA.text,whiteSpace:"pre-wrap",wordWrap:"break-word",margin:0},children:le()})]})]}),QA&&n.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.6)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e4,backdropFilter:"blur(4px)"},children:n.jsxs("div",{style:{backgroundColor:rA.panel,padding:"24px",borderRadius:"12px",width:"400px",border:`1px solid ${rA.nodeFill}`,boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.3)"},children:[n.jsx("h3",{style:{marginTop:0,marginBottom:"8px",color:rA.text,fontSize:"1.3rem",fontWeight:"600"},children:"🏷️ Add Connection Label"}),n.jsx("p",{style:{color:rA.secondaryText,marginBottom:"20px",fontSize:"14px",lineHeight:"1.5"},children:'Decision nodes should have labeled connections. Enter a label like "Yes", "No", or a condition:'}),n.jsx("input",{type:"text",value:qA,onChange:b=>WA(b.target.value),placeholder:"e.g., Yes, No, True, False...",style:{width:"100%",padding:"12px",marginBottom:"20px",backgroundColor:rA.background,border:`1px solid ${rA.border}`,color:rA.text,borderRadius:"8px",fontSize:"14px",outline:"none",transition:"border-color 0.2s"},autoFocus:!0,onKeyPress:b=>b.key==="Enter"&&nA()}),n.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[n.jsx("button",{onClick:()=>{LA(!1),WA(""),XA(null),lA(!1),S(null)},style:{padding:"10px 16px",backgroundColor:rA.background,color:rA.text,border:`1px solid ${rA.border}`,borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"500",transition:"all 0.2s"},children:"Cancel"}),n.jsx("button",{onClick:nA,style:{padding:"10px 16px",backgroundColor:rA.nodeFill,color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"600",transition:"all 0.2s"},children:"Add Label"})]})]})})]})})},Uw=({ganttCharts:i,onCreateGanttChart:r,onLoadGanttChart:s,onDeleteGanttChart:o})=>{const[d,u]=k.useState(!1);return n.jsxs("div",{className:"gantt-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(eb,{size:48})}),n.jsx("h2",{children:"Gantt Chart Planner"}),n.jsx("p",{children:"Plan and visualize project timelines with interactive Gantt charts"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(At,{size:16})," New Gantt Chart"]})}),i.length>0&&n.jsxs("div",{className:"gantt-list",children:[n.jsx("h3",{children:"Your Gantt Charts"}),i.map(f=>n.jsxs("div",{className:"gantt-card",onClick:()=>s(f),children:[n.jsxs("div",{className:"gantt-card-content",children:[n.jsx("div",{className:"gantt-card-name",children:f.name}),n.jsxs("div",{className:"gantt-card-meta",children:[n.jsxs("span",{children:[n.jsx(PB,{size:14})," ",new Date(f.createdAt).toLocaleDateString()]}),n.jsxs("span",{children:[f.tasks?.length||0," tasks"]})]})]}),n.jsxs("div",{className:"gantt-card-actions",children:[n.jsx("button",{onClick:x=>{x.stopPropagation(),s(f)},className:"open-btn",children:n.jsx(_n,{size:16})}),n.jsx("button",{onClick:x=>{x.stopPropagation(),confirm("Delete this Gantt chart?")&&o(f.id)},className:"delete-btn",children:n.jsx(Fe,{size:16})})]})]},f.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Gantt Chart"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Project Name"}),n.jsx("input",{type:"text",placeholder:"e.g., Website Redesign Project",id:"ganttName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const f=document.getElementById("ganttName").value;f.trim()&&(r(f),u(!1))},className:"create-btn",children:"Create Gantt Chart"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
***************************************************************************** */var Kd=function(i,r){return Kd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,o){s.__proto__=o}||function(s,o){for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])},Kd(i,r)};function un(i,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");Kd(i,r);function s(){this.constructor=i}i.prototype=r===null?Object.create(r):(s.prototype=r.prototype,new s)}var zd=function(){return zd=Object.assign||function(r){for(var s,o=1,d=arguments.length;o<d;o++){s=arguments[o];for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&(r[u]=s[u])}return r},zd.apply(this,arguments)};function Mt(i,r,s,o){function d(u){return u instanceof s?u:new s(function(f){f(u)})}return new(s||(s=Promise))(function(u,f){function x(v){try{B(o.next(v))}catch(S){f(S)}}function g(v){try{B(o.throw(v))}catch(S){f(S)}}function B(v){v.done?u(v.value):d(v.value).then(x,g)}B((o=o.apply(i,[])).next())})}function kt(i,r){var s={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},o,d,u,f;return f={next:x(0),throw:x(1),return:x(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function x(B){return function(v){return g([B,v])}}function g(B){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,d&&(u=B[0]&2?d.return:B[0]?d.throw||((u=d.return)&&u.call(d),0):d.next)&&!(u=u.call(d,B[1])).done)return u;switch(d=0,u&&(B=[B[0]&2,u.value]),B[0]){case 0:case 1:u=B;break;case 4:return s.label++,{value:B[1],done:!1};case 5:s.label++,d=B[1],B=[0];continue;case 7:B=s.ops.pop(),s.trys.pop();continue;default:if(u=s.trys,!(u=u.length>0&&u[u.length-1])&&(B[0]===6||B[0]===2)){s=0;continue}if(B[0]===3&&(!u||B[1]>u[0]&&B[1]<u[3])){s.label=B[1];break}if(B[0]===6&&s.label<u[1]){s.label=u[1],u=B;break}if(u&&s.label<u[2]){s.label=u[2],s.ops.push(B);break}u[2]&&s.ops.pop(),s.trys.pop();continue}B=r.call(i,s)}catch(v){B=[6,v],d=0}finally{o=u=0}if(B[0]&5)throw B[1];return{value:B[0]?B[1]:void 0,done:!0}}}function ps(i,r,s){if(arguments.length===2)for(var o=0,d=r.length,u;o<d;o++)(u||!(o in r))&&(u||(u=Array.prototype.slice.call(r,0,o)),u[o]=r[o]);return i.concat(u||r)}var zn=function(){function i(r,s,o,d){this.left=r,this.top=s,this.width=o,this.height=d}return i.prototype.add=function(r,s,o,d){return new i(this.left+r,this.top+s,this.width+o,this.height+d)},i.fromClientRect=function(r,s){return new i(s.left+r.windowBounds.left,s.top+r.windowBounds.top,s.width,s.height)},i.fromDOMRectList=function(r,s){var o=Array.from(s).find(function(d){return d.width!==0});return o?new i(o.left+r.windowBounds.left,o.top+r.windowBounds.top,o.width,o.height):i.EMPTY},i.EMPTY=new i(0,0,0,0),i}(),Ps=function(i,r){return zn.fromClientRect(i,r.getBoundingClientRect())},Ew=function(i){var r=i.body,s=i.documentElement;if(!r||!s)throw new Error("Unable to get document size");var o=Math.max(Math.max(r.scrollWidth,s.scrollWidth),Math.max(r.offsetWidth,s.offsetWidth),Math.max(r.clientWidth,s.clientWidth)),d=Math.max(Math.max(r.scrollHeight,s.scrollHeight),Math.max(r.offsetHeight,s.offsetHeight),Math.max(r.clientHeight,s.clientHeight));return new zn(0,0,o,d)},Al=function(i){for(var r=[],s=0,o=i.length;s<o;){var d=i.charCodeAt(s++);if(d>=55296&&d<=56319&&s<o){var u=i.charCodeAt(s++);(u&64512)===56320?r.push(((d&1023)<<10)+(u&1023)+65536):(r.push(d),s--)}else r.push(d)}return r},st=function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];if(String.fromCodePoint)return String.fromCodePoint.apply(String,i);var s=i.length;if(!s)return"";for(var o=[],d=-1,u="";++d<s;){var f=i[d];f<=65535?o.push(f):(f-=65536,o.push((f>>10)+55296,f%1024+56320)),(d+1===s||o.length>16384)&&(u+=String.fromCharCode.apply(String,o),o.length=0)}return u},sp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Fw=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var xs=0;xs<sp.length;xs++)Fw[sp.charCodeAt(xs)]=xs;var lp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ri=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ms=0;ms<lp.length;ms++)Ri[lp.charCodeAt(ms)]=ms;var jw=function(i){var r=i.length*.75,s=i.length,o,d=0,u,f,x,g;i[i.length-1]==="="&&(r--,i[i.length-2]==="="&&r--);var B=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(r):new Array(r),v=Array.isArray(B)?B:new Uint8Array(B);for(o=0;o<s;o+=4)u=Ri[i.charCodeAt(o)],f=Ri[i.charCodeAt(o+1)],x=Ri[i.charCodeAt(o+2)],g=Ri[i.charCodeAt(o+3)],v[d++]=u<<2|f>>4,v[d++]=(f&15)<<4|x>>2,v[d++]=(x&3)<<6|g&63;return B},Sw=function(i){for(var r=i.length,s=[],o=0;o<r;o+=2)s.push(i[o+1]<<8|i[o]);return s},kw=function(i){for(var r=i.length,s=[],o=0;o<r;o+=4)s.push(i[o+3]<<24|i[o+2]<<16|i[o+1]<<8|i[o]);return s},_a=5,uu=11,md=2,Hw=uu-_a,mx=65536>>_a,Nw=1<<_a,Bd=Nw-1,Mw=1024>>_a,Dw=mx+Mw,Tw=Dw,Iw=32,Lw=Tw+Iw,Ow=65536>>uu,Kw=1<<Hw,zw=Kw-1,cp=function(i,r,s){return i.slice?i.slice(r,s):new Uint16Array(Array.prototype.slice.call(i,r,s))},Rw=function(i,r,s){return i.slice?i.slice(r,s):new Uint32Array(Array.prototype.slice.call(i,r,s))},_w=function(i,r){var s=jw(i),o=Array.isArray(s)?kw(s):new Uint32Array(s),d=Array.isArray(s)?Sw(s):new Uint16Array(s),u=24,f=cp(d,u/2,o[4]/2),x=o[5]===2?cp(d,(u+o[4])/2):Rw(o,Math.ceil((u+o[4])/4));return new Gw(o[0],o[1],o[2],o[3],f,x)},Gw=function(){function i(r,s,o,d,u,f){this.initialValue=r,this.errorValue=s,this.highStart=o,this.highValueIndex=d,this.index=u,this.data=f}return i.prototype.get=function(r){var s;if(r>=0){if(r<55296||r>56319&&r<=65535)return s=this.index[r>>_a],s=(s<<md)+(r&Bd),this.data[s];if(r<=65535)return s=this.index[mx+(r-55296>>_a)],s=(s<<md)+(r&Bd),this.data[s];if(r<this.highStart)return s=Lw-Ow+(r>>uu),s=this.index[s],s+=r>>_a&zw,s=this.index[s],s=(s<<md)+(r&Bd),this.data[s];if(r<=1114111)return this.data[this.highValueIndex]}return this.errorValue},i}(),dp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Yw=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Bs=0;Bs<dp.length;Bs++)Yw[dp.charCodeAt(Bs)]=Bs;var Xw="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",up=50,Vw=1,Bx=2,bx=3,Jw=4,Zw=5,fp=7,wx=8,hp=9,pa=10,Rd=11,gp=12,_d=13,$w=14,_i=15,Gd=16,bs=17,Ti=18,Ww=19,pp=20,Yd=21,Ii=22,bd=23,Qr=24,Vt=25,Gi=26,Yi=27,Ur=28,qw=29,za=30,Pw=31,ws=32,ys=33,Xd=34,Vd=35,Jd=36,Ao=37,Zd=38,Os=39,Ks=40,wd=41,yx=42,Ay=43,ey=[9001,65288],vx="!",Ee="×",vs="÷",$d=_w(Xw),Ln=[za,Jd],Wd=[Vw,Bx,bx,Zw],Cx=[pa,wx],xp=[Yi,Gi],ty=Wd.concat(Cx),mp=[Zd,Os,Ks,Xd,Vd],ny=[_i,_d],ay=function(i,r){r===void 0&&(r="strict");var s=[],o=[],d=[];return i.forEach(function(u,f){var x=$d.get(u);if(x>up?(d.push(!0),x-=up):d.push(!1),["normal","auto","loose"].indexOf(r)!==-1&&[8208,8211,12316,12448].indexOf(u)!==-1)return o.push(f),s.push(Gd);if(x===Jw||x===Rd){if(f===0)return o.push(f),s.push(za);var g=s[f-1];return ty.indexOf(g)===-1?(o.push(o[f-1]),s.push(g)):(o.push(f),s.push(za))}if(o.push(f),x===Pw)return s.push(r==="strict"?Yd:Ao);if(x===yx||x===qw)return s.push(za);if(x===Ay)return u>=131072&&u<=196605||u>=196608&&u<=262141?s.push(Ao):s.push(za);s.push(x)}),[o,s,d]},yd=function(i,r,s,o){var d=o[s];if(Array.isArray(i)?i.indexOf(d)!==-1:i===d)for(var u=s;u<=o.length;){u++;var f=o[u];if(f===r)return!0;if(f!==pa)break}if(d===pa)for(var u=s;u>0;){u--;var x=o[u];if(Array.isArray(i)?i.indexOf(x)!==-1:i===x)for(var g=s;g<=o.length;){g++;var f=o[g];if(f===r)return!0;if(f!==pa)break}if(x!==pa)break}return!1},Bp=function(i,r){for(var s=i;s>=0;){var o=r[s];if(o===pa)s--;else return o}return 0},ry=function(i,r,s,o,d){if(s[o]===0)return Ee;var u=o-1;if(Array.isArray(d)&&d[u]===!0)return Ee;var f=u-1,x=u+1,g=r[u],B=f>=0?r[f]:0,v=r[x];if(g===Bx&&v===bx)return Ee;if(Wd.indexOf(g)!==-1)return vx;if(Wd.indexOf(v)!==-1||Cx.indexOf(v)!==-1)return Ee;if(Bp(u,r)===wx)return vs;if($d.get(i[u])===Rd||(g===ws||g===ys)&&$d.get(i[x])===Rd||g===fp||v===fp||g===hp||[pa,_d,_i].indexOf(g)===-1&&v===hp||[bs,Ti,Ww,Qr,Ur].indexOf(v)!==-1||Bp(u,r)===Ii||yd(bd,Ii,u,r)||yd([bs,Ti],Yd,u,r)||yd(gp,gp,u,r))return Ee;if(g===pa)return vs;if(g===bd||v===bd)return Ee;if(v===Gd||g===Gd)return vs;if([_d,_i,Yd].indexOf(v)!==-1||g===$w||B===Jd&&ny.indexOf(g)!==-1||g===Ur&&v===Jd||v===pp||Ln.indexOf(v)!==-1&&g===Vt||Ln.indexOf(g)!==-1&&v===Vt||g===Yi&&[Ao,ws,ys].indexOf(v)!==-1||[Ao,ws,ys].indexOf(g)!==-1&&v===Gi||Ln.indexOf(g)!==-1&&xp.indexOf(v)!==-1||xp.indexOf(g)!==-1&&Ln.indexOf(v)!==-1||[Yi,Gi].indexOf(g)!==-1&&(v===Vt||[Ii,_i].indexOf(v)!==-1&&r[x+1]===Vt)||[Ii,_i].indexOf(g)!==-1&&v===Vt||g===Vt&&[Vt,Ur,Qr].indexOf(v)!==-1)return Ee;if([Vt,Ur,Qr,bs,Ti].indexOf(v)!==-1)for(var S=u;S>=0;){var M=r[S];if(M===Vt)return Ee;if([Ur,Qr].indexOf(M)!==-1)S--;else break}if([Yi,Gi].indexOf(v)!==-1)for(var S=[bs,Ti].indexOf(g)!==-1?f:u;S>=0;){var M=r[S];if(M===Vt)return Ee;if([Ur,Qr].indexOf(M)!==-1)S--;else break}if(Zd===g&&[Zd,Os,Xd,Vd].indexOf(v)!==-1||[Os,Xd].indexOf(g)!==-1&&[Os,Ks].indexOf(v)!==-1||[Ks,Vd].indexOf(g)!==-1&&v===Ks||mp.indexOf(g)!==-1&&[pp,Gi].indexOf(v)!==-1||mp.indexOf(v)!==-1&&g===Yi||Ln.indexOf(g)!==-1&&Ln.indexOf(v)!==-1||g===Qr&&Ln.indexOf(v)!==-1||Ln.concat(Vt).indexOf(g)!==-1&&v===Ii&&ey.indexOf(i[x])===-1||Ln.concat(Vt).indexOf(v)!==-1&&g===Ti)return Ee;if(g===wd&&v===wd){for(var oA=s[u],AA=1;oA>0&&(oA--,r[oA]===wd);)AA++;if(AA%2!==0)return Ee}return g===ws&&v===ys?Ee:vs},iy=function(i,r){r||(r={lineBreak:"normal",wordBreak:"normal"});var s=ay(i,r.lineBreak),o=s[0],d=s[1],u=s[2];(r.wordBreak==="break-all"||r.wordBreak==="break-word")&&(d=d.map(function(x){return[Vt,za,yx].indexOf(x)!==-1?Ao:x}));var f=r.wordBreak==="keep-all"?u.map(function(x,g){return x&&i[g]>=19968&&i[g]<=40959}):void 0;return[o,d,f]},oy=function(){function i(r,s,o,d){this.codePoints=r,this.required=s===vx,this.start=o,this.end=d}return i.prototype.slice=function(){return st.apply(void 0,this.codePoints.slice(this.start,this.end))},i}(),sy=function(i,r){var s=Al(i),o=iy(s,r),d=o[0],u=o[1],f=o[2],x=s.length,g=0,B=0;return{next:function(){if(B>=x)return{done:!0,value:null};for(var v=Ee;B<x&&(v=ry(s,u,d,++B,f))===Ee;);if(v!==Ee||B===x){var S=new oy(s,v,g,B);return g=B,{value:S,done:!1}}return{done:!0,value:null}}}},ly=1,cy=2,ao=4,bp=8,_s=10,wp=47,Zi=92,dy=9,uy=32,Cs=34,Li=61,fy=35,hy=36,gy=37,Qs=39,Us=40,Oi=41,py=95,Ot=45,xy=33,my=60,By=62,by=64,wy=91,yy=93,vy=61,Cy=123,Es=63,Qy=125,yp=124,Uy=126,Ey=128,vp=65533,vd=42,Ra=43,Fy=44,jy=58,Sy=59,eo=46,ky=0,Hy=8,Ny=11,My=14,Dy=31,Ty=127,mn=-1,Qx=48,Ux=97,Ex=101,Iy=102,Ly=117,Oy=122,Fx=65,jx=69,Sx=70,Ky=85,zy=90,Ht=function(i){return i>=Qx&&i<=57},Ry=function(i){return i>=55296&&i<=57343},Er=function(i){return Ht(i)||i>=Fx&&i<=Sx||i>=Ux&&i<=Iy},_y=function(i){return i>=Ux&&i<=Oy},Gy=function(i){return i>=Fx&&i<=zy},Yy=function(i){return _y(i)||Gy(i)},Xy=function(i){return i>=Ey},Fs=function(i){return i===_s||i===dy||i===uy},Gs=function(i){return Yy(i)||Xy(i)||i===py},Cp=function(i){return Gs(i)||Ht(i)||i===Ot},Vy=function(i){return i>=ky&&i<=Hy||i===Ny||i>=My&&i<=Dy||i===Ty},ga=function(i,r){return i!==Zi?!1:r!==_s},js=function(i,r,s){return i===Ot?Gs(r)||ga(r,s):Gs(i)?!0:!!(i===Zi&&ga(i,r))},Cd=function(i,r,s){return i===Ra||i===Ot?Ht(r)?!0:r===eo&&Ht(s):Ht(i===eo?r:i)},Jy=function(i){var r=0,s=1;(i[r]===Ra||i[r]===Ot)&&(i[r]===Ot&&(s=-1),r++);for(var o=[];Ht(i[r]);)o.push(i[r++]);var d=o.length?parseInt(st.apply(void 0,o),10):0;i[r]===eo&&r++;for(var u=[];Ht(i[r]);)u.push(i[r++]);var f=u.length,x=f?parseInt(st.apply(void 0,u),10):0;(i[r]===jx||i[r]===Ex)&&r++;var g=1;(i[r]===Ra||i[r]===Ot)&&(i[r]===Ot&&(g=-1),r++);for(var B=[];Ht(i[r]);)B.push(i[r++]);var v=B.length?parseInt(st.apply(void 0,B),10):0;return s*(d+x*Math.pow(10,-f))*Math.pow(10,g*v)},Zy={type:2},$y={type:3},Wy={type:4},qy={type:13},Py={type:8},A1={type:21},e1={type:9},t1={type:10},n1={type:11},a1={type:12},r1={type:14},Ss={type:23},i1={type:1},o1={type:25},s1={type:24},l1={type:26},c1={type:27},d1={type:28},u1={type:29},f1={type:31},qd={type:32},kx=function(){function i(){this._value=[]}return i.prototype.write=function(r){this._value=this._value.concat(Al(r))},i.prototype.read=function(){for(var r=[],s=this.consumeToken();s!==qd;)r.push(s),s=this.consumeToken();return r},i.prototype.consumeToken=function(){var r=this.consumeCodePoint();switch(r){case Cs:return this.consumeStringToken(Cs);case fy:var s=this.peekCodePoint(0),o=this.peekCodePoint(1),d=this.peekCodePoint(2);if(Cp(s)||ga(o,d)){var u=js(s,o,d)?cy:ly,f=this.consumeName();return{type:5,value:f,flags:u}}break;case hy:if(this.peekCodePoint(0)===Li)return this.consumeCodePoint(),qy;break;case Qs:return this.consumeStringToken(Qs);case Us:return Zy;case Oi:return $y;case vd:if(this.peekCodePoint(0)===Li)return this.consumeCodePoint(),r1;break;case Ra:if(Cd(r,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(r),this.consumeNumericToken();break;case Fy:return Wy;case Ot:var x=r,g=this.peekCodePoint(0),B=this.peekCodePoint(1);if(Cd(x,g,B))return this.reconsumeCodePoint(r),this.consumeNumericToken();if(js(x,g,B))return this.reconsumeCodePoint(r),this.consumeIdentLikeToken();if(g===Ot&&B===By)return this.consumeCodePoint(),this.consumeCodePoint(),s1;break;case eo:if(Cd(r,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(r),this.consumeNumericToken();break;case wp:if(this.peekCodePoint(0)===vd)for(this.consumeCodePoint();;){var v=this.consumeCodePoint();if(v===vd&&(v=this.consumeCodePoint(),v===wp))return this.consumeToken();if(v===mn)return this.consumeToken()}break;case jy:return l1;case Sy:return c1;case my:if(this.peekCodePoint(0)===xy&&this.peekCodePoint(1)===Ot&&this.peekCodePoint(2)===Ot)return this.consumeCodePoint(),this.consumeCodePoint(),o1;break;case by:var S=this.peekCodePoint(0),M=this.peekCodePoint(1),oA=this.peekCodePoint(2);if(js(S,M,oA)){var f=this.consumeName();return{type:7,value:f}}break;case wy:return d1;case Zi:if(ga(r,this.peekCodePoint(0)))return this.reconsumeCodePoint(r),this.consumeIdentLikeToken();break;case yy:return u1;case vy:if(this.peekCodePoint(0)===Li)return this.consumeCodePoint(),Py;break;case Cy:return n1;case Qy:return a1;case Ly:case Ky:var AA=this.peekCodePoint(0),dA=this.peekCodePoint(1);return AA===Ra&&(Er(dA)||dA===Es)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(r),this.consumeIdentLikeToken();case yp:if(this.peekCodePoint(0)===Li)return this.consumeCodePoint(),e1;if(this.peekCodePoint(0)===yp)return this.consumeCodePoint(),A1;break;case Uy:if(this.peekCodePoint(0)===Li)return this.consumeCodePoint(),t1;break;case mn:return qd}return Fs(r)?(this.consumeWhiteSpace(),f1):Ht(r)?(this.reconsumeCodePoint(r),this.consumeNumericToken()):Gs(r)?(this.reconsumeCodePoint(r),this.consumeIdentLikeToken()):{type:6,value:st(r)}},i.prototype.consumeCodePoint=function(){var r=this._value.shift();return typeof r>"u"?-1:r},i.prototype.reconsumeCodePoint=function(r){this._value.unshift(r)},i.prototype.peekCodePoint=function(r){return r>=this._value.length?-1:this._value[r]},i.prototype.consumeUnicodeRangeToken=function(){for(var r=[],s=this.consumeCodePoint();Er(s)&&r.length<6;)r.push(s),s=this.consumeCodePoint();for(var o=!1;s===Es&&r.length<6;)r.push(s),s=this.consumeCodePoint(),o=!0;if(o){var d=parseInt(st.apply(void 0,r.map(function(g){return g===Es?Qx:g})),16),u=parseInt(st.apply(void 0,r.map(function(g){return g===Es?Sx:g})),16);return{type:30,start:d,end:u}}var f=parseInt(st.apply(void 0,r),16);if(this.peekCodePoint(0)===Ot&&Er(this.peekCodePoint(1))){this.consumeCodePoint(),s=this.consumeCodePoint();for(var x=[];Er(s)&&x.length<6;)x.push(s),s=this.consumeCodePoint();var u=parseInt(st.apply(void 0,x),16);return{type:30,start:f,end:u}}else return{type:30,start:f,end:f}},i.prototype.consumeIdentLikeToken=function(){var r=this.consumeName();return r.toLowerCase()==="url"&&this.peekCodePoint(0)===Us?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===Us?(this.consumeCodePoint(),{type:19,value:r}):{type:20,value:r}},i.prototype.consumeUrlToken=function(){var r=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===mn)return{type:22,value:""};var s=this.peekCodePoint(0);if(s===Qs||s===Cs){var o=this.consumeStringToken(this.consumeCodePoint());return o.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===mn||this.peekCodePoint(0)===Oi)?(this.consumeCodePoint(),{type:22,value:o.value}):(this.consumeBadUrlRemnants(),Ss)}for(;;){var d=this.consumeCodePoint();if(d===mn||d===Oi)return{type:22,value:st.apply(void 0,r)};if(Fs(d))return this.consumeWhiteSpace(),this.peekCodePoint(0)===mn||this.peekCodePoint(0)===Oi?(this.consumeCodePoint(),{type:22,value:st.apply(void 0,r)}):(this.consumeBadUrlRemnants(),Ss);if(d===Cs||d===Qs||d===Us||Vy(d))return this.consumeBadUrlRemnants(),Ss;if(d===Zi)if(ga(d,this.peekCodePoint(0)))r.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),Ss;else r.push(d)}},i.prototype.consumeWhiteSpace=function(){for(;Fs(this.peekCodePoint(0));)this.consumeCodePoint()},i.prototype.consumeBadUrlRemnants=function(){for(;;){var r=this.consumeCodePoint();if(r===Oi||r===mn)return;ga(r,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},i.prototype.consumeStringSlice=function(r){for(var s=5e4,o="";r>0;){var d=Math.min(s,r);o+=st.apply(void 0,this._value.splice(0,d)),r-=d}return this._value.shift(),o},i.prototype.consumeStringToken=function(r){var s="",o=0;do{var d=this._value[o];if(d===mn||d===void 0||d===r)return s+=this.consumeStringSlice(o),{type:0,value:s};if(d===_s)return this._value.splice(0,o),i1;if(d===Zi){var u=this._value[o+1];u!==mn&&u!==void 0&&(u===_s?(s+=this.consumeStringSlice(o),o=-1,this._value.shift()):ga(d,u)&&(s+=this.consumeStringSlice(o),s+=st(this.consumeEscapedCodePoint()),o=-1))}o++}while(!0)},i.prototype.consumeNumber=function(){var r=[],s=ao,o=this.peekCodePoint(0);for((o===Ra||o===Ot)&&r.push(this.consumeCodePoint());Ht(this.peekCodePoint(0));)r.push(this.consumeCodePoint());o=this.peekCodePoint(0);var d=this.peekCodePoint(1);if(o===eo&&Ht(d))for(r.push(this.consumeCodePoint(),this.consumeCodePoint()),s=bp;Ht(this.peekCodePoint(0));)r.push(this.consumeCodePoint());o=this.peekCodePoint(0),d=this.peekCodePoint(1);var u=this.peekCodePoint(2);if((o===jx||o===Ex)&&((d===Ra||d===Ot)&&Ht(u)||Ht(d)))for(r.push(this.consumeCodePoint(),this.consumeCodePoint()),s=bp;Ht(this.peekCodePoint(0));)r.push(this.consumeCodePoint());return[Jy(r),s]},i.prototype.consumeNumericToken=function(){var r=this.consumeNumber(),s=r[0],o=r[1],d=this.peekCodePoint(0),u=this.peekCodePoint(1),f=this.peekCodePoint(2);if(js(d,u,f)){var x=this.consumeName();return{type:15,number:s,flags:o,unit:x}}return d===gy?(this.consumeCodePoint(),{type:16,number:s,flags:o}):{type:17,number:s,flags:o}},i.prototype.consumeEscapedCodePoint=function(){var r=this.consumeCodePoint();if(Er(r)){for(var s=st(r);Er(this.peekCodePoint(0))&&s.length<6;)s+=st(this.consumeCodePoint());Fs(this.peekCodePoint(0))&&this.consumeCodePoint();var o=parseInt(s,16);return o===0||Ry(o)||o>1114111?vp:o}return r===mn?vp:r},i.prototype.consumeName=function(){for(var r="";;){var s=this.consumeCodePoint();if(Cp(s))r+=st(s);else if(ga(s,this.peekCodePoint(0)))r+=st(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(s),r}},i}(),Hx=function(){function i(r){this._tokens=r}return i.create=function(r){var s=new kx;return s.write(r),new i(s.read())},i.parseValue=function(r){return i.create(r).parseComponentValue()},i.parseValues=function(r){return i.create(r).parseComponentValues()},i.prototype.parseComponentValue=function(){for(var r=this.consumeToken();r.type===31;)r=this.consumeToken();if(r.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(r);var s=this.consumeComponentValue();do r=this.consumeToken();while(r.type===31);if(r.type===32)return s;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},i.prototype.parseComponentValues=function(){for(var r=[];;){var s=this.consumeComponentValue();if(s.type===32)return r;r.push(s),r.push()}},i.prototype.consumeComponentValue=function(){var r=this.consumeToken();switch(r.type){case 11:case 28:case 2:return this.consumeSimpleBlock(r.type);case 19:return this.consumeFunction(r)}return r},i.prototype.consumeSimpleBlock=function(r){for(var s={type:r,values:[]},o=this.consumeToken();;){if(o.type===32||g1(o,r))return s;this.reconsumeToken(o),s.values.push(this.consumeComponentValue()),o=this.consumeToken()}},i.prototype.consumeFunction=function(r){for(var s={name:r.value,values:[],type:18};;){var o=this.consumeToken();if(o.type===32||o.type===3)return s;this.reconsumeToken(o),s.values.push(this.consumeComponentValue())}},i.prototype.consumeToken=function(){var r=this._tokens.shift();return typeof r>"u"?qd:r},i.prototype.reconsumeToken=function(r){this._tokens.unshift(r)},i}(),ro=function(i){return i.type===15},Lr=function(i){return i.type===17},Re=function(i){return i.type===20},h1=function(i){return i.type===0},Pd=function(i,r){return Re(i)&&i.value===r},Nx=function(i){return i.type!==31},Dr=function(i){return i.type!==31&&i.type!==4},yn=function(i){var r=[],s=[];return i.forEach(function(o){if(o.type===4){if(s.length===0)throw new Error("Error parsing function args, zero tokens for arg");r.push(s),s=[];return}o.type!==31&&s.push(o)}),s.length&&r.push(s),r},g1=function(i,r){return r===11&&i.type===12||r===28&&i.type===29?!0:r===2&&i.type===3},va=function(i){return i.type===17||i.type===15},ft=function(i){return i.type===16||va(i)},Mx=function(i){return i.length>1?[i[0],i[1]]:[i[0]]},Et={type:17,number:0,flags:ao},fu={type:16,number:50,flags:ao},xa={type:16,number:100,flags:ao},Xi=function(i,r,s){var o=i[0],d=i[1];return[Ve(o,r),Ve(typeof d<"u"?d:o,s)]},Ve=function(i,r){if(i.type===16)return i.number/100*r;if(ro(i))switch(i.unit){case"rem":case"em":return 16*i.number;case"px":default:return i.number}return i.number},Dx="deg",Tx="grad",Ix="rad",Lx="turn",el={name:"angle",parse:function(i,r){if(r.type===15)switch(r.unit){case Dx:return Math.PI*r.number/180;case Tx:return Math.PI/200*r.number;case Ix:return r.number;case Lx:return Math.PI*2*r.number}throw new Error("Unsupported angle type")}},Ox=function(i){return i.type===15&&(i.unit===Dx||i.unit===Tx||i.unit===Ix||i.unit===Lx)},Kx=function(i){var r=i.filter(Re).map(function(s){return s.value}).join(" ");switch(r){case"to bottom right":case"to right bottom":case"left top":case"top left":return[Et,Et];case"to top":case"bottom":return rn(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[Et,xa];case"to right":case"left":return rn(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[xa,xa];case"to bottom":case"top":return rn(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[xa,Et];case"to left":case"right":return rn(270)}return 0},rn=function(i){return Math.PI*i/180},Ba={name:"color",parse:function(i,r){if(r.type===18){var s=p1[r.name];if(typeof s>"u")throw new Error('Attempting to parse an unsupported color function "'+r.name+'"');return s(i,r.values)}if(r.type===5){if(r.value.length===3){var o=r.value.substring(0,1),d=r.value.substring(1,2),u=r.value.substring(2,3);return ma(parseInt(o+o,16),parseInt(d+d,16),parseInt(u+u,16),1)}if(r.value.length===4){var o=r.value.substring(0,1),d=r.value.substring(1,2),u=r.value.substring(2,3),f=r.value.substring(3,4);return ma(parseInt(o+o,16),parseInt(d+d,16),parseInt(u+u,16),parseInt(f+f,16)/255)}if(r.value.length===6){var o=r.value.substring(0,2),d=r.value.substring(2,4),u=r.value.substring(4,6);return ma(parseInt(o,16),parseInt(d,16),parseInt(u,16),1)}if(r.value.length===8){var o=r.value.substring(0,2),d=r.value.substring(2,4),u=r.value.substring(4,6),f=r.value.substring(6,8);return ma(parseInt(o,16),parseInt(d,16),parseInt(u,16),parseInt(f,16)/255)}}if(r.type===20){var x=Kn[r.value.toUpperCase()];if(typeof x<"u")return x}return Kn.TRANSPARENT}},ba=function(i){return(255&i)===0},yt=function(i){var r=255&i,s=255&i>>8,o=255&i>>16,d=255&i>>24;return r<255?"rgba("+d+","+o+","+s+","+r/255+")":"rgb("+d+","+o+","+s+")"},ma=function(i,r,s,o){return(i<<24|r<<16|s<<8|Math.round(o*255)<<0)>>>0},Qp=function(i,r){if(i.type===17)return i.number;if(i.type===16){var s=r===3?1:255;return r===3?i.number/100*s:Math.round(i.number/100*s)}return 0},Up=function(i,r){var s=r.filter(Dr);if(s.length===3){var o=s.map(Qp),d=o[0],u=o[1],f=o[2];return ma(d,u,f,1)}if(s.length===4){var x=s.map(Qp),d=x[0],u=x[1],f=x[2],g=x[3];return ma(d,u,f,g)}return 0};function Qd(i,r,s){return s<0&&(s+=1),s>=1&&(s-=1),s<1/6?(r-i)*s*6+i:s<1/2?r:s<2/3?(r-i)*6*(2/3-s)+i:i}var Ep=function(i,r){var s=r.filter(Dr),o=s[0],d=s[1],u=s[2],f=s[3],x=(o.type===17?rn(o.number):el.parse(i,o))/(Math.PI*2),g=ft(d)?d.number/100:0,B=ft(u)?u.number/100:0,v=typeof f<"u"&&ft(f)?Ve(f,1):1;if(g===0)return ma(B*255,B*255,B*255,1);var S=B<=.5?B*(g+1):B+g-B*g,M=B*2-S,oA=Qd(M,S,x+1/3),AA=Qd(M,S,x),dA=Qd(M,S,x-1/3);return ma(oA*255,AA*255,dA*255,v)},p1={hsl:Ep,hsla:Ep,rgb:Up,rgba:Up},$i=function(i,r){return Ba.parse(i,Hx.create(r).parseComponentValue())},Kn={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},x1={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(i,r){return r.map(function(s){if(Re(s))switch(s.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},m1={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},tl=function(i,r){var s=Ba.parse(i,r[0]),o=r[1];return o&&ft(o)?{color:s,stop:o}:{color:s,stop:null}},Fp=function(i,r){var s=i[0],o=i[i.length-1];s.stop===null&&(s.stop=Et),o.stop===null&&(o.stop=xa);for(var d=[],u=0,f=0;f<i.length;f++){var x=i[f].stop;if(x!==null){var g=Ve(x,r);g>u?d.push(g):d.push(u),u=g}else d.push(null)}for(var B=null,f=0;f<d.length;f++){var v=d[f];if(v===null)B===null&&(B=f);else if(B!==null){for(var S=f-B,M=d[B-1],oA=(v-M)/(S+1),AA=1;AA<=S;AA++)d[B+AA-1]=oA*AA;B=null}}return i.map(function(dA,DA){var NA=dA.color;return{color:NA,stop:Math.max(Math.min(1,d[DA]/r),0)}})},B1=function(i,r,s){var o=r/2,d=s/2,u=Ve(i[0],r)-o,f=d-Ve(i[1],s);return(Math.atan2(f,u)+Math.PI*2)%(Math.PI*2)},b1=function(i,r,s){var o=typeof i=="number"?i:B1(i,r,s),d=Math.abs(r*Math.sin(o))+Math.abs(s*Math.cos(o)),u=r/2,f=s/2,x=d/2,g=Math.sin(o-Math.PI/2)*x,B=Math.cos(o-Math.PI/2)*x;return[d,u-B,u+B,f-g,f+g]},dn=function(i,r){return Math.sqrt(i*i+r*r)},jp=function(i,r,s,o,d){var u=[[0,0],[0,r],[i,0],[i,r]];return u.reduce(function(f,x){var g=x[0],B=x[1],v=dn(s-g,o-B);return(d?v<f.optimumDistance:v>f.optimumDistance)?{optimumCorner:x,optimumDistance:v}:f},{optimumDistance:d?1/0:-1/0,optimumCorner:null}).optimumCorner},w1=function(i,r,s,o,d){var u=0,f=0;switch(i.size){case 0:i.shape===0?u=f=Math.min(Math.abs(r),Math.abs(r-o),Math.abs(s),Math.abs(s-d)):i.shape===1&&(u=Math.min(Math.abs(r),Math.abs(r-o)),f=Math.min(Math.abs(s),Math.abs(s-d)));break;case 2:if(i.shape===0)u=f=Math.min(dn(r,s),dn(r,s-d),dn(r-o,s),dn(r-o,s-d));else if(i.shape===1){var x=Math.min(Math.abs(s),Math.abs(s-d))/Math.min(Math.abs(r),Math.abs(r-o)),g=jp(o,d,r,s,!0),B=g[0],v=g[1];u=dn(B-r,(v-s)/x),f=x*u}break;case 1:i.shape===0?u=f=Math.max(Math.abs(r),Math.abs(r-o),Math.abs(s),Math.abs(s-d)):i.shape===1&&(u=Math.max(Math.abs(r),Math.abs(r-o)),f=Math.max(Math.abs(s),Math.abs(s-d)));break;case 3:if(i.shape===0)u=f=Math.max(dn(r,s),dn(r,s-d),dn(r-o,s),dn(r-o,s-d));else if(i.shape===1){var x=Math.max(Math.abs(s),Math.abs(s-d))/Math.max(Math.abs(r),Math.abs(r-o)),S=jp(o,d,r,s,!1),B=S[0],v=S[1];u=dn(B-r,(v-s)/x),f=x*u}break}return Array.isArray(i.size)&&(u=Ve(i.size[0],o),f=i.size.length===2?Ve(i.size[1],d):u),[u,f]},y1=function(i,r){var s=rn(180),o=[];return yn(r).forEach(function(d,u){if(u===0){var f=d[0];if(f.type===20&&f.value==="to"){s=Kx(d);return}else if(Ox(f)){s=el.parse(i,f);return}}var x=tl(i,d);o.push(x)}),{angle:s,stops:o,type:1}},ks=function(i,r){var s=rn(180),o=[];return yn(r).forEach(function(d,u){if(u===0){var f=d[0];if(f.type===20&&["top","left","right","bottom"].indexOf(f.value)!==-1){s=Kx(d);return}else if(Ox(f)){s=(el.parse(i,f)+rn(270))%rn(360);return}}var x=tl(i,d);o.push(x)}),{angle:s,stops:o,type:1}},v1=function(i,r){var s=rn(180),o=[],d=1,u=0,f=3,x=[];return yn(r).forEach(function(g,B){var v=g[0];if(B===0){if(Re(v)&&v.value==="linear"){d=1;return}else if(Re(v)&&v.value==="radial"){d=2;return}}if(v.type===18){if(v.name==="from"){var S=Ba.parse(i,v.values[0]);o.push({stop:Et,color:S})}else if(v.name==="to"){var S=Ba.parse(i,v.values[0]);o.push({stop:xa,color:S})}else if(v.name==="color-stop"){var M=v.values.filter(Dr);if(M.length===2){var S=Ba.parse(i,M[1]),oA=M[0];Lr(oA)&&o.push({stop:{type:16,number:oA.number*100,flags:oA.flags},color:S})}}}}),d===1?{angle:(s+rn(180))%rn(360),stops:o,type:d}:{size:f,shape:u,stops:o,position:x,type:d}},zx="closest-side",Rx="farthest-side",_x="closest-corner",Gx="farthest-corner",Yx="circle",Xx="ellipse",Vx="cover",Jx="contain",C1=function(i,r){var s=0,o=3,d=[],u=[];return yn(r).forEach(function(f,x){var g=!0;if(x===0){var B=!1;g=f.reduce(function(S,M){if(B)if(Re(M))switch(M.value){case"center":return u.push(fu),S;case"top":case"left":return u.push(Et),S;case"right":case"bottom":return u.push(xa),S}else(ft(M)||va(M))&&u.push(M);else if(Re(M))switch(M.value){case Yx:return s=0,!1;case Xx:return s=1,!1;case"at":return B=!0,!1;case zx:return o=0,!1;case Vx:case Rx:return o=1,!1;case Jx:case _x:return o=2,!1;case Gx:return o=3,!1}else if(va(M)||ft(M))return Array.isArray(o)||(o=[]),o.push(M),!1;return S},g)}if(g){var v=tl(i,f);d.push(v)}}),{size:o,shape:s,stops:d,position:u,type:2}},Hs=function(i,r){var s=0,o=3,d=[],u=[];return yn(r).forEach(function(f,x){var g=!0;if(x===0?g=f.reduce(function(v,S){if(Re(S))switch(S.value){case"center":return u.push(fu),!1;case"top":case"left":return u.push(Et),!1;case"right":case"bottom":return u.push(xa),!1}else if(ft(S)||va(S))return u.push(S),!1;return v},g):x===1&&(g=f.reduce(function(v,S){if(Re(S))switch(S.value){case Yx:return s=0,!1;case Xx:return s=1,!1;case Jx:case zx:return o=0,!1;case Rx:return o=1,!1;case _x:return o=2,!1;case Vx:case Gx:return o=3,!1}else if(va(S)||ft(S))return Array.isArray(o)||(o=[]),o.push(S),!1;return v},g)),g){var B=tl(i,f);d.push(B)}}),{size:o,shape:s,stops:d,position:u,type:2}},Q1=function(i){return i.type===1},U1=function(i){return i.type===2},hu={name:"image",parse:function(i,r){if(r.type===22){var s={url:r.value,type:0};return i.cache.addImage(r.value),s}if(r.type===18){var o=Zx[r.name];if(typeof o>"u")throw new Error('Attempting to parse an unsupported image function "'+r.name+'"');return o(i,r.values)}throw new Error("Unsupported image type "+r.type)}};function E1(i){return!(i.type===20&&i.value==="none")&&(i.type!==18||!!Zx[i.name])}var Zx={"linear-gradient":y1,"-moz-linear-gradient":ks,"-ms-linear-gradient":ks,"-o-linear-gradient":ks,"-webkit-linear-gradient":ks,"radial-gradient":C1,"-moz-radial-gradient":Hs,"-ms-radial-gradient":Hs,"-o-radial-gradient":Hs,"-webkit-radial-gradient":Hs,"-webkit-gradient":v1},F1={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(i,r){if(r.length===0)return[];var s=r[0];return s.type===20&&s.value==="none"?[]:r.filter(function(o){return Dr(o)&&E1(o)}).map(function(o){return hu.parse(i,o)})}},j1={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(i,r){return r.map(function(s){if(Re(s))switch(s.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},S1={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(i,r){return yn(r).map(function(s){return s.filter(ft)}).map(Mx)}},k1={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(i,r){return yn(r).map(function(s){return s.filter(Re).map(function(o){return o.value}).join(" ")}).map(H1)}},H1=function(i){switch(i){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},Mr;(function(i){i.AUTO="auto",i.CONTAIN="contain",i.COVER="cover"})(Mr||(Mr={}));var N1={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(i,r){return yn(r).map(function(s){return s.filter(M1)})}},M1=function(i){return Re(i)||ft(i)},nl=function(i){return{name:"border-"+i+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},D1=nl("top"),T1=nl("right"),I1=nl("bottom"),L1=nl("left"),al=function(i){return{name:"border-radius-"+i,initialValue:"0 0",prefix:!1,type:1,parse:function(r,s){return Mx(s.filter(ft))}}},O1=al("top-left"),K1=al("top-right"),z1=al("bottom-right"),R1=al("bottom-left"),rl=function(i){return{name:"border-"+i+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(r,s){switch(s){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},_1=rl("top"),G1=rl("right"),Y1=rl("bottom"),X1=rl("left"),il=function(i){return{name:"border-"+i+"-width",initialValue:"0",type:0,prefix:!1,parse:function(r,s){return ro(s)?s.number:0}}},V1=il("top"),J1=il("right"),Z1=il("bottom"),$1=il("left"),W1={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},q1={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(i,r){switch(r){case"rtl":return 1;case"ltr":default:return 0}}},P1={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(i,r){return r.filter(Re).reduce(function(s,o){return s|Av(o.value)},0)}},Av=function(i){switch(i){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},ev={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(i,r){switch(r){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},tv={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(i,r){return r.type===20&&r.value==="normal"?0:r.type===17||r.type===15?r.number:0}},Ys;(function(i){i.NORMAL="normal",i.STRICT="strict"})(Ys||(Ys={}));var nv={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(i,r){switch(r){case"strict":return Ys.STRICT;case"normal":default:return Ys.NORMAL}}},av={name:"line-height",initialValue:"normal",prefix:!1,type:4},Sp=function(i,r){return Re(i)&&i.value==="normal"?1.2*r:i.type===17?r*i.number:ft(i)?Ve(i,r):r},rv={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(i,r){return r.type===20&&r.value==="none"?null:hu.parse(i,r)}},iv={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(i,r){switch(r){case"inside":return 0;case"outside":default:return 1}}},Au={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(i,r){switch(r){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},ol=function(i){return{name:"margin-"+i,initialValue:"0",prefix:!1,type:4}},ov=ol("top"),sv=ol("right"),lv=ol("bottom"),cv=ol("left"),dv={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(i,r){return r.filter(Re).map(function(s){switch(s.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},uv={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(i,r){switch(r){case"break-word":return"break-word";case"normal":default:return"normal"}}},sl=function(i){return{name:"padding-"+i,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},fv=sl("top"),hv=sl("right"),gv=sl("bottom"),pv=sl("left"),xv={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(i,r){switch(r){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},mv={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(i,r){switch(r){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},Bv={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(i,r){return r.length===1&&Pd(r[0],"none")?[]:yn(r).map(function(s){for(var o={color:Kn.TRANSPARENT,offsetX:Et,offsetY:Et,blur:Et},d=0,u=0;u<s.length;u++){var f=s[u];va(f)?(d===0?o.offsetX=f:d===1?o.offsetY=f:o.blur=f,d++):o.color=Ba.parse(i,f)}return o})}},bv={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(i,r){switch(r){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},wv={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(i,r){if(r.type===20&&r.value==="none")return null;if(r.type===18){var s=Cv[r.name];if(typeof s>"u")throw new Error('Attempting to parse an unsupported transform function "'+r.name+'"');return s(r.values)}return null}},yv=function(i){var r=i.filter(function(s){return s.type===17}).map(function(s){return s.number});return r.length===6?r:null},vv=function(i){var r=i.filter(function(g){return g.type===17}).map(function(g){return g.number}),s=r[0],o=r[1];r[2],r[3];var d=r[4],u=r[5];r[6],r[7],r[8],r[9],r[10],r[11];var f=r[12],x=r[13];return r[14],r[15],r.length===16?[s,o,d,u,f,x]:null},Cv={matrix:yv,matrix3d:vv},kp={type:16,number:50,flags:ao},Qv=[kp,kp],Uv={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(i,r){var s=r.filter(ft);return s.length!==2?Qv:[s[0],s[1]]}},Ev={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(i,r){switch(r){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},Wi;(function(i){i.NORMAL="normal",i.BREAK_ALL="break-all",i.KEEP_ALL="keep-all"})(Wi||(Wi={}));var Fv={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(i,r){switch(r){case"break-all":return Wi.BREAK_ALL;case"keep-all":return Wi.KEEP_ALL;case"normal":default:return Wi.NORMAL}}},jv={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(i,r){if(r.type===20)return{auto:!0,order:0};if(Lr(r))return{auto:!1,order:r.number};throw new Error("Invalid z-index number parsed")}},$x={name:"time",parse:function(i,r){if(r.type===15)switch(r.unit.toLowerCase()){case"s":return 1e3*r.number;case"ms":return r.number}throw new Error("Unsupported time type")}},Sv={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(i,r){return Lr(r)?r.number:1}},kv={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Hv={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(i,r){return r.filter(Re).map(function(s){switch(s.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(s){return s!==0})}},Nv={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(i,r){var s=[],o=[];return r.forEach(function(d){switch(d.type){case 20:case 0:s.push(d.value);break;case 17:s.push(d.number.toString());break;case 4:o.push(s.join(" ")),s.length=0;break}}),s.length&&o.push(s.join(" ")),o.map(function(d){return d.indexOf(" ")===-1?d:"'"+d+"'"})}},Mv={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},Dv={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(i,r){if(Lr(r))return r.number;if(Re(r))switch(r.value){case"bold":return 700;case"normal":default:return 400}return 400}},Tv={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(i,r){return r.filter(Re).map(function(s){return s.value})}},Iv={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(i,r){switch(r){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},pt=function(i,r){return(i&r)!==0},Lv={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(i,r){if(r.length===0)return[];var s=r[0];return s.type===20&&s.value==="none"?[]:r}},Ov={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(i,r){if(r.length===0)return null;var s=r[0];if(s.type===20&&s.value==="none")return null;for(var o=[],d=r.filter(Nx),u=0;u<d.length;u++){var f=d[u],x=d[u+1];if(f.type===20){var g=x&&Lr(x)?x.number:1;o.push({counter:f.value,increment:g})}}return o}},Kv={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(i,r){if(r.length===0)return[];for(var s=[],o=r.filter(Nx),d=0;d<o.length;d++){var u=o[d],f=o[d+1];if(Re(u)&&u.value!=="none"){var x=f&&Lr(f)?f.number:0;s.push({counter:u.value,reset:x})}}return s}},zv={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(i,r){return r.filter(ro).map(function(s){return $x.parse(i,s)})}},Rv={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(i,r){if(r.length===0)return null;var s=r[0];if(s.type===20&&s.value==="none")return null;var o=[],d=r.filter(h1);if(d.length%2!==0)return null;for(var u=0;u<d.length;u+=2){var f=d[u].value,x=d[u+1].value;o.push({open:f,close:x})}return o}},Hp=function(i,r,s){if(!i)return"";var o=i[Math.min(r,i.length-1)];return o?s?o.open:o.close:""},_v={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(i,r){return r.length===1&&Pd(r[0],"none")?[]:yn(r).map(function(s){for(var o={color:255,offsetX:Et,offsetY:Et,blur:Et,spread:Et,inset:!1},d=0,u=0;u<s.length;u++){var f=s[u];Pd(f,"inset")?o.inset=!0:va(f)?(d===0?o.offsetX=f:d===1?o.offsetY=f:d===2?o.blur=f:o.spread=f,d++):o.color=Ba.parse(i,f)}return o})}},Gv={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(i,r){var s=[0,1,2],o=[];return r.filter(Re).forEach(function(d){switch(d.value){case"stroke":o.push(1);break;case"fill":o.push(0);break;case"markers":o.push(2);break}}),s.forEach(function(d){o.indexOf(d)===-1&&o.push(d)}),o}},Yv={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},Xv={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(i,r){return ro(r)?r.number:0}},Vv=function(){function i(r,s){var o,d;this.animationDuration=te(r,zv,s.animationDuration),this.backgroundClip=te(r,x1,s.backgroundClip),this.backgroundColor=te(r,m1,s.backgroundColor),this.backgroundImage=te(r,F1,s.backgroundImage),this.backgroundOrigin=te(r,j1,s.backgroundOrigin),this.backgroundPosition=te(r,S1,s.backgroundPosition),this.backgroundRepeat=te(r,k1,s.backgroundRepeat),this.backgroundSize=te(r,N1,s.backgroundSize),this.borderTopColor=te(r,D1,s.borderTopColor),this.borderRightColor=te(r,T1,s.borderRightColor),this.borderBottomColor=te(r,I1,s.borderBottomColor),this.borderLeftColor=te(r,L1,s.borderLeftColor),this.borderTopLeftRadius=te(r,O1,s.borderTopLeftRadius),this.borderTopRightRadius=te(r,K1,s.borderTopRightRadius),this.borderBottomRightRadius=te(r,z1,s.borderBottomRightRadius),this.borderBottomLeftRadius=te(r,R1,s.borderBottomLeftRadius),this.borderTopStyle=te(r,_1,s.borderTopStyle),this.borderRightStyle=te(r,G1,s.borderRightStyle),this.borderBottomStyle=te(r,Y1,s.borderBottomStyle),this.borderLeftStyle=te(r,X1,s.borderLeftStyle),this.borderTopWidth=te(r,V1,s.borderTopWidth),this.borderRightWidth=te(r,J1,s.borderRightWidth),this.borderBottomWidth=te(r,Z1,s.borderBottomWidth),this.borderLeftWidth=te(r,$1,s.borderLeftWidth),this.boxShadow=te(r,_v,s.boxShadow),this.color=te(r,W1,s.color),this.direction=te(r,q1,s.direction),this.display=te(r,P1,s.display),this.float=te(r,ev,s.cssFloat),this.fontFamily=te(r,Nv,s.fontFamily),this.fontSize=te(r,Mv,s.fontSize),this.fontStyle=te(r,Iv,s.fontStyle),this.fontVariant=te(r,Tv,s.fontVariant),this.fontWeight=te(r,Dv,s.fontWeight),this.letterSpacing=te(r,tv,s.letterSpacing),this.lineBreak=te(r,nv,s.lineBreak),this.lineHeight=te(r,av,s.lineHeight),this.listStyleImage=te(r,rv,s.listStyleImage),this.listStylePosition=te(r,iv,s.listStylePosition),this.listStyleType=te(r,Au,s.listStyleType),this.marginTop=te(r,ov,s.marginTop),this.marginRight=te(r,sv,s.marginRight),this.marginBottom=te(r,lv,s.marginBottom),this.marginLeft=te(r,cv,s.marginLeft),this.opacity=te(r,Sv,s.opacity);var u=te(r,dv,s.overflow);this.overflowX=u[0],this.overflowY=u[u.length>1?1:0],this.overflowWrap=te(r,uv,s.overflowWrap),this.paddingTop=te(r,fv,s.paddingTop),this.paddingRight=te(r,hv,s.paddingRight),this.paddingBottom=te(r,gv,s.paddingBottom),this.paddingLeft=te(r,pv,s.paddingLeft),this.paintOrder=te(r,Gv,s.paintOrder),this.position=te(r,mv,s.position),this.textAlign=te(r,xv,s.textAlign),this.textDecorationColor=te(r,kv,(o=s.textDecorationColor)!==null&&o!==void 0?o:s.color),this.textDecorationLine=te(r,Hv,(d=s.textDecorationLine)!==null&&d!==void 0?d:s.textDecoration),this.textShadow=te(r,Bv,s.textShadow),this.textTransform=te(r,bv,s.textTransform),this.transform=te(r,wv,s.transform),this.transformOrigin=te(r,Uv,s.transformOrigin),this.visibility=te(r,Ev,s.visibility),this.webkitTextStrokeColor=te(r,Yv,s.webkitTextStrokeColor),this.webkitTextStrokeWidth=te(r,Xv,s.webkitTextStrokeWidth),this.wordBreak=te(r,Fv,s.wordBreak),this.zIndex=te(r,jv,s.zIndex)}return i.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},i.prototype.isTransparent=function(){return ba(this.backgroundColor)},i.prototype.isTransformed=function(){return this.transform!==null},i.prototype.isPositioned=function(){return this.position!==0},i.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},i.prototype.isFloating=function(){return this.float!==0},i.prototype.isInlineLevel=function(){return pt(this.display,4)||pt(this.display,33554432)||pt(this.display,268435456)||pt(this.display,536870912)||pt(this.display,67108864)||pt(this.display,134217728)},i}(),Jv=function(){function i(r,s){this.content=te(r,Lv,s.content),this.quotes=te(r,Rv,s.quotes)}return i}(),Np=function(){function i(r,s){this.counterIncrement=te(r,Ov,s.counterIncrement),this.counterReset=te(r,Kv,s.counterReset)}return i}(),te=function(i,r,s){var o=new kx,d=s!==null&&typeof s<"u"?s.toString():r.initialValue;o.write(d);var u=new Hx(o.read());switch(r.type){case 2:var f=u.parseComponentValue();return r.parse(i,Re(f)?f.value:r.initialValue);case 0:return r.parse(i,u.parseComponentValue());case 1:return r.parse(i,u.parseComponentValues());case 4:return u.parseComponentValue();case 3:switch(r.format){case"angle":return el.parse(i,u.parseComponentValue());case"color":return Ba.parse(i,u.parseComponentValue());case"image":return hu.parse(i,u.parseComponentValue());case"length":var x=u.parseComponentValue();return va(x)?x:Et;case"length-percentage":var g=u.parseComponentValue();return ft(g)?g:Et;case"time":return $x.parse(i,u.parseComponentValue())}break}},Zv="data-html2canvas-debug",$v=function(i){var r=i.getAttribute(Zv);switch(r){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},eu=function(i,r){var s=$v(i);return s===1||r===s},vn=function(){function i(r,s){if(this.context=r,this.textNodes=[],this.elements=[],this.flags=0,eu(s,3))debugger;this.styles=new Vv(r,window.getComputedStyle(s,null)),au(s)&&(this.styles.animationDuration.some(function(o){return o>0})&&(s.style.animationDuration="0s"),this.styles.transform!==null&&(s.style.transform="none")),this.bounds=Ps(this.context,s),eu(s,4)&&(this.flags|=16)}return i}(),Wv="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",Mp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Vi=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Ns=0;Ns<Mp.length;Ns++)Vi[Mp.charCodeAt(Ns)]=Ns;var qv=function(i){var r=i.length*.75,s=i.length,o,d=0,u,f,x,g;i[i.length-1]==="="&&(r--,i[i.length-2]==="="&&r--);var B=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(r):new Array(r),v=Array.isArray(B)?B:new Uint8Array(B);for(o=0;o<s;o+=4)u=Vi[i.charCodeAt(o)],f=Vi[i.charCodeAt(o+1)],x=Vi[i.charCodeAt(o+2)],g=Vi[i.charCodeAt(o+3)],v[d++]=u<<2|f>>4,v[d++]=(f&15)<<4|x>>2,v[d++]=(x&3)<<6|g&63;return B},Pv=function(i){for(var r=i.length,s=[],o=0;o<r;o+=2)s.push(i[o+1]<<8|i[o]);return s},AC=function(i){for(var r=i.length,s=[],o=0;o<r;o+=4)s.push(i[o+3]<<24|i[o+2]<<16|i[o+1]<<8|i[o]);return s},Ga=5,gu=11,Ud=2,eC=gu-Ga,Wx=65536>>Ga,tC=1<<Ga,Ed=tC-1,nC=1024>>Ga,aC=Wx+nC,rC=aC,iC=32,oC=rC+iC,sC=65536>>gu,lC=1<<eC,cC=lC-1,Dp=function(i,r,s){return i.slice?i.slice(r,s):new Uint16Array(Array.prototype.slice.call(i,r,s))},dC=function(i,r,s){return i.slice?i.slice(r,s):new Uint32Array(Array.prototype.slice.call(i,r,s))},uC=function(i,r){var s=qv(i),o=Array.isArray(s)?AC(s):new Uint32Array(s),d=Array.isArray(s)?Pv(s):new Uint16Array(s),u=24,f=Dp(d,u/2,o[4]/2),x=o[5]===2?Dp(d,(u+o[4])/2):dC(o,Math.ceil((u+o[4])/4));return new fC(o[0],o[1],o[2],o[3],f,x)},fC=function(){function i(r,s,o,d,u,f){this.initialValue=r,this.errorValue=s,this.highStart=o,this.highValueIndex=d,this.index=u,this.data=f}return i.prototype.get=function(r){var s;if(r>=0){if(r<55296||r>56319&&r<=65535)return s=this.index[r>>Ga],s=(s<<Ud)+(r&Ed),this.data[s];if(r<=65535)return s=this.index[Wx+(r-55296>>Ga)],s=(s<<Ud)+(r&Ed),this.data[s];if(r<this.highStart)return s=oC-sC+(r>>gu),s=this.index[s],s+=r>>Ga&cC,s=this.index[s],s=(s<<Ud)+(r&Ed),this.data[s];if(r<=1114111)return this.data[this.highValueIndex]}return this.errorValue},i}(),Tp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",hC=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Ms=0;Ms<Tp.length;Ms++)hC[Tp.charCodeAt(Ms)]=Ms;var gC=1,Fd=2,jd=3,Ip=4,Lp=5,pC=7,Op=8,Sd=9,kd=10,Kp=11,zp=12,Rp=13,_p=14,Hd=15,xC=function(i){for(var r=[],s=0,o=i.length;s<o;){var d=i.charCodeAt(s++);if(d>=55296&&d<=56319&&s<o){var u=i.charCodeAt(s++);(u&64512)===56320?r.push(((d&1023)<<10)+(u&1023)+65536):(r.push(d),s--)}else r.push(d)}return r},mC=function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];if(String.fromCodePoint)return String.fromCodePoint.apply(String,i);var s=i.length;if(!s)return"";for(var o=[],d=-1,u="";++d<s;){var f=i[d];f<=65535?o.push(f):(f-=65536,o.push((f>>10)+55296,f%1024+56320)),(d+1===s||o.length>16384)&&(u+=String.fromCharCode.apply(String,o),o.length=0)}return u},BC=uC(Wv),nn="×",Nd="÷",bC=function(i){return BC.get(i)},wC=function(i,r,s){var o=s-2,d=r[o],u=r[s-1],f=r[s];if(u===Fd&&f===jd)return nn;if(u===Fd||u===jd||u===Ip||f===Fd||f===jd||f===Ip)return Nd;if(u===Op&&[Op,Sd,Kp,zp].indexOf(f)!==-1||(u===Kp||u===Sd)&&(f===Sd||f===kd)||(u===zp||u===kd)&&f===kd||f===Rp||f===Lp||f===pC||u===gC)return nn;if(u===Rp&&f===_p){for(;d===Lp;)d=r[--o];if(d===_p)return nn}if(u===Hd&&f===Hd){for(var x=0;d===Hd;)x++,d=r[--o];if(x%2===0)return nn}return Nd},yC=function(i){var r=xC(i),s=r.length,o=0,d=0,u=r.map(bC);return{next:function(){if(o>=s)return{done:!0,value:null};for(var f=nn;o<s&&(f=wC(r,u,++o))===nn;);if(f!==nn||o===s){var x=mC.apply(null,r.slice(d,o));return d=o,{value:x,done:!1}}return{done:!0,value:null}}}},vC=function(i){for(var r=yC(i),s=[],o;!(o=r.next()).done;)o.value&&s.push(o.value.slice());return s},CC=function(i){var r=123;if(i.createRange){var s=i.createRange();if(s.getBoundingClientRect){var o=i.createElement("boundtest");o.style.height=r+"px",o.style.display="block",i.body.appendChild(o),s.selectNode(o);var d=s.getBoundingClientRect(),u=Math.round(d.height);if(i.body.removeChild(o),u===r)return!0}}return!1},QC=function(i){var r=i.createElement("boundtest");r.style.width="50px",r.style.display="block",r.style.fontSize="12px",r.style.letterSpacing="0px",r.style.wordSpacing="0px",i.body.appendChild(r);var s=i.createRange();r.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var o=r.firstChild,d=Al(o.data).map(function(g){return st(g)}),u=0,f={},x=d.every(function(g,B){s.setStart(o,u),s.setEnd(o,u+g.length);var v=s.getBoundingClientRect();u+=g.length;var S=v.x>f.x||v.y>f.y;return f=v,B===0?!0:S});return i.body.removeChild(r),x},UC=function(){return typeof new Image().crossOrigin<"u"},EC=function(){return typeof new XMLHttpRequest().responseType=="string"},FC=function(i){var r=new Image,s=i.createElement("canvas"),o=s.getContext("2d");if(!o)return!1;r.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{o.drawImage(r,0,0),s.toDataURL()}catch{return!1}return!0},Gp=function(i){return i[0]===0&&i[1]===255&&i[2]===0&&i[3]===255},jC=function(i){var r=i.createElement("canvas"),s=100;r.width=s,r.height=s;var o=r.getContext("2d");if(!o)return Promise.reject(!1);o.fillStyle="rgb(0, 255, 0)",o.fillRect(0,0,s,s);var d=new Image,u=r.toDataURL();d.src=u;var f=tu(s,s,0,0,d);return o.fillStyle="red",o.fillRect(0,0,s,s),Yp(f).then(function(x){o.drawImage(x,0,0);var g=o.getImageData(0,0,s,s).data;o.fillStyle="red",o.fillRect(0,0,s,s);var B=i.createElement("div");return B.style.backgroundImage="url("+u+")",B.style.height=s+"px",Gp(g)?Yp(tu(s,s,0,0,B)):Promise.reject(!1)}).then(function(x){return o.drawImage(x,0,0),Gp(o.getImageData(0,0,s,s).data)}).catch(function(){return!1})},tu=function(i,r,s,o,d){var u="http://www.w3.org/2000/svg",f=document.createElementNS(u,"svg"),x=document.createElementNS(u,"foreignObject");return f.setAttributeNS(null,"width",i.toString()),f.setAttributeNS(null,"height",r.toString()),x.setAttributeNS(null,"width","100%"),x.setAttributeNS(null,"height","100%"),x.setAttributeNS(null,"x",s.toString()),x.setAttributeNS(null,"y",o.toString()),x.setAttributeNS(null,"externalResourcesRequired","true"),f.appendChild(x),x.appendChild(d),f},Yp=function(i){return new Promise(function(r,s){var o=new Image;o.onload=function(){return r(o)},o.onerror=s,o.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(i))})},Ut={get SUPPORT_RANGE_BOUNDS(){var i=CC(document);return Object.defineProperty(Ut,"SUPPORT_RANGE_BOUNDS",{value:i}),i},get SUPPORT_WORD_BREAKING(){var i=Ut.SUPPORT_RANGE_BOUNDS&&QC(document);return Object.defineProperty(Ut,"SUPPORT_WORD_BREAKING",{value:i}),i},get SUPPORT_SVG_DRAWING(){var i=FC(document);return Object.defineProperty(Ut,"SUPPORT_SVG_DRAWING",{value:i}),i},get SUPPORT_FOREIGNOBJECT_DRAWING(){var i=typeof Array.from=="function"&&typeof window.fetch=="function"?jC(document):Promise.resolve(!1);return Object.defineProperty(Ut,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:i}),i},get SUPPORT_CORS_IMAGES(){var i=UC();return Object.defineProperty(Ut,"SUPPORT_CORS_IMAGES",{value:i}),i},get SUPPORT_RESPONSE_TYPE(){var i=EC();return Object.defineProperty(Ut,"SUPPORT_RESPONSE_TYPE",{value:i}),i},get SUPPORT_CORS_XHR(){var i="withCredentials"in new XMLHttpRequest;return Object.defineProperty(Ut,"SUPPORT_CORS_XHR",{value:i}),i},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var i=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(Ut,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:i}),i}},qi=function(){function i(r,s){this.text=r,this.bounds=s}return i}(),SC=function(i,r,s,o){var d=NC(r,s),u=[],f=0;return d.forEach(function(x){if(s.textDecorationLine.length||x.trim().length>0)if(Ut.SUPPORT_RANGE_BOUNDS){var g=Xp(o,f,x.length).getClientRects();if(g.length>1){var B=pu(x),v=0;B.forEach(function(M){u.push(new qi(M,zn.fromDOMRectList(i,Xp(o,v+f,M.length).getClientRects()))),v+=M.length})}else u.push(new qi(x,zn.fromDOMRectList(i,g)))}else{var S=o.splitText(x.length);u.push(new qi(x,kC(i,o))),o=S}else Ut.SUPPORT_RANGE_BOUNDS||(o=o.splitText(x.length));f+=x.length}),u},kC=function(i,r){var s=r.ownerDocument;if(s){var o=s.createElement("html2canvaswrapper");o.appendChild(r.cloneNode(!0));var d=r.parentNode;if(d){d.replaceChild(o,r);var u=Ps(i,o);return o.firstChild&&d.replaceChild(o.firstChild,o),u}}return zn.EMPTY},Xp=function(i,r,s){var o=i.ownerDocument;if(!o)throw new Error("Node has no owner document");var d=o.createRange();return d.setStart(i,r),d.setEnd(i,r+s),d},pu=function(i){if(Ut.SUPPORT_NATIVE_TEXT_SEGMENTATION){var r=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(r.segment(i)).map(function(s){return s.segment})}return vC(i)},HC=function(i,r){if(Ut.SUPPORT_NATIVE_TEXT_SEGMENTATION){var s=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(s.segment(i)).map(function(o){return o.segment})}return DC(i,r)},NC=function(i,r){return r.letterSpacing!==0?pu(i):HC(i,r)},MC=[32,160,4961,65792,65793,4153,4241],DC=function(i,r){for(var s=sy(i,{lineBreak:r.lineBreak,wordBreak:r.overflowWrap==="break-word"?"break-word":r.wordBreak}),o=[],d,u=function(){if(d.value){var f=d.value.slice(),x=Al(f),g="";x.forEach(function(B){MC.indexOf(B)===-1?g+=st(B):(g.length&&o.push(g),o.push(st(B)),g="")}),g.length&&o.push(g)}};!(d=s.next()).done;)u();return o},TC=function(){function i(r,s,o){this.text=IC(s.data,o.textTransform),this.textBounds=SC(r,this.text,o,s)}return i}(),IC=function(i,r){switch(r){case 1:return i.toLowerCase();case 3:return i.replace(LC,OC);case 2:return i.toUpperCase();default:return i}},LC=/(^|\s|:|-|\(|\))([a-z])/g,OC=function(i,r,s){return i.length>0?r+s.toUpperCase():i},qx=function(i){un(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.src=o.currentSrc||o.src,d.intrinsicWidth=o.naturalWidth,d.intrinsicHeight=o.naturalHeight,d.context.cache.addImage(d.src),d}return r}(vn),Px=function(i){un(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.canvas=o,d.intrinsicWidth=o.width,d.intrinsicHeight=o.height,d}return r}(vn),A0=function(i){un(r,i);function r(s,o){var d=i.call(this,s,o)||this,u=new XMLSerializer,f=Ps(s,o);return o.setAttribute("width",f.width+"px"),o.setAttribute("height",f.height+"px"),d.svg="data:image/svg+xml,"+encodeURIComponent(u.serializeToString(o)),d.intrinsicWidth=o.width.baseVal.value,d.intrinsicHeight=o.height.baseVal.value,d.context.cache.addImage(d.svg),d}return r}(vn),e0=function(i){un(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.value=o.value,d}return r}(vn),nu=function(i){un(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.start=o.start,d.reversed=typeof o.reversed=="boolean"&&o.reversed===!0,d}return r}(vn),KC=[{type:15,flags:0,unit:"px",number:3}],zC=[{type:16,flags:0,number:50}],RC=function(i){return i.width>i.height?new zn(i.left+(i.width-i.height)/2,i.top,i.height,i.height):i.width<i.height?new zn(i.left,i.top+(i.height-i.width)/2,i.width,i.width):i},_C=function(i){var r=i.type===GC?new Array(i.value.length+1).join("•"):i.value;return r.length===0?i.placeholder||"":r},Xs="checkbox",Vs="radio",GC="password",Vp=707406591,xu=function(i){un(r,i);function r(s,o){var d=i.call(this,s,o)||this;switch(d.type=o.type.toLowerCase(),d.checked=o.checked,d.value=_C(o),(d.type===Xs||d.type===Vs)&&(d.styles.backgroundColor=3739148031,d.styles.borderTopColor=d.styles.borderRightColor=d.styles.borderBottomColor=d.styles.borderLeftColor=2779096575,d.styles.borderTopWidth=d.styles.borderRightWidth=d.styles.borderBottomWidth=d.styles.borderLeftWidth=1,d.styles.borderTopStyle=d.styles.borderRightStyle=d.styles.borderBottomStyle=d.styles.borderLeftStyle=1,d.styles.backgroundClip=[0],d.styles.backgroundOrigin=[0],d.bounds=RC(d.bounds)),d.type){case Xs:d.styles.borderTopRightRadius=d.styles.borderTopLeftRadius=d.styles.borderBottomRightRadius=d.styles.borderBottomLeftRadius=KC;break;case Vs:d.styles.borderTopRightRadius=d.styles.borderTopLeftRadius=d.styles.borderBottomRightRadius=d.styles.borderBottomLeftRadius=zC;break}return d}return r}(vn),t0=function(i){un(r,i);function r(s,o){var d=i.call(this,s,o)||this,u=o.options[o.selectedIndex||0];return d.value=u&&u.text||"",d}return r}(vn),n0=function(i){un(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.value=o.value,d}return r}(vn),a0=function(i){un(r,i);function r(s,o){var d=i.call(this,s,o)||this;d.src=o.src,d.width=parseInt(o.width,10)||0,d.height=parseInt(o.height,10)||0,d.backgroundColor=d.styles.backgroundColor;try{if(o.contentWindow&&o.contentWindow.document&&o.contentWindow.document.documentElement){d.tree=i0(s,o.contentWindow.document.documentElement);var u=o.contentWindow.document.documentElement?$i(s,getComputedStyle(o.contentWindow.document.documentElement).backgroundColor):Kn.TRANSPARENT,f=o.contentWindow.document.body?$i(s,getComputedStyle(o.contentWindow.document.body).backgroundColor):Kn.TRANSPARENT;d.backgroundColor=ba(u)?ba(f)?d.styles.backgroundColor:f:u}}catch{}return d}return r}(vn),YC=["OL","UL","MENU"],zs=function(i,r,s,o){for(var d=r.firstChild,u=void 0;d;d=u)if(u=d.nextSibling,o0(d)&&d.data.trim().length>0)s.textNodes.push(new TC(i,d,s.styles));else if(Nr(d))if(d0(d)&&d.assignedNodes)d.assignedNodes().forEach(function(x){return zs(i,x,s,o)});else{var f=r0(i,d);f.styles.isVisible()&&(XC(d,f,o)?f.flags|=4:VC(f.styles)&&(f.flags|=2),YC.indexOf(d.tagName)!==-1&&(f.flags|=8),s.elements.push(f),d.slot,d.shadowRoot?zs(i,d.shadowRoot,f,o):!Js(d)&&!s0(d)&&!Zs(d)&&zs(i,d,f,o))}},r0=function(i,r){return ru(r)?new qx(i,r):l0(r)?new Px(i,r):s0(r)?new A0(i,r):JC(r)?new e0(i,r):ZC(r)?new nu(i,r):$C(r)?new xu(i,r):Zs(r)?new t0(i,r):Js(r)?new n0(i,r):c0(r)?new a0(i,r):new vn(i,r)},i0=function(i,r){var s=r0(i,r);return s.flags|=4,zs(i,r,s,s),s},XC=function(i,r,s){return r.styles.isPositionedWithZIndex()||r.styles.opacity<1||r.styles.isTransformed()||mu(i)&&s.styles.isTransparent()},VC=function(i){return i.isPositioned()||i.isFloating()},o0=function(i){return i.nodeType===Node.TEXT_NODE},Nr=function(i){return i.nodeType===Node.ELEMENT_NODE},au=function(i){return Nr(i)&&typeof i.style<"u"&&!Rs(i)},Rs=function(i){return typeof i.className=="object"},JC=function(i){return i.tagName==="LI"},ZC=function(i){return i.tagName==="OL"},$C=function(i){return i.tagName==="INPUT"},WC=function(i){return i.tagName==="HTML"},s0=function(i){return i.tagName==="svg"},mu=function(i){return i.tagName==="BODY"},l0=function(i){return i.tagName==="CANVAS"},Jp=function(i){return i.tagName==="VIDEO"},ru=function(i){return i.tagName==="IMG"},c0=function(i){return i.tagName==="IFRAME"},Zp=function(i){return i.tagName==="STYLE"},qC=function(i){return i.tagName==="SCRIPT"},Js=function(i){return i.tagName==="TEXTAREA"},Zs=function(i){return i.tagName==="SELECT"},d0=function(i){return i.tagName==="SLOT"},$p=function(i){return i.tagName.indexOf("-")>0},PC=function(){function i(){this.counters={}}return i.prototype.getCounterValue=function(r){var s=this.counters[r];return s&&s.length?s[s.length-1]:1},i.prototype.getCounterValues=function(r){var s=this.counters[r];return s||[]},i.prototype.pop=function(r){var s=this;r.forEach(function(o){return s.counters[o].pop()})},i.prototype.parse=function(r){var s=this,o=r.counterIncrement,d=r.counterReset,u=!0;o!==null&&o.forEach(function(x){var g=s.counters[x.counter];g&&x.increment!==0&&(u=!1,g.length||g.push(1),g[Math.max(0,g.length-1)]+=x.increment)});var f=[];return u&&d.forEach(function(x){var g=s.counters[x.counter];f.push(x.counter),g||(g=s.counters[x.counter]=[]),g.push(x.reset)}),f},i}(),Wp={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},qp={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},A2={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},e2={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},Fr=function(i,r,s,o,d,u){return i<r||i>s?to(i,d,u.length>0):o.integers.reduce(function(f,x,g){for(;i>=x;)i-=x,f+=o.values[g];return f},"")+u},u0=function(i,r,s,o){var d="";do s||i--,d=o(i)+d,i/=r;while(i*r>=r);return d},ot=function(i,r,s,o,d){var u=s-r+1;return(i<0?"-":"")+(u0(Math.abs(i),u,o,function(f){return st(Math.floor(f%u)+r)})+d)},Ka=function(i,r,s){s===void 0&&(s=". ");var o=r.length;return u0(Math.abs(i),o,!1,function(d){return r[Math.floor(d%o)]})+s},kr=1,fa=2,ha=4,Ji=8,On=function(i,r,s,o,d,u){if(i<-9999||i>9999)return to(i,4,d.length>0);var f=Math.abs(i),x=d;if(f===0)return r[0]+x;for(var g=0;f>0&&g<=4;g++){var B=f%10;B===0&&pt(u,kr)&&x!==""?x=r[B]+x:B>1||B===1&&g===0||B===1&&g===1&&pt(u,fa)||B===1&&g===1&&pt(u,ha)&&i>100||B===1&&g>1&&pt(u,Ji)?x=r[B]+(g>0?s[g-1]:"")+x:B===1&&g>0&&(x=s[g-1]+x),f=Math.floor(f/10)}return(i<0?o:"")+x},Pp="十百千萬",Ax="拾佰仟萬",ex="マイナス",Md="마이너스",to=function(i,r,s){var o=s?". ":"",d=s?"、":"",u=s?", ":"",f=s?" ":"";switch(r){case 0:return"•"+f;case 1:return"◦"+f;case 2:return"◾"+f;case 5:var x=ot(i,48,57,!0,o);return x.length<4?"0"+x:x;case 4:return Ka(i,"〇一二三四五六七八九",d);case 6:return Fr(i,1,3999,Wp,3,o).toLowerCase();case 7:return Fr(i,1,3999,Wp,3,o);case 8:return ot(i,945,969,!1,o);case 9:return ot(i,97,122,!1,o);case 10:return ot(i,65,90,!1,o);case 11:return ot(i,1632,1641,!0,o);case 12:case 49:return Fr(i,1,9999,qp,3,o);case 35:return Fr(i,1,9999,qp,3,o).toLowerCase();case 13:return ot(i,2534,2543,!0,o);case 14:case 30:return ot(i,6112,6121,!0,o);case 15:return Ka(i,"子丑寅卯辰巳午未申酉戌亥",d);case 16:return Ka(i,"甲乙丙丁戊己庚辛壬癸",d);case 17:case 48:return On(i,"零一二三四五六七八九",Pp,"負",d,fa|ha|Ji);case 47:return On(i,"零壹貳參肆伍陸柒捌玖",Ax,"負",d,kr|fa|ha|Ji);case 42:return On(i,"零一二三四五六七八九",Pp,"负",d,fa|ha|Ji);case 41:return On(i,"零壹贰叁肆伍陆柒捌玖",Ax,"负",d,kr|fa|ha|Ji);case 26:return On(i,"〇一二三四五六七八九","十百千万",ex,d,0);case 25:return On(i,"零壱弐参四伍六七八九","拾百千万",ex,d,kr|fa|ha);case 31:return On(i,"영일이삼사오육칠팔구","십백천만",Md,u,kr|fa|ha);case 33:return On(i,"零一二三四五六七八九","十百千萬",Md,u,0);case 32:return On(i,"零壹貳參四五六七八九","拾百千",Md,u,kr|fa|ha);case 18:return ot(i,2406,2415,!0,o);case 20:return Fr(i,1,19999,e2,3,o);case 21:return ot(i,2790,2799,!0,o);case 22:return ot(i,2662,2671,!0,o);case 22:return Fr(i,1,10999,A2,3,o);case 23:return Ka(i,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return Ka(i,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return ot(i,3302,3311,!0,o);case 28:return Ka(i,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",d);case 29:return Ka(i,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",d);case 34:return ot(i,3792,3801,!0,o);case 37:return ot(i,6160,6169,!0,o);case 38:return ot(i,4160,4169,!0,o);case 39:return ot(i,2918,2927,!0,o);case 40:return ot(i,1776,1785,!0,o);case 43:return ot(i,3046,3055,!0,o);case 44:return ot(i,3174,3183,!0,o);case 45:return ot(i,3664,3673,!0,o);case 46:return ot(i,3872,3881,!0,o);case 3:default:return ot(i,48,57,!0,o)}},f0="data-html2canvas-ignore",tx=function(){function i(r,s,o){if(this.context=r,this.options=o,this.scrolledElements=[],this.referenceElement=s,this.counters=new PC,this.quoteDepth=0,!s.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(s.ownerDocument.documentElement,!1)}return i.prototype.toIFrame=function(r,s){var o=this,d=t2(r,s);if(!d.contentWindow)return Promise.reject("Unable to find iframe window");var u=r.defaultView.pageXOffset,f=r.defaultView.pageYOffset,x=d.contentWindow,g=x.document,B=r2(d).then(function(){return Mt(o,void 0,void 0,function(){var v,S;return kt(this,function(M){switch(M.label){case 0:return this.scrolledElements.forEach(l2),x&&(x.scrollTo(s.left,s.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(x.scrollY!==s.top||x.scrollX!==s.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(x.scrollX-s.left,x.scrollY-s.top,0,0))),v=this.options.onclone,S=this.clonedReferenceElement,typeof S>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:g.fonts&&g.fonts.ready?[4,g.fonts.ready]:[3,2];case 1:M.sent(),M.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,a2(g)]:[3,4];case 3:M.sent(),M.label=4;case 4:return typeof v=="function"?[2,Promise.resolve().then(function(){return v(g,S)}).then(function(){return d})]:[2,d]}})})});return g.open(),g.write(o2(document.doctype)+"<html></html>"),s2(this.referenceElement.ownerDocument,u,f),g.replaceChild(g.adoptNode(this.documentElement),g.documentElement),g.close(),B},i.prototype.createElementClone=function(r){if(eu(r,2))debugger;if(l0(r))return this.createCanvasClone(r);if(Jp(r))return this.createVideoClone(r);if(Zp(r))return this.createStyleClone(r);var s=r.cloneNode(!1);return ru(s)&&(ru(r)&&r.currentSrc&&r.currentSrc!==r.src&&(s.src=r.currentSrc,s.srcset=""),s.loading==="lazy"&&(s.loading="eager")),$p(s)?this.createCustomElementClone(s):s},i.prototype.createCustomElementClone=function(r){var s=document.createElement("html2canvascustomelement");return Dd(r.style,s),s},i.prototype.createStyleClone=function(r){try{var s=r.sheet;if(s&&s.cssRules){var o=[].slice.call(s.cssRules,0).reduce(function(u,f){return f&&typeof f.cssText=="string"?u+f.cssText:u},""),d=r.cloneNode(!1);return d.textContent=o,d}}catch(u){if(this.context.logger.error("Unable to access cssRules property",u),u.name!=="SecurityError")throw u}return r.cloneNode(!1)},i.prototype.createCanvasClone=function(r){var s;if(this.options.inlineImages&&r.ownerDocument){var o=r.ownerDocument.createElement("img");try{return o.src=r.toDataURL(),o}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",r)}}var d=r.cloneNode(!1);try{d.width=r.width,d.height=r.height;var u=r.getContext("2d"),f=d.getContext("2d");if(f)if(!this.options.allowTaint&&u)f.putImageData(u.getImageData(0,0,r.width,r.height),0,0);else{var x=(s=r.getContext("webgl2"))!==null&&s!==void 0?s:r.getContext("webgl");if(x){var g=x.getContextAttributes();g?.preserveDrawingBuffer===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",r)}f.drawImage(r,0,0)}return d}catch{this.context.logger.info("Unable to clone canvas as it is tainted",r)}return d},i.prototype.createVideoClone=function(r){var s=r.ownerDocument.createElement("canvas");s.width=r.offsetWidth,s.height=r.offsetHeight;var o=s.getContext("2d");try{return o&&(o.drawImage(r,0,0,s.width,s.height),this.options.allowTaint||o.getImageData(0,0,s.width,s.height)),s}catch{this.context.logger.info("Unable to clone video as it is tainted",r)}var d=r.ownerDocument.createElement("canvas");return d.width=r.offsetWidth,d.height=r.offsetHeight,d},i.prototype.appendChildNode=function(r,s,o){(!Nr(s)||!qC(s)&&!s.hasAttribute(f0)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(s)))&&(!this.options.copyStyles||!Nr(s)||!Zp(s))&&r.appendChild(this.cloneNode(s,o))},i.prototype.cloneChildNodes=function(r,s,o){for(var d=this,u=r.shadowRoot?r.shadowRoot.firstChild:r.firstChild;u;u=u.nextSibling)if(Nr(u)&&d0(u)&&typeof u.assignedNodes=="function"){var f=u.assignedNodes();f.length&&f.forEach(function(x){return d.appendChildNode(s,x,o)})}else this.appendChildNode(s,u,o)},i.prototype.cloneNode=function(r,s){if(o0(r))return document.createTextNode(r.data);if(!r.ownerDocument)return r.cloneNode(!1);var o=r.ownerDocument.defaultView;if(o&&Nr(r)&&(au(r)||Rs(r))){var d=this.createElementClone(r);d.style.transitionProperty="none";var u=o.getComputedStyle(r),f=o.getComputedStyle(r,":before"),x=o.getComputedStyle(r,":after");this.referenceElement===r&&au(d)&&(this.clonedReferenceElement=d),mu(d)&&u2(d);var g=this.counters.parse(new Np(this.context,u)),B=this.resolvePseudoContent(r,d,f,Pi.BEFORE);$p(r)&&(s=!0),Jp(r)||this.cloneChildNodes(r,d,s),B&&d.insertBefore(B,d.firstChild);var v=this.resolvePseudoContent(r,d,x,Pi.AFTER);return v&&d.appendChild(v),this.counters.pop(g),(u&&(this.options.copyStyles||Rs(r))&&!c0(r)||s)&&Dd(u,d),(r.scrollTop!==0||r.scrollLeft!==0)&&this.scrolledElements.push([d,r.scrollLeft,r.scrollTop]),(Js(r)||Zs(r))&&(Js(d)||Zs(d))&&(d.value=r.value),d}return r.cloneNode(!1)},i.prototype.resolvePseudoContent=function(r,s,o,d){var u=this;if(o){var f=o.content,x=s.ownerDocument;if(!(!x||!f||f==="none"||f==="-moz-alt-content"||o.display==="none")){this.counters.parse(new Np(this.context,o));var g=new Jv(this.context,o),B=x.createElement("html2canvaspseudoelement");Dd(o,B),g.content.forEach(function(S){if(S.type===0)B.appendChild(x.createTextNode(S.value));else if(S.type===22){var M=x.createElement("img");M.src=S.value,M.style.opacity="1",B.appendChild(M)}else if(S.type===18){if(S.name==="attr"){var oA=S.values.filter(Re);oA.length&&B.appendChild(x.createTextNode(r.getAttribute(oA[0].value)||""))}else if(S.name==="counter"){var AA=S.values.filter(Dr),dA=AA[0],DA=AA[1];if(dA&&Re(dA)){var NA=u.counters.getCounterValue(dA.value),pA=DA&&Re(DA)?Au.parse(u.context,DA.value):3;B.appendChild(x.createTextNode(to(NA,pA,!1)))}}else if(S.name==="counters"){var JA=S.values.filter(Dr),dA=JA[0],mA=JA[1],DA=JA[2];if(dA&&Re(dA)){var bA=u.counters.getCounterValues(dA.value),G=DA&&Re(DA)?Au.parse(u.context,DA.value):3,OA=mA&&mA.type===0?mA.value:"",V=bA.map(function(XA){return to(XA,G,!1)}).join(OA);B.appendChild(x.createTextNode(V))}}}else if(S.type===20)switch(S.value){case"open-quote":B.appendChild(x.createTextNode(Hp(g.quotes,u.quoteDepth++,!0)));break;case"close-quote":B.appendChild(x.createTextNode(Hp(g.quotes,--u.quoteDepth,!1)));break;default:B.appendChild(x.createTextNode(S.value))}}),B.className=iu+" "+ou;var v=d===Pi.BEFORE?" "+iu:" "+ou;return Rs(s)?s.className.baseValue+=v:s.className+=v,B}}},i.destroy=function(r){return r.parentNode?(r.parentNode.removeChild(r),!0):!1},i}(),Pi;(function(i){i[i.BEFORE=0]="BEFORE",i[i.AFTER=1]="AFTER"})(Pi||(Pi={}));var t2=function(i,r){var s=i.createElement("iframe");return s.className="html2canvas-container",s.style.visibility="hidden",s.style.position="fixed",s.style.left="-10000px",s.style.top="0px",s.style.border="0",s.width=r.width.toString(),s.height=r.height.toString(),s.scrolling="no",s.setAttribute(f0,"true"),i.body.appendChild(s),s},n2=function(i){return new Promise(function(r){if(i.complete){r();return}if(!i.src){r();return}i.onload=r,i.onerror=r})},a2=function(i){return Promise.all([].slice.call(i.images,0).map(n2))},r2=function(i){return new Promise(function(r,s){var o=i.contentWindow;if(!o)return s("No window assigned for iframe");var d=o.document;o.onload=i.onload=function(){o.onload=i.onload=null;var u=setInterval(function(){d.body.childNodes.length>0&&d.readyState==="complete"&&(clearInterval(u),r(i))},50)}})},i2=["all","d","content"],Dd=function(i,r){for(var s=i.length-1;s>=0;s--){var o=i.item(s);i2.indexOf(o)===-1&&r.style.setProperty(o,i.getPropertyValue(o))}return r},o2=function(i){var r="";return i&&(r+="<!DOCTYPE ",i.name&&(r+=i.name),i.internalSubset&&(r+=i.internalSubset),i.publicId&&(r+='"'+i.publicId+'"'),i.systemId&&(r+='"'+i.systemId+'"'),r+=">"),r},s2=function(i,r,s){i&&i.defaultView&&(r!==i.defaultView.pageXOffset||s!==i.defaultView.pageYOffset)&&i.defaultView.scrollTo(r,s)},l2=function(i){var r=i[0],s=i[1],o=i[2];r.scrollLeft=s,r.scrollTop=o},c2=":before",d2=":after",iu="___html2canvas___pseudoelement_before",ou="___html2canvas___pseudoelement_after",nx=`{
    content: "" !important;
    display: none !important;
}`,u2=function(i){f2(i,"."+iu+c2+nx+`
         .`+ou+d2+nx)},f2=function(i,r){var s=i.ownerDocument;if(s){var o=s.createElement("style");o.textContent=r,i.appendChild(o)}},h0=function(){function i(){}return i.getOrigin=function(r){var s=i._link;return s?(s.href=r,s.href=s.href,s.protocol+s.hostname+s.port):"about:blank"},i.isSameOrigin=function(r){return i.getOrigin(r)===i._origin},i.setContext=function(r){i._link=r.document.createElement("a"),i._origin=i.getOrigin(r.location.href)},i._origin="about:blank",i}(),h2=function(){function i(r,s){this.context=r,this._options=s,this._cache={}}return i.prototype.addImage=function(r){var s=Promise.resolve();return this.has(r)||(Id(r)||m2(r))&&(this._cache[r]=this.loadImage(r)).catch(function(){}),s},i.prototype.match=function(r){return this._cache[r]},i.prototype.loadImage=function(r){return Mt(this,void 0,void 0,function(){var s,o,d,u,f=this;return kt(this,function(x){switch(x.label){case 0:return s=h0.isSameOrigin(r),o=!Td(r)&&this._options.useCORS===!0&&Ut.SUPPORT_CORS_IMAGES&&!s,d=!Td(r)&&!s&&!Id(r)&&typeof this._options.proxy=="string"&&Ut.SUPPORT_CORS_XHR&&!o,!s&&this._options.allowTaint===!1&&!Td(r)&&!Id(r)&&!d&&!o?[2]:(u=r,d?[4,this.proxy(u)]:[3,2]);case 1:u=x.sent(),x.label=2;case 2:return this.context.logger.debug("Added image "+r.substring(0,256)),[4,new Promise(function(g,B){var v=new Image;v.onload=function(){return g(v)},v.onerror=B,(B2(u)||o)&&(v.crossOrigin="anonymous"),v.src=u,v.complete===!0&&setTimeout(function(){return g(v)},500),f._options.imageTimeout>0&&setTimeout(function(){return B("Timed out ("+f._options.imageTimeout+"ms) loading image")},f._options.imageTimeout)})];case 3:return[2,x.sent()]}})})},i.prototype.has=function(r){return typeof this._cache[r]<"u"},i.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},i.prototype.proxy=function(r){var s=this,o=this._options.proxy;if(!o)throw new Error("No proxy defined");var d=r.substring(0,256);return new Promise(function(u,f){var x=Ut.SUPPORT_RESPONSE_TYPE?"blob":"text",g=new XMLHttpRequest;g.onload=function(){if(g.status===200)if(x==="text")u(g.response);else{var S=new FileReader;S.addEventListener("load",function(){return u(S.result)},!1),S.addEventListener("error",function(M){return f(M)},!1),S.readAsDataURL(g.response)}else f("Failed to proxy resource "+d+" with status code "+g.status)},g.onerror=f;var B=o.indexOf("?")>-1?"&":"?";if(g.open("GET",""+o+B+"url="+encodeURIComponent(r)+"&responseType="+x),x!=="text"&&g instanceof XMLHttpRequest&&(g.responseType=x),s._options.imageTimeout){var v=s._options.imageTimeout;g.timeout=v,g.ontimeout=function(){return f("Timed out ("+v+"ms) proxying "+d)}}g.send()})},i}(),g2=/^data:image\/svg\+xml/i,p2=/^data:image\/.*;base64,/i,x2=/^data:image\/.*/i,m2=function(i){return Ut.SUPPORT_SVG_DRAWING||!b2(i)},Td=function(i){return x2.test(i)},B2=function(i){return p2.test(i)},Id=function(i){return i.substr(0,4)==="blob"},b2=function(i){return i.substr(-3).toLowerCase()==="svg"||g2.test(i)},ee=function(){function i(r,s){this.type=0,this.x=r,this.y=s}return i.prototype.add=function(r,s){return new i(this.x+r,this.y+s)},i}(),jr=function(i,r,s){return new ee(i.x+(r.x-i.x)*s,i.y+(r.y-i.y)*s)},Ds=function(){function i(r,s,o,d){this.type=1,this.start=r,this.startControl=s,this.endControl=o,this.end=d}return i.prototype.subdivide=function(r,s){var o=jr(this.start,this.startControl,r),d=jr(this.startControl,this.endControl,r),u=jr(this.endControl,this.end,r),f=jr(o,d,r),x=jr(d,u,r),g=jr(f,x,r);return s?new i(this.start,o,f,g):new i(g,x,u,this.end)},i.prototype.add=function(r,s){return new i(this.start.add(r,s),this.startControl.add(r,s),this.endControl.add(r,s),this.end.add(r,s))},i.prototype.reverse=function(){return new i(this.end,this.endControl,this.startControl,this.start)},i}(),an=function(i){return i.type===1},w2=function(){function i(r){var s=r.styles,o=r.bounds,d=Xi(s.borderTopLeftRadius,o.width,o.height),u=d[0],f=d[1],x=Xi(s.borderTopRightRadius,o.width,o.height),g=x[0],B=x[1],v=Xi(s.borderBottomRightRadius,o.width,o.height),S=v[0],M=v[1],oA=Xi(s.borderBottomLeftRadius,o.width,o.height),AA=oA[0],dA=oA[1],DA=[];DA.push((u+g)/o.width),DA.push((AA+S)/o.width),DA.push((f+dA)/o.height),DA.push((B+M)/o.height);var NA=Math.max.apply(Math,DA);NA>1&&(u/=NA,f/=NA,g/=NA,B/=NA,S/=NA,M/=NA,AA/=NA,dA/=NA);var pA=o.width-g,JA=o.height-M,mA=o.width-S,bA=o.height-dA,G=s.borderTopWidth,OA=s.borderRightWidth,V=s.borderBottomWidth,lA=s.borderLeftWidth,_A=Ve(s.paddingTop,r.bounds.width),XA=Ve(s.paddingRight,r.bounds.width),QA=Ve(s.paddingBottom,r.bounds.width),LA=Ve(s.paddingLeft,r.bounds.width);this.topLeftBorderDoubleOuterBox=u>0||f>0?$e(o.left+lA/3,o.top+G/3,u-lA/3,f-G/3,De.TOP_LEFT):new ee(o.left+lA/3,o.top+G/3),this.topRightBorderDoubleOuterBox=u>0||f>0?$e(o.left+pA,o.top+G/3,g-OA/3,B-G/3,De.TOP_RIGHT):new ee(o.left+o.width-OA/3,o.top+G/3),this.bottomRightBorderDoubleOuterBox=S>0||M>0?$e(o.left+mA,o.top+JA,S-OA/3,M-V/3,De.BOTTOM_RIGHT):new ee(o.left+o.width-OA/3,o.top+o.height-V/3),this.bottomLeftBorderDoubleOuterBox=AA>0||dA>0?$e(o.left+lA/3,o.top+bA,AA-lA/3,dA-V/3,De.BOTTOM_LEFT):new ee(o.left+lA/3,o.top+o.height-V/3),this.topLeftBorderDoubleInnerBox=u>0||f>0?$e(o.left+lA*2/3,o.top+G*2/3,u-lA*2/3,f-G*2/3,De.TOP_LEFT):new ee(o.left+lA*2/3,o.top+G*2/3),this.topRightBorderDoubleInnerBox=u>0||f>0?$e(o.left+pA,o.top+G*2/3,g-OA*2/3,B-G*2/3,De.TOP_RIGHT):new ee(o.left+o.width-OA*2/3,o.top+G*2/3),this.bottomRightBorderDoubleInnerBox=S>0||M>0?$e(o.left+mA,o.top+JA,S-OA*2/3,M-V*2/3,De.BOTTOM_RIGHT):new ee(o.left+o.width-OA*2/3,o.top+o.height-V*2/3),this.bottomLeftBorderDoubleInnerBox=AA>0||dA>0?$e(o.left+lA*2/3,o.top+bA,AA-lA*2/3,dA-V*2/3,De.BOTTOM_LEFT):new ee(o.left+lA*2/3,o.top+o.height-V*2/3),this.topLeftBorderStroke=u>0||f>0?$e(o.left+lA/2,o.top+G/2,u-lA/2,f-G/2,De.TOP_LEFT):new ee(o.left+lA/2,o.top+G/2),this.topRightBorderStroke=u>0||f>0?$e(o.left+pA,o.top+G/2,g-OA/2,B-G/2,De.TOP_RIGHT):new ee(o.left+o.width-OA/2,o.top+G/2),this.bottomRightBorderStroke=S>0||M>0?$e(o.left+mA,o.top+JA,S-OA/2,M-V/2,De.BOTTOM_RIGHT):new ee(o.left+o.width-OA/2,o.top+o.height-V/2),this.bottomLeftBorderStroke=AA>0||dA>0?$e(o.left+lA/2,o.top+bA,AA-lA/2,dA-V/2,De.BOTTOM_LEFT):new ee(o.left+lA/2,o.top+o.height-V/2),this.topLeftBorderBox=u>0||f>0?$e(o.left,o.top,u,f,De.TOP_LEFT):new ee(o.left,o.top),this.topRightBorderBox=g>0||B>0?$e(o.left+pA,o.top,g,B,De.TOP_RIGHT):new ee(o.left+o.width,o.top),this.bottomRightBorderBox=S>0||M>0?$e(o.left+mA,o.top+JA,S,M,De.BOTTOM_RIGHT):new ee(o.left+o.width,o.top+o.height),this.bottomLeftBorderBox=AA>0||dA>0?$e(o.left,o.top+bA,AA,dA,De.BOTTOM_LEFT):new ee(o.left,o.top+o.height),this.topLeftPaddingBox=u>0||f>0?$e(o.left+lA,o.top+G,Math.max(0,u-lA),Math.max(0,f-G),De.TOP_LEFT):new ee(o.left+lA,o.top+G),this.topRightPaddingBox=g>0||B>0?$e(o.left+Math.min(pA,o.width-OA),o.top+G,pA>o.width+OA?0:Math.max(0,g-OA),Math.max(0,B-G),De.TOP_RIGHT):new ee(o.left+o.width-OA,o.top+G),this.bottomRightPaddingBox=S>0||M>0?$e(o.left+Math.min(mA,o.width-lA),o.top+Math.min(JA,o.height-V),Math.max(0,S-OA),Math.max(0,M-V),De.BOTTOM_RIGHT):new ee(o.left+o.width-OA,o.top+o.height-V),this.bottomLeftPaddingBox=AA>0||dA>0?$e(o.left+lA,o.top+Math.min(bA,o.height-V),Math.max(0,AA-lA),Math.max(0,dA-V),De.BOTTOM_LEFT):new ee(o.left+lA,o.top+o.height-V),this.topLeftContentBox=u>0||f>0?$e(o.left+lA+LA,o.top+G+_A,Math.max(0,u-(lA+LA)),Math.max(0,f-(G+_A)),De.TOP_LEFT):new ee(o.left+lA+LA,o.top+G+_A),this.topRightContentBox=g>0||B>0?$e(o.left+Math.min(pA,o.width+lA+LA),o.top+G+_A,pA>o.width+lA+LA?0:g-lA+LA,B-(G+_A),De.TOP_RIGHT):new ee(o.left+o.width-(OA+XA),o.top+G+_A),this.bottomRightContentBox=S>0||M>0?$e(o.left+Math.min(mA,o.width-(lA+LA)),o.top+Math.min(JA,o.height+G+_A),Math.max(0,S-(OA+XA)),M-(V+QA),De.BOTTOM_RIGHT):new ee(o.left+o.width-(OA+XA),o.top+o.height-(V+QA)),this.bottomLeftContentBox=AA>0||dA>0?$e(o.left+lA+LA,o.top+bA,Math.max(0,AA-(lA+LA)),dA-(V+QA),De.BOTTOM_LEFT):new ee(o.left+lA+LA,o.top+o.height-(V+QA))}return i}(),De;(function(i){i[i.TOP_LEFT=0]="TOP_LEFT",i[i.TOP_RIGHT=1]="TOP_RIGHT",i[i.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",i[i.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(De||(De={}));var $e=function(i,r,s,o,d){var u=4*((Math.sqrt(2)-1)/3),f=s*u,x=o*u,g=i+s,B=r+o;switch(d){case De.TOP_LEFT:return new Ds(new ee(i,B),new ee(i,B-x),new ee(g-f,r),new ee(g,r));case De.TOP_RIGHT:return new Ds(new ee(i,r),new ee(i+f,r),new ee(g,B-x),new ee(g,B));case De.BOTTOM_RIGHT:return new Ds(new ee(g,r),new ee(g,r+x),new ee(i+f,B),new ee(i,B));case De.BOTTOM_LEFT:default:return new Ds(new ee(g,B),new ee(g-f,B),new ee(i,r+x),new ee(i,r))}},$s=function(i){return[i.topLeftBorderBox,i.topRightBorderBox,i.bottomRightBorderBox,i.bottomLeftBorderBox]},y2=function(i){return[i.topLeftContentBox,i.topRightContentBox,i.bottomRightContentBox,i.bottomLeftContentBox]},Ws=function(i){return[i.topLeftPaddingBox,i.topRightPaddingBox,i.bottomRightPaddingBox,i.bottomLeftPaddingBox]},v2=function(){function i(r,s,o){this.offsetX=r,this.offsetY=s,this.matrix=o,this.type=0,this.target=6}return i}(),Ts=function(){function i(r,s){this.path=r,this.target=s,this.type=1}return i}(),C2=function(){function i(r){this.opacity=r,this.type=2,this.target=6}return i}(),Q2=function(i){return i.type===0},g0=function(i){return i.type===1},U2=function(i){return i.type===2},ax=function(i,r){return i.length===r.length?i.some(function(s,o){return s===r[o]}):!1},E2=function(i,r,s,o,d){return i.map(function(u,f){switch(f){case 0:return u.add(r,s);case 1:return u.add(r+o,s);case 2:return u.add(r+o,s+d);case 3:return u.add(r,s+d)}return u})},p0=function(){function i(r){this.element=r,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return i}(),x0=function(){function i(r,s){if(this.container=r,this.parent=s,this.effects=[],this.curves=new w2(this.container),this.container.styles.opacity<1&&this.effects.push(new C2(this.container.styles.opacity)),this.container.styles.transform!==null){var o=this.container.bounds.left+this.container.styles.transformOrigin[0].number,d=this.container.bounds.top+this.container.styles.transformOrigin[1].number,u=this.container.styles.transform;this.effects.push(new v2(o,d,u))}if(this.container.styles.overflowX!==0){var f=$s(this.curves),x=Ws(this.curves);ax(f,x)?this.effects.push(new Ts(f,6)):(this.effects.push(new Ts(f,2)),this.effects.push(new Ts(x,4)))}}return i.prototype.getEffects=function(r){for(var s=[2,3].indexOf(this.container.styles.position)===-1,o=this.parent,d=this.effects.slice(0);o;){var u=o.effects.filter(function(g){return!g0(g)});if(s||o.container.styles.position!==0||!o.parent){if(d.unshift.apply(d,u),s=[2,3].indexOf(o.container.styles.position)===-1,o.container.styles.overflowX!==0){var f=$s(o.curves),x=Ws(o.curves);ax(f,x)||d.unshift(new Ts(x,6))}}else d.unshift.apply(d,u);o=o.parent}return d.filter(function(g){return pt(g.target,r)})},i}(),su=function(i,r,s,o){i.container.elements.forEach(function(d){var u=pt(d.flags,4),f=pt(d.flags,2),x=new x0(d,i);pt(d.styles.display,2048)&&o.push(x);var g=pt(d.flags,8)?[]:o;if(u||f){var B=u||d.styles.isPositioned()?s:r,v=new p0(x);if(d.styles.isPositioned()||d.styles.opacity<1||d.styles.isTransformed()){var S=d.styles.zIndex.order;if(S<0){var M=0;B.negativeZIndex.some(function(AA,dA){return S>AA.element.container.styles.zIndex.order?(M=dA,!1):M>0}),B.negativeZIndex.splice(M,0,v)}else if(S>0){var oA=0;B.positiveZIndex.some(function(AA,dA){return S>=AA.element.container.styles.zIndex.order?(oA=dA+1,!1):oA>0}),B.positiveZIndex.splice(oA,0,v)}else B.zeroOrAutoZIndexOrTransformedOrOpacity.push(v)}else d.styles.isFloating()?B.nonPositionedFloats.push(v):B.nonPositionedInlineLevel.push(v);su(x,v,u?v:s,g)}else d.styles.isInlineLevel()?r.inlineLevel.push(x):r.nonInlineLevel.push(x),su(x,r,s,g);pt(d.flags,8)&&m0(d,g)})},m0=function(i,r){for(var s=i instanceof nu?i.start:1,o=i instanceof nu?i.reversed:!1,d=0;d<r.length;d++){var u=r[d];u.container instanceof e0&&typeof u.container.value=="number"&&u.container.value!==0&&(s=u.container.value),u.listValue=to(s,u.container.styles.listStyleType,!0),s+=o?-1:1}},F2=function(i){var r=new x0(i,null),s=new p0(r),o=[];return su(r,s,s,o),m0(r.container,o),s},rx=function(i,r){switch(r){case 0:return on(i.topLeftBorderBox,i.topLeftPaddingBox,i.topRightBorderBox,i.topRightPaddingBox);case 1:return on(i.topRightBorderBox,i.topRightPaddingBox,i.bottomRightBorderBox,i.bottomRightPaddingBox);case 2:return on(i.bottomRightBorderBox,i.bottomRightPaddingBox,i.bottomLeftBorderBox,i.bottomLeftPaddingBox);case 3:default:return on(i.bottomLeftBorderBox,i.bottomLeftPaddingBox,i.topLeftBorderBox,i.topLeftPaddingBox)}},j2=function(i,r){switch(r){case 0:return on(i.topLeftBorderBox,i.topLeftBorderDoubleOuterBox,i.topRightBorderBox,i.topRightBorderDoubleOuterBox);case 1:return on(i.topRightBorderBox,i.topRightBorderDoubleOuterBox,i.bottomRightBorderBox,i.bottomRightBorderDoubleOuterBox);case 2:return on(i.bottomRightBorderBox,i.bottomRightBorderDoubleOuterBox,i.bottomLeftBorderBox,i.bottomLeftBorderDoubleOuterBox);case 3:default:return on(i.bottomLeftBorderBox,i.bottomLeftBorderDoubleOuterBox,i.topLeftBorderBox,i.topLeftBorderDoubleOuterBox)}},S2=function(i,r){switch(r){case 0:return on(i.topLeftBorderDoubleInnerBox,i.topLeftPaddingBox,i.topRightBorderDoubleInnerBox,i.topRightPaddingBox);case 1:return on(i.topRightBorderDoubleInnerBox,i.topRightPaddingBox,i.bottomRightBorderDoubleInnerBox,i.bottomRightPaddingBox);case 2:return on(i.bottomRightBorderDoubleInnerBox,i.bottomRightPaddingBox,i.bottomLeftBorderDoubleInnerBox,i.bottomLeftPaddingBox);case 3:default:return on(i.bottomLeftBorderDoubleInnerBox,i.bottomLeftPaddingBox,i.topLeftBorderDoubleInnerBox,i.topLeftPaddingBox)}},k2=function(i,r){switch(r){case 0:return Is(i.topLeftBorderStroke,i.topRightBorderStroke);case 1:return Is(i.topRightBorderStroke,i.bottomRightBorderStroke);case 2:return Is(i.bottomRightBorderStroke,i.bottomLeftBorderStroke);case 3:default:return Is(i.bottomLeftBorderStroke,i.topLeftBorderStroke)}},Is=function(i,r){var s=[];return an(i)?s.push(i.subdivide(.5,!1)):s.push(i),an(r)?s.push(r.subdivide(.5,!0)):s.push(r),s},on=function(i,r,s,o){var d=[];return an(i)?d.push(i.subdivide(.5,!1)):d.push(i),an(s)?d.push(s.subdivide(.5,!0)):d.push(s),an(o)?d.push(o.subdivide(.5,!0).reverse()):d.push(o),an(r)?d.push(r.subdivide(.5,!1).reverse()):d.push(r),d},B0=function(i){var r=i.bounds,s=i.styles;return r.add(s.borderLeftWidth,s.borderTopWidth,-(s.borderRightWidth+s.borderLeftWidth),-(s.borderTopWidth+s.borderBottomWidth))},qs=function(i){var r=i.styles,s=i.bounds,o=Ve(r.paddingLeft,s.width),d=Ve(r.paddingRight,s.width),u=Ve(r.paddingTop,s.width),f=Ve(r.paddingBottom,s.width);return s.add(o+r.borderLeftWidth,u+r.borderTopWidth,-(r.borderRightWidth+r.borderLeftWidth+o+d),-(r.borderTopWidth+r.borderBottomWidth+u+f))},H2=function(i,r){return i===0?r.bounds:i===2?qs(r):B0(r)},N2=function(i,r){return i===0?r.bounds:i===2?qs(r):B0(r)},Ld=function(i,r,s){var o=H2(Hr(i.styles.backgroundOrigin,r),i),d=N2(Hr(i.styles.backgroundClip,r),i),u=M2(Hr(i.styles.backgroundSize,r),s,o),f=u[0],x=u[1],g=Xi(Hr(i.styles.backgroundPosition,r),o.width-f,o.height-x),B=D2(Hr(i.styles.backgroundRepeat,r),g,u,o,d),v=Math.round(o.left+g[0]),S=Math.round(o.top+g[1]);return[B,v,S,f,x]},Sr=function(i){return Re(i)&&i.value===Mr.AUTO},Ls=function(i){return typeof i=="number"},M2=function(i,r,s){var o=r[0],d=r[1],u=r[2],f=i[0],x=i[1];if(!f)return[0,0];if(ft(f)&&x&&ft(x))return[Ve(f,s.width),Ve(x,s.height)];var g=Ls(u);if(Re(f)&&(f.value===Mr.CONTAIN||f.value===Mr.COVER)){if(Ls(u)){var B=s.width/s.height;return B<u!=(f.value===Mr.COVER)?[s.width,s.width/u]:[s.height*u,s.height]}return[s.width,s.height]}var v=Ls(o),S=Ls(d),M=v||S;if(Sr(f)&&(!x||Sr(x))){if(v&&S)return[o,d];if(!g&&!M)return[s.width,s.height];if(M&&g){var oA=v?o:d*u,AA=S?d:o/u;return[oA,AA]}var dA=v?o:s.width,DA=S?d:s.height;return[dA,DA]}if(g){var NA=0,pA=0;return ft(f)?NA=Ve(f,s.width):ft(x)&&(pA=Ve(x,s.height)),Sr(f)?NA=pA*u:(!x||Sr(x))&&(pA=NA/u),[NA,pA]}var JA=null,mA=null;if(ft(f)?JA=Ve(f,s.width):x&&ft(x)&&(mA=Ve(x,s.height)),JA!==null&&(!x||Sr(x))&&(mA=v&&S?JA/o*d:s.height),mA!==null&&Sr(f)&&(JA=v&&S?mA/d*o:s.width),JA!==null&&mA!==null)return[JA,mA];throw new Error("Unable to calculate background-size for element")},Hr=function(i,r){var s=i[r];return typeof s>"u"?i[0]:s},D2=function(i,r,s,o,d){var u=r[0],f=r[1],x=s[0],g=s[1];switch(i){case 2:return[new ee(Math.round(o.left),Math.round(o.top+f)),new ee(Math.round(o.left+o.width),Math.round(o.top+f)),new ee(Math.round(o.left+o.width),Math.round(g+o.top+f)),new ee(Math.round(o.left),Math.round(g+o.top+f))];case 3:return[new ee(Math.round(o.left+u),Math.round(o.top)),new ee(Math.round(o.left+u+x),Math.round(o.top)),new ee(Math.round(o.left+u+x),Math.round(o.height+o.top)),new ee(Math.round(o.left+u),Math.round(o.height+o.top))];case 1:return[new ee(Math.round(o.left+u),Math.round(o.top+f)),new ee(Math.round(o.left+u+x),Math.round(o.top+f)),new ee(Math.round(o.left+u+x),Math.round(o.top+f+g)),new ee(Math.round(o.left+u),Math.round(o.top+f+g))];default:return[new ee(Math.round(d.left),Math.round(d.top)),new ee(Math.round(d.left+d.width),Math.round(d.top)),new ee(Math.round(d.left+d.width),Math.round(d.height+d.top)),new ee(Math.round(d.left),Math.round(d.height+d.top))]}},T2="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",ix="Hidden Text",I2=function(){function i(r){this._data={},this._document=r}return i.prototype.parseMetrics=function(r,s){var o=this._document.createElement("div"),d=this._document.createElement("img"),u=this._document.createElement("span"),f=this._document.body;o.style.visibility="hidden",o.style.fontFamily=r,o.style.fontSize=s,o.style.margin="0",o.style.padding="0",o.style.whiteSpace="nowrap",f.appendChild(o),d.src=T2,d.width=1,d.height=1,d.style.margin="0",d.style.padding="0",d.style.verticalAlign="baseline",u.style.fontFamily=r,u.style.fontSize=s,u.style.margin="0",u.style.padding="0",u.appendChild(this._document.createTextNode(ix)),o.appendChild(u),o.appendChild(d);var x=d.offsetTop-u.offsetTop+2;o.removeChild(u),o.appendChild(this._document.createTextNode(ix)),o.style.lineHeight="normal",d.style.verticalAlign="super";var g=d.offsetTop-o.offsetTop+2;return f.removeChild(o),{baseline:x,middle:g}},i.prototype.getMetrics=function(r,s){var o=r+" "+s;return typeof this._data[o]>"u"&&(this._data[o]=this.parseMetrics(r,s)),this._data[o]},i}(),b0=function(){function i(r,s){this.context=r,this.options=s}return i}(),L2=1e4,O2=function(i){un(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d._activeEffects=[],d.canvas=o.canvas?o.canvas:document.createElement("canvas"),d.ctx=d.canvas.getContext("2d"),o.canvas||(d.canvas.width=Math.floor(o.width*o.scale),d.canvas.height=Math.floor(o.height*o.scale),d.canvas.style.width=o.width+"px",d.canvas.style.height=o.height+"px"),d.fontMetrics=new I2(document),d.ctx.scale(d.options.scale,d.options.scale),d.ctx.translate(-o.x,-o.y),d.ctx.textBaseline="bottom",d._activeEffects=[],d.context.logger.debug("Canvas renderer initialized ("+o.width+"x"+o.height+") with scale "+o.scale),d}return r.prototype.applyEffects=function(s){for(var o=this;this._activeEffects.length;)this.popEffect();s.forEach(function(d){return o.applyEffect(d)})},r.prototype.applyEffect=function(s){this.ctx.save(),U2(s)&&(this.ctx.globalAlpha=s.opacity),Q2(s)&&(this.ctx.translate(s.offsetX,s.offsetY),this.ctx.transform(s.matrix[0],s.matrix[1],s.matrix[2],s.matrix[3],s.matrix[4],s.matrix[5]),this.ctx.translate(-s.offsetX,-s.offsetY)),g0(s)&&(this.path(s.path),this.ctx.clip()),this._activeEffects.push(s)},r.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},r.prototype.renderStack=function(s){return Mt(this,void 0,void 0,function(){var o;return kt(this,function(d){switch(d.label){case 0:return o=s.element.container.styles,o.isVisible()?[4,this.renderStackContent(s)]:[3,2];case 1:d.sent(),d.label=2;case 2:return[2]}})})},r.prototype.renderNode=function(s){return Mt(this,void 0,void 0,function(){return kt(this,function(o){switch(o.label){case 0:if(pt(s.container.flags,16))debugger;return s.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(s)]:[3,3];case 1:return o.sent(),[4,this.renderNodeContent(s)];case 2:o.sent(),o.label=3;case 3:return[2]}})})},r.prototype.renderTextWithLetterSpacing=function(s,o,d){var u=this;if(o===0)this.ctx.fillText(s.text,s.bounds.left,s.bounds.top+d);else{var f=pu(s.text);f.reduce(function(x,g){return u.ctx.fillText(g,x,s.bounds.top+d),x+u.ctx.measureText(g).width},s.bounds.left)}},r.prototype.createFontStyle=function(s){var o=s.fontVariant.filter(function(f){return f==="normal"||f==="small-caps"}).join(""),d=G2(s.fontFamily).join(", "),u=ro(s.fontSize)?""+s.fontSize.number+s.fontSize.unit:s.fontSize.number+"px";return[[s.fontStyle,o,s.fontWeight,u,d].join(" "),d,u]},r.prototype.renderTextNode=function(s,o){return Mt(this,void 0,void 0,function(){var d,u,f,x,g,B,v,S,M=this;return kt(this,function(oA){return d=this.createFontStyle(o),u=d[0],f=d[1],x=d[2],this.ctx.font=u,this.ctx.direction=o.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",g=this.fontMetrics.getMetrics(f,x),B=g.baseline,v=g.middle,S=o.paintOrder,s.textBounds.forEach(function(AA){S.forEach(function(dA){switch(dA){case 0:M.ctx.fillStyle=yt(o.color),M.renderTextWithLetterSpacing(AA,o.letterSpacing,B);var DA=o.textShadow;DA.length&&AA.text.trim().length&&(DA.slice(0).reverse().forEach(function(NA){M.ctx.shadowColor=yt(NA.color),M.ctx.shadowOffsetX=NA.offsetX.number*M.options.scale,M.ctx.shadowOffsetY=NA.offsetY.number*M.options.scale,M.ctx.shadowBlur=NA.blur.number,M.renderTextWithLetterSpacing(AA,o.letterSpacing,B)}),M.ctx.shadowColor="",M.ctx.shadowOffsetX=0,M.ctx.shadowOffsetY=0,M.ctx.shadowBlur=0),o.textDecorationLine.length&&(M.ctx.fillStyle=yt(o.textDecorationColor||o.color),o.textDecorationLine.forEach(function(NA){switch(NA){case 1:M.ctx.fillRect(AA.bounds.left,Math.round(AA.bounds.top+B),AA.bounds.width,1);break;case 2:M.ctx.fillRect(AA.bounds.left,Math.round(AA.bounds.top),AA.bounds.width,1);break;case 3:M.ctx.fillRect(AA.bounds.left,Math.ceil(AA.bounds.top+v),AA.bounds.width,1);break}}));break;case 1:o.webkitTextStrokeWidth&&AA.text.trim().length&&(M.ctx.strokeStyle=yt(o.webkitTextStrokeColor),M.ctx.lineWidth=o.webkitTextStrokeWidth,M.ctx.lineJoin=window.chrome?"miter":"round",M.ctx.strokeText(AA.text,AA.bounds.left,AA.bounds.top+B)),M.ctx.strokeStyle="",M.ctx.lineWidth=0,M.ctx.lineJoin="miter";break}})}),[2]})})},r.prototype.renderReplacedElement=function(s,o,d){if(d&&s.intrinsicWidth>0&&s.intrinsicHeight>0){var u=qs(s),f=Ws(o);this.path(f),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(d,0,0,s.intrinsicWidth,s.intrinsicHeight,u.left,u.top,u.width,u.height),this.ctx.restore()}},r.prototype.renderNodeContent=function(s){return Mt(this,void 0,void 0,function(){var o,d,u,f,x,g,pA,pA,B,v,S,M,mA,oA,AA,bA,dA,DA,NA,pA,JA,mA,bA;return kt(this,function(G){switch(G.label){case 0:this.applyEffects(s.getEffects(4)),o=s.container,d=s.curves,u=o.styles,f=0,x=o.textNodes,G.label=1;case 1:return f<x.length?(g=x[f],[4,this.renderTextNode(g,u)]):[3,4];case 2:G.sent(),G.label=3;case 3:return f++,[3,1];case 4:if(!(o instanceof qx))return[3,8];G.label=5;case 5:return G.trys.push([5,7,,8]),[4,this.context.cache.match(o.src)];case 6:return pA=G.sent(),this.renderReplacedElement(o,d,pA),[3,8];case 7:return G.sent(),this.context.logger.error("Error loading image "+o.src),[3,8];case 8:if(o instanceof Px&&this.renderReplacedElement(o,d,o.canvas),!(o instanceof A0))return[3,12];G.label=9;case 9:return G.trys.push([9,11,,12]),[4,this.context.cache.match(o.svg)];case 10:return pA=G.sent(),this.renderReplacedElement(o,d,pA),[3,12];case 11:return G.sent(),this.context.logger.error("Error loading svg "+o.svg.substring(0,255)),[3,12];case 12:return o instanceof a0&&o.tree?(B=new r(this.context,{scale:this.options.scale,backgroundColor:o.backgroundColor,x:0,y:0,width:o.width,height:o.height}),[4,B.render(o.tree)]):[3,14];case 13:v=G.sent(),o.width&&o.height&&this.ctx.drawImage(v,0,0,o.width,o.height,o.bounds.left,o.bounds.top,o.bounds.width,o.bounds.height),G.label=14;case 14:if(o instanceof xu&&(S=Math.min(o.bounds.width,o.bounds.height),o.type===Xs?o.checked&&(this.ctx.save(),this.path([new ee(o.bounds.left+S*.39363,o.bounds.top+S*.79),new ee(o.bounds.left+S*.16,o.bounds.top+S*.5549),new ee(o.bounds.left+S*.27347,o.bounds.top+S*.44071),new ee(o.bounds.left+S*.39694,o.bounds.top+S*.5649),new ee(o.bounds.left+S*.72983,o.bounds.top+S*.23),new ee(o.bounds.left+S*.84,o.bounds.top+S*.34085),new ee(o.bounds.left+S*.39363,o.bounds.top+S*.79)]),this.ctx.fillStyle=yt(Vp),this.ctx.fill(),this.ctx.restore()):o.type===Vs&&o.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(o.bounds.left+S/2,o.bounds.top+S/2,S/4,0,Math.PI*2,!0),this.ctx.fillStyle=yt(Vp),this.ctx.fill(),this.ctx.restore())),K2(o)&&o.value.length){switch(M=this.createFontStyle(u),mA=M[0],oA=M[1],AA=this.fontMetrics.getMetrics(mA,oA).baseline,this.ctx.font=mA,this.ctx.fillStyle=yt(u.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=R2(o.styles.textAlign),bA=qs(o),dA=0,o.styles.textAlign){case 1:dA+=bA.width/2;break;case 2:dA+=bA.width;break}DA=bA.add(dA,0,0,-bA.height/2+1),this.ctx.save(),this.path([new ee(bA.left,bA.top),new ee(bA.left+bA.width,bA.top),new ee(bA.left+bA.width,bA.top+bA.height),new ee(bA.left,bA.top+bA.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new qi(o.value,DA),u.letterSpacing,AA),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!pt(o.styles.display,2048))return[3,20];if(o.styles.listStyleImage===null)return[3,19];if(NA=o.styles.listStyleImage,NA.type!==0)return[3,18];pA=void 0,JA=NA.url,G.label=15;case 15:return G.trys.push([15,17,,18]),[4,this.context.cache.match(JA)];case 16:return pA=G.sent(),this.ctx.drawImage(pA,o.bounds.left-(pA.width+10),o.bounds.top),[3,18];case 17:return G.sent(),this.context.logger.error("Error loading list-style-image "+JA),[3,18];case 18:return[3,20];case 19:s.listValue&&o.styles.listStyleType!==-1&&(mA=this.createFontStyle(u)[0],this.ctx.font=mA,this.ctx.fillStyle=yt(u.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",bA=new zn(o.bounds.left,o.bounds.top+Ve(o.styles.paddingTop,o.bounds.width),o.bounds.width,Sp(u.lineHeight,u.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new qi(s.listValue,bA),u.letterSpacing,Sp(u.lineHeight,u.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),G.label=20;case 20:return[2]}})})},r.prototype.renderStackContent=function(s){return Mt(this,void 0,void 0,function(){var o,d,NA,u,f,NA,x,g,NA,B,v,NA,S,M,NA,oA,AA,NA,dA,DA,NA;return kt(this,function(pA){switch(pA.label){case 0:if(pt(s.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(s.element)];case 1:pA.sent(),o=0,d=s.negativeZIndex,pA.label=2;case 2:return o<d.length?(NA=d[o],[4,this.renderStack(NA)]):[3,5];case 3:pA.sent(),pA.label=4;case 4:return o++,[3,2];case 5:return[4,this.renderNodeContent(s.element)];case 6:pA.sent(),u=0,f=s.nonInlineLevel,pA.label=7;case 7:return u<f.length?(NA=f[u],[4,this.renderNode(NA)]):[3,10];case 8:pA.sent(),pA.label=9;case 9:return u++,[3,7];case 10:x=0,g=s.nonPositionedFloats,pA.label=11;case 11:return x<g.length?(NA=g[x],[4,this.renderStack(NA)]):[3,14];case 12:pA.sent(),pA.label=13;case 13:return x++,[3,11];case 14:B=0,v=s.nonPositionedInlineLevel,pA.label=15;case 15:return B<v.length?(NA=v[B],[4,this.renderStack(NA)]):[3,18];case 16:pA.sent(),pA.label=17;case 17:return B++,[3,15];case 18:S=0,M=s.inlineLevel,pA.label=19;case 19:return S<M.length?(NA=M[S],[4,this.renderNode(NA)]):[3,22];case 20:pA.sent(),pA.label=21;case 21:return S++,[3,19];case 22:oA=0,AA=s.zeroOrAutoZIndexOrTransformedOrOpacity,pA.label=23;case 23:return oA<AA.length?(NA=AA[oA],[4,this.renderStack(NA)]):[3,26];case 24:pA.sent(),pA.label=25;case 25:return oA++,[3,23];case 26:dA=0,DA=s.positiveZIndex,pA.label=27;case 27:return dA<DA.length?(NA=DA[dA],[4,this.renderStack(NA)]):[3,30];case 28:pA.sent(),pA.label=29;case 29:return dA++,[3,27];case 30:return[2]}})})},r.prototype.mask=function(s){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(s.slice(0).reverse()),this.ctx.closePath()},r.prototype.path=function(s){this.ctx.beginPath(),this.formatPath(s),this.ctx.closePath()},r.prototype.formatPath=function(s){var o=this;s.forEach(function(d,u){var f=an(d)?d.start:d;u===0?o.ctx.moveTo(f.x,f.y):o.ctx.lineTo(f.x,f.y),an(d)&&o.ctx.bezierCurveTo(d.startControl.x,d.startControl.y,d.endControl.x,d.endControl.y,d.end.x,d.end.y)})},r.prototype.renderRepeat=function(s,o,d,u){this.path(s),this.ctx.fillStyle=o,this.ctx.translate(d,u),this.ctx.fill(),this.ctx.translate(-d,-u)},r.prototype.resizeImage=function(s,o,d){var u;if(s.width===o&&s.height===d)return s;var f=(u=this.canvas.ownerDocument)!==null&&u!==void 0?u:document,x=f.createElement("canvas");x.width=Math.max(1,o),x.height=Math.max(1,d);var g=x.getContext("2d");return g.drawImage(s,0,0,s.width,s.height,0,0,o,d),x},r.prototype.renderBackgroundImage=function(s){return Mt(this,void 0,void 0,function(){var o,d,u,f,x,g;return kt(this,function(B){switch(B.label){case 0:o=s.styles.backgroundImage.length-1,d=function(v){var S,M,oA,_A,Y,xA,LA,qA,V,AA,_A,Y,xA,LA,qA,dA,DA,NA,pA,JA,mA,bA,G,OA,V,lA,_A,XA,QA,LA,qA,WA,Y,xA,EA,PA,C,Z,gA,hA,jA,YA;return kt(this,function(L){switch(L.label){case 0:if(v.type!==0)return[3,5];S=void 0,M=v.url,L.label=1;case 1:return L.trys.push([1,3,,4]),[4,u.context.cache.match(M)];case 2:return S=L.sent(),[3,4];case 3:return L.sent(),u.context.logger.error("Error loading background-image "+M),[3,4];case 4:return S&&(oA=Ld(s,o,[S.width,S.height,S.width/S.height]),_A=oA[0],Y=oA[1],xA=oA[2],LA=oA[3],qA=oA[4],V=u.ctx.createPattern(u.resizeImage(S,LA,qA),"repeat"),u.renderRepeat(_A,V,Y,xA)),[3,6];case 5:Q1(v)?(AA=Ld(s,o,[null,null,null]),_A=AA[0],Y=AA[1],xA=AA[2],LA=AA[3],qA=AA[4],dA=b1(v.angle,LA,qA),DA=dA[0],NA=dA[1],pA=dA[2],JA=dA[3],mA=dA[4],bA=document.createElement("canvas"),bA.width=LA,bA.height=qA,G=bA.getContext("2d"),OA=G.createLinearGradient(NA,JA,pA,mA),Fp(v.stops,DA).forEach(function(TA){return OA.addColorStop(TA.stop,yt(TA.color))}),G.fillStyle=OA,G.fillRect(0,0,LA,qA),LA>0&&qA>0&&(V=u.ctx.createPattern(bA,"repeat"),u.renderRepeat(_A,V,Y,xA))):U1(v)&&(lA=Ld(s,o,[null,null,null]),_A=lA[0],XA=lA[1],QA=lA[2],LA=lA[3],qA=lA[4],WA=v.position.length===0?[fu]:v.position,Y=Ve(WA[0],LA),xA=Ve(WA[WA.length-1],qA),EA=w1(v,Y,xA,LA,qA),PA=EA[0],C=EA[1],PA>0&&C>0&&(Z=u.ctx.createRadialGradient(XA+Y,QA+xA,0,XA+Y,QA+xA,PA),Fp(v.stops,PA*2).forEach(function(TA){return Z.addColorStop(TA.stop,yt(TA.color))}),u.path(_A),u.ctx.fillStyle=Z,PA!==C?(gA=s.bounds.left+.5*s.bounds.width,hA=s.bounds.top+.5*s.bounds.height,jA=C/PA,YA=1/jA,u.ctx.save(),u.ctx.translate(gA,hA),u.ctx.transform(1,0,0,jA,0,0),u.ctx.translate(-gA,-hA),u.ctx.fillRect(XA,YA*(QA-hA)+hA,LA,qA*YA),u.ctx.restore()):u.ctx.fill())),L.label=6;case 6:return o--,[2]}})},u=this,f=0,x=s.styles.backgroundImage.slice(0).reverse(),B.label=1;case 1:return f<x.length?(g=x[f],[5,d(g)]):[3,4];case 2:B.sent(),B.label=3;case 3:return f++,[3,1];case 4:return[2]}})})},r.prototype.renderSolidBorder=function(s,o,d){return Mt(this,void 0,void 0,function(){return kt(this,function(u){return this.path(rx(d,o)),this.ctx.fillStyle=yt(s),this.ctx.fill(),[2]})})},r.prototype.renderDoubleBorder=function(s,o,d,u){return Mt(this,void 0,void 0,function(){var f,x;return kt(this,function(g){switch(g.label){case 0:return o<3?[4,this.renderSolidBorder(s,d,u)]:[3,2];case 1:return g.sent(),[2];case 2:return f=j2(u,d),this.path(f),this.ctx.fillStyle=yt(s),this.ctx.fill(),x=S2(u,d),this.path(x),this.ctx.fill(),[2]}})})},r.prototype.renderNodeBackgroundAndBorders=function(s){return Mt(this,void 0,void 0,function(){var o,d,u,f,x,g,B,v,S=this;return kt(this,function(M){switch(M.label){case 0:return this.applyEffects(s.getEffects(2)),o=s.container.styles,d=!ba(o.backgroundColor)||o.backgroundImage.length,u=[{style:o.borderTopStyle,color:o.borderTopColor,width:o.borderTopWidth},{style:o.borderRightStyle,color:o.borderRightColor,width:o.borderRightWidth},{style:o.borderBottomStyle,color:o.borderBottomColor,width:o.borderBottomWidth},{style:o.borderLeftStyle,color:o.borderLeftColor,width:o.borderLeftWidth}],f=z2(Hr(o.backgroundClip,0),s.curves),d||o.boxShadow.length?(this.ctx.save(),this.path(f),this.ctx.clip(),ba(o.backgroundColor)||(this.ctx.fillStyle=yt(o.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(s.container)]):[3,2];case 1:M.sent(),this.ctx.restore(),o.boxShadow.slice(0).reverse().forEach(function(oA){S.ctx.save();var AA=$s(s.curves),dA=oA.inset?0:L2,DA=E2(AA,-dA+(oA.inset?1:-1)*oA.spread.number,(oA.inset?1:-1)*oA.spread.number,oA.spread.number*(oA.inset?-2:2),oA.spread.number*(oA.inset?-2:2));oA.inset?(S.path(AA),S.ctx.clip(),S.mask(DA)):(S.mask(AA),S.ctx.clip(),S.path(DA)),S.ctx.shadowOffsetX=oA.offsetX.number+dA,S.ctx.shadowOffsetY=oA.offsetY.number,S.ctx.shadowColor=yt(oA.color),S.ctx.shadowBlur=oA.blur.number,S.ctx.fillStyle=oA.inset?yt(oA.color):"rgba(0,0,0,1)",S.ctx.fill(),S.ctx.restore()}),M.label=2;case 2:x=0,g=0,B=u,M.label=3;case 3:return g<B.length?(v=B[g],v.style!==0&&!ba(v.color)&&v.width>0?v.style!==2?[3,5]:[4,this.renderDashedDottedBorder(v.color,v.width,x,s.curves,2)]:[3,11]):[3,13];case 4:return M.sent(),[3,11];case 5:return v.style!==3?[3,7]:[4,this.renderDashedDottedBorder(v.color,v.width,x,s.curves,3)];case 6:return M.sent(),[3,11];case 7:return v.style!==4?[3,9]:[4,this.renderDoubleBorder(v.color,v.width,x,s.curves)];case 8:return M.sent(),[3,11];case 9:return[4,this.renderSolidBorder(v.color,x,s.curves)];case 10:M.sent(),M.label=11;case 11:x++,M.label=12;case 12:return g++,[3,3];case 13:return[2]}})})},r.prototype.renderDashedDottedBorder=function(s,o,d,u,f){return Mt(this,void 0,void 0,function(){var x,g,B,v,S,M,oA,AA,dA,DA,NA,pA,JA,mA,bA,G,bA,G;return kt(this,function(OA){return this.ctx.save(),x=k2(u,d),g=rx(u,d),f===2&&(this.path(g),this.ctx.clip()),an(g[0])?(B=g[0].start.x,v=g[0].start.y):(B=g[0].x,v=g[0].y),an(g[1])?(S=g[1].end.x,M=g[1].end.y):(S=g[1].x,M=g[1].y),d===0||d===2?oA=Math.abs(B-S):oA=Math.abs(v-M),this.ctx.beginPath(),f===3?this.formatPath(x):this.formatPath(g.slice(0,2)),AA=o<3?o*3:o*2,dA=o<3?o*2:o,f===3&&(AA=o,dA=o),DA=!0,oA<=AA*2?DA=!1:oA<=AA*2+dA?(NA=oA/(2*AA+dA),AA*=NA,dA*=NA):(pA=Math.floor((oA+dA)/(AA+dA)),JA=(oA-pA*AA)/(pA-1),mA=(oA-(pA+1)*AA)/pA,dA=mA<=0||Math.abs(dA-JA)<Math.abs(dA-mA)?JA:mA),DA&&(f===3?this.ctx.setLineDash([0,AA+dA]):this.ctx.setLineDash([AA,dA])),f===3?(this.ctx.lineCap="round",this.ctx.lineWidth=o):this.ctx.lineWidth=o*2+1.1,this.ctx.strokeStyle=yt(s),this.ctx.stroke(),this.ctx.setLineDash([]),f===2&&(an(g[0])&&(bA=g[3],G=g[0],this.ctx.beginPath(),this.formatPath([new ee(bA.end.x,bA.end.y),new ee(G.start.x,G.start.y)]),this.ctx.stroke()),an(g[1])&&(bA=g[1],G=g[2],this.ctx.beginPath(),this.formatPath([new ee(bA.end.x,bA.end.y),new ee(G.start.x,G.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},r.prototype.render=function(s){return Mt(this,void 0,void 0,function(){var o;return kt(this,function(d){switch(d.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=yt(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),o=F2(s),[4,this.renderStack(o)];case 1:return d.sent(),this.applyEffects([]),[2,this.canvas]}})})},r}(b0),K2=function(i){return i instanceof n0||i instanceof t0?!0:i instanceof xu&&i.type!==Vs&&i.type!==Xs},z2=function(i,r){switch(i){case 0:return $s(r);case 2:return y2(r);case 1:default:return Ws(r)}},R2=function(i){switch(i){case 1:return"center";case 2:return"right";case 0:default:return"left"}},_2=["-apple-system","system-ui"],G2=function(i){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?i.filter(function(r){return _2.indexOf(r)===-1}):i},Y2=function(i){un(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.canvas=o.canvas?o.canvas:document.createElement("canvas"),d.ctx=d.canvas.getContext("2d"),d.options=o,d.canvas.width=Math.floor(o.width*o.scale),d.canvas.height=Math.floor(o.height*o.scale),d.canvas.style.width=o.width+"px",d.canvas.style.height=o.height+"px",d.ctx.scale(d.options.scale,d.options.scale),d.ctx.translate(-o.x,-o.y),d.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+o.width+"x"+o.height+" at "+o.x+","+o.y+") with scale "+o.scale),d}return r.prototype.render=function(s){return Mt(this,void 0,void 0,function(){var o,d;return kt(this,function(u){switch(u.label){case 0:return o=tu(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,s),[4,X2(o)];case 1:return d=u.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=yt(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(d,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},r}(b0),X2=function(i){return new Promise(function(r,s){var o=new Image;o.onload=function(){r(o)},o.onerror=s,o.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(i))})},V2=function(){function i(r){var s=r.id,o=r.enabled;this.id=s,this.enabled=o,this.start=Date.now()}return i.prototype.debug=function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,ps([this.id,this.getTime()+"ms"],r)):this.info.apply(this,r))},i.prototype.getTime=function(){return Date.now()-this.start},i.prototype.info=function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,ps([this.id,this.getTime()+"ms"],r))},i.prototype.warn=function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,ps([this.id,this.getTime()+"ms"],r)):this.info.apply(this,r))},i.prototype.error=function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,ps([this.id,this.getTime()+"ms"],r)):this.info.apply(this,r))},i.instances={},i}(),J2=function(){function i(r,s){var o;this.windowBounds=s,this.instanceName="#"+i.instanceCount++,this.logger=new V2({id:this.instanceName,enabled:r.logging}),this.cache=(o=r.cache)!==null&&o!==void 0?o:new h2(this,r)}return i.instanceCount=1,i}(),w0=function(i,r){return r===void 0&&(r={}),Z2(i,r)};typeof window<"u"&&h0.setContext(window);var Z2=function(i,r){return Mt(void 0,void 0,void 0,function(){var s,o,d,u,f,x,g,B,v,S,M,oA,AA,dA,DA,NA,pA,JA,mA,bA,OA,G,OA,V,lA,_A,XA,QA,LA,qA,WA,Y,xA,EA,PA,C,Z,gA,hA,jA;return kt(this,function(YA){switch(YA.label){case 0:if(!i||typeof i!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(s=i.ownerDocument,!s)throw new Error("Element is not attached to a Document");if(o=s.defaultView,!o)throw new Error("Document is not attached to a Window");return d={allowTaint:(V=r.allowTaint)!==null&&V!==void 0?V:!1,imageTimeout:(lA=r.imageTimeout)!==null&&lA!==void 0?lA:15e3,proxy:r.proxy,useCORS:(_A=r.useCORS)!==null&&_A!==void 0?_A:!1},u=zd({logging:(XA=r.logging)!==null&&XA!==void 0?XA:!0,cache:r.cache},d),f={windowWidth:(QA=r.windowWidth)!==null&&QA!==void 0?QA:o.innerWidth,windowHeight:(LA=r.windowHeight)!==null&&LA!==void 0?LA:o.innerHeight,scrollX:(qA=r.scrollX)!==null&&qA!==void 0?qA:o.pageXOffset,scrollY:(WA=r.scrollY)!==null&&WA!==void 0?WA:o.pageYOffset},x=new zn(f.scrollX,f.scrollY,f.windowWidth,f.windowHeight),g=new J2(u,x),B=(Y=r.foreignObjectRendering)!==null&&Y!==void 0?Y:!1,v={allowTaint:(xA=r.allowTaint)!==null&&xA!==void 0?xA:!1,onclone:r.onclone,ignoreElements:r.ignoreElements,inlineImages:B,copyStyles:B},g.logger.debug("Starting document clone with size "+x.width+"x"+x.height+" scrolled to "+-x.left+","+-x.top),S=new tx(g,i,v),M=S.clonedReferenceElement,M?[4,S.toIFrame(s,x)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return oA=YA.sent(),AA=mu(M)||WC(M)?Ew(M.ownerDocument):Ps(g,M),dA=AA.width,DA=AA.height,NA=AA.left,pA=AA.top,JA=$2(g,M,r.backgroundColor),mA={canvas:r.canvas,backgroundColor:JA,scale:(PA=(EA=r.scale)!==null&&EA!==void 0?EA:o.devicePixelRatio)!==null&&PA!==void 0?PA:1,x:((C=r.x)!==null&&C!==void 0?C:0)+NA,y:((Z=r.y)!==null&&Z!==void 0?Z:0)+pA,width:(gA=r.width)!==null&&gA!==void 0?gA:Math.ceil(dA),height:(hA=r.height)!==null&&hA!==void 0?hA:Math.ceil(DA)},B?(g.logger.debug("Document cloned, using foreign object rendering"),OA=new Y2(g,mA),[4,OA.render(M)]):[3,3];case 2:return bA=YA.sent(),[3,5];case 3:return g.logger.debug("Document cloned, element located at "+NA+","+pA+" with size "+dA+"x"+DA+" using computed rendering"),g.logger.debug("Starting DOM parsing"),G=i0(g,M),JA===G.styles.backgroundColor&&(G.styles.backgroundColor=Kn.TRANSPARENT),g.logger.debug("Starting renderer for element at "+mA.x+","+mA.y+" with size "+mA.width+"x"+mA.height),OA=new O2(g,mA),[4,OA.render(G)];case 4:bA=YA.sent(),YA.label=5;case 5:return(!((jA=r.removeContainer)!==null&&jA!==void 0)||jA)&&(tx.destroy(oA)||g.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),g.logger.debug("Finished rendering"),[2,bA]}})})},$2=function(i,r,s){var o=r.ownerDocument,d=o.documentElement?$i(i,getComputedStyle(o.documentElement).backgroundColor):Kn.TRANSPARENT,u=o.body?$i(i,getComputedStyle(o.body).backgroundColor):Kn.TRANSPARENT,f=typeof s=="string"?$i(i,s):s===null?Kn.TRANSPARENT:4294967295;return r===o.documentElement?ba(d)?ba(u)?f:u:d:f};const Or=Object.freeze(Object.defineProperty({__proto__:null,default:w0},Symbol.toStringTag,{value:"Module"})),W2=({ganttChart:i,tasks:r,onUpdateGanttChart:s,onBack:o})=>{const[d,u]=k.useState({name:"",startDate:new Date().toISOString().split("T")[0],endDate:new Date(Date.now()+6048e5).toISOString().split("T")[0],progress:0,dependencies:[],color:B()}),[f,x]=k.useState(null),g=k.useRef(null);function B(){const V=["#3b82f6","#ef4444","#10b981","#f59e0b","#6366f1","#ec4899","#14b8a6","#f97316","#8b5cf6","#d946ef"];return V[Math.floor(Math.random()*V.length)]}const v=k.useMemo(()=>{if(r.length===0){const WA=new Date,Y=new Date(WA.getTime()+30*24*60*60*1e3);return{startDate:WA,endDate:Y,totalDays:30}}const V=r.flatMap(WA=>[new Date(WA.startDate),new Date(WA.endDate)]),lA=new Date(Math.min(...V)),_A=new Date(Math.max(...V)),XA=7,QA=new Date(lA.getTime()-XA*24*60*60*1e3),LA=new Date(_A.getTime()+XA*24*60*60*1e3),qA=Math.ceil((LA-QA)/(24*60*60*1e3));return{startDate:QA,endDate:LA,totalDays:qA}},[r]),S=k.useMemo(()=>{const V=[],{startDate:lA,totalDays:_A}=v;for(let XA=0;XA<=_A;XA+=7){const QA=new Date(lA.getTime()+XA*24*60*60*1e3);V.push({date:QA,position:XA/_A*100,label:QA.toLocaleDateString("en-US",{month:"short",day:"numeric"})})}return V},[v]),M=V=>{const lA=new Date(V),{startDate:_A,totalDays:XA}=v,QA=Math.max(0,(lA-_A)/(24*60*60*1e3));return Math.min(100,QA/XA*100)},oA=(V,lA)=>{const _A=new Date(V),XA=new Date(lA),{totalDays:QA}=v,LA=Math.max(1,(XA-_A)/(24*60*60*1e3));return Math.min(100,LA/QA*100)},AA=()=>{if(!d.name.trim())return;const V=[...r,{id:Date.now(),...d,progress:Math.min(100,Math.max(0,parseInt(d.progress)||0))}];s({...i,tasks:V}),u({name:"",startDate:new Date().toISOString().split("T")[0],endDate:new Date(Date.now()+7*24*60*60*1e3).toISOString().split("T")[0],progress:0,dependencies:[],color:B()})},dA=V=>{const _A=r.filter(XA=>XA.id!==V).map(XA=>({...XA,dependencies:XA.dependencies.filter(QA=>QA!==V)}));s({...i,tasks:_A})},DA=(V,lA)=>{const _A=r.map(XA=>XA.id===V?{...XA,...lA}:XA);s({...i,tasks:_A})},NA=V=>{x({...V})},pA=()=>{f&&(DA(f.id,f),x(null))},JA=()=>{x(null)},mA=()=>{const V={...i,tasks:r},lA=JSON.stringify(V,null,2),_A=new Blob([lA],{type:"application/json"}),XA=URL.createObjectURL(_A),QA=document.createElement("a");QA.href=XA,QA.download=`${i.name.replace(/\s+/g,"_")}_gantt.json`,document.body.appendChild(QA),QA.click(),document.body.removeChild(QA),URL.revokeObjectURL(XA)},bA=V=>{const lA=V.target.files[0];if(!lA)return;const _A=new FileReader;_A.onload=XA=>{try{const QA=JSON.parse(XA.target.result);QA.name&&Array.isArray(QA.tasks)?s(QA):alert("Invalid Gantt chart file format")}catch{alert("Error parsing JSON file")}},_A.readAsText(lA)},G=()=>{g.current&&w0(g.current,{scrollX:-window.scrollX,scrollY:-window.scrollY,windowWidth:g.current.scrollWidth,windowHeight:g.current.scrollHeight,scale:2}).then(V=>{const lA=document.createElement("a");lA.download=`${i.name.replace(/\s+/g,"_")}_gantt.png`,lA.href=V.toDataURL("image/png"),lA.click()})},OA=V=>r.find(lA=>lA.id===V);return n.jsxs("div",{className:"gantt-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:o,className:"back-btn",children:[n.jsx(Rn,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"export-actions",children:[n.jsxs("button",{onClick:mA,className:"export-btn",title:"Export as JSON",children:[n.jsx(bn,{size:16})," JSON"]}),n.jsxs("label",{className:"import-btn",title:"Import from JSON",children:[n.jsx(wn,{size:16})," JSON",n.jsx("input",{type:"file",accept:".json",onChange:bA,style:{display:"none"}})]}),n.jsxs("button",{onClick:G,className:"export-btn",title:"Export as Image",children:[n.jsx(Bn,{size:16})," Image"]})]})]}),n.jsxs("div",{className:"gantt-container",children:[n.jsxs("div",{className:"gantt-sidebar",children:[n.jsxs("div",{className:"sidebar-header",children:["Tasks (",r.length,")"]}),n.jsx("div",{className:"task-list",children:r.map(V=>n.jsxs("div",{className:"task-item",children:[n.jsxs("div",{className:"task-info",children:[n.jsx("div",{className:"task-name",children:V.name}),n.jsxs("div",{className:"task-dates",children:[new Date(V.startDate).toLocaleDateString()," - ",new Date(V.endDate).toLocaleDateString()]}),n.jsxs("div",{className:"task-progress-text",children:[V.progress,"% complete"]}),V.dependencies.length>0&&n.jsxs("div",{className:"task-dependencies",children:["Dependencies: ",V.dependencies.map(lA=>OA(lA)?.name).filter(Boolean).join(", ")]})]}),n.jsxs("div",{className:"task-actions",children:[n.jsx("button",{onClick:()=>NA(V),className:"edit-btn",title:"Edit task",children:n.jsx(Vb,{size:14})}),n.jsx("button",{onClick:()=>dA(V.id),className:"delete-btn",title:"Delete task",children:n.jsx(Fe,{size:14})})]})]},V.id))}),n.jsxs("div",{className:"add-task-form",children:[n.jsx("h3",{children:"Add New Task"}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Task Name"}),n.jsx("input",{type:"text",value:d.name,onChange:V=>u({...d,name:V.target.value}),placeholder:"Task description"})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Start Date"}),n.jsx("input",{type:"date",value:d.startDate,onChange:V=>u({...d,startDate:V.target.value})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"End Date"}),n.jsx("input",{type:"date",value:d.endDate,onChange:V=>u({...d,endDate:V.target.value})})]})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Progress (%)"}),n.jsx("input",{type:"number",min:"0",max:"100",value:d.progress,onChange:V=>u({...d,progress:V.target.value})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Color"}),n.jsxs("div",{className:"color-picker",children:[n.jsx("input",{type:"color",value:d.color,onChange:V=>u({...d,color:V.target.value})}),n.jsx("button",{onClick:()=>u({...d,color:B()}),className:"random-color-btn",title:"Random color",children:"Random"})]})]})]}),n.jsxs("button",{onClick:AA,className:"add-btn",children:[n.jsx(At,{size:16})," Add Task"]})]})]}),n.jsxs("div",{className:"gantt-timeline",ref:g,children:[n.jsxs("div",{className:"timeline-header",children:[n.jsx("div",{className:"timeline-title",children:"Timeline"}),n.jsx("div",{className:"timeline-scale",children:S.map((V,lA)=>n.jsxs("div",{className:"scale-point",style:{left:`${V.position}%`},children:[n.jsx("div",{className:"scale-line"}),n.jsx("div",{className:"scale-label",children:V.label})]},lA))})]}),n.jsxs("div",{className:"timeline-content",children:[r.map((V,lA)=>{const _A=M(V.startDate),XA=oA(V.startDate,V.endDate),QA=`${V.color}33`;return n.jsx("div",{className:"timeline-row",children:n.jsxs("div",{className:"timeline-task",children:[n.jsxs("div",{className:"task-bar",style:{left:`${_A}%`,width:`${XA}%`,background:`linear-gradient(to right, ${V.color} ${V.progress}%, ${QA} ${V.progress}%)`,borderColor:V.color},title:`${V.name}: ${V.progress}% complete`,children:[n.jsxs("div",{className:"task-progress",children:[V.progress,"%"]}),n.jsx("div",{className:"task-label",children:V.name})]}),V.dependencies.map(LA=>{const qA=OA(LA);if(!qA)return null;const WA=r.findIndex(EA=>EA.id===LA),Y=M(qA.endDate),xA=oA(qA.startDate,qA.endDate);return n.jsxs("svg",{className:"dependency-arrow",style:{position:"absolute",left:`${Y+xA}%`,top:`${(WA-lA)*44-12}px`,width:`${Math.abs(_A-(Y+xA))}%`,height:`${Math.abs((lA-WA)*44)+24}px`,pointerEvents:"none",zIndex:1},children:[n.jsx("defs",{children:n.jsx("marker",{id:`arrowhead-${V.id}-${LA}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#64748b"})})}),n.jsx("path",{d:`M 0 ${WA<lA?0:Math.abs((lA-WA)*44)} 
                                L ${Math.abs(_A-(Y+xA))*.5} ${WA<lA?0:Math.abs((lA-WA)*44)} 
                                L ${Math.abs(_A-(Y+xA))*.5} ${WA<lA?Math.abs((lA-WA)*44):0} 
                                L ${Math.abs(_A-(Y+xA))} ${WA<lA?Math.abs((lA-WA)*44):0}`,stroke:"#64748b",strokeWidth:"2",fill:"none",markerEnd:`url(#arrowhead-${V.id}-${LA})`})]},`dep-${LA}`)})]})},V.id)}),n.jsx("div",{className:"today-line",style:{left:`${M(new Date().toISOString().split("T")[0])}%`},children:n.jsx("div",{className:"today-label",children:"Today"})})]})]})]}),f&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal",children:[n.jsx("h3",{children:"Edit Task"}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Task Name"}),n.jsx("input",{type:"text",value:f.name,onChange:V=>x({...f,name:V.target.value})})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Start Date"}),n.jsx("input",{type:"date",value:f.startDate,onChange:V=>x({...f,startDate:V.target.value})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"End Date"}),n.jsx("input",{type:"date",value:f.endDate,onChange:V=>x({...f,endDate:V.target.value})})]})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Progress (%)"}),n.jsx("input",{type:"number",min:"0",max:"100",value:f.progress,onChange:V=>x({...f,progress:V.target.value})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Color"}),n.jsx("input",{type:"color",value:f.color,onChange:V=>x({...f,color:V.target.value})})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Dependencies"}),n.jsx("div",{className:"dependency-list",children:r.filter(V=>V.id!==f.id).map(V=>n.jsxs("label",{className:"dependency-item",children:[n.jsx("input",{type:"checkbox",checked:f.dependencies.includes(V.id),onChange:lA=>{lA.target.checked?x({...f,dependencies:[...f.dependencies,V.id]}):x({...f,dependencies:f.dependencies.filter(_A=>_A!==V.id)})}}),V.name]},V.id))})]}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{onClick:JA,className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:pA,className:"save-btn",children:"Save Changes"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},q2=({useCaseDiagrams:i,onCreateUseCaseDiagram:r,onLoadUseCaseDiagram:s,onDeleteUseCaseDiagram:o})=>{const[d,u]=k.useState(!1);return n.jsxs("div",{className:"use-case-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(du,{size:48})}),n.jsx("h2",{children:"Use Case Diagram Designer"}),n.jsx("p",{children:"Model system functionality with actors and use cases"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(At,{size:16})," New Diagram"]})}),i.length>0&&n.jsxs("div",{className:"diagram-list",children:[n.jsx("h3",{children:"Your Use Case Diagrams"}),i.map(f=>n.jsxs("div",{className:"diagram-card",onClick:()=>s(f),children:[n.jsxs("div",{className:"diagram-card-content",children:[n.jsx("div",{className:"diagram-card-name",children:f.name}),n.jsxs("div",{className:"diagram-card-meta",children:[n.jsx("span",{children:new Date(f.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[f.actors?.length||0," actors • ",f.useCases?.length||0," use cases"]})]})]}),n.jsxs("div",{className:"diagram-card-actions",children:[n.jsx("button",{onClick:x=>{x.stopPropagation(),s(f)},className:"open-btn",children:n.jsx(_n,{size:16})}),n.jsx("button",{onClick:x=>{x.stopPropagation(),confirm("Delete this diagram?")&&o(f.id)},className:"delete-btn",children:n.jsx(Fe,{size:16})})]})]},f.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Use Case Diagram"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Diagram Name"}),n.jsx("input",{type:"text",placeholder:"e.g., Online Shopping System",id:"diagramName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const f=document.getElementById("diagramName").value;f.trim()&&(r(f),u(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},P2="modulepreload",AQ=function(i){return"/Rootrie/"+i},ox={},Kr=function(r,s,o){let d=Promise.resolve();if(s&&s.length>0){let B=function(v){return Promise.all(v.map(S=>Promise.resolve(S).then(M=>({status:"fulfilled",value:M}),M=>({status:"rejected",reason:M}))))};var f=B;document.getElementsByTagName("link");const x=document.querySelector("meta[property=csp-nonce]"),g=x?.nonce||x?.getAttribute("nonce");d=B(s.map(v=>{if(v=AQ(v),v in ox)return;ox[v]=!0;const S=v.endsWith(".css"),M=S?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${M}`))return;const oA=document.createElement("link");if(oA.rel=S?"stylesheet":P2,S||(oA.as="script"),oA.crossOrigin="",oA.href=v,g&&oA.setAttribute("nonce",g),document.head.appendChild(oA),S)return new Promise((AA,dA)=>{oA.addEventListener("load",AA),oA.addEventListener("error",()=>dA(new Error(`Unable to preload CSS for ${v}`)))})}))}function u(x){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=x,window.dispatchEvent(g),!g.defaultPrevented)throw x}return d.then(x=>{for(const g of x||[])g.status==="rejected"&&u(g.reason);return r().catch(u)})},eQ=({useCaseDiagram:i,actors:r=[],useCases:s=[],relationships:o=[],onUpdateUseCaseDiagram:d,onBack:u})=>{const[f,x]=k.useState(""),[g,B]=k.useState(""),[v,S]=k.useState(null),[M,oA]=k.useState(null),[AA,dA]=k.useState("association"),[DA,NA]=k.useState("editor"),[pA,JA]=k.useState(""),[mA,bA]=k.useState(null),[G,OA]=k.useState({x:0,y:0}),[V,lA]=k.useState(!1),[_A,XA]=k.useState(!1),[QA,LA]=k.useState(1),[qA,WA]=k.useState({x:0,y:0}),[Y,xA]=k.useState(!1),[EA,PA]=k.useState({x:0,y:0}),[C,Z]=k.useState(i.systemBoundary||{x:200,y:100,width:600,height:400,visible:!0}),[gA,hA]=k.useState({width:1600,height:1200}),[jA,YA]=k.useState(20),L=k.useRef(null),TA=k.useRef(null),kA=20,BA=60,z=80,q=150,RA=40;k.useEffect(()=>{JA(JSON.stringify({actors:r,useCases:s,relationships:o,systemBoundary:C},null,2))},[r,s,o,C]);const FA=H=>_A?Math.round(H/kA)*kA:H,IA=()=>{if(!f.trim())return;const H=[...r,{id:Date.now(),name:f,x:FA(100+Math.random()*200),y:FA(100+Math.random()*200)}];d({...i,actors:H}),x("")},rA=()=>{if(!g.trim())return;const H=[...s,{id:Date.now(),name:g,x:FA(300+Math.random()*300),y:FA(150+Math.random()*200)}];d({...i,useCases:H}),B("")},ae=H=>{const wA=r.filter(GA=>GA.id!==H),HA=o.filter(GA=>!(GA.source===H||GA.target===H));d({...i,actors:wA,relationships:HA})},re=H=>{const wA=s.filter(GA=>GA.id!==H),HA=o.filter(GA=>!(GA.source===H||GA.target===H));d({...i,useCases:wA,relationships:HA})},le=()=>{if(!v||!M)return;const H=r.some(nA=>nA.id===v),wA=r.some(nA=>nA.id===M),HA=s.some(nA=>nA.id===v),GA=s.some(nA=>nA.id===M);if(AA==="include"||AA==="extend"){if(!HA||!GA){alert("Include and extend relationships must be between use cases");return}}else if(AA==="generalization"){if(H&&!wA||HA&&!GA){alert("Generalization must be between two actors or two use cases");return}}else if(AA==="association"&&!(H&&GA)&&!(HA&&wA)){alert("Association must be between an actor and a use case");return}const j={id:Date.now(),source:v,target:M,type:AA};d({...i,relationships:[...o,j]}),S(null),oA(null)},we=H=>{const wA=o.filter(HA=>HA.id!==H);d({...i,relationships:wA})},Ne=(H,wA)=>wA?{x:H.x+BA/2,y:H.y+z/2}:{x:H.x+q/2,y:H.y+RA/2},se=(H,wA,HA)=>{const GA=Ne(H,wA);if(wA)return{x:GA.x+25*Math.cos(HA),y:GA.y+25*Math.sin(HA)};{const j=q/2,nA=RA/2,y=Math.cos(HA),I=Math.sin(HA),_=j*nA/Math.sqrt(nA*nA*y*y+j*j*I*I);return{x:GA.x+_*y,y:GA.y+_*I}}},Qe=(H,wA,HA,GA)=>{const y=Math.max(gA.width-HA,0),I=Math.max(gA.height-GA,0);return{x:Math.max(0,Math.min(y,H)),y:Math.max(0,Math.min(I,wA))}},lt=(H,wA,HA)=>{H.preventDefault(),H.stopPropagation();const GA=L.current.getBoundingClientRect(),j=(H.clientX-GA.left-qA.x)/QA,nA=(H.clientY-GA.top-qA.y)/QA;bA({...wA,type:HA}),OA({x:j-wA.x,y:nA-wA.y})},We=H=>{if(!(!mA&&!Y)){if(Y){const wA=H.clientX-EA.x,HA=H.clientY-EA.y;WA(GA=>({x:GA.x+wA,y:GA.y+HA})),PA({x:H.clientX,y:H.clientY});return}if(mA){const wA=L.current.getBoundingClientRect();let HA=(H.clientX-wA.left-qA.x)/QA-G.x,GA=(H.clientY-wA.top-qA.y)/QA-G.y;HA=FA(HA),GA=FA(GA);const j=mA.type==="actor"?BA:q,nA=mA.type==="actor"?z:RA,y=Qe(HA,GA,j,nA);if(mA.type==="systemBoundary"){const I=Qe(HA,GA,C.width,C.height);he({x:I.x,y:I.y})}else if(mA.type==="actor"){const I=r.map(_=>_.id===mA.id?{..._,x:y.x,y:y.y}:_);d({...i,actors:I})}else if(mA.type==="useCase"){const I=s.map(_=>_.id===mA.id?{..._,x:y.x,y:y.y}:_);d({...i,useCases:I})}}}},nt=()=>{bA(null),xA(!1)},Te=H=>{H.target===L.current&&(xA(!0),PA({x:H.clientX,y:H.clientY}))},xe=()=>{LA(H=>Math.min(H*1.2,3))},K=()=>{LA(H=>Math.max(H/1.2,.3))},uA=()=>{LA(1),WA({x:0,y:0})},KA=()=>{const j=j||{x:300,y:50,width:600},nA=Math.max(1,Math.floor(j.width/200)+1),y=r.map((_,b)=>({..._,x:j.x-150,y:j.y+50+b*120})),I=s.map((_,b)=>({..._,x:j.x+50+b%nA*200,y:j.y+50+Math.floor(b/nA)*80}));d({...i,actors:y,useCases:I})};k.useEffect(()=>{const H=HA=>We(HA),wA=()=>nt();if(mA||Y)return document.addEventListener("mousemove",H),document.addEventListener("mouseup",wA),()=>{document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",wA)}},[mA,Y,G,qA,QA,r,s,d,i,EA,_A]);const O=()=>JSON.stringify({actors:r,useCases:s,relationships:o,systemBoundary:C},null,2),sA=()=>{navigator.clipboard.writeText(O())},MA=()=>{try{const H=JSON.parse(pA);Array.isArray(H.actors)&&Array.isArray(H.useCases)&&Array.isArray(H.relationships)?(d({...i,actors:H.actors,useCases:H.useCases,relationships:H.relationships,systemBoundary:H.systemBoundary||C}),H.systemBoundary&&Z(H.systemBoundary)):alert("Invalid JSON format. Expected actors, useCases, and relationships arrays.")}catch(H){alert("Error parsing JSON: "+H.message)}},fA=H=>{const wA=H.target.files[0];if(!wA)return;const HA=new FileReader;HA.onload=GA=>{JA(GA.target.result)},HA.readAsText(wA)},CA=()=>{if(!L.current)return;let H=1/0,wA=-1/0,HA=1/0,GA=-1/0;if(r.forEach(E=>{H=Math.min(H,E.x),wA=Math.max(wA,E.x+BA),HA=Math.min(HA,E.y),GA=Math.max(GA,E.y+z)}),s.forEach(E=>{H=Math.min(H,E.x),wA=Math.max(wA,E.x+q),HA=Math.min(HA,E.y),GA=Math.max(GA,E.y+RA)}),C.visible&&(H=Math.min(H,C.x),wA=Math.max(wA,C.x+C.width),HA=Math.min(HA,C.y),GA=Math.max(GA,C.y+C.height)),o.forEach(E=>{let D,m,F=!1,U=!1;if(D=r.find($=>$.id===E.source),D?F=!0:D=s.find($=>$.id===E.source),m=r.find($=>$.id===E.target),m?U=!0:m=s.find($=>$.id===E.target),D&&m){const $=Ne(D,F),W=Ne(m,U);H=Math.min(H,$.x,W.x),wA=Math.max(wA,$.x,W.x),HA=Math.min(HA,$.y,W.y),GA=Math.max(GA,$.y,W.y)}}),H===1/0||r.length===0&&s.length===0){alert("No diagram content to export");return}const j=10,nA=Math.max(0,H-j),y=Math.max(0,HA-j),I=wA-H+j*2,_=GA-HA+j*2,b=document.createElement("div");b.style.width=`${I}px`,b.style.height=`${_}px`,b.style.position="fixed",b.style.top="0",b.style.left="0",b.style.background="#f8fafc",b.style.zIndex="-9999",b.style.overflow="hidden";const Q=L.current.cloneNode(!0);Q.style.position="absolute",Q.style.left=`-${nA}px`,Q.style.top=`-${y}px`,Q.style.transform="none",Q.style.width=`${gA.width}px`,Q.style.height=`${gA.height}px`,Q.style.background="#f8fafc",b.appendChild(Q),document.body.appendChild(b),Kr(()=>Promise.resolve().then(()=>Or),void 0).then(E=>{E.default(b,{backgroundColor:"#f8fafc",scale:2,useCORS:!0,width:I,height:_,scrollX:0,scrollY:0}).then(D=>{const m=document.createElement("a");m.download=`${i.name||"use-case-diagram"}.png`,m.href=D.toDataURL("image/png"),m.click(),document.body.removeChild(b)}).catch(D=>{console.error("Error capturing image:",D),document.body.removeChild(b)})})},de=()=>{if(!V)return null;const H=TA.current;if(!H)return null;const wA=H.getBoundingClientRect(),HA=wA.width/QA,GA=wA.height/QA,j=Math.floor(-qA.x/QA/kA)*kA,nA=Math.floor(-qA.y/QA/kA)*kA,y=[];for(let I=j;I<HA-qA.x/QA;I+=kA)y.push(n.jsx("line",{x1:I,y1:0,x2:I,y2:GA,stroke:"#e2e8f0",strokeWidth:"1"},`v-${I}`));for(let I=nA;I<GA-qA.y/QA;I+=kA)y.push(n.jsx("line",{x1:0,y1:I,x2:HA,y2:I,stroke:"#e2e8f0",strokeWidth:"1"},`h-${I}`));return n.jsx("svg",{className:"grid-overlay",children:y})},Be=H=>n.jsxs("div",{className:"actor",style:{left:`${H.x}px`,top:`${H.y}px`,width:`${BA}px`,height:`${z}px`,cursor:mA?.id===H.id?"grabbing":"grab"},onMouseDown:wA=>lt(wA,H,"actor"),children:[n.jsx("div",{className:"actor-icon",children:n.jsx(du,{size:20})}),n.jsx("div",{className:"actor-name",children:H.name})]},H.id),he=H=>{const wA={...C,...H};Z(wA),d({...i,systemBoundary:wA})},ge=H=>{H.preventDefault(),H.stopPropagation();const wA=L.current.getBoundingClientRect(),HA=(H.clientX-wA.left-qA.x)/QA,GA=(H.clientY-wA.top-qA.y)/QA;bA({id:"system-boundary",type:"systemBoundary",x:C.x,y:C.y}),OA({x:HA-C.x,y:GA-C.y})},ye=H=>{let wA=0,HA=0;switch(H){case"up":HA=-jA;break;case"down":HA=jA;break;case"left":wA=-jA;break;case"right":wA=jA;break;default:return}const GA=r.map(_=>{const b=_.x+wA,Q=_.y+HA,E=Qe(b,Q,BA,z);return{..._,x:E.x,y:E.y}}),j=s.map(_=>{const b=_.x+wA,Q=_.y+HA,E=Qe(b,Q,q,RA);return{..._,x:E.x,y:E.y}}),nA=C.x+wA,y=C.y+HA,I=Qe(nA,y,C.width,C.height);d({...i,actors:GA,useCases:j}),he({x:I.x,y:I.y})},Se=()=>{let H=1/0,wA=-1/0,HA=1/0,GA=-1/0;if(r.forEach(U=>{H=Math.min(H,U.x),wA=Math.max(wA,U.x+BA),HA=Math.min(HA,U.y),GA=Math.max(GA,U.y+z)}),s.forEach(U=>{H=Math.min(H,U.x),wA=Math.max(wA,U.x+q),HA=Math.min(HA,U.y),GA=Math.max(GA,U.y+RA)}),C.visible&&(H=Math.min(H,C.x),wA=Math.max(wA,C.x+C.width),HA=Math.min(HA,C.y),GA=Math.max(GA,C.y+C.height)),H===1/0)return;const j=wA-H,nA=GA-HA,y=(gA.width-j)/2,I=(gA.height-nA)/2,_=y-H,b=I-HA,Q=r.map(U=>{const $=U.x+_,W=U.y+b,zA=Qe($,W,BA,z);return{...U,x:zA.x,y:zA.y}}),E=s.map(U=>{const $=U.x+_,W=U.y+b,zA=Qe($,W,q,RA);return{...U,x:zA.x,y:zA.y}}),D=C.x+_,m=C.y+b,F=Qe(D,m,C.width,C.height);d({...i,actors:Q,useCases:E}),he({x:F.x,y:F.y})};k.useEffect(()=>{const H=wA=>{if(wA.ctrlKey)switch(wA.key){case"ArrowUp":wA.preventDefault(),ye("up");break;case"ArrowDown":wA.preventDefault(),ye("down");break;case"ArrowLeft":wA.preventDefault(),ye("left");break;case"ArrowRight":wA.preventDefault(),ye("right");break}};return document.addEventListener("keydown",H),()=>{document.removeEventListener("keydown",H)}},[r,s,C,jA]);const _e=H=>n.jsx("div",{className:"use-case",style:{left:`${H.x}px`,top:`${H.y}px`,width:`${q}px`,height:`${RA}px`,cursor:mA?.id===H.id?"grabbing":"grab"},onMouseDown:wA=>lt(wA,H,"useCase"),children:n.jsx("div",{className:"use-case-name",children:H.name})},H.id),Ge=H=>{let wA,HA,GA=!1,j=!1;if(wA=r.find(zA=>zA.id===H.source),wA?GA=!0:wA=s.find(zA=>zA.id===H.source),HA=r.find(zA=>zA.id===H.target),HA?j=!0:HA=s.find(zA=>zA.id===H.target),!wA||!HA)return null;const nA=Ne(wA,GA),y=Ne(HA,j),I=y.x-nA.x,_=y.y-nA.y,b=Math.atan2(_,I),Q=se(wA,GA,b),E=se(HA,j,b+Math.PI);let D={},m={};H.type==="include"?(D={strokeDasharray:"5,5",stroke:"#3b82f6"},m={fill:"#3b82f6"}):H.type==="extend"?(D={strokeDasharray:"8,3",stroke:"#10b981"},m={fill:"#10b981"}):H.type==="generalization"?(D={stroke:"#8b5cf6"},m={fill:"none",stroke:"#8b5cf6",strokeWidth:"2"}):(D={stroke:"#64748b"},m={fill:"#64748b"});const F=8,U=Math.atan2(E.y-Q.y,E.x-Q.x),$={x:E.x-F*Math.cos(U-Math.PI/6),y:E.y-F*Math.sin(U-Math.PI/6)},W={x:E.x-F*Math.cos(U+Math.PI/6),y:E.y-F*Math.sin(U+Math.PI/6)};return H.type==="generalization"?n.jsxs("svg",{className:"relationship",children:[n.jsx("line",{x1:Q.x,y1:Q.y,x2:E.x,y2:E.y,strokeWidth:"2",...D}),n.jsx("polygon",{points:`
              ${E.x},${E.y}
              ${$.x},${$.y}
              ${W.x},${W.y}
            `,...m}),n.jsx("text",{x:(Q.x+E.x)/2,y:(Q.y+E.y)/2-8,textAnchor:"middle",fontSize:"11",fill:D.stroke||"#64748b",className:"relationship-label",children:`<<${H.type}>>`})]},H.id):H.type==="association"?n.jsx("svg",{className:"relationship",children:n.jsx("line",{x1:Q.x,y1:Q.y,x2:E.x,y2:E.y,strokeWidth:"2",...D})},H.id):n.jsxs("svg",{className:"relationship",children:[n.jsx("defs",{children:n.jsx("marker",{id:`arrowhead-${H.id}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",...m})})}),n.jsx("line",{x1:Q.x,y1:Q.y,x2:E.x,y2:E.y,strokeWidth:"2",markerEnd:`url(#arrowhead-${H.id})`,...D}),H.type!=="association"&&n.jsx("text",{x:(Q.x+E.x)/2,y:(Q.y+E.y)/2-8,textAnchor:"middle",fontSize:"11",fill:D.stroke||"#64748b",className:"relationship-label",children:`<<${H.type}>>`})]},H.id)};return n.jsxs("div",{className:"use-case-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:u,className:"back-btn",children:[n.jsx(Rn,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"toolbar-controls",children:[n.jsx("button",{onClick:()=>lA(!V),className:`tool-btn ${V?"active":""}`,children:n.jsx(vb,{size:16})}),n.jsx("button",{onClick:()=>XA(!_A),className:`tool-btn ${_A?"active":""}`,children:n.jsx(hx,{size:16})}),n.jsx("button",{onClick:K,className:"tool-btn",children:n.jsx(Ir,{size:16})}),n.jsxs("span",{className:"zoom-level",children:[Math.round(QA*100),"%"]}),n.jsx("button",{onClick:xe,className:"tool-btn",children:n.jsx(Tr,{size:16})}),n.jsx("button",{onClick:uA,className:"tool-btn",children:n.jsx(px,{size:16})}),n.jsx("button",{onClick:KA,className:"tool-btn",children:"Auto"})]}),n.jsxs("div",{className:"export-buttons",children:[n.jsxs("button",{onClick:CA,className:"export-btn",children:[n.jsx(Bn,{size:16})," Export Image"]}),n.jsxs("button",{onClick:sA,className:"export-btn",children:[n.jsx(wa,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const H=new Blob([O()],{type:"application/json"}),wA=URL.createObjectURL(H),HA=document.createElement("a");HA.href=wA,HA.download=`${i.name||"use-case-diagram"}.json`,document.body.appendChild(HA),HA.click(),document.body.removeChild(HA),URL.revokeObjectURL(wA)},className:"export-btn",children:[n.jsx(bn,{size:16})," Export JSON"]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${DA==="editor"?"active":""}`,onClick:()=>NA("editor"),children:"Diagram Editor"}),n.jsx("button",{className:`tab ${DA==="json"?"active":""}`,onClick:()=>NA("json"),children:"JSON Editor"})]}),DA==="editor"?n.jsxs("div",{className:"diagram-container",children:[n.jsxs("div",{className:"diagram-sidebar",children:[n.jsxs("div",{className:"sidebar-section",children:[n.jsx("div",{style:{fontSize:"11px",color:"#64748b",marginBottom:"8px"},children:"Use Ctrl + Arrow keys for moving entire diagram"}),n.jsx("h3",{children:"Actors"}),n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"text",value:f,onChange:H=>x(H.target.value),placeholder:"New actor name",onKeyPress:H=>H.key==="Enter"&&IA()}),n.jsxs("button",{onClick:IA,className:"add-btn",children:[n.jsx(At,{size:16})," Add Actor"]})]}),n.jsx("div",{className:"actor-list",children:r.map(H=>n.jsxs("div",{className:"list-item",children:[n.jsx("div",{className:"item-name",children:H.name}),n.jsx("button",{onClick:()=>ae(H.id),className:"delete-btn",children:n.jsx(Fe,{size:14})})]},H.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Use Cases"}),n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"text",value:g,onChange:H=>B(H.target.value),placeholder:"New use case name",onKeyPress:H=>H.key==="Enter"&&rA()}),n.jsxs("button",{onClick:rA,className:"add-btn",children:[n.jsx(At,{size:16})," Add Use Case"]})]}),n.jsx("div",{className:"use-case-list",children:s.map(H=>n.jsxs("div",{className:"list-item",children:[n.jsx("div",{className:"item-name",children:H.name}),n.jsx("button",{onClick:()=>re(H.id),className:"delete-btn",children:n.jsx(Fe,{size:14})})]},H.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Relationships"}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Source"}),n.jsxs("select",{value:v||"",onChange:H=>S(H.target.value?parseInt(H.target.value):null),children:[n.jsx("option",{value:"",children:"Select source"}),n.jsx("optgroup",{label:"Actors",children:r.map(H=>n.jsx("option",{value:H.id,children:H.name},H.id))}),n.jsx("optgroup",{label:"Use Cases",children:s.map(H=>n.jsx("option",{value:H.id,children:H.name},H.id))})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Target"}),n.jsxs("select",{value:M||"",onChange:H=>oA(H.target.value?parseInt(H.target.value):null),children:[n.jsx("option",{value:"",children:"Select target"}),n.jsx("optgroup",{label:"Actors",children:r.map(H=>n.jsx("option",{value:H.id,children:H.name},H.id))}),n.jsx("optgroup",{label:"Use Cases",children:s.map(H=>n.jsx("option",{value:H.id,children:H.name},H.id))})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Relationship Type"}),n.jsxs("select",{value:AA,onChange:H=>dA(H.target.value),children:[n.jsx("option",{value:"association",children:"Association"}),n.jsx("option",{value:"include",children:"Include"}),n.jsx("option",{value:"extend",children:"Extend"}),n.jsx("option",{value:"generalization",children:"Generalization"})]})]}),n.jsxs("button",{onClick:le,disabled:!v||!M,className:"add-btn",children:[n.jsx(no,{size:16})," Add Relationship"]})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Current Relationships"}),n.jsx("div",{className:"relationship-list",children:o.map(H=>{let wA,HA,GA="",j="";return wA=r.find(nA=>nA.id===H.source),wA?GA=wA.name:(wA=s.find(nA=>nA.id===H.source),wA&&(GA=wA.name)),HA=r.find(nA=>nA.id===H.target),HA?j=HA.name:(HA=s.find(nA=>nA.id===H.target),HA&&(j=HA.name)),!wA||!HA?null:n.jsxs("div",{className:"list-item",children:[n.jsxs("div",{className:"item-name",children:[GA," → ",j," (",H.type,")"]}),n.jsx("button",{onClick:()=>we(H.id),className:"delete-btn",children:n.jsx(Fe,{size:14})})]},H.id)})})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"System Boundary"}),n.jsxs("div",{className:"form-group",style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[n.jsxs("label",{children:[n.jsx("input",{type:"checkbox",checked:C.visible,onChange:H=>he({visible:H.target.checked}),style:{width:"15px"}}),"Show System Boundary"]}),n.jsx("button",{onClick:Se,className:"add-btn",style:{marginTop:"8px",width:"40%",height:"32px"},children:"Center All"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Width"}),n.jsx("input",{type:"number",value:C.width,onChange:H=>he({width:parseInt(H.target.value)||600})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Height"}),n.jsx("input",{type:"number",value:C.height,onChange:H=>he({height:parseInt(H.target.value)||400})})]}),n.jsx("button",{onClick:()=>{const H=Math.max(1,Math.floor(C.width/200)),wA=s.map((GA,j)=>({...GA,x:C.x+25+j%H*200,y:C.y+25+Math.floor(j/H)*80})),HA=r.map((GA,j)=>({...GA,x:C.x-100,y:C.y+10+j*120}));d({...i,useCases:wA,actors:HA})},className:"add-btn",children:"Auto Arrange"})]})]}),n.jsx("div",{className:"diagram-canvas-container",ref:TA,onMouseDown:Te,children:n.jsxs("div",{className:"diagram-canvas",ref:L,style:{transform:`scale(${QA}) translate(${qA.x/QA}px, ${qA.y/QA}px)`,transformOrigin:"0 0",width:`${gA.width}px`,height:`${gA.height}px`,position:"relative"},children:[de(),C.visible&&n.jsx("div",{className:"system-boundary",style:{left:`${C.x}px`,top:`${C.y}px`,width:`${C.width}px`,height:`${C.height}px`},onMouseDown:H=>ge(H),children:n.jsx("div",{className:"system-boundary-label",children:"System"})}),o.map(Ge),r.map(Be),s.map(_e)]})})]}):n.jsxs("div",{className:"json-editor",children:[n.jsx("div",{className:"json-actions",children:n.jsxs("button",{onClick:()=>{const H=document.createElement("input");H.type="file",H.accept=".json",H.onchange=fA,H.click()},className:"import-btn",children:[n.jsx(wn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:pA,onChange:H=>JA(H.target.value),className:"json-textarea"}),n.jsxs("button",{onClick:MA,className:"import-btn",children:[n.jsx(ya,{size:16})," Apply JSON"]})]}),n.jsx("style",{jsx:!0,children:`
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

        .system-boundary {
          position: absolute;
          border: 2px dashed #64748b;
          background: rgba(248, 250, 252, 0.8);
          cursor: move;
          z-index: 1;
        }

        .system-boundary:hover {
          border-color: #3b82f6;
          background: rgba(59, 130, 246, 0.05);
        }

        .system-boundary-label {
          position: absolute;
          top: -25px;
          left: 10px;
          background: white;
          padding: 2px 8px;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
        }

        .diagram-canvas {
          /* Update existing style */
          min-width: ${gA.width}px;
          min-height: ${gA.height}px;
          background: #f8fafc;
          position: relative;
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
      `})]})},tQ=({sequenceDiagrams:i,onCreateSequenceDiagram:r,onLoadSequenceDiagram:s,onDeleteSequenceDiagram:o})=>{const[d,u]=k.useState(!1);return n.jsxs("div",{className:"sequence-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(Db,{size:48})}),n.jsx("h2",{children:"Sequence Diagram Designer"}),n.jsx("p",{children:"Model interactions between objects in sequential order"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(At,{size:16})," New Diagram"]})}),i.length>0&&n.jsxs("div",{className:"diagram-list",children:[n.jsx("h3",{children:"Your Sequence Diagrams"}),i.map(f=>n.jsxs("div",{className:"diagram-card",onClick:()=>s(f),children:[n.jsxs("div",{className:"diagram-card-content",children:[n.jsx("div",{className:"diagram-card-name",children:f.name}),n.jsxs("div",{className:"diagram-card-meta",children:[n.jsx("span",{children:new Date(f.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[f.participants?.length||0," participants • ",f.messages?.length||0," messages"]})]})]}),n.jsxs("div",{className:"diagram-card-actions",children:[n.jsx("button",{onClick:x=>{x.stopPropagation(),s(f)},className:"open-btn",children:n.jsx(_n,{size:16})}),n.jsx("button",{onClick:x=>{x.stopPropagation(),confirm("Delete this diagram?")&&o(f.id)},className:"delete-btn",children:n.jsx(Fe,{size:16})})]})]},f.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Sequence Diagram"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Diagram Name"}),n.jsx("input",{type:"text",placeholder:"e.g., User Login Process",id:"diagramName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const f=document.getElementById("diagramName").value;f.trim()&&(r(f),u(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},nQ=({sequenceDiagram:i,participants:r=[],messages:s=[],onUpdateSequenceDiagram:o,onBack:d})=>{const[u,f]=k.useState(""),[x,g]=k.useState(""),[B,v]=k.useState(""),[S,M]=k.useState(""),[oA,AA]=k.useState("sync"),[dA,DA]=k.useState("actor"),[NA,pA]=k.useState("editor"),[JA,mA]=k.useState(""),[bA,G]=k.useState(1),[OA,V]=k.useState(150),lA=k.useRef(null);k.useEffect(()=>{mA(JSON.stringify({participants:r,messages:s},null,2))},[r,s]);const _A=()=>{if(!u.trim())return;const L=[...r,{id:Date.now(),name:u,type:dA}];o({...i,participants:L}),f("")},XA=()=>{if(!x.trim()||!B||!S)return;const L=r.find(BA=>BA.id===parseInt(B)),TA=r.find(BA=>BA.id===parseInt(S));if(!L||!TA)return;const kA=[...s,{id:Date.now(),text:x,from:L.id,to:TA.id,type:oA,order:s.length+1,activationStart:oA==="sync"||oA==="create",activationEnd:!1}];o({...i,messages:kA}),g(""),v(""),M("")},QA=L=>{const TA=r.filter(z=>z.id!==L),BA=s.filter(z=>!(z.from===L||z.to===L)).map((z,q)=>({...z,order:q+1}));o({...i,participants:TA,messages:BA})},LA=L=>{const kA=s.filter(BA=>BA.id!==L).map((BA,z)=>({...BA,order:z+1}));o({...i,messages:kA})},qA=L=>{const TA=s.findIndex(BA=>BA.id===L);if(TA<=0)return;const kA=[...s];[kA[TA-1],kA[TA]]=[kA[TA],kA[TA-1]],kA.forEach((BA,z)=>{BA.order=z+1}),o({...i,messages:kA})},WA=L=>{const TA=s.findIndex(BA=>BA.id===L);if(TA>=s.length-1)return;const kA=[...s];[kA[TA],kA[TA+1]]=[kA[TA+1],kA[TA]],kA.forEach((BA,z)=>{BA.order=z+1}),o({...i,messages:kA})},Y=()=>JSON.stringify({participants:r,messages:s},null,2),xA=()=>{navigator.clipboard.writeText(Y())},EA=()=>{try{const L=JSON.parse(JA);Array.isArray(L.participants)&&Array.isArray(L.messages)?o({...i,participants:L.participants,messages:L.messages}):alert("Invalid JSON format. Expected participants and messages arrays.")}catch(L){alert("Error parsing JSON: "+L.message)}},PA=L=>{const TA=L.target.files[0];if(!TA)return;const kA=new FileReader;kA.onload=BA=>{mA(BA.target.result)},kA.readAsText(TA)},C=()=>{if(!lA.current)return;const L=lA.current.style.transform;lA.current.style.transform="scale(1) translate(0px, 0px)";const TA=document.createElement("canvas"),kA=lA.current.getBoundingClientRect();TA.width=kA.width*2,TA.height=kA.height*2,Kr(()=>Promise.resolve().then(()=>Or),void 0).then(BA=>{BA.default(lA.current,{backgroundColor:"#ffffff",scale:2,useCORS:!0,logging:!0,allowTaint:!0}).then(z=>{const q=document.createElement("a");q.download=`${i.name||"sequence-diagram"}.png`,q.href=z.toDataURL("image/png"),q.click(),lA.current.style.transform=L}).catch(z=>{console.error("Error generating image:",z),lA.current.style.transform=L})})},Z=L=>60+L*OA,gA=(L,TA)=>{const kA=Z(TA);return n.jsx("div",{className:"participant-header",style:{left:`${kA-60}px`,top:"40px",width:"120px",height:"60px"},children:L.type==="actor"?n.jsxs("div",{className:"participant-actor",children:[n.jsx("div",{className:"actor-circle",children:n.jsx(gw,{size:16})}),n.jsx("div",{className:"actor-name",children:L.name})]}):n.jsx("div",{className:`participant-box ${L.type||"service"}`,children:n.jsx("span",{className:"participant-name",children:L.name})})},`header-${L.id}`)},hA=(L,TA)=>{const kA=Z(TA),BA=110,z=Math.max(220+s.length*50,420);return n.jsx("div",{className:"lifeline",style:{left:`${kA-1}px`,top:`${BA}px`,width:"2px",height:`${z-BA}px`}},`lifeline-${L.id}`)},jA=(L,TA)=>{const kA=Z(TA),BA=[],z=[];if(s.sort((q,RA)=>q.order-RA.order).forEach((q,RA)=>{const FA=150+RA*50;if((q.to===L&&(q.type==="sync"||q.type==="create")||q.from===L&&q.type==="self")&&z.push({start:FA,messageId:q.id}),q.from===L&&q.type==="return"){const IA=z.pop();IA&&BA.push({...IA,end:FA+20,height:FA+20-IA.start})}}),z.length>0){const q=150+s.length*50;z.forEach(RA=>{BA.push({...RA,end:q,height:q-RA.start})})}return BA.map((q,RA)=>n.jsx("div",{className:"activation-box",style:{left:`${kA-8}px`,top:`${q.start}px`,width:"16px",height:`${q.height-23}px`}},`activation-${L}-${RA}`))},YA=(L,TA)=>{const kA=r.findIndex(we=>we.id===L.from),BA=r.findIndex(we=>we.id===L.to);if(kA===-1||BA===-1)return null;const z=150+TA*50,q=Z(kA),RA=Z(BA),FA=L.from===L.to,rA=(we=>{switch(we){case"async":return{stroke:"#3b82f6",strokeDasharray:"5,5",arrowType:"open"};case"return":return{stroke:"#10b981",strokeDasharray:"8,4",arrowType:"open"};case"create":return{stroke:"#f59e0b",strokeDasharray:"none",arrowType:"filled"};case"destroy":return{stroke:"#ef4444",strokeDasharray:"none",arrowType:"filled"};case"self":return{stroke:"#8b5cf6",strokeDasharray:"none",arrowType:"filled"};default:return{stroke:"#64748b",strokeDasharray:"none",arrowType:"filled"}}})(L.type);if(FA){const we=Math.max(40,OA*.3);return n.jsx("div",{className:"message-container",children:n.jsxs("svg",{className:"message-svg",style:{overflow:"visible"},children:[n.jsx("path",{d:`M ${q} ${z} L ${q+we} ${z} L ${q+we} ${z+20} L ${q} ${z+20}`,fill:"none",stroke:rA.stroke,strokeWidth:"2",strokeDasharray:rA.strokeDasharray}),n.jsx("polygon",{points:`${q-8},${z+10} ${q},${z+20} ${q-8},${z+30}`,fill:rA.stroke}),n.jsx("text",{x:q+we+10,y:z+15,fontSize:"12",fill:rA.stroke,className:"message-text",children:L.text})]})},L.id)}const ae=q<RA?1:-1,re=ae>0?RA-8:RA+8,le=(q+RA)/2;return n.jsx("div",{className:"message-container",children:n.jsxs("svg",{className:"message-svg",style:{overflow:"visible"},children:[n.jsx("line",{x1:q,y1:z,x2:RA,y2:z,stroke:rA.stroke,strokeWidth:"2",strokeDasharray:rA.strokeDasharray}),rA.arrowType==="filled"?n.jsx("polygon",{points:ae>0?`${re},${z-6} ${RA},${z} ${re},${z+6}`:`${re},${z-6} ${RA},${z} ${re},${z+6}`,fill:rA.stroke}):n.jsx("path",{d:ae>0?`M ${re},${z-6} L ${RA},${z} L ${re},${z+6}`:`M ${re},${z-6} L ${RA},${z} L ${re},${z+6}`,fill:"none",stroke:rA.stroke,strokeWidth:"2"}),n.jsx("text",{x:le,y:z-8,textAnchor:"middle",fontSize:"12",fill:rA.stroke,className:"message-text",children:L.text}),n.jsx("text",{x:q+(ae>0?-15:15),y:z-8,textAnchor:"middle",fontSize:"10",fill:"#64748b",className:"message-order",children:L.order})]})},L.id)};return n.jsxs("div",{className:"sequence-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:d,className:"back-btn",children:[n.jsx(Rn,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"spacing-controls",children:[n.jsx("label",{children:"Spacing:"}),n.jsx("button",{onClick:()=>V(Math.max(100,OA-25)),disabled:OA<=100,className:"spacing-btn",children:n.jsx(cu,{size:14})}),n.jsxs("span",{className:"spacing-value",children:[OA,"px"]}),n.jsx("button",{onClick:()=>V(Math.min(300,OA+25)),disabled:OA>=300,className:"spacing-btn",children:n.jsx(At,{size:14})})]}),n.jsxs("div",{className:"zoom-controls",children:[n.jsx("button",{onClick:()=>G(Math.max(.5,bA-.1)),disabled:bA<=.5,className:"zoom-btn",children:"-"}),n.jsxs("span",{className:"zoom-level",children:[Math.round(bA*100),"%"]}),n.jsx("button",{onClick:()=>G(Math.min(2,bA+.1)),disabled:bA>=2,className:"zoom-btn",children:"+"})]}),n.jsxs("div",{className:"export-buttons",children:[n.jsxs("button",{onClick:C,className:"export-btn",children:[n.jsx(Bn,{size:16})," Export Image"]}),n.jsxs("button",{onClick:xA,className:"export-btn",children:[n.jsx(wa,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const L=new Blob([Y()],{type:"application/json"}),TA=URL.createObjectURL(L),kA=document.createElement("a");kA.href=TA,kA.download=`${i.name||"sequence-diagram"}.json`,document.body.appendChild(kA),kA.click(),document.body.removeChild(kA),URL.revokeObjectURL(TA)},className:"export-btn",children:[n.jsx(bn,{size:16})," Export JSON"]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${NA==="editor"?"active":""}`,onClick:()=>pA("editor"),children:"Diagram Editor"}),n.jsx("button",{className:`tab ${NA==="json"?"active":""}`,onClick:()=>pA("json"),children:"JSON Editor"})]}),NA==="editor"?n.jsxs("div",{className:"diagram-container",children:[n.jsxs("div",{className:"diagram-sidebar",children:[n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Participants"}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",value:u,onChange:L=>f(L.target.value),placeholder:"New participant name",onKeyPress:L=>L.key==="Enter"&&_A()})}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Type"}),n.jsxs("select",{value:dA,onChange:L=>DA(L.target.value),children:[n.jsx("option",{value:"actor",children:"Actor (User)"}),n.jsx("option",{value:"service",children:"Service"}),n.jsx("option",{value:"database",children:"Database"}),n.jsx("option",{value:"external",children:"External System"})]})]}),n.jsxs("button",{onClick:_A,className:"add-btn",children:[n.jsx(At,{size:16})," Add Participant"]}),n.jsx("div",{className:"participant-list",children:r.map(L=>n.jsxs("div",{className:"list-item",children:[n.jsxs("div",{className:"item-info",children:[n.jsx("div",{className:"item-name",children:L.name}),n.jsx("div",{className:"item-type",children:L.type})]}),n.jsx("button",{onClick:()=>QA(L.id),className:"delete-btn",children:n.jsx(Fe,{size:14})})]},L.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Messages"}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",value:x,onChange:L=>g(L.target.value),placeholder:"Message text",onKeyPress:L=>L.key==="Enter"&&XA()})}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"From"}),n.jsxs("select",{value:B||"",onChange:L=>v(L.target.value),children:[n.jsx("option",{value:"",children:"Select participant"}),r.map(L=>n.jsx("option",{value:L.id,children:L.name},L.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"To"}),n.jsxs("select",{value:S||"",onChange:L=>M(L.target.value),children:[n.jsx("option",{value:"",children:"Select participant"}),r.map(L=>n.jsx("option",{value:L.id,children:L.name},L.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Message Type"}),n.jsxs("select",{value:oA,onChange:L=>AA(L.target.value),children:[n.jsx("option",{value:"sync",children:"Synchronous Call"}),n.jsx("option",{value:"async",children:"Asynchronous Call"}),n.jsx("option",{value:"return",children:"Return Message"}),n.jsx("option",{value:"create",children:"Create Message"}),n.jsx("option",{value:"destroy",children:"Destroy Message"}),n.jsx("option",{value:"self",children:"Self Call"})]})]}),n.jsxs("button",{onClick:XA,disabled:!x.trim()||!B||!S,className:"add-btn",children:[n.jsx(no,{size:16})," Add Message"]})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Message Sequence"}),n.jsx("div",{className:"message-list",children:s.sort((L,TA)=>L.order-TA.order).map(L=>{const TA=r.find(BA=>BA.id===L.from),kA=r.find(BA=>BA.id===L.to);return!TA||!kA?null:n.jsxs("div",{className:"message-item",children:[n.jsxs("div",{className:"message-info",children:[n.jsxs("div",{className:"message-order",children:[L.order,"."]}),n.jsxs("div",{className:"message-text",children:[TA.name," → ",kA.name,": ",L.text]}),n.jsx("div",{className:`message-type ${L.type}`,children:L.type})]}),n.jsxs("div",{className:"message-actions",children:[n.jsx("button",{onClick:()=>qA(L.id),disabled:L.order===1,className:"move-btn",children:"↑"}),n.jsx("button",{onClick:()=>WA(L.id),disabled:L.order===s.length,className:"move-btn",children:"↓"}),n.jsx("button",{onClick:()=>LA(L.id),className:"delete-btn",children:n.jsx(Fe,{size:14})})]})]},L.id)})})]})]}),n.jsx("div",{className:"diagram-canvas-wrapper",children:n.jsxs("div",{className:"diagram-canvas",ref:lA,style:{transform:`scale(${bA})`,transformOrigin:"top left"},children:[r.map((L,TA)=>gA(L,TA)),r.map((L,TA)=>hA(L,TA)),r.map((L,TA)=>jA(L.id,TA)),s.sort((L,TA)=>L.order-TA.order).map((L,TA)=>YA(L,TA))]})})]}):n.jsxs("div",{className:"json-editor",children:[n.jsx("div",{className:"json-actions",children:n.jsxs("button",{onClick:()=>{const L=document.createElement("input");L.type="file",L.accept=".json",L.onchange=PA,L.click()},className:"import-btn",children:[n.jsx(wn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:JA,onChange:L=>mA(L.target.value),className:"json-textarea"}),n.jsxs("button",{onClick:EA,className:"import-btn",children:[n.jsx(ya,{size:16})," Apply JSON"]})]}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},aQ=({architectureDiagrams:i,onCreateArchitectureDiagram:r,onLoadArchitectureDiagram:s,onDeleteArchitectureDiagram:o})=>{const[d,u]=k.useState(!1);return n.jsxs("div",{className:"architecture-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(ux,{size:48})}),n.jsx("h2",{children:"Architecture Diagram Designer"}),n.jsx("p",{children:"Model system components and their relationships"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(At,{size:16})," New Diagram"]})}),i.length>0&&n.jsxs("div",{className:"diagram-list",children:[n.jsx("h3",{children:"Your Architecture Diagrams"}),i.map(f=>n.jsxs("div",{className:"diagram-card",onClick:()=>s(f),children:[n.jsxs("div",{className:"diagram-card-content",children:[n.jsx("div",{className:"diagram-card-name",children:f.name}),n.jsxs("div",{className:"diagram-card-meta",children:[n.jsx("span",{children:new Date(f.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[f.components?.length||0," components • ",f.connections?.length||0," connections"]})]})]}),n.jsxs("div",{className:"diagram-card-actions",children:[n.jsx("button",{onClick:x=>{x.stopPropagation(),s(f)},className:"open-btn",children:n.jsx(_n,{size:16})}),n.jsx("button",{onClick:x=>{x.stopPropagation(),confirm("Delete this diagram?")&&o(f.id)},className:"delete-btn",children:n.jsx(Fe,{size:16})})]})]},f.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Architecture Diagram"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Diagram Name"}),n.jsx("input",{type:"text",placeholder:"e.g., System Architecture",id:"diagramName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const f=document.getElementById("diagramName").value;f.trim()&&(r(f),u(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},Ki=[{id:"service",name:"Service",icon:n.jsx(aw,{size:20}),color:"#6366f1"},{id:"database",name:"Database",icon:n.jsx(ub,{size:20}),color:"#10b981"},{id:"compute",name:"Compute",icon:n.jsx(cb,{size:20}),color:"#f59e0b"},{id:"storage",name:"Storage",icon:n.jsx(Qb,{size:20}),color:"#8b5cf6"},{id:"network",name:"Network",icon:n.jsx(Rb,{size:20}),color:"#3b82f6"},{id:"cloud",name:"Cloud",icon:n.jsx(rb,{size:20}),color:"#ec4899"},{id:"router",name:"Router",icon:n.jsx(ew,{size:20}),color:"#14b8a6"},{id:"user",name:"User",icon:n.jsx(du,{size:20}),color:"#84cc16"},{id:"device",name:"Device",icon:n.jsx(sw,{size:20}),color:"#f97316"},{id:"internet",name:"Internet",icon:n.jsx(wb,{size:20}),color:"#06b6d4"},{id:"security",name:"Security",icon:n.jsx(iw,{size:20}),color:"#ef4444"},{id:"module",name:"Module",icon:n.jsx(cx,{size:20}),color:"#0ea5e9"},{id:"application",name:"Application",icon:n.jsx(VB,{size:20}),color:"#9333ea"},{id:"layer",name:"Layer",icon:n.jsx(ux,{size:20}),color:"#facc15"},{id:"gateway",name:"Gateway",icon:n.jsx(Bw,{size:20}),color:"#22d3ee"},{id:"custom",name:"Custom",icon:n.jsx(At,{size:20}),color:"#64748b"}],rQ=({architectureDiagram:i={name:"Architecture Diagram",components:[],connections:[],groups:[]},components:r=[],connections:s=[],groups:o=[],onUpdateArchitectureDiagram:d=()=>{},onBack:u=()=>{}})=>{const[f,x]=k.useState(""),[g,B]=k.useState(""),[v,S]=k.useState(""),[M,oA]=k.useState(""),[AA,dA]=k.useState("solid"),[DA,NA]=k.useState("directed"),[pA,JA]=k.useState("editor"),[mA,bA]=k.useState(""),[G,OA]=k.useState(null),[V,lA]=k.useState({x:0,y:0}),[_A,XA]=k.useState({}),[QA,LA]=k.useState("service"),[qA,WA]=k.useState(!1),[Y,xA]=k.useState(""),[EA,PA]=k.useState("file"),[C,Z]=k.useState(null),[gA,hA]=k.useState(""),[jA,YA]=k.useState(""),[L,TA]=k.useState([]),[kA,BA]=k.useState([]),[z,q]=k.useState(1),[RA,FA]=k.useState({width:2e3,height:2e3}),IA=k.useRef(null),rA=k.useRef(null),ae=r.length>0?r:i.components||[],re=s.length>0?s:i.connections||[],le=o.length>0?o:i.groups||[];k.useEffect(()=>{bA(JSON.stringify({components:ae,connections:re,groups:le},null,2))},[ae,re,le]),k.useEffect(()=>{if(ae.length===0&&le.length===0)return;let j=1/0,nA=-1/0,y=1/0,I=-1/0;ae.forEach(E=>{j=Math.min(j,E.x),nA=Math.max(nA,E.x+E.width),y=Math.min(y,E.y),I=Math.max(I,E.y+E.height)}),le.forEach(E=>{j=Math.min(j,E.x),nA=Math.max(nA,E.x+E.width),y=Math.min(y,E.y),I=Math.max(I,E.y+E.height)});const _=200,b=Math.max(2e3,nA-j+_*2),Q=Math.max(2e3,I-y+_*2);FA({width:b,height:Q})},[ae,le]);const we=(j,nA=new Set)=>{if(nA.has(j))return 0;nA.add(j);let y=0;return le.forEach(I=>{I.groupIds&&I.groupIds.includes(j)&&(y=Math.max(y,we(I.id,nA)+1))}),y},Ne=()=>{if(!f.trim())return;const j=Ki.find(y=>y.id===QA)||Ki[0],nA=[...ae,{id:Date.now(),name:f,type:QA,x:50+Math.random()*200,y:50+Math.random()*200,width:120,height:120,color:j.color,imageUrl:Y}];d({...i,components:nA,connections:re,groups:le}),x(""),xA(""),WA(!1)},se=()=>{if(!jA.trim())return;if(L.length===0&&kA.length===0){alert("Please select at least one component or group to create a group.");return}let j=1/0,nA=-1/0,y=1/0,I=-1/0;L.forEach(E=>{j=Math.min(j,E.x),nA=Math.max(nA,E.x+E.width),y=Math.min(y,E.y),I=Math.max(I,E.y+E.height)}),kA.forEach(E=>{j=Math.min(j,E.x),nA=Math.max(nA,E.x+E.width),y=Math.min(y,E.y),I=Math.max(I,E.y+E.height)}),j===1/0&&(j=100,nA=300,y=100,I=200);const _=40,b={id:Date.now(),name:jA,componentIds:L.map(E=>E.id),groupIds:kA.map(E=>E.id),x:j-_,y:y-_,width:Math.max(200,nA-j+_*2),height:Math.max(150,I-y+_*2),color:"#e2e8f0"},Q=[...le,b];d({...i,components:ae,connections:re,groups:Q}),YA(""),TA([]),BA([])},Qe=()=>{if(!v||!M)return;const j=ae.find(I=>I.id===parseInt(v)),nA=ae.find(I=>I.id===parseInt(M));if(!j||!nA)return;const y=[...re,{id:Date.now(),from:j.id,to:nA.id,type:AA,direction:DA,label:g||"",color:"#64748b"}];d({...i,components:ae,connections:y,groups:le}),B(""),S(""),oA("")},lt=j=>{const nA=ae.filter(_=>_.id!==j),y=re.filter(_=>!(_.from===j||_.to===j)),I=le.map(_=>({..._,componentIds:_.componentIds.filter(b=>b!==j)})).filter(_=>_.componentIds.length>0||_.groupIds&&_.groupIds.length>0);d({...i,components:nA,connections:y,groups:I})},We=j=>{const nA=re.filter(y=>y.id!==j);d({...i,components:ae,connections:nA,groups:le})},nt=j=>{const nA=le.filter(y=>y.id!==j);d({...i,components:ae,connections:re,groups:nA})},Te=(j,nA,y=!1)=>{j.preventDefault(),j.stopPropagation();const I=IA.current.getBoundingClientRect(),_=(j.clientX-I.left)/z,b=(j.clientY-I.top)/z;if(OA({...nA,isGroup:y}),lA({x:_-nA.x,y:b-nA.y}),y){const Q={};nA.componentIds&&nA.componentIds.forEach(E=>{const D=ae.find(m=>m.id===E);D&&(Q[`component_${E}`]={x:D.x,y:D.y})}),nA.groupIds&&nA.groupIds.forEach(E=>{const D=le.find(m=>m.id===E);D&&(Q[`group_${E}`]={x:D.x,y:D.y})}),XA(Q)}},xe=(j,nA)=>{j.stopPropagation(),j.shiftKey?TA(y=>y.some(_=>_.id===nA.id)?y.filter(_=>_.id!==nA.id):[...y,nA]):(TA([nA]),BA([]))},K=(j,nA)=>{j.stopPropagation(),j.shiftKey?BA(y=>y.some(_=>_.id===nA.id)?y.filter(_=>_.id!==nA.id):[...y,nA]):(BA([nA]),TA([]))},uA=k.useCallback(j=>{if(!G)return;const nA=IA.current.getBoundingClientRect(),y=Math.max(0,(j.clientX-nA.left)/z-V.x),I=Math.max(0,(j.clientY-nA.top)/z-V.y);if(G.isGroup){const _=y-G.x,b=I-G.y,Q=ae.map(D=>{if(G.componentIds&&G.componentIds.includes(D.id)){const m=_A[`component_${D.id}`];if(m)return{...D,x:Math.max(0,m.x+_),y:Math.max(0,m.y+b)}}return D}),E=le.map(D=>{if(D.id===G.id)return{...D,x:Math.max(0,y),y:Math.max(0,I)};if(G.groupIds&&G.groupIds.includes(D.id)){const m=_A[`group_${D.id}`];if(m)return{...D,x:Math.max(0,m.x+_),y:Math.max(0,m.y+b)}}return D});d({...i,components:Q,connections:re,groups:E})}else{const _=ae.map(b=>b.id===G.id?{...b,x:Math.max(0,y),y:Math.max(0,I)}:b);d({...i,components:_,connections:re,groups:le})}},[G,V,_A,ae,re,le,i,d,z]),KA=k.useCallback(()=>{OA(null),XA({})},[]);k.useEffect(()=>{if(G)return document.addEventListener("mousemove",uA),document.addEventListener("mouseup",KA),()=>{document.removeEventListener("mousemove",uA),document.removeEventListener("mouseup",KA)}},[G,uA,KA]);const O=j=>{Z(j.id),hA(j.name)},sA=()=>{if(!C||!gA.trim())return;const j=ae.map(nA=>nA.id===C?{...nA,name:gA}:nA);d({...i,components:j,connections:re,groups:le}),Z(null),hA("")},MA=j=>{j.target===IA.current&&(TA([]),BA([]))},fA=()=>JSON.stringify({components:ae,connections:re,groups:le},null,2),CA=()=>{navigator.clipboard.writeText(fA())},de=()=>{try{const j=JSON.parse(mA);Array.isArray(j.components)&&Array.isArray(j.connections)?d({...i,components:j.components||[],connections:j.connections||[],groups:j.groups||[]}):alert("Invalid JSON format. Expected components and connections arrays.")}catch(j){alert("Error parsing JSON: "+j.message)}},Be=j=>{const nA=j.target.files[0];if(!nA)return;const y=new FileReader;y.onload=I=>{bA(I.target.result)},y.readAsText(nA)},he=j=>{const nA=j.target.files[0];if(!nA)return;const y=new FileReader;y.onload=I=>{xA(I.target.result)},y.readAsDataURL(nA)},ge=j=>{xA(j.target.value)},ye=()=>{q(j=>Math.min(2,j+.1))},Se=()=>{q(j=>Math.max(.5,j-.1))},_e=()=>{q(1)},Ge=()=>{if(!IA.current)return;let j=1/0,nA=-1/0,y=1/0,I=-1/0;if(ae.forEach(U=>{j=Math.min(j,U.x),nA=Math.max(nA,U.x+U.width),y=Math.min(y,U.y),I=Math.max(I,U.y+U.height)}),le.forEach(U=>{j=Math.min(j,U.x),nA=Math.max(nA,U.x+U.width),y=Math.min(y,U.y),I=Math.max(I,U.y+U.height)}),re.forEach(U=>{const $=ae.find(zA=>zA.id===U.from),W=ae.find(zA=>zA.id===U.to);if($&&W){const{fromX:zA,fromY:iA,toX:p,toY:T}=H($,W);j=Math.min(j,zA,p),nA=Math.max(nA,zA,p),y=Math.min(y,iA,T),I=Math.max(I,iA,T)}}),j===1/0||ae.length===0){alert("No diagram content to export");return}const _=40,b=Math.max(0,j-_),Q=Math.max(0,y-_),E=nA-j+_*2,D=I-y+_*2,m=document.createElement("div");m.style.width=`${E}px`,m.style.height=`${D}px`,m.style.position="fixed",m.style.top="0",m.style.left="0",m.style.background="white",m.style.zIndex="99999",m.style.overflow="hidden",m.style.zIndex=-1;const F=IA.current.cloneNode(!0);F.style.position="absolute",F.style.left=`-${b}px`,F.style.top=`-${Q}px`,F.style.transform="none",F.style.width=`${RA.width}px`,F.style.height=`${RA.height}px`,m.appendChild(F),document.body.appendChild(m),Kr(()=>Promise.resolve().then(()=>Or),void 0).then(U=>{U.default(m,{backgroundColor:"#ffffff",scale:2,useCORS:!0,width:E,height:D,scrollX:0,scrollY:0}).then($=>{const W=document.createElement("a");W.download=`${i.name||"architecture-diagram"}.png`,W.href=$.toDataURL("image/png"),W.click(),document.body.removeChild(m)}).catch($=>{console.error("Error capturing image:",$),document.body.removeChild(m)})})},H=(j,nA)=>{const y=j.x+j.width/2,I=j.y+j.height/2,_=nA.x+nA.width/2,b=nA.y+nA.height/2,Q=_-y,E=b-I;let D,m;Math.abs(Q)>Math.abs(E)?(D=Q>0?j.x+j.width:j.x,m=I):(D=y,m=E>0?j.y+j.height:j.y);let F,U;return Math.abs(Q)>Math.abs(E)?(F=Q>0?nA.x:nA.x+nA.width,U=b):(F=_,U=E>0?nA.y:nA.y+nA.height),{fromX:D,fromY:m,toX:F,toY:U}},wA=j=>{const nA=Ki.find(_=>_.id===j.type)||Ki[0],y=L.some(_=>_.id===j.id),I=C===j.id;return n.jsxs("div",{className:"component",style:{position:"absolute",left:`${j.x}px`,top:`${j.y}px`,width:`${j.width}px`,height:`${j.height}px`,cursor:G?.id===j.id?"grabbing":"grab",outline:y?"3px dashed #3b82f6":"none",outlineOffset:"2px",zIndex:50,display:"flex",flexDirection:"column",background:"white",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",border:"2px solid #e2e8f0",overflow:"hidden",textAlign:"center",fontSize:"12px"},onMouseDown:_=>Te(_,j),onClick:_=>xe(_,j),onDoubleClick:()=>O(j),children:[n.jsx("div",{style:{width:"100%",height:"70%",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",background:"#f8fafc",borderRadius:"10px 10px 0 0"},children:j.imageUrl?n.jsx("img",{src:j.imageUrl,alt:j.name,style:{maxWidth:"90%",maxHeight:"90%",objectFit:"contain",borderRadius:"6px"}}):n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",color:j.color||nA.color},children:kB.cloneElement(nA.icon,{size:48})})}),n.jsx("div",{style:{width:"100%",height:"30%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"6px 0px",color:"white",fontWeight:"600",borderRadius:"0 0 10px 10px",backgroundColor:j.color||nA.color},children:I?n.jsx("input",{type:"text",value:gA,onChange:_=>hA(_.target.value),onBlur:sA,onKeyPress:_=>_.key==="Enter"&&sA(),autoFocus:!0,style:{width:"100%",border:"none",background:"rgba(255, 255, 255, 0.2)",color:"white",textAlign:"center",fontWeight:"600",outline:"none",fontSize:"11px"}}):n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{fontSize:"11px",fontWeight:"600",lineHeight:"1.2",marginBottom:"2px",wordBreak:"break-word",maxWidth:"100%"},children:j.name}),n.jsx("div",{style:{fontSize:"9px",opacity:"0.9",fontWeight:"500"},children:nA.name})]})})]},j.id)},HA=j=>{if(!j.componentIds&&!j.groupIds)return null;const nA=ae.filter(Q=>j.componentIds&&j.componentIds.includes(Q.id)),y=le.filter(Q=>j.groupIds&&j.groupIds.includes(Q.id)),I=kA.some(Q=>Q.id===j.id),b=10+we(j.id)*5;return n.jsxs("div",{className:"group",style:{position:"absolute",left:`${j.x}px`,top:`${j.y}px`,width:`${j.width}px`,height:`${j.height}px`,backgroundColor:"rgba(226, 232, 240, 0.3)",border:"2px dashed #94a3b8",borderRadius:"12px",cursor:G?.id===j.id?"grabbing":"grab",outline:I?"3px dashed #8b5cf6":"none",outlineOffset:"2px",zIndex:b,paddingTop:"40px",boxSizing:"border-box",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)",pointerEvents:"auto"},onMouseDown:Q=>Te(Q,j,!0),onClick:Q=>K(Q,j),children:[n.jsxs("div",{style:{position:"absolute",top:"8px",left:"12px",right:"12px",fontWeight:"700",fontSize:"14px",color:"#1e293b",display:"flex",justifyContent:"space-between",alignItems:"center",pointerEvents:"auto",zIndex:b+1},children:[n.jsx("span",{style:{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:j.name}),n.jsx("button",{onClick:Q=>{Q.stopPropagation(),nt(j.id)},style:{background:"rgba(239, 68, 68, 0.1)",border:"1px solid rgba(239, 68, 68, 0.3)",color:"#ef4444",cursor:"pointer",padding:"4px",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",zIndex:b+2},children:n.jsx(Fe,{size:14})})]}),n.jsxs("div",{style:{position:"absolute",bottom:"8px",left:"12px",fontSize:"11px",color:"#64748b",fontStyle:"italic",pointerEvents:"none"},children:[nA.length," component",nA.length!==1?"s":"",y.length>0&&`, ${y.length} group${y.length!==1?"s":""}`]})]},j.id)},GA=j=>{const nA=ae.find($=>$.id===j.from),y=ae.find($=>$.id===j.to);if(!nA||!y)return null;const{fromX:I,fromY:_,toX:b,toY:Q}=H(nA,y),E=b-I,D=Q-_,m=Math.atan2(D,E),F=10;let U={};return j.type==="dashed"?U={strokeDasharray:"5,5",stroke:j.color||"#64748b"}:j.type==="dotted"?U={strokeDasharray:"2,2",stroke:j.color||"#64748b"}:U={stroke:j.color||"#64748b"},n.jsxs("svg",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:49},children:[n.jsx("line",{x1:I,y1:_,x2:b,y2:Q,strokeWidth:"2",...U}),j.direction==="directed"&&n.jsx("polygon",{points:`
              ${b-F*Math.cos(m-Math.PI/6)},${Q-F*Math.sin(m-Math.PI/6)}
              ${b},${Q}
              ${b-F*Math.cos(m+Math.PI/6)},${Q-F*Math.sin(m+Math.PI/6)}
            `,fill:U.stroke||"#64748b"}),j.label&&n.jsx("text",{x:(I+b)/2,y:(_+Q)/2-10,textAnchor:"middle",fontSize:"12",fill:U.stroke||"#475569",children:j.label})]},j.id)};return n.jsxs("div",{style:{width:"100%",height:"100vh",display:"flex",flexDirection:"column",background:"#f8fafc",fontFamily:"Inter, system-ui, -apple-system, sans-serif"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"16px",background:"white",borderBottom:"1px solid #e2e8f0",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[n.jsxs("button",{onClick:u,style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s",background:"#f1f5f9",color:"#64748b",border:"1px solid #e2e8f0"},children:[n.jsx(Rn,{size:16})," Back"]}),n.jsx("h2",{style:{margin:"0 16px",fontSize:"20px",color:"#1e293b"},children:i.name}),n.jsx("div",{style:{flex:1}}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",marginRight:"16px",background:"#f1f5f9",borderRadius:"6px",padding:"4px"},children:[n.jsx("button",{onClick:Se,style:{width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",background:"none",border:"none",borderRadius:"4px",cursor:"pointer",color:"#64748b"},title:"Zoom Out",children:n.jsx(Ir,{size:16})}),n.jsxs("div",{style:{minWidth:"60px",textAlign:"center",fontSize:"14px",fontWeight:"500"},children:[Math.round(z*100),"%"]}),n.jsx("button",{onClick:ye,style:{width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",background:"none",border:"none",borderRadius:"4px",cursor:"pointer",color:"#64748b"},title:"Zoom In",children:n.jsx(Tr,{size:16})}),n.jsx("button",{onClick:_e,style:{width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",background:"none",border:"none",borderRadius:"4px",cursor:"pointer",color:"#64748b",marginLeft:"4px"},title:"Reset Zoom",children:n.jsx(kb,{size:16})})]}),n.jsxs("button",{onClick:Ge,style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s",background:"#8b5cf6",color:"white",border:"1px solid #8b5cf6"},children:[n.jsx(Bn,{size:16})," Export Image"]}),n.jsxs("button",{onClick:CA,style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s",background:"#8b5cf6",color:"white",border:"1px solid #8b5cf6"},children:[n.jsx(wa,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const j=new Blob([fA()],{type:"application/json"}),nA=URL.createObjectURL(j),y=document.createElement("a");y.href=nA,y.download=`${i.name||"architecture-diagram"}.json`,document.body.appendChild(y),y.click(),document.body.removeChild(y),URL.revokeObjectURL(nA)},style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s",background:"#8b5cf6",color:"white",border:"1px solid #8b5cf6"},children:[n.jsx(bn,{size:16})," Export JSON"]})]})]}),n.jsxs("div",{style:{display:"flex",borderBottom:"1px solid #e2e8f0",background:"white"},children:[n.jsx("button",{style:{padding:"12px 24px",border:"none",background:"none",cursor:"pointer",fontWeight:"500",color:pA==="editor"?"#8b5cf6":"#64748b",borderBottom:pA==="editor"?"2px solid #8b5cf6":"2px solid transparent"},onClick:()=>JA("editor"),children:"Diagram Editor"}),n.jsx("button",{style:{padding:"12px 24px",border:"none",background:"none",cursor:"pointer",fontWeight:"500",color:pA==="json"?"#8b5cf6":"#64748b",borderBottom:pA==="json"?"2px solid #8b5cf6":"2px solid transparent"},onClick:()=>JA("json"),children:"JSON Editor"})]}),pA==="editor"?n.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[n.jsxs("div",{style:{width:"320px",background:"white",borderRight:"1px solid #e2e8f0",display:"flex",flexDirection:"column",overflow:"auto"},children:[n.jsxs("div",{style:{padding:"16px",borderBottom:"1px solid #f1f5f9"},children:[n.jsx("h3",{style:{marginTop:"0",marginBottom:"12px",fontSize:"16px",color:"#1e293b"},children:"Components"}),n.jsx("div",{style:{marginBottom:"12px"},children:n.jsx("input",{type:"text",value:f,onChange:j=>x(j.target.value),placeholder:"Component name",onKeyPress:j=>j.key==="Enter"&&Ne(),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"}})}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"Component Type"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"8px",marginTop:"8px"},children:Ki.map(j=>n.jsx("button",{onClick:()=>LA(j.id),title:j.name,style:{width:"100%",aspectRatio:"1",display:"flex",alignItems:"center",justifyContent:"center",border:"none",borderRadius:"6px",cursor:"pointer",color:"white",transition:"all 0.2s",backgroundColor:j.color,outline:QA===j.id?"2px solid #1e293b":"none",outlineOffset:"2px"},children:j.icon},j.id))})]}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsxs("button",{onClick:()=>WA(!qA),style:{width:"100%",padding:"8px",background:"#e2e8f0",border:"none",borderRadius:"6px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",fontSize:"14px"},children:[n.jsx(Bn,{size:16})," ",Y?"Change Image":"Add Image (Optional)"]}),qA&&n.jsxs("div",{style:{marginTop:"8px"},children:[n.jsxs("div",{style:{display:"flex",marginBottom:"8px",borderBottom:"1px solid #e2e8f0"},children:[n.jsx("button",{onClick:()=>PA("file"),style:{flex:1,padding:"6px",border:"none",background:"none",cursor:"pointer",fontSize:"12px",color:EA==="file"?"#8b5cf6":"#64748b",borderBottom:EA==="file"?"2px solid #8b5cf6":"2px solid transparent"},children:"Upload File"}),n.jsx("button",{onClick:()=>PA("url"),style:{flex:1,padding:"6px",border:"none",background:"none",cursor:"pointer",fontSize:"12px",color:EA==="url"?"#8b5cf6":"#64748b",borderBottom:EA==="url"?"2px solid #8b5cf6":"2px solid transparent"},children:"URL"})]}),EA==="file"?n.jsx("input",{type:"file",accept:"image/*",onChange:he,style:{width:"100%",marginBottom:"8px"}}):n.jsx("input",{type:"text",value:Y,onChange:ge,placeholder:"Enter image URL",style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px",marginBottom:"8px"}}),Y&&n.jsxs("div",{style:{position:"relative",marginTop:"8px",display:"flex",justifyContent:"center"},children:[n.jsx("img",{src:Y,alt:"Preview",style:{maxWidth:"100%",maxHeight:"60px",borderRadius:"4px"}}),n.jsx("button",{onClick:()=>xA(""),style:{position:"absolute",top:"-8px",right:"-8px",width:"20px",height:"20px",borderRadius:"50%",background:"#fee2e2",color:"#ef4444",border:"none",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:n.jsx(Fe,{size:12})})]})]})]}),n.jsxs("button",{onClick:Ne,disabled:!f.trim(),style:{width:"100%",padding:"8px 16px",background:f.trim()?"#8b5cf6":"#ddd6fe",color:"white",border:"none",borderRadius:"6px",fontWeight:"500",cursor:f.trim()?"pointer":"not-allowed",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginTop:"8px"},children:[n.jsx(At,{size:16})," Add Component"]}),n.jsx("div",{style:{maxHeight:"200px",overflowY:"auto",marginTop:"12px"},children:ae.map(j=>n.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #f1f5f9"},children:[n.jsx("div",{style:{flex:1},children:n.jsx("div",{style:{fontSize:"14px",fontWeight:"500",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:j.name})}),n.jsx("button",{onClick:()=>lt(j.id),style:{width:"28px",height:"28px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:"#fee2e2",color:"#ef4444",border:"none",cursor:"pointer",marginLeft:"8px"},children:n.jsx(Fe,{size:14})})]},j.id))})]}),n.jsxs("div",{style:{padding:"16px",borderBottom:"1px solid #f1f5f9"},children:[n.jsx("h3",{style:{marginTop:"0",marginBottom:"12px",fontSize:"16px",color:"#1e293b"},children:"Groups"}),n.jsx("div",{style:{marginBottom:"12px"},children:n.jsx("input",{type:"text",value:jA,onChange:j=>YA(j.target.value),placeholder:"Group name",onKeyPress:j=>j.key==="Enter"&&se(),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"}})}),n.jsxs("button",{onClick:se,disabled:!jA.trim()||L.length===0&&kA.length===0,style:{width:"100%",padding:"8px 16px",background:!jA.trim()||L.length===0&&kA.length===0?"#ddd6fe":"#8b5cf6",color:"white",border:"none",borderRadius:"6px",fontWeight:"500",cursor:!jA.trim()||L.length===0&&kA.length===0?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[n.jsx(cx,{size:16})," Create Group"]}),n.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"#f1f5f9",borderRadius:"6px",fontSize:"12px"},children:[L.length>0||kA.length>0?n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{marginBottom:"8px",fontWeight:"500"},children:[L.length," component(s), ",kA.length," group(s) selected"]}),n.jsxs("button",{onClick:()=>{TA([]),BA([])},style:{display:"flex",alignItems:"center",gap:"4px",background:"none",border:"none",color:"#64748b",cursor:"pointer",fontSize:"12px",padding:"4px 8px",borderRadius:"4px"},children:[n.jsx(cu,{size:14})," Clear Selection"]})]}):n.jsx("div",{children:"No items selected"}),n.jsx("div",{style:{marginTop:"8px",color:"#64748b",fontStyle:"italic"},children:"Hold Shift + Click to select multiple items"})]}),n.jsx("div",{style:{maxHeight:"200px",overflowY:"auto",marginTop:"12px"},children:le.map(j=>n.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #f1f5f9"},children:[n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{fontSize:"14px",fontWeight:"500",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:j.name}),n.jsxs("div",{style:{fontSize:"12px",color:"#64748b",marginTop:"2px"},children:[j.componentIds?j.componentIds.length:0," components",j.groupIds&&j.groupIds.length>0&&`, ${j.groupIds.length} groups`]})]}),n.jsx("button",{onClick:()=>nt(j.id),style:{width:"28px",height:"28px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:"#fee2e2",color:"#ef4444",border:"none",cursor:"pointer",marginLeft:"8px"},children:n.jsx(Fe,{size:14})})]},j.id))})]}),n.jsxs("div",{style:{padding:"16px",borderBottom:"1px solid #f1f5f9"},children:[n.jsx("h3",{style:{marginTop:"0",marginBottom:"12px",fontSize:"16px",color:"#1e293b"},children:"Connections"}),n.jsx("div",{style:{marginBottom:"12px"},children:n.jsx("input",{type:"text",value:g,onChange:j=>B(j.target.value),placeholder:"Connection label (optional)",onKeyPress:j=>j.key==="Enter"&&Qe(),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"}})}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"From Component"}),n.jsxs("select",{value:v||"",onChange:j=>S(j.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"},children:[n.jsx("option",{value:"",children:"Select component"}),ae.map(j=>n.jsx("option",{value:j.id,children:j.name},j.id))]})]}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"To Component"}),n.jsxs("select",{value:M||"",onChange:j=>oA(j.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"},children:[n.jsx("option",{value:"",children:"Select component"}),ae.map(j=>n.jsx("option",{value:j.id,children:j.name},j.id))]})]}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"Connection Type"}),n.jsxs("select",{value:AA,onChange:j=>dA(j.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"},children:[n.jsx("option",{value:"solid",children:"Solid Line"}),n.jsx("option",{value:"dashed",children:"Dashed Line"}),n.jsx("option",{value:"dotted",children:"Dotted Line"})]})]}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"Direction"}),n.jsxs("select",{value:DA,onChange:j=>NA(j.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"},children:[n.jsx("option",{value:"directed",children:"Directed (with arrow)"}),n.jsx("option",{value:"undirected",children:"Undirected"})]})]}),n.jsxs("button",{onClick:Qe,disabled:!v||!M,style:{width:"100%",padding:"8px 16px",background:!v||!M?"#ddd6fe":"#8b5cf6",color:"white",border:"none",borderRadius:"6px",fontWeight:"500",cursor:!v||!M?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[n.jsx(no,{size:16})," Add Connection"]}),n.jsx("div",{style:{maxHeight:"200px",overflowY:"auto",marginTop:"12px"},children:re.map(j=>{const nA=ae.find(I=>I.id===j.from),y=ae.find(I=>I.id===j.to);return!nA||!y?null:n.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #f1f5f9"},children:[n.jsxs("div",{style:{flex:1},children:[n.jsxs("div",{style:{fontSize:"14px",fontWeight:"500",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[nA.name," → ",y.name]}),n.jsx("div",{style:{fontSize:"12px",color:"#64748b",marginTop:"2px"},children:j.type}),j.label&&n.jsx("div",{style:{fontSize:"12px",color:"#64748b",marginTop:"2px"},children:j.label})]}),n.jsx("button",{onClick:()=>We(j.id),style:{width:"28px",height:"28px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:"#fee2e2",color:"#ef4444",border:"none",cursor:"pointer",marginLeft:"8px"},children:n.jsx(Fe,{size:14})})]},j.id)})})]})]}),n.jsx("div",{ref:rA,style:{flex:1,overflow:"auto",position:"relative",background:"#f8fafc"},children:n.jsxs("div",{ref:IA,onClick:MA,style:{position:"absolute",width:`${RA.width}px`,height:`${RA.height}px`,background:"white",backgroundImage:"linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)",backgroundSize:"20px 20px",transform:`scale(${z})`,transformOrigin:"0 0"},children:[le.map(HA),re.map(GA),ae.map(wA)]})})]}):n.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,padding:"16px",background:"white"},children:[n.jsx("div",{style:{display:"flex",gap:"8px",marginBottom:"12px"},children:n.jsxs("button",{onClick:()=>{const j=document.createElement("input");j.type="file",j.accept=".json",j.onchange=Be,j.click()},style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",border:"none",background:"#8b5cf6",color:"white"},children:[n.jsx(wn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:mA,onChange:j=>bA(j.target.value),style:{flex:1,padding:"12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontFamily:"monospace",fontSize:"14px",resize:"none",marginBottom:"12px"}}),n.jsxs("button",{onClick:de,style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",border:"none",background:"#8b5cf6",color:"white",alignSelf:"flex-start"},children:[n.jsx(ya,{size:16})," Apply JSON"]})]})]})},iQ=({classDiagrams:i,onCreateClassDiagram:r,onLoadClassDiagram:s,onDeleteClassDiagram:o})=>{const[d,u]=k.useState(!1);return n.jsxs("div",{className:"class-diagram-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(lx,{size:48})}),n.jsx("h2",{children:"Class Diagram Designer"}),n.jsx("p",{children:"Model classes and their relationships in object-oriented design"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(At,{size:16})," New Diagram"]})}),i.length>0&&n.jsxs("div",{className:"diagram-list",children:[n.jsx("h3",{children:"Your Class Diagrams"}),i.map(f=>n.jsxs("div",{className:"diagram-card",onClick:()=>s(f),children:[n.jsxs("div",{className:"diagram-card-content",children:[n.jsx("div",{className:"diagram-card-name",children:f.name}),n.jsxs("div",{className:"diagram-card-meta",children:[n.jsx("span",{children:new Date(f.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[f.classes?.length||0," classes • ",f.relationships?.length||0," relationships"]})]})]}),n.jsxs("div",{className:"diagram-card-actions",children:[n.jsx("button",{onClick:x=>{x.stopPropagation(),s(f)},className:"open-btn",children:n.jsx(_n,{size:16})}),n.jsx("button",{onClick:x=>{x.stopPropagation(),confirm("Delete this diagram?")&&o(f.id)},className:"delete-btn",children:n.jsx(Fe,{size:16})})]})]},f.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Class Diagram"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Diagram Name"}),n.jsx("input",{type:"text",placeholder:"e.g., Banking System Classes",id:"diagramName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const f=document.getElementById("diagramName").value;f.trim()&&(r(f),u(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},oQ=({classDiagram:i,classes:r=[],relationships:s=[],onUpdateClassDiagram:o,onBack:d})=>{const[u,f]=k.useState(""),[x,g]=k.useState(""),[B,v]=k.useState(""),[S,M]=k.useState(""),[oA,AA]=k.useState("association"),[dA,DA]=k.useState("class"),[NA,pA]=k.useState("editor"),[JA,mA]=k.useState(""),[bA,G]=k.useState(null),[OA,V]=k.useState({x:0,y:0}),[lA,_A]=k.useState(null),[XA,QA]=k.useState({x:0,y:0}),[LA,qA]=k.useState(null),[WA,Y]=k.useState(""),[xA,EA]=k.useState(-1),[PA,C]=k.useState({visibility:"+",name:"",type:"String",defaultValue:""}),[Z,gA]=k.useState({visibility:"+",name:"",returnType:"void",isAbstract:!1}),[hA,jA]=k.useState(1),[YA,L]=k.useState({x:0,y:0}),[TA,kA]=k.useState(!1),[BA,z]=k.useState({x:0,y:0}),[q,RA]=k.useState(""),FA=k.useRef(null),IA=k.useRef(null),[rA,ae]=k.useState(!1),re=[{header:"#EC4899",border:"#BE185D",background:"#FDF2F8"},{header:"#DB2777",border:"#9D174D",background:"#FCE7F3"},{header:"#F472B6",border:"#EC4899",background:"#FDF2F8"},{header:"#F43F5E",border:"#E11D48",background:"#FFF1F2"},{header:"#F97316",border:"#EA580C",background:"#FFEDD5"},{header:"#8B5CF6",border:"#7C3AED",background:"#F5F3FF"},{header:"#3B82F6",border:"#2563EB",background:"#EFF6FF"},{header:"#10B981",border:"#059669",background:"#ECFDF5"},{header:"#EF4444",border:"#DC2626",background:"#FEF2F2"},{header:"#8B5A2B",border:"#A16207",background:"#FFFBEB"},{header:"#6B7280",border:"#4B5563",background:"#F9FAFB"},{header:"#14B8A6",border:"#0D9488",background:"#F0FDFA"}],le=["String","int","float","double","boolean","void","char","long","short","byte"],we=[{value:"+",label:"Public (+)"},{value:"-",label:"Private (-)"},{value:"#",label:"Protected (#)"},{value:"~",label:"Package (~)"}],Ne={String:"String",int:"int",float:"float",double:"double",boolean:"boolean",void:"void",char:"char",long:"long",short:"short",byte:"byte"};k.useEffect(()=>{mA(JSON.stringify({classes:r,relationships:s},null,2))},[r,s]);const se=()=>re[Math.floor(Math.random()*re.length)],Qe=()=>{const p=r.map(T=>({...T,colorScheme:se()}));o({...i,classes:p})},lt=()=>{jA(p=>Math.min(p*1.2,3))},We=()=>{jA(p=>Math.max(p/1.2,.3))},nt=()=>{jA(1),L({x:0,y:0})},Te=(p,T="12px",X="'SF Mono', monospace")=>{const cA=document.createElement("canvas").getContext("2d");return cA.font=`${T} ${X}`,cA.measureText(p).width},xe=p=>{const yA=p.classType==="interface"?`<<int>> ${p.name}`:p.name,cA=Te(yA,"16px","'Inter', sans-serif")+32;let $A=0;(p.attributes||[]).forEach(mt=>{const zr=`${mt.visibility} ${mt.name} : ${mt.type}`,Gn=Te(zr)+32;Gn>$A&&($A=Gn)});let ZA=0;(p.methods||[]).forEach(mt=>{const zr=`${mt.visibility} ${mt.name} : ${mt.returnType}`,Gn=Te(zr)+32;Gn>ZA&&(ZA=Gn)});const Ae=Math.max(180,cA,$A,ZA),ke=p.classType==="interface"?50:40,Ue=26,Je=6,ct=1,qe=(p.attributes||[]).length>0?(p.attributes||[]).length*Ue+Je*2:0,xt=(p.methods||[]).length>0?(p.methods||[]).length*Ue+Je*2:0,at=(p.attributes||[]).length>0&&(p.methods||[]).length>0?ct:0,Ft=ke+qe+xt+at;return{width:Math.min(Ae,400),height:Math.max(Ft,60)}},K=()=>{if(!u.trim())return;const p=se(),T={id:Date.now(),name:u,classType:dA,attributes:[],methods:[],x:50+Math.random()*200,y:50+Math.random()*200,colorScheme:p},X=xe(T),yA=[...r,{...T,width:X.width,height:X.height}];o({...i,classes:yA}),f(""),DA("class")},uA=p=>{const T=r.find(X=>X.id===p);T&&qA(T)},KA=(p,T=-1)=>{const X=r.find(yA=>yA.id===p);X&&(Y("attribute"),EA(T),T>=0?C({...X.attributes[T]}):C({visibility:"+",name:"",type:"String"}))},O=(p,T=-1)=>{const X=r.find(yA=>yA.id===p);X&&(Y("method"),EA(T),T>=0?gA({...X.methods[T]}):gA({visibility:"+",name:"",returnType:"void",isAbstract:X.classType==="abstract"||X.classType==="interface"}))},sA=()=>{if(!PA.name.trim())return;const p=r.map(X=>{if(X.id===LA.id){const yA=[...X.attributes];xA>=0?yA[xA]={...PA}:yA.push({...PA});const cA={...X,attributes:yA},$A=xe(cA);return{...cA,width:$A.width,height:$A.height}}return X});o({...i,classes:p});const T=p.find(X=>X.id===LA.id);T&&qA(T),fA()},MA=()=>{if(!Z.name.trim())return;let p=Z.name;p.includes("(")||(p+="()");const T=r.map(yA=>{if(yA.id===LA.id){const cA=[...yA.methods];xA>=0?cA[xA]={...Z,name:p}:cA.push({...Z,name:p});const $A={...yA,methods:cA},ZA=xe($A);return{...$A,width:ZA.width,height:ZA.height}}return yA});o({...i,classes:T});const X=T.find(yA=>yA.id===LA.id);X&&qA(X),fA()},fA=()=>{Y(""),EA(-1)},CA=()=>{qA(null),Y(""),EA(-1)},de=()=>{if(!B||!S)return;const p=r.find(yA=>yA.id===parseInt(B)),T=r.find(yA=>yA.id===parseInt(S));if(!p||!T)return;const X=[...s,{id:Date.now(),from:p.id,to:T.id,type:oA,label:x||""}];o({...i,relationships:X}),g(""),v(""),M("")},Be=p=>{const T=r.filter(yA=>yA.id!==p),X=s.filter(yA=>!(yA.from===p||yA.to===p));o({...i,classes:T,relationships:X})},he=(p,T)=>{const X=r.map(cA=>{if(cA.id===p){const $A=cA.attributes.filter((ke,Ue)=>Ue!==T),ZA={...cA,attributes:$A},Ae=xe(ZA);return{...ZA,width:Ae.width,height:Ae.height}}return cA});o({...i,classes:X});const yA=X.find(cA=>cA.id===p);yA&&qA(yA)},ge=(p,T)=>{const X=r.map(cA=>{if(cA.id===p){const $A=cA.methods.filter((ke,Ue)=>Ue!==T),ZA={...cA,methods:$A},Ae=xe(ZA);return{...ZA,width:Ae.width,height:Ae.height}}return cA});o({...i,classes:X});const yA=X.find(cA=>cA.id===p);yA&&qA(yA)},ye=p=>{const T=s.filter(X=>X.id!==p);o({...i,relationships:T})},Se=(p,T=null,X=!1)=>{p.stopPropagation();const yA=FA.current?.getBoundingClientRect();yA&&(T?X?(_A(T),QA({x:p.clientX,y:p.clientY})):(G(T),V({x:(p.clientX-yA.left)/hA-YA.x-T.x,y:(p.clientY-yA.top)/hA-YA.y-T.y})):(kA(!0),z({x:p.clientX-YA.x,y:p.clientY-YA.y})))},_e=p=>{if(bA){const T=FA.current?.getBoundingClientRect();if(!T)return;const X=Math.max(0,(p.clientX-T.left)/hA-YA.x-OA.x),yA=Math.max(0,(p.clientY-T.top)/hA-YA.y-OA.y),cA=r.map($A=>$A.id===bA.id?{...$A,x:X,y:yA}:$A);o({...i,classes:cA})}else if(lA){const T=(p.clientX-XA.x)/hA,X=(p.clientY-XA.y)/hA,yA=r.map(cA=>{if(cA.id===lA.id){const $A=Math.max(180,cA.width+T),ZA=Math.max(90,cA.height+X);return{...cA,width:$A,height:ZA}}return cA});o({...i,classes:yA}),QA({x:p.clientX,y:p.clientY})}else TA&&L({x:p.clientX-BA.x,y:p.clientY-BA.y})},Ge=()=>{G(null),_A(null),kA(!1)},H=p=>{if(p.ctrlKey||!rA){p.preventDefault();const T=p.deltaY>0?.9:1.1;jA(X=>Math.max(.3,Math.min(3,X*T)))}};k.useEffect(()=>{if(bA||lA||TA)return document.addEventListener("mousemove",_e),document.addEventListener("mouseup",Ge),()=>{document.removeEventListener("mousemove",_e),document.removeEventListener("mouseup",Ge)}},[bA,lA,TA,OA,XA,BA,hA,YA]);const wA=()=>{if(r.length===0)return{minX:0,maxX:1e3,minY:0,maxY:1e3};let p=1/0,T=-1/0,X=1/0,yA=-1/0;r.forEach($A=>{p=Math.min(p,$A.x),T=Math.max(T,$A.x+$A.width),X=Math.min(X,$A.y),yA=Math.max(yA,$A.y+$A.height)});const cA=200;return{minX:Math.min(p,0)-cA,maxX:Math.max(T,1e3)+cA,minY:Math.min(X,0)-cA,maxY:Math.max(yA,1e3)+cA}},HA=()=>{let p=`// Generated Java Code from Class Diagram
// ${i.name||"Untitled Diagram"}

`;const T={};s.filter(X=>X.type==="inheritance"||X.type==="realization").forEach(X=>{T[X.from]||(T[X.from]=[]),T[X.from].push(X.to)}),r.forEach(X=>{const yA=T[X.id]||[];let cA=null,$A=[];if(yA.forEach(ZA=>{const Ae=r.find(ke=>ke.id===ZA);Ae&&(Ae.classType==="class"||Ae.classType==="abstract"?cA=Ae:Ae.classType==="interface"&&$A.push(Ae.name))}),X.classType==="interface"){p+=`public interface ${X.name}`,$A.length>0&&(p+=` extends ${$A.join(", ")}`),p+=` {

`,X.methods?.length>0&&X.methods.forEach(ZA=>{const Ae=Ne[ZA.returnType]||ZA.returnType,ke=ZA.name.includes("(")?ZA.name:`${ZA.name}()`;p+=`    ${Ae} ${ke};

`}),p+=`}

`;return}if(X.classType==="abstract"?p+=`public abstract class ${X.name}`:p+=`public class ${X.name}`,cA&&(p+=` extends ${cA.name}`),$A.length>0&&(p+=` implements ${$A.join(", ")}`),p+=` {

`,X.attributes?.length>0&&(X.attributes.forEach(ZA=>{const Ae=Ne[ZA.type]||ZA.type,ke=j(ZA.visibility),Ue=ZA.defaultValue?GA(ZA.defaultValue,Ae):nA(Ae);p+=`    ${ke} ${Ae} ${ZA.name}${ZA.defaultValue?` = ${Ue}`:""};
`}),p+=`
`),p+=`    public ${X.name}() {
`,(X.attributes||[]).forEach(ZA=>{if(ZA.defaultValue){const Ae=Ne[ZA.type]||ZA.type,ke=GA(ZA.defaultValue,Ae);p+=`        this.${ZA.name} = ${ke};
`}}),p+=`    }

`,X.attributes?.length>0){const ZA=X.attributes.map(Ae=>`${Ne[Ae.type]||Ae.type} ${Ae.name}`).join(", ");p+=`    public ${X.name}(${ZA}) {
`,X.attributes.forEach(Ae=>{p+=`        this.${Ae.name} = ${Ae.name};
`}),p+=`    }

`}X.methods?.length>0&&X.methods.forEach(ZA=>{const Ae=Ne[ZA.returnType]||ZA.returnType,ke=j(ZA.visibility),Ue=ZA.name.includes("(")?ZA.name:`${ZA.name}()`;ZA.isAbstract?p+=`    ${ke} abstract ${Ae} ${Ue};

`:(p+=`    ${ke} ${Ae} ${Ue} {
`,Ae!=="void"&&(p+=`        return ${nA(Ae)};
`),p+=`    }

`)}),p+=`}

`}),RA(p),pA("code")},GA=(p,T)=>{if(p.trim()==="")return nA(T);if(T==="String"&&!p.startsWith('"')&&!p.endsWith('"'))return`"${p}"`;if(T==="char"&&p.length===1&&!p.startsWith("'"))return`'${p}'`;if(T==="boolean"){const X=p.toLowerCase();if(X==="true"||X==="false")return X}return p},j=p=>{switch(p){case"+":return"public";case"-":return"private";case"#":return"protected";case"~":return"";default:return"public"}},nA=p=>{switch(p){case"int":case"long":case"short":case"byte":return"0";case"float":case"double":return"0.0";case"boolean":return"false";case"char":return"'\\0'";default:return"null"}},y=()=>{if(!q)return;const p=new Blob([q],{type:"text/x-java-source"}),T=URL.createObjectURL(p),X=document.createElement("a");X.href=T,X.download=`${i.name||"GeneratedClasses"}.java`,document.body.appendChild(X),X.click(),document.body.removeChild(X),URL.revokeObjectURL(T)},I=()=>{q&&navigator.clipboard.writeText(q).then(()=>{alert("Java code copied to clipboard!")}).catch(p=>{console.error("Failed to copy code: ",p)})},_=p=>{if(!p)return'// Click "Generate Java Code" to generate code from your diagram';const T=["abstract","assert","boolean","break","byte","case","catch","char","class","const","continue","default","do","double","else","enum","extends","final","finally","float","for","goto","if","implements","import","instanceof","int","interface","long","native","new","package","private","protected","public","return","short","static","strictfp","super","switch","synchronized","this","throw","throws","transient","try","void","volatile","while"],X=["String","int","float","double","boolean","void","char","long","short","byte"];let cA=($A=>{const ZA=document.createElement("div");return ZA.textContent=$A,ZA.innerHTML})(p);return cA=cA.replace(/("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/g,'<span class="string">$1</span>'),cA=cA.replace(/(\/\/[^\n]*$)/gm,'<span class="comment">$1</span>'),cA=cA.replace(/(\/\*[\s\S]*?\*\/)/g,'<span class="comment">$1</span>'),cA=cA.replace(/(\b\d+\.?\d*|\.\d+)([fFlL]?)\b(?!([^<]*>)|([^<]*<\/span>))/g,'<span class="number">$1$2</span>'),cA=cA.replace(/\b(class|extends|interface)\s+(\w+)\b/g,'$1 <span class="class-name">$2</span>').replace(/\bimplements\s+([\w\s,]+)\b/g,$A=>`implements ${$A.replace(/^implements\s+/,"").split(",").map(Ae=>Ae.trim()).map(Ae=>`<span class="class-name">${Ae}</span>`).join(", ")}`),X.forEach($A=>{const ZA=new RegExp(`\\b${$A}\\b(?!([^<]*>)|([^<]*<\\/span>))`,"g");cA=cA.replace(ZA,`<span class="type">${$A}</span>`)}),T.forEach($A=>{const ZA=new RegExp(`\\b${$A}\\b(?!([^<]*>)|([^<]*<\\/span>))`,"g");cA=cA.replace(ZA,`<span class="keyword">${$A}</span>`)}),cA},b=()=>JSON.stringify({classes:r,relationships:s},null,2),Q=()=>{navigator.clipboard.writeText(b())},E=()=>{try{const p=JSON.parse(JA);if(Array.isArray(p.classes)&&Array.isArray(p.relationships)){const T=p.classes.map(X=>({...X,...xe(X)}));o({...i,classes:T,relationships:p.relationships})}else alert("Invalid JSON format. Expected classes and relationships arrays.")}catch(p){alert("Error parsing JSON: "+p.message)}},D=p=>{const T=p.target.files[0];if(!T)return;const X=new FileReader;X.onload=yA=>{mA(yA.target.result)},X.readAsText(T)},m=()=>{if(!FA.current)return;let p=1/0,T=-1/0,X=1/0,yA=-1/0;if(r.forEach(qe=>{p=Math.min(p,qe.x),T=Math.max(T,qe.x+qe.width),X=Math.min(X,qe.y),yA=Math.max(yA,qe.y+qe.height)}),s.forEach(qe=>{const xt=r.find(Ft=>Ft.id===qe.from),at=r.find(Ft=>Ft.id===qe.to);if(xt&&at){const Ft={x:xt.x+xt.width/2,y:xt.y+xt.height/2},mt={x:at.x+at.width/2,y:at.y+at.height/2};p=Math.min(p,Ft.x,mt.x),T=Math.max(T,Ft.x,mt.x),X=Math.min(X,Ft.y,mt.y),yA=Math.max(yA,Ft.y,mt.y)}}),p===1/0||r.length===0){alert("No diagram content to export");return}const cA=40,$A=Math.max(0,p-cA),ZA=Math.max(0,X-cA),Ae=T-p+cA*2,ke=yA-X+cA*2;FA.current.style.transform,FA.current.parentElement.style.overflow;const Ue=document.createElement("div");Ue.style.width=`${Ae}px`,Ue.style.height=`${ke}px`,Ue.style.position="fixed",Ue.style.top="0",Ue.style.left="0",Ue.style.background="#f8fafc",Ue.style.zIndex="-9999",Ue.style.overflow="hidden";const Je=FA.current.cloneNode(!0),ct=Je.querySelector(".diagram-content");ct&&(ct.style.transform="none",ct.style.transformOrigin="0 0"),Je.style.position="absolute",Je.style.left=`-${$A}px`,Je.style.top=`-${ZA}px`,Je.style.transform="none",Je.style.width=`${iA.maxX-iA.minX}px`,Je.style.height=`${iA.maxY-iA.minY}px`,Je.style.background="#f8fafc",Je.style.overflow="visible",Ue.appendChild(Je),document.body.appendChild(Ue),Kr(()=>Promise.resolve().then(()=>Or),void 0).then(qe=>{qe.default(Ue,{backgroundColor:"#f8fafc",scale:2,useCORS:!0,width:Ae,height:ke,scrollX:0,scrollY:0,logging:!1}).then(xt=>{const at=document.createElement("a");at.download=`${i.name||"class-diagram"}.png`,at.href=xt.toDataURL("image/png"),at.click(),document.body.removeChild(Ue)}).catch(xt=>{console.error("Error capturing image:",xt),document.body.removeChild(Ue)})})},F=(p,T)=>{const X={x:p.x+p.width/2,y:p.y+p.height/2},yA={x:T.x+T.width/2,y:T.y+T.height/2},cA=yA.x-X.x,$A=yA.y-X.y;X.x+(cA>0?p.width/2:-p.width/2),X.y+(Math.abs(cA)*p.height/p.width>Math.abs($A)?$A>0?p.height/2:-p.height/2:($A>0?p.height/2:-p.height/2)*(p.width/p.height)),yA.x+(cA<0?T.width/2:-T.width/2),yA.y+(Math.abs(cA)*T.height/T.width>Math.abs($A)?$A<0?T.height/2:-T.height/2:($A<0?T.height/2:-T.height/2)*(T.width/T.height));const ZA={x:Math.max(p.x,Math.min(p.x+p.width,Math.abs(cA)>Math.abs($A)*(p.width/p.height)?X.x+(cA>0?p.width/2:-p.width/2):X.x)),y:Math.max(p.y,Math.min(p.y+p.height,Math.abs($A)>Math.abs(cA)*(p.height/p.width)?X.y+($A>0?p.height/2:-p.height/2):X.y))},Ae={x:Math.max(T.x,Math.min(T.x+T.width,Math.abs(cA)>Math.abs($A)*(T.width/T.height)?yA.x+(cA<0?T.width/2:-T.width/2):yA.x)),y:Math.max(T.y,Math.min(T.y+T.height,Math.abs($A)>Math.abs(cA)*(T.height/T.width)?yA.y+($A<0?T.height/2:-T.height/2):yA.y))};return{fromPoint:ZA,toPoint:Ae}},U=(p,T)=>{if(Math.sqrt(Math.pow(T.x-p.x,2)+Math.pow(T.y-p.y,2))<300)return`M${p.x},${p.y} L${T.x},${T.y}`;const yA=p.x+(T.x-p.x)*.5,cA=p.y+(T.y-p.y)*.5;return Math.abs(T.x-p.x)>Math.abs(T.y-p.y)?`M${p.x},${p.y} L${yA},${p.y} L${yA},${T.y} L${T.x},${T.y}`:`M${p.x},${p.y} L${p.x},${cA} L${T.x},${cA} L${T.x},${T.y}`},$=p=>{const T=p.colorScheme||re[0],X=p.classType==="interface",yA=p.classType==="abstract";return n.jsxs("div",{className:"class-box",style:{left:`${p.x}px`,top:`${p.y}px`,width:`${p.width}px`,height:`${p.height}px`,cursor:bA?.id===p.id?"grabbing":"grab",borderColor:T.border,backgroundColor:"white"},onMouseDown:cA=>Se(cA,p),onDoubleClick:()=>uA(p.id),children:[n.jsx("div",{className:"class-header",style:{backgroundColor:T.header,color:"white"},children:n.jsx("div",{className:`class-name ${yA?"italic":""}`,children:X?`<<int>> ${p.name}`:p.name})}),n.jsxs("div",{className:"class-content",children:[p.attributes&&p.attributes.length>0&&n.jsx("div",{className:"attributes-section",children:p.attributes.map((cA,$A)=>n.jsxs("div",{className:"class-item",onDoubleClick:ZA=>{ZA.stopPropagation(),KA(p.id,$A)},children:[n.jsxs("span",{className:"item-text",children:[cA.visibility," ",cA.name," : ",cA.type]}),n.jsx("button",{onClick:ZA=>{ZA.stopPropagation(),he(p.id,$A)},className:"item-delete-btn",children:n.jsx(Fe,{size:10})})]},$A))}),p.attributes&&p.methods&&p.attributes.length>0&&p.methods.length>0&&n.jsx("div",{className:"section-divider",style:{backgroundColor:T.border}}),p.methods&&p.methods.length>0&&n.jsx("div",{className:"methods-section",children:p.methods.map((cA,$A)=>n.jsxs("div",{className:"class-item",onDoubleClick:ZA=>{ZA.stopPropagation(),O(p.id,$A)},children:[n.jsxs("span",{className:`item-text ${cA.isAbstract?"italic":""}`,children:[cA.visibility," ",cA.name," : ",cA.returnType]}),n.jsx("button",{onClick:ZA=>{ZA.stopPropagation(),ge(p.id,$A)},className:"item-delete-btn",children:n.jsx(Fe,{size:10})})]},$A))})]}),n.jsx("div",{className:"resize-handle",style:{backgroundColor:T.header},onMouseDown:cA=>Se(cA,p,!0)})]},p.id)},W=p=>{const T=r.find(Je=>Je.id===p.from),X=r.find(Je=>Je.id===p.to);if(!T||!X)return null;const yA={x:T.x,y:T.y,width:T.width,height:T.height},cA={x:X.x,y:X.y,width:X.width,height:X.height},{fromPoint:$A,toPoint:ZA}=F(yA,cA),Ae=U($A,ZA),ke=($A.x+ZA.x)/2,Ue=($A.y+ZA.y)/2;return n.jsxs("svg",{className:"relationship-svg",style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1},children:[n.jsxs("defs",{children:[n.jsx("marker",{id:`arrowhead-${p.id}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#475569"})}),n.jsx("marker",{id:`inheritance-${p.id}`,markerWidth:"12",markerHeight:"10",refX:"11",refY:"5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"white",stroke:"#475569",strokeWidth:"1"})}),n.jsx("marker",{id:`diamond-${p.id}`,markerWidth:"12",markerHeight:"8",refX:"11",refY:"4",orient:"auto",children:n.jsx("polygon",{points:"0 4, 6 0, 12 4, 6 8",fill:"#475569"})}),n.jsx("marker",{id:`diamond-empty-${p.id}`,markerWidth:"12",markerHeight:"8",refX:"11",refY:"4",orient:"auto",children:n.jsx("polygon",{points:"0 4, 6 0, 12 4, 6 8",fill:"white",stroke:"#475569",strokeWidth:"1"})})]}),(()=>{const ct=(()=>{switch(p.type){case"inheritance":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#inheritance-${p.id})`};case"realization":return{stroke:"#475569",strokeWidth:2,strokeDasharray:"5,5",markerEnd:`url(#inheritance-${p.id})`};case"dependency":return{stroke:"#475569",strokeWidth:1,strokeDasharray:"8,4",markerEnd:`url(#arrowhead-${p.id})`};case"aggregation":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#diamond-empty-${p.id})`};case"composition":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#diamond-${p.id})`};case"navigable":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#arrowhead-${p.id})`};default:return{stroke:"#475569",strokeWidth:2}}})();return n.jsxs(n.Fragment,{children:[n.jsx("path",{d:Ae,fill:"none",...ct}),p.label&&n.jsxs("g",{children:[n.jsx("rect",{x:ke-p.label.length*4,y:Ue-8,width:p.label.length*8,height:16,fill:"white",stroke:"#e2e8f0",rx:"2"}),n.jsx("text",{x:ke,y:Ue+4,textAnchor:"middle",fontSize:"11",fill:"#475569",fontWeight:"500",children:p.label})]})]})})()]},p.id)},zA=p=>{if(p.target===FA.current){const T=FA.current.getBoundingClientRect(),X=(p.clientX-T.left)/hA-YA.x,yA=(p.clientY-T.top)/hA-YA.y,cA=prompt("Enter class name:");if(cA&&cA.trim()){const $A=se(),ZA={id:Date.now(),name:cA.trim(),classType:"class",attributes:[],methods:[],x:X-90,y:yA-40,colorScheme:$A},Ae=xe(ZA),ke=[...r,{...ZA,width:Ae.width,height:Ae.height}];o({...i,classes:ke})}}},iA=wA();return n.jsxs("div",{className:"class-diagram-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:d,className:"back-btn",children:[n.jsx(Rn,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"toolbar-controls",children:[n.jsxs("div",{className:"zoom-controls",children:[n.jsx("button",{onClick:We,className:"zoom-btn",children:n.jsx(Ir,{size:16})}),n.jsxs("span",{className:"zoom-level",children:[Math.round(hA*100),"%"]}),n.jsx("button",{onClick:lt,className:"zoom-btn",children:n.jsx(Tr,{size:16})}),n.jsx("button",{onClick:nt,className:"zoom-btn reset",children:"Reset"})]}),n.jsxs("button",{onClick:Qe,className:"color-btn",children:[n.jsx(gx,{size:16})," Randomize Colors"]}),n.jsxs("div",{className:"export-buttons",children:[n.jsxs("button",{onClick:m,className:"export-btn",children:[n.jsx(Bn,{size:16})," Export Image"]}),n.jsxs("button",{onClick:Q,className:"export-btn",children:[n.jsx(wa,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const p=new Blob([b()],{type:"application/json"}),T=URL.createObjectURL(p),X=document.createElement("a");X.href=T,X.download=`${i.name||"class-diagram"}.json`,document.body.appendChild(X),X.click(),document.body.removeChild(X),URL.revokeObjectURL(T)},className:"export-btn",children:[n.jsx(bn,{size:16})," Export JSON"]})]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${NA==="editor"?"active":""}`,onClick:()=>pA("editor"),children:"Diagram Editor"}),n.jsx("button",{className:`tab ${NA==="json"?"active":""}`,onClick:()=>pA("json"),children:"JSON Editor"}),n.jsx("button",{className:`tab ${NA==="code"?"active":""}`,onClick:()=>pA("code"),children:"Java Code"})]}),NA==="editor"?n.jsxs("div",{className:"diagram-container",children:[n.jsxs("div",{className:"diagram-sidebar",children:[n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Classes"}),n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"text",value:u,onChange:p=>f(p.target.value),placeholder:"New class name",onKeyPress:p=>p.key==="Enter"&&K()}),n.jsxs("select",{value:dA,onChange:p=>DA(p.target.value),style:{marginTop:"8px"},children:[n.jsx("option",{value:"class",children:"Class"}),n.jsx("option",{value:"abstract",children:"Abstract Class"}),n.jsx("option",{value:"interface",children:"Interface"})]}),n.jsxs("button",{onClick:K,className:"add-btn",children:[n.jsx(At,{size:16})," Add ",dA==="interface"?"Interface":dA==="abstract"?"Abstract Class":"Class"]})]}),n.jsx("div",{className:"class-list",children:r.map(p=>n.jsxs("div",{className:"list-item",children:[n.jsxs("div",{className:"item-name",children:[p.name,p.classType==="interface"&&n.jsx("span",{className:"class-type-badge",children:"Interface"}),p.classType==="abstract"&&n.jsx("span",{className:"class-type-badge",children:"Abstract"})]}),n.jsx("button",{onClick:()=>Be(p.id),className:"delete-btn",children:n.jsx(Fe,{size:14})})]},p.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Relationships"}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",value:x,onChange:p=>g(p.target.value),placeholder:"Relationship label (optional)",onKeyPress:p=>p.key==="Enter"&&de()})}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"From Class"}),n.jsxs("select",{value:B||"",onChange:p=>v(p.target.value),children:[n.jsx("option",{value:"",children:"Select class"}),r.map(p=>n.jsx("option",{value:p.id,children:p.name},p.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"To Class"}),n.jsxs("select",{value:S||"",onChange:p=>M(p.target.value),children:[n.jsx("option",{value:"",children:"Select class"}),r.map(p=>n.jsx("option",{value:p.id,children:p.name},p.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Relationship Type"}),n.jsxs("select",{value:oA,onChange:p=>AA(p.target.value),children:[n.jsx("option",{value:"association",children:"Association"}),n.jsx("option",{value:"navigable",children:"Navigable Association"}),n.jsx("option",{value:"inheritance",children:"Inheritance"}),n.jsx("option",{value:"realization",children:"Realization/Implementation"}),n.jsx("option",{value:"dependency",children:"Dependency"}),n.jsx("option",{value:"aggregation",children:"Aggregation"}),n.jsx("option",{value:"composition",children:"Composition"})]})]}),n.jsxs("button",{onClick:de,disabled:!B||!S,className:"add-btn",children:[n.jsx(no,{size:16})," Add Relationship"]})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Current Relationships"}),n.jsx("div",{className:"relationship-list",children:s.map(p=>{const T=r.find(yA=>yA.id===p.from),X=r.find(yA=>yA.id===p.to);return!T||!X?null:n.jsxs("div",{className:"list-item",children:[n.jsxs("div",{className:"item-name",children:[T.name," → ",X.name,n.jsxs("div",{className:"item-type",children:["(",p.type,")"]})]}),p.label&&n.jsx("div",{className:"item-label",children:p.label}),n.jsx("button",{onClick:()=>ye(p.id),className:"delete-btn",children:n.jsx(Fe,{size:14})})]},p.id)})})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"UML Notation Guide"}),n.jsxs("div",{className:"notation-guide",children:[n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Visibility:"}),n.jsx("div",{children:"+ Public"}),n.jsx("div",{children:"- Private"}),n.jsx("div",{children:"# Protected"}),n.jsx("div",{children:"~ Package"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Class Types:"}),n.jsx("div",{children:"Regular Class"}),n.jsxs("div",{children:[n.jsx("em",{children:"Abstract Class"})," (italic)"]}),n.jsx("div",{children:"<<interface>>"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Quick Tips:"}),n.jsx("div",{children:"• Double-click canvas to add class"}),n.jsx("div",{children:"• Double-click class to edit"}),n.jsx("div",{children:"• Drag to move classes"}),n.jsx("div",{children:"• Drag resize handle to resize"}),n.jsx("div",{children:"• Mouse wheel + Ctrl to zoom"}),n.jsx("div",{children:"• Drag empty space to pan"})]})]})]})]}),n.jsx("div",{className:"diagram-canvas-container",style:{position:"relative",flex:1,overflow:"auto",background:"linear-gradient(45deg, #f1f5f9 25%, transparent 25%), linear-gradient(-45deg, #f1f5f9 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f1f5f9 75%), linear-gradient(-45deg, transparent 75%, #f1f5f9 75%)",backgroundSize:"20px 20px",backgroundPosition:"0 0, 0 10px, 10px -10px, -10px 0px"},children:n.jsx("div",{className:"diagram-canvas",ref:FA,onMouseEnter:()=>ae(!0),onMouseLeave:()=>ae(!1),onDoubleClick:zA,onMouseDown:p=>Se(p),onWheel:H,style:{width:`${iA.maxX-iA.minX}px`,height:`${iA.maxY-iA.minY}px`,position:"relative",cursor:TA?"grabbing":"grab"},children:n.jsxs("div",{className:"diagram-content",style:{transform:`scale(${hA}) translate(${YA.x}px, ${YA.y}px)`,transformOrigin:"0 0",width:"100%",height:"100%",position:"relative"},children:[s.map(W),r.map($)]})})})]},"editor-tab"):NA==="json"?n.jsxs("div",{className:"json-editor",children:[n.jsx("div",{className:"json-actions",children:n.jsxs("button",{onClick:()=>{const p=document.createElement("input");p.type="file",p.accept=".json",p.onchange=D,p.click()},className:"import-btn",children:[n.jsx(wn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:JA,onChange:p=>mA(p.target.value),className:"json-textarea"}),n.jsxs("button",{onClick:E,className:"import-btn",children:[n.jsx(ya,{size:16})," Apply JSON"]})]}):n.jsxs("div",{className:"code-editor",children:[n.jsxs("div",{className:"code-actions",children:[n.jsxs("button",{onClick:HA,className:"generate-code-btn",children:[n.jsx(ob,{size:16})," Generate Java Code"]}),n.jsxs("button",{onClick:I,className:"copy-code-btn",children:[n.jsx(wa,{size:16})," Copy Code"]}),n.jsxs("button",{onClick:y,className:"download-code-btn",children:[n.jsx(bn,{size:16})," Download Java File"]})]}),n.jsx("div",{ref:IA,className:"code-display",children:n.jsx("pre",{children:n.jsx("code",{dangerouslySetInnerHTML:{__html:_(q)}})})})]},"code-tab"),LA&&!WA&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsxs("h3",{children:["Edit ",LA.classType==="interface"?"Interface":LA.classType==="abstract"?"Abstract Class":"Class",": ",LA.name]}),n.jsx("button",{onClick:CA,className:"modal-close-btn",children:n.jsx(Ya,{size:20})})]}),n.jsx("div",{className:"modal-body",children:n.jsxs("div",{className:"edit-sections-container",children:[n.jsxs("div",{className:"edit-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h4",{children:"Attributes"}),n.jsxs("button",{onClick:()=>KA(LA.id),className:"add-item-btn",children:[n.jsx(At,{size:12})," Add Attribute"]})]}),n.jsxs("div",{className:"items-list",children:[LA.attributes&&LA.attributes.map((p,T)=>n.jsxs("div",{className:"item-row",onClick:()=>KA(LA.id,T),children:[n.jsxs("div",{className:"item-text",children:[p.visibility," ",p.name," : ",p.type]}),n.jsx("div",{className:"item-actions",children:n.jsx("button",{onClick:X=>{X.stopPropagation(),he(LA.id,T)},className:"delete-btn",children:n.jsx(Fe,{size:12})})})]},T)),(!LA.attributes||LA.attributes.length===0)&&n.jsx("div",{className:"empty-message",children:"No attributes defined"})]})]}),n.jsxs("div",{className:"edit-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h4",{children:"Methods"}),n.jsxs("button",{onClick:()=>O(LA.id),className:"add-item-btn",children:[n.jsx(At,{size:12})," Add Method"]})]}),n.jsxs("div",{className:"items-list",children:[LA.methods&&LA.methods.map((p,T)=>n.jsxs("div",{className:"item-row",onClick:()=>O(LA.id,T),children:[n.jsxs("div",{className:`item-text ${p.isAbstract?"italic":""}`,children:[p.visibility," ",p.name," : ",p.returnType,p.isAbstract&&n.jsx("span",{className:"abstract-badge",children:"abstract"})]}),n.jsx("div",{className:"item-actions",children:n.jsx("button",{onClick:X=>{X.stopPropagation(),ge(LA.id,T)},className:"delete-btn",children:n.jsx(Fe,{size:12})})})]},T)),(!LA.methods||LA.methods.length===0)&&n.jsx("div",{className:"empty-message",children:"No methods defined"})]})]})]})}),n.jsx("div",{className:"modal-footer",children:n.jsx("button",{onClick:CA,className:"modal-cancel-btn",children:"Close"})})]})}),LA&&WA&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:WA==="attribute"?xA>=0?"Edit Attribute":"Add Attribute":xA>=0?"Edit Method":"Add Method"}),n.jsx("button",{onClick:fA,className:"modal-close-btn",children:n.jsx(Ya,{size:20})})]}),n.jsx("div",{className:"modal-body",children:WA==="attribute"?n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Visibility"}),n.jsx("select",{value:PA.visibility,onChange:p=>C({...PA,visibility:p.target.value}),children:we.map(p=>n.jsx("option",{value:p.value,children:p.label},p.value))})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Name"}),n.jsx("input",{type:"text",value:PA.name,onChange:p=>C({...PA,name:p.target.value}),placeholder:"Attribute name"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Type"}),n.jsxs("div",{className:"type-select",children:[n.jsx("select",{value:PA.type,onChange:p=>C({...PA,type:p.target.value}),children:le.map(p=>n.jsx("option",{value:p,children:p},p))}),n.jsx("input",{type:"text",value:le.includes(PA.type)?"":PA.type,onChange:p=>C({...PA,type:p.target.value}),placeholder:"Or enter custom type",style:{display:le.includes(PA.type)?"none":"block",marginTop:"8px"}})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Default Value (for code generation)"}),n.jsx("input",{type:"text",value:PA.defaultValue||"",onChange:p=>C({...PA,defaultValue:p.target.value}),placeholder:"Optional default value (e.g., 0, null, 'default')"}),n.jsx("div",{className:"help-text",children:"This value will be used in code generation but won't be shown in the diagram"})]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Visibility"}),n.jsx("select",{value:Z.visibility,onChange:p=>gA({...Z,visibility:p.target.value}),children:we.map(p=>n.jsx("option",{value:p.value,children:p.label},p.value))})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Name"}),n.jsx("input",{type:"text",value:Z.name,onChange:p=>gA({...Z,name:p.target.value}),placeholder:"Method name (include parentheses)"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Return Type"}),n.jsxs("div",{className:"type-select",children:[n.jsx("select",{value:Z.returnType,onChange:p=>gA({...Z,returnType:p.target.value}),children:le.map(p=>n.jsx("option",{value:p,children:p},p))}),n.jsx("input",{type:"text",value:le.includes(Z.returnType)?"":Z.returnType,onChange:p=>gA({...Z,returnType:p.target.value}),placeholder:"Or enter custom type",style:{display:le.includes(Z.returnType)?"none":"block",marginTop:"8px"}})]})]}),(LA.classType==="abstract"||LA.classType==="interface")&&n.jsx("div",{className:"form-group",children:n.jsxs("label",{className:"checkbox-label",children:[n.jsx("input",{type:"checkbox",checked:Z.isAbstract||!1,onChange:p=>gA({...Z,isAbstract:p.target.checked})}),n.jsx("span",{children:"Abstract Method"})]})})]})}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:fA,className:"modal-cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:WA==="attribute"?sA:MA,disabled:WA==="attribute"?!PA.name:!Z.name,className:"modal-save-btn",children:"Save"})]})]})}),n.jsx("style",{jsx:!0,children:`
        .class-diagram-maker {
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
          padding: 16px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          flex-shrink: 0;
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

        .generate-code-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: #10B981;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .generate-code-btn:hover {
          background: #059669;
        }

        .code-editor {
          display: flex;
          flex-direction: column;
          flex: 1;
          background: white;
          min-height: 0;
          overflow: hidden;
        }
        
        .code-actions {
          display: flex;
          gap: 8px;
          padding: 16px;
          border-bottom: 1px solid #e2e8f0;
          background: #f8fafc;
          flex-shrink: 0;
        }
        
        .copy-code-btn, .download-code-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          transition: background-color 0.2s;
        }
        
        .copy-code-btn {
          background: #3B82F6;
          color: white;
        }
        
        .copy-code-btn:hover {
          background: #2563EB;
        }
        
        .download-code-btn {
          background: #8B5CF6;
          color: white;
        }
        
        .download-code-btn:hover {
          background: #7C3AED;
        }
        
        .code-display {
          flex: 1;
          margin: 0;
          padding: 20px;
          background: #1e293b;
          color: #e2e8f0;
          overflow: auto;
          font-family: 'Fira Code', 'SF Mono', 'Monaco', 'Cascadia Code', monospace;
          font-size: 14px;
          line-height: 1.5;
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        
        .code-display pre {
          margin: 0;
          padding: 0;
          background: transparent;
          border: none;
        }
        
        .code-display code {
          font-family: inherit;
        }
        
        .code-display .comment {
          color: #94a3b8;
          font-style: italic;
        }
        
        .code-display .keyword {
          color: #f472b6;
          font-weight: bold;
        }
        
        .code-display .type {
          color: #60a5fa;
          font-weight: 500;
        }
        
        .code-display .string {
          color: #34d399;
        }
        
        .code-display .number {
          color: #fbbf24;
        }
        
        .code-display .class-name {
          color: #f59e0b;
          font-weight: bold;
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
          color: #EC4899;
          border-bottom-color: #EC4899;
        }
        
        .diagram-container {
          display: flex;
          flex: 1;
          overflow: hidden;
          min-height: 0;
        }
        
        .diagram-sidebar {
          width: 280px;
          background: white;
          border-right: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          overflow-x: hidden;
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
        }
        
        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #EC4899;
          box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1);
        }
        
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }
        
        .checkbox-label input[type="checkbox"] {
          width: auto;
          cursor: pointer;
        }
        
        .checkbox-label span {
          font-size: 14px;
          color: #1e293b;
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
        
        .class-type-badge {
          display: inline-block;
          margin-left: 8px;
          padding: 2px 6px;
          background: #f1f5f9;
          color: #64748b;
          font-size: 10px;
          border-radius: 4px;
          font-weight: 500;
        }
        
        .abstract-badge {
          display: inline-block;
          margin-left: 8px;
          padding: 2px 6px;
          background: #fef3c7;
          color: #92400e;
          font-size: 10px;
          border-radius: 4px;
          font-weight: 500;
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
          flex-shrink: 0;
        }
        
        .delete-btn:hover {
          background: #fecaca;
        }
        
        .diagram-canvas-container {
          position: relative;
          flex: 1;
          overflow: auto;
          min-width: 0;
        }
        
        .diagram-canvas {
          position: relative;
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
        
        .stereotype {
          font-size: 11px;
          font-weight: 400;
          margin-bottom: 4px;
          opacity: 0.9;
        }
        
        .class-name {
          font-size: 16px;
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .class-name.italic {
          font-style: italic;
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
        
        .item-text.italic {
          font-style: italic;
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
          min-height: 0;
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
          overflow: auto;
        }
        
        .json-textarea:focus {
          outline: none;
          border-color: #EC4899;
          box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1);
        }
        
        .help-text {
          font-size: 12px;
          color: #64748b;
          margin-top: 4px;
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
          flex-shrink: 0;
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
          min-height: 0;
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
          flex-shrink: 0;
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
      `})]})},sQ=({domainModels:i,onCreateDomainModel:r,onLoadDomainModel:s,onDeleteDomainModel:o})=>{const[d,u]=k.useState(!1);return n.jsxs("div",{className:"domain-model-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(lx,{size:48})}),n.jsx("h2",{children:"Domain Model Designer"}),n.jsx("p",{children:"Model business domain concepts and their relationships"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(At,{size:16})," New Domain Model"]})}),i.length>0&&n.jsxs("div",{className:"model-list",children:[n.jsx("h3",{children:"Your Domain Models"}),i.map(f=>n.jsxs("div",{className:"model-card",onClick:()=>s(f),children:[n.jsxs("div",{className:"model-card-content",children:[n.jsx("div",{className:"model-card-name",children:f.name}),n.jsxs("div",{className:"model-card-meta",children:[n.jsx("span",{children:new Date(f.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[f.entities?.length||0," entities • ",f.relationships?.length||0," relationships"]})]})]}),n.jsxs("div",{className:"model-card-actions",children:[n.jsx("button",{onClick:x=>{x.stopPropagation(),s(f)},className:"open-btn",children:n.jsx(Rn,{size:16})}),n.jsx("button",{onClick:x=>{x.stopPropagation(),confirm("Delete this domain model?")&&o(f.id)},className:"delete-btn",children:n.jsx(Fe,{size:16})})]})]},f.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Domain Model"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Model Name"}),n.jsx("input",{type:"text",placeholder:"e.g., E-Commerce Domain Model",id:"modelName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const f=document.getElementById("modelName").value;f.trim()&&(r(f),u(!1))},className:"create-btn",children:"Create Model"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},lQ=({domainModel:i={name:"Sample Domain Model"},entities:r=[],relationships:s=[],onUpdateDomainModel:o=()=>{},onBack:d=()=>{}})=>{const[u,f]=k.useState(""),[x,g]=k.useState(""),[B,v]=k.useState(""),[S,M]=k.useState(""),[oA,AA]=k.useState("association"),[dA,DA]=k.useState("1"),[NA,pA]=k.useState("1"),[JA,mA]=k.useState("editor"),[bA,G]=k.useState(""),[OA,V]=k.useState(null),[lA,_A]=k.useState({x:0,y:0}),[XA,QA]=k.useState(null),[LA,qA]=k.useState({x:0,y:0}),[WA,Y]=k.useState(null),[xA,EA]=k.useState(""),[PA,C]=k.useState(-1),[Z,gA]=k.useState({name:"",type:"String"}),[hA,jA]=k.useState(1),[YA,L]=k.useState({x:0,y:0}),[TA,kA]=k.useState(!1),[BA,z]=k.useState({x:0,y:0}),q=k.useRef(null),RA=[{header:"#3B82F6",border:"#2563EB",background:"#EFF6FF"},{header:"#6366F1",border:"#4F46E5",background:"#EEF2FF"},{header:"#8B5CF6",border:"#7C3AED",background:"#F5F3FF"},{header:"#06B6D4",border:"#0891B2",background:"#ECFEFF"},{header:"#10B981",border:"#059669",background:"#ECFDF5"},{header:"#F59E0B",border:"#D97706",background:"#FFFBEB"},{header:"#EC4899",border:"#DB2777",background:"#FDF2F8"},{header:"#64748B",border:"#475569",background:"#F8FAFC"},{header:"#EF4444",border:"#DC2626",background:"#FEF2F2"},{header:"#F97316",border:"#EA580C",background:"#FFF7ED"},{header:"#84CC16",border:"#65A30D",background:"#F7FEE7"},{header:"#14B8A6",border:"#0D9488",background:"#F0FDFA"}],FA=["String","Integer","Number","Boolean","Date","DateTime","Money","Text","ID"],IA=["1","*","0..1","1..*","0..*"];k.useEffect(()=>{G(JSON.stringify({entities:r,relationships:s},null,2))},[r,s]);const rA=()=>RA[Math.floor(Math.random()*RA.length)],ae=()=>{const y=r.map(I=>({...I,colorScheme:rA()}));o({...i,entities:y})},re=()=>{jA(y=>Math.min(y*1.2,3))},le=()=>{jA(y=>Math.max(y/1.2,.3))},we=()=>{jA(1),L({x:0,y:0})},Ne=(y,I="12px",_="'SF Mono', monospace")=>{const Q=document.createElement("canvas").getContext("2d");return Q.font=`${I} ${_}`,Q.measureText(y).width},se=y=>{const b=Ne(y.name,"16px","'Inter', sans-serif")+32;let Q=0;y.attributes.forEach(W=>{const zA=`${W.name} : ${W.type}`,iA=Ne(zA)+32;iA>Q&&(Q=iA)});const E=Math.max(180,b,Q),D=40,U=y.attributes.length>0?y.attributes.length*26+6:0,$=D+U+4;return{width:Math.min(E,400),height:Math.max($,50)}},Qe=()=>{if(!u.trim())return;const y=rA(),I=se({name:u,attributes:[]}),_=[...r,{id:Date.now(),name:u,attributes:[],x:100+Math.random()*300,y:100+Math.random()*300,width:I.width,height:I.height,colorScheme:y}];o({...i,entities:_}),f("")},lt=y=>{const I=r.find(_=>_.id===y);I&&Y(I)},We=(y,I=-1)=>{const _=r.find(b=>b.id===y);_&&(EA("attribute"),C(I),I>=0?gA({..._.attributes[I]}):gA({name:"",type:"String"}))},nt=()=>{if(!Z.name.trim())return;const y=r.map(_=>{if(_.id===WA.id){const b=[..._.attributes];PA>=0?b[PA]={...Z}:b.push({...Z});const Q={..._,attributes:b},E=se(Q);return{...Q,width:E.width,height:E.height}}return _});o({...i,entities:y});const I=y.find(_=>_.id===WA.id);I&&Y(I),Te()},Te=()=>{EA(""),C(-1)},xe=()=>{Y(null),EA(""),C(-1)},K=()=>{if(!B||!S)return;const y=r.find(b=>b.id===parseInt(B)),I=r.find(b=>b.id===parseInt(S));if(!y||!I)return;const _=[...s,{id:Date.now(),from:y.id,to:I.id,type:oA,label:x||"",multiplicityFrom:dA,multiplicityTo:NA}];o({...i,relationships:_}),g(""),v(""),M(""),DA("1"),pA("1")},uA=y=>{const I=r.filter(b=>b.id!==y),_=s.filter(b=>!(b.from===y||b.to===y));o({...i,entities:I,relationships:_})},KA=(y,I)=>{const _=r.map(Q=>{if(Q.id===y){const E=Q.attributes.filter((F,U)=>U!==I),D={...Q,attributes:E},m=se(D);return{...D,width:m.width,height:m.height}}return Q});o({...i,entities:_});const b=_.find(Q=>Q.id===y);b&&Y(b)},O=y=>{const I=s.filter(_=>_.id!==y);o({...i,relationships:I})},sA=y=>{y.target===q.current&&y.button===0&&(kA(!0),z({x:y.clientX-YA.x,y:y.clientY-YA.y}),y.preventDefault())},MA=y=>{TA&&L({x:y.clientX-BA.x,y:y.clientY-BA.y})},fA=(y,I,_=!1)=>{y.stopPropagation();const b=q.current?.getBoundingClientRect();if(b)if(_)QA(I),qA({x:y.clientX,y:y.clientY});else{V(I);const Q=(y.clientX-b.left-YA.x)/hA,E=(y.clientY-b.top-YA.y)/hA;_A({x:Q-I.x,y:E-I.y})}},CA=y=>{if(OA){const I=q.current?.getBoundingClientRect();if(!I)return;const _=(y.clientX-I.left-YA.x)/hA,b=(y.clientY-I.top-YA.y)/hA,Q=Math.max(0,_-lA.x),E=Math.max(0,b-lA.y),D=r.map(m=>m.id===OA.id?{...m,x:Q,y:E}:m);o({...i,entities:D})}else if(XA){const I=y.clientX-LA.x,_=y.clientY-LA.y,b=r.map(Q=>{if(Q.id===XA.id){const E=Math.max(180,Q.width+I/hA),D=Math.max(80,Q.height+_/hA);return{...Q,width:E,height:D}}return Q});o({...i,entities:b}),qA({x:y.clientX,y:y.clientY})}},de=()=>{V(null),QA(null),kA(!1)};k.useEffect(()=>{if(OA||XA||TA)return document.addEventListener("mousemove",OA||XA?CA:MA),document.addEventListener("mouseup",de),()=>{document.removeEventListener("mousemove",OA||XA?CA:MA),document.removeEventListener("mouseup",de)}},[OA,XA,TA,lA,LA,BA,YA,hA]);const he=(()=>{if(r.length===0)return{minX:0,maxX:1e3,minY:0,maxY:1e3};let y=1/0,I=-1/0,_=1/0,b=-1/0;r.forEach(E=>{y=Math.min(y,E.x),I=Math.max(I,E.x+E.width),_=Math.min(_,E.y),b=Math.max(b,E.y+E.height)});const Q=200;return{minX:Math.min(y,0)-Q,maxX:Math.max(I,1e3)+Q,minY:Math.min(_,0)-Q,maxY:Math.max(b,1e3)+Q}})(),ge=()=>JSON.stringify({entities:r,relationships:s},null,2),ye=()=>{navigator.clipboard.writeText(ge())},Se=()=>{try{const y=JSON.parse(bA);if(Array.isArray(y.entities)&&Array.isArray(y.relationships)){const I=y.entities.map(_=>({..._,...se(_)}));o({...i,entities:I,relationships:y.relationships})}else alert("Invalid JSON format. Expected entities and relationships arrays.")}catch(y){alert("Error parsing JSON: "+y.message)}},_e=y=>{const I=y.target.files[0];if(!I)return;const _=new FileReader;_.onload=b=>{G(b.target.result)},_.readAsText(I)},Ge=()=>{if(!q.current)return;let y=1/0,I=-1/0,_=1/0,b=-1/0;if(r.forEach(zA=>{y=Math.min(y,zA.x),I=Math.max(I,zA.x+zA.width),_=Math.min(_,zA.y),b=Math.max(b,zA.y+zA.height)}),s.forEach(zA=>{const iA=r.find(T=>T.id===zA.from),p=r.find(T=>T.id===zA.to);if(iA&&p){const T={x:iA.x+iA.width/2,y:iA.y+iA.height/2},X={x:p.x+p.width/2,y:p.y+p.height/2};y=Math.min(y,T.x,X.x),I=Math.max(I,T.x,X.x),_=Math.min(_,T.y,X.y),b=Math.max(b,T.y,X.y)}}),y===1/0||r.length===0){alert("No diagram content to export");return}const Q=40,E=Math.max(0,y-Q),D=Math.max(0,_-Q),m=I-y+Q*2,F=b-_+Q*2;q.current.style.transform;const U=document.createElement("div");U.style.width=`${m}px`,U.style.height=`${F}px`,U.style.position="fixed",U.style.top="0",U.style.left="0",U.style.background="#f8fafc",U.style.zIndex="-9999",U.style.overflow="hidden";const $=q.current.cloneNode(!0),W=$.querySelector(".canvas-content");W&&(W.style.transform="none",W.style.transformOrigin="0 0"),$.style.position="absolute",$.style.left=`-${E}px`,$.style.top=`-${D}px`,$.style.transform="none",$.style.width=`${he.maxX-he.minX}px`,$.style.height=`${he.maxY-he.minY}px`,$.style.background="#f8fafc",$.style.overflow="visible",U.appendChild($),document.body.appendChild(U),Kr(()=>Promise.resolve().then(()=>Or),void 0).then(zA=>{zA.default(U,{backgroundColor:"#f8fafc",scale:2,useCORS:!0,width:m,height:F,scrollX:0,scrollY:0,logging:!1}).then(iA=>{const p=document.createElement("a");p.download=`${i.name||"domain-model"}.png`,p.href=iA.toDataURL("image/png"),p.click(),document.body.removeChild(U)}).catch(iA=>{console.error("Error capturing image:",iA),document.body.removeChild(U)})})},H=(y,I)=>{const _={x:y.x+y.width/2,y:y.y+y.height/2},b={x:I.x+I.width/2,y:I.y+I.height/2},Q=b.x-_.x,E=b.y-_.y;let D,m;if(Math.abs(Q)/y.width>Math.abs(E)/y.height){const F=_.x+(Q>0?y.width/2:-y.width/2),U=b.x+(Q>0?-I.width/2:I.width/2);D={x:F,y:_.y},m={x:U,y:b.y}}else{const F=_.y+(E>0?y.height/2:-y.height/2),U=b.y+(E>0?-I.height/2:I.height/2);D={x:_.x,y:F},m={x:b.x,y:U}}return{fromPoint:D,toPoint:m}},wA=(y,I)=>{if(Math.sqrt(Math.pow(I.x-y.x,2)+Math.pow(I.y-y.y,2))<300)return`M${y.x},${y.y} L${I.x},${I.y}`;const b=y.x+(I.x-y.x)*.5,Q=y.y+(I.y-y.y)*.5;return Math.abs(I.x-y.x)>Math.abs(I.y-y.y)?`M${y.x},${y.y} L${b},${y.y} L${b},${I.y} L${I.x},${I.y}`:`M${y.x},${y.y} L${y.x},${Q} L${I.x},${Q} L${I.x},${I.y}`},HA=y=>{const I=y.colorScheme||RA[0];return n.jsxs("div",{className:"entity-box",style:{left:`${y.x}px`,top:`${y.y}px`,width:`${y.width}px`,height:`${y.height}px`,cursor:OA?.id===y.id?"grabbing":"grab",borderColor:I.border,backgroundColor:"white"},onMouseDown:_=>fA(_,y),onDoubleClick:()=>lt(y.id),children:[n.jsx("div",{className:"entity-header",style:{backgroundColor:I.header,color:"white"},children:n.jsx("div",{className:"entity-name",children:y.name})}),n.jsx("div",{className:"entity-content",children:y.attributes.length>0&&n.jsx("div",{className:"attributes-section",children:y.attributes.map((_,b)=>n.jsxs("div",{className:"entity-item",onDoubleClick:Q=>{Q.stopPropagation(),We(y.id,b)},children:[n.jsxs("span",{className:"item-text",children:[_.name," : ",_.type]}),n.jsx("button",{onClick:Q=>{Q.stopPropagation(),KA(y.id,b)},className:"item-delete-btn",children:n.jsx(Fe,{size:10})})]},b))})}),n.jsx("div",{className:"resize-handle",style:{backgroundColor:I.header},onMouseDown:_=>fA(_,y,!0)})]},y.id)},GA=y=>{const I=r.find($=>$.id===y.from),_=r.find($=>$.id===y.to);if(!I||!_)return null;const b={x:I.x,y:I.y,width:I.width,height:I.height},Q={x:_.x,y:_.y,width:_.width,height:_.height},{fromPoint:E,toPoint:D}=H(b,Q),m=wA(E,D),F=(E.x+D.x)/2,U=(E.y+D.y)/2;return n.jsxs("svg",{className:"relationship-svg",style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1},children:[n.jsxs("defs",{children:[n.jsx("marker",{id:`arrowhead-${y.id}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#475569"})}),n.jsx("marker",{id:`inheritance-${y.id}`,markerWidth:"12",markerHeight:"10",refX:"11",refY:"5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"white",stroke:"#475569",strokeWidth:"1"})}),n.jsx("marker",{id:`diamond-${y.id}`,markerWidth:"12",markerHeight:"8",refX:"11",refY:"4",orient:"auto",children:n.jsx("polygon",{points:"0 4, 6 0, 12 4, 6 8",fill:"#475569"})}),n.jsx("marker",{id:`diamond-empty-${y.id}`,markerWidth:"12",markerHeight:"8",refX:"11",refY:"4",orient:"auto",children:n.jsx("polygon",{points:"0 4, 6 0, 12 4, 6 8",fill:"white",stroke:"#475569",strokeWidth:"1"})})]}),(()=>{const W=(()=>{switch(y.type){case"inheritance":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#inheritance-${y.id})`};case"realization":return{stroke:"#475569",strokeWidth:2,strokeDasharray:"5,5",markerEnd:`url(#inheritance-${y.id})`};case"dependency":return{stroke:"#475569",strokeWidth:1,strokeDasharray:"8,4",markerEnd:`url(#arrowhead-${y.id})`};case"aggregation":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#diamond-empty-${y.id})`};case"composition":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#diamond-${y.id})`};case"navigable":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#arrowhead-${y.id})`};default:return{stroke:"#475569",strokeWidth:2}}})();return n.jsxs(n.Fragment,{children:[n.jsx("path",{d:m,fill:"none",...W}),y.label&&n.jsxs("g",{children:[n.jsx("rect",{x:F-y.label.length*4,y:U-8,width:y.label.length*8,height:16,fill:"white",stroke:"#e2e8f0",rx:"2"}),n.jsx("text",{x:F,y:U+4,textAnchor:"middle",fontSize:"11",fill:"#475569",fontWeight:"500",children:y.label})]}),n.jsxs("g",{children:[n.jsx("text",{x:E.x+(D.x-E.x)*.25,y:E.y+(D.y-E.y)*.25-5,textAnchor:"middle",fontSize:"10",fill:"#475569",fontWeight:"500",children:y.multiplicityFrom||"1"}),n.jsx("text",{x:E.x+(D.x-E.x)*.75,y:E.y+(D.y-E.y)*.75-5,textAnchor:"middle",fontSize:"10",fill:"#475569",fontWeight:"500",children:y.multiplicityTo||"1"})]})]})})()]},y.id)},j=y=>{if(y.target===q.current){const I=q.current.getBoundingClientRect(),_=(y.clientX-I.left-YA.x)/hA,b=(y.clientY-I.top-YA.y)/hA,Q=prompt("Enter entity name:");if(Q&&Q.trim()){const E=rA(),D=se({name:Q.trim(),attributes:[]}),m=[...r,{id:Date.now(),name:Q.trim(),attributes:[],x:_-D.width/2,y:b-40,width:D.width,height:D.height,colorScheme:E}];o({...i,entities:m})}}},nA=y=>{if(JA==="editor"&&y.ctrlKey){y.preventDefault();const I=y.deltaY>0?.9:1.1;jA(_=>Math.max(.3,Math.min(3,_*I)))}};return n.jsxs("div",{className:"domain-model-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:d,className:"back-btn",children:[n.jsx(Rn,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"canvas-controls",children:[n.jsx("button",{onClick:ae,className:"control-btn",title:"Randomize Colors",children:n.jsx(gx,{size:16})}),n.jsx("button",{onClick:re,className:"control-btn",title:"Zoom In",children:n.jsx(Tr,{size:16})}),n.jsx("button",{onClick:le,className:"control-btn",title:"Zoom Out",children:n.jsx(Ir,{size:16})}),n.jsx("button",{onClick:we,className:"control-btn",title:"Reset View",children:n.jsx(px,{size:16})}),n.jsxs("span",{className:"zoom-indicator",children:[Math.round(hA*100),"%"]})]}),n.jsxs("div",{className:"export-buttons",children:[n.jsxs("button",{onClick:Ge,className:"export-btn",children:[n.jsx(Bn,{size:16})," Export Image"]}),n.jsxs("button",{onClick:ye,className:"export-btn",children:[n.jsx(wa,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const y=new Blob([ge()],{type:"application/json"}),I=URL.createObjectURL(y),_=document.createElement("a");_.href=I,_.download=`${i.name||"domain-model"}.json`,document.body.appendChild(_),_.click(),document.body.removeChild(_),URL.revokeObjectURL(I)},className:"export-btn",children:[n.jsx(bn,{size:16})," Export JSON"]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${JA==="editor"?"active":""}`,onClick:()=>mA("editor"),children:"Diagram Editor"}),n.jsx("button",{className:`tab ${JA==="json"?"active":""}`,onClick:()=>mA("json"),children:"JSON Editor"})]}),JA==="editor"?n.jsxs("div",{className:"diagram-container",children:[n.jsxs("div",{className:"diagram-sidebar",children:[n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Entities"}),n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"text",value:u,onChange:y=>f(y.target.value),placeholder:"New entity name",onKeyPress:y=>y.key==="Enter"&&Qe()}),n.jsxs("button",{onClick:Qe,className:"add-btn",children:[n.jsx(At,{size:16})," Add Entity"]})]}),n.jsx("div",{className:"entity-list",children:r.map(y=>n.jsxs("div",{className:"list-item",children:[n.jsx("div",{className:"item-name",children:y.name}),n.jsx("button",{onClick:()=>uA(y.id),className:"delete-btn",children:n.jsx(Fe,{size:14})})]},y.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Relationships"}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",value:x,onChange:y=>g(y.target.value),placeholder:"Relationship label (optional)",onKeyPress:y=>y.key==="Enter"&&K()})}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"From Entity"}),n.jsxs("select",{value:B||"",onChange:y=>v(y.target.value),children:[n.jsx("option",{value:"",children:"Select entity"}),r.map(y=>n.jsx("option",{value:y.id,children:y.name},y.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"To Entity"}),n.jsxs("select",{value:S||"",onChange:y=>M(y.target.value),children:[n.jsx("option",{value:"",children:"Select entity"}),r.map(y=>n.jsx("option",{value:y.id,children:y.name},y.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Relationship Type"}),n.jsxs("select",{value:oA,onChange:y=>AA(y.target.value),children:[n.jsx("option",{value:"association",children:"Association"}),n.jsx("option",{value:"navigable",children:"Navigable Association"}),n.jsx("option",{value:"inheritance",children:"Inheritance"}),n.jsx("option",{value:"realization",children:"Realization"}),n.jsx("option",{value:"dependency",children:"Dependency"}),n.jsx("option",{value:"aggregation",children:"Aggregation"}),n.jsx("option",{value:"composition",children:"Composition"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Multiplicity (From)"}),n.jsx("select",{value:dA,onChange:y=>DA(y.target.value),children:IA.map(y=>n.jsx("option",{value:y,children:y},y))})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Multiplicity (To)"}),n.jsx("select",{value:NA,onChange:y=>pA(y.target.value),children:IA.map(y=>n.jsx("option",{value:y,children:y},y))})]}),n.jsxs("button",{onClick:K,disabled:!B||!S,className:"add-btn",children:[n.jsx(no,{size:16})," Add Relationship"]})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Current Relationships"}),n.jsx("div",{className:"relationship-list",children:s.map(y=>{const I=r.find(b=>b.id===y.from),_=r.find(b=>b.id===y.to);return!I||!_?null:n.jsxs("div",{className:"list-item",children:[n.jsxs("div",{className:"item-name",children:[I.name," → ",_.name,n.jsxs("div",{className:"item-type",children:["(",y.type,")"]}),(y.multiplicityFrom!=="1"||y.multiplicityTo!=="1")&&n.jsxs("div",{className:"item-multiplicity",children:[y.multiplicityFrom," to ",y.multiplicityTo]})]}),y.label&&n.jsx("div",{className:"item-label",children:y.label}),n.jsx("button",{onClick:()=>O(y.id),className:"delete-btn",children:n.jsx(Fe,{size:14})})]},y.id)})})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Domain Model Guide"}),n.jsxs("div",{className:"notation-guide",children:[n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Canvas Controls:"}),n.jsx("div",{children:"🎨 Randomize all colors"}),n.jsx("div",{children:"🔍 Zoom in/out"}),n.jsx("div",{children:"↺ Reset view"}),n.jsx("div",{children:"🖱️ Drag to pan canvas"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Relationship Types:"}),n.jsx("div",{children:"Association: Solid line"}),n.jsx("div",{children:"Navigable: Solid line with arrow"}),n.jsx("div",{children:"Inheritance: Solid line with triangle"}),n.jsx("div",{children:"Realization: Dashed line with triangle"}),n.jsx("div",{children:"Dependency: Dashed line with arrow"}),n.jsx("div",{children:"Aggregation: Line with empty diamond"}),n.jsx("div",{children:"Composition: Line with filled diamond"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Multiplicity:"}),n.jsx("div",{children:"1: Exactly one"}),n.jsx("div",{children:"*: Zero or more"}),n.jsx("div",{children:"0..1: Zero or one"}),n.jsx("div",{children:"1..*: One or more"}),n.jsx("div",{children:"0..*: Zero or more"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Quick Tips:"}),n.jsx("div",{children:"• Double-click canvas to add entity"}),n.jsx("div",{children:"• Double-click entity to edit"}),n.jsx("div",{children:"• Drag to move entities"}),n.jsx("div",{children:"• Drag resize handle to resize"}),n.jsx("div",{children:"• Use mouse wheel to zoom"})]})]})]})]}),n.jsx("div",{className:"diagram-canvas-container",style:{position:"relative",flex:1,overflow:"auto",background:"linear-gradient(45deg, #f1f5f9 25%, transparent 25%), linear-gradient(-45deg, #f1f5f9 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f1f5f9 75%), linear-gradient(-45deg, transparent 75%, #f1f5f9 75%)",backgroundSize:"20px 20px",backgroundPosition:"0 0, 0 10px, 10px -10px, -10px 0px"},children:n.jsx("div",{className:"diagram-canvas",ref:q,onDoubleClick:j,onMouseDown:sA,onWheel:nA,style:{width:`${he.maxX-he.minX}px`,height:`${he.maxY-he.minY}px`,position:"relative",cursor:TA?"grabbing":"grab"},children:n.jsxs("div",{className:"canvas-content",style:{transform:`scale(${hA}) translate(${YA.x}px, ${YA.y}px)`,transformOrigin:"0 0",width:"100%",height:"100%",position:"relative"},children:[s.map(GA),r.map(HA)]})})})]}):n.jsxs("div",{className:"json-editor",children:[n.jsx("div",{className:"json-actions",children:n.jsxs("button",{onClick:()=>{const y=document.createElement("input");y.type="file",y.accept=".json",y.onchange=_e,y.click()},className:"import-btn",children:[n.jsx(wn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:bA,onChange:y=>G(y.target.value),className:"json-textarea"}),n.jsxs("button",{onClick:Se,className:"import-btn",children:[n.jsx(ya,{size:16})," Apply JSON"]})]}),WA&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsxs("h3",{children:["Edit Entity: ",WA.name]}),n.jsx("button",{onClick:xe,className:"modal-close-btn",children:n.jsx(Ya,{size:20})})]}),n.jsx("div",{className:"modal-body",children:n.jsx("div",{className:"edit-sections-container",children:n.jsxs("div",{className:"edit-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h4",{children:"Attributes"}),n.jsxs("button",{onClick:()=>We(WA.id),className:"add-item-btn",children:[n.jsx(At,{size:12})," Add Attribute"]})]}),n.jsxs("div",{className:"items-list",children:[WA.attributes.map((y,I)=>n.jsxs("div",{className:"item-row",onClick:()=>We(WA.id,I),children:[n.jsxs("div",{className:"item-text",children:[y.name," : ",y.type]}),n.jsx("div",{className:"item-actions",children:n.jsx("button",{onClick:_=>{_.stopPropagation(),KA(WA.id,I)},className:"delete-btn",children:n.jsx(Fe,{size:12})})})]},I)),WA.attributes.length===0&&n.jsx("div",{className:"empty-message",children:"No attributes defined"})]})]})})}),n.jsx("div",{className:"modal-footer",children:n.jsx("button",{onClick:xe,className:"modal-cancel-btn",children:"Close"})})]})}),WA&&xA&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:xA==="attribute"?PA>=0?"Edit Attribute":"Add Attribute":""}),n.jsx("button",{onClick:Te,className:"modal-close-btn",children:n.jsx(Ya,{size:20})})]}),n.jsx("div",{className:"modal-body",children:xA==="attribute"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Name"}),n.jsx("input",{type:"text",value:Z.name,onChange:y=>gA({...Z,name:y.target.value}),placeholder:"Attribute name"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Type"}),n.jsxs("div",{className:"type-select",children:[n.jsx("select",{value:Z.type,onChange:y=>gA({...Z,type:y.target.value}),children:FA.map(y=>n.jsx("option",{value:y,children:y},y))}),n.jsx("input",{type:"text",value:FA.includes(Z.type)?"":Z.type,onChange:y=>gA({...Z,type:y.target.value}),placeholder:"Or enter custom type",style:{display:FA.includes(Z.type)?"none":"block",marginTop:"8px"}})]})]})]})}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:Te,className:"modal-cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:nt,disabled:!Z.name,className:"modal-save-btn",children:"Save"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
        
        .diagram-canvas-container {
          flex: 1;
          background: #f8fafc;
          position: relative;
          overflow: auto;
        }
        
        .diagram-canvas {
          position: relative;
          cursor: grab;
        }
        
        .diagram-canvas:active {
          cursor: grabbing;
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
      `})]})},cQ=({mindMaps:i,onCreateMindMap:r,onLoadMindMap:s,onDeleteMindMap:o})=>{const[d,u]=k.useState(!1);return n.jsxs("div",{className:"mindmap-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(dx,{size:48})}),n.jsx("h2",{children:"Mind Map Designer"}),n.jsx("p",{children:"Visualize your ideas and concepts in an intuitive hierarchical structure"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(At,{size:16})," New Mind Map"]})}),i.length>0&&n.jsxs("div",{className:"mindmap-list",children:[n.jsx("h3",{children:"Your Mind Maps"}),i.map(f=>n.jsxs("div",{className:"mindmap-card",onClick:()=>s(f),children:[n.jsxs("div",{className:"mindmap-card-content",children:[n.jsx("div",{className:"mindmap-card-name",children:f.name}),n.jsxs("div",{className:"mindmap-card-meta",children:[n.jsx("span",{children:new Date(f.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[f.nodes?.length||1," nodes"]})]})]}),n.jsxs("div",{className:"mindmap-card-actions",children:[n.jsx("button",{onClick:x=>{x.stopPropagation(),s(f)},className:"open-btn",children:n.jsx(_n,{size:16})}),n.jsx("button",{onClick:x=>{x.stopPropagation(),confirm("Delete this mind map?")&&o(f.id)},className:"delete-btn",children:n.jsx(Fe,{size:16})})]})]},f.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Mind Map"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Mind Map Name"}),n.jsx("input",{type:"text",placeholder:"e.g., Project Planning",id:"mindMapName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const f=document.getElementById("mindMapName").value;f.trim()&&(r(f),u(!1))},className:"create-btn",children:"Create Mind Map"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},dQ=({mindMap:i,nodes:r=[],connections:s=[],onUpdateMindMap:o,onBack:d})=>{const u=k.useRef(null),[f,x]=k.useState(!1),[g,B]=k.useState(null),[v,S]=k.useState(null),[M,oA]=k.useState(""),[AA,dA]=k.useState(""),[DA,NA]=k.useState(""),[pA,JA]=k.useState(""),[mA,bA]=k.useState(1),[G,OA]=k.useState({x:0,y:0}),[V,lA]=k.useState(!1),[_A,XA]=k.useState({x:0,y:0}),[QA,LA]=k.useState(null),[qA,WA]=k.useState(!1),[Y,xA]=k.useState(!0),[EA,PA]=k.useState(null),[C,Z]=k.useState("editor"),[gA,hA]=k.useState(""),[jA,YA]=k.useState(!0),[L,TA]=k.useState(null),[kA,BA]=k.useState("text"),[z,q]=k.useState(null),[RA,FA]=k.useState(null),[IA,rA]=k.useState([]),ae=20,re=200,le=15,we=25,Ne=100,[se,Qe]=k.useState(r.length>0?r:[{id:1,text:"Origin",subtext:"Click to edit subtext",description:"This is the central idea of your mind map. You can add descriptions to provide more details.",imageUrl:"",x:400,y:300,level:0,parentId:null,isRoot:!0,color:"#ff6b6b",width:160,height:80}]);k.useEffect(()=>{r.length>0&&Qe(r)},[r]),k.useEffect(()=>{hA(JSON.stringify({nodes:se},null,2))},[se]),k.useEffect(()=>{C==="batch"&&rA(se.map(m=>({id:m.id,text:m.text,subtext:m.subtext||"",description:m.description||"",imageUrl:m.imageUrl||""})))},[C,se]),k.useEffect(()=>{const m=F=>{C==="editor"&&(F.key==="ArrowLeft"?(F.preventDefault(),OA(U=>({x:U.x+Ne,y:U.y}))):F.key==="ArrowRight"?(F.preventDefault(),OA(U=>({x:U.x-Ne,y:U.y}))):F.key==="ArrowUp"?(F.preventDefault(),OA(U=>({x:U.x,y:U.y+Ne}))):F.key==="ArrowDown"&&(F.preventDefault(),OA(U=>({x:U.x,y:U.y-Ne}))))};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[C]);const lt=m=>{const F=m.replace("#",""),U=parseInt(F.substr(0,2),16),$=parseInt(F.substr(2,2),16),W=parseInt(F.substr(4,2),16);return(.299*U+.587*$+.114*W)/255>.5?"#000000":"#ffffff"},We=(m,F)=>m.length<=F?m:m.substring(0,F-3)+"...",nt=(m,F="",U=!1)=>{const zA=We(m,le),iA=F?We(F,we):"",p=zA.length*8,T=iA?iA.length*8*.8:0,X=Math.max(p,T);let yA=Math.max(160,X+40),cA=25;return U&&(cA+=20),F&&(cA+=20),{width:Math.min(yA,300),height:Math.min(cA,200)}},Te=m=>se.filter(F=>F.parentId===m),xe=m=>{const F=Te(m);let U=[...F];return F.forEach($=>{U=[...U,...xe($.id)]}),U},K=(m,F,U,$=!0)=>{Qe(W=>{const zA=[...W],iA=zA.find(cA=>cA.id===m);if(!iA)return W;const p=W.find(cA=>cA.id===m),T=F-p.x,X=U-p.y;iA.x=F,iA.y=U;const yA=(cA,$A,ZA)=>{zA.filter(ke=>ke.parentId===cA).forEach(ke=>{ke.x+=$A,ke.y+=ZA,yA(ke.id,$A,ZA)})};return $&&yA(m,T,X),zA})},uA=()=>{Qe(m=>{const F=[...m],U=F.find(zA=>zA.isRoot);if(!U)return m;const $=zA=>{const iA=F.find(X=>X.id===zA),p=F.filter(X=>X.parentId===zA);if(p.length===0)return iA.height;let T=0;return p.forEach((X,yA)=>{T+=$(X.id),yA<p.length-1&&(T+=ae)}),Math.max(T,iA.height)},W=(zA,iA,p,T=null)=>{const X=F.find(Ae=>Ae.id===zA);if(!X)return;X.x=iA,X.y=p;const yA=F.filter(Ae=>Ae.parentId===zA);if(yA.length===0)return;let cA=[],$A=[];X.isRoot?yA.forEach(Ae=>{Ae.x<X.x?cA.push(Ae):$A.push(Ae)}):T==="right"?$A=yA:cA=yA;const ZA=(Ae,ke)=>{if(Ae.length===0)return;const Ue=Ae.map(qe=>$(qe.id)),Je=Ue.reduce((qe,xt)=>qe+xt,0)+(Ae.length-1)*ae;let ct=p-Je/2;Ae.forEach((qe,xt)=>{const at=Ue[xt],Ft=ct+at/2,mt=ke==="left"?iA-re:iA+re;W(qe.id,mt,Ft,ke),ct+=at+ae})};ZA(cA,"left"),ZA($A,"right")};return W(U.id,U.x,U.y),F})},KA=(m,F)=>{if(!m||!F)return"";const U=(m.x+m.width)*mA+G.x,$=(m.y+m.height/2)*mA+G.y,W=F.x*mA+G.x,zA=(F.y+F.height/2)*mA+G.y,iA=W-U,T=Math.abs(iA)*.5,X=U+T,yA=$,cA=W-T;return`M ${U} ${$} C ${X} ${yA}, ${cA} ${zA}, ${W} ${zA}`},O=(m,F,U)=>{for(const W of se){if(W.id===m.id||xe(m.id).some(T=>T.id===W.id))continue;const zA=W.x*mA+G.x,iA=W.y*mA+G.y;if(Math.sqrt(Math.pow(F-(zA+W.width*mA/2),2)+Math.pow(U-(iA+W.height*mA/2),2))<80*mA)return W}return null},sA=(m,F)=>{if(m.stopPropagation(),m.detail===1){B(F.id),LA(F),lA(!0);const U=u.current.getBoundingClientRect();XA({x:m.clientX-U.left-G.x-F.x*mA,y:m.clientY-U.top-G.y-F.y*mA})}},MA=m=>{m.target===u.current&&(B(null),WA(!0),XA({x:m.clientX-G.x,y:m.clientY-G.y}))},fA=k.useCallback(m=>{if(V&&QA){const F=u.current.getBoundingClientRect(),U=(m.clientX-F.left-G.x-_A.x)/mA,$=(m.clientY-F.top-G.y-_A.y)/mA,W=O(QA,m.clientX-F.left,m.clientY-F.top);PA(W),K(QA.id,U,$,!0)}else qA&&OA({x:m.clientX-_A.x,y:m.clientY-_A.y})},[V,QA,_A,mA,G,qA]),CA=k.useCallback(()=>{V&&QA&&(EA&&Qe(m=>m.map(F=>F.id===QA.id?{...F,parentId:EA.id,level:EA.level+1,color:EA.level+1===1?"#4ecdc4":"#95e1d3"}:F)),setTimeout(()=>{uA()},50)),lA(!1),LA(null),WA(!1),PA(null)},[V,QA,EA]);k.useEffect(()=>(document.addEventListener("mousemove",fA),document.addEventListener("mouseup",CA),()=>{document.removeEventListener("mousemove",fA),document.removeEventListener("mouseup",CA)}),[fA,CA]);const de=(m,F="right")=>{const U=se.find(cA=>cA.id===m);if(!U)return;const $=se.find(cA=>cA.isRoot);let W;U.isRoot?W=F==="right":(W=U.x>$.x,F=W?"right":"left");const zA=nt("New Node","Add subtext here"),iA=Te(m),p=U.x+(W?re:-re),T=U.y+iA.length*(zA.height+ae),X={id:Date.now(),text:"New Node",subtext:"Add subtext here",description:"",imageUrl:"",x:p,y:T,level:U.level+1,parentId:m,isRoot:!1,color:U.level+1===1?"#4ecdc4":"#95e1d3",...zA},yA=[...se,X];Qe(yA),B(X.id),o({...i,nodes:yA}),setTimeout(()=>{uA()},50)},Be=m=>{const F=se.find(iA=>iA.id===m);if(F?.isRoot)return;const U=xe(m),W=[F,...U].map(iA=>iA.id),zA=se.filter(iA=>!W.includes(iA.id));Qe(zA),B(null),o({...i,nodes:zA}),setTimeout(()=>{uA()},50)},he=m=>{S(m.id),oA(m.text),dA(m.subtext||""),NA(m.description||""),JA(m.imageUrl||""),BA("text")},ge=(m,F,U=null,$=null,W=null)=>{if(!F.trim())return;const zA=se.map(iA=>{if(iA.id===m){const p={...iA,text:F,subtext:U!==null?U:iA.subtext,description:$!==null?$:iA.description,imageUrl:W!==null?W:iA.imageUrl};return{...p,...nt(F,p.subtext,p.isRoot)}}return iA});Qe(zA),S(null),oA(""),dA(""),NA(""),JA(""),o({...i,nodes:zA})},ye=(m,F)=>{const U=se.map($=>$.id===m?{...$,imageUrl:F}:$);Qe(U),q(null),o({...i,nodes:U})},Se=(m,F)=>{F&&(F.stopPropagation(),F.preventDefault()),ye(m,""),FA(null)},_e=()=>bA(m=>Math.min(m*1.2,3)),Ge=()=>bA(m=>Math.max(m/1.2,.3)),H=()=>{bA(1),OA({x:0,y:0})},wA=()=>x(m=>!m),HA=()=>YA(m=>!m),GA=()=>JSON.stringify({nodes:se},null,2),j=()=>{navigator.clipboard.writeText(GA())},nA=()=>{try{const m=JSON.parse(gA);if(Array.isArray(m.nodes)){const F=m.nodes;Qe(F),o({...i,nodes:F})}else alert("Invalid JSON format. Expected nodes array.")}catch(m){alert("Error parsing JSON: "+m.message)}},y=m=>{const F=m.target.files[0];if(!F)return;const U=new FileReader;U.onload=$=>{hA($.target.result)},U.readAsText(F)},I=()=>{u.current&&Kr(()=>Promise.resolve().then(()=>Or),void 0).then(m=>{m.default(u.current.parentElement,{backgroundColor:f?"#1f2937":"#ffffff",scale:2,useCORS:!0}).then(F=>{const U=document.createElement("a");U.download=`${i.name||"mindmap"}.png`,U.href=F.toDataURL("image/png"),U.click()})})},_=()=>f?"#64748b":"#475569",b=(m,F,U)=>{rA($=>$.map(W=>W.id===m?{...W,[F]:U}:W))},Q=()=>{const m=se.map(F=>{const U=IA.find($=>$.id===F.id);if(U){const $={...F,text:U.text||F.text,subtext:U.subtext,description:U.description,imageUrl:U.imageUrl};return{...$,...nt($.text,$.subtext,$.isRoot)}}return F});Qe(m),Z("editor"),o({...i,nodes:m})},E=m=>{const F=[];let U=20;m.isRoot&&(U+=7);const $=lt(m.color),W=We(m.text,le);if(F.push(n.jsx("text",{x:m.width/2,y:U,textAnchor:"middle",fill:$,fontSize:"14",fontWeight:"600",style:{pointerEvents:"none"},children:W},"main-text")),U+=15,m.subtext){const zA=We(m.subtext,we);F.push(n.jsx("text",{x:m.width/2,y:U,textAnchor:"middle",fill:$,fontSize:"11",fontStyle:"italic",opacity:"0.8",style:{pointerEvents:"none"},children:zA},"subtext")),U+=15}return m.description&&F.push(n.jsxs("g",{children:[n.jsx("circle",{cx:m.width-12,cy:12,r:8,fill:"#f59e0b"}),n.jsx("text",{x:m.width-12,y:16,textAnchor:"middle",fill:"white",fontSize:"8",fontWeight:"bold",style:{pointerEvents:"none"},children:"i"})]},"desc-indicator")),F},D=m=>{if(!m.imageUrl||!jA||RA!==m.id)return null;const F=80,U=(m.x+m.width/2-F/2)*mA+G.x,$=(m.y-F-15)*mA+G.y;return n.jsxs("g",{children:[n.jsx("rect",{x:U-5,y:$-5,width:F+10,height:F+10,rx:"10",fill:"white",stroke:"#e2e8f0",strokeWidth:"2",filter:"url(#shadow)"}),n.jsx("image",{href:m.imageUrl,x:U,y:$,width:F,height:F,preserveAspectRatio:"xMidYMid slice",clipPath:`url(#imageClip-${m.id})`,onError:W=>{W.target.style.display="none"}}),n.jsx("circle",{cx:U+F-5,cy:$+5,r:10,fill:"#ef4444",stroke:"white",strokeWidth:"2",style:{cursor:"pointer"},onMouseDown:W=>Se(m.id,W)}),n.jsx("text",{x:U+F-5,y:$+9,textAnchor:"middle",fill:"white",fontSize:"10",fontWeight:"bold",style:{pointerEvents:"none"},children:"×"}),n.jsx("defs",{children:n.jsx("clipPath",{id:`imageClip-${m.id}`,children:n.jsx("rect",{x:U,y:$,width:F,height:F,rx:"8"})})})]},`image-hover-${m.id}`)};return n.jsxs("div",{className:`mindmap-maker ${f?"dark":"light"}`,children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:d,className:"back-btn",children:[n.jsx(Rn,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"export-buttons",children:[n.jsxs("button",{onClick:I,className:"export-btn",children:[n.jsx(Bn,{size:16})," Export Image"]}),n.jsxs("button",{onClick:j,className:"export-btn",children:[n.jsx(wa,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const m=new Blob([GA()],{type:"application/json"}),F=URL.createObjectURL(m),U=document.createElement("a");U.href=F,U.download=`${i.name||"mindmap"}.json`,document.body.appendChild(U),U.click(),document.body.removeChild(U),URL.revokeObjectURL(F)},className:"export-btn",children:[n.jsx(bn,{size:16})," Export JSON"]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${C==="editor"?"active":""}`,onClick:()=>Z("editor"),children:"Mind Map Editor"}),n.jsx("button",{className:`tab ${C==="json"?"active":""}`,onClick:()=>Z("json"),children:"JSON Editor"}),n.jsx("button",{className:`tab ${C==="batch"?"active":""}`,onClick:()=>Z("batch"),children:"Batch Edit"})]}),C==="editor"?n.jsxs("div",{className:"mindmap-container",children:[Y&&n.jsx("div",{className:"top-toolbar",children:n.jsxs("div",{className:"toolbar-section",children:[n.jsx("button",{className:"toolbar-btn",onClick:wA,title:f?"Light Mode":"Dark Mode",children:f?n.jsx(xx,{size:18}):n.jsx(fx,{size:18})}),n.jsx("button",{className:"toolbar-btn",title:"Auto Align",onClick:uA,children:n.jsx(qb,{size:18})}),n.jsx("button",{className:`toolbar-btn ${jA?"active":""}`,onClick:HA,title:jA?"Hide Images":"Show Images",children:n.jsx(Bn,{size:18})}),n.jsx("button",{className:"toolbar-btn",onClick:()=>Z("batch"),title:"Batch Edit Mode",children:n.jsx(jb,{size:18})})]})}),n.jsxs("svg",{ref:u,className:"canvas",width:"100%",height:"100%",onMouseDown:MA,children:[n.jsxs("defs",{children:[n.jsxs("filter",{id:"glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[n.jsx("feGaussianBlur",{stdDeviation:"3",result:"coloredBlur"}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{in:"coloredBlur"}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),n.jsx("filter",{id:"shadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:n.jsx("feDropShadow",{dx:"0",dy:"2",stdDeviation:"3",floodOpacity:"0.3"})}),n.jsxs("filter",{id:"connectionGlow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[n.jsx("feGaussianBlur",{stdDeviation:"5",result:"coloredBlur"}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{in:"coloredBlur"}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),se.map(m=>{const F=se.find(U=>U.id===m.parentId);return F?n.jsx("path",{d:KA(F,m),stroke:_(),strokeWidth:"2",fill:"none",opacity:"0.8",strokeLinecap:"round",className:"connection-line"},`connection-${m.id}`):null}),EA&&n.jsxs("g",{children:[n.jsxs("circle",{cx:(EA.x+EA.width/2)*mA+G.x,cy:(EA.y+EA.height/2)*mA+G.y,r:40,fill:"none",stroke:"#10b981",strokeWidth:"3",strokeDasharray:"5,5",opacity:"0.8",filter:"url(#connectionGlow)",children:[n.jsx("animate",{attributeName:"r",values:"35;45;35",dur:"1s",repeatCount:"indefinite"}),n.jsx("animate",{attributeName:"opacity",values:"0.6;1;0.6",dur:"1s",repeatCount:"indefinite"})]}),n.jsx("text",{x:(EA.x+EA.width/2)*mA+G.x,y:(EA.y+EA.height/2)*mA+G.y-50,textAnchor:"middle",fill:"#10b981",fontSize:"12",fontWeight:"bold",children:"Connect as Child"})]}),se.map(m=>n.jsxs("g",{children:[n.jsxs("g",{transform:`translate(${m.x*mA+G.x}, ${m.y*mA+G.y}) scale(${mA})`,className:`node-group ${V&&QA?.id===m.id?"dragging":""}`,onMouseEnter:()=>FA(m.id),onMouseLeave:()=>FA(null),children:[n.jsx("rect",{width:m.width,height:m.height,rx:12,fill:m.color,filter:g===m.id?"url(#glow)":"url(#shadow)",stroke:g===m.id?"#fff":"transparent",strokeWidth:g===m.id?"2":"0",style:{cursor:"grab"},onMouseDown:F=>sA(F,m),onDoubleClick:()=>he(m)}),E(m)]}),g===m.id&&n.jsx(n.Fragment,{children:(()=>{const F=se.find(W=>W.isRoot),U=m.isRoot?!0:m.x>=F.x,$=m.isRoot?!0:m.x<F.x;return n.jsxs(n.Fragment,{children:[(m.isRoot||U)&&n.jsxs("g",{transform:`translate(${(m.x+m.width+15)*mA+G.x}, ${(m.y+m.height/2-12)*mA+G.y})`,children:[n.jsx("circle",{cx:12,cy:12,r:12,fill:"#10b981",stroke:"white",strokeWidth:"2",style:{cursor:"pointer"},onClick:()=>de(m.id,"right")}),n.jsx("text",{x:12,y:16,textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",style:{pointerEvents:"none"},children:"+"})]}),(m.isRoot||$)&&n.jsxs("g",{transform:`translate(${(m.x-35)*mA+G.x}, ${(m.y+m.height/2-12)*mA+G.y})`,children:[n.jsx("circle",{cx:12,cy:12,r:12,fill:"#10b981",stroke:"white",strokeWidth:"2",style:{cursor:"pointer"},onClick:()=>de(m.id,"left")}),n.jsx("text",{x:12,y:16,textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",style:{pointerEvents:"none"},children:"+"})]})]})})()})]},m.id)),se.map(m=>D(m))]}),g&&n.jsxs("div",{className:"floating-actions",children:[n.jsx("button",{className:"action-btn edit-btn",onClick:()=>{const m=se.find(F=>F.id===g);he(m)},title:"Edit Node",children:n.jsx(Yb,{size:16})}),n.jsx("button",{className:"action-btn image-btn",onClick:()=>{const m=se.find(F=>F.id===g);q(m)},title:"Add Image URL",children:n.jsx(Bn,{size:16})}),se.find(m=>m.id===g)?.description&&n.jsx("button",{className:"action-btn desc-btn",onClick:()=>{const m=se.find(F=>F.id===g);TA(m)},title:"View Description",children:n.jsx(xb,{size:16})}),!se.find(m=>m.id===g)?.isRoot&&n.jsx("button",{className:"action-btn delete-btn",onClick:()=>Be(g),title:"Delete Node",children:n.jsx(Fe,{size:16})})]}),v&&n.jsx("div",{className:"edit-overlay",children:n.jsxs("div",{className:"edit-box",children:[n.jsxs("div",{className:"edit-tabs",children:[n.jsx("button",{className:`edit-tab ${kA==="text"?"active":""}`,onClick:()=>BA("text"),children:"Main Text"}),n.jsx("button",{className:`edit-tab ${kA==="subtext"?"active":""}`,onClick:()=>BA("subtext"),children:"Subtext"}),n.jsx("button",{className:`edit-tab ${kA==="description"?"active":""}`,onClick:()=>BA("description"),children:"Description"}),n.jsx("button",{className:`edit-tab ${kA==="image"?"active":""}`,onClick:()=>BA("image"),children:"Image URL"})]}),n.jsxs("div",{className:"edit-content",children:[kA==="text"&&n.jsxs("div",{className:"input-with-counter",children:[n.jsx("input",{type:"text",value:M,onChange:m=>oA(m.target.value),onKeyDown:m=>{m.key==="Enter"&&ge(v,M,AA,DA,pA),m.key==="Escape"&&(S(null),oA(""))},placeholder:"Enter main text...",autoFocus:!0,maxLength:50}),n.jsxs("div",{className:"char-counter",children:[M.length,"/",le]})]}),kA==="subtext"&&n.jsxs("div",{className:"input-with-counter",children:[n.jsx("input",{type:"text",value:AA,onChange:m=>dA(m.target.value),onKeyDown:m=>{m.key==="Enter"&&ge(v,M,AA,DA,pA),m.key==="Escape"&&(S(null),dA(""))},placeholder:"Enter subtext...",autoFocus:!0,maxLength:60}),n.jsxs("div",{className:"char-counter",children:[AA.length,"/",we]})]}),kA==="description"&&n.jsx("textarea",{value:DA,onChange:m=>NA(m.target.value),placeholder:"Enter description...",rows:"4",autoFocus:!0}),kA==="image"&&n.jsxs("div",{className:"image-url-input",children:[n.jsx("input",{type:"url",value:pA,onChange:m=>JA(m.target.value),placeholder:"Enter image URL...",autoFocus:!0}),pA&&n.jsxs("div",{className:"image-preview",children:[n.jsx("img",{src:pA,alt:"Preview",onError:m=>m.target.style.display="none"}),n.jsx("small",{children:"Image Preview"})]})]})]}),n.jsxs("div",{className:"edit-actions",children:[n.jsx("button",{onClick:()=>{S(null),oA(""),dA(""),NA(""),JA("")},className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>ge(v,M,AA,DA,pA),className:"save-btn",children:"Save"})]})]})}),z&&n.jsx("div",{className:"dialog-overlay",children:n.jsxs("div",{className:"dialog",children:[n.jsxs("div",{className:"dialog-header",children:[n.jsx("h3",{children:"Add Image URL"}),n.jsx("button",{onClick:()=>q(null),className:"close-btn",children:n.jsx(Ya,{size:20})})]}),n.jsxs("div",{className:"dialog-content",children:[n.jsx("input",{type:"url",placeholder:"Enter image URL...",value:z.imageUrl||"",onChange:m=>{const F=se.find(U=>U.id===z.id);F&&q({...F,imageUrl:m.target.value})},className:"url-input"}),z.imageUrl&&n.jsxs("div",{className:"image-preview",children:[n.jsx("img",{src:z.imageUrl,alt:"Preview",onError:m=>m.target.style.display="none"}),n.jsx("small",{children:"Image Preview"})]}),n.jsxs("div",{className:"dialog-actions",children:[n.jsx("button",{onClick:()=>q(null),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>ye(z.id,z.imageUrl),className:"save-btn",children:"Save"})]})]})]})}),L&&n.jsx("div",{className:"dialog-overlay",children:n.jsxs("div",{className:"dialog",children:[n.jsxs("div",{className:"dialog-header",children:[n.jsx("h3",{children:L.text}),n.jsx("button",{onClick:()=>TA(null),className:"close-btn",children:n.jsx(Ya,{size:20})})]}),n.jsx("div",{className:"dialog-content",children:n.jsx("p",{children:L.description})})]})}),n.jsxs("div",{className:"zoom-controls",children:[n.jsx("button",{className:"zoom-btn",onClick:Ge,title:"Zoom Out",children:"-"}),n.jsxs("span",{className:"zoom-level",children:[Math.round(mA*100),"%"]}),n.jsx("button",{className:"zoom-btn",onClick:_e,title:"Zoom In",children:"+"}),n.jsx("button",{className:"zoom-btn reset",onClick:H,title:"Reset View",children:"⌂"})]}),n.jsx("div",{className:"scroll-hint",children:"Use arrow keys ← → ↑ ↓ to navigate"})]}):C==="json"?n.jsxs("div",{className:"json-editor",children:[n.jsx("div",{className:"json-actions",children:n.jsxs("button",{onClick:()=>{const m=document.createElement("input");m.type="file",m.accept=".json",m.onchange=y,m.click()},className:"import-btn",children:[n.jsx(wn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:gA,onChange:m=>hA(m.target.value),className:"json-textarea",placeholder:"Paste your JSON data here..."}),n.jsxs("button",{onClick:nA,className:"import-btn",children:[n.jsx(ya,{size:16})," Apply JSON"]})]}):n.jsxs("div",{className:"batch-edit-container",children:[n.jsxs("div",{className:"batch-edit-header",children:[n.jsx("h3",{children:"Batch Edit All Nodes"}),n.jsx("p",{children:'Edit multiple nodes at once. Changes are applied when you click "Apply Changes".'})]}),n.jsx("div",{className:"batch-edit-table",children:n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"ID"}),n.jsx("th",{children:"Main Text"}),n.jsx("th",{children:"Subtext"}),n.jsx("th",{children:"Description"}),n.jsx("th",{children:"Image URL"})]})}),n.jsx("tbody",{children:IA.map(m=>n.jsxs("tr",{children:[n.jsx("td",{className:"id-cell",children:m.id}),n.jsx("td",{children:n.jsx("input",{type:"text",value:m.text,onChange:F=>b(m.id,"text",F.target.value),className:"batch-input",placeholder:"Main text..."})}),n.jsx("td",{children:n.jsx("input",{type:"text",value:m.subtext,onChange:F=>b(m.id,"subtext",F.target.value),className:"batch-input",placeholder:"Subtext..."})}),n.jsx("td",{children:n.jsx("textarea",{value:m.description,onChange:F=>b(m.id,"description",F.target.value),className:"batch-textarea",placeholder:"Description...",rows:"2"})}),n.jsx("td",{children:n.jsx("input",{type:"url",value:m.imageUrl,onChange:F=>b(m.id,"imageUrl",F.target.value),className:"batch-input",placeholder:"Image URL..."})})]},m.id))})]})}),n.jsxs("div",{className:"batch-edit-actions",children:[n.jsx("button",{onClick:()=>Z("editor"),className:"cancel-btn",children:"Cancel"}),n.jsxs("button",{onClick:Q,className:"save-btn",children:[n.jsx(ya,{size:16})," Apply Changes"]})]})]}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},uQ=({activityDiagrams:i,onCreateActivityDiagram:r,onLoadActivityDiagram:s,onDeleteActivityDiagram:o})=>{const[d,u]=k.useState(!1);return n.jsxs("div",{className:"activity-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(YB,{size:48})}),n.jsx("h2",{children:"Activity Diagram Designer"}),n.jsx("p",{children:"Model business workflows and processes with UML activity diagrams"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(At,{size:16})," New Activity Diagram"]})}),i.length>0&&n.jsxs("div",{className:"diagram-list",children:[n.jsx("h3",{children:"Your Activity Diagrams"}),i.map(f=>n.jsxs("div",{className:"diagram-card",onClick:()=>s(f),children:[n.jsxs("div",{className:"diagram-card-content",children:[n.jsx("div",{className:"diagram-card-name",children:f.name}),n.jsxs("div",{className:"diagram-card-meta",children:[n.jsx("span",{children:new Date(f.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[f.nodes?.length||0," nodes • ",f.edges?.length||0," transitions"]})]})]}),n.jsxs("div",{className:"diagram-card-actions",children:[n.jsx("button",{onClick:x=>{x.stopPropagation(),s(f)},className:"open-btn",children:n.jsx(_n,{size:16})}),n.jsx("button",{onClick:x=>{x.stopPropagation(),confirm("Delete this activity diagram?")&&o(f.id)},className:"delete-btn",children:n.jsx(Fe,{size:16})})]})]},f.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Activity Diagram"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Diagram Name"}),n.jsx("input",{type:"text",placeholder:"e.g., User Registration Process",id:"diagramName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const f=document.getElementById("diagramName").value;f.trim()&&(r(f),u(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},fQ=({activityDiagram:i,swimlanes:r=[],nodes:s=[],edges:o=[],onUpdateActivityDiagram:d,onBack:u})=>{const f=k.useRef(null),x=k.useRef(null),[g,B]=k.useState(null),[v,S]=k.useState(null),[M,oA]=k.useState(1),[AA,dA]=k.useState(null),[DA,NA]=k.useState(!1),[pA,JA]=k.useState({x:0,y:0}),[mA,bA]=k.useState("editor"),[G,OA]=k.useState(""),[V,lA]=k.useState("select"),[_A,XA]=k.useState(!1),[QA,LA]=k.useState(null),[qA,WA]=k.useState({x:0,y:0}),[Y,xA]=k.useState(""),[EA]=k.useState(220);k.useEffect(()=>{OA(JSON.stringify({name:i.name,swimlanes:r,nodes:s,edges:o},null,2))},[r,s,o,i.name]);const PA={initial:{width:40,height:40,color:"#10b981",shape:"circle"},activity:{width:120,height:60,color:"#60a5fa",shape:"rounded"},decision:{width:80,height:80,color:"#f59e0b",shape:"diamond"},final:{width:40,height:40,color:"#1e293b",shape:"doublecircle"},fork:{width:80,height:10,color:"#6b7280",shape:"rectangle"},join:{width:80,height:10,color:"#6b7280",shape:"rectangle"}},C=(K,uA)=>{const KA=PA[K];if(K==="activity"){const O=Math.max(100,uA.length*8+40);return{...KA,width:Math.min(O,180)}}return KA},Z=K=>{const uA=r.find(O=>O.id===K);if(!uA)return null;const KA=r.findIndex(O=>O.id===K);return{...uA,x:KA*EA,width:EA,centerX:KA*EA+EA/2}},gA=K=>{const uA=Z(K.swimlaneId);if(!uA)return K;const KA=uA.centerX-K.width/2;return{...K,x:KA}},hA=(K,uA,KA)=>{const O=Z(K.swimlaneId);if(!O)return{x:uA,y:KA};const sA=O.x+10,MA=O.x+O.width-K.width-10,fA=60,CA=Math.max(sA,Math.min(MA,uA)),de=Math.max(fA,KA);return{x:CA,y:de}},jA=(K,uA)=>{const KA=K+uA/2;for(let O=0;O<r.length;O++){const sA=O*EA;if(KA>=sA&&KA<sA+EA)return r[O].id}return r[0]?.id||null},YA=()=>{if(!Y.trim())return;const K={id:Date.now(),name:Y,order:r.length};d({...i,swimlanes:[...r,K]}),xA("")},L=K=>{if(r.length<=1){alert("Cannot delete the last swimlane");return}const uA=r.filter(O=>O.id!==K),KA=s.filter(O=>O.swimlaneId!==K);d({...i,swimlanes:uA,nodes:KA}),S(null)},TA=(K,uA)=>{if(K.stopPropagation(),B(uA.id),V==="select"){dA(uA),NA(!0);const KA=x.current.getBoundingClientRect();JA({x:(K.clientX-KA.left)/M-uA.x,y:(K.clientY-KA.top)/M-uA.y})}else V==="connection"&&(LA(uA.id),XA(!0))},kA=k.useCallback(K=>{if(x.current){const uA=x.current.getBoundingClientRect(),KA=(K.clientX-uA.left)/M,O=(K.clientY-uA.top)/M;if(_A&&WA({x:KA,y:O}),DA&&AA){let sA=KA-pA.x,MA=O-pA.y;const fA=hA(AA,sA,MA),CA=jA(fA.x,AA.width),de=s.map(Be=>Be.id===AA.id?{...Be,x:fA.x,y:fA.y,swimlaneId:CA}:Be);d({...i,nodes:de})}}},[DA,_A,AA,pA,M,s,i,d]),BA=k.useCallback(K=>{if(_A&&QA&&x.current){const uA=x.current.getBoundingClientRect(),KA=(K.clientX-uA.left)/M,O=(K.clientY-uA.top)/M,sA=s.find(MA=>KA>=MA.x&&KA<=MA.x+MA.width&&O>=MA.y&&O<=MA.y+MA.height);if(sA&&sA.id!==QA&&!o.find(fA=>fA.source===QA&&fA.target===sA.id)){const fA={id:Date.now(),source:QA,target:sA.id,label:""};d({...i,edges:[...o,fA]})}}NA(!1),dA(null),XA(!1),LA(null)},[_A,QA,s,o,M,i,d]);k.useEffect(()=>(document.addEventListener("mousemove",kA),document.addEventListener("mouseup",BA),()=>{document.removeEventListener("mousemove",kA),document.removeEventListener("mouseup",BA)}),[kA,BA]);const z=(K,uA)=>{if(!uA&&r.length>0&&(uA=r[0].id),!Z(uA))return;const O={id:Date.now(),type:K,text:K==="initial"?"Start":K==="final"?"End":K==="decision"?"Decision":K==="fork"||K==="join"?"":"New Activity",y:200,swimlaneId:uA,...C(K,"New Activity")},sA=gA(O);d({...i,nodes:[...s,sA]}),B(sA.id)},q=K=>{const uA=s.filter(O=>O.id!==K),KA=o.filter(O=>O.source!==K&&O.target!==K);d({...i,nodes:uA,edges:KA}),B(null)},RA=K=>{d({...i,edges:o.filter(uA=>uA.id!==K)})},FA=(K,uA)=>{const KA=s.map(O=>O.id===K?{...O,text:uA,...C(O.type,uA)}:O);d({...i,nodes:KA})},IA=K=>{const uA=s.map(KA=>KA.id===K?gA(KA):KA);d({...i,nodes:uA})},rA=()=>oA(K=>Math.min(K*1.2,3)),ae=()=>oA(K=>Math.max(K/1.2,.3)),re=()=>oA(1),le=()=>{const K={name:i.name,swimlanes:r,nodes:s,edges:o};return JSON.stringify(K,null,2)},we=()=>{navigator.clipboard.writeText(le()),alert("JSON copied to clipboard!")},Ne=()=>{try{const K=JSON.parse(G);K.swimlanes&&K.nodes&&K.edges?(d({...i,name:K.name||i.name,swimlanes:K.swimlanes,nodes:K.nodes,edges:K.edges}),alert("Diagram imported successfully!")):alert("Invalid JSON format. Expected swimlanes, nodes and edges arrays.")}catch(K){alert("Error parsing JSON: "+K.message)}},se=K=>{const uA=K.target.files[0];if(!uA)return;const KA=new FileReader;KA.onload=O=>{OA(O.target.result)},KA.readAsText(uA)},Qe=(K,uA)=>{const KA=CA=>({x:CA.x+CA.width/2,y:CA.y+CA.height/2}),O=KA(K),sA=KA(uA),MA=sA.x-O.x,fA=sA.y-O.y;if(Math.abs(MA)>Math.abs(fA)){const CA=O.y;return`M ${O.x} ${O.y} L ${sA.x} ${CA} L ${sA.x} ${sA.y}`}else{const CA=O.x;return`M ${O.x} ${O.y} L ${CA} ${sA.y} L ${sA.x} ${sA.y}`}},lt=(K,uA)=>{const KA=uA*EA,O=Math.max(1e3,s.reduce((sA,MA)=>Math.max(sA,MA.y+MA.height+150),0));return n.jsxs("g",{children:[n.jsx("rect",{x:KA,y:0,width:EA,height:O,fill:uA%2===0?"#ffffff":"#f9fafb",stroke:"#e5e7eb",strokeWidth:"2"}),n.jsx("text",{x:KA+EA/2,y:30,textAnchor:"middle",fontSize:"15",fontWeight:"600",fill:"#1f2937",children:K.name}),n.jsx("line",{x1:KA,y1:55,x2:KA+EA,y2:55,stroke:"#d1d5db",strokeWidth:"2"})]},K.id)},We=K=>{const uA=g===K.id,KA=PA[K.type];return n.jsxs("g",{className:"node-group",onMouseDown:O=>TA(O,K),style:{cursor:V==="select"?"move":"crosshair",pointerEvents:"all"},children:[KA.shape==="circle"&&n.jsx("circle",{cx:K.x+K.width/2,cy:K.y+K.height/2,r:K.width/2,fill:KA.color,stroke:uA?"#3b82f6":"#fff",strokeWidth:uA?"3":"2",style:{filter:uA?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))":"none"}}),KA.shape==="doublecircle"&&n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:K.x+K.width/2,cy:K.y+K.height/2,r:K.width/2,fill:"none",stroke:KA.color,strokeWidth:"3",style:{filter:uA?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))":"none"}}),n.jsx("circle",{cx:K.x+K.width/2,cy:K.y+K.height/2,r:K.width/2-5,fill:KA.color,stroke:uA?"#3b82f6":"none",strokeWidth:uA?"2":"0"})]}),KA.shape==="rounded"&&n.jsx("rect",{x:K.x,y:K.y,width:K.width,height:K.height,rx:"12",fill:KA.color,stroke:uA?"#3b82f6":"#fff",strokeWidth:uA?"3":"2",style:{filter:uA?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))":"drop-shadow(0 2px 4px rgba(0,0,0,0.1))"}}),KA.shape==="diamond"&&n.jsx("polygon",{points:`
              ${K.x+K.width/2},${K.y} 
              ${K.x+K.width},${K.y+K.height/2} 
              ${K.x+K.width/2},${K.y+K.height} 
              ${K.x},${K.y+K.height/2}
            `,fill:KA.color,stroke:uA?"#3b82f6":"#fff",strokeWidth:uA?"3":"2",style:{filter:uA?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))":"drop-shadow(0 2px 4px rgba(0,0,0,0.1))"}}),KA.shape==="rectangle"&&n.jsx("rect",{x:K.x,y:K.y,width:K.width,height:K.height,fill:KA.color,stroke:uA?"#3b82f6":"#6b7280",strokeWidth:uA?"3":"2",style:{filter:uA?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))":"none"}}),K.type!=="fork"&&K.type!=="join"&&K.type!=="initial"&&K.type!=="final"&&n.jsx("text",{x:K.x+K.width/2,y:K.y+K.height/2,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"12",fontWeight:"600",children:K.text.length>20?K.text.substring(0,20)+"...":K.text})]},K.id)},nt=K=>{const uA=s.find(sA=>sA.id===K.source),KA=s.find(sA=>sA.id===K.target);if(!uA||!KA)return null;const O=Qe(uA,KA);return n.jsxs("g",{className:"edge-group",children:[n.jsx("path",{d:O,stroke:"#6b7280",strokeWidth:"2",fill:"none",markerEnd:"url(#arrowhead)",style:{cursor:"pointer"},onClick:sA=>{sA.stopPropagation(),window.confirm("Delete this connection?")&&RA(K.id)}}),K.label&&n.jsx("text",{x:(uA.x+KA.x)/2,y:(uA.y+KA.y)/2-10,fill:"#374151",fontSize:"11",fontWeight:"500",style:{pointerEvents:"none"},children:K.label})]},K.id)},Te=Math.max(1e3,s.reduce((K,uA)=>Math.max(K,uA.y+uA.height+150),0)),xe=r.length*EA;return n.jsxs("div",{className:"activity-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:u,className:"back-btn",children:[n.jsx(Rn,{size:16})," Back"]}),n.jsx("div",{className:"toolbar-left",children:n.jsx("h2",{children:i.name})}),n.jsx("div",{className:"toolbar-center",children:n.jsxs("div",{className:"zoom-controls",children:[n.jsx("button",{onClick:ae,className:"zoom-btn",title:"Zoom Out",children:n.jsx(Ir,{size:16})}),n.jsxs("span",{className:"zoom-level",children:[Math.round(M*100),"%"]}),n.jsx("button",{onClick:rA,className:"zoom-btn",title:"Zoom In",children:n.jsx(Tr,{size:16})}),n.jsx("button",{onClick:re,className:"zoom-btn",title:"Reset Zoom",children:"Reset"})]})}),n.jsxs("div",{className:"toolbar-right",children:[n.jsxs("button",{onClick:we,className:"export-btn",title:"Copy JSON",children:[n.jsx(wa,{size:16})," Copy"]}),n.jsxs("button",{onClick:()=>{const K=new Blob([le()],{type:"application/json"}),uA=URL.createObjectURL(K),KA=document.createElement("a");KA.href=uA,KA.download=`${i.name.replace(/\s+/g,"-").toLowerCase()}.json`,document.body.appendChild(KA),KA.click(),document.body.removeChild(KA),URL.revokeObjectURL(uA)},className:"export-btn",title:"Download JSON",children:[n.jsx(bn,{size:16})," Export"]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${mA==="editor"?"active":""}`,onClick:()=>bA("editor"),children:"Diagram Editor"}),n.jsx("button",{className:`tab ${mA==="json"?"active":""}`,onClick:()=>bA("json"),children:"JSON Editor"})]}),mA==="editor"?n.jsxs("div",{className:"diagram-container",children:[n.jsxs("div",{className:"sidebar",children:[n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Tools"}),n.jsxs("button",{className:`tool-btn ${V==="select"?"active":""}`,onClick:()=>lA("select"),children:[n.jsx(Ob,{size:16})," Select & Move"]}),n.jsxs("button",{className:`tool-btn ${V==="connection"?"active":""}`,onClick:()=>lA("connection"),children:[n.jsx(dx,{size:16})," Create Connection"]})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Swimlanes"}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",value:Y,onChange:K=>xA(K.target.value),placeholder:"Swimlane name",onKeyPress:K=>K.key==="Enter"&&YA()})}),n.jsxs("button",{onClick:YA,className:"add-btn",children:[n.jsx(At,{size:16})," Add Swimlane"]}),n.jsx("div",{className:"list",children:r.map(K=>n.jsxs("div",{className:"list-item",children:[n.jsx("div",{className:"item-info",children:n.jsx("div",{className:"item-name",children:K.name})}),n.jsx("button",{onClick:()=>L(K.id),className:"delete-btn",title:"Delete swimlane",children:n.jsx(Fe,{size:14})})]},K.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Add Nodes"}),r.length>0&&n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Target Swimlane"}),n.jsx("select",{value:v||r[0]?.id||"",onChange:K=>S(parseInt(K.target.value)),children:r.map(K=>n.jsx("option",{value:K.id,children:K.name},K.id))})]}),n.jsxs("div",{className:"node-buttons",children:[n.jsxs("button",{onClick:()=>z("initial",v||r[0]?.id),title:"Start node",children:[n.jsx(Zb,{size:14})," Initial"]}),n.jsxs("button",{onClick:()=>z("activity",v||r[0]?.id),title:"Activity node",children:[n.jsx(cw,{size:14})," Activity"]}),n.jsxs("button",{onClick:()=>z("decision",v||r[0]?.id),title:"Decision node",children:[n.jsx(hb,{size:14})," Decision"]}),n.jsxs("button",{onClick:()=>z("fork",v||r[0]?.id),title:"Fork node",children:[n.jsx(cu,{size:14})," Fork"]}),n.jsxs("button",{onClick:()=>z("join",v||r[0]?.id),title:"Join node",children:[n.jsx(Nb,{size:14})," Join"]}),n.jsxs("button",{onClick:()=>z("final",v||r[0]?.id),title:"End node",children:[n.jsx(nb,{size:14})," Final"]})]})]})]}),n.jsx("div",{className:"canvas-wrapper",children:n.jsx("div",{className:"canvas",ref:x,style:{transform:`scale(${M})`,transformOrigin:"top left",width:xe,height:Te},children:n.jsxs("svg",{ref:f,width:xe,height:Te,style:{background:"#fff"},children:[n.jsx("defs",{children:n.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6b7280"})})}),r.map((K,uA)=>lt(K,uA)),o.map(K=>nt(K)),s.map(K=>We(K)),_A&&QA&&n.jsx("line",{x1:s.find(K=>K.id===QA)?.x+s.find(K=>K.id===QA)?.width/2,y1:s.find(K=>K.id===QA)?.y+s.find(K=>K.id===QA)?.height/2,x2:qA.x,y2:qA.y,stroke:"#3b82f6",strokeWidth:"2",strokeDasharray:"5,5",style:{pointerEvents:"none"}})]})})}),g&&n.jsxs("div",{className:"properties-panel",children:[n.jsx("h3",{children:"Node Properties"}),(()=>{const K=s.find(uA=>uA.id===g);return K?n.jsxs("div",{className:"property-group",children:[n.jsx("label",{children:"Node ID"}),n.jsx("input",{type:"text",value:K.id,disabled:!0,className:"disabled-input"}),K.type!=="fork"&&K.type!=="join"&&n.jsxs(n.Fragment,{children:[n.jsx("label",{children:"Text Label"}),n.jsx("input",{type:"text",value:K.text,onChange:uA=>FA(K.id,uA.target.value),placeholder:"Enter text"})]}),n.jsx("label",{children:"Node Type"}),n.jsxs("select",{value:K.type,onChange:uA=>{const KA=s.map(O=>O.id===g?{...O,type:uA.target.value,...C(uA.target.value,O.text)}:O);d({...i,nodes:KA})},children:[n.jsx("option",{value:"initial",children:"Initial Node"}),n.jsx("option",{value:"activity",children:"Activity"}),n.jsx("option",{value:"decision",children:"Decision"}),n.jsx("option",{value:"fork",children:"Fork"}),n.jsx("option",{value:"join",children:"Join"}),n.jsx("option",{value:"final",children:"Final Node"})]}),n.jsx("label",{children:"Swimlane"}),n.jsx("select",{value:K.swimlaneId||"",onChange:uA=>{const KA=parseInt(uA.target.value),O=s.map(sA=>{if(sA.id===g){const MA={...sA,swimlaneId:KA};return gA(MA)}return sA});d({...i,nodes:O})},children:r.map(uA=>n.jsx("option",{value:uA.id,children:uA.name},uA.id))}),n.jsx("label",{children:"Position"}),n.jsxs("div",{className:"position-group",children:[n.jsxs("div",{className:"position-item",children:[n.jsx("span",{children:"X:"}),n.jsx("input",{type:"number",value:Math.round(K.x),onChange:uA=>{const KA=parseInt(uA.target.value)||0,O=hA(K,KA,K.y),sA=s.map(MA=>MA.id===g?{...MA,x:O.x}:MA);d({...i,nodes:sA})}})]}),n.jsxs("div",{className:"position-item",children:[n.jsx("span",{children:"Y:"}),n.jsx("input",{type:"number",value:Math.round(K.y),onChange:uA=>{const KA=parseInt(uA.target.value)||0,O=hA(K,K.x,KA),sA=s.map(MA=>MA.id===g?{...MA,y:O.y}:MA);d({...i,nodes:sA})}})]})]}),n.jsxs("button",{onClick:()=>IA(g),className:"center-btn",children:[n.jsx(hx,{size:14})," Center in Swimlane"]}),n.jsxs("button",{onClick:()=>{window.confirm("Delete this node and all connected edges?")&&q(g)},className:"delete-node-btn",children:[n.jsx(Fe,{size:14})," Delete Node"]})]}):null})()]})]}):n.jsxs("div",{className:"json-editor",children:[n.jsxs("div",{className:"json-actions",children:[n.jsxs("button",{onClick:()=>{const K=document.createElement("input");K.type="file",K.accept=".json",K.onchange=se,K.click()},className:"import-btn",children:[n.jsx(wn,{size:16})," Import JSON File"]}),n.jsxs("button",{onClick:Ne,className:"import-btn apply-btn",children:[n.jsx(ya,{size:16})," Apply Changes"]})]}),n.jsx("textarea",{value:G,onChange:K=>OA(K.target.value),className:"json-textarea",placeholder:"Paste or edit JSON here..."})]}),n.jsx("style",{children:`
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
      `})]})},VA={PROJECT:"projects",FLOWCHART:"flowcharts",GANTT:"gantt",USE_CASE:"usecase",SEQUENCE:"sequence",ARCHITECTURE:"architecture",CLASS:"class",DOMAIN_MODEL:"domainmodel",MIND_MAP:"mindmap",ACTIVITY:"activity"},Od=()=>({projects:[],currentProject:null,flowcharts:[],currentFlowchart:null,ganttCharts:[],currentGanttChart:null,useCaseDiagrams:[],currentUseCaseDiagram:null,sequenceDiagrams:[],currentSequenceDiagram:null,architectureDiagrams:[],currentArchitectureDiagram:null,classDiagrams:[],currentClassDiagram:null,domainModels:[],currentDomainModel:null,mindMaps:[],currentMindMap:null,activityDiagrams:[],currentActivityDiagram:null}),hQ=()=>{const i=localStorage.getItem("evolutionChartData");if(!i)return Od();try{const r=JSON.parse(i);return{...Od(),...r}}catch(r){return console.error("Failed to parse localStorage data:",r),Od()}},zi=i=>{localStorage.setItem("evolutionChartData",JSON.stringify(i))},gQ=()=>{const[,i]=k.useReducer(z=>z+1,0),[r,s]=k.useState(VA.PROJECT),[o,d]=k.useState(""),u=()=>hQ(),f=(z,q,RA={})=>{const FA=u(),IA={id:Date.now(),name:q,createdAt:new Date().toISOString(),...RA},rA={...FA};switch(rA.currentProject=null,rA.currentFlowchart=null,rA.currentGanttChart=null,rA.currentUseCaseDiagram=null,rA.currentSequenceDiagram=null,rA.currentArchitectureDiagram=null,rA.currentClassDiagram=null,rA.currentDomainModel=null,rA.currentMindMap=null,rA.currentActivityDiagram=null,z){case VA.PROJECT:rA.projects=[...FA.projects,IA],rA.currentProject=IA;break;case VA.FLOWCHART:rA.flowcharts=[...FA.flowcharts,IA],rA.currentFlowchart=IA;break;case VA.GANTT:rA.ganttCharts=[...FA.ganttCharts,IA],rA.currentGanttChart=IA;break;case VA.USE_CASE:rA.useCaseDiagrams=[...FA.useCaseDiagrams,IA],rA.currentUseCaseDiagram=IA;break;case VA.SEQUENCE:rA.sequenceDiagrams=[...FA.sequenceDiagrams,IA],rA.currentSequenceDiagram=IA;break;case VA.ARCHITECTURE:rA.architectureDiagrams=[...FA.architectureDiagrams,IA],rA.currentArchitectureDiagram=IA;break;case VA.CLASS:rA.classDiagrams=[...FA.classDiagrams,IA],rA.currentClassDiagram=IA;break;case VA.DOMAIN_MODEL:rA.domainModels=[...FA.domainModels,IA],rA.currentDomainModel=IA;break;case VA.MIND_MAP:rA.mindMaps=[...FA.mindMaps,IA],rA.currentMindMap=IA;break;case VA.ACTIVITY:rA.activityDiagrams=[...FA.activityDiagrams,IA],rA.currentActivityDiagram=IA;break}zi(rA),i()},x=(z,q)=>{const RA=u(),FA={...RA};switch(z){case VA.PROJECT:FA.projects=RA.projects.filter(IA=>IA.id!==q),RA.currentProject?.id===q&&(FA.currentProject=null);break;case VA.FLOWCHART:FA.flowcharts=RA.flowcharts.filter(IA=>IA.id!==q),RA.currentFlowchart?.id===q&&(FA.currentFlowchart=null);break;case VA.GANTT:FA.ganttCharts=RA.ganttCharts.filter(IA=>IA.id!==q),RA.currentGanttChart?.id===q&&(FA.currentGanttChart=null);break;case VA.USE_CASE:FA.useCaseDiagrams=RA.useCaseDiagrams.filter(IA=>IA.id!==q),RA.currentUseCaseDiagram?.id===q&&(FA.currentUseCaseDiagram=null);break;case VA.SEQUENCE:FA.sequenceDiagrams=RA.sequenceDiagrams.filter(IA=>IA.id!==q),RA.currentSequenceDiagram?.id===q&&(FA.currentSequenceDiagram=null);break;case VA.ARCHITECTURE:FA.architectureDiagrams=RA.architectureDiagrams.filter(IA=>IA.id!==q),RA.currentArchitectureDiagram?.id===q&&(FA.currentArchitectureDiagram=null);break;case VA.CLASS:FA.classDiagrams=RA.classDiagrams.filter(IA=>IA.id!==q),RA.currentClassDiagram?.id===q&&(FA.currentClassDiagram=null);break;case VA.DOMAIN_MODEL:FA.domainModels=RA.domainModels.filter(IA=>IA.id!==q),RA.currentDomainModel?.id===q&&(FA.currentDomainModel=null);break;case VA.MIND_MAP:FA.mindMaps=RA.mindMaps.filter(IA=>IA.id!==q),RA.currentMindMap?.id===q&&(FA.currentMindMap=null);break;case VA.ACTIVITY:FA.activityDiagrams=RA.activityDiagrams.filter(IA=>IA.id!==q),RA.currentActivityDiagram?.id===q&&(FA.currentActivityDiagram=null);break}zi(FA),i()},g=(z,q)=>{const RA=u(),FA={...RA};switch(z){case VA.PROJECT:FA.projects=RA.projects.map(IA=>IA.id===q.id?q:IA),FA.currentProject=q;break;case VA.FLOWCHART:FA.flowcharts=RA.flowcharts.map(IA=>IA.id===q.id?q:IA),FA.currentFlowchart=q;break;case VA.GANTT:FA.ganttCharts=RA.ganttCharts.map(IA=>IA.id===q.id?q:IA),FA.currentGanttChart=q;break;case VA.USE_CASE:FA.useCaseDiagrams=RA.useCaseDiagrams.map(IA=>IA.id===q.id?q:IA),FA.currentUseCaseDiagram=q;break;case VA.SEQUENCE:FA.sequenceDiagrams=RA.sequenceDiagrams.map(IA=>IA.id===q.id?q:IA),FA.currentSequenceDiagram=q;break;case VA.ARCHITECTURE:FA.architectureDiagrams=RA.architectureDiagrams.map(IA=>IA.id===q.id?q:IA),FA.currentArchitectureDiagram=q;break;case VA.CLASS:FA.classDiagrams=RA.classDiagrams.map(IA=>IA.id===q.id?q:IA),FA.currentClassDiagram=q;break;case VA.DOMAIN_MODEL:FA.domainModels=RA.domainModels.map(IA=>IA.id===q.id?q:IA),FA.currentDomainModel=q;break;case VA.MIND_MAP:FA.mindMaps=RA.mindMaps.map(IA=>IA.id===q.id?q:IA),FA.currentMindMap=q;break;case VA.ACTIVITY:FA.activityDiagrams=RA.activityDiagrams.map(IA=>IA.id===q.id?q:IA),FA.currentActivityDiagram=q;break}zi(FA),i()},B=(z,q,RA,FA)=>{f(VA.PROJECT,z,{timelineStart:q,timelineEnd:RA,timeUnit:FA,nodes:[],connections:[],zoom:1,pan:{x:0,y:0}})},v=z=>{f(VA.FLOWCHART,z,{nodes:[],edges:[],zoom:1,pan:{x:0,y:0}})},S=z=>{f(VA.GANTT,z,{tasks:[],startDate:new Date().toISOString(),endDate:new Date(Date.now()+30*24*60*60*1e3).toISOString()})},M=z=>{f(VA.USE_CASE,z,{actors:[],useCases:[],relationships:[],zoom:1,pan:{x:0,y:0}})},oA=z=>{f(VA.SEQUENCE,z,{participants:[],messages:[],zoom:1,pan:{x:0,y:0}})},AA=z=>{f(VA.ARCHITECTURE,z,{components:[],connections:[],zoom:1,pan:{x:0,y:0}})},dA=z=>{f(VA.CLASS,z,{classes:[],relationships:[],zoom:1,pan:{x:0,y:0}})},DA=z=>{f(VA.DOMAIN_MODEL,z,{entities:[],relationships:[],zoom:1,pan:{x:0,y:0}})},NA=z=>{f(VA.MIND_MAP,z,{nodes:[{id:1,text:"Central Idea",x:400,y:300,level:0,parentId:null,isRoot:!0,color:"#ff6b6b",width:140,height:40}],zoom:1,pan:{x:0,y:0}})},pA=z=>{f(VA.ACTIVITY,z,{swimlanes:[{id:Date.now(),name:"Default Swimlane",order:0}],nodes:[],edges:[],zoom:1,pan:{x:0,y:0}})},JA=z=>x(VA.PROJECT,z),mA=z=>x(VA.FLOWCHART,z),bA=z=>x(VA.GANTT,z),G=z=>x(VA.USE_CASE,z),OA=z=>x(VA.SEQUENCE,z),V=z=>x(VA.ARCHITECTURE,z),lA=z=>x(VA.CLASS,z),_A=z=>x(VA.DOMAIN_MODEL,z),XA=z=>x(VA.MIND_MAP,z),QA=z=>x(VA.ACTIVITY,z),LA=z=>g(VA.PROJECT,z),qA=z=>g(VA.FLOWCHART,z),WA=z=>g(VA.GANTT,z),Y=z=>g(VA.USE_CASE,z),xA=z=>g(VA.SEQUENCE,z),EA=z=>g(VA.ARCHITECTURE,z),PA=z=>g(VA.CLASS,z),C=z=>g(VA.DOMAIN_MODEL,z),Z=z=>g(VA.MIND_MAP,z),gA=z=>g(VA.ACTIVITY,z),hA=z=>{try{const q=JSON.parse(z);return f(VA.FLOWCHART,`Imported Flowchart ${new Date().toLocaleString()}`,{nodes:q.nodes||[],edges:q.edges||[],zoom:1,pan:{x:0,y:0}}),!0}catch(q){return console.error("Invalid JSON:",q),!1}},jA=()=>{const q={...u(),currentProject:null,currentFlowchart:null,currentGanttChart:null,currentUseCaseDiagram:null,currentSequenceDiagram:null,currentArchitectureDiagram:null,currentClassDiagram:null,currentDomainModel:null,currentMindMap:null,currentActivityDiagram:null};zi(q),i()},YA=(z,q)=>{const FA={...u(),currentProject:null,currentFlowchart:null,currentGanttChart:null,currentUseCaseDiagram:null,currentSequenceDiagram:null,currentArchitectureDiagram:null,currentClassDiagram:null,currentDomainModel:null,currentMindMap:null,currentActivityDiagram:null};switch(z){case VA.PROJECT:FA.currentProject=q;break;case VA.FLOWCHART:FA.currentFlowchart=q;break;case VA.GANTT:FA.currentGanttChart=q;break;case VA.USE_CASE:FA.currentUseCaseDiagram=q;break;case VA.SEQUENCE:FA.currentSequenceDiagram=q;break;case VA.ARCHITECTURE:FA.currentArchitectureDiagram=q;break;case VA.CLASS:FA.currentClassDiagram=q;break;case VA.DOMAIN_MODEL:FA.currentDomainModel=q;break;case VA.MIND_MAP:FA.currentMindMap=q;break;case VA.ACTIVITY:FA.currentActivityDiagram=q;break}zi(FA),i()},L={appContainer:{minHeight:"100vh",width:"97.3%",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",padding:"20px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},mainCard:{maxWidth:"1400px",margin:"0 auto",background:"rgba(255, 255, 255, 0.98)",backdropFilter:"blur(20px)",borderRadius:"24px",boxShadow:"0 25px 50px rgba(0, 0, 0, 0.15)",overflow:"hidden",minHeight:"85vh"},header:{background:"linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #ec4899 100%)",color:"white",padding:"40px 30px",textAlign:"center",position:"relative"},headerTitle:{fontSize:"36px",fontWeight:"800",margin:"0 0 12px 0",textShadow:"0 4px 8px rgba(0, 0, 0, 0.3)",letterSpacing:"-0.5px"},headerSubtitle:{fontSize:"18px",opacity:"0.95",margin:"0",fontWeight:"400"},modeSelector:{display:"flex",justifyContent:"center",padding:"30px 30px 0 30px",gap:"16px",marginBottom:"25px",flexWrap:"wrap"},tabButton:{padding:"16px 32px",border:"2px solid transparent",borderRadius:"50px",background:"rgba(0, 0, 0, 0.05)",color:"#64748b",fontSize:"16px",fontWeight:"600",cursor:"pointer",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",outline:"none",position:"relative",backdropFilter:"blur(10px)",marginBottom:"10px"},tabButtonActive:z=>({background:`linear-gradient(135deg, ${z} 0%, ${z} 100%)`,color:"white",borderColor:"rgba(255, 255, 255, 0.2)",boxShadow:`0 8px 25px rgba(${TA(z)}, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)`,transform:"translateY(-2px)"}),tabButtonHover:z=>({background:`rgba(${TA(z)}, 0.1)`,color:z})},TA=z=>{const q=parseInt(z.slice(1,3),16),RA=parseInt(z.slice(3,5),16),FA=parseInt(z.slice(5,7),16);return`${q}, ${RA}, ${FA}`},kA=()=>[{type:VA.PROJECT,label:"📊 Evolution Charts",color:"#4f46e5",component:n.jsx(yw,{projects:u().projects,onCreateProject:B,onLoadProject:z=>YA(VA.PROJECT,z),onDeleteProject:JA})},{type:VA.FLOWCHART,label:"🔄 Flowcharts",color:"#7c3aed",component:n.jsx(Cw,{flowcharts:u().flowcharts,onCreateFlowchart:v,onLoadFlowchart:z=>YA(VA.FLOWCHART,z),onDeleteFlowchart:mA,onImportFlowchart:hA})},{type:VA.GANTT,label:"📅 Gantt Charts",color:"#3b82f6",component:n.jsx(Uw,{ganttCharts:u().ganttCharts,onCreateGanttChart:S,onLoadGanttChart:z=>YA(VA.GANTT,z),onDeleteGanttChart:bA})},{type:VA.USE_CASE,label:"👥 Use Case",color:"#10b981",component:n.jsx(q2,{useCaseDiagrams:u().useCaseDiagrams,onCreateUseCaseDiagram:M,onLoadUseCaseDiagram:z=>YA(VA.USE_CASE,z),onDeleteUseCaseDiagram:G})},{type:VA.SEQUENCE,label:"↔️ Sequence",color:"#06b6d4",component:n.jsx(tQ,{sequenceDiagrams:u().sequenceDiagrams,onCreateSequenceDiagram:oA,onLoadSequenceDiagram:z=>YA(VA.SEQUENCE,z),onDeleteSequenceDiagram:OA})},{type:VA.ARCHITECTURE,label:"🏛️ Architecture",color:"#8b5cf6",component:n.jsx(aQ,{architectureDiagrams:u().architectureDiagrams,onCreateArchitectureDiagram:AA,onLoadArchitectureDiagram:z=>YA(VA.ARCHITECTURE,z),onDeleteArchitectureDiagram:V})},{type:VA.CLASS,label:"📐 Class Diagram",color:"#ec4899",component:n.jsx(iQ,{classDiagrams:u().classDiagrams,onCreateClassDiagram:dA,onLoadClassDiagram:z=>YA(VA.CLASS,z),onDeleteClassDiagram:lA})},{type:VA.DOMAIN_MODEL,label:"🏢 Domain Model",color:"#06b6d4",component:n.jsx(sQ,{domainModels:u().domainModels,onCreateDomainModel:DA,onLoadDomainModel:z=>YA(VA.DOMAIN_MODEL,z),onDeleteDomainModel:_A})},{type:VA.MIND_MAP,label:"🧠 Mind Maps",color:"#10b981",component:n.jsx(cQ,{mindMaps:u().mindMaps,onCreateMindMap:NA,onLoadMindMap:z=>YA(VA.MIND_MAP,z),onDeleteMindMap:XA})},{type:VA.ACTIVITY,label:"⚡ Activity Diagram",color:"#f59e0b",component:n.jsx(uQ,{activityDiagrams:u().activityDiagrams,onCreateActivityDiagram:pA,onLoadActivityDiagram:z=>YA(VA.ACTIVITY,z),onDeleteActivityDiagram:QA})}],BA=u();return n.jsx("div",{style:L.appContainer,children:n.jsx("div",{style:L.mainCard,children:BA.currentProject?n.jsx(vw,{project:BA.currentProject,nodes:BA.currentProject.nodes||[],connections:BA.currentProject.connections||[],onUpdateProject:LA,onBack:jA}):BA.currentFlowchart?n.jsx(Qw,{flowchart:BA.currentFlowchart,nodes:BA.currentFlowchart.nodes||[],edges:BA.currentFlowchart.edges||[],jsonInput:o,onJsonInputChange:d,onImportJson:hA,onUpdateFlowchart:qA,onBack:jA}):BA.currentGanttChart?n.jsx(W2,{ganttChart:BA.currentGanttChart,tasks:BA.currentGanttChart.tasks||[],onUpdateGanttChart:WA,onBack:jA}):BA.currentUseCaseDiagram?n.jsx(eQ,{useCaseDiagram:BA.currentUseCaseDiagram,actors:BA.currentUseCaseDiagram.actors||[],useCases:BA.currentUseCaseDiagram.useCases||[],relationships:BA.currentUseCaseDiagram.relationships||[],onUpdateUseCaseDiagram:Y,onBack:jA}):BA.currentSequenceDiagram?n.jsx(nQ,{sequenceDiagram:BA.currentSequenceDiagram,participants:BA.currentSequenceDiagram.participants||[],messages:BA.currentSequenceDiagram.messages||[],onUpdateSequenceDiagram:xA,onBack:jA}):BA.currentArchitectureDiagram?n.jsx(rQ,{architectureDiagram:BA.currentArchitectureDiagram,components:BA.currentArchitectureDiagram.components||[],connections:BA.currentArchitectureDiagram.connections||[],onUpdateArchitectureDiagram:EA,onBack:jA}):BA.currentClassDiagram?n.jsx(oQ,{classDiagram:BA.currentClassDiagram,classes:BA.currentClassDiagram.classes||[],relationships:BA.currentClassDiagram.relationships||[],onUpdateClassDiagram:PA,onBack:jA}):BA.currentDomainModel?n.jsx(lQ,{domainModel:BA.currentDomainModel,entities:BA.currentDomainModel.entities||[],relationships:BA.currentDomainModel.relationships||[],onUpdateDomainModel:C,onBack:jA}):BA.currentMindMap?n.jsx(dQ,{mindMap:BA.currentMindMap,nodes:BA.currentMindMap.nodes||[],onUpdateMindMap:Z,onBack:jA}):BA.currentActivityDiagram?n.jsx(fQ,{activityDiagram:BA.currentActivityDiagram,swimlanes:BA.currentActivityDiagram.swimlanes||[],nodes:BA.currentActivityDiagram.nodes||[],edges:BA.currentActivityDiagram.edges||[],onUpdateActivityDiagram:gA,onBack:jA}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:L.header,children:[n.jsx("h1",{style:L.headerTitle,children:"Visual Designer Suite"}),n.jsx("p",{style:L.headerSubtitle,children:"Create stunning diagrams and charts"})]}),n.jsx("div",{style:L.modeSelector,children:kA().map(z=>n.jsx("button",{onClick:()=>s(z.type),style:{...L.tabButton,...r===z.type?L.tabButtonActive(z.color):{}},onMouseEnter:q=>{r!==z.type&&(q.target.style.background=L.tabButtonHover(z.color).background,q.target.style.color=L.tabButtonHover(z.color).color)},onMouseLeave:q=>{r!==z.type&&(q.target.style.background=L.tabButton.background,q.target.style.color=L.tabButton.color)},children:z.label},z.type))}),kA().find(z=>z.type===r)?.component]})})})};LB.createRoot(document.getElementById("root")).render(n.jsx(k.StrictMode,{children:n.jsx(gQ,{})}));
