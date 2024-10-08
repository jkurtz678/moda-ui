import{a as L}from"./bid.3628f065.js";import{i as B}from"./token-meta.3b6b8610.js";import{s as x}from"./util.6735cd3e.js";import{a as M}from"./thumbnail-image.b60437a6.js";import{p as O}from"./types.903c99bc.js";import{d as w,J as R,h as p,i as n,u as f,t as v,e as V,b as j,o as i,_ as A,a as T,w as c,f as g,j as _,k as h,r as k,c as m,m as q,F as C,H as b}from"./index.ba21b5de.js";import{_ as D,a as E,b as H,c as I}from"./search-icon.c7e2c65a.js";import"./firebaseConfig.4d01e9b5.js";const N={style:{display:"flex","flex-direction":"column",height:"100%"}},P={style:{display:"flex","border-radius":"18px","flex-grow":"1"}},S=["src"],z={style:{"font-weight":"bold"}},F=w({__name:"CatalogArtTile",props:{token_meta:{}},setup(y){V();const r=j(),s=y,u=M(R(s,"token_meta"));return(d,a)=>(i(),p("div",{class:"tile-container",style:{margin:"12px",width:"340px"},onClick:a[0]||(a[0]=t=>f(r).push({name:"qr-landing",params:{token_meta_id:s.token_meta.id}}))},[n("div",N,[n("div",P,[n("img",{src:f(u)},null,8,S)]),n("h2",z,v(s.token_meta.entity.name),1),n("div",null,v(f(O)(s.token_meta)),1)])]))}});var G=A(F,[["__scopeId","data-v-2bbb4125"]]);const U=w({__name:"CatalogHeader",setup(y){const r=a=>new URL({"../../assets/base.css":D,"../../assets/logo.png":E,"../../assets/logo.svg":H,"../../assets/search-icon.svg":I}[`../../assets/${a}`],self.location).href,s=()=>{window.open("https://moda-labs.xyz/","_blank")},u=()=>{window.open("https://www.instagram.com/projekt.______/","_blank")},d=()=>{window.location.href="https://labs.modadisplay.art/#/home/plaque-list"};return(a,t)=>{const e=g("el-image"),o=g("el-button"),l=g("el-divider"),$=g("el-header");return i(),T($,null,{default:c(()=>[_(e,{src:r("logo.png"),style:{width:"60px",height:"60px","margin-right":"2em"}},null,8,["src"]),t[3]||(t[3]=n("h1",{style:{"font-weight":"bold"}},"MODA CATALOG",-1)),t[4]||(t[4]=n("div",{style:{"flex-grow":"1"}},null,-1)),_(o,{onClick:u},{default:c(()=>t[0]||(t[0]=[h("Projekt _______")])),_:1}),_(o,{onClick:s},{default:c(()=>t[1]||(t[1]=[h("MODA Plaque")])),_:1}),_(o,{color:"#000000",size:"large",onClick:d},{default:c(()=>t[2]||(t[2]=[h("LOGIN")])),_:1}),_(l,{style:{position:"absolute",bottom:"0px",left:"0px",right:"0px",margin:"0px"}})]),_:1})}}});var W=A(U,[["__scopeId","data-v-23d99fe9"]]);const J={style:{"overflow-y":"auto",height:"100%"}},K={class:"container"},Q={style:{"font-weight":"bold"}},X={style:{display:"flex",margin:"-12px","flex-wrap":"wrap"}},at=w({__name:"CatalogView",setup(y){const r=k([]),s=k([]);m(()=>r.value.map(t=>({name:t.entity.name,artist:t.entity.artist,price:t.entity.price,price_unit:t.entity.price_unit})).sort((t,e)=>!(t!=null&&t.artist)||!(e!=null&&e.artist)?0:t.artist.localeCompare(e.artist)));const u=m(()=>Array.from(new Set(r.value.map(t=>t.entity.artist||""))).sort((t,e)=>t.localeCompare(e))),d=m(()=>r.value.reduce((t,e)=>(e.entity.artist&&(t[e.entity.artist]||(t[e.entity.artist]=[]),t[e.entity.artist].push(e)),t),{})),a=m(()=>r.value.reduce((t,e)=>(t[e.id]=e,t),{}));return m(()=>s.value.map(t=>{var o,l;const e=a.value[t.entity.token_meta_id];return{bidding_name:t.entity.bidding_name,email:t.entity.email,phone_number:t.entity.phone_number,amount:t.entity.amount,amount_unit:t.entity.amount_unit,artist_name:(o=e==null?void 0:e.entity)==null?void 0:o.artist,artwork_name:(l=e==null?void 0:e.entity)==null?void 0:l.name}}).sort((t,e)=>!(t!=null&&t.artwork_name)||!(e!=null&&e.artwork_name)?0:t.artwork_name.localeCompare(e.artwork_name))),q(async()=>{B(t=>{console.log("R",t),r.value=t}).catch(t=>{x(`Error fetching token metas: ${t}`)}),L(t=>{console.log("bids",t),s.value=t.filter(e=>!!e.entity.amount&&e.entity.amount>=0)}).catch(t=>{x(`Error fetching bids: ${t}`)})}),(t,e)=>(i(),p("div",J,[_(W),n("div",K,[(i(!0),p(C,null,b(u.value,o=>(i(),p("div",{key:o,style:{margin:"24px 0px"}},[n("h1",Q,v(o),1),n("div",X,[(i(!0),p(C,null,b(d.value[o],l=>(i(),T(G,{token_meta:l},null,8,["token_meta"]))),256))])]))),128))])]))}});export{at as default};
