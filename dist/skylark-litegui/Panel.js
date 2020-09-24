/**
 * skylark-litegui - A version of litegui.js  that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-litegui/
 * @license MIT
 */
define(["./litegui"],function(t){function e(t,e){this._ctor(t,e)}return e.title_height="20px",e.prototype._ctor=function(e,o){!o&&e&&e.constructor!==String&&(o=e,e=null),o=o||{},this.content=o.content||"";var i=this.root=document.createElement("div");e&&(i.id=e),i.className="litepanel "+(o.className||""),i.data=this;var n="";o.title&&(n+="<div class='panel-header'>"+o.title+"</div>"),n+="<div class='content'>"+this.content+"</div>",n+="<div class='panel-footer'></div>",i.innerHTML=n,o.title&&(this.header=this.root.querySelector(".panel-header")),this.content=this.root.querySelector(".content"),this.footer=this.root.querySelector(".panel-footer"),o.width&&(this.root.style.width=t.sizeToCSS(o.width)),o.height&&(this.root.style.height=t.sizeToCSS(o.height)),o.position&&(this.root.style.position="absolute",this.root.style.left=t.sizeToCSS(o.position[0]),this.root.style.top=t.sizeToCSS(o.position[1])),1==o.scroll&&(this.content.style.overflow="auto")},e.prototype.add=function(t){this.content.appendChild(t.root)},e.prototype.clear=function(){for(;this.content.firstChild;)this.content.removeChild(this.content.firstChild)},t.Panel=e});
//# sourceMappingURL=sourcemaps/Panel.js.map
