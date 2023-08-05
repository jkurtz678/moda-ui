import{u as Q,a as W,b as Y}from"./account.6384dc24.js";import{u as Z}from"./token-meta.a3560248.js";import{u as ee,s as le}from"./gallery.60d4a9cc.js";import{T as te}from"./types.f299f60b.js";import{n as B}from"./firebaseConfig.d7a6b5a9.js";import{d as G,c as V,b as m,o as x,h as $,k as a,t as U,i as s,f as r,A as ae,F as E,r as y,m as D,K as se,g as N,I as oe,e as ie,_ as ne,O as ue,w as p,u as re,a as _e,j as I,X as de,x as P,p as ce,l as pe}from"./index.1aa98373.js";import{s as q}from"./util.836858e2.js";import{u as me}from"./gallery.03aa48a1.js";import{u as ve}from"./breakpoints.15b65f7b.js";import{u as fe}from"./plaque.3648347a.js";import{_ as ye}from"./TokenSelectList.2cc5d5e6.js";import"./token-meta.0ea4b3db.js";import"./plaque.caaf42c2.js";import"./thumbnail-image.9f7873aa.js";const ge={class:"card-flex-container"},he={style:{flex:"3 1 0%",display:"flex","align-items":"center",padding:"0px 10px 0px 0px"}},qe={class:"bold"},xe=a("hr",{class:"hr"},null,-1),ke=G({__name:"AddPlaqueItem",props:{in_list:{type:Boolean},plaque:null},emits:["update_plaque_list"],setup(v,{emit:k}){const e=v,u=V({get(){return e.in_list},set(){k("update_plaque_list",e.plaque.id)}});return(g,d)=>{const c=m("el-checkbox");return x(),$(E,null,[a("div",ge,[a("div",he,[a("p",qe,U(e.plaque.entity.name),1)]),s(c,{modelValue:r(u),"onUpdate:modelValue":d[0]||(d[0]=f=>ae(u)?u.value=f:null),style:{"margin-right":"10px"}},null,8,["modelValue"])]),xe],64)}}}),we={style:{"margin-top":"10px","overflow-y":"auto","max-height":"250px"}},be={key:0},Ve=G({__name:"PlaqueSelectList",props:{selected_plaque_id_list:null,plaque_list:null},emits:["update:selected_plaque_id_list"],setup(v,{emit:k}){const e=v,u=y(""),g=y([]);D(()=>{if(!!e.plaque_list)for(let o of e.plaque_list)c.value.has(o.id)?g.value.unshift(o):g.value.push(o)});const d=V(()=>u.value.trim()!==""?g.value.filter(o=>{var i;return(i=o.entity.name)==null?void 0:i.toLowerCase().includes(u.value.toLowerCase())}):g.value),c=V(()=>new Set(e.selected_plaque_id_list)),f=o=>{let i=[...e.selected_plaque_id_list];i.some(h=>h===o)?i=i.filter(h=>h!=o):i.push(o),k("update:selected_plaque_id_list",i)};return(o,i)=>{const h=m("el-input");return x(),$(E,null,[s(h,{type:"text",modelValue:u.value,"onUpdate:modelValue":i[0]||(i[0]=w=>u.value=w),"prefix-icon":r(se),placeholder:"Search by plaque name"},null,8,["modelValue","prefix-icon"]),a("div",we,[r(d).length==0?(x(),$("div",be,"No plaque found")):N("",!0),(x(!0),$(E,null,oe(r(d),w=>(x(),ie(ke,{plaque:w,in_list:Boolean(r(c).has(w.id)),onUpdate_plaque_list:f},null,8,["plaque","in_list"]))),256))])],64)}}});const S=v=>(ce("data-v-1929efac"),v=v(),pe(),v),$e={class:"gallery-dialog"},Se={style:{"max-width":"500px",margin:"0 auto"}},Ue=S(()=>a("div",{class:"header"},"Gallery Name",-1)),Ce=S(()=>a("div",{class:"header"},"Users",-1)),Ee={key:0},Ge={style:{display:"flex","align-items":"center",padding:"1em 0em","max-width":"350px"}},Ae={style:{"margin-bottom":"2em"}},Be=S(()=>a("div",{class:"header"},"Plaques",-1)),Ie=S(()=>a("div",{class:"header"},"Artwork",-1)),Pe={class:"dialog-footer"},De=S(()=>a("div",{style:{"flex-grow":"1"}},null,-1)),Ne=G({__name:"GalleryDetailDialog",setup(v){const k=y(!0),e=y({name:"",user_id_list:[],plaque_id_list:[],token_meta_id_list:[],created_at:B.now(),updated_at:B.now()}),u=y(),g=ue({name:[{required:!0,message:"Required",trigger:"blur"}]}),d=y(!1),c=y(""),f=re(),o=_e(),i=Q(),h=fe(),w=me(),L=Z(),{screen_type:T}=ve(),b=y([]),O=V(()=>e.value.user_id_list.map(t=>b.value.find(l=>l.id==t))),R=V(()=>Object.values(h.plaque_map)),j=V(()=>Object.values(L.all_token_metas).filter(t=>t.entity.platform!=te.Opensea));D(async()=>{if(o.params.gallery_id){const t=w.gallery_list.find(l=>l.id===o.params.gallery_id);if(!t){q("Gallery not found"),f.push({name:"gallery-list"});return}e.value=t.entity,console.log("gallery.value",e.value),await W(e.value.user_id_list).then(l=>{console.log("accounts"),l.forEach(_=>{b.value.push(_)})}).catch(l=>{q(l)})}else b.value.push(i.get_account),e.value.user_id_list=[i.get_account.id]});const M=async t=>{if(!t){q("Error finding form element");return}if(!!await t.validate(_=>_)){if(d.value=!0,o.params.gallery_id){await ee(o.params.gallery_id,e.value).then(()=>{P.success("Gallery updated"),f.push({name:"gallery-list"})}).catch(_=>{q(_)}).finally(()=>{d.value=!1});return}le(e.value).then(()=>{P({message:"Gallery saved",type:"success"}),f.push({name:"gallery-list"})}).catch(_=>{q(`Error saving gallery: ${_}`)}).finally(()=>{d.value=!1})}},z=async()=>{if(b.value.find(t=>t.entity.email===c.value)){q("User already added");return}await Y(c.value).then(t=>{t&&(b.value.push(t),e.value.user_id_list.push(t.id))}).catch(t=>{console.log(t),q("Invalid email")})},F=t=>{e.value.user_id_list.splice(t,1),b.value.splice(t,1)};return(t,l)=>{const _=m("el-input"),K=m("el-form-item"),A=m("el-table-column"),C=m("el-button"),X=m("el-row"),H=m("el-form"),J=m("el-dialog");return x(),$("div",$e,[s(J,{modelValue:k.value,"onUpdate:modelValue":l[5]||(l[5]=n=>k.value=n),title:"Edit Gallery",onClose:l[6]||(l[6]=n=>r(f).push({name:"gallery-list"})),top:"2vh",width:"75%",fullscreen:r(T)=="xs"},{footer:p(()=>[a("div",Pe,[De,s(C,{color:"#000000",onClick:l[4]||(l[4]=n=>M(u.value))},{default:p(()=>[I("Save")]),_:1})])]),default:p(()=>[a("div",Se,[s(H,{ref_key:"form_ref",ref:u,model:e.value,rules:g},{default:p(()=>[s(K,{prop:"name",style:{"max-width":"280px","margin-bottom":"2em"}},{default:p(()=>[Ue,s(_,{modelValue:e.value.name,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value.name=n),placeholder:"Name"},null,8,["modelValue"])]),_:1}),s(X,{style:{display:"block","margin-bottom":"1em"}},{default:p(()=>[Ce,s(r(de),{data:r(O),style:{width:"100%"}},{default:p(()=>[s(A,{prop:"entity.email",label:"Email"}),s(A,{fixed:"right",label:"",width:"50"},{default:p(n=>[n.$index?(x(),$("div",Ee,[s(C,{link:"",type:"primary",size:"small",icon:"close",onClick:Le=>F(n.$index)},null,8,["onClick"])])):N("",!0)]),_:1})]),_:1},8,["data"]),a("div",null,U(`Users in gallery: ${e.value.user_id_list.length}`),1),a("div",Ge,[s(_,{modelValue:c.value,"onUpdate:modelValue":l[1]||(l[1]=n=>c.value=n),placeholder:"Email"},null,8,["modelValue"]),s(C,{icon:"Plus",color:"#000000",size:"small",style:{"margin-left":"1em"},onClick:z},{default:p(()=>[I(" Add user ")]),_:1})])]),_:1}),a("div",Ae,[Be,s(Ve,{selected_plaque_id_list:e.value.plaque_id_list,"onUpdate:selected_plaque_id_list":l[2]||(l[2]=n=>e.value.plaque_id_list=n),plaque_list:r(R)},null,8,["selected_plaque_id_list","plaque_list"]),a("div",null,U(`Plaques in gallery: ${e.value.plaque_id_list.length}`),1)]),a("div",null,[Ie,s(ye,{selected_token_meta_id_list:e.value.token_meta_id_list,"onUpdate:selected_token_meta_id_list":l[3]||(l[3]=n=>e.value.token_meta_id_list=n),token_meta_list:r(j),max_height:350},null,8,["selected_token_meta_id_list","token_meta_list"]),a("div",null,U(`Artwork in gallery: ${e.value.token_meta_id_list.length}`),1)])]),_:1},8,["model","rules"])])]),_:1},8,["modelValue","fullscreen"])])}}});var Ze=ne(Ne,[["__scopeId","data-v-1929efac"]]);export{Ze as default};