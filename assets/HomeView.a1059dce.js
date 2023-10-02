import{_ as z,a as F,b as j,c as W}from"./search-icon.822e7617.js";import{_ as M,d as N,u as H,a as I,r as T,c as J,b as _,o as r,e as x,w as d,f as a,g as C,h as E,F as D,i as s,j as V,n as R,k as P,t as K,l as Q,p as X,m as Y,q as Z,E as L,s as ee,R as te}from"./index.c4f4b3b7.js";import{u as B}from"./account.c3c989a8.js";import{u as ae}from"./breakpoints.aa9e6778.js";import{s as oe,a as G,o as se}from"./firebaseConfig.d7a6b5a9.js";import{s as l}from"./util.53cad759.js";import{u as ne}from"./plaque.46d4d642.js";import{u as le}from"./token-meta.d6bd47a9.js";import{u as re}from"./gallery.714af3db.js";import{a as ie}from"./add-plaque.8229d2c4.js";import"./types.d2ec9214.js";import"./plaque.28daac16.js";import"./token-meta.7f5c0ba8.js";import"./gallery.d53d87c7.js";const O=y=>(X("data-v-5c106a87"),y=y(),Y(),y),ce=O(()=>P("div",{style:{"flex-grow":"1"}},null,-1)),ue=O(()=>P("div",{style:{"flex-grow":"1"}},null,-1)),_e={key:0,style:{"margin-right":"10px",display:"flex","align-items":"center"}},de=N({__name:"Header",setup(y){const i=H(),h=I(),n=B(),c=T(!1),{md_and_up:k,screen_type:q}=ae(),p=(e,t)=>{e.paneName&&typeof e.paneName=="string"&&i.push({name:e.paneName})},v=J(()=>{const e=n.account;if(!e)return"";if(e.entity.ens_name)return e.entity.ens_name;if(e.entity.email)return e.entity.email;const t=e.entity.wallet_address;return t?`${t.substring(0,6)}...${t.substring(t.length-4)}`:""}),A=()=>{c.value=!0,oe(G).then(()=>{}).catch(e=>{l(e)}).finally(()=>{c.value=!1})},S=e=>new URL({"../assets/base.css":z,"../assets/logo.png":F,"../assets/logo.svg":j,"../assets/search-icon.svg":W}[`../assets/${e}`],self.location).href;return(e,t)=>{const m=_("el-image"),u=_("el-button"),g=_("el-tab-pane"),b=_("el-tabs"),w=_("el-header");return r(),x(w,{class:"header",style:Q(a(q)=="xs"?"padding: 0px 8px;":"")},{default:d(()=>[a(k)?(r(),x(m,{key:0,src:S("logo.png"),style:{width:"40px",height:"40px","margin-right":"2em"}},null,8,["src"])):C("",!0),a(i).currentRoute.value.name=="qr-scan"?(r(),E(D,{key:1},[ce,s(u,{icon:"close",color:"#000000",onClick:t[0]||(t[0]=f=>a(i).push("plaque-list"))},{default:d(()=>[V(" Cancel ")]),_:1})],64)):(r(),E(D,{key:2},[s(b,{modelValue:a(h).name,"onUpdate:modelValue":t[1]||(t[1]=f=>a(h).name=f),onTabClick:p,class:R(a(k)?"":"small-tabs")},{default:d(()=>[s(g,{label:"Plaques",name:"plaque-list"}),s(g,{label:"Artwork",name:"artwork-tile-grid"}),s(g,{label:"Galleries",name:"gallery-list"}),s(g,{label:"Account",name:"account-settings"})]),_:1},8,["modelValue","class"]),ue,a(k)?(r(),E("div",_e,[P("div",null,K(a(v)),1),a(n).is_user_admin?(r(),x(u,{key:0,type:"info",round:"",size:"small",style:{"margin-left":"8px"}},{default:d(()=>[V("Admin")]),_:1})):C("",!0)])):C("",!0),s(u,{onClick:A,style:{"margin-left":"1em"},loading:c.value},{default:d(()=>[V("Logout")]),_:1},8,["loading"])],64))]),_:1},8,["style"])}}});var pe=M(de,[["__scopeId","data-v-5c106a87"]]);const me=N({__name:"HomeView",setup(y){const i=B(),h=ne(),n=le(),c=re(),k=H(),q=T(!1),p=T(),v=I();let A;Z(async()=>{p.value=L.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"}),A=se(G,async e=>{if(console.log("onAuthStateChanged",e),e){p.value=L.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});try{await S(e.uid)}finally{p.value.close()}}e||(i.setAccount(null),p.value.close(),k.push({name:"login",query:{redir:window.location.href}}))})}),ee(()=>{console.log("unsubscribe onAuthStateChanged on unmount"),A()});async function S(e){console.log("LOAD APP DATA"),await i.loadAccount(e),await c.loadGalleryList(e).catch(o=>l(`Error loading galleries - ${o}`));const t=h.loadPlaques(e).catch(o=>l(`Error loading plaques - ${o}`)),m=h.loadGalleryPlaques(c.gallery_list).catch(o=>l(`Error loading gallery plaques - ${o}`)),u=n.loadArchiveTokenMetas(e).catch(o=>l(`Error loading archive token metas - ${o}`)),g=n.loadGalleryTokenMetas(c.gallery_list).catch(o=>l(`Error loading token metas - ${o}`)),b=[t,m,u,m,g],w=i.get_account.entity.wallet_address;if(w){const o=n.loadOpenseaMintedTokenMetas(w).catch($=>l(`Error loading opensea minted tokens - ${$}`)),U=n.loadOpenseaWalletTokenMetas(w).catch($=>l(`Error loading opensea wallet tokens - ${$}`));b.push(o),b.push(U)}await Promise.all(b),await n.loadOpenseaConvertedTokens();const f=v.query.plaque_id;f&&typeof f=="string"&&(await ie(e,f),delete v.query.plaque_id),q.value=!0}return(e,t)=>{const m=_("el-main"),u=_("el-container");return r(),x(u,{style:{height:"100%",position:"fixed",top:"0px",left:"0px",right:"0px",bottom:"0px"}},{default:d(()=>[s(pe),s(m,{style:{"background-color":"#DAD9D7"},class:R(a(v).fullPath.includes("artwork-tile-grid")?"remove-padding":"")},{default:d(()=>[q.value?(r(),x(a(te),{key:0})):C("",!0)]),_:1},8,["class"])]),_:1})}}});var Ee=M(me,[["__scopeId","data-v-702ab7a2"]]);export{Ee as default};