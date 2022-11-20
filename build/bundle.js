var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i,a;function c(t,e){return i||(i=document.createElement("a")),i.href=e,t===i.href}function p(t,e,n,r){if(t){const o=u(t,e,n,r);return t[0](o)}}function u(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function f(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}function d(t,e,n,r,o,s){if(o){const l=u(e,n,r,s);t.p(l,o)}}function m(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function $(t,e){t.appendChild(e)}function g(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode&&t.parentNode.removeChild(t)}function x(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function v(){return b(" ")}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function N(t){a=t}const j=[],P=[],_=[],J=[],E=Promise.resolve();let T=!1;function A(t){_.push(t)}const C=new Set;let D=0;function z(){const t=a;do{for(;D<j.length;){const t=j[D];D++,N(t),M(t.$$)}for(N(null),j.length=0,D=0;P.length;)P.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];C.has(e)||(C.add(e),e())}_.length=0}while(j.length);for(;J.length;)J.pop()();T=!1,C.clear(),N(t)}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const R=new Set;let S;function B(){S={r:0,c:[],p:S}}function O(){S.r||o(S.c),S=S.p}function F(t,e){t&&t.i&&(R.delete(t),t.i(e))}function L(t,e,n,r){if(t&&t.o){if(R.has(t))return;R.add(t),S.c.push((()=>{R.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}function H(t){t&&t.c()}function I(t,e,r,l){const{fragment:i,after_update:a}=t.$$;i&&i.m(e,r),l||A((()=>{const e=t.$$.on_mount.map(n).filter(s);t.$$.on_destroy?t.$$.on_destroy.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(A)}function V(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function q(t,e){-1===t.$$.dirty[0]&&(j.push(t),T||(T=!0,E.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(e,n,s,l,i,c,p,u=[-1]){const f=a;N(e);const d=e.$$={fragment:null,ctx:[],props:c,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};p&&p(d.root);let m=!1;if(d.ctx=s?s(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),m&&q(e,t)),n})):[],d.update(),m=!0,o(d.before_update),d.fragment=!!l&&l(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(h)}else d.fragment&&d.fragment.c();n.intro&&F(e.$$.fragment),I(e,n.target,n.anchor,n.customElement),z()}N(f)}class W{$destroy(){V(this,1),this.$destroy=t}$on(e,n){if(!s(n))return t;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const t=r.indexOf(n);-1!==t&&r.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}class Y extends W{constructor(t){super(),G(this,t,null,null,l,{})}}function K(t){let e,n;const r=t[7].default,o=p(r,t,t[6],null);return{c(){e=y("a"),o&&o.c(),w(e,"href",t[0]),w(e,"class",t[1])},m(t,r){g(t,e,r),o&&o.m(e,null),n=!0},p(t,[s]){o&&o.p&&(!n||64&s)&&d(o,r,t,t[6],n?f(r,t[6],s,null):m(t[6]),null),(!n||1&s)&&w(e,"href",t[0]),(!n||2&s)&&w(e,"class",t[1])},i(t){n||(F(o,t),n=!0)},o(t){L(o,t),n=!1},d(t){t&&h(e),o&&o.d(t)}}}function Q(t,e,n){let{$$slots:r={},$$scope:o}=e,{href:s}=e,{full:l=!1}=e,{color:i="secondary"}=e,{plain:a=!1}=e,{border:c=!0}=e,p="block text-center transition rounded-lg";return p+=l?" w-full":" w-fit",p+=a?" hover:bg-transparent"+("primary"===i?" bg-primary":" bg-secondary")+("primary"===i?" hover:text-primary":" hover:text-secondary")+("primary"===i?" text-secondary":" text-primary"):c&&("primary"===i?" hover:bg-primary":" hover:bg-secondary")+" bg-transparent"+("primary"===i?" hover:text-primary":" hover:text-secondary"),p+=c?" border p-4"+("primary"===i?" border-primary":" border-secondary"):" p-2"+("primary"===i?" hover:bg-primary/25":" hover:bg-secondary/25"),t.$$set=t=>{"href"in t&&n(0,s=t.href),"full"in t&&n(2,l=t.full),"color"in t&&n(3,i=t.color),"plain"in t&&n(4,a=t.plain),"border"in t&&n(5,c=t.border),"$$scope"in t&&n(6,o=t.$$scope)},[s,p,l,i,a,c,o,r]}class U extends W{constructor(t){super(),G(this,t,Q,K,l,{href:0,full:2,color:3,plain:4,border:5})}}function X(e){let n,r;return{c(){n=y("span"),n.textContent="📞",r=b("Contactez moi"),w(n,"class","mr-2")},m(t,e){g(t,n,e),g(t,r,e)},p:t,d(t){t&&h(n),t&&h(r)}}}function Z(t){let e,n,r,o,s,l,i,a,c,p;return c=new U({props:{href:"#about",full:!0,plain:!0,color:"secondary",$$slots:{default:[X]},$$scope:{ctx:t}}}),{c(){e=y("div"),n=y("p"),r=b(t[0]),o=v(),s=y("p"),l=b(t[1]),i=v(),a=y("div"),H(c.$$.fragment),w(n,"class","text-6xl font-bold tracking-wide"),w(s,"class","text-lg font-extralight whitespace-pre-line"),w(a,"class","w-full"),w(e,"class","space-y-4")},m(t,u){g(t,e,u),$(e,n),$(n,r),$(e,o),$(e,s),$(s,l),$(e,i),$(e,a),I(c,a,null),p=!0},p(t,[e]){(!p||1&e)&&k(r,t[0]),(!p||2&e)&&k(l,t[1]);const n={};4&e&&(n.$$scope={dirty:e,ctx:t}),c.$set(n)},i(t){p||(F(c.$$.fragment,t),p=!0)},o(t){L(c.$$.fragment,t),p=!1},d(t){t&&h(e),V(c)}}}function tt(t,e,n){let{title:r}=e,{subtitle:o}=e;return document.title=r,t.$$set=t=>{"title"in t&&n(0,r=t.title),"subtitle"in t&&n(1,o=t.subtitle)},[r,o]}class et extends W{constructor(t){super(),G(this,t,tt,Z,l,{title:0,subtitle:1})}}function nt(t){let e,n,r;const o=t[2].default,s=p(o,t,t[1],null);return{c(){e=y("span"),s&&s.c(),w(e,"class",n="rounded-full "+("primary"===t[0]?"text-secondary":"text-primary")+" px-4 py-2 bg-"+t[0]+" text-sm font-light")},m(t,n){g(t,e,n),s&&s.m(e,null),r=!0},p(t,[l]){s&&s.p&&(!r||2&l)&&d(s,o,t,t[1],r?f(o,t[1],l,null):m(t[1]),null),(!r||1&l&&n!==(n="rounded-full "+("primary"===t[0]?"text-secondary":"text-primary")+" px-4 py-2 bg-"+t[0]+" text-sm font-light"))&&w(e,"class",n)},i(t){r||(F(s,t),r=!0)},o(t){L(s,t),r=!1},d(t){t&&h(e),s&&s.d(t)}}}function rt(t,e,n){let{$$slots:r={},$$scope:o}=e,{color:s="secondary"}=e;return t.$$set=t=>{"color"in t&&n(0,s=t.color),"$$scope"in t&&n(1,o=t.$$scope)},[s,o,r]}class ot extends W{constructor(t){super(),G(this,t,rt,nt,l,{color:0})}}function st(t,e,n){const r=t.slice();return r[6]=e[n],r}function lt(t){let e,n,r;return{c(){e=y("div"),n=y("img"),w(n,"class","bg-basic rounded-lg p-2"),c(n.src,r=t[5])||w(n,"src",r),w(n,"alt",t[4]),w(e,"class","h-24 w-24 -mt-12 drop-shadow-lg shrink-0")},m(t,r){g(t,e,r),$(e,n)},p(t,e){32&e&&!c(n.src,r=t[5])&&w(n,"src",r),16&e&&w(n,"alt",t[4])},d(t){t&&h(e)}}}function it(t){let e,n,r;return n=new U({props:{href:t[3],target:"_blank",rel:"noreferrer",border:!1,$$slots:{default:[at]},$$scope:{ctx:t}}}),{c(){e=y("div"),H(n.$$.fragment),w(e,"class","self-start")},m(t,o){g(t,e,o),I(n,e,null),r=!0},p(t,e){const r={};8&e&&(r.href=t[3]),512&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(F(n.$$.fragment,t),r=!0)},o(t){L(n.$$.fragment,t),r=!1},d(t){t&&h(e),V(n)}}}function at(e){let n;return{c(){n=y("i"),w(n,"class","fas fa-external-link-alt")},m(t,e){g(t,n,e)},p:t,d(t){t&&h(n)}}}function ct(t){let e,n=t[6].name+"";return{c(){e=b(n)},m(t,n){g(t,e,n)},p(t,r){1&r&&n!==(n=t[6].name+"")&&k(e,n)},d(t){t&&h(e)}}}function pt(t){let e,n;return e=new ot({props:{color:"primary",$$slots:{default:[ct]},$$scope:{ctx:t}}}),{c(){H(e.$$.fragment)},m(t,r){I(e,t,r),n=!0},p(t,n){const r={};513&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(F(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function ut(t){let e,n,r,o,s,l,i,a,c,p,u,f,d,m,N,j,P,_=!!t[5]&&lt(t),J=!!t[3]&&it(t),E=t[0],T=[];for(let e=0;e<E.length;e+=1)T[e]=pt(st(t,E,e));const A=t=>L(T[t],1,1,(()=>{T[t]=null}));return{c(){e=y("div"),n=y("div"),_&&_.c(),r=v(),o=y("div"),s=y("p"),l=b(t[1]),i=v(),a=y("p"),c=b(t[4]),p=v(),J&&J.c(),u=v(),f=y("div"),d=y("p"),m=b(t[2]),N=v(),j=y("div");for(let t=0;t<T.length;t+=1)T[t].c();w(s,"class","text-3xl"),w(a,"class","text-lg font-extralight"),w(o,"class","grow"),w(n,"class","flex space-x-4 sm:space-x-8"),w(d,"class","text-justify"),w(j,"class","flex space-x-2 mt-4"),w(f,"class","flex flex-col justify-between mt-4 self-end h-full"),w(e,"class","flex flex-col bg-secondary text-primary rounded-lg p-8 h-full")},m(t,h){g(t,e,h),$(e,n),_&&_.m(n,null),$(n,r),$(n,o),$(o,s),$(s,l),$(o,i),$(o,a),$(a,c),$(n,p),J&&J.m(n,null),$(e,u),$(e,f),$(f,d),$(d,m),$(f,N),$(f,j);for(let t=0;t<T.length;t+=1)T[t].m(j,null);P=!0},p(t,[e]){if(t[5]?_?_.p(t,e):(_=lt(t),_.c(),_.m(n,r)):_&&(_.d(1),_=null),(!P||2&e)&&k(l,t[1]),(!P||16&e)&&k(c,t[4]),t[3]?J?(J.p(t,e),8&e&&F(J,1)):(J=it(t),J.c(),F(J,1),J.m(n,null)):J&&(B(),L(J,1,1,(()=>{J=null})),O()),(!P||4&e)&&k(m,t[2]),1&e){let n;for(E=t[0],n=0;n<E.length;n+=1){const r=st(t,E,n);T[n]?(T[n].p(r,e),F(T[n],1)):(T[n]=pt(r),T[n].c(),F(T[n],1),T[n].m(j,null))}for(B(),n=E.length;n<T.length;n+=1)A(n);O()}},i(t){if(!P){F(J);for(let t=0;t<E.length;t+=1)F(T[t]);P=!0}},o(t){L(J),T=T.filter(Boolean);for(let t=0;t<T.length;t+=1)L(T[t]);P=!1},d(t){t&&h(e),_&&_.d(),J&&J.d(),x(T,t)}}}function ft(t,e,n){let{tags:r=[]}=e,{title:o="Default title"}=e,{text:s="Default text"}=e,{link:l}=e,{company:i=""}=e,{image:a=""}=e;return t.$$set=t=>{"tags"in t&&n(0,r=t.tags),"title"in t&&n(1,o=t.title),"text"in t&&n(2,s=t.text),"link"in t&&n(3,l=t.link),"company"in t&&n(4,i=t.company),"image"in t&&n(5,a=t.image)},[r,o,s,l,i,a]}class dt extends W{constructor(t){super(),G(this,t,ft,ut,l,{tags:0,title:1,text:2,link:3,company:4,image:5})}}function mt(t){let e;return{c(){e=b("Node.Js")},m(t,n){g(t,e,n)},d(t){t&&h(e)}}}function $t(t){let e;return{c(){e=b("Vue.JS")},m(t,n){g(t,e,n)},d(t){t&&h(e)}}}function gt(t){let e;return{c(){e=b("React.JS")},m(t,n){g(t,e,n)},d(t){t&&h(e)}}}function ht(t){let e;return{c(){e=b("Tailwind")},m(t,n){g(t,e,n)},d(t){t&&h(e)}}}function xt(t){let e,n,r,o,s,l,i,a,c,p,u,f,d,m,x,b,k,N,j,P;return u=new ot({props:{color:"primary",$$slots:{default:[mt]},$$scope:{ctx:t}}}),d=new ot({props:{color:"primary",$$slots:{default:[$t]},$$scope:{ctx:t}}}),x=new ot({props:{color:"primary",$$slots:{default:[gt]},$$scope:{ctx:t}}}),k=new ot({props:{color:"primary",$$slots:{default:[ht]},$$scope:{ctx:t}}}),{c(){e=y("div"),n=y("div"),r=y("div"),r.innerHTML='<img class="rounded-l-lg" src="assets/images/PP.jpg" alt="PP"/>',o=v(),s=y("div"),l=y("p"),l.textContent="Romain Neuplanche",i=v(),a=y("div"),a.innerHTML="<p>22 ans</p> \n                <p>Développeur freelance fullstack, master en technologie de l&#39;information à Epitech</p>",c=v(),p=y("div"),H(u.$$.fragment),f=v(),H(d.$$.fragment),m=v(),H(x.$$.fragment),b=v(),H(k.$$.fragment),N=v(),j=y("div"),j.innerHTML='<p class="text-xl font-bold">Contact</p> \n        <div class="flex flex-col font-extralight"><p>Paris, France</p> \n            <a href="mailto:romain.neuplanche@epitech.eu">romain.neuplanche@epitech.eu</a> \n            <a href="tel:+33603680478">+33 6 03 68 04 78</a> \n            <div class="flex space-x-2"><a href="https://www.malt.fr/profile/romainneuplanche"><div class="h-4 w-4"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Malt" role="img" viewBox="0 0 180 180" class="svg-inline--fa"><path d="m20.0011588 136.958459c-.1300075 10.328714 6.3403673 19.997511 16.5109565 22.797163 12.8007416 3.469568 21.3912393-5.619301 29.6617184-13.808282 21.9412711-21.77729 43.8858753-43.55458 65.8338143-65.33187l15.630905-15.4680752c4.680271-4.6394226 9.870572-8.9988801 11.860682-15.5580639 3.080184-10.0887446-1.420077-21.287351-11.000632-25.8667812-4.87453-2.4469742-10.439754-3.1526443-15.770914-1.9997511-6.670386 1.6397959-11.180647 6.7191639-15.89092 11.3485878-10.640617 10.4486997-21.1812273 20.9973871-31.8018426 31.4660843-12.3407149 12.2118137-24.7147651 24.4202945-37.1221506 36.6254423-6.2103598 6.10924-12.4507213 12.168486-18.6210788 18.297723-4.8002781 4.769407-9.2905382 10.358711-9.2905382 17.497823zm89.3451762-23.937022c3.690214 1.439821 8.000463.72991 12.000695.749907h14.080816c8.81051 0 18.201054.819898 26.921559-.499938 13.250768-1.999751 20.791205-16.8379044 16.39095-29.0863802-1.979651-5.4455289-5.959727-9.932577-11.130645-12.5484385-2.92879-1.51039-6.156915-2.3505742-9.450547-2.4596939-4.540263-.0899888-6.520378 2.7196616-9.600557 5.7492846-13.000753 12.7784098-25.611483 25.996765-39.172269 38.085261zm-38.5522336-43.8145473c-8.5204936-.7199104-17.2009965-.2799652-25.7414913-.2899639-4.7902775 0-9.6105568.1299838-14.4008343-.0799901-4.1402398-.1899763-8.1904745-.7999004-12.3107132 0-12.50901862 2.6630707-20.49154128 14.9591959-17.83103297 27.4665821 0 .1999751.09000521.3899515.13000753.5799278 1.53095263 6.1183424 5.7474381 11.2161624 11.47066454 13.8682744 3.0601773 1.389827 8.0004635 2.739659 11.4406628 2.56968 3.850223-.189976 6.3203661-3.799527 8.8505127-6.319214 12.720737-12.6917535 25.518145-25.2901858 38.3922242-37.7952963zm14.9208644-14.9981337c-6.0703517-6.2692198-11.9506924-12.728416-18.0010429-18.9976359-4.6802711-4.7994028-9.6205573-11.0886201-16.0009269-13.6982954-11.5406686-4.7394102-25.4414739 2.129735-29.3817022 13.7182929-1.9696811 5.9028554-1.5201968 12.3454873 1.2500724 17.9177703 1.3100759 2.6396716 3.4802016 6.0692448 6.0703517 7.5790569 2.8001622 1.6397959 6.7203893.9098868 9.8305695.9198855 8.7805087.039995 17.5510168.039995 26.3115243 0 3.3601947 0 8.8005098.9998756 11.9006894-.3599552s5.6403268-4.8593953 8.0004635-7.1091153zm9.0905266 73.750823c4.6202677 6.479193 11.4206616 11.998506 17.0009846 17.657802 4.930286 4.939386 10.00058 11.548563 16.540959 14.448202 11.690677 5.189354 26.431531-1.309837 30.331757-13.478323 1.837741-5.601344 1.421655-11.698048-1.160067-16.997884-1.348549-2.738421-3.252355-5.166268-5.590324-7.129113-3.160183-2.439697-7.000406-1.809775-10.780625-1.809775-8.450489 0-16.890978 0-25.341468-.069991-3.510203 0-9.570554-1.099863-12.910748.059992-3.0701777 1.159856-5.7903353 5.129362-8.0904686 7.31909zm-3.5402051 5.77928-15.5609015 14.588185c-4.7002723 4.429449-8.8305115 6.759159-7.560438 13.708294 1.8749727 9.902226 10.2216671 17.276264 20.281175 17.91777 10.0005793.689915 19.0011012-6.319213 22.6813142-15.34809.910052-2.279716 2.370137-5.879268 1.590092-8.338962s-4.270247-4.829399-6.000348-6.569182c-5.140298-5.33267-10.2839288-10.64201-15.4308937-15.928018zm-.570033-88.1890254 13.4707807-13.1783601c2.260131-2.2197238 5.660328-4.6094264 7.360426-7.2790942 1.340078-2.08974.940055-4.6594202.530031-6.9991291-1.820106-10.70866738-12.000695-19.0876247-23.0013327-17.99776032-9.8305695.99987557-18.2310562 8.92888889-20.6211947 18.41770812-1.6000927 6.4591962 2.6701547 8.75891 7.0904108 12.8983949 5.0602932 4.7327444 10.1172528 9.45549 15.1708789 14.1682369z" fill="#FC5656"></path></svg></div></a> \n                <a href="https://github.com/RomainNeup/" class="has-text-dark"><div class="h-4 w-4 text-[#f5f5f5]"><i class="fab fa-github"></i></div></a> \n                <a href="https://www.linkedin.com/in/romain-neuplanche/"><div class="h-4 w-4 text-[#0077b5]"><i class="fab fa-linkedin-in"></i></div></a></div></div>',w(r,"class","h-48 w-48"),w(l,"class","text-xl font-bold"),w(a,"class","font-extralight"),w(p,"class","flex space-x-2"),w(s,"class","flex flex-col justify-between py-8"),w(n,"class","col-span-2 flex space-x-8 bg-secondary text-primary rounded-lg"),w(j,"class","flex flex-col justify-between bg-secondary text-primary rounded-lg p-8"),w(e,"class","grid gap-16 grid-cols-1 md:grid-cols-3 w-full")},m(t,h){g(t,e,h),$(e,n),$(n,r),$(n,o),$(n,s),$(s,l),$(s,i),$(s,a),$(s,c),$(s,p),I(u,p,null),$(p,f),I(d,p,null),$(p,m),I(x,p,null),$(p,b),I(k,p,null),$(e,N),$(e,j),P=!0},p(t,[e]){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),u.$set(n);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),d.$set(r);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),x.$set(o);const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),k.$set(s)},i(t){P||(F(u.$$.fragment,t),F(d.$$.fragment,t),F(x.$$.fragment,t),F(k.$$.fragment,t),P=!0)},o(t){L(u.$$.fragment,t),L(d.$$.fragment,t),L(x.$$.fragment,t),L(k.$$.fragment,t),P=!1},d(t){t&&h(e),V(u),V(d),V(x),V(k)}}}class yt extends W{constructor(t){super(),G(this,t,null,xt,l,{})}}var bt=[{title:"Instalike PWA",text:"Pour Epitech, nous devions réaliser une Progressive Web App. Nous avons réalisé une application de partage de photos. Nous avons utilisé Vue.Js pour le front-end et Express.Js pour le back-end. J'etait responsable du front-end.",tags:[{name:"Vue.Js",color:"is-link"},{name:"Typescript",color:"is-primary"},{name:"Tailwind",color:"is-primary"}],link:"https://instalike.online/",company:"Epitech",image:"assets/images/instalike.svg"},{title:"Export de données",text:"Pendant cette courte mission de 12 jours, j'ai du exporter des données présente dans une application Typescript vers un format précis en JSON et en Excel. J'ai du également transformer une application C# en Typescript.",tags:[{name:"Typescript",color:"is-primary"},{name:"C#",color:"is-link"},{name:"Vue.Js",color:"is-primary"}],link:"https://v2.mapview.fr/",company:"ISAAN",image:"assets/images/isaan.png"},{title:"Marketplace dentaire",text:"Durant 1 mois, j'ai realisé le front-end du back-office, l'integration du systeme de mail ainsi que la connexion aux API Shopify et Prestashop pour gerer l'import de commande et la prise de commande.",tags:[{name:"React.Js",color:"is-primary"},{name:"Node.Js",color:"is-info"},{name:"Tailwind",color:"is-primary"},{name:"GCP",color:"is-success"}],link:"https://www.okab.io/",company:"Okab",image:"assets/images/okab.png"},{title:"Solution d'état civile",text:"Durant 1 an et demi j'ai été chargé de developper des composant afin de créer une application web permettant de gérer l'état civile d'un pays.",tags:[{name:"React.Js",color:"is-primary"},{name:"Java",color:"is-info"}],link:"https://test.com",company:"Digitech",image:"assets/images/digitech.jpeg"},{title:"Générateur de PDF",text:"La mission consistait à créer un générateur de PDF grâce à Puppeteer et NodeJS. J'ai également deployé la solution sur Azure.",tags:[{name:"Javascript",color:"is-primary"},{name:"Node.Js",color:"is-info"},{name:"Puppeteer",color:"is-link"},{name:"Azure",color:"is-success"}],company:"Adecco Group",image:"assets/images/adecco.png",link:"https://creation-cv.adecco.fr/"},{title:"Traduction automatique",text:"Lors de cette mission, j'ai réaliser un outil de traduction de fichier json, xml et js à l'aide de Node.Js, Electron et l'API de Deepl.",tags:[{name:"Node.Js",color:"is-info"},{name:"Electron",color:"is-link"},{name:"Bootstrap",color:"is-primary"}],company:"Oxatis",image:"assets/images/oxatis.png"}];function vt(t){let e,n,r;return{c(){e=y("div"),n=y("h2"),r=b(t[1]),w(n,"class","text-5xl font-semibold mb-12"),w(e,"class","w-full")},m(t,o){g(t,e,o),$(e,n),$(n,r)},p(t,e){2&e&&k(r,t[1])},d(t){t&&h(e)}}}function wt(t){let e,n,r,o,s=!!t[1]&&vt(t);const l=t[4].default,i=p(l,t,t[3],null);return{c(){e=y("div"),s&&s.c(),n=v(),i&&i.c(),w(e,"class",r="flex py-16 md:py-48 px-8 md:px-96 align-middle items-center "+t[0]),w(e,"id",t[2])},m(t,r){g(t,e,r),s&&s.m(e,null),$(e,n),i&&i.m(e,null),o=!0},p(t,[a]){t[1]?s?s.p(t,a):(s=vt(t),s.c(),s.m(e,n)):s&&(s.d(1),s=null),i&&i.p&&(!o||8&a)&&d(i,l,t,t[3],o?f(l,t[3],a,null):m(t[3]),null),(!o||1&a&&r!==(r="flex py-16 md:py-48 px-8 md:px-96 align-middle items-center "+t[0]))&&w(e,"class",r),(!o||4&a)&&w(e,"id",t[2])},i(t){o||(F(i,t),o=!0)},o(t){L(i,t),o=!1},d(t){t&&h(e),s&&s.d(),i&&i.d(t)}}}function kt(t,e,n){let{$$slots:r={},$$scope:o}=e,{className:s}=e,{title:l}=e,{id:i}=e;return t.$$set=t=>{"className"in t&&n(0,s=t.className),"title"in t&&n(1,l=t.title),"id"in t&&n(2,i=t.id),"$$scope"in t&&n(3,o=t.$$scope)},[s,l,i,o,r]}class Nt extends W{constructor(t){super(),G(this,t,kt,wt,l,{className:0,title:1,id:2})}}function jt(t,e,n){const r=t.slice();return r[3]=e[n],r}function Pt(e){let n,r,o,s,l,i,a;return n=new et({props:{title:e[1]?"Bonjour 👋":"Bonsoir 💤",subtitle:e[1]?"Moi c'est Romain, developpeur full-stack\nEt si on travaillait ensemble ? 🤝":"Moi c'est Romain, developpeur full-stack\nOn peut se parler demain ? 😴",className:e[1]?"is-light":"is-dark"}}),{c(){H(n.$$.fragment),r=v(),o=y("img"),l=v(),i=y("a"),i.innerHTML='<i class="fa-solid fa-chevron-down fa-3x"></i>',c(o.src,s=e[1]?"assets/images/apple-pp.png":"assets/images/apple-pp-sleep.png")||w(o,"src",s),w(o,"alt","Profile Romain"),w(o,"class","h-64 w-64"),w(i,"href","#projects"),w(i,"class","absolute bottom-0 left-1/2 border border-secondary p-4 rounded-full animate-bounce mb-4")},m(t,e){I(n,t,e),g(t,r,e),g(t,o,e),g(t,l,e),g(t,i,e),a=!0},p:t,i(t){a||(F(n.$$.fragment,t),a=!0)},o(t){L(n.$$.fragment,t),a=!1},d(t){V(n,t),t&&h(r),t&&h(o),t&&h(l),t&&h(i)}}}function _t(t){let n,r;const o=[t[3]];let s={};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new dt({props:s}),{c(){H(n.$$.fragment)},m(t,e){I(n,t,e),r=!0},p(t,e){const r=0&e?function(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const l=t[s],i=e[s];if(i){for(const t in l)t in i||(r[t]=1);for(const t in i)o[t]||(n[t]=i[t],o[t]=1);t[s]=i}else for(const t in l)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}(o,[(s=t[3],"object"==typeof s&&null!==s?s:{})]):{};var s;n.$set(r)},i(t){r||(F(n.$$.fragment,t),r=!0)},o(t){L(n.$$.fragment,t),r=!1},d(t){V(n,t)}}}function Jt(t){let e,n,r=bt,o=[];for(let e=0;e<r.length;e+=1)o[e]=_t(jt(t,r,e));const s=t=>L(o[t],1,1,(()=>{o[t]=null}));return{c(){e=y("div");for(let t=0;t<o.length;t+=1)o[t].c();w(e,"class","grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3")},m(t,r){g(t,e,r);for(let t=0;t<o.length;t+=1)o[t].m(e,null);n=!0},p(t,n){if(0&n){let l;for(r=bt,l=0;l<r.length;l+=1){const s=jt(t,r,l);o[l]?(o[l].p(s,n),F(o[l],1)):(o[l]=_t(s),o[l].c(),F(o[l],1),o[l].m(e,null))}for(B(),l=r.length;l<o.length;l+=1)s(l);O()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)F(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)L(o[t]);n=!1},d(t){t&&h(e),x(o,t)}}}function Et(t){let e,n;return e=new yt({}),{c(){H(e.$$.fragment)},m(t,r){I(e,t,r),n=!0},i(t){n||(F(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function Tt(e){let n,r,o;return{c(){n=y("p"),n.textContent=`© ${e[0]}, Romain Neuplanche`,r=v(),o=y("p"),o.textContent="Fait à Paris avec ♥︎"},m(t,e){g(t,n,e),g(t,r,e),g(t,o,e)},p:t,d(t){t&&h(n),t&&h(r),t&&h(o)}}}function At(t){let e,n,r,o,s,l,i,a,c,p;return e=new Y({}),r=new Nt({props:{className:"bg-gradient-to-b from-primary via-primary/50 to-primary/20 text-secondary justify-between min-h-screen",id:"title",$$slots:{default:[Pt]},$$scope:{ctx:t}}}),s=new Nt({props:{className:"bg-gradient-to-t from-primary via-primary/50 to-primary/20 text-secondary relative flex-col min-h-screen",title:"Projets",id:"projects",$$slots:{default:[Jt]},$$scope:{ctx:t}}}),i=new Nt({props:{className:"bg-gradient-to-b from-primary via-primary/50 to-primary/20 text-secondary flex-col justify-center",title:"À propos",id:"about",$$slots:{default:[Et]},$$scope:{ctx:t}}}),c=new Nt({props:{className:"bg-gradient-to-t from-primary via-primary/50 to-primary/20 text-secondary flex justify-between",id:"footer",$$slots:{default:[Tt]},$$scope:{ctx:t}}}),{c(){H(e.$$.fragment),n=v(),H(r.$$.fragment),o=v(),H(s.$$.fragment),l=v(),H(i.$$.fragment),a=v(),H(c.$$.fragment)},m(t,u){I(e,t,u),g(t,n,u),I(r,t,u),g(t,o,u),I(s,t,u),g(t,l,u),I(i,t,u),g(t,a,u),I(c,t,u),p=!0},p(t,[e]){const n={};64&e&&(n.$$scope={dirty:e,ctx:t}),r.$set(n);const o={};64&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const l={};64&e&&(l.$$scope={dirty:e,ctx:t}),i.$set(l);const a={};64&e&&(a.$$scope={dirty:e,ctx:t}),c.$set(a)},i(t){p||(F(e.$$.fragment,t),F(r.$$.fragment,t),F(s.$$.fragment,t),F(i.$$.fragment,t),F(c.$$.fragment,t),p=!0)},o(t){L(e.$$.fragment,t),L(r.$$.fragment,t),L(s.$$.fragment,t),L(i.$$.fragment,t),L(c.$$.fragment,t),p=!1},d(t){V(e,t),t&&h(n),V(r,t),t&&h(o),V(s,t),t&&h(l),V(i,t),t&&h(a),V(c,t)}}}function Ct(t){const e=(new Date).getHours();return[(new Date).getFullYear(),e>4&&e<18]}return new class extends W{constructor(t){super(),G(this,t,Ct,At,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
