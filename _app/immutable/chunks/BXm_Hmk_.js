import{a6 as S,a7 as re,a8 as ne,a9 as P,aa as ae,g as p,ab as v,a0 as g,ac as O,D as C,ad as ie,X as te,G as se,K as X,C as D,o as J,L as Q,ae as fe,af as ue,n as le,m as M,ag as U,A as F,ah as K,p as W,ai as ce,aj as de,b as j,V as _e,ak as oe,al as ve,am as k,an as he,ao as G,ap as be,a1 as ee,I as pe,aq as we,ar as Pe,as as ge,S as H,at as ye,h as V,a3 as Re,au as T,av as Ee,aw as Ie}from"./uE4aWdR2.js";function I(e,r=null,f){if(typeof e!="object"||e===null||S in e)return e;const i=te(e);if(i!==re&&i!==ne)return e;var n=new Map,l=se(e),h=P(0);l&&n.set("length",P(e.length));var w;return new Proxy(e,{defineProperty(c,a,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&ie();var u=n.get(a);return u===void 0?(u=P(t.value),n.set(a,u)):g(u,I(t.value,w)),!0},deleteProperty(c,a){var t=n.get(a);if(t===void 0)a in c&&n.set(a,P(v));else{if(l&&typeof a=="string"){var u=n.get("length"),s=Number(a);Number.isInteger(s)&&s<u.v&&g(u,s)}g(t,v),Z(h)}return!0},get(c,a,t){var o;if(a===S)return e;var u=n.get(a),s=a in c;if(u===void 0&&(!s||(o=O(c,a))!=null&&o.writable)&&(u=P(I(s?c[a]:v,w)),n.set(a,u)),u!==void 0){var d=p(u);return d===v?void 0:d}return Reflect.get(c,a,t)},getOwnPropertyDescriptor(c,a){var t=Reflect.getOwnPropertyDescriptor(c,a);if(t&&"value"in t){var u=n.get(a);u&&(t.value=p(u))}else if(t===void 0){var s=n.get(a),d=s==null?void 0:s.v;if(s!==void 0&&d!==v)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return t},has(c,a){var d;if(a===S)return!0;var t=n.get(a),u=t!==void 0&&t.v!==v||Reflect.has(c,a);if(t!==void 0||C!==null&&(!u||(d=O(c,a))!=null&&d.writable)){t===void 0&&(t=P(u?I(c[a],w):v),n.set(a,t));var s=p(t);if(s===v)return!1}return u},set(c,a,t,u){var R;var s=n.get(a),d=a in c;if(l&&a==="length")for(var o=t;o<s.v;o+=1){var y=n.get(o+"");y!==void 0?g(y,v):o in c&&(y=P(v),n.set(o+"",y))}s===void 0?(!d||(R=O(c,a))!=null&&R.writable)&&(s=P(void 0),g(s,I(t,w)),n.set(a,s)):(d=s.v!==v,g(s,I(t,w)));var b=Reflect.getOwnPropertyDescriptor(c,a);if(b!=null&&b.set&&b.set.call(u,t),!d){if(l&&typeof a=="string"){var m=n.get("length"),x=Number(a);Number.isInteger(x)&&x>=m.v&&g(m,x+1)}Z(h)}return!0},ownKeys(c){p(h);var a=Reflect.ownKeys(c).filter(s=>{var d=n.get(s);return d===void 0||d.v!==v});for(var[t,u]of n)u.v!==v&&!(t in c)&&a.push(t);return a},setPrototypeOf(){ae()}})}function Z(e,r=1){g(e,e.v+r)}function Te(e,r,f=!1){D&&J();var i=e,n=null,l=null,h=v,w=f?Q:0,c=!1;const a=(u,s=!0)=>{c=!0,t(s,u)},t=(u,s)=>{if(h===(h=u))return;let d=!1;if(D){const o=i.data===fe;!!h===o&&(i=ue(),le(i),M(!1),d=!0)}h?(n?U(n):s&&(n=F(()=>s(i))),l&&K(l,()=>{l=null})):(l?U(l):s&&(l=F(()=>s(i))),n&&K(n,()=>{n=null})),d&&M(!0)};X(()=>{c=!1,r(a),c||t(null,null)},w),D&&(i=W)}function De(e,r,f){D&&J();var i=e,n,l;X(()=>{n!==(n=r())&&(l&&(K(l),l=null),n&&(l=F(()=>f(i,n))))},Q),D&&(i=W)}function $(e,r){return e===r||(e==null?void 0:e[S])===r}function Ne(e={},r,f,i){return ce(()=>{var n,l;return de(()=>{n=l,l=[],j(()=>{e!==f(...l)&&(r(e,...l),n&&$(f(...n),e)&&r(null,...n))})}),()=>{_e(()=>{l&&$(f(...l),e)&&r(null,...l)})}}),e}let N=!1;function Se(e){var r=N;try{return N=!1,[e(),N]}finally{N=r}}const Oe={get(e,r){if(!e.exclude.includes(r))return p(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,f){return r in e.special||(e.special[r]=xe({get[r](){return e.props[r]}},r,k)),e.special[r](f),G(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),G(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Le(e,r){return new Proxy({props:e,exclude:r,special:{},version:P(0)},Oe)}const me={get(e,r){let f=e.props.length;for(;f--;){let i=e.props[f];if(T(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i)return i[r]}},set(e,r,f){let i=e.props.length;for(;i--;){let n=e.props[i];T(n)&&(n=n());const l=O(n,r);if(l&&l.set)return l.set(f),!0}return!1},getOwnPropertyDescriptor(e,r){let f=e.props.length;for(;f--;){let i=e.props[f];if(T(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i){const n=O(i,r);return n&&!n.configurable&&(n.configurable=!0),n}}},has(e,r){if(r===S||r===ee)return!1;for(let f of e.props)if(T(f)&&(f=f()),f!=null&&r in f)return!0;return!1},ownKeys(e){const r=[];for(let f of e.props){T(f)&&(f=f());for(const i in f)r.includes(i)||r.push(i)}return r}};function qe(...e){return new Proxy({props:e},me)}function z(e){for(var r=C,f=C;r!==null&&!(r.f&(Pe|ge));)r=r.parent;try{return H(r),e()}finally{H(f)}}function xe(e,r,f,i){var Y;var n=(f&ye)!==0,l=!pe||(f&we)!==0,h=(f&be)!==0,w=(f&Ee)!==0,c=!1,a;h?[a,c]=Se(()=>e[r]):a=e[r];var t=S in e||ee in e,u=h&&(((Y=O(e,r))==null?void 0:Y.set)??(t&&r in e&&(_=>e[r]=_)))||void 0,s=i,d=!0,o=!1,y=()=>(o=!0,d&&(d=!1,w?s=j(i):s=i),s);a===void 0&&i!==void 0&&(u&&l&&oe(),a=y(),u&&u(a));var b;if(l)b=()=>{var _=e[r];return _===void 0?y():(d=!0,o=!1,_)};else{var m=z(()=>(n?V:Ie)(()=>e[r]));m.f|=ve,b=()=>{var _=p(m);return _!==void 0&&(s=void 0),_===void 0?s:_}}if(!(f&k))return b;if(u){var x=e.$$legacy;return function(_,E){return arguments.length>0?((!l||!E||x||c)&&u(E?b():_),_):b()}}var R=!1,B=!1,L=Re(a),A=z(()=>V(()=>{var _=b(),E=p(L);return R?(R=!1,B=!0,E):(B=!1,L.v=_)}));return n||(A.equals=he),function(_,E){if(arguments.length>0){const q=E?p(A):l&&h?I(_):_;return A.equals(q)||(R=!0,g(L,q),o&&s!==void 0&&(s=q),j(()=>p(A))),_}return p(A)}}export{I as a,Ne as b,De as c,Te as i,Le as l,xe as p,qe as s};
