import{d as f,h as g,i as a,j as i,w as n,u as w,a as y,g as x,b,e as v,f as C,o as d,k as s}from"./index.13bbce9c.js";const A={style:{padding:"20px 0px",display:"flex",gap:"10px",width:"100%"}},T={style:{padding:"12px 0px"}},z={style:{display:"flex",gap:"10px",width:"100%"}},N=f({__name:"QrLandingActions",props:{token_meta:{}},setup(p){const u=b();v();const r=p,_=()=>{window.open("https://moda-labs.xyz/","_blank")},c=()=>{window.open("https://www.instagram.com/projekt.______/","_blank")},m=()=>{var e,t;window.open((t=(e=r.token_meta)==null?void 0:e.entity)==null?void 0:t.public_link,"_blank")},k=()=>{var o,l;const e=(l=(o=r.token_meta)==null?void 0:o.entity)==null?void 0:l.artist;if(!e){console.log("No artist name found");return}const t=encodeURIComponent(e);window.location.href=`venmo://paycharge?txn=pay&recipients=ModaArt&note=Tip%20for%20${t}`,setTimeout(()=>{window.open(`https://account.venmo.com/pay?recipients=ModaArt&note=Tip%20for%20${t}`,"_blank")},1500)};return(e,t)=>{const o=C("el-button");return d(),g("div",null,[a("div",A,[i(o,{class:"action-button",color:"#000000",size:"large",onClick:k,round:""},{default:n(()=>t[1]||(t[1]=[s("Tip Artist")])),_:1}),i(o,{class:"action-button",color:"#000000",size:"large",round:"",onClick:t[0]||(t[0]=l=>w(u).push({name:"catalog-gallery-list"}))},{default:n(()=>t[2]||(t[2]=[s("View Catalog")])),_:1}),e.token_meta.entity.public_link?(d(),y(o,{key:0,class:"action-button",color:"#000000",size:"large",onClick:m,round:""},{default:n(()=>t[3]||(t[3]=[s("Learn More")])),_:1})):x("",!0)]),a("div",T,[t[6]||(t[6]=a("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"Powered By",-1)),a("div",z,[i(o,{onClick:_,style:{"flex-grow":"1"}},{default:n(()=>t[4]||(t[4]=[s("Moda Plaque")])),_:1}),i(o,{onClick:c,style:{"flex-grow":"1"}},{default:n(()=>t[5]||(t[5]=[s("Projekt ______")])),_:1})])])])}}});export{N as default};
