!function(){function e(e,t,a,r){Object.defineProperty(e,t,{get:a,set:r,enumerable:!0,configurable:!0})}const t="bp/attachments";var a={};e(a,"getSettings",(function(){return m})),e(a,"getRequestsContext",(function(){return y})),e(a,"isGridDisplayMode",(function(){return b})),e(a,"getLoggedInUser",(function(){return h})),e(a,"getDisplayedUserId",(function(){return g})),e(a,"getFormState",(function(){return _})),e(a,"isUploading",(function(){return E})),e(a,"isQuerying",(function(){return f})),e(a,"uploadEnded",(function(){return D})),e(a,"getUploads",(function(){return T})),e(a,"getErrors",(function(){return v})),e(a,"getMedia",(function(){return S})),e(a,"countMedia",(function(){return A})),e(a,"getCurrentDirectory",(function(){return M})),e(a,"getCurrentDirectoryObject",(function(){return I})),e(a,"getTree",(function(){return P})),e(a,"getFlatTree",(function(){return R})),e(a,"isSelectable",(function(){return O})),e(a,"selectedMedia",(function(){return L})),e(a,"getRelativePath",(function(){return N})),e(a,"getDestinationData",(function(){return U})),e(a,"getPagination",(function(){return w}));const{i18n:{__:r}}=wp,{filter:n}=lodash,i=(e,t)=>{let a=n(e,{id:t});return a.forEach((t=>{const r=i(e,t.parent);a=[...a,...r]})),a},s=e=>{const t=[r("Bytes","bp-attachments"),r("KB","bp-attachments"),r("MB","bp-attachments"),r("GB","bp-attachments"),r("TB","bp-attachments")];if(0===e)return"0 "+t[0];const a=parseInt(Math.floor(Math.log(e)/Math.log(1024)),10);return 0===a?`${e} ${t[a]}`:`${(e/1024**a).toFixed(1)} ${t[a]}`};const{trim:o,groupBy:l,filter:c,indexOf:d,find:u,defaultTo:p}=lodash,m=e=>{const{settings:t}=e;return t},y=e=>{const{settings:{isAdminScreen:t}}=e;return!0===t?"edit":"view"},b=e=>{const{isGrid:t}=e;return t},h=e=>{const{user:t}=e;return t},g=e=>{const{displayedUserId:t}=e;return t},_=e=>{const{formState:t}=e;return t||{}},E=e=>{const{uploading:t}=e;return t},f=e=>{const{querying:t}=e;return t},D=e=>{const{ended:t}=e;return t},T=e=>{const{uploads:t}=e;return t},v=e=>{const{errors:t}=e;return t},S=e=>{const{files:t}=e;return t},A=e=>{const{files:t}=e;return t.length},M=e=>{const{currentDirectory:t}=e;return t||""},I=e=>{const{currentDirectory:t,tree:a}=e,r={readonly:!0};return""!==t?p(u(a,{id:t}),r):r},P=e=>{const{tree:t,currentDirectory:a}=e,r=l(t,"parent"),n=c(t,{parent:a||0}).map((e=>e.id));if(n&&n.length&&n.forEach((e=>{r[e]&&delete r[e]})),a){const e=i(t,a).map((e=>e.id));Object.keys(r).forEach((t=>{0!==parseInt(t,10)&&-1===d(e,t)&&delete r[t]}))}const s=e=>e.map((e=>{const t=r[e.id];return{...e,children:t&&t.length?s(t):[]}}));return s(r[0]||[])},R=e=>{const{tree:t}=e;return t||[]},O=e=>{const{isSelectable:t}=e;return t},L=e=>{const{files:t}=e;return c(t,["selected",!0])},N=e=>{const{relativePath:t}=e;return t},U=e=>{const{relativePath:t}=e;if(!t)return{object:"members"};const a=o(t,"/").split("/");return{visibility:a[0]?a[0]:"public",object:a[1]?a[1]:"members",item:a[2]?a[2]:""}},w=e=>{const{pagination:t}=e;return t};var C={};e(C,"setSettings",(function(){return Q})),e(C,"fetchFromAPI",(function(){return X})),e(C,"getFromAPI",(function(){return z})),e(C,"createFromAPI",(function(){return V})),e(C,"updateFromAPI",(function(){return $})),e(C,"deleteFromAPI",(function(){return W})),e(C,"switchDisplayMode",(function(){return K})),e(C,"getLoggedInUser",(function(){return Z})),e(C,"setDisplayedUserId",(function(){return J})),e(C,"getMedia",(function(){return ee})),e(C,"updateFormState",(function(){return te})),e(C,"initTree",(function(){return re})),e(C,"addItemTree",(function(){return ne})),e(C,"removeItemTree",(function(){return ie})),e(C,"toggleSelectable",(function(){return se})),e(C,"toggleMediaSelection",(function(){return oe})),e(C,"addMedium",(function(){return le})),e(C,"addMediumError",(function(){return ce})),e(C,"createMedium",(function(){return de})),e(C,"createDirectory",(function(){return ue})),e(C,"updateMedium",(function(){return pe})),e(C,"parseResponseMedia",(function(){return me})),e(C,"requestMedia",(function(){return ye})),e(C,"removeMedium",(function(){return be})),e(C,"deleteMedium",(function(){return he})),e(C,"removeMediumError",(function(){return ge}));const F={SET_SETTINGS:"SET_SETTINGS",GET_LOGGED_IN_USER:"GET_LOGGED_IN_USER",SET_DISPLAYED_USER_ID:"SET_DISPLAYED_USER_ID",GET_MEDIA:"GET_MEDIA",ADD_MEDIUM:"ADD_MEDIUM",FILL_TREE:"FILL_TREE",PURGE_TREE:"PURGE_TREE",REMOVE_MEDIUM:"REMOVE_MEDIUM",FETCH_FROM_API:"FETCH_FROM_API",GET_FROM_API:"GET_FROM_API",CREATE_FROM_API:"CREATE_FROM_API",UPDATE_FROM_API:"UPDATE_FROM_API",DELETE_FROM_API:"DELETE_FROM_API",UPLOAD_START:"UPLOAD_START",UPLOAD_END:"UPLOAD_END",RESET_UPLOADS:"RESET_UPLOADS",ADD_ERROR:"ADD_ERROR",REMOVE_ERROR:"REMOVE_ERROR",TOGGLE_SELECTABLE:"TOGGLE_SELECTABLE",TOGGLE_MEDIA_SELECTION:"TOGGLE_MEDIA_SELECTION",SWITCH_DISPLAY_MODE:"SWITCH_DISPLAY_MODE",UPDATE_FORM_STATE:"UPDATE_FORM_STATE",SET_QUERY_STATUS:"SET_QUERY_STATUS"},{uniqueId:G,hasIn:j,trim:x,trimEnd:k,filter:B}=lodash,{data:{dispatch:q,select:Y},url:{addQueryArgs:H}}=wp;function Q(e){return{type:F.SET_SETTINGS,settings:e}}function X(e,t){return{type:F.FETCH_FROM_API,path:e,parse:t}}function z(e){return{type:F.GET_FROM_API,response:e}}function V(e,t){return{type:F.CREATE_FROM_API,path:e,data:t}}function $(e,t){return{type:F.UPDATE_FROM_API,path:e,data:t}}function W(e,t,a){return{type:F.DELETE_FROM_API,path:e,relativePath:t,totalBytes:a}}function K(e){return{type:F.SWITCH_DISPLAY_MODE,isGrid:e}}function Z(e){return{type:F.GET_LOGGED_IN_USER,user:e}}function J(e){return{type:F.SET_DISPLAYED_USER_ID,userId:e}}function ee(e,t,a,r){return{type:F.GET_MEDIA,files:e,relativePath:t,currentDirectory:a,pagination:r}}function te(e){return{type:F.UPDATE_FORM_STATE,params:e}}const ae=(e,t)=>({id:e.id,slug:e.name,name:e.title,parent:t,object:e.object?e.object:"members",readonly:!!e.readonly&&e.readonly,visibility:e.visibility?e.visibility:"public",type:e.media_type?e.media_type:"folder"});function re(e){const a=Y(t).getTree(),r=B(e,{mime_type:"inode/directory"});a.length||r.forEach((e=>{const a=ae(e,0);q(t).addItemTree(a)}))}function ne(e){return{type:F.FILL_TREE,item:e}}function ie(e){return{type:F.PURGE_TREE,itemId:e}}function se(e){return{type:F.TOGGLE_SELECTABLE,isSelectable:e}}function oe(e,t){return{type:F.TOGGLE_MEDIA_SELECTION,ids:e,isSelected:t}}function le(e){return{type:F.ADD_MEDIUM,file:e}}function ce(e){return{type:F.ADD_ERROR,error:e}}function*de(e,a){let r,n=!0;const i=Y(t),{object:s,item:o,visibility:l}=i.getDestinationData(),c=i.getRelativePath();yield{type:"UPLOAD_START",uploading:n,file:e};const d=new FormData;if(d.append("file",e),d.append("action","bp_attachments_media_upload"),d.append("object",s),d.append("object_item",o),l&&d.append("visibility",l),a&&d.append("total_bytes",a),x(c,"/")!==l+"/"+s+"/"+o){let e=c;"private"===l&&(e=c.replace("/private","")),d.append("parent_dir",e)}n=!1;try{return r=yield V("/buddypress/v1/attachments",d),yield{type:"UPLOAD_END",uploading:n,file:e},le(r)}catch(t){return r={id:G(),name:e.name,error:t.message,uploaded:!1},yield{type:"UPLOAD_END",uploading:n,file:e},ce(r)}}function*ue(e){let a,r=!0,n={name:e.directoryName,type:e.directoryType};const i=Y(t),{object:s,item:o,visibility:l}=i.getDestinationData(),c=i.getRelativePath();yield{type:"UPLOAD_START",uploading:r,file:n};const d=new FormData;if(d.append("directory_name",n.name),d.append("directory_type",n.type),d.append("action","bp_attachments_make_directory"),d.append("object",s),d.append("object_item",o),l&&d.append("visibility",l),x(c,"/")!==l+"/"+s+"/"+o){let e=c;"private"===l&&(e=c.replace("/private","")),d.append("parent_dir",e)}r=!1;try{a=yield V("/buddypress/v1/attachments",d),yield{type:"UPLOAD_END",uploading:r,file:n},a.uploaded=!0;const e=i.getCurrentDirectoryObject(),t=ae(a,e.id);return yield ne(t),le(a)}catch(e){return a={id:G(),name:n.name,error:e.message,uploaded:!1},yield{type:"UPLOAD_END",uploading:r,file:n},ce(a)}}function*pe(e){let a;const r=Y(t).getRelativePath();try{return a=yield $("/buddypress/v1/attachments/"+e.id+"/",{relative_path:r,title:e.title,description:e.description}),e.selected&&(a.selected=!0),le(a)}catch(t){return a={id:G(),name:e.name,error:t.message,updated:!1},ce(a)}}const me=async function(e,a){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3?arguments[3]:void 0;const i=await e.json().then((e=>(e.forEach((e=>{if(e.parent=r,"inode/directory"===e.mime_type){const a=ae(e,0===e.id.indexOf("member-")?0:r);q(t).addItemTree(a)}})),e)));a||r||1!==parseInt(n.membersPage,10)||re(i),q(t).getMedia(i,a,r,n)};function*ye(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const a="/buddypress/v1/attachments",r=Y(t).getDisplayedUserId();let n=!0,i="",s="",o={};yield{type:"SET_QUERY_STATUS",querying:n},e.context||(e.context=Y(t).getRequestsContext()),e.directory&&e.path&&(e.directory=k(e.path,"/")+"/"+e.directory),e.parent&&(s=e.parent,delete e.parent),r&&(e.user_id=r),delete e.path;const l=yield X(H(a,e),!1);return n=!1,j(l,["headers","get"])?(i=l.headers.get("X-BP-Attachments-Relative-Path"),o={membersDisplayedAmount:l.headers.get("X-BP-Attachments-Media-Libraries-Total"),totalMembersPage:l.headers.get("X-BP-Attachments-Media-Libraries-TotalPages")}):(i=get(l,["headers","X-BP-Attachments-Relative-Path"],""),o={membersDisplayedAmount:get(l,["headers","X-BP-Attachments-Media-Libraries-Total"],0),totalMembersPage:get(l,["headers","X-BP-Attachments-Media-Libraries-TotalPages"],0)}),o.totalMembersPage&&(o.membersPage=e.page?parseInt(e.page,10):1),yield{type:"SET_QUERY_STATUS",querying:n},me(l,i,s,o)}function be(e){return{type:"REMOVE_MEDIUM",id:e}}function*he(e,a){const r=Y(t).getRelativePath();let n;try{return n=yield W("/buddypress/v1/attachments/"+e.id+"/",r,a),"inode/directory"===n.previous.mime_type&&(yield ie(n.previous.id)),be(n.previous.id)}catch(t){return e.error=t.message,ce(e)}}function ge(e){return{type:F.REMOVE_ERROR,errorID:e}}var _e={};e(_e,"getLoggedInUser",(function(){return De})),e(_e,"getMedia",(function(){return Te}));const{get:Ee,hasIn:fe}=lodash;function*De(){const e=yield X("/buddypress/v1/members/me?context=edit",!0);yield Z(e)}function*Te(){const e="/buddypress/v1/attachments?context="+(()=>{const{isAdminScreen:e}=window.bpAttachmentsMediaLibrarySettings||{};return e&&!0===e?"edit":"view"})(),t=yield X(e,!1),a=yield z(t);let r={membersPage:1};fe(t,["headers","get"])?(r.membersDisplayedAmount=parseInt(t.headers.get("X-BP-Attachments-Media-Libraries-Total"),10),r.totalMembersPage=parseInt(t.headers.get("X-BP-Attachments-Media-Libraries-TotalPages"),10)):(r.membersDisplayedAmount=parseInt(Ee(t,["headers","X-BP-Attachments-Media-Libraries-Total"],0),10),r.totalMembersPage=parseInt(Ee(t,["headers","X-BP-Attachments-Media-Libraries-TotalPages"],0),10)),re(a),yield ee(a,"","",r)}const{reject:ve}=lodash,Se={user:{},displayedUserId:0,tree:[],currentDirectory:"",files:[],relativePath:"",uploads:[],errors:[],uploading:!1,ended:!1,isSelectable:!1,isGrid:!0,settings:{},formState:{},pagination:{membersPage:1,membersDisplayedAmount:0,totalMembersPage:0},querying:!1};var Ae=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.SET_SETTINGS:return{...e,settings:t.settings};case F.GET_LOGGED_IN_USER:return{...e,user:t.user};case F.SET_DISPLAYED_USER_ID:return{...e,displayedUserId:parseInt(t.userId,10)};case F.GET_MEDIA:let a=[];return a=t.pagination.membersPage&&1<t.pagination.membersPage?[...e.files,...t.files]:t.files,{...e,files:a,relativePath:t.relativePath,currentDirectory:t.currentDirectory,pagination:{...t.pagination}};case F.FILL_TREE:return{...e,tree:[...ve(e.tree,["id",t.item.id]),t.item]};case F.PURGE_TREE:return{...e,tree:ve(e.tree,["id",t.itemId])};case F.UPDATE_FORM_STATE:return{...e,formState:{...t.params}};case F.ADD_MEDIUM:return{...e,files:[...ve(e.files,["id",t.file.id]),t.file]};case F.UPLOAD_START:return{...e,uploading:t.uploading,uploads:[...e.uploads,t.file]};case F.ADD_ERROR:return{...e,errors:[...e.errors,t.error]};case F.REMOVE_ERROR:return{...e,errors:ve(e.errors,["id",t.errorID])};case F.UPLOAD_END:return{...e,uploading:t.uploading,uploads:ve(e.uploads,(e=>e.name===t.file.name)),ended:!0};case F.RESET_UPLOADS:return{...e,uploading:!1,uploads:[],errors:[],ended:!1};case F.TOGGLE_SELECTABLE:return{...e,isSelectable:t.isSelectable};case F.TOGGLE_MEDIA_SELECTION:return{...e,files:e.files.map((e=>(("all"===t.ids[0]&&!t.isSelected||-1!==t.ids.indexOf(e.id))&&(e.selected=t.isSelected),e)))};case F.SWITCH_DISPLAY_MODE:return{...e,isGrid:t.isGrid};case F.REMOVE_MEDIUM:return{...e,files:[...ve(e.files,["id",t.id])]};case F.SET_QUERY_STATUS:return{...e,querying:t.querying}}return e};const{apiFetch:Me}=wp,Ie={FETCH_FROM_API(e){let{path:t,parse:a}=e;return Me({path:t,parse:a})},GET_FROM_API(e){let{response:t}=e;return t.json()},CREATE_FROM_API(e){let{path:t,data:a}=e;return Me({path:t,method:"POST",body:a})},UPDATE_FROM_API(e){let{path:t,data:a}=e;return Me({path:t,method:"PUT",data:a})},DELETE_FROM_API(e){let{path:t,relativePath:a,totalBytes:r}=e;return Me({path:t,method:"DELETE",data:{relative_path:a,total_bytes:r}})}},{data:{registerStore:Pe}}=wp;Pe(t,{reducer:Ae,actions:C,selectors:a,controls:Ie,resolvers:_e});const Re=t,{components:{Popover:Oe},data:{useDispatch:Le,useSelect:Ne},element:{createElement:Ue,Fragment:we,useState:Ce},i18n:{__:Fe}}=wp;var Ge=e=>{let{settings:t}=e;const{updateFormState:a}=Le(Re),{currentDirectoryObject:r,user:n,displayedUserId:i}=Ne((e=>{const t=e(Re);return{currentDirectoryObject:t.getCurrentDirectoryObject(),user:t.getLoggedInUser(),displayedUserId:t.getDisplayedUserId()}}),[]),[s,o]=Ce(!1),l=!0===s?"split-button is-open":"split-button",c=!0===s?"dashicons dashicons-arrow-up-alt2":"dashicons dashicons-arrow-down-alt2",d=!0!==r.readonly&&(!i||i===n.id),{allowedExtByMediaList:u,isAdminScreen:p}=t,m=p?"wp-header-end":"screen-header-end",y=n.capabilities&&-1!==n.capabilities.indexOf("bp_moderate")?Fe("Community Media Libraries","bp-attachments"):Fe("Community Media Library","bp-attachments"),b=e=>(e.preventDefault(),a({parentDirectory:r.id,action:"upload"}));let h=[];r.type&&-1!==["album","audio_playlist","video_playlist"].indexOf(r.type)||(h=[{id:"folder",text:Fe("Add new directory","bp-attachments")}],u&&"private"!==r.visibility&&Object.keys(u).forEach((e=>{"album"===e?h.push({id:"album",text:Fe("Add new photo album","bp-attachments")}):"audio_playlist"===e?h.push({id:"audio_playlist",text:Fe("Add new audio playlist","bp-attachments")}):"video_playlist"===e&&h.push({id:"video_playlist",text:Fe("Add new video playlist","bp-attachments")})})));const g=h.map((e=>Ue("li",{key:"type-"+e.id},Ue("a",{href:"#new-bp-media-directory",className:"button-link directory-button split-button-option",onClick:t=>((e,t)=>(e.preventDefault(),a({parentDirectory:r.id,action:"createDirectory",directoryType:t})))(t,e.id)},e.text))));return Ue(we,null,!!p&&Ue("h1",{className:"wp-heading-inline"},y),!p&&Ue("h3",{className:"screen-heading"},Fe("Library","bp-attachments")),!!d&&Ue("div",{className:l},Ue("div",{className:"split-button-head"},Ue("a",{href:"#new-bp-media-upload",className:"button split-button-primary","aria-live":"polite",onClick:e=>b(e)},Fe("Add new","bp-attachments")),Ue("button",{type:"button",className:"split-button-toggle","aria-haspopup":"true","aria-expanded":s,onClick:()=>o(!s)},Ue("i",{className:c}),Ue("span",{className:"screen-reader-text"},Fe("More actions","bp-attachments")),s&&Ue(Oe,{noArrow:!1,onFocusOutside:()=>o(!s)},Ue("ul",{className:"split-button-body"},Ue("li",null,Ue("a",{href:"#new-bp-media-upload",className:"button-link media-button split-button-option",onClick:e=>b(e)},Fe("Upload media","bp-attachments"))),g))))),Ue("hr",{className:m}))};const{components:{DropZone:je,FormFileUpload:xe},data:{useDispatch:ke,useSelect:Be},element:{createElement:qe},i18n:{__:Ye,sprintf:He}}=wp;var Qe=e=>{let{settings:t}=e;const{maxUploadFileSize:a,allowedExtTypes:r,allowedExtByMediaList:n}=t,{updateFormState:i,createMedium:o}=ke(Re),{formState:l,currentDirectoryObject:c}=Be((e=>{const t=e(Re);return{formState:t.getFormState(),currentDirectoryObject:t.getCurrentDirectoryObject()}}),[]),d=()=>{l.action="",i(l)},u=e=>{let t,a=0;t=e.currentTarget&&e.currentTarget.files?[...e.currentTarget.files]:e;let r=t.length;t.forEach((e=>{a+=parseInt(e.size,10),r-=1;o(e,0===r?a:0)})),d()};if(!l.action||"upload"!==l.action)return null;let p=r;return c.type&&-1!==["album","audio_playlist","video_playlist"].indexOf(c.type)&&(p=n[c.type]),qe("div",{className:"uploader-container enabled"},qe(je,{label:Ye("Drop your files here.","bp-attachments"),onFilesDrop:e=>u(e),className:"uploader-inline"}),qe("button",{className:"close dashicons dashicons-no",onClick:e=>(e=>{e.preventDefault(),d()})(e)},qe("span",{className:"screen-reader-text"},Ye("Close the upload panel","bp-attachments"))),qe("div",{className:"dropzone-label"},qe("h2",{className:"upload-instructions drop-instructions"},Ye("Drop files to upload","bp-attachments")),qe("p",{className:"upload-instructions drop-instructions"},Ye("or","bp-attachments")),qe(xe,{onChange:e=>u(e),multiple:!0,accept:p,className:"browser button button-hero"},Ye("Select Files","bp-attachments"))),qe("div",{className:"upload-restrictions"},qe("p",null,He(Ye("Maximum upload file size: %s.","bp-attachments"),s(a)))))};const{components:{Button:Xe,TextControl:ze},data:{useDispatch:Ve,useSelect:$e},element:{createElement:We,useState:Ke},i18n:{__:Ze}}=wp;var Je=()=>{const[e,t]=Ke(""),{updateFormState:a,createDirectory:r}=Ve(Re),n=$e((e=>e(Re).getFormState()),[]),i=()=>(n.action="",n.directoryType="",a(n));if(!n.action||"createDirectory"!==n.action)return null;let s=Ze("Create a new directory","bp-attachments"),o=Ze("Type a name for your directory","bp-attachments"),l=Ze("Save directory","bp-attachments");return"album"===n.directoryType?(s=Ze("Create a new photo album","bp-attachments"),o=Ze("Type a name for your photo album","bp-attachments"),l=Ze("Save photo album","bp-attachments")):"audio_playlist"===n.directoryType?(s=Ze("Create a new audio playlist","bp-attachments"),o=Ze("Type a name for your audio playlist","bp-attachments"),l=Ze("Save audio playlist","bp-attachments")):"video_playlist"===n.directoryType&&(s=Ze("Create a new video playlist","bp-attachments"),o=Ze("Type a name for your video playlist","bp-attachments"),l=Ze("Save video playlist","bp-attachments")),We("form",{id:"bp-media-directory-form",className:"directory-creator-container enabled"},We("button",{className:"close dashicons dashicons-no",onClick:e=>(e=>{e.preventDefault(),i()})(e)},We("span",{className:"screen-reader-text"},Ze("Close the Create directory form","bp-attachments"))),We("h2",null,s),We(ze,{label:o,value:e,onChange:e=>t(e)}),We(Xe,{variant:"primary",onClick:a=>(a=>{a.preventDefault();const s={directoryName:e,directoryType:n.directoryType};r(s),t(""),i()})(a)},l))};const{components:{Button:et,ExternalLink:tt,TextareaControl:at,TextControl:rt},data:{useDispatch:nt},element:{createElement:it,useState:st},i18n:{__:ot,sprintf:lt}}=wp;var ct=e=>{let{medium:t,errorCallback:a}=e;const{id:r,name:n,title:i,description:s,icon:o,media_type:l,mime_type:c,visibility:d,selected:u,links:{view:p,download:m,src:y}}=t,[b,h]=st({title:i,description:s}),{updateMedium:g}=nt(Re),_=i===b.title&&s===b.description,E=-1===["image","video","audio"].indexOf(l)||"private"===d,f="inode/directory"===c;let D=["bp-attachment-edit-item__preview_content"];E||D.push("has-rich-preview"),f&&D.push("is-directory");return it("div",{className:"bp-attachment-edit-item"},it("div",{className:"bp-attachment-edit-item__preview"},it("h3",{className:"bp-attachment-edit-item__preview_title"},b.title),it("ul",{className:"bp-attachment-edit-item__preview_links"},it("li",null,it(tt,{href:p},ot(f?"Open directory page":"Open media page","bp-attachments"))),!f&&it("li",null,it("a",{href:m},ot("Download media","bp-attachments")))),it("div",{className:D.join(" ")},it("div",{className:"bp-attachment-edit-item__preview_illustration"},E&&it("img",{src:o,className:"bp-attachment-medium-icon"}),"image"===l&&y&&it("img",{src:y,className:"bp-attachment-medium-vignette"}),"audio"===l&&y&&it("audio",{controls:"controls",preload:"metadata",className:"bp-attachment-medium-player"},it("source",{src:y})),"video"===l&&y&&it("video",{controls:"controls",muted:!0,preload:"metadata",className:"bp-attachment-medium-player"},it("source",{src:y}))),it("div",{className:"bp-attachment-edit-item__preview_description"},it("p",null,b.description)))),it("div",{className:"bp-attachment-edit-item__form"},it("h3",null,lt(ot("Edit %s","bp-attachments"),n)),it("p",{className:"description"},ot("Use the below fields to edit media properties.","bp-attachments")),it(rt,{label:ot("Title","bp-attachments"),value:b.title,onChange:e=>h({...b,title:e}),help:ot("Change the title of your medium to something more descriptive then its file name.","bp-attachments")}),it(at,{label:ot("Description","bp-attachments"),value:b.description,onChange:e=>h({...b,description:e}),help:ot("Add or edit the description of your medium to tell your story about it.","bp-attachments")}),it("div",{className:"bp-attachment-edit-item__form-actions"},it(et,{variant:"primary",disabled:_,onClick:e=>(e.preventDefault(),void g({id:r,name:n,title:b.title,description:b.description,selected:u}).then((e=>{e.error?a(!1):e.file&&h({...b,title:e.file.title,description:e.file.description})})))},ot("Save your edits","bp-attachment")),it(et,{variant:"tertiary",disabled:_,onClick:e=>(e.preventDefault(),void h({...b,title:i,description:s}))},ot("Cancel","bp-attachment")))))};const{find:dt,reverse:ut,filter:pt}=lodash,{components:{Button:mt,Modal:yt,TreeSelect:bt},element:{createElement:ht,useState:gt},data:{useDispatch:_t,useSelect:Et},hooks:{applyFilters:ft},i18n:{__:Dt}}=wp;var Tt=e=>{let{gridDisplay:t}=e;const{switchDisplayMode:a,requestMedia:r,toggleSelectable:n,toggleMediaSelection:s,deleteMedium:o,setDisplayedUserId:l}=_t(Re),{user:c,displayedUserId:d,currentDirectory:u,currentDirectoryObject:p,flatTree:m,tree:y,isSelectable:b,selectedMedia:h,settings:g}=Et((e=>{const t=e(Re);return{user:t.getLoggedInUser(),displayedUserId:t.getDisplayedUserId(),currentDirectory:t.getCurrentDirectory(),currentDirectoryObject:t.getCurrentDirectoryObject(),flatTree:t.getFlatTree(),tree:t.getTree(),isSelectable:t.isSelectable(),selectedMedia:t.selectedMedia(),settings:t.getSettings()}}),[]),[_,E]=gt(u),[f,D]=gt(!1),T=!0!==p.readonly,v=b&&0!==h.length,S=b&&1===h.length,A=!!g.isAdminScreen&&!!c.capabilities&&-1!==c.capabilities.indexOf("bp_moderate");u!==_&&E(u);const M=(e,t)=>{e.preventDefault(),a(t)};return ht("div",{className:"media-toolbar wp-filter"},ht("div",{className:"media-toolbar-secondary"},!b&&ht("div",{className:"view-switch media-grid-view-switch"},ht("a",{href:"#view-list",onClick:e=>M(e,!1),className:t?"view-list":"view-list current"},ht("span",{className:"screen-reader-text"},Dt("Display list","bp-attachments"))),ht("a",{href:"#view-grid",onClick:e=>M(e,!0),className:t?"view-grid current":"view-grid"},ht("span",{className:"screen-reader-text"},Dt("Display grid","bp-attachments")))),T&&ht(mt,{variant:"secondary",className:"media-button select-mode-toggle-button",onClick:e=>(e=>{e.preventDefault();const t=!b;return t||s(["all"],t),n(t)})(e)},Dt(b?"Cancel Selection":"Select","bp-attachments")),T&&S&&ht(mt,{variant:"primary",className:"media-button edit-selected-button",onClick:e=>(e.preventDefault(),void D(!0))},Dt("Edit","bp-attachments")),T&&v&&ht(mt,{variant:"tertiary",className:"media-button delete-selected-button",onClick:e=>(e=>{e.preventDefault();let t=0,a=h.length;return h.forEach((e=>{e.size&&(t+=parseInt(e.size,10)),a-=1,o(e,0===a?t:0)})),n(!1)})(e)},Dt("Delete selection","bp-attachments")),f&&ht(yt,{title:Dt("Media details","bp-attachments"),onRequestClose:()=>D(!1)},ht(ct,{medium:h[0],errorCallback:D}))),!!y.length&&ht("div",{className:"media-toolbar-primary"},ht(bt,{noOptionLabel:Dt(A?"All members":"Home","bp-attachments"),onChange:e=>(e=>{E(e);const t=0===e.indexOf("member-")?parseInt(e.replace("member-",""),10):0;t&&l(t);const a=dt(m,{id:e});let n={};if(a){if(n.directory=a.slug,n.parent=a.id,a.parent&&a.object){let e=ut(i(m,a.parent).map((e=>e.slug)));if("members"===a.object){const t=e.indexOf("member");-1!==t&&e.splice(t,1),e.length&&e.splice(1,0,a.object,c.id)}else e=ft("buddypress.Attachments.toolbarTreeSelect.pathArray",e,a,c.id);n.path="/"+e.join("/")}a.object&&(n.object=a.object),(t||d)&&(n.user_id=t!==d?t:d)}else d&&l(0);return r(n)})(e),selectedId:_,tree:A?pt(y,{id:"member-"+d}):y})))};const{template:vt}=lodash;var St=function(e){return vt(document.querySelector("#tmpl-"+e).innerHTML,{evaluate:/<#([\s\S]+?)#>/g,interpolate:/\{\{\{([\s\S]+?)\}\}\}/g,escape:/\{\{([^\}]+?)\}\}(?!\})/g,variable:"data"})};const{element:{createElement:At,Fragment:Mt,useState:It},components:{Modal:Pt},i18n:{__:Rt},data:{useSelect:Ot,useDispatch:Lt}}=wp;var Nt=e=>{const{medium:t,selected:a,isGrid:r}=e,n=St(r?"bp-attachments-media-item":"bp-attachments-list-media-item"),{toggleMediaSelection:i,requestMedia:s,setDisplayedUserId:o}=Lt(Re),[l,c]=It(!1),[d,u]=It(a),{getRelativePath:p,isSelectable:m}=Ot((e=>{const t=e(Re);return{getRelativePath:t.getRelativePath(),isSelectable:t.isSelectable()}}),[]);m||a||!d||u(!1);return At(Mt,null,At("div",{className:d?"media-item selected":"media-item",dangerouslySetInnerHTML:{__html:n(e)},role:"checkbox",onClick:()=>(()=>{const{mimeType:t,name:a,isSelectable:r,id:n,object:l}=e;if(r)return u(!d),i([n],!d);if("inode/directory"===t){const e=0===n.indexOf("member-")?parseInt(n.replace("member-",""),10):0;return e&&o(e),s({directory:a,path:p,object:l,parent:n})}c(!0)})()}),l&&At(Pt,{title:Rt("Media details","bp-attachments"),onRequestClose:()=>c(!1)},At(ct,{medium:t,errorCallback:c})))};const{components:{Animate:Ut,Dashicon:wt,Notice:Ct},element:{createElement:Ft,Fragment:Gt},i18n:{__:jt,sprintf:xt},data:{useSelect:kt,useDispatch:Bt}}=wp;var qt=()=>{const{uploads:e,errors:t}=kt((e=>{const t=e(Re);return{uploads:t.getUploads(),errors:t.getErrors()}}),[]),{removeMediumError:a}=Bt(Re);let r=[];t&&t.length&&(r=t.map((e=>Ft(Ct,{key:"error-"+e.id,status:"error",onRemove:()=>{return t=e.id,a(t);var t},isDismissible:!0},Ft("p",null,Ft(wt,{icon:"warning"}),xt(jt("« %1$s » wasn‘t added to the media library. %2$s","bp-attachments"),e.name,e.error))))));let n=null;const i=e&&e.length?e.length:0;if(i){let e=jt("Uploading the media, please wait.","bp-attachments");i>1&&(e=xt(jt("Uploading %d media, please wait.","bp-attachments"),i)),n=Ft("div",{className:"chargement-de-documents"},Ft(Ut,{type:"loading"},(t=>{let{className:a}=t;return Ft(Ct,{status:"warning",isDismissible:!1},Ft("p",{className:a},Ft(wt,{icon:"update"}),e))})))}return Ft("div",{className:"bp-attachments-notices"},n,r)};const{element:{createElement:Yt,Fragment:Ht},i18n:{__:Qt},data:{useSelect:Xt,useDispatch:zt}}=wp;var Vt=e=>{let{gridDisplay:t}=e;const{items:a,isSelectable:r}=Xt((e=>{const t=e(Re);return{items:t.getMedia(),isSelectable:t.isSelectable()}}),[]),n=!0===t?" grid":" list";let i=null;return a.length&&(i=a.map((e=>Yt(Nt,{key:"media-item-"+e.id,id:e.id,name:e.name,title:e.title,description:e.description,size:e.size?s(e.size):"",mediaType:e.media_type,mimeType:e.mime_type,icon:e.icon,vignette:e.vignette,orientation:e.orientation,isSelected:e.selected||!1,object:e.object||"members",isSelectable:r,medium:e,isGrid:t})))),Yt("main",{className:"bp-user-media"},Yt(qt,null),Yt("div",{className:r?"media-items mode-select"+n:"media-items"+n},i,!a.length&&Yt("p",{className:"no-media"},Qt("No community media items found.","bp-attachments"))))};const{components:{Button:$t,Spinner:Wt},data:{useDispatch:Kt,useSelect:Zt},element:{createElement:Jt},i18n:{__:ea,sprintf:ta}}=wp;var aa=e=>{let{settings:t}=e;const{requestMedia:a}=Kt(Re),{user:{capabilities:r},pagination:n,mediaCount:i,isQuerying:s}=Zt((e=>{const t=e(Re);return{user:t.getLoggedInUser(),pagination:t.getPagination(),mediaCount:t.countMedia(),isQuerying:t.isQuerying()}}),[]),o=!!t.isAdminScreen&&!!r&&-1!==r.indexOf("bp_moderate"),l=parseInt(n.membersDisplayedAmount,10);return o&&n.membersDisplayedAmount?Jt("div",{className:"load-more-wrapper"},!0===s&&Jt(Wt,null),Jt("p",{className:"load-more-count"},1!==l?ta(ea("Showing %1$s of %2$s media libraries","bp-attachments"),i,l):ea("Showing one media library","bp-attachments")),i!==l&&!s&&Jt($t,{variant:"primary",className:"load-more",onClick:e=>(e=>{e.preventDefault();const{membersPage:t}=n;return a({page:t+1})})(e)},ea("Load more","bp-attachments"))):null};const{domReady:ra,element:{createElement:na,render:ia,Fragment:sa},i18n:{__:oa},data:{useSelect:la,useDispatch:ca}}=wp,da=e=>{let{settings:t}=e;const{isGrid:a,globalSettings:r}=la((e=>{const t=e(Re);return{isGrid:t.isGridDisplayMode(),globalSettings:t.getSettings()}}),[]);if(!Object.keys(r).length){const{setSettings:e}=ca(Re);e(t)}return na(sa,null,na(Ge,{settings:r}),na(Qe,{settings:r}),na(Je,null),na(Tt,{gridDisplay:a}),na(Vt,{gridDisplay:a}),na(aa,{settings:r}))};ra((function(){const e=window.bpAttachmentsMediaLibrarySettings||{};ia(na(da,{settings:e}),document.querySelector("#bp-media-library"))}))}();
//# sourceMappingURL=index.js.map
