var jn=Array.isArray,tn=Array.prototype.indexOf,Bn=Array.from,Un=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,nn=Object.getOwnPropertyDescriptors,Hn=Object.prototype,Vn=Array.prototype,rn=Object.getPrototypeOf;function Gn(t){return typeof t=="function"}const Kn=()=>{};function $n(t){return t()}function en(t){for(var n=0;n<t.length;n++)t[n]()}const E=2,Tt=4,V=8,ft=16,R=32,G=64,Z=128,T=256,z=512,c=1024,S=2048,N=4096,q=8192,L=16384,ln=32768,xt=65536,Zn=1<<17,an=1<<19,At=1<<20,yt=Symbol("$state"),zn=Symbol("legacy props"),Wn=Symbol("");function Rt(t){return t===this.v}function sn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function St(t){return!sn(t,this.v)}function un(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function on(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function fn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function _n(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Jn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Qn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Xn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function tr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function cn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function vn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let tt=!1;function nr(){tt=!0}const rr=1,er=2,lr=4,ar=8,sr=16,ur=1,or=2,pn="[",hn="[!",dn="]",Dt={},fr=Symbol();function kt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function yn(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let u=null;function wt(t){u=t}function ir(t){return wn().get(t)}function _r(t,n=!1,r){u={p:u,c:null,e:null,m:!1,s:t,x:null,l:null},tt&&!n&&(u.l={s:null,u:null,r1:[],r2:it(!1)})}function cr(t){const n=u;if(n!==null){const s=n.e;if(s!==null){var r=i,e=o;n.e=null;try{for(var l=0;l<s.length;l++){var a=s[l];Q(a.effect),J(a.reaction),Yt(a.fn)}}finally{Q(r),J(e)}}u=n.p,n.m=!0}return{}}function nt(){return!tt||u!==null&&u.l===null}function wn(t){return u===null&&yn(),u.c??(u.c=new Map(En(u)||void 0))}function En(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function it(t,n){var r={f:0,v:t,reactions:null,equals:Rt,rv:0,wv:0};return r}function vr(t){return Ot(it(t))}function mn(t,n=!1){var e;const r=it(t);return n||(r.equals=St),tt&&u!==null&&u.l!==null&&((e=u.l).s??(e.s=[])).push(r),r}function pr(t,n=!1){return Ot(mn(t,n))}function Ot(t){return o!==null&&!A&&o.f&E&&(g===null?Nn([t]):g.push(t)),t}function It(t,n){return o!==null&&!A&&nt()&&o.f&(E|ft)&&(g===null||!g.includes(t))&&vn(),gn(t,n)}function gn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=$t(),Nt(t,S),nt()&&i!==null&&i.f&c&&!(i.f&(R|G))&&(x===null?bn([t]):x.push(t))),n}function hr(t,n=1){var r=pt(t),e=n===1?r++:r--;return It(t,r),e}function Nt(t,n){var r=t.reactions;if(r!==null)for(var e=nt(),l=r.length,a=0;a<l;a++){var s=r[a],_=s.f;_&S||!e&&s===i||(y(s,n),_&(c|T)&&(_&E?Nt(s,N):lt(s)))}}let O=!1;function dr(t){O=t}let m;function j(t){if(t===null)throw kt(),Dt;return m=t}function yr(){return j(b(m))}function wr(t){if(O){if(b(m)!==null)throw kt(),Dt;m=t}}function Er(t=1){if(O){for(var n=t,r=m;n--;)r=b(r);m=r}}function mr(){for(var t=0,n=m;;){if(n.nodeType===8){var r=n.data;if(r===dn){if(t===0)return n;t-=1}else(r===pn||r===hn)&&(t+=1)}var e=b(n);n.remove(),n=e}}var Et,bt,Ct;function gr(){if(Et===void 0){Et=window;var t=Element.prototype,n=Node.prototype;bt=dt(n,"firstChild").get,Ct=dt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function at(t=""){return document.createTextNode(t)}function st(t){return bt.call(t)}function b(t){return Ct.call(t)}function Tr(t,n){if(!O)return st(t);var r=st(m);if(r===null)r=m.appendChild(at());else if(n&&r.nodeType!==3){var e=at();return r==null||r.before(e),j(e),e}return j(r),r}function xr(t,n){if(!O){var r=st(t);return r instanceof Comment&&r.data===""?b(r):r}return m}function Ar(t,n=1,r=!1){let e=O?m:t;for(var l;n--;)l=e,e=b(e);if(!O)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var s=at();return e===null?l==null||l.after(s):e.before(s),j(s),s}return j(e),e}function Rr(t){t.textContent=""}function Pt(t){var n=E|S,r=o!==null&&o.f&E?o:null;return i===null||r!==null&&r.f&T?n|=T:i.f|=At,{ctx:u,deps:null,effects:null,equals:Rt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??i}}function Sr(t){const n=Pt(t);return n.equals=St,n}function _t(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)I(n[r])}}function Tn(t){for(var n=t.parent;n!==null;){if(!(n.f&E))return n;n=n.parent}return null}function Ft(t){var n,r=i;Q(Tn(t));try{_t(t),n=zt(t)}finally{Q(r)}return n}function qt(t){var n=Ft(t),r=(k||t.f&T)&&t.deps!==null?N:c;y(t,r),t.equals(n)||(t.v=n,t.wv=$t())}function xn(t){_t(t),H(t,0),y(t,L),t.v=t.deps=t.ctx=t.reactions=null}function Lt(t){i===null&&o===null&&fn(),o!==null&&o.f&T&&i===null&&on(),vt&&un()}function An(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function Y(t,n,r,e=!0){var l=(t&G)!==0,a=i,s={ctx:u,deps:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:n,last:null,next:null,parent:l?null:a,prev:null,teardown:null,transitions:null,wv:0};if(r){var _=P;try{mt(!0),et(s),s.f|=ln}catch(C){throw I(s),C}finally{mt(_)}}else n!==null&&lt(s);var w=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(At|Z))===0;if(!w&&!l&&e&&(a!==null&&An(s,a),o!==null&&o.f&E)){var v=o;(v.effects??(v.effects=[])).push(s)}return s}function Dr(t){const n=Y(V,null,!1);return y(n,c),n.teardown=t,n}function kr(t){Lt();var n=i!==null&&(i.f&R)!==0&&u!==null&&!u.m;if(n){var r=u;(r.e??(r.e=[])).push({fn:t,effect:i,reaction:o})}else{var e=Yt(t);return e}}function Or(t){return Lt(),ct(t)}function Ir(t){const n=Y(G,t,!0);return(r={})=>new Promise(e=>{r.outro?Dn(n,()=>{I(n),e(void 0)}):(I(n),e(void 0))})}function Yt(t){return Y(Tt,t,!1)}function Nr(t,n){var r=u,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ct(()=>{t(),!e.ran&&(e.ran=!0,It(r.l.r2,!0),Yn(n))})}function br(){var t=u;ct(()=>{if(pt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&c&&y(r,N),M(r)&&et(r),n.ran=!1}t.l.r2.v=!1}})}function ct(t){return Y(V,t,!0)}function Cr(t,n=[],r=Pt){const e=n.map(r);return Rn(()=>t(...e.map(pt)))}function Rn(t,n=0){return Y(V|ft|n,t,!0)}function Pr(t,n=!0){return Y(V|R,t,!0,n)}function Mt(t){var n=t.teardown;if(n!==null){const r=vt,e=o;gt(!0),J(null);try{n.call(null)}finally{gt(r),J(e)}}}function jt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;I(r,n),r=e}}function Sn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&R||I(n),n=r}}function I(t,n=!0){var r=!1;if((n||t.f&an)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var a=e===l?null:b(e);e.remove(),e=a}r=!0}jt(t,n&&!r),H(t,0),y(t,L);var s=t.transitions;if(s!==null)for(const w of s)w.stop();Mt(t);var _=t.parent;_!==null&&_.first!==null&&Bt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Bt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Dn(t,n){var r=[];Ut(t,r,!0),kn(r,()=>{I(t),n&&n()})}function kn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Ut(t,n,r){if(!(t.f&q)){if(t.f^=q,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var l=e.next,a=(e.f&xt)!==0||(e.f&R)!==0;Ut(e,n,a?r:!1),e=l}}}function Fr(t){Ht(t,!0)}function Ht(t,n){if(t.f&q){t.f^=q,t.f&c||(t.f^=c),M(t)&&(y(t,S),lt(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&xt)!==0||(r.f&R)!==0;Ht(r,l?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let W=!1,ut=[];function Vt(){W=!1;const t=ut.slice();ut=[],en(t)}function qr(t){W||(W=!0,queueMicrotask(Vt)),ut.push(t)}function On(){W&&Vt()}const Gt=0,In=1;let K=!1,$=Gt,B=!1,U=null,P=!1,vt=!1;function mt(t){P=t}function gt(t){vt=t}let D=[],F=0;let o=null,A=!1;function J(t){o=t}let i=null;function Q(t){i=t}let g=null;function Nn(t){g=t}let p=null,d=0,x=null;function bn(t){x=t}let Kt=1,X=0,k=!1;function $t(){return++Kt}function M(t){var v;var n=t.f;if(n&S)return!0;if(n&N){var r=t.deps,e=(n&T)!==0;if(r!==null){var l,a,s=(n&z)!==0,_=e&&i!==null&&!k,w=r.length;if(s||_){for(l=0;l<w;l++)a=r[l],(s||!((v=a==null?void 0:a.reactions)!=null&&v.includes(t)))&&(a.reactions??(a.reactions=[])).push(t);s&&(t.f^=z)}for(l=0;l<w;l++)if(a=r[l],M(a)&&qt(a),a.wv>t.wv)return!0}(!e||i!==null&&!k)&&y(t,c)}return!1}function Cn(t,n){for(var r=n;r!==null;){if(r.f&Z)try{r.fn(t);return}catch{r.f^=Z}r=r.parent}throw K=!1,t}function Pn(t){return(t.f&L)===0&&(t.parent===null||(t.parent.f&Z)===0)}function rt(t,n,r,e){if(K){if(r===null&&(K=!1),Pn(n))throw t;return}r!==null&&(K=!0);{Cn(t,n);return}}function Zt(t,n,r=0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];a.f&E?Zt(a,n,r+1):n===a&&(r===0?y(a,S):a.f&c&&y(a,N),lt(a))}}function zt(t){var ht;var n=p,r=d,e=x,l=o,a=k,s=g,_=u,w=A,v=t.f;p=null,d=0,x=null,o=v&(R|G)?null:t,k=(v&T)!==0&&(!P||(l===null||w)&&t.parent!==null),g=null,wt(t.ctx),A=!1,X++;try{var C=(0,t.fn)(),h=t.deps;if(p!==null){var f;if(H(t,d),h!==null&&d>0)for(h.length=d+p.length,f=0;f<p.length;f++)h[d+f]=p[f];else t.deps=h=p;if(!k)for(f=d;f<h.length;f++)((ht=h[f]).reactions??(ht.reactions=[])).push(t)}else h!==null&&d<h.length&&(H(t,d),h.length=d);if(nt()&&x!==null&&!(t.f&(E|N|S)))for(f=0;f<x.length;f++)Zt(x[f],t);return l!==null&&X++,C}finally{p=n,d=r,x=e,o=l,k=a,g=s,wt(_),A=w}}function Fn(t,n){let r=n.reactions;if(r!==null){var e=tn.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&E&&(p===null||!p.includes(n))&&(y(n,N),n.f&(T|z)||(n.f^=z),_t(n),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Fn(t,r[e])}function et(t){var n=t.f;if(!(n&L)){y(t,c);var r=i,e=u;i=t;try{n&ft?Sn(t):jt(t),Mt(t);var l=zt(t);t.teardown=typeof l=="function"?l:null,t.wv=Kt;var a=t.deps,s}catch(_){rt(_,t,r,e||t.ctx)}finally{i=r}}}function Wt(){if(F>1e3){F=0;try{_n()}catch(t){if(U!==null)rt(t,U,null);else throw t}}F++}function Jt(t){var n=t.length;if(n!==0){Wt();var r=P;P=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&c||(l.f^=c);var a=[];Qt(l,a),qn(a)}}finally{P=r}}}function qn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(L|q)))try{M(e)&&(et(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Bt(e):e.fn=null))}catch(l){rt(l,e,null,e.ctx)}}}function Ln(){if(B=!1,F>1001)return;const t=D;D=[],Jt(t),B||(F=0,U=null)}function lt(t){$===Gt&&(B||(B=!0,queueMicrotask(Ln))),U=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(G|R)){if(!(r&c))return;n.f^=c}}D.push(n)}function Qt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,a=(l&R)!==0,s=a&&(l&c)!==0,_=r.next;if(!s&&!(l&q))if(l&V){if(a)r.f^=c;else{var w=o;try{o=r,M(r)&&et(r)}catch(f){rt(f,r,null,r.ctx)}finally{o=w}}var v=r.first;if(v!==null){r=v;continue}}else l&Tt&&e.push(r);if(_===null){let f=r.parent;for(;f!==null;){if(t===f)break t;var C=f.next;if(C!==null){r=C;continue t}f=f.parent}}r=_}for(var h=0;h<e.length;h++)v=e[h],n.push(v),Qt(v,n)}function Xt(t){var n=$,r=D;try{Wt();const l=[];$=In,D=l,B=!1,Jt(r);var e=t==null?void 0:t();return On(),(D.length>0||l.length>0)&&Xt(),F=0,U=null,e}finally{$=n,D=r}}async function Lr(){await Promise.resolve(),Xt()}function pt(t){var n=t.f,r=(n&E)!==0;if(r&&n&L){var e=Ft(t);return xn(t),e}if(o!==null&&!A){g!==null&&g.includes(t)&&cn();var l=o.deps;t.rv<X&&(t.rv=X,p===null&&l!==null&&l[d]===t?d++:p===null?p=[t]:p.push(t))}else if(r&&t.deps===null&&t.effects===null){var a=t,s=a.parent;s!==null&&!(s.f&T)&&(a.f^=T)}return r&&(a=t,M(a)&&qt(a)),t.v}function Yn(t){var n=A;try{return A=!0,t()}finally{A=n}}const Mn=-7169;function y(t,n){t.f=t.f&Mn|n}function Yr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(yt in t)ot(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&yt in r&&ot(r)}}}function ot(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ot(t[e],n)}catch{}const r=rn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=nn(r);for(let l in e){const a=e[l].get;if(a)try{a.call(t)}catch{}}}}}export{or as $,Pr as A,_r as B,O as C,i as D,cr as E,yn as F,jn as G,pn as H,tt as I,nr as J,Rn as K,xt as L,Kn as M,I as N,Cr as O,Tr as P,wr as Q,J as R,Q as S,o as T,Un as U,qr as V,Dr as W,rn as X,nn as Y,Wn as Z,ur as _,kr as a,It as a0,zn as a1,Xt as a2,mn as a3,vr as a4,Lr as a5,yt as a6,Hn as a7,Vn as a8,it as a9,br as aA,Er as aB,sn as aC,tr as aa,fr as ab,dt as ac,Xn as ad,hn as ae,mr as af,Fr as ag,Dn as ah,Yt as ai,ct as aj,Qn as ak,Zn as al,lr as am,St as an,hr as ao,ar as ap,er as aq,R as ar,G as as,rr as at,Gn as au,sr as av,Sr as aw,ir as ax,Nr as ay,pr as az,Yn as b,u as c,$n as d,Yr as e,xr as f,pt as g,Pt as h,gr as i,st as j,b as k,Dt as l,dr as m,j as n,yr as o,m as p,dn as q,en as r,Ar as s,kt as t,Or as u,Jn as v,Rr as w,Bn as x,Ir as y,at as z};
