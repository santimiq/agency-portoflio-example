(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(e,t,n){"use strict";n.r(t);n("Z2Ku"),n("L9s1");var i=n("q1tI"),o=n.n(i),r=n("Bl7J"),a=n("vOnD"),l=n("ZMKu"),s=a.default.div.withConfig({displayName:"homeStyles__Banner",componentId:"hqtwjy-0"})(["background:",";height:100vh;width:100%;position:relative;margin-bottom:296px;"],(function(e){return e.theme.background})),c=a.default.div.withConfig({displayName:"homeStyles__Video",componentId:"hqtwjy-1"})(["height:100vh;width:100%;video{object-fit:cover;}"]),d=a.default.canvas.withConfig({displayName:"homeStyles__Canvas",componentId:"hqtwjy-2"})(["position:absolute;top:0;left:0;height:100%;display:block;"]),u=Object(a.default)(l.b.h1).withConfig({displayName:"homeStyles__BannerTitle",componentId:"hqtwjy-3"})(["position:absolute;bottom:-100px;left:-18px;color:",";pointer-events:none;"],(function(e){return e.theme.text})),h=Object(a.default)(l.b.span).withConfig({displayName:"homeStyles__Headline",componentId:"hqtwjy-4"})(["display:block;font-size:15rem;font-weight:900;line-height:.76;"]),p=Object(a.default)(l.b.div).withConfig({displayName:"homeStyles__HomeContentSection",componentId:"hqtwjy-5"})(["margin-bottom:200px;"]),f=a.default.h2.withConfig({displayName:"homeStyles__Content",componentId:"hqtwjy-6"})(["width:53%;font-size:1.3rem;font-weight:400;margin-left:124px;color:",";"],(function(e){return e.theme.text})),m=Object(a.default)(l.b.div).withConfig({displayName:"homeStyles__HomeFeaturedSection",componentId:"hqtwjy-7"})(["margin-bottom:200px;position:relative;a{margin-bottom:200px;position:relative;display:block;}"]),g=Object(a.default)(l.b.div).withConfig({displayName:"homeStyles__FeaturedContent",componentId:"hqtwjy-8"})(["height:480px;width:100%;padding:56px 124px;box-sizing:border-box;color:",";h3{font-size:1.4rem;}.meta{display:flex;h4{&:last-child{margin-left:1rem;}}}.featured-title{position:absolute;bottom:-128px;font-size:7rem;font-weight:900;line-height:90px;margin:0;.arrow{width:120px;height:80px;display:block;position:relative;overflow:hidden;svg{position:absolute;top:16px;left:-48px;width:108px;path{fill:",";}}}}"],(function(e){return e.theme.text}),(function(e){return e.theme.text})),v=a.default.div.withConfig({displayName:"homeStyles__FeaturedVideo",componentId:"hqtwjy-9"})(["position:absolute;z-index:-1;width:100%;height:480px;top:0;display:block;overflow:hidden;"]),b=a.default.div.withConfig({displayName:"homeStyles__FeatureProjects",componentId:"hqtwjy-10"})(["margin-top:200px;button{background:",";color:white;position:relative;padding:20px;display:block;text-align:left;font-size:1.4rem;line-height:1;font-weight:600;border:none;span{margin-right:100px;display:block;}&:before,&:after{content:'';position:absolute;top:50%;right:20px;width:35px;height:7px;display:block;background:#fff;transform:translateY(-50%);}&:before{margin-top:-8px;}&:after{margin-top:8px;}}"],(function(e){return e.theme.red})),w=Object(a.default)(l.b.div).withConfig({displayName:"homeStyles__HomeAboutSection",componentId:"hqtwjy-11"})(["margin-bottom:200px;"]),y=a.default.div.withConfig({displayName:"homeStyles__About",componentId:"hqtwjy-12"})(["width:100%;h2{width:60%;font-size:1.3rem;font-weight:400;margin-left:124px;color:",";}p{max-width:440px;font-size:1rem;line-height:1.6rem;margin-left:124px;color:",";}"],(function(e){return e.theme.text}),(function(e){return e.theme.text})),x=a.default.div.withConfig({displayName:"homeStyles__Services",componentId:"hqtwjy-13"})([""]),E=Object(a.default)(l.b.div).withConfig({displayName:"homeStyles__AccordionHeader",componentId:"hqtwjy-14"})(["width:100%;color:",";height:32px;display:flex;align-items:center;font-weight:600;font-size:1.15rem;margin:8px 0;"],(function(e){return e.theme.red})),j=a.default.div.withConfig({displayName:"homeStyles__AccordionIcon",componentId:"hqtwjy-15"})(["display:flex;align-items:center;height:100%;margin-right:8px;span{width:16px;height:4px;background:",";transition:.1 ease-in-out;}"],(function(e){return e.theme.red})),O=Object(a.default)(l.b.div).withConfig({displayName:"homeStyles__AccordionContent",componentId:"hqtwjy-16"})(["overflow:hidden;padding-left:40px;span{width:100%;margin:8px 0;font-size:.875rem;color:",";display:block;font-weight:300;}"],(function(e){return e.theme.red}));var C=n("GOVm"),_=function(e){var t=e.onCursor,r=Object(i.useRef)(null),a=function(){function e(){return{width:window.innerWidth,height:window.innerHeight}}var t=Object(i.useState)(e),n=t[0],o=t[1];return Object(i.useEffect)((function(){function t(){o(e())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),n}(),l=Object(C.c)().currentTheme;Object(i.useEffect)((function(){var e,t,n=r.current,i=n.cloneNode(),o=i.getContext("2d"),s=n.getContext("2d"),c=!1;s.globalCompositeOperation="source-over",s.fillStyle="dark"===l?"#000000":"#ffffff",s.fillRect(0,0,a.width,a.height),n.addEventListener("mouseover",(function(i){c=!0,e=i.pageX-n.offsetLeft,t=i.pageY-n.offsetTop})),n.addEventListener("mouseup",(function(i){c=!1,e=i.pageX-n.offsetLeft,t=i.pageY-n.offsetTop})),n.addEventListener("mousemove",(function(r){if(c){o.globalCompositeOperation="source-over",s.globalCompositeOperation="destination-out";var a=r.pageX-n.offsetLeft,l=r.pageY-n.offsetTop;o.linejoin="round",o.moveTo(e,t),o.lineTo(a,l),o.closePath(),o.lineWidth=120,o.stroke(),e=a,t=l,s.drawImage(i,0,0)}}))}),[l]);var p={initial:{y:800},animate:{y:0,transition:{duration:1,ease:[.6,.05,-.01,.9]}}};return o.a.createElement(s,null,o.a.createElement(c,null,o.a.createElement("video",{height:"100%",width:"100%",loop:!0,autoPlay:!0,src:n("V0Cn")})),o.a.createElement(d,{height:a.height,width:a.width,ref:r,onMouseEnter:function(){return t("hovered")},onMouseLeave:t}),o.a.createElement(u,{variants:{initial:{y:800},animate:{y:0,transition:{staggerChildren:.2}}},initial:"initial",animate:"animate"},o.a.createElement(h,{variants:p},"DIG"),o.a.createElement(h,{variants:p},"DEEP")))};n("dZ+Y"),n("8+KV"),n("LK8F"),n("a1Th"),n("h7Nl"),n("XfO3"),n("9AAn"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("hHhE"),n("91GP"),n("HAE/");var S=function(e,t){if(!e)throw new Error("Invariant failed")};function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var V=new Map,M=new Map,L=new Map,q=0;function A(e,t,n){void 0===n&&(n={}),n.threshold||(n.threshold=0);var i=n,o=i.root,r=i.rootMargin,a=i.threshold;if(V.has(e)&&S(!1),e){var l=function(e){return e?L.has(e)?L.get(e):(q+=1,L.set(e,q.toString()),L.get(e)+"_"):""}(o)+(r?a.toString()+"_"+r:a.toString()),s=M.get(l);s||(s=new IntersectionObserver(H,n),l&&M.set(l,s));var c={callback:t,element:e,inView:!1,observerId:l,observer:s,thresholds:s.thresholds||(Array.isArray(a)?a:[a])};return V.set(e,c),s.observe(e),c}}function z(e){if(e){var t=V.get(e);if(t){var n=t.observerId,i=t.observer,o=i.root;i.unobserve(e);var r=!1,a=!1;n&&V.forEach((function(t,i){i!==e&&(t.observerId===n&&(r=!0,a=!0),t.observer.root===o&&(a=!0))})),!a&&o&&L.delete(o),i&&!r&&i.disconnect(),V.delete(e)}}}function H(e){e.forEach((function(e){var t=e.isIntersecting,n=e.intersectionRatio,i=e.target,o=V.get(i);if(o&&n>=0){var r=o.thresholds.some((function(e){return o.inView?n>e:n>=e}));void 0!==t&&(r=r&&t),o.inView=r,o.callback(r,e)}}))}var P=function(e){var t,n;function o(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return k(I(t=e.call.apply(e,[this].concat(i))||this),"state",{inView:!1,entry:void 0}),k(I(t),"node",null),k(I(t),"handleNode",(function(e){t.node&&(z(t.node),e||t.props.triggerOnce||t.setState({inView:!1,entry:void 0})),t.node=e||null,t.observeNode()})),k(I(t),"handleChange",(function(e,n){(e!==t.state.inView||e)&&t.setState({inView:e,entry:n}),t.props.onChange&&t.props.onChange(e,n)})),t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=o.prototype;return r.componentDidMount=function(){this.node||S(!1)},r.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(z(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(z(this.node),this.node=null)},r.componentWillUnmount=function(){this.node&&(z(this.node),this.node=null)},r.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,n=e.root,i=e.rootMargin;A(this.node,this.handleChange,{threshold:t,root:n,rootMargin:i})}},r.render=function(){var e=this.state,t=e.inView,n=e.entry;if(!function(e){return"function"!=typeof e.children}(this.props))return this.props.children({inView:t,entry:n,ref:this.handleNode});var o=this.props,r=o.children,a=o.as,l=o.tag,s=(o.triggerOnce,o.threshold,o.root,o.rootMargin,o.onChange,function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(o,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange"]));return Object(i.createElement)(a||l||"div",N({ref:this.handleNode},s),r)},o}(i.Component);k(P,"displayName","InView"),k(P,"defaultProps",{threshold:0,triggerOnce:!1});var T={inView:!1,entry:void 0};function D(e){void 0===e&&(e={});var t=Object(i.useRef)(),n=Object(i.useState)(T),o=n[0],r=n[1],a=Object(i.useCallback)((function(n){t.current&&z(t.current),n&&A(n,(function(t,i){r({inView:t,entry:i}),t&&e.triggerOnce&&z(n)}),e),t.current=n}),[e.threshold,e.root,e.rootMargin,e.triggerOnce]);return Object(i.useEffect)((function(){t.current||o===T||e.triggerOnce||r(T)})),[a,o.inView,o.entry]}var F=a.default.div.withConfig({displayName:"globalStyles__Container",componentId:"sc-1te1sch-0"})(["flex-grow:1;margin:0 auto;padding:0 32px;position:relative;width:auto;height:100%;@media(min-width:1024px){max-width:960px;}@media(min-width:1213px){max-width:1152px;}@media(min-width:1408px){max-width:1244px;}",""],(function(e){return e.fluid&&Object(a.css)(["padding:0;margin:0;max-width:100%;"])})),R=(a.default.div.withConfig({displayName:"globalStyles__Flex",componentId:"sc-1te1sch-1"})(["position:relative;display:flex;alig-items:center;"," "," "," ",""],(function(e){return e.spaceBetween&&Object(a.css)(["justify-content:space-between;"])}),(function(e){return e.flexEnd&&Object(a.css)(["justify-content:flex-end;"])}),(function(e){return e.alignTop&&Object(a.css)(["align-items:flex-start;"])}),(function(e){return e.noHeight&&Object(a.css)(["height:0;"])})),a.default.div.withConfig({displayName:"globalStyles__Cursor",componentId:"sc-1te1sch-2"})(["position:absolute;top:0;left:0;width:32px;height:32px;background:",";border-radius:100%;transform:translate(-50%,-50%);transition:all 0.1s ease-in-out;transition-property:width,height,border;will-change:width,height,transform,border;pointer-events:none;z-index:999;&.pointer{border:4px solid "," !important;}&.hovered{background:transparent !important;width:56px;height:56px;border:4px solid ",";}&.nav-open{background:",";}"],(function(e){return e.theme.red}),(function(e){return e.theme.text}),(function(e){return e.theme.red}),(function(e){return e.theme.text})),function(){var e=Object(l.c)(),t=D({triggerOnce:!0,rootMargin:"-100px"}),n=t[0],r=t[1];return Object(i.useEffect)((function(){r&&e.start("visible")}),[e,r]),o.a.createElement(p,{ref:n,animate:e,initial:"hidden",variants:{visible:{opacity:1,y:0,transition:{duration:.6,ease:[.6,.05,-.01,.9]}},hidden:{opacity:0,y:72}}},o.a.createElement(F,null,o.a.createElement(f,null,"Great stories dont just happen- ",o.a.createElement("br",null),"they need to be uncovered. And we dig deep to discover the Great stories that lie just below the surface. Dirt under our fingernail and all.")))}),W=n("Wbzz"),B=n("aQU0"),G=function(e){var t=e.onCursor,r=Object(i.useState)(!1),a=r[0],s=r[1],c=Object(l.c)(),d=D({triggerOnce:!0,rootMargin:"-100px"}),u=d[0],h=d[1];return Object(i.useEffect)((function(){h&&c.start("visible")}),[c,h]),o.a.createElement(m,{ref:u,animate:c,initial:"hidden",variants:{visible:{opacity:1,y:0,transition:{duration:.6,ease:[.6,.05,-.01,.9]}},hidden:{opacity:0,y:72}}},o.a.createElement(B.a,null,o.a.createElement(W.Link,null,o.a.createElement(g,{onHoverStart:function(){return s(!a)},onHoverEnd:function(){return s(!a)},onMouseEnter:function(){return t("hovered")},onMouseLeave:t},o.a.createElement(B.c,{spaceBetween:!0},o.a.createElement("h3",null,"Featured Project"),o.a.createElement(l.b.div,{transition:{duration:.6,ease:[.6,.05,-.01,.9]},animate:{opacity:a?1:0},className:"meta"},o.a.createElement("h4",null,"PEI Seafood"),o.a.createElement("h4",null,"2019"))),o.a.createElement("h2",{className:"featured-title"},"NOT ",o.a.createElement("br",null)," HUMBLE",o.a.createElement("span",{className:"arrow"},o.a.createElement(l.b.svg,{transition:{duration:.6,ease:[.6,.05,-.01,.9]},animate:{x:a?48:0},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 101 57"},o.a.createElement("path",{d:"M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z",fill:"#FFF",fillRule:"evenodd"}))))),o.a.createElement(v,null,o.a.createElement("video",{loop:!0,autoPlay:!0,src:n("xZFP")})))),o.a.createElement(B.a,null,o.a.createElement(b,null,o.a.createElement(B.c,{flexEnd:!0},o.a.createElement("button",null,o.a.createElement("span",null,"All Projects"))))))},Y=[{id:0,title:"Pre-production",results:["Creative Development","Writing","Storyboards","Art Direction","Location","Casting"]},{id:1,title:"Video production",results:["Creative Development","Writing","Storyboards","Art Direction","Location","Casting"]},{id:2,title:"Post-production",results:["Creative Development","Writing","Storyboards","Art Direction","Location","Casting"]},{id:3,title:"Audio  Post-production",results:["Creative Development","Writing","Storyboards","Art Direction","Location","Casting"]}],U=function(e){var t=e.details,n=e.expanded,r=e.setExpanded,a=e.onCursor,s=t.id===n,c=Object(i.useState)(!1),d=c[0],u=c[1],h=Object(C.c)().currentTheme;return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{onClick:function(){return r(!s&&t.id)},onMouseEnter:function(){return a("hovered")},onMouseLeave:a,onHoverStart:function(){return u(!d)},onHoverEnd:function(){return u(!d)},whileHover:{color:"dark"===h?"#ffffff":"#000000"}},o.a.createElement(j,null,o.a.createElement(l.b.span,{animate:{rotate:s||d?0:45,x:3},transition:{duration:.2,ease:[.6,.05,-.01,.9]}}),o.a.createElement(l.b.span,{animate:{rotate:s||d?0:-45,x:-3},transition:{duration:.2,ease:[.6,.05,-.01,.9]}})),t.title),o.a.createElement(O,{key:"content",animate:{height:s?"100%":"0"},transition:{duration:.8,ease:[.6,.05,-.01,.9]}},t.results.map((function(e,t){return o.a.createElement("span",{key:t},e)}))))},X=function(e){var t=e.onCursor,n=Object(l.c)(),r=D({triggerOnce:!0,rootMargin:"-100px"}),a=r[0],s=r[1];Object(i.useEffect)((function(){s&&n.start("visible")}),[n,s]);var c=Object(i.useState)(0),d=c[0],u=c[1];return o.a.createElement(w,{ref:a,animate:n,initial:"hidden",variants:{visible:{opacity:1,y:0,transition:{duration:.6,ease:[.6,.05,-.01,.9]}},hidden:{opacity:0,y:72}}},o.a.createElement(B.a,null,o.a.createElement(B.c,{alignTop:!0},o.a.createElement(y,null,o.a.createElement("h2",null,"Furrow is an integrated, full-service creative studio offering video production, creative development, and post-production services."),o.a.createElement("p",null,"Everybody’s got a story. And we don’t stop until we’ve uncovered what makes yours worth telling. Whether it’s working directly with you, an agency partner, or putting the finishing touches on something special, we’re ready to dig in and get our hands dirty—are you?")),o.a.createElement(x,null,o.a.createElement("h3",null,"Services"),Y.map((function(e,n){return o.a.createElement(U,{key:n,details:e,expanded:d,setExpanded:u,onCursor:t})}))))))};t.default=function(e){var t=Object(C.c)(),n=(t.currentTheme,t.cursorStyles),i=Object(C.b)(),a=function(e){e=n.includes(e)&&e||!1,i({type:"CURSOR_TYPE",cursorType:e})};return o.a.createElement(r.a,null,o.a.createElement(_,{onCursor:a}),o.a.createElement(R,null),o.a.createElement(G,{onCursor:a}),o.a.createElement(X,{onCursor:a}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-1d2729af70723beb332b.js.map