import{B as p}from"./types.e0f521c1.js";import{P as _,_ as f,f as h,d as r,R as i,c as l,G as g,p as u,b as c,i as w,g as G,e as q,y as k}from"./firebaseConfig.4d01e9b5.js";const m=_(h),y=f(m,"gallery"),L=async()=>(await r(y)).docs.map(a=>({id:a.id,entity:a.data()})),P=async s=>{const a=await u(y,{...p.createBaseEntity(),...s}),e=await c(a);return{id:e.id,entity:e.data()}},D=async(s,a)=>{a.updated_at=w.now();const e=G(m,"gallery",s);await q(e,a);const t=await c(e);return{id:t.id,entity:t.data()}},I=async s=>{const a=i(y,l(g(),"in",s));return(await r(a)).docs.map(t=>({id:t.id,entity:t.data()}))},B=_(h),d=f(B,"gallery-token-meta"),M=async s=>{const a=i(d,l("gallery_id","in",s)),e=await r(a),t=[];return e.forEach(o=>{t.push({id:o.id,entity:o.data()})}),t},T=async s=>{const a=[];for(const n of s)a.push(u(d,{...p.createBaseEntity(),...n}));const e=await Promise.all(a),t=[];return e.forEach(n=>{t.push(c(n))}),(await Promise.all(t)).map(n=>({id:n.id,entity:n.data()}))},R=async s=>{const a=i(d,l("gallery_id","==",s)),e=await r(a),t=[];for(const o of e.docs)t.push(k(o.ref));await Promise.all(t)};export{M as a,L as b,T as c,R as d,I as g,P as s,D as u};