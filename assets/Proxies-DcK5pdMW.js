import{M as Pe,u as ne,d as e,t as m,i as l,aa as I,ao as Oe,ap as Be,D as w,aq as Ae,ar as Re,F as B,as as je,at as He,au as Fe,av as ze,aw as V,ax as We,ay as Ye,g as y,az as Ve,aA as Xe,aB as Ke,aC as ie,aD as Se,aE as Te,aF as te,aG as re,aH as ae,aI as Qe,P as Je,aJ as qe,aK as he,S as P,aL as de,aM as D,aN as Le,Y as X,X as Ne,a8 as Ue,E as ce,J as Ze,V as Ge,aO as et,aP as tt,aQ as me,L as rt,aR as nt,A as oe,aS as lt,o as Ee,aT as st,H as it,b as at,y as ct,Q as ot,R as dt,B as q,$ as ut,aU as gt,aV as fe,aW as be,aX as vt,aY as pe,n as ht}from"./index-D8Y9cBgZ.js";import{D as mt}from"./DocumentTitle-DrntMSd7.js";import{f as ft}from"./time-Cul4XhJb.js";import{I as xe}from"./IconReload-DH4WNpc7.js";/**
 * @license @tabler/icons-solidjs v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ye=Pe("outline","brand-speedtest","IconBrandSpeedtest",[["path",{d:"M5.636 19.364a9 9 0 1 1 12.728 0"}],["path",{d:"M16 9l-4 4"}]]);/**
 * @license @tabler/icons-solidjs v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var bt=Pe("outline","chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6"}]]),pt=m('<div class="flex flex-col gap-4"><div><div class="flex w-full justify-center"><input class=toggle type=checkbox></div></div><div class="flex flex-col"><input class="input input-bordered w-full"></div><div><input type=number class="input input-bordered w-full"></div><div><select class="select select-bordered w-full"></select></div><div><div class="flex w-full justify-center"><input class=toggle type=checkbox></div></div><div><div class="flex w-full justify-center"><input class=toggle type=checkbox></div></div><div><select class="select select-bordered w-full"></select></div><div><input type=number class="input input-bordered w-full"><input type=number class="input input-bordered w-full">'),xt=m('<option class="flex items-center gap-2">'),yt=m("<option>");const wt=n=>{const[r]=ne();return e(Je,{ref:s=>{var i;return(i=n.ref)==null?void 0:i.call(n,s)},get icon(){return e(Qe,{size:24})},get title(){return r("proxiesSettings")},get children(){var s=pt(),i=s.firstChild,d=i.firstChild,a=d.firstChild,c=i.nextSibling,h=c.firstChild,o=c.nextSibling,S=o.firstChild,p=o.nextSibling,$=p.firstChild,T=p.nextSibling,M=T.firstChild,x=M.firstChild,L=T.nextSibling,k=L.firstChild,_=k.firstChild,U=L.nextSibling,A=U.firstChild,K=U.nextSibling,F=K.firstChild,Q=F.nextSibling;return l(i,e(I,{withDivider:!0,get children(){return r("autoCloseConns")}}),d),a.addEventListener("change",g=>Oe(g.target.checked)),l(c,e(I,{withDivider:!0,get children(){return r("urlForLatencyTest")}}),h),h.addEventListener("change",g=>Be(g.target.value)),l(o,e(I,{withDivider:!0,get children(){return[w(()=>r("latencyTestTimeoutDuration"))," (",w(()=>r("ms")),")"]}}),S),S.addEventListener("change",g=>Ae(Number(g.target.value))),l(p,e(I,{withDivider:!0,get children(){return r("proxiesSorting")}}),$),$.addEventListener("change",g=>Re(g.target.value)),l($,e(B,{get each(){return Object.values(je)},children:g=>(()=>{var E=xt();return E.value=g,l(E,()=>r(g)),E})()})),l(T,e(I,{withDivider:!0,get children(){return r("hideUnavailableProxies")}}),M),x.addEventListener("change",g=>He(g.target.checked)),l(L,e(I,{withDivider:!0,get children(){return r("renderInTwoColumns")}}),k),_.addEventListener("change",g=>Fe(g.target.checked)),l(U,e(I,{withDivider:!0,get children(){return r("proxiesPreviewType")}}),A),A.addEventListener("change",g=>ze(g.target.value)),l(A,e(B,{get each(){return Object.values(V)},children:g=>(()=>{var E=yt();return E.value=g,l(E,()=>r(g)),E})()})),l(K,e(I,{withDivider:!0,get children(){return r("iconHeight")}}),F),F.addEventListener("change",g=>We(Number(g.target.value))),l(K,e(I,{withDivider:!0,get children(){return r("iconMarginRight")}}),Q),Q.addEventListener("change",g=>Ye(Number(g.target.value))),y(()=>a.checked=Ve()),y(()=>h.value=Xe()),y(()=>S.value=Ke()),y(()=>$.value=ie()),y(()=>x.checked=Se()),y(()=>_.checked=Te()),y(()=>A.value=te()),y(()=>F.value=re()),y(()=>Q.value=ae()),s}})},we=n=>{const r=()=>te()===V.OFF,s=w(()=>n.proxyNameList.length<=10),i=w(()=>{const a=te();return a===V.BAR||a===V.Auto&&!s()}),d=w(()=>{const a=te();return a===V.DOTS||a===V.Auto&&s()});return e(P,{get when(){return!r()},get children(){return e(qe,{get children(){return[e(he,{get when(){return i()},get children(){return e(_t,{get proxyNameList(){return n.proxyNameList},get testUrl(){return n.testUrl},get now(){return n.now}})}}),e(he,{get when(){return d()},get children(){return e(Tt,{get proxyNameList(){return n.proxyNameList},get testUrl(){return n.testUrl},get now(){return n.now}})}})]}})}})};var $t=m('<div class="flex items-center gap-2"><div class="my-1 flex flex-1 items-center justify-center overflow-hidden rounded-2xl [&amp;>*]:h-2"><div class=bg-green-600></div><div class=bg-yellow-500></div><div class=bg-red-500></div><div class=bg-neutral>');const _t=n=>{const{getLatencyByName:r}=de(),s=w(()=>n.proxyNameList.map(o=>r(o,n.testUrl))),i=w(()=>s().length),d=w(()=>s().filter(o=>o>D().NOT_CONNECTED&&o<=D().MEDIUM).length),a=w(()=>s().filter(o=>o>D().MEDIUM&&o<=D().HIGH).length),c=w(()=>s().filter(o=>o>D().HIGH).length),h=w(()=>s().filter(o=>o===D().NOT_CONNECTED).length);return(()=>{var o=$t(),S=o.firstChild,p=S.firstChild,$=p.nextSibling,T=$.nextSibling,M=T.nextSibling;return l(o,e(P,{get when(){return n.now},get children(){return e(Le,{get proxyName(){return n.now},get testUrl(){return n.testUrl}})}}),null),y(x=>{var L=`${d()*100/i()}%`,k=`${a()*100/i()}%`,_=`${c()*100/i()}%`,U=`${h()*100/i()}%`;return L!==x.e&&((x.e=L)!=null?p.style.setProperty("width",L):p.style.removeProperty("width")),k!==x.t&&((x.t=k)!=null?$.style.setProperty("width",k):$.style.removeProperty("width")),_!==x.a&&((x.a=_)!=null?T.style.setProperty("width",_):T.style.removeProperty("width")),U!==x.o&&((x.o=U)!=null?M.style.setProperty("width",U):M.style.removeProperty("width")),x},{e:void 0,t:void 0,a:void 0,o:void 0}),o})()};var Ct=m("<div>"),Pt=m('<div class="flex items-center gap-2"><div class="flex flex-1 flex-wrap items-center gap-1">');const St=n=>{let r=n.selected?"bg-white border-4 border-green-600":"bg-green-600";return typeof n.latency!="number"||n.latency===D().NOT_CONNECTED?r=n.selected?"bg-white border-4 border-neutral":"bg-neutral":n.latency>D().HIGH?r=n.selected?"bg-white border-4 border-red-500":"bg-red-500":n.latency>D().MEDIUM&&(r=n.selected?"bg-white border-4 border-yellow-500":"bg-yellow-500"),(()=>{var s=Ct();return y(i=>{var d=X("h-4 w-4 rounded-full",r),a=n.name;return d!==i.e&&Ne(s,i.e=d),a!==i.t&&Ue(s,"title",i.t=a),i},{e:void 0,t:void 0}),s})()},Tt=n=>{const{getLatencyByName:r}=de();return(()=>{var s=Pt(),i=s.firstChild;return l(i,e(B,{get each(){return n.proxyNameList.map(d=>[d,r(d,n.testUrl)])},children:([d,a])=>e(St,{name:d,latency:a,get selected(){return n.now===d}})})),l(s,e(P,{get when(){return n.now},get children(){return e(Le,{get proxyName(){return n.now},get testUrl(){return n.testUrl}})}}),null),s})()};var Lt=m('<div class="flex items-center gap-2 pt-1"><progress class=progress max=100></progress><div class="badge badge-secondary badge-sm">%'),Nt=m('<div class="flex flex-wrap items-center justify-between"><div class="text-sm text-slate-500"> / </div><div class="text-sm text-slate-500">: ');const Ut=n=>{const{Download:r=0,Upload:s=0,Total:i=0,Expire:d=0}=n,a=ce(i,{units:"iec"}),c=ce(r+s,{units:"iec"}),h=Math.min(Ze.toFinite(((r+s)/i*100).toFixed(1)),999);return{total:a,used:c,percentage:h,expirePrefix:()=>{const[p]=ne();return p("expire")},expireStr:()=>{const[p]=ne();return d===0?p("noExpire"):Ge(d*1e3).format("YYYY-MM-DD")}}},Et=n=>{if(!n.subscriptionInfo)return;const r=Ut(n.subscriptionInfo);return[(()=>{var s=Lt(),i=s.firstChild,d=i.nextSibling,a=d.firstChild;return l(d,()=>r.percentage,a),y(()=>i.value=r.percentage),s})(),(()=>{var s=Nt(),i=s.firstChild,d=i.firstChild,a=i.nextSibling,c=a.firstChild;return l(i,()=>`${r.used}`,d),l(i,()=>`${r.total}`,null),l(a,()=>r.expirePrefix(),c),l(a,()=>r.expireStr(),null),s})()]};function $e(n){const r={...n},s={...n},i={},d=c=>{let h=i[c];if(!h){if(!nt())return r[c];i[c]=h=oe(r[c],{internal:!0}),delete r[c]}return h[0]()};for(const c in n)Object.defineProperty(s,c,{get:()=>d(c),enumerable:!0});const a=(c,h)=>{const o=i[c];if(o)return o[1](h);c in r&&(r[c]=me(h,[r[c]]))};return[s,(c,h)=>{if(et(c)){const o=tt(()=>Object.entries(me(c,s)));rt(()=>{for(const[S,p]of o)a(S,()=>p)})}else a(c,h);return s}]}function It(n,r){if(lt.context){const[s,i]=$e(n);return Ee(()=>i(r())),[s,i]}return $e(r())}var Dt={width:0,height:0};function _e(){return{width:window.innerWidth,height:window.innerHeight}}function Mt(){const[n,r]=It(Dt,_e);return st(window,"resize",()=>r(_e())),n}var kt=m("<div class=mb-2>"),Ot=m('<div class="flex gap-2"><div class=flex-1></div><div class=flex-1>'),Bt=m('<div class="grid grid-cols-1 place-items-start gap-2">');const Ce=n=>{const r=Mt(),s=w(()=>r.width>480);return()=>{const i=it(()=>n.children),d=a=>{var c;return(c=i())==null?void 0:c.filter((h,o)=>o%2===a).map(h=>(()=>{var o=kt();return l(o,h),o})())};return Te()&&s()?(()=>{var a=Ot(),c=a.firstChild,h=c.nextSibling;return l(c,()=>d(0)),l(h,()=>d(1)),a})():(()=>{var a=Bt();return l(a,i),a})()}};var At=m('<div class="flex h-full flex-col gap-2"><div class="flex items-center gap-2"><div class="tabs-boxed tabs gap-2"></div><div class=ml-auto></div></div><div class="flex-1 overflow-y-auto">'),Rt=m('<button><span></span><div class="badge badge-sm">'),jt=m("<div>"),Ht=m("<span class=whitespace-nowrap>"),Ft=m('<div class=space-y-2><div class="flex items-center justify-between pr-8"><div class="flex items-center"><span></span><div class="badge badge-sm ml-2"></div></div></div><div class="flex flex-wrap items-center justify-between gap-2"><div class="badge badge-primary badge-sm"><span class=font-bold></span></div><div class="badge badge-secondary badge-sm">/s'),zt=m("<img>"),Wt=m('<div class="flex items-center justify-between pr-8"><div class="flex flex-wrap items-center gap-1"><span class="line-clamp-1 break-all"></span><div class="badge badge-sm"></div><div class="badge badge-sm"></div></div><div class="flex items-center gap-2">'),Yt=m('<div class="text-sm text-slate-500"> ');const Jt=()=>{const n=at();if(!ct())return n("/setup",{replace:!0}),null;let r;const[s]=ne(),{fetchProxies:i,proxies:d,selectProxyInGroup:a,proxyProviders:c,updateProviderByProviderName:h,updateAllProvider:o,proxyGroupLatencyTest:S,proxyProviderLatencyTest:p,proxyGroupLatencyTestingMap:$,proxyProviderLatencyTestingMap:T,isAllProviderUpdating:M,updatingMap:x}=de(),L=w(()=>d().filter(f=>!f.hidden)),{speedGroupByName:k}=ot(),[_,U]=dt(oe({}),{name:"collapsedMap",storage:localStorage}),A=(f,C)=>{U(G=>({...G,[f]:C}))};Ee(i);const K=async(f,C)=>{f.stopPropagation(),S(C)},F=f=>f.replace("<svg",~f.indexOf("xmlns")?"<svg":'<svg xmlns="http://www.w3.org/2000/svg"').replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/\{/g,"%7B").replace(/\}/g,"%7D").replace(/</g,"%3C").replace(/>/g,"%3E"),Q=(f,C)=>{f.stopPropagation(),p(C)},g=(f,C)=>{f.stopPropagation(),h(C)},E=async f=>{f.stopPropagation(),o()},[Z,Ie]=oe("proxies"),De=()=>[{type:"proxies",name:s("proxies"),count:L().length},{type:"proxyProviders",name:s("proxyProviders"),count:c().length}];return[e(mt,{get children(){return s("proxies")}}),(()=>{var f=At(),C=f.firstChild,G=C.firstChild,ue=G.nextSibling,ge=C.nextSibling;return l(G,e(B,{get each(){return De()},children:t=>(()=>{var N=Rt(),z=N.firstChild,v=z.nextSibling;return N.$$click=()=>Ie(t.type),l(z,()=>t.name),l(v,()=>t.count),y(()=>Ne(N,X(Z()===t.type&&"tab-active","tab-sm sm:tab-md tab gap-2 px-2"))),N})()})),l(C,e(P,{get when(){return Z()==="proxyProviders"},get children(){return e(q,{class:"btn btn-circle btn-sm",get disabled(){return M()},onClick:t=>E(t),get icon(){return e(xe,{get class(){return X(M()&&"animate-spin text-success")}})}})}}),ue),l(ue,e(q,{class:"btn-circle btn-primary btn-sm",onClick:()=>r==null?void 0:r.showModal(),get icon(){return e(ut,{})}})),l(ge,e(P,{get when(){return Z()==="proxies"},get children(){return e(Ce,{get children(){return e(B,{get each(){return L()},children:t=>{const N=w(()=>vt({proxyNames:pe({proxyNames:t.all??[],orderingType:ie(),testUrl:t.testUrl||null}),enabled:Se(),testUrl:t.testUrl||null})),z=(()=>{var v=Ft(),O=v.firstChild,J=O.firstChild,W=J.firstChild,le=W.nextSibling,ee=O.nextSibling,R=ee.firstChild,Me=R.firstChild,ve=R.nextSibling,ke=ve.firstChild;return l(J,e(P,{get when(){return t.icon},get children(){return e(P,{get when(){return t.icon.startsWith("data:image/svg+xml")},get fallback(){return(()=>{var u=zt();return y(b=>{var Y=t.icon,j=`${re()}px`,H=`${ae()}px`;return Y!==b.e&&Ue(u,"src",b.e=Y),j!==b.t&&((b.t=j)!=null?u.style.setProperty("height",j):u.style.removeProperty("height")),H!==b.a&&((b.a=H)!=null?u.style.setProperty("margin-right",H):u.style.removeProperty("margin-right")),b},{e:void 0,t:void 0,a:void 0}),u})()},get children(){var u=jt();return u.style.setProperty("color","oklch(var(--p) / var(--tw-bg-opacity))"),u.style.setProperty("background-color","currentColor"),u.style.setProperty("mask-size","100% 100%"),y(b=>{var Y=`${re()}px`,j=`${re()}px`,H=`${ae()}px`,se=`url("${F(t.icon)}")`;return Y!==b.e&&((b.e=Y)!=null?u.style.setProperty("height",Y):u.style.removeProperty("height")),j!==b.t&&((b.t=j)!=null?u.style.setProperty("width",j):u.style.removeProperty("width")),H!==b.a&&((b.a=H)!=null?u.style.setProperty("margin-right",H):u.style.removeProperty("margin-right")),se!==b.o&&((b.o=se)!=null?u.style.setProperty("mask-image",se):u.style.removeProperty("mask-image")),b},{e:void 0,t:void 0,a:void 0,o:void 0}),u}})}}),W),l(W,()=>t.name),l(le,()=>{var u;return(u=t.all)==null?void 0:u.length}),l(O,e(q,{class:"btn-circle btn-sm",get disabled(){return $()[t.name]},onClick:u=>K(u,t.name),get icon(){return e(ye,{get class(){return X($()[t.name]&&"animate-pulse text-success")}})}}),null),l(Me,()=>gt(t.type)),l(R,e(P,{get when(){var u;return((u=t.now)==null?void 0:u.length)>0},get children(){return[e(bt,{size:18}),(()=>{var u=Ht();return l(u,()=>t.now),u})()]}}),null),l(ve,()=>ce(k()[t.name]??0).toString(),ke),l(v,e(P,{get when(){return!_()[t.name]},get children(){return e(we,{get proxyNameList(){return N()},get now(){return t.now},get testUrl(){return t.testUrl||null}})}}),null),v})();return e(fe,{get isOpen(){return _()[t.name]},title:z,onCollapse:v=>A(t.name,v),get children(){return e(B,{get each(){return N()},children:v=>e(be,{proxyName:v,get testUrl(){return t.testUrl||null},get timeout(){return t.timeout??null},get isSelected(){return t.now===v},onClick:()=>void a(t,v)})})}})}})}})}}),null),l(ge,e(P,{get when(){return Z()==="proxyProviders"},get children(){return e(Ce,{get children(){return e(B,{get each(){return c()},children:t=>{const N=w(()=>pe({orderingType:ie(),proxyNames:t.proxies.map(v=>v.name)??[],testUrl:t.testUrl})),z=[(()=>{var v=Wt(),O=v.firstChild,J=O.firstChild,W=J.nextSibling,le=W.nextSibling,ee=O.nextSibling;return l(J,()=>t.name),l(W,()=>t.proxies.length),l(le,()=>t.vehicleType),l(ee,e(q,{class:"btn btn-circle btn-sm",get disabled(){return x()[t.name]},onClick:R=>g(R,t.name),get icon(){return e(xe,{get class(){return X(x()[t.name]&&"animate-spin text-success")}})}}),null),l(ee,e(q,{class:"btn btn-circle btn-sm",get disabled(){return T()[t.name]},onClick:R=>Q(R,t.name),get icon(){return e(ye,{get class(){return X(T()[t.name]&&"animate-pulse text-success")}})}}),null),v})(),e(Et,{get subscriptionInfo(){return t.subscriptionInfo}}),(()=>{var v=Yt(),O=v.firstChild;return l(v,()=>s("updated"),O),l(v,()=>ft(t.updatedAt),null),v})(),e(P,{get when(){return!_()[t.name]},get children(){return e(we,{get proxyNameList(){return N()},get testUrl(){return t.testUrl}})}})];return e(fe,{get isOpen(){return _()[t.name]},title:z,onCollapse:v=>A(t.name,v),get children(){return e(B,{get each(){return N()},children:v=>e(be,{proxyName:v,get testUrl(){return t.testUrl},get timeout(){return t.timeout??null}})})}})}})}})}}),null),l(f,e(wt,{ref:t=>r=t}),null),f})()]};ht(["click"]);export{Jt as default};
