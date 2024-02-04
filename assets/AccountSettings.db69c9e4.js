import{u as W,c as $,d as C}from"./account.43d6d275.js";import{u as N}from"./token-meta.7c7fb31b.js";import{i as V,s as M}from"./util.6d1af7e6.js";import{u as j}from"./breakpoints.9818c8c5.js";import{d as q}from"./index.d82c3a20.js";import{_ as F,d as L,r as E,q as P,c as Y,h as g,i as b,w as _,n as S,u as n,f as v,Y as G,o as r,l as t,t as c,F as H,C as J,a as A,j as u,z as y,A as K,p as Q,m as R}from"./index.3e910c80.js";import"./types.fed76c89.js";import"./firebaseConfig.4d01e9b5.js";import"./token-meta.e1a69122.js";const k=m=>(Q("data-v-52edfc1e"),m=m(),R(),m),U={style:{display:"flex","justify-content":"center","margin-top":"50px"}},X=k(()=>t("div",{class:"card-header"},[t("span",{style:{"font-size":"18px"}},"Account Settings")],-1)),Z=k(()=>t("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"Email",-1)),ee=k(()=>t("div",{style:{"font-size":"var(--el-font-size-extra-small)","margin-top":"2em"}},"Ethereum Wallet",-1)),te={key:0},ae={style:{display:"flex","align-items":"center"}},ne={key:0,style:{width:"60px",height:"60px"}},oe=k(()=>t("br",null,null,-1)),se=L({__name:"AccountSettings",setup(m){const p=W(),a=N(),o=E(!1),{md_and_up:z,screen_type:B}=j(),w=E(!1),h=E(!1);P(()=>{T()});const T=async()=>{if(V()){w.value=!0;return}h.value=!0;const e=await q().catch(i=>{M(`Error detecting ethereum provider - ${i}`)});w.value=Boolean(e),h.value=!1},s=Y(()=>p.get_account),D=async()=>{const{address:e,signature:i,ens_name:l}=await $();console.log("address",e,i,l),o.value=!0;const f={wallet_address:e,signature:i};l&&(f.ens_name=l),C(s.value.id,f).then(()=>p.loadAccount(s.value.id)).then(()=>{const d=a.loadOpenseaWalletTokenMetas(e).catch(x=>M(`Error loading opensea wallet tokens - ${x}`));return Promise.all([d])}).then(()=>a.loadOpenseaConvertedTokens()).then(()=>{y({type:"success",message:"Ethereum wallet connected"})}).catch(d=>{y({message:`Error connecting wallet - ${d}`,type:"error",showClose:!0,duration:12e3})}).finally(()=>o.value=!1)},I=async()=>{o.value=!0,K.confirm("Are you sure you want to disconnect your wallet?","Disconnect",{type:"warning"}).then(()=>{const e={wallet_address:"",signature:"",ens_name:""};return C(s.value.id,e)}).then(()=>p.loadAccount(s.value.id)).then(()=>{a.opensea_minted_token_meta_list=[],a.opensea_wallet_token_meta_list=[],y({type:"success",message:"Ethereum wallet disconnected"})}).catch(e=>{y({message:`Error disconnecting wallet - ${e}`,type:"error",showClose:!0,duration:12e3})}).finally(()=>o.value=!1)};return(e,i)=>{const l=v("el-button"),f=v("el-link"),d=v("el-alert"),x=v("el-card"),O=G("loading");return r(),g("div",U,[b(x,{class:"container-card",style:S(n(z)?"min-width: 700px;":"")},{header:_(()=>[X]),default:_(()=>[Z,t("div",null,c(n(p).get_account.entity.email),1),ee,s.value.entity.wallet_address?(r(),g("div",te,[t("div",ae,[t("div",{style:S(n(B)=="xs"?"max-width: 250px; text-overflow: ellipsis; overflow: hidden;":"")},c(s.value.entity.wallet_address),5),b(l,{text:"",circle:"",size:"small",icon:"close",style:{"margin-left":"5px"},onClick:I,loading:o.value},null,8,["loading"])]),t("div",null,"Loaded "+c(n(a).opensea_wallet_token_meta_list.length)+" wallet token"+c(n(a).opensea_wallet_token_meta_list.length==1?"":"s")+" from Opensea",1),t("div",null,"Loaded "+c(n(a).opensea_minted_token_meta_list.length)+" token"+c(n(a).opensea_minted_token_meta_list.length==1?"":"s")+" you minted from Opensea ",1)])):(r(),g(H,{key:1},[h.value?J((r(),g("div",ne,null,512)),[[O,h.value]]):w.value?(r(),A(l,{key:1,onClick:D,loading:o.value,icon:"Connection",color:"#000000"},{default:_(()=>[u(" Connect With Metamask ")]),_:1},8,["loading"])):(r(),A(d,{key:2,type:"warning","show-icon":"",title:"Metamask extension not found",style:{"margin-bottom":"1.5em"},closable:!1},{default:_(()=>[u(" The Metamask browser extension is required to connect your wallet, and this extension was not detected on your browser. "),oe,u("Please "),b(f,{type:"primary",style:{"font-size":"12px","vertical-align":"top"},href:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"},{default:_(()=>[u(" install Metamask ")]),_:1}),u(" and then refresh the page. ")]),_:1}))],64))]),_:1},8,["style"])])}}});var he=F(se,[["__scopeId","data-v-52edfc1e"]]);export{he as default};
