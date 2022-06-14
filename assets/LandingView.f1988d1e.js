import{_ as M,d as L,k as y,a as A,u as C,l as I,r as d,o as p,f as m,w as l,h as w,y as N,z as S,i as o,j as u}from"./index.936fb6d5.js";import{u as q}from"./account.af8ead1f.js";import{s as v}from"./util.6c92016c.js";function V({mustBeMetaMask:e=!1,silent:_=!1,timeout:a=3e3}={}){c();let i=!1;return new Promise(h=>{window.ethereum?s():(window.addEventListener("ethereum#initialized",s,{once:!0}),setTimeout(()=>{s()},a));function s(){if(i)return;i=!0,window.removeEventListener("ethereum#initialized",s);const{ethereum:r}=window;r&&(!e||r.isMetaMask)?h(r):(!_&&console.error("@metamask/detect-provider:",e&&r?"Non-MetaMask window.ethereum detected.":"Unable to detect window.ethereum."),h(null))}});function c(){if(typeof e!="boolean")throw new Error("@metamask/detect-provider: Expected option 'mustBeMetaMask' to be a boolean.");if(typeof _!="boolean")throw new Error("@metamask/detect-provider: Expected option 'silent' to be a boolean.");if(typeof a!="number")throw new Error("@metamask/detect-provider: Expected option 'timeout' to be a number.")}}var z=V;const n=e=>(N("data-v-141379ed"),e=e(),S(),e),B=n(()=>o("h1",null,"MoDA LABS",-1)),T=n(()=>o("br",null,null,-1)),D=n(()=>o("p",null," All in one tool that helps artist and collectors showcase their collections in the physical world. Turn your home into a thriving digital art gallery. ",-1)),P=n(()=>o("br",null,null,-1)),j=n(()=>o("p",null," Zero Hassle. ",-1)),R=n(()=>o("br",null,null,-1)),U=n(()=>o("p",null," MoDA Labs includes a powerful extension frameworks that allows creators to manage and showcase their artwork in the physical world. Supporting communion with collectors and galleries, MoDA Labs provides a seamless experience for viewing digital art at the quality inteded by the artist. ",-1)),W=n(()=>o("br",null,null,-1)),$=u("Connect Wallet"),H=u(" The Metamask extension was not detected on your browser. Please "),Z=u(" install Metamask "),F=u(" and then refresh the page. "),G=u("What's New"),J=L({setup(e){const _=q(),a=y(!1),i=y(!1),c=A(),h=C();I(async()=>{const t=await z().catch(f=>{v(`sError detecting ethereum provider - ${f}`)});i.value=Boolean(t)});const s=()=>{window.location.assign("https://modadisplay.art/Upcoming-Events")},r=()=>{a.value=!0,_.login().then(()=>{if(c.query.redir&&typeof c.query.redir=="string"){window.location.assign(c.query.redir);return}h.push({name:"plaque-list"})}).catch(t=>{console.error(t),v(`Error connecting to Metamask - ${t.message?t.message:t}`)}).finally(()=>{a.value=!1})};return(t,f)=>{const g=d("el-button"),b=d("el-link"),k=d("el-alert"),x=d("el-card"),E=d("el-container");return p(),m(E,{style:{display:"flex","justify-content":"center"}},{default:l(()=>[w(x,{class:"landing-card",shadow:"never"},{default:l(()=>[B,T,D,P,j,R,U,W,i.value?(p(),m(g,{key:0,loading:a.value,onClick:r},{default:l(()=>[$]),_:1},8,["loading"])):(p(),m(k,{key:1,type:"warning","show-icon":"",title:"Install Metamask",style:{"margin-bottom":"1.5em"}},{default:l(()=>[H,w(b,{type:"primary",style:{"font-size":"12px","vertical-align":"top"},href:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"},{default:l(()=>[Z]),_:1}),F]),_:1})),w(g,{onClick:s},{default:l(()=>[G]),_:1})]),_:1})]),_:1})}}});var X=M(J,[["__scopeId","data-v-141379ed"]]);export{X as default};
