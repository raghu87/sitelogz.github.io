(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4359],{4359:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r,u,l,a,o=n(7437),c=n(2265);let i=(0,c.createContext)(null),s=i.Provider;var f=n(7691);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let d=(0,c.forwardRef)(function({bounds:e,boundsOptions:t,center:n,children:r,className:u,id:l,placeholder:a,style:o,whenReady:i,zoom:d,...m},v){let[b]=(0,c.useState)({className:u,id:l,style:o}),[y,h]=(0,c.useState)(null);(0,c.useImperativeHandle)(v,()=>y?.map??null,[y]);let w=(0,c.useCallback)(r=>{if(null!==r&&null===y){let u=new f.Map(r,m);null!=n&&null!=d?u.setView(n,d):null!=e&&u.fitBounds(e,t),null!=i&&u.whenReady(i),h(Object.freeze({__version:1,map:u}))}},[]);(0,c.useEffect)(()=>()=>{y?.map.remove()},[y]);let C=y?c.createElement(s,{value:y},r):a??null;return c.createElement("div",p({},b,{ref:w}),C)});function m(e,t){let n=e.pane??t.pane;return n?{...e,pane:n}:e}n(4887);let v=(r=function({url:e,...t},n){return Object.freeze({instance:new f.TileLayer(e,m(t,n)),context:n,container:void 0})},u=function(e,t,n){!function(e,t,n){let{opacity:r,zIndex:u}=t;null!=r&&r!==n.opacity&&e.setOpacity(r),null!=u&&u!==n.zIndex&&e.setZIndex(u)}(e,t,n);let{url:r}=t;null!=r&&r!==n.url&&e.setUrl(r)},l=function(e,t){let n=(0,c.useRef)();n.current||(n.current=r(e,t));let l=(0,c.useRef)(e),{instance:a}=n.current;return(0,c.useEffect)(function(){l.current!==e&&(u(a,e,l.current),l.current=e)},[a,e,t]),n},a=function(e){var t;let n=function(){let e=(0,c.useContext)(i);if(null==e)throw Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}(),r=l(m(e,n),n);return function(e,t){let n=(0,c.useRef)(t);(0,c.useEffect)(function(){t!==n.current&&null!=e.attributionControl&&(null!=n.current&&e.attributionControl.removeAttribution(n.current),null!=t&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}(n.map,e.attribution),function(e,t){let n=(0,c.useRef)();(0,c.useEffect)(function(){return null!=t&&e.instance.on(t),n.current=t,function(){null!=n.current&&e.instance.off(n.current),n.current=null}},[e,t])}(r.current,e.eventHandlers),t=r.current,(0,c.useEffect)(function(){return(n.layerContainer??n.map).addLayer(t.instance),function(){n.layerContainer?.removeLayer(t.instance),n.map.removeLayer(t.instance)}},[n,t]),r},(0,c.forwardRef)(function(e,t){let{instance:n}=a(e).current;return(0,c.useImperativeHandle)(t,()=>n),null}));var b=n(4429),y=n.n(b);function h(e){let{lat:t,lng:n,zoom:r}=e;console.log("lat",t,n);let[u,l]=(0,c.useState)(null),[a,i]=(0,c.useState)({lat:t,lng:n});return(0,c.useEffect)(()=>{u&&(console.log(u),u.target.addEventListener("mousemove",e=>{console.log(e.latlng)}))},[u]),(0,o.jsx)("div",{className:y().map_container,children:(0,o.jsx)(d,{center:a,zoom:r,className:y().map_container,whenReady:l,children:(0,o.jsx)(v,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",className:y().map_container})})})}n(966)},966:function(){}}]);