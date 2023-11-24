import{u as B}from"./gallery.f80d830d.js";import{T as y}from"./types.3cc10997.js";import{_ as L,d as O,r as b,B as p,O as U,c as S,b as m,o as h,e as V,w as i,i as t,j as q,f as A,h as N,K as T,F as D,p as M,m as P,k as g}from"./index.0b845e6d.js";const w=f=>(M("data-v-e9b18f50"),f=f(),P(),f),j=w(()=>g("div",{class:"caption"},"Filter by gallery",-1)),z=w(()=>g("div",{class:"caption"},"Filter by aspect ratio",-1)),E=w(()=>g("div",{class:"caption"},"Filter by platform",-1)),G=w(()=>g("div",{class:"caption"},"Sort order",-1)),K=O({__name:"ArtworkFilters",props:{all_tokens:null,search_filter:null,use_local_storage:{type:Boolean}},emits:["update-filtered-tokens"],setup(f,{emit:F}){const s=f,k=B(),_=b("");p(_,a=>{s.use_local_storage&&localStorage.setItem("artwork_grid_aspect_ratio_filter",a)});const n=b("");p(n,a=>{s.use_local_storage&&localStorage.setItem("artwork_grid_filter_by_gallery",a)});const c=b("");p(c,a=>{s.use_local_storage&&localStorage.setItem("artwork_grid_filter_by_platform",a)});const u=b("created_at");p(u,a=>{s.use_local_storage&&localStorage.setItem("artwork_grid_sort_order",a)}),U(()=>{s.use_local_storage&&(_.value=localStorage.getItem("artwork_grid_aspect_ratio_filter")||"",n.value=localStorage.getItem("artwork_grid_filter_by_gallery")||"",c.value=localStorage.getItem("artwork_grid_filter_by_platform")||"",u.value=localStorage.getItem("artwork_grid_sort_order")||"name")});const I=S(()=>_.value||n.value||c.value),C=S(()=>{if(!s.all_tokens)return[];let a=s.all_tokens.filter(e=>{var v,l;if(s.search_filter&&!((v=e.entity.artist)!=null&&v.toLowerCase().includes(s.search_filter.toLowerCase()))&&!((l=e.entity.name)!=null&&l.toLowerCase().includes(s.search_filter.toLowerCase())))return!1;const r=k.gallery_token_meta_list.find(d=>d.entity.gallery_id==n.value);if(n.value&&(r==null?void 0:r.entity.token_meta_id)!=e.id)return!1;switch(c.value){case"moda_archive":if(e.entity.platform!=y.Archive)return!1;break;case"opensea":if(e.entity.platform!=y.Opensea&&e.entity.platform!=y.OpenseaArchive)return!1;break;case"archive_demo":if(e.entity.platform!=y.ArchiveDemo)return!1;break}switch(_.value){case"portrait":if(!e.entity.aspect_ratio||e.entity.aspect_ratio>.9)return!1;break;case"landscape":if(!e.entity.aspect_ratio||e.entity.aspect_ratio<1.1)return!1;break;case"square":if(!e.entity.aspect_ratio||e.entity.aspect_ratio<.9||e.entity.aspect_ratio>1.1)return!1;break}return!0});return u.value==="name"?a=a.sort((e,r)=>e.entity.name.localeCompare(r.entity.name)):u.value==="created_at"&&(a=a.sort((e,r)=>e.entity.created_at==null&&r.entity.created_at==null?0:e.entity.created_at==null?1:r.entity.created_at==null?-1:r.entity.created_at.seconds-e.entity.created_at.seconds)),a});return p(C,a=>{F("update-filtered-tokens",a)},{immediate:!0}),(a,e)=>{const r=m("el-button"),v=m("el-badge"),l=m("el-option"),d=m("el-select"),x=m("el-popover");return h(),V(x,{placement:"bottom",title:"Artwork Filters",width:300,trigger:"click"},{reference:i(()=>[t(v,{"is-dot":"",hidden:!A(I)},{default:i(()=>[t(r,{icon:"Filter",style:{"margin-left":"10px"},type:"info",size:"small"},{default:i(()=>[q("Filters")]),_:1})]),_:1},8,["hidden"])]),default:i(()=>[j,t(d,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=o=>n.value=o),placeholder:"Filter by gallery",class:"filter-select"},{default:i(()=>[t(l,{label:"All artwork",value:""}),(h(!0),N(D,null,T(A(k).gallery_list,o=>(h(),V(l,{key:o.id,label:`${o.entity.name}`,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),z,t(d,{modelValue:_.value,"onUpdate:modelValue":e[1]||(e[1]=o=>_.value=o),class:"filter-select"},{default:i(()=>[t(l,{label:"All",value:""}),t(l,{label:"Landscape",value:"landscape"}),t(l,{label:"Portrait",value:"portrait"}),t(l,{label:"Square",value:"square"})]),_:1},8,["modelValue"]),E,t(d,{modelValue:c.value,"onUpdate:modelValue":e[2]||(e[2]=o=>c.value=o),class:"filter-select"},{default:i(()=>[t(l,{label:"All",value:""}),t(l,{label:"Moda Archive",value:"moda_archive"}),t(l,{label:"Opensea",value:"opensea"}),t(l,{label:"Demo",value:"archive_demo"})]),_:1},8,["modelValue"]),G,t(d,{modelValue:u.value,"onUpdate:modelValue":e[3]||(e[3]=o=>u.value=o),placeholder:"Sort by",class:"filter-select"},{default:i(()=>[t(l,{label:"Sort by name",value:"name"}),t(l,{label:"Sort by newest",value:"created_at"})]),_:1},8,["modelValue"])]),_:1})}}});var Q=L(K,[["__scopeId","data-v-e9b18f50"]]);export{Q as A};
