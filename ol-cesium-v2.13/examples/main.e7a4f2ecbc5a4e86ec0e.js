(()=>{"use strict";var e,n={4858:(e,n,t)=>{var r=t(9639),o=t(7811),i=t(9800),l=t(7761),a=t(9529),s=t(6424),u=t(5761),c=t(261);Cesium.Ion.defaultAccessToken=c.x;const d=new u.Z({layers:[new s.Z({source:new a.Z})],controls:(0,l.c)({attributionOptions:{collapsible:!1}}),target:"map",view:new i.ZP({center:(0,o.vs)([25,20],"EPSG:4326","EPSG:3857"),zoom:3})}),v=document.getElementById("time"),m=new r.Z({map:d,time(){const e=v.value;if(m.getCesiumScene().globe.enableLighting&&e){const n=new Date;return n.setUTCHours(e),Cesium.JulianDate.fromDate(n)}return Cesium.JulianDate.now()}}),p=m.getCesiumScene();p.terrainProvider=Cesium.createWorldTerrain(),m.setEnabled(!0),v.style.display="none",document.getElementById("enable").addEventListener("click",(()=>m.setEnabled(!m.getEnabled()))),window.toggleTime=function(){p.globe.enableLighting=!p.globe.enableLighting,"none"==v.style.display?v.style.display="inline-block":v.style.display="none"}}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return n[e].call(i.exports,i,i.exports,r),i.exports}r.m=n,e=[],r.O=(n,t,o,i)=>{if(!t){var l=1/0;for(c=0;c<e.length;c++){for(var[t,o,i]=e[c],a=!0,s=0;s<t.length;s++)(!1&i||l>=i)&&Object.keys(r.O).every((e=>r.O[e](t[s])))?t.splice(s--,1):(a=!1,i<l&&(l=i));if(a){e.splice(c--,1);var u=o();void 0!==u&&(n=u)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[t,o,i]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.j=179,(()=>{var e={179:0};r.O.j=n=>0===e[n];var n=(n,t)=>{var o,i,[l,a,s]=t,u=0;if(l.some((n=>0!==e[n]))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(s)var c=s(r)}for(n&&n(t);u<l.length;u++)i=l[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},t=self.webpackChunkol_cesium=self.webpackChunkol_cesium||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var o=r.O(void 0,[351],(()=>r(4858)));o=r.O(o)})();
//# sourceMappingURL=main.e7a4f2ecbc5a4e86ec0e.js.map