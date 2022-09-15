!function(){function e(e){return e&&e.__esModule?e.default:e}var t;t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"version":"1.0.0","name":"bp/video-attachment","title":"Community Video","category":"media","icon":"video-alt3","description":"Insert a movie from your personal media library.","keywords":["BuddyPress","community","video","movie","media"],"textdomain":"bp-attachments","attributes":{"align":{"type":"string"},"url":{"type":"string"},"src":{"type":"string"}},"supports":{"alignWide":false,"anchor":false,"html":false},"editorScript":"file:./bp-attachments/assets/blocks/video-attachment/js/index.js","style":"file:./bp-attachments/assets/blocks/video-attachment/css/index.css"}');const{apiFetch:a,components:{DropZone:o,FormFileUpload:s,Notice:n,Placeholder:i},data:{useSelect:r},element:{createElement:l,useState:c},i18n:{__:d}}=wp;var p=e=>{let{type:t,icon:p,label:m,onSetAttributes:u}=e;const{bpAttachments:{allowedExtByMediaList:b}}=r((e=>e("core/editor").getEditorSettings()),[]),h=b[t+"_playlist"]?b[t+"_playlist"]:b.album,[g,y]=c(""),{userId:v,postId:_}=r((e=>({userId:e("core").getCurrentUser().id,postId:e("core/editor").getCurrentPostId()})),[]),f=e=>{let t;t=e.currentTarget&&e.currentTarget.files?[...e.currentTarget.files]:e;(e=>{const t=new FormData;t.append("file",e),t.append("action","bp_attachments_media_upload"),t.append("object","members"),t.append("object_item",v),t.append("visibility","public"),_&&(t.append("attached_to_object_type","post"),t.append("attached_to_object_id",_)),y(""),a({path:"buddypress/v1/attachments",method:"POST",body:t}).then((e=>{e.links&&e.links.src&&u({url:e.links.view,src:e.links.src})})).catch((e=>{if(e.message){const t=l(n,{status:"error",isDismissible:!1},l("p",null,e.message));y(t)}}))})(t[0])};return l(i,{icon:p||"admin-media",label:m||d("Community Media","bp-attachments"),isColumnLayout:!0,className:"bp-attachments-media-placeholder"},l(o,{onFilesDrop:e=>f(e),className:"uploader-inline"}),l(s,{onChange:e=>f(e),multiple:!1,accept:h,className:"components-button block-editor-media-placeholder__button block-editor-media-placeholder__upload-button is-primary"},d("Select a file","bp-attachments")),g)};const{blockEditor:{BlockAlignmentControl:m,BlockControls:u,useBlockProps:b},element:{createElement:h,Fragment:g},i18n:{__:y}}=wp;var v=e=>{let{attributes:t,setAttributes:a}=e;const{align:o,src:s}=t,n=b({className:o&&void 0!==o?"wp-block-bp-video-attachment align"+o:"wp-block-bp-video-attachment"});return s?h(g,null,h(u,{group:"block"},h(m,{controls:["none","left","center","right"],value:o,onChange:e=>a({align:e})})),h("figure",n,h("video",{controls:"controls",preload:"metadata",src:s}))):h("figure",n,h(p,{type:"video",icon:"video-alt3",label:y("Community Video","bp-attachments"),onSetAttributes:a}))};const{blocks:{registerBlockType:_},element:{createElement:f}}=wp;_(e(t),{icon:{background:"#fff",foreground:"#d84800",src:"video-alt3"},edit:v})}();
//# sourceMappingURL=index.js.map
