import{d as Z,r as y,c as D,B as K,h as b,i as e,w as l,u as U,f as c,o as m,l as n,t as x,j as d,_ as ee,p as ue,m as _e,z as L,a as B,b as be,C as we,D as je,G as Je,g as W,H as We,I as Ge,F as H,J as re,A as G,n as Ke,K as He}from"./index.92d66016.js";import{u as E,d as Qe}from"./plaque.7c883b56.js";import{c as Xe}from"./token-meta.642db8f1.js";import{u as te}from"./plaque.b5e2842a.js";import{u as ce,g as Ye}from"./account.d28a3981.js";import{s as T,m as Ce,a as $e}from"./util.e7a8e17c.js";import{T as xe,O as Ze}from"./types.e0f521c1.js";import{u as Se}from"./breakpoints.bc855a67.js";import{u as Ae}from"./token-meta.3e9dff7a.js";import{_ as et}from"./TokenSelectList.bb728a5f.js";import{i as P,h as tt,r as lt,j as at}from"./firebaseConfig.4d01e9b5.js";import{P as nt}from"./PlaqueTokenItem.0df8806a.js";import{u as ot}from"./gallery.3f7fe183.js";import"./thumbnail-image.a0693d83.js";import"./ArtworkFilters.b0e27047.js";import"./gallery-token.2e61e420.js";const it=q=>(ue("data-v-2d725dde"),q=q(),_e(),q),st={class:"dialog-container"},dt={class:"dialog-footer"},rt=it(()=>n("div",{style:{"flex-grow":"1"}},null,-1)),ut=Z({__name:"AddTokenDialog",props:{show_add_token_dialog:{type:Boolean},plaque_id:{}},emits:["update:show_add_token_dialog"],setup(q,{emit:a}){const p=q,u=y([]),$=y(!1),V=a,{screen_type:N}=Se(),S=te(),h=Ae(),w=ce(),r=D({get(){return p.show_add_token_dialog},set(s){V("update:show_add_token_dialog",s)}});K(r,s=>{s&&(u.value=JSON.parse(JSON.stringify(A.value.entity.token_meta_id_list)))});const A=D(()=>S.plaque_map[p.plaque_id]),I=D(()=>h.sorted_all_token_metas),O=async()=>{$.value=!0;try{for(let[s,i]of u.value.entries()){const v=h.all_token_metas[i];if(!v)throw"Failed to find store token for token: "+i;if(v.entity.platform!=xe.Opensea)continue;const k=JSON.parse(JSON.stringify(v));k.entity.user_id=w.get_account.id,k.entity.platform=xe.OpenseaArchive;const C=await Xe(k.entity);u.value[s]=C.id}await E(p.plaque_id,{token_meta_id_list:u.value}),S.plaque_map[p.plaque_id].entity.token_meta_id_list=u.value}catch(s){T(`Error updating plaque tokens - ${s}`)}$.value=!1,r.value=!1},z=()=>{u.value=[]};return(s,i)=>{const v=c("el-button"),k=c("el-dialog");return m(),b("div",st,[e(k,{center:"",modelValue:r.value,"onUpdate:modelValue":i[1]||(i[1]=C=>r.value=C),title:"Add artwork to plaque","close-on-click-modal":!1,fullscreen:U(N)=="xs",top:"2vh","destroy-on-close":""},{footer:l(()=>[n("div",dt,[n("div",null,x(`Artwork in playlist: ${u.value.length}`),1),rt,e(v,{onClick:z},{default:l(()=>[d("Clear")]),_:1}),e(v,{type:"info",onClick:O,loading:$.value},{default:l(()=>[d("Save")]),_:1},8,["loading"])])]),default:l(()=>[e(et,{selected_token_meta_id_list:u.value,"onUpdate:selected_token_meta_id_list":i[0]||(i[0]=C=>u.value=C),token_meta_list:I.value,plaque_id:s.plaque_id},null,8,["selected_token_meta_id_list","token_meta_list","plaque_id"])]),_:1},8,["modelValue","fullscreen"])])}}});var _t=ee(ut,[["__scopeId","data-v-2d725dde"]]);const ct={class:"controller-buttons"},pt=Z({__name:"PlaqueController",props:{plaque:{}},setup(q){const a=te(),p=q,u=y(!1),$=y(!1),V=y(!1),N=y(!1),S=D({get:()=>p.plaque.entity.orientation||"landscape",set:w=>{E(p.plaque.id,{orientation:w}).then(()=>{a.plaque_map[p.plaque.id].entity.orientation=w,L({type:"success",message:"Plaque orientation updated"})}).catch(r=>{T(`Error updating plaque orientation - ${r}`)})}}),h=w=>{const r={type:w,time_sent:P.now()};E(p.plaque.id,{command:r}).then(()=>{a.plaque_map[p.plaque.id].entity.command=r,L({type:"success",message:"Command sent to plaque"})}).catch(A=>{T(`Error sending command to plaque - ${A}`)}).finally(()=>{u.value=!1,$.value=!1,V.value=!1,N.value=!1})};return(w,r)=>{const A=c("el-button"),I=c("el-radio"),O=c("el-radio-group");return m(),b("div",null,[n("div",ct,[e(A,{circle:"",text:"",loading:u.value,icon:"DArrowLeft",onClick:r[0]||(r[0]=z=>{u.value=!0,h("playlist_previous")})},null,8,["loading"]),e(A,{circle:"",text:"",loading:$.value,icon:"VideoPlay",onClick:r[1]||(r[1]=z=>{$.value=!0,h("play")})},null,8,["loading"]),e(A,{circle:"",text:"",icon:"VideoPause",loading:V.value,onClick:r[2]||(r[2]=z=>{V.value=!0,h("pause")})},null,8,["loading"]),e(A,{circle:"",text:"",icon:"DArrowRight",loading:N.value,onClick:r[3]||(r[3]=z=>{N.value=!0,h("playlist_next")})},null,8,["loading"])]),e(O,{modelValue:S.value,"onUpdate:modelValue":r[4]||(r[4]=z=>S.value=z),style:{display:"flex","flex-direction":"column","align-items":"start","margin-top":"20px"}},{default:l(()=>[e(I,{label:"landscape",size:"small"},{default:l(()=>[d("Landscape")]),_:1}),e(I,{label:"portrait",size:"small"},{default:l(()=>[d("Portrait")]),_:1}),e(I,{label:"landscape_reversed",size:"small"},{default:l(()=>[d("Landscape Reversed")]),_:1}),e(I,{label:"portrait_reversed",size:"small"},{default:l(()=>[d("Portrait Reversed")]),_:1})]),_:1},8,["modelValue"])])}}});var mt=ee(pt,[["__scopeId","data-v-100e65c8"]]);const M=q=>(ue("data-v-72e02654"),q=q(),_e(),q),yt={style:{display:"flex","align-items":"center",padding:"1em"}},ft={key:0},vt=M(()=>n("div",{style:{"flex-grow":"1"}},null,-1)),gt={class:"card-simple"},qt=M(()=>n("hr",null,null,-1)),ht=M(()=>n("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"title",-1)),kt=M(()=>n("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"artist",-1)),wt={style:{padding:"0.3em 1em"}},Ct={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-right":"1em",padding:"1em"}},xt={key:0,class:"card-detail"},bt={style:{padding:"0 1em"}},$t={style:{display:"flex","align-items":"center","justify-content":"space-between",padding:"0.5em 1em"}},St=M(()=>n("hr",null,null,-1)),At=M(()=>n("div",{style:{padding:"1em"}},"No artwork added",-1)),Pt=M(()=>n("hr",null,null,-1)),Vt={style:{display:"flex",padding:"1em"}},Nt=M(()=>n("div",{style:{"flex-grow":"1"}},null,-1)),zt={key:0,style:{padding:"1em"}},Lt={style:{padding:"1em 0em",display:"flex","justify-content":"space-between","align-items":"center"}},Et={key:0},It=M(()=>n("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"Associated User",-1)),Tt={key:0},Dt={key:1},Ut={style:{"font-size":"var(--el-font-size-extra-small)"}},Mt={key:1},Ft={style:{"margin-bottom":"1em"}},Ot=M(()=>n("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"Machine Info",-1)),Rt={key:0,style:{"margin-bottom":"1em"}},Bt=M(()=>n("div",{class:"caption"},"Admin only commands",-1)),jt={style:{"margin-bottom":"1em"}},Jt={style:{"margin-bottom":"1em"}},Wt={style:{"margin-bottom":"1em"}},Gt={style:{"margin-bottom":"1em"}},Kt={style:{"margin-top":"1em"}},Ht=M(()=>n("div",{class:"caption"},"Enable Support VPN",-1)),Qt={style:{display:"flex","justify-content":"end"}},Xt=Z({__name:"PlaqueCard",props:{plaque:{}},setup(q){const a=q,p=te();be();const u=y("simple"),$=y(!1),V=y(!1),N=y(""),S=y(!1),h=y(!1),w=y(!1),r=y(!1),A=y(!1),I=y(!1),O=y(!1),z=y(!1),s=y(!1);P.now();const i=async()=>{S.value=!0,await E(a.plaque.id,{name:a.plaque.entity.name}).catch(t=>{T(`Error updating plaque tokens - ${t}`)}),V.value=!1,S.value=!1},v=ce(),k=Ae(),C=D(()=>j.value.length==0?null:j.value[0]),j=D(()=>{const t=k.all_token_metas;return a.plaque.entity.token_meta_id_list.map(_=>t[_])}),le=D(()=>$e(a.plaque)),ae=D(()=>{const t=a.plaque.entity.last_check_in_time;return t?new Date(t.seconds*1e3).toLocaleString("en-US",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):"N/A"}),ne=t=>new Date(t.seconds*1e3).toLocaleString("en-US",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}),oe=()=>{G.confirm(`Are you sure you want to clear tokens for plaque '${a.plaque.entity.name}'?`,"Clear tokens",{type:"warning"}).then(()=>{E(a.plaque.id,{token_meta_id_list:[]}).then(()=>{p.plaque_map[a.plaque.id].entity.token_meta_id_list=[],L({type:"success",message:"Tokens cleared"})}).catch(t=>{L({message:`Error clearing tokens from plaque - ${t}`,type:"error",showClose:!0,duration:12e3})})})},ie=()=>{G.confirm(`Are you sure you want to forget the plaque named '${a.plaque.entity.name}'?`,"Forget plaque",{type:"warning"}).then(()=>{E(a.plaque.id,{user_id:"",token_meta_id_list:[]}).then(()=>{p.plaque_map[a.plaque.id].entity.user_id="",p.plaque_map[a.plaque.id].entity.token_meta_id_list=[],L({type:"success",message:"Plaque forgotten"})}).catch(t=>{L({message:`Error forgetting plaque - ${t}`,type:"error",showClose:!0,duration:12e3})})})};K(u,t=>{t=="settings"&&a.plaque.entity.user_id&&!N.value&&Ye(a.plaque.entity.user_id).then(o=>{N.value=o.entity.email}).catch(o=>{L({message:`Error loading user account - ${o}`,type:"error",showClose:!0,duration:12e3})})});const f=D({get:()=>Boolean(a.plaque.entity.vpn_active),set:t=>{E(a.plaque.id,{vpn_active:t}).then(()=>{p.plaque_map[a.plaque.id].entity.vpn_active=t,L({type:"success",message:"VPN setting updated"})}).catch(o=>{T(`Error updating VPN setting- ${o}`)})}}),Pe=D(()=>{var _,J,R;const t=(R=(J=(_=a==null?void 0:a.plaque)==null?void 0:_.entity)==null?void 0:J.machine_data)==null?void 0:R.updated_at;return t?new Date(t.seconds*1e3+t.nanoseconds/1e6).toLocaleString():"N/A"}),Ve=()=>{const t={type:"upload_logs",time_sent:P.now()};h.value=!0,E(a.plaque.id,{command:t}).then(()=>{p.plaque_map[a.plaque.id].entity.command=t,L({type:"success",message:"Command sent to plaque"})}).catch(o=>{T(`Error sending command to plaque - ${o}`)}).finally(()=>{h.value=!1})},Ne=()=>{G.confirm(`Are you sure you want to restart the plaque '${a.plaque.entity.name}'?`,"Restart plaque",{type:"warning"}).then(()=>{const t={type:"restart_machine",time_sent:P.now()};w.value=!0,E(a.plaque.id,{command:t}).then(()=>{p.plaque_map[a.plaque.id].entity.command=t,L({type:"success",message:"Command sent to plaque"})}).catch(o=>{T(`Error sending command to plaque - ${o}`)}).finally(()=>{w.value=!1})})},ze=()=>{G.confirm(`Are you sure you want to restart the app on plaque '${a.plaque.entity.name}'?`,"Restart app",{type:"warning"}).then(()=>{const t={type:"restart_app",time_sent:P.now()};r.value=!0,E(a.plaque.id,{command:t}).then(()=>{p.plaque_map[a.plaque.id].entity.command=t,L({type:"success",message:"Command sent to plaque"})}).catch(o=>{T(`Error sending command to plaque - ${o}`)}).finally(()=>{r.value=!1})})},X=(t,o)=>E(t,{command:o}).then(()=>{p.plaque_map[t].entity.command=o,L({type:"success",message:"Command sent to plaque"})}).catch(_=>{T(`Error sending command to plaque - ${_}`)}),Le=()=>{const t={type:"display_extend",time_sent:P.now()};I.value=!0,X(a.plaque.id,t).finally(()=>{I.value=!1})},Ee=()=>{const t={type:"display_mirror",time_sent:P.now()};O.value=!0,X(a.plaque.id,t).finally(()=>{O.value=!1})},Ie=async()=>{G.confirm("Are you sure you want to clear all media files on this plaque? The files will have to be redownloaded if you want to play them again.","Clear files",{type:"warning"}).then(async()=>{z.value=!0,await E(a.plaque.id,{token_meta_id_list:[]}).then(()=>{p.plaque_map[a.plaque.id].entity.token_meta_id_list=[]}).catch(t=>{T(`Error clearing media files - ${t}`)}),setTimeout(()=>{const t={type:"clear_media_files",time_sent:P.now()};X(a.plaque.id,t).finally(()=>{z.value=!1})},3e3)})},Te=async()=>{G.confirm("Are you sure you want to clear all wifi profiles on this plaque? The plaque will have to be reconnected to wifi before it can be controlled through this app.","Clear WiFi profiles",{type:"warning"}).then(async()=>{s.value=!0,await E(a.plaque.id,{user_id:"",token_meta_id_list:[]}).then(()=>{p.plaque_map[a.plaque.id].entity.user_id="",p.plaque_map[a.plaque.id].entity.token_meta_id_list=[]}).catch(t=>{T(`Error clearing media wifi profiles - ${t}`)}),setTimeout(()=>{const t={type:"clear_wifi_profiles",time_sent:P.now()};X(a.plaque.id,t).finally(()=>{s.value=!1})},5e3)})},De=async t=>{const o=tt(),_=`viewer-logs/${t}`,J=lt(o,_);try{const R=await at(J);window.open(R,"_blank");return}catch(R){console.log(`downloadLogs - failed to download logs for ${t}`,R),T(`Error downloading logs - ${R}`)}return""};return(t,o)=>{const _=c("el-button"),J=c("el-tag"),R=c("el-tooltip"),pe=c("el-col"),Ue=c("el-row"),Me=c("ArrowRight"),se=c("el-icon"),de=c("el-collapse-transition"),me=c("Close"),Y=c("el-table-column"),Fe=c("el-table"),Oe=c("el-dialog"),Re=c("el-switch"),Be=c("el-card");return m(),B(Be,null,{default:l(()=>[n("div",yt,[V.value?we((m(),b("input",{key:1,"onUpdate:modelValue":o[0]||(o[0]=g=>a.plaque.entity.name=g),class:"edit-name-input"},null,512)),[[je,a.plaque.entity.name]]):(m(),b("h1",ft,x(a.plaque.entity.name),1)),V.value?W("",!0):(m(),B(_,{key:2,icon:U(Je),onClick:o[1]||(o[1]=g=>V.value=!0),class:"editIcon",circle:""},null,8,["icon"])),V.value?(m(),B(_,{key:3,icon:U(We),loading:S.value,onClick:i,class:"editIcon",circle:"",type:S.value?"":"success",text:""},null,8,["icon","loading","type"])):W("",!0),vt,e(R,{class:"box-item",effect:"dark",content:`Last activity ${ae.value}`,placement:"top"},{default:l(()=>[le.value?(m(),B(J,{key:0,class:"ml-2",type:"success"},{default:l(()=>[d("online")]),_:1})):(m(),B(J,{key:1,class:"ml-2",type:"danger"},{default:l(()=>[d("offline")]),_:1}))]),_:1},8,["content"])]),e(de,null,{default:l(()=>[we(n("section",gt,[qt,e(Ue,{style:{padding:"1em"}},{default:l(()=>[e(pe,{span:12},{default:l(()=>{var g;return[ht,n("span",null,x(((g=C.value)==null?void 0:g.entity.name)||"N/A"),1)]}),_:1}),e(pe,{span:12},{default:l(()=>{var g;return[kt,d(" "+x(((g=C.value)==null?void 0:g.entity.artist)||"N/A"),1)]}),_:1})]),_:1}),n("div",wt,x(`Total artworks: ${t.plaque.entity.token_meta_id_list.length}`),1),n("div",Ct,[e(_,{type:"info",onClick:o[2]||(o[2]=g=>$.value=!0)},{default:l(()=>[d("Add Artwork")]),_:1}),e(_,{onClick:o[3]||(o[3]=g=>u.value="detail")},{default:l(()=>[d(" Details"),e(se,{class:"el-icon--right"},{default:l(()=>[e(Me)]),_:1})]),_:1})])],512),[[Ge,u.value=="simple"]])]),_:1}),e(de,null,{default:l(()=>[u.value=="detail"?(m(),b("section",xt,[n("p",bt,x(`Total artworks: ${t.plaque.entity.token_meta_id_list.length}`),1),n("div",$t,[e(_,{onClick:o[4]||(o[4]=g=>u.value="settings")},{default:l(()=>[d("Settings")]),_:1}),e(_,{onClick:oe},{default:l(()=>[d("Clear Artwork")]),_:1})]),St,j.value.length==0?(m(),b(H,{key:0},[At,Pt],64)):W("",!0),(m(!0),b(H,null,re(j.value,g=>(m(),B(nt,{token_meta:g},null,8,["token_meta"]))),256)),n("div",Vt,[e(_,{type:"info",onClick:o[5]||(o[5]=g=>$.value=!0)},{default:l(()=>[d("Add Artwork")]),_:1}),Nt,e(_,{onClick:o[6]||(o[6]=g=>u.value="simple")},{default:l(()=>[d("Close"),e(se,{class:"el-icon--right"},{default:l(()=>[e(me)]),_:1})]),_:1})])])):W("",!0)]),_:1}),e(de,null,{default:l(()=>{var g,ye,fe,ve,ge,qe,he,ke;return[u.value=="settings"?(m(),b("section",zt,[e(mt,{plaque:a.plaque},null,8,["plaque"]),n("div",Lt,[t.plaque.entity.user_id?(m(),b("div",Et,[It,N.value?(m(),b("div",Tt,x(N.value),1)):(m(),b("div",Dt,"Loading...")),n("div",Ut,x(t.plaque.entity.user_id),1)])):(m(),b("div",Mt,"No associated user")),t.plaque.entity.user_id?(m(),B(_,{key:2,type:"danger",plain:"",onClick:ie},{default:l(()=>[d("Forget Display")]),_:1})):W("",!0)]),n("div",Ft,[Ot,n("div",null,"Machine name: "+x((ye=(g=t.plaque.entity.machine_data)==null?void 0:g.machine_name)!=null?ye:"N/A"),1),n("div",null,"Version: "+x((ve=(fe=t.plaque.entity.machine_data)==null?void 0:fe.version)!=null?ve:"N/A"),1),n("div",null,"Local IP: "+x((qe=(ge=t.plaque.entity.machine_data)==null?void 0:ge.local_ip)!=null?qe:"N/A"),1),n("div",null,"Public IP: "+x((ke=(he=t.plaque.entity.machine_data)==null?void 0:he.public_ip)!=null?ke:"N/A"),1),n("div",null,"Updated At: "+x(Pe.value),1),n("div",null,"Free Space: "+x(t.plaque.entity.free_space?U(Ce)(t.plaque.entity.free_space):"N/A"),1)]),U(v).is_user_admin?(m(),b("div",Rt,[Bt,n("div",jt,[e(_,{plain:"",onClick:Ve,loading:h.value},{default:l(()=>[d("Upload Logs To Cloud")]),_:1},8,["loading"]),e(_,{plain:"",onClick:o[7]||(o[7]=F=>A.value=!0)},{default:l(()=>[d("View Logs")]),_:1})]),n("div",Jt,[e(_,{plain:"",onClick:Le,loading:I.value},{default:l(()=>[d("Extend Display")]),_:1},8,["loading"]),e(_,{plain:"",onClick:Ee,loading:O.value},{default:l(()=>[d("Mirror Display")]),_:1},8,["loading"])]),n("div",Wt,[e(_,{type:"danger",plain:"",onClick:ze,loading:r.value},{default:l(()=>[d("Restart App")]),_:1},8,["loading"]),e(_,{type:"danger",plain:"",onClick:Ne,loading:w.value},{default:l(()=>[d("Restart Machine")]),_:1},8,["loading"])]),n("div",Gt,[e(_,{type:"danger",plain:"",onClick:Ie,loading:z.value},{default:l(()=>[d(" Clear Media Files")]),_:1},8,["loading"]),e(_,{type:"danger",plain:"",onClick:Te,loading:s.value},{default:l(()=>[d(" Clear WiFi Profiles")]),_:1},8,["loading"])]),e(Oe,{modelValue:A.value,"onUpdate:modelValue":o[8]||(o[8]=F=>A.value=F),title:"Uploaded Logs",width:"75%"},{default:l(()=>[e(Fe,{data:t.plaque.entity.uploaded_log_files},{default:l(()=>[e(Y,{prop:"file_name",label:"File Name",width:"400"}),e(Y,{prop:"upload_time",label:"Time Uploaded"},{default:l(({row:F})=>[d(x(ne(F.upload_time)),1)]),_:1}),e(Y,{prop:"bytes",label:"Size"},{default:l(({row:F})=>[d(x(U(Ce)(F.bytes)),1)]),_:1}),e(Y,{fixed:"right",label:"",width:"80"},{default:l(({row:F})=>[e(_,{icon:"Download",text:"",circle:"",onClick:dl=>De(F.file_name)},null,8,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1},8,["modelValue"]),n("div",Kt,[Ht,e(Re,{modelValue:f.value,"onUpdate:modelValue":o[9]||(o[9]=F=>f.value=F),"active-text":"Enabled","inactive-text":"Off"},null,8,["modelValue"])])])):W("",!0),n("div",Qt,[e(_,{onClick:o[10]||(o[10]=F=>u.value="detail")},{default:l(()=>[d("Close"),e(se,{class:"el-icon--right"},{default:l(()=>[e(me)]),_:1})]),_:1})])])):W("",!0)]}),_:1}),e(_t,{plaque_id:a.plaque.id,show_add_token_dialog:$.value,"onUpdate:show_add_token_dialog":o[11]||(o[11]=g=>$.value=g)},null,8,["plaque_id","show_add_token_dialog"])]),_:1})}}});var Yt=ee(Xt,[["__scopeId","data-v-72e02654"]]);const Q=q=>(ue("data-v-517aa68d"),q=q(),_e(),q),Zt=Q(()=>n("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"Filter by gallery",-1)),el=Q(()=>n("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"Online only",-1)),tl=Q(()=>n("div",{class:"caption"},"Sort order",-1)),ll=Q(()=>n("div",{style:{"padding-bottom":"90px"}},null,-1)),al={class:"add-button-container"},nl={style:{display:"flex","align-items":"center","justify-content":"center",height:"100%"}},ol=Q(()=>n("div",{style:{"font-size":"17px"}},"Add plaque",-1)),il={style:{display:"flex","justify-content":"space-between","flex-wrap":"wrap"}},sl=Z({__name:"PlaqueList",setup(q){const a=y(!1),{screen_type:p}=Se(),u=y(!1),$=be(),V=ce(),N=ot(),S=y(""),h=y(localStorage.getItem("plaque_list_filter_by_gallery")||"");K(h,s=>{localStorage.setItem("plaque_list_filter_by_gallery",s)});const w=y(localStorage.getItem("online_filter")==="true"||!1);K(w,s=>{if(s){localStorage.setItem("online_filter","true");return}localStorage.setItem("online_filter","false")});const r=y(localStorage.getItem("plaque_list_sort_order")||"name");K(r,s=>{localStorage.setItem("plaque_list_sort_order",s)});const A=te(),I=async()=>{a.value=!0,await Qe({name:"Test Plaque",user_id:V.get_account.id,token_meta_id_list:[],created_at:P.now(),updated_at:P.now(),orientation:Ze.Landscape,command:{type:"",time_sent:P.fromMillis(0)},last_check_in_time:P.fromMillis(0),vpn_active:!1,machine_data:{machine_name:"",version:"",local_ip:"",public_ip:"",updated_at:P.fromMillis(0)}}).catch(s=>L({message:`Error creating test plaque- ${s}`,type:"error",showClose:!0,duration:12e3})),a.value=!1,u.value=!1},O=D(()=>JSON.parse(JSON.stringify(A.all_plaque_list)).sort((i,v)=>{const k=i.entity.name.toLowerCase(),C=v.entity.name.toLowerCase();return k<C?-1:k>C?1:0})),z=D(()=>{let s=[...O.value];return s=s.filter(i=>i.entity.name||i.entity.user_id||i.entity.token_meta_id_list.length>0),h.value&&(s=s.filter(i=>{var v;return(v=N.gallery_list.find(k=>k.id==h.value))==null?void 0:v.entity.plaque_id_list.includes(i.id)})),w.value&&(s=s.filter(i=>$e(i))),r.value=="name"?s=s.sort((i,v)=>i.entity.name.localeCompare(v.entity.name)):r.value=="last_check_in_time"&&(s=s.sort((i,v)=>i.entity.last_check_in_time==null&&v.entity.last_check_in_time==null?0:i.entity.last_check_in_time==null?1:v.entity.last_check_in_time==null?-1:v.entity.last_check_in_time.seconds-i.entity.last_check_in_time.seconds)),S.value?s.filter(i=>i.entity.name.toLowerCase().includes(S.value.toLowerCase())):s});return(s,i)=>{const v=c("el-input"),k=c("el-button"),C=c("el-option"),j=c("el-select"),le=c("el-switch"),ae=c("el-popover"),ne=c("Plus"),oe=c("el-icon"),ie=c("el-dialog");return m(),b(H,null,[n("div",{class:"subheader",style:Ke([{display:"flex","align-items":"center"},U(p)=="xs"?"padding: 0px 8px 10px;":""])},[e(v,{modelValue:S.value,"onUpdate:modelValue":i[0]||(i[0]=f=>S.value=f),"prefix-icon":U(He),placeholder:"Search plaques",style:{"max-width":"350px"},clearable:""},null,8,["modelValue","prefix-icon"]),e(ae,{placement:"bottom",title:"Plaque Filters",width:300,trigger:"click"},{reference:l(()=>[e(k,{icon:"Filter",style:{"margin-left":"10px"},type:"info",size:"small"},{default:l(()=>[d("Filters")]),_:1})]),default:l(()=>[Zt,e(j,{modelValue:h.value,"onUpdate:modelValue":i[1]||(i[1]=f=>h.value=f),placeholder:"Filter by gallery",style:{width:"260px","margin-bottom":"12px"}},{default:l(()=>[e(C,{label:"All plaques",value:""}),(m(!0),b(H,null,re(U(N).gallery_list,f=>(m(),B(C,{key:f.id,label:`${f.entity.name}`,value:f.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),el,e(le,{modelValue:w.value,"onUpdate:modelValue":i[2]||(i[2]=f=>w.value=f),style:{"margin-bottom":"1em"}},null,8,["modelValue"]),tl,e(j,{modelValue:r.value,"onUpdate:modelValue":i[3]||(i[3]=f=>r.value=f),placeholder:"Sort by",class:"filter-select"},{default:l(()=>[e(C,{label:"Sort by name",value:"name"}),e(C,{label:"Sort by last activity",value:"last_check_in_time"})]),_:1},8,["modelValue"])]),_:1}),e(k,{icon:"Camera",type:"info",onClick:i[4]||(i[4]=f=>U($).push("qr-scan")),style:{"margin-left":"10px"},size:"small"},{default:l(()=>[d("Scan")]),_:1})],4),ll,(m(!0),b(H,null,re(z.value,f=>(m(),B(Yt,{plaque:f,key:f.id},null,8,["plaque"]))),128)),n("div",al,[n("div",nl,[n("div",{class:"add-button",onClick:i[5]||(i[5]=f=>u.value=!0)},[e(oe,{style:{"font-size":"26px","margin-bottom":"6px"}},{default:l(()=>[e(ne)]),_:1}),ol])])]),e(ie,{modelValue:u.value,"onUpdate:modelValue":i[7]||(i[7]=f=>u.value=f),title:"Add plaque",width:U(p)=="xs"?"90%":"50%",style:{"max-width":"500px"}},{default:l(()=>[n("div",il,[e(k,{onClick:i[6]||(i[6]=f=>{U($).push("qr-scan"),u.value=!1}),icon:"camera",color:"#000000",style:{margin:"10px 12px 10px 0px"}},{default:l(()=>[d("Scan Plaque QR Code")]),_:1}),e(k,{icon:"plus",onClick:I,loading:a.value,style:{margin:"10px 0px 10px 0px"},color:"#000000"},{default:l(()=>[d("Add test plaque ")]),_:1},8,["loading"])])]),_:1},8,["modelValue","width"])],64)}}});var bl=ee(sl,[["__scopeId","data-v-517aa68d"]]);export{bl as default};
