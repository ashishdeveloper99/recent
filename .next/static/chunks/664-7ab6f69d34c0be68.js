(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[664],{227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(2648).Z,l=o(7273).Z,r=n(o(3236)),u=o(1003),a=o(7795),f=o(4465),c=o(2692),i=o(8245),s=o(9246),d=o(227),p=o(3468);let h=new Set;function v(e,t,o,n){if(u.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let l=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,r=t+"%"+o+"%"+l;if(h.has(r))return;h.add(r)}Promise.resolve(e.prefetch(t,o,n)).catch(e=>{})}}function y(e){return"string"==typeof e?e:a.formatUrl(e)}let b=r.default.forwardRef(function(e,t){let o,n;let{href:a,as:h,children:b,prefetch:g,passHref:_,replace:C,shallow:m,scroll:M,locale:k,onClick:j,onMouseEnter:E,onTouchStart:O,legacyBehavior:P=!1}=e,x=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=b,P&&("string"==typeof o||"number"==typeof o)&&(o=r.default.createElement("a",null,o));let L=!1!==g,w=r.default.useContext(c.RouterContext),R=r.default.useContext(i.AppRouterContext),I=null!=w?w:R,S=!w,{href:T,as:D}=r.default.useMemo(()=>{if(!w){let e=y(a);return{href:e,as:h?y(h):e}}let[e,t]=u.resolveHref(w,a,!0);return{href:e,as:h?u.resolveHref(w,h):t||e}},[w,a,h]),K=r.default.useRef(T),N=r.default.useRef(D);P&&(n=r.default.Children.only(o));let U=P?n&&"object"==typeof n&&n.ref:t,[H,A,B]=s.useIntersection({rootMargin:"200px"}),Z=r.default.useCallback(e=>{(N.current!==D||K.current!==T)&&(B(),N.current=D,K.current=T),H(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[D,U,T,B,H]);r.default.useEffect(()=>{I&&A&&L&&v(I,T,D,{locale:k})},[D,T,A,k,L,null==w?void 0:w.locale,I]);let q={ref:Z,onClick(e){P||"function"!=typeof j||j(e),P&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,o,n,l,a,f,c,i,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u.isLocalURL(o)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[l?"replace":"push"](o,n,{shallow:a,locale:c,scroll:f}):t[l?"replace":"push"](n||o,{forceOptimisticNavigation:!s})};i?r.default.startTransition(h):h()}(e,I,T,D,C,m,M,k,S,L)},onMouseEnter(e){P||"function"!=typeof E||E(e),P&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),I&&(L||!S)&&v(I,T,D,{locale:k,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){P||"function"!=typeof O||O(e),P&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),I&&(L||!S)&&v(I,T,D,{locale:k,priority:!0,bypassPrefetchedCheck:!0})}};if(!P||_||"a"===n.type&&!("href"in n.props)){let e=void 0!==k?k:null==w?void 0:w.locale,t=(null==w?void 0:w.isLocaleDomain)&&d.getDomainLocale(D,e,null==w?void 0:w.locales,null==w?void 0:w.domainLocales);q.href=t||p.addBasePath(f.addLocale(D,e,null==w?void 0:w.defaultLocale))}return P?r.default.cloneElement(n,q):r.default.createElement("a",Object.assign({},x,q),o)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:o,disabled:f}=e,c=f||!r,[i,s]=n.useState(!1),d=n.useRef(null),p=n.useCallback(e=>{d.current=e},[]);n.useEffect(()=>{if(r){if(c||i)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,o){let{id:n,observer:l,elements:r}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===o.root&&e.margin===o.margin);if(n&&(t=u.get(n)))return t;let l=new Map,r=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:r,elements:l},a.push(o),u.set(o,t),t}(o);return r.set(e,t),l.observe(e),function(){if(r.delete(e),l.unobserve(e),0===r.size){l.disconnect(),u.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:o});return n}}else if(!i){let e=l.requestIdleCallback(()=>s(!0));return()=>l.cancelIdleCallback(e)}},[c,o,t,i,d.current]);let h=n.useCallback(()=>{s(!1)},[]);return[p,i,h]};var n=o(3236),l=o(4686);let r="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,o){e.exports=o(1551)}}]);