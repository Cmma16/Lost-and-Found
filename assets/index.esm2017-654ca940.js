import{I as $,J as ve,L as xe,M as Ae,N as Oe,P as Ie,R as ne,S as qe,U as Be,V as Le,W as Me}from"./index-0729dbfe.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le="firebasestorage.googleapis.com",ce="storageBucket",De=2*60*1e3,Fe=10*60*1e3,Ne=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h extends Le{constructor(e,n,s=0){super(W(e),`Firebase Storage: ${n} (${W(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return W(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function W(t){return"storage/"+t}function J(){const t="An unknown error occurred, please check the error payload for server response.";return new h("unknown",t)}function ze(t){return new h("object-not-found","Object '"+t+"' does not exist.")}function He(t){return new h("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function $e(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h("unauthenticated",t)}function je(){return new h("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function Xe(t){return new h("unauthorized","User does not have permission to access '"+t+"'.")}function he(){return new h("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function de(){return new h("canceled","User canceled the upload/download.")}function Ge(t){return new h("invalid-url","Invalid URL '"+t+"'.")}function We(t){return new h("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function Ke(){return new h("no-default-bucket","No default bucket found. Did you set the '"+ce+"' property when initializing the app?")}function fe(){return new h("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function Ve(){return new h("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function Ye(){return new h("no-download-url","The given file does not have any download URLs.")}function Je(t){return new h("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Y(t){return new h("invalid-argument",t)}function _e(){return new h("app-deleted","The Firebase app was deleted.")}function Ze(t){return new h("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function M(t,e){return new h("invalid-format","String does not match format '"+t+"': "+e)}function L(t){throw new h("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=k.makeFromUrl(e,n)}catch{return new k(e,"")}if(s.path==="")return s;throw We(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(m){m.path.charAt(m.path.length-1)==="/"&&(m.path_=m.path_.slice(0,-1))}const o="(/(.*))?$",u=new RegExp("^gs://"+r+o,"i"),a={bucket:1,path:3};function l(m){m.path_=decodeURIComponent(m.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",p=new RegExp(`^https?://${d}/${c}/b/${r}/o${_}`,"i"),g={bucket:1,path:3},y=n===le?"(?:storage.googleapis.com|storage.cloud.google.com)":n,f="([^?#]*)",S=new RegExp(`^https?://${y}/${r}/${f}`,"i"),b=[{regex:u,indices:a,postModify:i},{regex:p,indices:g,postModify:l},{regex:S,indices:{bucket:1,path:2},postModify:l}];for(let m=0;m<b.length;m++){const x=b[m],A=x.regex.exec(e);if(A){const X=A[x.indices.bucket];let B=A[x.indices.path];B||(B=""),s=new k(X,B),x.postModify(s);break}}if(s==null)throw Ge(e);return s}}class Qe{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,e,n){let s=1,r=null,i=null,o=!1,u=0;function a(){return u===2}let l=!1;function c(...f){l||(l=!0,e.apply(null,f))}function d(f){r=setTimeout(()=>{r=null,t(p,a())},f)}function _(){i&&clearTimeout(i)}function p(f,...S){if(l){_();return}if(f){_(),c.call(null,f,...S);return}if(a()||o){_(),c.call(null,f,...S);return}s<64&&(s*=2);let b;u===1?(u=2,b=0):b=(s+Math.random())*1e3,d(b)}let g=!1;function y(f){g||(g=!0,_(),!l&&(r!==null?(f||(u=2),clearTimeout(r),d(0)):f||(u=1)))}return d(0),i=setTimeout(()=>{o=!0,y(!0)},n),y}function tt(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return t!==void 0}function st(t){return typeof t=="function"}function rt(t){return typeof t=="object"&&!Array.isArray(t)}function j(t){return typeof t=="string"||t instanceof String}function se(t){return Z()&&t instanceof Blob}function Z(){return typeof Blob<"u"&&!Me()}function re(t,e,n,s){if(s<e)throw Y(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Y(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function pe(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(P||(P={}));/**
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
 */function ge(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n,s,r,i,o,u,a,l,c,d,_=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=u,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=d,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new N(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=u=>{const a=u.loaded,l=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const u=i.getErrorCode()===P.NO_ERROR,a=i.getStatus();if(!u||ge(a,this.additionalRetryCodes_)&&this.retry){const c=i.getErrorCode()===P.ABORT;s(!1,new N(!1,null,c));return}const l=this.successCodes_.indexOf(a)!==-1;s(!0,new N(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,u=r.connection;if(r.wasSuccessCode)try{const a=this.callback_(u,u.getResponse());nt(a)?i(a):i()}catch(a){o(a)}else if(u!==null){const a=J();a.serverResponse=u.getErrorText(),this.errorCallback_?o(this.errorCallback_(u,a)):o(a)}else if(r.canceled){const a=this.appDelete_?_e():de();o(a)}else{const a=he();o(a)}};this.canceled_?n(!1,new N(!1,null,!0)):this.backoffId_=et(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&tt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class N{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function ot(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function at(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ut(t,e){e&&(t["X-Firebase-GMPID"]=e)}function lt(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ct(t,e,n,s,r,i,o=!0){const u=pe(t.urlParams),a=t.url+u,l=Object.assign({},t.headers);return ut(l,e),ot(l,n),at(l,i),lt(l,s),new it(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function dt(...t){const e=ht();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Z())return new Blob(t);throw new h("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function ft(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function _t(t){if(typeof atob>"u")throw Je("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class K{constructor(e,n){this.data=e,this.contentType=n||null}}function pt(t,e){switch(t){case T.RAW:return new K(me(e));case T.BASE64:case T.BASE64URL:return new K(be(t,e));case T.DATA_URL:return new K(mt(e),bt(e))}throw J()}function me(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function gt(t){let e;try{e=decodeURIComponent(t)}catch{throw M(T.DATA_URL,"Malformed data URL.")}return me(e)}function be(t,e){switch(t){case T.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw M(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case T.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw M(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=_t(e)}catch(r){throw r.message.includes("polyfill")?r:M(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class we{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw M(T.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=wt(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function mt(t){const e=new we(t);return e.base64?be(T.BASE64,e.rest):gt(e.rest)}function bt(t){return new we(t).contentType}function wt(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e,n){let s=0,r="";se(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(se(this.data_)){const s=this.data_,r=ft(s,e,n);return r===null?null:new E(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new E(s,!0)}}static getBlob(...e){if(Z()){const n=e.map(s=>s instanceof E?s.data_:s);return new E(dt.apply(null,n))}else{const n=e.map(o=>j(o)?pt(T.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let u=0;u<o.length;u++)r[i++]=o[u]}),new E(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(t){let e;try{e=JSON.parse(t)}catch{return null}return rt(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function kt(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function ke(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,e){return e}class w{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||yt}}let z=null;function Tt(t){return!j(t)||t.length<2?t:ke(t)}function ye(){if(z)return z;const t=[];t.push(new w("bucket")),t.push(new w("generation")),t.push(new w("metageneration")),t.push(new w("name","fullPath",!0));function e(i,o){return Tt(o)}const n=new w("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new w("size");return r.xform=s,t.push(r),t.push(new w("timeCreated")),t.push(new w("updated")),t.push(new w("md5Hash",null,!0)),t.push(new w("cacheControl",null,!0)),t.push(new w("contentDisposition",null,!0)),t.push(new w("contentEncoding",null,!0)),t.push(new w("contentLanguage",null,!0)),t.push(new w("contentType",null,!0)),t.push(new w("metadata","customMetadata",!0)),z=t,z}function St(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new k(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Ut(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return St(s,t),s}function Te(t,e,n){const s=Re(e);return s===null?null:Ut(t,s,n)}function Ct(t,e,n,s){const r=Re(e);if(r===null||!j(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const c=t.bucket,d=t.fullPath,_="/b/"+o(c)+"/o/"+o(d),p=D(_,n,s),g=pe({alt:"media",token:l});return p+g})[0]}function Se(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class q{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t){if(!t)throw J()}function Q(t,e){function n(s,r){const i=Te(t,r,e);return C(i!==null),i}return n}function Et(t,e){function n(s,r){const i=Te(t,r,e);return C(i!==null),Ct(i,r,t.host,t._protocol)}return n}function F(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=je():r=$e():n.getStatus()===402?r=He(t.bucket):n.getStatus()===403?r=Xe(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function Ue(t){const e=F(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=ze(t.path)),i.serverResponse=r.serverResponse,i}return n}function Pt(t,e,n){const s=e.fullServerUrl(),r=D(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,u=new q(r,i,Q(t,n),o);return u.errorHandler=Ue(e),u}function vt(t,e,n){const s=e.fullServerUrl(),r=D(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,u=new q(r,i,Et(t,n),o);return u.errorHandler=Ue(e),u}function xt(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Ce(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=xt(null,e)),s}function At(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function u(){let b="";for(let m=0;m<2;m++)b=b+Math.random().toString().slice(2);return b}const a=u();o["Content-Type"]="multipart/related; boundary="+a;const l=Ce(e,s,r),c=Se(l,n),d="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+a+`\r
Content-Type: `+l.contentType+`\r
\r
`,_=`\r
--`+a+"--",p=E.getBlob(d,s,_);if(p===null)throw fe();const g={name:l.fullPath},y=D(i,t.host,t._protocol),f="POST",S=t.maxUploadRetryTime,U=new q(y,f,Q(t,n),S);return U.urlParams=g,U.headers=o,U.body=p.uploadData(),U.errorHandler=F(e),U}class H{constructor(e,n,s,r){this.current=e,this.total=n,this.finalized=!!s,this.metadata=r||null}}function ee(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{C(!1)}return C(!!n&&(e||["active"]).indexOf(n)!==-1),n}function Ot(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o=Ce(e,s,r),u={name:o.fullPath},a=D(i,t.host,t._protocol),l="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},d=Se(o,n),_=t.maxUploadRetryTime;function p(y){ee(y);let f;try{f=y.getResponseHeader("X-Goog-Upload-URL")}catch{C(!1)}return C(j(f)),f}const g=new q(a,l,p,_);return g.urlParams=u,g.headers=c,g.body=d,g.errorHandler=F(e),g}function It(t,e,n,s){const r={"X-Goog-Upload-Command":"query"};function i(l){const c=ee(l,["active","final"]);let d=null;try{d=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{C(!1)}d||C(!1);const _=Number(d);return C(!isNaN(_)),new H(_,s.size(),c==="final")}const o="POST",u=t.maxUploadRetryTime,a=new q(n,o,i,u);return a.headers=r,a.errorHandler=F(e),a}const ie=256*1024;function qt(t,e,n,s,r,i,o,u){const a=new H(0,0);if(o?(a.current=o.current,a.total=o.total):(a.current=0,a.total=s.size()),s.size()!==a.total)throw Ve();const l=a.total-a.current;let c=l;r>0&&(c=Math.min(c,r));const d=a.current,_=d+c;let p="";c===0?p="finalize":l===c?p="upload, finalize":p="upload";const g={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${a.current}`},y=s.slice(d,_);if(y===null)throw fe();function f(m,x){const A=ee(m,["active","final"]),X=a.current+c,B=s.size();let G;return A==="final"?G=Q(e,i)(m,x):G=null,new H(X,B,A==="final",G)}const S="POST",U=e.maxUploadRetryTime,b=new q(n,S,f,U);return b.headers=g,b.body=y.uploadData(),b.progressCallback=u||null,b.errorHandler=F(t),b}const R={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function V(t){switch(t){case"running":case"pausing":case"canceling":return R.RUNNING;case"paused":return R.PAUSED;case"success":return R.SUCCESS;case"canceled":return R.CANCELED;case"error":return R.ERROR;default:return R.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,n,s){if(st(e)||n!=null||s!=null)this.next=e,this.error=n??void 0,this.complete=s??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class Lt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=P.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=P.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=P.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw L("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw L("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw L("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw L("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw L("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Mt extends Lt{initXhr(){this.xhr_.responseType="text"}}function I(){return new Mt}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=ye(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals("canceled"))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(ge(r.status,[]))if(i)r=he();else{this.sleepTime=Math.max(this.sleepTime*2,Ne),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals("canceled")?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=Ot(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,I,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const r=It(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,I,n,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=ie*this._chunkMultiplier,n=new H(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=qt(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(a){this._error=a,this._transition("error");return}const u=this._ref.storage._makeRequest(o,I,r,i,!1);this._request=u,u.getPromise().then(a=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(a.current),a.finalized?(this._metadata=a.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){ie*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=Pt(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,I,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=At(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,I,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=de(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=V(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,r){const i=new Bt(n||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(V(this._state)){case R.SUCCESS:O(this._resolve.bind(null,this.snapshot))();break;case R.CANCELED:case R.ERROR:const n=this._reject;O(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(V(this._state)){case R.RUNNING:case R.PAUSED:e.next&&O(e.next.bind(e,this.snapshot))();break;case R.SUCCESS:e.complete&&O(e.complete.bind(e))();break;case R.CANCELED:case R.ERROR:e.error&&O(e.error.bind(e,this._error))();break;default:e.error&&O(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class v{constructor(e,n){this._service=e,n instanceof k?this._location=n:this._location=k.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new v(e,n)}get root(){const e=new k(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ke(this._location.path)}get storage(){return this._service}get parent(){const e=Rt(this._location.path);if(e===null)return null;const n=new k(this._location.bucket,e);return new v(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Ze(e)}}function Ft(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Dt(t,new E(e),n)}function Nt(t){t._throwIfRoot("getDownloadURL");const e=vt(t.storage,t._location,ye());return t.storage.makeRequestWithTokens(e,I).then(n=>{if(n===null)throw Ye();return n})}function zt(t,e){const n=kt(t._location.path,e),s=new k(t._location.bucket,n);return new v(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t){return/^[A-Za-z]+:\/\//.test(t)}function $t(t,e){return new v(t,e)}function Ee(t,e){if(t instanceof te){const n=t;if(n._bucket==null)throw Ke();const s=new v(n,n._bucket);return e!=null?Ee(s,e):s}else return e!==void 0?zt(t,e):t}function jt(t,e){if(e&&Ht(e)){if(t instanceof te)return $t(t,e);throw Y("To use ref(service, url), the first argument must be a Storage instance.")}else return Ee(t,e)}function oe(t,e){const n=e==null?void 0:e[ce];return n==null?null:k.makeFromBucketSpec(n,t)}function Xt(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:qe(r,t.app.options.projectId))}class te{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=le,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=De,this._maxUploadRetryTime=Fe,this._requests=new Set,r!=null?this._bucket=k.makeFromBucketSpec(r,this._host):this._bucket=oe(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=k.makeFromBucketSpec(this._url,e):this._bucket=oe(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){re("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){re("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new v(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new Qe(_e());{const o=ct(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const ae="@firebase/storage",ue="0.10.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="storage";function Yt(t,e,n){return t=$(t),Ft(t,e,n)}function Jt(t){return t=$(t),Nt(t)}function Zt(t,e){return t=$(t),jt(t,e)}function Qt(t=Ae(),e){t=$(t);const s=ve(t,Pe).getImmediate({identifier:e}),r=xe("storage");return r&&Gt(s,...r),s}function Gt(t,e,n,s={}){Xt(t,e,n,s)}function Wt(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new te(n,s,r,e,Be)}function Kt(){Oe(new Ie(Pe,Wt,"PUBLIC").setMultipleInstances(!0)),ne(ae,ue,""),ne(ae,ue,"esm2017")}Kt();export{Jt as a,Qt as g,Zt as r,Yt as u};
