function E(){}function Q(t,n){for(const e in n)t[e]=n[e];return t}function D(t){return t()}function H(){return Object.create(null)}function g(t){t.forEach(D)}function q(t){return typeof t=="function"}function ht(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let b;function mt(t,n){return b||(b=document.createElement("a")),b.href=n,t===b.href}function U(t){return Object.keys(t).length===0}function V(t,...n){if(t==null)return E;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function pt(t,n,e){t.$$.on_destroy.push(V(n,e))}function yt(t,n,e,i){if(t){const r=B(t,n,e,i);return t[0](r)}}function B(t,n,e,i){return t[1]&&i?Q(e.ctx.slice(),t[1](i(n))):e.ctx}function gt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(n.dirty.length,r.length);for(let l=0;l<s;l+=1)u[l]=n.dirty[l]|r[l];return u}return n.dirty|r}return n.dirty}function xt(t,n,e,i,r,u){if(r){const s=B(n,e,i,u);t.p(s,r)}}function bt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function $t(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function Et(t){return t??""}let v=!1;function X(){v=!0}function Y(){v=!1}function Z(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function tt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<n.length;o++){const f=n[o];f.claim_order!==void 0&&c.push(f)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const o=n[c].claim_order,f=(r>0&&n[e[r]].claim_order<=o?r+1:Z(1,r,x=>n[e[x]].claim_order,o))-1;i[c]=e[f]+1;const a=f+1;e[a]=c,r=Math.max(a,r)}const u=[],s=[];let l=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(u.push(n[c-1]);l>=c;l--)s.push(n[l]);l--}for(;l>=0;l--)s.push(n[l]);u.reverse(),s.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<s.length;c++){for(;o<u.length&&s[c].claim_order>=u[o].claim_order;)o++;const f=o<u.length?u[o]:null;t.insertBefore(s[c],f)}}function nt(t,n){if(v){for(tt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function et(t,n,e){t.insertBefore(n,e||null)}function it(t,n,e){v&&!e?nt(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function wt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function G(t){return document.createElement(t)}function I(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function M(t){return document.createTextNode(t)}function vt(){return M(" ")}function Tt(){return M("")}function Nt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function At(t){return function(n){return n.preventDefault(),t.call(this,n)}}function rt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function kt(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set?t[i]=n[i]:rt(t,i,n[i])}function st(t){return Array.from(t.childNodes)}function z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function F(t,n,e,i,r=!1){z(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(n(l)){const c=e(l);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(n(l)){const c=e(l);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function R(t,n,e,i){return F(t,r=>r.nodeName===n,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];e[l.name]||u.push(l.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(n))}function Mt(t,n,e){return R(t,n,e,G)}function St(t,n,e){return R(t,n,e,I)}function ct(t,n){return F(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>M(n),!0)}function jt(t){return ct(t," ")}function P(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function Lt(t,n){const e=P(t,"HTML_TAG_START",0),i=P(t,"HTML_TAG_END",e);if(e===i)return new C(void 0,n);z(t);const r=t.splice(e,i-e+1);w(r[0]),w(r[r.length-1]);const u=r.slice(1,r.length-1);for(const s of u)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new C(u,n)}function Ht(t,n){n=""+n,t.data!==n&&(t.data=n)}function Pt(t,n){t.value=n??""}function Ct(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Ot(t,n,e){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===n){r.selected=!0;return}}(!e||n!==void 0)&&(t.selectedIndex=-1)}function Dt(t){const n=t.querySelector(":checked");return n&&n.__value}function qt(t,n,e){t.classList[e?"add":"remove"](n)}class lt{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=I(e.nodeName):this.e=G(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)et(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(w)}}class C extends lt{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)it(this.t,this.n[e],n)}}function Bt(t,n){return new t(n)}let y;function p(t){y=t}function S(){if(!y)throw new Error("Function called outside component initialization");return y}function Gt(t){S().$$.on_mount.push(t)}function It(t){S().$$.after_update.push(t)}function zt(t){S().$$.on_destroy.push(t)}function Ft(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const h=[],O=[];let m=[];const N=[],W=Promise.resolve();let A=!1;function J(){A||(A=!0,W.then(K))}function Rt(){return J(),W}function k(t){m.push(t)}function Wt(t){N.push(t)}const T=new Set;let d=0;function K(){if(d!==0)return;const t=y;do{try{for(;d<h.length;){const n=h[d];d++,p(n),ot(n.$$)}}catch(n){throw h.length=0,d=0,n}for(p(null),h.length=0,d=0;O.length;)O.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];T.has(e)||(T.add(e),e())}m.length=0}while(h.length);for(;N.length;)N.pop()();A=!1,T.clear(),p(t)}function ot(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}function ut(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const $=new Set;let _;function Jt(){_={r:0,c:[],p:_}}function Kt(){_.r||g(_.c),_=_.p}function at(t,n){t&&t.i&&($.delete(t),t.i(n))}function Qt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Ut(t,n){const e={},i={},r={$$scope:1};let u=t.length;for(;u--;){const s=t[u],l=n[u];if(l){for(const c in s)c in l||(i[c]=1);for(const c in l)r[c]||(e[c]=l[c],r[c]=1);t[u]=l}else for(const c in s)r[c]=1}for(const s in i)s in e||(e[s]=void 0);return e}function Vt(t){return typeof t=="object"&&t!==null?t:{}}function Xt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function Yt(t){t&&t.c()}function Zt(t,n){t&&t.l(n)}function ft(t,n,e,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(n,e),i||k(()=>{const s=t.$$.on_mount.map(D).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...s):g(s),t.$$.on_mount=[]}),u.forEach(k)}function _t(t,n){const e=t.$$;e.fragment!==null&&(ut(e.after_update),g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function dt(t,n){t.$$.dirty[0]===-1&&(h.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function tn(t,n,e,i,r,u,s,l=[-1]){const c=y;p(t);const o=t.$$={fragment:null,ctx:[],props:u,update:E,not_equal:r,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:H(),dirty:l,skip_bound:!1,root:n.target||c.$$.root};s&&s(o.root);let f=!1;if(o.ctx=e?e(t,n.props||{},(a,x,...j)=>{const L=j.length?j[0]:x;return o.ctx&&r(o.ctx[a],o.ctx[a]=L)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](L),f&&dt(t,a)),x}):[],o.update(),f=!0,g(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){X();const a=st(n.target);o.fragment&&o.fragment.l(a),a.forEach(w)}else o.fragment&&o.fragment.c();n.intro&&at(t.$$.fragment),ft(t,n.target,n.anchor,n.customElement),Y(),K()}p(c)}class nn{$destroy(){_t(this,1),this.$destroy=E}$on(n,e){if(!q(e))return E;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!U(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{kt as $,I as A,St as B,k as C,Pt as D,Ot as E,wt as F,Dt as G,Tt as H,Kt as I,It as J,Ct as K,Jt as L,O as M,Bt as N,yt as O,xt as P,bt as Q,gt as R,nn as S,zt as T,Ft as U,y as V,Rt as W,qt as X,Et as Y,q as Z,Q as _,vt as a,$t as a0,Xt as a1,Ut as a2,Vt as a3,Wt as a4,C as a5,Lt as a6,At as a7,st as b,Mt as c,ct as d,G as e,w as f,jt as g,it as h,tn as i,nt as j,Ht as k,pt as l,Yt as m,E as n,Zt as o,ft as p,at as q,Qt as r,ht as s,M as t,_t as u,rt as v,Nt as w,g as x,Gt as y,mt as z};
