!function(){const{template:t}=lodash;const{domReady:e}=wp;window.bp=window.bp||{},window.bp.Attachments=window.bp.Attachments||{};const s=window.bpAttachmentsPlaylistItems||{};window.bp.Attachments.Playlist=new class{playTrack(t){t.preventDefault(),this.player.pause();t.target.closest(".wp-playlist-tracks").querySelector(".wp-playlist-playing").classList.remove("wp-playlist-playing"),t.target.classList.add("wp-playlist-playing");const e=t.target.closest(".wp-playlist-caption").getAttribute("href");this.player.setAttribute("src",e),this.player.play()}renderItem(e){var s;return(s="wp-playlist-item",t(document.querySelector("#tmpl-"+s).innerHTML,{evaluate:/<#([\s\S]+?)#>/g,interpolate:/\{\{\{([\s\S]+?)\}\}\}/g,escape:/\{\{([^\}]+?)\}\}(?!\})/g,variable:"data"}))(e)}renderItems(){let t=0;const e=document.querySelector(".bp-attachments-medium .wp-playlist .wp-playlist-tracks");this.items.forEach((s=>{t+=1;const i={index:t,src:s.links.src,title:s.title,meta:{}};e.innerHTML+=this.renderItem(i)})),e.querySelectorAll(".wp-playlist-item").forEach(((t,e)=>{0===e&&t.classList.add("wp-playlist-playing"),t.addEventListener("click",this.playTrack.bind(this))}))}start(){if(!this.items||!this.items.length)return;const t=this.items[0].links.src;this.player.setAttribute("src",t),this.renderItems()}constructor(t){const{body:e}=t;this.items=e,this.player=document.querySelector("#bp-medium-player")}}(s),e((()=>window.bp.Attachments.Playlist.start()))}();
//# sourceMappingURL=playlist.js.map
