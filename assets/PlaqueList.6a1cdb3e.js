import{d as Z,r as m,c as D,B as K,h as b,i as e,w as l,u as T,f as _,o as p,l as a,t as x,j as r,_ as ee,p as ue,m as _e,z,a as B,b as be,C as we,D as Re,G as Be,g as J,H as je,I as Je,F as H,J as re,A as G,n as Ge,K as Ke}from"./index.30364230.js";import{u as E,d as He}from"./plaque.7c883b56.js";import{c as Qe}from"./token-meta.642db8f1.js";import{u as te}from"./plaque.c55cfcf8.js";import{u as ce,g as We}from"./account.2d677cd8.js";import{s as F,m as Ce,a as $e}from"./util.884de679.js";import{T as xe,O as Xe}from"./types.e0f521c1.js";import{u as Se}from"./breakpoints.0aa1ac31.js";import{u as Ae}from"./token-meta.324ccdfe.js";import{_ as Ye}from"./TokenSelectList.efcfc31f.js";import{i as L,h as Ze,r as et,j as tt}from"./firebaseConfig.4d01e9b5.js";import{P as lt}from"./PlaqueTokenItem.1d777639.js";import{u as at}from"./gallery.27a98c21.js";import"./thumbnail-image.d6e45d38.js";import"./ArtworkFilters.d93a05c9.js";import"./gallery-token.2e61e420.js";const nt=q=>(ue("data-v-2d725dde"),q=q(),_e(),q),ot={class:"dialog-container"},st={class:"dialog-footer"},it=nt(()=>a("div",{style:{"flex-grow":"1"}},null,-1)),dt=Z({__name:"AddTokenDialog",props:{show_add_token_dialog:{type:Boolean},plaque_id:{}},emits:["update:show_add_token_dialog"],setup(q,{emit:o}){const y=q,u=m([]),$=m(!1),V=o,{screen_type:P}=Se(),S=te(),w=Ae(),C=ce(),d=D({get(){return y.show_add_token_dialog},set(i){V("update:show_add_token_dialog",i)}});K(d,i=>{i&&(u.value=JSON.parse(JSON.stringify(A.value.entity.token_meta_id_list)))});const A=D(()=>S.plaque_map[y.plaque_id]),I=D(()=>w.sorted_all_token_metas),O=async()=>{$.value=!0;try{for(let[i,s]of u.value.entries()){const f=w.all_token_metas[s];if(!f)throw"Failed to find store token for token: "+s;if(f.entity.platform!=xe.Opensea)continue;const h=JSON.parse(JSON.stringify(f));h.entity.user_id=C.get_account.id,h.entity.platform=xe.OpenseaArchive;const k=await Qe(h.entity);u.value[i]=k.id}await E(y.plaque_id,{token_meta_id_list:u.value}),S.plaque_map[y.plaque_id].entity.token_meta_id_list=u.value}catch(i){F(`Error updating plaque tokens - ${i}`)}$.value=!1,d.value=!1},N=()=>{u.value=[]};return(i,s)=>{const f=_("el-button"),h=_("el-dialog");return p(),b("div",ot,[e(h,{center:"",modelValue:d.value,"onUpdate:modelValue":s[1]||(s[1]=k=>d.value=k),title:"Add artwork to plaque","close-on-click-modal":!1,fullscreen:T(P)=="xs",top:"2vh","destroy-on-close":""},{footer:l(()=>[a("div",st,[a("div",null,x(`Artwork in playlist: ${u.value.length}`),1),it,e(f,{onClick:N},{default:l(()=>[r("Clear")]),_:1}),e(f,{type:"info",onClick:O,loading:$.value},{default:l(()=>[r("Save")]),_:1},8,["loading"])])]),default:l(()=>[e(Ye,{selected_token_meta_id_list:u.value,"onUpdate:selected_token_meta_id_list":s[0]||(s[0]=k=>u.value=k),token_meta_list:I.value,plaque_id:i.plaque_id},null,8,["selected_token_meta_id_list","token_meta_list","plaque_id"])]),_:1},8,["modelValue","fullscreen"])])}}});var rt=ee(dt,[["__scopeId","data-v-2d725dde"]]);const ut={class:"controller-buttons"},_t=Z({__name:"PlaqueController",props:{plaque:{}},setup(q){const o=te(),y=q,u=m(!1),$=m(!1),V=m(!1),P=m(!1),S=D({get:()=>y.plaque.entity.orientation||"landscape",set:C=>{E(y.plaque.id,{orientation:C}).then(()=>{o.plaque_map[y.plaque.id].entity.orientation=C,z({type:"success",message:"Plaque orientation updated"})}).catch(d=>{F(`Error updating plaque orientation - ${d}`)})}}),w=C=>{const d={type:C,time_sent:L.now()};E(y.plaque.id,{command:d}).then(()=>{o.plaque_map[y.plaque.id].entity.command=d,z({type:"success",message:"Command sent to plaque"})}).catch(A=>{F(`Error sending command to plaque - ${A}`)}).finally(()=>{u.value=!1,$.value=!1,V.value=!1,P.value=!1})};return(C,d)=>{const A=_("el-button"),I=_("el-radio"),O=_("el-radio-group");return p(),b("div",null,[a("div",ut,[e(A,{circle:"",text:"",loading:u.value,icon:"DArrowLeft",onClick:d[0]||(d[0]=N=>{u.value=!0,w("playlist_previous")})},null,8,["loading"]),e(A,{circle:"",text:"",loading:$.value,icon:"VideoPlay",onClick:d[1]||(d[1]=N=>{$.value=!0,w("play")})},null,8,["loading"]),e(A,{circle:"",text:"",icon:"VideoPause",loading:V.value,onClick:d[2]||(d[2]=N=>{V.value=!0,w("pause")})},null,8,["loading"]),e(A,{circle:"",text:"",icon:"DArrowRight",loading:P.value,onClick:d[3]||(d[3]=N=>{P.value=!0,w("playlist_next")})},null,8,["loading"])]),e(O,{modelValue:S.value,"onUpdate:modelValue":d[4]||(d[4]=N=>S.value=N),style:{display:"flex","flex-direction":"column","align-items":"start","margin-top":"20px"}},{default:l(()=>[e(I,{label:"landscape",size:"small"},{default:l(()=>[r("Landscape")]),_:1}),e(I,{label:"portrait",size:"small"},{default:l(()=>[r("Portrait")]),_:1}),e(I,{label:"landscape_reversed",size:"small"},{default:l(()=>[r("Landscape Reversed")]),_:1}),e(I,{label:"portrait_reversed",size:"small"},{default:l(()=>[r("Portrait Reversed")]),_:1})]),_:1},8,["modelValue"])])}}});var ct=ee(_t,[["__scopeId","data-v-100e65c8"]]);const U=q=>(ue("data-v-0a244ae8"),q=q(),_e(),q),pt={style:{display:"flex","align-items":"center",padding:"1em"}},mt={key:0},yt=U(()=>a("div",{style:{"flex-grow":"1"}},null,-1)),ft={class:"card-simple"},vt=U(()=>a("hr",null,null,-1)),gt=U(()=>a("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"title",-1)),qt=U(()=>a("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"artist",-1)),ht={style:{padding:"0.3em 1em"}},kt={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-right":"1em",padding:"1em"}},wt={key:0,class:"card-detail"},Ct={style:{padding:"0 1em"}},xt={style:{display:"flex","align-items":"center","justify-content":"space-between",padding:"0.5em 1em"}},bt=U(()=>a("hr",null,null,-1)),$t=U(()=>a("div",{style:{padding:"1em"}},"No artwork added",-1)),St=U(()=>a("hr",null,null,-1)),At={style:{display:"flex",padding:"1em"}},Vt=U(()=>a("div",{style:{"flex-grow":"1"}},null,-1)),Pt={key:0,style:{padding:"1em"}},Nt={style:{padding:"1em 0em",display:"flex","justify-content":"space-between","align-items":"center"}},zt={key:0},Lt=U(()=>a("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"Associated User",-1)),It={key:0},Et={key:1},Dt={style:{"font-size":"var(--el-font-size-extra-small)"}},Tt={key:1},Ut={style:{"margin-bottom":"1em"}},Mt=U(()=>a("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"Machine Info",-1)),Ft={key:0,style:{"margin-bottom":"1em"}},Ot=U(()=>a("div",{class:"caption"},"Admin only commands",-1)),Rt={style:{"margin-bottom":"1em"}},Bt={style:{"margin-bottom":"1em"}},jt={style:{"margin-bottom":"1em"}},Jt={style:{"margin-bottom":"1em"}},Gt={style:{"margin-top":"1em"}},Kt=U(()=>a("div",{class:"caption"},"Enable Support VPN",-1)),Ht={style:{display:"flex","justify-content":"end"}},Qt=Z({__name:"PlaqueCard",props:{plaque:{}},setup(q){const o=q,y=te();be();const u=m("simple"),$=m(!1),V=m(!1),P=m(""),S=m(!1),w=m(!1),C=m(!1),d=m(!1),A=m(!1),I=m(!1),O=m(!1),N=m(!1);L.now();const i=async()=>{S.value=!0,await E(o.plaque.id,{name:o.plaque.entity.name}).catch(t=>{F(`Error updating plaque tokens - ${t}`)}),V.value=!1,S.value=!1},s=ce(),f=Ae(),h=D(()=>k.value.length==0?null:k.value[0]),k=D(()=>{const t=f.all_token_metas;return o.plaque.entity.token_meta_id_list.map(c=>t[c])}),W=D(()=>$e(o.plaque)),le=D(()=>{const t=o.plaque.entity.last_check_in_time;return t?new Date(t.seconds*1e3).toLocaleString("en-US",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):"N/A"}),ae=t=>new Date(t.seconds*1e3).toLocaleString("en-US",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}),ne=()=>{G.confirm(`Are you sure you want to clear tokens for plaque '${o.plaque.entity.name}'?`,"Clear tokens",{type:"warning"}).then(()=>{E(o.plaque.id,{token_meta_id_list:[]}).then(()=>{y.plaque_map[o.plaque.id].entity.token_meta_id_list=[],z({type:"success",message:"Tokens cleared"})}).catch(t=>{z({message:`Error clearing tokens from plaque - ${t}`,type:"error",showClose:!0,duration:12e3})})})},oe=()=>{G.confirm(`Are you sure you want to forget the plaque named '${o.plaque.entity.name}'?`,"Forget plaque",{type:"warning"}).then(()=>{E(o.plaque.id,{user_id:"",token_meta_id_list:[]}).then(()=>{y.plaque_map[o.plaque.id].entity.user_id="",y.plaque_map[o.plaque.id].entity.token_meta_id_list=[],z({type:"success",message:"Plaque forgotten"})}).catch(t=>{z({message:`Error forgetting plaque - ${t}`,type:"error",showClose:!0,duration:12e3})})})};K(u,t=>{t=="settings"&&o.plaque.entity.user_id&&!P.value&&We(o.plaque.entity.user_id).then(n=>{P.value=n.entity.email}).catch(n=>{z({message:`Error loading user account - ${n}`,type:"error",showClose:!0,duration:12e3})})});const X=D({get:()=>Boolean(o.plaque.entity.vpn_active),set:t=>{E(o.plaque.id,{vpn_active:t}).then(()=>{y.plaque_map[o.plaque.id].entity.vpn_active=t,z({type:"success",message:"VPN setting updated"})}).catch(n=>{F(`Error updating VPN setting- ${n}`)})}}),v=D(()=>{var c,j,R;const t=(R=(j=(c=o==null?void 0:o.plaque)==null?void 0:c.entity)==null?void 0:j.machine_data)==null?void 0:R.updated_at;return t?new Date(t.seconds*1e3+t.nanoseconds/1e6).toLocaleString():"N/A"}),Ve=()=>{const t={type:"upload_logs",time_sent:L.now()};w.value=!0,E(o.plaque.id,{command:t}).then(()=>{y.plaque_map[o.plaque.id].entity.command=t,z({type:"success",message:"Command sent to plaque"})}).catch(n=>{F(`Error sending command to plaque - ${n}`)}).finally(()=>{w.value=!1})},Pe=()=>{G.confirm(`Are you sure you want to restart the plaque '${o.plaque.entity.name}'?`,"Restart plaque",{type:"warning"}).then(()=>{const t={type:"restart_machine",time_sent:L.now()};C.value=!0,E(o.plaque.id,{command:t}).then(()=>{y.plaque_map[o.plaque.id].entity.command=t,z({type:"success",message:"Command sent to plaque"})}).catch(n=>{F(`Error sending command to plaque - ${n}`)}).finally(()=>{C.value=!1})})},Ne=()=>{G.confirm(`Are you sure you want to restart the app on plaque '${o.plaque.entity.name}'?`,"Restart app",{type:"warning"}).then(()=>{const t={type:"restart_app",time_sent:L.now()};d.value=!0,E(o.plaque.id,{command:t}).then(()=>{y.plaque_map[o.plaque.id].entity.command=t,z({type:"success",message:"Command sent to plaque"})}).catch(n=>{F(`Error sending command to plaque - ${n}`)}).finally(()=>{d.value=!1})})},se=(t,n)=>E(t,{command:n}).then(()=>{y.plaque_map[t].entity.command=n,z({type:"success",message:"Command sent to plaque"})}).catch(c=>{F(`Error sending command to plaque - ${c}`)}),ze=()=>{const t={type:"display_extend",time_sent:L.now()};I.value=!0,se(o.plaque.id,t).finally(()=>{I.value=!1})},Le=()=>{const t={type:"display_mirror",time_sent:L.now()};O.value=!0,se(o.plaque.id,t).finally(()=>{O.value=!1})},Ie=async()=>{G.confirm("Are you sure you want to clear all media files on this plaque? They files will have to be redownloaded if you want to play them again.","Clear files",{type:"warning"}).then(async()=>{N.value=!0,await E(o.plaque.id,{token_meta_id_list:[]}).catch(n=>{F(`Error clearing media files - ${n}`)});const t={type:"clear_media_files",time_sent:L.now()};se(o.plaque.id,t).finally(()=>{N.value=!1})})},Ee=async t=>{const n=Ze(),c=`viewer-logs/${t}`,j=et(n,c);try{const R=await tt(j);window.open(R,"_blank");return}catch(R){console.log(`downloadLogs - failed to download logs for ${t}`,R),F(`Error downloading logs - ${R}`)}return""};return(t,n)=>{const c=_("el-button"),j=_("el-tag"),R=_("el-tooltip"),pe=_("el-col"),De=_("el-row"),Te=_("ArrowRight"),ie=_("el-icon"),de=_("el-collapse-transition"),me=_("Close"),Y=_("el-table-column"),Ue=_("el-table"),Me=_("el-dialog"),Fe=_("el-switch"),Oe=_("el-card");return p(),B(Oe,null,{default:l(()=>[a("div",pt,[V.value?we((p(),b("input",{key:1,"onUpdate:modelValue":n[0]||(n[0]=g=>o.plaque.entity.name=g),class:"edit-name-input"},null,512)),[[Re,o.plaque.entity.name]]):(p(),b("h1",mt,x(o.plaque.entity.name),1)),V.value?J("",!0):(p(),B(c,{key:2,icon:T(Be),onClick:n[1]||(n[1]=g=>V.value=!0),class:"editIcon",circle:""},null,8,["icon"])),V.value?(p(),B(c,{key:3,icon:T(je),loading:S.value,onClick:i,class:"editIcon",circle:"",type:S.value?"":"success",text:""},null,8,["icon","loading","type"])):J("",!0),yt,e(R,{class:"box-item",effect:"dark",content:`Last activity ${le.value}`,placement:"top"},{default:l(()=>[W.value?(p(),B(j,{key:0,class:"ml-2",type:"success"},{default:l(()=>[r("online")]),_:1})):(p(),B(j,{key:1,class:"ml-2",type:"danger"},{default:l(()=>[r("offline")]),_:1}))]),_:1},8,["content"])]),e(de,null,{default:l(()=>[we(a("section",ft,[vt,e(De,{style:{padding:"1em"}},{default:l(()=>[e(pe,{span:12},{default:l(()=>{var g;return[gt,a("span",null,x(((g=h.value)==null?void 0:g.entity.name)||"N/A"),1)]}),_:1}),e(pe,{span:12},{default:l(()=>{var g;return[qt,r(" "+x(((g=h.value)==null?void 0:g.entity.artist)||"N/A"),1)]}),_:1})]),_:1}),a("div",ht,x(`Total artworks: ${t.plaque.entity.token_meta_id_list.length}`),1),a("div",kt,[e(c,{type:"info",onClick:n[2]||(n[2]=g=>$.value=!0)},{default:l(()=>[r("Add Artwork")]),_:1}),e(c,{onClick:n[3]||(n[3]=g=>u.value="detail")},{default:l(()=>[r(" Details"),e(ie,{class:"el-icon--right"},{default:l(()=>[e(Te)]),_:1})]),_:1})])],512),[[Je,u.value=="simple"]])]),_:1}),e(de,null,{default:l(()=>[u.value=="detail"?(p(),b("section",wt,[a("p",Ct,x(`Total artworks: ${t.plaque.entity.token_meta_id_list.length}`),1),a("div",xt,[e(c,{onClick:n[4]||(n[4]=g=>u.value="settings")},{default:l(()=>[r("Settings")]),_:1}),e(c,{onClick:ne},{default:l(()=>[r("Clear Artwork")]),_:1})]),bt,k.value.length==0?(p(),b(H,{key:0},[$t,St],64)):J("",!0),(p(!0),b(H,null,re(k.value,g=>(p(),B(lt,{token_meta:g},null,8,["token_meta"]))),256)),a("div",At,[e(c,{type:"info",onClick:n[5]||(n[5]=g=>$.value=!0)},{default:l(()=>[r("Add Artwork")]),_:1}),Vt,e(c,{onClick:n[6]||(n[6]=g=>u.value="simple")},{default:l(()=>[r("Close"),e(ie,{class:"el-icon--right"},{default:l(()=>[e(me)]),_:1})]),_:1})])])):J("",!0)]),_:1}),e(de,null,{default:l(()=>{var g,ye,fe,ve,ge,qe,he,ke;return[u.value=="settings"?(p(),b("section",Pt,[e(ct,{plaque:o.plaque},null,8,["plaque"]),a("div",Nt,[t.plaque.entity.user_id?(p(),b("div",zt,[Lt,P.value?(p(),b("div",It,x(P.value),1)):(p(),b("div",Et,"Loading...")),a("div",Dt,x(t.plaque.entity.user_id),1)])):(p(),b("div",Tt,"No associated user")),t.plaque.entity.user_id?(p(),B(c,{key:2,type:"danger",plain:"",onClick:oe},{default:l(()=>[r("Forget Display")]),_:1})):J("",!0)]),a("div",Ut,[Mt,a("div",null,"Machine name: "+x((ye=(g=t.plaque.entity.machine_data)==null?void 0:g.machine_name)!=null?ye:"N/A"),1),a("div",null,"Version: "+x((ve=(fe=t.plaque.entity.machine_data)==null?void 0:fe.version)!=null?ve:"N/A"),1),a("div",null,"Local IP: "+x((qe=(ge=t.plaque.entity.machine_data)==null?void 0:ge.local_ip)!=null?qe:"N/A"),1),a("div",null,"Public IP: "+x((ke=(he=t.plaque.entity.machine_data)==null?void 0:he.public_ip)!=null?ke:"N/A"),1),a("div",null,"Updated At: "+x(v.value),1),a("div",null,"Free Space: "+x(t.plaque.entity.free_space?T(Ce)(t.plaque.entity.free_space):"N/A"),1)]),T(s).is_user_admin?(p(),b("div",Ft,[Ot,a("div",Rt,[e(c,{plain:"",onClick:Ve,loading:w.value},{default:l(()=>[r("Upload Logs To Cloud")]),_:1},8,["loading"]),e(c,{plain:"",onClick:n[7]||(n[7]=M=>A.value=!0)},{default:l(()=>[r("View Logs")]),_:1})]),a("div",Bt,[e(c,{plain:"",onClick:ze,loading:I.value},{default:l(()=>[r("Extend Display")]),_:1},8,["loading"]),e(c,{plain:"",onClick:Le,loading:O.value},{default:l(()=>[r("Mirror Display")]),_:1},8,["loading"])]),a("div",jt,[e(c,{type:"danger",plain:"",onClick:Ne,loading:d.value},{default:l(()=>[r("Restart App")]),_:1},8,["loading"]),e(c,{type:"danger",plain:"",onClick:Pe,loading:C.value},{default:l(()=>[r("Restart Machine")]),_:1},8,["loading"])]),a("div",Jt,[e(c,{type:"danger",plain:"",onClick:Ie,loading:N.value},{default:l(()=>[r(" Clear Media Files")]),_:1},8,["loading"])]),e(Me,{modelValue:A.value,"onUpdate:modelValue":n[8]||(n[8]=M=>A.value=M),title:"Uploaded Logs",width:"75%"},{default:l(()=>[e(Ue,{data:t.plaque.entity.uploaded_log_files},{default:l(()=>[e(Y,{prop:"file_name",label:"File Name",width:"400"}),e(Y,{prop:"upload_time",label:"Time Uploaded"},{default:l(({row:M})=>[r(x(ae(M.upload_time)),1)]),_:1}),e(Y,{prop:"bytes",label:"Size"},{default:l(({row:M})=>[r(x(T(Ce)(M.bytes)),1)]),_:1}),e(Y,{fixed:"right",label:"",width:"80"},{default:l(({row:M})=>[e(c,{icon:"Download",text:"",circle:"",onClick:sl=>Ee(M.file_name)},null,8,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1},8,["modelValue"]),a("div",Gt,[Kt,e(Fe,{modelValue:X.value,"onUpdate:modelValue":n[9]||(n[9]=M=>X.value=M),"active-text":"Enabled","inactive-text":"Off"},null,8,["modelValue"])])])):J("",!0),a("div",Ht,[e(c,{onClick:n[10]||(n[10]=M=>u.value="detail")},{default:l(()=>[r("Close"),e(ie,{class:"el-icon--right"},{default:l(()=>[e(me)]),_:1})]),_:1})])])):J("",!0)]}),_:1}),e(rt,{plaque_id:o.plaque.id,show_add_token_dialog:$.value,"onUpdate:show_add_token_dialog":n[11]||(n[11]=g=>$.value=g)},null,8,["plaque_id","show_add_token_dialog"])]),_:1})}}});var Wt=ee(Qt,[["__scopeId","data-v-0a244ae8"]]);const Q=q=>(ue("data-v-517aa68d"),q=q(),_e(),q),Xt=Q(()=>a("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"Filter by gallery",-1)),Yt=Q(()=>a("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"Online only",-1)),Zt=Q(()=>a("div",{class:"caption"},"Sort order",-1)),el=Q(()=>a("div",{style:{"padding-bottom":"90px"}},null,-1)),tl={class:"add-button-container"},ll={style:{display:"flex","align-items":"center","justify-content":"center",height:"100%"}},al=Q(()=>a("div",{style:{"font-size":"17px"}},"Add plaque",-1)),nl={style:{display:"flex","justify-content":"space-between","flex-wrap":"wrap"}},ol=Z({__name:"PlaqueList",setup(q){const o=m(!1),{screen_type:y}=Se(),u=m(!1),$=be(),V=ce(),P=at(),S=m(""),w=m(localStorage.getItem("plaque_list_filter_by_gallery")||"");K(w,i=>{localStorage.setItem("plaque_list_filter_by_gallery",i)});const C=m(localStorage.getItem("online_filter")==="true"||!1);K(C,i=>{if(i){localStorage.setItem("online_filter","true");return}localStorage.setItem("online_filter","false")});const d=m(localStorage.getItem("plaque_list_sort_order")||"name");K(d,i=>{localStorage.setItem("plaque_list_sort_order",i)});const A=te(),I=async()=>{o.value=!0,await He({name:"Test Plaque",user_id:V.get_account.id,token_meta_id_list:[],created_at:L.now(),updated_at:L.now(),orientation:Xe.Landscape,command:{type:"",time_sent:L.fromMillis(0)},last_check_in_time:L.fromMillis(0),vpn_active:!1,machine_data:{machine_name:"",version:"",local_ip:"",public_ip:"",updated_at:L.fromMillis(0)}}).catch(i=>z({message:`Error creating test plaque- ${i}`,type:"error",showClose:!0,duration:12e3})),o.value=!1,u.value=!1},O=D(()=>JSON.parse(JSON.stringify(A.all_plaque_list)).sort((s,f)=>{const h=s.entity.name.toLowerCase(),k=f.entity.name.toLowerCase();return h<k?-1:h>k?1:0})),N=D(()=>{let i=[...O.value];return i=i.filter(s=>s.entity.name||s.entity.user_id||s.entity.token_meta_id_list.length>0),w.value&&(i=i.filter(s=>{var f;return(f=P.gallery_list.find(h=>h.id==w.value))==null?void 0:f.entity.plaque_id_list.includes(s.id)})),C.value&&(i=i.filter(s=>$e(s))),d.value=="name"?i=i.sort((s,f)=>s.entity.name.localeCompare(f.entity.name)):d.value=="last_check_in_time"&&(i=i.sort((s,f)=>s.entity.last_check_in_time==null&&f.entity.last_check_in_time==null?0:s.entity.last_check_in_time==null?1:f.entity.last_check_in_time==null?-1:f.entity.last_check_in_time.seconds-s.entity.last_check_in_time.seconds)),S.value?i.filter(s=>s.entity.name.toLowerCase().includes(S.value.toLowerCase())):i});return(i,s)=>{const f=_("el-input"),h=_("el-button"),k=_("el-option"),W=_("el-select"),le=_("el-switch"),ae=_("el-popover"),ne=_("Plus"),oe=_("el-icon"),X=_("el-dialog");return p(),b(H,null,[a("div",{class:"subheader",style:Ge([{display:"flex","align-items":"center"},T(y)=="xs"?"padding: 0px 8px 10px;":""])},[e(f,{modelValue:S.value,"onUpdate:modelValue":s[0]||(s[0]=v=>S.value=v),"prefix-icon":T(Ke),placeholder:"Search plaques",style:{"max-width":"350px"},clearable:""},null,8,["modelValue","prefix-icon"]),e(ae,{placement:"bottom",title:"Plaque Filters",width:300,trigger:"click"},{reference:l(()=>[e(h,{icon:"Filter",style:{"margin-left":"10px"},type:"info",size:"small"},{default:l(()=>[r("Filters")]),_:1})]),default:l(()=>[Xt,e(W,{modelValue:w.value,"onUpdate:modelValue":s[1]||(s[1]=v=>w.value=v),placeholder:"Filter by gallery",style:{width:"260px","margin-bottom":"12px"}},{default:l(()=>[e(k,{label:"All plaques",value:""}),(p(!0),b(H,null,re(T(P).gallery_list,v=>(p(),B(k,{key:v.id,label:`${v.entity.name}`,value:v.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),Yt,e(le,{modelValue:C.value,"onUpdate:modelValue":s[2]||(s[2]=v=>C.value=v),style:{"margin-bottom":"1em"}},null,8,["modelValue"]),Zt,e(W,{modelValue:d.value,"onUpdate:modelValue":s[3]||(s[3]=v=>d.value=v),placeholder:"Sort by",class:"filter-select"},{default:l(()=>[e(k,{label:"Sort by name",value:"name"}),e(k,{label:"Sort by last activity",value:"last_check_in_time"})]),_:1},8,["modelValue"])]),_:1}),e(h,{icon:"Camera",type:"info",onClick:s[4]||(s[4]=v=>T($).push("qr-scan")),style:{"margin-left":"10px"},size:"small"},{default:l(()=>[r("Scan")]),_:1})],4),el,(p(!0),b(H,null,re(N.value,v=>(p(),B(Wt,{plaque:v,key:v.id},null,8,["plaque"]))),128)),a("div",tl,[a("div",ll,[a("div",{class:"add-button",onClick:s[5]||(s[5]=v=>u.value=!0)},[e(oe,{style:{"font-size":"26px","margin-bottom":"6px"}},{default:l(()=>[e(ne)]),_:1}),al])])]),e(X,{modelValue:u.value,"onUpdate:modelValue":s[7]||(s[7]=v=>u.value=v),title:"Add plaque",width:T(y)=="xs"?"90%":"50%",style:{"max-width":"500px"}},{default:l(()=>[a("div",nl,[e(h,{onClick:s[6]||(s[6]=v=>{T($).push("qr-scan"),u.value=!1}),icon:"camera",color:"#000000",style:{margin:"10px 12px 10px 0px"}},{default:l(()=>[r("Scan Plaque QR Code")]),_:1}),e(h,{icon:"plus",onClick:I,loading:o.value,style:{margin:"10px 0px 10px 0px"},color:"#000000"},{default:l(()=>[r("Add test plaque ")]),_:1},8,["loading"])])]),_:1},8,["modelValue","width"])],64)}}});var Cl=ee(ol,[["__scopeId","data-v-517aa68d"]]);export{Cl as default};
