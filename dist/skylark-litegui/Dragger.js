/**
 * skylark-litegui - A version of litegui.js  that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-litegui/
 * @license MIT
 */
define(["./litegui"],function(e){function t(t,n){null===t||void 0===t?t=0:t.constructor===String?t=parseFloat(t):t.constructor!==Number&&(t=0),this.value=t;var a=void 0!=n.precision?n.precision:3;this.options=n||{};var i=document.createElement("div");i.className="dragger "+(n.extraclass?n.extraclass:""),this.root=i;var r=document.createElement("span");r.className="inputfield "+(n.extraclass?n.extraclass:"")+(n.full?" full":""),n.disabled&&(r.className+=" disabled"),i.appendChild(r);var o=n.dragger_class||"full",s=document.createElement("input");s.className="text number "+(o||""),s.value=t.toFixed(a)+(n.units?n.units:""),s.tabIndex=n.tab_index,this.input=s,i.input=s,n.disabled&&(s.disabled=!0),n.tab_index&&(s.tabIndex=n.tab_index),r.appendChild(s),s.addEventListener("keydown",function(e){if(38==e.keyCode)v(1,e);else{if(40!=e.keyCode)return;v(-1,e)}return e.stopPropagation(),e.preventDefault(),!0});var u=document.createElement("div");u.className="drag_widget",n.disabled&&(u.className+=" disabled"),r.appendChild(u),i.dragger=u,u.addEventListener("mousedown",function(t){(l=s.ownerDocument).removeEventListener("mousemove",d),l.removeEventListener("mouseup",c),n.disabled||(i.requestPointerLock&&i.requestPointerLock(),l.addEventListener("mousemove",d),l.addEventListener("mouseup",c),u.data=[t.screenX,t.screenY],e.trigger(i,"start_dragging"));t.stopPropagation(),t.preventDefault()}),s.addEventListener("wheel",p,!1),s.addEventListener("mousewheel",p,!1);var l=null;function d(e){var t=[e.screenX-u.data[0],u.data[1]-e.screenY];return void 0!==e.movementX&&(t=[e.movementX,-e.movementY]),u.data=[e.screenX,e.screenY],v(t[n.horizontal?0:1],e),e.stopPropagation(),e.preventDefault(),!1}function p(e){document.activeElement===this&&(v((void 0!==e.wheelDelta?e.wheelDelta:e.deltaY?-e.deltaY/3:0)>0?1:-1,e),e.stopPropagation(),e.preventDefault())}function c(t){e.trigger(i,"stop_dragging");var n=l||document;return l=null,n.removeEventListener("mousemove",d),n.removeEventListener("mouseup",c),n.exitPointerLock&&n.exitPointerLock(),e.trigger(u,"blur"),t.stopPropagation(),t.preventDefault(),!1}function v(t,i){n.linear||(t=t>0?Math.pow(t,1.2):-1*Math.pow(Math.abs(t),1.2));var r=n.step?n.step:1;i&&i.shiftKey?r*=10:i&&i.ctrlKey&&(r*=.1);var o=parseFloat(s.value)+t*r;null!=n.max&&o>n.max&&(o=n.max),null!=n.min&&o<n.min&&(o=n.min),s.value=o.toFixed(a),n.units&&(s.value+=n.units),e.trigger(s,"change")}}return t.prototype.setRange=function(e,t){this.options.min=e,this.options.max=t},t.prototype.setValue=function(t,n){t=parseFloat(t),this.value=t,this.options.precision&&(t=t.toFixed(this.options.precision)),this.options.units&&(t+=this.options.units),this.input.value=t,n||e.trigger(this.input,"change")},t.prototype.getValue=function(){return this.value},e.Dragger=t});
//# sourceMappingURL=sourcemaps/Dragger.js.map
