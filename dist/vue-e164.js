/**
 * vue-e164 v0.0.0
 * (c) 2018 Stanislav Mihaylov
 * @license MIT
 */
!function(s,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):s.vueE164=t()}(this,function(){"use strict";var s={};return s.install=function(s,t){function u(s){var t=s.match(/[0-9]{0,14}/g);return null===t?"":"+"+t.join("").substring(0,15)}s.filter("phone",function(s){if(!s)return"";var r=u(s);return!t.plus||t.brackets||t.space?t.plus||t.brackets||t.space?t.plus&&t.brackets&&!t.space?"+"+r.substr(1,1)+"("+r.substr(2,3)+")"+r.substring(5):t.plus&&!t.brackets&&t.space?"+"+r.substr(1,1)+" "+r.substr(2,3)+" "+r.substr(5,3)+" "+r.substr(8,2)+" "+r.substr(10,2):t.plus&&t.brackets&&t.space?"+"+r.substr(1,1)+" ("+r.substr(2,3)+") "+r.substr(5,3)+" "+r.substr(8,2)+" "+r.substr(10,2):!t.plus&&t.brackets&&t.space?r.substr(1,1)+" ("+r.substr(2,3)+") "+r.substr(5,3)+" "+r.substr(8,2)+" "+r.substr(10,2):t.plus||t.brackets||!t.space?t.plus||!t.brackets||t.space?"":r.substr(1,1)+"("+r.substr(2,3)+")"+r.substring(5):r.substr(1,1)+" "+r.substr(2,3)+" "+r.substr(5,3)+" "+r.substr(8,2)+" "+r.substr(10,2):r.split("+").join(""):r})},"undefined"!=typeof window&&window.Vue&&window.Vue.use(s),s});
