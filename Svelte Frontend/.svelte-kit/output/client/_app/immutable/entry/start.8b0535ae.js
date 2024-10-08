import{y as qe,W as se}from"../chunks/index.96ff6eb1.js";import{S as Ke,a as ze,I as q,g as Fe,f as He,b as me,d as ce,s as H,i as ye,e as Q,h as J,P as Me,j as et}from"../chunks/singletons.fa7a9878.js";function tt(n,o){return n==="/"||o==="ignore"?n:o==="never"?n.endsWith("/")?n.slice(0,-1):n:o==="always"&&!n.endsWith("/")?n+"/":n}function nt(n){return n.split("%25").map(decodeURI).join("%25")}function at(n){for(const o in n)n[o]=decodeURIComponent(n[o]);return n}const rt=["href","pathname","search","searchParams","toString","toJSON"];function ot(n,o){const l=new URL(n);for(const c of rt){let f=l[c];Object.defineProperty(l,c,{get(){return o(),f},enumerable:!0,configurable:!0})}return it(l),l}function it(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const st="/__data.json";function ct(n){return n.replace(/\/$/,"")+st}function Be(n){try{return JSON.parse(sessionStorage[n])}catch{}}function Ve(n,o){const l=JSON.stringify(o);try{sessionStorage[n]=l}catch{}}function lt(...n){let o=5381;for(const l of n)if(typeof l=="string"){let c=l.length;for(;c;)o=o*33^l.charCodeAt(--c)}else if(ArrayBuffer.isView(l)){const c=new Uint8Array(l.buffer,l.byteOffset,l.byteLength);let f=c.length;for(;f;)o=o*33^c[--f]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}const le=window.fetch;window.fetch=(n,o)=>((n instanceof Request?n.method:(o==null?void 0:o.method)||"GET")!=="GET"&&te.delete(ve(n)),le(n,o));const te=new Map;function ft(n,o){const l=ve(n,o),c=document.querySelector(l);if(c!=null&&c.textContent){const{body:f,...d}=JSON.parse(c.textContent),R=c.getAttribute("data-ttl");return R&&te.set(l,{body:f,init:d,ttl:1e3*Number(R)}),Promise.resolve(new Response(f,d))}return le(n,o)}function ut(n,o,l){if(te.size>0){const c=ve(n,l),f=te.get(c);if(f){if(performance.now()<f.ttl&&["default","force-cache","only-if-cached",void 0].includes(l==null?void 0:l.cache))return new Response(f.body,f.init);te.delete(c)}}return le(o,l)}function ve(n,o){let c=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;if(o!=null&&o.headers||o!=null&&o.body){const f=[];o.headers&&f.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&f.push(o.body),c+=`[data-hash="${lt(...f)}"]`}return c}const dt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function pt(n){const o=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${gt(n).map(c=>{const f=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);if(f)return o.push({name:f[1],matcher:f[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(c);if(d)return o.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!c)return;const R=c.split(/\[(.+?)\](?!\])/);return"/"+R.map((_,m)=>{if(m%2){if(_.startsWith("x+"))return we(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return we(String.fromCharCode(..._.slice(2).split("-").map(O=>parseInt(O,16))));const g=dt.exec(_);if(!g)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,T,P,E,A]=g;return o.push({name:E,matcher:A,optional:!!T,rest:!!P,chained:P?m===1&&R[0]==="":!1}),P?"(.*?)":T?"([^/]*)?":"([^/]+?)"}return we(_)}).join("")}).join("")}/?$`),params:o}}function ht(n){return!/^\([^)]+\)$/.test(n)}function gt(n){return n.slice(1).split("/").filter(ht)}function mt(n,o,l){const c={},f=n.slice(1);let d=0;for(let R=0;R<o.length;R+=1){const u=o[R],_=f[R-d];if(u.chained&&u.rest&&d){c[u.name]=f.slice(R-d,R+1).filter(m=>m).join("/"),d=0;continue}if(_===void 0){u.rest&&(c[u.name]="");continue}if(!u.matcher||l[u.matcher](_)){c[u.name]=_;const m=o[R+1],g=f[R+1];m&&!m.rest&&m.optional&&g&&(d=0);continue}if(u.optional&&u.chained){d++;continue}return}if(!d)return c}function we(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function yt({nodes:n,server_loads:o,dictionary:l,matchers:c}){const f=new Set(o);return Object.entries(l).map(([u,[_,m,g]])=>{const{pattern:T,params:P}=pt(u),E={id:u,exec:A=>{const O=T.exec(A);if(O)return mt(O,P,c)},errors:[1,...g||[]].map(A=>n[A]),layouts:[0,...m||[]].map(R),leaf:d(_)};return E.errors.length=E.layouts.length=Math.max(E.errors.length,E.layouts.length),E});function d(u){const _=u<0;return _&&(u=~u),[_,n[u]]}function R(u){return u===void 0?u:[f.has(u),n[u]]}}let ee=class{constructor(o,l){this.status=o,typeof l=="string"?this.body={message:l}:l?this.body=l:this.body={message:`Error: ${o}`}}toString(){return JSON.stringify(this.body)}},Ge=class{constructor(o,l){this.status=o,this.location=l}};async function wt(n){var o;for(const l in n)if(typeof((o=n[l])==null?void 0:o.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([c,f])=>[c,await f])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const _t=-1,bt=-2,vt=-3,Et=-4,St=-5,kt=-6;function Rt(n,o){if(typeof n=="number")return f(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const l=n,c=Array(l.length);function f(d,R=!1){if(d===_t)return;if(d===vt)return NaN;if(d===Et)return 1/0;if(d===St)return-1/0;if(d===kt)return-0;if(R)throw new Error("Invalid input");if(d in c)return c[d];const u=l[d];if(!u||typeof u!="object")c[d]=u;else if(Array.isArray(u))if(typeof u[0]=="string"){const _=u[0],m=o==null?void 0:o[_];if(m)return c[d]=m(f(u[1]));switch(_){case"Date":c[d]=new Date(u[1]);break;case"Set":const g=new Set;c[d]=g;for(let E=1;E<u.length;E+=1)g.add(f(u[E]));break;case"Map":const T=new Map;c[d]=T;for(let E=1;E<u.length;E+=2)T.set(f(u[E]),f(u[E+1]));break;case"RegExp":c[d]=new RegExp(u[1],u[2]);break;case"Object":c[d]=Object(u[1]);break;case"BigInt":c[d]=BigInt(u[1]);break;case"null":const P=Object.create(null);c[d]=P;for(let E=1;E<u.length;E+=2)P[u[E]]=f(u[E+1]);break;default:throw new Error(`Unknown type ${_}`)}}else{const _=new Array(u.length);c[d]=_;for(let m=0;m<u.length;m+=1){const g=u[m];g!==bt&&(_[m]=f(g))}}else{const _={};c[d]=_;for(const m in u){const g=u[m];_[m]=f(g)}}return c[d]}return f(0)}function Ee(n){const o=new Set(n);function l(c,f){if(c)for(const d in c){if(d[0]==="_"||o.has(d))continue;const R=It(d,f==null?void 0:f.slice(f.lastIndexOf(".")))??`valid exports are ${n.join(", ")}, or anything with a '_' prefix`;throw new Error(`Invalid export '${d}'${f?` in ${f}`:""} (${R})`)}}return l}function It(n,o=".js"){let l=[];if(We.includes(n)&&l.push(`+page${o}`),Ye.includes(n)&&l.push(`+page.server${o}`),Xe.includes(n)&&l.push(`+server${o}`),l.length>0)return`'${n}' is a valid export in ${l.join(" or ")}`}const We=["load","prerender","csr","ssr","trailingSlash","config"],Ye=["load","prerender","csr","ssr","actions","trailingSlash","config"],Xe=["GET","POST","PATCH","PUT","DELETE","OPTIONS","prerender","trailingSlash","config"];Ee(We);Ee(Ye);Ee(Xe);function Lt(n){return n.filter(o=>o!=null)}const K=Be(Ke)??{},Z=Be(ze)??{};function _e(n){K[n]=Q()}function Ot(n,o){var Ne;const l=yt(n),c=n.nodes[0],f=n.nodes[1];c(),f();const d=document.documentElement,R=[],u=[];let _=null;const m={before_navigate:[],after_navigate:[]};let g={branch:[],error:null,url:null},T=!1,P=!1,E=!0,A=!1,O=!1,B=!1,M=!1,F,j=(Ne=history.state)==null?void 0:Ne[q];j||(j=Date.now(),history.replaceState({...history.state,[q]:j},"",location.href));const fe=K[j];fe&&(history.scrollRestoration="manual",scrollTo(fe.x,fe.y));let V,Se,ne;async function ke(){ne=ne||Promise.resolve(),await ne,ne=null;const t=new URL(location.href),e=Y(t,!0);_=null,await Pe(e,t,[])}function Re(t){u.some(e=>e==null?void 0:e.snapshot)&&(Z[t]=u.map(e=>{var r;return(r=e==null?void 0:e.snapshot)==null?void 0:r.capture()}))}function Ie(t){var e;(e=Z[t])==null||e.forEach((r,a)=>{var s,i;(i=(s=u[a])==null?void 0:s.snapshot)==null||i.restore(r)})}function Le(){_e(j),Ve(Ke,K),Re(j),Ve(ze,Z)}async function ue(t,{noScroll:e=!1,replaceState:r=!1,keepFocus:a=!1,state:s={},invalidateAll:i=!1},h,p){return typeof t=="string"&&(t=new URL(t,Fe(document))),ie({url:t,scroll:e?Q():null,keepfocus:a,redirect_chain:h,details:{state:s,replaceState:r},nav_token:p,accepted:()=>{i&&(M=!0)},blocked:()=>{},type:"goto"})}async function Oe(t){return _={id:t.id,promise:Ue(t).then(e=>(e.type==="loaded"&&e.state.error&&(_=null),e))},_.promise}async function ae(...t){const r=l.filter(a=>t.some(s=>a.exec(s))).map(a=>Promise.all([...a.layouts,a.leaf].map(s=>s==null?void 0:s[1]())));await Promise.all(r)}async function Pe(t,e,r,a,s,i={},h){var y,w,I;Se=i;let p=t&&await Ue(t);if(!p){if(ye(e,J))return await z(e);p=await Te(e,{id:null},await X(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(t==null?void 0:t.url)||e,Se!==i)return!1;if(p.type==="redirect")if(r.length>10||r.includes(e.pathname))p=await re({status:500,error:await X(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return ue(new URL(p.location,e).href,{},[...r,e.pathname],i),!1;else((y=p.props.page)==null?void 0:y.status)>=400&&await H.updated.check()&&await z(e);if(R.length=0,M=!1,A=!0,a&&(_e(a),Re(a)),(w=p.props.page)!=null&&w.url&&p.props.page.url.pathname!==e.pathname&&(e.pathname=(I=p.props.page)==null?void 0:I.url.pathname),s&&s.details){const{details:v}=s,L=v.replaceState?0:1;if(v.state[q]=j+=L,history[v.replaceState?"replaceState":"pushState"](v.state,"",e),!v.replaceState){let k=j+1;for(;Z[k]||K[k];)delete Z[k],delete K[k],k+=1}}if(_=null,P?(g=p.state,p.props.page&&(p.props.page.url=e),F.$set(p.props)):Ae(p),s){const{scroll:v,keepfocus:L}=s,{activeElement:k}=document;if(await se(),E){const $=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));v?scrollTo(v.x,v.y):$?$.scrollIntoView():scrollTo(0,0)}const b=document.activeElement!==k&&document.activeElement!==document.body;!L&&!b&&await be()}else await se();E=!0,p.props.page&&(V=p.props.page),h&&h(),A=!1}function Ae(t){var a;g=t.state;const e=document.querySelector("style[data-sveltekit]");e&&e.remove(),V=t.props.page,F=new n.root({target:o,props:{...t.props,stores:H,components:u},hydrate:!0}),Ie(j);const r={from:null,to:{params:g.params,route:{id:((a=g.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};m.after_navigate.forEach(s=>s(r)),P=!0}async function W({url:t,params:e,branch:r,status:a,error:s,route:i,form:h}){let p="never";for(const k of r)(k==null?void 0:k.slash)!==void 0&&(p=k.slash);t.pathname=tt(t.pathname,p),t.search=t.search;const y={type:"loaded",state:{url:t,params:e,branch:r,error:s,route:i},props:{constructors:Lt(r).map(k=>k.node.component)}};h!==void 0&&(y.props.form=h);let w={},I=!V,v=0;for(let k=0;k<Math.max(r.length,g.branch.length);k+=1){const b=r[k],$=g.branch[k];(b==null?void 0:b.data)!==($==null?void 0:$.data)&&(I=!0),b&&(w={...w,...b.data},I&&(y.props[`data_${v}`]=w),v+=1)}return(!g.url||t.href!==g.url.href||g.error!==s||h!==void 0&&h!==V.form||I)&&(y.props.page={error:s,params:e,route:{id:(i==null?void 0:i.id)??null},status:a,url:new URL(t),form:h??null,data:I?w:V.data}),y}async function de({loader:t,parent:e,url:r,params:a,route:s,server_data_node:i}){var w,I,v;let h=null;const p={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await t();if((w=y.universal)!=null&&w.load){let L=function(...b){for(const $ of b){const{href:D}=new URL($,r);p.dependencies.add(D)}};const k={route:{get id(){return p.route=!0,s.id}},params:new Proxy(a,{get:(b,$)=>(p.params.add($),b[$])}),data:(i==null?void 0:i.data)??null,url:ot(r,()=>{p.url=!0}),async fetch(b,$){let D;b instanceof Request?(D=b.url,$={body:b.method==="GET"||b.method==="HEAD"?void 0:await b.blob(),cache:b.cache,credentials:b.credentials,headers:b.headers,integrity:b.integrity,keepalive:b.keepalive,method:b.method,mode:b.mode,redirect:b.redirect,referrer:b.referrer,referrerPolicy:b.referrerPolicy,signal:b.signal,...$}):D=b;const C=new URL(D,r);return L(C.href),C.origin===r.origin&&(D=C.href.slice(r.origin.length)),P?ut(D,C.href,$):ft(D,$)},setHeaders:()=>{},depends:L,parent(){return p.parent=!0,e()}};h=await y.universal.load.call(null,k)??null,h=h?await wt(h):null}return{node:y,loader:t,server:i,universal:(I=y.universal)!=null&&I.load?{type:"data",data:h,uses:p}:null,data:h??(i==null?void 0:i.data)??null,slash:((v=y.universal)==null?void 0:v.trailingSlash)??(i==null?void 0:i.slash)}}function $e(t,e,r,a,s){if(M)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&r)return!0;for(const i of a.params)if(s[i]!==g.params[i])return!0;for(const i of a.dependencies)if(R.some(h=>h(new URL(i))))return!0;return!1}function pe(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}async function Ue({id:t,invalidating:e,url:r,params:a,route:s}){if((_==null?void 0:_.id)===t)return _.promise;const{errors:i,layouts:h,leaf:p}=s,y=[...h,p];i.forEach(S=>S==null?void 0:S().catch(()=>{})),y.forEach(S=>S==null?void 0:S[1]().catch(()=>{}));let w=null;const I=g.url?t!==g.url.pathname+g.url.search:!1,v=g.route?s.id!==g.route.id:!1;let L=!1;const k=y.map((S,N)=>{var G;const U=g.branch[N],x=!!(S!=null&&S[0])&&((U==null?void 0:U.loader)!==S[1]||$e(L,v,I,(G=U.server)==null?void 0:G.uses,a));return x&&(L=!0),x});if(k.some(Boolean)){try{w=await Je(r,k)}catch(S){return re({status:S instanceof ee?S.status:500,error:await X(S,{url:r,params:a,route:{id:s.id}}),url:r,route:s})}if(w.type==="redirect")return w}const b=w==null?void 0:w.nodes;let $=!1;const D=y.map(async(S,N)=>{var he;if(!S)return;const U=g.branch[N],x=b==null?void 0:b[N];if((!x||x.type==="skip")&&S[1]===(U==null?void 0:U.loader)&&!$e($,v,I,(he=U.universal)==null?void 0:he.uses,a))return U;if($=!0,(x==null?void 0:x.type)==="error")throw x;return de({loader:S[1],url:r,params:a,route:s,parent:async()=>{var Ce;const De={};for(let ge=0;ge<N;ge+=1)Object.assign(De,(Ce=await D[ge])==null?void 0:Ce.data);return De},server_data_node:pe(x===void 0&&S[0]?{type:"skip"}:x??null,S[0]?U==null?void 0:U.server:void 0)})});for(const S of D)S.catch(()=>{});const C=[];for(let S=0;S<y.length;S+=1)if(y[S])try{C.push(await D[S])}catch(N){if(N instanceof Ge)return{type:"redirect",location:N.location};let U=500,x;if(b!=null&&b.includes(N))U=N.status??U,x=N.error;else if(N instanceof ee)U=N.status,x=N.body;else{if(await H.updated.check())return await z(r);x=await X(N,{params:a,url:r,route:{id:s.id}})}const G=await je(S,C,i);return G?await W({url:r,params:a,branch:C.slice(0,G.idx).concat(G.node),status:U,error:x,route:s}):await Te(r,{id:s.id},x,U)}else C.push(void 0);return await W({url:r,params:a,branch:C,status:200,error:null,route:s,form:e?void 0:null})}async function je(t,e,r){for(;t--;)if(r[t]){let a=t;for(;!e[a];)a-=1;try{return{idx:a+1,node:{node:await r[t](),loader:r[t],data:{},server:null,universal:null}}}catch{continue}}}async function re({status:t,error:e,url:r,route:a}){const s={};let i=null;if(n.server_loads[0]===0)try{const w=await Je(r,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;i=w.nodes[0]??null}catch{(r.origin!==location.origin||r.pathname!==location.pathname||T)&&await z(r)}const p=await de({loader:c,url:r,params:s,route:a,parent:()=>Promise.resolve({}),server_data_node:pe(i)}),y={node:await f(),loader:f,universal:null,server:null,data:null};return await W({url:r,params:s,branch:[p,y],status:t,error:e,route:null})}function Y(t,e){if(ye(t,J))return;const r=oe(t);for(const a of l){const s=a.exec(r);if(s)return{id:t.pathname+t.search,invalidating:e,route:a,params:at(s),url:t}}}function oe(t){return nt(t.pathname.slice(J.length)||"/")}function xe({url:t,type:e,intent:r,delta:a}){var p,y;let s=!1;const i={from:{params:g.params,route:{id:((p=g.route)==null?void 0:p.id)??null},url:g.url},to:{params:(r==null?void 0:r.params)??null,route:{id:((y=r==null?void 0:r.route)==null?void 0:y.id)??null},url:t},willUnload:!r,type:e};a!==void 0&&(i.delta=a);const h={...i,cancel:()=>{s=!0}};return O||m.before_navigate.forEach(w=>w(h)),s?null:i}async function ie({url:t,scroll:e,keepfocus:r,redirect_chain:a,details:s,type:i,delta:h,nav_token:p,accepted:y,blocked:w}){const I=Y(t,!1),v=xe({url:t,type:i,delta:h,intent:I});if(!v){w();return}const L=j;y(),O=!0,P&&H.navigating.set(v),await Pe(I,t,a,L,{scroll:e,keepfocus:r,details:s},p,()=>{O=!1,m.after_navigate.forEach(k=>k(v)),H.navigating.set(null)})}async function Te(t,e,r,a){return t.origin===location.origin&&t.pathname===location.pathname&&!T?await re({status:a,error:r,url:t,route:e}):await z(t)}function z(t){return location.href=t.href,new Promise(()=>{})}function Qe(){let t;d.addEventListener("mousemove",i=>{const h=i.target;clearTimeout(t),t=setTimeout(()=>{a(h,2)},20)});function e(i){a(i.composedPath()[0],1)}d.addEventListener("mousedown",e),d.addEventListener("touchstart",e,{passive:!0});const r=new IntersectionObserver(i=>{for(const h of i)h.isIntersecting&&(ae(oe(new URL(h.target.href))),r.unobserve(h.target))},{threshold:0});function a(i,h){const p=He(i,d);if(!p)return;const{url:y,external:w}=me(p,J);if(w)return;const I=ce(p);if(!I.reload)if(h<=I.preload_data){const v=Y(y,!1);v&&Oe(v)}else h<=I.preload_code&&ae(oe(y))}function s(){r.disconnect();for(const i of d.querySelectorAll("a")){const{url:h,external:p}=me(i,J);if(p)continue;const y=ce(i);y.reload||(y.preload_code===Me.viewport&&r.observe(i),y.preload_code===Me.eager&&ae(oe(h)))}}m.after_navigate.push(s),s()}function X(t,e){return t instanceof ee?t.body:n.hooks.handleError({error:t,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:t=>{qe(()=>(m.after_navigate.push(t),()=>{const e=m.after_navigate.indexOf(t);m.after_navigate.splice(e,1)}))},before_navigate:t=>{qe(()=>(m.before_navigate.push(t),()=>{const e=m.before_navigate.indexOf(t);m.before_navigate.splice(e,1)}))},disable_scroll_handling:()=>{(A||!P)&&(E=!1)},goto:(t,e={})=>ue(t,e,[]),invalidate:t=>{if(typeof t=="function")R.push(t);else{const{href:e}=new URL(t,location.href);R.push(r=>r.href===e)}return ke()},invalidateAll:()=>(M=!0,ke()),preload_data:async t=>{const e=new URL(t,Fe(document)),r=Y(e,!1);if(!r)throw new Error(`Attempted to preload a URL that does not belong to this app: ${e}`);await Oe(r)},preload_code:ae,apply_action:async t=>{if(t.type==="error"){const e=new URL(location.href),{branch:r,route:a}=g;if(!a)return;const s=await je(g.branch.length,r,a.errors);if(s){const i=await W({url:e,params:g.params,branch:r.slice(0,s.idx).concat(s.node),status:t.status??500,error:t.error,route:a});g=i.state,F.$set(i.props),se().then(be)}}else t.type==="redirect"?ue(t.location,{invalidateAll:!0},[]):(F.$set({form:null,page:{...V,form:t.data,status:t.status}}),await se(),F.$set({form:t.data}),t.type==="success"&&be())},_start_router:()=>{var t;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{var a;let r=!1;if(Le(),!O){const s={from:{params:g.params,route:{id:((a=g.route)==null?void 0:a.id)??null},url:g.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};m.before_navigate.forEach(i=>i(s))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Le()}),(t=navigator.connection)!=null&&t.saveData||Qe(),d.addEventListener("click",e=>{if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=He(e.composedPath()[0],d);if(!r)return;const{url:a,external:s,target:i}=me(r,J);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const h=ce(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:"))return;if(s||h.reload){xe({url:a,type:"link"})?O=!0:e.preventDefault();return}const[y,w]=a.href.split("#");if(w!==void 0&&y===location.href.split("#")[0]){B=!0,_e(j),g.url=a,H.page.set({...V,url:a}),H.page.notify();return}ie({url:a,scroll:h.noscroll?Q():null,keepfocus:h.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:h.replace_state??a.href===location.href},accepted:()=>e.preventDefault(),blocked:()=>e.preventDefault(),type:"link"})}),d.addEventListener("submit",e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ye(i,J))return;const h=e.target,{keep_focus:p,noscroll:y,reload:w,replace_state:I}=ce(h);if(w)return;e.preventDefault(),e.stopPropagation();const v=new FormData(h),L=a==null?void 0:a.getAttribute("name");L&&v.append(L,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(v).toString(),ie({url:i,scroll:y?Q():null,keepfocus:p??!1,redirect_chain:[],details:{state:{},replaceState:I??i.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[q]){if(e.state[q]===j)return;const a=K[e.state[q]];if(g.url.href.split("#")[0]===location.href.split("#")[0]){K[j]=Q(),j=e.state[q],scrollTo(a.x,a.y);return}const s=e.state[q]-j;let i=!1;await ie({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{j=e.state[q]},blocked:()=>{history.go(-s),i=!0},type:"popstate",delta:s}),i||Ie(j)}}),addEventListener("hashchange",()=>{B&&(B=!1,history.replaceState({...history.state,[q]:++j},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&H.navigating.set(null)})},_hydrate:async({status:t=200,error:e,node_ids:r,params:a,route:s,data:i,form:h})=>{T=!0;const p=new URL(location.href);({params:a={},route:s={id:null}}=Y(p,!1)||{});let y;try{const w=r.map(async(I,v)=>{const L=i[v];return L!=null&&L.uses&&(L.uses=Ze(L.uses)),de({loader:n.nodes[I],url:p,params:a,route:s,parent:async()=>{const k={};for(let b=0;b<v;b+=1)Object.assign(k,(await w[b]).data);return k},server_data_node:pe(L)})});y=await W({url:p,params:a,branch:await Promise.all(w),status:t,error:e,form:h,route:l.find(({id:I})=>I===s.id)??null})}catch(w){if(w instanceof Ge){await z(new URL(w.location,location.href));return}y=await re({status:w instanceof ee?w.status:500,error:await X(w,{url:p,params:a,route:s}),url:p,route:s})}Ae(y)}}}async function Je(n,o){const l=new URL(n);l.pathname=ct(n.pathname),l.searchParams.append("x-sveltekit-invalidated",o.map(f=>f?"1":"").join("_"));const c=await le(l.href);if(!c.ok)throw new ee(c.status,await c.json());return new Promise(async f=>{var g;const d=new Map,R=c.body.getReader(),u=new TextDecoder;function _(T){return Rt(T,{Promise:P=>new Promise((E,A)=>{d.set(P,{fulfil:E,reject:A})})})}let m="";for(;;){const{done:T,value:P}=await R.read();if(T&&!m)break;for(m+=!P&&m?`
`:u.decode(P);;){const E=m.indexOf(`
`);if(E===-1)break;const A=JSON.parse(m.slice(0,E));if(m=m.slice(E+1),A.type==="redirect")return f(A);if(A.type==="data")(g=A.nodes)==null||g.forEach(O=>{(O==null?void 0:O.type)==="data"&&(O.uses=Ze(O.uses),O.data=_(O.data))}),f(A);else if(A.type==="chunk"){const{id:O,data:B,error:M}=A,F=d.get(O);d.delete(O),M?F.reject(_(M)):F.fulfil(_(B))}}}})}function Ze(n){return{dependencies:new Set((n==null?void 0:n.dependencies)??[]),params:new Set((n==null?void 0:n.params)??[]),parent:!!(n!=null&&n.parent),route:!!(n!=null&&n.route),url:!!(n!=null&&n.url)}}function be(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const o=document.body,l=o.getAttribute("tabindex");return o.tabIndex=-1,o.focus({preventScroll:!0}),l!==null?o.setAttribute("tabindex",l):o.removeAttribute("tabindex"),new Promise(c=>{setTimeout(()=>{var f;c((f=getSelection())==null?void 0:f.removeAllRanges())})})}}async function jt(n,o,l){const c=Ot(n,o);et({client:c}),l?await c._hydrate(l):c.goto(location.href,{replaceState:!0}),c._start_router()}export{jt as start};
