/**
 * skylark-litegui - A version of litegui.js  that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-litegui/
 * @license MIT
 */
define(["./litegui"],function(t){function e(t,e){if(e||t&&t.constructor===String){var i=t;(t=e||{}).id=i,console.warn("LiteGUI.Dialog legacy parameter, use options as first parameter instead of id.")}this._ctor(t)}return e.MINIMIZED_WIDTH=200,e.title_height="20px",e.getDialog=function(t){var e=document.getElementById(t);return e?e.dialog:null},e.prototype._ctor=function(i){i=i||{};var o=this;this.width=i.width,this.height=i.height,this.minWidth=i.minWidth||150,this.minHeight=i.minHeight||100,this.content=i.content||"";var n=document.createElement("div");i.id&&(n.id=i.id),n.className="litedialog "+(i.className||""),n.data=this,n.dialog=this;var s="";if(i.title&&(s+="<div class='panel-header'>"+i.title+"</div><div class='buttons'>",i.minimize&&(s+="<button class='litebutton mini-button minimize-button'>-</button>",s+="<button class='litebutton mini-button maximize-button' style='display:none'></button>"),i.hide&&(s+="<button class='litebutton mini-button hide-button'></button>"),i.detachable&&(s+="<button class='litebutton mini-button detach-button'></button>"),(i.close||i.closable)&&(s+="<button class='litebutton mini-button close-button'>"+t.special_codes.close+"</button>"),s+="</div>"),s+="<div class='content'>"+this.content+"</div>",s+="<div class='panel-footer'></div>",n.innerHTML=s,this.root=n,this.content=n.querySelector(".content"),this.footer=n.querySelector(".panel-footer"),i.fullcontent&&(this.content.style.width="100%",this.content.style.height=i.title?"calc( 100% - "+e.title_height+" )":"100%"),i.buttons)for(var l in i.buttons)this.addButton(i.buttons[l].name,i.buttons[l]);1==i.scroll&&(this.content.style.overflow="auto");var h=n.querySelector(".close-button");h&&h.addEventListener("click",this.close.bind(this));var r=n.querySelector(".maximize-button");r&&r.addEventListener("click",this.maximize.bind(this));var a=n.querySelector(".minimize-button");a&&a.addEventListener("click",this.minimize.bind(this));var d=n.querySelector(".hide-button");d&&d.addEventListener("click",this.hide.bind(this));var c=n.querySelector(".detach-button");if(c&&c.addEventListener("click",function(){o.detachWindow()}),this.enableProperties(i),this.root.addEventListener("DOMNodeInsertedIntoDocument",function(){o.on_attached_to_DOM&&o.on_attached_to_DOM(),o.on_resize&&o.on_resize()}),this.root.addEventListener("DOMNodeRemovedFromDocument",function(){o.on_detached_from_DOM&&o.on_detached_from_DOM()}),i.attach||i.parent){var u=null;i.parent&&(u="string"==typeof i.parent?document.querySelector(i.parent):i.parent),u||(u=t.root),u.appendChild(this.root),this.center()}},e.prototype.add=function(t){this.content.appendChild(t.root||t)},e.prototype.enableProperties=function(e){e=e||{};var i=this,o=this.root;o.style.position="absolute",o.style.minWidth=this.minWidth+"px",o.style.minHeight=this.minHeight+"px",this.width&&(o.style.width=this.width+"px"),this.height&&("number"==typeof this.height?o.style.height=this.height+"px":-1!=this.height.indexOf("%")&&(o.style.height=this.height),this.content.style.height="calc( "+this.height+"px - 24px )"),o.style.boxShadow="0 0 3px black",e.draggable&&(this.draggable=!0,t.draggable(o,o.querySelector(".panel-header"),function(){i.bringToFront()},null,function(){return!i.minimized})),e.resizable&&this.setResizable()},e.prototype.setResizable=function(){if(!this.resizable){var e=this.root;this.resizable=!0;var i=this.footer;i.style.minHeight="4px",i.classList.add("resizable");var o=document.createElement("div");o.className="resizable-corner",this.root.appendChild(o),i.addEventListener("mousedown",h),o.addEventListener("mousedown",h,!0);var n=[0,0],s=this,l=!1}function h(i){if("mousedown"==i.type)document.body.addEventListener("mousemove",h),document.body.addEventListener("mouseup",h),l=this==o,n[0]=i.pageX,n[1]=i.pageY;else if("mousemove"==i.type){var r=t.getRect(e),a=r.width,d=a-(n[0]-i.pageX),c=r.height,u=c-(n[1]-i.pageY);l&&(e.style.width=d+"px"),e.style.height=u+"px",n[0]=i.pageX,n[1]=i.pageY,s.content.style.height="calc( 100% - 24px )",!s.on_resize||a==d&&c==u||s.on_resize(i,d,u)}else"mouseup"==i.type&&(document.body.removeEventListener("mousemove",h),document.body.removeEventListener("mouseup",h),l=!1);return i.preventDefault(),i.stopPropagation(),!1}},e.prototype.dockTo=function(e,i){if(e){var o=this.root;i=i||"full",e=e.content||e,o.style.top=0,o.style.left=0,o.style.boxShadow="0 0 0","full"==i?(o.style.position="relative",o.style.width="100%",o.style.height="100%",this.content.style.width="100%",this.content.style.height="calc(100% - "+t.Panel.title_height+")",this.content.style.overflow="auto"):"left"==i||"right"==i?(o.style.position="absolute",o.style.top=0,o.style[i]=0,o.style.width=this.width+"px",o.style.height="100%",this.content.style.height="calc(100% - "+t.Panel.title_height+")",this.content.style.overflow="auto","right"==i&&(o.style.left="auto",o.style.right=0)):"bottom"!=i&&"top"!=i||(o.style.width="100%",o.style.height=this.height+"px","bottom"==i&&(o.style.bottom=0,o.style.top="auto")),this.draggable&&t.draggable(o),e.content?e.content.appendChild(o):"string"==typeof e?(e=document.querySelector(e))&&e.appendChild(o):e.appendChild(o)}},e.prototype.addButton=function(t,e){(e=e||{}).constructor===Function&&(e={callback:e});var i=this,o=document.createElement("button");return o.className="litebutton",o.innerHTML=t,e.className&&(o.className+=" "+e.className),this.root.querySelector(".panel-footer").appendChild(o),o.addEventListener("click",function(t){e.callback&&e.callback(this),e.close&&i.close()}),o},e.prototype.close=function(){t.remove(this.root),t.trigger(this,"closed",this),this.on_close&&this.on_close(),this.onclose&&console.warn("Dialog: Do not use onclose, use on_close instead"),this.dialog_window&&(this.dialog_window.close(),this.dialog_window=null)},e.prototype.highlight=function(t){t=t||100,this.root.style.outline="1px solid white";var e=this.root.ownerDocument;(e.defaultView||e.parentWindow).focus(),setTimeout(function(){this.root.style.outline=null}.bind(this),t)},e.minimized=[],e.prototype.minimize=function(){if(!this.minimized){this.minimized=!0,this.old_box=this.root.getBoundingClientRect(),this.root.querySelector(".content").style.display="none";var e=this.root.querySelector(".minimize-button");e&&(e.style.display="none");var i=this.root.querySelector(".maximize-button");i&&(i.style.display=""),this.root.style.width=t.Dialog.MINIMIZED_WIDTH+"px",t.bind(this,"closed",function(){t.Dialog.minimized.splice(t.Dialog.minimized.indexOf(this),1),t.Dialog.arrangeMinimized()}),t.Dialog.minimized.push(this),t.Dialog.arrangeMinimized(),t.trigger(this,"minimizing")}},e.arrangeMinimized=function(){for(var e in t.Dialog.minimized){var i=t.Dialog.minimized[e],o=i.root.parentNode.getBoundingClientRect().height-20;i.root.style.left=t.Dialog.MINIMIZED_WIDTH*e,i.root.style.top=o+"px"}},e.prototype.maximize=function(){if(this.minimized){this.minimized=!1,this.root.querySelector(".content").style.display="",t.draggable(this.root),this.root.style.left=this.old_box.left+"px",this.root.style.top=this.old_box.top+"px",this.root.style.width=this.old_box.width+"px",this.root.style.height=this.old_box.height+"px";var e=this.root.querySelector(".minimize-button");e&&(e.style.display="");var i=this.root.querySelector(".maximize-button");i&&(i.style.display="none"),t.Dialog.minimized.splice(t.Dialog.minimized.indexOf(this),1),t.Dialog.arrangeMinimized(),t.trigger(this,"maximizing")}},e.prototype.makeModal=function(){t.showModalBackground(!0),t.modalbg_div.appendChild(this.root),this.show(),this.center(),t.bind(this,"closed",function(e){t.showModalBackground(!1)})},e.prototype.bringToFront=function(){var t=this.root.parentNode;t.removeChild(this.root),t.appendChild(this.root)},e.prototype.show=function(e,i){if(!this.root.parentNode){if(i){var o=i.ownerDocument;(o.querySelector(".litegui-wrap")||o.body).appendChild(this.root),(o.defaultView||o.parentWindow).focus()}else t.add(this);this.center()}this.detach_window||(this.root.style.display="",t.trigger(this,"shown"))},e.prototype.hide=function(e){this.root.style.display="none",t.trigger(this,"hidden")},e.prototype.fadeIn=function(t){t=t||1e3,this.root.style.display="",this.root.style.opacity=0;var e=this;setTimeout(function(){e.root.style.transition="opacity "+t+"ms",e.root.style.opacity=1},100)},e.prototype.setPosition=function(t,e){this.root.parentNode||console.warn("LiteGUI.Dialog: Cannot set position of dialog if it is not in the DOM"),this.root.position="absolute",this.root.style.left=t+"px",this.root.style.top=e+"px"},e.prototype.setSize=function(t,e){this.root.style.width="number"==typeof t?t+"px":t,this.root.style.height="number"==typeof e?e+"px":e},e.prototype.setTitle=function(t){this.header&&(this.header.innerHTML=t)},e.prototype.center=function(){if(this.root.parentNode){this.root.position="absolute";var t=this.root.offsetWidth,e=this.root.offsetHeight,i=this.root.parentNode.offsetWidth,o=this.root.parentNode.offsetHeight;this.root.style.left=Math.floor(.5*(i-t))+"px",this.root.style.top=Math.floor(.5*(o-e))+"px"}},e.prototype.adjustSize=function(t,e){if(t=t||0,this.content.style.height="auto",0!=this.content.offsetHeight||e){var i=0,o=this.root.querySelector(".panel-footer");o&&(i+=o.offsetHeight);var n=this.content.offsetWidth,s=this.content.offsetHeight+20+t+i;this.setSize(n,s)}else{var l=this;setTimeout(function(){l.adjustSize(t,!0)},1)}},e.prototype.clear=function(){this.content.innerHTML=""},e.prototype.detachWindow=function(e,i){if(!this.dialog_window){var o=this.root.getClientRects()[0],n=o.width,s=o.height,l="Window",h=this.root.querySelector(".panel-header");h&&(l=h.textContent);var r=window.open("","","width="+n+", height="+s+", location=no, status=no, menubar=no, titlebar=no, fullscreen=yes");r.document.write("<head><title>"+l+"</title>"),this.dialog_window=r;for(var a=document.querySelectorAll("link[rel='stylesheet'],style"),d=0;d<a.length;d++)r.document.write(a[d].outerHTML);r.document.write("</head><body></body>"),r.document.close();return r.onbeforeunload=function(){var e=t.windows.indexOf(r);-1!=e&&t.windows.splice(e,1),i&&i()},r.document.body.appendChild(this.content),this.root.style.display="none",this._old_height=this.content.style.height,this.content.style.height="100%",t.windows.push(r),e&&e(),r}},e.prototype.reattachWindow=function(e){if(this.dialog_window){this.root.appendChild(this.content),this.root.style.display="",this.content.style.height=this._old_height,delete this._old_height,this.dialog_window.close();var i=t.windows.indexOf(this.dialog_window);-1!=i&&t.windows.splice(i,1),this.dialog_window=null}},e.showAll=function(){for(var t=document.body.querySelectorAll("litedialog"),e=0;e<t.length;e++){t[e].dialog.show()}},e.hideAll=function(){for(var t=document.body.querySelectorAll("litedialog"),e=0;e<t.length;e++){t[e].dialog.hide()}},e.closeAll=function(){for(var t=document.body.querySelectorAll("litedialog"),e=0;e<t.length;e++){t[e].dialog.close()}},t.Dialog=e});
//# sourceMappingURL=sourcemaps/Dialog.js.map