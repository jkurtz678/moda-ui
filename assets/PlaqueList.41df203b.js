import{d as z,c as b,r as p,o as c,b as q,i as e,h as t,e as v,t as S,F as B,_ as M,k as C,v as ne,w as o,x as J,y as W,g as I,z as R,f as V,A as se,j as h,B as F,C as G,D as ae,G as le,H as ie,I as H,p as O,u as _e}from"./index.365b2284.js";import{u as j,c as de}from"./plaque.38cd28f2.js";import{u as X,c as re}from"./token-meta.15fd0909.js";import{u as Y}from"./plaque.5da5a2b5.js";import{h as ue,i as ce,u as Z,e as Q,s as ee,j as K}from"./account.bc6e8e38.js";import{u as te}from"./breakpoints.3f57d7fa.js";import{_ as pe}from"./PlaqueTokenItem.20fe19eb.js";const me=e("hr",{class:"hr"},null,-1),fe={class:"card-flex-container"},ve={style:{display:"flex","align-items":"center",margin:"5px 25px 5px 0px"}},ye={style:{flex:"3 1 0%"}},ge={class:"bold"},he={class:"bold"},ke={style:{"margin-right":"35px",opacity:"0.5"}},we=z({__name:"AddTokenItem",props:{in_list:{type:Boolean},token_meta:null},emits:["update_token_list"],setup(l,{emit:_}){const d=l,r=b(()=>ue(d.token_meta.entity.platform));return(f,y)=>{const L=p("el-image"),T=p("el-button");return c(),q(B,null,[me,e("div",fe,[e("div",ve,[t(L,{src:v(ce)(d.token_meta),style:{width:"50px",height:"50px"},fit:"contain"},null,8,["src"])]),e("div",ye,[e("p",ge,S(d.token_meta.entity.name),1),e("p",he,S(d.token_meta.entity.artist),1)]),e("div",ke,S(v(r)),1),t(T,{icon:l.in_list?"close":"plus",type:l.in_list?"danger":"success",plain:"",circle:"",onClick:y[0]||(y[0]=A=>_("update_token_list",d.token_meta.id))},null,8,["icon","type"])])],64)}}});const oe=l=>(F("data-v-16b86495"),l=l(),G(),l),qe={class:"dialog-container"},xe={key:0},$e=oe(()=>e("hr",{class:"hr"},null,-1)),Ce={class:"dialog-footer"},be=oe(()=>e("div",{style:{"flex-grow":"1"}},null,-1)),Se=h("Clear"),Te=h("Save"),Ae=z({__name:"AddTokenDialog",props:{show_add_token_dialog:{type:Boolean},plaque_id:null},emits:["update:show_add_token_dialog"],setup(l,{emit:_}){const d=l,r=C([]),f=C(!1),y=C(""),{screen_type:L}=te(),T=Y(),A=X(),P=Z(),x=b({get(){return d.show_add_token_dialog},set(i){_("update:show_add_token_dialog",i)}});ne(x,i=>{i&&(r.value=JSON.parse(JSON.stringify(n.value.entity.token_meta_id_list)))});const m=b(()=>A.sorted_all_token_metas),g=b(()=>{const i=[];if(m!=null&&m.value)for(let s of m==null?void 0:m.value)T.meta_in_playlist(d.plaque_id,s.id)?i.unshift(s):i.push(s);return y.value.trim()!==""?i.filter(s=>{var k,w;return((k=s.entity.artist)==null?void 0:k.toLowerCase().includes(y.value.toLowerCase()))||((w=s.entity.name)==null?void 0:w.toLowerCase().includes(y.value.toLowerCase()))}):i}),n=b(()=>T.plaque_map[d.plaque_id]),u=b(()=>{const i={};return r.value.forEach(s=>{i[s]=!0}),i}),E=i=>{r.value.some(s=>s===i)?r.value=r.value.filter(s=>s!=i):r.value.push(i)},$=async()=>{f.value=!0;try{for(let[i,s]of r.value.entries()){const k=A.all_token_metas[s];if(!k)throw"Failed to find store token for token: "+s;if(k.entity.platform!=Q.Opensea)continue;const w=JSON.parse(JSON.stringify(k));w.entity.wallet_address=P.get_account.entity.wallet_address,w.entity.platform=Q.OpenseaArchive;const D=await re(w.entity);r.value[i]=D.id}await j(d.plaque_id,{token_meta_id_list:r.value})}catch(i){ee(`Error updating plaque tokens - ${i}`)}f.value=!1,x.value=!1},U=()=>{r.value=[]};return(i,s)=>{const k=p("el-card"),w=p("el-button"),D=p("el-dialog");return c(),q("div",qe,[t(D,{center:"",modelValue:v(x),"onUpdate:modelValue":s[1]||(s[1]=a=>se(x)?x.value=a:null),title:"Add tokens to plaque","close-on-click-modal":!1,fullscreen:v(L)=="xs",top:"2vh"},{footer:o(()=>[e("div",Ce,[e("div",null,S(`Tokens in playlist: ${r.value.length}`),1),be,t(w,{onClick:U},{default:o(()=>[Se]),_:1}),t(w,{type:"info",onClick:$,loading:f.value},{default:o(()=>[Te]),_:1},8,["loading"])])]),default:o(()=>[J(e("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=a=>y.value=a),class:"search-bar",placeholder:"Search by artwork title or artist name"},null,512),[[W,y.value]]),t(k,{class:"box-card",shadow:"never"},{default:o(()=>[v(g).length==0?(c(),q("div",xe,"No tokens found")):I("",!0),(c(!0),q(B,null,R(v(g),a=>(c(),V(we,{token_meta:a,in_list:Boolean(v(u)[a.id]),onUpdate_token_list:E},null,8,["token_meta","in_list"]))),256)),$e]),_:1})]),_:1},8,["modelValue","fullscreen"])])}}});var Pe=M(Ae,[["__scopeId","data-v-16b86495"]]);const N=l=>(F("data-v-95ed7f26"),l=l(),G(),l),Ne={style:{display:"flex","align-items":"center",padding:"1em"}},Le={key:0},Ie=N(()=>e("div",{style:{"flex-grow":"1"}},null,-1)),Ve=h("online"),Be={class:"card-simple"},Ee=N(()=>e("hr",null,null,-1)),De=N(()=>e("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"title",-1)),Oe=N(()=>e("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"artist",-1)),je={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-right":"1em"}},ze={style:{padding:"1em"}},Ue=h(" View "),Je={key:0,class:"card-detail"},Me={style:{padding:"0 1em"}},Re={style:{display:"flex","align-items":"center","justify-content":"space-between",padding:"0.5em 1em"}},Fe=h("Settings"),Ge=h("Add Artwork"),He=N(()=>e("hr",null,null,-1)),Qe=N(()=>e("div",{style:{padding:"1em"}}," No tokens added",-1)),Ke=N(()=>e("hr",null,null,-1)),We={style:{display:"flex",padding:"1em"}},Xe=h("Clear Tokens"),Ye=N(()=>e("div",{style:{"flex-grow":"1"}},null,-1)),Ze=h("Close"),et={key:0,style:{padding:"1em",display:"flex","justify-content":"space-between"}},tt=h("Forget Display"),ot=h("Close"),nt=z({__name:"PlaqueCard",props:{plaque:null},setup(l){const _=l,d=C("simple"),r=C(!1),f=C(!1),y=C(!1),L=async()=>{y.value=!0,await j(_.plaque.id,{name:_.plaque.entity.name}).catch(g=>{ee(`Error updating plaque tokens - ${g}`)}),f.value=!1,y.value=!1},T=X(),A=b(()=>P.value.length==0?null:P.value[0]),P=b(()=>{const g=T.archive_token_meta_map;return _.plaque.entity.token_meta_id_list.map(u=>g[u])});C("0"),C(!0);const x=()=>{H.confirm(`Are you sure you want to clear tokens for plaque '${_.plaque.entity.name}'?`,"Clear tokens",{type:"warning"}).then(()=>{j(_.plaque.id,{token_meta_id_list:[]}).then(()=>{O({type:"success",message:"Tokens cleared"})}).catch(g=>{O({message:`Error clearing tokens from plaque - ${g}`,type:"error",showClose:!0,duration:12e3})})})},m=()=>{H.confirm(`Are you sure you want to forget the plaque named '${_.plaque.entity.name}'?`,"Forget plaque",{type:"warning"}).then(()=>{j(_.plaque.id,{wallet_address:"",token_meta_id_list:[]}).then(()=>{O({type:"success",message:"Plaque forgotten"})}).catch(g=>{O({message:`Error forgetting plaque - ${g}`,type:"error",showClose:!0,duration:12e3})})})};return(g,n)=>{const u=p("el-button"),E=p("el-tag"),$=p("el-col"),U=p("el-row"),i=p("ArrowRight"),s=p("el-icon"),k=p("el-collapse-transition"),w=p("Close"),D=p("el-card");return c(),V(D,null,{default:o(()=>[e("div",Ne,[f.value?J((c(),q("input",{key:1,"onUpdate:modelValue":n[0]||(n[0]=a=>_.plaque.entity.name=a),class:"edit-name-input"},null,512)),[[W,_.plaque.entity.name]]):(c(),q("h1",Le,S(_.plaque.entity.name),1)),f.value?I("",!0):(c(),V(u,{key:2,icon:v(ae),onClick:n[1]||(n[1]=a=>f.value=!0),class:"editIcon",circle:""},null,8,["icon"])),f.value?(c(),V(u,{key:3,icon:v(le),loading:y.value,onClick:L,class:"editIcon",circle:"",type:y.value?"":"success",text:""},null,8,["icon","loading","type"])):I("",!0),Ie,t(E,{class:"ml-2",type:"success"},{default:o(()=>[Ve]),_:1})]),t(k,null,{default:o(()=>[J(e("section",Be,[Ee,t(U,{style:{padding:"1em"}},{default:o(()=>[t($,{span:12},{default:o(()=>{var a;return[De,e("span",null,S(((a=v(A))==null?void 0:a.entity.name)||"N/A"),1)]}),_:1}),t($,{span:12},{default:o(()=>{var a;return[Oe,h(" "+S(((a=v(A))==null?void 0:a.entity.artist)||"N/A"),1)]}),_:1})]),_:1}),e("div",je,[e("div",ze,S(`Total artworks: ${l.plaque.entity.token_meta_id_list.length}`),1),t(u,{onClick:n[2]||(n[2]=a=>d.value="detail")},{default:o(()=>[Ue,t(s,{class:"el-icon--right"},{default:o(()=>[t(i)]),_:1})]),_:1})])],512),[[ie,d.value=="simple"]])]),_:1}),t(k,null,{default:o(()=>[d.value=="detail"?(c(),q("section",Je,[e("p",Me,S(`Total artworks: ${l.plaque.entity.token_meta_id_list.length}`),1),e("div",Re,[t(u,{onClick:n[3]||(n[3]=a=>d.value="settings")},{default:o(()=>[Fe]),_:1}),t(u,{type:"info",onClick:n[4]||(n[4]=a=>r.value=!0)},{default:o(()=>[Ge]),_:1})]),He,v(P).length==0?(c(),q(B,{key:0},[Qe,Ke],64)):I("",!0),(c(!0),q(B,null,R(v(P),a=>(c(),V(pe,{token_meta:a},null,8,["token_meta"]))),256)),e("div",We,[t(u,{onClick:x},{default:o(()=>[Xe]),_:1}),Ye,t(u,{onClick:n[5]||(n[5]=a=>d.value="simple")},{default:o(()=>[Ze,t(s,{class:"el-icon--right"},{default:o(()=>[t(w)]),_:1})]),_:1})])])):I("",!0)]),_:1}),t(k,null,{default:o(()=>[d.value=="settings"?(c(),q("section",et,[t(u,{type:"danger",plain:"",onClick:m},{default:o(()=>[tt]),_:1}),t(u,{onClick:n[6]||(n[6]=a=>d.value="detail")},{default:o(()=>[ot,t(s,{class:"el-icon--right"},{default:o(()=>[t(w)]),_:1})]),_:1})])):I("",!0)]),_:1}),t(Pe,{plaque_id:_.plaque.id,show_add_token_dialog:r.value,"onUpdate:show_add_token_dialog":n[7]||(n[7]=a=>r.value=a)},null,8,["plaque_id","show_add_token_dialog"])]),_:1})}}});var st=M(nt,[["__scopeId","data-v-95ed7f26"]]);const at=l=>(F("data-v-afb887d8"),l=l(),G(),l),lt={class:"add-button-container"},it={style:{display:"flex","align-items":"center","justify-content":"center",height:"100%"}},_t=at(()=>e("div",{style:{"font-size":"17px"}},"Add plaque",-1)),dt={style:{display:"flex","justify-content":"space-between","flex-wrap":"wrap"}},rt=h("Scan Plaque QR Code"),ut=h("Add test plaque "),ct=z({__name:"PlaqueList",setup(l){const _=C(!1),{width:d,screen_type:r}=te(),f=C(!1),y=_e(),L=Z(),T=Y(),A=async()=>{_.value=!0,await de({name:"Test Plaque",wallet_address:L.get_account.entity.wallet_address,token_meta_id_list:[],created_at:K.now(),updated_at:K.now()}).catch(x=>O({message:`Error creating test plaque- ${x}`,type:"error",showClose:!0,duration:12e3})),_.value=!1,f.value=!1},P=b(()=>JSON.parse(JSON.stringify(T.plaques)).sort((m,g)=>{const n=m.entity.name.toLowerCase(),u=g.entity.name.toLowerCase();return n<u?-1:n>u?1:0}));return(x,m)=>{const g=p("Plus"),n=p("el-icon"),u=p("el-button"),E=p("el-dialog");return c(),q(B,null,[(c(!0),q(B,null,R(v(P),$=>(c(),V(st,{plaque:$,key:$.id},null,8,["plaque"]))),128)),e("div",lt,[e("div",it,[e("div",{class:"add-button",onClick:m[0]||(m[0]=$=>f.value=!0)},[t(n,{style:{"font-size":"26px","margin-bottom":"6px"}},{default:o(()=>[t(g)]),_:1}),_t])])]),t(E,{modelValue:f.value,"onUpdate:modelValue":m[2]||(m[2]=$=>f.value=$),title:"Add plaque",width:v(r)=="xs"?"90%":"50%"},{default:o(()=>[e("div",dt,[t(u,{onClick:m[1]||(m[1]=$=>{v(y).push("qr-scan"),f.value=!1}),icon:"camera",style:{margin:"10px 12px 10px 0px"}},{default:o(()=>[rt]),_:1}),t(u,{icon:"plus",onClick:A,loading:_.value,style:{margin:"10px 0px 10px 0px"}},{default:o(()=>[ut]),_:1},8,["loading"])])]),_:1},8,["modelValue","width"])],64)}}});var kt=M(ct,[["__scopeId","data-v-afb887d8"]]);export{kt as default};
