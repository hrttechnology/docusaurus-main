"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["81983"],{30267:function(e,t,n){n.d(t,{Z:()=>x});var i=n("85893");n("67294");var r=n("90496"),s=n("55951"),a=n("85921"),l=n("71208"),o=n("35363"),c=n("77827"),d=n("83631");function u(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}function h(){let e=(0,d.ZP)("/");return(0,i.jsx)("li",{className:"breadcrumbs__item",children:(0,i.jsx)(o.Z,{"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,i.jsx)(u,{className:"breadcrumbHomeIcon_uaSn"})})})}function m(e){let{children:t,href:n,isLast:r}=e,s="breadcrumbs__link";return r?(0,i.jsx)("span",{className:s,itemProp:"name",children:t}):n?(0,i.jsx)(o.Z,{className:s,href:n,itemProp:"item",children:(0,i.jsx)("span",{itemProp:"name",children:t})}):(0,i.jsx)("span",{className:s,children:t})}function p(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,i.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,i.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function x(){let e=(0,a.s1)(),t=(0,l.Ns)();return e?(0,i.jsx)("nav",{className:(0,r.Z)(s.k.docs.docBreadcrumbs,"breadcrumbsContainer_Wvrh"),"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,i.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,i.jsx)(h,{}),e.map((t,n)=>{let r=n===e.length-1,s="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,i.jsx)(p,{active:r,index:n,addMicrodata:!!s,children:(0,i.jsx)(m,{href:s,isLast:r,children:t.label})},n)})]})}):null}},78042:function(e,t,n){n.d(t,{Z:()=>g});var i=n("85893");n("67294");var r=n("90496"),s=n("85921"),a=n("35363"),l=n("11660"),o=n("82095"),c=n("77827"),d=n("57922");let u={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function h(e){let{href:t,children:n}=e;return(0,i.jsx)(a.Z,{href:t,className:(0,r.Z)("card padding--lg",u.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:s,description:a}=e;return(0,i.jsxs)(h,{href:t,children:[(0,i.jsxs)(d.Z,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),a&&(0,i.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:a,children:a})]})}function p(e){let{item:t}=e,n=(0,s.LM)(t),r=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,i.jsx)(m,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??r(t.items.length)}):null}function x(e){let{item:t}=e,n=(0,o.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",r=(0,s.xz)(t.docId??void 0);return(0,i.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return(0,i.jsx)(x,{item:t});case"category":return(0,i.jsx)(p,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e,n=(0,s.jA)();return(0,i.jsx)(g,{items:n.items,className:t})}function g(e){let{items:t,className:n}=e;if(!t)return(0,i.jsx)(f,{...e});let a=(0,s.MN)(t);return(0,i.jsx)("section",{className:(0,r.Z)("row",n),children:a.map((e,t)=>(0,i.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,i.jsx)(b,{item:e})},t))})}},62742:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(85893);n(67294);var r=n(77827),s=n(65773);function a(e){let{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(s.Z,{...t,subLabel:(0,i.jsx)(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(s.Z,{...n,subLabel:(0,i.jsx)(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4903:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(85893);n(67294);var r=n(90496),s=n(77827),a=n(55951),l=n(50223);function o(e){let{className:t}=e,n=(0,l.E)();return n.badge?(0,i.jsx)("span",{className:(0,r.Z)(t,a.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,i.jsx)(s.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},18219:function(e,t,n){n.d(t,{Z:function(){return b}});var i=n(85893);n(67294);var r=n(90496),s=n(8156),a=n(35363),l=n(77827),o=n(90158),c=n(55951),d=n(99887),u=n(50223);let h={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function m(e){let t=h[e.versionMetadata.banner];return(0,i.jsx)(t,{...e})}function p(e){let{versionLabel:t,to:n,onClick:r}=e;return(0,i.jsx)(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,i.jsx)("b",{children:(0,i.jsx)(a.Z,{to:n,onClick:r,children:(0,i.jsx)(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:t,versionMetadata:n}=e,{siteConfig:{title:a}}=(0,s.Z)(),{pluginId:l}=(0,o.gA)({failfast:!0}),{savePreferredVersionName:u}=(0,d.J)(l),{latestDocSuggestion:h,latestVersionSuggestion:x}=(0,o.Jo)(l),b=h??x.docs.find(e=>e.id===x.mainDocId);return(0,i.jsxs)("div",{className:(0,r.Z)(t,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,i.jsx)("div",{children:(0,i.jsx)(m,{siteTitle:a,versionMetadata:n})}),(0,i.jsx)("div",{className:"margin-top--md",children:(0,i.jsx)(p,{versionLabel:x.label,to:b.path,onClick:()=>u(x.name)})})]})}function b(e){let{className:t}=e,n=(0,u.E)();return n.banner?(0,i.jsx)(x,{className:t,versionMetadata:n}):null}},65773:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(85893);n(67294);var r=n(90496),s=n(35363);function a(e){let{permalink:t,title:n,subLabel:a,isNext:l}=e;return(0,i.jsxs)(s.Z,{className:(0,r.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},11660:function(e,t,n){n.d(t,{c:function(){return o}});var i=n(67294),r=n(8156);let s=["zero","one","two","few","many","other"];function a(e){return s.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function o(){let e=function(){let{i18n:{currentLocale:e}}=(0,r.Z)();return(0,i.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let i=e.split("|");if(1===i.length)return i[0];i.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);let r=n.select(t);return i[Math.min(n.pluralForms.indexOf(r),i.length-1)]})(n,t,e)}}},67162:function(e,t,n){n.r(t),n.d(t,{default:()=>v});var i=n("85893");n("67294");var r=n("85921"),s=n("35363"),a=n("77827"),l=n("57335"),o=n("83631"),c=n("78042"),d=n("62742"),u=n("18219"),h=n("4903"),m=n("30267"),p=n("57922");function x(e){let{categoryGeneratedIndex:t}=e;return(0,i.jsx)(l.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,o.ZP)(t.image)})}function b(e){let{categoryGeneratedIndex:t}=e,n=(0,r.jA)();return(0,i.jsxs)("div",{className:"generatedIndexPage_hs4p",children:[(0,i.jsx)(u.Z,{}),(0,i.jsx)(m.Z,{}),(0,i.jsx)(h.Z,{}),(0,i.jsxs)("header",{children:[(0,i.jsx)(p.Z,{as:"h1",className:"title_tRie",children:t.title}),t.description&&(0,i.jsx)("p",{children:t.description})]}),(0,i.jsx)("article",{className:"margin-top--lg",children:(0,i.jsx)(c.Z,{items:n.items,className:"list_ZO3j"})}),(0,i.jsx)("footer",{className:"margin-top--lg",children:(0,i.jsx)(d.Z,{previous:t.navigation.previous,next:t.navigation.next})})]})}function f(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x,{...e}),(0,i.jsx)(b,{...e})]})}function g(){let e=r.vY("guides/docs/sidebar/items",void 0)?.path;return(0,i.jsx)("p",{className:"footerTip_UBUV",children:(0,i.jsx)(a.Z,{values:{guideLink:(0,i.jsx)(s.Z,{to:`${e}#category-link`,children:(0,i.jsx)(a.Z,{children:"the generated index page guide"})})},children:"Want to implement the same page? Read {guideLink} to find out!"})})}function v(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f,{...e}),(0,i.jsx)(g,{})]})}}}]);