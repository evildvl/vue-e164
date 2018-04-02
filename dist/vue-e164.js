/**
 * vue-e164 v0.1.0
 * (c) 2018 Stanislav Mihaylov
 * @license MIT
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.vueE164=e.vueE164||{})}(this,function(e){"use strict";function n(e){var n=e.match(/[0-9]{0,14}/g);return null===n?"":"+"+n.join("").substring(0,15)}function t(e,t){if(!e)return"";var i=/^(\+)(\d)(\d{2,3})(\d{3})(\d{2})(\d{2})/gi,u=t.plus?"+":"",r=t.brackets?{l:"(",r:")"}:{l:"",r:""},o=t.space?" ":"",f=n(e),d=i.exec(f);return""+u+d[2]+o+r.l+d[3]+r.r+o+d[4]+o+d[5]+o+d[6]}var i={};i.install=function(e,n){e.filter("phone",function(e){return t(e,n)}),e.directive("phone",function(e,n){e.innerHTML=t(e.innerHTML,n.value)})},"undefined"!=typeof window&&window.Vue&&window.Vue.use(i),e.filter=t,e.default=i,Object.defineProperty(e,"__esModule",{value:!0})});
