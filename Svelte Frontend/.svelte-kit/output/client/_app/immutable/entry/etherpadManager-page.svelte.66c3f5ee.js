import{S as _,i as y,s as S,e as h,c as g,b as p,f as m,v as l,z as v,h as $,j as M,n as d,y as E,m as T,o as q,p as b,q as H,r as L,u as w}from"../chunks/index.96ff6eb1.js";import{a as x,m as C}from"../chunks/stores.32eab677.js";function A(c){let t,a,e;return{c(){t=h("div"),a=h("iframe"),this.h()},l(n){t=g(n,"DIV",{id:!0,class:!0});var o=p(t);a=g(o,"IFRAME",{title:!0,id:!0,src:!0,width:!0,height:!0,frameborder:!0,class:!0}),p(a).forEach(m),o.forEach(m),this.h()},h(){l(a,"title","etherpad"),l(a,"id","iframe"),v(a.src,e=c[0])||l(a,"src",e),l(a,"width","600"),l(a,"height","400"),l(a,"frameborder","0"),l(a,"class","svelte-1lna2c7"),l(t,"id","etherpadContainer"),l(t,"class","svelte-1lna2c7")},m(n,o){$(n,t,o),M(t,a)},p:d,i:d,o:d,d(n){n&&m(t)}}}function B(c){let t=localStorage.getItem("padSrc");E(()=>{console.log("on mount");let e=document.querySelector("iframe");console.log(e),e&&(e.onload=()=>{console.log("onload"),setTimeout(()=>{var i,s;let n=(i=e==null?void 0:e.contentDocument)==null?void 0:i.body.querySelector("#padStats"),o=(s=e==null?void 0:e.contentDocument)==null?void 0:s.body.querySelector(".authorStats");a(n,o)},1e3)})});function a(e,n){console.log(e);let o=e.getElementsByClassName("stats");for(let r=0;r<o.length;r++)console.log(o[r].innerHTML),r==2&&(x.set(o[r].innerHTML),console.log("totalWords: "+o[r].innerHTML));let i=n.getElementsByClassName("stats"),s=[];for(let r=0;r<i.length;r++)s.push(i[r].getElementsByTagName("td"));console.log(s);let f;for(let r=0;r<s.length;r++)for(let u=0;u<s[r].length;u++)u%3!=0&&(console.log(s[r][u].innerHTML),f=s[0][2].innerHTML,C.set(f))}return[t]}class D extends _{constructor(t){super(),y(this,t,B,A,S,{})}}function I(c){let t,a;return t=new D({}),{c(){T(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,n){b(t,e,n),a=!0},p:d,i(e){a||(H(t.$$.fragment,e),a=!0)},o(e){L(t.$$.fragment,e),a=!1},d(e){w(t,e)}}}class j extends _{constructor(t){super(),y(this,t,null,I,S,{})}}export{j as default};
