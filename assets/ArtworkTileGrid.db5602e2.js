import{d as Q,Q as ne,S as oe,r as M,o as u,h as y,F as G,K as O,l as F,f as s,T as le,j as N,t as D,U as ae,V as se,q as Y,B as J,_ as X,u as Z,M as ie,c as I,b as P,k as b,n as q,i as h,w as $,W as L,e as U,g as j,A as re,z as K,L as ce,p as ue,m as de}from"./index.97ac22f8.js";import{a as me}from"./thumbnail-image.2a893f56.js";import{c as pe,d as _e}from"./types.3cc10997.js";import{m as fe,s as ke}from"./util.daee968e.js";import{u as ve}from"./account.87c3cdb5.js";import{f as he}from"./token-meta.16ce217f.js";import{u as ee}from"./gallery.e83b74ea.js";import{u as te}from"./breakpoints.bd83b9c0.js";import{u as ye}from"./token-meta.aa8575f6.js";import{A as ge}from"./ArtworkFilters.0c08057e.js";import"./firebaseConfig.4bdd3a5f.js";import"./gallery-token.25579f23.js";const we={columnWidth:400,gap:0,keyMapper:(n,t,E,x)=>x,minColumns:1,maxColumns:void 0,rtl:!1,scrollContainer:null,ssrColumns:0};function xe({columns:n,columnWidth:t,emit:E,gap:x,items:i,maxColumns:r,minColumns:m,nextTick:g,onBeforeUnmount:z,onMounted:k,rtl:B,scrollContainer:T,ssrColumns:A,vue:R,wall:C,watch:H}){function l(o,e,f,V){const W=c(f);return V+e+W<=o?l(o,e,f+1,V+e+W):f}function c(o){const e=Array.isArray(t.value)?t.value:[t.value];return e[o%e.length]}function p(){const o=l(C.value.getBoundingClientRect().width,x.value,0,-x.value),e=a(v(o));return e>0?e:1}function v(o){const e=r==null?void 0:r.value;return e&&o>e?e:o}function a(o){const e=m==null?void 0:m.value;return e&&o<e?e:o}function d(o){return[...new Array(o)].map(()=>[])}if(A.value>0){const o=d(A.value);i.value.forEach((e,f)=>o[f%A.value].push(f)),n.value=o}async function _(o){if(o>=i.value.length)return;await g();const e=[...C.value.children];B.value&&e.reverse();const f=e.reduce((V,W)=>W.getBoundingClientRect().height<V.getBoundingClientRect().height?W:V);n.value[+f.dataset.index].push(o),await _(o+1)}async function w(o=!1){if(n.value.length===p()&&!o){E(R===2?"redraw-skip":"redrawSkip");return}n.value=d(p());const e=T==null?void 0:T.value,f=e?e.scrollTop:window.scrollY;await _(0),e?e.scrollBy({top:f-e.scrollTop}):window.scrollTo({top:f}),E("redraw")}const S=typeof ResizeObserver>"u"?void 0:new ResizeObserver(()=>w());return k(()=>{w(),S==null||S.observe(C.value)}),z(()=>S==null?void 0:S.unobserve(C.value)),H([i,B],()=>w(!0)),H([t,x,m,r],()=>w()),{getColumnWidthTarget:c}}const Ce=["data-index"],be=Q({__name:"masonry-wall",props:ne({columnWidth:{},items:{},gap:{},rtl:{type:Boolean},ssrColumns:{},scrollContainer:{},minColumns:{},maxColumns:{},keyMapper:{type:Function}},we),emits:["redraw","redrawSkip"],setup(n,{emit:t}){const E=n,{columnWidth:x,items:i,gap:r,rtl:m,ssrColumns:g,scrollContainer:z,minColumns:k,maxColumns:B,keyMapper:T}=oe(E),A=M([]),R=M(),{getColumnWidthTarget:C}=xe({columns:A,columnWidth:x,emit:t,gap:r,items:i,keyMapper:T,maxColumns:B,minColumns:k,nextTick:ae,onBeforeUnmount:se,onMounted:Y,rtl:m,scrollContainer:z,ssrColumns:g,vue:3,wall:R,watch:J});return(H,l)=>(u(),y("div",{ref_key:"wall",ref:R,class:"masonry-wall",style:F({display:"flex",gap:`${s(r)}px`})},[(u(!0),y(G,null,O(A.value,(c,p)=>(u(),y("div",{key:p,class:"masonry-column","data-index":p,style:F({display:"flex","flex-basis":`${s(C)(p)}px`,"flex-direction":"column","flex-grow":1,gap:`${s(r)}px`,height:["-webkit-max-content","-moz-max-content","max-content"],"min-width":0})},[(u(!0),y(G,null,O(c,(v,a)=>(u(),y("div",{key:s(T)(s(i)[v],p,a,v),class:"masonry-item"},[le(H.$slots,"default",{item:s(i)[v],column:p,row:a,index:v},()=>[N(D(s(i)[v]),1)])]))),128))],12,Ce))),128))],4))}}),Te=(()=>{const n=be;return n.install=t=>{t.component("MasonryWall",n)},n})();const Ee=["src"],Ae={class:"header"},Me={class:"platform"},Be={style:{"font-size":"1.6em","font-weight":"bold"}},Se={key:1,style:{"font-weight":"bold"}},De={key:2,style:{display:"flex","align-items":"center"}},$e={key:2,style:{"font-size":"0.8em","padding-left":"1em",color:"#606266"}},ze={key:3,style:{height:"32px"}},Re={style:{"font-size":"0.9em","line-height":"1.3em"}},He={style:{margin:"10px 0px"}},Ve=Q({__name:"ArtworkTile",props:{token_meta:null,column_width:null},setup(n){const t=n,E=Z(),x=me(ie(t,"token_meta")),i=M(!1),r=M(0),m=M(),g=M(),z=ve(),k=ee(),{screen_type:B}=te(),T=I(()=>pe(t.token_meta.entity.platform)),A=async()=>{const a=await _e(t.token_meta);if(!a){ke("Error getting source file");return}window.open(a,"_blank")},R=I(()=>t.token_meta.entity.aspect_ratio?t.column_width/t.token_meta.entity.aspect_ratio:t.column_width),C=I(()=>{var d,_;const a=(_=(d=t.token_meta)==null?void 0:d.entity)==null?void 0:_.media_size;return a?fe(a):""}),H=()=>{const a=E.resolve({name:"preview-plaque",params:{token_meta_id:t.token_meta.id}});window.open(a.href)},l=()=>{window.open(t.token_meta.entity.public_link,"_blank")},c=()=>{window.open(t.token_meta.entity.artist_social_link,"_blank")};function p(){if(!m.value){console.log("animateDivHeight - error finding tile container");return}if(!i.value&&r.value==0&&(r.value=m.value.offsetHeight),i.value=!i.value,!g.value){console.log("animateDivHeight - error finding detail container");return}let a;i.value&&g.value.offsetHeight>r.value?a=g.value.offsetHeight:a=r.value;const d=300,_=10,w=m.value.offsetHeight,S=Math.ceil(a-w),o=Math.ceil(d/_),e=S/o;let f=0;const V=setInterval(()=>{if(f>=o){m.value.style.height=a+"px",clearInterval(V);return}f++;const W=w+e*f;m.value.style.height=W+"px"},_)}const v=()=>{re.prompt(`Are you sure you want to delete ${t.token_meta.entity.name}? Please type the word 'DELETE' to proceed.`,"Delete Artwork",{confirmButtonText:"Delete",cancelButtonText:"Cancel",inputPattern:/^DELETE$/i,inputErrorMessage:"Please enter the word DELETE to confirm."}).then(({value:a})=>{if(a)return he(t.token_meta.id)}).then(()=>{K({message:"Artwork deleted",type:"success",showClose:!0,duration:12e3})}).catch(a=>{K({message:`Error deleting artwork - ${a}`,type:"error",showClose:!0,duration:12e3})})};return(a,d)=>{const _=P("el-button"),w=P("el-tooltip");return u(),y("div",{ref_key:"tile_container",ref:m,class:"custom-card",onClick:p,style:F(`height: ${s(R)}px !important`)},[b("img",{class:q(i.value?"absolute":""),src:s(x)},null,10,Ee),b("div",{class:q([i.value?"show-blur":"hide-blur","absolute overlay transition"])},null,2),b("div",{class:q(["transition absolute",i.value?"hide-blur":"show-blur"])},[b("div",Ae,D(`${n.token_meta.entity.name} | ${n.token_meta.entity.artist}`),1),b("div",Me,D(s(T)),1)],2),b("div",{ref_key:"detail_container",ref:g,class:q(["detail-container transition",i.value?"show-blur":"hide-blur"])},[b("div",Be,D(n.token_meta.entity.name),1),n.token_meta.entity.artist_social_link?(u(),y("div",{key:0,style:F(s(B)=="xs"?"display: flex; justify-content: center;":"")},[h(_,{link:"",style:{"font-weight":"bold",display:"block"},disabled:!i.value,onClick:L(c,["stop"])},{default:$(()=>[N(D(n.token_meta.entity.artist),1)]),_:1},8,["disabled","onClick"])],4)):(u(),y("div",Se,D(n.token_meta.entity.artist),1)),i.value?(u(),y("div",De,[h(w,{class:"box-item",effect:"dark",content:"Edit art data",placement:"top"},{default:$(()=>[h(_,{icon:"Edit",text:"",circle:"",onClick:d[0]||(d[0]=L(S=>s(E).push({name:"edit-artwork",params:{token_meta_id:t.token_meta.id}}),["stop"]))})]),_:1}),h(w,{class:"box-item",effect:"dark",content:"Download art",placement:"top"},{default:$(()=>[h(_,{icon:"Download",text:"",circle:"",onClick:L(A,["stop"])},null,8,["onClick"])]),_:1}),h(w,{class:"box-item",effect:"dark",content:"Preview plaque",placement:"top"},{default:$(()=>[h(_,{icon:"Tickets",text:"",circle:"",onClick:L(H,["stop"])},null,8,["onClick"])]),_:1}),n.token_meta.entity.public_link?(u(),U(w,{key:0,class:"box-item",effect:"dark",content:"QR Code Link",placement:"top"},{default:$(()=>[h(_,{icon:"Link",text:"",circle:"",onClick:L(l,["stop"])},null,8,["onClick"])]),_:1})):j("",!0),s(z).is_user_admin?(u(),U(w,{key:1,class:"box-item",effect:"dark",content:"Delete Artwork",placement:"top"},{default:$(()=>[h(_,{icon:"Delete",text:"",circle:"",onClick:L(v,["stop"])},null,8,["onClick"])]),_:1})):j("",!0),s(C)?(u(),y("span",$e,D(s(C)),1)):j("",!0)])):(u(),y("div",ze)),b("div",Re,D(n.token_meta.entity.description),1),b("div",He,[(u(!0),y(G,null,O(s(k).token_id_to_gallery_map.get(t.token_meta.id),S=>(u(),U(_,{size:"small",round:"",plain:"",type:"primary",style:{margin:"3px 10px 3px 0px"}},{default:$(()=>[N(D(S.entity.name),1)]),_:2},1024))),256))])],2)],4)}}});var We=X(Ve,[["__scopeId","data-v-a0cdccec"]]);const Ie=n=>(ue("data-v-0fdc092a"),n=n(),de(),n),Le=Ie(()=>b("div",{style:{"padding-bottom":"90px"}},null,-1)),Fe={key:1,style:{padding:"1em"}},Pe=Q({__name:"ArtworkTileGrid",setup(n){const t=Z(),E=ye();ee();const x=M(null),i=30,r=M(i),m=M([]),g=M("");J(g,l=>{r.value=i});const z=250,k=10,{screen_type:B}=te(),T=I(()=>{switch(B.value){case"xs":return 340-k*2;case"sm":return 650-k*2;case"md":return 960-k*2;case"lg":return 1200-k*2;case"xl":return 1700-k*2}return 0}),A=I(()=>{let l=Math.floor(T.value/(z+k));return l>5&&(l=5),(T.value-(l-1)*k)/l}),R=I(()=>E.sorted_all_token_metas.filter(l=>Boolean(l.entity.aspect_ratio))),C=I(()=>{const l=m.value,c=0,p=c+r.value;return l.slice(c,p)});Y(()=>{const l=document.getElementById("masonry-container");if(!l){console.log("ArtworkTileGrid error, masonary_wall element not found");return}l.addEventListener("scroll",()=>{const c=l.scrollTop,p=l.scrollHeight,v=l.clientHeight;c/(p-v)*100>90&&r.value<m.value.length&&(r.value=r.value+20)})});const H=l=>{console.log("updateFilteredTokens",l),m.value=l};return(l,c)=>{const p=P("el-input"),v=P("el-button"),a=P("RouterView");return u(),y(G,null,[b("div",{class:"subheader",style:F([{display:"flex","align-items":"center"},s(B)=="xs"?"padding: 0px 8px 10px;":""])},[h(p,{modelValue:g.value,"onUpdate:modelValue":c[0]||(c[0]=d=>g.value=d),"prefix-icon":s(ce),placeholder:"Search artwork or artist",style:{"max-width":"350px"},clearable:""},null,8,["modelValue","prefix-icon"]),h(ge,{all_tokens:s(R),search_filter:g.value,use_local_storage:!0,onUpdateFilteredTokens:c[1]||(c[1]=d=>H(d))},null,8,["all_tokens","search_filter"]),h(v,{icon:"Plus",type:"info",onClick:c[2]||(c[2]=d=>s(t).push({name:"new-artwork"})),style:{"margin-left":"10px"},size:"small"},{default:$(()=>[N("Artwork")]),_:1})],4),Le,b("div",{id:"masonry-container",ref_key:"masonryContainer",ref:x,style:{"overflow-y":"auto",height:"100%",padding:"10px 10px 90px 10px"}},[s(C).length>0?(u(),U(s(Te),{key:0,id:"masonary-wall","scroll-container":x.value,items:s(C),"column-width":z,gap:k,style:F(`width: ${s(T)}px; margin: auto`),"max-columns":5},{default:$(({item:d})=>[h(We,{token_meta:d,column_width:s(A)},null,8,["token_meta","column_width"])]),_:1},8,["scroll-container","items","style"])):(u(),y("div",Fe,"No artwork found"))],512),h(a)],64)}}});var et=X(Pe,[["__scopeId","data-v-0fdc092a"]]);export{et as default};
