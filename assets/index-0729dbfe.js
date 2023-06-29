(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function cu(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function uu(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=De(s)?Iv(s):uu(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(De(t))return t;if(pe(t))return t}}const wv=/;(?![^(]*\))/g,_v=/:([^]+)/,Ev=/\/\*.*?\*\//gs;function Iv(t){const e={};return t.replace(Ev,"").split(wv).forEach(n=>{if(n){const s=n.split(_v);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Mo(t){let e="";if(De(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=Mo(t[n]);s&&(e+=s+" ")}else if(pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const bv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tv=cu(bv);function _d(t){return!!t||t===""}function Sv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Lo(t[s],e[s]);return n}function Lo(t,e){if(t===e)return!0;let n=Ql(t),s=Ql(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Or(t),s=Or(e),n||s)return t===e;if(n=H(t),s=H(e),n||s)return n&&s?Sv(t,e):!1;if(n=pe(t),s=pe(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Lo(t[o],e[o]))return!1}}return String(t)===String(e)}function Av(t,e){return t.findIndex(n=>Lo(n,e))}const Cv=t=>De(t)?t:t==null?"":H(t)||pe(t)&&(t.toString===bd||!J(t.toString))?JSON.stringify(t,Ed,2):String(t),Ed=(t,e)=>e&&e.__v_isRef?Ed(t,e.value):Ts(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Fo(e)?{[`Set(${e.size})`]:[...e.values()]}:pe(e)&&!H(e)&&!Td(e)?String(e):e,ge={},bs=[],Et=()=>{},Rv=()=>!1,kv=/^on[^a-z]/,Uo=t=>kv.test(t),lu=t=>t.startsWith("onUpdate:"),Je=Object.assign,hu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Dv=Object.prototype.hasOwnProperty,re=(t,e)=>Dv.call(t,e),H=Array.isArray,Ts=t=>ni(t)==="[object Map]",Fo=t=>ni(t)==="[object Set]",Ql=t=>ni(t)==="[object Date]",J=t=>typeof t=="function",De=t=>typeof t=="string",Or=t=>typeof t=="symbol",pe=t=>t!==null&&typeof t=="object",Id=t=>pe(t)&&J(t.then)&&J(t.catch),bd=Object.prototype.toString,ni=t=>bd.call(t),Ov=t=>ni(t).slice(8,-1),Td=t=>ni(t)==="[object Object]",fu=t=>De(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ji=cu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Nv=/-(\w)/g,Bt=Vo(t=>t.replace(Nv,(e,n)=>n?n.toUpperCase():"")),xv=/\B([A-Z])/g,Ws=Vo(t=>t.replace(xv,"-$1").toLowerCase()),$o=Vo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ua=Vo(t=>t?`on${$o(t)}`:""),Nr=(t,e)=>!Object.is(t,e),qi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},no=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},xr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Yl;const Pv=()=>Yl||(Yl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Pt;class Sd{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){Pt=this}off(){Pt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function Mv(t){return new Sd(t)}function Lv(t,e=Pt){e&&e.active&&e.effects.push(t)}const du=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ad=t=>(t.w&bn)>0,Cd=t=>(t.n&bn)>0,Uv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=bn},Fv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Ad(r)&&!Cd(r)?r.delete(t):e[n++]=r,r.w&=~bn,r.n&=~bn}e.length=n}},fc=new WeakMap;let pr=0,bn=1;const dc=30;let wt;const Kn=Symbol(""),pc=Symbol("");class pu{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Lv(this,s)}run(){if(!this.active)return this.fn();let e=wt,n=vn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=wt,wt=this,vn=!0,bn=1<<++pr,pr<=dc?Uv(this):Jl(this),this.fn()}finally{pr<=dc&&Fv(this),bn=1<<--pr,wt=this.parent,vn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wt===this?this.deferStop=!0:this.active&&(Jl(this),this.onStop&&this.onStop(),this.active=!1)}}function Jl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let vn=!0;const Rd=[];function Qs(){Rd.push(vn),vn=!1}function Ys(){const t=Rd.pop();vn=t===void 0?!0:t}function ot(t,e,n){if(vn&&wt){let s=fc.get(t);s||fc.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=du()),kd(r)}}function kd(t,e){let n=!1;pr<=dc?Cd(t)||(t.n|=bn,n=!Ad(t)):n=!t.has(wt),n&&(t.add(wt),wt.deps.push(t))}function Xt(t,e,n,s,r,i){const o=fc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const c=xr(s);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?fu(n)&&a.push(o.get("length")):(a.push(o.get(Kn)),Ts(t)&&a.push(o.get(pc)));break;case"delete":H(t)||(a.push(o.get(Kn)),Ts(t)&&a.push(o.get(pc)));break;case"set":Ts(t)&&a.push(o.get(Kn));break}if(a.length===1)a[0]&&gc(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);gc(du(c))}}function gc(t,e){const n=H(t)?t:[...t];for(const s of n)s.computed&&Xl(s);for(const s of n)s.computed||Xl(s)}function Xl(t,e){(t!==wt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Vv=cu("__proto__,__v_isRef,__isVue"),Dd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Or)),$v=gu(),Bv=gu(!1,!0),jv=gu(!0),Zl=qv();function qv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ae(this);for(let i=0,o=this.length;i<o;i++)ot(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ae)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Qs();const s=ae(this)[e].apply(this,n);return Ys(),s}}),t}function gu(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?iw:Md:e?Pd:xd).get(s))return s;const o=H(s);if(!t&&o&&re(Zl,r))return Reflect.get(Zl,r,i);const a=Reflect.get(s,r,i);return(Or(r)?Dd.has(r):Vv(r))||(t||ot(s,"get",r),e)?a:qe(a)?o&&fu(r)?a:a.value:pe(a)?t?Ld(a):Js(a):a}}const Hv=Od(),Kv=Od(!0);function Od(t=!1){return function(n,s,r,i){let o=n[s];if(Ps(o)&&qe(o)&&!qe(r))return!1;if(!t&&(!so(r)&&!Ps(r)&&(o=ae(o),r=ae(r)),!H(n)&&qe(o)&&!qe(r)))return o.value=r,!0;const a=H(n)&&fu(s)?Number(s)<n.length:re(n,s),c=Reflect.set(n,s,r,i);return n===ae(i)&&(a?Nr(r,o)&&Xt(n,"set",s,r):Xt(n,"add",s,r)),c}}function Gv(t,e){const n=re(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Xt(t,"delete",e,void 0),s}function zv(t,e){const n=Reflect.has(t,e);return(!Or(e)||!Dd.has(e))&&ot(t,"has",e),n}function Wv(t){return ot(t,"iterate",H(t)?"length":Kn),Reflect.ownKeys(t)}const Nd={get:$v,set:Hv,deleteProperty:Gv,has:zv,ownKeys:Wv},Qv={get:jv,set(t,e){return!0},deleteProperty(t,e){return!0}},Yv=Je({},Nd,{get:Bv,set:Kv}),mu=t=>t,Bo=t=>Reflect.getPrototypeOf(t);function ki(t,e,n=!1,s=!1){t=t.__v_raw;const r=ae(t),i=ae(e);n||(e!==i&&ot(r,"get",e),ot(r,"get",i));const{has:o}=Bo(r),a=s?mu:n?_u:Pr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Di(t,e=!1){const n=this.__v_raw,s=ae(n),r=ae(t);return e||(t!==r&&ot(s,"has",t),ot(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Oi(t,e=!1){return t=t.__v_raw,!e&&ot(ae(t),"iterate",Kn),Reflect.get(t,"size",t)}function eh(t){t=ae(t);const e=ae(this);return Bo(e).has.call(e,t)||(e.add(t),Xt(e,"add",t,t)),this}function th(t,e){e=ae(e);const n=ae(this),{has:s,get:r}=Bo(n);let i=s.call(n,t);i||(t=ae(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Nr(e,o)&&Xt(n,"set",t,e):Xt(n,"add",t,e),this}function nh(t){const e=ae(this),{has:n,get:s}=Bo(e);let r=n.call(e,t);r||(t=ae(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Xt(e,"delete",t,void 0),i}function sh(){const t=ae(this),e=t.size!==0,n=t.clear();return e&&Xt(t,"clear",void 0,void 0),n}function Ni(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ae(o),c=e?mu:t?_u:Pr;return!t&&ot(a,"iterate",Kn),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function xi(t,e,n){return function(...s){const r=this.__v_raw,i=ae(r),o=Ts(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?mu:e?_u:Pr;return!e&&ot(i,"iterate",c?pc:Kn),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[l(h[0]),l(h[1])]:l(h),done:f}},[Symbol.iterator](){return this}}}}function cn(t){return function(...e){return t==="delete"?!1:this}}function Jv(){const t={get(i){return ki(this,i)},get size(){return Oi(this)},has:Di,add:eh,set:th,delete:nh,clear:sh,forEach:Ni(!1,!1)},e={get(i){return ki(this,i,!1,!0)},get size(){return Oi(this)},has:Di,add:eh,set:th,delete:nh,clear:sh,forEach:Ni(!1,!0)},n={get(i){return ki(this,i,!0)},get size(){return Oi(this,!0)},has(i){return Di.call(this,i,!0)},add:cn("add"),set:cn("set"),delete:cn("delete"),clear:cn("clear"),forEach:Ni(!0,!1)},s={get(i){return ki(this,i,!0,!0)},get size(){return Oi(this,!0)},has(i){return Di.call(this,i,!0)},add:cn("add"),set:cn("set"),delete:cn("delete"),clear:cn("clear"),forEach:Ni(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=xi(i,!1,!1),n[i]=xi(i,!0,!1),e[i]=xi(i,!1,!0),s[i]=xi(i,!0,!0)}),[t,n,e,s]}const[Xv,Zv,ew,tw]=Jv();function yu(t,e){const n=e?t?tw:ew:t?Zv:Xv;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(re(n,r)&&r in s?n:s,r,i)}const nw={get:yu(!1,!1)},sw={get:yu(!1,!0)},rw={get:yu(!0,!1)},xd=new WeakMap,Pd=new WeakMap,Md=new WeakMap,iw=new WeakMap;function ow(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function aw(t){return t.__v_skip||!Object.isExtensible(t)?0:ow(Ov(t))}function Js(t){return Ps(t)?t:vu(t,!1,Nd,nw,xd)}function cw(t){return vu(t,!1,Yv,sw,Pd)}function Ld(t){return vu(t,!0,Qv,rw,Md)}function vu(t,e,n,s,r){if(!pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=aw(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Ss(t){return Ps(t)?Ss(t.__v_raw):!!(t&&t.__v_isReactive)}function Ps(t){return!!(t&&t.__v_isReadonly)}function so(t){return!!(t&&t.__v_isShallow)}function Ud(t){return Ss(t)||Ps(t)}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function wu(t){return no(t,"__v_skip",!0),t}const Pr=t=>pe(t)?Js(t):t,_u=t=>pe(t)?Ld(t):t;function Fd(t){vn&&wt&&(t=ae(t),kd(t.dep||(t.dep=du())))}function Vd(t,e){t=ae(t),t.dep&&gc(t.dep)}function qe(t){return!!(t&&t.__v_isRef===!0)}function Kt(t){return $d(t,!1)}function uw(t){return $d(t,!0)}function $d(t,e){return qe(t)?t:new lw(t,e)}class lw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ae(e),this._value=n?e:Pr(e)}get value(){return Fd(this),this._value}set value(e){const n=this.__v_isShallow||so(e)||Ps(e);e=n?e:ae(e),Nr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Pr(e),Vd(this))}}function As(t){return qe(t)?t.value:t}const hw={get:(t,e,n)=>As(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return qe(r)&&!qe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Bd(t){return Ss(t)?t:new Proxy(t,hw)}var jd;class fw{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[jd]=!1,this._dirty=!0,this.effect=new pu(e,()=>{this._dirty||(this._dirty=!0,Vd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ae(this);return Fd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}jd="__v_isReadonly";function dw(t,e,n=!1){let s,r;const i=J(t);return i?(s=t,r=Et):(s=t.get,r=t.set),new fw(s,r,i||!r,n)}function wn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){jo(i,e,n)}return r}function It(t,e,n,s){if(J(t)){const i=wn(t,e,n,s);return i&&Id(i)&&i.catch(o=>{jo(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(It(t[i],e,n,s));return r}function jo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){wn(c,null,10,[t,o,a]);return}}pw(t,n,r,s)}function pw(t,e,n,s=!0){console.error(t)}let Mr=!1,mc=!1;const Be=[];let Lt=0;const Cs=[];let Gt=null,Un=0;const qd=Promise.resolve();let Eu=null;function Hd(t){const e=Eu||qd;return t?e.then(this?t.bind(this):t):e}function gw(t){let e=Lt+1,n=Be.length;for(;e<n;){const s=e+n>>>1;Lr(Be[s])<t?e=s+1:n=s}return e}function Iu(t){(!Be.length||!Be.includes(t,Mr&&t.allowRecurse?Lt+1:Lt))&&(t.id==null?Be.push(t):Be.splice(gw(t.id),0,t),Kd())}function Kd(){!Mr&&!mc&&(mc=!0,Eu=qd.then(zd))}function mw(t){const e=Be.indexOf(t);e>Lt&&Be.splice(e,1)}function yw(t){H(t)?Cs.push(...t):(!Gt||!Gt.includes(t,t.allowRecurse?Un+1:Un))&&Cs.push(t),Kd()}function rh(t,e=Mr?Lt+1:0){for(;e<Be.length;e++){const n=Be[e];n&&n.pre&&(Be.splice(e,1),e--,n())}}function Gd(t){if(Cs.length){const e=[...new Set(Cs)];if(Cs.length=0,Gt){Gt.push(...e);return}for(Gt=e,Gt.sort((n,s)=>Lr(n)-Lr(s)),Un=0;Un<Gt.length;Un++)Gt[Un]();Gt=null,Un=0}}const Lr=t=>t.id==null?1/0:t.id,vw=(t,e)=>{const n=Lr(t)-Lr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function zd(t){mc=!1,Mr=!0,Be.sort(vw);const e=Et;try{for(Lt=0;Lt<Be.length;Lt++){const n=Be[Lt];n&&n.active!==!1&&wn(n,null,14)}}finally{Lt=0,Be.length=0,Gd(),Mr=!1,Eu=null,(Be.length||Cs.length)&&zd()}}function ww(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ge;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[l]||ge;f&&(r=n.map(g=>De(g)?g.trim():g)),h&&(r=n.map(xr))}let a,c=s[a=Ua(e)]||s[a=Ua(Bt(e))];!c&&i&&(c=s[a=Ua(Ws(e))]),c&&It(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,It(u,t,6,r)}}function Wd(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!J(t)){const c=u=>{const l=Wd(u,e,!0);l&&(a=!0,Je(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(pe(t)&&s.set(t,null),null):(H(i)?i.forEach(c=>o[c]=null):Je(o,i),pe(t)&&s.set(t,o),o)}function qo(t,e){return!t||!Uo(e)?!1:(e=e.slice(2).replace(/Once$/,""),re(t,e[0].toLowerCase()+e.slice(1))||re(t,Ws(e))||re(t,e))}let ht=null,Ho=null;function ro(t){const e=ht;return ht=t,Ho=t&&t.type.__scopeId||null,e}function _w(t){Ho=t}function Ew(){Ho=null}function Iw(t,e=ht,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&dh(-1);const i=ro(e);let o;try{o=t(...r)}finally{ro(i),s._d&&dh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Fa(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:f,setupState:g,ctx:y,inheritAttrs:I}=t;let k,R;const P=ro(t);try{if(n.shapeFlag&4){const X=r||s;k=Mt(l.call(X,X,h,i,g,f,y)),R=c}else{const X=e;k=Mt(X.length>1?X(i,{attrs:c,slots:a,emit:u}):X(i,null)),R=e.props?c:bw(c)}}catch(X){Ir.length=0,jo(X,t,1),k=He(Yn)}let U=k;if(R&&I!==!1){const X=Object.keys(R),{shapeFlag:ye}=U;X.length&&ye&7&&(o&&X.some(lu)&&(R=Tw(R,o)),U=Ms(U,R))}return n.dirs&&(U=Ms(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),k=U,ro(P),k}const bw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Uo(n))&&((e||(e={}))[n]=t[n]);return e},Tw=(t,e)=>{const n={};for(const s in t)(!lu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Sw(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?ih(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const f=l[h];if(o[f]!==s[f]&&!qo(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ih(s,o,u):!0:!!o;return!1}function ih(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!qo(n,i))return!0}return!1}function Aw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Cw=t=>t.__isSuspense;function Rw(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):yw(t)}function Hi(t,e){if(Me){let n=Me.provides;const s=Me.parent&&Me.parent.provides;s===n&&(n=Me.provides=Object.create(s)),n[t]=e}}function ft(t,e,n=!1){const s=Me||ht;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&J(e)?e.call(s.proxy):e}}const Pi={};function Rs(t,e,n){return Qd(t,e,n)}function Qd(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ge){const a=Me;let c,u=!1,l=!1;if(qe(t)?(c=()=>t.value,u=so(t)):Ss(t)?(c=()=>t,s=!0):H(t)?(l=!0,u=t.some(U=>Ss(U)||so(U)),c=()=>t.map(U=>{if(qe(U))return U.value;if(Ss(U))return $n(U);if(J(U))return wn(U,a,2)})):J(t)?e?c=()=>wn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),It(t,a,3,[f])}:c=Et,e&&s){const U=c;c=()=>$n(U())}let h,f=U=>{h=R.onStop=()=>{wn(U,a,4)}},g;if(Vr)if(f=Et,e?n&&It(e,a,3,[c(),l?[]:void 0,f]):c(),r==="sync"){const U=b_();g=U.__watcherHandles||(U.__watcherHandles=[])}else return Et;let y=l?new Array(t.length).fill(Pi):Pi;const I=()=>{if(R.active)if(e){const U=R.run();(s||u||(l?U.some((X,ye)=>Nr(X,y[ye])):Nr(U,y)))&&(h&&h(),It(e,a,3,[U,y===Pi?void 0:l&&y[0]===Pi?[]:y,f]),y=U)}else R.run()};I.allowRecurse=!!e;let k;r==="sync"?k=I:r==="post"?k=()=>Ze(I,a&&a.suspense):(I.pre=!0,a&&(I.id=a.uid),k=()=>Iu(I));const R=new pu(c,k);e?n?I():y=R.run():r==="post"?Ze(R.run.bind(R),a&&a.suspense):R.run();const P=()=>{R.stop(),a&&a.scope&&hu(a.scope.effects,R)};return g&&g.push(P),P}function kw(t,e,n){const s=this.proxy,r=De(t)?t.includes(".")?Yd(s,t):()=>s[t]:t.bind(s,s);let i;J(e)?i=e:(i=e.handler,n=e);const o=Me;Ls(this);const a=Qd(r,i.bind(s),n);return o?Ls(o):Gn(),a}function Yd(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function $n(t,e){if(!pe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),qe(t))$n(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)$n(t[n],e);else if(Fo(t)||Ts(t))t.forEach(n=>{$n(n,e)});else if(Td(t))for(const n in t)$n(t[n],e);return t}function Jd(t){return J(t)?{setup:t,name:t.name}:t}const Ki=t=>!!t.type.__asyncLoader,Xd=t=>t.type.__isKeepAlive;function Dw(t,e){Zd(t,"a",e)}function Ow(t,e){Zd(t,"da",e)}function Zd(t,e,n=Me){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ko(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Xd(r.parent.vnode)&&Nw(s,e,n,r),r=r.parent}}function Nw(t,e,n,s){const r=Ko(e,t,s,!0);tp(()=>{hu(s[e],r)},n)}function Ko(t,e,n=Me,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Qs(),Ls(n);const a=It(e,n,t,o);return Gn(),Ys(),a});return s?r.unshift(i):r.push(i),i}}const on=t=>(e,n=Me)=>(!Vr||t==="sp")&&Ko(t,(...s)=>e(...s),n),ep=on("bm"),xw=on("m"),Pw=on("bu"),Mw=on("u"),Lw=on("bum"),tp=on("um"),Uw=on("sp"),Fw=on("rtg"),Vw=on("rtc");function $w(t,e=Me){Ko("ec",t,e)}function ur(t,e){const n=ht;if(n===null)return t;const s=Qo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=ge]=e[i];o&&(J(o)&&(o={mounted:o,updated:o}),o.deep&&$n(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function Nn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Qs(),It(c,n,8,[t.el,a,t,e]),Ys())}}const np="components";function Bw(t,e){return qw(np,t,!0,e)||t}const jw=Symbol();function qw(t,e,n=!0,s=!1){const r=ht||Me;if(r){const i=r.type;if(t===np){const a=__(i,!1);if(a&&(a===e||a===Bt(e)||a===$o(Bt(e))))return i}const o=oh(r[t]||i[t],e)||oh(r.appContext[t],e);return!o&&s?i:o}}function oh(t,e){return t&&(t[e]||t[Bt(e)]||t[$o(Bt(e))])}function rO(t,e,n,s){let r;const i=n&&n[s];if(H(t)||De(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(pe(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const yc=t=>t?dp(t)?Qo(t)||t.proxy:yc(t.parent):null,Er=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>yc(t.parent),$root:t=>yc(t.root),$emit:t=>t.emit,$options:t=>bu(t),$forceUpdate:t=>t.f||(t.f=()=>Iu(t.update)),$nextTick:t=>t.n||(t.n=Hd.bind(t.proxy)),$watch:t=>kw.bind(t)}),Va=(t,e)=>t!==ge&&!t.__isScriptSetup&&re(t,e),Hw={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Va(s,e))return o[e]=1,s[e];if(r!==ge&&re(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&re(u,e))return o[e]=3,i[e];if(n!==ge&&re(n,e))return o[e]=4,n[e];vc&&(o[e]=0)}}const l=Er[e];let h,f;if(l)return e==="$attrs"&&ot(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ge&&re(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,re(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Va(r,e)?(r[e]=n,!0):s!==ge&&re(s,e)?(s[e]=n,!0):re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ge&&re(t,o)||Va(e,o)||(a=i[0])&&re(a,o)||re(s,o)||re(Er,o)||re(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let vc=!0;function Kw(t){const e=bu(t),n=t.proxy,s=t.ctx;vc=!1,e.beforeCreate&&ah(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:f,beforeUpdate:g,updated:y,activated:I,deactivated:k,beforeDestroy:R,beforeUnmount:P,destroyed:U,unmounted:X,render:ye,renderTracked:Ce,renderTriggered:Fe,errorCaptured:gt,serverPrefetch:Dt,expose:ut,inheritAttrs:an,components:Ot,directives:hs,filters:Dn}=e;if(u&&Gw(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const he in o){const ue=o[he];J(ue)&&(s[he]=ue.bind(n))}if(r){const he=r.call(n,n);pe(he)&&(t.data=Js(he))}if(vc=!0,i)for(const he in i){const ue=i[he],mt=J(ue)?ue.bind(n,n):J(ue.get)?ue.get.bind(n,n):Et,On=!J(ue)&&J(ue.set)?ue.set.bind(n):Et,yt=lt({get:mt,set:On});Object.defineProperty(s,he,{enumerable:!0,configurable:!0,get:()=>yt.value,set:Xe=>yt.value=Xe})}if(a)for(const he in a)sp(a[he],s,n,he);if(c){const he=J(c)?c.call(n):c;Reflect.ownKeys(he).forEach(ue=>{Hi(ue,he[ue])})}l&&ah(l,t,"c");function Ie(he,ue){H(ue)?ue.forEach(mt=>he(mt.bind(n))):ue&&he(ue.bind(n))}if(Ie(ep,h),Ie(xw,f),Ie(Pw,g),Ie(Mw,y),Ie(Dw,I),Ie(Ow,k),Ie($w,gt),Ie(Vw,Ce),Ie(Fw,Fe),Ie(Lw,P),Ie(tp,X),Ie(Uw,Dt),H(ut))if(ut.length){const he=t.exposed||(t.exposed={});ut.forEach(ue=>{Object.defineProperty(he,ue,{get:()=>n[ue],set:mt=>n[ue]=mt})})}else t.exposed||(t.exposed={});ye&&t.render===Et&&(t.render=ye),an!=null&&(t.inheritAttrs=an),Ot&&(t.components=Ot),hs&&(t.directives=hs)}function Gw(t,e,n=Et,s=!1){H(t)&&(t=wc(t));for(const r in t){const i=t[r];let o;pe(i)?"default"in i?o=ft(i.from||r,i.default,!0):o=ft(i.from||r):o=ft(i),qe(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function ah(t,e,n){It(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function sp(t,e,n,s){const r=s.includes(".")?Yd(n,s):()=>n[s];if(De(t)){const i=e[t];J(i)&&Rs(r,i)}else if(J(t))Rs(r,t.bind(n));else if(pe(t))if(H(t))t.forEach(i=>sp(i,e,n,s));else{const i=J(t.handler)?t.handler.bind(n):e[t.handler];J(i)&&Rs(r,i,t)}}function bu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>io(c,u,o,!0)),io(c,e,o)),pe(e)&&i.set(e,c),c}function io(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&io(t,i,n,!0),r&&r.forEach(o=>io(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=zw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const zw={data:ch,props:Mn,emits:Mn,methods:Mn,computed:Mn,beforeCreate:Qe,created:Qe,beforeMount:Qe,mounted:Qe,beforeUpdate:Qe,updated:Qe,beforeDestroy:Qe,beforeUnmount:Qe,destroyed:Qe,unmounted:Qe,activated:Qe,deactivated:Qe,errorCaptured:Qe,serverPrefetch:Qe,components:Mn,directives:Mn,watch:Qw,provide:ch,inject:Ww};function ch(t,e){return e?t?function(){return Je(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function Ww(t,e){return Mn(wc(t),wc(e))}function wc(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Qe(t,e){return t?[...new Set([].concat(t,e))]:e}function Mn(t,e){return t?Je(Je(Object.create(null),t),e):e}function Qw(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const s in e)n[s]=Qe(t[s],e[s]);return n}function Yw(t,e,n,s=!1){const r={},i={};no(i,zo,1),t.propsDefaults=Object.create(null),rp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:cw(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Jw(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ae(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let f=l[h];if(qo(t.emitsOptions,f))continue;const g=e[f];if(c)if(re(i,f))g!==i[f]&&(i[f]=g,u=!0);else{const y=Bt(f);r[y]=_c(c,a,y,g,t,!1)}else g!==i[f]&&(i[f]=g,u=!0)}}}else{rp(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!re(e,h)&&((l=Ws(h))===h||!re(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=_c(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!re(e,h))&&(delete i[h],u=!0)}u&&Xt(t,"set","$attrs")}function rp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ji(c))continue;const u=e[c];let l;r&&re(r,l=Bt(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:qo(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=ae(n),u=a||ge;for(let l=0;l<i.length;l++){const h=i[l];n[h]=_c(r,c,h,u[h],t,!re(u,h))}}return o}function _c(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=re(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&J(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(Ls(r),s=u[n]=c.call(null,e),Gn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Ws(n))&&(s=!0))}return s}function ip(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!J(t)){const l=h=>{c=!0;const[f,g]=ip(h,e,!0);Je(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return pe(t)&&s.set(t,bs),bs;if(H(i))for(let l=0;l<i.length;l++){const h=Bt(i[l]);uh(h)&&(o[h]=ge)}else if(i)for(const l in i){const h=Bt(l);if(uh(h)){const f=i[l],g=o[h]=H(f)||J(f)?{type:f}:Object.assign({},f);if(g){const y=fh(Boolean,g.type),I=fh(String,g.type);g[0]=y>-1,g[1]=I<0||y<I,(y>-1||re(g,"default"))&&a.push(h)}}}const u=[o,a];return pe(t)&&s.set(t,u),u}function uh(t){return t[0]!=="$"}function lh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function hh(t,e){return lh(t)===lh(e)}function fh(t,e){return H(e)?e.findIndex(n=>hh(n,t)):J(e)&&hh(e,t)?0:-1}const op=t=>t[0]==="_"||t==="$stable",Tu=t=>H(t)?t.map(Mt):[Mt(t)],Xw=(t,e,n)=>{if(e._n)return e;const s=Iw((...r)=>Tu(e(...r)),n);return s._c=!1,s},ap=(t,e,n)=>{const s=t._ctx;for(const r in t){if(op(r))continue;const i=t[r];if(J(i))e[r]=Xw(r,i,s);else if(i!=null){const o=Tu(i);e[r]=()=>o}}},cp=(t,e)=>{const n=Tu(e);t.slots.default=()=>n},Zw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ae(e),no(e,"_",n)):ap(e,t.slots={})}else t.slots={},e&&cp(t,e);no(t.slots,zo,1)},e_=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ge;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Je(r,e),!n&&a===1&&delete r._):(i=!e.$stable,ap(e,r)),o=e}else e&&(cp(t,e),o={default:1});if(i)for(const a in r)!op(a)&&!(a in o)&&delete r[a]};function up(){return{app:null,config:{isNativeTag:Rv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let t_=0;function n_(t,e){return function(s,r=null){J(s)||(s=Object.assign({},s)),r!=null&&!pe(r)&&(r=null);const i=up(),o=new Set;let a=!1;const c=i.app={_uid:t_++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:T_,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&J(u.install)?(o.add(u),u.install(c,...l)):J(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const f=He(s,r);return f.appContext=i,l&&e?e(f,u):t(f,u,h),a=!0,c._container=u,u.__vue_app__=c,Qo(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function Ec(t,e,n,s,r=!1){if(H(t)){t.forEach((f,g)=>Ec(f,e&&(H(e)?e[g]:e),n,s,r));return}if(Ki(s)&&!r)return;const i=s.shapeFlag&4?Qo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===ge?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(De(u)?(l[u]=null,re(h,u)&&(h[u]=null)):qe(u)&&(u.value=null)),J(c))wn(c,a,12,[o,l]);else{const f=De(c),g=qe(c);if(f||g){const y=()=>{if(t.f){const I=f?re(h,c)?h[c]:l[c]:c.value;r?H(I)&&hu(I,i):H(I)?I.includes(i)||I.push(i):f?(l[c]=[i],re(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else f?(l[c]=o,re(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(l[t.k]=o))};o?(y.id=-1,Ze(y,n)):y()}}}const Ze=Rw;function s_(t){return r_(t)}function r_(t,e){const n=Pv();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:f,setScopeId:g=Et,insertStaticContent:y}=t,I=(d,p,m,v=null,E=null,A=null,O=!1,S=null,C=!!p.dynamicChildren)=>{if(d===p)return;d&&!lr(d,p)&&(v=D(d),Xe(d,E,A,!0),d=null),p.patchFlag===-2&&(C=!1,p.dynamicChildren=null);const{type:b,ref:B,shapeFlag:M}=p;switch(b){case Go:k(d,p,m,v);break;case Yn:R(d,p,m,v);break;case Gi:d==null&&P(p,m,v,O);break;case zt:Ot(d,p,m,v,E,A,O,S,C);break;default:M&1?ye(d,p,m,v,E,A,O,S,C):M&6?hs(d,p,m,v,E,A,O,S,C):(M&64||M&128)&&b.process(d,p,m,v,E,A,O,S,C,se)}B!=null&&E&&Ec(B,d&&d.ref,A,p||d,!p)},k=(d,p,m,v)=>{if(d==null)s(p.el=a(p.children),m,v);else{const E=p.el=d.el;p.children!==d.children&&u(E,p.children)}},R=(d,p,m,v)=>{d==null?s(p.el=c(p.children||""),m,v):p.el=d.el},P=(d,p,m,v)=>{[d.el,d.anchor]=y(d.children,p,m,v,d.el,d.anchor)},U=({el:d,anchor:p},m,v)=>{let E;for(;d&&d!==p;)E=f(d),s(d,m,v),d=E;s(p,m,v)},X=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),r(d),d=m;r(p)},ye=(d,p,m,v,E,A,O,S,C)=>{O=O||p.type==="svg",d==null?Ce(p,m,v,E,A,O,S,C):Dt(d,p,E,A,O,S,C)},Ce=(d,p,m,v,E,A,O,S)=>{let C,b;const{type:B,props:M,shapeFlag:j,transition:z,dirs:ee}=d;if(C=d.el=o(d.type,A,M&&M.is,M),j&8?l(C,d.children):j&16&&gt(d.children,C,null,v,E,A&&B!=="foreignObject",O,S),ee&&Nn(d,null,v,"created"),M){for(const le in M)le!=="value"&&!ji(le)&&i(C,le,null,M[le],A,d.children,v,E,N);"value"in M&&i(C,"value",null,M.value),(b=M.onVnodeBeforeMount)&&xt(b,v,d)}Fe(C,d,d.scopeId,O,v),ee&&Nn(d,null,v,"beforeMount");const fe=(!E||E&&!E.pendingBranch)&&z&&!z.persisted;fe&&z.beforeEnter(C),s(C,p,m),((b=M&&M.onVnodeMounted)||fe||ee)&&Ze(()=>{b&&xt(b,v,d),fe&&z.enter(C),ee&&Nn(d,null,v,"mounted")},E)},Fe=(d,p,m,v,E)=>{if(m&&g(d,m),v)for(let A=0;A<v.length;A++)g(d,v[A]);if(E){let A=E.subTree;if(p===A){const O=E.vnode;Fe(d,O,O.scopeId,O.slotScopeIds,E.parent)}}},gt=(d,p,m,v,E,A,O,S,C=0)=>{for(let b=C;b<d.length;b++){const B=d[b]=S?hn(d[b]):Mt(d[b]);I(null,B,p,m,v,E,A,O,S)}},Dt=(d,p,m,v,E,A,O)=>{const S=p.el=d.el;let{patchFlag:C,dynamicChildren:b,dirs:B}=p;C|=d.patchFlag&16;const M=d.props||ge,j=p.props||ge;let z;m&&xn(m,!1),(z=j.onVnodeBeforeUpdate)&&xt(z,m,p,d),B&&Nn(p,d,m,"beforeUpdate"),m&&xn(m,!0);const ee=E&&p.type!=="foreignObject";if(b?ut(d.dynamicChildren,b,S,m,v,ee,A):O||ue(d,p,S,null,m,v,ee,A,!1),C>0){if(C&16)an(S,p,M,j,m,v,E);else if(C&2&&M.class!==j.class&&i(S,"class",null,j.class,E),C&4&&i(S,"style",M.style,j.style,E),C&8){const fe=p.dynamicProps;for(let le=0;le<fe.length;le++){const be=fe[le],vt=M[be],ds=j[be];(ds!==vt||be==="value")&&i(S,be,vt,ds,E,d.children,m,v,N)}}C&1&&d.children!==p.children&&l(S,p.children)}else!O&&b==null&&an(S,p,M,j,m,v,E);((z=j.onVnodeUpdated)||B)&&Ze(()=>{z&&xt(z,m,p,d),B&&Nn(p,d,m,"updated")},v)},ut=(d,p,m,v,E,A,O)=>{for(let S=0;S<p.length;S++){const C=d[S],b=p[S],B=C.el&&(C.type===zt||!lr(C,b)||C.shapeFlag&70)?h(C.el):m;I(C,b,B,null,v,E,A,O,!0)}},an=(d,p,m,v,E,A,O)=>{if(m!==v){if(m!==ge)for(const S in m)!ji(S)&&!(S in v)&&i(d,S,m[S],null,O,p.children,E,A,N);for(const S in v){if(ji(S))continue;const C=v[S],b=m[S];C!==b&&S!=="value"&&i(d,S,b,C,O,p.children,E,A,N)}"value"in v&&i(d,"value",m.value,v.value)}},Ot=(d,p,m,v,E,A,O,S,C)=>{const b=p.el=d?d.el:a(""),B=p.anchor=d?d.anchor:a("");let{patchFlag:M,dynamicChildren:j,slotScopeIds:z}=p;z&&(S=S?S.concat(z):z),d==null?(s(b,m,v),s(B,m,v),gt(p.children,m,B,E,A,O,S,C)):M>0&&M&64&&j&&d.dynamicChildren?(ut(d.dynamicChildren,j,m,E,A,O,S),(p.key!=null||E&&p===E.subTree)&&lp(d,p,!0)):ue(d,p,m,B,E,A,O,S,C)},hs=(d,p,m,v,E,A,O,S,C)=>{p.slotScopeIds=S,d==null?p.shapeFlag&512?E.ctx.activate(p,m,v,O,C):Dn(p,m,v,E,A,O,C):ar(d,p,C)},Dn=(d,p,m,v,E,A,O)=>{const S=d.component=g_(d,v,E);if(Xd(d)&&(S.ctx.renderer=se),m_(S),S.asyncDep){if(E&&E.registerDep(S,Ie),!d.el){const C=S.subTree=He(Yn);R(null,C,p,m)}return}Ie(S,d,p,m,E,A,O)},ar=(d,p,m)=>{const v=p.component=d.component;if(Sw(d,p,m))if(v.asyncDep&&!v.asyncResolved){he(v,p,m);return}else v.next=p,mw(v.update),v.update();else p.el=d.el,v.vnode=p},Ie=(d,p,m,v,E,A,O)=>{const S=()=>{if(d.isMounted){let{next:B,bu:M,u:j,parent:z,vnode:ee}=d,fe=B,le;xn(d,!1),B?(B.el=ee.el,he(d,B,O)):B=ee,M&&qi(M),(le=B.props&&B.props.onVnodeBeforeUpdate)&&xt(le,z,B,ee),xn(d,!0);const be=Fa(d),vt=d.subTree;d.subTree=be,I(vt,be,h(vt.el),D(vt),d,E,A),B.el=be.el,fe===null&&Aw(d,be.el),j&&Ze(j,E),(le=B.props&&B.props.onVnodeUpdated)&&Ze(()=>xt(le,z,B,ee),E)}else{let B;const{el:M,props:j}=p,{bm:z,m:ee,parent:fe}=d,le=Ki(p);if(xn(d,!1),z&&qi(z),!le&&(B=j&&j.onVnodeBeforeMount)&&xt(B,fe,p),xn(d,!0),M&&Z){const be=()=>{d.subTree=Fa(d),Z(M,d.subTree,d,E,null)};le?p.type.__asyncLoader().then(()=>!d.isUnmounted&&be()):be()}else{const be=d.subTree=Fa(d);I(null,be,m,v,d,E,A),p.el=be.el}if(ee&&Ze(ee,E),!le&&(B=j&&j.onVnodeMounted)){const be=p;Ze(()=>xt(B,fe,be),E)}(p.shapeFlag&256||fe&&Ki(fe.vnode)&&fe.vnode.shapeFlag&256)&&d.a&&Ze(d.a,E),d.isMounted=!0,p=m=v=null}},C=d.effect=new pu(S,()=>Iu(b),d.scope),b=d.update=()=>C.run();b.id=d.uid,xn(d,!0),b()},he=(d,p,m)=>{p.component=d;const v=d.vnode.props;d.vnode=p,d.next=null,Jw(d,p.props,v,m),e_(d,p.children,m),Qs(),rh(),Ys()},ue=(d,p,m,v,E,A,O,S,C=!1)=>{const b=d&&d.children,B=d?d.shapeFlag:0,M=p.children,{patchFlag:j,shapeFlag:z}=p;if(j>0){if(j&128){On(b,M,m,v,E,A,O,S,C);return}else if(j&256){mt(b,M,m,v,E,A,O,S,C);return}}z&8?(B&16&&N(b,E,A),M!==b&&l(m,M)):B&16?z&16?On(b,M,m,v,E,A,O,S,C):N(b,E,A,!0):(B&8&&l(m,""),z&16&&gt(M,m,v,E,A,O,S,C))},mt=(d,p,m,v,E,A,O,S,C)=>{d=d||bs,p=p||bs;const b=d.length,B=p.length,M=Math.min(b,B);let j;for(j=0;j<M;j++){const z=p[j]=C?hn(p[j]):Mt(p[j]);I(d[j],z,m,null,E,A,O,S,C)}b>B?N(d,E,A,!0,!1,M):gt(p,m,v,E,A,O,S,C,M)},On=(d,p,m,v,E,A,O,S,C)=>{let b=0;const B=p.length;let M=d.length-1,j=B-1;for(;b<=M&&b<=j;){const z=d[b],ee=p[b]=C?hn(p[b]):Mt(p[b]);if(lr(z,ee))I(z,ee,m,null,E,A,O,S,C);else break;b++}for(;b<=M&&b<=j;){const z=d[M],ee=p[j]=C?hn(p[j]):Mt(p[j]);if(lr(z,ee))I(z,ee,m,null,E,A,O,S,C);else break;M--,j--}if(b>M){if(b<=j){const z=j+1,ee=z<B?p[z].el:v;for(;b<=j;)I(null,p[b]=C?hn(p[b]):Mt(p[b]),m,ee,E,A,O,S,C),b++}}else if(b>j)for(;b<=M;)Xe(d[b],E,A,!0),b++;else{const z=b,ee=b,fe=new Map;for(b=ee;b<=j;b++){const st=p[b]=C?hn(p[b]):Mt(p[b]);st.key!=null&&fe.set(st.key,b)}let le,be=0;const vt=j-ee+1;let ds=!1,Gl=0;const cr=new Array(vt);for(b=0;b<vt;b++)cr[b]=0;for(b=z;b<=M;b++){const st=d[b];if(be>=vt){Xe(st,E,A,!0);continue}let Nt;if(st.key!=null)Nt=fe.get(st.key);else for(le=ee;le<=j;le++)if(cr[le-ee]===0&&lr(st,p[le])){Nt=le;break}Nt===void 0?Xe(st,E,A,!0):(cr[Nt-ee]=b+1,Nt>=Gl?Gl=Nt:ds=!0,I(st,p[Nt],m,null,E,A,O,S,C),be++)}const zl=ds?i_(cr):bs;for(le=zl.length-1,b=vt-1;b>=0;b--){const st=ee+b,Nt=p[st],Wl=st+1<B?p[st+1].el:v;cr[b]===0?I(null,Nt,m,Wl,E,A,O,S,C):ds&&(le<0||b!==zl[le]?yt(Nt,m,Wl,2):le--)}}},yt=(d,p,m,v,E=null)=>{const{el:A,type:O,transition:S,children:C,shapeFlag:b}=d;if(b&6){yt(d.component.subTree,p,m,v);return}if(b&128){d.suspense.move(p,m,v);return}if(b&64){O.move(d,p,m,se);return}if(O===zt){s(A,p,m);for(let M=0;M<C.length;M++)yt(C[M],p,m,v);s(d.anchor,p,m);return}if(O===Gi){U(d,p,m);return}if(v!==2&&b&1&&S)if(v===0)S.beforeEnter(A),s(A,p,m),Ze(()=>S.enter(A),E);else{const{leave:M,delayLeave:j,afterLeave:z}=S,ee=()=>s(A,p,m),fe=()=>{M(A,()=>{ee(),z&&z()})};j?j(A,ee,fe):fe()}else s(A,p,m)},Xe=(d,p,m,v=!1,E=!1)=>{const{type:A,props:O,ref:S,children:C,dynamicChildren:b,shapeFlag:B,patchFlag:M,dirs:j}=d;if(S!=null&&Ec(S,null,m,d,!0),B&256){p.ctx.deactivate(d);return}const z=B&1&&j,ee=!Ki(d);let fe;if(ee&&(fe=O&&O.onVnodeBeforeUnmount)&&xt(fe,p,d),B&6)_(d.component,m,v);else{if(B&128){d.suspense.unmount(m,v);return}z&&Nn(d,null,p,"beforeUnmount"),B&64?d.type.remove(d,p,m,E,se,v):b&&(A!==zt||M>0&&M&64)?N(b,p,m,!1,!0):(A===zt&&M&384||!E&&B&16)&&N(C,p,m),v&&fs(d)}(ee&&(fe=O&&O.onVnodeUnmounted)||z)&&Ze(()=>{fe&&xt(fe,p,d),z&&Nn(d,null,p,"unmounted")},m)},fs=d=>{const{type:p,el:m,anchor:v,transition:E}=d;if(p===zt){Ri(m,v);return}if(p===Gi){X(d);return}const A=()=>{r(m),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:O,delayLeave:S}=E,C=()=>O(m,A);S?S(d.el,A,C):C()}else A()},Ri=(d,p)=>{let m;for(;d!==p;)m=f(d),r(d),d=m;r(p)},_=(d,p,m)=>{const{bum:v,scope:E,update:A,subTree:O,um:S}=d;v&&qi(v),E.stop(),A&&(A.active=!1,Xe(O,d,p,m)),S&&Ze(S,p),Ze(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},N=(d,p,m,v=!1,E=!1,A=0)=>{for(let O=A;O<d.length;O++)Xe(d[O],p,m,v,E)},D=d=>d.shapeFlag&6?D(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),V=(d,p,m)=>{d==null?p._vnode&&Xe(p._vnode,null,null,!0):I(p._vnode||null,d,p,null,null,null,m),rh(),Gd(),p._vnode=d},se={p:I,um:Xe,m:yt,r:fs,mt:Dn,mc:gt,pc:ue,pbc:ut,n:D,o:t};let we,Z;return e&&([we,Z]=e(se)),{render:V,hydrate:we,createApp:n_(V,we)}}function xn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function lp(t,e,n=!1){const s=t.children,r=e.children;if(H(s)&&H(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=hn(r[i]),a.el=o.el),n||lp(o,a)),a.type===Go&&(a.el=o.el)}}function i_(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const o_=t=>t.__isTeleport,zt=Symbol(void 0),Go=Symbol(void 0),Yn=Symbol(void 0),Gi=Symbol(void 0),Ir=[];let _t=null;function Ur(t=!1){Ir.push(_t=t?null:[])}function a_(){Ir.pop(),_t=Ir[Ir.length-1]||null}let Fr=1;function dh(t){Fr+=t}function hp(t){return t.dynamicChildren=Fr>0?_t||bs:null,a_(),Fr>0&&_t&&_t.push(t),t}function oo(t,e,n,s,r,i){return hp(Q(t,e,n,s,r,i,!0))}function c_(t,e,n,s,r){return hp(He(t,e,n,s,r,!0))}function Ic(t){return t?t.__v_isVNode===!0:!1}function lr(t,e){return t.type===e.type&&t.key===e.key}const zo="__vInternal",fp=({key:t})=>t??null,zi=({ref:t,ref_key:e,ref_for:n})=>t!=null?De(t)||qe(t)||J(t)?{i:ht,r:t,k:e,f:!!n}:t:null;function Q(t,e=null,n=null,s=0,r=null,i=t===zt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&fp(e),ref:e&&zi(e),scopeId:Ho,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ht};return a?(Su(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=De(n)?8:16),Fr>0&&!o&&_t&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&_t.push(c),c}const He=u_;function u_(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===jw)&&(t=Yn),Ic(t)){const a=Ms(t,e,!0);return n&&Su(a,n),Fr>0&&!i&&_t&&(a.shapeFlag&6?_t[_t.indexOf(t)]=a:_t.push(a)),a.patchFlag|=-2,a}if(E_(t)&&(t=t.__vccOpts),e){e=l_(e);let{class:a,style:c}=e;a&&!De(a)&&(e.class=Mo(a)),pe(c)&&(Ud(c)&&!H(c)&&(c=Je({},c)),e.style=uu(c))}const o=De(t)?1:Cw(t)?128:o_(t)?64:pe(t)?4:J(t)?2:0;return Q(t,e,n,s,r,o,i,!0)}function l_(t){return t?Ud(t)||zo in t?Je({},t):t:null}function Ms(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?f_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&fp(a),ref:e&&e.ref?n&&r?H(r)?r.concat(zi(e)):[r,zi(e)]:zi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==zt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ms(t.ssContent),ssFallback:t.ssFallback&&Ms(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Wo(t=" ",e=0){return He(Go,null,t,e)}function iO(t,e){const n=He(Gi,null,t);return n.staticCount=e,n}function h_(t="",e=!1){return e?(Ur(),c_(Yn,null,t)):He(Yn,null,t)}function Mt(t){return t==null||typeof t=="boolean"?He(Yn):H(t)?He(zt,null,t.slice()):typeof t=="object"?hn(t):He(Go,null,String(t))}function hn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ms(t)}function Su(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Su(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(zo in e)?e._ctx=ht:r===3&&ht&&(ht.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:ht},n=32):(e=String(e),s&64?(n=16,e=[Wo(e)]):n=8);t.children=e,t.shapeFlag|=n}function f_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Mo([e.class,s.class]));else if(r==="style")e.style=uu([e.style,s.style]);else if(Uo(r)){const i=e[r],o=s[r];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function xt(t,e,n,s=null){It(t,e,7,[n,s])}const d_=up();let p_=0;function g_(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||d_,i={uid:p_++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Sd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ip(s,r),emitsOptions:Wd(s,r),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:s.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ww.bind(null,i),t.ce&&t.ce(i),i}let Me=null;const Ls=t=>{Me=t,t.scope.on()},Gn=()=>{Me&&Me.scope.off(),Me=null};function dp(t){return t.vnode.shapeFlag&4}let Vr=!1;function m_(t,e=!1){Vr=e;const{props:n,children:s}=t.vnode,r=dp(t);Yw(t,n,r,e),Zw(t,s);const i=r?y_(t,e):void 0;return Vr=!1,i}function y_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=wu(new Proxy(t.ctx,Hw));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?w_(t):null;Ls(t),Qs();const i=wn(s,t,0,[t.props,r]);if(Ys(),Gn(),Id(i)){if(i.then(Gn,Gn),e)return i.then(o=>{ph(t,o,e)}).catch(o=>{jo(o,t,0)});t.asyncDep=i}else ph(t,i,e)}else pp(t,e)}function ph(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pe(e)&&(t.setupState=Bd(e)),pp(t,n)}let gh;function pp(t,e,n){const s=t.type;if(!t.render){if(!e&&gh&&!s.render){const r=s.template||bu(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=Je(Je({isCustomElement:i,delimiters:a},o),c);s.render=gh(r,u)}}t.render=s.render||Et}Ls(t),Qs(),Kw(t),Ys(),Gn()}function v_(t){return new Proxy(t.attrs,{get(e,n){return ot(t,"get","$attrs"),e[n]}})}function w_(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=v_(t))},slots:t.slots,emit:t.emit,expose:e}}function Qo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Bd(wu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Er)return Er[n](t)},has(e,n){return n in e||n in Er}}))}function __(t,e=!0){return J(t)?t.displayName||t.name:t.name||e&&t.__name}function E_(t){return J(t)&&"__vccOpts"in t}const lt=(t,e)=>dw(t,e,Vr);function gp(t,e,n){const s=arguments.length;return s===2?pe(e)&&!H(e)?Ic(e)?He(t,null,[e]):He(t,e):He(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ic(n)&&(n=[n]),He(t,e,n))}const I_=Symbol(""),b_=()=>ft(I_),T_="3.2.45",S_="http://www.w3.org/2000/svg",Fn=typeof document<"u"?document:null,mh=Fn&&Fn.createElement("template"),A_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Fn.createElementNS(S_,t):Fn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Fn.createTextNode(t),createComment:t=>Fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{mh.innerHTML=s?`<svg>${t}</svg>`:t;const a=mh.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function C_(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function R_(t,e,n){const s=t.style,r=De(n);if(n&&!r){for(const i in n)bc(s,i,n[i]);if(e&&!De(e))for(const i in e)n[i]==null&&bc(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const yh=/\s*!important$/;function bc(t,e,n){if(H(n))n.forEach(s=>bc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=k_(t,e);yh.test(n)?t.setProperty(Ws(s),n.replace(yh,""),"important"):t[s]=n}}const vh=["Webkit","Moz","ms"],$a={};function k_(t,e){const n=$a[e];if(n)return n;let s=Bt(e);if(s!=="filter"&&s in t)return $a[e]=s;s=$o(s);for(let r=0;r<vh.length;r++){const i=vh[r]+s;if(i in t)return $a[e]=i}return e}const wh="http://www.w3.org/1999/xlink";function D_(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(wh,e.slice(6,e.length)):t.setAttributeNS(wh,e,n);else{const i=Tv(e);n==null||i&&!_d(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function O_(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=_d(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Vn(t,e,n,s){t.addEventListener(e,n,s)}function N_(t,e,n,s){t.removeEventListener(e,n,s)}function x_(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=P_(e);if(s){const u=i[e]=U_(s,r);Vn(t,a,u,c)}else o&&(N_(t,a,o,c),i[e]=void 0)}}const _h=/(?:Once|Passive|Capture)$/;function P_(t){let e;if(_h.test(t)){e={};let s;for(;s=t.match(_h);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ws(t.slice(2)),e]}let Ba=0;const M_=Promise.resolve(),L_=()=>Ba||(M_.then(()=>Ba=0),Ba=Date.now());function U_(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;It(F_(s,n.value),e,5,[s])};return n.value=t,n.attached=L_(),n}function F_(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Eh=/^on[a-z]/,V_=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?C_(t,s,r):e==="style"?R_(t,n,s):Uo(e)?lu(e)||x_(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$_(t,e,s,r))?O_(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),D_(t,e,s,r))};function $_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Eh.test(e)&&J(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Eh.test(e)&&De(n)?!1:e in t}const ao=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>qi(e,n):e};function B_(t){t.target.composing=!0}function Ih(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const hr={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=ao(r);const i=s||r.props&&r.props.type==="number";Vn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=xr(a)),t._assign(a)}),n&&Vn(t,"change",()=>{t.value=t.value.trim()}),e||(Vn(t,"compositionstart",B_),Vn(t,"compositionend",Ih),Vn(t,"change",Ih))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=ao(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&xr(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},oO={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Fo(e);Vn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?xr(co(o)):co(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=ao(s)},mounted(t,{value:e}){bh(t,e)},beforeUpdate(t,e,n){t._assign=ao(n)},updated(t,{value:e}){bh(t,e)}};function bh(t,e){const n=t.multiple;if(!(n&&!H(e)&&!Fo(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=co(i);if(n)H(e)?i.selected=Av(e,o)>-1:i.selected=e.has(o);else if(Lo(co(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function co(t){return"_value"in t?t._value:t.value}const j_=["ctrl","shift","alt","meta"],q_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>j_.some(n=>t[`${n}Key`]&&!e.includes(n))},Th=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=q_[e[r]];if(i&&i(n,e))return}return t(n,...s)},H_=Je({patchProp:V_},A_);let Sh;function K_(){return Sh||(Sh=s_(H_))}const G_=(...t)=>{const e=K_().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=z_(s);if(!r)return;const i=e._component;!J(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function z_(t){return De(t)?document.querySelector(t):t}var W_=!1;function Q_(){return mp().__VUE_DEVTOOLS_GLOBAL_HOOK__}function mp(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Y_=typeof Proxy=="function",J_="devtools-plugin:setup",X_="plugin:settings:set";let ps,Tc;function Z_(){var t;return ps!==void 0||(typeof window<"u"&&window.performance?(ps=!0,Tc=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(ps=!0,Tc=global.perf_hooks.performance):ps=!1),ps}function eE(){return Z_()?Tc.now():Date.now()}class tE{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},s);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}i=o},now(){return eE()}},n&&n.on(X_,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:a,args:c,resolve:u})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function nE(t,e){const n=t,s=mp(),r=Q_(),i=Y_&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(J_,t,e);else{const o=i?new tE(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * pinia v2.0.29
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const sE=Symbol();var Ah;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ah||(Ah={}));function rE(){const t=Mv(!0),e=t.run(()=>Kt({}));let n=[],s=[];const r=wu({install(i){r._a=i,i.provide(sE,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!W_?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var yp="store";function vp(t){return t===void 0&&(t=null),ft(t!==null?t:yp)}function Xs(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function iE(t){return t!==null&&typeof t=="object"}function oE(t){return t&&typeof t.then=="function"}function aE(t,e){return function(){return t(e)}}function wp(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function _p(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Yo(t,n,[],t._modules.root,!0),Au(t,n,e)}function Au(t,e,n){var s=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,i={};Xs(r,function(o,a){i[a]=aE(o,t),Object.defineProperty(t.getters,a,{get:function(){return i[a]()},enumerable:!0})}),t._state=Js({data:e}),t.strict&&fE(t),s&&n&&t._withCommit(function(){s.data=null})}function Yo(t,e,n,s,r){var i=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!i&&!r){var a=Cu(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=s.state})}var u=s.context=cE(t,o,n);s.forEachMutation(function(l,h){var f=o+h;uE(t,f,l,u)}),s.forEachAction(function(l,h){var f=l.root?h:o+h,g=l.handler||l;lE(t,f,g,u)}),s.forEachGetter(function(l,h){var f=o+h;hE(t,f,l,u)}),s.forEachChild(function(l,h){Yo(t,e,n.concat(h),l,r)})}function cE(t,e,n){var s=e==="",r={dispatch:s?t.dispatch:function(i,o,a){var c=uo(i,o,a),u=c.payload,l=c.options,h=c.type;return(!l||!l.root)&&(h=e+h),t.dispatch(h,u)},commit:s?t.commit:function(i,o,a){var c=uo(i,o,a),u=c.payload,l=c.options,h=c.type;(!l||!l.root)&&(h=e+h),t.commit(h,u,l)}};return Object.defineProperties(r,{getters:{get:s?function(){return t.getters}:function(){return Ep(t,e)}},state:{get:function(){return Cu(t.state,n)}}}),r}function Ep(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(r){if(r.slice(0,s)===e){var i=r.slice(s);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function uE(t,e,n,s){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(o){n.call(t,s.state,o)})}function lE(t,e,n,s){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return oE(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function hE(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(s.state,s.getters,i.state,i.getters)})}function fE(t){Rs(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Cu(t,e){return e.reduce(function(n,s){return n[s]},t)}function uo(t,e,n){return iE(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var dE="vuex bindings",Ch="vuex:mutations",ja="vuex:actions",gs="vuex",pE=0;function gE(t,e){nE({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[dE]},function(n){n.addTimelineLayer({id:Ch,label:"Vuex Mutations",color:Rh}),n.addTimelineLayer({id:ja,label:"Vuex Actions",color:Rh}),n.addInspector({id:gs,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===gs)if(s.filter){var r=[];Sp(r,e._modules.root,s.filter,""),s.rootNodes=r}else s.rootNodes=[Tp(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===gs){var r=s.nodeId;Ep(e,r),s.state=vE(_E(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===gs){var r=s.nodeId,i=s.path;r!=="root"&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit(function(){s.set(e._state.data,i,s.state.value)})}}),e.subscribe(function(s,r){var i={};s.payload&&(i.payload=s.payload),i.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(gs),n.sendInspectorState(gs),n.addTimelineEvent({layerId:Ch,event:{time:Date.now(),title:s.type,data:i}})}),e.subscribeAction({before:function(s,r){var i={};s.payload&&(i.payload=s.payload),s._id=pE++,s._time=Date.now(),i.state=r,n.addTimelineEvent({layerId:ja,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:i}})},after:function(s,r){var i={},o=Date.now()-s._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(i.payload=s.payload),i.state=r,n.addTimelineEvent({layerId:ja,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:i}})}})})}var Rh=8702998,mE=6710886,yE=16777215,Ip={label:"namespaced",textColor:yE,backgroundColor:mE};function bp(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Tp(t,e){return{id:e||"root",label:bp(e),tags:t.namespaced?[Ip]:[],children:Object.keys(t._children).map(function(n){return Tp(t._children[n],e+n+"/")})}}function Sp(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[Ip]:[]}),Object.keys(e._children).forEach(function(r){Sp(t,e._children[r],n,s+r+"/")})}function vE(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),r={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var i=wE(e);r.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?bp(o):o,editable:!1,value:Sc(function(){return i[o]})}})}return r}function wE(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var r=e,i=s.pop();s.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[i]=Sc(function(){return t[n]})}else e[n]=Sc(function(){return t[n]})}),e}function _E(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,r,i){var o=s[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Sc(t){try{return t()}catch(e){return e}}var Rt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},Ap={namespaced:{configurable:!0}};Ap.namespaced.get=function(){return!!this._rawModule.namespaced};Rt.prototype.addChild=function(e,n){this._children[e]=n};Rt.prototype.removeChild=function(e){delete this._children[e]};Rt.prototype.getChild=function(e){return this._children[e]};Rt.prototype.hasChild=function(e){return e in this._children};Rt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Rt.prototype.forEachChild=function(e){Xs(this._children,e)};Rt.prototype.forEachGetter=function(e){this._rawModule.getters&&Xs(this._rawModule.getters,e)};Rt.prototype.forEachAction=function(e){this._rawModule.actions&&Xs(this._rawModule.actions,e)};Rt.prototype.forEachMutation=function(e){this._rawModule.mutations&&Xs(this._rawModule.mutations,e)};Object.defineProperties(Rt.prototype,Ap);var rs=function(e){this.register([],e,!1)};rs.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};rs.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,r){return n=n.getChild(r),s+(n.namespaced?r+"/":"")},"")};rs.prototype.update=function(e){Cp([],this.root,e)};rs.prototype.register=function(e,n,s){var r=this;s===void 0&&(s=!0);var i=new Rt(n,s);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&Xs(n.modules,function(a,c){r.register(e.concat(c),a,s)})};rs.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],r=n.getChild(s);r&&r.runtime&&n.removeChild(s)};rs.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function Cp(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;Cp(t.concat(s),e.getChild(s),n.modules[s])}}function EE(t){return new nt(t)}var nt=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var r=e.strict;r===void 0&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new rs(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(f,g){return c.call(o,f,g)},this.commit=function(f,g,y){return u.call(o,f,g,y)},this.strict=r;var l=this._modules.root.state;Yo(this,l,[],this._modules.root),Au(this,l),s.forEach(function(h){return h(n)})},Ru={state:{configurable:!0}};nt.prototype.install=function(e,n){e.provide(n||yp,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&gE(e,this)};Ru.state.get=function(){return this._state.data};Ru.state.set=function(t){};nt.prototype.commit=function(e,n,s){var r=this,i=uo(e,n,s),o=i.type,a=i.payload,c={type:o,payload:a},u=this._mutations[o];u&&(this._withCommit(function(){u.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(l){return l(c,r.state)}))};nt.prototype.dispatch=function(e,n){var s=this,r=uo(e,n),i=r.type,o=r.payload,a={type:i,payload:o},c=this._actions[i];if(c){try{this._actionSubscribers.slice().filter(function(l){return l.before}).forEach(function(l){return l.before(a,s.state)})}catch{}var u=c.length>1?Promise.all(c.map(function(l){return l(o)})):c[0](o);return new Promise(function(l,h){u.then(function(f){try{s._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,s.state)})}catch{}l(f)},function(f){try{s._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,s.state,f)})}catch{}h(f)})})}};nt.prototype.subscribe=function(e,n){return wp(e,this._subscribers,n)};nt.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return wp(s,this._actionSubscribers,n)};nt.prototype.watch=function(e,n,s){var r=this;return Rs(function(){return e(r.state,r.getters)},n,Object.assign({},s))};nt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};nt.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Yo(this,this.state,e,this._modules.get(e),s.preserveState),Au(this,this.state)};nt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=Cu(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),_p(this)};nt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};nt.prototype.hotUpdate=function(e){this._modules.update(e),_p(this,!0)};nt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(nt.prototype,Ru);/**
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
 */const Rp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},IE=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},kp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(f=64)),s.push(n[l],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Rp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):IE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const y=u<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},bE=function(t){const e=Rp(t);return kp.encodeByteArray(e,!0)},lo=function(t){return bE(t).replace(/\./g,"")},Dp=function(t){try{return kp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function TE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const SE=()=>TE().__FIREBASE_DEFAULTS__,AE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dp(t[1]);return e&&JSON.parse(e)},Jo=()=>{try{return SE()||AE()||CE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Op=t=>{var e,n;return(n=(e=Jo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},RE=t=>{const e=Op(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},kE=()=>{var t;return(t=Jo())===null||t===void 0?void 0:t.config},Np=t=>{var e;return(e=Jo())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class DE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function OE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[lo(JSON.stringify(n)),lo(JSON.stringify(o)),a].join(".")}/**
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
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function NE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function aO(){var t;const e=(t=Jo())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PE(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Pp(){try{return typeof indexedDB=="object"}catch{return!1}}function Mp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function ME(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const LE="FirebaseError";class kt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=LE,Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,is.prototype.create)}}class is{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?UE(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new kt(r,a,s)}}function UE(t,e){return t.replace(FE,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const FE=/\{\$([^}]+)}/g;function VE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $r(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(kh(i)&&kh(o)){if(!$r(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function kh(t){return t!==null&&typeof t=="object"}/**
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
 */function si(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function gr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function mr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $E(t,e){const n=new BE(t,e);return n.subscribe.bind(n)}class BE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");jE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=qa),r.error===void 0&&(r.error=qa),r.complete===void 0&&(r.complete=qa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qa(){}/**
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
 */const qE=1e3,HE=2,KE=4*60*60*1e3,GE=.5;function Dh(t,e=qE,n=HE){const s=e*Math.pow(n,t),r=Math.round(GE*s*(Math.random()-.5)*2);return Math.min(KE,s+r)}/**
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
 */function Ee(t){return t&&t._delegate?t._delegate:t}class Tt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ln="[DEFAULT]";/**
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
 */class zE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new DE;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(QE(e))try{this.getOrInitializeService({instanceIdentifier:Ln})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ln){return this.instances.has(e)}getOptions(e=Ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:WE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ln){return this.component?this.component.multipleInstances?e:Ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WE(t){return t===Ln?void 0:t}function QE(t){return t.instantiationMode==="EAGER"}/**
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
 */class YE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const JE={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},XE=ie.INFO,ZE={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},eI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=ZE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xo{constructor(e){this.name=e,this._logLevel=XE,this._logHandler=eI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?JE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const tI=(t,e)=>e.some(n=>t instanceof n);let Oh,Nh;function nI(){return Oh||(Oh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sI(){return Nh||(Nh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lp=new WeakMap,Ac=new WeakMap,Up=new WeakMap,Ha=new WeakMap,ku=new WeakMap;function rI(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_n(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lp.set(n,t)}).catch(()=>{}),ku.set(e,t),e}function iI(t){if(Ac.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ac.set(t,e)}let Cc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ac.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Up.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oI(t){Cc=t(Cc)}function aI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ka(this),e,...n);return Up.set(s,e.sort?e.sort():[e]),_n(s)}:sI().includes(t)?function(...e){return t.apply(Ka(this),e),_n(Lp.get(this))}:function(...e){return _n(t.apply(Ka(this),e))}}function cI(t){return typeof t=="function"?aI(t):(t instanceof IDBTransaction&&iI(t),tI(t,nI())?new Proxy(t,Cc):t)}function _n(t){if(t instanceof IDBRequest)return rI(t);if(Ha.has(t))return Ha.get(t);const e=cI(t);return e!==t&&(Ha.set(t,e),ku.set(e,t)),e}const Ka=t=>ku.get(t);function Fp(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=_n(o);return s&&o.addEventListener("upgradeneeded",c=>{s(_n(o.result),c.oldVersion,c.newVersion,_n(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const uI=["get","getKey","getAll","getAllKeys","count"],lI=["put","add","delete","clear"],Ga=new Map;function xh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ga.get(e))return Ga.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=lI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||uI.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Ga.set(e,i),i}oI(t=>({...t,get:(e,n,s)=>xh(e,n)||t.get(e,n,s),has:(e,n)=>!!xh(e,n)||t.has(e,n)}));/**
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
 */class hI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function fI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rc="@firebase/app",Ph="0.9.1";/**
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
 */const Jn=new Xo("@firebase/app"),dI="@firebase/app-compat",pI="@firebase/analytics-compat",gI="@firebase/analytics",mI="@firebase/app-check-compat",yI="@firebase/app-check",vI="@firebase/auth",wI="@firebase/auth-compat",_I="@firebase/database",EI="@firebase/database-compat",II="@firebase/functions",bI="@firebase/functions-compat",TI="@firebase/installations",SI="@firebase/installations-compat",AI="@firebase/messaging",CI="@firebase/messaging-compat",RI="@firebase/performance",kI="@firebase/performance-compat",DI="@firebase/remote-config",OI="@firebase/remote-config-compat",NI="@firebase/storage",xI="@firebase/storage-compat",PI="@firebase/firestore",MI="@firebase/firestore-compat",LI="firebase",UI="9.16.0";/**
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
 */const kc="[DEFAULT]",FI={[Rc]:"fire-core",[dI]:"fire-core-compat",[gI]:"fire-analytics",[pI]:"fire-analytics-compat",[yI]:"fire-app-check",[mI]:"fire-app-check-compat",[vI]:"fire-auth",[wI]:"fire-auth-compat",[_I]:"fire-rtdb",[EI]:"fire-rtdb-compat",[II]:"fire-fn",[bI]:"fire-fn-compat",[TI]:"fire-iid",[SI]:"fire-iid-compat",[AI]:"fire-fcm",[CI]:"fire-fcm-compat",[RI]:"fire-perf",[kI]:"fire-perf-compat",[DI]:"fire-rc",[OI]:"fire-rc-compat",[NI]:"fire-gcs",[xI]:"fire-gcs-compat",[PI]:"fire-fst",[MI]:"fire-fst-compat","fire-js":"fire-js",[LI]:"fire-js-all"};/**
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
 */const ho=new Map,Dc=new Map;function VI(t,e){try{t.container.addComponent(e)}catch(n){Jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jt(t){const e=t.name;if(Dc.has(e))return Jn.debug(`There were multiple attempts to register component ${e}.`),!1;Dc.set(e,t);for(const n of ho.values())VI(n,t);return!0}function os(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const $I={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},En=new is("app","Firebase",$I);/**
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
 */class BI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw En.create("app-deleted",{appName:this._name})}}/**
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
 */const ri=UI;function Vp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:kc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw En.create("bad-app-name",{appName:String(r)});if(n||(n=kE()),!n)throw En.create("no-options");const i=ho.get(r);if(i){if($r(n,i.options)&&$r(s,i.config))return i;throw En.create("duplicate-app",{appName:r})}const o=new YE(r);for(const c of Dc.values())o.addComponent(c);const a=new BI(n,s,o);return ho.set(r,a),a}function Du(t=kc){const e=ho.get(t);if(!e&&t===kc)return Vp();if(!e)throw En.create("no-app",{appName:t});return e}function dt(t,e,n){var s;let r=(s=FI[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jn.warn(a.join(" "));return}jt(new Tt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const jI="firebase-heartbeat-database",qI=1,Br="firebase-heartbeat-store";let za=null;function $p(){return za||(za=Fp(jI,qI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Br)}}}).catch(t=>{throw En.create("idb-open",{originalErrorMessage:t.message})})),za}async function HI(t){try{return(await $p()).transaction(Br).objectStore(Br).get(Bp(t))}catch(e){if(e instanceof kt)Jn.warn(e.message);else{const n=En.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jn.warn(n.message)}}}async function Mh(t,e){try{const s=(await $p()).transaction(Br,"readwrite");return await s.objectStore(Br).put(e,Bp(t)),s.done}catch(n){if(n instanceof kt)Jn.warn(n.message);else{const s=En.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jn.warn(s.message)}}}function Bp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const KI=1024,GI=30*24*60*60*1e3;class zI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new QI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=GI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lh(),{heartbeatsToSend:n,unsentEntries:s}=WI(this._heartbeatsCache.heartbeats),r=lo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Lh(){return new Date().toISOString().substring(0,10)}function WI(t,e=KI){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Uh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Uh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class QI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pp()?Mp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await HI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Mh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Mh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Uh(t){return lo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function YI(t){jt(new Tt("platform-logger",e=>new hI(e),"PRIVATE")),jt(new Tt("heartbeat",e=>new zI(e),"PRIVATE")),dt(Rc,Ph,t),dt(Rc,Ph,"esm2017"),dt("fire-js","")}YI("");var JI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,Ou=Ou||{},G=JI||self;function fo(){}function Zo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ii(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function XI(t){return Object.prototype.hasOwnProperty.call(t,Wa)&&t[Wa]||(t[Wa]=++ZI)}var Wa="closure_uid_"+(1e9*Math.random()>>>0),ZI=0;function e0(t,e,n){return t.call.apply(t.bind,arguments)}function t0(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ke(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ke=e0:Ke=t0,Ke.apply(null,arguments)}function Mi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ue(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Cn(){this.s=this.s,this.o=this.o}var n0=0;Cn.prototype.s=!1;Cn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),n0!=0)&&XI(this)};Cn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const jp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Nu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Fh(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Zo(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Ge(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var s0=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",fo,e),G.removeEventListener("test",fo,e)}catch{}return t}();function po(t){return/^[\s\xa0]*$/.test(t)}var Vh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Qa(t,e){return t<e?-1:t>e?1:0}function ea(){var t=G.navigator;return t&&(t=t.userAgent)?t:""}function Ut(t){return ea().indexOf(t)!=-1}function xu(t){return xu[" "](t),t}xu[" "]=fo;function r0(t){var e=a0;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var i0=Ut("Opera"),Us=Ut("Trident")||Ut("MSIE"),qp=Ut("Edge"),Oc=qp||Us,Hp=Ut("Gecko")&&!(ea().toLowerCase().indexOf("webkit")!=-1&&!Ut("Edge"))&&!(Ut("Trident")||Ut("MSIE"))&&!Ut("Edge"),o0=ea().toLowerCase().indexOf("webkit")!=-1&&!Ut("Edge");function Kp(){var t=G.document;return t?t.documentMode:void 0}var go;e:{var Ya="",Ja=function(){var t=ea();if(Hp)return/rv:([^\);]+)(\)|;)/.exec(t);if(qp)return/Edge\/([\d\.]+)/.exec(t);if(Us)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(o0)return/WebKit\/(\S+)/.exec(t);if(i0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ja&&(Ya=Ja?Ja[1]:""),Us){var Xa=Kp();if(Xa!=null&&Xa>parseFloat(Ya)){go=String(Xa);break e}}go=Ya}var a0={};function c0(){return r0(function(){let t=0;const e=Vh(String(go)).split("."),n=Vh("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Qa(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Qa(r[2].length==0,i[2].length==0)||Qa(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Nc;if(G.document&&Us){var $h=Kp();Nc=$h||parseInt(go,10)||void 0}else Nc=void 0;var u0=Nc;function jr(t,e){if(Ge.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Hp){e:{try{xu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:l0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&jr.X.h.call(this)}}Ue(jr,Ge);var l0={2:"touch",3:"pen",4:"mouse"};jr.prototype.h=function(){jr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var oi="closure_listenable_"+(1e6*Math.random()|0),h0=0;function f0(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++h0,this.ba=this.ea=!1}function ta(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Pu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Gp(t){const e={};for(const n in t)e[n]=t[n];return e}const Bh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zp(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Bh.length;i++)n=Bh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function na(t){this.src=t,this.g={},this.h=0}na.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Pc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new f0(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function xc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=jp(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ta(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Pc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Mu="closure_lm_"+(1e6*Math.random()|0),Za={};function Wp(t,e,n,s,r){if(s&&s.once)return Yp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Wp(t,e[i],n,s,r);return null}return n=Fu(n),t&&t[oi]?t.N(e,n,ii(s)?!!s.capture:!!s,r):Qp(t,e,n,!1,s,r)}function Qp(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=ii(r)?!!r.capture:!!r,a=Uu(t);if(a||(t[Mu]=a=new na(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=d0(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)s0||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Xp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function d0(){function t(n){return e.call(t.src,t.listener,n)}const e=p0;return t}function Yp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Yp(t,e[i],n,s,r);return null}return n=Fu(n),t&&t[oi]?t.O(e,n,ii(s)?!!s.capture:!!s,r):Qp(t,e,n,!0,s,r)}function Jp(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Jp(t,e[i],n,s,r);else s=ii(s)?!!s.capture:!!s,n=Fu(n),t&&t[oi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Pc(i,n,s,r),-1<n&&(ta(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Uu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Pc(e,n,s,r)),(n=-1<t?e[t]:null)&&Lu(n))}function Lu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[oi])xc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Xp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Uu(e))?(xc(n,t),n.h==0&&(n.src=null,e[Mu]=null)):ta(t)}}}function Xp(t){return t in Za?Za[t]:Za[t]="on"+t}function p0(t,e){if(t.ba)t=!0;else{e=new jr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Lu(t),t=n.call(s,e)}return t}function Uu(t){return t=t[Mu],t instanceof na?t:null}var ec="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fu(t){return typeof t=="function"?t:(t[ec]||(t[ec]=function(e){return t.handleEvent(e)}),t[ec])}function xe(){Cn.call(this),this.i=new na(this),this.P=this,this.I=null}Ue(xe,Cn);xe.prototype[oi]=!0;xe.prototype.removeEventListener=function(t,e,n,s){Jp(this,t,e,n,s)};function Le(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ge(e,t);else if(e instanceof Ge)e.target=e.target||t;else{var r=e;e=new Ge(s,t),zp(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Li(o,s,!0,e)&&r}if(o=e.g=t,r=Li(o,s,!0,e)&&r,r=Li(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Li(o,s,!1,e)&&r}xe.prototype.M=function(){if(xe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ta(n[s]);delete t.g[e],t.h--}}this.I=null};xe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};xe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Li(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&xc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Vu=G.JSON.stringify;function g0(){var t=tg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class m0{constructor(){this.h=this.g=null}add(e,n){const s=Zp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Zp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new y0,t=>t.reset());class y0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function v0(t){G.setTimeout(()=>{throw t},0)}function eg(t,e){Mc||w0(),Lc||(Mc(),Lc=!0),tg.add(t,e)}var Mc;function w0(){var t=G.Promise.resolve(void 0);Mc=function(){t.then(_0)}}var Lc=!1,tg=new m0;function _0(){for(var t;t=g0();){try{t.h.call(t.g)}catch(n){v0(n)}var e=Zp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Lc=!1}function sa(t,e){xe.call(this),this.h=t||1,this.g=e||G,this.j=Ke(this.lb,this),this.l=Date.now()}Ue(sa,xe);L=sa.prototype;L.ca=!1;L.R=null;L.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Le(this,"tick"),this.ca&&($u(this),this.start()))}};L.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function $u(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}L.M=function(){sa.X.M.call(this),$u(this),delete this.g};function Bu(t,e,n){if(typeof t=="function")n&&(t=Ke(t,n));else if(t&&typeof t.handleEvent=="function")t=Ke(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function ng(t){t.g=Bu(()=>{t.g=null,t.i&&(t.i=!1,ng(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class E0 extends Cn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ng(this)}M(){super.M(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qr(t){Cn.call(this),this.h=t,this.g={}}Ue(qr,Cn);var jh=[];function sg(t,e,n,s){Array.isArray(n)||(n&&(jh[0]=n.toString()),n=jh);for(var r=0;r<n.length;r++){var i=Wp(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function rg(t){Pu(t.g,function(e,n){this.g.hasOwnProperty(n)&&Lu(e)},t),t.g={}}qr.prototype.M=function(){qr.X.M.call(this),rg(this)};qr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ra(){this.g=!0}ra.prototype.Aa=function(){this.g=!1};function I0(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function b0(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Es(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+S0(t,n)+(s?" "+s:"")})}function T0(t,e){t.info(function(){return"TIMEOUT: "+e})}ra.prototype.info=function(){};function S0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Vu(n)}catch{return e}}var as={},qh=null;function ia(){return qh=qh||new xe}as.Pa="serverreachability";function ig(t){Ge.call(this,as.Pa,t)}Ue(ig,Ge);function Hr(t){const e=ia();Le(e,new ig(e))}as.STAT_EVENT="statevent";function og(t,e){Ge.call(this,as.STAT_EVENT,t),this.stat=e}Ue(og,Ge);function Ye(t){const e=ia();Le(e,new og(e,t))}as.Qa="timingevent";function ag(t,e){Ge.call(this,as.Qa,t),this.size=e}Ue(ag,Ge);function ai(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var oa={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},cg={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ju(){}ju.prototype.h=null;function Hh(t){return t.h||(t.h=t.i())}function ug(){}var ci={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function qu(){Ge.call(this,"d")}Ue(qu,Ge);function Hu(){Ge.call(this,"c")}Ue(Hu,Ge);var Uc;function aa(){}Ue(aa,ju);aa.prototype.g=function(){return new XMLHttpRequest};aa.prototype.i=function(){return{}};Uc=new aa;function ui(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new qr(this),this.O=A0,t=Oc?125:void 0,this.T=new sa(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new lg}function lg(){this.i=null,this.g="",this.h=!1}var A0=45e3,Fc={},mo={};L=ui.prototype;L.setTimeout=function(t){this.O=t};function Vc(t,e,n){t.K=1,t.v=ua(Zt(e)),t.s=n,t.P=!0,hg(t,null)}function hg(t,e){t.F=Date.now(),li(t),t.A=Zt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),wg(n.i,"t",s),t.C=0,n=t.l.H,t.h=new lg,t.g=$g(t.l,n?e:null,!t.s),0<t.N&&(t.L=new E0(Ke(t.La,t,t.g),t.N)),sg(t.S,t.g,"readystatechange",t.ib),e=t.H?Gp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Hr(),I0(t.j,t.u,t.A,t.m,t.U,t.s)}L.ib=function(t){t=t.target;const e=this.L;e&&Wt(t)==3?e.l():this.La(t)};L.La=function(t){try{if(t==this.g)e:{const l=Wt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Oc||this.g&&(this.h.h||this.g.fa()||Wh(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Hr(3):Hr(2)),ca(this);var n=this.g.aa();this.Y=n;t:if(fg(this)){var s=Wh(this.g);t="";var r=s.length,i=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bn(this),br(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,b0(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!po(a)){var u=a;break t}}u=null}if(n=u)Es(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,$c(this,n);else{this.i=!1,this.o=3,Ye(12),Bn(this),br(this);break e}}this.P?(dg(this,l,o),Oc&&this.i&&l==3&&(sg(this.S,this.T,"tick",this.hb),this.T.start())):(Es(this.j,this.m,o,null),$c(this,o)),l==4&&Bn(this),this.i&&!this.I&&(l==4?Lg(this.l,this):(this.i=!1,li(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ye(12)):(this.o=0,Ye(13)),Bn(this),br(this)}}}catch{}finally{}};function fg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function dg(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=C0(t,n),r==mo){e==4&&(t.o=4,Ye(14),s=!1),Es(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Fc){t.o=4,Ye(15),Es(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Es(t.j,t.m,r,null),$c(t,r);fg(t)&&r!=mo&&r!=Fc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ye(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ju(e),e.K=!0,Ye(11))):(Es(t.j,t.m,n,"[Invalid Chunked Response]"),Bn(t),br(t))}L.hb=function(){if(this.g){var t=Wt(this.g),e=this.g.fa();this.C<e.length&&(ca(this),dg(this,t,e),this.i&&t!=4&&li(this))}};function C0(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?mo:(n=Number(e.substring(n,s)),isNaN(n)?Fc:(s+=1,s+n>e.length?mo:(e=e.substr(s,n),t.C=s+n,e)))}L.cancel=function(){this.I=!0,Bn(this)};function li(t){t.V=Date.now()+t.O,pg(t,t.O)}function pg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ai(Ke(t.gb,t),e)}function ca(t){t.B&&(G.clearTimeout(t.B),t.B=null)}L.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(T0(this.j,this.A),this.K!=2&&(Hr(),Ye(17)),Bn(this),this.o=2,br(this)):pg(this,this.V-t)};function br(t){t.l.G==0||t.I||Lg(t.l,t)}function Bn(t){ca(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,$u(t.T),rg(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function $c(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Bc(n.h,t))){if(!t.J&&Bc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)wo(n),fa(n);else break e;Yu(n),Ye(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=ai(Ke(n.cb,n),6e3));if(1>=Ig(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else jn(n,11)}else if((t.J||n.g==t)&&wo(n),!po(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.h;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ku(i,i.h),i.h=null))}if(s.D){const I=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(s.za=I,ve(s.F,s.D,I))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Vg(s,s.H?s.ka:null,s.V),o.J){bg(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ca(a),li(a)),s.g=o}else Pg(s);0<n.i.length&&da(n)}else u[0]!="stop"&&u[0]!="close"||jn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?jn(n,7):Qu(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Hr(4)}catch{}}function R0(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Zo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function k0(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Zo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function gg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Zo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=k0(t),s=R0(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var mg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function D0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function zn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof zn){this.h=e!==void 0?e:t.h,yo(this,t.j),this.s=t.s,this.g=t.g,vo(this,t.m),this.l=t.l,e=t.i;var n=new Kr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Kh(this,n),this.o=t.o}else t&&(n=String(t).match(mg))?(this.h=!!e,yo(this,n[1]||"",!0),this.s=yr(n[2]||""),this.g=yr(n[3]||"",!0),vo(this,n[4]),this.l=yr(n[5]||"",!0),Kh(this,n[6]||"",!0),this.o=yr(n[7]||"")):(this.h=!!e,this.i=new Kr(null,this.h))}zn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(vr(e,Gh,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(vr(e,Gh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(vr(n,n.charAt(0)=="/"?x0:N0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",vr(n,M0)),t.join("")};function Zt(t){return new zn(t)}function yo(t,e,n){t.j=n?yr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function vo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Kh(t,e,n){e instanceof Kr?(t.i=e,L0(t.i,t.h)):(n||(e=vr(e,P0)),t.i=new Kr(e,t.h))}function ve(t,e,n){t.i.set(e,n)}function ua(t){return ve(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function yr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function vr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,O0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function O0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gh=/[#\/\?@]/g,N0=/[#\?:]/g,x0=/[#\?]/g,P0=/[#\?@]/g,M0=/#/g;function Kr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Rn(t){t.g||(t.g=new Map,t.h=0,t.i&&D0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=Kr.prototype;L.add=function(t,e){Rn(this),this.i=null,t=Zs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function yg(t,e){Rn(t),e=Zs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function vg(t,e){return Rn(t),e=Zs(t,e),t.g.has(e)}L.forEach=function(t,e){Rn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};L.oa=function(){Rn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};L.W=function(t){Rn(this);let e=[];if(typeof t=="string")vg(this,t)&&(e=e.concat(this.g.get(Zs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return Rn(this),this.i=null,t=Zs(this,t),vg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function wg(t,e,n){yg(t,e),0<n.length&&(t.i=null,t.g.set(Zs(t,e),Nu(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Zs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function L0(t,e){e&&!t.j&&(Rn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(yg(this,s),wg(this,r,n))},t)),t.j=e}var U0=class{constructor(e,n){this.h=e,this.g=n}};function _g(t){this.l=t||F0,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ga&&G.g.Ga()&&G.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var F0=10;function Eg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ig(t){return t.h?1:t.g?t.g.size:0}function Bc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ku(t,e){t.g?t.g.add(e):t.h=e}function bg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}_g.prototype.cancel=function(){if(this.i=Tg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Tg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Nu(t.i)}function Gu(){}Gu.prototype.stringify=function(t){return G.JSON.stringify(t,void 0)};Gu.prototype.parse=function(t){return G.JSON.parse(t,void 0)};function V0(){this.g=new Gu}function $0(t,e,n){const s=n||"";try{gg(t,function(r,i){let o=r;ii(r)&&(o=Vu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function B0(t,e){const n=new ra;if(G.Image){const s=new Image;s.onload=Mi(Ui,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Mi(Ui,n,s,"TestLoadImage: error",!1,e),s.onabort=Mi(Ui,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Mi(Ui,n,s,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ui(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function hi(t){this.l=t.ac||null,this.j=t.jb||!1}Ue(hi,ju);hi.prototype.g=function(){return new la(this.l,this.j)};hi.prototype.i=function(t){return function(){return t}}({});function la(t,e){xe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=zu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ue(la,xe);var zu=0;L=la.prototype;L.open=function(t,e){if(this.readyState!=zu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Gr(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||G).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fi(this)),this.readyState=zu};L.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Gr(this)),this.g&&(this.readyState=3,Gr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sg(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Sg(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}L.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?fi(this):Gr(this),this.readyState==3&&Sg(this)}};L.Va=function(t){this.g&&(this.response=this.responseText=t,fi(this))};L.Ua=function(t){this.g&&(this.response=t,fi(this))};L.ga=function(){this.g&&fi(this)};function fi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Gr(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Gr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(la.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var j0=G.JSON.parse;function _e(t){xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ag,this.K=this.L=!1}Ue(_e,xe);var Ag="",q0=/^https?$/i,H0=["POST","PUT"];L=_e.prototype;L.Ka=function(t){this.L=t};L.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Uc.g(),this.C=this.u?Hh(this.u):Hh(Uc),this.g.onreadystatechange=Ke(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){zh(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=G.FormData&&t instanceof G.FormData,!(0<=jp(H0,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{kg(this),0<this.B&&((this.K=K0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ke(this.qa,this)):this.A=Bu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){zh(this,i)}};function K0(t){return Us&&c0()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.qa=function(){typeof Ou<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Le(this,"timeout"),this.abort(8))};function zh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Cg(t),ha(t)}function Cg(t){t.D||(t.D=!0,Le(t,"complete"),Le(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Le(this,"complete"),Le(this,"abort"),ha(this))};L.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ha(this,!0)),_e.X.M.call(this)};L.Ha=function(){this.s||(this.F||this.v||this.l?Rg(this):this.fb())};L.fb=function(){Rg(this)};function Rg(t){if(t.h&&typeof Ou<"u"&&(!t.C[1]||Wt(t)!=4||t.aa()!=2)){if(t.v&&Wt(t)==4)Bu(t.Ha,0,t);else if(Le(t,"readystatechange"),Wt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(mg)[1]||null;if(!r&&G.self&&G.self.location){var i=G.self.location.protocol;r=i.substr(0,i.length-1)}s=!q0.test(r?r.toLowerCase():"")}n=s}if(n)Le(t,"complete"),Le(t,"success");else{t.m=6;try{var o=2<Wt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Cg(t)}}finally{ha(t)}}}}function ha(t,e){if(t.g){kg(t);const n=t.g,s=t.C[0]?fo:null;t.g=null,t.C=null,e||Le(t,"ready");try{n.onreadystatechange=s}catch{}}}function kg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}function Wt(t){return t.g?t.g.readyState:0}L.aa=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}};L.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),j0(e)}};function Wh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ag:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}L.Ea=function(){return this.m};L.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Dg(t){let e="";return Pu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Wu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Dg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ve(t,e,n))}function fr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Og(t){this.Ca=0,this.i=[],this.j=new ra,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=fr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=fr("baseRetryDelayMs",5e3,t),this.bb=fr("retryDelaySeedMs",1e4,t),this.$a=fr("forwardChannelMaxRetries",2,t),this.ta=fr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new _g(t&&t.concurrentRequestLimit),this.Fa=new V0,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}L=Og.prototype;L.ma=8;L.G=1;function Qu(t){if(Ng(t),t.G==3){var e=t.U++,n=Zt(t.F);ve(n,"SID",t.I),ve(n,"RID",e),ve(n,"TYPE","terminate"),di(t,n),e=new ui(t,t.j,e,void 0),e.K=2,e.v=ua(Zt(n)),n=!1,G.navigator&&G.navigator.sendBeacon&&(n=G.navigator.sendBeacon(e.v.toString(),"")),!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=$g(e.l,null),e.g.da(e.v)),e.F=Date.now(),li(e)}Fg(t)}function fa(t){t.g&&(Ju(t),t.g.cancel(),t.g=null)}function Ng(t){fa(t),t.u&&(G.clearTimeout(t.u),t.u=null),wo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function da(t){Eg(t.h)||t.m||(t.m=!0,eg(t.Ja,t),t.C=0)}function G0(t,e){return Ig(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ai(Ke(t.Ja,t,e),Ug(t,t.C)),t.C++,!0)}L.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new ui(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Gp(i),zp(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=xg(this,r,e),n=Zt(this.F),ve(n,"RID",t),ve(n,"CVER",22),this.D&&ve(n,"X-HTTP-Session-Id",this.D),di(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Dg(i)))+"&"+e:this.o&&Wu(n,this.o,i)),Ku(this.h,r),this.Ya&&ve(n,"TYPE","init"),this.O?(ve(n,"$req",e),ve(n,"SID","null"),r.Z=!0,Vc(r,n,null)):Vc(r,n,e),this.G=2}}else this.G==3&&(t?Qh(this,t):this.i.length==0||Eg(this.h)||Qh(this))};function Qh(t,e){var n;e?n=e.m:n=t.U++;const s=Zt(t.F);ve(s,"SID",t.I),ve(s,"RID",n),ve(s,"AID",t.T),di(t,s),t.o&&t.s&&Wu(s,t.o,t.s),n=new ui(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=xg(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ku(t.h,n),Vc(n,s,e)}function di(t,e){t.ia&&Pu(t.ia,function(n,s){ve(e,s,n)}),t.l&&gg({},function(n,s){ve(e,s,n)})}function xg(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Ke(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{$0(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Pg(t){t.g||t.u||(t.Z=1,eg(t.Ia,t),t.A=0)}function Yu(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ai(Ke(t.Ia,t),Ug(t,t.A)),t.A++,!0)}L.Ia=function(){if(this.u=null,Mg(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ai(Ke(this.eb,this),t)}};L.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ye(10),fa(this),Mg(this))};function Ju(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function Mg(t){t.g=new ui(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Zt(t.sa);ve(e,"RID","rpc"),ve(e,"SID",t.I),ve(e,"CI",t.L?"0":"1"),ve(e,"AID",t.T),ve(e,"TYPE","xmlhttp"),di(t,e),t.o&&t.s&&Wu(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ua(Zt(e)),n.s=null,n.P=!0,hg(n,t)}L.cb=function(){this.v!=null&&(this.v=null,fa(this),Yu(this),Ye(19))};function wo(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function Lg(t,e){var n=null;if(t.g==e){wo(t),Ju(t),t.g=null;var s=2}else if(Bc(t.h,e))n=e.D,bg(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=ia(),Le(s,new ag(s,n)),da(t)}else Pg(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&G0(t,e)||s==2&&Yu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:jn(t,5);break;case 4:jn(t,10);break;case 3:jn(t,6);break;default:jn(t,2)}}}function Ug(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function jn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Ke(t.kb,t);n||(n=new zn("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||yo(n,"https"),ua(n)),B0(n.toString(),s)}else Ye(2);t.G=0,t.l&&t.l.va(e),Fg(t),Ng(t)}L.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ye(2)):(this.j.info("Failed to ping google.com"),Ye(1))};function Fg(t){if(t.G=0,t.la=[],t.l){const e=Tg(t.h);(e.length!=0||t.i.length!=0)&&(Fh(t.la,e),Fh(t.la,t.i),t.h.i.length=0,Nu(t.i),t.i.length=0),t.l.ua()}}function Vg(t,e,n){var s=n instanceof zn?Zt(n):new zn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),vo(s,s.m);else{var r=G.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new zn(null,void 0);s&&yo(i,s),e&&(i.g=e),r&&vo(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&ve(s,n,e),ve(s,"VER",t.ma),di(t,s),s}function $g(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new _e(new hi({jb:!0})):new _e(t.ra),e.Ka(t.H),e}function Bg(){}L=Bg.prototype;L.xa=function(){};L.wa=function(){};L.va=function(){};L.ua=function(){};L.Ra=function(){};function _o(){if(Us&&!(10<=Number(u0)))throw Error("Environmental error: no available transport.")}_o.prototype.g=function(t,e){return new at(t,e)};function at(t,e){xe.call(this),this.g=new Og(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!po(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!po(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new er(this)}Ue(at,xe);at.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ye(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Vg(t,null,t.V),da(t)};at.prototype.close=function(){Qu(this.g)};at.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Vu(t),t=n);e.i.push(new U0(e.ab++,t)),e.G==3&&da(e)};at.prototype.M=function(){this.g.l=null,delete this.j,Qu(this.g),delete this.g,at.X.M.call(this)};function jg(t){qu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ue(jg,qu);function qg(){Hu.call(this),this.status=1}Ue(qg,Hu);function er(t){this.g=t}Ue(er,Bg);er.prototype.xa=function(){Le(this.g,"a")};er.prototype.wa=function(t){Le(this.g,new jg(t))};er.prototype.va=function(t){Le(this.g,new qg)};er.prototype.ua=function(){Le(this.g,"b")};_o.prototype.createWebChannel=_o.prototype.g;at.prototype.send=at.prototype.u;at.prototype.open=at.prototype.m;at.prototype.close=at.prototype.close;oa.NO_ERROR=0;oa.TIMEOUT=8;oa.HTTP_ERROR=6;cg.COMPLETE="complete";ug.EventType=ci;ci.OPEN="a";ci.CLOSE="b";ci.ERROR="c";ci.MESSAGE="d";xe.prototype.listen=xe.prototype.N;_e.prototype.listenOnce=_e.prototype.O;_e.prototype.getLastError=_e.prototype.Oa;_e.prototype.getLastErrorCode=_e.prototype.Ea;_e.prototype.getStatus=_e.prototype.aa;_e.prototype.getResponseJson=_e.prototype.Sa;_e.prototype.getResponseText=_e.prototype.fa;_e.prototype.send=_e.prototype.da;_e.prototype.setWithCredentials=_e.prototype.Ka;var z0=function(){return new _o},W0=function(){return ia()},tc=oa,Q0=cg,Y0=as,Yh={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},J0=hi,Fi=ug,X0=_e;const Jh="@firebase/firestore";/**
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
 */class Ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ve.UNAUTHENTICATED=new Ve(null),Ve.GOOGLE_CREDENTIALS=new Ve("google-credentials-uid"),Ve.FIRST_PARTY=new Ve("first-party-uid"),Ve.MOCK_USER=new Ve("mock-user");/**
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
 */let tr="9.16.0";/**
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
 */const Xn=new Xo("@firebase/firestore");function Xh(){return Xn.logLevel}function F(t,...e){if(Xn.logLevel<=ie.DEBUG){const n=e.map(Xu);Xn.debug(`Firestore (${tr}): ${t}`,...n)}}function en(t,...e){if(Xn.logLevel<=ie.ERROR){const n=e.map(Xu);Xn.error(`Firestore (${tr}): ${t}`,...n)}}function jc(t,...e){if(Xn.logLevel<=ie.WARN){const n=e.map(Xu);Xn.warn(`Firestore (${tr}): ${t}`,...n)}}function Xu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${tr}) INTERNAL ASSERTION FAILED: `+t;throw en(e),new Error(e)}function de(t,e){t||K()}function Y(t,e){return t}/**
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
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends kt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Jt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Hg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Z0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ve.UNAUTHENTICATED))}shutdown(){}}class eb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class tb{constructor(e){this.t=e,this.currentUser=Ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Jt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Jt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Jt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(de(typeof s.accessToken=="string"),new Hg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string"),new Ve(e)}}class nb{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Ve.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(de(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class sb{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new nb(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ib{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string"),this.A=n.token,new rb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function ob(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Kg{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=ob(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function oe(t,e){return t<e?-1:t>e?1:0}function Fs(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Re{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Re(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new Re(0,0))}static max(){return new W(new Re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class zr{constructor(e,n,s){n===void 0?n=0:n>e.length&&K(),s===void 0?s=e.length-n:s>e.length-n&&K(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return zr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends zr{construct(e,n,s){return new me(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new x(w.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new me(n)}static emptyPath(){return new me([])}}const ab=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends zr{construct(e,n,s){return new je(e,n,s)}static isValidIdentifier(e){return ab.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new je(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new x(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new x(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new x(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new x(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new je(n)}static emptyPath(){return new je([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(me.fromString(e))}static fromName(e){return new $(me.fromString(e).popFirst(5))}static empty(){return new $(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new me(e.slice()))}}function cb(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=W.fromTimestamp(s===1e9?new Re(n+1,0):new Re(n,s));return new Tn(r,$.empty(),e)}function ub(t){return new Tn(t.readTime,t.key,-1)}class Tn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Tn(W.min(),$.empty(),-1)}static max(){return new Tn(W.max(),$.empty(),-1)}}function lb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
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
 */const hb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function pi(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==hb)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,s)=>{n(e)})}static reject(e){return new T((n,s)=>{s(e)})}static waitFor(e){return new T((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=T.resolve(!1);for(const s of e)n=n.next(r=>r?T.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new T((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new T((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function gi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Zu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Zu.at=-1;/**
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
 */class db{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Wr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Wr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Zh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Gg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function pa(t){return t==null}function Eo(t){return t===0&&1/t==-1/0}function pb(t){return typeof t=="number"&&Number.isInteger(t)&&!Eo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new We(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const gb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sn(t){if(de(!!t),typeof t=="string"){let e=0;const n=gb.exec(t);if(de(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vs(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
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
 */function zg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Wg(t){const e=t.mapValue.fields.__previous_value__;return zg(e)?Wg(e):e}function Qr(t){const e=Sn(t.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
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
 */const Vi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zg(t)?4:mb(t)?9007199254740991:10:K()}function qt(t,e){if(t===e)return!0;const n=Zn(t);if(n!==Zn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qr(t).isEqual(Qr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Sn(s.timestampValue),o=Sn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Vs(s.bytesValue).isEqual(Vs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Se(s.geoPointValue.latitude)===Se(r.geoPointValue.latitude)&&Se(s.geoPointValue.longitude)===Se(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Se(s.integerValue)===Se(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Se(s.doubleValue),o=Se(r.doubleValue);return i===o?Eo(i)===Eo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Fs(t.arrayValue.values||[],e.arrayValue.values||[],qt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Zh(i)!==Zh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!qt(i[a],o[a])))return!1;return!0}(t,e);default:return K()}}function Yr(t,e){return(t.values||[]).find(n=>qt(n,e))!==void 0}function $s(t,e){if(t===e)return 0;const n=Zn(t),s=Zn(e);if(n!==s)return oe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Se(r.integerValue||r.doubleValue),a=Se(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ef(t.timestampValue,e.timestampValue);case 4:return ef(Qr(t),Qr(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Vs(r),a=Vs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=oe(o[c],a[c]);if(u!==0)return u}return oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=oe(Se(r.latitude),Se(i.latitude));return o!==0?o:oe(Se(r.longitude),Se(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=$s(o[c],a[c]);if(u)return u}return oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Vi.mapValue&&i===Vi.mapValue)return 0;if(r===Vi.mapValue)return 1;if(i===Vi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=oe(a[l],u[l]);if(h!==0)return h;const f=$s(o[a[l]],c[u[l]]);if(f!==0)return f}return oe(a.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function ef(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Sn(t),s=Sn(e),r=oe(n.seconds,s.seconds);return r!==0?r:oe(n.nanos,s.nanos)}function Bs(t){return qc(t)}function qc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Sn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Vs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=qc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${qc(s.fields[a])}`;return i+"}"}(t.mapValue):K();var e,n}function tf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Hc(t){return!!t&&"integerValue"in t}function el(t){return!!t&&"arrayValue"in t}function nf(t){return!!t&&"nullValue"in t}function sf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wi(t){return!!t&&"mapValue"in t}function Tr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return cs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Tr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Tr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function mb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Io{constructor(e,n){this.position=e,this.inclusive=n}}function rf(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=$.comparator($.fromName(o.referenceValue),n.key):s=$s(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function of(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Qg{}class Ae extends Qg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new vb(e,n,s):n==="array-contains"?new Eb(e,s):n==="in"?new Ib(e,s):n==="not-in"?new bb(e,s):n==="array-contains-any"?new Tb(e,s):new Ae(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new wb(e,s):new _b(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($s(n,this.value)):n!==null&&Zn(this.value)===Zn(n)&&this.matchesComparison($s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class St extends Qg{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new St(e,n)}matches(e){return Yg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Yg(t){return t.op==="and"}function Jg(t){return yb(t)&&Yg(t)}function yb(t){for(const e of t.filters)if(e instanceof St)return!1;return!0}function Kc(t){if(t instanceof Ae)return t.field.canonicalString()+t.op.toString()+Bs(t.value);if(Jg(t))return t.filters.map(e=>Kc(e)).join(",");{const e=t.filters.map(n=>Kc(n)).join(",");return`${t.op}(${e})`}}function Xg(t,e){return t instanceof Ae?function(n,s){return s instanceof Ae&&n.op===s.op&&n.field.isEqual(s.field)&&qt(n.value,s.value)}(t,e):t instanceof St?function(n,s){return s instanceof St&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Xg(i,s.filters[o]),!0):!1}(t,e):void K()}function Zg(t){return t instanceof Ae?function(e){return`${e.field.canonicalString()} ${e.op} ${Bs(e.value)}`}(t):t instanceof St?function(e){return e.op.toString()+" {"+e.getFilters().map(Zg).join(" ,")+"}"}(t):"Filter"}class vb extends Ae{constructor(e,n,s){super(e,n,s),this.key=$.fromName(s.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class wb extends Ae{constructor(e,n){super(e,"in",n),this.keys=em("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class _b extends Ae{constructor(e,n){super(e,"not-in",n),this.keys=em("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function em(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>$.fromName(s.referenceValue))}class Eb extends Ae{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return el(n)&&Yr(n.arrayValue,this.value)}}class Ib extends Ae{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Yr(this.value.arrayValue,n)}}class bb extends Ae{constructor(e,n){super(e,"not-in",n)}matches(e){if(Yr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Yr(this.value.arrayValue,n)}}class Tb extends Ae{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!el(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Yr(this.value.arrayValue,s))}}/**
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
 */class ks{constructor(e,n="asc"){this.field=e,this.dir=n}}function Sb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Oe{constructor(e,n){this.comparator=e,this.root=n||Pe.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Pe.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $i(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $i(this.root,e,this.comparator,!1)}getReverseIterator(){return new $i(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $i(this.root,e,this.comparator,!0)}}class $i{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Pe.RED,this.left=r??Pe.EMPTY,this.right=i??Pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Pe(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Pe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Pe.EMPTY=null,Pe.RED=!0,Pe.BLACK=!1;Pe.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Pe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ke{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new af(this.data.getIterator())}getIteratorFrom(e){return new af(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ke(this.comparator);return n.data=e,n}}class af{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class rt{constructor(e){this.fields=e,e.sort(je.comparator)}static empty(){return new rt([])}unionWith(e){let n=new ke(je.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new rt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class et{constructor(e){this.value=e}static empty(){return new et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Wi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Tr(n)}setAll(e){let n=je.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Tr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Wi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Wi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){cs(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new et(Tr(this.value))}}function tm(t){const e=[];return cs(t.fields,(n,s)=>{const r=new je([n]);if(Wi(s)){const i=tm(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new rt(e)}/**
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
 */class $e{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new $e(e,0,W.min(),W.min(),W.min(),et.empty(),0)}static newFoundDocument(e,n,s,r){return new $e(e,1,n,W.min(),s,r,0)}static newNoDocument(e,n){return new $e(e,2,n,W.min(),W.min(),et.empty(),0)}static newUnknownDocument(e,n){return new $e(e,3,n,W.min(),W.min(),et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ab{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function cf(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Ab(t,e,n,s,r,i,o)}function tl(t){const e=Y(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Kc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),pa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Bs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Bs(s)).join(",")),e.ft=n}return e.ft}function nl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Sb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Xg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!of(t.startAt,e.startAt)&&of(t.endAt,e.endAt)}function Gc(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class nr{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function Cb(t,e,n,s,r,i,o,a){return new nr(t,e,n,s,r,i,o,a)}function sl(t){return new nr(t)}function uf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rl(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ga(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function nm(t){return t.collectionGroup!==null}function Ds(t){const e=Y(t);if(e.dt===null){e.dt=[];const n=ga(e),s=rl(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new ks(n)),e.dt.push(new ks(je.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new ks(je.keyField(),i))}}}return e.dt}function tn(t){const e=Y(t);if(!e._t)if(e.limitType==="F")e._t=cf(e.path,e.collectionGroup,Ds(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ds(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new ks(i.field,o))}const s=e.endAt?new Io(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Io(e.startAt.position,e.startAt.inclusive):null;e._t=cf(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function zc(t,e){e.getFirstInequalityField(),ga(t);const n=t.filters.concat([e]);return new nr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Wc(t,e,n){return new nr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ma(t,e){return nl(tn(t),tn(e))&&t.limitType===e.limitType}function sm(t){return`${tl(tn(t))}|lt:${t.limitType}`}function Qc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Zg(s)).join(", ")}]`),pa(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Bs(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Bs(s)).join(",")),`Target(${n})`}(tn(t))}; limitType=${t.limitType})`}function il(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):$.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Ds(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=rf(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Ds(n),s)||n.endAt&&!function(r,i,o){const a=rf(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Ds(n),s))}(t,e)}function Rb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function rm(t){return(e,n)=>{let s=!1;for(const r of Ds(t)){const i=kb(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function kb(t,e,n){const s=t.field.isKeyField()?$.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?$s(a,c):K()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return K()}}/**
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
 */function im(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Eo(e)?"-0":e}}function om(t){return{integerValue:""+t}}function Db(t,e){return pb(e)?om(e):im(t,e)}/**
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
 */class ya{constructor(){this._=void 0}}function Ob(t,e,n){return t instanceof bo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Jr?cm(t,e):t instanceof Xr?um(t,e):function(s,r){const i=am(s,r),o=lf(i)+lf(s.gt);return Hc(i)&&Hc(s.gt)?om(o):im(s.yt,o)}(t,e)}function Nb(t,e,n){return t instanceof Jr?cm(t,e):t instanceof Xr?um(t,e):n}function am(t,e){return t instanceof To?Hc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class bo extends ya{}class Jr extends ya{constructor(e){super(),this.elements=e}}function cm(t,e){const n=lm(e);for(const s of t.elements)n.some(r=>qt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Xr extends ya{constructor(e){super(),this.elements=e}}function um(t,e){let n=lm(e);for(const s of t.elements)n=n.filter(r=>!qt(r,s));return{arrayValue:{values:n}}}class To extends ya{constructor(e,n){super(),this.yt=e,this.gt=n}}function lf(t){return Se(t.integerValue||t.doubleValue)}function lm(t){return el(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function xb(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Jr&&s instanceof Jr||n instanceof Xr&&s instanceof Xr?Fs(n.elements,s.elements,qt):n instanceof To&&s instanceof To?qt(n.gt,s.gt):n instanceof bo&&s instanceof bo}(t.transform,e.transform)}class Pb{constructor(e,n){this.version=e,this.transformResults=n}}class bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new bt}static exists(e){return new bt(void 0,e)}static updateTime(e){return new bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class va{}function hm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ol(t.key,bt.none()):new mi(t.key,t.data,bt.none());{const n=t.data,s=et.empty();let r=new ke(je.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new kn(t.key,s,new rt(r.toArray()),bt.none())}}function Mb(t,e,n){t instanceof mi?function(s,r,i){const o=s.value.clone(),a=ff(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof kn?function(s,r,i){if(!Qi(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=ff(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(fm(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Sr(t,e,n,s){return t instanceof mi?function(r,i,o,a){if(!Qi(r.precondition,i))return o;const c=r.value.clone(),u=df(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof kn?function(r,i,o,a){if(!Qi(r.precondition,i))return o;const c=df(r.fieldTransforms,a,i),u=i.data;return u.setAll(fm(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return Qi(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Lb(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=am(s.transform,r||null);i!=null&&(n===null&&(n=et.empty()),n.set(s.field,i))}return n||null}function hf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Fs(n,s,(r,i)=>xb(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class mi extends va{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class kn extends va{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function fm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function ff(t,e,n){const s=new Map;de(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Nb(o,a,n[r]))}return s}function df(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Ob(i,o,e))}return s}class ol extends va{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ub extends va{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Fb{constructor(e){this.count=e}}/**
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
 */var Te,ne;function Vb(t){switch(t){default:return K();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function dm(t){if(t===void 0)return en("GRPC error has no .code"),w.UNKNOWN;switch(t){case Te.OK:return w.OK;case Te.CANCELLED:return w.CANCELLED;case Te.UNKNOWN:return w.UNKNOWN;case Te.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Te.INTERNAL:return w.INTERNAL;case Te.UNAVAILABLE:return w.UNAVAILABLE;case Te.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Te.NOT_FOUND:return w.NOT_FOUND;case Te.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Te.ABORTED:return w.ABORTED;case Te.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Te.DATA_LOSS:return w.DATA_LOSS;default:return K()}}(ne=Te||(Te={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class sr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){cs(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Gg(this.inner)}size(){return this.innerSize}}/**
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
 */const $b=new Oe($.comparator);function nn(){return $b}const pm=new Oe($.comparator);function wr(...t){let e=pm;for(const n of t)e=e.insert(n.key,n);return e}function gm(t){let e=pm;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function qn(){return Ar()}function mm(){return Ar()}function Ar(){return new sr(t=>t.toString(),(t,e)=>t.isEqual(e))}const Bb=new Oe($.comparator),jb=new ke($.comparator);function te(...t){let e=jb;for(const n of t)e=e.add(n);return e}const qb=new ke(oe);function ym(){return qb}/**
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
 */class wa{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,yi.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new wa(W.min(),r,ym(),nn(),te())}}class yi{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new yi(s,n,te(),te(),te())}}/**
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
 */class Yi{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class vm{constructor(e,n){this.targetId=e,this.Et=n}}class wm{constructor(e,n,s=We.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class pf{constructor(){this.At=0,this.Rt=mf(),this.bt=We.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=te(),n=te(),s=te();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:K()}}),new yi(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=mf()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Hb{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=nn(),this.qt=gf(),this.Ut=new ke(oe)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(Gc(i))if(s===0){const o=new $(i.path);this.Qt(n,o,$e.newNoDocument(o,W.min()))}else de(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Gc(a.target)){const c=new $(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,$e.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=te();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new wa(e,n,this.Ut,this.Lt,s);return this.Lt=nn(),this.qt=gf(),this.Ut=new ke(oe),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new pf,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new ke(oe),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new pf),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function gf(){return new Oe($.comparator)}function mf(){return new Oe($.comparator)}/**
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
 */const Kb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Gb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),zb=(()=>({and:"AND",or:"OR"}))();class Wb{constructor(e,n){this.databaseId=e,this.wt=n}}function So(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _m(t,e){return t.wt?e.toBase64():e.toUint8Array()}function Qb(t,e){return So(t,e.toTimestamp())}function Ft(t){return de(!!t),W.fromTimestamp(function(e){const n=Sn(e);return new Re(n.seconds,n.nanos)}(t))}function al(t,e){return function(n){return new me(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Em(t){const e=me.fromString(t);return de(Sm(e)),e}function Yc(t,e){return al(t.databaseId,e.path)}function nc(t,e){const n=Em(e);if(n.get(1)!==t.databaseId.projectId)throw new x(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(Im(n))}function Jc(t,e){return al(t.databaseId,e)}function Yb(t){const e=Em(t);return e.length===4?me.emptyPath():Im(e)}function Xc(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Im(t){return de(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yf(t,e,n){return{name:Yc(t,e),fields:n.value.mapValue.fields}}function Jb(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.wt?(de(u===void 0||typeof u=="string"),We.fromBase64String(u||"")):(de(u===void 0||u instanceof Uint8Array),We.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?w.UNKNOWN:dm(c.code);return new x(u,c.message||"")}(o);n=new wm(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=nc(t,s.document.name),i=Ft(s.document.updateTime),o=s.document.createTime?Ft(s.document.createTime):W.min(),a=new et({mapValue:{fields:s.document.fields}}),c=$e.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new Yi(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=nc(t,s.document),i=s.readTime?Ft(s.readTime):W.min(),o=$e.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Yi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=nc(t,s.document),i=s.removedTargetIds||[];n=new Yi([],i,r,null)}else{if(!("filter"in e))return K();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Fb(r),o=s.targetId;n=new vm(o,i)}}return n}function Xb(t,e){let n;if(e instanceof mi)n={update:yf(t,e.key,e.value)};else if(e instanceof ol)n={delete:Yc(t,e.key)};else if(e instanceof kn)n={update:yf(t,e.key,e.data),updateMask:aT(e.fieldMask)};else{if(!(e instanceof Ub))return K();n={verify:Yc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof bo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Jr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Xr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof To)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw K()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Qb(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:K()}(t,e.precondition)),n}function Zb(t,e){return t&&t.length>0?(de(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Ft(s.updateTime):Ft(r);return i.isEqual(W.min())&&(i=Ft(r)),new Pb(i,s.transformResults||[])}(n,e))):[]}function eT(t,e){return{documents:[Jc(t,e.path)]}}function tT(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Jc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Jc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Tm(St.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:vs(l.field),direction:rT(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.wt||pa(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function nT(t){let e=Yb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){de(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=bm(l);return h instanceof St&&Jg(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new ks(ws(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,pa(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new Io(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new Io(f,h)}(n.endAt)),Cb(e,r,o,i,a,"F",c,u)}function sT(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return K()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function bm(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ws(e.unaryFilter.field);return Ae.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ws(e.unaryFilter.field);return Ae.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ws(e.unaryFilter.field);return Ae.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ws(e.unaryFilter.field);return Ae.create(i,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(e){return Ae.create(ws(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return St.create(e.compositeFilter.filters.map(n=>bm(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return K()}}(e.compositeFilter.op))}(t):K()}function rT(t){return Kb[t]}function iT(t){return Gb[t]}function oT(t){return zb[t]}function vs(t){return{fieldPath:t.canonicalString()}}function ws(t){return je.fromServerFormat(t.fieldPath)}function Tm(t){return t instanceof Ae?function(e){if(e.op==="=="){if(sf(e.value))return{unaryFilter:{field:vs(e.field),op:"IS_NAN"}};if(nf(e.value))return{unaryFilter:{field:vs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(sf(e.value))return{unaryFilter:{field:vs(e.field),op:"IS_NOT_NAN"}};if(nf(e.value))return{unaryFilter:{field:vs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vs(e.field),op:iT(e.op),value:e.value}}}(t):t instanceof St?function(e){const n=e.getFilters().map(s=>Tm(s));return n.length===1?n[0]:{compositeFilter:{op:oT(e.op),filters:n}}}(t):K()}function aT(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Sm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class cT{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Mb(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Sr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Sr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=mm();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=hm(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(W.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Fs(this.mutations,e.mutations,(n,s)=>hf(n,s))&&Fs(this.baseMutations,e.baseMutations,(n,s)=>hf(n,s))}}class cl{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){de(e.mutations.length===s.length);let r=Bb;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new cl(e,n,s,r)}}/**
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
 */class uT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Wn{constructor(e,n,s,r,i=W.min(),o=W.min(),a=We.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class lT{constructor(e){this.ie=e}}function hT(t){const e=nT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Wc(e,e.limit,"L"):e}/**
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
 */class fT{constructor(){this.Je=new dT}addToCollectionParentIndex(e,n){return this.Je.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(Tn.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(Tn.min())}updateCollectionGroup(e,n,s){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class dT{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ke(me.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ke(me.comparator)).toArray()}}/**
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
 */class js{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new js(0)}static vn(){return new js(-1)}}/**
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
 */class pT{constructor(){this.changes=new sr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$e.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?T.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class gT{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class mT{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Sr(s.mutation,r,rt.empty(),Re.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,te()).next(()=>s))}getLocalViewOfDocuments(e,n,s=te()){const r=qn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=wr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=qn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,te()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=nn();const o=Ar(),a=Ar();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof kn)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Sr(l.mutation,u,l.mutation.getFieldMask(),Re.now())):o.set(u.key,rt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new gT(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Ar();let r=new Oe((o,a)=>o-a),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||rt.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||te()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=mm();l.forEach(f=>{if(!i.has(f)){const g=hm(n.get(f),s.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return T.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return $.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):T.resolve(qn());let a=-1,c=i;return o.next(u=>T.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?T.resolve():this.remoteDocumentCache.getEntry(e,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,te())).next(l=>({batchId:a,changes:gm(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(s=>{let r=wr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=wr();return this.indexManager.getCollectionParents(e,r).next(o=>T.forEach(o,a=>{const c=function(u,l){return new nr(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,$e.newInvalidDocument(u)))});let o=wr();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Sr(u.mutation,c,rt.empty(),Re.now()),il(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class yT{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return T.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Ft(s.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:hT(s.bundledQuery),readTime:Ft(s.readTime)}}(n)),T.resolve()}}/**
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
 */class vT{constructor(){this.overlays=new Oe($.comparator),this.es=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const s=qn();return T.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),T.resolve()}getOverlaysForCollection(e,n,s){const r=qn(),i=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return T.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Oe((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=qn(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=qn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return T.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new uT(n,s));let i=this.es.get(n);i===void 0&&(i=te(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
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
 */class ul{constructor(){this.ns=new ke(Ne.ss),this.rs=new ke(Ne.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Ne(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Ne(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new $(new me([])),s=new Ne(n,e),r=new Ne(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new $(new me([])),s=new Ne(n,e),r=new Ne(n,e+1);let i=te();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ne(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ne{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return $.comparator(e.key,n.key)||oe(e._s,n._s)}static os(e,n){return oe(e._s,n._s)||$.comparator(e.key,n.key)}}/**
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
 */class wT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ke(Ne.ss)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new cT(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Ne(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ne(n,0),r=new Ne(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ke(oe);return n.forEach(r=>{const i=new Ne(r,0),o=new Ne(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),T.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;$.isDocumentKey(i)||(i=i.child(""));const o=new Ne(new $(i),0);let a=new ke(oe);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),T.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){de(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return T.forEach(n.mutations,r=>{const i=new Ne(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Ne(n,0),r=this.gs.firstAfterOrEqual(s);return T.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class _T{constructor(e){this.Es=e,this.docs=new Oe($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return T.resolve(s?s.document.mutableCopy():$e.newInvalidDocument(n))}getEntries(e,n){let s=nn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():$e.newInvalidDocument(r))}),T.resolve(s)}getAllFromCollection(e,n,s){let r=nn();const i=new $(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||lb(ub(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return T.resolve(r)}getAllFromCollectionGroup(e,n,s,r){K()}As(e,n){return T.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new ET(this)}getSize(e){return T.resolve(this.size)}}class ET extends pT{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),T.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class IT{constructor(e){this.persistence=e,this.Rs=new sr(n=>tl(n),nl),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ul,this.targetCount=0,this.vs=js.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),T.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new js(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.Dn(n),T.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),T.waitFor(i).next(()=>r)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return T.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),T.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),T.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return T.resolve(s)}containsKey(e,n){return T.resolve(this.Ps.containsKey(n))}}/**
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
 */class bT{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Zu(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new IT(this),this.indexManager=new fT,this.remoteDocumentCache=function(s){return new _T(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new lT(n),this.Ns=new yT(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new vT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new wT(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){F("MemoryPersistence","Starting transaction:",e);const r=new TT(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return T.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class TT extends fb{constructor(e){super(),this.currentSequenceNumber=e}}class ll{constructor(e){this.persistence=e,this.Fs=new ul,this.$s=null}static Bs(e){return new ll(e)}get Ls(){if(this.$s)return this.$s;throw K()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),T.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),T.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Ls,s=>{const r=$.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,W.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return T.or([()=>T.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class hl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=te(),r=te();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new hl(e,n.fromCache,s,r)}}/**
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
 */class ST{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(uf(n))return T.resolve(null);let s=tn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Wc(n,null,"F"),s=tn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=te(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,Wc(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,s,r){return uf(n)||r.isEqual(W.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(Xh()<=ie.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Qc(n)),this.Bi(e,o,n,cb(r,-1)))})}Fi(e,n){let s=new ke(rm(e));return n.forEach((r,i)=>{il(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return Xh()<=ie.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Qc(n)),this.Ni.getDocumentsMatchingQuery(e,n,Tn.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class AT{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new Oe(oe),this.Ui=new sr(i=>tl(i),nl),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mT(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function CT(t,e,n,s){return new AT(t,e,n,s)}async function Am(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=te();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function RT(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=T.resolve();return h.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(y=>{const I=c.docVersions.get(g);de(I!==null),y.version.compareTo(I)<0&&(l.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=te();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Cm(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function kT(t,e){const n=Y(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((l,h)=>{const f=r.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(We.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(h,g),function(y,I,k){return y.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(f,g,l)&&a.push(n.Cs.updateTargetData(i,g))});let c=nn(),u=te();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(DT(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(W.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.qi=r,i))}function DT(t,e,n){let s=te(),r=te();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=nn();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(W.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function OT(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function NT(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,T.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Wn(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function Zc(t,e,n){const s=Y(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!gi(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function vf(t,e,n){const s=Y(t);let r=W.min(),i=te();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=Y(a),h=l.Ui.get(u);return h!==void 0?T.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(s,o,tn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:W.min(),n?i:te())).next(a=>(xT(s,Rb(e),a),{documents:a,Hi:i})))}function xT(t,e,n){let s=t.Ki.get(e)||W.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class wf{constructor(){this.activeTargetIds=ym()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class PT{constructor(){this.Lr=new wf,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new wf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class MT{Ur(e){}shutdown(){}}/**
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
 */class _f{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const LT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class UT{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class FT extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);F("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(F("RestConnection","Received: ",c),c),c=>{throw jc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+tr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=LT[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new X0;a.setWithCredentials(!0),a.listenOnce(Q0.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case tc.NO_ERROR:const u=a.getResponseJson();F("Connection","XHR received:",JSON.stringify(u)),i(u);break;case tc.TIMEOUT:F("Connection",'RPC "'+e+'" timed out'),o(new x(w.DEADLINE_EXCEEDED,"Request time out"));break;case tc.HTTP_ERROR:const l=a.getStatus();if(F("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const g=function(y){const I=y.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(I)>=0?I:w.UNKNOWN}(f.status);o(new x(g,f.message))}else o(new x(w.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new x(w.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{F("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=z0(),o=W0(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new J0({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");F("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const f=new UT({Hr:y=>{h?F("Connection","Not sending because WebChannel is closed:",y):(l||(F("Connection","Opening WebChannel transport."),u.open(),l=!0),F("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),g=(y,I,k)=>{y.listen(I,R=>{try{k(R)}catch(P){setTimeout(()=>{throw P},0)}})};return g(u,Fi.EventType.OPEN,()=>{h||F("Connection","WebChannel transport opened.")}),g(u,Fi.EventType.CLOSE,()=>{h||(h=!0,F("Connection","WebChannel transport closed"),f.io())}),g(u,Fi.EventType.ERROR,y=>{h||(h=!0,jc("Connection","WebChannel transport errored:",y),f.io(new x(w.UNAVAILABLE,"The operation could not be completed")))}),g(u,Fi.EventType.MESSAGE,y=>{var I;if(!h){const k=y.data[0];de(!!k);const R=k,P=R.error||((I=R[0])===null||I===void 0?void 0:I.error);if(P){F("Connection","WebChannel received error:",P);const U=P.status;let X=function(Ce){const Fe=Te[Ce];if(Fe!==void 0)return dm(Fe)}(U),ye=P.message;X===void 0&&(X=w.INTERNAL,ye="Unknown error status: "+U+" with message "+P.message),h=!0,f.io(new x(X,ye)),u.close()}else F("Connection","WebChannel received:",k),f.ro(k)}}),g(o,Y0.STAT_EVENT,y=>{y.stat===Yh.PROXY?F("Connection","Detected buffering proxy"):y.stat===Yh.NOPROXY&&F("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function sc(){return typeof document<"u"?document:null}/**
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
 */function _a(t){return new Wb(t,!0)}class Rm{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&F("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class km{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Rm(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(en(n.toString()),en("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new x(w.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class VT extends km{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=Jb(this.yt,e),s=function(r){if(!("targetChange"in r))return W.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?W.min():i.readTime?Ft(i.readTime):W.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Xc(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=Gc(a)?{documents:eT(r,a)}:{query:tT(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=_m(r,i.resumeToken):i.snapshotVersion.compareTo(W.min())>0&&(o.readTime=So(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=sT(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Xc(this.yt),n.removeTarget=e,this.Bo(n)}}class $T extends km{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(de(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=Zb(e.writeResults,e.commitTime),s=Ft(e.commitTime);return this.listener.Zo(s,n)}return de(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Xc(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Xb(this.yt,s))};this.Bo(n)}}/**
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
 */class BT extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new x(w.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new x(w.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(w.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class jT{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(en(n),this.ou=!1):F("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class qT{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{us(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Y(a);c._u.add(4),await vi(c),c.gu.set("Unknown"),c._u.delete(4),await Ea(c)}(this))})}),this.gu=new jT(s,r)}}async function Ea(t){if(us(t))for(const e of t.wu)await e(!0)}async function vi(t){for(const e of t.wu)await e(!1)}function Dm(t,e){const n=Y(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),pl(n)?dl(n):rr(n).ko()&&fl(n,e))}function Om(t,e){const n=Y(t),s=rr(n);n.du.delete(e),s.ko()&&Nm(n,e),n.du.size===0&&(s.ko()?s.Fo():us(n)&&n.gu.set("Unknown"))}function fl(t,e){t.yu.Ot(e.targetId),rr(t).zo(e)}function Nm(t,e){t.yu.Ot(e),rr(t).Ho(e)}function dl(t){t.yu=new Hb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),rr(t).start(),t.gu.uu()}function pl(t){return us(t)&&!rr(t).No()&&t.du.size>0}function us(t){return Y(t)._u.size===0}function xm(t){t.yu=void 0}async function HT(t){t.du.forEach((e,n)=>{fl(t,e)})}async function KT(t,e){xm(t),pl(t)?(t.gu.hu(e),dl(t)):t.gu.set("Unknown")}async function GT(t,e,n){if(t.gu.set("Online"),e instanceof wm&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ao(t,s)}else if(e instanceof Yi?t.yu.Kt(e):e instanceof vm?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(W.min()))try{const s=await Cm(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(We.EMPTY_BYTE_STRING,c.snapshotVersion)),Nm(r,a);const u=new Wn(c.target,a,1,c.sequenceNumber);fl(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){F("RemoteStore","Failed to raise snapshot:",s),await Ao(t,s)}}async function Ao(t,e,n){if(!gi(e))throw e;t._u.add(1),await vi(t),t.gu.set("Offline"),n||(n=()=>Cm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Ea(t)})}function Pm(t,e){return e().catch(n=>Ao(t,n,e))}async function Ia(t){const e=Y(t),n=An(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;zT(e);)try{const r=await OT(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,WT(e,r)}catch(r){await Ao(e,r)}Mm(e)&&Lm(e)}function zT(t){return us(t)&&t.fu.length<10}function WT(t,e){t.fu.push(e);const n=An(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Mm(t){return us(t)&&!An(t).No()&&t.fu.length>0}function Lm(t){An(t).start()}async function QT(t){An(t).eu()}async function YT(t){const e=An(t);for(const n of t.fu)e.Xo(n.mutations)}async function JT(t,e,n){const s=t.fu.shift(),r=cl.from(s,e,n);await Pm(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ia(t)}async function XT(t,e){e&&An(t).Yo&&await async function(n,s){if(r=s.code,Vb(r)&&r!==w.ABORTED){const i=n.fu.shift();An(n).Mo(),await Pm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ia(n)}var r}(t,e),Mm(t)&&Lm(t)}async function Ef(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const s=us(n);n._u.add(3),await vi(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Ea(n)}async function ZT(t,e){const n=Y(t);e?(n._u.delete(2),await Ea(n)):e||(n._u.add(2),await vi(n),n.gu.set("Unknown"))}function rr(t){return t.pu||(t.pu=function(e,n,s){const r=Y(e);return r.su(),new VT(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:HT.bind(null,t),Zr:KT.bind(null,t),Wo:GT.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),pl(t)?dl(t):t.gu.set("Unknown")):(await t.pu.stop(),xm(t))})),t.pu}function An(t){return t.Iu||(t.Iu=function(e,n,s){const r=Y(e);return r.su(),new $T(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:QT.bind(null,t),Zr:XT.bind(null,t),tu:YT.bind(null,t),Zo:JT.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Ia(t)):(await t.Iu.stop(),t.fu.length>0&&(F("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class gl{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new gl(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ml(t,e){if(en("AsyncQueue",`${e}: ${t}`),gi(t))return new x(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Os{constructor(e){this.comparator=e?(n,s)=>e(n,s)||$.comparator(n.key,s.key):(n,s)=>$.comparator(n.key,s.key),this.keyedMap=wr(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new Os(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Os)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Os;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class If{constructor(){this.Tu=new Oe($.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):K():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class qs{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new qs(e,n,Os.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ma(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class eS{constructor(){this.Au=void 0,this.listeners=[]}}class tS{constructor(){this.queries=new sr(e=>sm(e),ma),this.onlineState="Unknown",this.Ru=new Set}}async function Um(t,e){const n=Y(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new eS),r)try{i.Au=await n.onListen(s)}catch(o){const a=ml(o,`Initialization of query '${Qc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&yl(n)}async function Fm(t,e){const n=Y(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function nS(t,e){const n=Y(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&yl(n)}function sS(t,e,n){const s=Y(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function yl(t){t.Ru.forEach(e=>{e.next()})}class Vm{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new qs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=qs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class $m{constructor(e){this.key=e}}class Bm{constructor(e){this.key=e}}class rS{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=te(),this.mutatedKeys=te(),this.Gu=rm(e),this.Qu=new Os(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new If,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const f=r.get(l),g=il(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),I=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;f&&g?f.data.isEqual(g.data)?y!==I&&(s.track({type:3,doc:g}),k=!0):this.Hu(f,g)||(s.track({type:2,doc:g}),k=!0,(c&&this.Gu(g,c)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),k=!0):f&&!g&&(s.track({type:1,doc:f}),k=!0,(c||u)&&(a=!0)),k&&(g?(o=o.add(g),i=I?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((u,l)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return g(h)-g(f)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new qs(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new If,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=te(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Bm(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new $m(s))}),n}tc(e){this.qu=e.Hi,this.Ku=te();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return qs.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class iS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class oS{constructor(e){this.key=e,this.nc=!1}}class aS{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new sr(a=>sm(a),ma),this.rc=new Map,this.oc=new Set,this.uc=new Oe($.comparator),this.cc=new Map,this.ac=new ul,this.hc={},this.lc=new Map,this.fc=js.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function cS(t,e){const n=vS(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await NT(n.localStore,tn(e));n.isPrimaryClient&&Dm(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await uS(n,e,s,a==="current",o.resumeToken)}return r}async function uS(t,e,n,s,r){t._c=(h,f,g)=>async function(y,I,k,R){let P=I.view.Wu(k);P.$i&&(P=await vf(y.localStore,I.query,!1).then(({documents:ye})=>I.view.Wu(ye,P)));const U=R&&R.targetChanges.get(I.targetId),X=I.view.applyChanges(P,y.isPrimaryClient,U);return Tf(y,I.targetId,X.Xu),X.snapshot}(t,h,f,g);const i=await vf(t.localStore,e,!0),o=new rS(e,i.Hi),a=o.Wu(i.documents),c=yi.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);Tf(t,n,u.Xu);const l=new iS(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function lS(t,e){const n=Y(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!ma(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Zc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Om(n.remoteStore,s.targetId),eu(n,s.targetId)}).catch(pi)):(eu(n,s.targetId),await Zc(n.localStore,s.targetId,!0))}async function hS(t,e,n){const s=wS(t);try{const r=await function(i,o){const a=Y(i),c=Re.now(),u=o.reduce((f,g)=>f.add(g.key),te());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=nn(),y=te();return a.Gi.getEntries(f,u).next(I=>{g=I,g.forEach((k,R)=>{R.isValidDocument()||(y=y.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(I=>{l=I;const k=[];for(const R of o){const P=Lb(R,l.get(R.key).overlayedDocument);P!=null&&k.push(new kn(R.key,P,tm(P.value.mapValue),bt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,k,o)}).next(I=>{h=I;const k=I.applyToLocalDocumentSet(l,y);return a.documentOverlayCache.saveOverlays(f,I.batchId,k)})}).then(()=>({batchId:h.batchId,changes:gm(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Oe(oe)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await wi(s,r.changes),await Ia(s.remoteStore)}catch(r){const i=ml(r,"Failed to persist write");n.reject(i)}}async function jm(t,e){const n=Y(t);try{const s=await kT(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(de(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?de(o.nc):r.removedDocuments.size>0&&(de(o.nc),o.nc=!1))}),await wi(n,s,e)}catch(s){await pi(s)}}function bf(t,e,n){const s=Y(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Y(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&yl(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function fS(t,e,n){const s=Y(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Oe($.comparator);o=o.insert(i,$e.newNoDocument(i,W.min()));const a=te().add(i),c=new wa(W.min(),new Map,new ke(oe),o,a);await jm(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),vl(s)}else await Zc(s.localStore,e,!1).then(()=>eu(s,e,n)).catch(pi)}async function dS(t,e){const n=Y(t),s=e.batch.batchId;try{const r=await RT(n.localStore,e);Hm(n,s,null),qm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await wi(n,r)}catch(r){await pi(r)}}async function pS(t,e,n){const s=Y(t);try{const r=await function(i,o){const a=Y(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(de(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);Hm(s,e,n),qm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await wi(s,r)}catch(r){await pi(r)}}function qm(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Hm(t,e,n){const s=Y(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function eu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Km(t,s)})}function Km(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Om(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),vl(t))}function Tf(t,e,n){for(const s of n)s instanceof $m?(t.ac.addReference(s.key,e),gS(t,s)):s instanceof Bm?(F("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Km(t,s.key)):K()}function gS(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(F("SyncEngine","New document in limbo: "+n),t.oc.add(s),vl(t))}function vl(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new $(me.fromString(e)),s=t.fc.next();t.cc.set(s,new oS(n)),t.uc=t.uc.insert(n,s),Dm(t.remoteStore,new Wn(tn(sl(n.path)),s,2,Zu.at))}}async function wi(t,e,n){const s=Y(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=hl.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const u=Y(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>T.forEach(c,h=>T.forEach(h.Si,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>T.forEach(h.Di,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!gi(l))throw l;F("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.qi.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.qi=u.qi.insert(h,y)}}}(s.localStore,i))}async function mS(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const s=await Am(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new x(w.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await wi(n,s.ji)}}function yS(t,e){const n=Y(t),s=n.cc.get(e);if(s&&s.nc)return te().add(s.key);{let r=te();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function vS(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fS.bind(null,e),e.sc.Wo=nS.bind(null,e.eventManager),e.sc.wc=sS.bind(null,e.eventManager),e}function wS(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pS.bind(null,e),e}class _S{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=_a(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return CT(this.persistence,new ST,e.initialUser,this.yt)}yc(e){return new bT(ll.Bs,this.yt)}gc(e){return new PT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ES{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>bf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=mS.bind(null,this.syncEngine),await ZT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new tS}createDatastore(e){const n=_a(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new FT(r));var r;return function(i,o,a,c){return new BT(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>bf(this.syncEngine,a,0),o=_f.C()?new _f:new MT,new qT(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new aS(s,r,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Y(e);F("RemoteStore","RemoteStore shutting down."),n._u.add(5),await vi(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Gm(t,e,n){if(!n)throw new x(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function IS(t,e,n,s){if(e===!0&&s===!0)throw new x(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Sf(t){if(!$.isDocumentKey(t))throw new x(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Af(t){if($.isDocumentKey(t))throw new x(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ba(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function sn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ba(t);throw new x(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const Cf=new Map;class Rf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new x(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,IS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ta{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Z0;switch(n.type){case"gapi":const s=n.client;return new sb(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Cf.get(e);n&&(F("ComponentProvider","Removing Datastore"),Cf.delete(e),n.terminate())}(this),Promise.resolve()}}function bS(t,e,n,s={}){var r;const i=(t=sn(t,Ta))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&jc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ve.MOCK_USER;else{o=OE(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new x(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ve(c)}t._authCredentials=new eb(new Hg(o,a))}}/**
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
 */class tt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new In(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tt(this.firestore,e,this._key)}}class ls{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ls(this.firestore,e,this._query)}}class In extends ls{constructor(e,n,s){super(e,n,sl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tt(this.firestore,null,new $(e))}withConverter(e){return new In(this.firestore,e,this._path)}}function TS(t,e,...n){if(t=Ee(t),Gm("collection","path",e),t instanceof Ta){const s=me.fromString(e,...n);return Af(s),new In(t,null,s)}{if(!(t instanceof tt||t instanceof In))throw new x(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(me.fromString(e,...n));return Af(s),new In(t.firestore,null,s)}}function SS(t,e,...n){if(t=Ee(t),arguments.length===1&&(e=Kg.R()),Gm("doc","path",e),t instanceof Ta){const s=me.fromString(e,...n);return Sf(s),new tt(t,null,new $(s))}{if(!(t instanceof tt||t instanceof In))throw new x(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(me.fromString(e,...n));return Sf(s),new tt(t.firestore,t instanceof In?t.converter:null,new $(s))}}/**
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
 */class zm{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):en("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class AS{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ve.UNAUTHENTICATED,this.clientId=Kg.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{F("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(F("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ml(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function CS(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Am(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function RS(t,e){t.asyncQueue.verifyOperationInProgress();const n=await kS(t);F("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Ef(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ef(e.remoteStore,i)),t.onlineComponents=e}async function kS(t){return t.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await CS(t,new _S)),t.offlineComponents}async function Wm(t){return t.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await RS(t,new ES)),t.onlineComponents}function DS(t){return Wm(t).then(e=>e.syncEngine)}async function Qm(t){const e=await Wm(t),n=e.eventManager;return n.onListen=cS.bind(null,e.syncEngine),n.onUnlisten=lS.bind(null,e.syncEngine),n}function OS(t,e,n={}){const s=new Jt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new zm({next:h=>{i.enqueueAndForget(()=>Fm(r,l));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new x(w.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new x(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Vm(sl(o.path),u,{includeMetadataChanges:!0,Nu:!0});return Um(r,l)}(await Qm(t),t.asyncQueue,e,n,s)),s.promise}function NS(t,e,n={}){const s=new Jt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new zm({next:h=>{i.enqueueAndForget(()=>Fm(r,l)),h.fromCache&&a.source==="server"?c.reject(new x(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Vm(o,u,{includeMetadataChanges:!0,Nu:!0});return Um(r,l)}(await Qm(t),t.asyncQueue,e,n,s)),s.promise}class xS{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Rm(this,"async_queue_retry"),this.Wc=()=>{const n=sc();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=sc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=sc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Jt;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!gi(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw en("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=gl.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&K()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class ir extends Ta{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new xS,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ym(this),this._firestoreClient.terminate()}}function PS(t,e){const n=typeof t=="object"?t:Du(),s=typeof t=="string"?t:e||"(default)",r=os(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=RE("firestore");i&&bS(r,...i)}return r}function wl(t){return t._firestoreClient||Ym(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ym(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new db(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new AS(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class Hs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hs(We.fromBase64String(e))}catch(n){throw new x(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Hs(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Sa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class _l{constructor(e){this._methodName=e}}/**
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
 */class El{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */const MS=/^__.*__$/;class LS{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new kn(e,this.data,this.fieldMask,n,this.fieldTransforms):new mi(e,this.data,n,this.fieldTransforms)}}class Jm{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new kn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Xm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Il{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Il(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Co(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Xm(this.sa)&&MS.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class US{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||_a(e)}da(e,n,s,r=!1){return new Il({sa:e,methodName:n,fa:s,path:je.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function bl(t){const e=t._freezeSettings(),n=_a(t._databaseId);return new US(t._databaseId,!!e.ignoreUndefinedProperties,n)}function FS(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);Tl("Data must be an object, but it was:",o,s);const a=Zm(s,o);let c,u;if(i.merge)c=new rt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=tu(e,h,n);if(!o.contains(f))throw new x(w.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);ty(l,f)||l.push(f)}c=new rt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new LS(new et(a),c,u)}class Aa extends _l{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Aa}}function VS(t,e,n,s){const r=t.da(1,e,n);Tl("Data must be an object, but it was:",r,s);const i=[],o=et.empty();cs(s,(c,u)=>{const l=Sl(e,c,n);u=Ee(u);const h=r.ca(l);if(u instanceof Aa)i.push(l);else{const f=_i(u,h);f!=null&&(i.push(l),o.set(l,f))}});const a=new rt(i);return new Jm(o,a,r.fieldTransforms)}function $S(t,e,n,s,r,i){const o=t.da(1,e,n),a=[tu(e,s,n)],c=[r];if(i.length%2!=0)throw new x(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(tu(e,i[f])),c.push(i[f+1]);const u=[],l=et.empty();for(let f=a.length-1;f>=0;--f)if(!ty(u,a[f])){const g=a[f];let y=c[f];y=Ee(y);const I=o.ca(g);if(y instanceof Aa)u.push(g);else{const k=_i(y,I);k!=null&&(u.push(g),l.set(g,k))}}const h=new rt(u);return new Jm(l,h,o.fieldTransforms)}function BS(t,e,n,s=!1){return _i(n,t.da(s?4:3,e))}function _i(t,e){if(ey(t=Ee(t)))return Tl("Unsupported field value:",e,t),Zm(t,e);if(t instanceof _l)return function(n,s){if(!Xm(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=_i(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ee(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Db(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Re.fromDate(n);return{timestampValue:So(s.yt,r)}}if(n instanceof Re){const r=new Re(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:So(s.yt,r)}}if(n instanceof El)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Hs)return{bytesValue:_m(s.yt,n._byteString)};if(n instanceof tt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:al(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${ba(n)}`)}(t,e)}function Zm(t,e){const n={};return Gg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cs(t,(s,r)=>{const i=_i(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function ey(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Re||t instanceof El||t instanceof Hs||t instanceof tt||t instanceof _l)}function Tl(t,e,n){if(!ey(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ba(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function tu(t,e,n){if((e=Ee(e))instanceof Sa)return e._internalPath;if(typeof e=="string")return Sl(t,e);throw Co("Field path arguments must be of type string or ",t,!1,void 0,n)}const jS=new RegExp("[~\\*/\\[\\]]");function Sl(t,e,n){if(e.search(jS)>=0)throw Co(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Sa(...e.split("."))._internalPath}catch{throw Co(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Co(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new x(w.INVALID_ARGUMENT,a+t+c)}function ty(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ny{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ca("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qS extends ny{data(){return super.data()}}function Ca(t,e){return typeof e=="string"?Sl(t,e):e instanceof Sa?e._internalPath:e._delegate._internalPath}/**
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
 */function HS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Al{}class sy extends Al{}function uO(t,e,...n){let s=[];e instanceof Al&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Cl).length,o=r.filter(a=>a instanceof Ra).length;if(i>1||i>0&&o>0)throw new x(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Ra extends sy{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Ra(e,n,s)}_apply(e){const n=this._parse(e);return ry(e._query,n),new ls(e.firestore,e.converter,zc(e._query,n))}_parse(e){const n=bl(e.firestore);return function(r,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new x(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Df(l,u);const f=[];for(const g of l)f.push(kf(a,r,g));h={arrayValue:{values:f}}}else h=kf(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Df(l,u),h=BS(o,i,l,u==="in"||u==="not-in");return Ae.create(c,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function lO(t,e,n){const s=e,r=Ca("where",t);return Ra._create(r,s,n)}class Cl extends Al{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Cl(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:St.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)ry(i,a),i=zc(i,a)}(e._query,n),new ls(e.firestore,e.converter,zc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Rl extends sy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Rl(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new x(w.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new x(w.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ks(r,i);return function(a,c){if(rl(a)===null){const u=ga(a);u!==null&&iy(a,u,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new ls(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new nr(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function hO(t,e="asc"){const n=e,s=Ca("orderBy",t);return Rl._create(s,n)}function kf(t,e,n){if(typeof(n=Ee(n))=="string"){if(n==="")throw new x(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nm(e)&&n.indexOf("/")!==-1)throw new x(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(me.fromString(n));if(!$.isDocumentKey(s))throw new x(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return tf(t,new $(s))}if(n instanceof tt)return tf(t,n._key);throw new x(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ba(n)}.`)}function Df(t,e){if(!Array.isArray(t)||t.length===0)throw new x(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new x(w.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function ry(t,e){if(e.isInequality()){const s=ga(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new x(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=rl(t);i!==null&&iy(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new x(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function iy(t,e,n){if(!n.isEqual(e))throw new x(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class KS{convertValue(e,n="none"){switch(Zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){const s={};return cs(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new El(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Wg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Qr(e));default:return null}}convertTimestamp(e){const n=Sn(e);return new Re(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=me.fromString(e);de(Sm(s));const r=new Wr(s.get(1),s.get(3)),i=new $(s.popFirst(5));return r.isEqual(n)||en(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function GS(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class _r{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class oy extends ny{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ji(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Ca("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ji extends oy{data(e={}){return super.data(e)}}class zS{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new _r(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ji(this._firestore,this._userDataWriter,s.key,s,new _r(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Ji(s._firestore,s._userDataWriter,o.doc.key,o.doc,new _r(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ji(s._firestore,s._userDataWriter,o.doc.key,o.doc,new _r(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:WS(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function WS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
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
 */function fO(t){t=sn(t,tt);const e=sn(t.firestore,ir);return OS(wl(e),t._key).then(n=>YS(e,t,n))}class ay extends KS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new tt(this.firestore,null,n)}}function dO(t){t=sn(t,ls);const e=sn(t.firestore,ir),n=wl(e),s=new ay(e);return HS(t._query),NS(n,t._query).then(r=>new zS(e,s,t,r))}function pO(t,e,n,...s){t=sn(t,tt);const r=sn(t.firestore,ir),i=bl(r);let o;return o=typeof(e=Ee(e))=="string"||e instanceof Sa?$S(i,"updateDoc",t._key,e,n,s):VS(i,"updateDoc",t._key,e),kl(r,[o.toMutation(t._key,bt.exists(!0))])}function gO(t){return kl(sn(t.firestore,ir),[new ol(t._key,bt.none())])}function QS(t,e){const n=sn(t.firestore,ir),s=SS(t),r=GS(t.converter,e);return kl(n,[FS(bl(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,bt.exists(!1))]).then(()=>s)}function kl(t,e){return function(n,s){const r=new Jt;return n.asyncQueue.enqueueAndForget(async()=>hS(await DS(n),s,r)),r.promise}(wl(t),e)}function YS(t,e,n){const s=n.docs.get(e._key),r=new ay(t);return new oy(t,r,e._key,s,new _r(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){tr=n})(ri),jt(new Tt("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new ir(new tb(n.getProvider("auth-internal")),new ib(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new x(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),dt(Jh,"3.8.1",t),dt(Jh,"3.8.1","esm2017")})();var JS="firebase",XS="9.16.0";/**
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
 */dt(JS,XS,"app");const cy="@firebase/installations",Dl="0.6.1";/**
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
 */const uy=1e4,ly=`w:${Dl}`,hy="FIS_v2",ZS="https://firebaseinstallations.googleapis.com/v1",eA=60*60*1e3,tA="installations",nA="Installations";/**
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
 */const sA={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},es=new is(tA,nA,sA);function fy(t){return t instanceof kt&&t.code.includes("request-failed")}/**
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
 */function dy({projectId:t}){return`${ZS}/projects/${t}/installations`}function py(t){return{token:t.token,requestStatus:2,expiresIn:iA(t.expiresIn),creationTime:Date.now()}}async function gy(t,e){const s=(await e.json()).error;return es.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function my({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function rA(t,{refreshToken:e}){const n=my(t);return n.append("Authorization",oA(e)),n}async function yy(t){const e=await t();return e.status>=500&&e.status<600?t():e}function iA(t){return Number(t.replace("s","000"))}function oA(t){return`${hy} ${t}`}/**
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
 */async function aA({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=dy(t),r=my(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={fid:n,authVersion:hy,appId:t.appId,sdkVersion:ly},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await yy(()=>fetch(s,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:py(u.authToken)}}else throw await gy("Create Installation",c)}/**
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
 */function vy(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function cA(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const uA=/^[cdef][\w-]{21}$/,nu="";function lA(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=hA(t);return uA.test(n)?n:nu}catch{return nu}}function hA(t){return cA(t).substr(0,22)}/**
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
 */function ka(t){return`${t.appName}!${t.appId}`}/**
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
 */const wy=new Map;function _y(t,e){const n=ka(t);Ey(n,e),fA(n,e)}function Ey(t,e){const n=wy.get(t);if(n)for(const s of n)s(e)}function fA(t,e){const n=dA();n&&n.postMessage({key:t,fid:e}),pA()}let Hn=null;function dA(){return!Hn&&"BroadcastChannel"in self&&(Hn=new BroadcastChannel("[Firebase] FID Change"),Hn.onmessage=t=>{Ey(t.data.key,t.data.fid)}),Hn}function pA(){wy.size===0&&Hn&&(Hn.close(),Hn=null)}/**
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
 */const gA="firebase-installations-database",mA=1,ts="firebase-installations-store";let rc=null;function Ol(){return rc||(rc=Fp(gA,mA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ts)}}})),rc}async function Ro(t,e){const n=ka(t),r=(await Ol()).transaction(ts,"readwrite"),i=r.objectStore(ts),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&_y(t,e.fid),e}async function Iy(t){const e=ka(t),s=(await Ol()).transaction(ts,"readwrite");await s.objectStore(ts).delete(e),await s.done}async function Da(t,e){const n=ka(t),r=(await Ol()).transaction(ts,"readwrite"),i=r.objectStore(ts),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&_y(t,a.fid),a}/**
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
 */async function Nl(t){let e;const n=await Da(t.appConfig,s=>{const r=yA(s),i=vA(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===nu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function yA(t){const e=t||{fid:lA(),registrationStatus:0};return by(e)}function vA(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(es.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=wA(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:_A(t)}:{installationEntry:e}}async function wA(t,e){try{const n=await aA(t,e);return Ro(t.appConfig,n)}catch(n){throw fy(n)&&n.customData.serverCode===409?await Iy(t.appConfig):await Ro(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function _A(t){let e=await Of(t.appConfig);for(;e.registrationStatus===1;)await vy(100),e=await Of(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Nl(t);return s||n}return e}function Of(t){return Da(t,e=>{if(!e)throw es.create("installation-not-found");return by(e)})}function by(t){return EA(t)?{fid:t.fid,registrationStatus:0}:t}function EA(t){return t.registrationStatus===1&&t.registrationTime+uy<Date.now()}/**
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
 */async function IA({appConfig:t,heartbeatServiceProvider:e},n){const s=bA(t,n),r=rA(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={installation:{sdkVersion:ly,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await yy(()=>fetch(s,a));if(c.ok){const u=await c.json();return py(u)}else throw await gy("Generate Auth Token",c)}function bA(t,{fid:e}){return`${dy(t)}/${e}/authTokens:generate`}/**
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
 */async function xl(t,e=!1){let n;const s=await Da(t.appConfig,i=>{if(!Ty(i))throw es.create("not-registered");const o=i.authToken;if(!e&&AA(o))return i;if(o.requestStatus===1)return n=TA(t,e),i;{if(!navigator.onLine)throw es.create("app-offline");const a=RA(i);return n=SA(t,a),a}});return n?await n:s.authToken}async function TA(t,e){let n=await Nf(t.appConfig);for(;n.authToken.requestStatus===1;)await vy(100),n=await Nf(t.appConfig);const s=n.authToken;return s.requestStatus===0?xl(t,e):s}function Nf(t){return Da(t,e=>{if(!Ty(e))throw es.create("not-registered");const n=e.authToken;return kA(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function SA(t,e){try{const n=await IA(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Ro(t.appConfig,s),n}catch(n){if(fy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Iy(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ro(t.appConfig,s)}throw n}}function Ty(t){return t!==void 0&&t.registrationStatus===2}function AA(t){return t.requestStatus===2&&!CA(t)}function CA(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+eA}function RA(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function kA(t){return t.requestStatus===1&&t.requestTime+uy<Date.now()}/**
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
 */async function DA(t){const e=t,{installationEntry:n,registrationPromise:s}=await Nl(e);return s?s.catch(console.error):xl(e).catch(console.error),n.fid}/**
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
 */async function OA(t,e=!1){const n=t;return await NA(n),(await xl(n,e)).token}async function NA(t){const{registrationPromise:e}=await Nl(t);e&&await e}/**
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
 */function xA(t){if(!t||!t.options)throw ic("App Configuration");if(!t.name)throw ic("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ic(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ic(t){return es.create("missing-app-config-values",{valueName:t})}/**
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
 */const Sy="installations",PA="installations-internal",MA=t=>{const e=t.getProvider("app").getImmediate(),n=xA(e),s=os(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},LA=t=>{const e=t.getProvider("app").getImmediate(),n=os(e,Sy).getImmediate();return{getId:()=>DA(n),getToken:r=>OA(n,r)}};function UA(){jt(new Tt(Sy,MA,"PUBLIC")),jt(new Tt(PA,LA,"PRIVATE"))}UA();dt(cy,Dl);dt(cy,Dl,"esm2017");/**
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
 */const ko="analytics",FA="firebase_id",VA="origin",$A=60*1e3,BA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ay="https://www.googletagmanager.com/gtag/js";/**
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
 */const it=new Xo("@firebase/analytics");/**
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
 */function Cy(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function jA(t,e){const n=document.createElement("script");n.src=`${Ay}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function qA(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function HA(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await Cy(n)).find(u=>u.measurementId===r);c&&await e[c.appId]}}catch(a){it.error(a)}t("config",r,i)}async function KA(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Cy(n);for(const c of o){const u=a.find(h=>h.measurementId===c),l=u&&e[u.appId];if(l)i.push(l);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){it.error(i)}}function GA(t,e,n,s){async function r(i,o,a){try{i==="event"?await KA(t,e,n,o,a):i==="config"?await HA(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){it.error(c)}}return r}function zA(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=GA(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function WA(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ay)&&n.src.includes(t))return n;return null}/**
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
 */const QA={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},pt=new is("analytics","Analytics",QA);/**
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
 */const YA=30,JA=1e3;class XA{constructor(e={},n=JA){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ry=new XA;function ZA(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function eC(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:ZA(s)},i=BA.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw pt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function tC(t,e=Ry,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw pt.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw pt.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new rC;return setTimeout(async()=>{a.abort()},n!==void 0?n:$A),ky({appId:s,apiKey:r,measurementId:i},o,a,e)}async function ky(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=Ry){var i;const{appId:o,measurementId:a}=t;try{await nC(s,e)}catch(c){if(a)return it.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await eC(t);return r.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!sC(u)){if(r.deleteThrottleMetadata(o),a)return it.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const l=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?Dh(n,r.intervalMillis,YA):Dh(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return r.setThrottleMetadata(o,h),it.debug(`Calling attemptFetch again in ${l} millis`),ky(t,h,s,r)}}function nC(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(pt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function sC(t){if(!(t instanceof kt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class rC{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function iC(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
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
 */async function oC(){if(Pp())try{await Mp()}catch(t){return it.warn(pt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return it.warn(pt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function aC(t,e,n,s,r,i,o){var a;const c=tC(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&it.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>it.error(g)),e.push(c);const u=oC().then(g=>{if(g)return s.getId()}),[l,h]=await Promise.all([c,u]);WA(i)||jA(i,l.measurementId),r("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[VA]="firebase",f.update=!0,h!=null&&(f[FA]=h),r("config",l.measurementId,f),l.measurementId}/**
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
 */class cC{constructor(e){this.app=e}_delete(){return delete Cr[this.app.options.appId],Promise.resolve()}}let Cr={},xf=[];const Pf={};let oc="dataLayer",uC="gtag",Mf,Dy,Lf=!1;function lC(){const t=[];if(xp()&&t.push("This is a browser extension environment."),ME()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=pt.create("invalid-analytics-context",{errorInfo:e});it.warn(n.message)}}function hC(t,e,n){lC();const s=t.options.appId;if(!s)throw pt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)it.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw pt.create("no-api-key");if(Cr[s]!=null)throw pt.create("already-exists",{id:s});if(!Lf){qA(oc);const{wrappedGtag:i,gtagCore:o}=zA(Cr,xf,Pf,oc,uC);Dy=i,Mf=o,Lf=!0}return Cr[s]=aC(t,xf,Pf,e,Mf,oc,n),new cC(t)}function fC(t=Du()){t=Ee(t);const e=os(t,ko);return e.isInitialized()?e.getImmediate():dC(t)}function dC(t,e={}){const n=os(t,ko);if(n.isInitialized()){const r=n.getImmediate();if($r(e,n.getOptions()))return r;throw pt.create("already-initialized")}return n.initialize({options:e})}function pC(t,e,n,s){t=Ee(t),iC(Dy,Cr[t.app.options.appId],e,n,s).catch(r=>it.error(r))}const Uf="@firebase/analytics",Ff="0.9.1";function gC(){jt(new Tt(ko,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return hC(s,r,n)},"PUBLIC")),jt(new Tt("analytics-internal",t,"PRIVATE")),dt(Uf,Ff),dt(Uf,Ff,"esm2017");function t(e){try{const n=e.getProvider(ko).getImmediate();return{logEvent:(s,r,i)=>pC(n,s,r,i)}}catch(n){throw pt.create("interop-component-reg-failed",{reason:n})}}}gC();function Pl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Oy(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mC=Oy,Ny=new is("auth","Firebase",Oy());/**
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
 */const Vf=new Xo("@firebase/auth");function Xi(t,...e){Vf.logLevel<=ie.ERROR&&Vf.error(`Auth (${ri}): ${t}`,...e)}/**
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
 */function At(t,...e){throw Ml(t,...e)}function Vt(t,...e){return Ml(t,...e)}function yC(t,e,n){const s=Object.assign(Object.assign({},mC()),{[e]:n});return new is("auth","Firebase",s).create(e,{appName:t.name})}function Ml(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ny.create(t,...e)}function q(t,e,...n){if(!t)throw Ml(e,...n)}function Qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xi(e),new Error(e)}function rn(t,e){t||Qt(e)}/**
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
 */const $f=new Map;function Yt(t){rn(t instanceof Function,"Expected a class definition");let e=$f.get(t);return e?(rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$f.set(t,e),e)}/**
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
 */function vC(t,e){const n=os(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if($r(i,e??{}))return r;At(r,"already-initialized")}return n.initialize({options:e})}function wC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function su(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _C(){return Bf()==="http:"||Bf()==="https:"}function Bf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function EC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_C()||xp()||"connection"in navigator)?navigator.onLine:!0}function IC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ei{constructor(e,n){this.shortDelay=e,this.longDelay=n,rn(n>e,"Short delay should be less than long delay!"),this.isMobile=NE()||xE()}get(){return EC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ll(t,e){rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class xy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const TC=new Ei(3e4,6e4);function Ii(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function bi(t,e,n,s,r={}){return Py(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=si(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),xy.fetch()(My(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Py(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},bC),e);try{const r=new SC(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Bi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Bi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Bi(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw yC(t,l,u);At(t,l)}}catch(r){if(r instanceof kt)throw r;At(t,"network-request-failed")}}async function Ti(t,e,n,s,r={}){const i=await bi(t,e,n,s,r);return"mfaPendingCredential"in i&&At(t,"multi-factor-auth-required",{_serverResponse:i}),i}function My(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Ll(t.config,r):`${t.config.apiScheme}://${r}`}class SC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Vt(this.auth,"network-request-failed")),TC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Bi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Vt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function AC(t,e){return bi(t,"POST","/v1/accounts:delete",e)}async function CC(t,e){return bi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Rr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RC(t,e=!1){const n=Ee(t),s=await n.getIdToken(e),r=Ul(s);q(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Rr(ac(r.auth_time)),issuedAtTime:Rr(ac(r.iat)),expirationTime:Rr(ac(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ac(t){return Number(t)*1e3}function Ul(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Xi("JWT malformed, contained fewer than 3 sections"),null;try{const r=Dp(n);return r?JSON.parse(r):(Xi("Failed to decode base64 JWT payload"),null)}catch(r){return Xi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function kC(t){const e=Ul(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ks(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof kt&&DC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function DC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class OC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ly{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rr(this.lastLoginAt),this.creationTime=Rr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Do(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Ks(t,CC(n,{idToken:s}));q(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?PC(i.providerUserInfo):[],a=xC(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ly(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function NC(t){const e=Ee(t);await Do(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xC(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function PC(t){return t.map(e=>{var{providerId:n}=e,s=Pl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function MC(t,e){const n=await Py(t,{},async()=>{const s=si({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=My(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",xy.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Zr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await MC(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Zr;return s&&(q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(q(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zr,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
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
 */function un(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Pl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new OC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ly(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ks(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return RC(this,e)}reload(){return NC(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Do(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ks(this,AC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(u=n.createdAt)!==null&&u!==void 0?u:void 0,P=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:U,emailVerified:X,isAnonymous:ye,providerData:Ce,stsTokenManager:Fe}=n;q(U&&Fe,e,"internal-error");const gt=Zr.fromJSON(this.name,Fe);q(typeof U=="string",e,"internal-error"),un(h,e.name),un(f,e.name),q(typeof X=="boolean",e,"internal-error"),q(typeof ye=="boolean",e,"internal-error"),un(g,e.name),un(y,e.name),un(I,e.name),un(k,e.name),un(R,e.name),un(P,e.name);const Dt=new Qn({uid:U,auth:e,email:f,emailVerified:X,displayName:h,isAnonymous:ye,photoURL:y,phoneNumber:g,tenantId:I,stsTokenManager:gt,createdAt:R,lastLoginAt:P});return Ce&&Array.isArray(Ce)&&(Dt.providerData=Ce.map(ut=>Object.assign({},ut))),k&&(Dt._redirectEventId=k),Dt}static async _fromIdTokenResponse(e,n,s=!1){const r=new Zr;r.updateFromServerResponse(n);const i=new Qn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Do(i),i}}/**
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
 */class Uy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Uy.type="NONE";const jf=Uy;/**
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
 */function Zi(t,e,n){return`firebase:${t}:${e}:${n}`}class Ns{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Zi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Zi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ns(Yt(jf),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Yt(jf);const o=Zi(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Qn._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ns(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ns(i,e,s))}}/**
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
 */function qf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($y(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jy(e))return"Blackberry";if(qy(e))return"Webos";if(Fl(e))return"Safari";if((e.includes("chrome/")||Vy(e))&&!e.includes("edge/"))return"Chrome";if(By(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Fy(t=ze()){return/firefox\//i.test(t)}function Fl(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vy(t=ze()){return/crios\//i.test(t)}function $y(t=ze()){return/iemobile/i.test(t)}function By(t=ze()){return/android/i.test(t)}function jy(t=ze()){return/blackberry/i.test(t)}function qy(t=ze()){return/webos/i.test(t)}function Oa(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function LC(t=ze()){var e;return Oa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function UC(){return PE()&&document.documentMode===10}function Hy(t=ze()){return Oa(t)||By(t)||qy(t)||jy(t)||/windows phone/i.test(t)||$y(t)}function FC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ky(t,e=[]){let n;switch(t){case"Browser":n=qf(ze());break;case"Worker":n=`${qf(ze())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ri}/${s}`}/**
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
 */class VC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class $C{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hf(this),this.idTokenSubscription=new Hf(this),this.beforeStateQueue=new VC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ny,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Ns.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Do(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ee(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new is("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yt(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await Ns.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ky(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Si(t){return Ee(t)}class Hf{constructor(e){this.auth=e,this.observer=null,this.addObserver=$E(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function BC(t,e,n){const s=Si(t);q(s._canInitEmulator,s,"emulator-config-failed"),q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Gy(e),{host:o,port:a}=jC(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||qC()}function Gy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jC(t){const e=Gy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Kf(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Kf(o)}}}function Kf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Vl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,n){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}async function zy(t,e){return bi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function HC(t,e){return Ti(t,"POST","/v1/accounts:signInWithPassword",Ii(t,e))}/**
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
 */async function KC(t,e){return Ti(t,"POST","/v1/accounts:signInWithEmailLink",Ii(t,e))}async function GC(t,e){return Ti(t,"POST","/v1/accounts:signInWithEmailLink",Ii(t,e))}/**
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
 */class ei extends Vl{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ei(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ei(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return HC(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return KC(e,{email:this._email,oobCode:this._password});default:At(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return zy(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return GC(e,{idToken:n,email:this._email,oobCode:this._password});default:At(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function xs(t,e){return Ti(t,"POST","/v1/accounts:signInWithIdp",Ii(t,e))}/**
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
 */const zC="http://localhost";class ns extends Vl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):At("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Pl(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new ns(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,xs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xs(e,n)}buildRequest(){const e={requestUri:zC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=si(n)}return e}}/**
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
 */function WC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function QC(t){const e=gr(mr(t)).link,n=e?gr(mr(e)).deep_link_id:null,s=gr(mr(t)).deep_link_id;return(s?gr(mr(s)).link:null)||s||n||e||t}class $l{constructor(e){var n,s,r,i,o,a;const c=gr(mr(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,h=WC((r=c.mode)!==null&&r!==void 0?r:null);q(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=QC(e);try{return new $l(n)}catch{return null}}}/**
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
 */class or{constructor(){this.providerId=or.PROVIDER_ID}static credential(e,n){return ei._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=$l.parseLink(n);return q(s,"argument-error"),ei._fromEmailAndCode(e,s.code,s.tenantId)}}or.PROVIDER_ID="password";or.EMAIL_PASSWORD_SIGN_IN_METHOD="password";or.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Wy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ai extends Wy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pn extends Ai{constructor(){super("facebook.com")}static credential(e){return ns._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";pn.PROVIDER_ID="facebook.com";/**
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
 */class gn extends Ai{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ns._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return gn.credential(n,s)}catch{return null}}}gn.GOOGLE_SIGN_IN_METHOD="google.com";gn.PROVIDER_ID="google.com";/**
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
 */class mn extends Ai{constructor(){super("github.com")}static credential(e){return ns._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
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
 */class yn extends Ai{constructor(){super("twitter.com")}static credential(e,n){return ns._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return yn.credential(n,s)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com";yn.PROVIDER_ID="twitter.com";/**
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
 */async function YC(t,e){return Ti(t,"POST","/v1/accounts:signUp",Ii(t,e))}/**
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
 */class ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Qn._fromIdTokenResponse(e,s,r),o=Gf(s);return new ss({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Gf(s);return new ss({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Gf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Oo extends kt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Oo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Oo(e,n,s,r)}}function Qy(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Oo._fromErrorAndOperation(t,i,e,s):i})}async function JC(t,e,n=!1){const s=await Ks(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ss._forOperation(t,"link",s)}/**
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
 */async function XC(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Ks(t,Qy(s,r,e,t),n);q(i.idToken,s,"internal-error");const o=Ul(i.idToken);q(o,s,"internal-error");const{sub:a}=o;return q(t.uid===a,s,"user-mismatch"),ss._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&At(s,"user-mismatch"),i}}/**
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
 */async function Yy(t,e,n=!1){const s="signIn",r=await Qy(t,s,e),i=await ss._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function ZC(t,e){return Yy(Si(t),e)}async function eR(t,e,n){const s=Si(t),r=await YC(s,{returnSecureToken:!0,email:e,password:n}),i=await ss._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function tR(t,e,n){return ZC(Ee(t),or.credential(e,n))}function mO(t,e){return nR(Ee(t),e,null)}async function nR(t,e,n){const{auth:s}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);const o=await Ks(t,zy(s,i));await t._updateTokensIfNecessary(o,!0)}function sR(t,e,n,s){return Ee(t).onIdTokenChanged(e,n,s)}function rR(t,e,n){return Ee(t).beforeAuthStateChanged(e,n)}function yO(t,e,n,s){return Ee(t).onAuthStateChanged(e,n,s)}function iR(t){return Ee(t).signOut()}const No="__sak";/**
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
 */class Jy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(No,"1"),this.storage.removeItem(No),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function oR(){const t=ze();return Fl(t)||Oa(t)}const aR=1e3,cR=10;class Xy extends Jy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=oR()&&FC(),this.fallbackToPolling=Hy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);UC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,cR):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},aR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xy.type="LOCAL";const uR=Xy;/**
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
 */class Zy extends Jy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Zy.type="SESSION";const ev=Zy;/**
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
 */function lR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Na(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await lR(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Na.receivers=[];/**
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
 */function Bl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class hR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Bl("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function $t(){return window}function fR(t){$t().location.href=t}/**
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
 */function tv(){return typeof $t().WorkerGlobalScope<"u"&&typeof $t().importScripts=="function"}async function dR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gR(){return tv()?self:null}/**
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
 */const nv="firebaseLocalStorageDb",mR=1,xo="firebaseLocalStorage",sv="fbase_key";class Ci{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xa(t,e){return t.transaction([xo],e?"readwrite":"readonly").objectStore(xo)}function yR(){const t=indexedDB.deleteDatabase(nv);return new Ci(t).toPromise()}function ru(){const t=indexedDB.open(nv,mR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(xo,{keyPath:sv})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(xo)?e(s):(s.close(),await yR(),e(await ru()))})})}async function zf(t,e,n){const s=xa(t,!0).put({[sv]:e,value:n});return new Ci(s).toPromise()}async function vR(t,e){const n=xa(t,!1).get(e),s=await new Ci(n).toPromise();return s===void 0?null:s.value}function Wf(t,e){const n=xa(t,!0).delete(e);return new Ci(n).toPromise()}const wR=800,_R=3;class rv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ru(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>_R)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Na._getInstance(gR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dR(),!this.activeServiceWorker)return;this.sender=new hR(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ru();return await zf(e,No,"1"),await Wf(e,No),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>zf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>vR(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=xa(r,!1).getAll();return new Ci(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rv.type="LOCAL";const ER=rv;/**
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
 */function IR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function bR(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Vt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",IR().appendChild(s)})}function TR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ei(3e4,6e4);/**
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
 */function SR(t,e){return e?Yt(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class jl extends Vl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AR(t){return Yy(t.auth,new jl(t),t.bypassAuthState)}function CR(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),XC(n,new jl(t),t.bypassAuthState)}async function RR(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),JC(n,new jl(t),t.bypassAuthState)}/**
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
 */class iv{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AR;case"linkViaPopup":case"linkViaRedirect":return RR;case"reauthViaPopup":case"reauthViaRedirect":return CR;default:At(this.auth,"internal-error")}}resolve(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const kR=new Ei(2e3,1e4);class Is extends iv{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Is.currentPopupAction&&Is.currentPopupAction.cancel(),Is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const e=Bl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,kR.get())};e()}}Is.currentPopupAction=null;/**
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
 */const DR="pendingRedirect",eo=new Map;class OR extends iv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=eo.get(this.auth._key());if(!e){try{const s=await NR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}eo.set(this.auth._key(),e)}return this.bypassAuthState||eo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NR(t,e){const n=MR(e),s=PR(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function xR(t,e){eo.set(t._key(),e)}function PR(t){return Yt(t._redirectPersistence)}function MR(t){return Zi(DR,t.config.apiKey,t.name)}async function LR(t,e,n=!1){const s=Si(t),r=SR(s,e),o=await new OR(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const UR=10*60*1e3;class FR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ov(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Vt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qf(e))}saveEventToCache(e){this.cachedEventUids.add(Qf(e)),this.lastProcessedEventTime=Date.now()}}function Qf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ov({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ov(t);default:return!1}}/**
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
 */async function $R(t,e={}){return bi(t,"GET","/v1/projects",e)}/**
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
 */const BR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jR=/^https?/;async function qR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $R(t);for(const n of e)try{if(HR(n))return}catch{}At(t,"unauthorized-domain")}function HR(t){const e=su(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!jR.test(n))return!1;if(BR.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const KR=new Ei(3e4,6e4);function Yf(){const t=$t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function GR(t){return new Promise((e,n)=>{var s,r,i;function o(){Yf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yf(),n(Vt(t,"network-request-failed"))},timeout:KR.get()})}if(!((r=(s=$t().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=$t().gapi)===null||i===void 0)&&i.load)o();else{const a=TR("iframefcb");return $t()[a]=()=>{gapi.load?o():n(Vt(t,"network-request-failed"))},bR(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw to=null,e})}let to=null;function zR(t){return to=to||GR(t),to}/**
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
 */const WR=new Ei(5e3,15e3),QR="__/auth/iframe",YR="emulator/auth/iframe",JR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZR(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ll(e,YR):`https://${t.config.authDomain}/${QR}`,s={apiKey:e.apiKey,appName:t.name,v:ri},r=XR.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${si(s).slice(1)}`}async function ek(t){const e=await zR(t),n=$t().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:ZR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JR,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Vt(t,"network-request-failed"),a=$t().setTimeout(()=>{i(o)},WR.get());function c(){$t().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const tk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nk=500,sk=600,rk="_blank",ik="http://localhost";class Jf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ok(t,e,n,s=nk,r=sk){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},tk),{width:s.toString(),height:r.toString(),top:i,left:o}),u=ze().toLowerCase();n&&(a=Vy(u)?rk:n),Fy(u)&&(e=e||ik,c.scrollbars="yes");const l=Object.entries(c).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(LC(u)&&a!=="_self")return ak(e||"",a),new Jf(null);const h=window.open(e||"",a,l);q(h,t,"popup-blocked");try{h.focus()}catch{}return new Jf(h)}function ak(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const ck="__/auth/handler",uk="emulator/auth/handler";function Xf(t,e,n,s,r,i){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ri,eventId:r};if(e instanceof Wy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",VE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Ai){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${lk(t)}?${si(a).slice(1)}`}function lk({config:t}){return t.emulator?Ll(t,uk):`https://${t.authDomain}/${ck}`}/**
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
 */const cc="webStorageSupport";class hk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ev,this._completeRedirectFn=LR,this._overrideRedirectResult=xR}async _openPopup(e,n,s,r){var i;rn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Xf(e,n,s,su(),r);return ok(e,o,Bl())}async _openRedirect(e,n,s,r){return await this._originValidation(e),fR(Xf(e,n,s,su(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(rn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await ek(e),s=new FR(e);return n.register("authEvent",r=>(q(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cc,{type:cc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[cc];o!==void 0&&n(!!o),At(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hy()||Fl()||Oa()}}const fk=hk;var Zf="@firebase/auth",ed="0.21.1";/**
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
 */class dk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function pk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gk(t){jt(new Tt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{q(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ky(t)},l=new $C(a,c,u);return wC(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),jt(new Tt("auth-internal",e=>{const n=Si(e.getProvider("auth").getImmediate());return(s=>new dk(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dt(Zf,ed,pk(t)),dt(Zf,ed,"esm2017")}/**
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
 */const mk=5*60,yk=Np("authIdTokenMaxAge")||mk;let td=null;const vk=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>yk)return;const r=n==null?void 0:n.token;td!==r&&(td=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function av(t=Du()){const e=os(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vC(t,{popupRedirectResolver:fk,persistence:[ER,uR,ev]}),s=Np("authTokenSyncURL");if(s){const i=vk(s);rR(n,i,()=>i(n.currentUser)),sR(n,o=>i(o))}const r=Op("auth");return r&&BC(n,`http://${r}`),n}gk("Browser");const wk={apiKey:"AIzaSyC77NYf-Jv3FfkYTMhji3nA2BLGq9hGkUI",authDomain:"lost-and-found-db-3112c.firebaseapp.com",projectId:"lost-and-found-db-3112c",storageBucket:"lost-and-found-db-3112c.appspot.com",messagingSenderId:"725993089020",appId:"1:725993089020:web:56312b8a1d3b083aa8b479",measurementId:"G-DZNJ1GH5QJ"},ql=Vp(wk);fC(ql);const _k=PS(ql),nd=av(ql);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const _s=typeof window<"u";function Ek(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ce=Object.assign;function uc(t,e){const n={};for(const s in e){const r=e[s];n[s]=Ct(r)?r.map(t):t(r)}return n}const kr=()=>{},Ct=Array.isArray,Ik=/\/$/,bk=t=>t.replace(Ik,"");function lc(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Ck(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Tk(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function sd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Sk(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Gs(e.matched[s],n.matched[r])&&cv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Gs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function cv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ak(t[n],e[n]))return!1;return!0}function Ak(t,e){return Ct(t)?rd(t,e):Ct(e)?rd(e,t):t===e}function rd(t,e){return Ct(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Ck(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var ti;(function(t){t.pop="pop",t.push="push"})(ti||(ti={}));var Dr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Dr||(Dr={}));function Rk(t){if(!t)if(_s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),bk(t)}const kk=/^[^#]+#/;function Dk(t,e){return t.replace(kk,"#")+e}function Ok(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Pa=()=>({left:window.pageXOffset,top:window.pageYOffset});function Nk(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Ok(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function id(t,e){return(history.state?history.state.position-e:-1)+t}const iu=new Map;function xk(t,e){iu.set(t,e)}function Pk(t){const e=iu.get(t);return iu.delete(t),e}let Mk=()=>location.protocol+"//"+location.host;function uv(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),sd(c,"")}return sd(n,t)+s+r}function Lk(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const g=uv(t,location),y=n.value,I=e.value;let k=0;if(f){if(n.value=g,e.value=f,o&&o===y){o=null;return}k=I?f.position-I.position:0}else s(g);r.forEach(R=>{R(n.value,y,{delta:k,type:ti.pop,direction:k?k>0?Dr.forward:Dr.back:Dr.unknown})})};function c(){o=n.value}function u(f){r.push(f);const g=()=>{const y=r.indexOf(f);y>-1&&r.splice(y,1)};return i.push(g),g}function l(){const{history:f}=window;f.state&&f.replaceState(ce({},f.state,{scroll:Pa()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function od(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Pa():null}}function Uk(t){const{history:e,location:n}=window,s={value:uv(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Mk()+t+c;try{e[l?"replaceState":"pushState"](u,"",f),r.value=u}catch(g){console.error(g),n[l?"replace":"assign"](f)}}function o(c,u){const l=ce({},e.state,od(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=ce({},r.value,e.state,{forward:c,scroll:Pa()});i(l.current,l,!0);const h=ce({},od(s.value,c,null),{position:l.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Fk(t){t=Rk(t);const e=Uk(t),n=Lk(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ce({location:"",base:t,go:s,createHref:Dk.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Vk(t){return typeof t=="string"||t&&typeof t=="object"}function lv(t){return typeof t=="string"||typeof t=="symbol"}const ln={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},hv=Symbol("");var ad;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ad||(ad={}));function zs(t,e){return ce(new Error,{type:t,[hv]:!0},e)}function Ht(t,e){return t instanceof Error&&hv in t&&(e==null||!!(t.type&e))}const cd="[^/]+?",$k={sensitive:!1,strict:!1,start:!0,end:!0},Bk=/[.+*?^${}()[\]/\\]/g;function jk(t,e){const n=ce({},$k,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const f=u[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(Bk,"\\$&"),g+=40;else if(f.type===1){const{value:y,repeatable:I,optional:k,regexp:R}=f;i.push({name:y,repeatable:I,optional:k});const P=R||cd;if(P!==cd){g+=10;try{new RegExp(`(${P})`)}catch(X){throw new Error(`Invalid custom RegExp for param "${y}" (${P}): `+X.message)}}let U=I?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(U=k&&u.length<2?`(?:/${U})`:"/"+U),k&&(U+="?"),r+=U,g+=20,k&&(g+=-8),I&&(g+=-20),P===".*"&&(g+=-50)}l.push(g)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let f=1;f<l.length;f++){const g=l[f]||"",y=i[f-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(u){let l="",h=!1;for(const f of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const g of f)if(g.type===0)l+=g.value;else if(g.type===1){const{value:y,repeatable:I,optional:k}=g,R=y in u?u[y]:"";if(Ct(R)&&!I)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const P=Ct(R)?R.join("/"):R;if(!P)if(k)f.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);l+=P}}return l||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function qk(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Hk(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=qk(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(ud(s))return 1;if(ud(r))return-1}return r.length-s.length}function ud(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Kk={type:0,value:""},Gk=/[a-zA-Z0-9_]/;function zk(t){if(!t)return[[]];if(t==="/")return[[Kk]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:Gk.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function Wk(t,e,n){const s=jk(zk(t.path),n),r=ce(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Qk(t,e){const n=[],s=new Map;e=fd({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,h,f){const g=!f,y=Yk(l);y.aliasOf=f&&f.record;const I=fd(e,l),k=[y];if("alias"in l){const U=typeof l.alias=="string"?[l.alias]:l.alias;for(const X of U)k.push(ce({},y,{components:f?f.record.components:y.components,path:X,aliasOf:f?f.record:y}))}let R,P;for(const U of k){const{path:X}=U;if(h&&X[0]!=="/"){const ye=h.record.path,Ce=ye[ye.length-1]==="/"?"":"/";U.path=h.record.path+(X&&Ce+X)}if(R=Wk(U,h,I),f?f.alias.push(R):(P=P||R,P!==R&&P.alias.push(R),g&&l.name&&!hd(R)&&o(l.name)),y.children){const ye=y.children;for(let Ce=0;Ce<ye.length;Ce++)i(ye[Ce],R,f&&f.children[Ce])}f=f||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&c(R)}return P?()=>{o(P)}:kr}function o(l){if(lv(l)){const h=s.get(l);h&&(s.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&Hk(l,n[h])>=0&&(l.record.path!==n[h].record.path||!fv(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!hd(l)&&s.set(l.record.name,l)}function u(l,h){let f,g={},y,I;if("name"in l&&l.name){if(f=s.get(l.name),!f)throw zs(1,{location:l});I=f.record.name,g=ce(ld(h.params,f.keys.filter(P=>!P.optional).map(P=>P.name)),l.params&&ld(l.params,f.keys.map(P=>P.name))),y=f.stringify(g)}else if("path"in l)y=l.path,f=n.find(P=>P.re.test(y)),f&&(g=f.parse(y),I=f.record.name);else{if(f=h.name?s.get(h.name):n.find(P=>P.re.test(h.path)),!f)throw zs(1,{location:l,currentLocation:h});I=f.record.name,g=ce({},h.params,l.params),y=f.stringify(g)}const k=[];let R=f;for(;R;)k.unshift(R.record),R=R.parent;return{name:I,path:y,params:g,matched:k,meta:Xk(k)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function ld(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Yk(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Jk(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Jk(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function hd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Xk(t){return t.reduce((e,n)=>ce(e,n.meta),{})}function fd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function fv(t,e){return e.children.some(n=>n===t||fv(t,n))}const dv=/#/g,Zk=/&/g,eD=/\//g,tD=/=/g,nD=/\?/g,pv=/\+/g,sD=/%5B/g,rD=/%5D/g,gv=/%5E/g,iD=/%60/g,mv=/%7B/g,oD=/%7C/g,yv=/%7D/g,aD=/%20/g;function Hl(t){return encodeURI(""+t).replace(oD,"|").replace(sD,"[").replace(rD,"]")}function cD(t){return Hl(t).replace(mv,"{").replace(yv,"}").replace(gv,"^")}function ou(t){return Hl(t).replace(pv,"%2B").replace(aD,"+").replace(dv,"%23").replace(Zk,"%26").replace(iD,"`").replace(mv,"{").replace(yv,"}").replace(gv,"^")}function uD(t){return ou(t).replace(tD,"%3D")}function lD(t){return Hl(t).replace(dv,"%23").replace(nD,"%3F")}function hD(t){return t==null?"":lD(t).replace(eD,"%2F")}function Po(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function fD(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(pv," "),o=i.indexOf("="),a=Po(o<0?i:i.slice(0,o)),c=o<0?null:Po(i.slice(o+1));if(a in e){let u=e[a];Ct(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function dd(t){let e="";for(let n in t){const s=t[n];if(n=uD(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ct(s)?s.map(i=>i&&ou(i)):[s&&ou(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function dD(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ct(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const pD=Symbol(""),pd=Symbol(""),Ma=Symbol(""),Kl=Symbol(""),au=Symbol("");function dr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function fn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(zs(4,{from:n,to:e})):h instanceof Error?a(h):Vk(h)?a(zs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function hc(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(gD(a)){const u=(a.__vccOpts||a)[e];u&&r.push(fn(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=Ek(u)?u.default:u;i.components[o]=l;const f=(l.__vccOpts||l)[e];return f&&fn(f,n,s,i,o)()}))}}return r}function gD(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function gd(t){const e=ft(Ma),n=ft(Kl),s=lt(()=>e.resolve(As(t.to))),r=lt(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const f=h.findIndex(Gs.bind(null,l));if(f>-1)return f;const g=md(c[u-2]);return u>1&&md(l)===g&&h[h.length-1].path!==g?h.findIndex(Gs.bind(null,c[u-2])):f}),i=lt(()=>r.value>-1&&wD(n.params,s.value.params)),o=lt(()=>r.value>-1&&r.value===n.matched.length-1&&cv(n.params,s.value.params));function a(c={}){return vD(c)?e[As(t.replace)?"replace":"push"](As(t.to)).catch(kr):Promise.resolve()}return{route:s,href:lt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const mD=Jd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:gd,setup(t,{slots:e}){const n=Js(gd(t)),{options:s}=ft(Ma),r=lt(()=>({[yd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[yd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:gp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),yD=mD;function vD(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function wD(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ct(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function md(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const yd=(t,e,n)=>t??e??n,_D=Jd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=ft(au),r=lt(()=>t.route||s.value),i=ft(pd,0),o=lt(()=>{let u=As(i);const{matched:l}=r.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=lt(()=>r.value.matched[o.value]);Hi(pd,lt(()=>o.value+1)),Hi(pD,a),Hi(au,r);const c=Kt();return Rs(()=>[c.value,a.value,t.name],([u,l,h],[f,g,y])=>{l&&(l.instances[h]=u,g&&g!==l&&u&&u===f&&(l.leaveGuards.size||(l.leaveGuards=g.leaveGuards),l.updateGuards.size||(l.updateGuards=g.updateGuards))),u&&l&&(!g||!Gs(l,g)||!f)&&(l.enterCallbacks[h]||[]).forEach(I=>I(u))},{flush:"post"}),()=>{const u=r.value,l=t.name,h=a.value,f=h&&h.components[l];if(!f)return vd(n.default,{Component:f,route:u});const g=h.props[l],y=g?g===!0?u.params:typeof g=="function"?g(u):g:null,k=gp(f,ce({},y,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return vd(n.default,{Component:k,route:u})||k}}});function vd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ED=_D;function ID(t){const e=Qk(t.routes,t),n=t.parseQuery||fD,s=t.stringifyQuery||dd,r=t.history,i=dr(),o=dr(),a=dr(),c=uw(ln);let u=ln;_s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=uc.bind(null,_=>""+_),h=uc.bind(null,hD),f=uc.bind(null,Po);function g(_,N){let D,V;return lv(_)?(D=e.getRecordMatcher(_),V=N):V=_,e.addRoute(V,D)}function y(_){const N=e.getRecordMatcher(_);N&&e.removeRoute(N)}function I(){return e.getRoutes().map(_=>_.record)}function k(_){return!!e.getRecordMatcher(_)}function R(_,N){if(N=ce({},N||c.value),typeof _=="string"){const d=lc(n,_,N.path),p=e.resolve({path:d.path},N),m=r.createHref(d.fullPath);return ce(d,p,{params:f(p.params),hash:Po(d.hash),redirectedFrom:void 0,href:m})}let D;if("path"in _)D=ce({},_,{path:lc(n,_.path,N.path).path});else{const d=ce({},_.params);for(const p in d)d[p]==null&&delete d[p];D=ce({},_,{params:h(_.params)}),N.params=h(N.params)}const V=e.resolve(D,N),se=_.hash||"";V.params=l(f(V.params));const we=Tk(s,ce({},_,{hash:cD(se),path:V.path})),Z=r.createHref(we);return ce({fullPath:we,hash:se,query:s===dd?dD(_.query):_.query||{}},V,{redirectedFrom:void 0,href:Z})}function P(_){return typeof _=="string"?lc(n,_,c.value.path):ce({},_)}function U(_,N){if(u!==_)return zs(8,{from:N,to:_})}function X(_){return Fe(_)}function ye(_){return X(ce(P(_),{replace:!0}))}function Ce(_){const N=_.matched[_.matched.length-1];if(N&&N.redirect){const{redirect:D}=N;let V=typeof D=="function"?D(_):D;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=P(V):{path:V},V.params={}),ce({query:_.query,hash:_.hash,params:"path"in V?{}:_.params},V)}}function Fe(_,N){const D=u=R(_),V=c.value,se=_.state,we=_.force,Z=_.replace===!0,d=Ce(D);if(d)return Fe(ce(P(d),{state:typeof d=="object"?ce({},se,d.state):se,force:we,replace:Z}),N||D);const p=D;p.redirectedFrom=N;let m;return!we&&Sk(s,V,D)&&(m=zs(16,{to:p,from:V}),On(V,V,!0,!1)),(m?Promise.resolve(m):Dt(p,V)).catch(v=>Ht(v)?Ht(v,2)?v:mt(v):he(v,p,V)).then(v=>{if(v){if(Ht(v,2))return Fe(ce({replace:Z},P(v.to),{state:typeof v.to=="object"?ce({},se,v.to.state):se,force:we}),N||p)}else v=an(p,V,!0,Z,se);return ut(p,V,v),v})}function gt(_,N){const D=U(_,N);return D?Promise.reject(D):Promise.resolve()}function Dt(_,N){let D;const[V,se,we]=bD(_,N);D=hc(V.reverse(),"beforeRouteLeave",_,N);for(const d of V)d.leaveGuards.forEach(p=>{D.push(fn(p,_,N))});const Z=gt.bind(null,_,N);return D.push(Z),ms(D).then(()=>{D=[];for(const d of i.list())D.push(fn(d,_,N));return D.push(Z),ms(D)}).then(()=>{D=hc(se,"beforeRouteUpdate",_,N);for(const d of se)d.updateGuards.forEach(p=>{D.push(fn(p,_,N))});return D.push(Z),ms(D)}).then(()=>{D=[];for(const d of _.matched)if(d.beforeEnter&&!N.matched.includes(d))if(Ct(d.beforeEnter))for(const p of d.beforeEnter)D.push(fn(p,_,N));else D.push(fn(d.beforeEnter,_,N));return D.push(Z),ms(D)}).then(()=>(_.matched.forEach(d=>d.enterCallbacks={}),D=hc(we,"beforeRouteEnter",_,N),D.push(Z),ms(D))).then(()=>{D=[];for(const d of o.list())D.push(fn(d,_,N));return D.push(Z),ms(D)}).catch(d=>Ht(d,8)?d:Promise.reject(d))}function ut(_,N,D){for(const V of a.list())V(_,N,D)}function an(_,N,D,V,se){const we=U(_,N);if(we)return we;const Z=N===ln,d=_s?history.state:{};D&&(V||Z?r.replace(_.fullPath,ce({scroll:Z&&d&&d.scroll},se)):r.push(_.fullPath,se)),c.value=_,On(_,N,D,Z),mt()}let Ot;function hs(){Ot||(Ot=r.listen((_,N,D)=>{if(!Ri.listening)return;const V=R(_),se=Ce(V);if(se){Fe(ce(se,{replace:!0}),V).catch(kr);return}u=V;const we=c.value;_s&&xk(id(we.fullPath,D.delta),Pa()),Dt(V,we).catch(Z=>Ht(Z,12)?Z:Ht(Z,2)?(Fe(Z.to,V).then(d=>{Ht(d,20)&&!D.delta&&D.type===ti.pop&&r.go(-1,!1)}).catch(kr),Promise.reject()):(D.delta&&r.go(-D.delta,!1),he(Z,V,we))).then(Z=>{Z=Z||an(V,we,!1),Z&&(D.delta&&!Ht(Z,8)?r.go(-D.delta,!1):D.type===ti.pop&&Ht(Z,20)&&r.go(-1,!1)),ut(V,we,Z)}).catch(kr)}))}let Dn=dr(),ar=dr(),Ie;function he(_,N,D){mt(_);const V=ar.list();return V.length?V.forEach(se=>se(_,N,D)):console.error(_),Promise.reject(_)}function ue(){return Ie&&c.value!==ln?Promise.resolve():new Promise((_,N)=>{Dn.add([_,N])})}function mt(_){return Ie||(Ie=!_,hs(),Dn.list().forEach(([N,D])=>_?D(_):N()),Dn.reset()),_}function On(_,N,D,V){const{scrollBehavior:se}=t;if(!_s||!se)return Promise.resolve();const we=!D&&Pk(id(_.fullPath,0))||(V||!D)&&history.state&&history.state.scroll||null;return Hd().then(()=>se(_,N,we)).then(Z=>Z&&Nk(Z)).catch(Z=>he(Z,_,N))}const yt=_=>r.go(_);let Xe;const fs=new Set,Ri={currentRoute:c,listening:!0,addRoute:g,removeRoute:y,hasRoute:k,getRoutes:I,resolve:R,options:t,push:X,replace:ye,go:yt,back:()=>yt(-1),forward:()=>yt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ar.add,isReady:ue,install(_){const N=this;_.component("RouterLink",yD),_.component("RouterView",ED),_.config.globalProperties.$router=N,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>As(c)}),_s&&!Xe&&c.value===ln&&(Xe=!0,X(r.location).catch(se=>{}));const D={};for(const se in ln)D[se]=lt(()=>c.value[se]);_.provide(Ma,N),_.provide(Kl,Js(D)),_.provide(au,c);const V=_.unmount;fs.add(_),_.unmount=function(){fs.delete(_),fs.size<1&&(u=ln,Ot&&Ot(),Ot=null,c.value=ln,Xe=!1,Ie=!1),V()}}};return Ri}function ms(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function bD(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Gs(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Gs(u,c))||r.push(c))}return[n,s,r]}function vO(){return ft(Ma)}function wO(){return ft(Kl)}const vv=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},TD={setup(){const t=vp();ep(()=>{t.dispatch("fetchUser")})}};function SD(t,e,n,s,r,i){const o=Bw("RouterView");return Ur(),oo("body",null,[He(o)])}const AD=vv(TD,[["render",SD]]),CD="modulepreload",RD=function(t){return"/Lost-and-Found/"+t},wd={},ys=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=RD(i),i in wd)return;wd[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let l=r.length-1;l>=0;l--){const h=r[l];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":CD,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},kD="/Lost-and-Found/img/vsu-logo1.png";const DD={setup(){const t=vp(),e=Kt(""),n=Kt(""),s=Kt(""),r=Kt(""),i=Kt(""),o=Kt(""),a=Kt(null),c=()=>{const h=t.dispatch("login",{email:e.value,password:n.value});alert(h)};async function u(){const h=t.dispatch("login",{email:e.value,password:n.value});o.value=await h,setTimeout(()=>{o.value=""},4e3)}async function l(){const h=t.dispatch("register",{email:s.value.toLowerCase(),password:r.value,username:i.value});o.value=await h,setTimeout(()=>{o.value=""},4e3)}return{emailL:e,passwordL:n,emailR:s,passwordR:r,username:i,showAlert:!1,loginMessage:o,animatedDiv:a,login:c,loginUser:u,register:l}},data(){return{name:""}},methods:{closeDiv(){this.$refs.animatedDiv.classList.add("animate-slide-out-left"),this.$refs.animatedDiv.classList.remove("animate-slide-in-left"),setTimeout(()=>{this.loginMessage=""},500)},onInput(){this.name=target.value},displayAlert(){console.log(this.loginMessage)},checkInput(){this.inputValue===""?alert("The input is empty!"):alert("The input is not empty.")}}},ct=t=>(_w("data-v-e40044e4"),t=t(),Ew(),t),OD={class:"body flex flex-col-reverse md:flex-row"},ND={class:"flex items-center"},xD=ct(()=>Q("span",{class:"material-symbols-outlined pr-2"}," error ",-1)),PD={class:"font-medium"},MD={class:"container_one bg-cover bg-right flex bg-[url('/img/vsu2.jpg')] w-full md:w-1/2"},LD={class:"mx-auto flex flex-row justify-center bg-white h-[82vh] md:h-screen rounded-tr-[100px] w-full"},UD={class:"main max-h-screen"},FD=ct(()=>Q("input",{type:"checkbox",id:"chk","aria-hidden":"true"},null,-1)),VD=ct(()=>Q("h1",{class:"text-black my-2 font-bold sm:mt-28 text-2xl border-l-8 pl-2 border-green-600"},[Q("span",{class:"text-green-600"},"FoundIt! "),Wo(" User Portal "),Q("p",{class:"text-sm text-gray-500"},"Begin your session now")],-1)),$D={class:"logins"},BD=ct(()=>Q("label",{class:"lab",for:"chk","aria-hidden":"true"},"Log in",-1)),jD={class:"inputbox"},qD=ct(()=>Q("span",null,"Email Address",-1)),HD=ct(()=>Q("i",null,null,-1)),KD={class:"inputbox"},GD=ct(()=>Q("span",null,"Password",-1)),zD=ct(()=>Q("i",null,null,-1)),WD=ct(()=>Q("div",{class:"arrow-wrapper"},[Q("div",{class:"arrow"})],-1)),QD={class:"register"},YD=ct(()=>Q("span",{class:"lab self-center text-dec",id:"border_text"},"or",-1)),JD=ct(()=>Q("label",{class:"lab",for:"chk","aria-hidden":"true"},"Register",-1)),XD=ct(()=>Q("button",{type:"submit",class:"login bg-green-700 h-9 mt-4 text-white"},[Wo(" Register "),Q("div",{class:"arrow-wrapper"},[Q("div",{class:"arrow"})])],-1)),ZD=ct(()=>Q("div",{class:"container_two bg-white w-full md:w-1/2 h-[25vh] md:h-screen"},[Q("div",{class:"flex flex-col items-center pt-7 md:pt-0 justify-start md:justify-center h-screen bg-contain md:bg-cover bg-[url('/img/vsu.jpg')] rounded-bl-[100px]"},[Q("img",{src:kD,alt:"",class:"max-h-14 md:max-h-28"}),Q("h1",{class:"text-white font-medium text-base md:text-3xl font-serif mt-1 md:mt-5"}," Lost and Found Website ")])],-1));function eO(t,e,n,s,r,i){return Ur(),oo("div",OD,[s.loginMessage!=""?(Ur(),oo("div",{key:0,ref:"animatedDiv",class:Mo([{"bg-green-50 text-green-800":s.loginMessage=="Login Successful"},"flex p-4 z-50 fixed top-1 w-80 text-sm items-center justify-between text-red-800 rounded-lg bg-red-50 transition-opacity duration-1000 ease-out animate-slide-in-left"])},[Q("div",ND,[xD,Q("span",PD,Cv(s.loginMessage),1)]),Q("button",{type:"button",id:"closeBtn",onClick:e[0]||(e[0]=(...o)=>i.closeDiv&&i.closeDiv(...o)),class:"text-xl font-bold"}," × ")],2)):h_("",!0),Q("div",MD,[Q("div",LD,[Q("section",null,[Q("div",UD,[FD,VD,Q("div",$D,[Q("form",{class:"form mb-[50px]",onSubmit:e[4]||(e[4]=Th((...o)=>s.loginUser&&s.loginUser(...o),["prevent"]))},[BD,Q("div",jD,[ur(Q("input",{type:"email","onUpdate:modelValue":e[1]||(e[1]=o=>s.emailL=o),class:"",required:""},null,512),[[hr,s.emailL]]),qD,HD]),Q("div",KD,[ur(Q("input",{type:"password","onUpdate:modelValue":e[2]||(e[2]=o=>s.passwordL=o),class:"",required:""},null,512),[[hr,s.passwordL]]),GD,zD]),Q("button",{type:"submit",onClick:e[3]||(e[3]=(...o)=>i.displayAlert&&i.displayAlert(...o)),class:"login bg-green-700 h-9 mt-4 text-white"},[Wo(" Login "),WD])],32)]),Q("div",QD,[YD,Q("form",{class:"form",onSubmit:e[8]||(e[8]=Th((...o)=>s.register&&s.register(...o),["prevent"]))},[JD,ur(Q("input",{class:"input",type:"text","onUpdate:modelValue":e[5]||(e[5]=o=>s.username=o),name:"txt",placeholder:"Username",required:""},null,512),[[hr,s.username]]),ur(Q("input",{class:"input",type:"email","onUpdate:modelValue":e[6]||(e[6]=o=>s.emailR=o),name:"email",placeholder:"Email",required:""},null,512),[[hr,s.emailR]]),ur(Q("input",{class:"input",type:"text","onUpdate:modelValue":e[7]||(e[7]=o=>s.passwordR=o),name:"pswd",placeholder:"Password",required:""},null,512),[[hr,s.passwordR]]),XD],32)])])])])]),ZD])}const tO=vv(DD,[["render",eO],["__scopeId","data-v-e40044e4"]]),nO={__name:"HomeView",setup(t){return(e,n)=>(Ur(),oo("main",null,[He(tO)]))}},dn=ID({history:Fk("/Lost-and-Found/"),routes:[{path:"/",name:"home",component:nO},{path:"/posts",name:"posts",component:()=>ys(()=>import("./PostsView-b0956d3f.js"),["assets/PostsView-b0956d3f.js","assets/index.esm2017-654ca940.js","assets/index-43a7aeec.js","assets/PostsView-e515417d.css"]),meta:{requiresAuth:!0}},{path:"/conversations",name:"conversations",component:()=>ys(()=>import("./ConversationView-e5ae74e2.js"),["assets/ConversationView-e5ae74e2.js","assets/index-43a7aeec.js"]),meta:{requiresAuth:!0}},{path:"/profile",name:"profile",component:()=>ys(()=>import("./ProfileView-60460dba.js"),["assets/ProfileView-60460dba.js","assets/index-43a7aeec.js"]),meta:{requiresAuth:!0}},{path:"/conversations/:convo_ID",props:!0,component:()=>ys(()=>import("./ConversationView-e5ae74e2.js"),["assets/ConversationView-e5ae74e2.js","assets/index-43a7aeec.js"]),meta:{requiresAuth:!0}},{path:"/postEdit",name:"postEdit",component:()=>ys(()=>import("./PostEditView-518346fa.js"),["assets/PostEditView-518346fa.js","assets/index-43a7aeec.js"]),meta:{requiresAuth:!0}},{path:"/create-report",name:"CreateReport",component:()=>ys(()=>import("./CreateReport-69dd9401.js"),["assets/CreateReport-69dd9401.js","assets/index.esm2017-654ca940.js","assets/CreateReport-04210f72.css"]),meta:{requiresAuth:!0}}],scrollBehavior(t,e,n){return n||{x:0,y:0}}});dn.beforeEach((t,e,n)=>{if(t.path==="/"&&nd.currentUser){n("/posts");return}t.matched.some(s=>s.meta.requiresAuth)&&!nd.currentUser&&n("/"),n()});const La=G_(AD),Pn=av(),sO=EE({state:{user:null,post_id:null},mutations:{SET_USER(t,e){t.user=e},CLEAR_USER(t,e){t.user=null},SEND_POST_ID(t,e){t.post_id=e}},actions:{updateData({commit:t},e){t("SEND_POST_ID",e)},async login({commit:t},e){const{email:n,password:s}=e;let r;try{await tR(Pn,n,s),r="Login Successful"}catch(i){switch(i.code){case"auth/user-not-found":r="User not found";break;case"auth/wrong-password":r="Wrong password";break;default:r="Something went wrong",console.error(i)}return r}t("SET_USER",Pn.currentUser),dn.push({name:"posts"})},async logout({commit:t}){await iR(Pn),t("CLEAR_USER"),dn.push({name:"home"})},async register({commit:t},e){const{email:n,password:s,username:r,phone_number:i}=e;let o;try{const a=await eR(Pn,n,s),c=Pn.currentUser;QS(TS(_k,"users"),{uid:c.uid,email:n,username:r,password:s}),o="Account registration successful"}catch(a){switch(a.code){case"auth/email-already-in-use":o="Email already in use";break;case"auth/invalid-email":break;case"auth/operation-not-allowed":o="Operation not allowed";break;case"auth/weak-password":o="Weak password";break;default:o="Something went wrong",console.error(a)}return o}t("SET_USER",Pn.currentUser),dn.push({path:"/posts"})},fetchUser({commit:t}){Pn.onAuthStateChanged(async e=>{e===null?t("CLEAR_USER"):(t("SET_USER",e),dn.isReady()&&dn.currentRoute.value.path==="/"&&dn.push("/posts"))})}}});La.use(rE());La.use(dn);La.use(sO);La.mount("#app");export{SS as A,dO as B,vO as C,Th as D,oO as E,zt as F,gO as G,iO as H,Ee as I,os as J,pO as K,RE as L,Du as M,jt as N,fO as O,Tt as P,QS as Q,dt as R,OE as S,TS as T,ri as U,kt as V,aO as W,vv as _,yO as a,dn as b,Bw as c,Ur as d,oo as e,Q as f,av as g,hO as h,He as i,ur as j,rO as k,h_ as l,_k as m,Mo as n,xw as o,lO as p,Re as q,Kt as r,uO as s,Cv as t,vp as u,hr as v,Iw as w,Wo as x,mO as y,wO as z};
