import{c as T}from"./types.3cc10997.js";import{u as V}from"./thumbnail-image.2a893f56.js";import{m as I}from"./util.daee968e.js";import{_ as w,d as S,M as B,c as k,b as g,o as d,h as p,k as l,i as x,f as i,t as h,g as z,C as A,F as b,p as F,m as L,r as y,L as $,K as C,e as N,l as U}from"./index.97ac22f8.js";import{A as D}from"./ArtworkFilters.0c08057e.js";const M=a=>(F("data-v-69a39bfa"),a=a(),L(),a),R=M(()=>l("hr",{class:"hr"},null,-1)),E={class:"card-flex-container"},H={style:{display:"flex","align-items":"center",margin:"3px 25px 3px 0px"}},K={style:{flex:"3 1 0%","text-align":"left","align-items":"center"}},P={class:"bold"},Y={class:"bold"},j={style:{"margin-right":"10px","min-width":"100px"}},q={style:{opacity:"0.5","font-size":"var(--el-font-size-extra-small)"}},G={key:0,style:{opacity:"0.5","font-size":"var(--el-font-size-extra-small)"}},J=S({__name:"AddTokenItem",props:{in_list:{type:Boolean},token_meta:null},emits:["update_token_list"],setup(a,{emit:v}){const t=a,u=V(B(t,"token_meta")),c=k(()=>T(t.token_meta.entity.platform)),_=k(()=>{var n,s;const r=(s=(n=t.token_meta)==null?void 0:n.entity)==null?void 0:s.media_size;return r?I(r):""}),m=k({get(){return t.in_list},set(){v("update_token_list",t.token_meta.id)}});return(r,n)=>{const s=g("el-image"),e=g("el-checkbox");return d(),p(b,null,[R,l("div",E,[l("div",H,[x(s,{src:i(u),style:{width:"50px",height:"50px"},fit:"contain"},null,8,["src"])]),l("div",K,[l("p",P,h(t.token_meta.entity.name),1),l("p",Y,h(t.token_meta.entity.artist),1)]),l("div",j,[l("div",q,h(i(c)),1),i(_)?(d(),p("div",G,h(i(_)),1)):z("",!0)]),x(e,{modelValue:i(m),"onUpdate:modelValue":n[0]||(n[0]=o=>A(m)?m.value=o:null),style:{"margin-right":"25px"}},null,8,["modelValue"])])],64)}}});var O=w(J,[["__scopeId","data-v-69a39bfa"]]);const Q={style:{display:"flex","align-items":"center"}},W={key:0},X=l("hr",{class:"hr"},null,-1),le=S({__name:"TokenSelectList",props:{selected_token_meta_id_list:null,token_meta_list:null,max_height:null},emits:["update:selected_token_meta_id_list"],setup(a,{emit:v}){const t=a,u=y(!1),c=y(""),_=y([]),m=s=>{const e=[];if(u.value)e.push(...s);else{for(let o of s)r.value.has(o.id)?e.unshift(o):e.push(o);u.value=!0}_.value=e},r=k(()=>new Set(t.selected_token_meta_id_list)),n=s=>{let e=[...t.selected_token_meta_id_list];e.some(o=>o===s)?e=e.filter(o=>o!=s):e.push(s),v("update:selected_token_meta_id_list",e)};return(s,e)=>{const o=g("el-input");return d(),p(b,null,[l("div",Q,[x(o,{type:"text",modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=f=>c.value=f),"prefix-icon":i($),placeholder:"Search by artwork title or artist name"},null,8,["modelValue","prefix-icon"]),x(D,{all_tokens:t.token_meta_list,search_filter:c.value,use_local_storage:!1,onUpdateFilteredTokens:m},null,8,["all_tokens","search_filter"])]),l("div",{style:U({marginTop:"10px",overflowY:"auto",maxHeight:t.max_height?`${t.max_height}px`:""})},[_.value.length==0?(d(),p("div",W,"No artwork found")):z("",!0),(d(!0),p(b,null,C(_.value,f=>(d(),N(O,{token_meta:f,in_list:Boolean(i(r).has(f.id)),onUpdate_token_list:n},null,8,["token_meta","in_list"]))),256)),X],4)],64)}}});export{le as _};
