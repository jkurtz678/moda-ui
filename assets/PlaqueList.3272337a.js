import{_ as K,d as Q,r as h,c as I,B as R,b as p,o as c,h as $,i as e,w as n,k as t,t as V,j as m,f as y,C as ae,p as ne,m as oe,z as T,u as qe,e as U,D as ve,G as Se,H as Ae,g as B,I as Pe,J as Ve,F as j,K as le,A as te,l as ze,L as Ie}from"./index.f9d8d73a.js";import{u as D,d as Ne}from"./plaque.180c7ae7.js";import{c as Le}from"./token-meta.16ce217f.js";import{u as W}from"./plaque.bb7adb06.js";import{u as se,g as Te}from"./account.3ccac5b6.js";import{s as F,a as ke}from"./util.ca49bfbc.js";import{T as ge,O as Ee}from"./types.3cc10997.js";import{u as he}from"./breakpoints.c92d4858.js";import{u as we}from"./token-meta.0580f61d.js";import{_ as Ue}from"./TokenSelectList.20ecc7df.js";import{n as M}from"./firebaseConfig.4bdd3a5f.js";import{P as De}from"./PlaqueTokenItem.91129819.js";import{u as Oe}from"./gallery.30b9c677.js";import"./thumbnail-image.e95f80c2.js";import"./ArtworkFilters.888f9235.js";import"./gallery-token.25579f23.js";const Me=u=>(ne("data-v-381e6960"),u=u(),oe(),u),Be={class:"dialog-container"},Fe={class:"dialog-footer"},Re=Me(()=>t("div",{style:{"flex-grow":"1"}},null,-1)),je=Q({__name:"AddTokenDialog",props:{show_add_token_dialog:{type:Boolean},plaque_id:null},emits:["update:show_add_token_dialog"],setup(u,{emit:a}){const w=u,i=h([]),S=h(!1),{screen_type:P}=he(),A=W(),C=we(),b=se(),v=I({get(){return w.show_add_token_dialog},set(f){a("update:show_add_token_dialog",f)}});R(v,f=>{f&&(i.value=JSON.parse(JSON.stringify(d.value.entity.token_meta_id_list)))});const d=I(()=>A.plaque_map[w.plaque_id]),z=I(()=>C.sorted_all_token_metas),E=async()=>{S.value=!0;try{for(let[f,s]of i.value.entries()){const l=C.all_token_metas[s];if(!l)throw"Failed to find store token for token: "+s;if(l.entity.platform!=ge.Opensea)continue;const g=JSON.parse(JSON.stringify(l));g.entity.user_id=b.get_account.id,g.entity.platform=ge.OpenseaArchive;const x=await Le(g.entity);i.value[f]=x.id}await D(w.plaque_id,{token_meta_id_list:i.value}),A.plaque_map[w.plaque_id].entity.token_meta_id_list=i.value}catch(f){F(`Error updating plaque tokens - ${f}`)}S.value=!1,v.value=!1},O=()=>{i.value=[]};return(f,s)=>{const l=p("el-button"),g=p("el-dialog");return c(),$("div",Be,[e(g,{center:"",modelValue:y(v),"onUpdate:modelValue":s[1]||(s[1]=x=>ae(v)?v.value=x:null),title:"Add artwork to plaque","close-on-click-modal":!1,fullscreen:y(P)=="xs",top:"2vh","destroy-on-close":""},{footer:n(()=>[t("div",Fe,[t("div",null,V(`Artwork in playlist: ${i.value.length}`),1),Re,e(l,{onClick:O},{default:n(()=>[m("Clear")]),_:1}),e(l,{type:"info",onClick:E,loading:S.value},{default:n(()=>[m("Save")]),_:1},8,["loading"])])]),default:n(()=>[e(Ue,{selected_token_meta_id_list:i.value,"onUpdate:selected_token_meta_id_list":s[0]||(s[0]=x=>i.value=x),token_meta_list:y(z)},null,8,["selected_token_meta_id_list","token_meta_list"])]),_:1},8,["modelValue","fullscreen"])])}}});var Je=K(je,[["__scopeId","data-v-381e6960"]]);const Ge={class:"controller-buttons"},He=Q({__name:"PlaqueController",props:{plaque:null},setup(u){const a=u,w=W(),i=h(!1),S=h(!1),P=h(!1),A=h(!1),C=I({get:()=>a.plaque.entity.orientation||"landscape",set:v=>{D(a.plaque.id,{orientation:v}).then(()=>{w.plaque_map[a.plaque.id].entity.orientation=v,T({type:"success",message:"Plaque orientation updated"})}).catch(d=>{F(`Error updating plaque orientation - ${d}`)})}}),b=v=>{const d={type:v,time_sent:M.now()};D(a.plaque.id,{command:d}).then(()=>{w.plaque_map[a.plaque.id].entity.command=d,T({type:"success",message:"Command sent to plaque"})}).catch(z=>{F(`Error sending command to plaque - ${z}`)}).finally(()=>{i.value=!1,S.value=!1,P.value=!1,A.value=!1})};return(v,d)=>{const z=p("el-button"),E=p("el-radio"),O=p("el-radio-group");return c(),$("div",null,[t("div",Ge,[e(z,{circle:"",text:"",loading:i.value,icon:"DArrowLeft",onClick:d[0]||(d[0]=f=>{i.value=!0,b("playlist_previous")})},null,8,["loading"]),e(z,{circle:"",text:"",loading:S.value,icon:"VideoPlay",onClick:d[1]||(d[1]=f=>{S.value=!0,b("play")})},null,8,["loading"]),e(z,{circle:"",text:"",icon:"VideoPause",loading:P.value,onClick:d[2]||(d[2]=f=>{P.value=!0,b("pause")})},null,8,["loading"]),e(z,{circle:"",text:"",icon:"DArrowRight",loading:A.value,onClick:d[3]||(d[3]=f=>{A.value=!0,b("playlist_next")})},null,8,["loading"])]),e(O,{modelValue:y(C),"onUpdate:modelValue":d[4]||(d[4]=f=>ae(C)?C.value=f:null),style:{display:"flex","flex-direction":"column","align-items":"start","margin-top":"20px"}},{default:n(()=>[e(E,{label:"landscape",size:"small"},{default:n(()=>[m("Landscape")]),_:1}),e(E,{label:"portrait",size:"small"},{default:n(()=>[m("Portrait")]),_:1}),e(E,{label:"landscape_reversed",size:"small"},{default:n(()=>[m("Landscape Reversed")]),_:1}),e(E,{label:"portrait_reversed",size:"small"},{default:n(()=>[m("Portrait Reversed")]),_:1})]),_:1},8,["modelValue"])])}}});var Ke=K(He,[["__scopeId","data-v-100e65c8"]]);const N=u=>(ne("data-v-b5fa5fb6"),u=u(),oe(),u),Qe={style:{display:"flex","align-items":"center",padding:"1em"}},We={key:0},Xe=N(()=>t("div",{style:{"flex-grow":"1"}},null,-1)),Ye={class:"card-simple"},Ze=N(()=>t("hr",null,null,-1)),et=N(()=>t("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"title",-1)),tt=N(()=>t("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"artist",-1)),lt={style:{padding:"0.3em 1em"}},at={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-right":"1em",padding:"1em"}},nt={key:0,class:"card-detail"},ot={style:{padding:"0 1em"}},st={style:{display:"flex","align-items":"center","justify-content":"space-between",padding:"0.5em 1em"}},it=N(()=>t("hr",null,null,-1)),rt=N(()=>t("div",{style:{padding:"1em"}},"No artwork added",-1)),ut=N(()=>t("hr",null,null,-1)),dt={style:{display:"flex",padding:"1em"}},_t=N(()=>t("div",{style:{"flex-grow":"1"}},null,-1)),ct={key:0,style:{padding:"1em"}},pt={style:{padding:"1em 0em",display:"flex","justify-content":"space-between","align-items":"center"}},mt={key:0},yt=N(()=>t("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"Associated User",-1)),ft={key:0},vt={key:1},gt={style:{"font-size":"var(--el-font-size-extra-small)"}},qt={key:1},kt={style:{"margin-bottom":"1em"}},ht=N(()=>t("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"Machine Info",-1)),wt={key:0,style:{"margin-bottom":"1em"}},xt=N(()=>t("div",{class:"caption"},"Admin only commands",-1)),Ct={style:{"margin-top":"1em"}},bt=N(()=>t("div",{class:"caption"},"Enable Support VPN",-1)),$t={style:{display:"flex","justify-content":"end"}},St=Q({__name:"PlaqueCard",props:{plaque:null},setup(u){const a=u,w=W();qe();const i=h("simple"),S=h(!1),P=h(!1),A=h(""),C=h(!1),b=h(!1),v=h(!1),d=async()=>{C.value=!0,await D(a.plaque.id,{name:a.plaque.entity.name}).catch(r=>{F(`Error updating plaque tokens - ${r}`)}),P.value=!1,C.value=!1},z=se(),E=we(),O=I(()=>f.value.length==0?null:f.value[0]),f=I(()=>{const r=E.archive_token_meta_map;return a.plaque.entity.token_meta_id_list.map(k=>r[k])}),s=I(()=>ke(a.plaque)),l=I(()=>{const r=a.plaque.entity.last_check_in_time;return r?new Date(r.seconds*1e3).toLocaleString("en-US",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):"N/A"}),g=()=>{te.confirm(`Are you sure you want to clear tokens for plaque '${a.plaque.entity.name}'?`,"Clear tokens",{type:"warning"}).then(()=>{D(a.plaque.id,{token_meta_id_list:[]}).then(()=>{w.plaque_map[a.plaque.id].entity.token_meta_id_list=[],T({type:"success",message:"Tokens cleared"})}).catch(r=>{T({message:`Error clearing tokens from plaque - ${r}`,type:"error",showClose:!0,duration:12e3})})})},x=()=>{te.confirm(`Are you sure you want to forget the plaque named '${a.plaque.entity.name}'?`,"Forget plaque",{type:"warning"}).then(()=>{D(a.plaque.id,{user_id:"",token_meta_id_list:[]}).then(()=>{w.plaque_map[a.plaque.id].entity.user_id="",w.plaque_map[a.plaque.id].entity.token_meta_id_list=[],T({type:"success",message:"Plaque forgotten"})}).catch(r=>{T({message:`Error forgetting plaque - ${r}`,type:"error",showClose:!0,duration:12e3})})})};R(i,r=>{r=="settings"&&a.plaque.entity.user_id&&!A.value&&Te(a.plaque.entity.user_id).then(o=>{A.value=o.entity.email}).catch(o=>{T({message:`Error loading user account - ${o}`,type:"error",showClose:!0,duration:12e3})})});const L=I({get:()=>Boolean(a.plaque.entity.vpn_active),set:r=>{D(a.plaque.id,{vpn_active:r}).then(()=>{w.plaque_map[a.plaque.id].entity.vpn_active=r,T({type:"success",message:"VPN setting updated"})}).catch(o=>{F(`Error updating VPN setting- ${o}`)})}}),G=I(()=>{var k,_,H;const r=(H=(_=(k=a==null?void 0:a.plaque)==null?void 0:k.entity)==null?void 0:_.machine_data)==null?void 0:H.updated_at;return r?new Date(r.seconds*1e3+r.nanoseconds/1e6).toLocaleString():"N/A"}),X=()=>{const r={type:"upload_logs",time_sent:M.now()};b.value=!0,D(a.plaque.id,{command:r}).then(()=>{w.plaque_map[a.plaque.id].entity.command=r,T({type:"success",message:"Command sent to plaque"})}).catch(o=>{F(`Error sending command to plaque - ${o}`)}).finally(()=>{b.value=!1})},Y=()=>{te.confirm(`Are you sure you want to restart the plaque '${a.plaque.entity.name}'?`,"Restart plaque",{type:"warning"}).then(()=>{const r={type:"restart_machine",time_sent:M.now()};v.value=!0,D(a.plaque.id,{command:r}).then(()=>{w.plaque_map[a.plaque.id].entity.command=r,T({type:"success",message:"Command sent to plaque"})}).catch(o=>{F(`Error sending command to plaque - ${o}`)}).finally(()=>{v.value=!1})})};return(r,o)=>{const k=p("el-button"),_=p("el-tag"),H=p("el-tooltip"),ie=p("el-col"),xe=p("el-row"),Ce=p("ArrowRight"),Z=p("el-icon"),ee=p("el-collapse-transition"),re=p("Close"),be=p("el-switch"),$e=p("el-card");return c(),U($e,null,{default:n(()=>[t("div",Qe,[P.value?ve((c(),$("input",{key:1,"onUpdate:modelValue":o[0]||(o[0]=q=>a.plaque.entity.name=q),class:"edit-name-input"},null,512)),[[Se,a.plaque.entity.name]]):(c(),$("h1",We,V(a.plaque.entity.name),1)),P.value?B("",!0):(c(),U(k,{key:2,icon:y(Ae),onClick:o[1]||(o[1]=q=>P.value=!0),class:"editIcon",circle:""},null,8,["icon"])),P.value?(c(),U(k,{key:3,icon:y(Pe),loading:C.value,onClick:d,class:"editIcon",circle:"",type:C.value?"":"success",text:""},null,8,["icon","loading","type"])):B("",!0),Xe,e(H,{class:"box-item",effect:"dark",content:`Last activity ${y(l)}`,placement:"top"},{default:n(()=>[y(s)?(c(),U(_,{key:0,class:"ml-2",type:"success"},{default:n(()=>[m("online")]),_:1})):(c(),U(_,{key:1,class:"ml-2",type:"danger"},{default:n(()=>[m("offline")]),_:1}))]),_:1},8,["content"])]),e(ee,null,{default:n(()=>[ve(t("section",Ye,[Ze,e(xe,{style:{padding:"1em"}},{default:n(()=>[e(ie,{span:12},{default:n(()=>{var q;return[et,t("span",null,V(((q=y(O))==null?void 0:q.entity.name)||"N/A"),1)]}),_:1}),e(ie,{span:12},{default:n(()=>{var q;return[tt,m(" "+V(((q=y(O))==null?void 0:q.entity.artist)||"N/A"),1)]}),_:1})]),_:1}),t("div",lt,V(`Total artworks: ${u.plaque.entity.token_meta_id_list.length}`),1),t("div",at,[e(k,{type:"info",onClick:o[2]||(o[2]=q=>S.value=!0)},{default:n(()=>[m("Add Artwork")]),_:1}),e(k,{onClick:o[3]||(o[3]=q=>i.value="detail")},{default:n(()=>[m(" Details"),e(Z,{class:"el-icon--right"},{default:n(()=>[e(Ce)]),_:1})]),_:1})])],512),[[Ve,i.value=="simple"]])]),_:1}),e(ee,null,{default:n(()=>[i.value=="detail"?(c(),$("section",nt,[t("p",ot,V(`Total artworks: ${u.plaque.entity.token_meta_id_list.length}`),1),t("div",st,[e(k,{onClick:o[4]||(o[4]=q=>i.value="settings")},{default:n(()=>[m("Settings")]),_:1}),e(k,{onClick:g},{default:n(()=>[m("Clear Artwork")]),_:1})]),it,y(f).length==0?(c(),$(j,{key:0},[rt,ut],64)):B("",!0),(c(!0),$(j,null,le(y(f),q=>(c(),U(De,{token_meta:q},null,8,["token_meta"]))),256)),t("div",dt,[e(k,{type:"info",onClick:o[5]||(o[5]=q=>S.value=!0)},{default:n(()=>[m("Add Artwork")]),_:1}),_t,e(k,{onClick:o[6]||(o[6]=q=>i.value="simple")},{default:n(()=>[m("Close"),e(Z,{class:"el-icon--right"},{default:n(()=>[e(re)]),_:1})]),_:1})])])):B("",!0)]),_:1}),e(ee,null,{default:n(()=>{var q,ue,de,_e,ce,pe,me,ye;return[i.value=="settings"?(c(),$("section",ct,[e(Ke,{plaque:a.plaque},null,8,["plaque"]),t("div",pt,[u.plaque.entity.user_id?(c(),$("div",mt,[yt,A.value?(c(),$("div",ft,V(A.value),1)):(c(),$("div",vt,"Loading...")),t("div",gt,V(u.plaque.entity.user_id),1)])):(c(),$("div",qt,"No associated user")),u.plaque.entity.user_id?(c(),U(k,{key:2,type:"danger",plain:"",onClick:x},{default:n(()=>[m("Forget Display")]),_:1})):B("",!0)]),t("div",kt,[ht,t("div",null,"Machine name: "+V((ue=(q=u.plaque.entity.machine_data)==null?void 0:q.machine_name)!=null?ue:"N/A"),1),t("div",null,"Version: "+V((_e=(de=u.plaque.entity.machine_data)==null?void 0:de.version)!=null?_e:"N/A"),1),t("div",null,"Local IP: "+V((pe=(ce=u.plaque.entity.machine_data)==null?void 0:ce.local_ip)!=null?pe:"N/A"),1),t("div",null,"Public IP: "+V((ye=(me=u.plaque.entity.machine_data)==null?void 0:me.public_ip)!=null?ye:"N/A"),1),t("div",null,"Updated At: "+V(y(G)),1)]),y(z).is_user_admin?(c(),$("div",wt,[xt,e(k,{plain:"",onClick:X,loading:b.value},{default:n(()=>[m("Upload Logs To Cloud")]),_:1},8,["loading"]),e(k,{type:"danger",plain:"",onClick:Y,loading:v.value},{default:n(()=>[m("Restart Machine")]),_:1},8,["loading"]),t("div",Ct,[bt,e(be,{modelValue:y(L),"onUpdate:modelValue":o[7]||(o[7]=fe=>ae(L)?L.value=fe:null),"active-text":"Enabled","inactive-text":"Off"},null,8,["modelValue"])])])):B("",!0),t("div",$t,[e(k,{onClick:o[8]||(o[8]=fe=>i.value="detail")},{default:n(()=>[m("Close"),e(Z,{class:"el-icon--right"},{default:n(()=>[e(re)]),_:1})]),_:1})])])):B("",!0)]}),_:1}),e(Je,{plaque_id:a.plaque.id,show_add_token_dialog:S.value,"onUpdate:show_add_token_dialog":o[9]||(o[9]=q=>S.value=q)},null,8,["plaque_id","show_add_token_dialog"])]),_:1})}}});var At=K(St,[["__scopeId","data-v-b5fa5fb6"]]);const J=u=>(ne("data-v-517aa68d"),u=u(),oe(),u),Pt=J(()=>t("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"Filter by gallery",-1)),Vt=J(()=>t("div",{style:{"font-size":"var(--el-font-size-extra-small)"}},"Online only",-1)),zt=J(()=>t("div",{class:"caption"},"Sort order",-1)),It=J(()=>t("div",{style:{"padding-bottom":"90px"}},null,-1)),Nt={class:"add-button-container"},Lt={style:{display:"flex","align-items":"center","justify-content":"center",height:"100%"}},Tt=J(()=>t("div",{style:{"font-size":"17px"}},"Add plaque",-1)),Et={style:{display:"flex","justify-content":"space-between","flex-wrap":"wrap"}},Ut=Q({__name:"PlaqueList",setup(u){const a=h(!1),{screen_type:w}=he(),i=h(!1),S=qe(),P=se(),A=Oe(),C=h(""),b=h(localStorage.getItem("plaque_list_filter_by_gallery")||"");R(b,s=>{localStorage.setItem("plaque_list_filter_by_gallery",s)});const v=h(localStorage.getItem("online_filter")==="true"||!1);R(v,s=>{if(s){localStorage.setItem("online_filter","true");return}localStorage.setItem("online_filter","false")});const d=h(localStorage.getItem("plaque_list_sort_order")||"name");R(d,s=>{localStorage.setItem("plaque_list_sort_order",s)});const z=W(),E=async()=>{a.value=!0,await Ne({name:"Test Plaque",user_id:P.get_account.id,token_meta_id_list:[],created_at:M.now(),updated_at:M.now(),orientation:Ee.Landscape,command:{type:"",time_sent:M.fromMillis(0)},last_check_in_time:M.fromMillis(0),vpn_active:!1,machine_data:{machine_name:"",version:"",local_ip:"",public_ip:"",updated_at:M.fromMillis(0)}}).catch(s=>T({message:`Error creating test plaque- ${s}`,type:"error",showClose:!0,duration:12e3})),a.value=!1,i.value=!1},O=I(()=>JSON.parse(JSON.stringify(z.all_plaque_list)).sort((l,g)=>{const x=l.entity.name.toLowerCase(),L=g.entity.name.toLowerCase();return x<L?-1:x>L?1:0})),f=I(()=>{let s=[...O.value];return s=s.filter(l=>l.entity.name||l.entity.user_id||l.entity.token_meta_id_list.length>0),b.value&&(s=s.filter(l=>{var g;return(g=A.gallery_list.find(x=>x.id==b.value))==null?void 0:g.entity.plaque_id_list.includes(l.id)})),v.value&&(s=s.filter(l=>ke(l))),d.value=="name"?s=s.sort((l,g)=>l.entity.name.localeCompare(g.entity.name)):d.value=="last_check_in_time"&&(s=s.sort((l,g)=>l.entity.last_check_in_time==null&&g.entity.last_check_in_time==null?0:l.entity.last_check_in_time==null?1:g.entity.last_check_in_time==null?-1:g.entity.last_check_in_time.seconds-l.entity.last_check_in_time.seconds)),C.value?s.filter(l=>l.entity.name.toLowerCase().includes(C.value.toLowerCase())):s});return(s,l)=>{const g=p("el-input"),x=p("el-button"),L=p("el-option"),G=p("el-select"),X=p("el-switch"),Y=p("el-popover"),r=p("Plus"),o=p("el-icon"),k=p("el-dialog");return c(),$(j,null,[t("div",{class:"subheader",style:ze([{display:"flex","align-items":"center"},y(w)=="xs"?"padding: 0px 8px 10px;":""])},[e(g,{modelValue:C.value,"onUpdate:modelValue":l[0]||(l[0]=_=>C.value=_),"prefix-icon":y(Ie),placeholder:"Search plaques",style:{"max-width":"350px"},clearable:""},null,8,["modelValue","prefix-icon"]),e(Y,{placement:"bottom",title:"Plaque Filters",width:300,trigger:"click"},{reference:n(()=>[e(x,{icon:"Filter",style:{"margin-left":"10px"},type:"info",size:"small"},{default:n(()=>[m("Filters")]),_:1})]),default:n(()=>[Pt,e(G,{modelValue:b.value,"onUpdate:modelValue":l[1]||(l[1]=_=>b.value=_),placeholder:"Filter by gallery",style:{width:"260px","margin-bottom":"12px"}},{default:n(()=>[e(L,{label:"All plaques",value:""}),(c(!0),$(j,null,le(y(A).gallery_list,_=>(c(),U(L,{key:_.id,label:`${_.entity.name}`,value:_.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),Vt,e(X,{modelValue:v.value,"onUpdate:modelValue":l[2]||(l[2]=_=>v.value=_),style:{"margin-bottom":"1em"}},null,8,["modelValue"]),zt,e(G,{modelValue:d.value,"onUpdate:modelValue":l[3]||(l[3]=_=>d.value=_),placeholder:"Sort by",class:"filter-select"},{default:n(()=>[e(L,{label:"Sort by name",value:"name"}),e(L,{label:"Sort by last activity",value:"last_check_in_time"})]),_:1},8,["modelValue"])]),_:1}),e(x,{icon:"Camera",type:"info",onClick:l[4]||(l[4]=_=>y(S).push("qr-scan")),style:{"margin-left":"10px"},size:"small"},{default:n(()=>[m("Scan")]),_:1})],4),It,(c(!0),$(j,null,le(y(f),_=>(c(),U(At,{plaque:_,key:_.id},null,8,["plaque"]))),128)),t("div",Nt,[t("div",Lt,[t("div",{class:"add-button",onClick:l[5]||(l[5]=_=>i.value=!0)},[e(o,{style:{"font-size":"26px","margin-bottom":"6px"}},{default:n(()=>[e(r)]),_:1}),Tt])])]),e(k,{modelValue:i.value,"onUpdate:modelValue":l[7]||(l[7]=_=>i.value=_),title:"Add plaque",width:y(w)=="xs"?"90%":"50%",style:{"max-width":"500px"}},{default:n(()=>[t("div",Et,[e(x,{onClick:l[6]||(l[6]=_=>{y(S).push("qr-scan"),i.value=!1}),icon:"camera",color:"#000000",style:{margin:"10px 12px 10px 0px"}},{default:n(()=>[m("Scan Plaque QR Code")]),_:1}),e(x,{icon:"plus",onClick:E,loading:a.value,style:{margin:"10px 0px 10px 0px"},color:"#000000"},{default:n(()=>[m("Add test plaque ")]),_:1},8,["loading"])])]),_:1},8,["modelValue","width"])],64)}}});var el=K(Ut,[["__scopeId","data-v-517aa68d"]]);export{el as default};
