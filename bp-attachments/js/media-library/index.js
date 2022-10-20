!function(){function e(e,t,r,a){Object.defineProperty(e,t,{get:r,set:a,enumerable:!0,configurable:!0})}const t="bp/attachments";var r={};e(r,"getSettings",(function(){return m})),e(r,"getRequestsContext",(function(){return y})),e(r,"isGridDisplayMode",(function(){return h})),e(r,"getLoggedInUser",(function(){return b})),e(r,"getDisplayedUserId",(function(){return _})),e(r,"getFormState",(function(){return E})),e(r,"isUploading",(function(){return f})),e(r,"uploadEnded",(function(){return g})),e(r,"getUploads",(function(){return D})),e(r,"getErrors",(function(){return v})),e(r,"getMedia",(function(){return S})),e(r,"getCurrentDirectory",(function(){return T})),e(r,"getCurrentDirectoryObject",(function(){return I})),e(r,"getTree",(function(){return A})),e(r,"getFlatTree",(function(){return M})),e(r,"isSelectable",(function(){return R})),e(r,"selectedMedia",(function(){return O})),e(r,"getRelativePath",(function(){return N})),e(r,"getDestinationData",(function(){return P}));const{i18n:{__:a}}=wp,{filter:n}=lodash,i=(e,t)=>{let r=n(e,{id:t});return r.forEach((t=>{const a=i(e,t.parent);r=[...r,...a]})),r},s=e=>{const t=[a("Bytes","bp-attachments"),a("KB","bp-attachments"),a("MB","bp-attachments"),a("GB","bp-attachments"),a("TB","bp-attachments")];if(0===e)return"0 "+t[0];const r=parseInt(Math.floor(Math.log(e)/Math.log(1024)),10);return 0===r?`${e} ${t[r]}`:`${(e/1024**r).toFixed(1)} ${t[r]}`},{trim:o,groupBy:c,filter:l,indexOf:d,find:u,defaultTo:p}=lodash,m=e=>{const{settings:t}=e;return t},y=e=>{const{settings:{isAdminScreen:t}}=e;return!0===t?"edit":"view"},h=e=>{const{isGrid:t}=e;return t},b=e=>{const{user:t}=e;return t},_=e=>{const{displayedUserId:t}=e;return t},E=e=>{const{formState:t}=e;return t},f=e=>{const{uploading:t}=e;return t},g=e=>{const{ended:t}=e;return t},D=e=>{const{uploads:t}=e;return t},v=e=>{const{errors:t}=e;return t},S=e=>{const{files:t}=e;return t},T=e=>{const{currentDirectory:t}=e;return t||""},I=e=>{const{currentDirectory:t,tree:r}=e,a={readonly:!0};return""!==t?p(u(r,{id:t}),a):a},A=e=>{const{tree:t,currentDirectory:r}=e,a=c(t,"parent"),n=l(t,{parent:r||0}).map((e=>e.id));if(n&&n.length&&n.forEach((e=>{a[e]&&delete a[e]})),r){const e=i(t,r).map((e=>e.id));Object.keys(a).forEach((t=>{0!==parseInt(t,10)&&-1===d(e,t)&&delete a[t]}))}const s=e=>e.map((e=>{const t=a[e.id];return{...e,children:t&&t.length?s(t):[]}}));return s(a[0]||[])},M=e=>{const{tree:t}=e;return t||[]},R=e=>{const{isSelectable:t}=e;return t},O=e=>{const{files:t}=e;return l(t,["selected",!0])},N=e=>{const{relativePath:t}=e;return t},P=e=>{const{relativePath:t}=e;if(!t)return{object:"members"};const r=o(t,"/").split("/");return{visibility:r[0]?r[0]:"public",object:r[1]?r[1]:"members",item:r[2]?r[2]:""}};var L={};e(L,"setSettings",(function(){return H})),e(L,"fetchFromAPI",(function(){return q})),e(L,"createFromAPI",(function(){return V})),e(L,"updateFromAPI",(function(){return Y})),e(L,"deleteFromAPI",(function(){return z})),e(L,"switchDisplayMode",(function(){return $})),e(L,"getLoggedInUser",(function(){return W})),e(L,"setDisplayedUserId",(function(){return X})),e(L,"getMedia",(function(){return K})),e(L,"updateFormState",(function(){return Q})),e(L,"initTree",(function(){return J})),e(L,"addItemTree",(function(){return ee})),e(L,"removeItemTree",(function(){return te})),e(L,"toggleSelectable",(function(){return re})),e(L,"toggleMediaSelection",(function(){return ae})),e(L,"addMedium",(function(){return ne})),e(L,"addMediumError",(function(){return ie})),e(L,"createMedium",(function(){return se})),e(L,"createDirectory",(function(){return oe})),e(L,"updateMedium",(function(){return ce})),e(L,"parseResponseMedia",(function(){return le})),e(L,"requestMedia",(function(){return de})),e(L,"removeMedium",(function(){return ue})),e(L,"deleteMedium",(function(){return pe})),e(L,"removeMediumError",(function(){return me}));const w={SET_SETTINGS:"SET_SETTINGS",GET_LOGGED_IN_USER:"GET_LOGGED_IN_USER",SET_DISPLAYED_USER_ID:"SET_DISPLAYED_USER_ID",GET_MEDIA:"GET_MEDIA",ADD_MEDIUM:"ADD_MEDIUM",FILL_TREE:"FILL_TREE",PURGE_TREE:"PURGE_TREE",REMOVE_MEDIUM:"REMOVE_MEDIUM",FETCH_FROM_API:"FETCH_FROM_API",CREATE_FROM_API:"CREATE_FROM_API",UPDATE_FROM_API:"UPDATE_FROM_API",DELETE_FROM_API:"DELETE_FROM_API",UPLOAD_START:"UPLOAD_START",UPLOAD_END:"UPLOAD_END",RESET_UPLOADS:"RESET_UPLOADS",ADD_ERROR:"ADD_ERROR",REMOVE_ERROR:"REMOVE_ERROR",TOGGLE_SELECTABLE:"TOGGLE_SELECTABLE",TOGGLE_MEDIA_SELECTION:"TOGGLE_MEDIA_SELECTION",SWITCH_DISPLAY_MODE:"SWITCH_DISPLAY_MODE",UPDATE_FORM_STATE:"UPDATE_FORM_STATE"},{uniqueId:U,hasIn:C,trim:F,trimEnd:G,filter:j}=lodash,{data:{dispatch:x,select:k},url:{addQueryArgs:B}}=wp;function H(e){return{type:w.SET_SETTINGS,settings:e}}function q(e,t){return{type:w.FETCH_FROM_API,path:e,parse:t}}function V(e,t){return{type:w.CREATE_FROM_API,path:e,data:t}}function Y(e,t){return{type:w.UPDATE_FROM_API,path:e,data:t}}function z(e,t,r){return{type:w.DELETE_FROM_API,path:e,relativePath:t,totalBytes:r}}function $(e){return{type:w.SWITCH_DISPLAY_MODE,isGrid:e}}function W(e){return{type:w.GET_LOGGED_IN_USER,user:e}}function X(e){return{type:w.SET_DISPLAYED_USER_ID,userId:e}}function K(e,t,r){return{type:w.GET_MEDIA,files:e,relativePath:t,currentDirectory:r}}function Q(e){return{type:w.UPDATE_FORM_STATE,params:e}}const Z=(e,t)=>({id:e.id,slug:e.name,name:e.title,parent:t,object:e.object?e.object:"members",readonly:!!e.readonly&&e.readonly,visibility:e.visibility?e.visibility:"public",type:e.media_type?e.media_type:"folder"});function J(e){const r=k(t).getTree(),a=j(e,{mime_type:"inode/directory"});r.length||a.forEach((e=>{const r=Z(e,0);x(t).addItemTree(r)}))}function ee(e){return{type:w.FILL_TREE,item:e}}function te(e){return{type:w.PURGE_TREE,itemId:e}}function re(e){return{type:w.TOGGLE_SELECTABLE,isSelectable:e}}function ae(e,t){return{type:w.TOGGLE_MEDIA_SELECTION,ids:e,isSelected:t}}function ne(e){return{type:w.ADD_MEDIUM,file:e}}function ie(e){return{type:w.ADD_ERROR,error:e}}function*se(e,r){let a,n=!0;const i=k(t),{object:s,item:o,visibility:c}=i.getDestinationData(),l=i.getRelativePath();yield{type:"UPLOAD_START",uploading:n,file:e};const d=new FormData;if(d.append("file",e),d.append("action","bp_attachments_media_upload"),d.append("object",s),d.append("object_item",o),c&&d.append("visibility",c),r&&d.append("total_bytes",r),F(l,"/")!==c+"/"+s+"/"+o){let e=l;"private"===c&&(e=l.replace("/private","")),d.append("parent_dir",e)}n=!1;try{return a=yield V("/buddypress/v1/attachments",d),yield{type:"UPLOAD_END",uploading:n,file:e},ne(a)}catch(t){return a={id:U(),name:e.name,error:t.message,uploaded:!1},yield{type:"UPLOAD_END",uploading:n,file:e},ie(a)}}function*oe(e){let r,a=!0,n={name:e.directoryName,type:e.directoryType};const i=k(t),{object:s,item:o,visibility:c}=i.getDestinationData(),l=i.getRelativePath();yield{type:"UPLOAD_START",uploading:a,file:n};const d=new FormData;if(d.append("directory_name",n.name),d.append("directory_type",n.type),d.append("action","bp_attachments_make_directory"),d.append("object",s),d.append("object_item",o),c&&d.append("visibility",c),F(l,"/")!==c+"/"+s+"/"+o){let e=l;"private"===c&&(e=l.replace("/private","")),d.append("parent_dir",e)}a=!1;try{r=yield V("/buddypress/v1/attachments",d),yield{type:"UPLOAD_END",uploading:a,file:n},r.uploaded=!0;const e=i.getCurrentDirectoryObject(),t=Z(r,e.id);return yield ee(t),ne(r)}catch(e){return r={id:U(),name:n.name,error:e.message,uploaded:!1},yield{type:"UPLOAD_END",uploading:a,file:n},ie(r)}}function*ce(e){let r;const a=k(t).getRelativePath();try{return r=yield Y("/buddypress/v1/attachments/"+e.id+"/",{relative_path:a,title:e.title,description:e.description}),e.selected&&(r.selected=!0),ne(r)}catch(t){return r={id:U(),name:e.name,error:t.message,updated:!1},ie(r)}}const le=async function(e,r){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const n=await e.json().then((e=>(e.forEach((e=>{if(e.parent=a,"inode/directory"===e.mime_type){const r=Z(e,a);x(t).addItemTree(r)}})),e)));r||a||J(n),x(t).getMedia(n,r,a)};function*de(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r="/buddypress/v1/attachments",a=k(t).getDisplayedUserId();let n="",i="";e.context||(e.context=k(t).getRequestsContext()),e.directory&&e.path&&(e.directory=G(e.path,"/")+"/"+e.directory),e.parent&&(i=e.parent,delete e.parent),a&&(e.user_id=a),delete e.path;const s=yield q(B(r,e),!1);return n=C(s,["headers","get"])?s.headers.get("X-BP-Attachments-Relative-Path"):get(s,["headers","X-BP-Attachments-Relative-Path"],""),le(s,n,i)}function ue(e){return{type:"REMOVE_MEDIUM",id:e}}function*pe(e,r){const a=k(t).getRelativePath();let n;try{return n=yield z("/buddypress/v1/attachments/"+e.id+"/",a,r),"inode/directory"===n.previous.mime_type&&(yield te(n.previous.id)),ue(n.previous.id)}catch(t){return e.error=t.message,ie(e)}}function me(e){return{type:w.REMOVE_ERROR,errorID:e}}var ye={};e(ye,"getLoggedInUser",(function(){return be})),e(ye,"getMedia",(function(){return _e}));const{filter:he}=lodash;function*be(){const e=yield q("/buddypress/v1/members/me?context=edit",!0);yield W(e)}function*_e(){const e="/buddypress/v1/attachments?context="+(()=>{const{isAdminScreen:e}=window.bpAttachmentsMediaLibrarySettings||{};return e&&!0===e?"edit":"view"})(),t=yield q(e,!0);J(t),yield K(t,"")}const{reject:Ee}=lodash,fe={user:{},displayedUserId:0,tree:[],currentDirectory:"",files:[],relativePath:"",uploads:[],errors:[],uploading:!1,ended:!1,isSelectable:!1,isGrid:!0,settings:{},formState:{}};var ge=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.SET_SETTINGS:return{...e,settings:t.settings};case w.GET_LOGGED_IN_USER:return{...e,user:t.user};case w.SET_DISPLAYED_USER_ID:return{...e,displayedUserId:parseInt(t.userId,10)};case w.GET_MEDIA:return{...e,files:t.files,relativePath:t.relativePath,currentDirectory:t.currentDirectory};case w.FILL_TREE:return{...e,tree:[...Ee(e.tree,["id",t.item.id]),t.item]};case w.PURGE_TREE:return{...e,tree:Ee(e.tree,["id",t.itemId])};case w.UPDATE_FORM_STATE:return{...e,formState:t.params};case w.ADD_MEDIUM:return{...e,files:[...Ee(e.files,["id",t.file.id]),t.file]};case w.UPLOAD_START:return{...e,uploading:t.uploading,uploads:[...e.uploads,t.file]};case w.ADD_ERROR:return{...e,errors:[...e.errors,t.error]};case w.REMOVE_ERROR:return{...e,errors:Ee(e.errors,["id",t.errorID])};case w.UPLOAD_END:return{...e,uploading:t.uploading,uploads:Ee(e.uploads,(e=>e.name===t.file.name)),ended:!0};case w.RESET_UPLOADS:return{...e,uploading:!1,uploads:[],errors:[],ended:!1};case w.TOGGLE_SELECTABLE:return{...e,isSelectable:t.isSelectable};case w.TOGGLE_MEDIA_SELECTION:return{...e,files:e.files.map((e=>(("all"===t.ids[0]&&!t.isSelected||-1!==t.ids.indexOf(e.id))&&(e.selected=t.isSelected),e)))};case w.SWITCH_DISPLAY_MODE:return{...e,isGrid:t.isGrid};case w.REMOVE_MEDIUM:return{...e,files:[...Ee(e.files,["id",t.id])]}}return e};const{apiFetch:De}=wp,ve={FETCH_FROM_API(e){let{path:t,parse:r}=e;return De({path:t,parse:r})},CREATE_FROM_API(e){let{path:t,data:r}=e;return De({path:t,method:"POST",body:r})},UPDATE_FROM_API(e){let{path:t,data:r}=e;return De({path:t,method:"PUT",data:r})},DELETE_FROM_API(e){let{path:t,relativePath:r,totalBytes:a}=e;return De({path:t,method:"DELETE",data:{relative_path:r,total_bytes:a}})}},{data:{registerStore:Se}}=wp;Se(t,{reducer:ge,actions:L,selectors:r,controls:ve,resolvers:ye});const Te=t,{components:{Popover:Ie},data:{useDispatch:Ae,useSelect:Me},element:{createElement:Re,Fragment:Oe,useState:Ne},i18n:{__:Pe}}=wp;var Le=e=>{let{settings:t}=e;const{updateFormState:r}=Ae(Te),{currentDirectoryObject:a,user:n,displayedUserId:i}=Me((e=>{const t=e(Te);return{currentDirectoryObject:t.getCurrentDirectoryObject(),user:t.getLoggedInUser(),displayedUserId:t.getDisplayedUserId()}}),[]),[s,o]=Ne(!1),c=!0===s?"split-button is-open":"split-button",l=!0===s?"dashicons dashicons-arrow-up-alt2":"dashicons dashicons-arrow-down-alt2",d=!0!==a.readonly&&(!i||i===n.id),{allowedExtByMediaList:u,isAdminScreen:p}=t,m=p?"wp-header-end":"screen-header-end",y=e=>(e.preventDefault(),r({parentDirectory:a.id,action:"upload"}));let h=[];a.type&&-1!==["album","audio_playlist","video_playlist"].indexOf(a.type)||(h=[{id:"folder",text:Pe("Add new directory","bp-attachments")}],u&&"private"!==a.visibility&&Object.keys(u).forEach((e=>{"album"===e?h.push({id:"album",text:Pe("Add new photo album","bp-attachments")}):"audio_playlist"===e?h.push({id:"audio_playlist",text:Pe("Add new audio playlist","bp-attachments")}):"video_playlist"===e&&h.push({id:"video_playlist",text:Pe("Add new video playlist","bp-attachments")})})));const b=h.map((e=>Re("li",{key:"type-"+e.id},Re("a",{href:"#new-bp-media-directory",className:"button-link directory-button split-button-option",onClick:t=>((e,t)=>(e.preventDefault(),r({parentDirectory:a.id,action:"createDirectory",directoryType:t})))(t,e.id)},e.text))));return Re(Oe,null,!!p&&Re("h1",{className:"wp-heading-inline"},Pe("Community Media Library","bp-attachments")),!p&&Re("h3",{className:"screen-heading"},Pe("Library","bp-attachments")),!!d&&Re("div",{className:c},Re("div",{className:"split-button-head"},Re("a",{href:"#new-bp-media-upload",className:"button split-button-primary","aria-live":"polite",onClick:e=>y(e)},Pe("Add new","bp-attachments")),Re("button",{type:"button",className:"split-button-toggle","aria-haspopup":"true","aria-expanded":s,onClick:()=>o(!s)},Re("i",{className:l}),Re("span",{className:"screen-reader-text"},Pe("More actions","bp-attachments")),s&&Re(Ie,{noArrow:!1,onFocusOutside:()=>o(!s)},Re("ul",{className:"split-button-body"},Re("li",null,Re("a",{href:"#new-bp-media-upload",className:"button-link media-button split-button-option",onClick:e=>y(e)},Pe("Upload media","bp-attachments"))),b))))),Re("hr",{className:m}))};const{components:{DropZone:we,FormFileUpload:Ue},data:{useDispatch:Ce,useSelect:Fe},element:{createElement:Ge},i18n:{__:je,sprintf:xe}}=wp;var ke=e=>{let{settings:t}=e;const{maxUploadFileSize:r,allowedExtTypes:a,allowedExtByMediaList:n}=t,{updateFormState:i,createMedium:o}=Ce(Te),{formState:c,currentDirectoryObject:l}=Fe((e=>{const t=e(Te);return{formState:t.getFormState(),currentDirectoryObject:t.getCurrentDirectoryObject()}}),[]),d=()=>(c.action="",i(c)),u=e=>{let t,r=0;t=e.currentTarget&&e.currentTarget.files?[...e.currentTarget.files]:e;let a=t.length;t.forEach((e=>{r+=parseInt(e.size,10),a-=1;o(e,0===a?r:0)})),d()};if(!c.action||"upload"!==c.action)return null;let p=a;return l.type&&-1!==["album","audio_playlist","video_playlist"].indexOf(l.type)&&(p=n[l.type]),Ge("div",{className:"uploader-container enabled"},Ge(we,{label:je("Drop your files here.","bp-attachments"),onFilesDrop:e=>u(e),className:"uploader-inline"}),Ge("button",{className:"close dashicons dashicons-no",onClick:e=>(e=>{e.preventDefault(),d()})(e)},Ge("span",{className:"screen-reader-text"},je("Close the upload panel","bp-attachments"))),Ge("div",{className:"dropzone-label"},Ge("h2",{className:"upload-instructions drop-instructions"},je("Drop files to upload","bp-attachments")),Ge("p",{className:"upload-instructions drop-instructions"},je("or","bp-attachments")),Ge(Ue,{onChange:e=>u(e),multiple:!0,accept:p,className:"browser button button-hero"},je("Select Files","bp-attachments"))),Ge("div",{className:"upload-restrictions"},Ge("p",null,xe(je("Maximum upload file size: %s.","bp-attachments"),s(r)))))};const{components:{Button:Be,TextControl:He},data:{useDispatch:qe,useSelect:Ve},element:{createElement:Ye,useState:ze},i18n:{__:$e}}=wp;var We=()=>{const[e,t]=ze(""),{updateFormState:r,createDirectory:a}=qe(Te),n=Ve((e=>e(Te).getFormState()),[]),i=()=>(n.action="",n.directoryType="",r(n));if(!n.action||"createDirectory"!==n.action)return null;let s=$e("Create a new directory","bp-attachments"),o=$e("Type a name for your directory","bp-attachments"),c=$e("Save directory","bp-attachments");return"album"===n.directoryType?(s=$e("Create a new photo album","bp-attachments"),o=$e("Type a name for your photo album","bp-attachments"),c=$e("Save photo album","bp-attachments")):"audio_playlist"===n.directoryType?(s=$e("Create a new audio playlist","bp-attachments"),o=$e("Type a name for your audio playlist","bp-attachments"),c=$e("Save audio playlist","bp-attachments")):"video_playlist"===n.directoryType&&(s=$e("Create a new video playlist","bp-attachments"),o=$e("Type a name for your video playlist","bp-attachments"),c=$e("Save video playlist","bp-attachments")),Ye("form",{id:"bp-media-directory-form",className:"directory-creator-container enabled"},Ye("button",{className:"close dashicons dashicons-no",onClick:e=>(e=>{e.preventDefault(),i()})(e)},Ye("span",{className:"screen-reader-text"},$e("Close the Create directory form","bp-attachments"))),Ye("h2",null,s),Ye(He,{label:o,value:e,onChange:e=>t(e)}),Ye(Be,{variant:"primary",onClick:r=>(r=>{r.preventDefault();const s={directoryName:e,directoryType:n.directoryType};a(s),t(""),i()})(r)},c))};const{components:{Button:Xe,ExternalLink:Ke,TextareaControl:Qe,TextControl:Ze},data:{useDispatch:Je},element:{createElement:et,useState:tt},i18n:{__:rt,sprintf:at}}=wp;var nt=e=>{let{medium:t,errorCallback:r}=e;const{id:a,name:n,title:i,description:s,icon:o,media_type:c,mime_type:l,visibility:d,selected:u,links:{view:p,download:m,src:y}}=t,[h,b]=tt({title:i,description:s}),{updateMedium:_}=Je(Te),E=i===h.title&&s===h.description,f=-1===["image","video","audio"].indexOf(c)||"private"===d,g="inode/directory"===l;let D=["bp-attachment-edit-item__preview_content"];f||D.push("has-rich-preview"),g&&D.push("is-directory");return et("div",{className:"bp-attachment-edit-item"},et("div",{className:"bp-attachment-edit-item__preview"},et("h3",{className:"bp-attachment-edit-item__preview_title"},h.title),et("ul",{className:"bp-attachment-edit-item__preview_links"},et("li",null,et(Ke,{href:p},rt(g?"Open directory page":"Open media page","bp-attachments"))),!g&&et("li",null,et("a",{href:m},rt("Download media","bp-attachments")))),et("div",{className:D.join(" ")},et("div",{className:"bp-attachment-edit-item__preview_illustration"},f&&et("img",{src:o,className:"bp-attachment-medium-icon"}),"image"===c&&y&&et("img",{src:y,className:"bp-attachment-medium-vignette"}),"audio"===c&&y&&et("audio",{controls:"controls",preload:"metadata",className:"bp-attachment-medium-player"},et("source",{src:y,type:l})),"video"===c&&y&&et("video",{controls:"controls",muted:!0,preload:"metadata",className:"bp-attachment-medium-player"},et("source",{src:y,type:l}))),et("div",{className:"bp-attachment-edit-item__preview_description"},et("p",null,h.description)))),et("div",{className:"bp-attachment-edit-item__form"},et("h3",null,at(rt("Edit %s","bp-attachments"),n)),et("p",{className:"description"},rt("Use the below fields to edit media properties.","bp-attachments")),et(Ze,{label:rt("Title","bp-attachments"),value:h.title,onChange:e=>b({...h,title:e}),help:rt("Change the title of your medium to something more descriptive then its file name.","bp-attachments")}),et(Qe,{label:rt("Description","bp-attachments"),value:h.description,onChange:e=>b({...h,description:e}),help:rt("Add or edit the description of your medium to tell your story about it.","bp-attachments")}),et("div",{className:"bp-attachment-edit-item__form-actions"},et(Xe,{variant:"primary",disabled:E,onClick:e=>(e.preventDefault(),void _({id:a,name:n,title:h.title,description:h.description,selected:u}).then((e=>{e.error?r(!1):e.file&&b({...h,title:e.file.title,description:e.file.description})})))},rt("Save your edits","bp-attachment")),et(Xe,{variant:"tertiary",disabled:E,onClick:e=>(e.preventDefault(),void b({...h,title:i,description:s}))},rt("Cancel","bp-attachment")))))};const{find:it,reverse:st,filter:ot}=lodash,{components:{Button:ct,Modal:lt,TreeSelect:dt},element:{createElement:ut,useState:pt},data:{useDispatch:mt,useSelect:yt},hooks:{applyFilters:ht},i18n:{__:bt}}=wp;var _t=e=>{let{gridDisplay:t,tree:r}=e;const{switchDisplayMode:a,requestMedia:n,toggleSelectable:s,toggleMediaSelection:o,deleteMedium:c,setDisplayedUserId:l}=mt(Te),{user:d,displayedUserId:u,currentDirectory:p,currentDirectoryObject:m,flatTree:y,isSelectable:h,selectedMedia:b,settings:_}=yt((e=>{const t=e(Te);return{user:t.getLoggedInUser(),displayedUserId:t.getDisplayedUserId(),currentDirectory:t.getCurrentDirectory(),currentDirectoryObject:t.getCurrentDirectoryObject(),flatTree:t.getFlatTree(),isSelectable:t.isSelectable(),selectedMedia:t.selectedMedia(),settings:t.getSettings()}}),[]),[E,f]=pt(p),[g,D]=pt(!1),v=!0!==m.readonly,S=h&&0!==b.length,T=h&&1===b.length,I=!!_.isAdminScreen&&!!d.capabilities&&-1!==d.capabilities.indexOf("bp_moderate");p!==E&&f(p);const A=(e,t)=>{e.preventDefault(),a(t)};return ut("div",{className:"media-toolbar wp-filter"},ut("div",{className:"media-toolbar-secondary"},!h&&ut("div",{className:"view-switch media-grid-view-switch"},ut("a",{href:"#view-list",onClick:e=>A(e,!1),className:t?"view-list":"view-list current"},ut("span",{className:"screen-reader-text"},bt("Display list","bp-attachments"))),ut("a",{href:"#view-grid",onClick:e=>A(e,!0),className:t?"view-grid current":"view-grid"},ut("span",{className:"screen-reader-text"},bt("Display grid","bp-attachments")))),v&&ut(ct,{variant:"secondary",className:"media-button select-mode-toggle-button",onClick:e=>(e=>{e.preventDefault();const t=!h;return t||o(["all"],t),s(t)})(e)},bt(h?"Cancel Selection":"Select","bp-attachments")),v&&T&&ut(ct,{variant:"primary",className:"media-button edit-selected-button",onClick:e=>(e.preventDefault(),void D(!0))},bt("Edit","bp-attachments")),v&&S&&ut(ct,{variant:"tertiary",className:"media-button delete-selected-button",onClick:e=>(e=>{e.preventDefault();let t=0,r=b.length;return b.forEach((e=>{e.size&&(t+=parseInt(e.size,10)),r-=1,c(e,0===r?t:0)})),s(!1)})(e)},bt("Delete selection","bp-attachments")),g&&ut(lt,{title:bt("Media details","bp-attachments"),onRequestClose:()=>D(!1)},ut(nt,{medium:b[0],errorCallback:D}))),!!r.length&&ut("div",{className:"media-toolbar-primary"},ut(dt,{noOptionLabel:bt(I?"All members":"Home","bp-attachments"),onChange:e=>(e=>{f(e);const t=0===e.indexOf("member-")?parseInt(e.replace("member-",""),10):0;t&&l(t);const r=it(y,{id:e});let a={};if(r){if(a.directory=r.slug,a.parent=r.id,r.parent&&r.object){let e=st(i(y,r.parent).map((e=>e.slug)));if("members"===r.object){const t=e.indexOf("member");-1!==t&&e.splice(t,1),e.length&&e.splice(1,0,r.object,d.id)}else e=ht("buddypress.Attachments.toolbarTreeSelect.pathArray",e,r,d.id);a.path="/"+e.join("/")}r.object&&(a.object=r.object),(t||u)&&(a.user_id=t!==u?t:u)}else u&&l(0);return n(a)})(e),selectedId:E,tree:I?ot(r,{id:"member-"+u}):r})))};const{template:Et}=lodash;const{element:{createElement:ft,Fragment:gt,useState:Dt},components:{Modal:vt},i18n:{__:St},data:{useSelect:Tt,useDispatch:It}}=wp;var At=e=>{const t=(r="bp-attachments-media-item",Et(document.querySelector("#tmpl-"+r).innerHTML,{evaluate:/<#([\s\S]+?)#>/g,interpolate:/\{\{\{([\s\S]+?)\}\}\}/g,escape:/\{\{([^\}]+?)\}\}(?!\})/g,variable:"data"}));var r;const{medium:a,selected:n}=e,{toggleMediaSelection:i,requestMedia:s,setDisplayedUserId:o}=It(Te),[c,l]=Dt(!1),[d,u]=Dt(n),{getRelativePath:p,isSelectable:m}=Tt((e=>{const t=e(Te);return{getRelativePath:t.getRelativePath(),isSelectable:t.isSelectable()}}),[]);m||n||!d||u(!1);return ft(gt,null,ft("div",{className:d?"media-item selected":"media-item",dangerouslySetInnerHTML:{__html:t(e)},role:"checkbox",onClick:()=>(()=>{const{mimeType:t,name:r,isSelectable:a,id:n,object:c}=e;if(a)return u(!d),i([n],!d);if("inode/directory"===t){const e=0===n.indexOf("member-")?parseInt(n.replace("member-",""),10):0;return e&&o(e),s({directory:r,path:p,object:c,parent:n})}l(!0)})()}),c&&ft(vt,{title:St("Media details","bp-attachments"),onRequestClose:()=>l(!1)},ft(nt,{medium:a,errorCallback:l})))};const{components:{Animate:Mt,Dashicon:Rt,Notice:Ot},element:{createElement:Nt,Fragment:Pt},i18n:{__:Lt,sprintf:wt},data:{useSelect:Ut,useDispatch:Ct}}=wp;var Ft=()=>{const{uploads:e,errors:t}=Ut((e=>{const t=e(Te);return{uploads:t.getUploads(),errors:t.getErrors()}}),[]),{removeMediumError:r}=Ct(Te);let a=[];t&&t.length&&(a=t.map((e=>Nt(Ot,{key:"error-"+e.id,status:"error",onRemove:()=>{return t=e.id,r(t);var t},isDismissible:!0},Nt("p",null,Nt(Rt,{icon:"warning"}),wt(Lt("« %1$s » wasn‘t added to the media library. %2$s","bp-attachments"),e.name,e.error))))));let n=null;const i=e&&e.length?e.length:0;if(i){let e=Lt("Uploading the media, please wait.","bp-attachments");i>1&&(e=wt(Lt("Uploading %d media, please wait.","bp-attachments"),i)),n=Nt("div",{className:"chargement-de-documents"},Nt(Mt,{type:"loading"},(t=>{let{className:r}=t;return Nt(Ot,{status:"warning",isDismissible:!1},Nt("p",{className:r},Nt(Rt,{icon:"update"}),e))})))}return Nt("div",{className:"bp-attachments-notices"},n,a)};const{element:{createElement:Gt,Fragment:jt},i18n:{__:xt},data:{useSelect:kt,useDispatch:Bt}}=wp;var Ht=e=>{let{gridDisplay:t,tree:r}=e;const{items:a,isSelectable:n}=kt((e=>{const t=e(Te);return{items:t.getMedia(),isSelectable:t.isSelectable()}}),[]);let i=null;return a.length&&(i=a.map((e=>Gt(At,{key:"media-item-"+e.id,id:e.id,name:e.name,title:e.title,mediaType:e.media_type,mimeType:e.mime_type,icon:e.icon,vignette:e.vignette,orientation:e.orientation,isSelected:e.selected||!1,object:e.object||"members",isSelectable:n,tree:r,medium:e})))),Gt("main",{className:"bp-user-media"},Gt(Ft,null),Gt("div",{className:n?"media-items mode-select":"media-items"},i,!a.length&&Gt("p",{className:"no-media"},xt("No community media items found.","bp-attachments"))))};const{domReady:qt,element:{createElement:Vt,render:Yt,Fragment:zt},i18n:{__:$t},data:{useSelect:Wt,useDispatch:Xt}}=wp,Kt=e=>{let{settings:t}=e;const{isGrid:r,globalSettings:a,tree:n}=Wt((e=>{const t=e(Te);return{isGrid:t.isGridDisplayMode(),globalSettings:t.getSettings(),tree:t.getTree()}}),[]);if(!Object.keys(a).length){const{setSettings:e}=Xt(Te);e(t)}return Vt(zt,null,Vt(Le,{settings:a}),Vt(ke,{settings:a}),Vt(We,null),Vt(_t,{gridDisplay:r,tree:n}),Vt(Ht,{gridDisplay:r,tree:n}))};qt((function(){const e=window.bpAttachmentsMediaLibrarySettings||{};Yt(Vt(Kt,{settings:e}),document.querySelector("#bp-media-library"))}))}();
//# sourceMappingURL=index.js.map
