_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{OooO:function(e,t,n){},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("nOHt"),i=n("YFqc"),c=n.n(i),l=(n("OooO"),n("dnX5")),u=o.a.createElement;t.default=function(){return Object(a.useRouter)(),u("div",{id:"hpg"},u(l.a,null),u("div",{className:"hero"},u("h1",null,"Sell your products with the global, integrated payment network"),u("p",null,"A powerful micro e-commerce management software solution for social media users/channels that can embed your store with a single short url link."),u("p",null,"Compatible with cryptocurrency ($XRP) or traditional credit cards through PayID."),u("p",null,"It's that simple."),u(c.a,{href:"/register"},u("a",{className:"bbtn"},"Get Started")),u("br",null)),u("a",{href:"https://payid.org"},u("img",{className:"footerImg",src:"/pay_id.png"})))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var a,i=o(n("q1tI")),c=n("g/15"),l=n("nOHt"),u=n("elyg");var s=new Map,f=window.IntersectionObserver,p={};var d=function(e,t){var n=a||(f?a=new f((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function h(e,t,n,r){e.prefetch(t,n,r).catch((function(e){0})),p[t+"%"+n]=!0}function v(e,t,n,r,o,a,i){var l=e.currentTarget,u=l.nodeName,s=l.target;"A"===u&&(s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)||function(e){var t=(0,c.getLocationOrigin)();return new URL(e,t).origin===t}(n)&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}var g=function(e){var t=!1!==e.prefetch,n=i.default.useState(),o=r(n,2),a=o[0],c=o[1],s=(0,l.useRouter)(),g=s&&s.pathname||"/",m=i.default.useMemo((function(){var t=(0,u.resolveHref)(g,e.href);return{href:t,as:e.as?(0,u.resolveHref)(g,e.as):t}}),[g,e.href,e.as]),w=m.href,y=m.as;i.default.useEffect((function(){if(t&&f&&a&&a.tagName&&!p[w+"%"+y])return d(a,(function(){h(s,w,y)}))}),[t,a,w,y,s]);var b=e.children,E=e.replace,N=e.shallow,_=e.scroll;"string"===typeof b&&(b=i.default.createElement("a",null,b));var O=i.Children.only(b),R={ref:function(e){e&&c(e),O&&"object"===typeof O&&O.ref&&("function"===typeof O.ref?O.ref(e):"object"===typeof O.ref&&(O.ref.current=e))},onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||v(e,s,w,y,E,N,_)}};return t&&(R.onMouseEnter=function(e){O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),h(s,w,y,{priority:!0})}),!e.passHref&&("a"!==O.type||"href"in O.props)||(R.href=(0,u.addBasePath)(y)),i.default.cloneElement(O,R)};t.default=g},dnX5:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=(n("OooO"),n("YFqc")),i=n.n(a),c=o.a.createElement;t.a=function(){return c("div",{id:"navbar"},c("ul",null,c("li",{className:"logos"},c(i.a,{href:"/"},c("h2",null,"Sponge"))),c("li",{className:"spec"},c(i.a,{href:"/about"},c("a",null,"Features"))),c("li",{className:"spec"},c(i.a,{href:"/login"},c("a",null,"Login"))),c("li",{className:"spec spbtn"},c(i.a,{href:"/register"},c("a",null,"Get Started")))))}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2,3]]]);