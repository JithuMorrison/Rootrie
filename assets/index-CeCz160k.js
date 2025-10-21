(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const u of d)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function s(d){const u={};return d.integrity&&(u.integrity=d.integrity),d.referrerPolicy&&(u.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?u.credentials="include":d.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(d){if(d.ep)return;d.ep=!0;const u=s(d);fetch(d.href,u)}})();function QB(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ld={exports:{}},Ci={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function UB(){if(qg)return Ci;qg=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(o,d,u){var h=null;if(u!==void 0&&(h=""+u),d.key!==void 0&&(h=""+d.key),"key"in d){u={};for(var B in d)B!=="key"&&(u[B]=d[B])}else u=d;return d=u.ref,{$$typeof:i,type:o,key:h,ref:d!==void 0?d:null,props:u}}return Ci.Fragment=r,Ci.jsx=s,Ci.jsxs=s,Ci}var Wg;function FB(){return Wg||(Wg=1,ld.exports=UB()),ld.exports}var n=FB(),cd={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function EB(){if(Pg)return re;Pg=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),F=Symbol.iterator;function N(U){return U===null||typeof U!="object"?null:(U=F&&U[F]||U["@@iterator"],typeof U=="function"?U:null)}var eA={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,lA={};function jA(U,V,dA){this.props=U,this.context=V,this.refs=lA,this.updater=dA||eA}jA.prototype.isReactComponent={},jA.prototype.setState=function(U,V){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,V,"setState")},jA.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function wA(){}wA.prototype=jA.prototype;function uA(U,V,dA){this.props=U,this.context=V,this.refs=lA,this.updater=dA||eA}var kA=uA.prototype=new wA;kA.constructor=uA,P(kA,jA.prototype),kA.isPureReactComponent=!0;var sA=Array.isArray,xA={H:null,A:null,T:null,S:null,V:null},X=Object.prototype.hasOwnProperty;function EA(U,V,dA,tA,vA,HA){return dA=HA.ref,{$$typeof:i,type:U,key:V,ref:dA!==void 0?dA:null,props:HA}}function z(U,V){return EA(U.type,V,void 0,void 0,void 0,U.props)}function nA(U){return typeof U=="object"&&U!==null&&U.$$typeof===i}function fA(U){var V={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(dA){return V[dA]})}var FA=/\/+/g;function rA(U,V){return typeof U=="object"&&U!==null&&U.key!=null?fA(""+U.key):V.toString(36)}function LA(){}function RA(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(LA,LA):(U.status="pending",U.then(function(V){U.status==="pending"&&(U.status="fulfilled",U.value=V)},function(V){U.status==="pending"&&(U.status="rejected",U.reason=V)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function IA(U,V,dA,tA,vA){var HA=typeof U;(HA==="undefined"||HA==="boolean")&&(U=null);var M=!1;if(U===null)M=!0;else switch(HA){case"bigint":case"string":case"number":M=!0;break;case"object":switch(U.$$typeof){case i:case r:M=!0;break;case Q:return M=U._init,IA(M(U._payload),V,dA,tA,vA)}}if(M)return vA=vA(U),M=tA===""?"."+rA(U,0):tA,sA(vA)?(dA="",M!=null&&(dA=M.replace(FA,"$&/")+"/"),IA(vA,V,dA,"",function(cA){return cA})):vA!=null&&(nA(vA)&&(vA=z(vA,dA+(vA.key==null||U&&U.key===vA.key?"":(""+vA.key).replace(FA,"$&/")+"/")+M)),V.push(vA)),1;M=0;var yA=tA===""?".":tA+":";if(sA(U))for(var UA=0;UA<U.length;UA++)tA=U[UA],HA=yA+rA(tA,UA),M+=IA(tA,V,dA,HA,vA);else if(UA=N(U),typeof UA=="function")for(U=UA.call(U),UA=0;!(tA=U.next()).done;)tA=tA.value,HA=yA+rA(tA,UA++),M+=IA(tA,V,dA,HA,vA);else if(HA==="object"){if(typeof U.then=="function")return IA(RA(U),V,dA,tA,vA);throw V=String(U),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return M}function _(U,V,dA){if(U==null)return U;var tA=[],vA=0;return IA(U,tA,"","",function(HA){return V.call(dA,HA,vA++)}),tA}function aA(U){if(U._status===-1){var V=U._result;V=V(),V.then(function(dA){(U._status===0||U._status===-1)&&(U._status=1,U._result=dA)},function(dA){(U._status===0||U._status===-1)&&(U._status=2,U._result=dA)}),U._status===-1&&(U._status=0,U._result=V)}if(U._status===1)return U._result.default;throw U._result}var hA=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function OA(){}return re.Children={map:_,forEach:function(U,V,dA){_(U,function(){V.apply(this,arguments)},dA)},count:function(U){var V=0;return _(U,function(){V++}),V},toArray:function(U){return _(U,function(V){return V})||[]},only:function(U){if(!nA(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},re.Component=jA,re.Fragment=s,re.Profiler=d,re.PureComponent=uA,re.StrictMode=o,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=xA,re.__COMPILER_RUNTIME={__proto__:null,c:function(U){return xA.H.useMemoCache(U)}},re.cache=function(U){return function(){return U.apply(null,arguments)}},re.cloneElement=function(U,V,dA){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var tA=P({},U.props),vA=U.key,HA=void 0;if(V!=null)for(M in V.ref!==void 0&&(HA=void 0),V.key!==void 0&&(vA=""+V.key),V)!X.call(V,M)||M==="key"||M==="__self"||M==="__source"||M==="ref"&&V.ref===void 0||(tA[M]=V[M]);var M=arguments.length-2;if(M===1)tA.children=dA;else if(1<M){for(var yA=Array(M),UA=0;UA<M;UA++)yA[UA]=arguments[UA+2];tA.children=yA}return EA(U.type,vA,void 0,void 0,HA,tA)},re.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},re.createElement=function(U,V,dA){var tA,vA={},HA=null;if(V!=null)for(tA in V.key!==void 0&&(HA=""+V.key),V)X.call(V,tA)&&tA!=="key"&&tA!=="__self"&&tA!=="__source"&&(vA[tA]=V[tA]);var M=arguments.length-2;if(M===1)vA.children=dA;else if(1<M){for(var yA=Array(M),UA=0;UA<M;UA++)yA[UA]=arguments[UA+2];vA.children=yA}if(U&&U.defaultProps)for(tA in M=U.defaultProps,M)vA[tA]===void 0&&(vA[tA]=M[tA]);return EA(U,HA,void 0,void 0,null,vA)},re.createRef=function(){return{current:null}},re.forwardRef=function(U){return{$$typeof:B,render:U}},re.isValidElement=nA,re.lazy=function(U){return{$$typeof:Q,_payload:{_status:-1,_result:U},_init:aA}},re.memo=function(U,V){return{$$typeof:w,type:U,compare:V===void 0?null:V}},re.startTransition=function(U){var V=xA.T,dA={};xA.T=dA;try{var tA=U(),vA=xA.S;vA!==null&&vA(dA,tA),typeof tA=="object"&&tA!==null&&typeof tA.then=="function"&&tA.then(OA,hA)}catch(HA){hA(HA)}finally{xA.T=V}},re.unstable_useCacheRefresh=function(){return xA.H.useCacheRefresh()},re.use=function(U){return xA.H.use(U)},re.useActionState=function(U,V,dA){return xA.H.useActionState(U,V,dA)},re.useCallback=function(U,V){return xA.H.useCallback(U,V)},re.useContext=function(U){return xA.H.useContext(U)},re.useDebugValue=function(){},re.useDeferredValue=function(U,V){return xA.H.useDeferredValue(U,V)},re.useEffect=function(U,V,dA){var tA=xA.H;if(typeof dA=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return tA.useEffect(U,V)},re.useId=function(){return xA.H.useId()},re.useImperativeHandle=function(U,V,dA){return xA.H.useImperativeHandle(U,V,dA)},re.useInsertionEffect=function(U,V){return xA.H.useInsertionEffect(U,V)},re.useLayoutEffect=function(U,V){return xA.H.useLayoutEffect(U,V)},re.useMemo=function(U,V){return xA.H.useMemo(U,V)},re.useOptimistic=function(U,V){return xA.H.useOptimistic(U,V)},re.useReducer=function(U,V,dA){return xA.H.useReducer(U,V,dA)},re.useRef=function(U){return xA.H.useRef(U)},re.useState=function(U){return xA.H.useState(U)},re.useSyncExternalStore=function(U,V,dA){return xA.H.useSyncExternalStore(U,V,dA)},re.useTransition=function(){return xA.H.useTransition()},re.version="19.1.0",re}var $g;function iu(){return $g||($g=1,cd.exports=EB()),cd.exports}var H=iu();const SB=QB(H);var dd={exports:{}},Qi={},ud={exports:{}},fd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function jB(){return Ap||(Ap=1,function(i){function r(_,aA){var hA=_.length;_.push(aA);A:for(;0<hA;){var OA=hA-1>>>1,U=_[OA];if(0<d(U,aA))_[OA]=aA,_[hA]=U,hA=OA;else break A}}function s(_){return _.length===0?null:_[0]}function o(_){if(_.length===0)return null;var aA=_[0],hA=_.pop();if(hA!==aA){_[0]=hA;A:for(var OA=0,U=_.length,V=U>>>1;OA<V;){var dA=2*(OA+1)-1,tA=_[dA],vA=dA+1,HA=_[vA];if(0>d(tA,hA))vA<U&&0>d(HA,tA)?(_[OA]=HA,_[vA]=hA,OA=vA):(_[OA]=tA,_[dA]=hA,OA=dA);else if(vA<U&&0>d(HA,hA))_[OA]=HA,_[vA]=hA,OA=vA;else break A}}return aA}function d(_,aA){var hA=_.sortIndex-aA.sortIndex;return hA!==0?hA:_.id-aA.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,B=h.now();i.unstable_now=function(){return h.now()-B}}var m=[],w=[],Q=1,F=null,N=3,eA=!1,P=!1,lA=!1,jA=!1,wA=typeof setTimeout=="function"?setTimeout:null,uA=typeof clearTimeout=="function"?clearTimeout:null,kA=typeof setImmediate<"u"?setImmediate:null;function sA(_){for(var aA=s(w);aA!==null;){if(aA.callback===null)o(w);else if(aA.startTime<=_)o(w),aA.sortIndex=aA.expirationTime,r(m,aA);else break;aA=s(w)}}function xA(_){if(lA=!1,sA(_),!P)if(s(m)!==null)P=!0,X||(X=!0,rA());else{var aA=s(w);aA!==null&&IA(xA,aA.startTime-_)}}var X=!1,EA=-1,z=5,nA=-1;function fA(){return jA?!0:!(i.unstable_now()-nA<z)}function FA(){if(jA=!1,X){var _=i.unstable_now();nA=_;var aA=!0;try{A:{P=!1,lA&&(lA=!1,uA(EA),EA=-1),eA=!0;var hA=N;try{e:{for(sA(_),F=s(m);F!==null&&!(F.expirationTime>_&&fA());){var OA=F.callback;if(typeof OA=="function"){F.callback=null,N=F.priorityLevel;var U=OA(F.expirationTime<=_);if(_=i.unstable_now(),typeof U=="function"){F.callback=U,sA(_),aA=!0;break e}F===s(m)&&o(m),sA(_)}else o(m);F=s(m)}if(F!==null)aA=!0;else{var V=s(w);V!==null&&IA(xA,V.startTime-_),aA=!1}}break A}finally{F=null,N=hA,eA=!1}aA=void 0}}finally{aA?rA():X=!1}}}var rA;if(typeof kA=="function")rA=function(){kA(FA)};else if(typeof MessageChannel<"u"){var LA=new MessageChannel,RA=LA.port2;LA.port1.onmessage=FA,rA=function(){RA.postMessage(null)}}else rA=function(){wA(FA,0)};function IA(_,aA){EA=wA(function(){_(i.unstable_now())},aA)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(_){_.callback=null},i.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<_?Math.floor(1e3/_):5},i.unstable_getCurrentPriorityLevel=function(){return N},i.unstable_next=function(_){switch(N){case 1:case 2:case 3:var aA=3;break;default:aA=N}var hA=N;N=aA;try{return _()}finally{N=hA}},i.unstable_requestPaint=function(){jA=!0},i.unstable_runWithPriority=function(_,aA){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var hA=N;N=_;try{return aA()}finally{N=hA}},i.unstable_scheduleCallback=function(_,aA,hA){var OA=i.unstable_now();switch(typeof hA=="object"&&hA!==null?(hA=hA.delay,hA=typeof hA=="number"&&0<hA?OA+hA:OA):hA=OA,_){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=hA+U,_={id:Q++,callback:aA,priorityLevel:_,startTime:hA,expirationTime:U,sortIndex:-1},hA>OA?(_.sortIndex=hA,r(w,_),s(m)===null&&_===s(w)&&(lA?(uA(EA),EA=-1):lA=!0,IA(xA,hA-OA))):(_.sortIndex=U,r(m,_),P||eA||(P=!0,X||(X=!0,rA()))),_},i.unstable_shouldYield=fA,i.unstable_wrapCallback=function(_){var aA=N;return function(){var hA=N;N=aA;try{return _.apply(this,arguments)}finally{N=hA}}}}(fd)),fd}var ep;function HB(){return ep||(ep=1,ud.exports=jB()),ud.exports}var hd={exports:{}},ht={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp;function NB(){if(tp)return ht;tp=1;var i=iu();function r(m){var w="https://react.dev/errors/"+m;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var Q=2;Q<arguments.length;Q++)w+="&args[]="+encodeURIComponent(arguments[Q])}return"Minified React error #"+m+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(r(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},d=Symbol.for("react.portal");function u(m,w,Q){var F=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:F==null?null:""+F,children:m,containerInfo:w,implementation:Q}}var h=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function B(m,w){if(m==="font")return"";if(typeof w=="string")return w==="use-credentials"?w:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ht.createPortal=function(m,w){var Q=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(r(299));return u(m,w,null,Q)},ht.flushSync=function(m){var w=h.T,Q=o.p;try{if(h.T=null,o.p=2,m)return m()}finally{h.T=w,o.p=Q,o.d.f()}},ht.preconnect=function(m,w){typeof m=="string"&&(w?(w=w.crossOrigin,w=typeof w=="string"?w==="use-credentials"?w:"":void 0):w=null,o.d.C(m,w))},ht.prefetchDNS=function(m){typeof m=="string"&&o.d.D(m)},ht.preinit=function(m,w){if(typeof m=="string"&&w&&typeof w.as=="string"){var Q=w.as,F=B(Q,w.crossOrigin),N=typeof w.integrity=="string"?w.integrity:void 0,eA=typeof w.fetchPriority=="string"?w.fetchPriority:void 0;Q==="style"?o.d.S(m,typeof w.precedence=="string"?w.precedence:void 0,{crossOrigin:F,integrity:N,fetchPriority:eA}):Q==="script"&&o.d.X(m,{crossOrigin:F,integrity:N,fetchPriority:eA,nonce:typeof w.nonce=="string"?w.nonce:void 0})}},ht.preinitModule=function(m,w){if(typeof m=="string")if(typeof w=="object"&&w!==null){if(w.as==null||w.as==="script"){var Q=B(w.as,w.crossOrigin);o.d.M(m,{crossOrigin:Q,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0})}}else w==null&&o.d.M(m)},ht.preload=function(m,w){if(typeof m=="string"&&typeof w=="object"&&w!==null&&typeof w.as=="string"){var Q=w.as,F=B(Q,w.crossOrigin);o.d.L(m,Q,{crossOrigin:F,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,type:typeof w.type=="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy=="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet=="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes=="string"?w.imageSizes:void 0,media:typeof w.media=="string"?w.media:void 0})}},ht.preloadModule=function(m,w){if(typeof m=="string")if(w){var Q=B(w.as,w.crossOrigin);o.d.m(m,{as:typeof w.as=="string"&&w.as!=="script"?w.as:void 0,crossOrigin:Q,integrity:typeof w.integrity=="string"?w.integrity:void 0})}else o.d.m(m)},ht.requestFormReset=function(m){o.d.r(m)},ht.unstable_batchedUpdates=function(m,w){return m(w)},ht.useFormState=function(m,w,Q){return h.H.useFormState(m,w,Q)},ht.useFormStatus=function(){return h.H.useHostTransitionStatus()},ht.version="19.1.0",ht}var np;function kB(){if(np)return hd.exports;np=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),hd.exports=NB(),hd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap;function MB(){if(ap)return Qi;ap=1;var i=HB(),r=iu(),s=kB();function o(A){var e="https://react.dev/errors/"+A;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+A+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)}function u(A){var e=A,t=A;if(A.alternate)for(;e.return;)e=e.return;else{A=e;do e=A,(e.flags&4098)!==0&&(t=e.return),A=e.return;while(A)}return e.tag===3?t:null}function h(A){if(A.tag===13){var e=A.memoizedState;if(e===null&&(A=A.alternate,A!==null&&(e=A.memoizedState)),e!==null)return e.dehydrated}return null}function B(A){if(u(A)!==A)throw Error(o(188))}function m(A){var e=A.alternate;if(!e){if(e=u(A),e===null)throw Error(o(188));return e!==A?null:A}for(var t=A,a=e;;){var l=t.return;if(l===null)break;var c=l.alternate;if(c===null){if(a=l.return,a!==null){t=a;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===t)return B(l),A;if(c===a)return B(l),e;c=c.sibling}throw Error(o(188))}if(t.return!==a.return)t=l,a=c;else{for(var x=!1,y=l.child;y;){if(y===t){x=!0,t=l,a=c;break}if(y===a){x=!0,a=l,t=c;break}y=y.sibling}if(!x){for(y=c.child;y;){if(y===t){x=!0,t=c,a=l;break}if(y===a){x=!0,a=c,t=l;break}y=y.sibling}if(!x)throw Error(o(189))}}if(t.alternate!==a)throw Error(o(190))}if(t.tag!==3)throw Error(o(188));return t.stateNode.current===t?A:e}function w(A){var e=A.tag;if(e===5||e===26||e===27||e===6)return A;for(A=A.child;A!==null;){if(e=w(A),e!==null)return e;A=A.sibling}return null}var Q=Object.assign,F=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),eA=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),lA=Symbol.for("react.strict_mode"),jA=Symbol.for("react.profiler"),wA=Symbol.for("react.provider"),uA=Symbol.for("react.consumer"),kA=Symbol.for("react.context"),sA=Symbol.for("react.forward_ref"),xA=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),EA=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),nA=Symbol.for("react.activity"),fA=Symbol.for("react.memo_cache_sentinel"),FA=Symbol.iterator;function rA(A){return A===null||typeof A!="object"?null:(A=FA&&A[FA]||A["@@iterator"],typeof A=="function"?A:null)}var LA=Symbol.for("react.client.reference");function RA(A){if(A==null)return null;if(typeof A=="function")return A.$$typeof===LA?null:A.displayName||A.name||null;if(typeof A=="string")return A;switch(A){case P:return"Fragment";case jA:return"Profiler";case lA:return"StrictMode";case xA:return"Suspense";case X:return"SuspenseList";case nA:return"Activity"}if(typeof A=="object")switch(A.$$typeof){case eA:return"Portal";case kA:return(A.displayName||"Context")+".Provider";case uA:return(A._context.displayName||"Context")+".Consumer";case sA:var e=A.render;return A=A.displayName,A||(A=e.displayName||e.name||"",A=A!==""?"ForwardRef("+A+")":"ForwardRef"),A;case EA:return e=A.displayName||null,e!==null?e:RA(A.type)||"Memo";case z:e=A._payload,A=A._init;try{return RA(A(e))}catch{}}return null}var IA=Array.isArray,_=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,aA=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,hA={pending:!1,data:null,method:null,action:null},OA=[],U=-1;function V(A){return{current:A}}function dA(A){0>U||(A.current=OA[U],OA[U]=null,U--)}function tA(A,e){U++,OA[U]=A.current,A.current=e}var vA=V(null),HA=V(null),M=V(null),yA=V(null);function UA(A,e){switch(tA(M,e),tA(HA,A),tA(vA,null),e.nodeType){case 9:case 11:A=(A=e.documentElement)&&(A=A.namespaceURI)?Cg(A):0;break;default:if(A=e.tagName,e=e.namespaceURI)e=Cg(e),A=Qg(e,A);else switch(A){case"svg":A=1;break;case"math":A=2;break;default:A=0}}dA(vA),tA(vA,A)}function cA(){dA(vA),dA(HA),dA(M)}function D(A){A.memoizedState!==null&&tA(yA,A);var e=vA.current,t=Qg(e,A.type);e!==t&&(tA(HA,A),tA(vA,t))}function J(A){HA.current===A&&(dA(vA),dA(HA)),yA.current===A&&(dA(yA),Bi._currentValue=hA)}var MA=Object.prototype.hasOwnProperty,K=i.unstable_scheduleCallback,BA=i.unstable_cancelCallback,YA=i.unstable_shouldYield,_A=i.unstable_requestPaint,ZA=i.unstable_now,ne=i.unstable_getCurrentPriorityLevel,oe=i.unstable_ImmediatePriority,Oe=i.unstable_UserBlockingPriority,Fe=i.unstable_NormalPriority,Ge=i.unstable_LowPriority,ke=i.unstable_IdlePriority,Ve=i.log,qe=i.unstable_setDisableYieldValue,xe=null,fe=null;function C(A){if(typeof Ve=="function"&&qe(A),fe&&typeof fe.setStrictMode=="function")try{fe.setStrictMode(xe,A)}catch{}}var T=Math.clz32?Math.clz32:oA,W=Math.log,iA=Math.LN2;function oA(A){return A>>>=0,A===0?32:31-(W(A)/iA|0)|0}var CA=256,k=4194304;function QA(A){var e=A&42;if(e!==0)return e;switch(A&-A){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return A&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return A&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return A}}function SA(A,e,t){var a=A.pendingLanes;if(a===0)return 0;var l=0,c=A.suspendedLanes,x=A.pingedLanes;A=A.warmLanes;var y=a&134217727;return y!==0?(a=y&~c,a!==0?l=QA(a):(x&=y,x!==0?l=QA(x):t||(t=y&~A,t!==0&&(l=QA(t))))):(y=a&~c,y!==0?l=QA(y):x!==0?l=QA(x):t||(t=a&~A,t!==0&&(l=QA(t)))),l===0?0:e!==0&&e!==l&&(e&c)===0&&(c=l&-l,t=e&-e,c>=t||c===32&&(t&4194048)!==0)?e:l}function KA(A,e){return(A.pendingLanes&~(A.suspendedLanes&~A.pingedLanes)&e)===0}function ae(A,e){switch(A){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function XA(){var A=CA;return CA<<=1,(CA&4194048)===0&&(CA=256),A}function le(){var A=k;return k<<=1,(k&62914560)===0&&(k=4194304),A}function te(A){for(var e=[],t=0;31>t;t++)e.push(A);return e}function be(A,e){A.pendingLanes|=e,e!==268435456&&(A.suspendedLanes=0,A.pingedLanes=0,A.warmLanes=0)}function ut(A,e,t,a,l,c){var x=A.pendingLanes;A.pendingLanes=t,A.suspendedLanes=0,A.pingedLanes=0,A.warmLanes=0,A.expiredLanes&=t,A.entangledLanes&=t,A.errorRecoveryDisabledLanes&=t,A.shellSuspendCounter=0;var y=A.entanglements,j=A.expirationTimes,Z=A.hiddenUpdates;for(t=x&~t;0<t;){var gA=31-T(t),bA=1<<gA;y[gA]=0,j[gA]=-1;var $=Z[gA];if($!==null)for(Z[gA]=null,gA=0;gA<$.length;gA++){var AA=$[gA];AA!==null&&(AA.lane&=-536870913)}t&=~bA}a!==0&&Me(A,a,0),c!==0&&l===0&&A.tag!==0&&(A.suspendedLanes|=c&~(x&~e))}function Me(A,e,t){A.pendingLanes|=e,A.suspendedLanes&=~e;var a=31-T(e);A.entangledLanes|=e,A.entanglements[a]=A.entanglements[a]|1073741824|t&4194090}function ye(A,e){var t=A.entangledLanes|=e;for(A=A.entanglements;t;){var a=31-T(t),l=1<<a;l&e|A[a]&e&&(A[a]|=e),t&=~l}}function p(A){switch(A){case 2:A=1;break;case 8:A=4;break;case 32:A=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:A=128;break;case 268435456:A=134217728;break;default:A=0}return A}function S(A){return A&=-A,2<A?8<A?(A&134217727)!==0?32:268435456:8:2}function f(){var A=aA.p;return A!==0?A:(A=window.event,A===void 0?32:Gg(A.type))}function g(A,e){var t=aA.p;try{return aA.p=A,e()}finally{aA.p=t}}var b=Math.random().toString(36).slice(2),v="__reactFiber$"+b,E="__reactProps$"+b,I="__reactContainer$"+b,L="__reactEvents$"+b,G="__reactListeners$"+b,q="__reactHandles$"+b,TA="__reactResources$"+b,pA="__reactMarker$"+b;function DA(A){delete A[v],delete A[E],delete A[L],delete A[G],delete A[q]}function zA(A){var e=A[v];if(e)return e;for(var t=A.parentNode;t;){if(e=t[I]||t[v]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(A=Sg(A);A!==null;){if(t=A[v])return t;A=Sg(A)}return e}A=t,t=A.parentNode}return null}function Ae(A){if(A=A[v]||A[I]){var e=A.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return A}return null}function he(A){var e=A.tag;if(e===5||e===26||e===27||e===6)return A.stateNode;throw Error(o(33))}function ce(A){var e=A[TA];return e||(e=A[TA]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Be(A){A[pA]=!0}var Pt=new Set,xt={};function $t(A,e){kt(A,e),kt(A+"Capture",e)}function kt(A,e){for(xt[A]=e,A=0;A<e.length;A++)Pt.add(e[A])}var jr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hr={},qi={};function tl(A){return MA.call(qi,A)?!0:MA.call(Hr,A)?!1:jr.test(A)?qi[A]=!0:(Hr[A]=!0,!1)}function Wi(A,e,t){if(tl(e))if(t===null)A.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":A.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){A.removeAttribute(e);return}}A.setAttribute(e,""+t)}}function Pi(A,e,t){if(t===null)A.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":A.removeAttribute(e);return}A.setAttribute(e,""+t)}}function dn(A,e,t,a){if(a===null)A.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":A.removeAttribute(t);return}A.setAttributeNS(e,t,""+a)}}var nl,pu;function Ma(A){if(nl===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);nl=e&&e[1]||"",pu=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nl+A+pu}var al=!1;function rl(A,e){if(!A||al)return"";al=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var bA=function(){throw Error()};if(Object.defineProperty(bA.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(bA,[])}catch(AA){var $=AA}Reflect.construct(A,[],bA)}else{try{bA.call()}catch(AA){$=AA}A.call(bA.prototype)}}else{try{throw Error()}catch(AA){$=AA}(bA=A())&&typeof bA.catch=="function"&&bA.catch(function(){})}}catch(AA){if(AA&&$&&typeof AA.stack=="string")return[AA.stack,$.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=a.DetermineComponentFrameRoot(),x=c[0],y=c[1];if(x&&y){var j=x.split(`
`),Z=y.split(`
`);for(l=a=0;a<j.length&&!j[a].includes("DetermineComponentFrameRoot");)a++;for(;l<Z.length&&!Z[l].includes("DetermineComponentFrameRoot");)l++;if(a===j.length||l===Z.length)for(a=j.length-1,l=Z.length-1;1<=a&&0<=l&&j[a]!==Z[l];)l--;for(;1<=a&&0<=l;a--,l--)if(j[a]!==Z[l]){if(a!==1||l!==1)do if(a--,l--,0>l||j[a]!==Z[l]){var gA=`
`+j[a].replace(" at new "," at ");return A.displayName&&gA.includes("<anonymous>")&&(gA=gA.replace("<anonymous>",A.displayName)),gA}while(1<=a&&0<=l);break}}}finally{al=!1,Error.prepareStackTrace=t}return(t=A?A.displayName||A.name:"")?Ma(t):""}function Bx(A){switch(A.tag){case 26:case 27:case 5:return Ma(A.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 15:return rl(A.type,!1);case 11:return rl(A.type.render,!1);case 1:return rl(A.type,!0);case 31:return Ma("Activity");default:return""}}function xu(A){try{var e="";do e+=Bx(A),A=A.return;while(A);return e}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function Mt(A){switch(typeof A){case"bigint":case"boolean":case"number":case"string":case"undefined":return A;case"object":return A;default:return""}}function mu(A){var e=A.type;return(A=A.nodeName)&&A.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bx(A){var e=mu(A)?"checked":"value",t=Object.getOwnPropertyDescriptor(A.constructor.prototype,e),a=""+A[e];if(!A.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,c=t.set;return Object.defineProperty(A,e,{configurable:!0,get:function(){return l.call(this)},set:function(x){a=""+x,c.call(this,x)}}),Object.defineProperty(A,e,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){A._valueTracker=null,delete A[e]}}}}function $i(A){A._valueTracker||(A._valueTracker=bx(A))}function Bu(A){if(!A)return!1;var e=A._valueTracker;if(!e)return!0;var t=e.getValue(),a="";return A&&(a=mu(A)?A.checked?"true":"false":A.value),A=a,A!==t?(e.setValue(A),!0):!1}function Ao(A){if(A=A||(typeof document<"u"?document:void 0),typeof A>"u")return null;try{return A.activeElement||A.body}catch{return A.body}}var wx=/[\n"\\]/g;function Dt(A){return A.replace(wx,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function il(A,e,t,a,l,c,x,y){A.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?A.type=x:A.removeAttribute("type"),e!=null?x==="number"?(e===0&&A.value===""||A.value!=e)&&(A.value=""+Mt(e)):A.value!==""+Mt(e)&&(A.value=""+Mt(e)):x!=="submit"&&x!=="reset"||A.removeAttribute("value"),e!=null?ol(A,x,Mt(e)):t!=null?ol(A,x,Mt(t)):a!=null&&A.removeAttribute("value"),l==null&&c!=null&&(A.defaultChecked=!!c),l!=null&&(A.checked=l&&typeof l!="function"&&typeof l!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?A.name=""+Mt(y):A.removeAttribute("name")}function bu(A,e,t,a,l,c,x,y){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(A.type=c),e!=null||t!=null){if(!(c!=="submit"&&c!=="reset"||e!=null))return;t=t!=null?""+Mt(t):"",e=e!=null?""+Mt(e):t,y||e===A.value||(A.value=e),A.defaultValue=e}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,A.checked=y?A.checked:!!a,A.defaultChecked=!!a,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(A.name=x)}function ol(A,e,t){e==="number"&&Ao(A.ownerDocument)===A||A.defaultValue===""+t||(A.defaultValue=""+t)}function Da(A,e,t,a){if(A=A.options,e){e={};for(var l=0;l<t.length;l++)e["$"+t[l]]=!0;for(t=0;t<A.length;t++)l=e.hasOwnProperty("$"+A[t].value),A[t].selected!==l&&(A[t].selected=l),l&&a&&(A[t].defaultSelected=!0)}else{for(t=""+Mt(t),e=null,l=0;l<A.length;l++){if(A[l].value===t){A[l].selected=!0,a&&(A[l].defaultSelected=!0);return}e!==null||A[l].disabled||(e=A[l])}e!==null&&(e.selected=!0)}}function wu(A,e,t){if(e!=null&&(e=""+Mt(e),e!==A.value&&(A.value=e),t==null)){A.defaultValue!==e&&(A.defaultValue=e);return}A.defaultValue=t!=null?""+Mt(t):""}function yu(A,e,t,a){if(e==null){if(a!=null){if(t!=null)throw Error(o(92));if(IA(a)){if(1<a.length)throw Error(o(93));a=a[0]}t=a}t==null&&(t=""),e=t}t=Mt(e),A.defaultValue=t,a=A.textContent,a===t&&a!==""&&a!==null&&(A.value=a)}function Ta(A,e){if(e){var t=A.firstChild;if(t&&t===A.lastChild&&t.nodeType===3){t.nodeValue=e;return}}A.textContent=e}var yx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vu(A,e,t){var a=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?A.setProperty(e,""):e==="float"?A.cssFloat="":A[e]="":a?A.setProperty(e,t):typeof t!="number"||t===0||yx.has(e)?e==="float"?A.cssFloat=t:A[e]=(""+t).trim():A[e]=t+"px"}function Cu(A,e,t){if(e!=null&&typeof e!="object")throw Error(o(62));if(A=A.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?A.setProperty(a,""):a==="float"?A.cssFloat="":A[a]="");for(var l in e)a=e[l],e.hasOwnProperty(l)&&t[l]!==a&&vu(A,l,a)}else for(var c in e)e.hasOwnProperty(c)&&vu(A,c,e[c])}function sl(A){if(A.indexOf("-")===-1)return!1;switch(A){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function eo(A){return Cx.test(""+A)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":A}var ll=null;function cl(A){return A=A.target||A.srcElement||window,A.correspondingUseElement&&(A=A.correspondingUseElement),A.nodeType===3?A.parentNode:A}var Ia=null,La=null;function Qu(A){var e=Ae(A);if(e&&(A=e.stateNode)){var t=A[E]||null;A:switch(A=e.stateNode,e.type){case"input":if(il(A,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=A;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Dt(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var a=t[e];if(a!==A&&a.form===A.form){var l=a[E]||null;if(!l)throw Error(o(90));il(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<t.length;e++)a=t[e],a.form===A.form&&Bu(a)}break A;case"textarea":wu(A,t.value,t.defaultValue);break A;case"select":e=t.value,e!=null&&Da(A,!!t.multiple,e,!1)}}}var dl=!1;function Uu(A,e,t){if(dl)return A(e,t);dl=!0;try{var a=A(e);return a}finally{if(dl=!1,(Ia!==null||La!==null)&&(Ro(),Ia&&(e=Ia,A=La,La=Ia=null,Qu(e),A)))for(e=0;e<A.length;e++)Qu(A[e])}}function Nr(A,e){var t=A.stateNode;if(t===null)return null;var a=t[E]||null;if(a===null)return null;t=a[e];A:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(A=A.type,a=!(A==="button"||A==="input"||A==="select"||A==="textarea")),A=!a;break A;default:A=!1}if(A)return null;if(t&&typeof t!="function")throw Error(o(231,e,typeof t));return t}var un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ul=!1;if(un)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){ul=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{ul=!1}var kn=null,fl=null,to=null;function Fu(){if(to)return to;var A,e=fl,t=e.length,a,l="value"in kn?kn.value:kn.textContent,c=l.length;for(A=0;A<t&&e[A]===l[A];A++);var x=t-A;for(a=1;a<=x&&e[t-a]===l[c-a];a++);return to=l.slice(A,1<a?1-a:void 0)}function no(A){var e=A.keyCode;return"charCode"in A?(A=A.charCode,A===0&&e===13&&(A=13)):A=e,A===10&&(A=13),32<=A||A===13?A:0}function ao(){return!0}function Eu(){return!1}function bt(A){function e(t,a,l,c,x){this._reactName=t,this._targetInst=l,this.type=a,this.nativeEvent=c,this.target=x,this.currentTarget=null;for(var y in A)A.hasOwnProperty(y)&&(t=A[y],this[y]=t?t(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?ao:Eu,this.isPropagationStopped=Eu,this}return Q(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),e}var ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(A){return A.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ro=bt(ca),Mr=Q({},ca,{view:0,detail:0}),Qx=bt(Mr),hl,gl,Dr,io=Q({},Mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xl,button:0,buttons:0,relatedTarget:function(A){return A.relatedTarget===void 0?A.fromElement===A.srcElement?A.toElement:A.fromElement:A.relatedTarget},movementX:function(A){return"movementX"in A?A.movementX:(A!==Dr&&(Dr&&A.type==="mousemove"?(hl=A.screenX-Dr.screenX,gl=A.screenY-Dr.screenY):gl=hl=0,Dr=A),hl)},movementY:function(A){return"movementY"in A?A.movementY:gl}}),Su=bt(io),Ux=Q({},io,{dataTransfer:0}),Fx=bt(Ux),Ex=Q({},Mr,{relatedTarget:0}),pl=bt(Ex),Sx=Q({},ca,{animationName:0,elapsedTime:0,pseudoElement:0}),jx=bt(Sx),Hx=Q({},ca,{clipboardData:function(A){return"clipboardData"in A?A.clipboardData:window.clipboardData}}),Nx=bt(Hx),kx=Q({},ca,{data:0}),ju=bt(kx),Mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ix(A){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(A):(A=Tx[A])?!!e[A]:!1}function xl(){return Ix}var Lx=Q({},Mr,{key:function(A){if(A.key){var e=Mx[A.key]||A.key;if(e!=="Unidentified")return e}return A.type==="keypress"?(A=no(A),A===13?"Enter":String.fromCharCode(A)):A.type==="keydown"||A.type==="keyup"?Dx[A.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xl,charCode:function(A){return A.type==="keypress"?no(A):0},keyCode:function(A){return A.type==="keydown"||A.type==="keyup"?A.keyCode:0},which:function(A){return A.type==="keypress"?no(A):A.type==="keydown"||A.type==="keyup"?A.keyCode:0}}),Ox=bt(Lx),Kx=Q({},io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hu=bt(Kx),Rx=Q({},Mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xl}),zx=bt(Rx),_x=Q({},ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gx=bt(_x),Vx=Q({},io,{deltaX:function(A){return"deltaX"in A?A.deltaX:"wheelDeltaX"in A?-A.wheelDeltaX:0},deltaY:function(A){return"deltaY"in A?A.deltaY:"wheelDeltaY"in A?-A.wheelDeltaY:"wheelDelta"in A?-A.wheelDelta:0},deltaZ:0,deltaMode:0}),Yx=bt(Vx),Xx=Q({},ca,{newState:0,oldState:0}),Jx=bt(Xx),Zx=[9,13,27,32],ml=un&&"CompositionEvent"in window,Tr=null;un&&"documentMode"in document&&(Tr=document.documentMode);var qx=un&&"TextEvent"in window&&!Tr,Nu=un&&(!ml||Tr&&8<Tr&&11>=Tr),ku=" ",Mu=!1;function Du(A,e){switch(A){case"keyup":return Zx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tu(A){return A=A.detail,typeof A=="object"&&"data"in A?A.data:null}var Oa=!1;function Wx(A,e){switch(A){case"compositionend":return Tu(e);case"keypress":return e.which!==32?null:(Mu=!0,ku);case"textInput":return A=e.data,A===ku&&Mu?null:A;default:return null}}function Px(A,e){if(Oa)return A==="compositionend"||!ml&&Du(A,e)?(A=Fu(),to=fl=kn=null,Oa=!1,A):null;switch(A){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Nu&&e.locale!=="ko"?null:e.data;default:return null}}var $x={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Iu(A){var e=A&&A.nodeName&&A.nodeName.toLowerCase();return e==="input"?!!$x[A.type]:e==="textarea"}function Lu(A,e,t,a){Ia?La?La.push(a):La=[a]:Ia=a,e=Xo(e,"onChange"),0<e.length&&(t=new ro("onChange","change",null,t,a),A.push({event:t,listeners:e}))}var Ir=null,Lr=null;function Am(A){Bg(A,0)}function oo(A){var e=he(A);if(Bu(e))return A}function Ou(A,e){if(A==="change")return e}var Ku=!1;if(un){var Bl;if(un){var bl="oninput"in document;if(!bl){var Ru=document.createElement("div");Ru.setAttribute("oninput","return;"),bl=typeof Ru.oninput=="function"}Bl=bl}else Bl=!1;Ku=Bl&&(!document.documentMode||9<document.documentMode)}function zu(){Ir&&(Ir.detachEvent("onpropertychange",_u),Lr=Ir=null)}function _u(A){if(A.propertyName==="value"&&oo(Lr)){var e=[];Lu(e,Lr,A,cl(A)),Uu(Am,e)}}function em(A,e,t){A==="focusin"?(zu(),Ir=e,Lr=t,Ir.attachEvent("onpropertychange",_u)):A==="focusout"&&zu()}function tm(A){if(A==="selectionchange"||A==="keyup"||A==="keydown")return oo(Lr)}function nm(A,e){if(A==="click")return oo(e)}function am(A,e){if(A==="input"||A==="change")return oo(e)}function rm(A,e){return A===e&&(A!==0||1/A===1/e)||A!==A&&e!==e}var Qt=typeof Object.is=="function"?Object.is:rm;function Or(A,e){if(Qt(A,e))return!0;if(typeof A!="object"||A===null||typeof e!="object"||e===null)return!1;var t=Object.keys(A),a=Object.keys(e);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var l=t[a];if(!MA.call(e,l)||!Qt(A[l],e[l]))return!1}return!0}function Gu(A){for(;A&&A.firstChild;)A=A.firstChild;return A}function Vu(A,e){var t=Gu(A);A=0;for(var a;t;){if(t.nodeType===3){if(a=A+t.textContent.length,A<=e&&a>=e)return{node:t,offset:e-A};A=a}A:{for(;t;){if(t.nextSibling){t=t.nextSibling;break A}t=t.parentNode}t=void 0}t=Gu(t)}}function Yu(A,e){return A&&e?A===e?!0:A&&A.nodeType===3?!1:e&&e.nodeType===3?Yu(A,e.parentNode):"contains"in A?A.contains(e):A.compareDocumentPosition?!!(A.compareDocumentPosition(e)&16):!1:!1}function Xu(A){A=A!=null&&A.ownerDocument!=null&&A.ownerDocument.defaultView!=null?A.ownerDocument.defaultView:window;for(var e=Ao(A.document);e instanceof A.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)A=e.contentWindow;else break;e=Ao(A.document)}return e}function wl(A){var e=A&&A.nodeName&&A.nodeName.toLowerCase();return e&&(e==="input"&&(A.type==="text"||A.type==="search"||A.type==="tel"||A.type==="url"||A.type==="password")||e==="textarea"||A.contentEditable==="true")}var im=un&&"documentMode"in document&&11>=document.documentMode,Ka=null,yl=null,Kr=null,vl=!1;function Ju(A,e,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;vl||Ka==null||Ka!==Ao(a)||(a=Ka,"selectionStart"in a&&wl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Kr&&Or(Kr,a)||(Kr=a,a=Xo(yl,"onSelect"),0<a.length&&(e=new ro("onSelect","select",null,e,t),A.push({event:e,listeners:a}),e.target=Ka)))}function da(A,e){var t={};return t[A.toLowerCase()]=e.toLowerCase(),t["Webkit"+A]="webkit"+e,t["Moz"+A]="moz"+e,t}var Ra={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionrun:da("Transition","TransitionRun"),transitionstart:da("Transition","TransitionStart"),transitioncancel:da("Transition","TransitionCancel"),transitionend:da("Transition","TransitionEnd")},Cl={},Zu={};un&&(Zu=document.createElement("div").style,"AnimationEvent"in window||(delete Ra.animationend.animation,delete Ra.animationiteration.animation,delete Ra.animationstart.animation),"TransitionEvent"in window||delete Ra.transitionend.transition);function ua(A){if(Cl[A])return Cl[A];if(!Ra[A])return A;var e=Ra[A],t;for(t in e)if(e.hasOwnProperty(t)&&t in Zu)return Cl[A]=e[t];return A}var qu=ua("animationend"),Wu=ua("animationiteration"),Pu=ua("animationstart"),om=ua("transitionrun"),sm=ua("transitionstart"),lm=ua("transitioncancel"),$u=ua("transitionend"),Af=new Map,Ql="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ql.push("scrollEnd");function Xt(A,e){Af.set(A,e),$t(e,[A])}var ef=new WeakMap;function Tt(A,e){if(typeof A=="object"&&A!==null){var t=ef.get(A);return t!==void 0?t:(e={value:A,source:e,stack:xu(e)},ef.set(A,e),e)}return{value:A,source:e,stack:xu(e)}}var It=[],za=0,Ul=0;function so(){for(var A=za,e=Ul=za=0;e<A;){var t=It[e];It[e++]=null;var a=It[e];It[e++]=null;var l=It[e];It[e++]=null;var c=It[e];if(It[e++]=null,a!==null&&l!==null){var x=a.pending;x===null?l.next=l:(l.next=x.next,x.next=l),a.pending=l}c!==0&&tf(t,l,c)}}function lo(A,e,t,a){It[za++]=A,It[za++]=e,It[za++]=t,It[za++]=a,Ul|=a,A.lanes|=a,A=A.alternate,A!==null&&(A.lanes|=a)}function Fl(A,e,t,a){return lo(A,e,t,a),co(A)}function _a(A,e){return lo(A,null,null,e),co(A)}function tf(A,e,t){A.lanes|=t;var a=A.alternate;a!==null&&(a.lanes|=t);for(var l=!1,c=A.return;c!==null;)c.childLanes|=t,a=c.alternate,a!==null&&(a.childLanes|=t),c.tag===22&&(A=c.stateNode,A===null||A._visibility&1||(l=!0)),A=c,c=c.return;return A.tag===3?(c=A.stateNode,l&&e!==null&&(l=31-T(t),A=c.hiddenUpdates,a=A[l],a===null?A[l]=[e]:a.push(e),e.lane=t|536870912),c):null}function co(A){if(50<di)throw di=0,kc=null,Error(o(185));for(var e=A.return;e!==null;)A=e,e=A.return;return A.tag===3?A.stateNode:null}var Ga={};function cm(A,e,t,a){this.tag=A,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(A,e,t,a){return new cm(A,e,t,a)}function El(A){return A=A.prototype,!(!A||!A.isReactComponent)}function fn(A,e){var t=A.alternate;return t===null?(t=Ut(A.tag,e,A.key,A.mode),t.elementType=A.elementType,t.type=A.type,t.stateNode=A.stateNode,t.alternate=A,A.alternate=t):(t.pendingProps=e,t.type=A.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=A.flags&65011712,t.childLanes=A.childLanes,t.lanes=A.lanes,t.child=A.child,t.memoizedProps=A.memoizedProps,t.memoizedState=A.memoizedState,t.updateQueue=A.updateQueue,e=A.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=A.sibling,t.index=A.index,t.ref=A.ref,t.refCleanup=A.refCleanup,t}function nf(A,e){A.flags&=65011714;var t=A.alternate;return t===null?(A.childLanes=0,A.lanes=e,A.child=null,A.subtreeFlags=0,A.memoizedProps=null,A.memoizedState=null,A.updateQueue=null,A.dependencies=null,A.stateNode=null):(A.childLanes=t.childLanes,A.lanes=t.lanes,A.child=t.child,A.subtreeFlags=0,A.deletions=null,A.memoizedProps=t.memoizedProps,A.memoizedState=t.memoizedState,A.updateQueue=t.updateQueue,A.type=t.type,e=t.dependencies,A.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),A}function uo(A,e,t,a,l,c){var x=0;if(a=A,typeof A=="function")El(A)&&(x=1);else if(typeof A=="string")x=uB(A,t,vA.current)?26:A==="html"||A==="head"||A==="body"?27:5;else A:switch(A){case nA:return A=Ut(31,t,e,l),A.elementType=nA,A.lanes=c,A;case P:return fa(t.children,l,c,e);case lA:x=8,l|=24;break;case jA:return A=Ut(12,t,e,l|2),A.elementType=jA,A.lanes=c,A;case xA:return A=Ut(13,t,e,l),A.elementType=xA,A.lanes=c,A;case X:return A=Ut(19,t,e,l),A.elementType=X,A.lanes=c,A;default:if(typeof A=="object"&&A!==null)switch(A.$$typeof){case wA:case kA:x=10;break A;case uA:x=9;break A;case sA:x=11;break A;case EA:x=14;break A;case z:x=16,a=null;break A}x=29,t=Error(o(130,A===null?"null":typeof A,"")),a=null}return e=Ut(x,t,e,l),e.elementType=A,e.type=a,e.lanes=c,e}function fa(A,e,t,a){return A=Ut(7,A,a,e),A.lanes=t,A}function Sl(A,e,t){return A=Ut(6,A,null,e),A.lanes=t,A}function jl(A,e,t){return e=Ut(4,A.children!==null?A.children:[],A.key,e),e.lanes=t,e.stateNode={containerInfo:A.containerInfo,pendingChildren:null,implementation:A.implementation},e}var Va=[],Ya=0,fo=null,ho=0,Lt=[],Ot=0,ha=null,hn=1,gn="";function ga(A,e){Va[Ya++]=ho,Va[Ya++]=fo,fo=A,ho=e}function af(A,e,t){Lt[Ot++]=hn,Lt[Ot++]=gn,Lt[Ot++]=ha,ha=A;var a=hn;A=gn;var l=32-T(a)-1;a&=~(1<<l),t+=1;var c=32-T(e)+l;if(30<c){var x=l-l%5;c=(a&(1<<x)-1).toString(32),a>>=x,l-=x,hn=1<<32-T(e)+l|t<<l|a,gn=c+A}else hn=1<<c|t<<l|a,gn=A}function Hl(A){A.return!==null&&(ga(A,1),af(A,1,0))}function Nl(A){for(;A===fo;)fo=Va[--Ya],Va[Ya]=null,ho=Va[--Ya],Va[Ya]=null;for(;A===ha;)ha=Lt[--Ot],Lt[Ot]=null,gn=Lt[--Ot],Lt[Ot]=null,hn=Lt[--Ot],Lt[Ot]=null}var mt=null,ze=null,ve=!1,pa=null,An=!1,kl=Error(o(519));function xa(A){var e=Error(o(418,""));throw _r(Tt(e,A)),kl}function rf(A){var e=A.stateNode,t=A.type,a=A.memoizedProps;switch(e[v]=A,e[E]=a,t){case"dialog":ue("cancel",e),ue("close",e);break;case"iframe":case"object":case"embed":ue("load",e);break;case"video":case"audio":for(t=0;t<fi.length;t++)ue(fi[t],e);break;case"source":ue("error",e);break;case"img":case"image":case"link":ue("error",e),ue("load",e);break;case"details":ue("toggle",e);break;case"input":ue("invalid",e),bu(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),$i(e);break;case"select":ue("invalid",e);break;case"textarea":ue("invalid",e),yu(e,a.value,a.defaultValue,a.children),$i(e)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||a.suppressHydrationWarning===!0||vg(e.textContent,t)?(a.popover!=null&&(ue("beforetoggle",e),ue("toggle",e)),a.onScroll!=null&&ue("scroll",e),a.onScrollEnd!=null&&ue("scrollend",e),a.onClick!=null&&(e.onclick=Jo),e=!0):e=!1,e||xa(A)}function of(A){for(mt=A.return;mt;)switch(mt.tag){case 5:case 13:An=!1;return;case 27:case 3:An=!0;return;default:mt=mt.return}}function Rr(A){if(A!==mt)return!1;if(!ve)return of(A),ve=!0,!1;var e=A.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=A.type,t=!(t!=="form"&&t!=="button")||Zc(A.type,A.memoizedProps)),t=!t),t&&ze&&xa(A),of(A),e===13){if(A=A.memoizedState,A=A!==null?A.dehydrated:null,!A)throw Error(o(317));A:{for(A=A.nextSibling,e=0;A;){if(A.nodeType===8)if(t=A.data,t==="/$"){if(e===0){ze=Zt(A.nextSibling);break A}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++;A=A.nextSibling}ze=null}}else e===27?(e=ze,Zn(A.type)?(A=$c,$c=null,ze=A):ze=e):ze=mt?Zt(A.stateNode.nextSibling):null;return!0}function zr(){ze=mt=null,ve=!1}function sf(){var A=pa;return A!==null&&(vt===null?vt=A:vt.push.apply(vt,A),pa=null),A}function _r(A){pa===null?pa=[A]:pa.push(A)}var Ml=V(null),ma=null,pn=null;function Mn(A,e,t){tA(Ml,e._currentValue),e._currentValue=t}function xn(A){A._currentValue=Ml.current,dA(Ml)}function Dl(A,e,t){for(;A!==null;){var a=A.alternate;if((A.childLanes&e)!==e?(A.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),A===t)break;A=A.return}}function Tl(A,e,t,a){var l=A.child;for(l!==null&&(l.return=A);l!==null;){var c=l.dependencies;if(c!==null){var x=l.child;c=c.firstContext;A:for(;c!==null;){var y=c;c=l;for(var j=0;j<e.length;j++)if(y.context===e[j]){c.lanes|=t,y=c.alternate,y!==null&&(y.lanes|=t),Dl(c.return,t,A),a||(x=null);break A}c=y.next}}else if(l.tag===18){if(x=l.return,x===null)throw Error(o(341));x.lanes|=t,c=x.alternate,c!==null&&(c.lanes|=t),Dl(x,t,A),x=null}else x=l.child;if(x!==null)x.return=l;else for(x=l;x!==null;){if(x===A){x=null;break}if(l=x.sibling,l!==null){l.return=x.return,x=l;break}x=x.return}l=x}}function Gr(A,e,t,a){A=null;for(var l=e,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var x=l.alternate;if(x===null)throw Error(o(387));if(x=x.memoizedProps,x!==null){var y=l.type;Qt(l.pendingProps.value,x.value)||(A!==null?A.push(y):A=[y])}}else if(l===yA.current){if(x=l.alternate,x===null)throw Error(o(387));x.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(A!==null?A.push(Bi):A=[Bi])}l=l.return}A!==null&&Tl(e,A,t,a),e.flags|=262144}function go(A){for(A=A.firstContext;A!==null;){if(!Qt(A.context._currentValue,A.memoizedValue))return!0;A=A.next}return!1}function Ba(A){ma=A,pn=null,A=A.dependencies,A!==null&&(A.firstContext=null)}function ft(A){return lf(ma,A)}function po(A,e){return ma===null&&Ba(A),lf(A,e)}function lf(A,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},pn===null){if(A===null)throw Error(o(308));pn=e,A.dependencies={lanes:0,firstContext:e},A.flags|=524288}else pn=pn.next=e;return t}var dm=typeof AbortController<"u"?AbortController:function(){var A=[],e=this.signal={aborted:!1,addEventListener:function(t,a){A.push(a)}};this.abort=function(){e.aborted=!0,A.forEach(function(t){return t()})}},um=i.unstable_scheduleCallback,fm=i.unstable_NormalPriority,At={$$typeof:kA,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Il(){return{controller:new dm,data:new Map,refCount:0}}function Vr(A){A.refCount--,A.refCount===0&&um(fm,function(){A.controller.abort()})}var Yr=null,Ll=0,Xa=0,Ja=null;function hm(A,e){if(Yr===null){var t=Yr=[];Ll=0,Xa=Kc(),Ja={status:"pending",value:void 0,then:function(a){t.push(a)}}}return Ll++,e.then(cf,cf),e}function cf(){if(--Ll===0&&Yr!==null){Ja!==null&&(Ja.status="fulfilled");var A=Yr;Yr=null,Xa=0,Ja=null;for(var e=0;e<A.length;e++)(0,A[e])()}}function gm(A,e){var t=[],a={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return A.then(function(){a.status="fulfilled",a.value=e;for(var l=0;l<t.length;l++)(0,t[l])(e)},function(l){for(a.status="rejected",a.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),a}var df=_.S;_.S=function(A,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&hm(A,e),df!==null&&df(A,e)};var ba=V(null);function Ol(){var A=ba.current;return A!==null?A:De.pooledCache}function xo(A,e){e===null?tA(ba,ba.current):tA(ba,e.pool)}function uf(){var A=Ol();return A===null?null:{parent:At._currentValue,pool:A}}var Xr=Error(o(460)),ff=Error(o(474)),mo=Error(o(542)),Kl={then:function(){}};function hf(A){return A=A.status,A==="fulfilled"||A==="rejected"}function Bo(){}function gf(A,e,t){switch(t=A[t],t===void 0?A.push(e):t!==e&&(e.then(Bo,Bo),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw A=e.reason,xf(A),A;default:if(typeof e.status=="string")e.then(Bo,Bo);else{if(A=De,A!==null&&100<A.shellSuspendCounter)throw Error(o(482));A=e,A.status="pending",A.then(function(a){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=a}},function(a){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw A=e.reason,xf(A),A}throw Jr=e,Xr}}var Jr=null;function pf(){if(Jr===null)throw Error(o(459));var A=Jr;return Jr=null,A}function xf(A){if(A===Xr||A===mo)throw Error(o(483))}var Dn=!1;function Rl(A){A.updateQueue={baseState:A.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zl(A,e){A=A.updateQueue,e.updateQueue===A&&(e.updateQueue={baseState:A.baseState,firstBaseUpdate:A.firstBaseUpdate,lastBaseUpdate:A.lastBaseUpdate,shared:A.shared,callbacks:null})}function Tn(A){return{lane:A,tag:0,payload:null,callback:null,next:null}}function In(A,e,t){var a=A.updateQueue;if(a===null)return null;if(a=a.shared,(Qe&2)!==0){var l=a.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),a.pending=e,e=co(A),tf(A,null,t),e}return lo(A,a,e,t),co(A)}function Zr(A,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var a=e.lanes;a&=A.pendingLanes,t|=a,e.lanes=t,ye(A,t)}}function _l(A,e){var t=A.updateQueue,a=A.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var l=null,c=null;if(t=t.firstBaseUpdate,t!==null){do{var x={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};c===null?l=c=x:c=c.next=x,t=t.next}while(t!==null);c===null?l=c=e:c=c.next=e}else l=c=e;t={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:a.shared,callbacks:a.callbacks},A.updateQueue=t;return}A=t.lastBaseUpdate,A===null?t.firstBaseUpdate=e:A.next=e,t.lastBaseUpdate=e}var Gl=!1;function qr(){if(Gl){var A=Ja;if(A!==null)throw A}}function Wr(A,e,t,a){Gl=!1;var l=A.updateQueue;Dn=!1;var c=l.firstBaseUpdate,x=l.lastBaseUpdate,y=l.shared.pending;if(y!==null){l.shared.pending=null;var j=y,Z=j.next;j.next=null,x===null?c=Z:x.next=Z,x=j;var gA=A.alternate;gA!==null&&(gA=gA.updateQueue,y=gA.lastBaseUpdate,y!==x&&(y===null?gA.firstBaseUpdate=Z:y.next=Z,gA.lastBaseUpdate=j))}if(c!==null){var bA=l.baseState;x=0,gA=Z=j=null,y=c;do{var $=y.lane&-536870913,AA=$!==y.lane;if(AA?(me&$)===$:(a&$)===$){$!==0&&$===Xa&&(Gl=!0),gA!==null&&(gA=gA.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});A:{var ee=A,PA=y;$=e;var je=t;switch(PA.tag){case 1:if(ee=PA.payload,typeof ee=="function"){bA=ee.call(je,bA,$);break A}bA=ee;break A;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=PA.payload,$=typeof ee=="function"?ee.call(je,bA,$):ee,$==null)break A;bA=Q({},bA,$);break A;case 2:Dn=!0}}$=y.callback,$!==null&&(A.flags|=64,AA&&(A.flags|=8192),AA=l.callbacks,AA===null?l.callbacks=[$]:AA.push($))}else AA={lane:$,tag:y.tag,payload:y.payload,callback:y.callback,next:null},gA===null?(Z=gA=AA,j=bA):gA=gA.next=AA,x|=$;if(y=y.next,y===null){if(y=l.shared.pending,y===null)break;AA=y,y=AA.next,AA.next=null,l.lastBaseUpdate=AA,l.shared.pending=null}}while(!0);gA===null&&(j=bA),l.baseState=j,l.firstBaseUpdate=Z,l.lastBaseUpdate=gA,c===null&&(l.shared.lanes=0),Vn|=x,A.lanes=x,A.memoizedState=bA}}function mf(A,e){if(typeof A!="function")throw Error(o(191,A));A.call(e)}function Bf(A,e){var t=A.callbacks;if(t!==null)for(A.callbacks=null,A=0;A<t.length;A++)mf(t[A],e)}var Za=V(null),bo=V(0);function bf(A,e){A=Cn,tA(bo,A),tA(Za,e),Cn=A|e.baseLanes}function Vl(){tA(bo,Cn),tA(Za,Za.current)}function Yl(){Cn=bo.current,dA(Za),dA(bo)}var Ln=0,ie=null,Ee=null,We=null,wo=!1,qa=!1,wa=!1,yo=0,Pr=0,Wa=null,pm=0;function Ye(){throw Error(o(321))}function Xl(A,e){if(e===null)return!1;for(var t=0;t<e.length&&t<A.length;t++)if(!Qt(A[t],e[t]))return!1;return!0}function Jl(A,e,t,a,l,c){return Ln=c,ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_.H=A===null||A.memoizedState===null?nh:ah,wa=!1,c=t(a,l),wa=!1,qa&&(c=yf(e,t,a,l)),wf(A),c}function wf(A){_.H=Eo;var e=Ee!==null&&Ee.next!==null;if(Ln=0,We=Ee=ie=null,wo=!1,Pr=0,Wa=null,e)throw Error(o(300));A===null||nt||(A=A.dependencies,A!==null&&go(A)&&(nt=!0))}function yf(A,e,t,a){ie=A;var l=0;do{if(qa&&(Wa=null),Pr=0,qa=!1,25<=l)throw Error(o(301));if(l+=1,We=Ee=null,A.updateQueue!=null){var c=A.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}_.H=vm,c=e(t,a)}while(qa);return c}function xm(){var A=_.H,e=A.useState()[0];return e=typeof e.then=="function"?$r(e):e,A=A.useState()[0],(Ee!==null?Ee.memoizedState:null)!==A&&(ie.flags|=1024),e}function Zl(){var A=yo!==0;return yo=0,A}function ql(A,e,t){e.updateQueue=A.updateQueue,e.flags&=-2053,A.lanes&=~t}function Wl(A){if(wo){for(A=A.memoizedState;A!==null;){var e=A.queue;e!==null&&(e.pending=null),A=A.next}wo=!1}Ln=0,We=Ee=ie=null,qa=!1,Pr=yo=0,Wa=null}function wt(){var A={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?ie.memoizedState=We=A:We=We.next=A,We}function Pe(){if(Ee===null){var A=ie.alternate;A=A!==null?A.memoizedState:null}else A=Ee.next;var e=We===null?ie.memoizedState:We.next;if(e!==null)We=e,Ee=A;else{if(A===null)throw ie.alternate===null?Error(o(467)):Error(o(310));Ee=A,A={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},We===null?ie.memoizedState=We=A:We=We.next=A}return We}function Pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $r(A){var e=Pr;return Pr+=1,Wa===null&&(Wa=[]),A=gf(Wa,A,e),e=ie,(We===null?e.memoizedState:We.next)===null&&(e=e.alternate,_.H=e===null||e.memoizedState===null?nh:ah),A}function vo(A){if(A!==null&&typeof A=="object"){if(typeof A.then=="function")return $r(A);if(A.$$typeof===kA)return ft(A)}throw Error(o(438,String(A)))}function $l(A){var e=null,t=ie.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var a=ie.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=Pl(),ie.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(A),a=0;a<A;a++)t[a]=fA;return e.index++,t}function mn(A,e){return typeof e=="function"?e(A):e}function Co(A){var e=Pe();return Ac(e,Ee,A)}function Ac(A,e,t){var a=A.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var l=A.baseQueue,c=a.pending;if(c!==null){if(l!==null){var x=l.next;l.next=c.next,c.next=x}e.baseQueue=l=c,a.pending=null}if(c=A.baseState,l===null)A.memoizedState=c;else{e=l.next;var y=x=null,j=null,Z=e,gA=!1;do{var bA=Z.lane&-536870913;if(bA!==Z.lane?(me&bA)===bA:(Ln&bA)===bA){var $=Z.revertLane;if($===0)j!==null&&(j=j.next={lane:0,revertLane:0,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),bA===Xa&&(gA=!0);else if((Ln&$)===$){Z=Z.next,$===Xa&&(gA=!0);continue}else bA={lane:0,revertLane:Z.revertLane,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},j===null?(y=j=bA,x=c):j=j.next=bA,ie.lanes|=$,Vn|=$;bA=Z.action,wa&&t(c,bA),c=Z.hasEagerState?Z.eagerState:t(c,bA)}else $={lane:bA,revertLane:Z.revertLane,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},j===null?(y=j=$,x=c):j=j.next=$,ie.lanes|=bA,Vn|=bA;Z=Z.next}while(Z!==null&&Z!==e);if(j===null?x=c:j.next=y,!Qt(c,A.memoizedState)&&(nt=!0,gA&&(t=Ja,t!==null)))throw t;A.memoizedState=c,A.baseState=x,A.baseQueue=j,a.lastRenderedState=c}return l===null&&(a.lanes=0),[A.memoizedState,a.dispatch]}function ec(A){var e=Pe(),t=e.queue;if(t===null)throw Error(o(311));t.lastRenderedReducer=A;var a=t.dispatch,l=t.pending,c=e.memoizedState;if(l!==null){t.pending=null;var x=l=l.next;do c=A(c,x.action),x=x.next;while(x!==l);Qt(c,e.memoizedState)||(nt=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),t.lastRenderedState=c}return[c,a]}function vf(A,e,t){var a=ie,l=Pe(),c=ve;if(c){if(t===void 0)throw Error(o(407));t=t()}else t=e();var x=!Qt((Ee||l).memoizedState,t);x&&(l.memoizedState=t,nt=!0),l=l.queue;var y=Uf.bind(null,a,l,A);if(Ai(2048,8,y,[A]),l.getSnapshot!==e||x||We!==null&&We.memoizedState.tag&1){if(a.flags|=2048,Pa(9,Qo(),Qf.bind(null,a,l,t,e),null),De===null)throw Error(o(349));c||(Ln&124)!==0||Cf(a,e,t)}return t}function Cf(A,e,t){A.flags|=16384,A={getSnapshot:e,value:t},e=ie.updateQueue,e===null?(e=Pl(),ie.updateQueue=e,e.stores=[A]):(t=e.stores,t===null?e.stores=[A]:t.push(A))}function Qf(A,e,t,a){e.value=t,e.getSnapshot=a,Ff(e)&&Ef(A)}function Uf(A,e,t){return t(function(){Ff(e)&&Ef(A)})}function Ff(A){var e=A.getSnapshot;A=A.value;try{var t=e();return!Qt(A,t)}catch{return!0}}function Ef(A){var e=_a(A,2);e!==null&&Ht(e,A,2)}function tc(A){var e=wt();if(typeof A=="function"){var t=A;if(A=t(),wa){C(!0);try{t()}finally{C(!1)}}}return e.memoizedState=e.baseState=A,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:A},e}function Sf(A,e,t,a){return A.baseState=t,Ac(A,Ee,typeof a=="function"?a:mn)}function mm(A,e,t,a,l){if(Fo(A))throw Error(o(485));if(A=e.action,A!==null){var c={payload:l,action:A,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){c.listeners.push(x)}};_.T!==null?t(!0):c.isTransition=!1,a(c),t=e.pending,t===null?(c.next=e.pending=c,jf(e,c)):(c.next=t.next,e.pending=t.next=c)}}function jf(A,e){var t=e.action,a=e.payload,l=A.state;if(e.isTransition){var c=_.T,x={};_.T=x;try{var y=t(l,a),j=_.S;j!==null&&j(x,y),Hf(A,e,y)}catch(Z){nc(A,e,Z)}finally{_.T=c}}else try{c=t(l,a),Hf(A,e,c)}catch(Z){nc(A,e,Z)}}function Hf(A,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){Nf(A,e,a)},function(a){return nc(A,e,a)}):Nf(A,e,t)}function Nf(A,e,t){e.status="fulfilled",e.value=t,kf(e),A.state=t,e=A.pending,e!==null&&(t=e.next,t===e?A.pending=null:(t=t.next,e.next=t,jf(A,t)))}function nc(A,e,t){var a=A.pending;if(A.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=t,kf(e),e=e.next;while(e!==a)}A.action=null}function kf(A){A=A.listeners;for(var e=0;e<A.length;e++)(0,A[e])()}function Mf(A,e){return e}function Df(A,e){if(ve){var t=De.formState;if(t!==null){A:{var a=ie;if(ve){if(ze){e:{for(var l=ze,c=An;l.nodeType!==8;){if(!c){l=null;break e}if(l=Zt(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){ze=Zt(l.nextSibling),a=l.data==="F!";break A}}xa(a)}a=!1}a&&(e=t[0])}}return t=wt(),t.memoizedState=t.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mf,lastRenderedState:e},t.queue=a,t=Ah.bind(null,ie,a),a.dispatch=t,a=tc(!1),c=sc.bind(null,ie,!1,a.queue),a=wt(),l={state:e,dispatch:null,action:A,pending:null},a.queue=l,t=mm.bind(null,ie,l,c,t),l.dispatch=t,a.memoizedState=A,[e,t,!1]}function Tf(A){var e=Pe();return If(e,Ee,A)}function If(A,e,t){if(e=Ac(A,e,Mf)[0],A=Co(mn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=$r(e)}catch(x){throw x===Xr?mo:x}else a=e;e=Pe();var l=e.queue,c=l.dispatch;return t!==e.memoizedState&&(ie.flags|=2048,Pa(9,Qo(),Bm.bind(null,l,t),null)),[a,c,A]}function Bm(A,e){A.action=e}function Lf(A){var e=Pe(),t=Ee;if(t!==null)return If(e,t,A);Pe(),e=e.memoizedState,t=Pe();var a=t.queue.dispatch;return t.memoizedState=A,[e,a,!1]}function Pa(A,e,t,a){return A={tag:A,create:t,deps:a,inst:e,next:null},e=ie.updateQueue,e===null&&(e=Pl(),ie.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=A.next=A:(a=t.next,t.next=A,A.next=a,e.lastEffect=A),A}function Qo(){return{destroy:void 0,resource:void 0}}function Of(){return Pe().memoizedState}function Uo(A,e,t,a){var l=wt();a=a===void 0?null:a,ie.flags|=A,l.memoizedState=Pa(1|e,Qo(),t,a)}function Ai(A,e,t,a){var l=Pe();a=a===void 0?null:a;var c=l.memoizedState.inst;Ee!==null&&a!==null&&Xl(a,Ee.memoizedState.deps)?l.memoizedState=Pa(e,c,t,a):(ie.flags|=A,l.memoizedState=Pa(1|e,c,t,a))}function Kf(A,e){Uo(8390656,8,A,e)}function Rf(A,e){Ai(2048,8,A,e)}function zf(A,e){return Ai(4,2,A,e)}function _f(A,e){return Ai(4,4,A,e)}function Gf(A,e){if(typeof e=="function"){A=A();var t=e(A);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return A=A(),e.current=A,function(){e.current=null}}function Vf(A,e,t){t=t!=null?t.concat([A]):null,Ai(4,4,Gf.bind(null,e,A),t)}function ac(){}function Yf(A,e){var t=Pe();e=e===void 0?null:e;var a=t.memoizedState;return e!==null&&Xl(e,a[1])?a[0]:(t.memoizedState=[A,e],A)}function Xf(A,e){var t=Pe();e=e===void 0?null:e;var a=t.memoizedState;if(e!==null&&Xl(e,a[1]))return a[0];if(a=A(),wa){C(!0);try{A()}finally{C(!1)}}return t.memoizedState=[a,e],a}function rc(A,e,t){return t===void 0||(Ln&1073741824)!==0?A.memoizedState=e:(A.memoizedState=t,A=qh(),ie.lanes|=A,Vn|=A,t)}function Jf(A,e,t,a){return Qt(t,e)?t:Za.current!==null?(A=rc(A,t,a),Qt(A,e)||(nt=!0),A):(Ln&42)===0?(nt=!0,A.memoizedState=t):(A=qh(),ie.lanes|=A,Vn|=A,e)}function Zf(A,e,t,a,l){var c=aA.p;aA.p=c!==0&&8>c?c:8;var x=_.T,y={};_.T=y,sc(A,!1,e,t);try{var j=l(),Z=_.S;if(Z!==null&&Z(y,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var gA=gm(j,a);ei(A,e,gA,jt(A))}else ei(A,e,a,jt(A))}catch(bA){ei(A,e,{then:function(){},status:"rejected",reason:bA},jt())}finally{aA.p=c,_.T=x}}function bm(){}function ic(A,e,t,a){if(A.tag!==5)throw Error(o(476));var l=qf(A).queue;Zf(A,l,e,hA,t===null?bm:function(){return Wf(A),t(a)})}function qf(A){var e=A.memoizedState;if(e!==null)return e;e={memoizedState:hA,baseState:hA,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:hA},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:t},next:null},A.memoizedState=e,A=A.alternate,A!==null&&(A.memoizedState=e),e}function Wf(A){var e=qf(A).next.queue;ei(A,e,{},jt())}function oc(){return ft(Bi)}function Pf(){return Pe().memoizedState}function $f(){return Pe().memoizedState}function wm(A){for(var e=A.return;e!==null;){switch(e.tag){case 24:case 3:var t=jt();A=Tn(t);var a=In(e,A,t);a!==null&&(Ht(a,e,t),Zr(a,e,t)),e={cache:Il()},A.payload=e;return}e=e.return}}function ym(A,e,t){var a=jt();t={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},Fo(A)?eh(e,t):(t=Fl(A,e,t,a),t!==null&&(Ht(t,A,a),th(t,e,a)))}function Ah(A,e,t){var a=jt();ei(A,e,t,a)}function ei(A,e,t,a){var l={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(Fo(A))eh(e,l);else{var c=A.alternate;if(A.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var x=e.lastRenderedState,y=c(x,t);if(l.hasEagerState=!0,l.eagerState=y,Qt(y,x))return lo(A,e,l,0),De===null&&so(),!1}catch{}finally{}if(t=Fl(A,e,l,a),t!==null)return Ht(t,A,a),th(t,e,a),!0}return!1}function sc(A,e,t,a){if(a={lane:2,revertLane:Kc(),action:a,hasEagerState:!1,eagerState:null,next:null},Fo(A)){if(e)throw Error(o(479))}else e=Fl(A,t,a,2),e!==null&&Ht(e,A,2)}function Fo(A){var e=A.alternate;return A===ie||e!==null&&e===ie}function eh(A,e){qa=wo=!0;var t=A.pending;t===null?e.next=e:(e.next=t.next,t.next=e),A.pending=e}function th(A,e,t){if((t&4194048)!==0){var a=e.lanes;a&=A.pendingLanes,t|=a,e.lanes=t,ye(A,t)}}var Eo={readContext:ft,use:vo,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye,useHostTransitionStatus:Ye,useFormState:Ye,useActionState:Ye,useOptimistic:Ye,useMemoCache:Ye,useCacheRefresh:Ye},nh={readContext:ft,use:vo,useCallback:function(A,e){return wt().memoizedState=[A,e===void 0?null:e],A},useContext:ft,useEffect:Kf,useImperativeHandle:function(A,e,t){t=t!=null?t.concat([A]):null,Uo(4194308,4,Gf.bind(null,e,A),t)},useLayoutEffect:function(A,e){return Uo(4194308,4,A,e)},useInsertionEffect:function(A,e){Uo(4,2,A,e)},useMemo:function(A,e){var t=wt();e=e===void 0?null:e;var a=A();if(wa){C(!0);try{A()}finally{C(!1)}}return t.memoizedState=[a,e],a},useReducer:function(A,e,t){var a=wt();if(t!==void 0){var l=t(e);if(wa){C(!0);try{t(e)}finally{C(!1)}}}else l=e;return a.memoizedState=a.baseState=l,A={pending:null,lanes:0,dispatch:null,lastRenderedReducer:A,lastRenderedState:l},a.queue=A,A=A.dispatch=ym.bind(null,ie,A),[a.memoizedState,A]},useRef:function(A){var e=wt();return A={current:A},e.memoizedState=A},useState:function(A){A=tc(A);var e=A.queue,t=Ah.bind(null,ie,e);return e.dispatch=t,[A.memoizedState,t]},useDebugValue:ac,useDeferredValue:function(A,e){var t=wt();return rc(t,A,e)},useTransition:function(){var A=tc(!1);return A=Zf.bind(null,ie,A.queue,!0,!1),wt().memoizedState=A,[!1,A]},useSyncExternalStore:function(A,e,t){var a=ie,l=wt();if(ve){if(t===void 0)throw Error(o(407));t=t()}else{if(t=e(),De===null)throw Error(o(349));(me&124)!==0||Cf(a,e,t)}l.memoizedState=t;var c={value:t,getSnapshot:e};return l.queue=c,Kf(Uf.bind(null,a,c,A),[A]),a.flags|=2048,Pa(9,Qo(),Qf.bind(null,a,c,t,e),null),t},useId:function(){var A=wt(),e=De.identifierPrefix;if(ve){var t=gn,a=hn;t=(a&~(1<<32-T(a)-1)).toString(32)+t,e="«"+e+"R"+t,t=yo++,0<t&&(e+="H"+t.toString(32)),e+="»"}else t=pm++,e="«"+e+"r"+t.toString(32)+"»";return A.memoizedState=e},useHostTransitionStatus:oc,useFormState:Df,useActionState:Df,useOptimistic:function(A){var e=wt();e.memoizedState=e.baseState=A;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=sc.bind(null,ie,!0,t),t.dispatch=e,[A,e]},useMemoCache:$l,useCacheRefresh:function(){return wt().memoizedState=wm.bind(null,ie)}},ah={readContext:ft,use:vo,useCallback:Yf,useContext:ft,useEffect:Rf,useImperativeHandle:Vf,useInsertionEffect:zf,useLayoutEffect:_f,useMemo:Xf,useReducer:Co,useRef:Of,useState:function(){return Co(mn)},useDebugValue:ac,useDeferredValue:function(A,e){var t=Pe();return Jf(t,Ee.memoizedState,A,e)},useTransition:function(){var A=Co(mn)[0],e=Pe().memoizedState;return[typeof A=="boolean"?A:$r(A),e]},useSyncExternalStore:vf,useId:Pf,useHostTransitionStatus:oc,useFormState:Tf,useActionState:Tf,useOptimistic:function(A,e){var t=Pe();return Sf(t,Ee,A,e)},useMemoCache:$l,useCacheRefresh:$f},vm={readContext:ft,use:vo,useCallback:Yf,useContext:ft,useEffect:Rf,useImperativeHandle:Vf,useInsertionEffect:zf,useLayoutEffect:_f,useMemo:Xf,useReducer:ec,useRef:Of,useState:function(){return ec(mn)},useDebugValue:ac,useDeferredValue:function(A,e){var t=Pe();return Ee===null?rc(t,A,e):Jf(t,Ee.memoizedState,A,e)},useTransition:function(){var A=ec(mn)[0],e=Pe().memoizedState;return[typeof A=="boolean"?A:$r(A),e]},useSyncExternalStore:vf,useId:Pf,useHostTransitionStatus:oc,useFormState:Lf,useActionState:Lf,useOptimistic:function(A,e){var t=Pe();return Ee!==null?Sf(t,Ee,A,e):(t.baseState=A,[A,t.queue.dispatch])},useMemoCache:$l,useCacheRefresh:$f},$a=null,ti=0;function So(A){var e=ti;return ti+=1,$a===null&&($a=[]),gf($a,A,e)}function ni(A,e){e=e.props.ref,A.ref=e!==void 0?e:null}function jo(A,e){throw e.$$typeof===F?Error(o(525)):(A=Object.prototype.toString.call(e),Error(o(31,A==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":A)))}function rh(A){var e=A._init;return e(A._payload)}function ih(A){function e(R,O){if(A){var Y=R.deletions;Y===null?(R.deletions=[O],R.flags|=16):Y.push(O)}}function t(R,O){if(!A)return null;for(;O!==null;)e(R,O),O=O.sibling;return null}function a(R){for(var O=new Map;R!==null;)R.key!==null?O.set(R.key,R):O.set(R.index,R),R=R.sibling;return O}function l(R,O){return R=fn(R,O),R.index=0,R.sibling=null,R}function c(R,O,Y){return R.index=Y,A?(Y=R.alternate,Y!==null?(Y=Y.index,Y<O?(R.flags|=67108866,O):Y):(R.flags|=67108866,O)):(R.flags|=1048576,O)}function x(R){return A&&R.alternate===null&&(R.flags|=67108866),R}function y(R,O,Y,mA){return O===null||O.tag!==6?(O=Sl(Y,R.mode,mA),O.return=R,O):(O=l(O,Y),O.return=R,O)}function j(R,O,Y,mA){var JA=Y.type;return JA===P?gA(R,O,Y.props.children,mA,Y.key):O!==null&&(O.elementType===JA||typeof JA=="object"&&JA!==null&&JA.$$typeof===z&&rh(JA)===O.type)?(O=l(O,Y.props),ni(O,Y),O.return=R,O):(O=uo(Y.type,Y.key,Y.props,null,R.mode,mA),ni(O,Y),O.return=R,O)}function Z(R,O,Y,mA){return O===null||O.tag!==4||O.stateNode.containerInfo!==Y.containerInfo||O.stateNode.implementation!==Y.implementation?(O=jl(Y,R.mode,mA),O.return=R,O):(O=l(O,Y.children||[]),O.return=R,O)}function gA(R,O,Y,mA,JA){return O===null||O.tag!==7?(O=fa(Y,R.mode,mA,JA),O.return=R,O):(O=l(O,Y),O.return=R,O)}function bA(R,O,Y){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Sl(""+O,R.mode,Y),O.return=R,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case N:return Y=uo(O.type,O.key,O.props,null,R.mode,Y),ni(Y,O),Y.return=R,Y;case eA:return O=jl(O,R.mode,Y),O.return=R,O;case z:var mA=O._init;return O=mA(O._payload),bA(R,O,Y)}if(IA(O)||rA(O))return O=fa(O,R.mode,Y,null),O.return=R,O;if(typeof O.then=="function")return bA(R,So(O),Y);if(O.$$typeof===kA)return bA(R,po(R,O),Y);jo(R,O)}return null}function $(R,O,Y,mA){var JA=O!==null?O.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return JA!==null?null:y(R,O,""+Y,mA);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case N:return Y.key===JA?j(R,O,Y,mA):null;case eA:return Y.key===JA?Z(R,O,Y,mA):null;case z:return JA=Y._init,Y=JA(Y._payload),$(R,O,Y,mA)}if(IA(Y)||rA(Y))return JA!==null?null:gA(R,O,Y,mA,null);if(typeof Y.then=="function")return $(R,O,So(Y),mA);if(Y.$$typeof===kA)return $(R,O,po(R,Y),mA);jo(R,Y)}return null}function AA(R,O,Y,mA,JA){if(typeof mA=="string"&&mA!==""||typeof mA=="number"||typeof mA=="bigint")return R=R.get(Y)||null,y(O,R,""+mA,JA);if(typeof mA=="object"&&mA!==null){switch(mA.$$typeof){case N:return R=R.get(mA.key===null?Y:mA.key)||null,j(O,R,mA,JA);case eA:return R=R.get(mA.key===null?Y:mA.key)||null,Z(O,R,mA,JA);case z:var se=mA._init;return mA=se(mA._payload),AA(R,O,Y,mA,JA)}if(IA(mA)||rA(mA))return R=R.get(Y)||null,gA(O,R,mA,JA,null);if(typeof mA.then=="function")return AA(R,O,Y,So(mA),JA);if(mA.$$typeof===kA)return AA(R,O,Y,po(O,mA),JA);jo(O,mA)}return null}function ee(R,O,Y,mA){for(var JA=null,se=null,qA=O,$A=O=0,rt=null;qA!==null&&$A<Y.length;$A++){qA.index>$A?(rt=qA,qA=null):rt=qA.sibling;var we=$(R,qA,Y[$A],mA);if(we===null){qA===null&&(qA=rt);break}A&&qA&&we.alternate===null&&e(R,qA),O=c(we,O,$A),se===null?JA=we:se.sibling=we,se=we,qA=rt}if($A===Y.length)return t(R,qA),ve&&ga(R,$A),JA;if(qA===null){for(;$A<Y.length;$A++)qA=bA(R,Y[$A],mA),qA!==null&&(O=c(qA,O,$A),se===null?JA=qA:se.sibling=qA,se=qA);return ve&&ga(R,$A),JA}for(qA=a(qA);$A<Y.length;$A++)rt=AA(qA,R,$A,Y[$A],mA),rt!==null&&(A&&rt.alternate!==null&&qA.delete(rt.key===null?$A:rt.key),O=c(rt,O,$A),se===null?JA=rt:se.sibling=rt,se=rt);return A&&qA.forEach(function(Aa){return e(R,Aa)}),ve&&ga(R,$A),JA}function PA(R,O,Y,mA){if(Y==null)throw Error(o(151));for(var JA=null,se=null,qA=O,$A=O=0,rt=null,we=Y.next();qA!==null&&!we.done;$A++,we=Y.next()){qA.index>$A?(rt=qA,qA=null):rt=qA.sibling;var Aa=$(R,qA,we.value,mA);if(Aa===null){qA===null&&(qA=rt);break}A&&qA&&Aa.alternate===null&&e(R,qA),O=c(Aa,O,$A),se===null?JA=Aa:se.sibling=Aa,se=Aa,qA=rt}if(we.done)return t(R,qA),ve&&ga(R,$A),JA;if(qA===null){for(;!we.done;$A++,we=Y.next())we=bA(R,we.value,mA),we!==null&&(O=c(we,O,$A),se===null?JA=we:se.sibling=we,se=we);return ve&&ga(R,$A),JA}for(qA=a(qA);!we.done;$A++,we=Y.next())we=AA(qA,R,$A,we.value,mA),we!==null&&(A&&we.alternate!==null&&qA.delete(we.key===null?$A:we.key),O=c(we,O,$A),se===null?JA=we:se.sibling=we,se=we);return A&&qA.forEach(function(CB){return e(R,CB)}),ve&&ga(R,$A),JA}function je(R,O,Y,mA){if(typeof Y=="object"&&Y!==null&&Y.type===P&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case N:A:{for(var JA=Y.key;O!==null;){if(O.key===JA){if(JA=Y.type,JA===P){if(O.tag===7){t(R,O.sibling),mA=l(O,Y.props.children),mA.return=R,R=mA;break A}}else if(O.elementType===JA||typeof JA=="object"&&JA!==null&&JA.$$typeof===z&&rh(JA)===O.type){t(R,O.sibling),mA=l(O,Y.props),ni(mA,Y),mA.return=R,R=mA;break A}t(R,O);break}else e(R,O);O=O.sibling}Y.type===P?(mA=fa(Y.props.children,R.mode,mA,Y.key),mA.return=R,R=mA):(mA=uo(Y.type,Y.key,Y.props,null,R.mode,mA),ni(mA,Y),mA.return=R,R=mA)}return x(R);case eA:A:{for(JA=Y.key;O!==null;){if(O.key===JA)if(O.tag===4&&O.stateNode.containerInfo===Y.containerInfo&&O.stateNode.implementation===Y.implementation){t(R,O.sibling),mA=l(O,Y.children||[]),mA.return=R,R=mA;break A}else{t(R,O);break}else e(R,O);O=O.sibling}mA=jl(Y,R.mode,mA),mA.return=R,R=mA}return x(R);case z:return JA=Y._init,Y=JA(Y._payload),je(R,O,Y,mA)}if(IA(Y))return ee(R,O,Y,mA);if(rA(Y)){if(JA=rA(Y),typeof JA!="function")throw Error(o(150));return Y=JA.call(Y),PA(R,O,Y,mA)}if(typeof Y.then=="function")return je(R,O,So(Y),mA);if(Y.$$typeof===kA)return je(R,O,po(R,Y),mA);jo(R,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint"?(Y=""+Y,O!==null&&O.tag===6?(t(R,O.sibling),mA=l(O,Y),mA.return=R,R=mA):(t(R,O),mA=Sl(Y,R.mode,mA),mA.return=R,R=mA),x(R)):t(R,O)}return function(R,O,Y,mA){try{ti=0;var JA=je(R,O,Y,mA);return $a=null,JA}catch(qA){if(qA===Xr||qA===mo)throw qA;var se=Ut(29,qA,null,R.mode);return se.lanes=mA,se.return=R,se}finally{}}}var Ar=ih(!0),oh=ih(!1),Kt=V(null),en=null;function On(A){var e=A.alternate;tA(et,et.current&1),tA(Kt,A),en===null&&(e===null||Za.current!==null||e.memoizedState!==null)&&(en=A)}function sh(A){if(A.tag===22){if(tA(et,et.current),tA(Kt,A),en===null){var e=A.alternate;e!==null&&e.memoizedState!==null&&(en=A)}}else Kn()}function Kn(){tA(et,et.current),tA(Kt,Kt.current)}function Bn(A){dA(Kt),en===A&&(en=null),dA(et)}var et=V(0);function Ho(A){for(var e=A;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||Pc(t)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===A)break;for(;e.sibling===null;){if(e.return===null||e.return===A)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function lc(A,e,t,a){e=A.memoizedState,t=t(a,e),t=t==null?e:Q({},e,t),A.memoizedState=t,A.lanes===0&&(A.updateQueue.baseState=t)}var cc={enqueueSetState:function(A,e,t){A=A._reactInternals;var a=jt(),l=Tn(a);l.payload=e,t!=null&&(l.callback=t),e=In(A,l,a),e!==null&&(Ht(e,A,a),Zr(e,A,a))},enqueueReplaceState:function(A,e,t){A=A._reactInternals;var a=jt(),l=Tn(a);l.tag=1,l.payload=e,t!=null&&(l.callback=t),e=In(A,l,a),e!==null&&(Ht(e,A,a),Zr(e,A,a))},enqueueForceUpdate:function(A,e){A=A._reactInternals;var t=jt(),a=Tn(t);a.tag=2,e!=null&&(a.callback=e),e=In(A,a,t),e!==null&&(Ht(e,A,t),Zr(e,A,t))}};function lh(A,e,t,a,l,c,x){return A=A.stateNode,typeof A.shouldComponentUpdate=="function"?A.shouldComponentUpdate(a,c,x):e.prototype&&e.prototype.isPureReactComponent?!Or(t,a)||!Or(l,c):!0}function ch(A,e,t,a){A=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,a),e.state!==A&&cc.enqueueReplaceState(e,e.state,null)}function ya(A,e){var t=e;if("ref"in e){t={};for(var a in e)a!=="ref"&&(t[a]=e[a])}if(A=A.defaultProps){t===e&&(t=Q({},t));for(var l in A)t[l]===void 0&&(t[l]=A[l])}return t}var No=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function dh(A){No(A)}function uh(A){console.error(A)}function fh(A){No(A)}function ko(A,e){try{var t=A.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function hh(A,e,t){try{var a=A.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function dc(A,e,t){return t=Tn(t),t.tag=3,t.payload={element:null},t.callback=function(){ko(A,e)},t}function gh(A){return A=Tn(A),A.tag=3,A}function ph(A,e,t,a){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=a.value;A.payload=function(){return l(c)},A.callback=function(){hh(e,t,a)}}var x=t.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(A.callback=function(){hh(e,t,a),typeof l!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var y=a.stack;this.componentDidCatch(a.value,{componentStack:y!==null?y:""})})}function Cm(A,e,t,a,l){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=t.alternate,e!==null&&Gr(e,t,l,!0),t=Kt.current,t!==null){switch(t.tag){case 13:return en===null?Dc():t.alternate===null&&_e===0&&(_e=3),t.flags&=-257,t.flags|=65536,t.lanes=l,a===Kl?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([a]):e.add(a),Ic(A,a,l)),!1;case 22:return t.flags|=65536,a===Kl?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([a]):t.add(a)),Ic(A,a,l)),!1}throw Error(o(435,t.tag))}return Ic(A,a,l),Dc(),!1}if(ve)return e=Kt.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,a!==kl&&(A=Error(o(422),{cause:a}),_r(Tt(A,t)))):(a!==kl&&(e=Error(o(423),{cause:a}),_r(Tt(e,t))),A=A.current.alternate,A.flags|=65536,l&=-l,A.lanes|=l,a=Tt(a,t),l=dc(A.stateNode,a,l),_l(A,l),_e!==4&&(_e=2)),!1;var c=Error(o(520),{cause:a});if(c=Tt(c,t),ci===null?ci=[c]:ci.push(c),_e!==4&&(_e=2),e===null)return!0;a=Tt(a,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,A=l&-l,t.lanes|=A,A=dc(t.stateNode,a,A),_l(t,A),!1;case 1:if(e=t.type,c=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Yn===null||!Yn.has(c))))return t.flags|=65536,l&=-l,t.lanes|=l,l=gh(l),ph(l,A,t,a),_l(t,l),!1}t=t.return}while(t!==null);return!1}var xh=Error(o(461)),nt=!1;function ot(A,e,t,a){e.child=A===null?oh(e,null,t,a):Ar(e,A.child,t,a)}function mh(A,e,t,a,l){t=t.render;var c=e.ref;if("ref"in a){var x={};for(var y in a)y!=="ref"&&(x[y]=a[y])}else x=a;return Ba(e),a=Jl(A,e,t,x,c,l),y=Zl(),A!==null&&!nt?(ql(A,e,l),bn(A,e,l)):(ve&&y&&Hl(e),e.flags|=1,ot(A,e,a,l),e.child)}function Bh(A,e,t,a,l){if(A===null){var c=t.type;return typeof c=="function"&&!El(c)&&c.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=c,bh(A,e,c,a,l)):(A=uo(t.type,null,a,e,e.mode,l),A.ref=e.ref,A.return=e,e.child=A)}if(c=A.child,!Bc(A,l)){var x=c.memoizedProps;if(t=t.compare,t=t!==null?t:Or,t(x,a)&&A.ref===e.ref)return bn(A,e,l)}return e.flags|=1,A=fn(c,a),A.ref=e.ref,A.return=e,e.child=A}function bh(A,e,t,a,l){if(A!==null){var c=A.memoizedProps;if(Or(c,a)&&A.ref===e.ref)if(nt=!1,e.pendingProps=a=c,Bc(A,l))(A.flags&131072)!==0&&(nt=!0);else return e.lanes=A.lanes,bn(A,e,l)}return uc(A,e,t,a,l)}function wh(A,e,t){var a=e.pendingProps,l=a.children,c=A!==null?A.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=c!==null?c.baseLanes|t:t,A!==null){for(l=e.child=A.child,c=0;l!==null;)c=c|l.lanes|l.childLanes,l=l.sibling;e.childLanes=c&~a}else e.childLanes=0,e.child=null;return yh(A,e,a,t)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},A!==null&&xo(e,c!==null?c.cachePool:null),c!==null?bf(e,c):Vl(),sh(e);else return e.lanes=e.childLanes=536870912,yh(A,e,c!==null?c.baseLanes|t:t,t)}else c!==null?(xo(e,c.cachePool),bf(e,c),Kn(),e.memoizedState=null):(A!==null&&xo(e,null),Vl(),Kn());return ot(A,e,l,t),e.child}function yh(A,e,t,a){var l=Ol();return l=l===null?null:{parent:At._currentValue,pool:l},e.memoizedState={baseLanes:t,cachePool:l},A!==null&&xo(e,null),Vl(),sh(e),A!==null&&Gr(A,e,a,!0),null}function Mo(A,e){var t=e.ref;if(t===null)A!==null&&A.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(o(284));(A===null||A.ref!==t)&&(e.flags|=4194816)}}function uc(A,e,t,a,l){return Ba(e),t=Jl(A,e,t,a,void 0,l),a=Zl(),A!==null&&!nt?(ql(A,e,l),bn(A,e,l)):(ve&&a&&Hl(e),e.flags|=1,ot(A,e,t,l),e.child)}function vh(A,e,t,a,l,c){return Ba(e),e.updateQueue=null,t=yf(e,a,t,l),wf(A),a=Zl(),A!==null&&!nt?(ql(A,e,c),bn(A,e,c)):(ve&&a&&Hl(e),e.flags|=1,ot(A,e,t,c),e.child)}function Ch(A,e,t,a,l){if(Ba(e),e.stateNode===null){var c=Ga,x=t.contextType;typeof x=="object"&&x!==null&&(c=ft(x)),c=new t(a,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=cc,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=a,c.state=e.memoizedState,c.refs={},Rl(e),x=t.contextType,c.context=typeof x=="object"&&x!==null?ft(x):Ga,c.state=e.memoizedState,x=t.getDerivedStateFromProps,typeof x=="function"&&(lc(e,t,x,a),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(x=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),x!==c.state&&cc.enqueueReplaceState(c,c.state,null),Wr(e,a,c,l),qr(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(A===null){c=e.stateNode;var y=e.memoizedProps,j=ya(t,y);c.props=j;var Z=c.context,gA=t.contextType;x=Ga,typeof gA=="object"&&gA!==null&&(x=ft(gA));var bA=t.getDerivedStateFromProps;gA=typeof bA=="function"||typeof c.getSnapshotBeforeUpdate=="function",y=e.pendingProps!==y,gA||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y||Z!==x)&&ch(e,c,a,x),Dn=!1;var $=e.memoizedState;c.state=$,Wr(e,a,c,l),qr(),Z=e.memoizedState,y||$!==Z||Dn?(typeof bA=="function"&&(lc(e,t,bA,a),Z=e.memoizedState),(j=Dn||lh(e,t,j,a,$,Z,x))?(gA||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=Z),c.props=a,c.state=Z,c.context=x,a=j):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{c=e.stateNode,zl(A,e),x=e.memoizedProps,gA=ya(t,x),c.props=gA,bA=e.pendingProps,$=c.context,Z=t.contextType,j=Ga,typeof Z=="object"&&Z!==null&&(j=ft(Z)),y=t.getDerivedStateFromProps,(Z=typeof y=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(x!==bA||$!==j)&&ch(e,c,a,j),Dn=!1,$=e.memoizedState,c.state=$,Wr(e,a,c,l),qr();var AA=e.memoizedState;x!==bA||$!==AA||Dn||A!==null&&A.dependencies!==null&&go(A.dependencies)?(typeof y=="function"&&(lc(e,t,y,a),AA=e.memoizedState),(gA=Dn||lh(e,t,gA,a,$,AA,j)||A!==null&&A.dependencies!==null&&go(A.dependencies))?(Z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,AA,j),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,AA,j)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||x===A.memoizedProps&&$===A.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||x===A.memoizedProps&&$===A.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=AA),c.props=a,c.state=AA,c.context=j,a=gA):(typeof c.componentDidUpdate!="function"||x===A.memoizedProps&&$===A.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||x===A.memoizedProps&&$===A.memoizedState||(e.flags|=1024),a=!1)}return c=a,Mo(A,e),a=(e.flags&128)!==0,c||a?(c=e.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,A!==null&&a?(e.child=Ar(e,A.child,null,l),e.child=Ar(e,null,t,l)):ot(A,e,t,l),e.memoizedState=c.state,A=e.child):A=bn(A,e,l),A}function Qh(A,e,t,a){return zr(),e.flags|=256,ot(A,e,t,a),e.child}var fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hc(A){return{baseLanes:A,cachePool:uf()}}function gc(A,e,t){return A=A!==null?A.childLanes&~t:0,e&&(A|=Rt),A}function Uh(A,e,t){var a=e.pendingProps,l=!1,c=(e.flags&128)!==0,x;if((x=c)||(x=A!==null&&A.memoizedState===null?!1:(et.current&2)!==0),x&&(l=!0,e.flags&=-129),x=(e.flags&32)!==0,e.flags&=-33,A===null){if(ve){if(l?On(e):Kn(),ve){var y=ze,j;if(j=y){A:{for(j=y,y=An;j.nodeType!==8;){if(!y){y=null;break A}if(j=Zt(j.nextSibling),j===null){y=null;break A}}y=j}y!==null?(e.memoizedState={dehydrated:y,treeContext:ha!==null?{id:hn,overflow:gn}:null,retryLane:536870912,hydrationErrors:null},j=Ut(18,null,null,0),j.stateNode=y,j.return=e,e.child=j,mt=e,ze=null,j=!0):j=!1}j||xa(e)}if(y=e.memoizedState,y!==null&&(y=y.dehydrated,y!==null))return Pc(y)?e.lanes=32:e.lanes=536870912,null;Bn(e)}return y=a.children,a=a.fallback,l?(Kn(),l=e.mode,y=Do({mode:"hidden",children:y},l),a=fa(a,l,t,null),y.return=e,a.return=e,y.sibling=a,e.child=y,l=e.child,l.memoizedState=hc(t),l.childLanes=gc(A,x,t),e.memoizedState=fc,a):(On(e),pc(e,y))}if(j=A.memoizedState,j!==null&&(y=j.dehydrated,y!==null)){if(c)e.flags&256?(On(e),e.flags&=-257,e=xc(A,e,t)):e.memoizedState!==null?(Kn(),e.child=A.child,e.flags|=128,e=null):(Kn(),l=a.fallback,y=e.mode,a=Do({mode:"visible",children:a.children},y),l=fa(l,y,t,null),l.flags|=2,a.return=e,l.return=e,a.sibling=l,e.child=a,Ar(e,A.child,null,t),a=e.child,a.memoizedState=hc(t),a.childLanes=gc(A,x,t),e.memoizedState=fc,e=l);else if(On(e),Pc(y)){if(x=y.nextSibling&&y.nextSibling.dataset,x)var Z=x.dgst;x=Z,a=Error(o(419)),a.stack="",a.digest=x,_r({value:a,source:null,stack:null}),e=xc(A,e,t)}else if(nt||Gr(A,e,t,!1),x=(t&A.childLanes)!==0,nt||x){if(x=De,x!==null&&(a=t&-t,a=(a&42)!==0?1:p(a),a=(a&(x.suspendedLanes|t))!==0?0:a,a!==0&&a!==j.retryLane))throw j.retryLane=a,_a(A,a),Ht(x,A,a),xh;y.data==="$?"||Dc(),e=xc(A,e,t)}else y.data==="$?"?(e.flags|=192,e.child=A.child,e=null):(A=j.treeContext,ze=Zt(y.nextSibling),mt=e,ve=!0,pa=null,An=!1,A!==null&&(Lt[Ot++]=hn,Lt[Ot++]=gn,Lt[Ot++]=ha,hn=A.id,gn=A.overflow,ha=e),e=pc(e,a.children),e.flags|=4096);return e}return l?(Kn(),l=a.fallback,y=e.mode,j=A.child,Z=j.sibling,a=fn(j,{mode:"hidden",children:a.children}),a.subtreeFlags=j.subtreeFlags&65011712,Z!==null?l=fn(Z,l):(l=fa(l,y,t,null),l.flags|=2),l.return=e,a.return=e,a.sibling=l,e.child=a,a=l,l=e.child,y=A.child.memoizedState,y===null?y=hc(t):(j=y.cachePool,j!==null?(Z=At._currentValue,j=j.parent!==Z?{parent:Z,pool:Z}:j):j=uf(),y={baseLanes:y.baseLanes|t,cachePool:j}),l.memoizedState=y,l.childLanes=gc(A,x,t),e.memoizedState=fc,a):(On(e),t=A.child,A=t.sibling,t=fn(t,{mode:"visible",children:a.children}),t.return=e,t.sibling=null,A!==null&&(x=e.deletions,x===null?(e.deletions=[A],e.flags|=16):x.push(A)),e.child=t,e.memoizedState=null,t)}function pc(A,e){return e=Do({mode:"visible",children:e},A.mode),e.return=A,A.child=e}function Do(A,e){return A=Ut(22,A,null,e),A.lanes=0,A.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},A}function xc(A,e,t){return Ar(e,A.child,null,t),A=pc(e,e.pendingProps.children),A.flags|=2,e.memoizedState=null,A}function Fh(A,e,t){A.lanes|=e;var a=A.alternate;a!==null&&(a.lanes|=e),Dl(A.return,e,t)}function mc(A,e,t,a,l){var c=A.memoizedState;c===null?A.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:l}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=t,c.tailMode=l)}function Eh(A,e,t){var a=e.pendingProps,l=a.revealOrder,c=a.tail;if(ot(A,e,a.children,t),a=et.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(A!==null&&(A.flags&128)!==0)A:for(A=e.child;A!==null;){if(A.tag===13)A.memoizedState!==null&&Fh(A,t,e);else if(A.tag===19)Fh(A,t,e);else if(A.child!==null){A.child.return=A,A=A.child;continue}if(A===e)break A;for(;A.sibling===null;){if(A.return===null||A.return===e)break A;A=A.return}A.sibling.return=A.return,A=A.sibling}a&=1}switch(tA(et,a),l){case"forwards":for(t=e.child,l=null;t!==null;)A=t.alternate,A!==null&&Ho(A)===null&&(l=t),t=t.sibling;t=l,t===null?(l=e.child,e.child=null):(l=t.sibling,t.sibling=null),mc(e,!1,l,t,c);break;case"backwards":for(t=null,l=e.child,e.child=null;l!==null;){if(A=l.alternate,A!==null&&Ho(A)===null){e.child=l;break}A=l.sibling,l.sibling=t,t=l,l=A}mc(e,!0,t,null,c);break;case"together":mc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bn(A,e,t){if(A!==null&&(e.dependencies=A.dependencies),Vn|=e.lanes,(t&e.childLanes)===0)if(A!==null){if(Gr(A,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(A!==null&&e.child!==A.child)throw Error(o(153));if(e.child!==null){for(A=e.child,t=fn(A,A.pendingProps),e.child=t,t.return=e;A.sibling!==null;)A=A.sibling,t=t.sibling=fn(A,A.pendingProps),t.return=e;t.sibling=null}return e.child}function Bc(A,e){return(A.lanes&e)!==0?!0:(A=A.dependencies,!!(A!==null&&go(A)))}function Qm(A,e,t){switch(e.tag){case 3:UA(e,e.stateNode.containerInfo),Mn(e,At,A.memoizedState.cache),zr();break;case 27:case 5:D(e);break;case 4:UA(e,e.stateNode.containerInfo);break;case 10:Mn(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(On(e),e.flags|=128,null):(t&e.child.childLanes)!==0?Uh(A,e,t):(On(e),A=bn(A,e,t),A!==null?A.sibling:null);On(e);break;case 19:var l=(A.flags&128)!==0;if(a=(t&e.childLanes)!==0,a||(Gr(A,e,t,!1),a=(t&e.childLanes)!==0),l){if(a)return Eh(A,e,t);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),tA(et,et.current),a)break;return null;case 22:case 23:return e.lanes=0,wh(A,e,t);case 24:Mn(e,At,A.memoizedState.cache)}return bn(A,e,t)}function Sh(A,e,t){if(A!==null)if(A.memoizedProps!==e.pendingProps)nt=!0;else{if(!Bc(A,t)&&(e.flags&128)===0)return nt=!1,Qm(A,e,t);nt=(A.flags&131072)!==0}else nt=!1,ve&&(e.flags&1048576)!==0&&af(e,ho,e.index);switch(e.lanes=0,e.tag){case 16:A:{A=e.pendingProps;var a=e.elementType,l=a._init;if(a=l(a._payload),e.type=a,typeof a=="function")El(a)?(A=ya(a,A),e.tag=1,e=Ch(null,e,a,A,t)):(e.tag=0,e=uc(null,e,a,A,t));else{if(a!=null){if(l=a.$$typeof,l===sA){e.tag=11,e=mh(null,e,a,A,t);break A}else if(l===EA){e.tag=14,e=Bh(null,e,a,A,t);break A}}throw e=RA(a)||a,Error(o(306,e,""))}}return e;case 0:return uc(A,e,e.type,e.pendingProps,t);case 1:return a=e.type,l=ya(a,e.pendingProps),Ch(A,e,a,l,t);case 3:A:{if(UA(e,e.stateNode.containerInfo),A===null)throw Error(o(387));a=e.pendingProps;var c=e.memoizedState;l=c.element,zl(A,e),Wr(e,a,null,t);var x=e.memoizedState;if(a=x.cache,Mn(e,At,a),a!==c.cache&&Tl(e,[At],t,!0),qr(),a=x.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:x.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=Qh(A,e,a,t);break A}else if(a!==l){l=Tt(Error(o(424)),e),_r(l),e=Qh(A,e,a,t);break A}else{switch(A=e.stateNode.containerInfo,A.nodeType){case 9:A=A.body;break;default:A=A.nodeName==="HTML"?A.ownerDocument.body:A}for(ze=Zt(A.firstChild),mt=e,ve=!0,pa=null,An=!0,t=oh(e,null,a,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(zr(),a===l){e=bn(A,e,t);break A}ot(A,e,a,t)}e=e.child}return e;case 26:return Mo(A,e),A===null?(t=kg(e.type,null,e.pendingProps,null))?e.memoizedState=t:ve||(t=e.type,A=e.pendingProps,a=Zo(M.current).createElement(t),a[v]=e,a[E]=A,lt(a,t,A),Be(a),e.stateNode=a):e.memoizedState=kg(e.type,A.memoizedProps,e.pendingProps,A.memoizedState),null;case 27:return D(e),A===null&&ve&&(a=e.stateNode=jg(e.type,e.pendingProps,M.current),mt=e,An=!0,l=ze,Zn(e.type)?($c=l,ze=Zt(a.firstChild)):ze=l),ot(A,e,e.pendingProps.children,t),Mo(A,e),A===null&&(e.flags|=4194304),e.child;case 5:return A===null&&ve&&((l=a=ze)&&(a=$m(a,e.type,e.pendingProps,An),a!==null?(e.stateNode=a,mt=e,ze=Zt(a.firstChild),An=!1,l=!0):l=!1),l||xa(e)),D(e),l=e.type,c=e.pendingProps,x=A!==null?A.memoizedProps:null,a=c.children,Zc(l,c)?a=null:x!==null&&Zc(l,x)&&(e.flags|=32),e.memoizedState!==null&&(l=Jl(A,e,xm,null,null,t),Bi._currentValue=l),Mo(A,e),ot(A,e,a,t),e.child;case 6:return A===null&&ve&&((A=t=ze)&&(t=AB(t,e.pendingProps,An),t!==null?(e.stateNode=t,mt=e,ze=null,A=!0):A=!1),A||xa(e)),null;case 13:return Uh(A,e,t);case 4:return UA(e,e.stateNode.containerInfo),a=e.pendingProps,A===null?e.child=Ar(e,null,a,t):ot(A,e,a,t),e.child;case 11:return mh(A,e,e.type,e.pendingProps,t);case 7:return ot(A,e,e.pendingProps,t),e.child;case 8:return ot(A,e,e.pendingProps.children,t),e.child;case 12:return ot(A,e,e.pendingProps.children,t),e.child;case 10:return a=e.pendingProps,Mn(e,e.type,a.value),ot(A,e,a.children,t),e.child;case 9:return l=e.type._context,a=e.pendingProps.children,Ba(e),l=ft(l),a=a(l),e.flags|=1,ot(A,e,a,t),e.child;case 14:return Bh(A,e,e.type,e.pendingProps,t);case 15:return bh(A,e,e.type,e.pendingProps,t);case 19:return Eh(A,e,t);case 31:return a=e.pendingProps,t=e.mode,a={mode:a.mode,children:a.children},A===null?(t=Do(a,t),t.ref=e.ref,e.child=t,t.return=e,e=t):(t=fn(A.child,a),t.ref=e.ref,e.child=t,t.return=e,e=t),e;case 22:return wh(A,e,t);case 24:return Ba(e),a=ft(At),A===null?(l=Ol(),l===null&&(l=De,c=Il(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=t),l=c),e.memoizedState={parent:a,cache:l},Rl(e),Mn(e,At,l)):((A.lanes&t)!==0&&(zl(A,e),Wr(e,null,null,t),qr()),l=A.memoizedState,c=e.memoizedState,l.parent!==a?(l={parent:a,cache:a},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),Mn(e,At,a)):(a=c.cache,Mn(e,At,a),a!==l.cache&&Tl(e,[At],t,!0))),ot(A,e,e.pendingProps.children,t),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function wn(A){A.flags|=4}function jh(A,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)A.flags&=-16777217;else if(A.flags|=16777216,!Lg(e)){if(e=Kt.current,e!==null&&((me&4194048)===me?en!==null:(me&62914560)!==me&&(me&536870912)===0||e!==en))throw Jr=Kl,ff;A.flags|=8192}}function To(A,e){e!==null&&(A.flags|=4),A.flags&16384&&(e=A.tag!==22?le():536870912,A.lanes|=e,ar|=e)}function ai(A,e){if(!ve)switch(A.tailMode){case"hidden":e=A.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?A.tail=null:t.sibling=null;break;case"collapsed":t=A.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e||A.tail===null?A.tail=null:A.tail.sibling=null:a.sibling=null}}function Ke(A){var e=A.alternate!==null&&A.alternate.child===A.child,t=0,a=0;if(e)for(var l=A.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=A,l=l.sibling;else for(l=A.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=A,l=l.sibling;return A.subtreeFlags|=a,A.childLanes=t,e}function Um(A,e,t){var a=e.pendingProps;switch(Nl(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(e),null;case 1:return Ke(e),null;case 3:return t=e.stateNode,a=null,A!==null&&(a=A.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),xn(At),cA(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(A===null||A.child===null)&&(Rr(e)?wn(e):A===null||A.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,sf())),Ke(e),null;case 26:return t=e.memoizedState,A===null?(wn(e),t!==null?(Ke(e),jh(e,t)):(Ke(e),e.flags&=-16777217)):t?t!==A.memoizedState?(wn(e),Ke(e),jh(e,t)):(Ke(e),e.flags&=-16777217):(A.memoizedProps!==a&&wn(e),Ke(e),e.flags&=-16777217),null;case 27:J(e),t=M.current;var l=e.type;if(A!==null&&e.stateNode!=null)A.memoizedProps!==a&&wn(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return Ke(e),null}A=vA.current,Rr(e)?rf(e):(A=jg(l,a,t),e.stateNode=A,wn(e))}return Ke(e),null;case 5:if(J(e),t=e.type,A!==null&&e.stateNode!=null)A.memoizedProps!==a&&wn(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return Ke(e),null}if(A=vA.current,Rr(e))rf(e);else{switch(l=Zo(M.current),A){case 1:A=l.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:A=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":A=l.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":A=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":A=l.createElement("div"),A.innerHTML="<script><\/script>",A=A.removeChild(A.firstChild);break;case"select":A=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?A.multiple=!0:a.size&&(A.size=a.size);break;default:A=typeof a.is=="string"?l.createElement(t,{is:a.is}):l.createElement(t)}}A[v]=e,A[E]=a;A:for(l=e.child;l!==null;){if(l.tag===5||l.tag===6)A.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break A;for(;l.sibling===null;){if(l.return===null||l.return===e)break A;l=l.return}l.sibling.return=l.return,l=l.sibling}e.stateNode=A;A:switch(lt(A,t,a),t){case"button":case"input":case"select":case"textarea":A=!!a.autoFocus;break A;case"img":A=!0;break A;default:A=!1}A&&wn(e)}}return Ke(e),e.flags&=-16777217,null;case 6:if(A&&e.stateNode!=null)A.memoizedProps!==a&&wn(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(o(166));if(A=M.current,Rr(e)){if(A=e.stateNode,t=e.memoizedProps,a=null,l=mt,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}A[v]=e,A=!!(A.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||vg(A.nodeValue,t)),A||xa(e)}else A=Zo(A).createTextNode(a),A[v]=e,e.stateNode=A}return Ke(e),null;case 13:if(a=e.memoizedState,A===null||A.memoizedState!==null&&A.memoizedState.dehydrated!==null){if(l=Rr(e),a!==null&&a.dehydrated!==null){if(A===null){if(!l)throw Error(o(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[v]=e}else zr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ke(e),l=!1}else l=sf(),A!==null&&A.memoizedState!==null&&(A.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(Bn(e),e):(Bn(e),null)}if(Bn(e),(e.flags&128)!==0)return e.lanes=t,e;if(t=a!==null,A=A!==null&&A.memoizedState!==null,t){a=e.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var c=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==l&&(a.flags|=2048)}return t!==A&&t&&(e.child.flags|=8192),To(e,e.updateQueue),Ke(e),null;case 4:return cA(),A===null&&Gc(e.stateNode.containerInfo),Ke(e),null;case 10:return xn(e.type),Ke(e),null;case 19:if(dA(et),l=e.memoizedState,l===null)return Ke(e),null;if(a=(e.flags&128)!==0,c=l.rendering,c===null)if(a)ai(l,!1);else{if(_e!==0||A!==null&&(A.flags&128)!==0)for(A=e.child;A!==null;){if(c=Ho(A),c!==null){for(e.flags|=128,ai(l,!1),A=c.updateQueue,e.updateQueue=A,To(e,A),e.subtreeFlags=0,A=t,t=e.child;t!==null;)nf(t,A),t=t.sibling;return tA(et,et.current&1|2),e.child}A=A.sibling}l.tail!==null&&ZA()>Oo&&(e.flags|=128,a=!0,ai(l,!1),e.lanes=4194304)}else{if(!a)if(A=Ho(c),A!==null){if(e.flags|=128,a=!0,A=A.updateQueue,e.updateQueue=A,To(e,A),ai(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!ve)return Ke(e),null}else 2*ZA()-l.renderingStartTime>Oo&&t!==536870912&&(e.flags|=128,a=!0,ai(l,!1),e.lanes=4194304);l.isBackwards?(c.sibling=e.child,e.child=c):(A=l.last,A!==null?A.sibling=c:e.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ZA(),e.sibling=null,A=et.current,tA(et,a?A&1|2:A&1),e):(Ke(e),null);case 22:case 23:return Bn(e),Yl(),a=e.memoizedState!==null,A!==null?A.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(t&536870912)!==0&&(e.flags&128)===0&&(Ke(e),e.subtreeFlags&6&&(e.flags|=8192)):Ke(e),t=e.updateQueue,t!==null&&To(e,t.retryQueue),t=null,A!==null&&A.memoizedState!==null&&A.memoizedState.cachePool!==null&&(t=A.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==t&&(e.flags|=2048),A!==null&&dA(ba),null;case 24:return t=null,A!==null&&(t=A.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),xn(At),Ke(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function Fm(A,e){switch(Nl(e),e.tag){case 1:return A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 3:return xn(At),cA(),A=e.flags,(A&65536)!==0&&(A&128)===0?(e.flags=A&-65537|128,e):null;case 26:case 27:case 5:return J(e),null;case 13:if(Bn(e),A=e.memoizedState,A!==null&&A.dehydrated!==null){if(e.alternate===null)throw Error(o(340));zr()}return A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 19:return dA(et),null;case 4:return cA(),null;case 10:return xn(e.type),null;case 22:case 23:return Bn(e),Yl(),A!==null&&dA(ba),A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 24:return xn(At),null;case 25:return null;default:return null}}function Hh(A,e){switch(Nl(e),e.tag){case 3:xn(At),cA();break;case 26:case 27:case 5:J(e);break;case 4:cA();break;case 13:Bn(e);break;case 19:dA(et);break;case 10:xn(e.type);break;case 22:case 23:Bn(e),Yl(),A!==null&&dA(ba);break;case 24:xn(At)}}function ri(A,e){try{var t=e.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var l=a.next;t=l;do{if((t.tag&A)===A){a=void 0;var c=t.create,x=t.inst;a=c(),x.destroy=a}t=t.next}while(t!==l)}}catch(y){Ne(e,e.return,y)}}function Rn(A,e,t){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var c=l.next;a=c;do{if((a.tag&A)===A){var x=a.inst,y=x.destroy;if(y!==void 0){x.destroy=void 0,l=e;var j=t,Z=y;try{Z()}catch(gA){Ne(l,j,gA)}}}a=a.next}while(a!==c)}}catch(gA){Ne(e,e.return,gA)}}function Nh(A){var e=A.updateQueue;if(e!==null){var t=A.stateNode;try{Bf(e,t)}catch(a){Ne(A,A.return,a)}}}function kh(A,e,t){t.props=ya(A.type,A.memoizedProps),t.state=A.memoizedState;try{t.componentWillUnmount()}catch(a){Ne(A,e,a)}}function ii(A,e){try{var t=A.ref;if(t!==null){switch(A.tag){case 26:case 27:case 5:var a=A.stateNode;break;case 30:a=A.stateNode;break;default:a=A.stateNode}typeof t=="function"?A.refCleanup=t(a):t.current=a}}catch(l){Ne(A,e,l)}}function tn(A,e){var t=A.ref,a=A.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(l){Ne(A,e,l)}finally{A.refCleanup=null,A=A.alternate,A!=null&&(A.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){Ne(A,e,l)}else t.current=null}function Mh(A){var e=A.type,t=A.memoizedProps,a=A.stateNode;try{A:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break A;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(l){Ne(A,A.return,l)}}function bc(A,e,t){try{var a=A.stateNode;Jm(a,A.type,t,e),a[E]=e}catch(l){Ne(A,A.return,l)}}function Dh(A){return A.tag===5||A.tag===3||A.tag===26||A.tag===27&&Zn(A.type)||A.tag===4}function wc(A){A:for(;;){for(;A.sibling===null;){if(A.return===null||Dh(A.return))return null;A=A.return}for(A.sibling.return=A.return,A=A.sibling;A.tag!==5&&A.tag!==6&&A.tag!==18;){if(A.tag===27&&Zn(A.type)||A.flags&2||A.child===null||A.tag===4)continue A;A.child.return=A,A=A.child}if(!(A.flags&2))return A.stateNode}}function yc(A,e,t){var a=A.tag;if(a===5||a===6)A=A.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(A,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(A),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Jo));else if(a!==4&&(a===27&&Zn(A.type)&&(t=A.stateNode,e=null),A=A.child,A!==null))for(yc(A,e,t),A=A.sibling;A!==null;)yc(A,e,t),A=A.sibling}function Io(A,e,t){var a=A.tag;if(a===5||a===6)A=A.stateNode,e?t.insertBefore(A,e):t.appendChild(A);else if(a!==4&&(a===27&&Zn(A.type)&&(t=A.stateNode),A=A.child,A!==null))for(Io(A,e,t),A=A.sibling;A!==null;)Io(A,e,t),A=A.sibling}function Th(A){var e=A.stateNode,t=A.memoizedProps;try{for(var a=A.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);lt(e,a,t),e[v]=A,e[E]=t}catch(c){Ne(A,A.return,c)}}var yn=!1,Xe=!1,vc=!1,Ih=typeof WeakSet=="function"?WeakSet:Set,at=null;function Em(A,e){if(A=A.containerInfo,Xc=es,A=Xu(A),wl(A)){if("selectionStart"in A)var t={start:A.selectionStart,end:A.selectionEnd};else A:{t=(t=A.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var l=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{t.nodeType,c.nodeType}catch{t=null;break A}var x=0,y=-1,j=-1,Z=0,gA=0,bA=A,$=null;e:for(;;){for(var AA;bA!==t||l!==0&&bA.nodeType!==3||(y=x+l),bA!==c||a!==0&&bA.nodeType!==3||(j=x+a),bA.nodeType===3&&(x+=bA.nodeValue.length),(AA=bA.firstChild)!==null;)$=bA,bA=AA;for(;;){if(bA===A)break e;if($===t&&++Z===l&&(y=x),$===c&&++gA===a&&(j=x),(AA=bA.nextSibling)!==null)break;bA=$,$=bA.parentNode}bA=AA}t=y===-1||j===-1?null:{start:y,end:j}}else t=null}t=t||{start:0,end:0}}else t=null;for(Jc={focusedElem:A,selectionRange:t},es=!1,at=e;at!==null;)if(e=at,A=e.child,(e.subtreeFlags&1024)!==0&&A!==null)A.return=e,at=A;else for(;at!==null;){switch(e=at,c=e.alternate,A=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((A&1024)!==0&&c!==null){A=void 0,t=e,l=c.memoizedProps,c=c.memoizedState,a=t.stateNode;try{var ee=ya(t.type,l,t.elementType===t.type);A=a.getSnapshotBeforeUpdate(ee,c),a.__reactInternalSnapshotBeforeUpdate=A}catch(PA){Ne(t,t.return,PA)}}break;case 3:if((A&1024)!==0){if(A=e.stateNode.containerInfo,t=A.nodeType,t===9)Wc(A);else if(t===1)switch(A.nodeName){case"HEAD":case"HTML":case"BODY":Wc(A);break;default:A.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((A&1024)!==0)throw Error(o(163))}if(A=e.sibling,A!==null){A.return=e.return,at=A;break}at=e.return}}function Lh(A,e,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:zn(A,t),a&4&&ri(5,t);break;case 1:if(zn(A,t),a&4)if(A=t.stateNode,e===null)try{A.componentDidMount()}catch(x){Ne(t,t.return,x)}else{var l=ya(t.type,e.memoizedProps);e=e.memoizedState;try{A.componentDidUpdate(l,e,A.__reactInternalSnapshotBeforeUpdate)}catch(x){Ne(t,t.return,x)}}a&64&&Nh(t),a&512&&ii(t,t.return);break;case 3:if(zn(A,t),a&64&&(A=t.updateQueue,A!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{Bf(A,e)}catch(x){Ne(t,t.return,x)}}break;case 27:e===null&&a&4&&Th(t);case 26:case 5:zn(A,t),e===null&&a&4&&Mh(t),a&512&&ii(t,t.return);break;case 12:zn(A,t);break;case 13:zn(A,t),a&4&&Rh(A,t),a&64&&(A=t.memoizedState,A!==null&&(A=A.dehydrated,A!==null&&(t=Im.bind(null,t),eB(A,t))));break;case 22:if(a=t.memoizedState!==null||yn,!a){e=e!==null&&e.memoizedState!==null||Xe,l=yn;var c=Xe;yn=a,(Xe=e)&&!c?_n(A,t,(t.subtreeFlags&8772)!==0):zn(A,t),yn=l,Xe=c}break;case 30:break;default:zn(A,t)}}function Oh(A){var e=A.alternate;e!==null&&(A.alternate=null,Oh(e)),A.child=null,A.deletions=null,A.sibling=null,A.tag===5&&(e=A.stateNode,e!==null&&DA(e)),A.stateNode=null,A.return=null,A.dependencies=null,A.memoizedProps=null,A.memoizedState=null,A.pendingProps=null,A.stateNode=null,A.updateQueue=null}var Ie=null,yt=!1;function vn(A,e,t){for(t=t.child;t!==null;)Kh(A,e,t),t=t.sibling}function Kh(A,e,t){if(fe&&typeof fe.onCommitFiberUnmount=="function")try{fe.onCommitFiberUnmount(xe,t)}catch{}switch(t.tag){case 26:Xe||tn(t,e),vn(A,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Xe||tn(t,e);var a=Ie,l=yt;Zn(t.type)&&(Ie=t.stateNode,yt=!1),vn(A,e,t),gi(t.stateNode),Ie=a,yt=l;break;case 5:Xe||tn(t,e);case 6:if(a=Ie,l=yt,Ie=null,vn(A,e,t),Ie=a,yt=l,Ie!==null)if(yt)try{(Ie.nodeType===9?Ie.body:Ie.nodeName==="HTML"?Ie.ownerDocument.body:Ie).removeChild(t.stateNode)}catch(c){Ne(t,e,c)}else try{Ie.removeChild(t.stateNode)}catch(c){Ne(t,e,c)}break;case 18:Ie!==null&&(yt?(A=Ie,Eg(A.nodeType===9?A.body:A.nodeName==="HTML"?A.ownerDocument.body:A,t.stateNode),vi(A)):Eg(Ie,t.stateNode));break;case 4:a=Ie,l=yt,Ie=t.stateNode.containerInfo,yt=!0,vn(A,e,t),Ie=a,yt=l;break;case 0:case 11:case 14:case 15:Xe||Rn(2,t,e),Xe||Rn(4,t,e),vn(A,e,t);break;case 1:Xe||(tn(t,e),a=t.stateNode,typeof a.componentWillUnmount=="function"&&kh(t,e,a)),vn(A,e,t);break;case 21:vn(A,e,t);break;case 22:Xe=(a=Xe)||t.memoizedState!==null,vn(A,e,t),Xe=a;break;default:vn(A,e,t)}}function Rh(A,e){if(e.memoizedState===null&&(A=e.alternate,A!==null&&(A=A.memoizedState,A!==null&&(A=A.dehydrated,A!==null))))try{vi(A)}catch(t){Ne(e,e.return,t)}}function Sm(A){switch(A.tag){case 13:case 19:var e=A.stateNode;return e===null&&(e=A.stateNode=new Ih),e;case 22:return A=A.stateNode,e=A._retryCache,e===null&&(e=A._retryCache=new Ih),e;default:throw Error(o(435,A.tag))}}function Cc(A,e){var t=Sm(A);e.forEach(function(a){var l=Lm.bind(null,A,a);t.has(a)||(t.add(a),a.then(l,l))})}function Ft(A,e){var t=e.deletions;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a],c=A,x=e,y=x;A:for(;y!==null;){switch(y.tag){case 27:if(Zn(y.type)){Ie=y.stateNode,yt=!1;break A}break;case 5:Ie=y.stateNode,yt=!1;break A;case 3:case 4:Ie=y.stateNode.containerInfo,yt=!0;break A}y=y.return}if(Ie===null)throw Error(o(160));Kh(c,x,l),Ie=null,yt=!1,c=l.alternate,c!==null&&(c.return=null),l.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)zh(e,A),e=e.sibling}var Jt=null;function zh(A,e){var t=A.alternate,a=A.flags;switch(A.tag){case 0:case 11:case 14:case 15:Ft(e,A),Et(A),a&4&&(Rn(3,A,A.return),ri(3,A),Rn(5,A,A.return));break;case 1:Ft(e,A),Et(A),a&512&&(Xe||t===null||tn(t,t.return)),a&64&&yn&&(A=A.updateQueue,A!==null&&(a=A.callbacks,a!==null&&(t=A.shared.hiddenCallbacks,A.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var l=Jt;if(Ft(e,A),Et(A),a&512&&(Xe||t===null||tn(t,t.return)),a&4){var c=t!==null?t.memoizedState:null;if(a=A.memoizedState,t===null)if(a===null)if(A.stateNode===null){A:{a=A.type,t=A.memoizedProps,l=l.ownerDocument||l;e:switch(a){case"title":c=l.getElementsByTagName("title")[0],(!c||c[pA]||c[v]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=l.createElement(a),l.head.insertBefore(c,l.querySelector("head > title"))),lt(c,a,t),c[v]=A,Be(c),a=c;break A;case"link":var x=Tg("link","href",l).get(a+(t.href||""));if(x){for(var y=0;y<x.length;y++)if(c=x[y],c.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&c.getAttribute("rel")===(t.rel==null?null:t.rel)&&c.getAttribute("title")===(t.title==null?null:t.title)&&c.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){x.splice(y,1);break e}}c=l.createElement(a),lt(c,a,t),l.head.appendChild(c);break;case"meta":if(x=Tg("meta","content",l).get(a+(t.content||""))){for(y=0;y<x.length;y++)if(c=x[y],c.getAttribute("content")===(t.content==null?null:""+t.content)&&c.getAttribute("name")===(t.name==null?null:t.name)&&c.getAttribute("property")===(t.property==null?null:t.property)&&c.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&c.getAttribute("charset")===(t.charSet==null?null:t.charSet)){x.splice(y,1);break e}}c=l.createElement(a),lt(c,a,t),l.head.appendChild(c);break;default:throw Error(o(468,a))}c[v]=A,Be(c),a=c}A.stateNode=a}else Ig(l,A.type,A.stateNode);else A.stateNode=Dg(l,a,A.memoizedProps);else c!==a?(c===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):c.count--,a===null?Ig(l,A.type,A.stateNode):Dg(l,a,A.memoizedProps)):a===null&&A.stateNode!==null&&bc(A,A.memoizedProps,t.memoizedProps)}break;case 27:Ft(e,A),Et(A),a&512&&(Xe||t===null||tn(t,t.return)),t!==null&&a&4&&bc(A,A.memoizedProps,t.memoizedProps);break;case 5:if(Ft(e,A),Et(A),a&512&&(Xe||t===null||tn(t,t.return)),A.flags&32){l=A.stateNode;try{Ta(l,"")}catch(AA){Ne(A,A.return,AA)}}a&4&&A.stateNode!=null&&(l=A.memoizedProps,bc(A,l,t!==null?t.memoizedProps:l)),a&1024&&(vc=!0);break;case 6:if(Ft(e,A),Et(A),a&4){if(A.stateNode===null)throw Error(o(162));a=A.memoizedProps,t=A.stateNode;try{t.nodeValue=a}catch(AA){Ne(A,A.return,AA)}}break;case 3:if(Po=null,l=Jt,Jt=qo(e.containerInfo),Ft(e,A),Jt=l,Et(A),a&4&&t!==null&&t.memoizedState.isDehydrated)try{vi(e.containerInfo)}catch(AA){Ne(A,A.return,AA)}vc&&(vc=!1,_h(A));break;case 4:a=Jt,Jt=qo(A.stateNode.containerInfo),Ft(e,A),Et(A),Jt=a;break;case 12:Ft(e,A),Et(A);break;case 13:Ft(e,A),Et(A),A.child.flags&8192&&A.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(jc=ZA()),a&4&&(a=A.updateQueue,a!==null&&(A.updateQueue=null,Cc(A,a)));break;case 22:l=A.memoizedState!==null;var j=t!==null&&t.memoizedState!==null,Z=yn,gA=Xe;if(yn=Z||l,Xe=gA||j,Ft(e,A),Xe=gA,yn=Z,Et(A),a&8192)A:for(e=A.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(t===null||j||yn||Xe||va(A)),t=null,e=A;;){if(e.tag===5||e.tag===26){if(t===null){j=t=e;try{if(c=j.stateNode,l)x=c.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{y=j.stateNode;var bA=j.memoizedProps.style,$=bA!=null&&bA.hasOwnProperty("display")?bA.display:null;y.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(AA){Ne(j,j.return,AA)}}}else if(e.tag===6){if(t===null){j=e;try{j.stateNode.nodeValue=l?"":j.memoizedProps}catch(AA){Ne(j,j.return,AA)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===A)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===A)break A;for(;e.sibling===null;){if(e.return===null||e.return===A)break A;t===e&&(t=null),e=e.return}t===e&&(t=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=A.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,Cc(A,t))));break;case 19:Ft(e,A),Et(A),a&4&&(a=A.updateQueue,a!==null&&(A.updateQueue=null,Cc(A,a)));break;case 30:break;case 21:break;default:Ft(e,A),Et(A)}}function Et(A){var e=A.flags;if(e&2){try{for(var t,a=A.return;a!==null;){if(Dh(a)){t=a;break}a=a.return}if(t==null)throw Error(o(160));switch(t.tag){case 27:var l=t.stateNode,c=wc(A);Io(A,c,l);break;case 5:var x=t.stateNode;t.flags&32&&(Ta(x,""),t.flags&=-33);var y=wc(A);Io(A,y,x);break;case 3:case 4:var j=t.stateNode.containerInfo,Z=wc(A);yc(A,Z,j);break;default:throw Error(o(161))}}catch(gA){Ne(A,A.return,gA)}A.flags&=-3}e&4096&&(A.flags&=-4097)}function _h(A){if(A.subtreeFlags&1024)for(A=A.child;A!==null;){var e=A;_h(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),A=A.sibling}}function zn(A,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Lh(A,e.alternate,e),e=e.sibling}function va(A){for(A=A.child;A!==null;){var e=A;switch(e.tag){case 0:case 11:case 14:case 15:Rn(4,e,e.return),va(e);break;case 1:tn(e,e.return);var t=e.stateNode;typeof t.componentWillUnmount=="function"&&kh(e,e.return,t),va(e);break;case 27:gi(e.stateNode);case 26:case 5:tn(e,e.return),va(e);break;case 22:e.memoizedState===null&&va(e);break;case 30:va(e);break;default:va(e)}A=A.sibling}}function _n(A,e,t){for(t=t&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,l=A,c=e,x=c.flags;switch(c.tag){case 0:case 11:case 15:_n(l,c,t),ri(4,c);break;case 1:if(_n(l,c,t),a=c,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(Z){Ne(a,a.return,Z)}if(a=c,l=a.updateQueue,l!==null){var y=a.stateNode;try{var j=l.shared.hiddenCallbacks;if(j!==null)for(l.shared.hiddenCallbacks=null,l=0;l<j.length;l++)mf(j[l],y)}catch(Z){Ne(a,a.return,Z)}}t&&x&64&&Nh(c),ii(c,c.return);break;case 27:Th(c);case 26:case 5:_n(l,c,t),t&&a===null&&x&4&&Mh(c),ii(c,c.return);break;case 12:_n(l,c,t);break;case 13:_n(l,c,t),t&&x&4&&Rh(l,c);break;case 22:c.memoizedState===null&&_n(l,c,t),ii(c,c.return);break;case 30:break;default:_n(l,c,t)}e=e.sibling}}function Qc(A,e){var t=null;A!==null&&A.memoizedState!==null&&A.memoizedState.cachePool!==null&&(t=A.memoizedState.cachePool.pool),A=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(A=e.memoizedState.cachePool.pool),A!==t&&(A!=null&&A.refCount++,t!=null&&Vr(t))}function Uc(A,e){A=null,e.alternate!==null&&(A=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==A&&(e.refCount++,A!=null&&Vr(A))}function nn(A,e,t,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gh(A,e,t,a),e=e.sibling}function Gh(A,e,t,a){var l=e.flags;switch(e.tag){case 0:case 11:case 15:nn(A,e,t,a),l&2048&&ri(9,e);break;case 1:nn(A,e,t,a);break;case 3:nn(A,e,t,a),l&2048&&(A=null,e.alternate!==null&&(A=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==A&&(e.refCount++,A!=null&&Vr(A)));break;case 12:if(l&2048){nn(A,e,t,a),A=e.stateNode;try{var c=e.memoizedProps,x=c.id,y=c.onPostCommit;typeof y=="function"&&y(x,e.alternate===null?"mount":"update",A.passiveEffectDuration,-0)}catch(j){Ne(e,e.return,j)}}else nn(A,e,t,a);break;case 13:nn(A,e,t,a);break;case 23:break;case 22:c=e.stateNode,x=e.alternate,e.memoizedState!==null?c._visibility&2?nn(A,e,t,a):oi(A,e):c._visibility&2?nn(A,e,t,a):(c._visibility|=2,er(A,e,t,a,(e.subtreeFlags&10256)!==0)),l&2048&&Qc(x,e);break;case 24:nn(A,e,t,a),l&2048&&Uc(e.alternate,e);break;default:nn(A,e,t,a)}}function er(A,e,t,a,l){for(l=l&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var c=A,x=e,y=t,j=a,Z=x.flags;switch(x.tag){case 0:case 11:case 15:er(c,x,y,j,l),ri(8,x);break;case 23:break;case 22:var gA=x.stateNode;x.memoizedState!==null?gA._visibility&2?er(c,x,y,j,l):oi(c,x):(gA._visibility|=2,er(c,x,y,j,l)),l&&Z&2048&&Qc(x.alternate,x);break;case 24:er(c,x,y,j,l),l&&Z&2048&&Uc(x.alternate,x);break;default:er(c,x,y,j,l)}e=e.sibling}}function oi(A,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=A,a=e,l=a.flags;switch(a.tag){case 22:oi(t,a),l&2048&&Qc(a.alternate,a);break;case 24:oi(t,a),l&2048&&Uc(a.alternate,a);break;default:oi(t,a)}e=e.sibling}}var si=8192;function tr(A){if(A.subtreeFlags&si)for(A=A.child;A!==null;)Vh(A),A=A.sibling}function Vh(A){switch(A.tag){case 26:tr(A),A.flags&si&&A.memoizedState!==null&&hB(Jt,A.memoizedState,A.memoizedProps);break;case 5:tr(A);break;case 3:case 4:var e=Jt;Jt=qo(A.stateNode.containerInfo),tr(A),Jt=e;break;case 22:A.memoizedState===null&&(e=A.alternate,e!==null&&e.memoizedState!==null?(e=si,si=16777216,tr(A),si=e):tr(A));break;default:tr(A)}}function Yh(A){var e=A.alternate;if(e!==null&&(A=e.child,A!==null)){e.child=null;do e=A.sibling,A.sibling=null,A=e;while(A!==null)}}function li(A){var e=A.deletions;if((A.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];at=a,Jh(a,A)}Yh(A)}if(A.subtreeFlags&10256)for(A=A.child;A!==null;)Xh(A),A=A.sibling}function Xh(A){switch(A.tag){case 0:case 11:case 15:li(A),A.flags&2048&&Rn(9,A,A.return);break;case 3:li(A);break;case 12:li(A);break;case 22:var e=A.stateNode;A.memoizedState!==null&&e._visibility&2&&(A.return===null||A.return.tag!==13)?(e._visibility&=-3,Lo(A)):li(A);break;default:li(A)}}function Lo(A){var e=A.deletions;if((A.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];at=a,Jh(a,A)}Yh(A)}for(A=A.child;A!==null;){switch(e=A,e.tag){case 0:case 11:case 15:Rn(8,e,e.return),Lo(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,Lo(e));break;default:Lo(e)}A=A.sibling}}function Jh(A,e){for(;at!==null;){var t=at;switch(t.tag){case 0:case 11:case 15:Rn(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Vr(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,at=a;else A:for(t=A;at!==null;){a=at;var l=a.sibling,c=a.return;if(Oh(a),a===t){at=null;break A}if(l!==null){l.return=c,at=l;break A}at=c}}}var jm={getCacheForType:function(A){var e=ft(At),t=e.data.get(A);return t===void 0&&(t=A(),e.data.set(A,t)),t}},Hm=typeof WeakMap=="function"?WeakMap:Map,Qe=0,De=null,de=null,me=0,Ue=0,St=null,Gn=!1,nr=!1,Fc=!1,Cn=0,_e=0,Vn=0,Ca=0,Ec=0,Rt=0,ar=0,ci=null,vt=null,Sc=!1,jc=0,Oo=1/0,Ko=null,Yn=null,st=0,Xn=null,rr=null,ir=0,Hc=0,Nc=null,Zh=null,di=0,kc=null;function jt(){if((Qe&2)!==0&&me!==0)return me&-me;if(_.T!==null){var A=Xa;return A!==0?A:Kc()}return f()}function qh(){Rt===0&&(Rt=(me&536870912)===0||ve?XA():536870912);var A=Kt.current;return A!==null&&(A.flags|=32),Rt}function Ht(A,e,t){(A===De&&(Ue===2||Ue===9)||A.cancelPendingCommit!==null)&&(or(A,0),Jn(A,me,Rt,!1)),be(A,t),((Qe&2)===0||A!==De)&&(A===De&&((Qe&2)===0&&(Ca|=t),_e===4&&Jn(A,me,Rt,!1)),an(A))}function Wh(A,e,t){if((Qe&6)!==0)throw Error(o(327));var a=!t&&(e&124)===0&&(e&A.expiredLanes)===0||KA(A,e),l=a?Mm(A,e):Tc(A,e,!0),c=a;do{if(l===0){nr&&!a&&Jn(A,e,0,!1);break}else{if(t=A.current.alternate,c&&!Nm(t)){l=Tc(A,e,!1),c=!1;continue}if(l===2){if(c=e,A.errorRecoveryDisabledLanes&c)var x=0;else x=A.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){e=x;A:{var y=A;l=ci;var j=y.current.memoizedState.isDehydrated;if(j&&(or(y,x).flags|=256),x=Tc(y,x,!1),x!==2){if(Fc&&!j){y.errorRecoveryDisabledLanes|=c,Ca|=c,l=4;break A}c=vt,vt=l,c!==null&&(vt===null?vt=c:vt.push.apply(vt,c))}l=x}if(c=!1,l!==2)continue}}if(l===1){or(A,0),Jn(A,e,0,!0);break}A:{switch(a=A,c=l,c){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:Jn(a,e,Rt,!Gn);break A;case 2:vt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(l=jc+300-ZA(),10<l)){if(Jn(a,e,Rt,!Gn),SA(a,0,!0)!==0)break A;a.timeoutHandle=Ug(Ph.bind(null,a,t,vt,Ko,Sc,e,Rt,Ca,ar,Gn,c,2,-0,0),l);break A}Ph(a,t,vt,Ko,Sc,e,Rt,Ca,ar,Gn,c,0,-0,0)}}break}while(!0);an(A)}function Ph(A,e,t,a,l,c,x,y,j,Z,gA,bA,$,AA){if(A.timeoutHandle=-1,bA=e.subtreeFlags,(bA&8192||(bA&16785408)===16785408)&&(mi={stylesheets:null,count:0,unsuspend:fB},Vh(e),bA=gB(),bA!==null)){A.cancelPendingCommit=bA(rg.bind(null,A,e,c,t,a,l,x,y,j,gA,1,$,AA)),Jn(A,c,x,!Z);return}rg(A,e,c,t,a,l,x,y,j)}function Nm(A){for(var e=A;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var l=t[a],c=l.getSnapshot;l=l.value;try{if(!Qt(c(),l))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===A)break;for(;e.sibling===null;){if(e.return===null||e.return===A)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jn(A,e,t,a){e&=~Ec,e&=~Ca,A.suspendedLanes|=e,A.pingedLanes&=~e,a&&(A.warmLanes|=e),a=A.expirationTimes;for(var l=e;0<l;){var c=31-T(l),x=1<<c;a[c]=-1,l&=~x}t!==0&&Me(A,t,e)}function Ro(){return(Qe&6)===0?(ui(0),!1):!0}function Mc(){if(de!==null){if(Ue===0)var A=de.return;else A=de,pn=ma=null,Wl(A),$a=null,ti=0,A=de;for(;A!==null;)Hh(A.alternate,A),A=A.return;de=null}}function or(A,e){var t=A.timeoutHandle;t!==-1&&(A.timeoutHandle=-1,qm(t)),t=A.cancelPendingCommit,t!==null&&(A.cancelPendingCommit=null,t()),Mc(),De=A,de=t=fn(A.current,null),me=e,Ue=0,St=null,Gn=!1,nr=KA(A,e),Fc=!1,ar=Rt=Ec=Ca=Vn=_e=0,vt=ci=null,Sc=!1,(e&8)!==0&&(e|=e&32);var a=A.entangledLanes;if(a!==0)for(A=A.entanglements,a&=e;0<a;){var l=31-T(a),c=1<<l;e|=A[l],a&=~c}return Cn=e,so(),t}function $h(A,e){ie=null,_.H=Eo,e===Xr||e===mo?(e=pf(),Ue=3):e===ff?(e=pf(),Ue=4):Ue=e===xh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,St=e,de===null&&(_e=1,ko(A,Tt(e,A.current)))}function Ag(){var A=_.H;return _.H=Eo,A===null?Eo:A}function eg(){var A=_.A;return _.A=jm,A}function Dc(){_e=4,Gn||(me&4194048)!==me&&Kt.current!==null||(nr=!0),(Vn&134217727)===0&&(Ca&134217727)===0||De===null||Jn(De,me,Rt,!1)}function Tc(A,e,t){var a=Qe;Qe|=2;var l=Ag(),c=eg();(De!==A||me!==e)&&(Ko=null,or(A,e)),e=!1;var x=_e;A:do try{if(Ue!==0&&de!==null){var y=de,j=St;switch(Ue){case 8:Mc(),x=6;break A;case 3:case 2:case 9:case 6:Kt.current===null&&(e=!0);var Z=Ue;if(Ue=0,St=null,sr(A,y,j,Z),t&&nr){x=0;break A}break;default:Z=Ue,Ue=0,St=null,sr(A,y,j,Z)}}km(),x=_e;break}catch(gA){$h(A,gA)}while(!0);return e&&A.shellSuspendCounter++,pn=ma=null,Qe=a,_.H=l,_.A=c,de===null&&(De=null,me=0,so()),x}function km(){for(;de!==null;)tg(de)}function Mm(A,e){var t=Qe;Qe|=2;var a=Ag(),l=eg();De!==A||me!==e?(Ko=null,Oo=ZA()+500,or(A,e)):nr=KA(A,e);A:do try{if(Ue!==0&&de!==null){e=de;var c=St;e:switch(Ue){case 1:Ue=0,St=null,sr(A,e,c,1);break;case 2:case 9:if(hf(c)){Ue=0,St=null,ng(e);break}e=function(){Ue!==2&&Ue!==9||De!==A||(Ue=7),an(A)},c.then(e,e);break A;case 3:Ue=7;break A;case 4:Ue=5;break A;case 7:hf(c)?(Ue=0,St=null,ng(e)):(Ue=0,St=null,sr(A,e,c,7));break;case 5:var x=null;switch(de.tag){case 26:x=de.memoizedState;case 5:case 27:var y=de;if(!x||Lg(x)){Ue=0,St=null;var j=y.sibling;if(j!==null)de=j;else{var Z=y.return;Z!==null?(de=Z,zo(Z)):de=null}break e}}Ue=0,St=null,sr(A,e,c,5);break;case 6:Ue=0,St=null,sr(A,e,c,6);break;case 8:Mc(),_e=6;break A;default:throw Error(o(462))}}Dm();break}catch(gA){$h(A,gA)}while(!0);return pn=ma=null,_.H=a,_.A=l,Qe=t,de!==null?0:(De=null,me=0,so(),_e)}function Dm(){for(;de!==null&&!YA();)tg(de)}function tg(A){var e=Sh(A.alternate,A,Cn);A.memoizedProps=A.pendingProps,e===null?zo(A):de=e}function ng(A){var e=A,t=e.alternate;switch(e.tag){case 15:case 0:e=vh(t,e,e.pendingProps,e.type,void 0,me);break;case 11:e=vh(t,e,e.pendingProps,e.type.render,e.ref,me);break;case 5:Wl(e);default:Hh(t,e),e=de=nf(e,Cn),e=Sh(t,e,Cn)}A.memoizedProps=A.pendingProps,e===null?zo(A):de=e}function sr(A,e,t,a){pn=ma=null,Wl(e),$a=null,ti=0;var l=e.return;try{if(Cm(A,l,e,t,me)){_e=1,ko(A,Tt(t,A.current)),de=null;return}}catch(c){if(l!==null)throw de=l,c;_e=1,ko(A,Tt(t,A.current)),de=null;return}e.flags&32768?(ve||a===1?A=!0:nr||(me&536870912)!==0?A=!1:(Gn=A=!0,(a===2||a===9||a===3||a===6)&&(a=Kt.current,a!==null&&a.tag===13&&(a.flags|=16384))),ag(e,A)):zo(e)}function zo(A){var e=A;do{if((e.flags&32768)!==0){ag(e,Gn);return}A=e.return;var t=Um(e.alternate,e,Cn);if(t!==null){de=t;return}if(e=e.sibling,e!==null){de=e;return}de=e=A}while(e!==null);_e===0&&(_e=5)}function ag(A,e){do{var t=Fm(A.alternate,A);if(t!==null){t.flags&=32767,de=t;return}if(t=A.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(A=A.sibling,A!==null)){de=A;return}de=A=t}while(A!==null);_e=6,de=null}function rg(A,e,t,a,l,c,x,y,j){A.cancelPendingCommit=null;do _o();while(st!==0);if((Qe&6)!==0)throw Error(o(327));if(e!==null){if(e===A.current)throw Error(o(177));if(c=e.lanes|e.childLanes,c|=Ul,ut(A,t,c,x,y,j),A===De&&(de=De=null,me=0),rr=e,Xn=A,ir=t,Hc=c,Nc=l,Zh=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(A.callbackNode=null,A.callbackPriority=0,Om(Fe,function(){return cg(),null})):(A.callbackNode=null,A.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=_.T,_.T=null,l=aA.p,aA.p=2,x=Qe,Qe|=4;try{Em(A,e,t)}finally{Qe=x,aA.p=l,_.T=a}}st=1,ig(),og(),sg()}}function ig(){if(st===1){st=0;var A=Xn,e=rr,t=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||t){t=_.T,_.T=null;var a=aA.p;aA.p=2;var l=Qe;Qe|=4;try{zh(e,A);var c=Jc,x=Xu(A.containerInfo),y=c.focusedElem,j=c.selectionRange;if(x!==y&&y&&y.ownerDocument&&Yu(y.ownerDocument.documentElement,y)){if(j!==null&&wl(y)){var Z=j.start,gA=j.end;if(gA===void 0&&(gA=Z),"selectionStart"in y)y.selectionStart=Z,y.selectionEnd=Math.min(gA,y.value.length);else{var bA=y.ownerDocument||document,$=bA&&bA.defaultView||window;if($.getSelection){var AA=$.getSelection(),ee=y.textContent.length,PA=Math.min(j.start,ee),je=j.end===void 0?PA:Math.min(j.end,ee);!AA.extend&&PA>je&&(x=je,je=PA,PA=x);var R=Vu(y,PA),O=Vu(y,je);if(R&&O&&(AA.rangeCount!==1||AA.anchorNode!==R.node||AA.anchorOffset!==R.offset||AA.focusNode!==O.node||AA.focusOffset!==O.offset)){var Y=bA.createRange();Y.setStart(R.node,R.offset),AA.removeAllRanges(),PA>je?(AA.addRange(Y),AA.extend(O.node,O.offset)):(Y.setEnd(O.node,O.offset),AA.addRange(Y))}}}}for(bA=[],AA=y;AA=AA.parentNode;)AA.nodeType===1&&bA.push({element:AA,left:AA.scrollLeft,top:AA.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<bA.length;y++){var mA=bA[y];mA.element.scrollLeft=mA.left,mA.element.scrollTop=mA.top}}es=!!Xc,Jc=Xc=null}finally{Qe=l,aA.p=a,_.T=t}}A.current=e,st=2}}function og(){if(st===2){st=0;var A=Xn,e=rr,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=_.T,_.T=null;var a=aA.p;aA.p=2;var l=Qe;Qe|=4;try{Lh(A,e.alternate,e)}finally{Qe=l,aA.p=a,_.T=t}}st=3}}function sg(){if(st===4||st===3){st=0,_A();var A=Xn,e=rr,t=ir,a=Zh;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?st=5:(st=0,rr=Xn=null,lg(A,A.pendingLanes));var l=A.pendingLanes;if(l===0&&(Yn=null),S(t),e=e.stateNode,fe&&typeof fe.onCommitFiberRoot=="function")try{fe.onCommitFiberRoot(xe,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=_.T,l=aA.p,aA.p=2,_.T=null;try{for(var c=A.onRecoverableError,x=0;x<a.length;x++){var y=a[x];c(y.value,{componentStack:y.stack})}}finally{_.T=e,aA.p=l}}(ir&3)!==0&&_o(),an(A),l=A.pendingLanes,(t&4194090)!==0&&(l&42)!==0?A===kc?di++:(di=0,kc=A):di=0,ui(0)}}function lg(A,e){(A.pooledCacheLanes&=e)===0&&(e=A.pooledCache,e!=null&&(A.pooledCache=null,Vr(e)))}function _o(A){return ig(),og(),sg(),cg()}function cg(){if(st!==5)return!1;var A=Xn,e=Hc;Hc=0;var t=S(ir),a=_.T,l=aA.p;try{aA.p=32>t?32:t,_.T=null,t=Nc,Nc=null;var c=Xn,x=ir;if(st=0,rr=Xn=null,ir=0,(Qe&6)!==0)throw Error(o(331));var y=Qe;if(Qe|=4,Xh(c.current),Gh(c,c.current,x,t),Qe=y,ui(0,!1),fe&&typeof fe.onPostCommitFiberRoot=="function")try{fe.onPostCommitFiberRoot(xe,c)}catch{}return!0}finally{aA.p=l,_.T=a,lg(A,e)}}function dg(A,e,t){e=Tt(t,e),e=dc(A.stateNode,e,2),A=In(A,e,2),A!==null&&(be(A,2),an(A))}function Ne(A,e,t){if(A.tag===3)dg(A,A,t);else for(;e!==null;){if(e.tag===3){dg(e,A,t);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Yn===null||!Yn.has(a))){A=Tt(t,A),t=gh(2),a=In(e,t,2),a!==null&&(ph(t,a,e,A),be(a,2),an(a));break}}e=e.return}}function Ic(A,e,t){var a=A.pingCache;if(a===null){a=A.pingCache=new Hm;var l=new Set;a.set(e,l)}else l=a.get(e),l===void 0&&(l=new Set,a.set(e,l));l.has(t)||(Fc=!0,l.add(t),A=Tm.bind(null,A,e,t),e.then(A,A))}function Tm(A,e,t){var a=A.pingCache;a!==null&&a.delete(e),A.pingedLanes|=A.suspendedLanes&t,A.warmLanes&=~t,De===A&&(me&t)===t&&(_e===4||_e===3&&(me&62914560)===me&&300>ZA()-jc?(Qe&2)===0&&or(A,0):Ec|=t,ar===me&&(ar=0)),an(A)}function ug(A,e){e===0&&(e=le()),A=_a(A,e),A!==null&&(be(A,e),an(A))}function Im(A){var e=A.memoizedState,t=0;e!==null&&(t=e.retryLane),ug(A,t)}function Lm(A,e){var t=0;switch(A.tag){case 13:var a=A.stateNode,l=A.memoizedState;l!==null&&(t=l.retryLane);break;case 19:a=A.stateNode;break;case 22:a=A.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(e),ug(A,t)}function Om(A,e){return K(A,e)}var Go=null,lr=null,Lc=!1,Vo=!1,Oc=!1,Qa=0;function an(A){A!==lr&&A.next===null&&(lr===null?Go=lr=A:lr=lr.next=A),Vo=!0,Lc||(Lc=!0,Rm())}function ui(A,e){if(!Oc&&Vo){Oc=!0;do for(var t=!1,a=Go;a!==null;){if(A!==0){var l=a.pendingLanes;if(l===0)var c=0;else{var x=a.suspendedLanes,y=a.pingedLanes;c=(1<<31-T(42|A)+1)-1,c&=l&~(x&~y),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(t=!0,pg(a,c))}else c=me,c=SA(a,a===De?c:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(c&3)===0||KA(a,c)||(t=!0,pg(a,c));a=a.next}while(t);Oc=!1}}function Km(){fg()}function fg(){Vo=Lc=!1;var A=0;Qa!==0&&(Zm()&&(A=Qa),Qa=0);for(var e=ZA(),t=null,a=Go;a!==null;){var l=a.next,c=hg(a,e);c===0?(a.next=null,t===null?Go=l:t.next=l,l===null&&(lr=t)):(t=a,(A!==0||(c&3)!==0)&&(Vo=!0)),a=l}ui(A)}function hg(A,e){for(var t=A.suspendedLanes,a=A.pingedLanes,l=A.expirationTimes,c=A.pendingLanes&-62914561;0<c;){var x=31-T(c),y=1<<x,j=l[x];j===-1?((y&t)===0||(y&a)!==0)&&(l[x]=ae(y,e)):j<=e&&(A.expiredLanes|=y),c&=~y}if(e=De,t=me,t=SA(A,A===e?t:0,A.cancelPendingCommit!==null||A.timeoutHandle!==-1),a=A.callbackNode,t===0||A===e&&(Ue===2||Ue===9)||A.cancelPendingCommit!==null)return a!==null&&a!==null&&BA(a),A.callbackNode=null,A.callbackPriority=0;if((t&3)===0||KA(A,t)){if(e=t&-t,e===A.callbackPriority)return e;switch(a!==null&&BA(a),S(t)){case 2:case 8:t=Oe;break;case 32:t=Fe;break;case 268435456:t=ke;break;default:t=Fe}return a=gg.bind(null,A),t=K(t,a),A.callbackPriority=e,A.callbackNode=t,e}return a!==null&&a!==null&&BA(a),A.callbackPriority=2,A.callbackNode=null,2}function gg(A,e){if(st!==0&&st!==5)return A.callbackNode=null,A.callbackPriority=0,null;var t=A.callbackNode;if(_o()&&A.callbackNode!==t)return null;var a=me;return a=SA(A,A===De?a:0,A.cancelPendingCommit!==null||A.timeoutHandle!==-1),a===0?null:(Wh(A,a,e),hg(A,ZA()),A.callbackNode!=null&&A.callbackNode===t?gg.bind(null,A):null)}function pg(A,e){if(_o())return null;Wh(A,e,!0)}function Rm(){Wm(function(){(Qe&6)!==0?K(oe,Km):fg()})}function Kc(){return Qa===0&&(Qa=XA()),Qa}function xg(A){return A==null||typeof A=="symbol"||typeof A=="boolean"?null:typeof A=="function"?A:eo(""+A)}function mg(A,e){var t=e.ownerDocument.createElement("input");return t.name=e.name,t.value=e.value,A.id&&t.setAttribute("form",A.id),e.parentNode.insertBefore(t,e),A=new FormData(A),t.parentNode.removeChild(t),A}function zm(A,e,t,a,l){if(e==="submit"&&t&&t.stateNode===l){var c=xg((l[E]||null).action),x=a.submitter;x&&(e=(e=x[E]||null)?xg(e.formAction):x.getAttribute("formAction"),e!==null&&(c=e,x=null));var y=new ro("action","action",null,a,l);A.push({event:y,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Qa!==0){var j=x?mg(l,x):new FormData(l);ic(t,{pending:!0,data:j,method:l.method,action:c},null,j)}}else typeof c=="function"&&(y.preventDefault(),j=x?mg(l,x):new FormData(l),ic(t,{pending:!0,data:j,method:l.method,action:c},c,j))},currentTarget:l}]})}}for(var Rc=0;Rc<Ql.length;Rc++){var zc=Ql[Rc],_m=zc.toLowerCase(),Gm=zc[0].toUpperCase()+zc.slice(1);Xt(_m,"on"+Gm)}Xt(qu,"onAnimationEnd"),Xt(Wu,"onAnimationIteration"),Xt(Pu,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(om,"onTransitionRun"),Xt(sm,"onTransitionStart"),Xt(lm,"onTransitionCancel"),Xt($u,"onTransitionEnd"),kt("onMouseEnter",["mouseout","mouseover"]),kt("onMouseLeave",["mouseout","mouseover"]),kt("onPointerEnter",["pointerout","pointerover"]),kt("onPointerLeave",["pointerout","pointerover"]),$t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$t("onBeforeInput",["compositionend","keypress","textInput","paste"]),$t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fi));function Bg(A,e){e=(e&4)!==0;for(var t=0;t<A.length;t++){var a=A[t],l=a.event;a=a.listeners;A:{var c=void 0;if(e)for(var x=a.length-1;0<=x;x--){var y=a[x],j=y.instance,Z=y.currentTarget;if(y=y.listener,j!==c&&l.isPropagationStopped())break A;c=y,l.currentTarget=Z;try{c(l)}catch(gA){No(gA)}l.currentTarget=null,c=j}else for(x=0;x<a.length;x++){if(y=a[x],j=y.instance,Z=y.currentTarget,y=y.listener,j!==c&&l.isPropagationStopped())break A;c=y,l.currentTarget=Z;try{c(l)}catch(gA){No(gA)}l.currentTarget=null,c=j}}}}function ue(A,e){var t=e[L];t===void 0&&(t=e[L]=new Set);var a=A+"__bubble";t.has(a)||(bg(e,A,2,!1),t.add(a))}function _c(A,e,t){var a=0;e&&(a|=4),bg(t,A,a,e)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function Gc(A){if(!A[Yo]){A[Yo]=!0,Pt.forEach(function(t){t!=="selectionchange"&&(Vm.has(t)||_c(t,!1,A),_c(t,!0,A))});var e=A.nodeType===9?A:A.ownerDocument;e===null||e[Yo]||(e[Yo]=!0,_c("selectionchange",!1,e))}}function bg(A,e,t,a){switch(Gg(e)){case 2:var l=mB;break;case 8:l=BB;break;default:l=ad}t=l.bind(null,e,t,A),l=void 0,!ul||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),a?l!==void 0?A.addEventListener(e,t,{capture:!0,passive:l}):A.addEventListener(e,t,!0):l!==void 0?A.addEventListener(e,t,{passive:l}):A.addEventListener(e,t,!1)}function Vc(A,e,t,a,l){var c=a;if((e&1)===0&&(e&2)===0&&a!==null)A:for(;;){if(a===null)return;var x=a.tag;if(x===3||x===4){var y=a.stateNode.containerInfo;if(y===l)break;if(x===4)for(x=a.return;x!==null;){var j=x.tag;if((j===3||j===4)&&x.stateNode.containerInfo===l)return;x=x.return}for(;y!==null;){if(x=zA(y),x===null)return;if(j=x.tag,j===5||j===6||j===26||j===27){a=c=x;continue A}y=y.parentNode}}a=a.return}Uu(function(){var Z=c,gA=cl(t),bA=[];A:{var $=Af.get(A);if($!==void 0){var AA=ro,ee=A;switch(A){case"keypress":if(no(t)===0)break A;case"keydown":case"keyup":AA=Ox;break;case"focusin":ee="focus",AA=pl;break;case"focusout":ee="blur",AA=pl;break;case"beforeblur":case"afterblur":AA=pl;break;case"click":if(t.button===2)break A;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":AA=Su;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":AA=Fx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":AA=zx;break;case qu:case Wu:case Pu:AA=jx;break;case $u:AA=Gx;break;case"scroll":case"scrollend":AA=Qx;break;case"wheel":AA=Yx;break;case"copy":case"cut":case"paste":AA=Nx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":AA=Hu;break;case"toggle":case"beforetoggle":AA=Jx}var PA=(e&4)!==0,je=!PA&&(A==="scroll"||A==="scrollend"),R=PA?$!==null?$+"Capture":null:$;PA=[];for(var O=Z,Y;O!==null;){var mA=O;if(Y=mA.stateNode,mA=mA.tag,mA!==5&&mA!==26&&mA!==27||Y===null||R===null||(mA=Nr(O,R),mA!=null&&PA.push(hi(O,mA,Y))),je)break;O=O.return}0<PA.length&&($=new AA($,ee,null,t,gA),bA.push({event:$,listeners:PA}))}}if((e&7)===0){A:{if($=A==="mouseover"||A==="pointerover",AA=A==="mouseout"||A==="pointerout",$&&t!==ll&&(ee=t.relatedTarget||t.fromElement)&&(zA(ee)||ee[I]))break A;if((AA||$)&&($=gA.window===gA?gA:($=gA.ownerDocument)?$.defaultView||$.parentWindow:window,AA?(ee=t.relatedTarget||t.toElement,AA=Z,ee=ee?zA(ee):null,ee!==null&&(je=u(ee),PA=ee.tag,ee!==je||PA!==5&&PA!==27&&PA!==6)&&(ee=null)):(AA=null,ee=Z),AA!==ee)){if(PA=Su,mA="onMouseLeave",R="onMouseEnter",O="mouse",(A==="pointerout"||A==="pointerover")&&(PA=Hu,mA="onPointerLeave",R="onPointerEnter",O="pointer"),je=AA==null?$:he(AA),Y=ee==null?$:he(ee),$=new PA(mA,O+"leave",AA,t,gA),$.target=je,$.relatedTarget=Y,mA=null,zA(gA)===Z&&(PA=new PA(R,O+"enter",ee,t,gA),PA.target=Y,PA.relatedTarget=je,mA=PA),je=mA,AA&&ee)e:{for(PA=AA,R=ee,O=0,Y=PA;Y;Y=cr(Y))O++;for(Y=0,mA=R;mA;mA=cr(mA))Y++;for(;0<O-Y;)PA=cr(PA),O--;for(;0<Y-O;)R=cr(R),Y--;for(;O--;){if(PA===R||R!==null&&PA===R.alternate)break e;PA=cr(PA),R=cr(R)}PA=null}else PA=null;AA!==null&&wg(bA,$,AA,PA,!1),ee!==null&&je!==null&&wg(bA,je,ee,PA,!0)}}A:{if($=Z?he(Z):window,AA=$.nodeName&&$.nodeName.toLowerCase(),AA==="select"||AA==="input"&&$.type==="file")var JA=Ou;else if(Iu($))if(Ku)JA=am;else{JA=tm;var se=em}else AA=$.nodeName,!AA||AA.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?Z&&sl(Z.elementType)&&(JA=Ou):JA=nm;if(JA&&(JA=JA(A,Z))){Lu(bA,JA,t,gA);break A}se&&se(A,$,Z),A==="focusout"&&Z&&$.type==="number"&&Z.memoizedProps.value!=null&&ol($,"number",$.value)}switch(se=Z?he(Z):window,A){case"focusin":(Iu(se)||se.contentEditable==="true")&&(Ka=se,yl=Z,Kr=null);break;case"focusout":Kr=yl=Ka=null;break;case"mousedown":vl=!0;break;case"contextmenu":case"mouseup":case"dragend":vl=!1,Ju(bA,t,gA);break;case"selectionchange":if(im)break;case"keydown":case"keyup":Ju(bA,t,gA)}var qA;if(ml)A:{switch(A){case"compositionstart":var $A="onCompositionStart";break A;case"compositionend":$A="onCompositionEnd";break A;case"compositionupdate":$A="onCompositionUpdate";break A}$A=void 0}else Oa?Du(A,t)&&($A="onCompositionEnd"):A==="keydown"&&t.keyCode===229&&($A="onCompositionStart");$A&&(Nu&&t.locale!=="ko"&&(Oa||$A!=="onCompositionStart"?$A==="onCompositionEnd"&&Oa&&(qA=Fu()):(kn=gA,fl="value"in kn?kn.value:kn.textContent,Oa=!0)),se=Xo(Z,$A),0<se.length&&($A=new ju($A,A,null,t,gA),bA.push({event:$A,listeners:se}),qA?$A.data=qA:(qA=Tu(t),qA!==null&&($A.data=qA)))),(qA=qx?Wx(A,t):Px(A,t))&&($A=Xo(Z,"onBeforeInput"),0<$A.length&&(se=new ju("onBeforeInput","beforeinput",null,t,gA),bA.push({event:se,listeners:$A}),se.data=qA)),zm(bA,A,Z,t,gA)}Bg(bA,e)})}function hi(A,e,t){return{instance:A,listener:e,currentTarget:t}}function Xo(A,e){for(var t=e+"Capture",a=[];A!==null;){var l=A,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=Nr(A,t),l!=null&&a.unshift(hi(A,l,c)),l=Nr(A,e),l!=null&&a.push(hi(A,l,c))),A.tag===3)return a;A=A.return}return[]}function cr(A){if(A===null)return null;do A=A.return;while(A&&A.tag!==5&&A.tag!==27);return A||null}function wg(A,e,t,a,l){for(var c=e._reactName,x=[];t!==null&&t!==a;){var y=t,j=y.alternate,Z=y.stateNode;if(y=y.tag,j!==null&&j===a)break;y!==5&&y!==26&&y!==27||Z===null||(j=Z,l?(Z=Nr(t,c),Z!=null&&x.unshift(hi(t,Z,j))):l||(Z=Nr(t,c),Z!=null&&x.push(hi(t,Z,j)))),t=t.return}x.length!==0&&A.push({event:e,listeners:x})}var Ym=/\r\n?/g,Xm=/\u0000|\uFFFD/g;function yg(A){return(typeof A=="string"?A:""+A).replace(Ym,`
`).replace(Xm,"")}function vg(A,e){return e=yg(e),yg(A)===e}function Jo(){}function Se(A,e,t,a,l,c){switch(t){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Ta(A,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Ta(A,""+a);break;case"className":Pi(A,"class",a);break;case"tabIndex":Pi(A,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Pi(A,t,a);break;case"style":Cu(A,a,c);break;case"data":if(e!=="object"){Pi(A,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||t!=="href")){A.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){A.removeAttribute(t);break}a=eo(""+a),A.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){A.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(t==="formAction"?(e!=="input"&&Se(A,e,"name",l.name,l,null),Se(A,e,"formEncType",l.formEncType,l,null),Se(A,e,"formMethod",l.formMethod,l,null),Se(A,e,"formTarget",l.formTarget,l,null)):(Se(A,e,"encType",l.encType,l,null),Se(A,e,"method",l.method,l,null),Se(A,e,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){A.removeAttribute(t);break}a=eo(""+a),A.setAttribute(t,a);break;case"onClick":a!=null&&(A.onclick=Jo);break;case"onScroll":a!=null&&ue("scroll",A);break;case"onScrollEnd":a!=null&&ue("scrollend",A);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(o(60));A.innerHTML=t}}break;case"multiple":A.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":A.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){A.removeAttribute("xlink:href");break}t=eo(""+a),A.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?A.setAttribute(t,""+a):A.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?A.setAttribute(t,""):A.removeAttribute(t);break;case"capture":case"download":a===!0?A.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?A.setAttribute(t,a):A.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?A.setAttribute(t,a):A.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?A.removeAttribute(t):A.setAttribute(t,a);break;case"popover":ue("beforetoggle",A),ue("toggle",A),Wi(A,"popover",a);break;case"xlinkActuate":dn(A,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":dn(A,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":dn(A,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":dn(A,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":dn(A,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":dn(A,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":dn(A,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":dn(A,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":dn(A,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Wi(A,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=vx.get(t)||t,Wi(A,t,a))}}function Yc(A,e,t,a,l,c){switch(t){case"style":Cu(A,a,c);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(o(60));A.innerHTML=t}}break;case"children":typeof a=="string"?Ta(A,a):(typeof a=="number"||typeof a=="bigint")&&Ta(A,""+a);break;case"onScroll":a!=null&&ue("scroll",A);break;case"onScrollEnd":a!=null&&ue("scrollend",A);break;case"onClick":a!=null&&(A.onclick=Jo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xt.hasOwnProperty(t))A:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),e=t.slice(2,l?t.length-7:void 0),c=A[E]||null,c=c!=null?c[t]:null,typeof c=="function"&&A.removeEventListener(e,c,l),typeof a=="function")){typeof c!="function"&&c!==null&&(t in A?A[t]=null:A.hasAttribute(t)&&A.removeAttribute(t)),A.addEventListener(e,a,l);break A}t in A?A[t]=a:a===!0?A.setAttribute(t,""):Wi(A,t,a)}}}function lt(A,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ue("error",A),ue("load",A);var a=!1,l=!1,c;for(c in t)if(t.hasOwnProperty(c)){var x=t[c];if(x!=null)switch(c){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Se(A,e,c,x,t,null)}}l&&Se(A,e,"srcSet",t.srcSet,t,null),a&&Se(A,e,"src",t.src,t,null);return;case"input":ue("invalid",A);var y=c=x=l=null,j=null,Z=null;for(a in t)if(t.hasOwnProperty(a)){var gA=t[a];if(gA!=null)switch(a){case"name":l=gA;break;case"type":x=gA;break;case"checked":j=gA;break;case"defaultChecked":Z=gA;break;case"value":c=gA;break;case"defaultValue":y=gA;break;case"children":case"dangerouslySetInnerHTML":if(gA!=null)throw Error(o(137,e));break;default:Se(A,e,a,gA,t,null)}}bu(A,c,y,j,Z,x,l,!1),$i(A);return;case"select":ue("invalid",A),a=x=c=null;for(l in t)if(t.hasOwnProperty(l)&&(y=t[l],y!=null))switch(l){case"value":c=y;break;case"defaultValue":x=y;break;case"multiple":a=y;default:Se(A,e,l,y,t,null)}e=c,t=x,A.multiple=!!a,e!=null?Da(A,!!a,e,!1):t!=null&&Da(A,!!a,t,!0);return;case"textarea":ue("invalid",A),c=l=a=null;for(x in t)if(t.hasOwnProperty(x)&&(y=t[x],y!=null))switch(x){case"value":a=y;break;case"defaultValue":l=y;break;case"children":c=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(o(91));break;default:Se(A,e,x,y,t,null)}yu(A,a,l,c),$i(A);return;case"option":for(j in t)if(t.hasOwnProperty(j)&&(a=t[j],a!=null))switch(j){case"selected":A.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Se(A,e,j,a,t,null)}return;case"dialog":ue("beforetoggle",A),ue("toggle",A),ue("cancel",A),ue("close",A);break;case"iframe":case"object":ue("load",A);break;case"video":case"audio":for(a=0;a<fi.length;a++)ue(fi[a],A);break;case"image":ue("error",A),ue("load",A);break;case"details":ue("toggle",A);break;case"embed":case"source":case"link":ue("error",A),ue("load",A);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in t)if(t.hasOwnProperty(Z)&&(a=t[Z],a!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Se(A,e,Z,a,t,null)}return;default:if(sl(e)){for(gA in t)t.hasOwnProperty(gA)&&(a=t[gA],a!==void 0&&Yc(A,e,gA,a,t,void 0));return}}for(y in t)t.hasOwnProperty(y)&&(a=t[y],a!=null&&Se(A,e,y,a,t,null))}function Jm(A,e,t,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,x=null,y=null,j=null,Z=null,gA=null;for(AA in t){var bA=t[AA];if(t.hasOwnProperty(AA)&&bA!=null)switch(AA){case"checked":break;case"value":break;case"defaultValue":j=bA;default:a.hasOwnProperty(AA)||Se(A,e,AA,null,a,bA)}}for(var $ in a){var AA=a[$];if(bA=t[$],a.hasOwnProperty($)&&(AA!=null||bA!=null))switch($){case"type":c=AA;break;case"name":l=AA;break;case"checked":Z=AA;break;case"defaultChecked":gA=AA;break;case"value":x=AA;break;case"defaultValue":y=AA;break;case"children":case"dangerouslySetInnerHTML":if(AA!=null)throw Error(o(137,e));break;default:AA!==bA&&Se(A,e,$,AA,a,bA)}}il(A,x,y,j,Z,gA,c,l);return;case"select":AA=x=y=$=null;for(c in t)if(j=t[c],t.hasOwnProperty(c)&&j!=null)switch(c){case"value":break;case"multiple":AA=j;default:a.hasOwnProperty(c)||Se(A,e,c,null,a,j)}for(l in a)if(c=a[l],j=t[l],a.hasOwnProperty(l)&&(c!=null||j!=null))switch(l){case"value":$=c;break;case"defaultValue":y=c;break;case"multiple":x=c;default:c!==j&&Se(A,e,l,c,a,j)}e=y,t=x,a=AA,$!=null?Da(A,!!t,$,!1):!!a!=!!t&&(e!=null?Da(A,!!t,e,!0):Da(A,!!t,t?[]:"",!1));return;case"textarea":AA=$=null;for(y in t)if(l=t[y],t.hasOwnProperty(y)&&l!=null&&!a.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Se(A,e,y,null,a,l)}for(x in a)if(l=a[x],c=t[x],a.hasOwnProperty(x)&&(l!=null||c!=null))switch(x){case"value":$=l;break;case"defaultValue":AA=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(o(91));break;default:l!==c&&Se(A,e,x,l,a,c)}wu(A,$,AA);return;case"option":for(var ee in t)if($=t[ee],t.hasOwnProperty(ee)&&$!=null&&!a.hasOwnProperty(ee))switch(ee){case"selected":A.selected=!1;break;default:Se(A,e,ee,null,a,$)}for(j in a)if($=a[j],AA=t[j],a.hasOwnProperty(j)&&$!==AA&&($!=null||AA!=null))switch(j){case"selected":A.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:Se(A,e,j,$,a,AA)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var PA in t)$=t[PA],t.hasOwnProperty(PA)&&$!=null&&!a.hasOwnProperty(PA)&&Se(A,e,PA,null,a,$);for(Z in a)if($=a[Z],AA=t[Z],a.hasOwnProperty(Z)&&$!==AA&&($!=null||AA!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(o(137,e));break;default:Se(A,e,Z,$,a,AA)}return;default:if(sl(e)){for(var je in t)$=t[je],t.hasOwnProperty(je)&&$!==void 0&&!a.hasOwnProperty(je)&&Yc(A,e,je,void 0,a,$);for(gA in a)$=a[gA],AA=t[gA],!a.hasOwnProperty(gA)||$===AA||$===void 0&&AA===void 0||Yc(A,e,gA,$,a,AA);return}}for(var R in t)$=t[R],t.hasOwnProperty(R)&&$!=null&&!a.hasOwnProperty(R)&&Se(A,e,R,null,a,$);for(bA in a)$=a[bA],AA=t[bA],!a.hasOwnProperty(bA)||$===AA||$==null&&AA==null||Se(A,e,bA,$,a,AA)}var Xc=null,Jc=null;function Zo(A){return A.nodeType===9?A:A.ownerDocument}function Cg(A){switch(A){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qg(A,e){if(A===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return A===1&&e==="foreignObject"?0:A}function Zc(A,e){return A==="textarea"||A==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qc=null;function Zm(){var A=window.event;return A&&A.type==="popstate"?A===qc?!1:(qc=A,!0):(qc=null,!1)}var Ug=typeof setTimeout=="function"?setTimeout:void 0,qm=typeof clearTimeout=="function"?clearTimeout:void 0,Fg=typeof Promise=="function"?Promise:void 0,Wm=typeof queueMicrotask=="function"?queueMicrotask:typeof Fg<"u"?function(A){return Fg.resolve(null).then(A).catch(Pm)}:Ug;function Pm(A){setTimeout(function(){throw A})}function Zn(A){return A==="head"}function Eg(A,e){var t=e,a=0,l=0;do{var c=t.nextSibling;if(A.removeChild(t),c&&c.nodeType===8)if(t=c.data,t==="/$"){if(0<a&&8>a){t=a;var x=A.ownerDocument;if(t&1&&gi(x.documentElement),t&2&&gi(x.body),t&4)for(t=x.head,gi(t),x=t.firstChild;x;){var y=x.nextSibling,j=x.nodeName;x[pA]||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&x.rel.toLowerCase()==="stylesheet"||t.removeChild(x),x=y}}if(l===0){A.removeChild(c),vi(e);return}l--}else t==="$"||t==="$?"||t==="$!"?l++:a=t.charCodeAt(0)-48;else a=0;t=c}while(t);vi(e)}function Wc(A){var e=A.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Wc(t),DA(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}A.removeChild(t)}}function $m(A,e,t,a){for(;A.nodeType===1;){var l=t;if(A.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(A.nodeName!=="INPUT"||A.type!=="hidden"))break}else if(a){if(!A[pA])switch(e){case"meta":if(!A.hasAttribute("itemprop"))break;return A;case"link":if(c=A.getAttribute("rel"),c==="stylesheet"&&A.hasAttribute("data-precedence"))break;if(c!==l.rel||A.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||A.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||A.getAttribute("title")!==(l.title==null?null:l.title))break;return A;case"style":if(A.hasAttribute("data-precedence"))break;return A;case"script":if(c=A.getAttribute("src"),(c!==(l.src==null?null:l.src)||A.getAttribute("type")!==(l.type==null?null:l.type)||A.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&A.hasAttribute("async")&&!A.hasAttribute("itemprop"))break;return A;default:return A}}else if(e==="input"&&A.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&A.getAttribute("name")===c)return A}else return A;if(A=Zt(A.nextSibling),A===null)break}return null}function AB(A,e,t){if(e==="")return null;for(;A.nodeType!==3;)if((A.nodeType!==1||A.nodeName!=="INPUT"||A.type!=="hidden")&&!t||(A=Zt(A.nextSibling),A===null))return null;return A}function Pc(A){return A.data==="$!"||A.data==="$?"&&A.ownerDocument.readyState==="complete"}function eB(A,e){var t=A.ownerDocument;if(A.data!=="$?"||t.readyState==="complete")e();else{var a=function(){e(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),A._reactRetry=a}}function Zt(A){for(;A!=null;A=A.nextSibling){var e=A.nodeType;if(e===1||e===3)break;if(e===8){if(e=A.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return A}var $c=null;function Sg(A){A=A.previousSibling;for(var e=0;A;){if(A.nodeType===8){var t=A.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return A;e--}else t==="/$"&&e++}A=A.previousSibling}return null}function jg(A,e,t){switch(e=Zo(t),A){case"html":if(A=e.documentElement,!A)throw Error(o(452));return A;case"head":if(A=e.head,!A)throw Error(o(453));return A;case"body":if(A=e.body,!A)throw Error(o(454));return A;default:throw Error(o(451))}}function gi(A){for(var e=A.attributes;e.length;)A.removeAttributeNode(e[0]);DA(A)}var zt=new Map,Hg=new Set;function qo(A){return typeof A.getRootNode=="function"?A.getRootNode():A.nodeType===9?A:A.ownerDocument}var Qn=aA.d;aA.d={f:tB,r:nB,D:aB,C:rB,L:iB,m:oB,X:lB,S:sB,M:cB};function tB(){var A=Qn.f(),e=Ro();return A||e}function nB(A){var e=Ae(A);e!==null&&e.tag===5&&e.type==="form"?Wf(e):Qn.r(A)}var dr=typeof document>"u"?null:document;function Ng(A,e,t){var a=dr;if(a&&typeof e=="string"&&e){var l=Dt(e);l='link[rel="'+A+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),Hg.has(l)||(Hg.add(l),A={rel:A,crossOrigin:t,href:e},a.querySelector(l)===null&&(e=a.createElement("link"),lt(e,"link",A),Be(e),a.head.appendChild(e)))}}function aB(A){Qn.D(A),Ng("dns-prefetch",A,null)}function rB(A,e){Qn.C(A,e),Ng("preconnect",A,e)}function iB(A,e,t){Qn.L(A,e,t);var a=dr;if(a&&A&&e){var l='link[rel="preload"][as="'+Dt(e)+'"]';e==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+Dt(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+Dt(t.imageSizes)+'"]')):l+='[href="'+Dt(A)+'"]';var c=l;switch(e){case"style":c=ur(A);break;case"script":c=fr(A)}zt.has(c)||(A=Q({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:A,as:e},t),zt.set(c,A),a.querySelector(l)!==null||e==="style"&&a.querySelector(pi(c))||e==="script"&&a.querySelector(xi(c))||(e=a.createElement("link"),lt(e,"link",A),Be(e),a.head.appendChild(e)))}}function oB(A,e){Qn.m(A,e);var t=dr;if(t&&A){var a=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+Dt(a)+'"][href="'+Dt(A)+'"]',c=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=fr(A)}if(!zt.has(c)&&(A=Q({rel:"modulepreload",href:A},e),zt.set(c,A),t.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(xi(c)))return}a=t.createElement("link"),lt(a,"link",A),Be(a),t.head.appendChild(a)}}}function sB(A,e,t){Qn.S(A,e,t);var a=dr;if(a&&A){var l=ce(a).hoistableStyles,c=ur(A);e=e||"default";var x=l.get(c);if(!x){var y={loading:0,preload:null};if(x=a.querySelector(pi(c)))y.loading=5;else{A=Q({rel:"stylesheet",href:A,"data-precedence":e},t),(t=zt.get(c))&&Ad(A,t);var j=x=a.createElement("link");Be(j),lt(j,"link",A),j._p=new Promise(function(Z,gA){j.onload=Z,j.onerror=gA}),j.addEventListener("load",function(){y.loading|=1}),j.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Wo(x,e,a)}x={type:"stylesheet",instance:x,count:1,state:y},l.set(c,x)}}}function lB(A,e){Qn.X(A,e);var t=dr;if(t&&A){var a=ce(t).hoistableScripts,l=fr(A),c=a.get(l);c||(c=t.querySelector(xi(l)),c||(A=Q({src:A,async:!0},e),(e=zt.get(l))&&ed(A,e),c=t.createElement("script"),Be(c),lt(c,"link",A),t.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(l,c))}}function cB(A,e){Qn.M(A,e);var t=dr;if(t&&A){var a=ce(t).hoistableScripts,l=fr(A),c=a.get(l);c||(c=t.querySelector(xi(l)),c||(A=Q({src:A,async:!0,type:"module"},e),(e=zt.get(l))&&ed(A,e),c=t.createElement("script"),Be(c),lt(c,"link",A),t.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(l,c))}}function kg(A,e,t,a){var l=(l=M.current)?qo(l):null;if(!l)throw Error(o(446));switch(A){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(e=ur(t.href),t=ce(l).hoistableStyles,a=t.get(e),a||(a={type:"style",instance:null,count:0,state:null},t.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){A=ur(t.href);var c=ce(l).hoistableStyles,x=c.get(A);if(x||(l=l.ownerDocument||l,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(A,x),(c=l.querySelector(pi(A)))&&!c._p&&(x.instance=c,x.state.loading=5),zt.has(A)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},zt.set(A,t),c||dB(l,A,t,x.state))),e&&a===null)throw Error(o(528,""));return x}if(e&&a!==null)throw Error(o(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=fr(t),t=ce(l).hoistableScripts,a=t.get(e),a||(a={type:"script",instance:null,count:0,state:null},t.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,A))}}function ur(A){return'href="'+Dt(A)+'"'}function pi(A){return'link[rel="stylesheet"]['+A+"]"}function Mg(A){return Q({},A,{"data-precedence":A.precedence,precedence:null})}function dB(A,e,t,a){A.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=A.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),lt(e,"link",t),Be(e),A.head.appendChild(e))}function fr(A){return'[src="'+Dt(A)+'"]'}function xi(A){return"script[async]"+A}function Dg(A,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var a=A.querySelector('style[data-href~="'+Dt(t.href)+'"]');if(a)return e.instance=a,Be(a),a;var l=Q({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(A.ownerDocument||A).createElement("style"),Be(a),lt(a,"style",l),Wo(a,t.precedence,A),e.instance=a;case"stylesheet":l=ur(t.href);var c=A.querySelector(pi(l));if(c)return e.state.loading|=4,e.instance=c,Be(c),c;a=Mg(t),(l=zt.get(l))&&Ad(a,l),c=(A.ownerDocument||A).createElement("link"),Be(c);var x=c;return x._p=new Promise(function(y,j){x.onload=y,x.onerror=j}),lt(c,"link",a),e.state.loading|=4,Wo(c,t.precedence,A),e.instance=c;case"script":return c=fr(t.src),(l=A.querySelector(xi(c)))?(e.instance=l,Be(l),l):(a=t,(l=zt.get(c))&&(a=Q({},t),ed(a,l)),A=A.ownerDocument||A,l=A.createElement("script"),Be(l),lt(l,"link",a),A.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Wo(a,t.precedence,A));return e.instance}function Wo(A,e,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,c=l,x=0;x<a.length;x++){var y=a[x];if(y.dataset.precedence===e)c=y;else if(c!==l)break}c?c.parentNode.insertBefore(A,c.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(A,e.firstChild))}function Ad(A,e){A.crossOrigin==null&&(A.crossOrigin=e.crossOrigin),A.referrerPolicy==null&&(A.referrerPolicy=e.referrerPolicy),A.title==null&&(A.title=e.title)}function ed(A,e){A.crossOrigin==null&&(A.crossOrigin=e.crossOrigin),A.referrerPolicy==null&&(A.referrerPolicy=e.referrerPolicy),A.integrity==null&&(A.integrity=e.integrity)}var Po=null;function Tg(A,e,t){if(Po===null){var a=new Map,l=Po=new Map;l.set(t,a)}else l=Po,a=l.get(t),a||(a=new Map,l.set(t,a));if(a.has(A))return a;for(a.set(A,null),t=t.getElementsByTagName(A),l=0;l<t.length;l++){var c=t[l];if(!(c[pA]||c[v]||A==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var x=c.getAttribute(e)||"";x=A+x;var y=a.get(x);y?y.push(c):a.set(x,[c])}}return a}function Ig(A,e,t){A=A.ownerDocument||A,A.head.insertBefore(t,e==="title"?A.querySelector("head > title"):null)}function uB(A,e,t){if(t===1||e.itemProp!=null)return!1;switch(A){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return A=e.disabled,typeof e.precedence=="string"&&A==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Lg(A){return!(A.type==="stylesheet"&&(A.state.loading&3)===0)}var mi=null;function fB(){}function hB(A,e,t){if(mi===null)throw Error(o(475));var a=mi;if(e.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var l=ur(t.href),c=A.querySelector(pi(l));if(c){A=c._p,A!==null&&typeof A=="object"&&typeof A.then=="function"&&(a.count++,a=$o.bind(a),A.then(a,a)),e.state.loading|=4,e.instance=c,Be(c);return}c=A.ownerDocument||A,t=Mg(t),(l=zt.get(l))&&Ad(t,l),c=c.createElement("link"),Be(c);var x=c;x._p=new Promise(function(y,j){x.onload=y,x.onerror=j}),lt(c,"link",t),e.instance=c}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,A),(A=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=$o.bind(a),A.addEventListener("load",e),A.addEventListener("error",e))}}function gB(){if(mi===null)throw Error(o(475));var A=mi;return A.stylesheets&&A.count===0&&td(A,A.stylesheets),0<A.count?function(e){var t=setTimeout(function(){if(A.stylesheets&&td(A,A.stylesheets),A.unsuspend){var a=A.unsuspend;A.unsuspend=null,a()}},6e4);return A.unsuspend=e,function(){A.unsuspend=null,clearTimeout(t)}}:null}function $o(){if(this.count--,this.count===0){if(this.stylesheets)td(this,this.stylesheets);else if(this.unsuspend){var A=this.unsuspend;this.unsuspend=null,A()}}}var As=null;function td(A,e){A.stylesheets=null,A.unsuspend!==null&&(A.count++,As=new Map,e.forEach(pB,A),As=null,$o.call(A))}function pB(A,e){if(!(e.state.loading&4)){var t=As.get(A);if(t)var a=t.get(null);else{t=new Map,As.set(A,t);for(var l=A.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var x=l[c];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(t.set(x.dataset.precedence,x),a=x)}a&&t.set(null,a)}l=e.instance,x=l.getAttribute("data-precedence"),c=t.get(x)||a,c===a&&t.set(null,l),t.set(x,l),this.count++,a=$o.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),c?c.parentNode.insertBefore(l,c.nextSibling):(A=A.nodeType===9?A.head:A,A.insertBefore(l,A.firstChild)),e.state.loading|=4}}var Bi={$$typeof:kA,Provider:null,Consumer:null,_currentValue:hA,_currentValue2:hA,_threadCount:0};function xB(A,e,t,a,l,c,x,y){this.tag=1,this.containerInfo=A,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=te(0),this.hiddenUpdates=te(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function Og(A,e,t,a,l,c,x,y,j,Z,gA,bA){return A=new xB(A,e,t,x,y,j,Z,bA),e=1,c===!0&&(e|=24),c=Ut(3,null,null,e),A.current=c,c.stateNode=A,e=Il(),e.refCount++,A.pooledCache=e,e.refCount++,c.memoizedState={element:a,isDehydrated:t,cache:e},Rl(c),A}function Kg(A){return A?(A=Ga,A):Ga}function Rg(A,e,t,a,l,c){l=Kg(l),a.context===null?a.context=l:a.pendingContext=l,a=Tn(e),a.payload={element:t},c=c===void 0?null:c,c!==null&&(a.callback=c),t=In(A,a,e),t!==null&&(Ht(t,A,e),Zr(t,A,e))}function zg(A,e){if(A=A.memoizedState,A!==null&&A.dehydrated!==null){var t=A.retryLane;A.retryLane=t!==0&&t<e?t:e}}function nd(A,e){zg(A,e),(A=A.alternate)&&zg(A,e)}function _g(A){if(A.tag===13){var e=_a(A,67108864);e!==null&&Ht(e,A,67108864),nd(A,67108864)}}var es=!0;function mB(A,e,t,a){var l=_.T;_.T=null;var c=aA.p;try{aA.p=2,ad(A,e,t,a)}finally{aA.p=c,_.T=l}}function BB(A,e,t,a){var l=_.T;_.T=null;var c=aA.p;try{aA.p=8,ad(A,e,t,a)}finally{aA.p=c,_.T=l}}function ad(A,e,t,a){if(es){var l=rd(a);if(l===null)Vc(A,e,a,ts,t),Vg(A,a);else if(wB(l,A,e,t,a))a.stopPropagation();else if(Vg(A,a),e&4&&-1<bB.indexOf(A)){for(;l!==null;){var c=Ae(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var x=QA(c.pendingLanes);if(x!==0){var y=c;for(y.pendingLanes|=2,y.entangledLanes|=2;x;){var j=1<<31-T(x);y.entanglements[1]|=j,x&=~j}an(c),(Qe&6)===0&&(Oo=ZA()+500,ui(0))}}break;case 13:y=_a(c,2),y!==null&&Ht(y,c,2),Ro(),nd(c,2)}if(c=rd(a),c===null&&Vc(A,e,a,ts,t),c===l)break;l=c}l!==null&&a.stopPropagation()}else Vc(A,e,a,null,t)}}function rd(A){return A=cl(A),id(A)}var ts=null;function id(A){if(ts=null,A=zA(A),A!==null){var e=u(A);if(e===null)A=null;else{var t=e.tag;if(t===13){if(A=h(e),A!==null)return A;A=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;A=null}else e!==A&&(A=null)}}return ts=A,null}function Gg(A){switch(A){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case oe:return 2;case Oe:return 8;case Fe:case Ge:return 32;case ke:return 268435456;default:return 32}default:return 32}}var od=!1,qn=null,Wn=null,Pn=null,bi=new Map,wi=new Map,$n=[],bB="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vg(A,e){switch(A){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":bi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wi.delete(e.pointerId)}}function yi(A,e,t,a,l,c){return A===null||A.nativeEvent!==c?(A={blockedOn:e,domEventName:t,eventSystemFlags:a,nativeEvent:c,targetContainers:[l]},e!==null&&(e=Ae(e),e!==null&&_g(e)),A):(A.eventSystemFlags|=a,e=A.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),A)}function wB(A,e,t,a,l){switch(e){case"focusin":return qn=yi(qn,A,e,t,a,l),!0;case"dragenter":return Wn=yi(Wn,A,e,t,a,l),!0;case"mouseover":return Pn=yi(Pn,A,e,t,a,l),!0;case"pointerover":var c=l.pointerId;return bi.set(c,yi(bi.get(c)||null,A,e,t,a,l)),!0;case"gotpointercapture":return c=l.pointerId,wi.set(c,yi(wi.get(c)||null,A,e,t,a,l)),!0}return!1}function Yg(A){var e=zA(A.target);if(e!==null){var t=u(e);if(t!==null){if(e=t.tag,e===13){if(e=h(t),e!==null){A.blockedOn=e,g(A.priority,function(){if(t.tag===13){var a=jt();a=p(a);var l=_a(t,a);l!==null&&Ht(l,t,a),nd(t,a)}});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){A.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}A.blockedOn=null}function ns(A){if(A.blockedOn!==null)return!1;for(var e=A.targetContainers;0<e.length;){var t=rd(A.nativeEvent);if(t===null){t=A.nativeEvent;var a=new t.constructor(t.type,t);ll=a,t.target.dispatchEvent(a),ll=null}else return e=Ae(t),e!==null&&_g(e),A.blockedOn=t,!1;e.shift()}return!0}function Xg(A,e,t){ns(A)&&t.delete(e)}function yB(){od=!1,qn!==null&&ns(qn)&&(qn=null),Wn!==null&&ns(Wn)&&(Wn=null),Pn!==null&&ns(Pn)&&(Pn=null),bi.forEach(Xg),wi.forEach(Xg)}function as(A,e){A.blockedOn===e&&(A.blockedOn=null,od||(od=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,yB)))}var rs=null;function Jg(A){rs!==A&&(rs=A,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){rs===A&&(rs=null);for(var e=0;e<A.length;e+=3){var t=A[e],a=A[e+1],l=A[e+2];if(typeof a!="function"){if(id(a||t)===null)continue;break}var c=Ae(t);c!==null&&(A.splice(e,3),e-=3,ic(c,{pending:!0,data:l,method:t.method,action:a},a,l))}}))}function vi(A){function e(j){return as(j,A)}qn!==null&&as(qn,A),Wn!==null&&as(Wn,A),Pn!==null&&as(Pn,A),bi.forEach(e),wi.forEach(e);for(var t=0;t<$n.length;t++){var a=$n[t];a.blockedOn===A&&(a.blockedOn=null)}for(;0<$n.length&&(t=$n[0],t.blockedOn===null);)Yg(t),t.blockedOn===null&&$n.shift();if(t=(A.ownerDocument||A).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var l=t[a],c=t[a+1],x=l[E]||null;if(typeof c=="function")x||Jg(t);else if(x){var y=null;if(c&&c.hasAttribute("formAction")){if(l=c,x=c[E]||null)y=x.formAction;else if(id(l)!==null)continue}else y=x.action;typeof y=="function"?t[a+1]=y:(t.splice(a,3),a-=3),Jg(t)}}}function sd(A){this._internalRoot=A}is.prototype.render=sd.prototype.render=function(A){var e=this._internalRoot;if(e===null)throw Error(o(409));var t=e.current,a=jt();Rg(t,a,A,e,null,null)},is.prototype.unmount=sd.prototype.unmount=function(){var A=this._internalRoot;if(A!==null){this._internalRoot=null;var e=A.containerInfo;Rg(A.current,2,null,A,null,null),Ro(),e[I]=null}};function is(A){this._internalRoot=A}is.prototype.unstable_scheduleHydration=function(A){if(A){var e=f();A={blockedOn:null,target:A,priority:e};for(var t=0;t<$n.length&&e!==0&&e<$n[t].priority;t++);$n.splice(t,0,A),t===0&&Yg(A)}};var Zg=r.version;if(Zg!=="19.1.0")throw Error(o(527,Zg,"19.1.0"));aA.findDOMNode=function(A){var e=A._reactInternals;if(e===void 0)throw typeof A.render=="function"?Error(o(188)):(A=Object.keys(A).join(","),Error(o(268,A)));return A=m(e),A=A!==null?w(A):null,A=A===null?null:A.stateNode,A};var vB={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var os=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!os.isDisabled&&os.supportsFiber)try{xe=os.inject(vB),fe=os}catch{}}return Qi.createRoot=function(A,e){if(!d(A))throw Error(o(299));var t=!1,a="",l=dh,c=uh,x=fh,y=null;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(x=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(y=e.unstable_transitionCallbacks)),e=Og(A,1,!1,null,null,t,a,l,c,x,y,null),A[I]=e.current,Gc(A),new sd(e)},Qi.hydrateRoot=function(A,e,t){if(!d(A))throw Error(o(299));var a=!1,l="",c=dh,x=uh,y=fh,j=null,Z=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(x=t.onCaughtError),t.onRecoverableError!==void 0&&(y=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(j=t.unstable_transitionCallbacks),t.formState!==void 0&&(Z=t.formState)),e=Og(A,1,!0,e,t??null,a,l,c,x,y,j,Z),e.context=Kg(null),t=e.current,a=jt(),a=p(a),l=Tn(a),l.callback=null,In(t,l,a),t=a,e.current.lanes=t,be(e,t),an(e),A[I]=e.current,Gc(A),new is(e)},Qi.version="19.1.0",Qi}var rp;function DB(){if(rp)return dd.exports;rp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),dd.exports=MB(),dd.exports}var TB=DB();/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IB=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),LB=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,o)=>o?o.toUpperCase():s.toLowerCase()),ip=i=>{const r=LB(i);return r.charAt(0).toUpperCase()+r.slice(1)},o0=(...i)=>i.filter((r,s,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===s).join(" ").trim(),OB=i=>{for(const r in i)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var KB={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RB=H.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:d="",children:u,iconNode:h,...B},m)=>H.createElement("svg",{ref:m,...KB,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:o0("lucide",d),...!u&&!OB(B)&&{"aria-hidden":"true"},...B},[...h.map(([w,Q])=>H.createElement(w,Q)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=(i,r)=>{const s=H.forwardRef(({className:o,...d},u)=>H.createElement(RB,{ref:u,iconNode:r,className:o0(`lucide-${IB(ip(i))}`,`lucide-${i}`,o),...d}));return s.displayName=ip(i),s};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zB=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],_B=WA("activity",zB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GB=[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]],VB=WA("app-window",GB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YB=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],jn=WA("arrow-left",YB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XB=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Hn=WA("arrow-right",XB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JB=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],s0=WA("book-open",JB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZB=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],l0=WA("box",ZB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qB=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],WB=WA("calendar",qB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PB=[["path",{d:"M8 6h10",key:"9lnwnk"}],["path",{d:"M6 12h9",key:"1g9pqf"}],["path",{d:"M11 18h7",key:"c8dzvl"}]],$B=WA("chart-no-axes-gantt",PB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],eb=WA("circle",Ab);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],nb=WA("cloud",tb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Na=WA("copy",ab);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],ib=WA("cpu",rb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],sb=WA("database",ob);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]],cb=WA("diamond",lb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Nn=WA("download",db);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],fb=WA("file-text",ub);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],c0=WA("git-branch",hb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],Xi=WA("git-merge",gb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],xb=WA("globe",pb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Bb=WA("grid-3x3",mb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],wb=WA("hard-drive",bb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],on=WA("image",yb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],d0=WA("layers",vb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],Qb=WA("maximize-2",Cb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22",key:"1hyw0i"}],["path",{d:"m20 22-5-5",key:"1m27yz"}]],Fb=WA("merge",Ub);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],Sb=WA("message-square",Eb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=[["path",{d:"M5 12h14",key:"1ays0h"}]],ou=WA("minus",jb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],Nb=WA("moon",Hb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],Mb=WA("mouse-pointer",kb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],u0=WA("move",Db);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Ib=WA("network",Tb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],f0=WA("palette",Lb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]],Kb=WA("pen-line",Ob);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],zb=WA("pen",Rb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Gb=WA("play",_b);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Re=WA("plus",Vb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Xb=WA("refresh-cw",Yb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],h0=WA("rotate-ccw",Jb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6.01 18H6",key:"19vcac"}],["path",{d:"M10.01 18H10",key:"uamcmx"}],["path",{d:"M15 10v4",key:"qjz1xs"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0",key:"1rif40"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0",key:"6a5xfq"}]],qb=WA("router",Zb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],ka=WA("save",Wb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],$b=WA("server",Pb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],ew=WA("shield",Aw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],nw=WA("smartphone",tw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],rw=WA("square",aw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],ow=WA("sun",iw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],pe=WA("trash-2",sw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],sn=WA("upload",lw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],dw=WA("user",cw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],su=WA("users",uw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ha=WA("x",fw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],gw=WA("zap",hw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Qr=WA("zoom-in",pw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Ur=WA("zoom-out",xw),mw=({projects:i,onCreateProject:r,onLoadProject:s,onDeleteProject:o})=>{const[d,u]=H.useState(!1);return n.jsxs("div",{className:"evolution-chart-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:"🌿"}),n.jsx("h2",{children:"Evolution Chart Maker"}),n.jsx("p",{children:"Visualize evolutionary relationships and timelines"}),n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Re,{size:16})," New Project"]}),i.length>0&&n.jsxs("div",{className:"project-list",children:[n.jsx("h3",{children:"Your Projects"}),i.map(h=>n.jsxs("div",{className:"project-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"project-card-content",children:[n.jsx("div",{className:"project-card-name",children:h.name}),n.jsxs("div",{className:"project-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.nodes?.length||0," nodes • ",h.connections?.length||0," connections"]})]})]}),n.jsxs("div",{className:"project-card-actions",children:[n.jsx("button",{onClick:B=>{B.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Hn,{size:16})}),n.jsx("button",{onClick:B=>{B.stopPropagation(),confirm("Delete this project?")&&o(h.id)},className:"delete-btn",children:n.jsx(pe,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Project"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Project Name"}),n.jsx("input",{type:"text",placeholder:"e.g., Mammalian Evolution",id:"projectName",autoFocus:!0})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Timeline Start"}),n.jsx("input",{type:"number",defaultValue:"500",id:"timelineStart"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Timeline End"}),n.jsx("input",{type:"number",defaultValue:"0",id:"timelineEnd"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Time Unit"}),n.jsxs("select",{id:"timeUnit",defaultValue:"mya",children:[n.jsx("option",{value:"bya",children:"Billion Years Ago (BYA)"}),n.jsx("option",{value:"mya",children:"Million Years Ago (MYA)"}),n.jsx("option",{value:"kya",children:"Thousand Years Ago (KYA)"}),n.jsx("option",{value:"ya",children:"Years Ago (YA)"})]})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("projectName").value,B=parseFloat(document.getElementById("timelineStart").value),m=parseFloat(document.getElementById("timelineEnd").value),w=document.getElementById("timeUnit").value;h.trim()&&B>m&&(r(h,B,m,w),u(!1))},className:"create-btn",children:"Create Project"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},ss=[{value:"bya",label:"Billion Years Ago (BYA)",multiplier:1e9},{value:"mya",label:"Million Years Ago (MYA)",multiplier:1e6},{value:"kya",label:"Thousand Years Ago (KYA)",multiplier:1e3},{value:"ya",label:"Years Ago (YA)",multiplier:1}],Bw=({project:i,nodes:r,connections:s,onUpdateProject:o,onBack:d})=>{const m="#ffffff",w="#ffeb3b",Q="#4fc3f7",F=H.useRef(null),N=H.useRef(null);H.useRef(null);const eA=H.useRef(0),P=H.useRef({x:0,y:0}),lA=H.useRef({x:0,y:0}),jA=H.useRef(0),wA=H.useRef(!1),[uA,kA]=H.useState(r||[]),[sA,xA]=H.useState(s||[]),[X,EA]=H.useState(null),[z,nA]=H.useState(null),[fA,FA]=H.useState(i?.zoom||1),[rA,LA]=H.useState(i?.pan||{x:0,y:0}),[RA,IA]=H.useState(i?.pan||{x:0,y:0}),[_,aA]=H.useState(!1),[hA,OA]=H.useState(null),[U,V]=H.useState(!1),[dA,tA]=H.useState(null);H.useEffect(()=>{if(i){const C=setTimeout(()=>{o({...i,nodes:uA,connections:sA,zoom:fA,pan:rA})},500);return()=>clearTimeout(C)}},[uA,sA,fA,rA,i,o]),H.useEffect(()=>{let C;const T=()=>{const W=Date.now(),iA=Math.min(W-eA.current,100)/1e3;if(eA.current=W,iA>0&&!wA.current){const oA=(RA.x-rA.x)*.2,CA=(RA.y-rA.y)*.2;Math.abs(oA)>.1||Math.abs(CA)>.1?(LA(k=>({x:k.x+oA,y:k.y+CA})),C=requestAnimationFrame(T)):LA(RA)}else C=requestAnimationFrame(T)};return C=requestAnimationFrame(T),()=>cancelAnimationFrame(C)},[rA,RA]);const vA=H.useCallback(C=>{if(!i)return 0;const T=HA(C.value,C.unit),W=HA(i.timelineStart,i.timeUnit),iA=HA(i.timelineEnd,i.timeUnit),oA=W-iA,CA=(W-T)/oA,k=F.current?.offsetWidth||800;return CA*k},[i]),HA=(C,T)=>{const W=ss.find(iA=>iA.value===T)||ss[0];return C*W.multiplier},M=(C,T)=>T==="bya"?`${C} BYA`:T==="mya"?`${C} MYA`:T==="kya"?`${C} KYA`:`${C} YA`,yA=H.useCallback(C=>{if(!i)return 0;const T=F.current?.offsetWidth||800,W=HA(i.timelineStart,i.timeUnit),iA=HA(i.timelineEnd,i.timeUnit),oA=W-iA,CA=C/T;return W-CA*oA},[i]),UA=H.useCallback(()=>{if(!i)return[];const C=F.current?.offsetWidth||800,T=HA(i.timelineStart,i.timeUnit),W=HA(i.timelineEnd,i.timeUnit),iA=T-W,oA=iA/fA;let CA;oA>2e9?CA=1e9:oA>1e9?CA=5e8:oA>5e8?CA=1e8:oA>2e8?CA=5e7:oA>1e8?CA=25e6:oA>5e7?CA=1e7:oA>2e7?CA=5e6:oA>1e7?CA=25e5:oA>5e6?CA=1e6:oA>2e6?CA=5e5:oA>1e6?CA=25e4:oA>5e5?CA=1e5:oA>2e5?CA=5e4:oA>1e5?CA=25e3:oA>5e4?CA=1e4:oA>2e4?CA=5e3:oA>1e4?CA=2500:oA>5e3?CA=1e3:oA>2e3?CA=500:oA>1e3?CA=250:oA>500?CA=100:oA>200?CA=50:oA>100?CA=25:oA>50?CA=10:oA>20?CA=5:CA=1;const k=[],QA=yA(-rA.x/fA),SA=yA((C-rA.x)/fA),KA=Math.ceil(Math.min(QA,SA)/CA)*CA,ae=Math.floor(Math.max(QA,SA)/CA)*CA;for(let XA=KA;XA<=ae;XA+=CA)if(XA>=W&&XA<=T){let le=XA,te="ya";XA>=1e9?(le=XA/1e9,te="bya"):XA>=1e6?(le=XA/1e6,te="mya"):XA>=1e3&&(le=XA/1e3,te="kya"),k.push({value:le,unit:te,position:(T-XA)/iA})}return k},[i,fA,rA,yA]),cA=()=>{const C={};uA.forEach(iA=>{C[iA.id]=0}),sA.forEach(iA=>{C[iA.from]=(C[iA.from]||0)+1,C[iA.to]=(C[iA.to]||0)+1});let T=null,W=0;return Object.entries(C).forEach(([iA,oA])=>{oA>W&&(W=oA,T=iA)}),T?uA.find(iA=>iA.id===parseInt(T)):null},D=(C,T)=>{if(!i)return;const W=F.current.getBoundingClientRect(),iA=C-W.left,oA=T-W.top-60,k=yA((iA-rA.x)/fA)/(ss.find(SA=>SA.value===i.timeUnit)?.multiplier||1),QA={id:Date.now(),x:(iA-rA.x)/fA,y:Math.max(20,(oA-rA.y)/fA),title:"New Species",description:"Description here...",imageSrc:"",timeline:{value:parseFloat(k.toFixed(4)),unit:i.timeUnit}};kA([...uA,QA]),OA(QA),aA(!0)},J=C=>{kA(uA.map(T=>T.id===C.id?C:T)),OA(null),aA(!1)},MA=C=>{kA(uA.filter(T=>T.id!==C)),xA(sA.filter(T=>T.from!==C&&T.to!==C)),EA(null)},K=(C,T)=>{const W={id:Date.now(),from:C,to:T};xA([...sA,W])},BA=C=>{xA(sA.filter(T=>T.id!==C)),nA(null)},YA=(C,T)=>{U||(C.stopPropagation(),wA.current=!0,EA(T),nA(null),F.current.getBoundingClientRect(),P.current={x:C.clientX,y:C.clientY},jA.current=performance.now())},_A=H.useCallback(C=>{if(!wA.current||!X)return;const T=performance.now(),W=(T-jA.current)/1e3;jA.current=T;const iA=F.current.getBoundingClientRect();C.clientX-iA.left,C.clientY-iA.top;const oA=C.clientX-P.current.x,CA=C.clientY-P.current.y;P.current={x:C.clientX,y:C.clientY},lA.current={x:oA/(W||.016),y:CA/(W||.016)};const k=CA/fA,QA=Math.max(20,X.y+k),SA={...X,y:QA};kA(KA=>KA.map(ae=>ae.id===X.id?SA:ae)),EA(SA)},[X,fA]),ZA=H.useCallback(()=>{if(wA.current){if(wA.current=!1,Math.abs(lA.current.y)>50){const T=lA.current.y*.9;IA(W=>({x:W.x,y:W.y-T}))}lA.current={x:0,y:0}}},[]),ne=(C,T)=>{C.stopPropagation(),U?dA?dA!==T.id&&(sA.find(iA=>iA.from===dA&&iA.to===T.id||iA.from===T.id&&iA.to===dA)||K(dA,T.id),V(!1),tA(null)):tA(T.id):wA.current||(EA(T),nA(null))},oe=(C,T)=>{if(!C||!T)return"";const W=vA(C.timeline)+120/2,iA=C.y+60/2,oA=vA(T.timeline)+120/2,CA=T.y+60/2,k=cA();if(k&&(C.id===k.id||T.id===k.id)){const SA=oA-W,KA=CA-iA,ae=Math.sqrt(SA*SA+KA*KA),XA=Math.min(ae*.4,100),le=W+(SA>0?XA:-XA),te=oA+(SA>0?-XA:XA);return`M ${W} ${iA}
              C ${le} ${iA},
                ${te} ${CA},
                ${oA} ${CA}`}else{const SA=Math.abs(W-oA)*.3+Math.abs(iA-CA)*.2;return`M ${W} ${iA}
              C ${W+SA} ${iA},
                ${oA-SA} ${CA},
                ${oA} ${CA}`}},Oe=(C,T)=>{const W=vA(C.timeline)+60,iA=C.y+60/2,oA=vA(T.timeline)+120/2,CA=T.y+60/2;return{x:(W+oA)/2,y:(iA+CA)/2}},Fe=()=>{if(!i)return;const T=JSON.stringify({project:i,nodes:uA,connections:sA,zoom:fA,pan:rA},null,2),W=new Blob([T],{type:"application/json"}),iA=URL.createObjectURL(W),oA=document.createElement("a");oA.href=iA,oA.download=`${i.name.replace(/\s+/g,"-")}-evolution-chart.json`,oA.click(),URL.revokeObjectURL(iA)},Ge=C=>{const T=C.target.files[0];if(!T)return;const W=new FileReader;W.onload=iA=>{try{const oA=JSON.parse(iA.target.result);oA.project&&oA.nodes&&(o({...oA.project,nodes:oA.nodes,connections:oA.connections,zoom:oA.zoom,pan:oA.pan}),kA(oA.nodes),xA(oA.connections),FA(oA.zoom||1),LA(oA.pan||{x:0,y:0}),IA(oA.pan||{x:0,y:0}))}catch{alert("Error parsing the file. Please check the file format.")}},W.readAsText(T)},ke=C=>{C.ctrlKey||C.metaKey?D(C.clientX,C.clientY):(EA(null),nA(null),U&&(V(!1),tA(null)))},Ve=C=>{OA(C),aA(!0)},qe=(C,T=null,W=null)=>{const iA=Math.max(.1,Math.min(5,fA+C));if(T!==null&&W!==null){const oA=F.current.getBoundingClientRect(),CA=T-oA.left,k=W-oA.top-60,QA={x:CA-(CA-rA.x)*(iA/fA),y:k-(k-rA.y)*(iA/fA)};LA(QA),IA(QA)}FA(iA)},xe=C=>{C.preventDefault();const T=.5;C.shiftKey?IA(W=>({x:W.x-C.deltaY*T,y:W.y})):IA(W=>({x:W.x-C.deltaX*T,y:W.y-C.deltaY*T}))};H.useEffect(()=>{const C=()=>ZA();return document.addEventListener("mousemove",_A),document.addEventListener("mouseup",C),()=>{document.removeEventListener("mousemove",_A),document.removeEventListener("mouseup",C)}},[_A,ZA]);const fe=cA();return n.jsxs("div",{className:"evolution-chart-maker",children:[n.jsxs("div",{className:"header",children:[n.jsxs("div",{className:"header-left",children:[n.jsx("h1",{children:"🧬 Evolution Chart Maker"}),n.jsx("span",{className:"project-name",children:i?.name})]}),n.jsxs("div",{className:"toolbar",children:[n.jsx("button",{onClick:d,className:"toolbar-btn primary",children:"← Back to Projects"}),n.jsx("button",{onClick:()=>{V(!U),tA(null)},className:`toolbar-btn ${U?"danger":"warning"}`,children:U?"Cancel":"Connect"}),n.jsxs("button",{onClick:()=>N.current?.click(),className:"toolbar-btn warning",children:[n.jsx(sn,{size:16})," Import"]}),n.jsxs("button",{onClick:Fe,className:"toolbar-btn info",children:[n.jsx(Nn,{size:16})," Export"]}),n.jsxs("div",{className:"zoom-controls",children:[n.jsx("button",{onClick:()=>qe(.1),className:"zoom-btn",children:n.jsx(Qr,{size:16})}),n.jsx("button",{onClick:()=>qe(-.1),className:"zoom-btn",children:n.jsx(Ur,{size:16})})]})]})]}),n.jsx("div",{className:"timeline",children:UA().map((C,T)=>n.jsxs("div",{className:"timeline-marker",style:{left:`${C.position*(F.current?.offsetWidth||800)*fA+rA.x}px`},children:[n.jsx("div",{className:"timeline-line"}),n.jsx("span",{className:"timeline-label",children:M(C.value,C.unit)})]},T))}),n.jsxs("div",{ref:F,onClick:ke,onWheel:xe,className:"canvas",style:{cursor:U?"crosshair":wA.current?"grabbing":"default"},children:[n.jsx("svg",{className:"connections-svg",children:sA.map(C=>{const T=uA.find(k=>k.id===C.from),W=uA.find(k=>k.id===C.to);if(!T||!W)return null;const iA=Oe(T,W),oA=z===C.id||X&&(X.id===T.id||X.id===W.id),CA=fe&&(T.id===fe.id||W.id===fe.id);return n.jsxs("g",{children:[n.jsx("path",{d:oe(T,W),stroke:oA?w:CA?Q:m,strokeWidth:CA?oA?"4":"3":oA?"3":"2",fill:"none",opacity:CA?"0.9":"0.7",transform:`translate(${rA.x}, ${rA.y+60}) scale(${fA})`,strokeDasharray:CA?"none":"5,5"}),oA&&n.jsx("circle",{cx:iA.x*fA+rA.x,cy:iA.y*fA+rA.y+60,r:8*fA,fill:"#e53e3e",onClick:k=>{k.stopPropagation(),BA(C.id)},style:{cursor:"pointer",pointerEvents:"auto"}})]},C.id)})}),uA.map(C=>{const T=fe&&fe.id===C.id;return n.jsxs("div",{className:`node ${X?.id===C.id?"selected":""} ${T?"central":""}`,style:{left:`${vA(C.timeline)*fA+rA.x}px`,top:`${C.y*fA+rA.y+60}px`,width:`${120*fA}px`,height:`${60*fA}px`,transform:X?.id===C.id&&wA.current?"scale(1.02)":"scale(1)",transition:"transform 0.1s ease"},onMouseDown:W=>YA(W,C),onClick:W=>ne(W,C),onDoubleClick:()=>Ve(C),children:[n.jsxs("div",{className:"node-content",children:[C.imageSrc&&n.jsx("img",{src:C.imageSrc,alt:C.title,className:"node-image",style:{width:`${28*fA}px`,height:`${28*fA}px`}}),n.jsxs("div",{className:"node-text",children:[n.jsx("div",{className:"node-title",style:{fontSize:`${10*fA}px`},children:C.title}),n.jsx("div",{className:"node-timeline",style:{fontSize:`${8*fA}px`},children:M(C.timeline.value,C.timeline.unit)})]})]}),X?.id===C.id&&n.jsx("button",{onClick:W=>{W.stopPropagation(),MA(C.id)},className:"delete-node-btn",style:{width:`${20*fA}px`,height:`${20*fA}px`},children:n.jsx(pe,{size:10*fA})})]},C.id)}),U&&n.jsx("div",{className:"connection-mode-indicator",children:dA?"Select child node":"Select parent node"}),n.jsxs("div",{className:"instructions-panel",children:[n.jsxs("div",{children:["💡 ",n.jsx("strong",{children:"Ctrl+Click:"})," Create new node"]}),n.jsxs("div",{children:["🔗 ",n.jsx("strong",{children:"Connect Mode:"})," Click two nodes to link them"]}),n.jsxs("div",{children:["❌ ",n.jsx("strong",{children:"Click connection midpoint:"})," Delete connection"]}),n.jsxs("div",{children:["📍 ",n.jsx("strong",{children:"Drag:"})," Move nodes vertically"]}),n.jsxs("div",{children:["✏️ ",n.jsx("strong",{children:"Double-click:"})," Edit node details"]}),n.jsxs("div",{children:["🔍 ",n.jsx("strong",{children:"Scroll:"})," Pan | ",n.jsx("strong",{children:"Shift+Scroll:"})," Horizontal Pan"]})]})]}),_&&hA&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Edit Node"}),n.jsx("button",{onClick:()=>aA(!1),className:"close-btn",children:n.jsx(Ha,{size:20})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Title"}),n.jsx("input",{type:"text",defaultValue:hA.title,placeholder:"Species name",id:"nodeTitle"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Image URL"}),n.jsx("input",{type:"text",defaultValue:hA.imageSrc,placeholder:"https://example.com/image.jpg",id:"nodeImage"})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Timeline Value"}),n.jsx("input",{type:"number",defaultValue:hA.timeline.value,id:"nodeTimelineValue"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Time Unit"}),n.jsx("select",{id:"nodeTimelineUnit",defaultValue:hA.timeline.unit,children:ss.map(C=>n.jsx("option",{value:C.value,children:C.value.toUpperCase()},C.value))})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Description"}),n.jsx("textarea",{defaultValue:hA.description,placeholder:"Brief description of the species...",rows:4,id:"nodeDescription"})]}),n.jsxs("div",{className:"form-actions",children:[n.jsx("button",{onClick:()=>aA(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const C={...hA,title:document.getElementById("nodeTitle").value,imageSrc:document.getElementById("nodeImage").value,timeline:{value:parseFloat(document.getElementById("nodeTimelineValue").value),unit:document.getElementById("nodeTimelineUnit").value},description:document.getElementById("nodeDescription").value};J(C)},className:"save-btn",children:"Save Changes"})]})]})}),n.jsx("input",{ref:N,type:"file",accept:".json",onChange:Ge,style:{display:"none"}}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},bw=({flowcharts:i,onCreateFlowchart:r,onLoadFlowchart:s,onDeleteFlowchart:o,onImportFlowchart:d})=>{const[u,h]=H.useState(!1),[B,m]=H.useState(!1),[w,Q]=H.useState("");return n.jsxs("div",{className:"flowchart-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:"📊"}),n.jsx("h2",{children:"Flowchart Designer"}),n.jsx("p",{children:"Create and visualize complex processes with intuitive flowcharts"}),n.jsxs("div",{className:"action-buttons",children:[n.jsxs("button",{onClick:()=>h(!0),className:"primary-btn",children:[n.jsx(Re,{size:16})," New Flowchart"]}),n.jsxs("button",{onClick:()=>m(!0),className:"secondary-btn",children:[n.jsx(sn,{size:16})," Import"]})]}),i.length>0&&n.jsxs("div",{className:"flowchart-list",children:[n.jsx("h3",{children:"Your Flowcharts"}),i.map(F=>n.jsxs("div",{className:"flowchart-card",onClick:()=>s(F),children:[n.jsxs("div",{className:"flowchart-card-content",children:[n.jsx("div",{className:"flowchart-card-name",children:F.name}),n.jsxs("div",{className:"flowchart-card-meta",children:[n.jsx("span",{children:new Date(F.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[F.nodes?.length||0," nodes • ",F.edges?.length||0," edges"]})]})]}),n.jsxs("div",{className:"flowchart-card-actions",children:[n.jsx("button",{onClick:N=>{N.stopPropagation(),s(F)},className:"open-btn",children:n.jsx(Hn,{size:16})}),n.jsx("button",{onClick:N=>{N.stopPropagation(),confirm("Delete this flowchart?")&&o(F.id)},className:"delete-btn",children:n.jsx(pe,{size:16})})]})]},F.id))]})]}),u&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Flowchart"}),n.jsx("button",{onClick:()=>h(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Flowchart Name"}),n.jsx("input",{type:"text",placeholder:"e.g., User Registration Flow",id:"flowchartName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>h(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const F=document.getElementById("flowchartName").value;F.trim()&&(r(F),h(!1))},className:"create-btn",children:"Create Flowchart"})]})]})}),B&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Import Flowchart"}),n.jsx("button",{onClick:()=>m(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Paste JSON Data"}),n.jsx("textarea",{value:w,onChange:F=>Q(F.target.value),placeholder:"Paste your flowchart JSON here...",rows:8})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>m(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{try{d(w),m(!1),Q("")}catch(F){alert("Invalid JSON: "+F.message)}},className:"create-btn",children:"Import"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},ww=({flowchart:i,nodes:r,edges:s,jsonInput:o,onJsonInputChange:d,onImportJson:u,onUpdateFlowchart:h,onBack:B})=>{const[m,w]=H.useState("editor"),[Q,F]=H.useState(null),[N,eA]=H.useState(null),[P,lA]=H.useState(null),[jA,wA]=H.useState(null),[uA,kA]=H.useState(null),[sA,xA]=H.useState(null),[X,EA]=H.useState(""),[z,nA]=H.useState(!1),[fA,FA]=H.useState(null),[rA,LA]=H.useState(!1),[RA,IA]=H.useState(""),[_,aA]=H.useState(null),[hA,OA]=H.useState("dark"),[U,V]=H.useState(null),[dA,tA]=H.useState(null),[vA,HA]=H.useState(!1),[M,yA]=H.useState(!1),[UA,cA]=H.useState(null),D=H.useRef(null),J=H.useRef(null),K={dark:{background:"#1a1a1a",panel:"#242424",border:"#444",text:"rgba(255, 255, 255, 0.87)",nodeFill:"#646cff",nodeStroke:"#a855f7",edgeStroke:"#646cff",highlight:"#a855f7",secondaryText:"#64748b",buttonHover:"#333"},light:{background:"#f5f5f5",panel:"#ffffff",border:"#ddd",text:"#333",nodeFill:"#4f46e5",nodeStroke:"#7c3aed",edgeStroke:"#4f46e5",highlight:"#7c3aed",secondaryText:"#666",buttonHover:"#eee"},blue:{background:"#0f172a",panel:"#1e293b",border:"#334155",text:"#f8fafc",nodeFill:"#3b82f6",nodeStroke:"#6366f1",edgeStroke:"#3b82f6",highlight:"#6366f1",secondaryText:"#94a3b8",buttonHover:"#1e293b"}}[hA];H.useEffect(()=>{const f=b=>{if(b.key==="Control"||b.key==="Meta")HA(!0);else if(b.key==="Shift")yA(!0);else if(b.key==="Delete")N?SA():P?KA():U&&ae();else if(U&&!b.ctrlKey&&!b.metaKey){let v=0,E=0;const I=b.shiftKey?10:2;switch(b.key){case"ArrowUp":E=-I;break;case"ArrowDown":E=I;break;case"ArrowLeft":v=-I;break;case"ArrowRight":v=I;break;default:return}b.preventDefault(),BA(U.edgeId,U.pointIndex,v,E)}},g=b=>{b.key==="Control"||b.key==="Meta"?HA(!1):b.key==="Shift"&&yA(!1)};return document.addEventListener("keydown",f),document.addEventListener("keyup",g),()=>{document.removeEventListener("keydown",f),document.removeEventListener("keyup",g)}},[N,P,U]);const BA=(f,g,b,v)=>{const E=s.map(I=>{if(I.id===f){const G=[...I.controlPoints||[]];return G[g]&&(G[g]={x:G[g].x+b,y:G[g].y+v}),{...I,controlPoints:G}}return I});h({...i,edges:E})},YA=()=>JSON.stringify({nodes:r,edges:s},null,2),_A=()=>{const f=new Blob([YA()],{type:"application/json"}),g=URL.createObjectURL(f),b=document.createElement("a");b.href=g,b.download=`${i?.name||"use-case-diagram"}.json`,document.body.appendChild(b),b.click(),document.body.removeChild(b),URL.revokeObjectURL(g),w("json")},ZA=f=>{const g=f.target.files[0];if(!g)return;const b=new FileReader;b.onload=v=>{try{const E=JSON.parse(v.target.result);d(JSON.stringify(E,null,2)),w("json")}catch{alert("Invalid JSON file")}},b.readAsText(g),f.target.value=""},ne=()=>{try{const f=JSON.parse(o);h({...i,nodes:f.nodes||[],edges:f.edges||[]})}catch(f){alert("Invalid JSON: "+f.message)}},oe=(f,g,b)=>{const v=b.x+b.width/2,E=b.y+b.height/2,I=Math.abs(f-v),L=Math.abs(g-E);return I/(b.width/2)+L/(b.height/2)<=1},Oe=(f,g,b)=>{const v=f-b.x,E=g-b.y,I=b.height*.3;if(E<0||E>b.height)return!1;const L=E/b.height,G=-I+L*I*2,q=b.width+I-L*I*2;return v>=G&&v<=q},Fe=(f,g,b)=>{const v=f.x+f.width/2,E=f.y+f.height/2;if(f.type==="circle"){const I=f.width/2,L=Math.atan2(b-E,g-v);return{x:v+I*Math.cos(L),y:E+I*Math.sin(L)}}else if(f.type==="oval"){const I=f.width/2,L=f.height/2,G=Math.atan2(b-E,g-v),q=Math.cos(G),TA=Math.sin(G),pA=Math.sqrt(1/(Math.pow(q/I,2)+Math.pow(TA/L,2)));return{x:v+pA*q,y:E+pA*TA}}else if(f.type==="diamond"){const I=g-v,L=b-E,G=f.width/2,q=f.height/2,TA=Math.abs(I)>0?G/Math.abs(I):1/0,pA=Math.abs(L)>0?q/Math.abs(L):1/0,DA=Math.min(TA,pA),zA=v+I/Math.abs(I)*Math.min(Math.abs(I),G*DA),Ae=E+L/Math.abs(L)*Math.min(Math.abs(L),q*DA),he=Math.abs(zA-v)/G,ce=Math.abs(Ae-E)/q,Be=1/(he+ce);return{x:v+(zA-v)*Be,y:E+(Ae-E)*Be}}else if(f.type==="rhombus"){const I=g-v,L=b-E,G=f.height*.3,q=Math.max(0,Math.min(1,(b-f.y)/f.height));if(Math.abs(I)>Math.abs(L)*.8){const TA=I>0?f.x+f.width+G-q*G*2:f.x-G+q*G*2,pA=f.y+q*f.height,DA=I>0?f.x+f.width-G:f.x+G,zA=I>0?f.x+f.width+G:f.x-G;return I>0,f.y,I>0,f.y+f.height,{x:Math.max(Math.min(TA,Math.max(DA,zA)),Math.min(DA,zA)),y:Math.max(Math.min(pA,f.y+f.height),f.y)}}else{const TA=L>0?f.y+f.height:f.y,pA=v+I*.7,DA=G*(1-Math.abs(L)/f.height);return{x:Math.max(f.x-DA,Math.min(f.x+f.width+DA,pA)),y:TA}}}else{const I=g-v,L=b-E,G=f.width/2,q=f.height/2;if(Math.abs(I)*q>Math.abs(L)*G){const TA=I>0?f.x+f.width:f.x,pA=E+L/Math.abs(I)*G;return{x:TA,y:Math.max(f.y,Math.min(f.y+f.height,pA))}}else{const TA=L>0?f.y+f.height:f.y,pA=v+I/Math.abs(L)*q;return{x:Math.max(f.x,Math.min(f.x+f.width,pA)),y:TA}}}},Ge=(f,g,b=null)=>r.some(v=>{if(v.id===b)return!1;if(v.type==="circle"){const E=v.x+v.width/2,I=v.y+v.height/2;return Math.sqrt(Math.pow(f-E,2)+Math.pow(g-I,2))<=v.width/2+5}else if(v.type==="oval"){const E=v.x+v.width/2,I=v.y+v.height/2,L=(f-E)/(v.width/2+5),G=(g-I)/(v.height/2+5);return Math.pow(L,2)+Math.pow(G,2)<=1}else return v.type==="diamond"?oe(f,g,{...v,width:v.width+10,height:v.height+10,x:v.x-5,y:v.y-5}):v.type==="rhombus"?Oe(f,g,{...v,width:v.width+10,height:v.height+10,x:v.x-5,y:v.y-5}):f>=v.x-5&&f<=v.x+v.width+5&&g>=v.y-5&&g<=v.y+v.height+5}),ke=(f,g,b=[])=>{const v={x:f.x+f.width/2,y:f.y+f.height/2},E={x:g.x+g.width/2,y:g.y+g.height/2},I=Fe(f,E.x,E.y),L=Fe(g,v.x,v.y);if(b&&b.length>0)return[I,...b,L];const G=L.x-I.x,q=L.y-I.y,TA=Math.sqrt(G*G+q*q),pA=!Ve(I,L,[f.id,g.id]);return TA<80||pA?[I,L]:qe(I,L,f,g)},Ve=(f,g,b=[])=>{const v=Math.ceil(Math.sqrt(Math.pow(g.x-f.x,2)+Math.pow(g.y-f.y,2))/10);for(let E=0;E<=v;E++){const I=E/v,L=f.x+(g.x-f.x)*I,G=f.y+(g.y-f.y)*I;if(Ge(L,G,...b))return!0}return!1},qe=(f,g,b,v)=>{const E=g.x-f.x,I=g.y-f.y,L=[()=>{const G=f.x+E*.7,q=[f,{x:G,y:f.y},{x:G,y:g.y},g];return Ve(q[1],q[2],[b.id,v.id])?null:q},()=>{const G=f.y+I*.7,q=[f,{x:f.x,y:G},{x:g.x,y:G},g];return Ve(q[1],q[2],[b.id,v.id])?null:q},()=>{const G=Math.abs(I)>Math.abs(E)?100:50,q=f.x+E*.5+(E>0?G:-G);return[f,{x:q,y:f.y},{x:q,y:g.y},g]},()=>{const G=Math.abs(E)>Math.abs(I)?100:50,q=f.y+I*.5+(I>0?G:-G);return[f,{x:f.x,y:q},{x:g.x,y:q},g]}];for(const G of L){const q=G();if(q)return q}return[f,g]},xe=f=>{if(f.length<=2)return{x:(f[0].x+f[f.length-1].x)/2,y:(f[0].y+f[f.length-1].y)/2};let g=0,b=0;for(let v=0;v<f.length-1;v++){const E=Math.sqrt(Math.pow(f[v+1].x-f[v].x,2)+Math.pow(f[v+1].y-f[v].y,2));E>g&&(g=E,b=v)}return{x:(f[b].x+f[b+1].x)/2,y:(f[b].y+f[b+1].y)/2}},fe=(f,g,b,v=8)=>{const E=f.x-g.x,I=f.y-g.y,L=b.x-g.x,G=b.y-g.y,q=E*L+I*G,TA=L*L+G*G;if(TA===0)return!1;const pA=q/TA;if(pA<0||pA>1)return!1;const DA=g.x+pA*L,zA=g.y+pA*G,Ae=f.x-DA,he=f.y-zA;return Math.sqrt(Ae*Ae+he*he)<=v},C=(f,g)=>{for(const b of s){const v=r.find(L=>L.id===b.from),E=r.find(L=>L.id===b.to);if(!v||!E)continue;const I=ke(v,E,b.controlPoints);for(let L=0;L<I.length-1;L++)if(fe({x:f,y:g},I[L],I[L+1]))return b}return null},T=(f,g)=>{for(const b of s)if(b.controlPoints)for(let v=0;v<b.controlPoints.length;v++){const E=b.controlPoints[v];if(Math.sqrt(Math.pow(f-E.x,2)+Math.pow(g-E.y,2))<=8)return{edgeId:b.id,pointIndex:v,point:E}}return null},W=f=>{if(uA||sA)return;const b=f.currentTarget.getBoundingClientRect(),v=(f.clientX-b.left-i.pan.x)/i.zoom,E=(f.clientY-b.top-i.pan.y)/i.zoom,I=T(v,E);if(I){V(I),eA(null),lA(null);return}const L=r.find(q=>{if(q.type==="circle"){const TA=q.x+q.width/2,pA=q.y+q.height/2;return Math.sqrt(Math.pow(v-TA,2)+Math.pow(E-pA,2))<=q.width/2}else if(q.type==="oval"){const TA=q.x+q.width/2,pA=q.y+q.height/2,DA=(v-TA)/(q.width/2),zA=(E-pA)/(q.height/2);return Math.pow(DA,2)+Math.pow(zA,2)<=1}else return q.type==="diamond"?oe(v,E,q):q.type==="rhombus"?Oe(v,E,q):v>=q.x&&v<=q.x+q.width&&E>=q.y&&E<=q.y+q.height}),G=L?null:C(v,E);if(M&&P&&G&&G.id===P.id){iA(P.id,v,E);return}if(vA&&L){cA({x:v,y:E,node:L}),FA(L),nA(!0);return}if(z&&L){if(!fA)FA(L);else if(L.id!==fA.id)if(fA.type==="diamond"||fA.type==="rhombus")aA({id:Date.now(),from:fA.id,to:L.id}),LA(!0);else{const q={id:Date.now(),from:fA.id,to:L.id,label:"",controlPoints:[]};h({...i,edges:[...s,q]}),FA(null),nA(!1),F(null),cA(null)}return}if(L){eA(L),lA(null),V(null);return}if(G){lA(G),eA(null),V(null);return}if(Q&&Q!=="arrow"){const q={id:Date.now(),type:Q,x:v-(Q==="circle"||Q==="oval"?30:60),y:E-30,width:Q==="circle"?60:Q==="oval"?100:120,height:60,text:oA(Q)};h({...i,nodes:[...r,q]}),F(null)}eA(null),lA(null),V(null)},iA=(f,g,b)=>{const v=s.map(E=>{if(E.id===f){const I=E.controlPoints||[];return{...E,controlPoints:[...I,{x:g,y:b}]}}return E});h({...i,edges:v})},oA=f=>{switch(f){case"oval":return"Start/End";case"diamond":return"Decision";case"rhombus":return"Decision";case"rectangle":return"Process";case"circle":return"Connector";default:return f.charAt(0).toUpperCase()+f.slice(1)}},CA=f=>{kA(f.id),EA(f.text)},k=f=>{xA(f.id),EA(f.label||"")},QA=()=>{if(uA){const f=r.map(g=>g.id===uA?{...g,text:X}:g);h({...i,nodes:f}),kA(null)}else if(sA){const f=s.map(g=>g.id===sA?{...g,label:X}:g);h({...i,edges:f}),xA(null)}EA("")},SA=()=>{if(!N)return;const f=r.filter(b=>b.id!==N.id),g=s.filter(b=>b.from!==N.id&&b.to!==N.id);h({...i,nodes:f,edges:g}),eA(null)},KA=()=>{if(!P)return;const f=s.filter(g=>g.id!==P.id);h({...i,edges:f}),lA(null)},ae=()=>{if(!U)return;const f=s.map(g=>{if(g.id===U.edgeId){const v=(g.controlPoints||[]).filter((E,I)=>I!==U.pointIndex);return{...g,controlPoints:v}}return g});h({...i,edges:f}),V(null)},XA=(f,g)=>{if(uA||sA)return;const v=D.current.getBoundingClientRect(),E=f.clientX-v.left,I=f.clientY-v.top;wA({nodeId:g.id,startX:E,startY:I,originalX:g.x,originalY:g.y})},le=(f,g,b)=>{if(uA||sA)return;f.stopPropagation();const E=D.current.getBoundingClientRect(),I=f.clientX-E.left,L=f.clientY-E.top,q=s.find(TA=>TA.id===g)?.controlPoints?.[b];q&&tA({edgeId:g,pointIndex:b,startX:I,startY:L,originalX:q.x,originalY:q.y})},te=H.useCallback(f=>{if(jA){const b=D.current.getBoundingClientRect(),v=f.clientX-b.left,E=f.clientY-b.top,I=(v-jA.startX)/i.zoom,L=(E-jA.startY)/i.zoom,G=r.map(q=>q.id===jA.nodeId?{...q,x:jA.originalX+I,y:jA.originalY+L}:q);h({...i,nodes:G})}else if(dA){const b=D.current.getBoundingClientRect(),v=f.clientX-b.left,E=f.clientY-b.top,I=(v-dA.startX)/i.zoom,L=(E-dA.startY)/i.zoom,G=s.map(q=>{if(q.id===dA.edgeId){const pA=[...q.controlPoints||[]];return pA[dA.pointIndex]={x:dA.originalX+I,y:dA.originalY+L},{...q,controlPoints:pA}}return q});h({...i,edges:G})}},[jA,dA,r,s,i,h]),be=H.useCallback(()=>{wA(null),tA(null)},[]);H.useEffect(()=>{if(jA||dA)return document.addEventListener("mousemove",te),document.addEventListener("mouseup",be),()=>{document.removeEventListener("mousemove",te),document.removeEventListener("mouseup",be)}},[jA,dA,te,be]);const ut=()=>{F("arrow"),nA(!0),FA(null),cA(null)},Me=()=>{if(!_)return;const f={..._,label:RA,controlPoints:[]};h({...i,edges:[...s,f]}),FA(null),nA(!1),F(null),LA(!1),aA(null),IA(""),cA(null)},ye=()=>{const f=document.createElement("canvas"),g=f.getContext("2d");let b=1/0,v=1/0,E=-1/0,I=-1/0;r.forEach(pA=>{b=Math.min(b,pA.x),v=Math.min(v,pA.y),E=Math.max(E,pA.x+pA.width),I=Math.max(I,pA.y+pA.height)}),s.forEach(pA=>{const DA=r.find(Ae=>Ae.id===pA.from),zA=r.find(Ae=>Ae.id===pA.to);DA&&zA&&ke(DA,zA,pA.controlPoints).forEach(he=>{b=Math.min(b,he.x),v=Math.min(v,he.y),E=Math.max(E,he.x),I=Math.max(I,he.y)})});const L=40;b-=L,v-=L,E+=L,I+=L;const G=E-b,q=I-v;f.width=G,f.height=q,g.fillStyle=K.background,g.fillRect(0,0,G,q),s.forEach(pA=>{const DA=r.find(Ae=>Ae.id===pA.from),zA=r.find(Ae=>Ae.id===pA.to);if(DA&&zA){const he=ke(DA,zA,pA.controlPoints).map(xt=>({x:xt.x-b,y:xt.y-v}));g.strokeStyle=K.edgeStroke,g.lineWidth=2,g.beginPath(),g.moveTo(he[0].x,he[0].y);for(let xt=1;xt<he.length;xt++)g.lineTo(he[xt].x,he[xt].y);g.stroke();const ce=he[he.length-1],Be=he[he.length-2],Pt=Math.atan2(ce.y-Be.y,ce.x-Be.x);if(g.fillStyle=K.edgeStroke,g.beginPath(),g.moveTo(ce.x,ce.y),g.lineTo(ce.x-12*Math.cos(Pt-Math.PI/6),ce.y-12*Math.sin(Pt-Math.PI/6)),g.lineTo(ce.x-12*Math.cos(Pt+Math.PI/6),ce.y-12*Math.sin(Pt+Math.PI/6)),g.closePath(),g.fill(),pA.label){const xt=xe(he);g.fillStyle=K.text,g.font="12px Arial",g.textAlign="center",g.fillText(pA.label,xt.x,xt.y-5)}}}),r.forEach(pA=>{const DA=pA.x-b,zA=pA.y-v;if(g.fillStyle=K.nodeFill,g.strokeStyle=K.nodeStroke,g.lineWidth=2,pA.type==="rectangle")g.beginPath(),g.roundRect(DA,zA,pA.width,pA.height,4),g.fill(),g.stroke();else if(pA.type==="circle")g.beginPath(),g.arc(DA+pA.width/2,zA+pA.height/2,pA.width/2,0,2*Math.PI),g.fill(),g.stroke();else if(pA.type==="diamond")g.beginPath(),g.moveTo(DA+pA.width/2,zA),g.lineTo(DA+pA.width,zA+pA.height/2),g.lineTo(DA+pA.width/2,zA+pA.height),g.lineTo(DA,zA+pA.height/2),g.closePath(),g.fill(),g.stroke();else if(pA.type==="rhombus"){const Ae=pA.height*.3;g.beginPath(),g.moveTo(DA-Ae,zA),g.lineTo(DA+pA.width-Ae,zA),g.lineTo(DA+pA.width+Ae,zA+pA.height),g.lineTo(DA+Ae,zA+pA.height),g.closePath(),g.fill(),g.stroke()}else pA.type==="oval"&&(g.beginPath(),g.ellipse(DA+pA.width/2,zA+pA.height/2,pA.width/2,pA.height/2,0,0,2*Math.PI),g.fill(),g.stroke());g.fillStyle=K.text,g.font="12px Arial",g.textAlign="center",g.textBaseline="middle",g.fillText(pA.text,DA+pA.width/2,zA+pA.height/2)});const TA=document.createElement("a");TA.download=`${i.name||"flowchart"}.png`,TA.href=f.toDataURL("image/png"),TA.click()},p=f=>{const g=N?.id===f.id,b=uA===f.id,v=z&&fA?.id===f.id;let E={position:"absolute",left:`${f.x}px`,top:`${f.y}px`,width:`${f.width}px`,height:`${f.height}px`,backgroundColor:g?K.highlight:K.nodeFill,display:"flex",justifyContent:"center",alignItems:"center",color:K.text,cursor:"move",fontSize:"12px",fontWeight:"500",textAlign:"center",wordBreak:"break-word",padding:"8px",boxSizing:"border-box",border:g?`2px solid ${K.nodeStroke}`:v?"2px solid #f59e0b":"1px solid rgba(255,255,255,0.2)",userSelect:"none",transition:"all 0.2s ease",zIndex:g?1e3:1};return f.type==="circle"||f.type==="oval"?E.borderRadius="50%":f.type==="diamond"?(E.clipPath="polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",E.borderRadius="0"):f.type==="rhombus"?(E.clipPath="polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",E.borderRadius="0"):E.borderRadius="8px",n.jsx("div",{style:E,onMouseDown:I=>XA(I,f),onDoubleClick:()=>CA(f),children:b?n.jsx("input",{type:"text",value:X,onChange:I=>EA(I.target.value),onBlur:QA,onKeyPress:I=>I.key==="Enter"&&QA(),style:{background:"rgba(255,255,255,0.2)",border:"none",color:K.text,textAlign:"center",fontSize:"12px",fontWeight:"500",width:"100%",outline:"none",borderRadius:"4px",padding:"2px"},autoFocus:!0}):f.text},f.id)},S=f=>{const g=r.find(L=>L.id===f.from),b=r.find(L=>L.id===f.to);if(!g||!b)return null;const v=ke(g,b,f.controlPoints),E=P?.id===f.id,I=sA===f.id;return n.jsxs("div",{children:[v.map((L,G)=>{if(G===v.length-1)return null;const q=v[G+1],TA=Math.sqrt(Math.pow(q.x-L.x,2)+Math.pow(q.y-L.y,2)),pA=Math.atan2(q.y-L.y,q.x-L.x)*180/Math.PI;return n.jsx("div",{style:{position:"absolute",left:`${L.x}px`,top:`${L.y-(E?1.5:1)}px`,width:`${TA}px`,height:E?"3px":"2px",backgroundColor:E?K.highlight:K.edgeStroke,transformOrigin:"0 50%",transform:`rotate(${pA}deg)`,cursor:"pointer",zIndex:E?10:2,borderRadius:"1px"},onClick:DA=>{DA.stopPropagation(),lA(f),eA(null),V(null)},onDoubleClick:DA=>{DA.stopPropagation(),k(f)}},`segment-${G}`)}),f.controlPoints&&f.controlPoints.map((L,G)=>n.jsx("div",{style:{position:"absolute",left:`${L.x-6}px`,top:`${L.y-6}px`,width:"12px",height:"12px",backgroundColor:U?.edgeId===f.id&&U?.pointIndex===G?K.highlight:K.nodeStroke,border:"2px solid white",borderRadius:"50%",cursor:"move",zIndex:15,boxShadow:"0 2px 4px rgba(0,0,0,0.2)"},onMouseDown:q=>le(q,f.id,G),onClick:q=>{q.stopPropagation(),V({edgeId:f.id,pointIndex:G,point:L})}},`control-${G}`)),(()=>{const L=v[v.length-1],G=v[v.length-2],q=Math.atan2(L.y-G.y,L.x-G.x),TA=8,pA=Math.PI/6,DA={x:L.x-TA*Math.cos(q-pA),y:L.y-TA*Math.sin(q-pA)},zA={x:L.x-TA*Math.cos(q+pA),y:L.y-TA*Math.sin(q+pA)};return n.jsx("svg",{style:{position:"absolute",left:`${Math.min(L.x,DA.x,zA.x)-2}px`,top:`${Math.min(L.y,DA.y,zA.y)-2}px`,width:`${Math.max(L.x,DA.x,zA.x)-Math.min(L.x,DA.x,zA.x)+4}px`,height:`${Math.max(L.y,DA.y,zA.y)-Math.min(L.y,DA.y,zA.y)+4}px`,pointerEvents:"none",zIndex:E?11:3},children:n.jsx("polygon",{points:`${L.x-Math.min(L.x,DA.x,zA.x)+2},${L.y-Math.min(L.y,DA.y,zA.y)+2} ${DA.x-Math.min(L.x,DA.x,zA.x)+2},${DA.y-Math.min(L.y,DA.y,zA.y)+2} ${zA.x-Math.min(L.x,DA.x,zA.x)+2},${zA.y-Math.min(L.y,DA.y,zA.y)+2}`,fill:E?K.highlight:K.edgeStroke})})})(),(f.label||I)&&n.jsx("div",{style:{position:"absolute",left:`${xe(v).x}px`,top:`${xe(v).y-12}px`,color:K.text,fontSize:"11px",fontWeight:"600",backgroundColor:K.panel,padding:"4px 8px",borderRadius:"12px",border:`1px solid ${K.border}`,transform:"translate(-50%, -50%)",cursor:"pointer",zIndex:E?12:4,minWidth:I?"80px":"auto",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},onClick:L=>{L.stopPropagation(),lA(f),eA(null),V(null)},onDoubleClick:L=>{L.stopPropagation(),k(f)},children:I?n.jsx("input",{type:"text",value:X,onChange:L=>EA(L.target.value),onBlur:QA,onKeyPress:L=>L.key==="Enter"&&QA(),style:{background:"transparent",border:"none",color:K.text,textAlign:"center",fontSize:"11px",fontWeight:"600",width:"100%",outline:"none"},autoFocus:!0}):f.label})]},f.id)};return n.jsx("div",{style:{minHeight:"100vh",backgroundColor:K.background,color:K.text,fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},children:n.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto",padding:"24px"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"24px",padding:"20px",backgroundColor:K.panel,borderRadius:"12px",border:`1px solid ${K.border}`,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[n.jsx("h1",{style:{margin:"0",fontSize:"2rem",fontWeight:"700",background:"linear-gradient(135deg, #646cff, #a855f7)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:i.name}),n.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[n.jsx("div",{style:{display:"flex",gap:"4px",padding:"4px",backgroundColor:K.background,borderRadius:"8px",border:`1px solid ${K.border}`},children:[{key:"dark",label:"🌙",title:"Dark Theme"},{key:"light",label:"☀️",title:"Light Theme"},{key:"blue",label:"🌊",title:"Blue Theme"}].map(({key:f,label:g,title:b})=>n.jsx("button",{onClick:()=>OA(f),title:b,style:{padding:"8px 12px",backgroundColor:hA===f?K.nodeFill:"transparent",color:hA===f?"white":K.text,border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"16px",transition:"all 0.2s",minWidth:"40px"},children:g},f))}),n.jsx("button",{onClick:B,style:{padding:"12px 20px",backgroundColor:K.panel,color:K.text,border:`1px solid ${K.nodeFill}`,borderRadius:"8px",cursor:"pointer",fontSize:"14px",fontWeight:"500",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"8px"},children:"← Back to List"})]})]}),n.jsxs("div",{style:{display:"flex",marginBottom:"24px",backgroundColor:K.panel,borderRadius:"12px",padding:"4px",border:`1px solid ${K.border}`,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[n.jsx("button",{onClick:()=>w("editor"),style:{padding:"12px 24px",border:"none",backgroundColor:m==="editor"?K.nodeFill:"transparent",color:m==="editor"?"white":K.text,cursor:"pointer",fontSize:"14px",fontWeight:"600",borderRadius:"8px",transition:"all 0.2s",flex:1,textAlign:"center"},children:"🎨 Flowchart Editor"}),n.jsx("button",{onClick:()=>{w("json"),d(YA())},style:{padding:"12px 24px",border:"none",backgroundColor:m==="json"?K.nodeFill:"transparent",color:m==="json"?"white":K.text,cursor:"pointer",fontSize:"14px",fontWeight:"600",borderRadius:"8px",transition:"all 0.2s",flex:1,textAlign:"center"},children:"📝 JSON Editor"})]}),m==="editor"?n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"20px",backgroundColor:K.panel,borderRadius:"12px",border:`1px solid ${K.border}`,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"},children:[n.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[[{tool:"rectangle",icon:"⬜",label:"Process"},{tool:"diamond",icon:"◆",label:"Diamond"},{tool:"rhombus",icon:"🔷",label:"Slanted"},{tool:"circle",icon:"●",label:"Circle"},{tool:"oval",icon:"⬭",label:"Oval"}].map(({tool:f,icon:g,label:b})=>n.jsxs("button",{onClick:()=>F(f),style:{padding:"10px 16px",backgroundColor:Q===f?K.nodeFill:K.background,color:Q===f?"white":K.text,border:`1px solid ${K.border}`,borderRadius:"8px",cursor:"pointer",fontSize:"13px",fontWeight:"500",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"6px"},children:[n.jsx("span",{style:{fontSize:"16px"},children:g}),b]},f)),n.jsxs("button",{onClick:ut,style:{padding:"10px 16px",backgroundColor:z?K.nodeFill:K.background,color:z?"white":K.text,border:`1px solid ${K.border}`,borderRadius:"8px",cursor:"pointer",fontSize:"13px",fontWeight:"500",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"6px"},children:[n.jsx("span",{style:{fontSize:"16px"},children:"→"}),z?fA?"Select Target":"Select Source":"Connect"]})]}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[N&&n.jsx("button",{onClick:SA,style:{padding:"8px 12px",backgroundColor:"#ef4444",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"🗑 Delete Node"}),P&&n.jsx("button",{onClick:KA,style:{padding:"8px 12px",backgroundColor:"#ef4444",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"🗑 Delete Edge"}),U&&n.jsx("button",{onClick:ae,style:{padding:"8px 12px",backgroundColor:"#ef4444",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"🗑 Delete Control Point"})]})]}),n.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"center",flexWrap:"wrap"},children:[n.jsx("button",{onClick:ye,style:{padding:"8px 16px",backgroundColor:"#f59e0b",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"📸 Export PNG"}),n.jsx("button",{onClick:()=>navigator.clipboard.writeText(YA()),style:{padding:"8px 16px",backgroundColor:"#a855f7",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"📋 Copy JSON"}),n.jsx("button",{onClick:_A,style:{padding:"8px 16px",backgroundColor:"#10b981",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"📥 Export JSON"})]})]}),(Q||z)&&n.jsxs("div",{style:{padding:"16px",backgroundColor:"rgba(100, 108, 255, 0.1)",border:`1px solid ${K.nodeFill}`,borderRadius:"8px",color:K.nodeFill,textAlign:"center",fontSize:"14px",fontWeight:"500"},children:[z?fA?`🎯 Click on target node to connect from "${fA.text}"`:"🎯 Click on a node to start connection":`🎨 Click on canvas to place a ${Q}`,n.jsx("br",{}),vA&&"🔧 Ctrl pressed: Click on node edge to start connection from specific point",M&&"➕ Shift pressed: Click on edge to add control point"]}),n.jsxs("div",{ref:D,onClick:W,style:{height:"700px",border:`2px dashed ${K.border}`,borderRadius:"12px",backgroundColor:K.background,display:"flex",justifyContent:"center",alignItems:"center",position:"relative",overflow:"hidden",cursor:Q?"crosshair":"default",boxShadow:"inset 0 2px 4px rgba(0, 0, 0, 0.1)"},children:[r.length===0&&!Q&&n.jsxs("div",{style:{textAlign:"center",color:K.secondaryText,pointerEvents:"none"},children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"🎨"}),n.jsx("h3",{style:{margin:"0 0 8px 0",fontWeight:"600"},children:"Start Building Your Flowchart"}),n.jsx("p",{style:{margin:"0",fontSize:"14px"},children:"Select a tool from the toolbar above to begin"})]}),n.jsxs("div",{style:{position:"absolute",transform:`scale(${i.zoom}) translate(${i.pan.x}px, ${i.pan.y}px)`,transformOrigin:"0 0",width:"100%",height:"100%"},children:[s.map(S),r.map(p)]})]}),n.jsxs("div",{style:{padding:"16px",backgroundColor:K.panel,borderRadius:"8px",border:`1px solid ${K.border}`,fontSize:"13px",color:K.secondaryText,textAlign:"center",lineHeight:"1.6"},children:["💡 ",n.jsx("strong",{children:"Pro Tips:"})," Single click to select • Double click to edit text • Drag nodes to move • Use Connect tool for arrows • Ctrl+Click on node to start connection from specific point • Shift+Click on edge to add control point • Press Delete to remove selected items • Use arrow keys to move control points"]})]}):n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"},children:[n.jsxs("div",{style:{border:`1px solid ${K.border}`,borderRadius:"12px",padding:"20px",backgroundColor:K.panel,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[n.jsx("h3",{style:{marginTop:"0",marginBottom:"16px",color:K.text,fontSize:"1.2rem",fontWeight:"600"},children:"📥 Import JSON"}),n.jsx("textarea",{value:o,onChange:f=>d(f.target.value),placeholder:"Paste your flowchart JSON here...",style:{width:"100%",minHeight:"400px",padding:"16px",border:`1px solid ${K.border}`,borderRadius:"8px",fontFamily:'"Fira Code", "Cascadia Code", "SF Mono", Monaco, "Inconsolata", "Roboto Mono", monospace',fontSize:"13px",lineHeight:"1.5",marginBottom:"16px",backgroundColor:K.background,color:K.text,resize:"vertical",outline:"none",transition:"border-color 0.2s"}}),n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx("button",{onClick:ne,style:{padding:"12px 20px",backgroundColor:"#10b981",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",flex:1,fontSize:"14px",fontWeight:"600",transition:"all 0.2s"},children:"📥 Import JSON"}),n.jsx("button",{onClick:()=>J.current.click(),style:{padding:"12px 20px",backgroundColor:K.nodeFill,color:"white",border:"none",borderRadius:"8px",cursor:"pointer",flex:1,fontSize:"14px",fontWeight:"600",transition:"all 0.2s"},children:"📁 Load File"}),n.jsx("input",{type:"file",ref:J,onChange:ZA,accept:".json",style:{display:"none"}})]})]}),n.jsxs("div",{style:{border:`1px solid ${K.border}`,borderRadius:"12px",padding:"20px",backgroundColor:K.panel,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[n.jsx("h3",{style:{marginTop:"0",marginBottom:"16px",color:K.text,fontSize:"1.2rem",fontWeight:"600"},children:"📤 Current Flowchart JSON"}),n.jsx("pre",{style:{backgroundColor:K.background,padding:"16px",border:`1px solid ${K.border}`,borderRadius:"8px",overflow:"auto",maxHeight:"450px",fontFamily:'"Fira Code", "Cascadia Code", "SF Mono", Monaco, "Inconsolata", "Roboto Mono", monospace',fontSize:"12px",lineHeight:"1.5",color:K.text,whiteSpace:"pre-wrap",wordWrap:"break-word",margin:0},children:YA()})]})]}),rA&&n.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.6)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e4,backdropFilter:"blur(4px)"},children:n.jsxs("div",{style:{backgroundColor:K.panel,padding:"24px",borderRadius:"12px",width:"400px",border:`1px solid ${K.nodeFill}`,boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.3)"},children:[n.jsx("h3",{style:{marginTop:0,marginBottom:"8px",color:K.text,fontSize:"1.3rem",fontWeight:"600"},children:"🏷️ Add Connection Label"}),n.jsx("p",{style:{color:K.secondaryText,marginBottom:"20px",fontSize:"14px",lineHeight:"1.5"},children:'Decision nodes should have labeled connections. Enter a label like "Yes", "No", or a condition:'}),n.jsx("input",{type:"text",value:RA,onChange:f=>IA(f.target.value),placeholder:"e.g., Yes, No, True, False...",style:{width:"100%",padding:"12px",marginBottom:"20px",backgroundColor:K.background,border:`1px solid ${K.border}`,color:K.text,borderRadius:"8px",fontSize:"14px",outline:"none",transition:"border-color 0.2s"},autoFocus:!0,onKeyPress:f=>f.key==="Enter"&&Me()}),n.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[n.jsx("button",{onClick:()=>{LA(!1),IA(""),FA(null),nA(!1),F(null)},style:{padding:"10px 16px",backgroundColor:K.background,color:K.text,border:`1px solid ${K.border}`,borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"500",transition:"all 0.2s"},children:"Cancel"}),n.jsx("button",{onClick:Me,style:{padding:"10px 16px",backgroundColor:K.nodeFill,color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"600",transition:"all 0.2s"},children:"Add Label"})]})]})})]})})},yw=({ganttCharts:i,onCreateGanttChart:r,onLoadGanttChart:s,onDeleteGanttChart:o})=>{const[d,u]=H.useState(!1);return n.jsxs("div",{className:"gantt-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx($B,{size:48})}),n.jsx("h2",{children:"Gantt Chart Planner"}),n.jsx("p",{children:"Plan and visualize project timelines with interactive Gantt charts"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Re,{size:16})," New Gantt Chart"]})}),i.length>0&&n.jsxs("div",{className:"gantt-list",children:[n.jsx("h3",{children:"Your Gantt Charts"}),i.map(h=>n.jsxs("div",{className:"gantt-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"gantt-card-content",children:[n.jsx("div",{className:"gantt-card-name",children:h.name}),n.jsxs("div",{className:"gantt-card-meta",children:[n.jsxs("span",{children:[n.jsx(WB,{size:14})," ",new Date(h.createdAt).toLocaleDateString()]}),n.jsxs("span",{children:[h.tasks?.length||0," tasks"]})]})]}),n.jsxs("div",{className:"gantt-card-actions",children:[n.jsx("button",{onClick:B=>{B.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Hn,{size:16})}),n.jsx("button",{onClick:B=>{B.stopPropagation(),confirm("Delete this Gantt chart?")&&o(h.id)},className:"delete-btn",children:n.jsx(pe,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Gantt Chart"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Project Name"}),n.jsx("input",{type:"text",placeholder:"e.g., Website Redesign Project",id:"ganttName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("ganttName").value;h.trim()&&(r(h),u(!1))},className:"create-btn",children:"Create Gantt Chart"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
***************************************************************************** */var Id=function(i,r){return Id=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,o){s.__proto__=o}||function(s,o){for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])},Id(i,r)};function Wt(i,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");Id(i,r);function s(){this.constructor=i}i.prototype=r===null?Object.create(r):(s.prototype=r.prototype,new s)}var Ld=function(){return Ld=Object.assign||function(r){for(var s,o=1,d=arguments.length;o<d;o++){s=arguments[o];for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&(r[u]=s[u])}return r},Ld.apply(this,arguments)};function Bt(i,r,s,o){function d(u){return u instanceof s?u:new s(function(h){h(u)})}return new(s||(s=Promise))(function(u,h){function B(Q){try{w(o.next(Q))}catch(F){h(F)}}function m(Q){try{w(o.throw(Q))}catch(F){h(F)}}function w(Q){Q.done?u(Q.value):d(Q.value).then(B,m)}w((o=o.apply(i,[])).next())})}function gt(i,r){var s={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},o,d,u,h;return h={next:B(0),throw:B(1),return:B(2)},typeof Symbol=="function"&&(h[Symbol.iterator]=function(){return this}),h;function B(w){return function(Q){return m([w,Q])}}function m(w){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,d&&(u=w[0]&2?d.return:w[0]?d.throw||((u=d.return)&&u.call(d),0):d.next)&&!(u=u.call(d,w[1])).done)return u;switch(d=0,u&&(w=[w[0]&2,u.value]),w[0]){case 0:case 1:u=w;break;case 4:return s.label++,{value:w[1],done:!1};case 5:s.label++,d=w[1],w=[0];continue;case 7:w=s.ops.pop(),s.trys.pop();continue;default:if(u=s.trys,!(u=u.length>0&&u[u.length-1])&&(w[0]===6||w[0]===2)){s=0;continue}if(w[0]===3&&(!u||w[1]>u[0]&&w[1]<u[3])){s.label=w[1];break}if(w[0]===6&&s.label<u[1]){s.label=u[1],u=w;break}if(u&&s.label<u[2]){s.label=u[2],s.ops.push(w);break}u[2]&&s.ops.pop(),s.trys.pop();continue}w=r.call(i,s)}catch(Q){w=[6,Q],d=0}finally{o=u=0}if(w[0]&5)throw w[1];return{value:w[0]?w[1]:void 0,done:!0}}}function ls(i,r,s){if(arguments.length===2)for(var o=0,d=r.length,u;o<d;o++)(u||!(o in r))&&(u||(u=Array.prototype.slice.call(r,0,o)),u[o]=r[o]);return i.concat(u||r)}var Sn=function(){function i(r,s,o,d){this.left=r,this.top=s,this.width=o,this.height=d}return i.prototype.add=function(r,s,o,d){return new i(this.left+r,this.top+s,this.width+o,this.height+d)},i.fromClientRect=function(r,s){return new i(s.left+r.windowBounds.left,s.top+r.windowBounds.top,s.width,s.height)},i.fromDOMRectList=function(r,s){var o=Array.from(s).find(function(d){return d.width!==0});return o?new i(o.left+r.windowBounds.left,o.top+r.windowBounds.top,o.width,o.height):i.EMPTY},i.EMPTY=new i(0,0,0,0),i}(),Ys=function(i,r){return Sn.fromClientRect(i,r.getBoundingClientRect())},vw=function(i){var r=i.body,s=i.documentElement;if(!r||!s)throw new Error("Unable to get document size");var o=Math.max(Math.max(r.scrollWidth,s.scrollWidth),Math.max(r.offsetWidth,s.offsetWidth),Math.max(r.clientWidth,s.clientWidth)),d=Math.max(Math.max(r.scrollHeight,s.scrollHeight),Math.max(r.offsetHeight,s.offsetHeight),Math.max(r.clientHeight,s.clientHeight));return new Sn(0,0,o,d)},Xs=function(i){for(var r=[],s=0,o=i.length;s<o;){var d=i.charCodeAt(s++);if(d>=55296&&d<=56319&&s<o){var u=i.charCodeAt(s++);(u&64512)===56320?r.push(((d&1023)<<10)+(u&1023)+65536):(r.push(d),s--)}else r.push(d)}return r},Ze=function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];if(String.fromCodePoint)return String.fromCodePoint.apply(String,i);var s=i.length;if(!s)return"";for(var o=[],d=-1,u="";++d<s;){var h=i[d];h<=65535?o.push(h):(h-=65536,o.push((h>>10)+55296,h%1024+56320)),(d+1===s||o.length>16384)&&(u+=String.fromCharCode.apply(String,o),o.length=0)}return u},op="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Cw=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var cs=0;cs<op.length;cs++)Cw[op.charCodeAt(cs)]=cs;var sp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ni=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ds=0;ds<sp.length;ds++)Ni[sp.charCodeAt(ds)]=ds;var Qw=function(i){var r=i.length*.75,s=i.length,o,d=0,u,h,B,m;i[i.length-1]==="="&&(r--,i[i.length-2]==="="&&r--);var w=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(r):new Array(r),Q=Array.isArray(w)?w:new Uint8Array(w);for(o=0;o<s;o+=4)u=Ni[i.charCodeAt(o)],h=Ni[i.charCodeAt(o+1)],B=Ni[i.charCodeAt(o+2)],m=Ni[i.charCodeAt(o+3)],Q[d++]=u<<2|h>>4,Q[d++]=(h&15)<<4|B>>2,Q[d++]=(B&3)<<6|m&63;return w},Uw=function(i){for(var r=i.length,s=[],o=0;o<r;o+=2)s.push(i[o+1]<<8|i[o]);return s},Fw=function(i){for(var r=i.length,s=[],o=0;o<r;o+=4)s.push(i[o+3]<<24|i[o+2]<<16|i[o+1]<<8|i[o]);return s},Sa=5,lu=11,gd=2,Ew=lu-Sa,g0=65536>>Sa,Sw=1<<Sa,pd=Sw-1,jw=1024>>Sa,Hw=g0+jw,Nw=Hw,kw=32,Mw=Nw+kw,Dw=65536>>lu,Tw=1<<Ew,Iw=Tw-1,lp=function(i,r,s){return i.slice?i.slice(r,s):new Uint16Array(Array.prototype.slice.call(i,r,s))},Lw=function(i,r,s){return i.slice?i.slice(r,s):new Uint32Array(Array.prototype.slice.call(i,r,s))},Ow=function(i,r){var s=Qw(i),o=Array.isArray(s)?Fw(s):new Uint32Array(s),d=Array.isArray(s)?Uw(s):new Uint16Array(s),u=24,h=lp(d,u/2,o[4]/2),B=o[5]===2?lp(d,(u+o[4])/2):Lw(o,Math.ceil((u+o[4])/4));return new Kw(o[0],o[1],o[2],o[3],h,B)},Kw=function(){function i(r,s,o,d,u,h){this.initialValue=r,this.errorValue=s,this.highStart=o,this.highValueIndex=d,this.index=u,this.data=h}return i.prototype.get=function(r){var s;if(r>=0){if(r<55296||r>56319&&r<=65535)return s=this.index[r>>Sa],s=(s<<gd)+(r&pd),this.data[s];if(r<=65535)return s=this.index[g0+(r-55296>>Sa)],s=(s<<gd)+(r&pd),this.data[s];if(r<this.highStart)return s=Mw-Dw+(r>>lu),s=this.index[s],s+=r>>Sa&Iw,s=this.index[s],s=(s<<gd)+(r&pd),this.data[s];if(r<=1114111)return this.data[this.highValueIndex]}return this.errorValue},i}(),cp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Rw=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var us=0;us<cp.length;us++)Rw[cp.charCodeAt(us)]=us;var zw="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",dp=50,_w=1,p0=2,x0=3,Gw=4,Vw=5,up=7,m0=8,fp=9,aa=10,Od=11,hp=12,Kd=13,Yw=14,ki=15,Rd=16,fs=17,Ui=18,Xw=19,gp=20,zd=21,Fi=22,xd=23,hr=24,Nt=25,Mi=26,Di=27,gr=28,Jw=29,Fa=30,Zw=31,hs=32,gs=33,_d=34,Gd=35,Vd=36,Gi=37,Yd=38,Ns=39,ks=40,md=41,B0=42,qw=43,Ww=[9001,65288],b0="!",ge="×",ps="÷",Xd=Ow(zw),Un=[Fa,Vd],Jd=[_w,p0,x0,Vw],w0=[aa,m0],pp=[Di,Mi],Pw=Jd.concat(w0),xp=[Yd,Ns,ks,_d,Gd],$w=[ki,Kd],Ay=function(i,r){r===void 0&&(r="strict");var s=[],o=[],d=[];return i.forEach(function(u,h){var B=Xd.get(u);if(B>dp?(d.push(!0),B-=dp):d.push(!1),["normal","auto","loose"].indexOf(r)!==-1&&[8208,8211,12316,12448].indexOf(u)!==-1)return o.push(h),s.push(Rd);if(B===Gw||B===Od){if(h===0)return o.push(h),s.push(Fa);var m=s[h-1];return Pw.indexOf(m)===-1?(o.push(o[h-1]),s.push(m)):(o.push(h),s.push(Fa))}if(o.push(h),B===Zw)return s.push(r==="strict"?zd:Gi);if(B===B0||B===Jw)return s.push(Fa);if(B===qw)return u>=131072&&u<=196605||u>=196608&&u<=262141?s.push(Gi):s.push(Fa);s.push(B)}),[o,s,d]},Bd=function(i,r,s,o){var d=o[s];if(Array.isArray(i)?i.indexOf(d)!==-1:i===d)for(var u=s;u<=o.length;){u++;var h=o[u];if(h===r)return!0;if(h!==aa)break}if(d===aa)for(var u=s;u>0;){u--;var B=o[u];if(Array.isArray(i)?i.indexOf(B)!==-1:i===B)for(var m=s;m<=o.length;){m++;var h=o[m];if(h===r)return!0;if(h!==aa)break}if(B!==aa)break}return!1},mp=function(i,r){for(var s=i;s>=0;){var o=r[s];if(o===aa)s--;else return o}return 0},ey=function(i,r,s,o,d){if(s[o]===0)return ge;var u=o-1;if(Array.isArray(d)&&d[u]===!0)return ge;var h=u-1,B=u+1,m=r[u],w=h>=0?r[h]:0,Q=r[B];if(m===p0&&Q===x0)return ge;if(Jd.indexOf(m)!==-1)return b0;if(Jd.indexOf(Q)!==-1||w0.indexOf(Q)!==-1)return ge;if(mp(u,r)===m0)return ps;if(Xd.get(i[u])===Od||(m===hs||m===gs)&&Xd.get(i[B])===Od||m===up||Q===up||m===fp||[aa,Kd,ki].indexOf(m)===-1&&Q===fp||[fs,Ui,Xw,hr,gr].indexOf(Q)!==-1||mp(u,r)===Fi||Bd(xd,Fi,u,r)||Bd([fs,Ui],zd,u,r)||Bd(hp,hp,u,r))return ge;if(m===aa)return ps;if(m===xd||Q===xd)return ge;if(Q===Rd||m===Rd)return ps;if([Kd,ki,zd].indexOf(Q)!==-1||m===Yw||w===Vd&&$w.indexOf(m)!==-1||m===gr&&Q===Vd||Q===gp||Un.indexOf(Q)!==-1&&m===Nt||Un.indexOf(m)!==-1&&Q===Nt||m===Di&&[Gi,hs,gs].indexOf(Q)!==-1||[Gi,hs,gs].indexOf(m)!==-1&&Q===Mi||Un.indexOf(m)!==-1&&pp.indexOf(Q)!==-1||pp.indexOf(m)!==-1&&Un.indexOf(Q)!==-1||[Di,Mi].indexOf(m)!==-1&&(Q===Nt||[Fi,ki].indexOf(Q)!==-1&&r[B+1]===Nt)||[Fi,ki].indexOf(m)!==-1&&Q===Nt||m===Nt&&[Nt,gr,hr].indexOf(Q)!==-1)return ge;if([Nt,gr,hr,fs,Ui].indexOf(Q)!==-1)for(var F=u;F>=0;){var N=r[F];if(N===Nt)return ge;if([gr,hr].indexOf(N)!==-1)F--;else break}if([Di,Mi].indexOf(Q)!==-1)for(var F=[fs,Ui].indexOf(m)!==-1?h:u;F>=0;){var N=r[F];if(N===Nt)return ge;if([gr,hr].indexOf(N)!==-1)F--;else break}if(Yd===m&&[Yd,Ns,_d,Gd].indexOf(Q)!==-1||[Ns,_d].indexOf(m)!==-1&&[Ns,ks].indexOf(Q)!==-1||[ks,Gd].indexOf(m)!==-1&&Q===ks||xp.indexOf(m)!==-1&&[gp,Mi].indexOf(Q)!==-1||xp.indexOf(Q)!==-1&&m===Di||Un.indexOf(m)!==-1&&Un.indexOf(Q)!==-1||m===hr&&Un.indexOf(Q)!==-1||Un.concat(Nt).indexOf(m)!==-1&&Q===Fi&&Ww.indexOf(i[B])===-1||Un.concat(Nt).indexOf(Q)!==-1&&m===Ui)return ge;if(m===md&&Q===md){for(var eA=s[u],P=1;eA>0&&(eA--,r[eA]===md);)P++;if(P%2!==0)return ge}return m===hs&&Q===gs?ge:ps},ty=function(i,r){r||(r={lineBreak:"normal",wordBreak:"normal"});var s=Ay(i,r.lineBreak),o=s[0],d=s[1],u=s[2];(r.wordBreak==="break-all"||r.wordBreak==="break-word")&&(d=d.map(function(B){return[Nt,Fa,B0].indexOf(B)!==-1?Gi:B}));var h=r.wordBreak==="keep-all"?u.map(function(B,m){return B&&i[m]>=19968&&i[m]<=40959}):void 0;return[o,d,h]},ny=function(){function i(r,s,o,d){this.codePoints=r,this.required=s===b0,this.start=o,this.end=d}return i.prototype.slice=function(){return Ze.apply(void 0,this.codePoints.slice(this.start,this.end))},i}(),ay=function(i,r){var s=Xs(i),o=ty(s,r),d=o[0],u=o[1],h=o[2],B=s.length,m=0,w=0;return{next:function(){if(w>=B)return{done:!0,value:null};for(var Q=ge;w<B&&(Q=ey(s,u,d,++w,h))===ge;);if(Q!==ge||w===B){var F=new ny(s,Q,m,w);return m=w,{value:F,done:!1}}return{done:!0,value:null}}}},ry=1,iy=2,Ji=4,Bp=8,Ts=10,bp=47,Oi=92,oy=9,sy=32,xs=34,Ei=61,ly=35,cy=36,dy=37,ms=39,Bs=40,Si=41,uy=95,Ct=45,fy=33,hy=60,gy=62,py=64,xy=91,my=93,By=61,by=123,bs=63,wy=125,wp=124,yy=126,vy=128,yp=65533,bd=42,Ea=43,Cy=44,Qy=58,Uy=59,Vi=46,Fy=0,Ey=8,Sy=11,jy=14,Hy=31,Ny=127,rn=-1,y0=48,v0=97,C0=101,ky=102,My=117,Dy=122,Q0=65,U0=69,F0=70,Ty=85,Iy=90,pt=function(i){return i>=y0&&i<=57},Ly=function(i){return i>=55296&&i<=57343},pr=function(i){return pt(i)||i>=Q0&&i<=F0||i>=v0&&i<=ky},Oy=function(i){return i>=v0&&i<=Dy},Ky=function(i){return i>=Q0&&i<=Iy},Ry=function(i){return Oy(i)||Ky(i)},zy=function(i){return i>=vy},ws=function(i){return i===Ts||i===oy||i===sy},Is=function(i){return Ry(i)||zy(i)||i===uy},vp=function(i){return Is(i)||pt(i)||i===Ct},_y=function(i){return i>=Fy&&i<=Ey||i===Sy||i>=jy&&i<=Hy||i===Ny},na=function(i,r){return i!==Oi?!1:r!==Ts},ys=function(i,r,s){return i===Ct?Is(r)||na(r,s):Is(i)?!0:!!(i===Oi&&na(i,r))},wd=function(i,r,s){return i===Ea||i===Ct?pt(r)?!0:r===Vi&&pt(s):pt(i===Vi?r:i)},Gy=function(i){var r=0,s=1;(i[r]===Ea||i[r]===Ct)&&(i[r]===Ct&&(s=-1),r++);for(var o=[];pt(i[r]);)o.push(i[r++]);var d=o.length?parseInt(Ze.apply(void 0,o),10):0;i[r]===Vi&&r++;for(var u=[];pt(i[r]);)u.push(i[r++]);var h=u.length,B=h?parseInt(Ze.apply(void 0,u),10):0;(i[r]===U0||i[r]===C0)&&r++;var m=1;(i[r]===Ea||i[r]===Ct)&&(i[r]===Ct&&(m=-1),r++);for(var w=[];pt(i[r]);)w.push(i[r++]);var Q=w.length?parseInt(Ze.apply(void 0,w),10):0;return s*(d+B*Math.pow(10,-h))*Math.pow(10,m*Q)},Vy={type:2},Yy={type:3},Xy={type:4},Jy={type:13},Zy={type:8},qy={type:21},Wy={type:9},Py={type:10},$y={type:11},A1={type:12},e1={type:14},vs={type:23},t1={type:1},n1={type:25},a1={type:24},r1={type:26},i1={type:27},o1={type:28},s1={type:29},l1={type:31},Zd={type:32},E0=function(){function i(){this._value=[]}return i.prototype.write=function(r){this._value=this._value.concat(Xs(r))},i.prototype.read=function(){for(var r=[],s=this.consumeToken();s!==Zd;)r.push(s),s=this.consumeToken();return r},i.prototype.consumeToken=function(){var r=this.consumeCodePoint();switch(r){case xs:return this.consumeStringToken(xs);case ly:var s=this.peekCodePoint(0),o=this.peekCodePoint(1),d=this.peekCodePoint(2);if(vp(s)||na(o,d)){var u=ys(s,o,d)?iy:ry,h=this.consumeName();return{type:5,value:h,flags:u}}break;case cy:if(this.peekCodePoint(0)===Ei)return this.consumeCodePoint(),Jy;break;case ms:return this.consumeStringToken(ms);case Bs:return Vy;case Si:return Yy;case bd:if(this.peekCodePoint(0)===Ei)return this.consumeCodePoint(),e1;break;case Ea:if(wd(r,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(r),this.consumeNumericToken();break;case Cy:return Xy;case Ct:var B=r,m=this.peekCodePoint(0),w=this.peekCodePoint(1);if(wd(B,m,w))return this.reconsumeCodePoint(r),this.consumeNumericToken();if(ys(B,m,w))return this.reconsumeCodePoint(r),this.consumeIdentLikeToken();if(m===Ct&&w===gy)return this.consumeCodePoint(),this.consumeCodePoint(),a1;break;case Vi:if(wd(r,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(r),this.consumeNumericToken();break;case bp:if(this.peekCodePoint(0)===bd)for(this.consumeCodePoint();;){var Q=this.consumeCodePoint();if(Q===bd&&(Q=this.consumeCodePoint(),Q===bp))return this.consumeToken();if(Q===rn)return this.consumeToken()}break;case Qy:return r1;case Uy:return i1;case hy:if(this.peekCodePoint(0)===fy&&this.peekCodePoint(1)===Ct&&this.peekCodePoint(2)===Ct)return this.consumeCodePoint(),this.consumeCodePoint(),n1;break;case py:var F=this.peekCodePoint(0),N=this.peekCodePoint(1),eA=this.peekCodePoint(2);if(ys(F,N,eA)){var h=this.consumeName();return{type:7,value:h}}break;case xy:return o1;case Oi:if(na(r,this.peekCodePoint(0)))return this.reconsumeCodePoint(r),this.consumeIdentLikeToken();break;case my:return s1;case By:if(this.peekCodePoint(0)===Ei)return this.consumeCodePoint(),Zy;break;case by:return $y;case wy:return A1;case My:case Ty:var P=this.peekCodePoint(0),lA=this.peekCodePoint(1);return P===Ea&&(pr(lA)||lA===bs)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(r),this.consumeIdentLikeToken();case wp:if(this.peekCodePoint(0)===Ei)return this.consumeCodePoint(),Wy;if(this.peekCodePoint(0)===wp)return this.consumeCodePoint(),qy;break;case yy:if(this.peekCodePoint(0)===Ei)return this.consumeCodePoint(),Py;break;case rn:return Zd}return ws(r)?(this.consumeWhiteSpace(),l1):pt(r)?(this.reconsumeCodePoint(r),this.consumeNumericToken()):Is(r)?(this.reconsumeCodePoint(r),this.consumeIdentLikeToken()):{type:6,value:Ze(r)}},i.prototype.consumeCodePoint=function(){var r=this._value.shift();return typeof r>"u"?-1:r},i.prototype.reconsumeCodePoint=function(r){this._value.unshift(r)},i.prototype.peekCodePoint=function(r){return r>=this._value.length?-1:this._value[r]},i.prototype.consumeUnicodeRangeToken=function(){for(var r=[],s=this.consumeCodePoint();pr(s)&&r.length<6;)r.push(s),s=this.consumeCodePoint();for(var o=!1;s===bs&&r.length<6;)r.push(s),s=this.consumeCodePoint(),o=!0;if(o){var d=parseInt(Ze.apply(void 0,r.map(function(m){return m===bs?y0:m})),16),u=parseInt(Ze.apply(void 0,r.map(function(m){return m===bs?F0:m})),16);return{type:30,start:d,end:u}}var h=parseInt(Ze.apply(void 0,r),16);if(this.peekCodePoint(0)===Ct&&pr(this.peekCodePoint(1))){this.consumeCodePoint(),s=this.consumeCodePoint();for(var B=[];pr(s)&&B.length<6;)B.push(s),s=this.consumeCodePoint();var u=parseInt(Ze.apply(void 0,B),16);return{type:30,start:h,end:u}}else return{type:30,start:h,end:h}},i.prototype.consumeIdentLikeToken=function(){var r=this.consumeName();return r.toLowerCase()==="url"&&this.peekCodePoint(0)===Bs?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===Bs?(this.consumeCodePoint(),{type:19,value:r}):{type:20,value:r}},i.prototype.consumeUrlToken=function(){var r=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===rn)return{type:22,value:""};var s=this.peekCodePoint(0);if(s===ms||s===xs){var o=this.consumeStringToken(this.consumeCodePoint());return o.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===rn||this.peekCodePoint(0)===Si)?(this.consumeCodePoint(),{type:22,value:o.value}):(this.consumeBadUrlRemnants(),vs)}for(;;){var d=this.consumeCodePoint();if(d===rn||d===Si)return{type:22,value:Ze.apply(void 0,r)};if(ws(d))return this.consumeWhiteSpace(),this.peekCodePoint(0)===rn||this.peekCodePoint(0)===Si?(this.consumeCodePoint(),{type:22,value:Ze.apply(void 0,r)}):(this.consumeBadUrlRemnants(),vs);if(d===xs||d===ms||d===Bs||_y(d))return this.consumeBadUrlRemnants(),vs;if(d===Oi)if(na(d,this.peekCodePoint(0)))r.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),vs;else r.push(d)}},i.prototype.consumeWhiteSpace=function(){for(;ws(this.peekCodePoint(0));)this.consumeCodePoint()},i.prototype.consumeBadUrlRemnants=function(){for(;;){var r=this.consumeCodePoint();if(r===Si||r===rn)return;na(r,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},i.prototype.consumeStringSlice=function(r){for(var s=5e4,o="";r>0;){var d=Math.min(s,r);o+=Ze.apply(void 0,this._value.splice(0,d)),r-=d}return this._value.shift(),o},i.prototype.consumeStringToken=function(r){var s="",o=0;do{var d=this._value[o];if(d===rn||d===void 0||d===r)return s+=this.consumeStringSlice(o),{type:0,value:s};if(d===Ts)return this._value.splice(0,o),t1;if(d===Oi){var u=this._value[o+1];u!==rn&&u!==void 0&&(u===Ts?(s+=this.consumeStringSlice(o),o=-1,this._value.shift()):na(d,u)&&(s+=this.consumeStringSlice(o),s+=Ze(this.consumeEscapedCodePoint()),o=-1))}o++}while(!0)},i.prototype.consumeNumber=function(){var r=[],s=Ji,o=this.peekCodePoint(0);for((o===Ea||o===Ct)&&r.push(this.consumeCodePoint());pt(this.peekCodePoint(0));)r.push(this.consumeCodePoint());o=this.peekCodePoint(0);var d=this.peekCodePoint(1);if(o===Vi&&pt(d))for(r.push(this.consumeCodePoint(),this.consumeCodePoint()),s=Bp;pt(this.peekCodePoint(0));)r.push(this.consumeCodePoint());o=this.peekCodePoint(0),d=this.peekCodePoint(1);var u=this.peekCodePoint(2);if((o===U0||o===C0)&&((d===Ea||d===Ct)&&pt(u)||pt(d)))for(r.push(this.consumeCodePoint(),this.consumeCodePoint()),s=Bp;pt(this.peekCodePoint(0));)r.push(this.consumeCodePoint());return[Gy(r),s]},i.prototype.consumeNumericToken=function(){var r=this.consumeNumber(),s=r[0],o=r[1],d=this.peekCodePoint(0),u=this.peekCodePoint(1),h=this.peekCodePoint(2);if(ys(d,u,h)){var B=this.consumeName();return{type:15,number:s,flags:o,unit:B}}return d===dy?(this.consumeCodePoint(),{type:16,number:s,flags:o}):{type:17,number:s,flags:o}},i.prototype.consumeEscapedCodePoint=function(){var r=this.consumeCodePoint();if(pr(r)){for(var s=Ze(r);pr(this.peekCodePoint(0))&&s.length<6;)s+=Ze(this.consumeCodePoint());ws(this.peekCodePoint(0))&&this.consumeCodePoint();var o=parseInt(s,16);return o===0||Ly(o)||o>1114111?yp:o}return r===rn?yp:r},i.prototype.consumeName=function(){for(var r="";;){var s=this.consumeCodePoint();if(vp(s))r+=Ze(s);else if(na(s,this.peekCodePoint(0)))r+=Ze(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(s),r}},i}(),S0=function(){function i(r){this._tokens=r}return i.create=function(r){var s=new E0;return s.write(r),new i(s.read())},i.parseValue=function(r){return i.create(r).parseComponentValue()},i.parseValues=function(r){return i.create(r).parseComponentValues()},i.prototype.parseComponentValue=function(){for(var r=this.consumeToken();r.type===31;)r=this.consumeToken();if(r.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(r);var s=this.consumeComponentValue();do r=this.consumeToken();while(r.type===31);if(r.type===32)return s;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},i.prototype.parseComponentValues=function(){for(var r=[];;){var s=this.consumeComponentValue();if(s.type===32)return r;r.push(s),r.push()}},i.prototype.consumeComponentValue=function(){var r=this.consumeToken();switch(r.type){case 11:case 28:case 2:return this.consumeSimpleBlock(r.type);case 19:return this.consumeFunction(r)}return r},i.prototype.consumeSimpleBlock=function(r){for(var s={type:r,values:[]},o=this.consumeToken();;){if(o.type===32||d1(o,r))return s;this.reconsumeToken(o),s.values.push(this.consumeComponentValue()),o=this.consumeToken()}},i.prototype.consumeFunction=function(r){for(var s={name:r.value,values:[],type:18};;){var o=this.consumeToken();if(o.type===32||o.type===3)return s;this.reconsumeToken(o),s.values.push(this.consumeComponentValue())}},i.prototype.consumeToken=function(){var r=this._tokens.shift();return typeof r>"u"?Zd:r},i.prototype.reconsumeToken=function(r){this._tokens.unshift(r)},i}(),Zi=function(i){return i.type===15},Fr=function(i){return i.type===17},He=function(i){return i.type===20},c1=function(i){return i.type===0},qd=function(i,r){return He(i)&&i.value===r},j0=function(i){return i.type!==31},Cr=function(i){return i.type!==31&&i.type!==4},ln=function(i){var r=[],s=[];return i.forEach(function(o){if(o.type===4){if(s.length===0)throw new Error("Error parsing function args, zero tokens for arg");r.push(s),s=[];return}o.type!==31&&s.push(o)}),s.length&&r.push(s),r},d1=function(i,r){return r===11&&i.type===12||r===28&&i.type===29?!0:r===2&&i.type===3},la=function(i){return i.type===17||i.type===15},$e=function(i){return i.type===16||la(i)},H0=function(i){return i.length>1?[i[0],i[1]]:[i[0]]},dt={type:17,number:0,flags:Ji},cu={type:16,number:50,flags:Ji},ra={type:16,number:100,flags:Ji},Ti=function(i,r,s){var o=i[0],d=i[1];return[Te(o,r),Te(typeof d<"u"?d:o,s)]},Te=function(i,r){if(i.type===16)return i.number/100*r;if(Zi(i))switch(i.unit){case"rem":case"em":return 16*i.number;case"px":default:return i.number}return i.number},N0="deg",k0="grad",M0="rad",D0="turn",Js={name:"angle",parse:function(i,r){if(r.type===15)switch(r.unit){case N0:return Math.PI*r.number/180;case k0:return Math.PI/200*r.number;case M0:return r.number;case D0:return Math.PI*2*r.number}throw new Error("Unsupported angle type")}},T0=function(i){return i.type===15&&(i.unit===N0||i.unit===k0||i.unit===M0||i.unit===D0)},I0=function(i){var r=i.filter(He).map(function(s){return s.value}).join(" ");switch(r){case"to bottom right":case"to right bottom":case"left top":case"top left":return[dt,dt];case"to top":case"bottom":return Vt(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[dt,ra];case"to right":case"left":return Vt(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[ra,ra];case"to bottom":case"top":return Vt(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[ra,dt];case"to left":case"right":return Vt(270)}return 0},Vt=function(i){return Math.PI*i/180},oa={name:"color",parse:function(i,r){if(r.type===18){var s=u1[r.name];if(typeof s>"u")throw new Error('Attempting to parse an unsupported color function "'+r.name+'"');return s(i,r.values)}if(r.type===5){if(r.value.length===3){var o=r.value.substring(0,1),d=r.value.substring(1,2),u=r.value.substring(2,3);return ia(parseInt(o+o,16),parseInt(d+d,16),parseInt(u+u,16),1)}if(r.value.length===4){var o=r.value.substring(0,1),d=r.value.substring(1,2),u=r.value.substring(2,3),h=r.value.substring(3,4);return ia(parseInt(o+o,16),parseInt(d+d,16),parseInt(u+u,16),parseInt(h+h,16)/255)}if(r.value.length===6){var o=r.value.substring(0,2),d=r.value.substring(2,4),u=r.value.substring(4,6);return ia(parseInt(o,16),parseInt(d,16),parseInt(u,16),1)}if(r.value.length===8){var o=r.value.substring(0,2),d=r.value.substring(2,4),u=r.value.substring(4,6),h=r.value.substring(6,8);return ia(parseInt(o,16),parseInt(d,16),parseInt(u,16),parseInt(h,16)/255)}}if(r.type===20){var B=En[r.value.toUpperCase()];if(typeof B<"u")return B}return En.TRANSPARENT}},sa=function(i){return(255&i)===0},it=function(i){var r=255&i,s=255&i>>8,o=255&i>>16,d=255&i>>24;return r<255?"rgba("+d+","+o+","+s+","+r/255+")":"rgb("+d+","+o+","+s+")"},ia=function(i,r,s,o){return(i<<24|r<<16|s<<8|Math.round(o*255)<<0)>>>0},Cp=function(i,r){if(i.type===17)return i.number;if(i.type===16){var s=r===3?1:255;return r===3?i.number/100*s:Math.round(i.number/100*s)}return 0},Qp=function(i,r){var s=r.filter(Cr);if(s.length===3){var o=s.map(Cp),d=o[0],u=o[1],h=o[2];return ia(d,u,h,1)}if(s.length===4){var B=s.map(Cp),d=B[0],u=B[1],h=B[2],m=B[3];return ia(d,u,h,m)}return 0};function yd(i,r,s){return s<0&&(s+=1),s>=1&&(s-=1),s<1/6?(r-i)*s*6+i:s<1/2?r:s<2/3?(r-i)*6*(2/3-s)+i:i}var Up=function(i,r){var s=r.filter(Cr),o=s[0],d=s[1],u=s[2],h=s[3],B=(o.type===17?Vt(o.number):Js.parse(i,o))/(Math.PI*2),m=$e(d)?d.number/100:0,w=$e(u)?u.number/100:0,Q=typeof h<"u"&&$e(h)?Te(h,1):1;if(m===0)return ia(w*255,w*255,w*255,1);var F=w<=.5?w*(m+1):w+m-w*m,N=w*2-F,eA=yd(N,F,B+1/3),P=yd(N,F,B),lA=yd(N,F,B-1/3);return ia(eA*255,P*255,lA*255,Q)},u1={hsl:Up,hsla:Up,rgb:Qp,rgba:Qp},Ki=function(i,r){return oa.parse(i,S0.create(r).parseComponentValue())},En={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},f1={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(i,r){return r.map(function(s){if(He(s))switch(s.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},h1={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Zs=function(i,r){var s=oa.parse(i,r[0]),o=r[1];return o&&$e(o)?{color:s,stop:o}:{color:s,stop:null}},Fp=function(i,r){var s=i[0],o=i[i.length-1];s.stop===null&&(s.stop=dt),o.stop===null&&(o.stop=ra);for(var d=[],u=0,h=0;h<i.length;h++){var B=i[h].stop;if(B!==null){var m=Te(B,r);m>u?d.push(m):d.push(u),u=m}else d.push(null)}for(var w=null,h=0;h<d.length;h++){var Q=d[h];if(Q===null)w===null&&(w=h);else if(w!==null){for(var F=h-w,N=d[w-1],eA=(Q-N)/(F+1),P=1;P<=F;P++)d[w+P-1]=eA*P;w=null}}return i.map(function(lA,jA){var wA=lA.color;return{color:wA,stop:Math.max(Math.min(1,d[jA]/r),0)}})},g1=function(i,r,s){var o=r/2,d=s/2,u=Te(i[0],r)-o,h=d-Te(i[1],s);return(Math.atan2(h,u)+Math.PI*2)%(Math.PI*2)},p1=function(i,r,s){var o=typeof i=="number"?i:g1(i,r,s),d=Math.abs(r*Math.sin(o))+Math.abs(s*Math.cos(o)),u=r/2,h=s/2,B=d/2,m=Math.sin(o-Math.PI/2)*B,w=Math.cos(o-Math.PI/2)*B;return[d,u-w,u+w,h-m,h+m]},qt=function(i,r){return Math.sqrt(i*i+r*r)},Ep=function(i,r,s,o,d){var u=[[0,0],[0,r],[i,0],[i,r]];return u.reduce(function(h,B){var m=B[0],w=B[1],Q=qt(s-m,o-w);return(d?Q<h.optimumDistance:Q>h.optimumDistance)?{optimumCorner:B,optimumDistance:Q}:h},{optimumDistance:d?1/0:-1/0,optimumCorner:null}).optimumCorner},x1=function(i,r,s,o,d){var u=0,h=0;switch(i.size){case 0:i.shape===0?u=h=Math.min(Math.abs(r),Math.abs(r-o),Math.abs(s),Math.abs(s-d)):i.shape===1&&(u=Math.min(Math.abs(r),Math.abs(r-o)),h=Math.min(Math.abs(s),Math.abs(s-d)));break;case 2:if(i.shape===0)u=h=Math.min(qt(r,s),qt(r,s-d),qt(r-o,s),qt(r-o,s-d));else if(i.shape===1){var B=Math.min(Math.abs(s),Math.abs(s-d))/Math.min(Math.abs(r),Math.abs(r-o)),m=Ep(o,d,r,s,!0),w=m[0],Q=m[1];u=qt(w-r,(Q-s)/B),h=B*u}break;case 1:i.shape===0?u=h=Math.max(Math.abs(r),Math.abs(r-o),Math.abs(s),Math.abs(s-d)):i.shape===1&&(u=Math.max(Math.abs(r),Math.abs(r-o)),h=Math.max(Math.abs(s),Math.abs(s-d)));break;case 3:if(i.shape===0)u=h=Math.max(qt(r,s),qt(r,s-d),qt(r-o,s),qt(r-o,s-d));else if(i.shape===1){var B=Math.max(Math.abs(s),Math.abs(s-d))/Math.max(Math.abs(r),Math.abs(r-o)),F=Ep(o,d,r,s,!1),w=F[0],Q=F[1];u=qt(w-r,(Q-s)/B),h=B*u}break}return Array.isArray(i.size)&&(u=Te(i.size[0],o),h=i.size.length===2?Te(i.size[1],d):u),[u,h]},m1=function(i,r){var s=Vt(180),o=[];return ln(r).forEach(function(d,u){if(u===0){var h=d[0];if(h.type===20&&h.value==="to"){s=I0(d);return}else if(T0(h)){s=Js.parse(i,h);return}}var B=Zs(i,d);o.push(B)}),{angle:s,stops:o,type:1}},Cs=function(i,r){var s=Vt(180),o=[];return ln(r).forEach(function(d,u){if(u===0){var h=d[0];if(h.type===20&&["top","left","right","bottom"].indexOf(h.value)!==-1){s=I0(d);return}else if(T0(h)){s=(Js.parse(i,h)+Vt(270))%Vt(360);return}}var B=Zs(i,d);o.push(B)}),{angle:s,stops:o,type:1}},B1=function(i,r){var s=Vt(180),o=[],d=1,u=0,h=3,B=[];return ln(r).forEach(function(m,w){var Q=m[0];if(w===0){if(He(Q)&&Q.value==="linear"){d=1;return}else if(He(Q)&&Q.value==="radial"){d=2;return}}if(Q.type===18){if(Q.name==="from"){var F=oa.parse(i,Q.values[0]);o.push({stop:dt,color:F})}else if(Q.name==="to"){var F=oa.parse(i,Q.values[0]);o.push({stop:ra,color:F})}else if(Q.name==="color-stop"){var N=Q.values.filter(Cr);if(N.length===2){var F=oa.parse(i,N[1]),eA=N[0];Fr(eA)&&o.push({stop:{type:16,number:eA.number*100,flags:eA.flags},color:F})}}}}),d===1?{angle:(s+Vt(180))%Vt(360),stops:o,type:d}:{size:h,shape:u,stops:o,position:B,type:d}},L0="closest-side",O0="farthest-side",K0="closest-corner",R0="farthest-corner",z0="circle",_0="ellipse",G0="cover",V0="contain",b1=function(i,r){var s=0,o=3,d=[],u=[];return ln(r).forEach(function(h,B){var m=!0;if(B===0){var w=!1;m=h.reduce(function(F,N){if(w)if(He(N))switch(N.value){case"center":return u.push(cu),F;case"top":case"left":return u.push(dt),F;case"right":case"bottom":return u.push(ra),F}else($e(N)||la(N))&&u.push(N);else if(He(N))switch(N.value){case z0:return s=0,!1;case _0:return s=1,!1;case"at":return w=!0,!1;case L0:return o=0,!1;case G0:case O0:return o=1,!1;case V0:case K0:return o=2,!1;case R0:return o=3,!1}else if(la(N)||$e(N))return Array.isArray(o)||(o=[]),o.push(N),!1;return F},m)}if(m){var Q=Zs(i,h);d.push(Q)}}),{size:o,shape:s,stops:d,position:u,type:2}},Qs=function(i,r){var s=0,o=3,d=[],u=[];return ln(r).forEach(function(h,B){var m=!0;if(B===0?m=h.reduce(function(Q,F){if(He(F))switch(F.value){case"center":return u.push(cu),!1;case"top":case"left":return u.push(dt),!1;case"right":case"bottom":return u.push(ra),!1}else if($e(F)||la(F))return u.push(F),!1;return Q},m):B===1&&(m=h.reduce(function(Q,F){if(He(F))switch(F.value){case z0:return s=0,!1;case _0:return s=1,!1;case V0:case L0:return o=0,!1;case O0:return o=1,!1;case K0:return o=2,!1;case G0:case R0:return o=3,!1}else if(la(F)||$e(F))return Array.isArray(o)||(o=[]),o.push(F),!1;return Q},m)),m){var w=Zs(i,h);d.push(w)}}),{size:o,shape:s,stops:d,position:u,type:2}},w1=function(i){return i.type===1},y1=function(i){return i.type===2},du={name:"image",parse:function(i,r){if(r.type===22){var s={url:r.value,type:0};return i.cache.addImage(r.value),s}if(r.type===18){var o=Y0[r.name];if(typeof o>"u")throw new Error('Attempting to parse an unsupported image function "'+r.name+'"');return o(i,r.values)}throw new Error("Unsupported image type "+r.type)}};function v1(i){return!(i.type===20&&i.value==="none")&&(i.type!==18||!!Y0[i.name])}var Y0={"linear-gradient":m1,"-moz-linear-gradient":Cs,"-ms-linear-gradient":Cs,"-o-linear-gradient":Cs,"-webkit-linear-gradient":Cs,"radial-gradient":b1,"-moz-radial-gradient":Qs,"-ms-radial-gradient":Qs,"-o-radial-gradient":Qs,"-webkit-radial-gradient":Qs,"-webkit-gradient":B1},C1={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(i,r){if(r.length===0)return[];var s=r[0];return s.type===20&&s.value==="none"?[]:r.filter(function(o){return Cr(o)&&v1(o)}).map(function(o){return du.parse(i,o)})}},Q1={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(i,r){return r.map(function(s){if(He(s))switch(s.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},U1={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(i,r){return ln(r).map(function(s){return s.filter($e)}).map(H0)}},F1={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(i,r){return ln(r).map(function(s){return s.filter(He).map(function(o){return o.value}).join(" ")}).map(E1)}},E1=function(i){switch(i){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},vr;(function(i){i.AUTO="auto",i.CONTAIN="contain",i.COVER="cover"})(vr||(vr={}));var S1={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(i,r){return ln(r).map(function(s){return s.filter(j1)})}},j1=function(i){return He(i)||$e(i)},qs=function(i){return{name:"border-"+i+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},H1=qs("top"),N1=qs("right"),k1=qs("bottom"),M1=qs("left"),Ws=function(i){return{name:"border-radius-"+i,initialValue:"0 0",prefix:!1,type:1,parse:function(r,s){return H0(s.filter($e))}}},D1=Ws("top-left"),T1=Ws("top-right"),I1=Ws("bottom-right"),L1=Ws("bottom-left"),Ps=function(i){return{name:"border-"+i+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(r,s){switch(s){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},O1=Ps("top"),K1=Ps("right"),R1=Ps("bottom"),z1=Ps("left"),$s=function(i){return{name:"border-"+i+"-width",initialValue:"0",type:0,prefix:!1,parse:function(r,s){return Zi(s)?s.number:0}}},_1=$s("top"),G1=$s("right"),V1=$s("bottom"),Y1=$s("left"),X1={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},J1={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(i,r){switch(r){case"rtl":return 1;case"ltr":default:return 0}}},Z1={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(i,r){return r.filter(He).reduce(function(s,o){return s|q1(o.value)},0)}},q1=function(i){switch(i){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},W1={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(i,r){switch(r){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},P1={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(i,r){return r.type===20&&r.value==="normal"?0:r.type===17||r.type===15?r.number:0}},Ls;(function(i){i.NORMAL="normal",i.STRICT="strict"})(Ls||(Ls={}));var $1={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(i,r){switch(r){case"strict":return Ls.STRICT;case"normal":default:return Ls.NORMAL}}},Av={name:"line-height",initialValue:"normal",prefix:!1,type:4},Sp=function(i,r){return He(i)&&i.value==="normal"?1.2*r:i.type===17?r*i.number:$e(i)?Te(i,r):r},ev={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(i,r){return r.type===20&&r.value==="none"?null:du.parse(i,r)}},tv={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(i,r){switch(r){case"inside":return 0;case"outside":default:return 1}}},Wd={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(i,r){switch(r){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},Al=function(i){return{name:"margin-"+i,initialValue:"0",prefix:!1,type:4}},nv=Al("top"),av=Al("right"),rv=Al("bottom"),iv=Al("left"),ov={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(i,r){return r.filter(He).map(function(s){switch(s.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},sv={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(i,r){switch(r){case"break-word":return"break-word";case"normal":default:return"normal"}}},el=function(i){return{name:"padding-"+i,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},lv=el("top"),cv=el("right"),dv=el("bottom"),uv=el("left"),fv={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(i,r){switch(r){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},hv={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(i,r){switch(r){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},gv={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(i,r){return r.length===1&&qd(r[0],"none")?[]:ln(r).map(function(s){for(var o={color:En.TRANSPARENT,offsetX:dt,offsetY:dt,blur:dt},d=0,u=0;u<s.length;u++){var h=s[u];la(h)?(d===0?o.offsetX=h:d===1?o.offsetY=h:o.blur=h,d++):o.color=oa.parse(i,h)}return o})}},pv={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(i,r){switch(r){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},xv={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(i,r){if(r.type===20&&r.value==="none")return null;if(r.type===18){var s=bv[r.name];if(typeof s>"u")throw new Error('Attempting to parse an unsupported transform function "'+r.name+'"');return s(r.values)}return null}},mv=function(i){var r=i.filter(function(s){return s.type===17}).map(function(s){return s.number});return r.length===6?r:null},Bv=function(i){var r=i.filter(function(m){return m.type===17}).map(function(m){return m.number}),s=r[0],o=r[1];r[2],r[3];var d=r[4],u=r[5];r[6],r[7],r[8],r[9],r[10],r[11];var h=r[12],B=r[13];return r[14],r[15],r.length===16?[s,o,d,u,h,B]:null},bv={matrix:mv,matrix3d:Bv},jp={type:16,number:50,flags:Ji},wv=[jp,jp],yv={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(i,r){var s=r.filter($e);return s.length!==2?wv:[s[0],s[1]]}},vv={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(i,r){switch(r){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},Ri;(function(i){i.NORMAL="normal",i.BREAK_ALL="break-all",i.KEEP_ALL="keep-all"})(Ri||(Ri={}));var Cv={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(i,r){switch(r){case"break-all":return Ri.BREAK_ALL;case"keep-all":return Ri.KEEP_ALL;case"normal":default:return Ri.NORMAL}}},Qv={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(i,r){if(r.type===20)return{auto:!0,order:0};if(Fr(r))return{auto:!1,order:r.number};throw new Error("Invalid z-index number parsed")}},X0={name:"time",parse:function(i,r){if(r.type===15)switch(r.unit.toLowerCase()){case"s":return 1e3*r.number;case"ms":return r.number}throw new Error("Unsupported time type")}},Uv={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(i,r){return Fr(r)?r.number:1}},Fv={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Ev={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(i,r){return r.filter(He).map(function(s){switch(s.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(s){return s!==0})}},Sv={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(i,r){var s=[],o=[];return r.forEach(function(d){switch(d.type){case 20:case 0:s.push(d.value);break;case 17:s.push(d.number.toString());break;case 4:o.push(s.join(" ")),s.length=0;break}}),s.length&&o.push(s.join(" ")),o.map(function(d){return d.indexOf(" ")===-1?d:"'"+d+"'"})}},jv={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},Hv={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(i,r){if(Fr(r))return r.number;if(He(r))switch(r.value){case"bold":return 700;case"normal":default:return 400}return 400}},Nv={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(i,r){return r.filter(He).map(function(s){return s.value})}},kv={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(i,r){switch(r){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},tt=function(i,r){return(i&r)!==0},Mv={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(i,r){if(r.length===0)return[];var s=r[0];return s.type===20&&s.value==="none"?[]:r}},Dv={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(i,r){if(r.length===0)return null;var s=r[0];if(s.type===20&&s.value==="none")return null;for(var o=[],d=r.filter(j0),u=0;u<d.length;u++){var h=d[u],B=d[u+1];if(h.type===20){var m=B&&Fr(B)?B.number:1;o.push({counter:h.value,increment:m})}}return o}},Tv={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(i,r){if(r.length===0)return[];for(var s=[],o=r.filter(j0),d=0;d<o.length;d++){var u=o[d],h=o[d+1];if(He(u)&&u.value!=="none"){var B=h&&Fr(h)?h.number:0;s.push({counter:u.value,reset:B})}}return s}},Iv={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(i,r){return r.filter(Zi).map(function(s){return X0.parse(i,s)})}},Lv={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(i,r){if(r.length===0)return null;var s=r[0];if(s.type===20&&s.value==="none")return null;var o=[],d=r.filter(c1);if(d.length%2!==0)return null;for(var u=0;u<d.length;u+=2){var h=d[u].value,B=d[u+1].value;o.push({open:h,close:B})}return o}},Hp=function(i,r,s){if(!i)return"";var o=i[Math.min(r,i.length-1)];return o?s?o.open:o.close:""},Ov={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(i,r){return r.length===1&&qd(r[0],"none")?[]:ln(r).map(function(s){for(var o={color:255,offsetX:dt,offsetY:dt,blur:dt,spread:dt,inset:!1},d=0,u=0;u<s.length;u++){var h=s[u];qd(h,"inset")?o.inset=!0:la(h)?(d===0?o.offsetX=h:d===1?o.offsetY=h:d===2?o.blur=h:o.spread=h,d++):o.color=oa.parse(i,h)}return o})}},Kv={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(i,r){var s=[0,1,2],o=[];return r.filter(He).forEach(function(d){switch(d.value){case"stroke":o.push(1);break;case"fill":o.push(0);break;case"markers":o.push(2);break}}),s.forEach(function(d){o.indexOf(d)===-1&&o.push(d)}),o}},Rv={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},zv={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(i,r){return Zi(r)?r.number:0}},_v=function(){function i(r,s){var o,d;this.animationDuration=VA(r,Iv,s.animationDuration),this.backgroundClip=VA(r,f1,s.backgroundClip),this.backgroundColor=VA(r,h1,s.backgroundColor),this.backgroundImage=VA(r,C1,s.backgroundImage),this.backgroundOrigin=VA(r,Q1,s.backgroundOrigin),this.backgroundPosition=VA(r,U1,s.backgroundPosition),this.backgroundRepeat=VA(r,F1,s.backgroundRepeat),this.backgroundSize=VA(r,S1,s.backgroundSize),this.borderTopColor=VA(r,H1,s.borderTopColor),this.borderRightColor=VA(r,N1,s.borderRightColor),this.borderBottomColor=VA(r,k1,s.borderBottomColor),this.borderLeftColor=VA(r,M1,s.borderLeftColor),this.borderTopLeftRadius=VA(r,D1,s.borderTopLeftRadius),this.borderTopRightRadius=VA(r,T1,s.borderTopRightRadius),this.borderBottomRightRadius=VA(r,I1,s.borderBottomRightRadius),this.borderBottomLeftRadius=VA(r,L1,s.borderBottomLeftRadius),this.borderTopStyle=VA(r,O1,s.borderTopStyle),this.borderRightStyle=VA(r,K1,s.borderRightStyle),this.borderBottomStyle=VA(r,R1,s.borderBottomStyle),this.borderLeftStyle=VA(r,z1,s.borderLeftStyle),this.borderTopWidth=VA(r,_1,s.borderTopWidth),this.borderRightWidth=VA(r,G1,s.borderRightWidth),this.borderBottomWidth=VA(r,V1,s.borderBottomWidth),this.borderLeftWidth=VA(r,Y1,s.borderLeftWidth),this.boxShadow=VA(r,Ov,s.boxShadow),this.color=VA(r,X1,s.color),this.direction=VA(r,J1,s.direction),this.display=VA(r,Z1,s.display),this.float=VA(r,W1,s.cssFloat),this.fontFamily=VA(r,Sv,s.fontFamily),this.fontSize=VA(r,jv,s.fontSize),this.fontStyle=VA(r,kv,s.fontStyle),this.fontVariant=VA(r,Nv,s.fontVariant),this.fontWeight=VA(r,Hv,s.fontWeight),this.letterSpacing=VA(r,P1,s.letterSpacing),this.lineBreak=VA(r,$1,s.lineBreak),this.lineHeight=VA(r,Av,s.lineHeight),this.listStyleImage=VA(r,ev,s.listStyleImage),this.listStylePosition=VA(r,tv,s.listStylePosition),this.listStyleType=VA(r,Wd,s.listStyleType),this.marginTop=VA(r,nv,s.marginTop),this.marginRight=VA(r,av,s.marginRight),this.marginBottom=VA(r,rv,s.marginBottom),this.marginLeft=VA(r,iv,s.marginLeft),this.opacity=VA(r,Uv,s.opacity);var u=VA(r,ov,s.overflow);this.overflowX=u[0],this.overflowY=u[u.length>1?1:0],this.overflowWrap=VA(r,sv,s.overflowWrap),this.paddingTop=VA(r,lv,s.paddingTop),this.paddingRight=VA(r,cv,s.paddingRight),this.paddingBottom=VA(r,dv,s.paddingBottom),this.paddingLeft=VA(r,uv,s.paddingLeft),this.paintOrder=VA(r,Kv,s.paintOrder),this.position=VA(r,hv,s.position),this.textAlign=VA(r,fv,s.textAlign),this.textDecorationColor=VA(r,Fv,(o=s.textDecorationColor)!==null&&o!==void 0?o:s.color),this.textDecorationLine=VA(r,Ev,(d=s.textDecorationLine)!==null&&d!==void 0?d:s.textDecoration),this.textShadow=VA(r,gv,s.textShadow),this.textTransform=VA(r,pv,s.textTransform),this.transform=VA(r,xv,s.transform),this.transformOrigin=VA(r,yv,s.transformOrigin),this.visibility=VA(r,vv,s.visibility),this.webkitTextStrokeColor=VA(r,Rv,s.webkitTextStrokeColor),this.webkitTextStrokeWidth=VA(r,zv,s.webkitTextStrokeWidth),this.wordBreak=VA(r,Cv,s.wordBreak),this.zIndex=VA(r,Qv,s.zIndex)}return i.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},i.prototype.isTransparent=function(){return sa(this.backgroundColor)},i.prototype.isTransformed=function(){return this.transform!==null},i.prototype.isPositioned=function(){return this.position!==0},i.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},i.prototype.isFloating=function(){return this.float!==0},i.prototype.isInlineLevel=function(){return tt(this.display,4)||tt(this.display,33554432)||tt(this.display,268435456)||tt(this.display,536870912)||tt(this.display,67108864)||tt(this.display,134217728)},i}(),Gv=function(){function i(r,s){this.content=VA(r,Mv,s.content),this.quotes=VA(r,Lv,s.quotes)}return i}(),Np=function(){function i(r,s){this.counterIncrement=VA(r,Dv,s.counterIncrement),this.counterReset=VA(r,Tv,s.counterReset)}return i}(),VA=function(i,r,s){var o=new E0,d=s!==null&&typeof s<"u"?s.toString():r.initialValue;o.write(d);var u=new S0(o.read());switch(r.type){case 2:var h=u.parseComponentValue();return r.parse(i,He(h)?h.value:r.initialValue);case 0:return r.parse(i,u.parseComponentValue());case 1:return r.parse(i,u.parseComponentValues());case 4:return u.parseComponentValue();case 3:switch(r.format){case"angle":return Js.parse(i,u.parseComponentValue());case"color":return oa.parse(i,u.parseComponentValue());case"image":return du.parse(i,u.parseComponentValue());case"length":var B=u.parseComponentValue();return la(B)?B:dt;case"length-percentage":var m=u.parseComponentValue();return $e(m)?m:dt;case"time":return X0.parse(i,u.parseComponentValue())}break}},Vv="data-html2canvas-debug",Yv=function(i){var r=i.getAttribute(Vv);switch(r){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},Pd=function(i,r){var s=Yv(i);return s===1||r===s},cn=function(){function i(r,s){if(this.context=r,this.textNodes=[],this.elements=[],this.flags=0,Pd(s,3))debugger;this.styles=new _v(r,window.getComputedStyle(s,null)),eu(s)&&(this.styles.animationDuration.some(function(o){return o>0})&&(s.style.animationDuration="0s"),this.styles.transform!==null&&(s.style.transform="none")),this.bounds=Ys(this.context,s),Pd(s,4)&&(this.flags|=16)}return i}(),Xv="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",kp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ii=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Us=0;Us<kp.length;Us++)Ii[kp.charCodeAt(Us)]=Us;var Jv=function(i){var r=i.length*.75,s=i.length,o,d=0,u,h,B,m;i[i.length-1]==="="&&(r--,i[i.length-2]==="="&&r--);var w=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(r):new Array(r),Q=Array.isArray(w)?w:new Uint8Array(w);for(o=0;o<s;o+=4)u=Ii[i.charCodeAt(o)],h=Ii[i.charCodeAt(o+1)],B=Ii[i.charCodeAt(o+2)],m=Ii[i.charCodeAt(o+3)],Q[d++]=u<<2|h>>4,Q[d++]=(h&15)<<4|B>>2,Q[d++]=(B&3)<<6|m&63;return w},Zv=function(i){for(var r=i.length,s=[],o=0;o<r;o+=2)s.push(i[o+1]<<8|i[o]);return s},qv=function(i){for(var r=i.length,s=[],o=0;o<r;o+=4)s.push(i[o+3]<<24|i[o+2]<<16|i[o+1]<<8|i[o]);return s},ja=5,uu=11,vd=2,Wv=uu-ja,J0=65536>>ja,Pv=1<<ja,Cd=Pv-1,$v=1024>>ja,AC=J0+$v,eC=AC,tC=32,nC=eC+tC,aC=65536>>uu,rC=1<<Wv,iC=rC-1,Mp=function(i,r,s){return i.slice?i.slice(r,s):new Uint16Array(Array.prototype.slice.call(i,r,s))},oC=function(i,r,s){return i.slice?i.slice(r,s):new Uint32Array(Array.prototype.slice.call(i,r,s))},sC=function(i,r){var s=Jv(i),o=Array.isArray(s)?qv(s):new Uint32Array(s),d=Array.isArray(s)?Zv(s):new Uint16Array(s),u=24,h=Mp(d,u/2,o[4]/2),B=o[5]===2?Mp(d,(u+o[4])/2):oC(o,Math.ceil((u+o[4])/4));return new lC(o[0],o[1],o[2],o[3],h,B)},lC=function(){function i(r,s,o,d,u,h){this.initialValue=r,this.errorValue=s,this.highStart=o,this.highValueIndex=d,this.index=u,this.data=h}return i.prototype.get=function(r){var s;if(r>=0){if(r<55296||r>56319&&r<=65535)return s=this.index[r>>ja],s=(s<<vd)+(r&Cd),this.data[s];if(r<=65535)return s=this.index[J0+(r-55296>>ja)],s=(s<<vd)+(r&Cd),this.data[s];if(r<this.highStart)return s=nC-aC+(r>>uu),s=this.index[s],s+=r>>ja&iC,s=this.index[s],s=(s<<vd)+(r&Cd),this.data[s];if(r<=1114111)return this.data[this.highValueIndex]}return this.errorValue},i}(),Dp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",cC=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Fs=0;Fs<Dp.length;Fs++)cC[Dp.charCodeAt(Fs)]=Fs;var dC=1,Qd=2,Ud=3,Tp=4,Ip=5,uC=7,Lp=8,Fd=9,Ed=10,Op=11,Kp=12,Rp=13,zp=14,Sd=15,fC=function(i){for(var r=[],s=0,o=i.length;s<o;){var d=i.charCodeAt(s++);if(d>=55296&&d<=56319&&s<o){var u=i.charCodeAt(s++);(u&64512)===56320?r.push(((d&1023)<<10)+(u&1023)+65536):(r.push(d),s--)}else r.push(d)}return r},hC=function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];if(String.fromCodePoint)return String.fromCodePoint.apply(String,i);var s=i.length;if(!s)return"";for(var o=[],d=-1,u="";++d<s;){var h=i[d];h<=65535?o.push(h):(h-=65536,o.push((h>>10)+55296,h%1024+56320)),(d+1===s||o.length>16384)&&(u+=String.fromCharCode.apply(String,o),o.length=0)}return u},gC=sC(Xv),_t="×",jd="÷",pC=function(i){return gC.get(i)},xC=function(i,r,s){var o=s-2,d=r[o],u=r[s-1],h=r[s];if(u===Qd&&h===Ud)return _t;if(u===Qd||u===Ud||u===Tp||h===Qd||h===Ud||h===Tp)return jd;if(u===Lp&&[Lp,Fd,Op,Kp].indexOf(h)!==-1||(u===Op||u===Fd)&&(h===Fd||h===Ed)||(u===Kp||u===Ed)&&h===Ed||h===Rp||h===Ip||h===uC||u===dC)return _t;if(u===Rp&&h===zp){for(;d===Ip;)d=r[--o];if(d===zp)return _t}if(u===Sd&&h===Sd){for(var B=0;d===Sd;)B++,d=r[--o];if(B%2===0)return _t}return jd},mC=function(i){var r=fC(i),s=r.length,o=0,d=0,u=r.map(pC);return{next:function(){if(o>=s)return{done:!0,value:null};for(var h=_t;o<s&&(h=xC(r,u,++o))===_t;);if(h!==_t||o===s){var B=hC.apply(null,r.slice(d,o));return d=o,{value:B,done:!1}}return{done:!0,value:null}}}},BC=function(i){for(var r=mC(i),s=[],o;!(o=r.next()).done;)o.value&&s.push(o.value.slice());return s},bC=function(i){var r=123;if(i.createRange){var s=i.createRange();if(s.getBoundingClientRect){var o=i.createElement("boundtest");o.style.height=r+"px",o.style.display="block",i.body.appendChild(o),s.selectNode(o);var d=s.getBoundingClientRect(),u=Math.round(d.height);if(i.body.removeChild(o),u===r)return!0}}return!1},wC=function(i){var r=i.createElement("boundtest");r.style.width="50px",r.style.display="block",r.style.fontSize="12px",r.style.letterSpacing="0px",r.style.wordSpacing="0px",i.body.appendChild(r);var s=i.createRange();r.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var o=r.firstChild,d=Xs(o.data).map(function(m){return Ze(m)}),u=0,h={},B=d.every(function(m,w){s.setStart(o,u),s.setEnd(o,u+m.length);var Q=s.getBoundingClientRect();u+=m.length;var F=Q.x>h.x||Q.y>h.y;return h=Q,w===0?!0:F});return i.body.removeChild(r),B},yC=function(){return typeof new Image().crossOrigin<"u"},vC=function(){return typeof new XMLHttpRequest().responseType=="string"},CC=function(i){var r=new Image,s=i.createElement("canvas"),o=s.getContext("2d");if(!o)return!1;r.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{o.drawImage(r,0,0),s.toDataURL()}catch{return!1}return!0},_p=function(i){return i[0]===0&&i[1]===255&&i[2]===0&&i[3]===255},QC=function(i){var r=i.createElement("canvas"),s=100;r.width=s,r.height=s;var o=r.getContext("2d");if(!o)return Promise.reject(!1);o.fillStyle="rgb(0, 255, 0)",o.fillRect(0,0,s,s);var d=new Image,u=r.toDataURL();d.src=u;var h=$d(s,s,0,0,d);return o.fillStyle="red",o.fillRect(0,0,s,s),Gp(h).then(function(B){o.drawImage(B,0,0);var m=o.getImageData(0,0,s,s).data;o.fillStyle="red",o.fillRect(0,0,s,s);var w=i.createElement("div");return w.style.backgroundImage="url("+u+")",w.style.height=s+"px",_p(m)?Gp($d(s,s,0,0,w)):Promise.reject(!1)}).then(function(B){return o.drawImage(B,0,0),_p(o.getImageData(0,0,s,s).data)}).catch(function(){return!1})},$d=function(i,r,s,o,d){var u="http://www.w3.org/2000/svg",h=document.createElementNS(u,"svg"),B=document.createElementNS(u,"foreignObject");return h.setAttributeNS(null,"width",i.toString()),h.setAttributeNS(null,"height",r.toString()),B.setAttributeNS(null,"width","100%"),B.setAttributeNS(null,"height","100%"),B.setAttributeNS(null,"x",s.toString()),B.setAttributeNS(null,"y",o.toString()),B.setAttributeNS(null,"externalResourcesRequired","true"),h.appendChild(B),B.appendChild(d),h},Gp=function(i){return new Promise(function(r,s){var o=new Image;o.onload=function(){return r(o)},o.onerror=s,o.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(i))})},ct={get SUPPORT_RANGE_BOUNDS(){var i=bC(document);return Object.defineProperty(ct,"SUPPORT_RANGE_BOUNDS",{value:i}),i},get SUPPORT_WORD_BREAKING(){var i=ct.SUPPORT_RANGE_BOUNDS&&wC(document);return Object.defineProperty(ct,"SUPPORT_WORD_BREAKING",{value:i}),i},get SUPPORT_SVG_DRAWING(){var i=CC(document);return Object.defineProperty(ct,"SUPPORT_SVG_DRAWING",{value:i}),i},get SUPPORT_FOREIGNOBJECT_DRAWING(){var i=typeof Array.from=="function"&&typeof window.fetch=="function"?QC(document):Promise.resolve(!1);return Object.defineProperty(ct,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:i}),i},get SUPPORT_CORS_IMAGES(){var i=yC();return Object.defineProperty(ct,"SUPPORT_CORS_IMAGES",{value:i}),i},get SUPPORT_RESPONSE_TYPE(){var i=vC();return Object.defineProperty(ct,"SUPPORT_RESPONSE_TYPE",{value:i}),i},get SUPPORT_CORS_XHR(){var i="withCredentials"in new XMLHttpRequest;return Object.defineProperty(ct,"SUPPORT_CORS_XHR",{value:i}),i},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var i=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(ct,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:i}),i}},zi=function(){function i(r,s){this.text=r,this.bounds=s}return i}(),UC=function(i,r,s,o){var d=SC(r,s),u=[],h=0;return d.forEach(function(B){if(s.textDecorationLine.length||B.trim().length>0)if(ct.SUPPORT_RANGE_BOUNDS){var m=Vp(o,h,B.length).getClientRects();if(m.length>1){var w=fu(B),Q=0;w.forEach(function(N){u.push(new zi(N,Sn.fromDOMRectList(i,Vp(o,Q+h,N.length).getClientRects()))),Q+=N.length})}else u.push(new zi(B,Sn.fromDOMRectList(i,m)))}else{var F=o.splitText(B.length);u.push(new zi(B,FC(i,o))),o=F}else ct.SUPPORT_RANGE_BOUNDS||(o=o.splitText(B.length));h+=B.length}),u},FC=function(i,r){var s=r.ownerDocument;if(s){var o=s.createElement("html2canvaswrapper");o.appendChild(r.cloneNode(!0));var d=r.parentNode;if(d){d.replaceChild(o,r);var u=Ys(i,o);return o.firstChild&&d.replaceChild(o.firstChild,o),u}}return Sn.EMPTY},Vp=function(i,r,s){var o=i.ownerDocument;if(!o)throw new Error("Node has no owner document");var d=o.createRange();return d.setStart(i,r),d.setEnd(i,r+s),d},fu=function(i){if(ct.SUPPORT_NATIVE_TEXT_SEGMENTATION){var r=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(r.segment(i)).map(function(s){return s.segment})}return BC(i)},EC=function(i,r){if(ct.SUPPORT_NATIVE_TEXT_SEGMENTATION){var s=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(s.segment(i)).map(function(o){return o.segment})}return HC(i,r)},SC=function(i,r){return r.letterSpacing!==0?fu(i):EC(i,r)},jC=[32,160,4961,65792,65793,4153,4241],HC=function(i,r){for(var s=ay(i,{lineBreak:r.lineBreak,wordBreak:r.overflowWrap==="break-word"?"break-word":r.wordBreak}),o=[],d,u=function(){if(d.value){var h=d.value.slice(),B=Xs(h),m="";B.forEach(function(w){jC.indexOf(w)===-1?m+=Ze(w):(m.length&&o.push(m),o.push(Ze(w)),m="")}),m.length&&o.push(m)}};!(d=s.next()).done;)u();return o},NC=function(){function i(r,s,o){this.text=kC(s.data,o.textTransform),this.textBounds=UC(r,this.text,o,s)}return i}(),kC=function(i,r){switch(r){case 1:return i.toLowerCase();case 3:return i.replace(MC,DC);case 2:return i.toUpperCase();default:return i}},MC=/(^|\s|:|-|\(|\))([a-z])/g,DC=function(i,r,s){return i.length>0?r+s.toUpperCase():i},Z0=function(i){Wt(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.src=o.currentSrc||o.src,d.intrinsicWidth=o.naturalWidth,d.intrinsicHeight=o.naturalHeight,d.context.cache.addImage(d.src),d}return r}(cn),q0=function(i){Wt(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.canvas=o,d.intrinsicWidth=o.width,d.intrinsicHeight=o.height,d}return r}(cn),W0=function(i){Wt(r,i);function r(s,o){var d=i.call(this,s,o)||this,u=new XMLSerializer,h=Ys(s,o);return o.setAttribute("width",h.width+"px"),o.setAttribute("height",h.height+"px"),d.svg="data:image/svg+xml,"+encodeURIComponent(u.serializeToString(o)),d.intrinsicWidth=o.width.baseVal.value,d.intrinsicHeight=o.height.baseVal.value,d.context.cache.addImage(d.svg),d}return r}(cn),P0=function(i){Wt(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.value=o.value,d}return r}(cn),Au=function(i){Wt(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.start=o.start,d.reversed=typeof o.reversed=="boolean"&&o.reversed===!0,d}return r}(cn),TC=[{type:15,flags:0,unit:"px",number:3}],IC=[{type:16,flags:0,number:50}],LC=function(i){return i.width>i.height?new Sn(i.left+(i.width-i.height)/2,i.top,i.height,i.height):i.width<i.height?new Sn(i.left,i.top+(i.height-i.width)/2,i.width,i.width):i},OC=function(i){var r=i.type===KC?new Array(i.value.length+1).join("•"):i.value;return r.length===0?i.placeholder||"":r},Os="checkbox",Ks="radio",KC="password",Yp=707406591,hu=function(i){Wt(r,i);function r(s,o){var d=i.call(this,s,o)||this;switch(d.type=o.type.toLowerCase(),d.checked=o.checked,d.value=OC(o),(d.type===Os||d.type===Ks)&&(d.styles.backgroundColor=3739148031,d.styles.borderTopColor=d.styles.borderRightColor=d.styles.borderBottomColor=d.styles.borderLeftColor=2779096575,d.styles.borderTopWidth=d.styles.borderRightWidth=d.styles.borderBottomWidth=d.styles.borderLeftWidth=1,d.styles.borderTopStyle=d.styles.borderRightStyle=d.styles.borderBottomStyle=d.styles.borderLeftStyle=1,d.styles.backgroundClip=[0],d.styles.backgroundOrigin=[0],d.bounds=LC(d.bounds)),d.type){case Os:d.styles.borderTopRightRadius=d.styles.borderTopLeftRadius=d.styles.borderBottomRightRadius=d.styles.borderBottomLeftRadius=TC;break;case Ks:d.styles.borderTopRightRadius=d.styles.borderTopLeftRadius=d.styles.borderBottomRightRadius=d.styles.borderBottomLeftRadius=IC;break}return d}return r}(cn),$0=function(i){Wt(r,i);function r(s,o){var d=i.call(this,s,o)||this,u=o.options[o.selectedIndex||0];return d.value=u&&u.text||"",d}return r}(cn),Ax=function(i){Wt(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.value=o.value,d}return r}(cn),ex=function(i){Wt(r,i);function r(s,o){var d=i.call(this,s,o)||this;d.src=o.src,d.width=parseInt(o.width,10)||0,d.height=parseInt(o.height,10)||0,d.backgroundColor=d.styles.backgroundColor;try{if(o.contentWindow&&o.contentWindow.document&&o.contentWindow.document.documentElement){d.tree=nx(s,o.contentWindow.document.documentElement);var u=o.contentWindow.document.documentElement?Ki(s,getComputedStyle(o.contentWindow.document.documentElement).backgroundColor):En.TRANSPARENT,h=o.contentWindow.document.body?Ki(s,getComputedStyle(o.contentWindow.document.body).backgroundColor):En.TRANSPARENT;d.backgroundColor=sa(u)?sa(h)?d.styles.backgroundColor:h:u}}catch{}return d}return r}(cn),RC=["OL","UL","MENU"],Ms=function(i,r,s,o){for(var d=r.firstChild,u=void 0;d;d=u)if(u=d.nextSibling,ax(d)&&d.data.trim().length>0)s.textNodes.push(new NC(i,d,s.styles));else if(yr(d))if(sx(d)&&d.assignedNodes)d.assignedNodes().forEach(function(B){return Ms(i,B,s,o)});else{var h=tx(i,d);h.styles.isVisible()&&(zC(d,h,o)?h.flags|=4:_C(h.styles)&&(h.flags|=2),RC.indexOf(d.tagName)!==-1&&(h.flags|=8),s.elements.push(h),d.slot,d.shadowRoot?Ms(i,d.shadowRoot,h,o):!Rs(d)&&!rx(d)&&!zs(d)&&Ms(i,d,h,o))}},tx=function(i,r){return tu(r)?new Z0(i,r):ix(r)?new q0(i,r):rx(r)?new W0(i,r):GC(r)?new P0(i,r):VC(r)?new Au(i,r):YC(r)?new hu(i,r):zs(r)?new $0(i,r):Rs(r)?new Ax(i,r):ox(r)?new ex(i,r):new cn(i,r)},nx=function(i,r){var s=tx(i,r);return s.flags|=4,Ms(i,r,s,s),s},zC=function(i,r,s){return r.styles.isPositionedWithZIndex()||r.styles.opacity<1||r.styles.isTransformed()||gu(i)&&s.styles.isTransparent()},_C=function(i){return i.isPositioned()||i.isFloating()},ax=function(i){return i.nodeType===Node.TEXT_NODE},yr=function(i){return i.nodeType===Node.ELEMENT_NODE},eu=function(i){return yr(i)&&typeof i.style<"u"&&!Ds(i)},Ds=function(i){return typeof i.className=="object"},GC=function(i){return i.tagName==="LI"},VC=function(i){return i.tagName==="OL"},YC=function(i){return i.tagName==="INPUT"},XC=function(i){return i.tagName==="HTML"},rx=function(i){return i.tagName==="svg"},gu=function(i){return i.tagName==="BODY"},ix=function(i){return i.tagName==="CANVAS"},Xp=function(i){return i.tagName==="VIDEO"},tu=function(i){return i.tagName==="IMG"},ox=function(i){return i.tagName==="IFRAME"},Jp=function(i){return i.tagName==="STYLE"},JC=function(i){return i.tagName==="SCRIPT"},Rs=function(i){return i.tagName==="TEXTAREA"},zs=function(i){return i.tagName==="SELECT"},sx=function(i){return i.tagName==="SLOT"},Zp=function(i){return i.tagName.indexOf("-")>0},ZC=function(){function i(){this.counters={}}return i.prototype.getCounterValue=function(r){var s=this.counters[r];return s&&s.length?s[s.length-1]:1},i.prototype.getCounterValues=function(r){var s=this.counters[r];return s||[]},i.prototype.pop=function(r){var s=this;r.forEach(function(o){return s.counters[o].pop()})},i.prototype.parse=function(r){var s=this,o=r.counterIncrement,d=r.counterReset,u=!0;o!==null&&o.forEach(function(B){var m=s.counters[B.counter];m&&B.increment!==0&&(u=!1,m.length||m.push(1),m[Math.max(0,m.length-1)]+=B.increment)});var h=[];return u&&d.forEach(function(B){var m=s.counters[B.counter];h.push(B.counter),m||(m=s.counters[B.counter]=[]),m.push(B.reset)}),h},i}(),qp={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},Wp={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},qC={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},WC={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},xr=function(i,r,s,o,d,u){return i<r||i>s?Yi(i,d,u.length>0):o.integers.reduce(function(h,B,m){for(;i>=B;)i-=B,h+=o.values[m];return h},"")+u},lx=function(i,r,s,o){var d="";do s||i--,d=o(i)+d,i/=r;while(i*r>=r);return d},Je=function(i,r,s,o,d){var u=s-r+1;return(i<0?"-":"")+(lx(Math.abs(i),u,o,function(h){return Ze(Math.floor(h%u)+r)})+d)},Ua=function(i,r,s){s===void 0&&(s=". ");var o=r.length;return lx(Math.abs(i),o,!1,function(d){return r[Math.floor(d%o)]})+s},br=1,ea=2,ta=4,Li=8,Fn=function(i,r,s,o,d,u){if(i<-9999||i>9999)return Yi(i,4,d.length>0);var h=Math.abs(i),B=d;if(h===0)return r[0]+B;for(var m=0;h>0&&m<=4;m++){var w=h%10;w===0&&tt(u,br)&&B!==""?B=r[w]+B:w>1||w===1&&m===0||w===1&&m===1&&tt(u,ea)||w===1&&m===1&&tt(u,ta)&&i>100||w===1&&m>1&&tt(u,Li)?B=r[w]+(m>0?s[m-1]:"")+B:w===1&&m>0&&(B=s[m-1]+B),h=Math.floor(h/10)}return(i<0?o:"")+B},Pp="十百千萬",$p="拾佰仟萬",A0="マイナス",Hd="마이너스",Yi=function(i,r,s){var o=s?". ":"",d=s?"、":"",u=s?", ":"",h=s?" ":"";switch(r){case 0:return"•"+h;case 1:return"◦"+h;case 2:return"◾"+h;case 5:var B=Je(i,48,57,!0,o);return B.length<4?"0"+B:B;case 4:return Ua(i,"〇一二三四五六七八九",d);case 6:return xr(i,1,3999,qp,3,o).toLowerCase();case 7:return xr(i,1,3999,qp,3,o);case 8:return Je(i,945,969,!1,o);case 9:return Je(i,97,122,!1,o);case 10:return Je(i,65,90,!1,o);case 11:return Je(i,1632,1641,!0,o);case 12:case 49:return xr(i,1,9999,Wp,3,o);case 35:return xr(i,1,9999,Wp,3,o).toLowerCase();case 13:return Je(i,2534,2543,!0,o);case 14:case 30:return Je(i,6112,6121,!0,o);case 15:return Ua(i,"子丑寅卯辰巳午未申酉戌亥",d);case 16:return Ua(i,"甲乙丙丁戊己庚辛壬癸",d);case 17:case 48:return Fn(i,"零一二三四五六七八九",Pp,"負",d,ea|ta|Li);case 47:return Fn(i,"零壹貳參肆伍陸柒捌玖",$p,"負",d,br|ea|ta|Li);case 42:return Fn(i,"零一二三四五六七八九",Pp,"负",d,ea|ta|Li);case 41:return Fn(i,"零壹贰叁肆伍陆柒捌玖",$p,"负",d,br|ea|ta|Li);case 26:return Fn(i,"〇一二三四五六七八九","十百千万",A0,d,0);case 25:return Fn(i,"零壱弐参四伍六七八九","拾百千万",A0,d,br|ea|ta);case 31:return Fn(i,"영일이삼사오육칠팔구","십백천만",Hd,u,br|ea|ta);case 33:return Fn(i,"零一二三四五六七八九","十百千萬",Hd,u,0);case 32:return Fn(i,"零壹貳參四五六七八九","拾百千",Hd,u,br|ea|ta);case 18:return Je(i,2406,2415,!0,o);case 20:return xr(i,1,19999,WC,3,o);case 21:return Je(i,2790,2799,!0,o);case 22:return Je(i,2662,2671,!0,o);case 22:return xr(i,1,10999,qC,3,o);case 23:return Ua(i,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return Ua(i,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return Je(i,3302,3311,!0,o);case 28:return Ua(i,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",d);case 29:return Ua(i,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",d);case 34:return Je(i,3792,3801,!0,o);case 37:return Je(i,6160,6169,!0,o);case 38:return Je(i,4160,4169,!0,o);case 39:return Je(i,2918,2927,!0,o);case 40:return Je(i,1776,1785,!0,o);case 43:return Je(i,3046,3055,!0,o);case 44:return Je(i,3174,3183,!0,o);case 45:return Je(i,3664,3673,!0,o);case 46:return Je(i,3872,3881,!0,o);case 3:default:return Je(i,48,57,!0,o)}},cx="data-html2canvas-ignore",e0=function(){function i(r,s,o){if(this.context=r,this.options=o,this.scrolledElements=[],this.referenceElement=s,this.counters=new ZC,this.quoteDepth=0,!s.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(s.ownerDocument.documentElement,!1)}return i.prototype.toIFrame=function(r,s){var o=this,d=PC(r,s);if(!d.contentWindow)return Promise.reject("Unable to find iframe window");var u=r.defaultView.pageXOffset,h=r.defaultView.pageYOffset,B=d.contentWindow,m=B.document,w=e2(d).then(function(){return Bt(o,void 0,void 0,function(){var Q,F;return gt(this,function(N){switch(N.label){case 0:return this.scrolledElements.forEach(r2),B&&(B.scrollTo(s.left,s.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(B.scrollY!==s.top||B.scrollX!==s.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(B.scrollX-s.left,B.scrollY-s.top,0,0))),Q=this.options.onclone,F=this.clonedReferenceElement,typeof F>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:m.fonts&&m.fonts.ready?[4,m.fonts.ready]:[3,2];case 1:N.sent(),N.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,A2(m)]:[3,4];case 3:N.sent(),N.label=4;case 4:return typeof Q=="function"?[2,Promise.resolve().then(function(){return Q(m,F)}).then(function(){return d})]:[2,d]}})})});return m.open(),m.write(n2(document.doctype)+"<html></html>"),a2(this.referenceElement.ownerDocument,u,h),m.replaceChild(m.adoptNode(this.documentElement),m.documentElement),m.close(),w},i.prototype.createElementClone=function(r){if(Pd(r,2))debugger;if(ix(r))return this.createCanvasClone(r);if(Xp(r))return this.createVideoClone(r);if(Jp(r))return this.createStyleClone(r);var s=r.cloneNode(!1);return tu(s)&&(tu(r)&&r.currentSrc&&r.currentSrc!==r.src&&(s.src=r.currentSrc,s.srcset=""),s.loading==="lazy"&&(s.loading="eager")),Zp(s)?this.createCustomElementClone(s):s},i.prototype.createCustomElementClone=function(r){var s=document.createElement("html2canvascustomelement");return Nd(r.style,s),s},i.prototype.createStyleClone=function(r){try{var s=r.sheet;if(s&&s.cssRules){var o=[].slice.call(s.cssRules,0).reduce(function(u,h){return h&&typeof h.cssText=="string"?u+h.cssText:u},""),d=r.cloneNode(!1);return d.textContent=o,d}}catch(u){if(this.context.logger.error("Unable to access cssRules property",u),u.name!=="SecurityError")throw u}return r.cloneNode(!1)},i.prototype.createCanvasClone=function(r){var s;if(this.options.inlineImages&&r.ownerDocument){var o=r.ownerDocument.createElement("img");try{return o.src=r.toDataURL(),o}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",r)}}var d=r.cloneNode(!1);try{d.width=r.width,d.height=r.height;var u=r.getContext("2d"),h=d.getContext("2d");if(h)if(!this.options.allowTaint&&u)h.putImageData(u.getImageData(0,0,r.width,r.height),0,0);else{var B=(s=r.getContext("webgl2"))!==null&&s!==void 0?s:r.getContext("webgl");if(B){var m=B.getContextAttributes();m?.preserveDrawingBuffer===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",r)}h.drawImage(r,0,0)}return d}catch{this.context.logger.info("Unable to clone canvas as it is tainted",r)}return d},i.prototype.createVideoClone=function(r){var s=r.ownerDocument.createElement("canvas");s.width=r.offsetWidth,s.height=r.offsetHeight;var o=s.getContext("2d");try{return o&&(o.drawImage(r,0,0,s.width,s.height),this.options.allowTaint||o.getImageData(0,0,s.width,s.height)),s}catch{this.context.logger.info("Unable to clone video as it is tainted",r)}var d=r.ownerDocument.createElement("canvas");return d.width=r.offsetWidth,d.height=r.offsetHeight,d},i.prototype.appendChildNode=function(r,s,o){(!yr(s)||!JC(s)&&!s.hasAttribute(cx)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(s)))&&(!this.options.copyStyles||!yr(s)||!Jp(s))&&r.appendChild(this.cloneNode(s,o))},i.prototype.cloneChildNodes=function(r,s,o){for(var d=this,u=r.shadowRoot?r.shadowRoot.firstChild:r.firstChild;u;u=u.nextSibling)if(yr(u)&&sx(u)&&typeof u.assignedNodes=="function"){var h=u.assignedNodes();h.length&&h.forEach(function(B){return d.appendChildNode(s,B,o)})}else this.appendChildNode(s,u,o)},i.prototype.cloneNode=function(r,s){if(ax(r))return document.createTextNode(r.data);if(!r.ownerDocument)return r.cloneNode(!1);var o=r.ownerDocument.defaultView;if(o&&yr(r)&&(eu(r)||Ds(r))){var d=this.createElementClone(r);d.style.transitionProperty="none";var u=o.getComputedStyle(r),h=o.getComputedStyle(r,":before"),B=o.getComputedStyle(r,":after");this.referenceElement===r&&eu(d)&&(this.clonedReferenceElement=d),gu(d)&&s2(d);var m=this.counters.parse(new Np(this.context,u)),w=this.resolvePseudoContent(r,d,h,_i.BEFORE);Zp(r)&&(s=!0),Xp(r)||this.cloneChildNodes(r,d,s),w&&d.insertBefore(w,d.firstChild);var Q=this.resolvePseudoContent(r,d,B,_i.AFTER);return Q&&d.appendChild(Q),this.counters.pop(m),(u&&(this.options.copyStyles||Ds(r))&&!ox(r)||s)&&Nd(u,d),(r.scrollTop!==0||r.scrollLeft!==0)&&this.scrolledElements.push([d,r.scrollLeft,r.scrollTop]),(Rs(r)||zs(r))&&(Rs(d)||zs(d))&&(d.value=r.value),d}return r.cloneNode(!1)},i.prototype.resolvePseudoContent=function(r,s,o,d){var u=this;if(o){var h=o.content,B=s.ownerDocument;if(!(!B||!h||h==="none"||h==="-moz-alt-content"||o.display==="none")){this.counters.parse(new Np(this.context,o));var m=new Gv(this.context,o),w=B.createElement("html2canvaspseudoelement");Nd(o,w),m.content.forEach(function(F){if(F.type===0)w.appendChild(B.createTextNode(F.value));else if(F.type===22){var N=B.createElement("img");N.src=F.value,N.style.opacity="1",w.appendChild(N)}else if(F.type===18){if(F.name==="attr"){var eA=F.values.filter(He);eA.length&&w.appendChild(B.createTextNode(r.getAttribute(eA[0].value)||""))}else if(F.name==="counter"){var P=F.values.filter(Cr),lA=P[0],jA=P[1];if(lA&&He(lA)){var wA=u.counters.getCounterValue(lA.value),uA=jA&&He(jA)?Wd.parse(u.context,jA.value):3;w.appendChild(B.createTextNode(Yi(wA,uA,!1)))}}else if(F.name==="counters"){var kA=F.values.filter(Cr),lA=kA[0],sA=kA[1],jA=kA[2];if(lA&&He(lA)){var xA=u.counters.getCounterValues(lA.value),X=jA&&He(jA)?Wd.parse(u.context,jA.value):3,EA=sA&&sA.type===0?sA.value:"",z=xA.map(function(FA){return Yi(FA,X,!1)}).join(EA);w.appendChild(B.createTextNode(z))}}}else if(F.type===20)switch(F.value){case"open-quote":w.appendChild(B.createTextNode(Hp(m.quotes,u.quoteDepth++,!0)));break;case"close-quote":w.appendChild(B.createTextNode(Hp(m.quotes,--u.quoteDepth,!1)));break;default:w.appendChild(B.createTextNode(F.value))}}),w.className=nu+" "+au;var Q=d===_i.BEFORE?" "+nu:" "+au;return Ds(s)?s.className.baseValue+=Q:s.className+=Q,w}}},i.destroy=function(r){return r.parentNode?(r.parentNode.removeChild(r),!0):!1},i}(),_i;(function(i){i[i.BEFORE=0]="BEFORE",i[i.AFTER=1]="AFTER"})(_i||(_i={}));var PC=function(i,r){var s=i.createElement("iframe");return s.className="html2canvas-container",s.style.visibility="hidden",s.style.position="fixed",s.style.left="-10000px",s.style.top="0px",s.style.border="0",s.width=r.width.toString(),s.height=r.height.toString(),s.scrolling="no",s.setAttribute(cx,"true"),i.body.appendChild(s),s},$C=function(i){return new Promise(function(r){if(i.complete){r();return}if(!i.src){r();return}i.onload=r,i.onerror=r})},A2=function(i){return Promise.all([].slice.call(i.images,0).map($C))},e2=function(i){return new Promise(function(r,s){var o=i.contentWindow;if(!o)return s("No window assigned for iframe");var d=o.document;o.onload=i.onload=function(){o.onload=i.onload=null;var u=setInterval(function(){d.body.childNodes.length>0&&d.readyState==="complete"&&(clearInterval(u),r(i))},50)}})},t2=["all","d","content"],Nd=function(i,r){for(var s=i.length-1;s>=0;s--){var o=i.item(s);t2.indexOf(o)===-1&&r.style.setProperty(o,i.getPropertyValue(o))}return r},n2=function(i){var r="";return i&&(r+="<!DOCTYPE ",i.name&&(r+=i.name),i.internalSubset&&(r+=i.internalSubset),i.publicId&&(r+='"'+i.publicId+'"'),i.systemId&&(r+='"'+i.systemId+'"'),r+=">"),r},a2=function(i,r,s){i&&i.defaultView&&(r!==i.defaultView.pageXOffset||s!==i.defaultView.pageYOffset)&&i.defaultView.scrollTo(r,s)},r2=function(i){var r=i[0],s=i[1],o=i[2];r.scrollLeft=s,r.scrollTop=o},i2=":before",o2=":after",nu="___html2canvas___pseudoelement_before",au="___html2canvas___pseudoelement_after",t0=`{
    content: "" !important;
    display: none !important;
}`,s2=function(i){l2(i,"."+nu+i2+t0+`
         .`+au+o2+t0)},l2=function(i,r){var s=i.ownerDocument;if(s){var o=s.createElement("style");o.textContent=r,i.appendChild(o)}},dx=function(){function i(){}return i.getOrigin=function(r){var s=i._link;return s?(s.href=r,s.href=s.href,s.protocol+s.hostname+s.port):"about:blank"},i.isSameOrigin=function(r){return i.getOrigin(r)===i._origin},i.setContext=function(r){i._link=r.document.createElement("a"),i._origin=i.getOrigin(r.location.href)},i._origin="about:blank",i}(),c2=function(){function i(r,s){this.context=r,this._options=s,this._cache={}}return i.prototype.addImage=function(r){var s=Promise.resolve();return this.has(r)||(Md(r)||h2(r))&&(this._cache[r]=this.loadImage(r)).catch(function(){}),s},i.prototype.match=function(r){return this._cache[r]},i.prototype.loadImage=function(r){return Bt(this,void 0,void 0,function(){var s,o,d,u,h=this;return gt(this,function(B){switch(B.label){case 0:return s=dx.isSameOrigin(r),o=!kd(r)&&this._options.useCORS===!0&&ct.SUPPORT_CORS_IMAGES&&!s,d=!kd(r)&&!s&&!Md(r)&&typeof this._options.proxy=="string"&&ct.SUPPORT_CORS_XHR&&!o,!s&&this._options.allowTaint===!1&&!kd(r)&&!Md(r)&&!d&&!o?[2]:(u=r,d?[4,this.proxy(u)]:[3,2]);case 1:u=B.sent(),B.label=2;case 2:return this.context.logger.debug("Added image "+r.substring(0,256)),[4,new Promise(function(m,w){var Q=new Image;Q.onload=function(){return m(Q)},Q.onerror=w,(g2(u)||o)&&(Q.crossOrigin="anonymous"),Q.src=u,Q.complete===!0&&setTimeout(function(){return m(Q)},500),h._options.imageTimeout>0&&setTimeout(function(){return w("Timed out ("+h._options.imageTimeout+"ms) loading image")},h._options.imageTimeout)})];case 3:return[2,B.sent()]}})})},i.prototype.has=function(r){return typeof this._cache[r]<"u"},i.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},i.prototype.proxy=function(r){var s=this,o=this._options.proxy;if(!o)throw new Error("No proxy defined");var d=r.substring(0,256);return new Promise(function(u,h){var B=ct.SUPPORT_RESPONSE_TYPE?"blob":"text",m=new XMLHttpRequest;m.onload=function(){if(m.status===200)if(B==="text")u(m.response);else{var F=new FileReader;F.addEventListener("load",function(){return u(F.result)},!1),F.addEventListener("error",function(N){return h(N)},!1),F.readAsDataURL(m.response)}else h("Failed to proxy resource "+d+" with status code "+m.status)},m.onerror=h;var w=o.indexOf("?")>-1?"&":"?";if(m.open("GET",""+o+w+"url="+encodeURIComponent(r)+"&responseType="+B),B!=="text"&&m instanceof XMLHttpRequest&&(m.responseType=B),s._options.imageTimeout){var Q=s._options.imageTimeout;m.timeout=Q,m.ontimeout=function(){return h("Timed out ("+Q+"ms) proxying "+d)}}m.send()})},i}(),d2=/^data:image\/svg\+xml/i,u2=/^data:image\/.*;base64,/i,f2=/^data:image\/.*/i,h2=function(i){return ct.SUPPORT_SVG_DRAWING||!p2(i)},kd=function(i){return f2.test(i)},g2=function(i){return u2.test(i)},Md=function(i){return i.substr(0,4)==="blob"},p2=function(i){return i.substr(-3).toLowerCase()==="svg"||d2.test(i)},GA=function(){function i(r,s){this.type=0,this.x=r,this.y=s}return i.prototype.add=function(r,s){return new i(this.x+r,this.y+s)},i}(),mr=function(i,r,s){return new GA(i.x+(r.x-i.x)*s,i.y+(r.y-i.y)*s)},Es=function(){function i(r,s,o,d){this.type=1,this.start=r,this.startControl=s,this.endControl=o,this.end=d}return i.prototype.subdivide=function(r,s){var o=mr(this.start,this.startControl,r),d=mr(this.startControl,this.endControl,r),u=mr(this.endControl,this.end,r),h=mr(o,d,r),B=mr(d,u,r),m=mr(h,B,r);return s?new i(this.start,o,h,m):new i(m,B,u,this.end)},i.prototype.add=function(r,s){return new i(this.start.add(r,s),this.startControl.add(r,s),this.endControl.add(r,s),this.end.add(r,s))},i.prototype.reverse=function(){return new i(this.end,this.endControl,this.startControl,this.start)},i}(),Gt=function(i){return i.type===1},x2=function(){function i(r){var s=r.styles,o=r.bounds,d=Ti(s.borderTopLeftRadius,o.width,o.height),u=d[0],h=d[1],B=Ti(s.borderTopRightRadius,o.width,o.height),m=B[0],w=B[1],Q=Ti(s.borderBottomRightRadius,o.width,o.height),F=Q[0],N=Q[1],eA=Ti(s.borderBottomLeftRadius,o.width,o.height),P=eA[0],lA=eA[1],jA=[];jA.push((u+m)/o.width),jA.push((P+F)/o.width),jA.push((h+lA)/o.height),jA.push((w+N)/o.height);var wA=Math.max.apply(Math,jA);wA>1&&(u/=wA,h/=wA,m/=wA,w/=wA,F/=wA,N/=wA,P/=wA,lA/=wA);var uA=o.width-m,kA=o.height-N,sA=o.width-F,xA=o.height-lA,X=s.borderTopWidth,EA=s.borderRightWidth,z=s.borderBottomWidth,nA=s.borderLeftWidth,fA=Te(s.paddingTop,r.bounds.width),FA=Te(s.paddingRight,r.bounds.width),rA=Te(s.paddingBottom,r.bounds.width),LA=Te(s.paddingLeft,r.bounds.width);this.topLeftBorderDoubleOuterBox=u>0||h>0?Le(o.left+nA/3,o.top+X/3,u-nA/3,h-X/3,Ce.TOP_LEFT):new GA(o.left+nA/3,o.top+X/3),this.topRightBorderDoubleOuterBox=u>0||h>0?Le(o.left+uA,o.top+X/3,m-EA/3,w-X/3,Ce.TOP_RIGHT):new GA(o.left+o.width-EA/3,o.top+X/3),this.bottomRightBorderDoubleOuterBox=F>0||N>0?Le(o.left+sA,o.top+kA,F-EA/3,N-z/3,Ce.BOTTOM_RIGHT):new GA(o.left+o.width-EA/3,o.top+o.height-z/3),this.bottomLeftBorderDoubleOuterBox=P>0||lA>0?Le(o.left+nA/3,o.top+xA,P-nA/3,lA-z/3,Ce.BOTTOM_LEFT):new GA(o.left+nA/3,o.top+o.height-z/3),this.topLeftBorderDoubleInnerBox=u>0||h>0?Le(o.left+nA*2/3,o.top+X*2/3,u-nA*2/3,h-X*2/3,Ce.TOP_LEFT):new GA(o.left+nA*2/3,o.top+X*2/3),this.topRightBorderDoubleInnerBox=u>0||h>0?Le(o.left+uA,o.top+X*2/3,m-EA*2/3,w-X*2/3,Ce.TOP_RIGHT):new GA(o.left+o.width-EA*2/3,o.top+X*2/3),this.bottomRightBorderDoubleInnerBox=F>0||N>0?Le(o.left+sA,o.top+kA,F-EA*2/3,N-z*2/3,Ce.BOTTOM_RIGHT):new GA(o.left+o.width-EA*2/3,o.top+o.height-z*2/3),this.bottomLeftBorderDoubleInnerBox=P>0||lA>0?Le(o.left+nA*2/3,o.top+xA,P-nA*2/3,lA-z*2/3,Ce.BOTTOM_LEFT):new GA(o.left+nA*2/3,o.top+o.height-z*2/3),this.topLeftBorderStroke=u>0||h>0?Le(o.left+nA/2,o.top+X/2,u-nA/2,h-X/2,Ce.TOP_LEFT):new GA(o.left+nA/2,o.top+X/2),this.topRightBorderStroke=u>0||h>0?Le(o.left+uA,o.top+X/2,m-EA/2,w-X/2,Ce.TOP_RIGHT):new GA(o.left+o.width-EA/2,o.top+X/2),this.bottomRightBorderStroke=F>0||N>0?Le(o.left+sA,o.top+kA,F-EA/2,N-z/2,Ce.BOTTOM_RIGHT):new GA(o.left+o.width-EA/2,o.top+o.height-z/2),this.bottomLeftBorderStroke=P>0||lA>0?Le(o.left+nA/2,o.top+xA,P-nA/2,lA-z/2,Ce.BOTTOM_LEFT):new GA(o.left+nA/2,o.top+o.height-z/2),this.topLeftBorderBox=u>0||h>0?Le(o.left,o.top,u,h,Ce.TOP_LEFT):new GA(o.left,o.top),this.topRightBorderBox=m>0||w>0?Le(o.left+uA,o.top,m,w,Ce.TOP_RIGHT):new GA(o.left+o.width,o.top),this.bottomRightBorderBox=F>0||N>0?Le(o.left+sA,o.top+kA,F,N,Ce.BOTTOM_RIGHT):new GA(o.left+o.width,o.top+o.height),this.bottomLeftBorderBox=P>0||lA>0?Le(o.left,o.top+xA,P,lA,Ce.BOTTOM_LEFT):new GA(o.left,o.top+o.height),this.topLeftPaddingBox=u>0||h>0?Le(o.left+nA,o.top+X,Math.max(0,u-nA),Math.max(0,h-X),Ce.TOP_LEFT):new GA(o.left+nA,o.top+X),this.topRightPaddingBox=m>0||w>0?Le(o.left+Math.min(uA,o.width-EA),o.top+X,uA>o.width+EA?0:Math.max(0,m-EA),Math.max(0,w-X),Ce.TOP_RIGHT):new GA(o.left+o.width-EA,o.top+X),this.bottomRightPaddingBox=F>0||N>0?Le(o.left+Math.min(sA,o.width-nA),o.top+Math.min(kA,o.height-z),Math.max(0,F-EA),Math.max(0,N-z),Ce.BOTTOM_RIGHT):new GA(o.left+o.width-EA,o.top+o.height-z),this.bottomLeftPaddingBox=P>0||lA>0?Le(o.left+nA,o.top+Math.min(xA,o.height-z),Math.max(0,P-nA),Math.max(0,lA-z),Ce.BOTTOM_LEFT):new GA(o.left+nA,o.top+o.height-z),this.topLeftContentBox=u>0||h>0?Le(o.left+nA+LA,o.top+X+fA,Math.max(0,u-(nA+LA)),Math.max(0,h-(X+fA)),Ce.TOP_LEFT):new GA(o.left+nA+LA,o.top+X+fA),this.topRightContentBox=m>0||w>0?Le(o.left+Math.min(uA,o.width+nA+LA),o.top+X+fA,uA>o.width+nA+LA?0:m-nA+LA,w-(X+fA),Ce.TOP_RIGHT):new GA(o.left+o.width-(EA+FA),o.top+X+fA),this.bottomRightContentBox=F>0||N>0?Le(o.left+Math.min(sA,o.width-(nA+LA)),o.top+Math.min(kA,o.height+X+fA),Math.max(0,F-(EA+FA)),N-(z+rA),Ce.BOTTOM_RIGHT):new GA(o.left+o.width-(EA+FA),o.top+o.height-(z+rA)),this.bottomLeftContentBox=P>0||lA>0?Le(o.left+nA+LA,o.top+xA,Math.max(0,P-(nA+LA)),lA-(z+rA),Ce.BOTTOM_LEFT):new GA(o.left+nA+LA,o.top+o.height-(z+rA))}return i}(),Ce;(function(i){i[i.TOP_LEFT=0]="TOP_LEFT",i[i.TOP_RIGHT=1]="TOP_RIGHT",i[i.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",i[i.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(Ce||(Ce={}));var Le=function(i,r,s,o,d){var u=4*((Math.sqrt(2)-1)/3),h=s*u,B=o*u,m=i+s,w=r+o;switch(d){case Ce.TOP_LEFT:return new Es(new GA(i,w),new GA(i,w-B),new GA(m-h,r),new GA(m,r));case Ce.TOP_RIGHT:return new Es(new GA(i,r),new GA(i+h,r),new GA(m,w-B),new GA(m,w));case Ce.BOTTOM_RIGHT:return new Es(new GA(m,r),new GA(m,r+B),new GA(i+h,w),new GA(i,w));case Ce.BOTTOM_LEFT:default:return new Es(new GA(m,w),new GA(m-h,w),new GA(i,r+B),new GA(i,r))}},_s=function(i){return[i.topLeftBorderBox,i.topRightBorderBox,i.bottomRightBorderBox,i.bottomLeftBorderBox]},m2=function(i){return[i.topLeftContentBox,i.topRightContentBox,i.bottomRightContentBox,i.bottomLeftContentBox]},Gs=function(i){return[i.topLeftPaddingBox,i.topRightPaddingBox,i.bottomRightPaddingBox,i.bottomLeftPaddingBox]},B2=function(){function i(r,s,o){this.offsetX=r,this.offsetY=s,this.matrix=o,this.type=0,this.target=6}return i}(),Ss=function(){function i(r,s){this.path=r,this.target=s,this.type=1}return i}(),b2=function(){function i(r){this.opacity=r,this.type=2,this.target=6}return i}(),w2=function(i){return i.type===0},ux=function(i){return i.type===1},y2=function(i){return i.type===2},n0=function(i,r){return i.length===r.length?i.some(function(s,o){return s===r[o]}):!1},v2=function(i,r,s,o,d){return i.map(function(u,h){switch(h){case 0:return u.add(r,s);case 1:return u.add(r+o,s);case 2:return u.add(r+o,s+d);case 3:return u.add(r,s+d)}return u})},fx=function(){function i(r){this.element=r,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return i}(),hx=function(){function i(r,s){if(this.container=r,this.parent=s,this.effects=[],this.curves=new x2(this.container),this.container.styles.opacity<1&&this.effects.push(new b2(this.container.styles.opacity)),this.container.styles.transform!==null){var o=this.container.bounds.left+this.container.styles.transformOrigin[0].number,d=this.container.bounds.top+this.container.styles.transformOrigin[1].number,u=this.container.styles.transform;this.effects.push(new B2(o,d,u))}if(this.container.styles.overflowX!==0){var h=_s(this.curves),B=Gs(this.curves);n0(h,B)?this.effects.push(new Ss(h,6)):(this.effects.push(new Ss(h,2)),this.effects.push(new Ss(B,4)))}}return i.prototype.getEffects=function(r){for(var s=[2,3].indexOf(this.container.styles.position)===-1,o=this.parent,d=this.effects.slice(0);o;){var u=o.effects.filter(function(m){return!ux(m)});if(s||o.container.styles.position!==0||!o.parent){if(d.unshift.apply(d,u),s=[2,3].indexOf(o.container.styles.position)===-1,o.container.styles.overflowX!==0){var h=_s(o.curves),B=Gs(o.curves);n0(h,B)||d.unshift(new Ss(B,6))}}else d.unshift.apply(d,u);o=o.parent}return d.filter(function(m){return tt(m.target,r)})},i}(),ru=function(i,r,s,o){i.container.elements.forEach(function(d){var u=tt(d.flags,4),h=tt(d.flags,2),B=new hx(d,i);tt(d.styles.display,2048)&&o.push(B);var m=tt(d.flags,8)?[]:o;if(u||h){var w=u||d.styles.isPositioned()?s:r,Q=new fx(B);if(d.styles.isPositioned()||d.styles.opacity<1||d.styles.isTransformed()){var F=d.styles.zIndex.order;if(F<0){var N=0;w.negativeZIndex.some(function(P,lA){return F>P.element.container.styles.zIndex.order?(N=lA,!1):N>0}),w.negativeZIndex.splice(N,0,Q)}else if(F>0){var eA=0;w.positiveZIndex.some(function(P,lA){return F>=P.element.container.styles.zIndex.order?(eA=lA+1,!1):eA>0}),w.positiveZIndex.splice(eA,0,Q)}else w.zeroOrAutoZIndexOrTransformedOrOpacity.push(Q)}else d.styles.isFloating()?w.nonPositionedFloats.push(Q):w.nonPositionedInlineLevel.push(Q);ru(B,Q,u?Q:s,m)}else d.styles.isInlineLevel()?r.inlineLevel.push(B):r.nonInlineLevel.push(B),ru(B,r,s,m);tt(d.flags,8)&&gx(d,m)})},gx=function(i,r){for(var s=i instanceof Au?i.start:1,o=i instanceof Au?i.reversed:!1,d=0;d<r.length;d++){var u=r[d];u.container instanceof P0&&typeof u.container.value=="number"&&u.container.value!==0&&(s=u.container.value),u.listValue=Yi(s,u.container.styles.listStyleType,!0),s+=o?-1:1}},C2=function(i){var r=new hx(i,null),s=new fx(r),o=[];return ru(r,s,s,o),gx(r.container,o),s},a0=function(i,r){switch(r){case 0:return Yt(i.topLeftBorderBox,i.topLeftPaddingBox,i.topRightBorderBox,i.topRightPaddingBox);case 1:return Yt(i.topRightBorderBox,i.topRightPaddingBox,i.bottomRightBorderBox,i.bottomRightPaddingBox);case 2:return Yt(i.bottomRightBorderBox,i.bottomRightPaddingBox,i.bottomLeftBorderBox,i.bottomLeftPaddingBox);case 3:default:return Yt(i.bottomLeftBorderBox,i.bottomLeftPaddingBox,i.topLeftBorderBox,i.topLeftPaddingBox)}},Q2=function(i,r){switch(r){case 0:return Yt(i.topLeftBorderBox,i.topLeftBorderDoubleOuterBox,i.topRightBorderBox,i.topRightBorderDoubleOuterBox);case 1:return Yt(i.topRightBorderBox,i.topRightBorderDoubleOuterBox,i.bottomRightBorderBox,i.bottomRightBorderDoubleOuterBox);case 2:return Yt(i.bottomRightBorderBox,i.bottomRightBorderDoubleOuterBox,i.bottomLeftBorderBox,i.bottomLeftBorderDoubleOuterBox);case 3:default:return Yt(i.bottomLeftBorderBox,i.bottomLeftBorderDoubleOuterBox,i.topLeftBorderBox,i.topLeftBorderDoubleOuterBox)}},U2=function(i,r){switch(r){case 0:return Yt(i.topLeftBorderDoubleInnerBox,i.topLeftPaddingBox,i.topRightBorderDoubleInnerBox,i.topRightPaddingBox);case 1:return Yt(i.topRightBorderDoubleInnerBox,i.topRightPaddingBox,i.bottomRightBorderDoubleInnerBox,i.bottomRightPaddingBox);case 2:return Yt(i.bottomRightBorderDoubleInnerBox,i.bottomRightPaddingBox,i.bottomLeftBorderDoubleInnerBox,i.bottomLeftPaddingBox);case 3:default:return Yt(i.bottomLeftBorderDoubleInnerBox,i.bottomLeftPaddingBox,i.topLeftBorderDoubleInnerBox,i.topLeftPaddingBox)}},F2=function(i,r){switch(r){case 0:return js(i.topLeftBorderStroke,i.topRightBorderStroke);case 1:return js(i.topRightBorderStroke,i.bottomRightBorderStroke);case 2:return js(i.bottomRightBorderStroke,i.bottomLeftBorderStroke);case 3:default:return js(i.bottomLeftBorderStroke,i.topLeftBorderStroke)}},js=function(i,r){var s=[];return Gt(i)?s.push(i.subdivide(.5,!1)):s.push(i),Gt(r)?s.push(r.subdivide(.5,!0)):s.push(r),s},Yt=function(i,r,s,o){var d=[];return Gt(i)?d.push(i.subdivide(.5,!1)):d.push(i),Gt(s)?d.push(s.subdivide(.5,!0)):d.push(s),Gt(o)?d.push(o.subdivide(.5,!0).reverse()):d.push(o),Gt(r)?d.push(r.subdivide(.5,!1).reverse()):d.push(r),d},px=function(i){var r=i.bounds,s=i.styles;return r.add(s.borderLeftWidth,s.borderTopWidth,-(s.borderRightWidth+s.borderLeftWidth),-(s.borderTopWidth+s.borderBottomWidth))},Vs=function(i){var r=i.styles,s=i.bounds,o=Te(r.paddingLeft,s.width),d=Te(r.paddingRight,s.width),u=Te(r.paddingTop,s.width),h=Te(r.paddingBottom,s.width);return s.add(o+r.borderLeftWidth,u+r.borderTopWidth,-(r.borderRightWidth+r.borderLeftWidth+o+d),-(r.borderTopWidth+r.borderBottomWidth+u+h))},E2=function(i,r){return i===0?r.bounds:i===2?Vs(r):px(r)},S2=function(i,r){return i===0?r.bounds:i===2?Vs(r):px(r)},Dd=function(i,r,s){var o=E2(wr(i.styles.backgroundOrigin,r),i),d=S2(wr(i.styles.backgroundClip,r),i),u=j2(wr(i.styles.backgroundSize,r),s,o),h=u[0],B=u[1],m=Ti(wr(i.styles.backgroundPosition,r),o.width-h,o.height-B),w=H2(wr(i.styles.backgroundRepeat,r),m,u,o,d),Q=Math.round(o.left+m[0]),F=Math.round(o.top+m[1]);return[w,Q,F,h,B]},Br=function(i){return He(i)&&i.value===vr.AUTO},Hs=function(i){return typeof i=="number"},j2=function(i,r,s){var o=r[0],d=r[1],u=r[2],h=i[0],B=i[1];if(!h)return[0,0];if($e(h)&&B&&$e(B))return[Te(h,s.width),Te(B,s.height)];var m=Hs(u);if(He(h)&&(h.value===vr.CONTAIN||h.value===vr.COVER)){if(Hs(u)){var w=s.width/s.height;return w<u!=(h.value===vr.COVER)?[s.width,s.width/u]:[s.height*u,s.height]}return[s.width,s.height]}var Q=Hs(o),F=Hs(d),N=Q||F;if(Br(h)&&(!B||Br(B))){if(Q&&F)return[o,d];if(!m&&!N)return[s.width,s.height];if(N&&m){var eA=Q?o:d*u,P=F?d:o/u;return[eA,P]}var lA=Q?o:s.width,jA=F?d:s.height;return[lA,jA]}if(m){var wA=0,uA=0;return $e(h)?wA=Te(h,s.width):$e(B)&&(uA=Te(B,s.height)),Br(h)?wA=uA*u:(!B||Br(B))&&(uA=wA/u),[wA,uA]}var kA=null,sA=null;if($e(h)?kA=Te(h,s.width):B&&$e(B)&&(sA=Te(B,s.height)),kA!==null&&(!B||Br(B))&&(sA=Q&&F?kA/o*d:s.height),sA!==null&&Br(h)&&(kA=Q&&F?sA/d*o:s.width),kA!==null&&sA!==null)return[kA,sA];throw new Error("Unable to calculate background-size for element")},wr=function(i,r){var s=i[r];return typeof s>"u"?i[0]:s},H2=function(i,r,s,o,d){var u=r[0],h=r[1],B=s[0],m=s[1];switch(i){case 2:return[new GA(Math.round(o.left),Math.round(o.top+h)),new GA(Math.round(o.left+o.width),Math.round(o.top+h)),new GA(Math.round(o.left+o.width),Math.round(m+o.top+h)),new GA(Math.round(o.left),Math.round(m+o.top+h))];case 3:return[new GA(Math.round(o.left+u),Math.round(o.top)),new GA(Math.round(o.left+u+B),Math.round(o.top)),new GA(Math.round(o.left+u+B),Math.round(o.height+o.top)),new GA(Math.round(o.left+u),Math.round(o.height+o.top))];case 1:return[new GA(Math.round(o.left+u),Math.round(o.top+h)),new GA(Math.round(o.left+u+B),Math.round(o.top+h)),new GA(Math.round(o.left+u+B),Math.round(o.top+h+m)),new GA(Math.round(o.left+u),Math.round(o.top+h+m))];default:return[new GA(Math.round(d.left),Math.round(d.top)),new GA(Math.round(d.left+d.width),Math.round(d.top)),new GA(Math.round(d.left+d.width),Math.round(d.height+d.top)),new GA(Math.round(d.left),Math.round(d.height+d.top))]}},N2="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",r0="Hidden Text",k2=function(){function i(r){this._data={},this._document=r}return i.prototype.parseMetrics=function(r,s){var o=this._document.createElement("div"),d=this._document.createElement("img"),u=this._document.createElement("span"),h=this._document.body;o.style.visibility="hidden",o.style.fontFamily=r,o.style.fontSize=s,o.style.margin="0",o.style.padding="0",o.style.whiteSpace="nowrap",h.appendChild(o),d.src=N2,d.width=1,d.height=1,d.style.margin="0",d.style.padding="0",d.style.verticalAlign="baseline",u.style.fontFamily=r,u.style.fontSize=s,u.style.margin="0",u.style.padding="0",u.appendChild(this._document.createTextNode(r0)),o.appendChild(u),o.appendChild(d);var B=d.offsetTop-u.offsetTop+2;o.removeChild(u),o.appendChild(this._document.createTextNode(r0)),o.style.lineHeight="normal",d.style.verticalAlign="super";var m=d.offsetTop-o.offsetTop+2;return h.removeChild(o),{baseline:B,middle:m}},i.prototype.getMetrics=function(r,s){var o=r+" "+s;return typeof this._data[o]>"u"&&(this._data[o]=this.parseMetrics(r,s)),this._data[o]},i}(),xx=function(){function i(r,s){this.context=r,this.options=s}return i}(),M2=1e4,D2=function(i){Wt(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d._activeEffects=[],d.canvas=o.canvas?o.canvas:document.createElement("canvas"),d.ctx=d.canvas.getContext("2d"),o.canvas||(d.canvas.width=Math.floor(o.width*o.scale),d.canvas.height=Math.floor(o.height*o.scale),d.canvas.style.width=o.width+"px",d.canvas.style.height=o.height+"px"),d.fontMetrics=new k2(document),d.ctx.scale(d.options.scale,d.options.scale),d.ctx.translate(-o.x,-o.y),d.ctx.textBaseline="bottom",d._activeEffects=[],d.context.logger.debug("Canvas renderer initialized ("+o.width+"x"+o.height+") with scale "+o.scale),d}return r.prototype.applyEffects=function(s){for(var o=this;this._activeEffects.length;)this.popEffect();s.forEach(function(d){return o.applyEffect(d)})},r.prototype.applyEffect=function(s){this.ctx.save(),y2(s)&&(this.ctx.globalAlpha=s.opacity),w2(s)&&(this.ctx.translate(s.offsetX,s.offsetY),this.ctx.transform(s.matrix[0],s.matrix[1],s.matrix[2],s.matrix[3],s.matrix[4],s.matrix[5]),this.ctx.translate(-s.offsetX,-s.offsetY)),ux(s)&&(this.path(s.path),this.ctx.clip()),this._activeEffects.push(s)},r.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},r.prototype.renderStack=function(s){return Bt(this,void 0,void 0,function(){var o;return gt(this,function(d){switch(d.label){case 0:return o=s.element.container.styles,o.isVisible()?[4,this.renderStackContent(s)]:[3,2];case 1:d.sent(),d.label=2;case 2:return[2]}})})},r.prototype.renderNode=function(s){return Bt(this,void 0,void 0,function(){return gt(this,function(o){switch(o.label){case 0:if(tt(s.container.flags,16))debugger;return s.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(s)]:[3,3];case 1:return o.sent(),[4,this.renderNodeContent(s)];case 2:o.sent(),o.label=3;case 3:return[2]}})})},r.prototype.renderTextWithLetterSpacing=function(s,o,d){var u=this;if(o===0)this.ctx.fillText(s.text,s.bounds.left,s.bounds.top+d);else{var h=fu(s.text);h.reduce(function(B,m){return u.ctx.fillText(m,B,s.bounds.top+d),B+u.ctx.measureText(m).width},s.bounds.left)}},r.prototype.createFontStyle=function(s){var o=s.fontVariant.filter(function(h){return h==="normal"||h==="small-caps"}).join(""),d=K2(s.fontFamily).join(", "),u=Zi(s.fontSize)?""+s.fontSize.number+s.fontSize.unit:s.fontSize.number+"px";return[[s.fontStyle,o,s.fontWeight,u,d].join(" "),d,u]},r.prototype.renderTextNode=function(s,o){return Bt(this,void 0,void 0,function(){var d,u,h,B,m,w,Q,F,N=this;return gt(this,function(eA){return d=this.createFontStyle(o),u=d[0],h=d[1],B=d[2],this.ctx.font=u,this.ctx.direction=o.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",m=this.fontMetrics.getMetrics(h,B),w=m.baseline,Q=m.middle,F=o.paintOrder,s.textBounds.forEach(function(P){F.forEach(function(lA){switch(lA){case 0:N.ctx.fillStyle=it(o.color),N.renderTextWithLetterSpacing(P,o.letterSpacing,w);var jA=o.textShadow;jA.length&&P.text.trim().length&&(jA.slice(0).reverse().forEach(function(wA){N.ctx.shadowColor=it(wA.color),N.ctx.shadowOffsetX=wA.offsetX.number*N.options.scale,N.ctx.shadowOffsetY=wA.offsetY.number*N.options.scale,N.ctx.shadowBlur=wA.blur.number,N.renderTextWithLetterSpacing(P,o.letterSpacing,w)}),N.ctx.shadowColor="",N.ctx.shadowOffsetX=0,N.ctx.shadowOffsetY=0,N.ctx.shadowBlur=0),o.textDecorationLine.length&&(N.ctx.fillStyle=it(o.textDecorationColor||o.color),o.textDecorationLine.forEach(function(wA){switch(wA){case 1:N.ctx.fillRect(P.bounds.left,Math.round(P.bounds.top+w),P.bounds.width,1);break;case 2:N.ctx.fillRect(P.bounds.left,Math.round(P.bounds.top),P.bounds.width,1);break;case 3:N.ctx.fillRect(P.bounds.left,Math.ceil(P.bounds.top+Q),P.bounds.width,1);break}}));break;case 1:o.webkitTextStrokeWidth&&P.text.trim().length&&(N.ctx.strokeStyle=it(o.webkitTextStrokeColor),N.ctx.lineWidth=o.webkitTextStrokeWidth,N.ctx.lineJoin=window.chrome?"miter":"round",N.ctx.strokeText(P.text,P.bounds.left,P.bounds.top+w)),N.ctx.strokeStyle="",N.ctx.lineWidth=0,N.ctx.lineJoin="miter";break}})}),[2]})})},r.prototype.renderReplacedElement=function(s,o,d){if(d&&s.intrinsicWidth>0&&s.intrinsicHeight>0){var u=Vs(s),h=Gs(o);this.path(h),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(d,0,0,s.intrinsicWidth,s.intrinsicHeight,u.left,u.top,u.width,u.height),this.ctx.restore()}},r.prototype.renderNodeContent=function(s){return Bt(this,void 0,void 0,function(){var o,d,u,h,B,m,uA,uA,w,Q,F,N,sA,eA,P,xA,lA,jA,wA,uA,kA,sA,xA;return gt(this,function(X){switch(X.label){case 0:this.applyEffects(s.getEffects(4)),o=s.container,d=s.curves,u=o.styles,h=0,B=o.textNodes,X.label=1;case 1:return h<B.length?(m=B[h],[4,this.renderTextNode(m,u)]):[3,4];case 2:X.sent(),X.label=3;case 3:return h++,[3,1];case 4:if(!(o instanceof Z0))return[3,8];X.label=5;case 5:return X.trys.push([5,7,,8]),[4,this.context.cache.match(o.src)];case 6:return uA=X.sent(),this.renderReplacedElement(o,d,uA),[3,8];case 7:return X.sent(),this.context.logger.error("Error loading image "+o.src),[3,8];case 8:if(o instanceof q0&&this.renderReplacedElement(o,d,o.canvas),!(o instanceof W0))return[3,12];X.label=9;case 9:return X.trys.push([9,11,,12]),[4,this.context.cache.match(o.svg)];case 10:return uA=X.sent(),this.renderReplacedElement(o,d,uA),[3,12];case 11:return X.sent(),this.context.logger.error("Error loading svg "+o.svg.substring(0,255)),[3,12];case 12:return o instanceof ex&&o.tree?(w=new r(this.context,{scale:this.options.scale,backgroundColor:o.backgroundColor,x:0,y:0,width:o.width,height:o.height}),[4,w.render(o.tree)]):[3,14];case 13:Q=X.sent(),o.width&&o.height&&this.ctx.drawImage(Q,0,0,o.width,o.height,o.bounds.left,o.bounds.top,o.bounds.width,o.bounds.height),X.label=14;case 14:if(o instanceof hu&&(F=Math.min(o.bounds.width,o.bounds.height),o.type===Os?o.checked&&(this.ctx.save(),this.path([new GA(o.bounds.left+F*.39363,o.bounds.top+F*.79),new GA(o.bounds.left+F*.16,o.bounds.top+F*.5549),new GA(o.bounds.left+F*.27347,o.bounds.top+F*.44071),new GA(o.bounds.left+F*.39694,o.bounds.top+F*.5649),new GA(o.bounds.left+F*.72983,o.bounds.top+F*.23),new GA(o.bounds.left+F*.84,o.bounds.top+F*.34085),new GA(o.bounds.left+F*.39363,o.bounds.top+F*.79)]),this.ctx.fillStyle=it(Yp),this.ctx.fill(),this.ctx.restore()):o.type===Ks&&o.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(o.bounds.left+F/2,o.bounds.top+F/2,F/4,0,Math.PI*2,!0),this.ctx.fillStyle=it(Yp),this.ctx.fill(),this.ctx.restore())),T2(o)&&o.value.length){switch(N=this.createFontStyle(u),sA=N[0],eA=N[1],P=this.fontMetrics.getMetrics(sA,eA).baseline,this.ctx.font=sA,this.ctx.fillStyle=it(u.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=L2(o.styles.textAlign),xA=Vs(o),lA=0,o.styles.textAlign){case 1:lA+=xA.width/2;break;case 2:lA+=xA.width;break}jA=xA.add(lA,0,0,-xA.height/2+1),this.ctx.save(),this.path([new GA(xA.left,xA.top),new GA(xA.left+xA.width,xA.top),new GA(xA.left+xA.width,xA.top+xA.height),new GA(xA.left,xA.top+xA.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new zi(o.value,jA),u.letterSpacing,P),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!tt(o.styles.display,2048))return[3,20];if(o.styles.listStyleImage===null)return[3,19];if(wA=o.styles.listStyleImage,wA.type!==0)return[3,18];uA=void 0,kA=wA.url,X.label=15;case 15:return X.trys.push([15,17,,18]),[4,this.context.cache.match(kA)];case 16:return uA=X.sent(),this.ctx.drawImage(uA,o.bounds.left-(uA.width+10),o.bounds.top),[3,18];case 17:return X.sent(),this.context.logger.error("Error loading list-style-image "+kA),[3,18];case 18:return[3,20];case 19:s.listValue&&o.styles.listStyleType!==-1&&(sA=this.createFontStyle(u)[0],this.ctx.font=sA,this.ctx.fillStyle=it(u.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",xA=new Sn(o.bounds.left,o.bounds.top+Te(o.styles.paddingTop,o.bounds.width),o.bounds.width,Sp(u.lineHeight,u.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new zi(s.listValue,xA),u.letterSpacing,Sp(u.lineHeight,u.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),X.label=20;case 20:return[2]}})})},r.prototype.renderStackContent=function(s){return Bt(this,void 0,void 0,function(){var o,d,wA,u,h,wA,B,m,wA,w,Q,wA,F,N,wA,eA,P,wA,lA,jA,wA;return gt(this,function(uA){switch(uA.label){case 0:if(tt(s.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(s.element)];case 1:uA.sent(),o=0,d=s.negativeZIndex,uA.label=2;case 2:return o<d.length?(wA=d[o],[4,this.renderStack(wA)]):[3,5];case 3:uA.sent(),uA.label=4;case 4:return o++,[3,2];case 5:return[4,this.renderNodeContent(s.element)];case 6:uA.sent(),u=0,h=s.nonInlineLevel,uA.label=7;case 7:return u<h.length?(wA=h[u],[4,this.renderNode(wA)]):[3,10];case 8:uA.sent(),uA.label=9;case 9:return u++,[3,7];case 10:B=0,m=s.nonPositionedFloats,uA.label=11;case 11:return B<m.length?(wA=m[B],[4,this.renderStack(wA)]):[3,14];case 12:uA.sent(),uA.label=13;case 13:return B++,[3,11];case 14:w=0,Q=s.nonPositionedInlineLevel,uA.label=15;case 15:return w<Q.length?(wA=Q[w],[4,this.renderStack(wA)]):[3,18];case 16:uA.sent(),uA.label=17;case 17:return w++,[3,15];case 18:F=0,N=s.inlineLevel,uA.label=19;case 19:return F<N.length?(wA=N[F],[4,this.renderNode(wA)]):[3,22];case 20:uA.sent(),uA.label=21;case 21:return F++,[3,19];case 22:eA=0,P=s.zeroOrAutoZIndexOrTransformedOrOpacity,uA.label=23;case 23:return eA<P.length?(wA=P[eA],[4,this.renderStack(wA)]):[3,26];case 24:uA.sent(),uA.label=25;case 25:return eA++,[3,23];case 26:lA=0,jA=s.positiveZIndex,uA.label=27;case 27:return lA<jA.length?(wA=jA[lA],[4,this.renderStack(wA)]):[3,30];case 28:uA.sent(),uA.label=29;case 29:return lA++,[3,27];case 30:return[2]}})})},r.prototype.mask=function(s){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(s.slice(0).reverse()),this.ctx.closePath()},r.prototype.path=function(s){this.ctx.beginPath(),this.formatPath(s),this.ctx.closePath()},r.prototype.formatPath=function(s){var o=this;s.forEach(function(d,u){var h=Gt(d)?d.start:d;u===0?o.ctx.moveTo(h.x,h.y):o.ctx.lineTo(h.x,h.y),Gt(d)&&o.ctx.bezierCurveTo(d.startControl.x,d.startControl.y,d.endControl.x,d.endControl.y,d.end.x,d.end.y)})},r.prototype.renderRepeat=function(s,o,d,u){this.path(s),this.ctx.fillStyle=o,this.ctx.translate(d,u),this.ctx.fill(),this.ctx.translate(-d,-u)},r.prototype.resizeImage=function(s,o,d){var u;if(s.width===o&&s.height===d)return s;var h=(u=this.canvas.ownerDocument)!==null&&u!==void 0?u:document,B=h.createElement("canvas");B.width=Math.max(1,o),B.height=Math.max(1,d);var m=B.getContext("2d");return m.drawImage(s,0,0,s.width,s.height,0,0,o,d),B},r.prototype.renderBackgroundImage=function(s){return Bt(this,void 0,void 0,function(){var o,d,u,h,B,m;return gt(this,function(w){switch(w.label){case 0:o=s.styles.backgroundImage.length-1,d=function(Q){var F,N,eA,fA,_,aA,LA,RA,z,P,fA,_,aA,LA,RA,lA,jA,wA,uA,kA,sA,xA,X,EA,z,nA,fA,FA,rA,LA,RA,IA,_,aA,hA,OA,U,V,dA,tA,vA,HA;return gt(this,function(M){switch(M.label){case 0:if(Q.type!==0)return[3,5];F=void 0,N=Q.url,M.label=1;case 1:return M.trys.push([1,3,,4]),[4,u.context.cache.match(N)];case 2:return F=M.sent(),[3,4];case 3:return M.sent(),u.context.logger.error("Error loading background-image "+N),[3,4];case 4:return F&&(eA=Dd(s,o,[F.width,F.height,F.width/F.height]),fA=eA[0],_=eA[1],aA=eA[2],LA=eA[3],RA=eA[4],z=u.ctx.createPattern(u.resizeImage(F,LA,RA),"repeat"),u.renderRepeat(fA,z,_,aA)),[3,6];case 5:w1(Q)?(P=Dd(s,o,[null,null,null]),fA=P[0],_=P[1],aA=P[2],LA=P[3],RA=P[4],lA=p1(Q.angle,LA,RA),jA=lA[0],wA=lA[1],uA=lA[2],kA=lA[3],sA=lA[4],xA=document.createElement("canvas"),xA.width=LA,xA.height=RA,X=xA.getContext("2d"),EA=X.createLinearGradient(wA,kA,uA,sA),Fp(Q.stops,jA).forEach(function(yA){return EA.addColorStop(yA.stop,it(yA.color))}),X.fillStyle=EA,X.fillRect(0,0,LA,RA),LA>0&&RA>0&&(z=u.ctx.createPattern(xA,"repeat"),u.renderRepeat(fA,z,_,aA))):y1(Q)&&(nA=Dd(s,o,[null,null,null]),fA=nA[0],FA=nA[1],rA=nA[2],LA=nA[3],RA=nA[4],IA=Q.position.length===0?[cu]:Q.position,_=Te(IA[0],LA),aA=Te(IA[IA.length-1],RA),hA=x1(Q,_,aA,LA,RA),OA=hA[0],U=hA[1],OA>0&&U>0&&(V=u.ctx.createRadialGradient(FA+_,rA+aA,0,FA+_,rA+aA,OA),Fp(Q.stops,OA*2).forEach(function(yA){return V.addColorStop(yA.stop,it(yA.color))}),u.path(fA),u.ctx.fillStyle=V,OA!==U?(dA=s.bounds.left+.5*s.bounds.width,tA=s.bounds.top+.5*s.bounds.height,vA=U/OA,HA=1/vA,u.ctx.save(),u.ctx.translate(dA,tA),u.ctx.transform(1,0,0,vA,0,0),u.ctx.translate(-dA,-tA),u.ctx.fillRect(FA,HA*(rA-tA)+tA,LA,RA*HA),u.ctx.restore()):u.ctx.fill())),M.label=6;case 6:return o--,[2]}})},u=this,h=0,B=s.styles.backgroundImage.slice(0).reverse(),w.label=1;case 1:return h<B.length?(m=B[h],[5,d(m)]):[3,4];case 2:w.sent(),w.label=3;case 3:return h++,[3,1];case 4:return[2]}})})},r.prototype.renderSolidBorder=function(s,o,d){return Bt(this,void 0,void 0,function(){return gt(this,function(u){return this.path(a0(d,o)),this.ctx.fillStyle=it(s),this.ctx.fill(),[2]})})},r.prototype.renderDoubleBorder=function(s,o,d,u){return Bt(this,void 0,void 0,function(){var h,B;return gt(this,function(m){switch(m.label){case 0:return o<3?[4,this.renderSolidBorder(s,d,u)]:[3,2];case 1:return m.sent(),[2];case 2:return h=Q2(u,d),this.path(h),this.ctx.fillStyle=it(s),this.ctx.fill(),B=U2(u,d),this.path(B),this.ctx.fill(),[2]}})})},r.prototype.renderNodeBackgroundAndBorders=function(s){return Bt(this,void 0,void 0,function(){var o,d,u,h,B,m,w,Q,F=this;return gt(this,function(N){switch(N.label){case 0:return this.applyEffects(s.getEffects(2)),o=s.container.styles,d=!sa(o.backgroundColor)||o.backgroundImage.length,u=[{style:o.borderTopStyle,color:o.borderTopColor,width:o.borderTopWidth},{style:o.borderRightStyle,color:o.borderRightColor,width:o.borderRightWidth},{style:o.borderBottomStyle,color:o.borderBottomColor,width:o.borderBottomWidth},{style:o.borderLeftStyle,color:o.borderLeftColor,width:o.borderLeftWidth}],h=I2(wr(o.backgroundClip,0),s.curves),d||o.boxShadow.length?(this.ctx.save(),this.path(h),this.ctx.clip(),sa(o.backgroundColor)||(this.ctx.fillStyle=it(o.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(s.container)]):[3,2];case 1:N.sent(),this.ctx.restore(),o.boxShadow.slice(0).reverse().forEach(function(eA){F.ctx.save();var P=_s(s.curves),lA=eA.inset?0:M2,jA=v2(P,-lA+(eA.inset?1:-1)*eA.spread.number,(eA.inset?1:-1)*eA.spread.number,eA.spread.number*(eA.inset?-2:2),eA.spread.number*(eA.inset?-2:2));eA.inset?(F.path(P),F.ctx.clip(),F.mask(jA)):(F.mask(P),F.ctx.clip(),F.path(jA)),F.ctx.shadowOffsetX=eA.offsetX.number+lA,F.ctx.shadowOffsetY=eA.offsetY.number,F.ctx.shadowColor=it(eA.color),F.ctx.shadowBlur=eA.blur.number,F.ctx.fillStyle=eA.inset?it(eA.color):"rgba(0,0,0,1)",F.ctx.fill(),F.ctx.restore()}),N.label=2;case 2:B=0,m=0,w=u,N.label=3;case 3:return m<w.length?(Q=w[m],Q.style!==0&&!sa(Q.color)&&Q.width>0?Q.style!==2?[3,5]:[4,this.renderDashedDottedBorder(Q.color,Q.width,B,s.curves,2)]:[3,11]):[3,13];case 4:return N.sent(),[3,11];case 5:return Q.style!==3?[3,7]:[4,this.renderDashedDottedBorder(Q.color,Q.width,B,s.curves,3)];case 6:return N.sent(),[3,11];case 7:return Q.style!==4?[3,9]:[4,this.renderDoubleBorder(Q.color,Q.width,B,s.curves)];case 8:return N.sent(),[3,11];case 9:return[4,this.renderSolidBorder(Q.color,B,s.curves)];case 10:N.sent(),N.label=11;case 11:B++,N.label=12;case 12:return m++,[3,3];case 13:return[2]}})})},r.prototype.renderDashedDottedBorder=function(s,o,d,u,h){return Bt(this,void 0,void 0,function(){var B,m,w,Q,F,N,eA,P,lA,jA,wA,uA,kA,sA,xA,X,xA,X;return gt(this,function(EA){return this.ctx.save(),B=F2(u,d),m=a0(u,d),h===2&&(this.path(m),this.ctx.clip()),Gt(m[0])?(w=m[0].start.x,Q=m[0].start.y):(w=m[0].x,Q=m[0].y),Gt(m[1])?(F=m[1].end.x,N=m[1].end.y):(F=m[1].x,N=m[1].y),d===0||d===2?eA=Math.abs(w-F):eA=Math.abs(Q-N),this.ctx.beginPath(),h===3?this.formatPath(B):this.formatPath(m.slice(0,2)),P=o<3?o*3:o*2,lA=o<3?o*2:o,h===3&&(P=o,lA=o),jA=!0,eA<=P*2?jA=!1:eA<=P*2+lA?(wA=eA/(2*P+lA),P*=wA,lA*=wA):(uA=Math.floor((eA+lA)/(P+lA)),kA=(eA-uA*P)/(uA-1),sA=(eA-(uA+1)*P)/uA,lA=sA<=0||Math.abs(lA-kA)<Math.abs(lA-sA)?kA:sA),jA&&(h===3?this.ctx.setLineDash([0,P+lA]):this.ctx.setLineDash([P,lA])),h===3?(this.ctx.lineCap="round",this.ctx.lineWidth=o):this.ctx.lineWidth=o*2+1.1,this.ctx.strokeStyle=it(s),this.ctx.stroke(),this.ctx.setLineDash([]),h===2&&(Gt(m[0])&&(xA=m[3],X=m[0],this.ctx.beginPath(),this.formatPath([new GA(xA.end.x,xA.end.y),new GA(X.start.x,X.start.y)]),this.ctx.stroke()),Gt(m[1])&&(xA=m[1],X=m[2],this.ctx.beginPath(),this.formatPath([new GA(xA.end.x,xA.end.y),new GA(X.start.x,X.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},r.prototype.render=function(s){return Bt(this,void 0,void 0,function(){var o;return gt(this,function(d){switch(d.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=it(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),o=C2(s),[4,this.renderStack(o)];case 1:return d.sent(),this.applyEffects([]),[2,this.canvas]}})})},r}(xx),T2=function(i){return i instanceof Ax||i instanceof $0?!0:i instanceof hu&&i.type!==Ks&&i.type!==Os},I2=function(i,r){switch(i){case 0:return _s(r);case 2:return m2(r);case 1:default:return Gs(r)}},L2=function(i){switch(i){case 1:return"center";case 2:return"right";case 0:default:return"left"}},O2=["-apple-system","system-ui"],K2=function(i){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?i.filter(function(r){return O2.indexOf(r)===-1}):i},R2=function(i){Wt(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.canvas=o.canvas?o.canvas:document.createElement("canvas"),d.ctx=d.canvas.getContext("2d"),d.options=o,d.canvas.width=Math.floor(o.width*o.scale),d.canvas.height=Math.floor(o.height*o.scale),d.canvas.style.width=o.width+"px",d.canvas.style.height=o.height+"px",d.ctx.scale(d.options.scale,d.options.scale),d.ctx.translate(-o.x,-o.y),d.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+o.width+"x"+o.height+" at "+o.x+","+o.y+") with scale "+o.scale),d}return r.prototype.render=function(s){return Bt(this,void 0,void 0,function(){var o,d;return gt(this,function(u){switch(u.label){case 0:return o=$d(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,s),[4,z2(o)];case 1:return d=u.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=it(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(d,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},r}(xx),z2=function(i){return new Promise(function(r,s){var o=new Image;o.onload=function(){r(o)},o.onerror=s,o.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(i))})},_2=function(){function i(r){var s=r.id,o=r.enabled;this.id=s,this.enabled=o,this.start=Date.now()}return i.prototype.debug=function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,ls([this.id,this.getTime()+"ms"],r)):this.info.apply(this,r))},i.prototype.getTime=function(){return Date.now()-this.start},i.prototype.info=function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,ls([this.id,this.getTime()+"ms"],r))},i.prototype.warn=function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,ls([this.id,this.getTime()+"ms"],r)):this.info.apply(this,r))},i.prototype.error=function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,ls([this.id,this.getTime()+"ms"],r)):this.info.apply(this,r))},i.instances={},i}(),G2=function(){function i(r,s){var o;this.windowBounds=s,this.instanceName="#"+i.instanceCount++,this.logger=new _2({id:this.instanceName,enabled:r.logging}),this.cache=(o=r.cache)!==null&&o!==void 0?o:new c2(this,r)}return i.instanceCount=1,i}(),mx=function(i,r){return r===void 0&&(r={}),V2(i,r)};typeof window<"u"&&dx.setContext(window);var V2=function(i,r){return Bt(void 0,void 0,void 0,function(){var s,o,d,u,h,B,m,w,Q,F,N,eA,P,lA,jA,wA,uA,kA,sA,xA,EA,X,EA,z,nA,fA,FA,rA,LA,RA,IA,_,aA,hA,OA,U,V,dA,tA,vA;return gt(this,function(HA){switch(HA.label){case 0:if(!i||typeof i!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(s=i.ownerDocument,!s)throw new Error("Element is not attached to a Document");if(o=s.defaultView,!o)throw new Error("Document is not attached to a Window");return d={allowTaint:(z=r.allowTaint)!==null&&z!==void 0?z:!1,imageTimeout:(nA=r.imageTimeout)!==null&&nA!==void 0?nA:15e3,proxy:r.proxy,useCORS:(fA=r.useCORS)!==null&&fA!==void 0?fA:!1},u=Ld({logging:(FA=r.logging)!==null&&FA!==void 0?FA:!0,cache:r.cache},d),h={windowWidth:(rA=r.windowWidth)!==null&&rA!==void 0?rA:o.innerWidth,windowHeight:(LA=r.windowHeight)!==null&&LA!==void 0?LA:o.innerHeight,scrollX:(RA=r.scrollX)!==null&&RA!==void 0?RA:o.pageXOffset,scrollY:(IA=r.scrollY)!==null&&IA!==void 0?IA:o.pageYOffset},B=new Sn(h.scrollX,h.scrollY,h.windowWidth,h.windowHeight),m=new G2(u,B),w=(_=r.foreignObjectRendering)!==null&&_!==void 0?_:!1,Q={allowTaint:(aA=r.allowTaint)!==null&&aA!==void 0?aA:!1,onclone:r.onclone,ignoreElements:r.ignoreElements,inlineImages:w,copyStyles:w},m.logger.debug("Starting document clone with size "+B.width+"x"+B.height+" scrolled to "+-B.left+","+-B.top),F=new e0(m,i,Q),N=F.clonedReferenceElement,N?[4,F.toIFrame(s,B)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return eA=HA.sent(),P=gu(N)||XC(N)?vw(N.ownerDocument):Ys(m,N),lA=P.width,jA=P.height,wA=P.left,uA=P.top,kA=Y2(m,N,r.backgroundColor),sA={canvas:r.canvas,backgroundColor:kA,scale:(OA=(hA=r.scale)!==null&&hA!==void 0?hA:o.devicePixelRatio)!==null&&OA!==void 0?OA:1,x:((U=r.x)!==null&&U!==void 0?U:0)+wA,y:((V=r.y)!==null&&V!==void 0?V:0)+uA,width:(dA=r.width)!==null&&dA!==void 0?dA:Math.ceil(lA),height:(tA=r.height)!==null&&tA!==void 0?tA:Math.ceil(jA)},w?(m.logger.debug("Document cloned, using foreign object rendering"),EA=new R2(m,sA),[4,EA.render(N)]):[3,3];case 2:return xA=HA.sent(),[3,5];case 3:return m.logger.debug("Document cloned, element located at "+wA+","+uA+" with size "+lA+"x"+jA+" using computed rendering"),m.logger.debug("Starting DOM parsing"),X=nx(m,N),kA===X.styles.backgroundColor&&(X.styles.backgroundColor=En.TRANSPARENT),m.logger.debug("Starting renderer for element at "+sA.x+","+sA.y+" with size "+sA.width+"x"+sA.height),EA=new D2(m,sA),[4,EA.render(X)];case 4:xA=HA.sent(),HA.label=5;case 5:return(!((vA=r.removeContainer)!==null&&vA!==void 0)||vA)&&(e0.destroy(eA)||m.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),m.logger.debug("Finished rendering"),[2,xA]}})})},Y2=function(i,r,s){var o=r.ownerDocument,d=o.documentElement?Ki(i,getComputedStyle(o.documentElement).backgroundColor):En.TRANSPARENT,u=o.body?Ki(i,getComputedStyle(o.body).backgroundColor):En.TRANSPARENT,h=typeof s=="string"?Ki(i,s):s===null?En.TRANSPARENT:4294967295;return r===o.documentElement?sa(d)?sa(u)?h:u:d:h};const Er=Object.freeze(Object.defineProperty({__proto__:null,default:mx},Symbol.toStringTag,{value:"Module"})),X2=({ganttChart:i,tasks:r,onUpdateGanttChart:s,onBack:o})=>{const[d,u]=H.useState({name:"",startDate:new Date().toISOString().split("T")[0],endDate:new Date(Date.now()+6048e5).toISOString().split("T")[0],progress:0,dependencies:[],color:w()}),[h,B]=H.useState(null),m=H.useRef(null);function w(){const z=["#3b82f6","#ef4444","#10b981","#f59e0b","#6366f1","#ec4899","#14b8a6","#f97316","#8b5cf6","#d946ef"];return z[Math.floor(Math.random()*z.length)]}const Q=H.useMemo(()=>{if(r.length===0){const IA=new Date,_=new Date(IA.getTime()+30*24*60*60*1e3);return{startDate:IA,endDate:_,totalDays:30}}const z=r.flatMap(IA=>[new Date(IA.startDate),new Date(IA.endDate)]),nA=new Date(Math.min(...z)),fA=new Date(Math.max(...z)),FA=7,rA=new Date(nA.getTime()-FA*24*60*60*1e3),LA=new Date(fA.getTime()+FA*24*60*60*1e3),RA=Math.ceil((LA-rA)/(24*60*60*1e3));return{startDate:rA,endDate:LA,totalDays:RA}},[r]),F=H.useMemo(()=>{const z=[],{startDate:nA,totalDays:fA}=Q;for(let FA=0;FA<=fA;FA+=7){const rA=new Date(nA.getTime()+FA*24*60*60*1e3);z.push({date:rA,position:FA/fA*100,label:rA.toLocaleDateString("en-US",{month:"short",day:"numeric"})})}return z},[Q]),N=z=>{const nA=new Date(z),{startDate:fA,totalDays:FA}=Q,rA=Math.max(0,(nA-fA)/(24*60*60*1e3));return Math.min(100,rA/FA*100)},eA=(z,nA)=>{const fA=new Date(z),FA=new Date(nA),{totalDays:rA}=Q,LA=Math.max(1,(FA-fA)/(24*60*60*1e3));return Math.min(100,LA/rA*100)},P=()=>{if(!d.name.trim())return;const z=[...r,{id:Date.now(),...d,progress:Math.min(100,Math.max(0,parseInt(d.progress)||0))}];s({...i,tasks:z}),u({name:"",startDate:new Date().toISOString().split("T")[0],endDate:new Date(Date.now()+7*24*60*60*1e3).toISOString().split("T")[0],progress:0,dependencies:[],color:w()})},lA=z=>{const fA=r.filter(FA=>FA.id!==z).map(FA=>({...FA,dependencies:FA.dependencies.filter(rA=>rA!==z)}));s({...i,tasks:fA})},jA=(z,nA)=>{const fA=r.map(FA=>FA.id===z?{...FA,...nA}:FA);s({...i,tasks:fA})},wA=z=>{B({...z})},uA=()=>{h&&(jA(h.id,h),B(null))},kA=()=>{B(null)},sA=()=>{const z={...i,tasks:r},nA=JSON.stringify(z,null,2),fA=new Blob([nA],{type:"application/json"}),FA=URL.createObjectURL(fA),rA=document.createElement("a");rA.href=FA,rA.download=`${i.name.replace(/\s+/g,"_")}_gantt.json`,document.body.appendChild(rA),rA.click(),document.body.removeChild(rA),URL.revokeObjectURL(FA)},xA=z=>{const nA=z.target.files[0];if(!nA)return;const fA=new FileReader;fA.onload=FA=>{try{const rA=JSON.parse(FA.target.result);rA.name&&Array.isArray(rA.tasks)?s(rA):alert("Invalid Gantt chart file format")}catch{alert("Error parsing JSON file")}},fA.readAsText(nA)},X=()=>{m.current&&mx(m.current,{scrollX:-window.scrollX,scrollY:-window.scrollY,windowWidth:m.current.scrollWidth,windowHeight:m.current.scrollHeight,scale:2}).then(z=>{const nA=document.createElement("a");nA.download=`${i.name.replace(/\s+/g,"_")}_gantt.png`,nA.href=z.toDataURL("image/png"),nA.click()})},EA=z=>r.find(nA=>nA.id===z);return n.jsxs("div",{className:"gantt-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:o,className:"back-btn",children:[n.jsx(jn,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"export-actions",children:[n.jsxs("button",{onClick:sA,className:"export-btn",title:"Export as JSON",children:[n.jsx(Nn,{size:16})," JSON"]}),n.jsxs("label",{className:"import-btn",title:"Import from JSON",children:[n.jsx(sn,{size:16})," JSON",n.jsx("input",{type:"file",accept:".json",onChange:xA,style:{display:"none"}})]}),n.jsxs("button",{onClick:X,className:"export-btn",title:"Export as Image",children:[n.jsx(on,{size:16})," Image"]})]})]}),n.jsxs("div",{className:"gantt-container",children:[n.jsxs("div",{className:"gantt-sidebar",children:[n.jsxs("div",{className:"sidebar-header",children:["Tasks (",r.length,")"]}),n.jsx("div",{className:"task-list",children:r.map(z=>n.jsxs("div",{className:"task-item",children:[n.jsxs("div",{className:"task-info",children:[n.jsx("div",{className:"task-name",children:z.name}),n.jsxs("div",{className:"task-dates",children:[new Date(z.startDate).toLocaleDateString()," - ",new Date(z.endDate).toLocaleDateString()]}),n.jsxs("div",{className:"task-progress-text",children:[z.progress,"% complete"]}),z.dependencies.length>0&&n.jsxs("div",{className:"task-dependencies",children:["Dependencies: ",z.dependencies.map(nA=>EA(nA)?.name).filter(Boolean).join(", ")]})]}),n.jsxs("div",{className:"task-actions",children:[n.jsx("button",{onClick:()=>wA(z),className:"edit-btn",title:"Edit task",children:n.jsx(zb,{size:14})}),n.jsx("button",{onClick:()=>lA(z.id),className:"delete-btn",title:"Delete task",children:n.jsx(pe,{size:14})})]})]},z.id))}),n.jsxs("div",{className:"add-task-form",children:[n.jsx("h3",{children:"Add New Task"}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Task Name"}),n.jsx("input",{type:"text",value:d.name,onChange:z=>u({...d,name:z.target.value}),placeholder:"Task description"})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Start Date"}),n.jsx("input",{type:"date",value:d.startDate,onChange:z=>u({...d,startDate:z.target.value})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"End Date"}),n.jsx("input",{type:"date",value:d.endDate,onChange:z=>u({...d,endDate:z.target.value})})]})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Progress (%)"}),n.jsx("input",{type:"number",min:"0",max:"100",value:d.progress,onChange:z=>u({...d,progress:z.target.value})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Color"}),n.jsxs("div",{className:"color-picker",children:[n.jsx("input",{type:"color",value:d.color,onChange:z=>u({...d,color:z.target.value})}),n.jsx("button",{onClick:()=>u({...d,color:w()}),className:"random-color-btn",title:"Random color",children:"Random"})]})]})]}),n.jsxs("button",{onClick:P,className:"add-btn",children:[n.jsx(Re,{size:16})," Add Task"]})]})]}),n.jsxs("div",{className:"gantt-timeline",ref:m,children:[n.jsxs("div",{className:"timeline-header",children:[n.jsx("div",{className:"timeline-title",children:"Timeline"}),n.jsx("div",{className:"timeline-scale",children:F.map((z,nA)=>n.jsxs("div",{className:"scale-point",style:{left:`${z.position}%`},children:[n.jsx("div",{className:"scale-line"}),n.jsx("div",{className:"scale-label",children:z.label})]},nA))})]}),n.jsxs("div",{className:"timeline-content",children:[r.map((z,nA)=>{const fA=N(z.startDate),FA=eA(z.startDate,z.endDate),rA=`${z.color}33`;return n.jsx("div",{className:"timeline-row",children:n.jsxs("div",{className:"timeline-task",children:[n.jsxs("div",{className:"task-bar",style:{left:`${fA}%`,width:`${FA}%`,background:`linear-gradient(to right, ${z.color} ${z.progress}%, ${rA} ${z.progress}%)`,borderColor:z.color},title:`${z.name}: ${z.progress}% complete`,children:[n.jsxs("div",{className:"task-progress",children:[z.progress,"%"]}),n.jsx("div",{className:"task-label",children:z.name})]}),z.dependencies.map(LA=>{const RA=EA(LA);if(!RA)return null;const IA=r.findIndex(hA=>hA.id===LA),_=N(RA.endDate),aA=eA(RA.startDate,RA.endDate);return n.jsxs("svg",{className:"dependency-arrow",style:{position:"absolute",left:`${_+aA}%`,top:`${(IA-nA)*44-12}px`,width:`${Math.abs(fA-(_+aA))}%`,height:`${Math.abs((nA-IA)*44)+24}px`,pointerEvents:"none",zIndex:1},children:[n.jsx("defs",{children:n.jsx("marker",{id:`arrowhead-${z.id}-${LA}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#64748b"})})}),n.jsx("path",{d:`M 0 ${IA<nA?0:Math.abs((nA-IA)*44)} 
                                L ${Math.abs(fA-(_+aA))*.5} ${IA<nA?0:Math.abs((nA-IA)*44)} 
                                L ${Math.abs(fA-(_+aA))*.5} ${IA<nA?Math.abs((nA-IA)*44):0} 
                                L ${Math.abs(fA-(_+aA))} ${IA<nA?Math.abs((nA-IA)*44):0}`,stroke:"#64748b",strokeWidth:"2",fill:"none",markerEnd:`url(#arrowhead-${z.id}-${LA})`})]},`dep-${LA}`)})]})},z.id)}),n.jsx("div",{className:"today-line",style:{left:`${N(new Date().toISOString().split("T")[0])}%`},children:n.jsx("div",{className:"today-label",children:"Today"})})]})]})]}),h&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal",children:[n.jsx("h3",{children:"Edit Task"}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Task Name"}),n.jsx("input",{type:"text",value:h.name,onChange:z=>B({...h,name:z.target.value})})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Start Date"}),n.jsx("input",{type:"date",value:h.startDate,onChange:z=>B({...h,startDate:z.target.value})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"End Date"}),n.jsx("input",{type:"date",value:h.endDate,onChange:z=>B({...h,endDate:z.target.value})})]})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Progress (%)"}),n.jsx("input",{type:"number",min:"0",max:"100",value:h.progress,onChange:z=>B({...h,progress:z.target.value})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Color"}),n.jsx("input",{type:"color",value:h.color,onChange:z=>B({...h,color:z.target.value})})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Dependencies"}),n.jsx("div",{className:"dependency-list",children:r.filter(z=>z.id!==h.id).map(z=>n.jsxs("label",{className:"dependency-item",children:[n.jsx("input",{type:"checkbox",checked:h.dependencies.includes(z.id),onChange:nA=>{nA.target.checked?B({...h,dependencies:[...h.dependencies,z.id]}):B({...h,dependencies:h.dependencies.filter(fA=>fA!==z.id)})}}),z.name]},z.id))})]}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{onClick:kA,className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:uA,className:"save-btn",children:"Save Changes"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},J2=({useCaseDiagrams:i,onCreateUseCaseDiagram:r,onLoadUseCaseDiagram:s,onDeleteUseCaseDiagram:o})=>{const[d,u]=H.useState(!1);return n.jsxs("div",{className:"use-case-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(su,{size:48})}),n.jsx("h2",{children:"Use Case Diagram Designer"}),n.jsx("p",{children:"Model system functionality with actors and use cases"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Re,{size:16})," New Diagram"]})}),i.length>0&&n.jsxs("div",{className:"diagram-list",children:[n.jsx("h3",{children:"Your Use Case Diagrams"}),i.map(h=>n.jsxs("div",{className:"diagram-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"diagram-card-content",children:[n.jsx("div",{className:"diagram-card-name",children:h.name}),n.jsxs("div",{className:"diagram-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.actors?.length||0," actors • ",h.useCases?.length||0," use cases"]})]})]}),n.jsxs("div",{className:"diagram-card-actions",children:[n.jsx("button",{onClick:B=>{B.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Hn,{size:16})}),n.jsx("button",{onClick:B=>{B.stopPropagation(),confirm("Delete this diagram?")&&o(h.id)},className:"delete-btn",children:n.jsx(pe,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Use Case Diagram"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Diagram Name"}),n.jsx("input",{type:"text",placeholder:"e.g., Online Shopping System",id:"diagramName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("diagramName").value;h.trim()&&(r(h),u(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},Z2="modulepreload",q2=function(i){return"/Rootrie/"+i},i0={},Sr=function(r,s,o){let d=Promise.resolve();if(s&&s.length>0){let w=function(Q){return Promise.all(Q.map(F=>Promise.resolve(F).then(N=>({status:"fulfilled",value:N}),N=>({status:"rejected",reason:N}))))};var h=w;document.getElementsByTagName("link");const B=document.querySelector("meta[property=csp-nonce]"),m=B?.nonce||B?.getAttribute("nonce");d=w(s.map(Q=>{if(Q=q2(Q),Q in i0)return;i0[Q]=!0;const F=Q.endsWith(".css"),N=F?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${Q}"]${N}`))return;const eA=document.createElement("link");if(eA.rel=F?"stylesheet":Z2,F||(eA.as="script"),eA.crossOrigin="",eA.href=Q,m&&eA.setAttribute("nonce",m),document.head.appendChild(eA),F)return new Promise((P,lA)=>{eA.addEventListener("load",P),eA.addEventListener("error",()=>lA(new Error(`Unable to preload CSS for ${Q}`)))})}))}function u(B){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=B,window.dispatchEvent(m),!m.defaultPrevented)throw B}return d.then(B=>{for(const m of B||[])m.status==="rejected"&&u(m.reason);return r().catch(u)})},W2=({useCaseDiagram:i,actors:r=[],useCases:s=[],relationships:o=[],onUpdateUseCaseDiagram:d,onBack:u})=>{const[h,B]=H.useState(""),[m,w]=H.useState(""),[Q,F]=H.useState(null),[N,eA]=H.useState(null),[P,lA]=H.useState("association"),[jA,wA]=H.useState("editor"),[uA,kA]=H.useState(""),[sA,xA]=H.useState(null),[X,EA]=H.useState({x:0,y:0}),[z,nA]=H.useState(!1),[fA,FA]=H.useState(!1),[rA,LA]=H.useState(1),[RA,IA]=H.useState({x:0,y:0}),[_,aA]=H.useState(!1),[hA,OA]=H.useState({x:0,y:0}),U=H.useRef(null),V=H.useRef(null),dA=20,tA=60,vA=80,HA=150,M=40;H.useEffect(()=>{kA(JSON.stringify({actors:r,useCases:s,relationships:o},null,2))},[r,s,o]);const yA=k=>fA?Math.round(k/dA)*dA:k,UA=()=>{if(!h.trim())return;const k=[...r,{id:Date.now(),name:h,x:yA(100+Math.random()*200),y:yA(100+Math.random()*200)}];d({...i,actors:k}),B("")},cA=()=>{if(!m.trim())return;const k=[...s,{id:Date.now(),name:m,x:yA(300+Math.random()*300),y:yA(150+Math.random()*200)}];d({...i,useCases:k}),w("")},D=k=>{const QA=r.filter(KA=>KA.id!==k),SA=o.filter(KA=>!(KA.source===k||KA.target===k));d({...i,actors:QA,relationships:SA})},J=k=>{const QA=s.filter(KA=>KA.id!==k),SA=o.filter(KA=>!(KA.source===k||KA.target===k));d({...i,useCases:QA,relationships:SA})},MA=()=>{if(!Q||!N)return;const k=r.some(XA=>XA.id===Q),QA=r.some(XA=>XA.id===N),SA=s.some(XA=>XA.id===Q),KA=s.some(XA=>XA.id===N);if(P==="include"||P==="extend"){if(!SA||!KA){alert("Include and extend relationships must be between use cases");return}}else if(P==="generalization"){if(k&&!QA||SA&&!KA){alert("Generalization must be between two actors or two use cases");return}}else if(P==="association"&&!(k&&KA)&&!(SA&&QA)){alert("Association must be between an actor and a use case");return}const ae={id:Date.now(),source:Q,target:N,type:P};d({...i,relationships:[...o,ae]}),F(null),eA(null)},K=k=>{const QA=o.filter(SA=>SA.id!==k);d({...i,relationships:QA})},BA=(k,QA)=>QA?{x:k.x+tA/2,y:k.y+vA/2}:{x:k.x+HA/2,y:k.y+M/2},YA=(k,QA,SA)=>{const KA=BA(k,QA);if(QA)return{x:KA.x+25*Math.cos(SA),y:KA.y+25*Math.sin(SA)};{const ae=HA/2,XA=M/2,le=Math.cos(SA),te=Math.sin(SA),be=ae*XA/Math.sqrt(XA*XA*le*le+ae*ae*te*te);return{x:KA.x+be*le,y:KA.y+be*te}}},_A=(k,QA,SA,KA)=>{const ae=V.current;if(!ae)return{x:k,y:QA};const XA=ae.getBoundingClientRect(),le=Math.max(0,-RA.x),te=Math.max(0,-RA.y),be=Math.min(XA.width/rA-SA,XA.width/rA-RA.x-SA),ut=Math.min(XA.height/rA-KA,XA.height/rA-RA.y-KA);return{x:Math.max(le,Math.min(be,k)),y:Math.max(te,Math.min(ut,QA))}},ZA=(k,QA,SA)=>{k.preventDefault(),k.stopPropagation();const KA=U.current.getBoundingClientRect(),ae=(k.clientX-KA.left-RA.x)/rA,XA=(k.clientY-KA.top-RA.y)/rA;xA({...QA,type:SA}),EA({x:ae-QA.x,y:XA-QA.y})},ne=k=>{if(!(!sA&&!_)){if(_){const QA=k.clientX-hA.x,SA=k.clientY-hA.y;IA(KA=>({x:KA.x+QA,y:KA.y+SA})),OA({x:k.clientX,y:k.clientY});return}if(sA){const QA=U.current.getBoundingClientRect();let SA=(k.clientX-QA.left-RA.x)/rA-X.x,KA=(k.clientY-QA.top-RA.y)/rA-X.y;SA=yA(SA),KA=yA(KA);const ae=sA.type==="actor"?tA:HA,XA=sA.type==="actor"?vA:M,le=_A(SA,KA,ae,XA);if(sA.type==="actor"){const te=r.map(be=>be.id===sA.id?{...be,x:le.x,y:le.y}:be);d({...i,actors:te})}else if(sA.type==="useCase"){const te=s.map(be=>be.id===sA.id?{...be,x:le.x,y:le.y}:be);d({...i,useCases:te})}}}},oe=()=>{xA(null),aA(!1)},Oe=k=>{k.target===U.current&&(aA(!0),OA({x:k.clientX,y:k.clientY}))},Fe=()=>{LA(k=>Math.min(k*1.2,3))},Ge=()=>{LA(k=>Math.max(k/1.2,.3))},ke=()=>{LA(1),IA({x:0,y:0})},Ve=()=>{const k=r.map((SA,KA)=>({...SA,x:50,y:100+KA*120})),QA=s.map((SA,KA)=>({...SA,x:400,y:100+KA*80}));d({...i,actors:k,useCases:QA})};H.useEffect(()=>{const k=SA=>ne(SA),QA=()=>oe();if(sA||_)return document.addEventListener("mousemove",k),document.addEventListener("mouseup",QA),()=>{document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",QA)}},[sA,_,X,RA,rA,r,s,d,i,hA,fA]);const qe=()=>JSON.stringify({actors:r,useCases:s,relationships:o},null,2),xe=()=>{navigator.clipboard.writeText(qe())},fe=()=>{try{const k=JSON.parse(uA);Array.isArray(k.actors)&&Array.isArray(k.useCases)&&Array.isArray(k.relationships)?d({...i,actors:k.actors,useCases:k.useCases,relationships:k.relationships}):alert("Invalid JSON format. Expected actors, useCases, and relationships arrays.")}catch(k){alert("Error parsing JSON: "+k.message)}},C=k=>{const QA=k.target.files[0];if(!QA)return;const SA=new FileReader;SA.onload=KA=>{kA(KA.target.result)},SA.readAsText(QA)},T=()=>{if(!U.current)return;const k=U.current.style.transform;U.current.style.transform="scale(1) translate(0px, 0px)",Sr(()=>Promise.resolve().then(()=>Er),void 0).then(QA=>{QA.default(U.current,{backgroundColor:"#f8fafc",scale:2,useCORS:!0}).then(SA=>{const KA=document.createElement("a");KA.download=`${i.name||"use-case-diagram"}.png`,KA.href=SA.toDataURL("image/png"),KA.click(),U.current.style.transform=k})})},W=()=>{if(!z)return null;const k=V.current;if(!k)return null;const QA=k.getBoundingClientRect(),SA=QA.width/rA,KA=QA.height/rA,ae=Math.floor(-RA.x/rA/dA)*dA,XA=Math.floor(-RA.y/rA/dA)*dA,le=[];for(let te=ae;te<SA-RA.x/rA;te+=dA)le.push(n.jsx("line",{x1:te,y1:0,x2:te,y2:KA,stroke:"#e2e8f0",strokeWidth:"1"},`v-${te}`));for(let te=XA;te<KA-RA.y/rA;te+=dA)le.push(n.jsx("line",{x1:0,y1:te,x2:SA,y2:te,stroke:"#e2e8f0",strokeWidth:"1"},`h-${te}`));return n.jsx("svg",{className:"grid-overlay",children:le})},iA=k=>n.jsxs("div",{className:"actor",style:{left:`${k.x}px`,top:`${k.y}px`,width:`${tA}px`,height:`${vA}px`,cursor:sA?.id===k.id?"grabbing":"grab"},onMouseDown:QA=>ZA(QA,k,"actor"),children:[n.jsx("div",{className:"actor-icon",children:n.jsx(su,{size:20})}),n.jsx("div",{className:"actor-name",children:k.name})]},k.id),oA=k=>n.jsx("div",{className:"use-case",style:{left:`${k.x}px`,top:`${k.y}px`,width:`${HA}px`,height:`${M}px`,cursor:sA?.id===k.id?"grabbing":"grab"},onMouseDown:QA=>ZA(QA,k,"useCase"),children:n.jsx("div",{className:"use-case-name",children:k.name})},k.id),CA=k=>{let QA,SA,KA=!1,ae=!1;if(QA=r.find(E=>E.id===k.source),QA?KA=!0:QA=s.find(E=>E.id===k.source),SA=r.find(E=>E.id===k.target),SA?ae=!0:SA=s.find(E=>E.id===k.target),!QA||!SA)return null;const XA=BA(QA,KA),le=BA(SA,ae),te=le.x-XA.x,be=le.y-XA.y,ut=Math.atan2(be,te),Me=YA(QA,KA,ut),ye=YA(SA,ae,ut+Math.PI);let p={},S={};k.type==="include"?(p={strokeDasharray:"5,5",stroke:"#3b82f6"},S={fill:"#3b82f6"}):k.type==="extend"?(p={strokeDasharray:"8,3",stroke:"#10b981"},S={fill:"#10b981"}):k.type==="generalization"?(p={stroke:"#8b5cf6"},S={fill:"none",stroke:"#8b5cf6",strokeWidth:"2"}):(p={stroke:"#64748b"},S={fill:"#64748b"});const f=8,g=Math.atan2(ye.y-Me.y,ye.x-Me.x),b={x:ye.x-f*Math.cos(g-Math.PI/6),y:ye.y-f*Math.sin(g-Math.PI/6)},v={x:ye.x-f*Math.cos(g+Math.PI/6),y:ye.y-f*Math.sin(g+Math.PI/6)};return k.type==="generalization"?n.jsxs("svg",{className:"relationship",children:[n.jsx("line",{x1:Me.x,y1:Me.y,x2:ye.x,y2:ye.y,strokeWidth:"2",...p}),n.jsx("polygon",{points:`
              ${ye.x},${ye.y}
              ${b.x},${b.y}
              ${v.x},${v.y}
            `,...S}),n.jsx("text",{x:(Me.x+ye.x)/2,y:(Me.y+ye.y)/2-8,textAnchor:"middle",fontSize:"11",fill:p.stroke||"#64748b",className:"relationship-label",children:`<<${k.type}>>`})]},k.id):k.type==="association"?n.jsx("svg",{className:"relationship",children:n.jsx("line",{x1:Me.x,y1:Me.y,x2:ye.x,y2:ye.y,strokeWidth:"2",...p})},k.id):n.jsxs("svg",{className:"relationship",children:[n.jsx("defs",{children:n.jsx("marker",{id:`arrowhead-${k.id}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",...S})})}),n.jsx("line",{x1:Me.x,y1:Me.y,x2:ye.x,y2:ye.y,strokeWidth:"2",markerEnd:`url(#arrowhead-${k.id})`,...p}),k.type!=="association"&&n.jsx("text",{x:(Me.x+ye.x)/2,y:(Me.y+ye.y)/2-8,textAnchor:"middle",fontSize:"11",fill:p.stroke||"#64748b",className:"relationship-label",children:`<<${k.type}>>`})]},k.id)};return n.jsxs("div",{className:"use-case-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:u,className:"back-btn",children:[n.jsx(jn,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"toolbar-controls",children:[n.jsx("button",{onClick:()=>nA(!z),className:`tool-btn ${z?"active":""}`,children:n.jsx(Bb,{size:16})}),n.jsx("button",{onClick:()=>FA(!fA),className:`tool-btn ${fA?"active":""}`,children:n.jsx(u0,{size:16})}),n.jsx("button",{onClick:Ge,className:"tool-btn",children:n.jsx(Ur,{size:16})}),n.jsxs("span",{className:"zoom-level",children:[Math.round(rA*100),"%"]}),n.jsx("button",{onClick:Fe,className:"tool-btn",children:n.jsx(Qr,{size:16})}),n.jsx("button",{onClick:ke,className:"tool-btn",children:n.jsx(h0,{size:16})}),n.jsx("button",{onClick:Ve,className:"tool-btn",children:"Auto"})]}),n.jsxs("div",{className:"export-buttons",children:[n.jsxs("button",{onClick:T,className:"export-btn",children:[n.jsx(on,{size:16})," Export Image"]}),n.jsxs("button",{onClick:xe,className:"export-btn",children:[n.jsx(Na,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const k=new Blob([qe()],{type:"application/json"}),QA=URL.createObjectURL(k),SA=document.createElement("a");SA.href=QA,SA.download=`${i.name||"use-case-diagram"}.json`,document.body.appendChild(SA),SA.click(),document.body.removeChild(SA),URL.revokeObjectURL(QA)},className:"export-btn",children:[n.jsx(Nn,{size:16})," Export JSON"]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${jA==="editor"?"active":""}`,onClick:()=>wA("editor"),children:"Diagram Editor"}),n.jsx("button",{className:`tab ${jA==="json"?"active":""}`,onClick:()=>wA("json"),children:"JSON Editor"})]}),jA==="editor"?n.jsxs("div",{className:"diagram-container",children:[n.jsxs("div",{className:"diagram-sidebar",children:[n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Actors"}),n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"text",value:h,onChange:k=>B(k.target.value),placeholder:"New actor name",onKeyPress:k=>k.key==="Enter"&&UA()}),n.jsxs("button",{onClick:UA,className:"add-btn",children:[n.jsx(Re,{size:16})," Add Actor"]})]}),n.jsx("div",{className:"actor-list",children:r.map(k=>n.jsxs("div",{className:"list-item",children:[n.jsx("div",{className:"item-name",children:k.name}),n.jsx("button",{onClick:()=>D(k.id),className:"delete-btn",children:n.jsx(pe,{size:14})})]},k.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Use Cases"}),n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"text",value:m,onChange:k=>w(k.target.value),placeholder:"New use case name",onKeyPress:k=>k.key==="Enter"&&cA()}),n.jsxs("button",{onClick:cA,className:"add-btn",children:[n.jsx(Re,{size:16})," Add Use Case"]})]}),n.jsx("div",{className:"use-case-list",children:s.map(k=>n.jsxs("div",{className:"list-item",children:[n.jsx("div",{className:"item-name",children:k.name}),n.jsx("button",{onClick:()=>J(k.id),className:"delete-btn",children:n.jsx(pe,{size:14})})]},k.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Relationships"}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Source"}),n.jsxs("select",{value:Q||"",onChange:k=>F(k.target.value?parseInt(k.target.value):null),children:[n.jsx("option",{value:"",children:"Select source"}),n.jsx("optgroup",{label:"Actors",children:r.map(k=>n.jsx("option",{value:k.id,children:k.name},k.id))}),n.jsx("optgroup",{label:"Use Cases",children:s.map(k=>n.jsx("option",{value:k.id,children:k.name},k.id))})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Target"}),n.jsxs("select",{value:N||"",onChange:k=>eA(k.target.value?parseInt(k.target.value):null),children:[n.jsx("option",{value:"",children:"Select target"}),n.jsx("optgroup",{label:"Actors",children:r.map(k=>n.jsx("option",{value:k.id,children:k.name},k.id))}),n.jsx("optgroup",{label:"Use Cases",children:s.map(k=>n.jsx("option",{value:k.id,children:k.name},k.id))})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Relationship Type"}),n.jsxs("select",{value:P,onChange:k=>lA(k.target.value),children:[n.jsx("option",{value:"association",children:"Association"}),n.jsx("option",{value:"include",children:"Include"}),n.jsx("option",{value:"extend",children:"Extend"}),n.jsx("option",{value:"generalization",children:"Generalization"})]})]}),n.jsxs("button",{onClick:MA,disabled:!Q||!N,className:"add-btn",children:[n.jsx(Xi,{size:16})," Add Relationship"]})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Current Relationships"}),n.jsx("div",{className:"relationship-list",children:o.map(k=>{let QA,SA,KA="",ae="";return QA=r.find(XA=>XA.id===k.source),QA?KA=QA.name:(QA=s.find(XA=>XA.id===k.source),QA&&(KA=QA.name)),SA=r.find(XA=>XA.id===k.target),SA?ae=SA.name:(SA=s.find(XA=>XA.id===k.target),SA&&(ae=SA.name)),!QA||!SA?null:n.jsxs("div",{className:"list-item",children:[n.jsxs("div",{className:"item-name",children:[KA," → ",ae," (",k.type,")"]}),n.jsx("button",{onClick:()=>K(k.id),className:"delete-btn",children:n.jsx(pe,{size:14})})]},k.id)})})]})]}),n.jsx("div",{className:"diagram-canvas-container",ref:V,onMouseDown:Oe,children:n.jsxs("div",{className:"diagram-canvas",ref:U,style:{transform:`scale(${rA}) translate(${RA.x/rA}px, ${RA.y/rA}px)`,transformOrigin:"0 0"},children:[W(),o.map(CA),r.map(iA),s.map(oA)]})})]}):n.jsxs("div",{className:"json-editor",children:[n.jsx("div",{className:"json-actions",children:n.jsxs("button",{onClick:()=>{const k=document.createElement("input");k.type="file",k.accept=".json",k.onchange=C,k.click()},className:"import-btn",children:[n.jsx(sn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:uA,onChange:k=>kA(k.target.value),className:"json-textarea"}),n.jsxs("button",{onClick:fe,className:"import-btn",children:[n.jsx(ka,{size:16})," Apply JSON"]})]}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},P2=({sequenceDiagrams:i,onCreateSequenceDiagram:r,onLoadSequenceDiagram:s,onDeleteSequenceDiagram:o})=>{const[d,u]=H.useState(!1);return n.jsxs("div",{className:"sequence-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(Sb,{size:48})}),n.jsx("h2",{children:"Sequence Diagram Designer"}),n.jsx("p",{children:"Model interactions between objects in sequential order"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Re,{size:16})," New Diagram"]})}),i.length>0&&n.jsxs("div",{className:"diagram-list",children:[n.jsx("h3",{children:"Your Sequence Diagrams"}),i.map(h=>n.jsxs("div",{className:"diagram-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"diagram-card-content",children:[n.jsx("div",{className:"diagram-card-name",children:h.name}),n.jsxs("div",{className:"diagram-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.participants?.length||0," participants • ",h.messages?.length||0," messages"]})]})]}),n.jsxs("div",{className:"diagram-card-actions",children:[n.jsx("button",{onClick:B=>{B.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Hn,{size:16})}),n.jsx("button",{onClick:B=>{B.stopPropagation(),confirm("Delete this diagram?")&&o(h.id)},className:"delete-btn",children:n.jsx(pe,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Sequence Diagram"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Diagram Name"}),n.jsx("input",{type:"text",placeholder:"e.g., User Login Process",id:"diagramName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("diagramName").value;h.trim()&&(r(h),u(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},$2=({sequenceDiagram:i,participants:r=[],messages:s=[],onUpdateSequenceDiagram:o,onBack:d})=>{const[u,h]=H.useState(""),[B,m]=H.useState(""),[w,Q]=H.useState(""),[F,N]=H.useState(""),[eA,P]=H.useState("sync"),[lA,jA]=H.useState("actor"),[wA,uA]=H.useState("editor"),[kA,sA]=H.useState(""),[xA,X]=H.useState(1),[EA,z]=H.useState(150),nA=H.useRef(null);H.useEffect(()=>{sA(JSON.stringify({participants:r,messages:s},null,2))},[r,s]);const fA=()=>{if(!u.trim())return;const M=[...r,{id:Date.now(),name:u,type:lA}];o({...i,participants:M}),h("")},FA=()=>{if(!B.trim()||!w||!F)return;const M=r.find(cA=>cA.id===parseInt(w)),yA=r.find(cA=>cA.id===parseInt(F));if(!M||!yA)return;const UA=[...s,{id:Date.now(),text:B,from:M.id,to:yA.id,type:eA,order:s.length+1,activationStart:eA==="sync"||eA==="create",activationEnd:!1}];o({...i,messages:UA}),m(""),Q(""),N("")},rA=M=>{const yA=r.filter(D=>D.id!==M),cA=s.filter(D=>!(D.from===M||D.to===M)).map((D,J)=>({...D,order:J+1}));o({...i,participants:yA,messages:cA})},LA=M=>{const UA=s.filter(cA=>cA.id!==M).map((cA,D)=>({...cA,order:D+1}));o({...i,messages:UA})},RA=M=>{const yA=s.findIndex(cA=>cA.id===M);if(yA<=0)return;const UA=[...s];[UA[yA-1],UA[yA]]=[UA[yA],UA[yA-1]],UA.forEach((cA,D)=>{cA.order=D+1}),o({...i,messages:UA})},IA=M=>{const yA=s.findIndex(cA=>cA.id===M);if(yA>=s.length-1)return;const UA=[...s];[UA[yA],UA[yA+1]]=[UA[yA+1],UA[yA]],UA.forEach((cA,D)=>{cA.order=D+1}),o({...i,messages:UA})},_=()=>JSON.stringify({participants:r,messages:s},null,2),aA=()=>{navigator.clipboard.writeText(_())},hA=()=>{try{const M=JSON.parse(kA);Array.isArray(M.participants)&&Array.isArray(M.messages)?o({...i,participants:M.participants,messages:M.messages}):alert("Invalid JSON format. Expected participants and messages arrays.")}catch(M){alert("Error parsing JSON: "+M.message)}},OA=M=>{const yA=M.target.files[0];if(!yA)return;const UA=new FileReader;UA.onload=cA=>{sA(cA.target.result)},UA.readAsText(yA)},U=()=>{if(!nA.current)return;const M=nA.current.style.transform;nA.current.style.transform="scale(1) translate(0px, 0px)";const yA=document.createElement("canvas"),UA=nA.current.getBoundingClientRect();yA.width=UA.width*2,yA.height=UA.height*2,Sr(()=>Promise.resolve().then(()=>Er),void 0).then(cA=>{cA.default(nA.current,{backgroundColor:"#ffffff",scale:2,useCORS:!0,logging:!0,allowTaint:!0}).then(D=>{const J=document.createElement("a");J.download=`${i.name||"sequence-diagram"}.png`,J.href=D.toDataURL("image/png"),J.click(),nA.current.style.transform=M}).catch(D=>{console.error("Error generating image:",D),nA.current.style.transform=M})})},V=M=>60+M*EA,dA=(M,yA)=>{const UA=V(yA);return n.jsx("div",{className:"participant-header",style:{left:`${UA-60}px`,top:"40px",width:"120px",height:"60px"},children:M.type==="actor"?n.jsxs("div",{className:"participant-actor",children:[n.jsx("div",{className:"actor-circle",children:n.jsx(dw,{size:16})}),n.jsx("div",{className:"actor-name",children:M.name})]}):n.jsx("div",{className:`participant-box ${M.type||"service"}`,children:n.jsx("span",{className:"participant-name",children:M.name})})},`header-${M.id}`)},tA=(M,yA)=>{const UA=V(yA),cA=110,D=Math.max(220+s.length*50,420);return n.jsx("div",{className:"lifeline",style:{left:`${UA-1}px`,top:`${cA}px`,width:"2px",height:`${D-cA}px`}},`lifeline-${M.id}`)},vA=(M,yA)=>{const UA=V(yA),cA=[],D=[];if(s.sort((J,MA)=>J.order-MA.order).forEach((J,MA)=>{const K=150+MA*50;if((J.to===M&&(J.type==="sync"||J.type==="create")||J.from===M&&J.type==="self")&&D.push({start:K,messageId:J.id}),J.from===M&&J.type==="return"){const BA=D.pop();BA&&cA.push({...BA,end:K+20,height:K+20-BA.start})}}),D.length>0){const J=150+s.length*50;D.forEach(MA=>{cA.push({...MA,end:J,height:J-MA.start})})}return cA.map((J,MA)=>n.jsx("div",{className:"activation-box",style:{left:`${UA-8}px`,top:`${J.start}px`,width:"16px",height:`${J.height-23}px`}},`activation-${M}-${MA}`))},HA=(M,yA)=>{const UA=r.findIndex(oe=>oe.id===M.from),cA=r.findIndex(oe=>oe.id===M.to);if(UA===-1||cA===-1)return null;const D=150+yA*50,J=V(UA),MA=V(cA),K=M.from===M.to,YA=(oe=>{switch(oe){case"async":return{stroke:"#3b82f6",strokeDasharray:"5,5",arrowType:"open"};case"return":return{stroke:"#10b981",strokeDasharray:"8,4",arrowType:"open"};case"create":return{stroke:"#f59e0b",strokeDasharray:"none",arrowType:"filled"};case"destroy":return{stroke:"#ef4444",strokeDasharray:"none",arrowType:"filled"};case"self":return{stroke:"#8b5cf6",strokeDasharray:"none",arrowType:"filled"};default:return{stroke:"#64748b",strokeDasharray:"none",arrowType:"filled"}}})(M.type);if(K){const oe=Math.max(40,EA*.3);return n.jsx("div",{className:"message-container",children:n.jsxs("svg",{className:"message-svg",style:{overflow:"visible"},children:[n.jsx("path",{d:`M ${J} ${D} L ${J+oe} ${D} L ${J+oe} ${D+20} L ${J} ${D+20}`,fill:"none",stroke:YA.stroke,strokeWidth:"2",strokeDasharray:YA.strokeDasharray}),n.jsx("polygon",{points:`${J-8},${D+10} ${J},${D+20} ${J-8},${D+30}`,fill:YA.stroke}),n.jsx("text",{x:J+oe+10,y:D+15,fontSize:"12",fill:YA.stroke,className:"message-text",children:M.text})]})},M.id)}const _A=J<MA?1:-1,ZA=_A>0?MA-8:MA+8,ne=(J+MA)/2;return n.jsx("div",{className:"message-container",children:n.jsxs("svg",{className:"message-svg",style:{overflow:"visible"},children:[n.jsx("line",{x1:J,y1:D,x2:MA,y2:D,stroke:YA.stroke,strokeWidth:"2",strokeDasharray:YA.strokeDasharray}),YA.arrowType==="filled"?n.jsx("polygon",{points:_A>0?`${ZA},${D-6} ${MA},${D} ${ZA},${D+6}`:`${ZA},${D-6} ${MA},${D} ${ZA},${D+6}`,fill:YA.stroke}):n.jsx("path",{d:_A>0?`M ${ZA},${D-6} L ${MA},${D} L ${ZA},${D+6}`:`M ${ZA},${D-6} L ${MA},${D} L ${ZA},${D+6}`,fill:"none",stroke:YA.stroke,strokeWidth:"2"}),n.jsx("text",{x:ne,y:D-8,textAnchor:"middle",fontSize:"12",fill:YA.stroke,className:"message-text",children:M.text}),n.jsx("text",{x:J+(_A>0?-15:15),y:D-8,textAnchor:"middle",fontSize:"10",fill:"#64748b",className:"message-order",children:M.order})]})},M.id)};return n.jsxs("div",{className:"sequence-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:d,className:"back-btn",children:[n.jsx(jn,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"spacing-controls",children:[n.jsx("label",{children:"Spacing:"}),n.jsx("button",{onClick:()=>z(Math.max(100,EA-25)),disabled:EA<=100,className:"spacing-btn",children:n.jsx(ou,{size:14})}),n.jsxs("span",{className:"spacing-value",children:[EA,"px"]}),n.jsx("button",{onClick:()=>z(Math.min(300,EA+25)),disabled:EA>=300,className:"spacing-btn",children:n.jsx(Re,{size:14})})]}),n.jsxs("div",{className:"zoom-controls",children:[n.jsx("button",{onClick:()=>X(Math.max(.5,xA-.1)),disabled:xA<=.5,className:"zoom-btn",children:"-"}),n.jsxs("span",{className:"zoom-level",children:[Math.round(xA*100),"%"]}),n.jsx("button",{onClick:()=>X(Math.min(2,xA+.1)),disabled:xA>=2,className:"zoom-btn",children:"+"})]}),n.jsxs("div",{className:"export-buttons",children:[n.jsxs("button",{onClick:U,className:"export-btn",children:[n.jsx(on,{size:16})," Export Image"]}),n.jsxs("button",{onClick:aA,className:"export-btn",children:[n.jsx(Na,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const M=new Blob([_()],{type:"application/json"}),yA=URL.createObjectURL(M),UA=document.createElement("a");UA.href=yA,UA.download=`${i.name||"sequence-diagram"}.json`,document.body.appendChild(UA),UA.click(),document.body.removeChild(UA),URL.revokeObjectURL(yA)},className:"export-btn",children:[n.jsx(Nn,{size:16})," Export JSON"]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${wA==="editor"?"active":""}`,onClick:()=>uA("editor"),children:"Diagram Editor"}),n.jsx("button",{className:`tab ${wA==="json"?"active":""}`,onClick:()=>uA("json"),children:"JSON Editor"})]}),wA==="editor"?n.jsxs("div",{className:"diagram-container",children:[n.jsxs("div",{className:"diagram-sidebar",children:[n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Participants"}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",value:u,onChange:M=>h(M.target.value),placeholder:"New participant name",onKeyPress:M=>M.key==="Enter"&&fA()})}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Type"}),n.jsxs("select",{value:lA,onChange:M=>jA(M.target.value),children:[n.jsx("option",{value:"actor",children:"Actor (User)"}),n.jsx("option",{value:"service",children:"Service"}),n.jsx("option",{value:"database",children:"Database"}),n.jsx("option",{value:"external",children:"External System"})]})]}),n.jsxs("button",{onClick:fA,className:"add-btn",children:[n.jsx(Re,{size:16})," Add Participant"]}),n.jsx("div",{className:"participant-list",children:r.map(M=>n.jsxs("div",{className:"list-item",children:[n.jsxs("div",{className:"item-info",children:[n.jsx("div",{className:"item-name",children:M.name}),n.jsx("div",{className:"item-type",children:M.type})]}),n.jsx("button",{onClick:()=>rA(M.id),className:"delete-btn",children:n.jsx(pe,{size:14})})]},M.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Messages"}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",value:B,onChange:M=>m(M.target.value),placeholder:"Message text",onKeyPress:M=>M.key==="Enter"&&FA()})}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"From"}),n.jsxs("select",{value:w||"",onChange:M=>Q(M.target.value),children:[n.jsx("option",{value:"",children:"Select participant"}),r.map(M=>n.jsx("option",{value:M.id,children:M.name},M.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"To"}),n.jsxs("select",{value:F||"",onChange:M=>N(M.target.value),children:[n.jsx("option",{value:"",children:"Select participant"}),r.map(M=>n.jsx("option",{value:M.id,children:M.name},M.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Message Type"}),n.jsxs("select",{value:eA,onChange:M=>P(M.target.value),children:[n.jsx("option",{value:"sync",children:"Synchronous Call"}),n.jsx("option",{value:"async",children:"Asynchronous Call"}),n.jsx("option",{value:"return",children:"Return Message"}),n.jsx("option",{value:"create",children:"Create Message"}),n.jsx("option",{value:"destroy",children:"Destroy Message"}),n.jsx("option",{value:"self",children:"Self Call"})]})]}),n.jsxs("button",{onClick:FA,disabled:!B.trim()||!w||!F,className:"add-btn",children:[n.jsx(Xi,{size:16})," Add Message"]})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Message Sequence"}),n.jsx("div",{className:"message-list",children:s.sort((M,yA)=>M.order-yA.order).map(M=>{const yA=r.find(cA=>cA.id===M.from),UA=r.find(cA=>cA.id===M.to);return!yA||!UA?null:n.jsxs("div",{className:"message-item",children:[n.jsxs("div",{className:"message-info",children:[n.jsxs("div",{className:"message-order",children:[M.order,"."]}),n.jsxs("div",{className:"message-text",children:[yA.name," → ",UA.name,": ",M.text]}),n.jsx("div",{className:`message-type ${M.type}`,children:M.type})]}),n.jsxs("div",{className:"message-actions",children:[n.jsx("button",{onClick:()=>RA(M.id),disabled:M.order===1,className:"move-btn",children:"↑"}),n.jsx("button",{onClick:()=>IA(M.id),disabled:M.order===s.length,className:"move-btn",children:"↓"}),n.jsx("button",{onClick:()=>LA(M.id),className:"delete-btn",children:n.jsx(pe,{size:14})})]})]},M.id)})})]})]}),n.jsx("div",{className:"diagram-canvas-wrapper",children:n.jsxs("div",{className:"diagram-canvas",ref:nA,style:{transform:`scale(${xA})`,transformOrigin:"top left"},children:[r.map((M,yA)=>dA(M,yA)),r.map((M,yA)=>tA(M,yA)),r.map((M,yA)=>vA(M.id,yA)),s.sort((M,yA)=>M.order-yA.order).map((M,yA)=>HA(M,yA))]})})]}):n.jsxs("div",{className:"json-editor",children:[n.jsx("div",{className:"json-actions",children:n.jsxs("button",{onClick:()=>{const M=document.createElement("input");M.type="file",M.accept=".json",M.onchange=OA,M.click()},className:"import-btn",children:[n.jsx(sn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:kA,onChange:M=>sA(M.target.value),className:"json-textarea"}),n.jsxs("button",{onClick:hA,className:"import-btn",children:[n.jsx(ka,{size:16})," Apply JSON"]})]}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},AQ=({architectureDiagrams:i,onCreateArchitectureDiagram:r,onLoadArchitectureDiagram:s,onDeleteArchitectureDiagram:o})=>{const[d,u]=H.useState(!1);return n.jsxs("div",{className:"architecture-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(d0,{size:48})}),n.jsx("h2",{children:"Architecture Diagram Designer"}),n.jsx("p",{children:"Model system components and their relationships"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Re,{size:16})," New Diagram"]})}),i.length>0&&n.jsxs("div",{className:"diagram-list",children:[n.jsx("h3",{children:"Your Architecture Diagrams"}),i.map(h=>n.jsxs("div",{className:"diagram-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"diagram-card-content",children:[n.jsx("div",{className:"diagram-card-name",children:h.name}),n.jsxs("div",{className:"diagram-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.components?.length||0," components • ",h.connections?.length||0," connections"]})]})]}),n.jsxs("div",{className:"diagram-card-actions",children:[n.jsx("button",{onClick:B=>{B.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Hn,{size:16})}),n.jsx("button",{onClick:B=>{B.stopPropagation(),confirm("Delete this diagram?")&&o(h.id)},className:"delete-btn",children:n.jsx(pe,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Architecture Diagram"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Diagram Name"}),n.jsx("input",{type:"text",placeholder:"e.g., System Architecture",id:"diagramName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("diagramName").value;h.trim()&&(r(h),u(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},ji=[{id:"service",name:"Service",icon:n.jsx($b,{size:20}),color:"#6366f1"},{id:"database",name:"Database",icon:n.jsx(sb,{size:20}),color:"#10b981"},{id:"compute",name:"Compute",icon:n.jsx(ib,{size:20}),color:"#f59e0b"},{id:"storage",name:"Storage",icon:n.jsx(wb,{size:20}),color:"#8b5cf6"},{id:"network",name:"Network",icon:n.jsx(Ib,{size:20}),color:"#3b82f6"},{id:"cloud",name:"Cloud",icon:n.jsx(nb,{size:20}),color:"#ec4899"},{id:"router",name:"Router",icon:n.jsx(qb,{size:20}),color:"#14b8a6"},{id:"user",name:"User",icon:n.jsx(su,{size:20}),color:"#84cc16"},{id:"device",name:"Device",icon:n.jsx(nw,{size:20}),color:"#f97316"},{id:"internet",name:"Internet",icon:n.jsx(xb,{size:20}),color:"#06b6d4"},{id:"security",name:"Security",icon:n.jsx(ew,{size:20}),color:"#ef4444"},{id:"module",name:"Module",icon:n.jsx(l0,{size:20}),color:"#0ea5e9"},{id:"application",name:"Application",icon:n.jsx(VB,{size:20}),color:"#9333ea"},{id:"layer",name:"Layer",icon:n.jsx(d0,{size:20}),color:"#facc15"},{id:"gateway",name:"Gateway",icon:n.jsx(gw,{size:20}),color:"#22d3ee"},{id:"custom",name:"Custom",icon:n.jsx(Re,{size:20}),color:"#64748b"}],eQ=({architectureDiagram:i={name:"Architecture Diagram",components:[],connections:[],groups:[]},components:r=[],connections:s=[],groups:o=[],onUpdateArchitectureDiagram:d=()=>{},onBack:u=()=>{}})=>{const[h,B]=H.useState(""),[m,w]=H.useState(""),[Q,F]=H.useState(""),[N,eA]=H.useState(""),[P,lA]=H.useState("solid"),[jA,wA]=H.useState("directed"),[uA,kA]=H.useState("editor"),[sA,xA]=H.useState(""),[X,EA]=H.useState(null),[z,nA]=H.useState({x:0,y:0}),[fA,FA]=H.useState({}),[rA,LA]=H.useState("service"),[RA,IA]=H.useState(!1),[_,aA]=H.useState(""),[hA,OA]=H.useState("file"),[U,V]=H.useState(null),[dA,tA]=H.useState(""),[vA,HA]=H.useState(""),[M,yA]=H.useState([]),[UA,cA]=H.useState([]),[D,J]=H.useState(1),[MA,K]=H.useState({width:2e3,height:2e3}),BA=H.useRef(null),YA=H.useRef(null),_A=r.length>0?r:i.components||[],ZA=s.length>0?s:i.connections||[],ne=o.length>0?o:i.groups||[];H.useEffect(()=>{xA(JSON.stringify({components:_A,connections:ZA,groups:ne},null,2))},[_A,ZA,ne]),H.useEffect(()=>{if(_A.length===0&&ne.length===0)return;let f=1/0,g=-1/0,b=1/0,v=-1/0;_A.forEach(G=>{f=Math.min(f,G.x),g=Math.max(g,G.x+G.width),b=Math.min(b,G.y),v=Math.max(v,G.y+G.height)}),ne.forEach(G=>{f=Math.min(f,G.x),g=Math.max(g,G.x+G.width),b=Math.min(b,G.y),v=Math.max(v,G.y+G.height)});const E=200,I=Math.max(2e3,g-f+E*2),L=Math.max(2e3,v-b+E*2);K({width:I,height:L})},[_A,ne]);const oe=(f,g=new Set)=>{if(g.has(f))return 0;g.add(f);let b=0;return ne.forEach(v=>{v.groupIds&&v.groupIds.includes(f)&&(b=Math.max(b,oe(v.id,g)+1))}),b},Oe=()=>{if(!h.trim())return;const f=ji.find(b=>b.id===rA)||ji[0],g=[..._A,{id:Date.now(),name:h,type:rA,x:50+Math.random()*200,y:50+Math.random()*200,width:120,height:120,color:f.color,imageUrl:_}];d({...i,components:g,connections:ZA,groups:ne}),B(""),aA(""),IA(!1)},Fe=()=>{if(!vA.trim())return;if(M.length===0&&UA.length===0){alert("Please select at least one component or group to create a group.");return}let f=1/0,g=-1/0,b=1/0,v=-1/0;M.forEach(G=>{f=Math.min(f,G.x),g=Math.max(g,G.x+G.width),b=Math.min(b,G.y),v=Math.max(v,G.y+G.height)}),UA.forEach(G=>{f=Math.min(f,G.x),g=Math.max(g,G.x+G.width),b=Math.min(b,G.y),v=Math.max(v,G.y+G.height)}),f===1/0&&(f=100,g=300,b=100,v=200);const E=40,I={id:Date.now(),name:vA,componentIds:M.map(G=>G.id),groupIds:UA.map(G=>G.id),x:f-E,y:b-E,width:Math.max(200,g-f+E*2),height:Math.max(150,v-b+E*2),color:"#e2e8f0"},L=[...ne,I];d({...i,components:_A,connections:ZA,groups:L}),HA(""),yA([]),cA([])},Ge=()=>{if(!Q||!N)return;const f=_A.find(v=>v.id===parseInt(Q)),g=_A.find(v=>v.id===parseInt(N));if(!f||!g)return;const b=[...ZA,{id:Date.now(),from:f.id,to:g.id,type:P,direction:jA,label:m||"",color:"#64748b"}];d({...i,components:_A,connections:b,groups:ne}),w(""),F(""),eA("")},ke=f=>{const g=_A.filter(E=>E.id!==f),b=ZA.filter(E=>!(E.from===f||E.to===f)),v=ne.map(E=>({...E,componentIds:E.componentIds.filter(I=>I!==f)})).filter(E=>E.componentIds.length>0||E.groupIds&&E.groupIds.length>0);d({...i,components:g,connections:b,groups:v})},Ve=f=>{const g=ZA.filter(b=>b.id!==f);d({...i,components:_A,connections:g,groups:ne})},qe=f=>{const g=ne.filter(b=>b.id!==f);d({...i,components:_A,connections:ZA,groups:g})},xe=(f,g,b=!1)=>{f.preventDefault(),f.stopPropagation();const v=BA.current.getBoundingClientRect(),E=(f.clientX-v.left)/D,I=(f.clientY-v.top)/D;if(EA({...g,isGroup:b}),nA({x:E-g.x,y:I-g.y}),b){const L={};g.componentIds&&g.componentIds.forEach(G=>{const q=_A.find(TA=>TA.id===G);q&&(L[`component_${G}`]={x:q.x,y:q.y})}),g.groupIds&&g.groupIds.forEach(G=>{const q=ne.find(TA=>TA.id===G);q&&(L[`group_${G}`]={x:q.x,y:q.y})}),FA(L)}},fe=(f,g)=>{f.stopPropagation(),f.shiftKey?yA(b=>b.some(E=>E.id===g.id)?b.filter(E=>E.id!==g.id):[...b,g]):(yA([g]),cA([]))},C=(f,g)=>{f.stopPropagation(),f.shiftKey?cA(b=>b.some(E=>E.id===g.id)?b.filter(E=>E.id!==g.id):[...b,g]):(cA([g]),yA([]))},T=H.useCallback(f=>{if(!X)return;const g=BA.current.getBoundingClientRect(),b=Math.max(0,(f.clientX-g.left)/D-z.x),v=Math.max(0,(f.clientY-g.top)/D-z.y);if(X.isGroup){const E=b-X.x,I=v-X.y,L=_A.map(q=>{if(X.componentIds&&X.componentIds.includes(q.id)){const TA=fA[`component_${q.id}`];if(TA)return{...q,x:Math.max(0,TA.x+E),y:Math.max(0,TA.y+I)}}return q}),G=ne.map(q=>{if(q.id===X.id)return{...q,x:Math.max(0,b),y:Math.max(0,v)};if(X.groupIds&&X.groupIds.includes(q.id)){const TA=fA[`group_${q.id}`];if(TA)return{...q,x:Math.max(0,TA.x+E),y:Math.max(0,TA.y+I)}}return q});d({...i,components:L,connections:ZA,groups:G})}else{const E=_A.map(I=>I.id===X.id?{...I,x:Math.max(0,b),y:Math.max(0,v)}:I);d({...i,components:E,connections:ZA,groups:ne})}},[X,z,fA,_A,ZA,ne,i,d,D]),W=H.useCallback(()=>{EA(null),FA({})},[]);H.useEffect(()=>{if(X)return document.addEventListener("mousemove",T),document.addEventListener("mouseup",W),()=>{document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",W)}},[X,T,W]);const iA=f=>{V(f.id),tA(f.name)},oA=()=>{if(!U||!dA.trim())return;const f=_A.map(g=>g.id===U?{...g,name:dA}:g);d({...i,components:f,connections:ZA,groups:ne}),V(null),tA("")},CA=f=>{f.target===BA.current&&(yA([]),cA([]))},k=()=>JSON.stringify({components:_A,connections:ZA,groups:ne},null,2),QA=()=>{navigator.clipboard.writeText(k())},SA=()=>{try{const f=JSON.parse(sA);Array.isArray(f.components)&&Array.isArray(f.connections)?d({...i,components:f.components||[],connections:f.connections||[],groups:f.groups||[]}):alert("Invalid JSON format. Expected components and connections arrays.")}catch(f){alert("Error parsing JSON: "+f.message)}},KA=f=>{const g=f.target.files[0];if(!g)return;const b=new FileReader;b.onload=v=>{xA(v.target.result)},b.readAsText(g)},ae=f=>{const g=f.target.files[0];if(!g)return;const b=new FileReader;b.onload=v=>{aA(v.target.result)},b.readAsDataURL(g)},XA=f=>{aA(f.target.value)},le=()=>{J(f=>Math.min(2,f+.1))},te=()=>{J(f=>Math.max(.5,f-.1))},be=()=>{J(1)},ut=()=>{if(!BA.current)return;const f=BA.current.style.transform,g=BA.current.style.width,b=BA.current.style.height;BA.current.style.width=`${MA.width}px`,BA.current.style.height=`${MA.height}px`,Sr(()=>Promise.resolve().then(()=>Er),void 0).then(v=>{v.default(BA.current,{backgroundColor:"#f8fafc",scale:2,useCORS:!0,width:MA.width,height:MA.height}).then(E=>{const I=document.createElement("a");I.download=`${i.name||"architecture-diagram"}.png`,I.href=E.toDataURL("image/png"),I.click(),BA.current.style.transform=f,BA.current.style.width=g,BA.current.style.height=b})})},Me=(f,g)=>{const b=f.x+f.width/2,v=f.y+f.height/2,E=g.x+g.width/2,I=g.y+g.height/2,L=E-b,G=I-v;let q,TA;Math.abs(L)>Math.abs(G)?(q=L>0?f.x+f.width:f.x,TA=v):(q=b,TA=G>0?f.y+f.height:f.y);let pA,DA;return Math.abs(L)>Math.abs(G)?(pA=L>0?g.x:g.x+g.width,DA=I):(pA=E,DA=G>0?g.y:g.y+g.height),{fromX:q,fromY:TA,toX:pA,toY:DA}},ye=f=>{const g=ji.find(E=>E.id===f.type)||ji[0],b=M.some(E=>E.id===f.id),v=U===f.id;return n.jsxs("div",{className:"component",style:{position:"absolute",left:`${f.x}px`,top:`${f.y}px`,width:`${f.width}px`,height:`${f.height}px`,cursor:X?.id===f.id?"grabbing":"grab",outline:b?"3px dashed #3b82f6":"none",outlineOffset:"2px",zIndex:50,display:"flex",flexDirection:"column",background:"white",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",border:"2px solid #e2e8f0",overflow:"hidden",textAlign:"center",fontSize:"12px"},onMouseDown:E=>xe(E,f),onClick:E=>fe(E,f),onDoubleClick:()=>iA(f),children:[n.jsx("div",{style:{width:"100%",height:"70%",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",background:"#f8fafc",borderRadius:"10px 10px 0 0"},children:f.imageUrl?n.jsx("img",{src:f.imageUrl,alt:f.name,style:{maxWidth:"90%",maxHeight:"90%",objectFit:"contain",borderRadius:"6px"}}):n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",color:f.color||g.color},children:SB.cloneElement(g.icon,{size:48})})}),n.jsx("div",{style:{width:"100%",height:"30%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"6px 0px",color:"white",fontWeight:"600",borderRadius:"0 0 10px 10px",backgroundColor:f.color||g.color},children:v?n.jsx("input",{type:"text",value:dA,onChange:E=>tA(E.target.value),onBlur:oA,onKeyPress:E=>E.key==="Enter"&&oA(),autoFocus:!0,style:{width:"100%",border:"none",background:"rgba(255, 255, 255, 0.2)",color:"white",textAlign:"center",fontWeight:"600",outline:"none",fontSize:"11px"}}):n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{fontSize:"11px",fontWeight:"600",lineHeight:"1.2",marginBottom:"2px",wordBreak:"break-word",maxWidth:"100%"},children:f.name}),n.jsx("div",{style:{fontSize:"9px",opacity:"0.9",fontWeight:"500"},children:g.name})]})})]},f.id)},p=f=>{if(!f.componentIds&&!f.groupIds)return null;const g=_A.filter(L=>f.componentIds&&f.componentIds.includes(L.id)),b=ne.filter(L=>f.groupIds&&f.groupIds.includes(L.id)),v=UA.some(L=>L.id===f.id),I=10+oe(f.id)*5;return n.jsxs("div",{className:"group",style:{position:"absolute",left:`${f.x}px`,top:`${f.y}px`,width:`${f.width}px`,height:`${f.height}px`,backgroundColor:"rgba(226, 232, 240, 0.3)",border:"2px dashed #94a3b8",borderRadius:"12px",cursor:X?.id===f.id?"grabbing":"grab",outline:v?"3px dashed #8b5cf6":"none",outlineOffset:"2px",zIndex:I,paddingTop:"40px",boxSizing:"border-box",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)",pointerEvents:"auto"},onMouseDown:L=>xe(L,f,!0),onClick:L=>C(L,f),children:[n.jsxs("div",{style:{position:"absolute",top:"8px",left:"12px",right:"12px",fontWeight:"700",fontSize:"14px",color:"#1e293b",display:"flex",justifyContent:"space-between",alignItems:"center",pointerEvents:"auto",zIndex:I+1},children:[n.jsx("span",{style:{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:f.name}),n.jsx("button",{onClick:L=>{L.stopPropagation(),qe(f.id)},style:{background:"rgba(239, 68, 68, 0.1)",border:"1px solid rgba(239, 68, 68, 0.3)",color:"#ef4444",cursor:"pointer",padding:"4px",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",zIndex:I+2},children:n.jsx(pe,{size:14})})]}),n.jsxs("div",{style:{position:"absolute",bottom:"8px",left:"12px",fontSize:"11px",color:"#64748b",fontStyle:"italic",pointerEvents:"none"},children:[g.length," component",g.length!==1?"s":"",b.length>0&&`, ${b.length} group${b.length!==1?"s":""}`]})]},f.id)},S=f=>{const g=_A.find(zA=>zA.id===f.from),b=_A.find(zA=>zA.id===f.to);if(!g||!b)return null;const{fromX:v,fromY:E,toX:I,toY:L}=Me(g,b),G=I-v,q=L-E,TA=Math.atan2(q,G),pA=10;let DA={};return f.type==="dashed"?DA={strokeDasharray:"5,5",stroke:f.color||"#64748b"}:f.type==="dotted"?DA={strokeDasharray:"2,2",stroke:f.color||"#64748b"}:DA={stroke:f.color||"#64748b"},n.jsxs("svg",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:49},children:[n.jsx("line",{x1:v,y1:E,x2:I,y2:L,strokeWidth:"2",...DA}),f.direction==="directed"&&n.jsx("polygon",{points:`
              ${I-pA*Math.cos(TA-Math.PI/6)},${L-pA*Math.sin(TA-Math.PI/6)}
              ${I},${L}
              ${I-pA*Math.cos(TA+Math.PI/6)},${L-pA*Math.sin(TA+Math.PI/6)}
            `,fill:DA.stroke||"#64748b"}),f.label&&n.jsx("text",{x:(v+I)/2,y:(E+L)/2-10,textAnchor:"middle",fontSize:"12",fill:DA.stroke||"#475569",children:f.label})]},f.id)};return n.jsxs("div",{style:{width:"100%",height:"100vh",display:"flex",flexDirection:"column",background:"#f8fafc",fontFamily:"Inter, system-ui, -apple-system, sans-serif"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"16px",background:"white",borderBottom:"1px solid #e2e8f0",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[n.jsxs("button",{onClick:u,style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s",background:"#f1f5f9",color:"#64748b",border:"1px solid #e2e8f0"},children:[n.jsx(jn,{size:16})," Back"]}),n.jsx("h2",{style:{margin:"0 16px",fontSize:"20px",color:"#1e293b"},children:i.name}),n.jsx("div",{style:{flex:1}}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",marginRight:"16px",background:"#f1f5f9",borderRadius:"6px",padding:"4px"},children:[n.jsx("button",{onClick:te,style:{width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",background:"none",border:"none",borderRadius:"4px",cursor:"pointer",color:"#64748b"},title:"Zoom Out",children:n.jsx(Ur,{size:16})}),n.jsxs("div",{style:{minWidth:"60px",textAlign:"center",fontSize:"14px",fontWeight:"500"},children:[Math.round(D*100),"%"]}),n.jsx("button",{onClick:le,style:{width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",background:"none",border:"none",borderRadius:"4px",cursor:"pointer",color:"#64748b"},title:"Zoom In",children:n.jsx(Qr,{size:16})}),n.jsx("button",{onClick:be,style:{width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",background:"none",border:"none",borderRadius:"4px",cursor:"pointer",color:"#64748b",marginLeft:"4px"},title:"Reset Zoom",children:n.jsx(Qb,{size:16})})]}),n.jsxs("button",{onClick:ut,style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s",background:"#8b5cf6",color:"white",border:"1px solid #8b5cf6"},children:[n.jsx(on,{size:16})," Export Image"]}),n.jsxs("button",{onClick:QA,style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s",background:"#8b5cf6",color:"white",border:"1px solid #8b5cf6"},children:[n.jsx(Na,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const f=new Blob([k()],{type:"application/json"}),g=URL.createObjectURL(f),b=document.createElement("a");b.href=g,b.download=`${i.name||"architecture-diagram"}.json`,document.body.appendChild(b),b.click(),document.body.removeChild(b),URL.revokeObjectURL(g)},style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s",background:"#8b5cf6",color:"white",border:"1px solid #8b5cf6"},children:[n.jsx(Nn,{size:16})," Export JSON"]})]})]}),n.jsxs("div",{style:{display:"flex",borderBottom:"1px solid #e2e8f0",background:"white"},children:[n.jsx("button",{style:{padding:"12px 24px",border:"none",background:"none",cursor:"pointer",fontWeight:"500",color:uA==="editor"?"#8b5cf6":"#64748b",borderBottom:uA==="editor"?"2px solid #8b5cf6":"2px solid transparent"},onClick:()=>kA("editor"),children:"Diagram Editor"}),n.jsx("button",{style:{padding:"12px 24px",border:"none",background:"none",cursor:"pointer",fontWeight:"500",color:uA==="json"?"#8b5cf6":"#64748b",borderBottom:uA==="json"?"2px solid #8b5cf6":"2px solid transparent"},onClick:()=>kA("json"),children:"JSON Editor"})]}),uA==="editor"?n.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[n.jsxs("div",{style:{width:"320px",background:"white",borderRight:"1px solid #e2e8f0",display:"flex",flexDirection:"column",overflow:"auto"},children:[n.jsxs("div",{style:{padding:"16px",borderBottom:"1px solid #f1f5f9"},children:[n.jsx("h3",{style:{marginTop:"0",marginBottom:"12px",fontSize:"16px",color:"#1e293b"},children:"Components"}),n.jsx("div",{style:{marginBottom:"12px"},children:n.jsx("input",{type:"text",value:h,onChange:f=>B(f.target.value),placeholder:"Component name",onKeyPress:f=>f.key==="Enter"&&Oe(),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"}})}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"Component Type"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"8px",marginTop:"8px"},children:ji.map(f=>n.jsx("button",{onClick:()=>LA(f.id),title:f.name,style:{width:"100%",aspectRatio:"1",display:"flex",alignItems:"center",justifyContent:"center",border:"none",borderRadius:"6px",cursor:"pointer",color:"white",transition:"all 0.2s",backgroundColor:f.color,outline:rA===f.id?"2px solid #1e293b":"none",outlineOffset:"2px"},children:f.icon},f.id))})]}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsxs("button",{onClick:()=>IA(!RA),style:{width:"100%",padding:"8px",background:"#e2e8f0",border:"none",borderRadius:"6px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",fontSize:"14px"},children:[n.jsx(on,{size:16})," ",_?"Change Image":"Add Image (Optional)"]}),RA&&n.jsxs("div",{style:{marginTop:"8px"},children:[n.jsxs("div",{style:{display:"flex",marginBottom:"8px",borderBottom:"1px solid #e2e8f0"},children:[n.jsx("button",{onClick:()=>OA("file"),style:{flex:1,padding:"6px",border:"none",background:"none",cursor:"pointer",fontSize:"12px",color:hA==="file"?"#8b5cf6":"#64748b",borderBottom:hA==="file"?"2px solid #8b5cf6":"2px solid transparent"},children:"Upload File"}),n.jsx("button",{onClick:()=>OA("url"),style:{flex:1,padding:"6px",border:"none",background:"none",cursor:"pointer",fontSize:"12px",color:hA==="url"?"#8b5cf6":"#64748b",borderBottom:hA==="url"?"2px solid #8b5cf6":"2px solid transparent"},children:"URL"})]}),hA==="file"?n.jsx("input",{type:"file",accept:"image/*",onChange:ae,style:{width:"100%",marginBottom:"8px"}}):n.jsx("input",{type:"text",value:_,onChange:XA,placeholder:"Enter image URL",style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px",marginBottom:"8px"}}),_&&n.jsxs("div",{style:{position:"relative",marginTop:"8px",display:"flex",justifyContent:"center"},children:[n.jsx("img",{src:_,alt:"Preview",style:{maxWidth:"100%",maxHeight:"60px",borderRadius:"4px"}}),n.jsx("button",{onClick:()=>aA(""),style:{position:"absolute",top:"-8px",right:"-8px",width:"20px",height:"20px",borderRadius:"50%",background:"#fee2e2",color:"#ef4444",border:"none",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:n.jsx(pe,{size:12})})]})]})]}),n.jsxs("button",{onClick:Oe,disabled:!h.trim(),style:{width:"100%",padding:"8px 16px",background:h.trim()?"#8b5cf6":"#ddd6fe",color:"white",border:"none",borderRadius:"6px",fontWeight:"500",cursor:h.trim()?"pointer":"not-allowed",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginTop:"8px"},children:[n.jsx(Re,{size:16})," Add Component"]}),n.jsx("div",{style:{maxHeight:"200px",overflowY:"auto",marginTop:"12px"},children:_A.map(f=>n.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #f1f5f9"},children:[n.jsx("div",{style:{flex:1},children:n.jsx("div",{style:{fontSize:"14px",fontWeight:"500",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:f.name})}),n.jsx("button",{onClick:()=>ke(f.id),style:{width:"28px",height:"28px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:"#fee2e2",color:"#ef4444",border:"none",cursor:"pointer",marginLeft:"8px"},children:n.jsx(pe,{size:14})})]},f.id))})]}),n.jsxs("div",{style:{padding:"16px",borderBottom:"1px solid #f1f5f9"},children:[n.jsx("h3",{style:{marginTop:"0",marginBottom:"12px",fontSize:"16px",color:"#1e293b"},children:"Groups"}),n.jsx("div",{style:{marginBottom:"12px"},children:n.jsx("input",{type:"text",value:vA,onChange:f=>HA(f.target.value),placeholder:"Group name",onKeyPress:f=>f.key==="Enter"&&Fe(),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"}})}),n.jsxs("button",{onClick:Fe,disabled:!vA.trim()||M.length===0&&UA.length===0,style:{width:"100%",padding:"8px 16px",background:!vA.trim()||M.length===0&&UA.length===0?"#ddd6fe":"#8b5cf6",color:"white",border:"none",borderRadius:"6px",fontWeight:"500",cursor:!vA.trim()||M.length===0&&UA.length===0?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[n.jsx(l0,{size:16})," Create Group"]}),n.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"#f1f5f9",borderRadius:"6px",fontSize:"12px"},children:[M.length>0||UA.length>0?n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{marginBottom:"8px",fontWeight:"500"},children:[M.length," component(s), ",UA.length," group(s) selected"]}),n.jsxs("button",{onClick:()=>{yA([]),cA([])},style:{display:"flex",alignItems:"center",gap:"4px",background:"none",border:"none",color:"#64748b",cursor:"pointer",fontSize:"12px",padding:"4px 8px",borderRadius:"4px"},children:[n.jsx(ou,{size:14})," Clear Selection"]})]}):n.jsx("div",{children:"No items selected"}),n.jsx("div",{style:{marginTop:"8px",color:"#64748b",fontStyle:"italic"},children:"Hold Shift + Click to select multiple items"})]}),n.jsx("div",{style:{maxHeight:"200px",overflowY:"auto",marginTop:"12px"},children:ne.map(f=>n.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #f1f5f9"},children:[n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{fontSize:"14px",fontWeight:"500",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:f.name}),n.jsxs("div",{style:{fontSize:"12px",color:"#64748b",marginTop:"2px"},children:[f.componentIds?f.componentIds.length:0," components",f.groupIds&&f.groupIds.length>0&&`, ${f.groupIds.length} groups`]})]}),n.jsx("button",{onClick:()=>qe(f.id),style:{width:"28px",height:"28px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:"#fee2e2",color:"#ef4444",border:"none",cursor:"pointer",marginLeft:"8px"},children:n.jsx(pe,{size:14})})]},f.id))})]}),n.jsxs("div",{style:{padding:"16px",borderBottom:"1px solid #f1f5f9"},children:[n.jsx("h3",{style:{marginTop:"0",marginBottom:"12px",fontSize:"16px",color:"#1e293b"},children:"Connections"}),n.jsx("div",{style:{marginBottom:"12px"},children:n.jsx("input",{type:"text",value:m,onChange:f=>w(f.target.value),placeholder:"Connection label (optional)",onKeyPress:f=>f.key==="Enter"&&Ge(),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"}})}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"From Component"}),n.jsxs("select",{value:Q||"",onChange:f=>F(f.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"},children:[n.jsx("option",{value:"",children:"Select component"}),_A.map(f=>n.jsx("option",{value:f.id,children:f.name},f.id))]})]}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"To Component"}),n.jsxs("select",{value:N||"",onChange:f=>eA(f.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"},children:[n.jsx("option",{value:"",children:"Select component"}),_A.map(f=>n.jsx("option",{value:f.id,children:f.name},f.id))]})]}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"Connection Type"}),n.jsxs("select",{value:P,onChange:f=>lA(f.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"},children:[n.jsx("option",{value:"solid",children:"Solid Line"}),n.jsx("option",{value:"dashed",children:"Dashed Line"}),n.jsx("option",{value:"dotted",children:"Dotted Line"})]})]}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"Direction"}),n.jsxs("select",{value:jA,onChange:f=>wA(f.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"},children:[n.jsx("option",{value:"directed",children:"Directed (with arrow)"}),n.jsx("option",{value:"undirected",children:"Undirected"})]})]}),n.jsxs("button",{onClick:Ge,disabled:!Q||!N,style:{width:"100%",padding:"8px 16px",background:!Q||!N?"#ddd6fe":"#8b5cf6",color:"white",border:"none",borderRadius:"6px",fontWeight:"500",cursor:!Q||!N?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[n.jsx(Xi,{size:16})," Add Connection"]}),n.jsx("div",{style:{maxHeight:"200px",overflowY:"auto",marginTop:"12px"},children:ZA.map(f=>{const g=_A.find(v=>v.id===f.from),b=_A.find(v=>v.id===f.to);return!g||!b?null:n.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #f1f5f9"},children:[n.jsxs("div",{style:{flex:1},children:[n.jsxs("div",{style:{fontSize:"14px",fontWeight:"500",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[g.name," → ",b.name]}),n.jsx("div",{style:{fontSize:"12px",color:"#64748b",marginTop:"2px"},children:f.type}),f.label&&n.jsx("div",{style:{fontSize:"12px",color:"#64748b",marginTop:"2px"},children:f.label})]}),n.jsx("button",{onClick:()=>Ve(f.id),style:{width:"28px",height:"28px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:"#fee2e2",color:"#ef4444",border:"none",cursor:"pointer",marginLeft:"8px"},children:n.jsx(pe,{size:14})})]},f.id)})})]})]}),n.jsx("div",{ref:YA,style:{flex:1,overflow:"auto",position:"relative",background:"#f8fafc"},children:n.jsxs("div",{ref:BA,onClick:CA,style:{position:"absolute",width:`${MA.width}px`,height:`${MA.height}px`,background:"white",backgroundImage:"linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)",backgroundSize:"20px 20px",transform:`scale(${D})`,transformOrigin:"0 0"},children:[ne.map(p),ZA.map(S),_A.map(ye)]})})]}):n.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,padding:"16px",background:"white"},children:[n.jsx("div",{style:{display:"flex",gap:"8px",marginBottom:"12px"},children:n.jsxs("button",{onClick:()=>{const f=document.createElement("input");f.type="file",f.accept=".json",f.onchange=KA,f.click()},style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",border:"none",background:"#8b5cf6",color:"white"},children:[n.jsx(sn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:sA,onChange:f=>xA(f.target.value),style:{flex:1,padding:"12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontFamily:"monospace",fontSize:"14px",resize:"none",marginBottom:"12px"}}),n.jsxs("button",{onClick:SA,style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",border:"none",background:"#8b5cf6",color:"white",alignSelf:"flex-start"},children:[n.jsx(ka,{size:16})," Apply JSON"]})]})]})},tQ=({classDiagrams:i,onCreateClassDiagram:r,onLoadClassDiagram:s,onDeleteClassDiagram:o})=>{const[d,u]=H.useState(!1);return n.jsxs("div",{className:"class-diagram-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(s0,{size:48})}),n.jsx("h2",{children:"Class Diagram Designer"}),n.jsx("p",{children:"Model classes and their relationships in object-oriented design"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Re,{size:16})," New Diagram"]})}),i.length>0&&n.jsxs("div",{className:"diagram-list",children:[n.jsx("h3",{children:"Your Class Diagrams"}),i.map(h=>n.jsxs("div",{className:"diagram-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"diagram-card-content",children:[n.jsx("div",{className:"diagram-card-name",children:h.name}),n.jsxs("div",{className:"diagram-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.classes?.length||0," classes • ",h.relationships?.length||0," relationships"]})]})]}),n.jsxs("div",{className:"diagram-card-actions",children:[n.jsx("button",{onClick:B=>{B.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Hn,{size:16})}),n.jsx("button",{onClick:B=>{B.stopPropagation(),confirm("Delete this diagram?")&&o(h.id)},className:"delete-btn",children:n.jsx(pe,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Class Diagram"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Diagram Name"}),n.jsx("input",{type:"text",placeholder:"e.g., Banking System Classes",id:"diagramName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("diagramName").value;h.trim()&&(r(h),u(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},nQ=({classDiagram:i,classes:r=[],relationships:s=[],onUpdateClassDiagram:o,onBack:d})=>{const[u,h]=H.useState(""),[B,m]=H.useState(""),[w,Q]=H.useState(""),[F,N]=H.useState(""),[eA,P]=H.useState("association"),[lA,jA]=H.useState("editor"),[wA,uA]=H.useState(""),[kA,sA]=H.useState(null),[xA,X]=H.useState({x:0,y:0}),[EA,z]=H.useState(null),[nA,fA]=H.useState({x:0,y:0}),[FA,rA]=H.useState(null),[LA,RA]=H.useState(""),[IA,_]=H.useState(-1),[aA,hA]=H.useState({visibility:"+",name:"",type:"String"}),[OA,U]=H.useState({visibility:"+",name:"",returnType:"void"}),[V,dA]=H.useState(1),[tA,vA]=H.useState({x:0,y:0}),[HA,M]=H.useState(!1),[yA,UA]=H.useState({x:0,y:0}),cA=H.useRef(null),D=[{header:"#EC4899",border:"#BE185D",background:"#FDF2F8"},{header:"#DB2777",border:"#9D174D",background:"#FCE7F3"},{header:"#F472B6",border:"#EC4899",background:"#FDF2F8"},{header:"#F43F5E",border:"#E11D48",background:"#FFF1F2"},{header:"#F97316",border:"#EA580C",background:"#FFEDD5"},{header:"#8B5CF6",border:"#7C3AED",background:"#F5F3FF"},{header:"#3B82F6",border:"#2563EB",background:"#EFF6FF"},{header:"#10B981",border:"#059669",background:"#ECFDF5"},{header:"#EF4444",border:"#DC2626",background:"#FEF2F2"},{header:"#8B5A2B",border:"#A16207",background:"#FFFBEB"},{header:"#6B7280",border:"#4B5563",background:"#F9FAFB"},{header:"#14B8A6",border:"#0D9488",background:"#F0FDFA"}],J=["String","int","float","double","boolean","void","char","long","short","byte"],MA=[{value:"+",label:"Public (+)"},{value:"-",label:"Private (-)"},{value:"#",label:"Protected (#)"},{value:"~",label:"Package (~)"}];H.useEffect(()=>{uA(JSON.stringify({classes:r,relationships:s},null,2))},[r,s]);const K=()=>D[Math.floor(Math.random()*D.length)],BA=()=>{const p=r.map(S=>({...S,colorScheme:K()}));o({...i,classes:p})},YA=()=>{dA(p=>Math.min(p*1.2,3))},_A=()=>{dA(p=>Math.max(p/1.2,.3))},ZA=()=>{dA(1),vA({x:0,y:0})},ne=(p,S="12px",f="'SF Mono', monospace")=>{const b=document.createElement("canvas").getContext("2d");return b.font=`${S} ${f}`,b.measureText(p).width},oe=p=>{const g=ne(p.name,"16px","'Inter', sans-serif")+32;let b=0;p.attributes.forEach(Ae=>{const he=`${Ae.visibility} ${Ae.name} : ${Ae.type}`,ce=ne(he)+32;ce>b&&(b=ce)});let v=0;p.methods.forEach(Ae=>{const he=`${Ae.visibility} ${Ae.name} : ${Ae.returnType}`,ce=ne(he)+32;ce>v&&(v=ce)});const E=Math.max(180,g,b,v),I=40,L=26,G=6,q=1,TA=p.attributes.length>0?p.attributes.length*L+G*2:0,pA=p.methods.length>0?p.methods.length*L+G*2:0,DA=p.attributes.length>0&&p.methods.length>0?q:0,zA=I+TA+pA+DA;return{width:Math.min(E,400),height:Math.max(zA,60)}},Oe=()=>{if(!u.trim())return;const p=K(),S=oe({name:u,attributes:[],methods:[]}),f=[...r,{id:Date.now(),name:u,attributes:[],methods:[],x:50+Math.random()*200,y:50+Math.random()*200,width:S.width,height:S.height,colorScheme:p}];o({...i,classes:f}),h("")},Fe=p=>{const S=r.find(f=>f.id===p);S&&rA(S)},Ge=(p,S=-1)=>{const f=r.find(g=>g.id===p);f&&(RA("attribute"),_(S),S>=0?hA({...f.attributes[S]}):hA({visibility:"+",name:"",type:"String"}))},ke=(p,S=-1)=>{const f=r.find(g=>g.id===p);f&&(RA("method"),_(S),S>=0?U({...f.methods[S]}):U({visibility:"+",name:"",returnType:"void"}))},Ve=()=>{if(!aA.name.trim())return;const p=r.map(S=>{if(S.id===FA.id){const f=[...S.attributes];IA>=0?f[IA]={...aA}:f.push({...aA});const g={...S,attributes:f},b=oe(g);return{...g,width:b.width,height:b.height}}return S});o({...i,classes:p}),xe()},qe=()=>{if(!OA.name.trim())return;let p=OA.name;p.includes("(")||(p+="()");const S=r.map(f=>{if(f.id===FA.id){const g=[...f.methods];IA>=0?g[IA]={...OA,name:p}:g.push({...OA,name:p});const b={...f,methods:g},v=oe(b);return{...b,width:v.width,height:v.height}}return f});o({...i,classes:S}),xe()},xe=()=>{rA(null),RA(""),_(-1)},fe=()=>{if(!w||!F)return;const p=r.find(g=>g.id===parseInt(w)),S=r.find(g=>g.id===parseInt(F));if(!p||!S)return;const f=[...s,{id:Date.now(),from:p.id,to:S.id,type:eA,label:B||""}];o({...i,relationships:f}),m(""),Q(""),N("")},C=p=>{const S=r.filter(g=>g.id!==p),f=s.filter(g=>!(g.from===p||g.to===p));o({...i,classes:S,relationships:f})},T=(p,S)=>{const f=r.map(g=>{if(g.id===p){const b=g.attributes.filter((I,L)=>L!==S),v={...g,attributes:b},E=oe(v);return{...v,width:E.width,height:E.height}}return g});o({...i,classes:f})},W=(p,S)=>{const f=r.map(g=>{if(g.id===p){const b=g.methods.filter((I,L)=>L!==S),v={...g,methods:b},E=oe(v);return{...v,width:E.width,height:E.height}}return g});o({...i,classes:f})},iA=p=>{const S=s.filter(f=>f.id!==p);o({...i,relationships:S})},oA=(p,S=null,f=!1)=>{p.stopPropagation();const g=cA.current?.getBoundingClientRect();g&&(S?f?(z(S),fA({x:p.clientX,y:p.clientY})):(sA(S),X({x:(p.clientX-g.left)/V-tA.x-S.x,y:(p.clientY-g.top)/V-tA.y-S.y})):(M(!0),UA({x:p.clientX-tA.x,y:p.clientY-tA.y})))},CA=p=>{if(kA){const S=cA.current?.getBoundingClientRect();if(!S)return;const f=Math.max(0,(p.clientX-S.left)/V-tA.x-xA.x),g=Math.max(0,(p.clientY-S.top)/V-tA.y-xA.y),b=r.map(v=>v.id===kA.id?{...v,x:f,y:g}:v);o({...i,classes:b})}else if(EA){const S=(p.clientX-nA.x)/V,f=(p.clientY-nA.y)/V,g=r.map(b=>{if(b.id===EA.id){const v=Math.max(180,b.width+S),E=Math.max(90,b.height+f);return{...b,width:v,height:E}}return b});o({...i,classes:g}),fA({x:p.clientX,y:p.clientY})}else HA&&vA({x:p.clientX-yA.x,y:p.clientY-yA.y})},k=()=>{sA(null),z(null),M(!1)},QA=p=>{p.preventDefault();const S=p.deltaY>0?.9:1.1;dA(f=>Math.max(.3,Math.min(3,f*S)))};H.useEffect(()=>{if(kA||EA||HA)return document.addEventListener("mousemove",CA),document.addEventListener("mouseup",k),()=>{document.removeEventListener("mousemove",CA),document.removeEventListener("mouseup",k)}},[kA,EA,HA,xA,nA,yA,V,tA]);const SA=()=>JSON.stringify({classes:r,relationships:s},null,2),KA=()=>{navigator.clipboard.writeText(SA())},ae=()=>{try{const p=JSON.parse(wA);if(Array.isArray(p.classes)&&Array.isArray(p.relationships)){const S=p.classes.map(f=>({...f,...oe(f)}));o({...i,classes:S,relationships:p.relationships})}else alert("Invalid JSON format. Expected classes and relationships arrays.")}catch(p){alert("Error parsing JSON: "+p.message)}},XA=p=>{const S=p.target.files[0];if(!S)return;const f=new FileReader;f.onload=g=>{uA(g.target.result)},f.readAsText(S)},le=()=>{if(!cA.current)return;const p=cA.current.style.transform;cA.current.style.transform="scale(1) translate(0px, 0px)",Sr(()=>Promise.resolve().then(()=>Er),void 0).then(S=>{S.default(cA.current,{backgroundColor:"#f8fafc",scale:2,useCORS:!0}).then(f=>{const g=document.createElement("a");g.download=`${i.name||"class-diagram"}.png`,g.href=f.toDataURL("image/png"),g.click(),cA.current.style.transform=p})})},te=(p,S)=>{const f={x:p.x+p.width/2,y:p.y+p.height/2},g={x:S.x+S.width/2,y:S.y+S.height/2},b=g.x-f.x,v=g.y-f.y;f.x+(b>0?p.width/2:-p.width/2),f.y+(Math.abs(b)*p.height/p.width>Math.abs(v)?v>0?p.height/2:-p.height/2:(v>0?p.height/2:-p.height/2)*(p.width/p.height)),g.x+(b<0?S.width/2:-S.width/2),g.y+(Math.abs(b)*S.height/S.width>Math.abs(v)?v<0?S.height/2:-S.height/2:(v<0?S.height/2:-S.height/2)*(S.width/S.height));const E={x:Math.max(p.x,Math.min(p.x+p.width,Math.abs(b)>Math.abs(v)*(p.width/p.height)?f.x+(b>0?p.width/2:-p.width/2):f.x)),y:Math.max(p.y,Math.min(p.y+p.height,Math.abs(v)>Math.abs(b)*(p.height/p.width)?f.y+(v>0?p.height/2:-p.height/2):f.y))},I={x:Math.max(S.x,Math.min(S.x+S.width,Math.abs(b)>Math.abs(v)*(S.width/S.height)?g.x+(b<0?S.width/2:-S.width/2):g.x)),y:Math.max(S.y,Math.min(S.y+S.height,Math.abs(v)>Math.abs(b)*(S.height/S.width)?g.y+(v<0?S.height/2:-S.height/2):g.y))};return{fromPoint:E,toPoint:I}},be=(p,S)=>{if(Math.sqrt(Math.pow(S.x-p.x,2)+Math.pow(S.y-p.y,2))<300)return`M${p.x},${p.y} L${S.x},${S.y}`;const g=p.x+(S.x-p.x)*.5,b=p.y+(S.y-p.y)*.5;return Math.abs(S.x-p.x)>Math.abs(S.y-p.y)?`M${p.x},${p.y} L${g},${p.y} L${g},${S.y} L${S.x},${S.y}`:`M${p.x},${p.y} L${p.x},${b} L${S.x},${b} L${S.x},${S.y}`},ut=p=>{const S=p.colorScheme||D[0];return n.jsxs("div",{className:"class-box",style:{left:`${p.x}px`,top:`${p.y}px`,width:`${p.width}px`,height:`${p.height}px`,cursor:kA?.id===p.id?"grabbing":"grab",borderColor:S.border,backgroundColor:"white"},onMouseDown:f=>oA(f,p),onDoubleClick:()=>Fe(p.id),children:[n.jsx("div",{className:"class-header",style:{backgroundColor:S.header,color:"white"},children:n.jsx("div",{className:"class-name",children:p.name})}),n.jsxs("div",{className:"class-content",children:[p.attributes.length>0&&n.jsx("div",{className:"attributes-section",children:p.attributes.map((f,g)=>n.jsxs("div",{className:"class-item",onDoubleClick:b=>{b.stopPropagation(),Ge(p.id,g)},children:[n.jsxs("span",{className:"item-text",children:[f.visibility," ",f.name," : ",f.type]}),n.jsx("button",{onClick:b=>{b.stopPropagation(),T(p.id,g)},className:"item-delete-btn",children:n.jsx(pe,{size:10})})]},g))}),p.attributes.length>0&&p.methods.length>0&&n.jsx("div",{className:"section-divider",style:{backgroundColor:S.border}}),p.methods.length>0&&n.jsx("div",{className:"methods-section",children:p.methods.map((f,g)=>n.jsxs("div",{className:"class-item",onDoubleClick:b=>{b.stopPropagation(),ke(p.id,g)},children:[n.jsxs("span",{className:"item-text",children:[f.visibility," ",f.name," : ",f.returnType]}),n.jsx("button",{onClick:b=>{b.stopPropagation(),W(p.id,g)},className:"item-delete-btn",children:n.jsx(pe,{size:10})})]},g))})]}),n.jsx("div",{className:"resize-handle",style:{backgroundColor:S.header},onMouseDown:f=>oA(f,p,!0)})]},p.id)},Me=p=>{const S=r.find(q=>q.id===p.from),f=r.find(q=>q.id===p.to);if(!S||!f)return null;const g={x:S.x,y:S.y,width:S.width,height:S.height},b={x:f.x,y:f.y,width:f.width,height:f.height},{fromPoint:v,toPoint:E}=te(g,b),I=be(v,E),L=(v.x+E.x)/2,G=(v.y+E.y)/2;return n.jsxs("svg",{className:"relationship-svg",style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1},children:[n.jsxs("defs",{children:[n.jsx("marker",{id:`arrowhead-${p.id}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#475569"})}),n.jsx("marker",{id:`inheritance-${p.id}`,markerWidth:"12",markerHeight:"10",refX:"11",refY:"5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"white",stroke:"#475569",strokeWidth:"1"})}),n.jsx("marker",{id:`diamond-${p.id}`,markerWidth:"12",markerHeight:"8",refX:"11",refY:"4",orient:"auto",children:n.jsx("polygon",{points:"0 4, 6 0, 12 4, 6 8",fill:"#475569"})}),n.jsx("marker",{id:`diamond-empty-${p.id}`,markerWidth:"12",markerHeight:"8",refX:"11",refY:"4",orient:"auto",children:n.jsx("polygon",{points:"0 4, 6 0, 12 4, 6 8",fill:"white",stroke:"#475569",strokeWidth:"1"})})]}),(()=>{const TA=(()=>{switch(p.type){case"inheritance":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#inheritance-${p.id})`};case"realization":return{stroke:"#475569",strokeWidth:2,strokeDasharray:"5,5",markerEnd:`url(#inheritance-${p.id})`};case"dependency":return{stroke:"#475569",strokeWidth:1,strokeDasharray:"8,4",markerEnd:`url(#arrowhead-${p.id})`};case"aggregation":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#diamond-empty-${p.id})`};case"composition":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#diamond-${p.id})`};case"navigable":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#arrowhead-${p.id})`};default:return{stroke:"#475569",strokeWidth:2}}})();return n.jsxs(n.Fragment,{children:[n.jsx("path",{d:I,fill:"none",...TA}),p.label&&n.jsxs("g",{children:[n.jsx("rect",{x:L-p.label.length*4,y:G-8,width:p.label.length*8,height:16,fill:"white",stroke:"#e2e8f0",rx:"2"}),n.jsx("text",{x:L,y:G+4,textAnchor:"middle",fontSize:"11",fill:"#475569",fontWeight:"500",children:p.label})]})]})})()]},p.id)},ye=p=>{if(p.target===cA.current){const S=cA.current.getBoundingClientRect(),f=(p.clientX-S.left)/V-tA.x,g=(p.clientY-S.top)/V-tA.y,b=prompt("Enter class name:");if(b&&b.trim()){const v=K(),E=oe({name:b.trim(),attributes:[],methods:[]}),I=[...r,{id:Date.now(),name:b.trim(),attributes:[],methods:[],x:f-E.width/2,y:g-40,width:E.width,height:E.height,colorScheme:v}];o({...i,classes:I})}}};return n.jsxs("div",{className:"class-diagram-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:d,className:"back-btn",children:[n.jsx(jn,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"toolbar-controls",children:[n.jsxs("div",{className:"zoom-controls",children:[n.jsx("button",{onClick:_A,className:"zoom-btn",children:n.jsx(Ur,{size:16})}),n.jsxs("span",{className:"zoom-level",children:[Math.round(V*100),"%"]}),n.jsx("button",{onClick:YA,className:"zoom-btn",children:n.jsx(Qr,{size:16})}),n.jsx("button",{onClick:ZA,className:"zoom-btn reset",children:"Reset"})]}),n.jsxs("button",{onClick:BA,className:"color-btn",children:[n.jsx(f0,{size:16})," Randomize Colors"]}),n.jsxs("div",{className:"export-buttons",children:[n.jsxs("button",{onClick:le,className:"export-btn",children:[n.jsx(on,{size:16})," Export Image"]}),n.jsxs("button",{onClick:KA,className:"export-btn",children:[n.jsx(Na,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const p=new Blob([SA()],{type:"application/json"}),S=URL.createObjectURL(p),f=document.createElement("a");f.href=S,f.download=`${i.name||"class-diagram"}.json`,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(S)},className:"export-btn",children:[n.jsx(Nn,{size:16})," Export JSON"]})]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${lA==="editor"?"active":""}`,onClick:()=>jA("editor"),children:"Diagram Editor"}),n.jsx("button",{className:`tab ${lA==="json"?"active":""}`,onClick:()=>jA("json"),children:"JSON Editor"})]}),lA==="editor"?n.jsxs("div",{className:"diagram-container",children:[n.jsxs("div",{className:"diagram-sidebar",children:[n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Classes"}),n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"text",value:u,onChange:p=>h(p.target.value),placeholder:"New class name",onKeyPress:p=>p.key==="Enter"&&Oe()}),n.jsxs("button",{onClick:Oe,className:"add-btn",children:[n.jsx(Re,{size:16})," Add Class"]})]}),n.jsx("div",{className:"class-list",children:r.map(p=>n.jsxs("div",{className:"list-item",children:[n.jsx("div",{className:"item-name",children:p.name}),n.jsx("button",{onClick:()=>C(p.id),className:"delete-btn",children:n.jsx(pe,{size:14})})]},p.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Relationships"}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",value:B,onChange:p=>m(p.target.value),placeholder:"Relationship label (optional)",onKeyPress:p=>p.key==="Enter"&&fe()})}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"From Class"}),n.jsxs("select",{value:w||"",onChange:p=>Q(p.target.value),children:[n.jsx("option",{value:"",children:"Select class"}),r.map(p=>n.jsx("option",{value:p.id,children:p.name},p.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"To Class"}),n.jsxs("select",{value:F||"",onChange:p=>N(p.target.value),children:[n.jsx("option",{value:"",children:"Select class"}),r.map(p=>n.jsx("option",{value:p.id,children:p.name},p.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Relationship Type"}),n.jsxs("select",{value:eA,onChange:p=>P(p.target.value),children:[n.jsx("option",{value:"association",children:"Association"}),n.jsx("option",{value:"navigable",children:"Navigable Association"}),n.jsx("option",{value:"inheritance",children:"Inheritance"}),n.jsx("option",{value:"realization",children:"Realization/Implementation"}),n.jsx("option",{value:"dependency",children:"Dependency"}),n.jsx("option",{value:"aggregation",children:"Aggregation"}),n.jsx("option",{value:"composition",children:"Composition"})]})]}),n.jsxs("button",{onClick:fe,disabled:!w||!F,className:"add-btn",children:[n.jsx(Xi,{size:16})," Add Relationship"]})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Current Relationships"}),n.jsx("div",{className:"relationship-list",children:s.map(p=>{const S=r.find(g=>g.id===p.from),f=r.find(g=>g.id===p.to);return!S||!f?null:n.jsxs("div",{className:"list-item",children:[n.jsxs("div",{className:"item-name",children:[S.name," → ",f.name,n.jsxs("div",{className:"item-type",children:["(",p.type,")"]})]}),p.label&&n.jsx("div",{className:"item-label",children:p.label}),n.jsx("button",{onClick:()=>iA(p.id),className:"delete-btn",children:n.jsx(pe,{size:14})})]},p.id)})})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"UML Notation Guide"}),n.jsxs("div",{className:"notation-guide",children:[n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Visibility:"}),n.jsx("div",{children:"+ Public"}),n.jsx("div",{children:"- Private"}),n.jsx("div",{children:"# Protected"}),n.jsx("div",{children:"~ Package"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Attributes:"}),n.jsx("div",{children:"+name : String"}),n.jsx("div",{children:"-age : int"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Methods:"}),n.jsx("div",{children:"+getName() : String"}),n.jsx("div",{children:"-calculate() : void"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Quick Tips:"}),n.jsx("div",{children:"• Double-click canvas to add class"}),n.jsx("div",{children:"• Double-click class to edit"}),n.jsx("div",{children:"• Drag to move classes"}),n.jsx("div",{children:"• Drag resize handle to resize"}),n.jsx("div",{children:"• Mouse wheel to zoom"}),n.jsx("div",{children:"• Drag empty space to pan"})]})]})]})]}),n.jsx("div",{className:"diagram-canvas",ref:cA,onDoubleClick:ye,onMouseDown:p=>oA(p),onWheel:QA,children:n.jsxs("div",{className:"diagram-content",style:{transform:`scale(${V}) translate(${tA.x}px, ${tA.y}px)`,transformOrigin:"0 0",width:"5000px",height:"5000px",position:"relative"},children:[s.map(Me),r.map(ut)]})})]}):n.jsxs("div",{className:"json-editor",children:[n.jsx("div",{className:"json-actions",children:n.jsxs("button",{onClick:()=>{const p=document.createElement("input");p.type="file",p.accept=".json",p.onchange=XA,p.click()},className:"import-btn",children:[n.jsx(sn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:wA,onChange:p=>uA(p.target.value),className:"json-textarea"}),n.jsxs("button",{onClick:ae,className:"import-btn",children:[n.jsx(ka,{size:16})," Apply JSON"]})]}),FA&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsxs("h3",{children:["Edit Class: ",FA.name]}),n.jsx("button",{onClick:xe,className:"modal-close-btn",children:n.jsx(Ha,{size:20})})]}),n.jsx("div",{className:"modal-body",children:n.jsxs("div",{className:"edit-sections-container",children:[n.jsxs("div",{className:"edit-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h4",{children:"Attributes"}),n.jsxs("button",{onClick:()=>Ge(FA.id),className:"add-item-btn",children:[n.jsx(Re,{size:12})," Add Attribute"]})]}),n.jsxs("div",{className:"items-list",children:[FA.attributes.map((p,S)=>n.jsxs("div",{className:"item-row",onClick:()=>Ge(FA.id,S),children:[n.jsxs("div",{className:"item-text",children:[p.visibility," ",p.name," : ",p.type]}),n.jsx("div",{className:"item-actions",children:n.jsx("button",{onClick:f=>{f.stopPropagation(),T(FA.id,S)},className:"delete-btn",children:n.jsx(pe,{size:12})})})]},S)),FA.attributes.length===0&&n.jsx("div",{className:"empty-message",children:"No attributes defined"})]})]}),n.jsxs("div",{className:"edit-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h4",{children:"Methods"}),n.jsxs("button",{onClick:()=>ke(FA.id),className:"add-item-btn",children:[n.jsx(Re,{size:12})," Add Method"]})]}),n.jsxs("div",{className:"items-list",children:[FA.methods.map((p,S)=>n.jsxs("div",{className:"item-row",onClick:()=>ke(FA.id,S),children:[n.jsxs("div",{className:"item-text",children:[p.visibility," ",p.name," : ",p.returnType]}),n.jsx("div",{className:"item-actions",children:n.jsx("button",{onClick:f=>{f.stopPropagation(),W(FA.id,S)},className:"delete-btn",children:n.jsx(pe,{size:12})})})]},S)),FA.methods.length===0&&n.jsx("div",{className:"empty-message",children:"No methods defined"})]})]})]})}),n.jsx("div",{className:"modal-footer",children:n.jsx("button",{onClick:xe,className:"modal-cancel-btn",children:"Close"})})]})}),FA&&LA&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:LA==="attribute"?IA>=0?"Edit Attribute":"Add Attribute":IA>=0?"Edit Method":"Add Method"}),n.jsx("button",{onClick:xe,className:"modal-close-btn",children:n.jsx(Ha,{size:20})})]}),n.jsx("div",{className:"modal-body",children:LA==="attribute"?n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Visibility"}),n.jsx("select",{value:aA.visibility,onChange:p=>hA({...aA,visibility:p.target.value}),children:MA.map(p=>n.jsx("option",{value:p.value,children:p.label},p.value))})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Name"}),n.jsx("input",{type:"text",value:aA.name,onChange:p=>hA({...aA,name:p.target.value}),placeholder:"Attribute name"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Type"}),n.jsxs("div",{className:"type-select",children:[n.jsx("select",{value:aA.type,onChange:p=>hA({...aA,type:p.target.value}),children:J.map(p=>n.jsx("option",{value:p,children:p},p))}),n.jsx("input",{type:"text",value:J.includes(aA.type)?"":aA.type,onChange:p=>hA({...aA,type:p.target.value}),placeholder:"Or enter custom type",style:{display:J.includes(aA.type)?"none":"block",marginTop:"8px"}})]})]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Visibility"}),n.jsx("select",{value:OA.visibility,onChange:p=>U({...OA,visibility:p.target.value}),children:MA.map(p=>n.jsx("option",{value:p.value,children:p.label},p.value))})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Name"}),n.jsx("input",{type:"text",value:OA.name,onChange:p=>U({...OA,name:p.target.value}),placeholder:"Method name (include parentheses)"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Return Type"}),n.jsxs("div",{className:"type-select",children:[n.jsx("select",{value:OA.returnType,onChange:p=>U({...OA,returnType:p.target.value}),children:J.map(p=>n.jsx("option",{value:p,children:p},p))}),n.jsx("input",{type:"text",value:J.includes(OA.returnType)?"":OA.returnType,onChange:p=>U({...OA,returnType:p.target.value}),placeholder:"Or enter custom type",style:{display:J.includes(OA.returnType)?"none":"block",marginTop:"8px"}})]})]})]})}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:xe,className:"modal-cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:LA==="attribute"?Ve:qe,disabled:LA==="attribute"?!aA.name:!OA.name,className:"modal-save-btn",children:"Save"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},aQ=({domainModels:i,onCreateDomainModel:r,onLoadDomainModel:s,onDeleteDomainModel:o})=>{const[d,u]=H.useState(!1);return n.jsxs("div",{className:"domain-model-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(s0,{size:48})}),n.jsx("h2",{children:"Domain Model Designer"}),n.jsx("p",{children:"Model business domain concepts and their relationships"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Re,{size:16})," New Domain Model"]})}),i.length>0&&n.jsxs("div",{className:"model-list",children:[n.jsx("h3",{children:"Your Domain Models"}),i.map(h=>n.jsxs("div",{className:"model-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"model-card-content",children:[n.jsx("div",{className:"model-card-name",children:h.name}),n.jsxs("div",{className:"model-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.entities?.length||0," entities • ",h.relationships?.length||0," relationships"]})]})]}),n.jsxs("div",{className:"model-card-actions",children:[n.jsx("button",{onClick:B=>{B.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(jn,{size:16})}),n.jsx("button",{onClick:B=>{B.stopPropagation(),confirm("Delete this domain model?")&&o(h.id)},className:"delete-btn",children:n.jsx(pe,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Domain Model"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Model Name"}),n.jsx("input",{type:"text",placeholder:"e.g., E-Commerce Domain Model",id:"modelName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("modelName").value;h.trim()&&(r(h),u(!1))},className:"create-btn",children:"Create Model"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},rQ=({domainModel:i={name:"Sample Domain Model"},entities:r=[],relationships:s=[],onUpdateDomainModel:o=()=>{},onBack:d=()=>{}})=>{const[u,h]=H.useState(""),[B,m]=H.useState(""),[w,Q]=H.useState(""),[F,N]=H.useState(""),[eA,P]=H.useState("association"),[lA,jA]=H.useState("1"),[wA,uA]=H.useState("1"),[kA,sA]=H.useState("editor"),[xA,X]=H.useState(""),[EA,z]=H.useState(null),[nA,fA]=H.useState({x:0,y:0}),[FA,rA]=H.useState(null),[LA,RA]=H.useState({x:0,y:0}),[IA,_]=H.useState(null),[aA,hA]=H.useState(""),[OA,U]=H.useState(-1),[V,dA]=H.useState({name:"",type:"String"}),[tA,vA]=H.useState(1),[HA,M]=H.useState({x:0,y:0}),[yA,UA]=H.useState(!1),[cA,D]=H.useState({x:0,y:0}),J=H.useRef(null),MA=[{header:"#3B82F6",border:"#2563EB",background:"#EFF6FF"},{header:"#6366F1",border:"#4F46E5",background:"#EEF2FF"},{header:"#8B5CF6",border:"#7C3AED",background:"#F5F3FF"},{header:"#06B6D4",border:"#0891B2",background:"#ECFEFF"},{header:"#10B981",border:"#059669",background:"#ECFDF5"},{header:"#F59E0B",border:"#D97706",background:"#FFFBEB"},{header:"#EC4899",border:"#DB2777",background:"#FDF2F8"},{header:"#64748B",border:"#475569",background:"#F8FAFC"},{header:"#EF4444",border:"#DC2626",background:"#FEF2F2"},{header:"#F97316",border:"#EA580C",background:"#FFF7ED"},{header:"#84CC16",border:"#65A30D",background:"#F7FEE7"},{header:"#14B8A6",border:"#0D9488",background:"#F0FDFA"}],K=["String","Integer","Number","Boolean","Date","DateTime","Money","Text","ID"],BA=["1","*","0..1","1..*","0..*"];H.useEffect(()=>{X(JSON.stringify({entities:r,relationships:s},null,2))},[r,s]);const YA=()=>MA[Math.floor(Math.random()*MA.length)],_A=()=>{const p=r.map(S=>({...S,colorScheme:YA()}));o({...i,entities:p})},ZA=()=>{vA(p=>Math.min(p*1.2,3))},ne=()=>{vA(p=>Math.max(p/1.2,.3))},oe=()=>{vA(1),M({x:0,y:0})},Oe=(p,S="12px",f="'SF Mono', monospace")=>{const b=document.createElement("canvas").getContext("2d");return b.font=`${S} ${f}`,b.measureText(p).width},Fe=p=>{const g=Oe(p.name,"16px","'Inter', sans-serif")+32;let b=0;p.attributes.forEach(TA=>{const pA=`${TA.name} : ${TA.type}`,DA=Oe(pA)+32;DA>b&&(b=DA)});const v=Math.max(180,g,b),E=40,G=p.attributes.length>0?p.attributes.length*26+6:0,q=E+G+4;return{width:Math.min(v,400),height:Math.max(q,50)}},Ge=()=>{if(!u.trim())return;const p=YA(),S=Fe({name:u,attributes:[]}),f=[...r,{id:Date.now(),name:u,attributes:[],x:100+Math.random()*300,y:100+Math.random()*300,width:S.width,height:S.height,colorScheme:p}];o({...i,entities:f}),h("")},ke=p=>{const S=r.find(f=>f.id===p);S&&_(S)},Ve=(p,S=-1)=>{const f=r.find(g=>g.id===p);f&&(hA("attribute"),U(S),S>=0?dA({...f.attributes[S]}):dA({name:"",type:"String"}))},qe=()=>{if(!V.name.trim())return;const p=r.map(S=>{if(S.id===IA.id){const f=[...S.attributes];OA>=0?f[OA]={...V}:f.push({...V});const g={...S,attributes:f},b=Fe(g);return{...g,width:b.width,height:b.height}}return S});o({...i,entities:p}),xe()},xe=()=>{_(null),hA(""),U(-1)},fe=()=>{if(!w||!F)return;const p=r.find(g=>g.id===parseInt(w)),S=r.find(g=>g.id===parseInt(F));if(!p||!S)return;const f=[...s,{id:Date.now(),from:p.id,to:S.id,type:eA,label:B||"",multiplicityFrom:lA,multiplicityTo:wA}];o({...i,relationships:f}),m(""),Q(""),N(""),jA("1"),uA("1")},C=p=>{const S=r.filter(g=>g.id!==p),f=s.filter(g=>!(g.from===p||g.to===p));o({...i,entities:S,relationships:f})},T=(p,S)=>{const f=r.map(g=>{if(g.id===p){const b=g.attributes.filter((I,L)=>L!==S),v={...g,attributes:b},E=Fe(v);return{...v,width:E.width,height:E.height}}return g});o({...i,entities:f})},W=p=>{const S=s.filter(f=>f.id!==p);o({...i,relationships:S})},iA=p=>{p.target===J.current&&p.button===0&&(UA(!0),D({x:p.clientX-HA.x,y:p.clientY-HA.y}),p.preventDefault())},oA=p=>{yA&&M({x:p.clientX-cA.x,y:p.clientY-cA.y})},CA=(p,S,f=!1)=>{p.stopPropagation();const g=J.current?.getBoundingClientRect();if(g)if(f)rA(S),RA({x:p.clientX,y:p.clientY});else{z(S);const b=(p.clientX-g.left-HA.x)/tA,v=(p.clientY-g.top-HA.y)/tA;fA({x:b-S.x,y:v-S.y})}},k=p=>{if(EA){const S=J.current?.getBoundingClientRect();if(!S)return;const f=(p.clientX-S.left-HA.x)/tA,g=(p.clientY-S.top-HA.y)/tA,b=Math.max(0,f-nA.x),v=Math.max(0,g-nA.y),E=r.map(I=>I.id===EA.id?{...I,x:b,y:v}:I);o({...i,entities:E})}else if(FA){const S=p.clientX-LA.x,f=p.clientY-LA.y,g=r.map(b=>{if(b.id===FA.id){const v=Math.max(180,b.width+S/tA),E=Math.max(80,b.height+f/tA);return{...b,width:v,height:E}}return b});o({...i,entities:g}),RA({x:p.clientX,y:p.clientY})}},QA=()=>{z(null),rA(null),UA(!1)};H.useEffect(()=>{if(EA||FA||yA)return document.addEventListener("mousemove",EA||FA?k:oA),document.addEventListener("mouseup",QA),()=>{document.removeEventListener("mousemove",EA||FA?k:oA),document.removeEventListener("mouseup",QA)}},[EA,FA,yA,nA,LA,cA,HA,tA]);const SA=()=>JSON.stringify({entities:r,relationships:s},null,2),KA=()=>{navigator.clipboard.writeText(SA())},ae=()=>{try{const p=JSON.parse(xA);if(Array.isArray(p.entities)&&Array.isArray(p.relationships)){const S=p.entities.map(f=>({...f,...Fe(f)}));o({...i,entities:S,relationships:p.relationships})}else alert("Invalid JSON format. Expected entities and relationships arrays.")}catch(p){alert("Error parsing JSON: "+p.message)}},XA=p=>{const S=p.target.files[0];if(!S)return;const f=new FileReader;f.onload=g=>{X(g.target.result)},f.readAsText(S)},le=()=>{if(!J.current)return;const p=J.current.style.transform;J.current.style.transform="scale(1) translate(0px, 0px)",Sr(()=>Promise.resolve().then(()=>Er),void 0).then(S=>{S.default(J.current,{backgroundColor:"#f8fafc",scale:2,useCORS:!0}).then(f=>{const g=document.createElement("a");g.download=`${i.name||"domain-model"}.png`,g.href=f.toDataURL("image/png"),g.click(),J.current.style.transform=p})})},te=(p,S)=>{const f={x:p.x+p.width/2,y:p.y+p.height/2},g={x:S.x+S.width/2,y:S.y+S.height/2},b=g.x-f.x,v=g.y-f.y;let E,I;if(Math.abs(b)/p.width>Math.abs(v)/p.height){const L=f.x+(b>0?p.width/2:-p.width/2),G=g.x+(b>0?-S.width/2:S.width/2);E={x:L,y:f.y},I={x:G,y:g.y}}else{const L=f.y+(v>0?p.height/2:-p.height/2),G=g.y+(v>0?-S.height/2:S.height/2);E={x:f.x,y:L},I={x:g.x,y:G}}return{fromPoint:E,toPoint:I}},be=(p,S)=>{if(Math.sqrt(Math.pow(S.x-p.x,2)+Math.pow(S.y-p.y,2))<300)return`M${p.x},${p.y} L${S.x},${S.y}`;const g=p.x+(S.x-p.x)*.5,b=p.y+(S.y-p.y)*.5;return Math.abs(S.x-p.x)>Math.abs(S.y-p.y)?`M${p.x},${p.y} L${g},${p.y} L${g},${S.y} L${S.x},${S.y}`:`M${p.x},${p.y} L${p.x},${b} L${S.x},${b} L${S.x},${S.y}`},ut=p=>{const S=p.colorScheme||MA[0];return n.jsxs("div",{className:"entity-box",style:{left:`${p.x}px`,top:`${p.y}px`,width:`${p.width}px`,height:`${p.height}px`,cursor:EA?.id===p.id?"grabbing":"grab",borderColor:S.border,backgroundColor:"white"},onMouseDown:f=>CA(f,p),onDoubleClick:()=>ke(p.id),children:[n.jsx("div",{className:"entity-header",style:{backgroundColor:S.header,color:"white"},children:n.jsx("div",{className:"entity-name",children:p.name})}),n.jsx("div",{className:"entity-content",children:p.attributes.length>0&&n.jsx("div",{className:"attributes-section",children:p.attributes.map((f,g)=>n.jsxs("div",{className:"entity-item",onDoubleClick:b=>{b.stopPropagation(),Ve(p.id,g)},children:[n.jsxs("span",{className:"item-text",children:[f.name," : ",f.type]}),n.jsx("button",{onClick:b=>{b.stopPropagation(),T(p.id,g)},className:"item-delete-btn",children:n.jsx(pe,{size:10})})]},g))})}),n.jsx("div",{className:"resize-handle",style:{backgroundColor:S.header},onMouseDown:f=>CA(f,p,!0)})]},p.id)},Me=p=>{const S=r.find(q=>q.id===p.from),f=r.find(q=>q.id===p.to);if(!S||!f)return null;const g={x:S.x,y:S.y,width:S.width,height:S.height},b={x:f.x,y:f.y,width:f.width,height:f.height},{fromPoint:v,toPoint:E}=te(g,b),I=be(v,E),L=(v.x+E.x)/2,G=(v.y+E.y)/2;return n.jsxs("svg",{className:"relationship-svg",style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1},children:[n.jsxs("defs",{children:[n.jsx("marker",{id:`arrowhead-${p.id}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#475569"})}),n.jsx("marker",{id:`inheritance-${p.id}`,markerWidth:"12",markerHeight:"10",refX:"11",refY:"5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"white",stroke:"#475569",strokeWidth:"1"})}),n.jsx("marker",{id:`diamond-${p.id}`,markerWidth:"12",markerHeight:"8",refX:"11",refY:"4",orient:"auto",children:n.jsx("polygon",{points:"0 4, 6 0, 12 4, 6 8",fill:"#475569"})}),n.jsx("marker",{id:`diamond-empty-${p.id}`,markerWidth:"12",markerHeight:"8",refX:"11",refY:"4",orient:"auto",children:n.jsx("polygon",{points:"0 4, 6 0, 12 4, 6 8",fill:"white",stroke:"#475569",strokeWidth:"1"})})]}),(()=>{const TA=(()=>{switch(p.type){case"inheritance":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#inheritance-${p.id})`};case"realization":return{stroke:"#475569",strokeWidth:2,strokeDasharray:"5,5",markerEnd:`url(#inheritance-${p.id})`};case"dependency":return{stroke:"#475569",strokeWidth:1,strokeDasharray:"8,4",markerEnd:`url(#arrowhead-${p.id})`};case"aggregation":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#diamond-empty-${p.id})`};case"composition":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#diamond-${p.id})`};case"navigable":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#arrowhead-${p.id})`};default:return{stroke:"#475569",strokeWidth:2}}})();return n.jsxs(n.Fragment,{children:[n.jsx("path",{d:I,fill:"none",...TA}),p.label&&n.jsxs("g",{children:[n.jsx("rect",{x:L-p.label.length*4,y:G-8,width:p.label.length*8,height:16,fill:"white",stroke:"#e2e8f0",rx:"2"}),n.jsx("text",{x:L,y:G+4,textAnchor:"middle",fontSize:"11",fill:"#475569",fontWeight:"500",children:p.label})]}),n.jsxs("g",{children:[n.jsx("text",{x:v.x+(E.x-v.x)*.25,y:v.y+(E.y-v.y)*.25-5,textAnchor:"middle",fontSize:"10",fill:"#475569",fontWeight:"500",children:p.multiplicityFrom||"1"}),n.jsx("text",{x:v.x+(E.x-v.x)*.75,y:v.y+(E.y-v.y)*.75-5,textAnchor:"middle",fontSize:"10",fill:"#475569",fontWeight:"500",children:p.multiplicityTo||"1"})]})]})})()]},p.id)},ye=p=>{if(p.target===J.current){const S=J.current.getBoundingClientRect(),f=(p.clientX-S.left-HA.x)/tA,g=(p.clientY-S.top-HA.y)/tA,b=prompt("Enter entity name:");if(b&&b.trim()){const v=YA(),E=Fe({name:b.trim(),attributes:[]}),I=[...r,{id:Date.now(),name:b.trim(),attributes:[],x:f-E.width/2,y:g-40,width:E.width,height:E.height,colorScheme:v}];o({...i,entities:I})}}};return n.jsxs("div",{className:"domain-model-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:d,className:"back-btn",children:[n.jsx(jn,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"canvas-controls",children:[n.jsx("button",{onClick:_A,className:"control-btn",title:"Randomize Colors",children:n.jsx(f0,{size:16})}),n.jsx("button",{onClick:ZA,className:"control-btn",title:"Zoom In",children:n.jsx(Qr,{size:16})}),n.jsx("button",{onClick:ne,className:"control-btn",title:"Zoom Out",children:n.jsx(Ur,{size:16})}),n.jsx("button",{onClick:oe,className:"control-btn",title:"Reset View",children:n.jsx(h0,{size:16})}),n.jsxs("span",{className:"zoom-indicator",children:[Math.round(tA*100),"%"]})]}),n.jsxs("div",{className:"export-buttons",children:[n.jsxs("button",{onClick:le,className:"export-btn",children:[n.jsx(on,{size:16})," Export Image"]}),n.jsxs("button",{onClick:KA,className:"export-btn",children:[n.jsx(Na,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const p=new Blob([SA()],{type:"application/json"}),S=URL.createObjectURL(p),f=document.createElement("a");f.href=S,f.download=`${i.name||"domain-model"}.json`,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(S)},className:"export-btn",children:[n.jsx(Nn,{size:16})," Export JSON"]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${kA==="editor"?"active":""}`,onClick:()=>sA("editor"),children:"Diagram Editor"}),n.jsx("button",{className:`tab ${kA==="json"?"active":""}`,onClick:()=>sA("json"),children:"JSON Editor"})]}),kA==="editor"?n.jsxs("div",{className:"diagram-container",children:[n.jsxs("div",{className:"diagram-sidebar",children:[n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Entities"}),n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"text",value:u,onChange:p=>h(p.target.value),placeholder:"New entity name",onKeyPress:p=>p.key==="Enter"&&Ge()}),n.jsxs("button",{onClick:Ge,className:"add-btn",children:[n.jsx(Re,{size:16})," Add Entity"]})]}),n.jsx("div",{className:"entity-list",children:r.map(p=>n.jsxs("div",{className:"list-item",children:[n.jsx("div",{className:"item-name",children:p.name}),n.jsx("button",{onClick:()=>C(p.id),className:"delete-btn",children:n.jsx(pe,{size:14})})]},p.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Relationships"}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",value:B,onChange:p=>m(p.target.value),placeholder:"Relationship label (optional)",onKeyPress:p=>p.key==="Enter"&&fe()})}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"From Entity"}),n.jsxs("select",{value:w||"",onChange:p=>Q(p.target.value),children:[n.jsx("option",{value:"",children:"Select entity"}),r.map(p=>n.jsx("option",{value:p.id,children:p.name},p.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"To Entity"}),n.jsxs("select",{value:F||"",onChange:p=>N(p.target.value),children:[n.jsx("option",{value:"",children:"Select entity"}),r.map(p=>n.jsx("option",{value:p.id,children:p.name},p.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Relationship Type"}),n.jsxs("select",{value:eA,onChange:p=>P(p.target.value),children:[n.jsx("option",{value:"association",children:"Association"}),n.jsx("option",{value:"navigable",children:"Navigable Association"}),n.jsx("option",{value:"inheritance",children:"Inheritance"}),n.jsx("option",{value:"realization",children:"Realization"}),n.jsx("option",{value:"dependency",children:"Dependency"}),n.jsx("option",{value:"aggregation",children:"Aggregation"}),n.jsx("option",{value:"composition",children:"Composition"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Multiplicity (From)"}),n.jsx("select",{value:lA,onChange:p=>jA(p.target.value),children:BA.map(p=>n.jsx("option",{value:p,children:p},p))})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Multiplicity (To)"}),n.jsx("select",{value:wA,onChange:p=>uA(p.target.value),children:BA.map(p=>n.jsx("option",{value:p,children:p},p))})]}),n.jsxs("button",{onClick:fe,disabled:!w||!F,className:"add-btn",children:[n.jsx(Xi,{size:16})," Add Relationship"]})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Current Relationships"}),n.jsx("div",{className:"relationship-list",children:s.map(p=>{const S=r.find(g=>g.id===p.from),f=r.find(g=>g.id===p.to);return!S||!f?null:n.jsxs("div",{className:"list-item",children:[n.jsxs("div",{className:"item-name",children:[S.name," → ",f.name,n.jsxs("div",{className:"item-type",children:["(",p.type,")"]}),(p.multiplicityFrom!=="1"||p.multiplicityTo!=="1")&&n.jsxs("div",{className:"item-multiplicity",children:[p.multiplicityFrom," to ",p.multiplicityTo]})]}),p.label&&n.jsx("div",{className:"item-label",children:p.label}),n.jsx("button",{onClick:()=>W(p.id),className:"delete-btn",children:n.jsx(pe,{size:14})})]},p.id)})})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Domain Model Guide"}),n.jsxs("div",{className:"notation-guide",children:[n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Canvas Controls:"}),n.jsx("div",{children:"🎨 Randomize all colors"}),n.jsx("div",{children:"🔍 Zoom in/out"}),n.jsx("div",{children:"↺ Reset view"}),n.jsx("div",{children:"🖱️ Drag to pan canvas"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Relationship Types:"}),n.jsx("div",{children:"Association: Solid line"}),n.jsx("div",{children:"Navigable: Solid line with arrow"}),n.jsx("div",{children:"Inheritance: Solid line with triangle"}),n.jsx("div",{children:"Realization: Dashed line with triangle"}),n.jsx("div",{children:"Dependency: Dashed line with arrow"}),n.jsx("div",{children:"Aggregation: Line with empty diamond"}),n.jsx("div",{children:"Composition: Line with filled diamond"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Multiplicity:"}),n.jsx("div",{children:"1: Exactly one"}),n.jsx("div",{children:"*: Zero or more"}),n.jsx("div",{children:"0..1: Zero or one"}),n.jsx("div",{children:"1..*: One or more"}),n.jsx("div",{children:"0..*: Zero or more"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Quick Tips:"}),n.jsx("div",{children:"• Double-click canvas to add entity"}),n.jsx("div",{children:"• Double-click entity to edit"}),n.jsx("div",{children:"• Drag to move entities"}),n.jsx("div",{children:"• Drag resize handle to resize"}),n.jsx("div",{children:"• Use mouse wheel to zoom"})]})]})]})]}),n.jsx("div",{className:"diagram-canvas",ref:J,onDoubleClick:ye,onMouseDown:iA,onWheel:p=>{p.preventDefault();const S=p.deltaY>0?.9:1.1;vA(f=>Math.max(.3,Math.min(3,f*S)))},style:{cursor:yA?"grabbing":"grab"},children:n.jsxs("div",{className:"canvas-content",style:{transform:`scale(${tA}) translate(${HA.x/tA}px, ${HA.y/tA}px)`,transformOrigin:"0 0",width:"4000px",height:"3000px",minWidth:"100%",minHeight:"100%"},children:[s.map(Me),r.map(ut)]})})]}):n.jsxs("div",{className:"json-editor",children:[n.jsx("div",{className:"json-actions",children:n.jsxs("button",{onClick:()=>{const p=document.createElement("input");p.type="file",p.accept=".json",p.onchange=XA,p.click()},className:"import-btn",children:[n.jsx(sn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:xA,onChange:p=>X(p.target.value),className:"json-textarea"}),n.jsxs("button",{onClick:ae,className:"import-btn",children:[n.jsx(ka,{size:16})," Apply JSON"]})]}),IA&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsxs("h3",{children:["Edit Entity: ",IA.name]}),n.jsx("button",{onClick:xe,className:"modal-close-btn",children:n.jsx(Ha,{size:20})})]}),n.jsx("div",{className:"modal-body",children:n.jsx("div",{className:"edit-sections-container",children:n.jsxs("div",{className:"edit-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h4",{children:"Attributes"}),n.jsxs("button",{onClick:()=>Ve(IA.id),className:"add-item-btn",children:[n.jsx(Re,{size:12})," Add Attribute"]})]}),n.jsxs("div",{className:"items-list",children:[IA.attributes.map((p,S)=>n.jsxs("div",{className:"item-row",onClick:()=>Ve(IA.id,S),children:[n.jsxs("div",{className:"item-text",children:[p.name," : ",p.type]}),n.jsx("div",{className:"item-actions",children:n.jsx("button",{onClick:f=>{f.stopPropagation(),T(IA.id,S)},className:"delete-btn",children:n.jsx(pe,{size:12})})})]},S)),IA.attributes.length===0&&n.jsx("div",{className:"empty-message",children:"No attributes defined"})]})]})})}),n.jsx("div",{className:"modal-footer",children:n.jsx("button",{onClick:xe,className:"modal-cancel-btn",children:"Close"})})]})}),IA&&aA&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:aA==="attribute"?OA>=0?"Edit Attribute":"Add Attribute":""}),n.jsx("button",{onClick:xe,className:"modal-close-btn",children:n.jsx(Ha,{size:20})})]}),n.jsx("div",{className:"modal-body",children:aA==="attribute"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Name"}),n.jsx("input",{type:"text",value:V.name,onChange:p=>dA({...V,name:p.target.value}),placeholder:"Attribute name"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Type"}),n.jsxs("div",{className:"type-select",children:[n.jsx("select",{value:V.type,onChange:p=>dA({...V,type:p.target.value}),children:K.map(p=>n.jsx("option",{value:p,children:p},p))}),n.jsx("input",{type:"text",value:K.includes(V.type)?"":V.type,onChange:p=>dA({...V,type:p.target.value}),placeholder:"Or enter custom type",style:{display:K.includes(V.type)?"none":"block",marginTop:"8px"}})]})]})]})}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:xe,className:"modal-cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:qe,disabled:!V.name,className:"modal-save-btn",children:"Save"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},iQ=({mindMaps:i,onCreateMindMap:r,onLoadMindMap:s,onDeleteMindMap:o})=>{const[d,u]=H.useState(!1);return n.jsxs("div",{className:"mindmap-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(c0,{size:48})}),n.jsx("h2",{children:"Mind Map Designer"}),n.jsx("p",{children:"Visualize your ideas and concepts in an intuitive hierarchical structure"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Re,{size:16})," New Mind Map"]})}),i.length>0&&n.jsxs("div",{className:"mindmap-list",children:[n.jsx("h3",{children:"Your Mind Maps"}),i.map(h=>n.jsxs("div",{className:"mindmap-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"mindmap-card-content",children:[n.jsx("div",{className:"mindmap-card-name",children:h.name}),n.jsxs("div",{className:"mindmap-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.nodes?.length||1," nodes"]})]})]}),n.jsxs("div",{className:"mindmap-card-actions",children:[n.jsx("button",{onClick:B=>{B.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Hn,{size:16})}),n.jsx("button",{onClick:B=>{B.stopPropagation(),confirm("Delete this mind map?")&&o(h.id)},className:"delete-btn",children:n.jsx(pe,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Mind Map"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Mind Map Name"}),n.jsx("input",{type:"text",placeholder:"e.g., Project Planning",id:"mindMapName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("mindMapName").value;h.trim()&&(r(h),u(!1))},className:"create-btn",children:"Create Mind Map"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},oQ=({mindMap:i,nodes:r=[],connections:s=[],onUpdateMindMap:o,onBack:d})=>{const u=H.useRef(null),[h,B]=H.useState(!1),[m,w]=H.useState(null),[Q,F]=H.useState(null),[N,eA]=H.useState(""),[P,lA]=H.useState(""),[jA,wA]=H.useState(""),[uA,kA]=H.useState(""),[sA,xA]=H.useState(1),[X,EA]=H.useState({x:0,y:0}),[z,nA]=H.useState(!1),[fA,FA]=H.useState({x:0,y:0}),[rA,LA]=H.useState(null),[RA,IA]=H.useState(!1),[_,aA]=H.useState(!0),[hA,OA]=H.useState(null),[U,V]=H.useState("editor"),[dA,tA]=H.useState(""),[vA,HA]=H.useState(!0),[M,yA]=H.useState(null),[UA,cA]=H.useState("text"),[D,J]=H.useState(null),MA=20,K=200,BA=15,YA=25,[_A,ZA]=H.useState(r.length>0?r:[{id:1,text:"Origin",subtext:"Click to edit subtext",description:"This is the central idea of your mind map. You can add descriptions to provide more details.",imageUrl:"",x:400,y:300,level:0,parentId:null,isRoot:!0,color:"#ff6b6b",width:160,height:80}]);H.useEffect(()=>{r.length>0&&ZA(r)},[r]),H.useEffect(()=>{tA(JSON.stringify({nodes:_A},null,2))},[_A]);const ne=(g,b)=>g.length<=b?g:g.substring(0,b-3)+"...",oe=(g,b="",v=!1,E=!1)=>{const G=ne(g,BA),q=b?ne(b,YA):"",TA=G.length*8,pA=q?q.length*8*.8:0,DA=Math.max(TA,pA);let zA=Math.max(160,DA+40),Ae=25;return E&&(Ae+=20),b&&(Ae+=20),v&&vA&&(Ae+=70,zA=Math.max(zA,120)),{width:Math.min(zA,300),height:Math.min(Ae,200)}},Oe=g=>_A.filter(b=>b.parentId===g),Fe=g=>{const b=Oe(g);let v=[...b];return b.forEach(E=>{v=[...v,...Fe(E.id)]}),v},Ge=(g,b,v,E=!0)=>{ZA(I=>{const L=[...I],G=L.find(zA=>zA.id===g);if(!G)return I;const q=I.find(zA=>zA.id===g),TA=b-q.x,pA=v-q.y;G.x=b,G.y=v;const DA=(zA,Ae,he)=>{L.filter(Be=>Be.parentId===zA).forEach(Be=>{Be.x+=Ae,Be.y+=he,DA(Be.id,Ae,he)})};return E&&DA(g,TA,pA),L})},ke=()=>{ZA(g=>{const b=[...g],v=b.find(L=>L.isRoot);if(!v)return g;const E=L=>{const G=b.find(pA=>pA.id===L),q=b.filter(pA=>pA.parentId===L);if(q.length===0)return G.height;let TA=0;return q.forEach((pA,DA)=>{TA+=E(pA.id),DA<q.length-1&&(TA+=MA)}),Math.max(TA,G.height)},I=(L,G,q,TA=null)=>{const pA=b.find(ce=>ce.id===L);if(!pA)return;pA.x=G,pA.y=q;const DA=b.filter(ce=>ce.parentId===L);if(DA.length===0)return;let zA=[],Ae=[];pA.isRoot?DA.forEach(ce=>{ce.x<pA.x?zA.push(ce):Ae.push(ce)}):TA==="right"?Ae=DA:zA=DA;const he=(ce,Be)=>{if(ce.length===0)return;const Pt=ce.map(kt=>E(kt.id)),xt=Pt.reduce((kt,jr)=>kt+jr,0)+(ce.length-1)*MA;let $t=q-xt/2;ce.forEach((kt,jr)=>{const Hr=Pt[jr],qi=$t+Hr/2,tl=Be==="left"?G-K:G+K;I(kt.id,tl,qi,Be),$t+=Hr+MA})};he(zA,"left"),he(Ae,"right")};return I(v.id,v.x,v.y),b})},Ve=(g,b)=>{if(!g||!b)return"";const v=(g.x+g.width)*sA+X.x,E=(g.y+g.height/2)*sA+X.y,I=b.x*sA+X.x,L=(b.y+b.height/2)*sA+X.y,G=I-v,TA=Math.abs(G)*.5,pA=v+TA,DA=E,zA=I-TA;return`M ${v} ${E} C ${pA} ${DA}, ${zA} ${L}, ${I} ${L}`},qe=(g,b,v)=>{for(const I of _A){if(I.id===g.id||Fe(g.id).some(TA=>TA.id===I.id))continue;const L=I.x*sA+X.x,G=I.y*sA+X.y;if(Math.sqrt(Math.pow(b-(L+I.width*sA/2),2)+Math.pow(v-(G+I.height*sA/2),2))<80*sA)return I}return null},xe=(g,b)=>{if(g.stopPropagation(),g.detail===1){w(b.id),LA(b),nA(!0);const v=u.current.getBoundingClientRect();FA({x:g.clientX-v.left-X.x-b.x*sA,y:g.clientY-v.top-X.y-b.y*sA})}},fe=g=>{g.target===u.current&&(w(null),IA(!0),FA({x:g.clientX-X.x,y:g.clientY-X.y}))},C=H.useCallback(g=>{if(z&&rA){const b=u.current.getBoundingClientRect(),v=(g.clientX-b.left-X.x-fA.x)/sA,E=(g.clientY-b.top-X.y-fA.y)/sA,I=qe(rA,g.clientX-b.left,g.clientY-b.top);OA(I),requestAnimationFrame(()=>{Ge(rA.id,v,E,!0)})}else RA&&EA({x:g.clientX-fA.x,y:g.clientY-fA.y})},[z,rA,fA,sA,X,RA,_A]),T=H.useCallback(()=>{z&&rA&&(hA&&ZA(g=>g.map(b=>b.id===rA.id?{...b,parentId:hA.id,level:hA.level+1,color:hA.level+1===1?"#4ecdc4":"#95e1d3"}:b)),setTimeout(()=>{ke()},50)),nA(!1),LA(null),IA(!1),OA(null)},[z,rA,hA]);H.useEffect(()=>(document.addEventListener("mousemove",C),document.addEventListener("mouseup",T),()=>{document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",T)}),[C,T]);const W=(g,b="right")=>{const v=_A.find(zA=>zA.id===g);if(!v)return;const E=_A.find(zA=>zA.isRoot);let I;v.isRoot?I=b==="right":(I=v.x>E.x,b=I?"right":"left");const L=oe("New Node","Add subtext here"),G=Oe(g),q=v.x+(I?K:-K),TA=v.y+G.length*(L.height+MA),pA={id:Date.now(),text:"New Node",subtext:"Add subtext here",description:"",imageUrl:"",x:q,y:TA,level:v.level+1,parentId:g,isRoot:!1,color:v.level+1===1?"#4ecdc4":"#95e1d3",...L},DA=[..._A,pA];ZA(DA),w(pA.id),o({...i,nodes:DA}),setTimeout(()=>{ke()},50)},iA=g=>{const b=_A.find(G=>G.id===g);if(b?.isRoot)return;const v=Fe(g),I=[b,...v].map(G=>G.id),L=_A.filter(G=>!I.includes(G.id));ZA(L),w(null),o({...i,nodes:L}),setTimeout(()=>{ke()},50)},oA=g=>{F(g.id),eA(g.text),lA(g.subtext||""),wA(g.description||""),kA(g.imageUrl||""),cA("text")},CA=(g,b,v=null,E=null,I=null)=>{if(!b.trim())return;const L=_A.map(G=>{if(G.id===g){const q={...G,text:b,subtext:v!==null?v:G.subtext,description:E!==null?E:G.description,imageUrl:I!==null?I:G.imageUrl};return{...q,...oe(b,q.subtext,!!q.imageUrl,q.isRoot)}}return G});ZA(L),F(null),eA(""),lA(""),wA(""),kA(""),o({...i,nodes:L})},k=(g,b)=>{const v=_A.map(E=>E.id===g?{...{...E,imageUrl:b},...oe(E.text,E.subtext,!!b)}:E);ZA(v),J(null),o({...i,nodes:v})},QA=g=>{k(g,"")},SA=()=>xA(g=>Math.min(g*1.2,3)),KA=()=>xA(g=>Math.max(g/1.2,.3)),ae=()=>{xA(1),EA({x:0,y:0})},XA=()=>B(g=>!g),le=()=>HA(g=>!g),te=()=>JSON.stringify({nodes:_A},null,2),be=()=>{navigator.clipboard.writeText(te())},ut=()=>{try{const g=JSON.parse(dA);if(Array.isArray(g.nodes)){const b=g.nodes;ZA(b),o({...i,nodes:b})}else alert("Invalid JSON format. Expected nodes array.")}catch(g){alert("Error parsing JSON: "+g.message)}},Me=g=>{const b=g.target.files[0];if(!b)return;const v=new FileReader;v.onload=E=>{tA(E.target.result)},v.readAsText(b)},ye=()=>{u.current&&Sr(()=>Promise.resolve().then(()=>Er),void 0).then(g=>{g.default(u.current.parentElement,{backgroundColor:h?"#1f2937":"#ffffff",scale:2,useCORS:!0}).then(b=>{const v=document.createElement("a");v.download=`${i.name||"mindmap"}.png`,v.href=b.toDataURL("image/png"),v.click()})})},p=()=>h?"#e2e8f0":"#1f2937",S=()=>h?"#64748b":"#475569",f=g=>{const b=[];let v=20;g.isRoot&&(v+=7),g.imageUrl&&vA&&(b.push(n.jsxs("g",{children:[n.jsx("image",{href:g.imageUrl,x:g.width/2-25,y:v,width:50,height:50,preserveAspectRatio:"xMidYMid meet",clipPath:"url(#imageClip)",onError:I=>{I.target.style.display="none"}},"image"),n.jsx("circle",{cx:g.width/2+20,cy:v+10,r:8,fill:"#ef4444",stroke:"white",strokeWidth:"1",style:{cursor:"pointer"},onClick:I=>{I.stopPropagation(),QA(g.id)}},"remove-btn"),n.jsx("text",{x:g.width/2+20,y:v+13,textAnchor:"middle",fill:"white",fontSize:"8",fontWeight:"bold",style:{pointerEvents:"none"},children:"×"})]},"image-group")),v+=55);const E=ne(g.text,BA);if(b.push(n.jsx("text",{x:g.width/2,y:v,textAnchor:"middle",fill:p(),fontSize:"14",fontWeight:"600",style:{pointerEvents:"none"},children:E},"main-text")),v+=15,g.subtext){const I=ne(g.subtext,YA);b.push(n.jsx("text",{x:g.width/2,y:v,textAnchor:"middle",fill:p(),fontSize:"11",fontStyle:"italic",opacity:"0.8",style:{pointerEvents:"none"},children:I},"subtext")),v+=15}return g.description&&b.push(n.jsxs("g",{children:[n.jsx("circle",{cx:g.width-12,cy:12,r:8,fill:"#f59e0b"}),n.jsx("text",{x:g.width-12,y:16,textAnchor:"middle",fill:"white",fontSize:"8",fontWeight:"bold",style:{pointerEvents:"none"},children:"i"})]},"desc-indicator")),b};return n.jsxs("div",{className:`mindmap-maker ${h?"dark":"light"}`,children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:d,className:"back-btn",children:[n.jsx(jn,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"export-buttons",children:[n.jsxs("button",{onClick:ye,className:"export-btn",children:[n.jsx(on,{size:16})," Export Image"]}),n.jsxs("button",{onClick:be,className:"export-btn",children:[n.jsx(Na,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const g=new Blob([te()],{type:"application/json"}),b=URL.createObjectURL(g),v=document.createElement("a");v.href=b,v.download=`${i.name||"mindmap"}.json`,document.body.appendChild(v),v.click(),document.body.removeChild(v),URL.revokeObjectURL(b)},className:"export-btn",children:[n.jsx(Nn,{size:16})," Export JSON"]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${U==="editor"?"active":""}`,onClick:()=>V("editor"),children:"Mind Map Editor"}),n.jsx("button",{className:`tab ${U==="json"?"active":""}`,onClick:()=>V("json"),children:"JSON Editor"})]}),U==="editor"?n.jsxs("div",{className:"mindmap-container",children:[_&&n.jsx("div",{className:"top-toolbar",children:n.jsxs("div",{className:"toolbar-section",children:[n.jsx("button",{className:"toolbar-btn",onClick:XA,title:h?"Light Mode":"Dark Mode",children:h?n.jsx(ow,{size:18}):n.jsx(Nb,{size:18})}),n.jsx("button",{className:"toolbar-btn",title:"Auto Align",onClick:ke,children:n.jsx(Xb,{size:18})}),n.jsx("button",{className:`toolbar-btn ${vA?"active":""}`,onClick:le,title:vA?"Hide Images":"Show Images",children:n.jsx(on,{size:18})})]})}),n.jsxs("svg",{ref:u,className:"canvas",width:"100%",height:"100%",onMouseDown:fe,children:[n.jsxs("defs",{children:[n.jsxs("filter",{id:"glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[n.jsx("feGaussianBlur",{stdDeviation:"3",result:"coloredBlur"}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{in:"coloredBlur"}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),n.jsx("filter",{id:"shadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:n.jsx("feDropShadow",{dx:"0",dy:"2",stdDeviation:"3",floodOpacity:"0.3"})}),n.jsxs("filter",{id:"connectionGlow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[n.jsx("feGaussianBlur",{stdDeviation:"5",result:"coloredBlur"}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{in:"coloredBlur"}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),n.jsx("clipPath",{id:"imageClip",children:n.jsx("rect",{x:"0",y:"0",width:"50",height:"50",rx:"8"})})]}),_A.map(g=>{const b=_A.find(v=>v.id===g.parentId);return b?n.jsx("path",{d:Ve(b,g),stroke:S(),strokeWidth:"2",fill:"none",opacity:"0.8",strokeLinecap:"round",className:"connection-line"},`connection-${g.id}`):null}),hA&&n.jsxs("g",{children:[n.jsxs("circle",{cx:(hA.x+hA.width/2)*sA+X.x,cy:(hA.y+hA.height/2)*sA+X.y,r:40,fill:"none",stroke:"#10b981",strokeWidth:"3",strokeDasharray:"5,5",opacity:"0.8",filter:"url(#connectionGlow)",children:[n.jsx("animate",{attributeName:"r",values:"35;45;35",dur:"1s",repeatCount:"indefinite"}),n.jsx("animate",{attributeName:"opacity",values:"0.6;1;0.6",dur:"1s",repeatCount:"indefinite"})]}),n.jsx("text",{x:(hA.x+hA.width/2)*sA+X.x,y:(hA.y+hA.height/2)*sA+X.y-50,textAnchor:"middle",fill:"#10b981",fontSize:"12",fontWeight:"bold",children:"Connect as Child"})]}),_A.map(g=>n.jsxs("g",{children:[n.jsxs("g",{transform:`translate(${g.x*sA+X.x}, ${g.y*sA+X.y}) scale(${sA})`,className:`node-group ${z&&rA?.id===g.id?"dragging":""}`,children:[n.jsx("rect",{width:g.width,height:g.height,rx:12,fill:g.color,filter:m===g.id?"url(#glow)":"url(#shadow)",stroke:m===g.id?"#fff":"transparent",strokeWidth:m===g.id?"2":"0",style:{cursor:"grab"},onMouseDown:b=>xe(b,g),onDoubleClick:()=>oA(g)}),f(g)]}),m===g.id&&n.jsx(n.Fragment,{children:(()=>{const b=_A.find(I=>I.isRoot),v=g.isRoot?!0:g.x>=b.x,E=g.isRoot?!0:g.x<b.x;return n.jsxs(n.Fragment,{children:[(g.isRoot||v)&&n.jsxs("g",{transform:`translate(${(g.x+g.width+15)*sA+X.x}, ${(g.y+g.height/2-12)*sA+X.y})`,children:[n.jsx("circle",{cx:12,cy:12,r:12,fill:"#10b981",stroke:"white",strokeWidth:"2",style:{cursor:"pointer"},onClick:()=>W(g.id,"right")}),n.jsx("text",{x:12,y:16,textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",style:{pointerEvents:"none"},children:"+"})]}),(g.isRoot||E)&&n.jsxs("g",{transform:`translate(${(g.x-35)*sA+X.x}, ${(g.y+g.height/2-12)*sA+X.y})`,children:[n.jsx("circle",{cx:12,cy:12,r:12,fill:"#10b981",stroke:"white",strokeWidth:"2",style:{cursor:"pointer"},onClick:()=>W(g.id,"left")}),n.jsx("text",{x:12,y:16,textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",style:{pointerEvents:"none"},children:"+"})]})]})})()})]},g.id))]}),m&&n.jsxs("div",{className:"floating-actions",children:[n.jsx("button",{className:"action-btn edit-btn",onClick:()=>{const g=_A.find(b=>b.id===m);oA(g)},title:"Edit Node",children:n.jsx(Kb,{size:16})}),n.jsx("button",{className:"action-btn image-btn",onClick:()=>{const g=_A.find(b=>b.id===m);J(g)},title:"Add Image URL",children:n.jsx(on,{size:16})}),_A.find(g=>g.id===m)?.description&&n.jsx("button",{className:"action-btn desc-btn",onClick:()=>{const g=_A.find(b=>b.id===m);yA(g)},title:"View Description",children:n.jsx(fb,{size:16})}),!_A.find(g=>g.id===m)?.isRoot&&n.jsx("button",{className:"action-btn delete-btn",onClick:()=>iA(m),title:"Delete Node",children:n.jsx(pe,{size:16})})]}),Q&&n.jsx("div",{className:"edit-overlay",children:n.jsxs("div",{className:"edit-box",children:[n.jsxs("div",{className:"edit-tabs",children:[n.jsx("button",{className:`edit-tab ${UA==="text"?"active":""}`,onClick:()=>cA("text"),children:"Main Text"}),n.jsx("button",{className:`edit-tab ${UA==="subtext"?"active":""}`,onClick:()=>cA("subtext"),children:"Subtext"}),n.jsx("button",{className:`edit-tab ${UA==="description"?"active":""}`,onClick:()=>cA("description"),children:"Description"}),n.jsx("button",{className:`edit-tab ${UA==="image"?"active":""}`,onClick:()=>cA("image"),children:"Image URL"})]}),n.jsxs("div",{className:"edit-content",children:[UA==="text"&&n.jsxs("div",{className:"input-with-counter",children:[n.jsx("input",{type:"text",value:N,onChange:g=>eA(g.target.value),onKeyDown:g=>{g.key==="Enter"&&CA(Q,N,P,jA,uA),g.key==="Escape"&&(F(null),eA(""))},placeholder:"Enter main text...",autoFocus:!0,maxLength:50}),n.jsxs("div",{className:"char-counter",children:[N.length,"/",BA]})]}),UA==="subtext"&&n.jsxs("div",{className:"input-with-counter",children:[n.jsx("input",{type:"text",value:P,onChange:g=>lA(g.target.value),onKeyDown:g=>{g.key==="Enter"&&CA(Q,N,P,jA,uA),g.key==="Escape"&&(F(null),lA(""))},placeholder:"Enter subtext...",autoFocus:!0,maxLength:60}),n.jsxs("div",{className:"char-counter",children:[P.length,"/",YA]})]}),UA==="description"&&n.jsx("textarea",{value:jA,onChange:g=>wA(g.target.value),placeholder:"Enter description...",rows:"4",autoFocus:!0}),UA==="image"&&n.jsxs("div",{className:"image-url-input",children:[n.jsx("input",{type:"url",value:uA,onChange:g=>kA(g.target.value),placeholder:"Enter image URL...",autoFocus:!0}),uA&&n.jsxs("div",{className:"image-preview",children:[n.jsx("img",{src:uA,alt:"Preview",onError:g=>g.target.style.display="none"}),n.jsx("small",{children:"Image Preview"})]})]})]}),n.jsxs("div",{className:"edit-actions",children:[n.jsx("button",{onClick:()=>{F(null),eA(""),lA(""),wA(""),kA("")},className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>CA(Q,N,P,jA,uA),className:"save-btn",children:"Save"})]})]})}),D&&n.jsx("div",{className:"dialog-overlay",children:n.jsxs("div",{className:"dialog",children:[n.jsxs("div",{className:"dialog-header",children:[n.jsx("h3",{children:"Add Image URL"}),n.jsx("button",{onClick:()=>J(null),className:"close-btn",children:n.jsx(Ha,{size:20})})]}),n.jsxs("div",{className:"dialog-content",children:[n.jsx("input",{type:"url",placeholder:"Enter image URL...",value:D.imageUrl||"",onChange:g=>{const b=_A.find(v=>v.id===D.id);b&&J({...b,imageUrl:g.target.value})},className:"url-input"}),D.imageUrl&&n.jsxs("div",{className:"image-preview",children:[n.jsx("img",{src:D.imageUrl,alt:"Preview",onError:g=>g.target.style.display="none"}),n.jsx("small",{children:"Image Preview"})]}),n.jsxs("div",{className:"dialog-actions",children:[n.jsx("button",{onClick:()=>J(null),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>k(D.id,D.imageUrl),className:"save-btn",children:"Save"})]})]})]})}),M&&n.jsx("div",{className:"dialog-overlay",children:n.jsxs("div",{className:"dialog",children:[n.jsxs("div",{className:"dialog-header",children:[n.jsx("h3",{children:M.text}),n.jsx("button",{onClick:()=>yA(null),className:"close-btn",children:n.jsx(Ha,{size:20})})]}),n.jsx("div",{className:"dialog-content",children:n.jsx("p",{children:M.description})})]})}),n.jsxs("div",{className:"zoom-controls",children:[n.jsx("button",{className:"zoom-btn",onClick:KA,title:"Zoom Out",children:"-"}),n.jsxs("span",{className:"zoom-level",children:[Math.round(sA*100),"%"]}),n.jsx("button",{className:"zoom-btn",onClick:SA,title:"Zoom In",children:"+"}),n.jsx("button",{className:"zoom-btn reset",onClick:ae,title:"Reset View",children:"⌂"})]})]}):n.jsxs("div",{className:"json-editor",children:[n.jsx("div",{className:"json-actions",children:n.jsxs("button",{onClick:()=>{const g=document.createElement("input");g.type="file",g.accept=".json",g.onchange=Me,g.click()},className:"import-btn",children:[n.jsx(sn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:dA,onChange:g=>tA(g.target.value),className:"json-textarea",placeholder:"Paste your JSON data here..."}),n.jsxs("button",{onClick:ut,className:"import-btn",children:[n.jsx(ka,{size:16})," Apply JSON"]})]}),n.jsx("style",{jsx:!0,children:`
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
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .node-group:hover rect {
          filter: url(#glow);
        }

        .node-group.dragging {
          opacity: 0.9;
          filter: drop-shadow(0 8px 25px rgba(0, 0, 0, 0.3));
        }

        .connection-line {
          transition: all 0.1s ease;
        }

        .connection-line:hover {
          stroke-width: 3;
          stroke: #3b82f6;
        }

        /* Floating Action Buttons */
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
      `})]})},sQ=({activityDiagrams:i,onCreateActivityDiagram:r,onLoadActivityDiagram:s,onDeleteActivityDiagram:o})=>{const[d,u]=H.useState(!1);return n.jsxs("div",{className:"activity-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(_B,{size:48})}),n.jsx("h2",{children:"Activity Diagram Designer"}),n.jsx("p",{children:"Model business workflows and processes with UML activity diagrams"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Re,{size:16})," New Activity Diagram"]})}),i.length>0&&n.jsxs("div",{className:"diagram-list",children:[n.jsx("h3",{children:"Your Activity Diagrams"}),i.map(h=>n.jsxs("div",{className:"diagram-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"diagram-card-content",children:[n.jsx("div",{className:"diagram-card-name",children:h.name}),n.jsxs("div",{className:"diagram-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.nodes?.length||0," nodes • ",h.edges?.length||0," transitions"]})]})]}),n.jsxs("div",{className:"diagram-card-actions",children:[n.jsx("button",{onClick:B=>{B.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Hn,{size:16})}),n.jsx("button",{onClick:B=>{B.stopPropagation(),confirm("Delete this activity diagram?")&&o(h.id)},className:"delete-btn",children:n.jsx(pe,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Activity Diagram"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Diagram Name"}),n.jsx("input",{type:"text",placeholder:"e.g., User Registration Process",id:"diagramName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("diagramName").value;h.trim()&&(r(h),u(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},lQ=({activityDiagram:i,swimlanes:r=[],nodes:s=[],edges:o=[],onUpdateActivityDiagram:d,onBack:u})=>{const h=H.useRef(null),B=H.useRef(null),[m,w]=H.useState(null),[Q,F]=H.useState(null),[N,eA]=H.useState(1),[P,lA]=H.useState(null),[jA,wA]=H.useState(!1),[uA,kA]=H.useState({x:0,y:0}),[sA,xA]=H.useState("editor"),[X,EA]=H.useState(""),[z,nA]=H.useState("select"),[fA,FA]=H.useState(!1),[rA,LA]=H.useState(null),[RA,IA]=H.useState({x:0,y:0}),[_,aA]=H.useState(""),[hA]=H.useState(220);H.useEffect(()=>{EA(JSON.stringify({name:i.name,swimlanes:r,nodes:s,edges:o},null,2))},[r,s,o,i.name]);const OA={initial:{width:40,height:40,color:"#10b981",shape:"circle"},activity:{width:120,height:60,color:"#60a5fa",shape:"rounded"},decision:{width:80,height:80,color:"#f59e0b",shape:"diamond"},final:{width:40,height:40,color:"#1e293b",shape:"doublecircle"},fork:{width:80,height:10,color:"#6b7280",shape:"rectangle"},join:{width:80,height:10,color:"#6b7280",shape:"rectangle"}},U=(C,T)=>{const W=OA[C];if(C==="activity"){const iA=Math.max(100,T.length*8+40);return{...W,width:Math.min(iA,180)}}return W},V=C=>{const T=r.find(iA=>iA.id===C);if(!T)return null;const W=r.findIndex(iA=>iA.id===C);return{...T,x:W*hA,width:hA,centerX:W*hA+hA/2}},dA=C=>{const T=V(C.swimlaneId);if(!T)return C;const W=T.centerX-C.width/2;return{...C,x:W}},tA=(C,T,W)=>{const iA=V(C.swimlaneId);if(!iA)return{x:T,y:W};const oA=iA.x+10,CA=iA.x+iA.width-C.width-10,k=60,QA=Math.max(oA,Math.min(CA,T)),SA=Math.max(k,W);return{x:QA,y:SA}},vA=(C,T)=>{const W=C+T/2;for(let iA=0;iA<r.length;iA++){const oA=iA*hA;if(W>=oA&&W<oA+hA)return r[iA].id}return r[0]?.id||null},HA=()=>{if(!_.trim())return;const C={id:Date.now(),name:_,order:r.length};d({...i,swimlanes:[...r,C]}),aA("")},M=C=>{if(r.length<=1){alert("Cannot delete the last swimlane");return}const T=r.filter(iA=>iA.id!==C),W=s.filter(iA=>iA.swimlaneId!==C);d({...i,swimlanes:T,nodes:W}),F(null)},yA=(C,T)=>{if(C.stopPropagation(),w(T.id),z==="select"){lA(T),wA(!0);const W=B.current.getBoundingClientRect();kA({x:(C.clientX-W.left)/N-T.x,y:(C.clientY-W.top)/N-T.y})}else z==="connection"&&(LA(T.id),FA(!0))},UA=H.useCallback(C=>{if(B.current){const T=B.current.getBoundingClientRect(),W=(C.clientX-T.left)/N,iA=(C.clientY-T.top)/N;if(fA&&IA({x:W,y:iA}),jA&&P){let oA=W-uA.x,CA=iA-uA.y;const k=tA(P,oA,CA),QA=vA(k.x,P.width),SA=s.map(KA=>KA.id===P.id?{...KA,x:k.x,y:k.y,swimlaneId:QA}:KA);d({...i,nodes:SA})}}},[jA,fA,P,uA,N,s,i,d]),cA=H.useCallback(C=>{if(fA&&rA&&B.current){const T=B.current.getBoundingClientRect(),W=(C.clientX-T.left)/N,iA=(C.clientY-T.top)/N,oA=s.find(CA=>W>=CA.x&&W<=CA.x+CA.width&&iA>=CA.y&&iA<=CA.y+CA.height);if(oA&&oA.id!==rA&&!o.find(k=>k.source===rA&&k.target===oA.id)){const k={id:Date.now(),source:rA,target:oA.id,label:""};d({...i,edges:[...o,k]})}}wA(!1),lA(null),FA(!1),LA(null)},[fA,rA,s,o,N,i,d]);H.useEffect(()=>(document.addEventListener("mousemove",UA),document.addEventListener("mouseup",cA),()=>{document.removeEventListener("mousemove",UA),document.removeEventListener("mouseup",cA)}),[UA,cA]);const D=(C,T)=>{if(!T&&r.length>0&&(T=r[0].id),!V(T))return;const iA={id:Date.now(),type:C,text:C==="initial"?"Start":C==="final"?"End":C==="decision"?"Decision":C==="fork"||C==="join"?"":"New Activity",y:200,swimlaneId:T,...U(C,"New Activity")},oA=dA(iA);d({...i,nodes:[...s,oA]}),w(oA.id)},J=C=>{const T=s.filter(iA=>iA.id!==C),W=o.filter(iA=>iA.source!==C&&iA.target!==C);d({...i,nodes:T,edges:W}),w(null)},MA=C=>{d({...i,edges:o.filter(T=>T.id!==C)})},K=(C,T)=>{const W=s.map(iA=>iA.id===C?{...iA,text:T,...U(iA.type,T)}:iA);d({...i,nodes:W})},BA=C=>{const T=s.map(W=>W.id===C?dA(W):W);d({...i,nodes:T})},YA=()=>eA(C=>Math.min(C*1.2,3)),_A=()=>eA(C=>Math.max(C/1.2,.3)),ZA=()=>eA(1),ne=()=>{const C={name:i.name,swimlanes:r,nodes:s,edges:o};return JSON.stringify(C,null,2)},oe=()=>{navigator.clipboard.writeText(ne()),alert("JSON copied to clipboard!")},Oe=()=>{try{const C=JSON.parse(X);C.swimlanes&&C.nodes&&C.edges?(d({...i,name:C.name||i.name,swimlanes:C.swimlanes,nodes:C.nodes,edges:C.edges}),alert("Diagram imported successfully!")):alert("Invalid JSON format. Expected swimlanes, nodes and edges arrays.")}catch(C){alert("Error parsing JSON: "+C.message)}},Fe=C=>{const T=C.target.files[0];if(!T)return;const W=new FileReader;W.onload=iA=>{EA(iA.target.result)},W.readAsText(T)},Ge=(C,T)=>{const W=QA=>({x:QA.x+QA.width/2,y:QA.y+QA.height/2}),iA=W(C),oA=W(T),CA=oA.x-iA.x,k=oA.y-iA.y;if(Math.abs(CA)>Math.abs(k)){const QA=iA.y;return`M ${iA.x} ${iA.y} L ${oA.x} ${QA} L ${oA.x} ${oA.y}`}else{const QA=iA.x;return`M ${iA.x} ${iA.y} L ${QA} ${oA.y} L ${oA.x} ${oA.y}`}},ke=(C,T)=>{const W=T*hA,iA=Math.max(1e3,s.reduce((oA,CA)=>Math.max(oA,CA.y+CA.height+150),0));return n.jsxs("g",{children:[n.jsx("rect",{x:W,y:0,width:hA,height:iA,fill:T%2===0?"#ffffff":"#f9fafb",stroke:"#e5e7eb",strokeWidth:"2"}),n.jsx("text",{x:W+hA/2,y:30,textAnchor:"middle",fontSize:"15",fontWeight:"600",fill:"#1f2937",children:C.name}),n.jsx("line",{x1:W,y1:55,x2:W+hA,y2:55,stroke:"#d1d5db",strokeWidth:"2"})]},C.id)},Ve=C=>{const T=m===C.id,W=OA[C.type];return n.jsxs("g",{className:"node-group",onMouseDown:iA=>yA(iA,C),style:{cursor:z==="select"?"move":"crosshair",pointerEvents:"all"},children:[W.shape==="circle"&&n.jsx("circle",{cx:C.x+C.width/2,cy:C.y+C.height/2,r:C.width/2,fill:W.color,stroke:T?"#3b82f6":"#fff",strokeWidth:T?"3":"2",style:{filter:T?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))":"none"}}),W.shape==="doublecircle"&&n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:C.x+C.width/2,cy:C.y+C.height/2,r:C.width/2,fill:"none",stroke:W.color,strokeWidth:"3",style:{filter:T?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))":"none"}}),n.jsx("circle",{cx:C.x+C.width/2,cy:C.y+C.height/2,r:C.width/2-5,fill:W.color,stroke:T?"#3b82f6":"none",strokeWidth:T?"2":"0"})]}),W.shape==="rounded"&&n.jsx("rect",{x:C.x,y:C.y,width:C.width,height:C.height,rx:"12",fill:W.color,stroke:T?"#3b82f6":"#fff",strokeWidth:T?"3":"2",style:{filter:T?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))":"drop-shadow(0 2px 4px rgba(0,0,0,0.1))"}}),W.shape==="diamond"&&n.jsx("polygon",{points:`
              ${C.x+C.width/2},${C.y} 
              ${C.x+C.width},${C.y+C.height/2} 
              ${C.x+C.width/2},${C.y+C.height} 
              ${C.x},${C.y+C.height/2}
            `,fill:W.color,stroke:T?"#3b82f6":"#fff",strokeWidth:T?"3":"2",style:{filter:T?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))":"drop-shadow(0 2px 4px rgba(0,0,0,0.1))"}}),W.shape==="rectangle"&&n.jsx("rect",{x:C.x,y:C.y,width:C.width,height:C.height,fill:W.color,stroke:T?"#3b82f6":"#6b7280",strokeWidth:T?"3":"2",style:{filter:T?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))":"none"}}),C.type!=="fork"&&C.type!=="join"&&C.type!=="initial"&&C.type!=="final"&&n.jsx("text",{x:C.x+C.width/2,y:C.y+C.height/2,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"12",fontWeight:"600",children:C.text.length>20?C.text.substring(0,20)+"...":C.text})]},C.id)},qe=C=>{const T=s.find(oA=>oA.id===C.source),W=s.find(oA=>oA.id===C.target);if(!T||!W)return null;const iA=Ge(T,W);return n.jsxs("g",{className:"edge-group",children:[n.jsx("path",{d:iA,stroke:"#6b7280",strokeWidth:"2",fill:"none",markerEnd:"url(#arrowhead)",style:{cursor:"pointer"},onClick:oA=>{oA.stopPropagation(),window.confirm("Delete this connection?")&&MA(C.id)}}),C.label&&n.jsx("text",{x:(T.x+W.x)/2,y:(T.y+W.y)/2-10,fill:"#374151",fontSize:"11",fontWeight:"500",style:{pointerEvents:"none"},children:C.label})]},C.id)},xe=Math.max(1e3,s.reduce((C,T)=>Math.max(C,T.y+T.height+150),0)),fe=r.length*hA;return n.jsxs("div",{className:"activity-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:u,className:"back-btn",children:[n.jsx(jn,{size:16})," Back"]}),n.jsx("div",{className:"toolbar-left",children:n.jsx("h2",{children:i.name})}),n.jsx("div",{className:"toolbar-center",children:n.jsxs("div",{className:"zoom-controls",children:[n.jsx("button",{onClick:_A,className:"zoom-btn",title:"Zoom Out",children:n.jsx(Ur,{size:16})}),n.jsxs("span",{className:"zoom-level",children:[Math.round(N*100),"%"]}),n.jsx("button",{onClick:YA,className:"zoom-btn",title:"Zoom In",children:n.jsx(Qr,{size:16})}),n.jsx("button",{onClick:ZA,className:"zoom-btn",title:"Reset Zoom",children:"Reset"})]})}),n.jsxs("div",{className:"toolbar-right",children:[n.jsxs("button",{onClick:oe,className:"export-btn",title:"Copy JSON",children:[n.jsx(Na,{size:16})," Copy"]}),n.jsxs("button",{onClick:()=>{const C=new Blob([ne()],{type:"application/json"}),T=URL.createObjectURL(C),W=document.createElement("a");W.href=T,W.download=`${i.name.replace(/\s+/g,"-").toLowerCase()}.json`,document.body.appendChild(W),W.click(),document.body.removeChild(W),URL.revokeObjectURL(T)},className:"export-btn",title:"Download JSON",children:[n.jsx(Nn,{size:16})," Export"]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${sA==="editor"?"active":""}`,onClick:()=>xA("editor"),children:"Diagram Editor"}),n.jsx("button",{className:`tab ${sA==="json"?"active":""}`,onClick:()=>xA("json"),children:"JSON Editor"})]}),sA==="editor"?n.jsxs("div",{className:"diagram-container",children:[n.jsxs("div",{className:"sidebar",children:[n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Tools"}),n.jsxs("button",{className:`tool-btn ${z==="select"?"active":""}`,onClick:()=>nA("select"),children:[n.jsx(Mb,{size:16})," Select & Move"]}),n.jsxs("button",{className:`tool-btn ${z==="connection"?"active":""}`,onClick:()=>nA("connection"),children:[n.jsx(c0,{size:16})," Create Connection"]})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Swimlanes"}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",value:_,onChange:C=>aA(C.target.value),placeholder:"Swimlane name",onKeyPress:C=>C.key==="Enter"&&HA()})}),n.jsxs("button",{onClick:HA,className:"add-btn",children:[n.jsx(Re,{size:16})," Add Swimlane"]}),n.jsx("div",{className:"list",children:r.map(C=>n.jsxs("div",{className:"list-item",children:[n.jsx("div",{className:"item-info",children:n.jsx("div",{className:"item-name",children:C.name})}),n.jsx("button",{onClick:()=>M(C.id),className:"delete-btn",title:"Delete swimlane",children:n.jsx(pe,{size:14})})]},C.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Add Nodes"}),r.length>0&&n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Target Swimlane"}),n.jsx("select",{value:Q||r[0]?.id||"",onChange:C=>F(parseInt(C.target.value)),children:r.map(C=>n.jsx("option",{value:C.id,children:C.name},C.id))})]}),n.jsxs("div",{className:"node-buttons",children:[n.jsxs("button",{onClick:()=>D("initial",Q||r[0]?.id),title:"Start node",children:[n.jsx(Gb,{size:14})," Initial"]}),n.jsxs("button",{onClick:()=>D("activity",Q||r[0]?.id),title:"Activity node",children:[n.jsx(rw,{size:14})," Activity"]}),n.jsxs("button",{onClick:()=>D("decision",Q||r[0]?.id),title:"Decision node",children:[n.jsx(cb,{size:14})," Decision"]}),n.jsxs("button",{onClick:()=>D("fork",Q||r[0]?.id),title:"Fork node",children:[n.jsx(ou,{size:14})," Fork"]}),n.jsxs("button",{onClick:()=>D("join",Q||r[0]?.id),title:"Join node",children:[n.jsx(Fb,{size:14})," Join"]}),n.jsxs("button",{onClick:()=>D("final",Q||r[0]?.id),title:"End node",children:[n.jsx(eb,{size:14})," Final"]})]})]})]}),n.jsx("div",{className:"canvas-wrapper",children:n.jsx("div",{className:"canvas",ref:B,style:{transform:`scale(${N})`,transformOrigin:"top left",width:fe,height:xe},children:n.jsxs("svg",{ref:h,width:fe,height:xe,style:{background:"#fff"},children:[n.jsx("defs",{children:n.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6b7280"})})}),r.map((C,T)=>ke(C,T)),o.map(C=>qe(C)),s.map(C=>Ve(C)),fA&&rA&&n.jsx("line",{x1:s.find(C=>C.id===rA)?.x+s.find(C=>C.id===rA)?.width/2,y1:s.find(C=>C.id===rA)?.y+s.find(C=>C.id===rA)?.height/2,x2:RA.x,y2:RA.y,stroke:"#3b82f6",strokeWidth:"2",strokeDasharray:"5,5",style:{pointerEvents:"none"}})]})})}),m&&n.jsxs("div",{className:"properties-panel",children:[n.jsx("h3",{children:"Node Properties"}),(()=>{const C=s.find(T=>T.id===m);return C?n.jsxs("div",{className:"property-group",children:[n.jsx("label",{children:"Node ID"}),n.jsx("input",{type:"text",value:C.id,disabled:!0,className:"disabled-input"}),C.type!=="fork"&&C.type!=="join"&&n.jsxs(n.Fragment,{children:[n.jsx("label",{children:"Text Label"}),n.jsx("input",{type:"text",value:C.text,onChange:T=>K(C.id,T.target.value),placeholder:"Enter text"})]}),n.jsx("label",{children:"Node Type"}),n.jsxs("select",{value:C.type,onChange:T=>{const W=s.map(iA=>iA.id===m?{...iA,type:T.target.value,...U(T.target.value,iA.text)}:iA);d({...i,nodes:W})},children:[n.jsx("option",{value:"initial",children:"Initial Node"}),n.jsx("option",{value:"activity",children:"Activity"}),n.jsx("option",{value:"decision",children:"Decision"}),n.jsx("option",{value:"fork",children:"Fork"}),n.jsx("option",{value:"join",children:"Join"}),n.jsx("option",{value:"final",children:"Final Node"})]}),n.jsx("label",{children:"Swimlane"}),n.jsx("select",{value:C.swimlaneId||"",onChange:T=>{const W=parseInt(T.target.value),iA=s.map(oA=>{if(oA.id===m){const CA={...oA,swimlaneId:W};return dA(CA)}return oA});d({...i,nodes:iA})},children:r.map(T=>n.jsx("option",{value:T.id,children:T.name},T.id))}),n.jsx("label",{children:"Position"}),n.jsxs("div",{className:"position-group",children:[n.jsxs("div",{className:"position-item",children:[n.jsx("span",{children:"X:"}),n.jsx("input",{type:"number",value:Math.round(C.x),onChange:T=>{const W=parseInt(T.target.value)||0,iA=tA(C,W,C.y),oA=s.map(CA=>CA.id===m?{...CA,x:iA.x}:CA);d({...i,nodes:oA})}})]}),n.jsxs("div",{className:"position-item",children:[n.jsx("span",{children:"Y:"}),n.jsx("input",{type:"number",value:Math.round(C.y),onChange:T=>{const W=parseInt(T.target.value)||0,iA=tA(C,C.x,W),oA=s.map(CA=>CA.id===m?{...CA,y:iA.y}:CA);d({...i,nodes:oA})}})]})]}),n.jsxs("button",{onClick:()=>BA(m),className:"center-btn",children:[n.jsx(u0,{size:14})," Center in Swimlane"]}),n.jsxs("button",{onClick:()=>{window.confirm("Delete this node and all connected edges?")&&J(m)},className:"delete-node-btn",children:[n.jsx(pe,{size:14})," Delete Node"]})]}):null})()]})]}):n.jsxs("div",{className:"json-editor",children:[n.jsxs("div",{className:"json-actions",children:[n.jsxs("button",{onClick:()=>{const C=document.createElement("input");C.type="file",C.accept=".json",C.onchange=Fe,C.click()},className:"import-btn",children:[n.jsx(sn,{size:16})," Import JSON File"]}),n.jsxs("button",{onClick:Oe,className:"import-btn apply-btn",children:[n.jsx(ka,{size:16})," Apply Changes"]})]}),n.jsx("textarea",{value:X,onChange:C=>EA(C.target.value),className:"json-textarea",placeholder:"Paste or edit JSON here..."})]}),n.jsx("style",{children:`
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
      `})]})},NA={PROJECT:"projects",FLOWCHART:"flowcharts",GANTT:"gantt",USE_CASE:"usecase",SEQUENCE:"sequence",ARCHITECTURE:"architecture",CLASS:"class",DOMAIN_MODEL:"domainmodel",MIND_MAP:"mindmap",ACTIVITY:"activity"},Td=()=>({projects:[],currentProject:null,flowcharts:[],currentFlowchart:null,ganttCharts:[],currentGanttChart:null,useCaseDiagrams:[],currentUseCaseDiagram:null,sequenceDiagrams:[],currentSequenceDiagram:null,architectureDiagrams:[],currentArchitectureDiagram:null,classDiagrams:[],currentClassDiagram:null,domainModels:[],currentDomainModel:null,mindMaps:[],currentMindMap:null,activityDiagrams:[],currentActivityDiagram:null}),cQ=()=>{const i=localStorage.getItem("evolutionChartData");if(!i)return Td();try{const r=JSON.parse(i);return{...Td(),...r}}catch(r){return console.error("Failed to parse localStorage data:",r),Td()}},Hi=i=>{localStorage.setItem("evolutionChartData",JSON.stringify(i))},dQ=()=>{const[,i]=H.useReducer(D=>D+1,0),[r,s]=H.useState(NA.PROJECT),[o,d]=H.useState(""),u=()=>cQ(),h=(D,J,MA={})=>{const K=u(),BA={id:Date.now(),name:J,createdAt:new Date().toISOString(),...MA},YA={...K};switch(YA.currentProject=null,YA.currentFlowchart=null,YA.currentGanttChart=null,YA.currentUseCaseDiagram=null,YA.currentSequenceDiagram=null,YA.currentArchitectureDiagram=null,YA.currentClassDiagram=null,YA.currentDomainModel=null,YA.currentMindMap=null,YA.currentActivityDiagram=null,D){case NA.PROJECT:YA.projects=[...K.projects,BA],YA.currentProject=BA;break;case NA.FLOWCHART:YA.flowcharts=[...K.flowcharts,BA],YA.currentFlowchart=BA;break;case NA.GANTT:YA.ganttCharts=[...K.ganttCharts,BA],YA.currentGanttChart=BA;break;case NA.USE_CASE:YA.useCaseDiagrams=[...K.useCaseDiagrams,BA],YA.currentUseCaseDiagram=BA;break;case NA.SEQUENCE:YA.sequenceDiagrams=[...K.sequenceDiagrams,BA],YA.currentSequenceDiagram=BA;break;case NA.ARCHITECTURE:YA.architectureDiagrams=[...K.architectureDiagrams,BA],YA.currentArchitectureDiagram=BA;break;case NA.CLASS:YA.classDiagrams=[...K.classDiagrams,BA],YA.currentClassDiagram=BA;break;case NA.DOMAIN_MODEL:YA.domainModels=[...K.domainModels,BA],YA.currentDomainModel=BA;break;case NA.MIND_MAP:YA.mindMaps=[...K.mindMaps,BA],YA.currentMindMap=BA;break;case NA.ACTIVITY:YA.activityDiagrams=[...K.activityDiagrams,BA],YA.currentActivityDiagram=BA;break}Hi(YA),i()},B=(D,J)=>{const MA=u(),K={...MA};switch(D){case NA.PROJECT:K.projects=MA.projects.filter(BA=>BA.id!==J),MA.currentProject?.id===J&&(K.currentProject=null);break;case NA.FLOWCHART:K.flowcharts=MA.flowcharts.filter(BA=>BA.id!==J),MA.currentFlowchart?.id===J&&(K.currentFlowchart=null);break;case NA.GANTT:K.ganttCharts=MA.ganttCharts.filter(BA=>BA.id!==J),MA.currentGanttChart?.id===J&&(K.currentGanttChart=null);break;case NA.USE_CASE:K.useCaseDiagrams=MA.useCaseDiagrams.filter(BA=>BA.id!==J),MA.currentUseCaseDiagram?.id===J&&(K.currentUseCaseDiagram=null);break;case NA.SEQUENCE:K.sequenceDiagrams=MA.sequenceDiagrams.filter(BA=>BA.id!==J),MA.currentSequenceDiagram?.id===J&&(K.currentSequenceDiagram=null);break;case NA.ARCHITECTURE:K.architectureDiagrams=MA.architectureDiagrams.filter(BA=>BA.id!==J),MA.currentArchitectureDiagram?.id===J&&(K.currentArchitectureDiagram=null);break;case NA.CLASS:K.classDiagrams=MA.classDiagrams.filter(BA=>BA.id!==J),MA.currentClassDiagram?.id===J&&(K.currentClassDiagram=null);break;case NA.DOMAIN_MODEL:K.domainModels=MA.domainModels.filter(BA=>BA.id!==J),MA.currentDomainModel?.id===J&&(K.currentDomainModel=null);break;case NA.MIND_MAP:K.mindMaps=MA.mindMaps.filter(BA=>BA.id!==J),MA.currentMindMap?.id===J&&(K.currentMindMap=null);break;case NA.ACTIVITY:K.activityDiagrams=MA.activityDiagrams.filter(BA=>BA.id!==J),MA.currentActivityDiagram?.id===J&&(K.currentActivityDiagram=null);break}Hi(K),i()},m=(D,J)=>{const MA=u(),K={...MA};switch(D){case NA.PROJECT:K.projects=MA.projects.map(BA=>BA.id===J.id?J:BA),K.currentProject=J;break;case NA.FLOWCHART:K.flowcharts=MA.flowcharts.map(BA=>BA.id===J.id?J:BA),K.currentFlowchart=J;break;case NA.GANTT:K.ganttCharts=MA.ganttCharts.map(BA=>BA.id===J.id?J:BA),K.currentGanttChart=J;break;case NA.USE_CASE:K.useCaseDiagrams=MA.useCaseDiagrams.map(BA=>BA.id===J.id?J:BA),K.currentUseCaseDiagram=J;break;case NA.SEQUENCE:K.sequenceDiagrams=MA.sequenceDiagrams.map(BA=>BA.id===J.id?J:BA),K.currentSequenceDiagram=J;break;case NA.ARCHITECTURE:K.architectureDiagrams=MA.architectureDiagrams.map(BA=>BA.id===J.id?J:BA),K.currentArchitectureDiagram=J;break;case NA.CLASS:K.classDiagrams=MA.classDiagrams.map(BA=>BA.id===J.id?J:BA),K.currentClassDiagram=J;break;case NA.DOMAIN_MODEL:K.domainModels=MA.domainModels.map(BA=>BA.id===J.id?J:BA),K.currentDomainModel=J;break;case NA.MIND_MAP:K.mindMaps=MA.mindMaps.map(BA=>BA.id===J.id?J:BA),K.currentMindMap=J;break;case NA.ACTIVITY:K.activityDiagrams=MA.activityDiagrams.map(BA=>BA.id===J.id?J:BA),K.currentActivityDiagram=J;break}Hi(K),i()},w=(D,J,MA,K)=>{h(NA.PROJECT,D,{timelineStart:J,timelineEnd:MA,timeUnit:K,nodes:[],connections:[],zoom:1,pan:{x:0,y:0}})},Q=D=>{h(NA.FLOWCHART,D,{nodes:[],edges:[],zoom:1,pan:{x:0,y:0}})},F=D=>{h(NA.GANTT,D,{tasks:[],startDate:new Date().toISOString(),endDate:new Date(Date.now()+30*24*60*60*1e3).toISOString()})},N=D=>{h(NA.USE_CASE,D,{actors:[],useCases:[],relationships:[],zoom:1,pan:{x:0,y:0}})},eA=D=>{h(NA.SEQUENCE,D,{participants:[],messages:[],zoom:1,pan:{x:0,y:0}})},P=D=>{h(NA.ARCHITECTURE,D,{components:[],connections:[],zoom:1,pan:{x:0,y:0}})},lA=D=>{h(NA.CLASS,D,{classes:[],relationships:[],zoom:1,pan:{x:0,y:0}})},jA=D=>{h(NA.DOMAIN_MODEL,D,{entities:[],relationships:[],zoom:1,pan:{x:0,y:0}})},wA=D=>{h(NA.MIND_MAP,D,{nodes:[{id:1,text:"Central Idea",x:400,y:300,level:0,parentId:null,isRoot:!0,color:"#ff6b6b",width:140,height:40}],zoom:1,pan:{x:0,y:0}})},uA=D=>{h(NA.ACTIVITY,D,{swimlanes:[{id:Date.now(),name:"Default Swimlane",order:0}],nodes:[],edges:[],zoom:1,pan:{x:0,y:0}})},kA=D=>B(NA.PROJECT,D),sA=D=>B(NA.FLOWCHART,D),xA=D=>B(NA.GANTT,D),X=D=>B(NA.USE_CASE,D),EA=D=>B(NA.SEQUENCE,D),z=D=>B(NA.ARCHITECTURE,D),nA=D=>B(NA.CLASS,D),fA=D=>B(NA.DOMAIN_MODEL,D),FA=D=>B(NA.MIND_MAP,D),rA=D=>B(NA.ACTIVITY,D),LA=D=>m(NA.PROJECT,D),RA=D=>m(NA.FLOWCHART,D),IA=D=>m(NA.GANTT,D),_=D=>m(NA.USE_CASE,D),aA=D=>m(NA.SEQUENCE,D),hA=D=>m(NA.ARCHITECTURE,D),OA=D=>m(NA.CLASS,D),U=D=>m(NA.DOMAIN_MODEL,D),V=D=>m(NA.MIND_MAP,D),dA=D=>m(NA.ACTIVITY,D),tA=D=>{try{const J=JSON.parse(D);return h(NA.FLOWCHART,`Imported Flowchart ${new Date().toLocaleString()}`,{nodes:J.nodes||[],edges:J.edges||[],zoom:1,pan:{x:0,y:0}}),!0}catch(J){return console.error("Invalid JSON:",J),!1}},vA=()=>{const J={...u(),currentProject:null,currentFlowchart:null,currentGanttChart:null,currentUseCaseDiagram:null,currentSequenceDiagram:null,currentArchitectureDiagram:null,currentClassDiagram:null,currentDomainModel:null,currentMindMap:null,currentActivityDiagram:null};Hi(J),i()},HA=(D,J)=>{const K={...u(),currentProject:null,currentFlowchart:null,currentGanttChart:null,currentUseCaseDiagram:null,currentSequenceDiagram:null,currentArchitectureDiagram:null,currentClassDiagram:null,currentDomainModel:null,currentMindMap:null,currentActivityDiagram:null};switch(D){case NA.PROJECT:K.currentProject=J;break;case NA.FLOWCHART:K.currentFlowchart=J;break;case NA.GANTT:K.currentGanttChart=J;break;case NA.USE_CASE:K.currentUseCaseDiagram=J;break;case NA.SEQUENCE:K.currentSequenceDiagram=J;break;case NA.ARCHITECTURE:K.currentArchitectureDiagram=J;break;case NA.CLASS:K.currentClassDiagram=J;break;case NA.DOMAIN_MODEL:K.currentDomainModel=J;break;case NA.MIND_MAP:K.currentMindMap=J;break;case NA.ACTIVITY:K.currentActivityDiagram=J;break}Hi(K),i()},M={appContainer:{minHeight:"100vh",width:"97.3%",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",padding:"20px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},mainCard:{maxWidth:"1400px",margin:"0 auto",background:"rgba(255, 255, 255, 0.98)",backdropFilter:"blur(20px)",borderRadius:"24px",boxShadow:"0 25px 50px rgba(0, 0, 0, 0.15)",overflow:"hidden",minHeight:"85vh"},header:{background:"linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #ec4899 100%)",color:"white",padding:"40px 30px",textAlign:"center",position:"relative"},headerTitle:{fontSize:"36px",fontWeight:"800",margin:"0 0 12px 0",textShadow:"0 4px 8px rgba(0, 0, 0, 0.3)",letterSpacing:"-0.5px"},headerSubtitle:{fontSize:"18px",opacity:"0.95",margin:"0",fontWeight:"400"},modeSelector:{display:"flex",justifyContent:"center",padding:"30px 30px 0 30px",gap:"16px",marginBottom:"25px",flexWrap:"wrap"},tabButton:{padding:"16px 32px",border:"2px solid transparent",borderRadius:"50px",background:"rgba(0, 0, 0, 0.05)",color:"#64748b",fontSize:"16px",fontWeight:"600",cursor:"pointer",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",outline:"none",position:"relative",backdropFilter:"blur(10px)",marginBottom:"10px"},tabButtonActive:D=>({background:`linear-gradient(135deg, ${D} 0%, ${D} 100%)`,color:"white",borderColor:"rgba(255, 255, 255, 0.2)",boxShadow:`0 8px 25px rgba(${yA(D)}, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)`,transform:"translateY(-2px)"}),tabButtonHover:D=>({background:`rgba(${yA(D)}, 0.1)`,color:D})},yA=D=>{const J=parseInt(D.slice(1,3),16),MA=parseInt(D.slice(3,5),16),K=parseInt(D.slice(5,7),16);return`${J}, ${MA}, ${K}`},UA=()=>[{type:NA.PROJECT,label:"📊 Evolution Charts",color:"#4f46e5",component:n.jsx(mw,{projects:u().projects,onCreateProject:w,onLoadProject:D=>HA(NA.PROJECT,D),onDeleteProject:kA})},{type:NA.FLOWCHART,label:"🔄 Flowcharts",color:"#7c3aed",component:n.jsx(bw,{flowcharts:u().flowcharts,onCreateFlowchart:Q,onLoadFlowchart:D=>HA(NA.FLOWCHART,D),onDeleteFlowchart:sA,onImportFlowchart:tA})},{type:NA.GANTT,label:"📅 Gantt Charts",color:"#3b82f6",component:n.jsx(yw,{ganttCharts:u().ganttCharts,onCreateGanttChart:F,onLoadGanttChart:D=>HA(NA.GANTT,D),onDeleteGanttChart:xA})},{type:NA.USE_CASE,label:"👥 Use Case",color:"#10b981",component:n.jsx(J2,{useCaseDiagrams:u().useCaseDiagrams,onCreateUseCaseDiagram:N,onLoadUseCaseDiagram:D=>HA(NA.USE_CASE,D),onDeleteUseCaseDiagram:X})},{type:NA.SEQUENCE,label:"↔️ Sequence",color:"#06b6d4",component:n.jsx(P2,{sequenceDiagrams:u().sequenceDiagrams,onCreateSequenceDiagram:eA,onLoadSequenceDiagram:D=>HA(NA.SEQUENCE,D),onDeleteSequenceDiagram:EA})},{type:NA.ARCHITECTURE,label:"🏛️ Architecture",color:"#8b5cf6",component:n.jsx(AQ,{architectureDiagrams:u().architectureDiagrams,onCreateArchitectureDiagram:P,onLoadArchitectureDiagram:D=>HA(NA.ARCHITECTURE,D),onDeleteArchitectureDiagram:z})},{type:NA.CLASS,label:"📐 Class Diagram",color:"#ec4899",component:n.jsx(tQ,{classDiagrams:u().classDiagrams,onCreateClassDiagram:lA,onLoadClassDiagram:D=>HA(NA.CLASS,D),onDeleteClassDiagram:nA})},{type:NA.DOMAIN_MODEL,label:"🏢 Domain Model",color:"#06b6d4",component:n.jsx(aQ,{domainModels:u().domainModels,onCreateDomainModel:jA,onLoadDomainModel:D=>HA(NA.DOMAIN_MODEL,D),onDeleteDomainModel:fA})},{type:NA.MIND_MAP,label:"🧠 Mind Maps",color:"#10b981",component:n.jsx(iQ,{mindMaps:u().mindMaps,onCreateMindMap:wA,onLoadMindMap:D=>HA(NA.MIND_MAP,D),onDeleteMindMap:FA})},{type:NA.ACTIVITY,label:"⚡ Activity Diagram",color:"#f59e0b",component:n.jsx(sQ,{activityDiagrams:u().activityDiagrams,onCreateActivityDiagram:uA,onLoadActivityDiagram:D=>HA(NA.ACTIVITY,D),onDeleteActivityDiagram:rA})}],cA=u();return n.jsx("div",{style:M.appContainer,children:n.jsx("div",{style:M.mainCard,children:cA.currentProject?n.jsx(Bw,{project:cA.currentProject,nodes:cA.currentProject.nodes||[],connections:cA.currentProject.connections||[],onUpdateProject:LA,onBack:vA}):cA.currentFlowchart?n.jsx(ww,{flowchart:cA.currentFlowchart,nodes:cA.currentFlowchart.nodes||[],edges:cA.currentFlowchart.edges||[],jsonInput:o,onJsonInputChange:d,onImportJson:tA,onUpdateFlowchart:RA,onBack:vA}):cA.currentGanttChart?n.jsx(X2,{ganttChart:cA.currentGanttChart,tasks:cA.currentGanttChart.tasks||[],onUpdateGanttChart:IA,onBack:vA}):cA.currentUseCaseDiagram?n.jsx(W2,{useCaseDiagram:cA.currentUseCaseDiagram,actors:cA.currentUseCaseDiagram.actors||[],useCases:cA.currentUseCaseDiagram.useCases||[],relationships:cA.currentUseCaseDiagram.relationships||[],onUpdateUseCaseDiagram:_,onBack:vA}):cA.currentSequenceDiagram?n.jsx($2,{sequenceDiagram:cA.currentSequenceDiagram,participants:cA.currentSequenceDiagram.participants||[],messages:cA.currentSequenceDiagram.messages||[],onUpdateSequenceDiagram:aA,onBack:vA}):cA.currentArchitectureDiagram?n.jsx(eQ,{architectureDiagram:cA.currentArchitectureDiagram,components:cA.currentArchitectureDiagram.components||[],connections:cA.currentArchitectureDiagram.connections||[],onUpdateArchitectureDiagram:hA,onBack:vA}):cA.currentClassDiagram?n.jsx(nQ,{classDiagram:cA.currentClassDiagram,classes:cA.currentClassDiagram.classes||[],relationships:cA.currentClassDiagram.relationships||[],onUpdateClassDiagram:OA,onBack:vA}):cA.currentDomainModel?n.jsx(rQ,{domainModel:cA.currentDomainModel,entities:cA.currentDomainModel.entities||[],relationships:cA.currentDomainModel.relationships||[],onUpdateDomainModel:U,onBack:vA}):cA.currentMindMap?n.jsx(oQ,{mindMap:cA.currentMindMap,nodes:cA.currentMindMap.nodes||[],onUpdateMindMap:V,onBack:vA}):cA.currentActivityDiagram?n.jsx(lQ,{activityDiagram:cA.currentActivityDiagram,swimlanes:cA.currentActivityDiagram.swimlanes||[],nodes:cA.currentActivityDiagram.nodes||[],edges:cA.currentActivityDiagram.edges||[],onUpdateActivityDiagram:dA,onBack:vA}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:M.header,children:[n.jsx("h1",{style:M.headerTitle,children:"Visual Designer Suite"}),n.jsx("p",{style:M.headerSubtitle,children:"Create stunning diagrams and charts"})]}),n.jsx("div",{style:M.modeSelector,children:UA().map(D=>n.jsx("button",{onClick:()=>s(D.type),style:{...M.tabButton,...r===D.type?M.tabButtonActive(D.color):{}},onMouseEnter:J=>{r!==D.type&&(J.target.style.background=M.tabButtonHover(D.color).background,J.target.style.color=M.tabButtonHover(D.color).color)},onMouseLeave:J=>{r!==D.type&&(J.target.style.background=M.tabButton.background,J.target.style.color=M.tabButton.color)},children:D.label},D.type))}),UA().find(D=>D.type===r)?.component]})})})};TB.createRoot(document.getElementById("root")).render(n.jsx(H.StrictMode,{children:n.jsx(dQ,{})}));
