import{d as Z,r as f,c as L,B as G,h as x,i as e,w as t,u as E,f as u,o as c,l as a,t as S,j as _,_ as ee,p as de,m as ue,z,a as F,b as xe,C as ke,D as Ie,G as Ue,g as J,H as Ee,I as Te,F as K,J as re,A as Y,n as De,K as Me}from"./index.0a522956.js";import{u as D,d as Oe}from"./plaque.88741b72.js";import{c as Fe}from"./token-meta.e9d92a72.js";import{u as te}from"./plaque.146a5e81.js";import{u as _e,g as Re}from"./account.5b2c5730.js";import{s as R,m as Be,a as Ce}from"./util.75a90859.js";import{T as we,O as je}from"./types.c2052207.js";import{u as be}from"./breakpoints.fb828715.js";import{u as $e}from"./token-meta.ea85ac1c.js";import{_ as Je}from"./TokenSelectList.21bfb075.js";import{i as M,h as Ge,r as Ke,j as He}from"./firebaseConfig.4d01e9b5.js";import{P as Qe}from"./PlaqueTokenItem.0a15dd55.js";import{u as We}from"./gallery.e641216e.js";import"./thumbnail-image.e09aff6a.js";import"./ArtworkFilters.08d2b8ac.js";import"./gallery-token.628d8fa1.js";const Xe=q=>(de("data-v-381e6960"),q=q(),ue(),q),Ye={class:"dialog-container"},Ze={class:"dialog-footer"},et=Xe(()=>a("div",{style:{"flex-grow":"1"}},null,-1)),tt=Z({__name:"AddTokenDialog",props:{show_add_token_dialog:{type:Boolean},plaque_id:{}},emits:["update:show_add_token_dialog"],setup(q,{emit:o}){const m=q,d=f([]),C=f(!1),V=o,{screen_type:P}=be(),b=te(),h=$e(),w=_e(),r=L({get(){return m.show_add_token_dialog},set(i){V("update:show_add_token_dialog",i)}});G(r,i=>{i&&(d.value=JSON.parse(JSON.stringify(A.value.entity.token_meta_id_list)))});const A=L(()=>b.plaque_map[m.plaque_id]),T=L(()=>h.sorted_all_token_metas),B=async()=>{C.value=!0;try{for(let[i,l]of d.value.entries()){const y=h.all_token_metas[l];if(!y)throw"Failed to find store token for token: "+l;if(y.entity.platform!=we.Opensea)continue;const k=JSON.parse(JSON.stringify(y));k.entity.user_id=w.get_account.id,k.entity.platform=we.OpenseaArchive;const $=await Fe(k.entity);d.value[i]=$.id}await D(m.plaque_id,{token_meta_id_list:d.value}),b.plaque_map[m.plaque_id].entity.token_meta_id_list=d.value}catch(i){R(`Error updating plaque tokens - ${i}`)}C.value=!1,r.value=!1},I=()=>{d.value=[]};return(i,l)=>{const y=u("el-button"),k=u("el-dialog");return c(),x("div",Ye,[e(k,{center:"",modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=$=>r.value=$),title:"Add artwork to plaque","close-on-click-modal":!1,fullscreen:E(P)=="xs",top:"2vh","destroy-on-close":""},{footer:t(()=>[a("div",Ze,[a("div",null,S(`Artwork in playlist: ${d.value.length}`),1),et,e(y,{onClick:I},{default:t(()=>[_("Clear")]),_:1}),e(y,{type:"info",onClick:B,loading:C.value},{default:t(()=>[_("Save")]),_:1},8,["loading"])])]),default:t(()=>[e(Je,{selected_token_meta_id_list:d.value,"onUpdate:selected_token_meta_id_list":l[0]||(l[0]=$=>d.value=$),token_meta_list:T.value},null,8,["selected_token_meta_id_list","token_meta_list"])]),_:1},8,["modelValue","fullscreen"])])}}});var lt=ee(tt,[["__scopeId","data-v-381e6960"]]);const at={class:"controller-buttons"},nt=Z({__name:"PlaqueController",props:{plaque:{}},setup(q){const o=te(),m=q,d=f(!1),C=f(!1),V=f(!1),P=f(!1),b=L({get:()=>m.plaque.entity.orientation||"landscape",set:w=>{D(m.plaque.id,{orientation:w}).then(()=>{o.plaque_map[m.plaque.id].entity.orientation=w,z({type:"success",message:"Plaque orientation updated"})}).catch(r=>{R(`Error updating plaque orientation - ${r}`)})}}),h=w=>{const r={type:w,time_sent:M.now()};D(m.plaque.id,{command:r}).then(()=>{o.plaque_map[m.plaque.id].entity.command=r,z({type:"success",message:"Command sent to plaque"})}).catch(A=>{R(`Error sending command to plaque - ${A}`)}).finally(()=>{d.value=!1,C.value=!1,V.value=!1,P.value=!1})};return(w,r)=>{const A=u("el-button"),T=u("el-radio"),B=u("el-radio-group");return c(),x("div",null,[a("div",at,[e(A,{circle:"",text:"",loading:d.value,icon:"DArrowLeft",onClick:r[0]||(r[0]=I=>{d.value=!0,h("playlist_previous")})},null,8,["loading"]),e(A,{circle:"",text:"",loading:C.value,icon:"VideoPlay",onClick:r[1]||(r[1]=I=>{C.value=!0,h("play")})},null,8,["loading"]),e(A,{circle:"",text:"",icon:"VideoPause",loading:V.value,onClick:r[2]||(r[2]=I=>{V.value=!0,h("pause")})},null,8,["loading"]),e(A,{circle:"",text:"",icon:"DArrowRight",loading:P.value,onClick:r[3]||(r[3]=I=>{P.value=!0,h("playlist_next")})},null,8,["loading"])]),e(B,{modelValue:b.value,"onUpdate:modelValue":r[4]||(r[4]=I=>b.value=I),style:{display:"flex","flex-direction":"column","align-items":"start","margin-top":"20px"}},{default:t(()=>[e(T,{label:"landscape",size:"small"},{default:t(()=>[_("Landscape")]),_:1}),e(T,{label:"portrait",size:"small"},{default:t(()=>[_("Portrait")]),_:1}),e(T,{label:"landscape_reversed",size:"small"},{default:t(()=>[_("Landscape Reversed")]),_:1}),e(T,{label:"portrait_reversed",size:"small"},{default:t(()=>[_("Portrait Reversed")]),_:1})]),_:1},8,["modelValue"])])}}});var ot=ee(nt,[["__scopeId","data-v-100e65c8"]]);const N=q=>(de("data-v-d4494462"),q=q(),ue(),q),st={style:{display:"flex","align-items":"center",padding:"1em"}},it={key:0},rt=N(()=>a("div",{style:{"flex-grow":"1"}},null,-1)),dt={class:"card-simple"},ut=N(()=>a("hr",null,null,-1)),_t=N(()=>a("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"title",-1)),ct=N(()=>a("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"artist",-1)),pt={style:{padding:"0.3em 1em"}},mt={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-right":"1em",padding:"1em"}},yt={key:0,class:"card-detail"},vt={style:{padding:"0 1em"}},ft={style:{display:"flex","align-items":"center","justify-content":"space-between",padding:"0.5em 1em"}},gt=N(()=>a("hr",null,null,-1)),qt=N(()=>a("div",{style:{padding:"1em"}},"No artwork added",-1)),ht=N(()=>a("hr",null,null,-1)),kt={style:{display:"flex",padding:"1em"}},wt=N(()=>a("div",{style:{"flex-grow":"1"}},null,-1)),xt={key:0,style:{padding:"1em"}},Ct={style:{padding:"1em 0em",display:"flex","justify-content":"space-between","align-items":"center"}},bt={key:0},$t=N(()=>a("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"Associated User",-1)),St={key:0},At={key:1},Vt={style:{"font-size":"var(--el-font-size-extra-small)"}},Pt={key:1},zt={style:{"margin-bottom":"1em"}},Lt=N(()=>a("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"Machine Info",-1)),Nt={key:0,style:{"margin-bottom":"1em"}},It=N(()=>a("div",{class:"caption"},"Admin only commands",-1)),Ut={style:{"margin-bottom":"1em"}},Et={style:{"margin-bottom":"1em"}},Tt={style:{"margin-top":"1em"}},Dt=N(()=>a("div",{class:"caption"},"Enable Support VPN",-1)),Mt={style:{display:"flex","justify-content":"end"}},Ot=Z({__name:"PlaqueCard",props:{plaque:{}},setup(q){const o=q,m=te();xe();const d=f("simple"),C=f(!1),V=f(!1),P=f(""),b=f(!1),h=f(!1),w=f(!1),r=f(!1),A=f(!1);M.now();const T=async()=>{b.value=!0,await D(o.plaque.id,{name:o.plaque.entity.name}).catch(n=>{R(`Error updating plaque tokens - ${n}`)}),V.value=!1,b.value=!1},B=_e(),I=$e(),i=L(()=>l.value.length==0?null:l.value[0]),l=L(()=>{const n=I.all_token_metas;return o.plaque.entity.token_meta_id_list.map(p=>n[p])}),y=L(()=>Ce(o.plaque)),k=L(()=>{const n=o.plaque.entity.last_check_in_time;return n?new Date(n.seconds*1e3).toLocaleString("en-US",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):"N/A"}),$=n=>new Date(n.seconds*1e3).toLocaleString("en-US",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}),Q=()=>{Y.confirm(`Are you sure you want to clear tokens for plaque '${o.plaque.entity.name}'?`,"Clear tokens",{type:"warning"}).then(()=>{D(o.plaque.id,{token_meta_id_list:[]}).then(()=>{m.plaque_map[o.plaque.id].entity.token_meta_id_list=[],z({type:"success",message:"Tokens cleared"})}).catch(n=>{z({message:`Error clearing tokens from plaque - ${n}`,type:"error",showClose:!0,duration:12e3})})})},le=()=>{Y.confirm(`Are you sure you want to forget the plaque named '${o.plaque.entity.name}'?`,"Forget plaque",{type:"warning"}).then(()=>{D(o.plaque.id,{user_id:"",token_meta_id_list:[]}).then(()=>{m.plaque_map[o.plaque.id].entity.user_id="",m.plaque_map[o.plaque.id].entity.token_meta_id_list=[],z({type:"success",message:"Plaque forgotten"})}).catch(n=>{z({message:`Error forgetting plaque - ${n}`,type:"error",showClose:!0,duration:12e3})})})};G(d,n=>{n=="settings"&&o.plaque.entity.user_id&&!P.value&&Re(o.plaque.entity.user_id).then(s=>{P.value=s.entity.email}).catch(s=>{z({message:`Error loading user account - ${s}`,type:"error",showClose:!0,duration:12e3})})});const W=L({get:()=>Boolean(o.plaque.entity.vpn_active),set:n=>{D(o.plaque.id,{vpn_active:n}).then(()=>{m.plaque_map[o.plaque.id].entity.vpn_active=n,z({type:"success",message:"VPN setting updated"})}).catch(s=>{R(`Error updating VPN setting- ${s}`)})}}),ae=L(()=>{var p,j,O;const n=(O=(j=(p=o==null?void 0:o.plaque)==null?void 0:p.entity)==null?void 0:j.machine_data)==null?void 0:O.updated_at;return n?new Date(n.seconds*1e3+n.nanoseconds/1e6).toLocaleString():"N/A"}),ne=()=>{const n={type:"upload_logs",time_sent:M.now()};h.value=!0,D(o.plaque.id,{command:n}).then(()=>{m.plaque_map[o.plaque.id].entity.command=n,z({type:"success",message:"Command sent to plaque"})}).catch(s=>{R(`Error sending command to plaque - ${s}`)}).finally(()=>{h.value=!1})},oe=()=>{Y.confirm(`Are you sure you want to restart the plaque '${o.plaque.entity.name}'?`,"Restart plaque",{type:"warning"}).then(()=>{const n={type:"restart_machine",time_sent:M.now()};w.value=!0,D(o.plaque.id,{command:n}).then(()=>{m.plaque_map[o.plaque.id].entity.command=n,z({type:"success",message:"Command sent to plaque"})}).catch(s=>{R(`Error sending command to plaque - ${s}`)}).finally(()=>{w.value=!1})})},v=()=>{Y.confirm(`Are you sure you want to restart the app on plaque '${o.plaque.entity.name}'?`,"Restart app",{type:"warning"}).then(()=>{const n={type:"restart_app",time_sent:M.now()};r.value=!0,D(o.plaque.id,{command:n}).then(()=>{m.plaque_map[o.plaque.id].entity.command=n,z({type:"success",message:"Command sent to plaque"})}).catch(s=>{R(`Error sending command to plaque - ${s}`)}).finally(()=>{r.value=!1})})},Se=async n=>{const s=Ge(),p=`viewer-logs/${n}`,j=Ke(s,p);try{const O=await He(j);window.open(O,"_blank");return}catch(O){console.log(`downloadLogs - failed to download logs for ${n}`,O),R(`Error downloading logs - ${O}`)}return""};return(n,s)=>{const p=u("el-button"),j=u("el-tag"),O=u("el-tooltip"),ce=u("el-col"),Ae=u("el-row"),Ve=u("ArrowRight"),se=u("el-icon"),ie=u("el-collapse-transition"),pe=u("Close"),X=u("el-table-column"),Pe=u("el-table"),ze=u("el-dialog"),Le=u("el-switch"),Ne=u("el-card");return c(),F(Ne,null,{default:t(()=>[a("div",st,[V.value?ke((c(),x("input",{key:1,"onUpdate:modelValue":s[0]||(s[0]=g=>o.plaque.entity.name=g),class:"edit-name-input"},null,512)),[[Ie,o.plaque.entity.name]]):(c(),x("h1",it,S(o.plaque.entity.name),1)),V.value?J("",!0):(c(),F(p,{key:2,icon:E(Ue),onClick:s[1]||(s[1]=g=>V.value=!0),class:"editIcon",circle:""},null,8,["icon"])),V.value?(c(),F(p,{key:3,icon:E(Ee),loading:b.value,onClick:T,class:"editIcon",circle:"",type:b.value?"":"success",text:""},null,8,["icon","loading","type"])):J("",!0),rt,e(O,{class:"box-item",effect:"dark",content:`Last activity ${k.value}`,placement:"top"},{default:t(()=>[y.value?(c(),F(j,{key:0,class:"ml-2",type:"success"},{default:t(()=>[_("online")]),_:1})):(c(),F(j,{key:1,class:"ml-2",type:"danger"},{default:t(()=>[_("offline")]),_:1}))]),_:1},8,["content"])]),e(ie,null,{default:t(()=>[ke(a("section",dt,[ut,e(Ae,{style:{padding:"1em"}},{default:t(()=>[e(ce,{span:12},{default:t(()=>{var g;return[_t,a("span",null,S(((g=i.value)==null?void 0:g.entity.name)||"N/A"),1)]}),_:1}),e(ce,{span:12},{default:t(()=>{var g;return[ct,_(" "+S(((g=i.value)==null?void 0:g.entity.artist)||"N/A"),1)]}),_:1})]),_:1}),a("div",pt,S(`Total artworks: ${n.plaque.entity.token_meta_id_list.length}`),1),a("div",mt,[e(p,{type:"info",onClick:s[2]||(s[2]=g=>C.value=!0)},{default:t(()=>[_("Add Artwork")]),_:1}),e(p,{onClick:s[3]||(s[3]=g=>d.value="detail")},{default:t(()=>[_(" Details"),e(se,{class:"el-icon--right"},{default:t(()=>[e(Ve)]),_:1})]),_:1})])],512),[[Te,d.value=="simple"]])]),_:1}),e(ie,null,{default:t(()=>[d.value=="detail"?(c(),x("section",yt,[a("p",vt,S(`Total artworks: ${n.plaque.entity.token_meta_id_list.length}`),1),a("div",ft,[e(p,{onClick:s[4]||(s[4]=g=>d.value="settings")},{default:t(()=>[_("Settings")]),_:1}),e(p,{onClick:Q},{default:t(()=>[_("Clear Artwork")]),_:1})]),gt,l.value.length==0?(c(),x(K,{key:0},[qt,ht],64)):J("",!0),(c(!0),x(K,null,re(l.value,g=>(c(),F(Qe,{token_meta:g},null,8,["token_meta"]))),256)),a("div",kt,[e(p,{type:"info",onClick:s[5]||(s[5]=g=>C.value=!0)},{default:t(()=>[_("Add Artwork")]),_:1}),wt,e(p,{onClick:s[6]||(s[6]=g=>d.value="simple")},{default:t(()=>[_("Close"),e(se,{class:"el-icon--right"},{default:t(()=>[e(pe)]),_:1})]),_:1})])])):J("",!0)]),_:1}),e(ie,null,{default:t(()=>{var g,me,ye,ve,fe,ge,qe,he;return[d.value=="settings"?(c(),x("section",xt,[e(ot,{plaque:o.plaque},null,8,["plaque"]),a("div",Ct,[n.plaque.entity.user_id?(c(),x("div",bt,[$t,P.value?(c(),x("div",St,S(P.value),1)):(c(),x("div",At,"Loading...")),a("div",Vt,S(n.plaque.entity.user_id),1)])):(c(),x("div",Pt,"No associated user")),n.plaque.entity.user_id?(c(),F(p,{key:2,type:"danger",plain:"",onClick:le},{default:t(()=>[_("Forget Display")]),_:1})):J("",!0)]),a("div",zt,[Lt,a("div",null,"Machine name: "+S((me=(g=n.plaque.entity.machine_data)==null?void 0:g.machine_name)!=null?me:"N/A"),1),a("div",null,"Version: "+S((ve=(ye=n.plaque.entity.machine_data)==null?void 0:ye.version)!=null?ve:"N/A"),1),a("div",null,"Local IP: "+S((ge=(fe=n.plaque.entity.machine_data)==null?void 0:fe.local_ip)!=null?ge:"N/A"),1),a("div",null,"Public IP: "+S((he=(qe=n.plaque.entity.machine_data)==null?void 0:qe.public_ip)!=null?he:"N/A"),1),a("div",null,"Updated At: "+S(ae.value),1)]),E(B).is_user_admin?(c(),x("div",Nt,[It,a("div",Ut,[e(p,{plain:"",onClick:ne,loading:h.value},{default:t(()=>[_("Upload Logs To Cloud")]),_:1},8,["loading"]),e(p,{plain:"",onClick:s[7]||(s[7]=U=>A.value=!0)},{default:t(()=>[_("View Logs")]),_:1})]),a("div",Et,[e(p,{type:"danger",plain:"",onClick:v,loading:r.value},{default:t(()=>[_("Restart App")]),_:1},8,["loading"]),e(p,{type:"danger",plain:"",onClick:oe,loading:w.value},{default:t(()=>[_("Restart Machine")]),_:1},8,["loading"])]),e(ze,{modelValue:A.value,"onUpdate:modelValue":s[8]||(s[8]=U=>A.value=U),title:"Uploaded Logs",width:"75%"},{default:t(()=>[e(Pe,{data:n.plaque.entity.uploaded_log_files},{default:t(()=>[e(X,{prop:"file_name",label:"File Name",width:"400"}),e(X,{prop:"upload_time",label:"Time Uploaded"},{default:t(({row:U})=>[_(S($(U.upload_time)),1)]),_:1}),e(X,{prop:"bytes",label:"Size"},{default:t(({row:U})=>[_(S(E(Be)(U.bytes)),1)]),_:1}),e(X,{fixed:"right",label:"",width:"80"},{default:t(({row:U})=>[e(p,{icon:"Download",text:"",circle:"",onClick:Xt=>Se(U.file_name)},null,8,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1},8,["modelValue"]),a("div",Tt,[Dt,e(Le,{modelValue:W.value,"onUpdate:modelValue":s[9]||(s[9]=U=>W.value=U),"active-text":"Enabled","inactive-text":"Off"},null,8,["modelValue"])])])):J("",!0),a("div",Mt,[e(p,{onClick:s[10]||(s[10]=U=>d.value="detail")},{default:t(()=>[_("Close"),e(se,{class:"el-icon--right"},{default:t(()=>[e(pe)]),_:1})]),_:1})])])):J("",!0)]}),_:1}),e(lt,{plaque_id:o.plaque.id,show_add_token_dialog:C.value,"onUpdate:show_add_token_dialog":s[11]||(s[11]=g=>C.value=g)},null,8,["plaque_id","show_add_token_dialog"])]),_:1})}}});var Ft=ee(Ot,[["__scopeId","data-v-d4494462"]]);const H=q=>(de("data-v-517aa68d"),q=q(),ue(),q),Rt=H(()=>a("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"Filter by gallery",-1)),Bt=H(()=>a("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"Online only",-1)),jt=H(()=>a("div",{class:"caption"},"Sort order",-1)),Jt=H(()=>a("div",{style:{"padding-bottom":"90px"}},null,-1)),Gt={class:"add-button-container"},Kt={style:{display:"flex","align-items":"center","justify-content":"center",height:"100%"}},Ht=H(()=>a("div",{style:{"font-size":"17px"}},"Add plaque",-1)),Qt={style:{display:"flex","justify-content":"space-between","flex-wrap":"wrap"}},Wt=Z({__name:"PlaqueList",setup(q){const o=f(!1),{screen_type:m}=be(),d=f(!1),C=xe(),V=_e(),P=We(),b=f(""),h=f(localStorage.getItem("plaque_list_filter_by_gallery")||"");G(h,i=>{localStorage.setItem("plaque_list_filter_by_gallery",i)});const w=f(localStorage.getItem("online_filter")==="true"||!1);G(w,i=>{if(i){localStorage.setItem("online_filter","true");return}localStorage.setItem("online_filter","false")});const r=f(localStorage.getItem("plaque_list_sort_order")||"name");G(r,i=>{localStorage.setItem("plaque_list_sort_order",i)});const A=te(),T=async()=>{o.value=!0,await Oe({name:"Test Plaque",user_id:V.get_account.id,token_meta_id_list:[],created_at:M.now(),updated_at:M.now(),orientation:je.Landscape,command:{type:"",time_sent:M.fromMillis(0)},last_check_in_time:M.fromMillis(0),vpn_active:!1,machine_data:{machine_name:"",version:"",local_ip:"",public_ip:"",updated_at:M.fromMillis(0)}}).catch(i=>z({message:`Error creating test plaque- ${i}`,type:"error",showClose:!0,duration:12e3})),o.value=!1,d.value=!1},B=L(()=>JSON.parse(JSON.stringify(A.all_plaque_list)).sort((l,y)=>{const k=l.entity.name.toLowerCase(),$=y.entity.name.toLowerCase();return k<$?-1:k>$?1:0})),I=L(()=>{let i=[...B.value];return i=i.filter(l=>l.entity.name||l.entity.user_id||l.entity.token_meta_id_list.length>0),h.value&&(i=i.filter(l=>{var y;return(y=P.gallery_list.find(k=>k.id==h.value))==null?void 0:y.entity.plaque_id_list.includes(l.id)})),w.value&&(i=i.filter(l=>Ce(l))),r.value=="name"?i=i.sort((l,y)=>l.entity.name.localeCompare(y.entity.name)):r.value=="last_check_in_time"&&(i=i.sort((l,y)=>l.entity.last_check_in_time==null&&y.entity.last_check_in_time==null?0:l.entity.last_check_in_time==null?1:y.entity.last_check_in_time==null?-1:y.entity.last_check_in_time.seconds-l.entity.last_check_in_time.seconds)),b.value?i.filter(l=>l.entity.name.toLowerCase().includes(b.value.toLowerCase())):i});return(i,l)=>{const y=u("el-input"),k=u("el-button"),$=u("el-option"),Q=u("el-select"),le=u("el-switch"),W=u("el-popover"),ae=u("Plus"),ne=u("el-icon"),oe=u("el-dialog");return c(),x(K,null,[a("div",{class:"subheader",style:De([{display:"flex","align-items":"center"},E(m)=="xs"?"padding: 0px 8px 10px;":""])},[e(y,{modelValue:b.value,"onUpdate:modelValue":l[0]||(l[0]=v=>b.value=v),"prefix-icon":E(Me),placeholder:"Search plaques",style:{"max-width":"350px"},clearable:""},null,8,["modelValue","prefix-icon"]),e(W,{placement:"bottom",title:"Plaque Filters",width:300,trigger:"click"},{reference:t(()=>[e(k,{icon:"Filter",style:{"margin-left":"10px"},type:"info",size:"small"},{default:t(()=>[_("Filters")]),_:1})]),default:t(()=>[Rt,e(Q,{modelValue:h.value,"onUpdate:modelValue":l[1]||(l[1]=v=>h.value=v),placeholder:"Filter by gallery",style:{width:"260px","margin-bottom":"12px"}},{default:t(()=>[e($,{label:"All plaques",value:""}),(c(!0),x(K,null,re(E(P).gallery_list,v=>(c(),F($,{key:v.id,label:`${v.entity.name}`,value:v.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),Bt,e(le,{modelValue:w.value,"onUpdate:modelValue":l[2]||(l[2]=v=>w.value=v),style:{"margin-bottom":"1em"}},null,8,["modelValue"]),jt,e(Q,{modelValue:r.value,"onUpdate:modelValue":l[3]||(l[3]=v=>r.value=v),placeholder:"Sort by",class:"filter-select"},{default:t(()=>[e($,{label:"Sort by name",value:"name"}),e($,{label:"Sort by last activity",value:"last_check_in_time"})]),_:1},8,["modelValue"])]),_:1}),e(k,{icon:"Camera",type:"info",onClick:l[4]||(l[4]=v=>E(C).push("qr-scan")),style:{"margin-left":"10px"},size:"small"},{default:t(()=>[_("Scan")]),_:1})],4),Jt,(c(!0),x(K,null,re(I.value,v=>(c(),F(Ft,{plaque:v,key:v.id},null,8,["plaque"]))),128)),a("div",Gt,[a("div",Kt,[a("div",{class:"add-button",onClick:l[5]||(l[5]=v=>d.value=!0)},[e(ne,{style:{"font-size":"26px","margin-bottom":"6px"}},{default:t(()=>[e(ae)]),_:1}),Ht])])]),e(oe,{modelValue:d.value,"onUpdate:modelValue":l[7]||(l[7]=v=>d.value=v),title:"Add plaque",width:E(m)=="xs"?"90%":"50%",style:{"max-width":"500px"}},{default:t(()=>[a("div",Qt,[e(k,{onClick:l[6]||(l[6]=v=>{E(C).push("qr-scan"),d.value=!1}),icon:"camera",color:"#000000",style:{margin:"10px 12px 10px 0px"}},{default:t(()=>[_("Scan Plaque QR Code")]),_:1}),e(k,{icon:"plus",onClick:T,loading:o.value,style:{margin:"10px 0px 10px 0px"},color:"#000000"},{default:t(()=>[_("Add test plaque ")]),_:1},8,["loading"])])]),_:1},8,["modelValue","width"])],64)}}});var ml=ee(Wt,[["__scopeId","data-v-517aa68d"]]);export{ml as default};