import{_ as m}from"./SubmitTokenForm.9de780cd.js";import{u as l}from"./breakpoints.072ee326.js";import{d as u,r as p,e as _,w as d,f as o,u as c,a as f,b as k,o as v,i as b}from"./index.3d944360.js";import"./token-meta.2d60a689.js";import"./firebaseConfig.d7a6b5a9.js";import"./types.6a5ef88e.js";import"./gallery.82c2a091.js";import"./account.c8546714.js";import"./util.63de370d.js";import"./token-meta.a67d7a4a.js";const A=u({__name:"SubmitTokenDialog",setup(g){const r=c(),s=f(),t=p(!0),{screen_type:n}=l();return(w,e)=>{const i=k("el-dialog");return v(),_(i,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=a=>t.value=a),title:"Submit To Moda Archives",top:"2vh",fullscreen:o(n)=="xs",width:"75%",onClose:e[1]||(e[1]=a=>o(r).back())},{default:d(()=>[b(m,{token_meta_id:o(s).params.token_meta_id},null,8,["token_meta_id"])]),_:1},8,["modelValue","fullscreen"])}}});export{A as default};