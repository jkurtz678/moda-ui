import{u as w}from"./gallery.6d2ccea5.js";import{_ as $,d as k,c,b as d,o as n,h as u,k as l,t as i,f as o,i as p,X as S,F as v,p as G,m as I,w as g,l as b,u as C,j as N,g as V,K as B,e as q}from"./index.4e35c88c.js";import{u as z}from"./breakpoints.7ec9e752.js";import"./types.3cc10997.js";import"./firebaseConfig.4bdd3a5f.js";import"./gallery-token.25579f23.js";import"./account.cdd61a00.js";import"./util.615b2f0e.js";const L=s=>(G("data-v-0a283976"),s=s(),I(),s),R={class:"flex-container"},j={style:{"flex-grow":"1","text-align":"left"}},E={class:"bold",style:{"font-size":"var(--el-font-size-large)"}},F={style:{"min-width":"100px","margin-left":"20px"}},D={style:{display:"flex"}},K=L(()=>l("hr",null,null,-1)),P=k({__name:"GalleryItem",props:{gallery:null},setup(s){const r=s,a=w(),m=c(()=>{var e;const t=((e=a.gallery_user_id_map.get(r.gallery.id))==null?void 0:e.length)||0;return`${t} user${t==1?"":"s"}`}),_=c(()=>{var e;const t=((e=a.gallery_plaque_id_map.get(r.gallery.id))==null?void 0:e.length)||0;return`${t} plaque${t==1?"":"s"}`}),h=c(()=>{var e;const t=((e=a.gallery_token_meta_id_map.get(r.gallery.id))==null?void 0:e.length)||0;return`${t} artwork${t==1?"":"s"}`});return(t,e)=>{const y=d("el-button");return n(),u(v,null,[l("div",R,[l("div",j,[l("div",E,i(r.gallery.entity.name),1),l("div",null,i(o(m)),1)]),l("div",F,[l("div",null,i(o(_)),1),l("div",null,i(o(h)),1)]),l("div",D,[p(y,{icon:"Edit",text:"",circle:"",onClick:e[0]||(e[0]=f=>o(S).push({name:"edit-gallery",params:{gallery_id:r.gallery.id}}))})])]),K],64)}}});var T=$(P,[["__scopeId","data-v-0a283976"]]);const X=s=>(G("data-v-77d823c9"),s=s(),I(),s),A={style:{display:"flex","justify-content":"center","margin-top":"50px"}},H={class:"card-header"},J=X(()=>l("span",{style:{"font-size":"18px"}},"Galleries",-1)),M={key:0},O=k({__name:"GalleryList",setup(s){const{md_and_up:r}=z(),a=C(),m=w(),_=c(()=>m.gallery_list);return(h,t)=>{const e=d("el-button"),y=d("el-card"),f=d("RouterView");return n(),u(v,null,[l("div",A,[p(y,{class:"container-card",style:b(o(r)?"min-width: 700px;":"")},{header:g(()=>[l("div",H,[J,p(e,{icon:"Plus",onClick:t[0]||(t[0]=x=>o(a).push({name:"new-gallery"})),color:"#000000"},{default:g(()=>[N("New Gallery ")]),_:1})])]),default:g(()=>[o(_).length==0?(n(),u("div",M,"No galleries found")):V("",!0),(n(!0),u(v,null,B(o(_),x=>(n(),q(T,{gallery:x},null,8,["gallery"]))),256))]),_:1},8,["style"])]),p(f)],64)}}});var se=$(O,[["__scopeId","data-v-77d823c9"]]);export{se as default};