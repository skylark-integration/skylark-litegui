/**
 * skylark-litegui - A version of litegui.js  that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-litegui/
 * @license MIT
 */
define(["./litegui"],function(t){return t.Split=function(t,e,i){if(e=e||{},t&&t.constructor===String){var s=t;t=e,(e=i||{}).id=s,console.warn("LiteGUI.Split legacy parameter, use sections as first parameter instead of id.")}var n=document.createElement("div");for(var r in this.root=n,e.id&&(n.id=s),n.className="litesplit "+(e.vertical?"vsplit":"hsplit"),this.sections=[],t){var o=document.createElement("div");o.className="split-section split"+r,"number"==typeof t[r]?e.vertical?o.style.height=t[r].toFixed(1)+"%":o.style.width=t[r].toFixed(1)+"%":"string"==typeof t[r]?e.vertical?o.style.height=t[r]:o.style.width=t[r]:(t[r].id&&(o.id=t[r].id),e.vertical?o.style.height="Number"==typeof t[r].height?t[r].height.toFixed(1)+"%":t[r].height:o.style.width="Number"==typeof t[r].width?t[r].width.toFixed(1)+"%":t[r].width),o.add=function(t){this.appendChild(t.root||t)},this.sections.push(o),n.appendChild(o)}e.parent&&(e.parent.root?e.parent.root.appendChild(n):e.parent.appendChild(n)),this.getSection=function(t){return this.sections[t]}}});
//# sourceMappingURL=sourcemaps/Split.js.map
