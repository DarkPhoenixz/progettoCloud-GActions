import{E as n}from"./endpoints.1dedc0d6.js";const p={login:async(t,o)=>{const e={username:t,password:o};return fetch(n.LOGIN,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},stampa:async()=>{console.log("ciao")},register:async(t,o,e,s,a,i)=>{const r={name:t,email:o,pass:e,confirmed:s,sezione:a,role:i};return fetch(n.REGISTER,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})}};export{p as U};
