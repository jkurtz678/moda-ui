import{u as W,g as X,a as Y}from"./account.48b9d7d6.js";import{u as Z}from"./token-meta.816a45a7.js";import{u as ee,a as le,s as te}from"./gallery.e1cfa785.js";import{h as A}from"./firebaseConfig.bef60b65.js";import{d as G,c as V,b as m,o as k,e as $,k as a,t as U,i as s,f as r,x as ae,F as E,r as y,l as L,L as se,h as N,H as oe,g as ne,_ as ie,J as ue,w as p,u as re,a as _e,j as D,O as de,q as I,y as ce,z as pe}from"./index.7c180a61.js";import{s as q}from"./util.fb89753f.js";import{u as me}from"./breakpoints.33223c98.js";import{u as ve}from"./plaque.aa854030.js";import{_ as fe}from"./TokenSelectList.54b8e647.js";import"./types.01590581.js";import"./plaque.8894ab7b.js";import"./thumbnail-image.dd03ccf9.js";const ye=a("hr",{class:"hr"},null,-1),ge={class:"card-flex-container"},he={style:{flex:"3 1 0%"}},qe={class:"bold"},ke=G({__name:"AddPlaqueItem",props:{in_list:{type:Boolean},plaque:null},emits:["update_plaque_list"],setup(v,{emit:x}){const e=v,u=V({get(){return e.in_list},set(){x("update_plaque_list",e.plaque.id)}});return(g,d)=>{const c=m("el-checkbox");return k(),$(E,null,[ye,a("div",ge,[a("div",he,[a("p",qe,U(e.plaque.entity.name),1)]),s(c,{modelValue:r(u),"onUpdate:modelValue":d[0]||(d[0]=f=>ae(u)?u.value=f:null),style:{"margin-right":"10px"}},null,8,["modelValue"])])],64)}}}),xe={style:{"padding-top":"10px"}},we={key:0},be=a("hr",{class:"hr"},null,-1),Ve=G({__name:"PlaqueSelectList",props:{selected_plaque_id_list:null,plaque_list:null},emits:["update:selected_plaque_id_list"],setup(v,{emit:x}){const e=v,u=y(""),g=y([]);L(()=>{if(!!e.plaque_list)for(let o of e.plaque_list)c.value.has(o.id)?g.value.unshift(o):g.value.push(o)});const d=V(()=>u.value.trim()!==""?g.value.filter(o=>{var n;return(n=o.entity.name)==null?void 0:n.toLowerCase().includes(u.value.toLowerCase())}):g.value),c=V(()=>new Set(e.selected_plaque_id_list)),f=o=>{let n=[...e.selected_plaque_id_list];n.some(h=>h===o)?n=n.filter(h=>h!=o):n.push(o),x("update:selected_plaque_id_list",n)};return(o,n)=>{const h=m("el-input");return k(),$(E,null,[s(h,{type:"text",modelValue:u.value,"onUpdate:modelValue":n[0]||(n[0]=w=>u.value=w),"prefix-icon":r(se),placeholder:"Search by plaque name"},null,8,["modelValue","prefix-icon"]),a("div",xe,[r(d).length==0?(k(),$("div",we,"No plaque found")):N("",!0),(k(!0),$(E,null,oe(r(d),w=>(k(),ne(ke,{plaque:w,in_list:Boolean(r(c).has(w.id)),onUpdate_plaque_list:f},null,8,["plaque","in_list"]))),256)),be])],64)}}});const S=v=>(ce("data-v-b5cd9c2c"),v=v(),pe(),v),$e={class:"gallery-dialog"},Se=S(()=>a("div",null,"Gallery Name",-1)),Ue=S(()=>a("div",{class:"header"},"Users",-1)),Ce={key:0},Ee={style:{display:"flex","align-items":"center",padding:"1em 0em","max-width":"350px"}},Ge={style:{"margin-bottom":"2em"}},Be=S(()=>a("div",{class:"header"},"Plaque",-1)),Ae=S(()=>a("div",{class:"header"},"Artwork",-1)),De={class:"dialog-footer"},Ie=S(()=>a("div",{style:{"flex-grow":"1"}},null,-1)),Le=G({__name:"GalleryDetailDialog",setup(v){const x=y(!0),e=y({name:"",user_id_list:[],plaque_id_list:[],token_meta_id_list:[],created_at:A.now(),updated_at:A.now()}),u=y(),g=ue({name:[{required:!0,message:"Required",trigger:"blur"}]}),d=y(!1),c=y(""),f=re(),o=_e(),n=W(),h=ve(),w=ee(),P=Z(),{screen_type:R}=me(),b=y([]),j=V(()=>e.value.user_id_list.map(t=>b.value.find(l=>l.id==t))),z=V(()=>Object.values(h.plaque_map)),M=V(()=>Object.values(P.all_token_metas));L(async()=>{if(o.params.gallery_id){const t=w.gallery_list.find(l=>l.id===o.params.gallery_id);if(!t){q("Gallery not found"),f.push({name:"gallery-list"});return}e.value=t.entity,console.log("gallery.value",e.value),await X(e.value.user_id_list).then(l=>{console.log("accounts"),l.forEach(_=>{b.value.push(_)})}).catch(l=>{q(l)})}else b.value.push(n.get_account),e.value.user_id_list=[n.get_account.id]});const O=async t=>{if(!t){q("Error finding form element");return}if(!!await t.validate(_=>_)){if(d.value=!0,o.params.gallery_id){await le(o.params.gallery_id,e.value).then(()=>{I.success("Gallery updated"),f.push({name:"gallery-list"})}).catch(_=>{q(_)}).finally(()=>{d.value=!1});return}te(e.value).then(()=>{I({message:"Gallery saved",type:"success"}),f.push({name:"gallery-list"})}).catch(_=>{q(`Error saving gallery: ${_}`)}).finally(()=>{d.value=!1})}},T=async()=>{if(b.value.find(t=>t.entity.email===c.value)){q("User already added");return}await Y(c.value).then(t=>{t&&(b.value.push(t),e.value.user_id_list.push(t.id))}).catch(t=>{console.log(t),q("Invalid email")})},F=t=>{e.value.user_id_list.splice(t,1),b.value.splice(t,1)};return(t,l)=>{const _=m("el-input"),H=m("el-form-item"),B=m("el-table-column"),C=m("el-button"),J=m("el-row"),K=m("el-form"),Q=m("el-dialog");return k(),$("div",$e,[s(Q,{modelValue:x.value,"onUpdate:modelValue":l[5]||(l[5]=i=>x.value=i),title:"Edit Gallery",onClose:l[6]||(l[6]=i=>r(f).push({name:"gallery-list"})),top:"2vh",width:"75%",fullscreen:r(R)=="xs"},{footer:p(()=>[a("div",De,[Ie,s(C,{color:"#000000",onClick:l[4]||(l[4]=i=>O(u.value))},{default:p(()=>[D("Save")]),_:1})])]),default:p(()=>[s(K,{ref_key:"form_ref",ref:u,model:e.value,rules:g},{default:p(()=>[s(H,{prop:"name",style:{"max-width":"280px","margin-bottom":"2em"}},{default:p(()=>[Se,s(_,{modelValue:e.value.name,"onUpdate:modelValue":l[0]||(l[0]=i=>e.value.name=i),placeholder:"Name"},null,8,["modelValue"])]),_:1}),s(J,{style:{display:"block","margin-bottom":"2em"}},{default:p(()=>[Ue,s(r(de),{data:r(j),style:{width:"100%"}},{default:p(()=>[s(B,{prop:"entity.email",label:"Email"}),s(B,{fixed:"right",label:"",width:"50"},{default:p(i=>[i.$index?(k(),$("div",Ce,[s(C,{link:"",type:"primary",size:"small",icon:"close",onClick:Ne=>F(i.$index)},null,8,["onClick"])])):N("",!0)]),_:1})]),_:1},8,["data"]),a("div",null,U(`Users in gallery: ${e.value.user_id_list.length}`),1),a("div",Ee,[s(_,{modelValue:c.value,"onUpdate:modelValue":l[1]||(l[1]=i=>c.value=i),placeholder:"Email"},null,8,["modelValue"]),s(C,{icon:"Plus",color:"#000000",size:"small",style:{"margin-left":"1em"},onClick:T},{default:p(()=>[D(" Add user ")]),_:1})])]),_:1}),a("div",Ge,[Be,s(Ve,{selected_plaque_id_list:e.value.plaque_id_list,"onUpdate:selected_plaque_id_list":l[2]||(l[2]=i=>e.value.plaque_id_list=i),plaque_list:r(z)},null,8,["selected_plaque_id_list","plaque_list"]),a("div",null,U(`Plaques in gallery: ${e.value.plaque_id_list.length}`),1)]),a("div",null,[Ae,s(fe,{selected_token_meta_id_list:e.value.token_meta_id_list,"onUpdate:selected_token_meta_id_list":l[3]||(l[3]=i=>e.value.token_meta_id_list=i),token_meta_list:r(M)},null,8,["selected_token_meta_id_list","token_meta_list"]),a("div",null,U(`Artwork in gallery: ${e.value.token_meta_id_list.length}`),1)])]),_:1},8,["model","rules"])]),_:1},8,["modelValue","fullscreen"])])}}});var We=ie(Le,[["__scopeId","data-v-b5cd9c2c"]]);export{We as default};
