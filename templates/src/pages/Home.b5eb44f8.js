webpackJsonp([0],{150:function(e,t,n){!function(t,l){e.exports=l(n(1))}(0,function(e){"use strict";function t(e){return e.replace(/(-|:)(.)/g,function(e,t,n){return n.toUpperCase()})}function n(e){var n={};return e.split(";").filter(function(e){return""!==e.trim()}).forEach(function(e){var l,r=e.split(":");if(r.length>1){var a=function(e){return/^-ms-/.test(e)&&(e=e.substr(1)),t(e)}(r[0].trim()),i=(l=r.slice(1).join(":").trim(),/^\d+$/.test(l)?Number(l):l.replace(/'/g,'"'));n[a]=i}}),n}function l(o,d,f){var c,s=f.map._;if(o.nodeType===a.COMMENT)return null;if(o.nodeType===a.TEXT){var p=(c=o.textContent,u.innerHTML=c,u.textContent);return s?s(p):p}for(var m=o.tagName.toLowerCase(),g=f.map[m],h={},_=0;_<o.attributes.length;_++){var y=o.attributes[_].name,b=o.attributes[_].value;h[y]=b}h.key=d.toString();for(var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce(function(l,a){if(/^on.*/.test(a))return l;var i=a;/^(data|aria)-/.test(a)||(i=t(a));var u=r[i]||i;return l[u]="style"===u?n(e.style):e[a],l},{})}(h),x=[],w=0;w<o.childNodes.length;w++){var M=o.childNodes[w],P=d+"."+w;if(!(i.indexOf(m)>-1&&M.nodeType===a.TEXT&&(M.textContent=M.textContent.trim(),""===M.textContent))){var E=l(M,P,f);null!==E&&x.push(E)}}return"style"!==m||g||s?(0===x.length&&(x=null),g?e.createElement(g,v,x):s?s(m,v,x):e.createElement(m,v,x)):(v.dangerouslySetInnerHTML={__html:x[0]},e.createElement(m,v,null))}e=e&&e.hasOwnProperty("default")?e.default:e;var r={for:"htmlFor",class:"className",acceptcharset:"acceptCharset",accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",classid:"classID",classname:"className",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",datetime:"dateTime",enctype:"encType",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},a={ELEMENT:1,TEXT:3,COMMENT:8},i=["table","tbody","thead","tfoot","tr"],u=document.createElement("div");return function(e){var t={map:(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).map||{}},n=document.createElement("div");n.innerHTML=e.trim();for(var r=[],a=0;a<n.childNodes.length;a++)r.push(n.childNodes[a]);var i=r.map(function(e,n){return l(e,n,t)}).filter(function(e){return null!==e});return 1===i.length?i[0]:i}})},151:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(160);Object.defineProperty(t,"Divider",{enumerable:!0,get:function(){return l(r).default}});var a=n(162);Object.defineProperty(t,"H1",{enumerable:!0,get:function(){return l(a).default}});var i=n(164);Object.defineProperty(t,"P",{enumerable:!0,get:function(){return l(i).default}});var u=n(166);Object.defineProperty(t,"Section",{enumerable:!0,get:function(){return l(u).default}}),Object.defineProperty(t,"SectionInner",{enumerable:!0,get:function(){return u.SectionInner}});var o=n(168);Object.defineProperty(t,"Span",{enumerable:!0,get:function(){return l(o).default}})},152:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(172);Object.defineProperty(t,"Subtitle",{enumerable:!0,get:function(){return l(r).default}});var a=n(173);Object.defineProperty(t,"Title",{enumerable:!0,get:function(){return l(a).default}})},153:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=l(r),i=n(29),u=n(28),o=n(154),d=l(o),f=n(57);t.default=(0,u.withRouteData)(function(e){var t=e.intro,n=e.personal,l=e.home,r=e.technology;return a.default.createElement(d.default,null,a.default.createElement(i.Helmet,null,a.default.createElement("title",null,l.meta.pageTitle),a.default.createElement("meta",{name:"description",content:l.meta.pageDescription})),a.default.createElement(f.Introduction,{intro:t}),a.default.createElement(f.Technology,{technology:r}),a.default.createElement(f.Personal,{personal:n}))})},154:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=l(r),i=n(2),u=n(155),o=l(u),d=n(157),f=l(d),c={children:i.node},s=function(e){var t=e.children;return a.default.createElement("main",null,a.default.createElement(o.default,null),t,a.default.createElement(f.default,null))};s.propTypes=c,t.default=s},155:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(156);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l(r).default}})},156:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=l(r),i=n(53),u=l(i),o=n(55),d=l(o),f=u.default.nav.withConfig({displayName:"header__StyledHeader"})(["background-color:",";height:16px;width:100%;padding:5px 10px;"],d.default.blue),c=u.default.span.withConfig({displayName:"header__Square"})(["position:relative;width:25px;height:25px;display:flex;align-items:center;justify-content:center;&:before{position:absolute;top:0;content:'';background-color:white;width:100%;height:100%;border-radius:50%;}&:after{position:absolute;content:'';background-color:#add1ec;width:70%;height:85%;border-radius:50%;}"]),s=function(){return a.default.createElement(f,null,a.default.createElement(c,null))};t.default=s},157:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(158);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l(r).default}})},158:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=l(r),i=n(53),u=l(i),o=n(55),d=l(o),f=n(54),c=l(f),s=u.default.footer.withConfig({displayName:"footer__StyledFooter"})(["display:flex;align-items:center;margin-top:24px;padding-left:16px;width:100%;height:40px;background-color:"," ",""],d.default.blue,(0,c.default)("medium","\n    padding-left: 40px;\n  ")),p=u.default.a.withConfig({displayName:"footer__A"})(["margin-left:auto;height:16px;width:16px;margin-right:16px;",""],(0,c.default)("medium","\n    margin-right: 40px;\n  ")),m=u.default.span.withConfig({displayName:"footer__GithubLogo"})(["position:relative;display:block;width:100%;height:100%;&:after{content:'';position:absolute;top:0;height:100%;width:100%;background-size:contain;background-image:url('logos/GitHub-Mark-32px.png');}"]),g=function(){return a.default.createElement(s,null,"© Malcolm Laing 2018",a.default.createElement(p,{href:"https://github.com/montezume/personal",target:"_BLANK"},a.default.createElement(m,null)))};t.default=g},159:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=l(r),i=n(150),u=l(i),o=n(53),d=l(o),f=n(151),c=d.default.div.withConfig({displayName:"Introduction__LineCtn"})(["display:flex;justify-content:center;align-items:center;"]),s=d.default.div.withConfig({displayName:"Introduction__Block"})(["p{margin:12px 0;}"]),p=d.default.span.withConfig({displayName:"Introduction__Line"})(["position:relative;flex:1;margin:8px 24px 0 24px;flex:1;&:after{content:'';top:4px;left:0;position:absolute;width:100%;height:2px;background-color:black;}"]),m=function(e){var t=e.intro;return a.default.createElement(f.Section,null,a.default.createElement(f.SectionInner,null,a.default.createElement(f.H1,null,a.default.createElement(c,null,a.default.createElement("span",null,t.content.header),a.default.createElement(p,null))),a.default.createElement(s,null,(0,u.default)(t.contents))))};t.default=m},160:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(161);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l(r).default}})},161:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n(53),r=function(e){return e&&e.__esModule?e:{default:e}}(l),a=r.default.span.withConfig({displayName:"divider__Divider"})(["display:block;width:200px;max-width:50%;border:1px solid black;margin:12px 0;"]);t.default=a},162:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(163);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l(r).default}})},163:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(53),a=l(r),i=n(54),u=l(i),o=a.default.h1.withConfig({displayName:"h1__StyledH1"})(["font-size:40px "," ",""],(0,u.default)("small","\n    font-size: 40px;\n  "),(0,u.default)("medium","\n    font-size: 50px;\n  "));t.default=o},164:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(165);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l(r).default}})},165:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n(53),r=function(e){return e&&e.__esModule?e:{default:e}}(l),a=r.default.p.withConfig({displayName:"p__StyledP"})(["margin-bottom:10px;"]);t.default=a},166:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(167);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l(r).default}}),Object.defineProperty(t,"SectionInner",{enumerable:!0,get:function(){return r.StyledSectionInner}})},167:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.StyledSectionInner=void 0;var r=n(53),a=l(r),i=n(54),u=l(i),o=a.default.section.withConfig({displayName:"section__StyledSection"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;"]);t.StyledSectionInner=a.default.div.withConfig({displayName:"section__StyledSectionInner"})(["max-width:730px;padding:60px 40px 0 40px;",""],(0,u.default)("medium","\n    padding: 100px 30px 60px 30px;\n  "));t.default=o},168:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(169);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l(r).default}})},169:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(53),a=l(r),i=n(2),u=n(170),o=n(55),d=l(o),f=n(56),c=l(f),s=n(54),p=l(s),m=a.default.span.withConfig({displayName:"span__Span"})(["color:",";font-weight:",";font-size:",";"," ",""],function(e){return d.default[e.color]},function(e){return c.default[e.weight]},function(e){return e.size.small},function(e){return(0,p.default)("small","\n    font-size: "+(e.size.medium||e.size.small)+";\n  ")},function(e){return(0,p.default)("large","\n    font-size: "+(e.size.large||e.size.medium||e.size.small)+";\n  ")});m.propTypes={color:u.colorType,weight:u.fontType,size:(0,i.shape)({small:i.string,medium:i.string,large:i.string})},m.defaultProps={color:"black",weight:"regular",size:{small:"16px",large:"20px"}},t.default=m},170:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.imageType=t.fontType=t.colorType=void 0;var r=n(2),a=n(55),i=l(a),u=n(56),o=l(u),d=(0,r.oneOf)(Object.keys(i.default)),f=(0,r.oneOf)(o.default.weights),c=(0,r.shape)({src:r.string,alt:r.string,width:r.number,height:r.number});t.colorType=d,t.fontType=f,t.imageType=c},171:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=l(r),i=n(150),u=l(i),o=n(53),d=l(o),f=n(151),c=n(152),s=n(174),p=n(54),m=l(p),g=d.default.div.withConfig({displayName:"Personal__Block"})(["margin-top:24px;p{margin:12px 0;}"]),h=d.default.img.withConfig({displayName:"Personal__Img"})(["max-width:100%;display:block;"]),_=d.default.section.withConfig({displayName:"Personal__Sect"})(["display:flex;max-width:1200px;margin:0 auto;width:100%;flex-direction:column;padding:40px;",""],(0,m.default)("medium","\n    flex-direction: row;\n\n  ")),y=d.default.div.withConfig({displayName:"Personal__Left"})([""," ",""],(0,m.default)("medium","\n    width: 400px;\n  "),(0,m.default)("large","\n    width: 500px;\n  ")),b=d.default.div.withConfig({displayName:"Personal__ImageSection"})(["",""],(0,m.default)("medium","\n  flex: 1;\n")),v=function(e){var t=e.personal;return a.default.createElement(_,null,a.default.createElement(y,null,a.default.createElement(c.Subtitle,null,t.content.subtitle),a.default.createElement(c.Title,null,t.content.header),a.default.createElement(f.Divider,null),a.default.createElement(f.Span,{size:{small:"20px",medium:"30px"}},t.content.description),a.default.createElement(g,null,(0,u.default)(t.contents))),a.default.createElement(b,null,a.default.createElement(s.Container,null,a.default.createElement(s.Grid,null,t.content.images.map(function(e,t){return a.default.createElement(s.Cell,{key:t},a.default.createElement(h,{src:e.src,alt:e.description,size:e.size}))})))))};t.default=v},172:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(53),a=l(r),i=n(55),u=l(i),o=n(56),d=l(o),f=a.default.h3.withConfig({displayName:"subtitle__Subtitle"})(["color:",";font-weight:",";font-size:14px;letter-spacing:3px;text-transform:uppercase;margin-bottom:5px;line-height:21px;"],u.default.black,d.default.bold);t.default=f},173:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(53),a=l(r),i=n(56),u=l(i),o=n(55),d=l(o),f=n(54),c=l(f),s=a.default.h2.withConfig({displayName:"title__Title"})(["color:",";font-weight:",";font-size:52px;letter-spacing:2px;text-transform:uppercase;",""],d.default.black,u.default.light,(0,c.default)("small","\n    font-size: 80px;\n  "));t.default=s},174:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Cell=t.Container=t.Grid=void 0;var r=n(53),a=l(r),i=n(54),u=l(i);t.Grid=a.default.div.withConfig({displayName:"image-grid__Grid"})(["display:flex;flex-wrap:wrap;flex-direction:row;"]),t.Container=a.default.div.withConfig({displayName:"image-grid__Container"})(["margin:0 auto;max-width:1200px;padding:0;"]),t.Cell=a.default.div.withConfig({displayName:"image-grid__Cell"})(["display:flex;flex-direction:column;margin:0.5rem;width:calc(50% - 1rem);&:nth-child(1n){justify-content:flex-end;margin-bottom:0;}&:nth-child(2n){justify-content:flex-end;}&:nth-child(3n),&:nth-child(4n){justify-content:flex-start;}",""],(0,u.default)("large","\n    margin-right: 0;\n    width: calc(50% - 1rem);\n  "))},175:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=l(r),i=n(53),u=l(i),o=n(150),d=l(o),f=n(151),c=n(152),s=n(54),p=l(s),m=u.default.div.withConfig({displayName:"Technology__Image"})(["background-image:url('","');background-size:cover;height:450px;",""],function(e){return e.image},(0,p.default)("medium","\n    margin-top: 18px;\n  ")),g=u.default.div.withConfig({displayName:"Technology__TechStackList"})(["dt{margin:8px 0;}dd{margin-top:8px;margin-left:0;}"]),h=u.default.section.withConfig({displayName:"Technology__Grid"})(["display:flex;min-height:450px;padding:10px 40px;margin:6px 0;flex-direction:column;",""],(0,p.default)("medium","\n    flex-direction: row-reverse;\n    margin: 20px auto;\n    max-width: 1200px;\n\n    padding: 0;\n    // more stuff\n  ")),_=u.default.div.withConfig({displayName:"Technology__Column"})(["width:100%;"," ",""],function(e){return e.left&&"\n    "+(0,p.default)("medium","\n      padding-left: 40px;\n\n\n    ")+"\n  "},(0,p.default)("medium","\n    width: 50%;\n\n\n  ")),y=function(e){var t=e.technology;return a.default.createElement(h,null,a.default.createElement(_,{left:!0},a.default.createElement(c.Title,null,t.content.header),a.default.createElement(c.Subtitle,null,t.content.subtitle),a.default.createElement(f.Divider,null),a.default.createElement(g,null,(0,d.default)(t.contents))),a.default.createElement(_,null,a.default.createElement(m,{image:t.content.image.src})))};t.default=y},57:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(153);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l(r).default}});var a=n(159);Object.defineProperty(t,"Introduction",{enumerable:!0,get:function(){return l(a).default}});var i=n(171);Object.defineProperty(t,"Personal",{enumerable:!0,get:function(){return l(i).default}});var u=n(175);Object.defineProperty(t,"Technology",{enumerable:!0,get:function(){return l(u).default}})}});