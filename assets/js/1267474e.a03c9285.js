"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["7390"],{46597:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>u,contentTitle:()=>d});var r=JSON.parse('{"id":"migration/v2/migration-automated","title":"Automated migration","description":"The migration CLI automatically migrates your v1 website to a v2 website.","source":"@site/docs/migration/v2/migration-automated.mdx","sourceDirName":"migration/v2","slug":"/migration/v2/automated","permalink":"/docs/migration/v2/automated","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/migration/v2/migration-automated.mdx","tags":[],"version":"current","lastUpdatedBy":"thapahemraj","lastUpdatedAt":1737023823000,"frontMatter":{"slug":"/migration/v2/automated"},"sidebar":"docs","previous":{"title":"Overview","permalink":"/docs/migration/v2"},"next":{"title":"Manual migration","permalink":"/docs/migration/v2/manual"}}'),i=n("85893"),a=n("80980"),s=n("15398"),o=n("58636");let l={slug:"/migration/v2/automated"},d="Automated migration",c={},u=[{value:"Options",id:"options",level:4}];function h(e){let t={admonition:"admonition",code:"code",h1:"h1",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"automated-migration",children:"Automated migration"})}),"\n",(0,i.jsx)(t.p,{children:"The migration CLI automatically migrates your v1 website to a v2 website."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Manual work is still required after using the migration CLI, as we can't automate a full migration"})}),"\n",(0,i.jsx)(t.p,{children:"The migration CLI migrates:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Site configurations (from ",(0,i.jsx)(t.code,{children:"siteConfig.js"})," to ",(0,i.jsx)(t.code,{children:"docusaurus.config.js"}),")"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"package.json"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"sidebars.json"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"/docs"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"/blog"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"/static"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"versioned_sidebar.json"})," and ",(0,i.jsx)(t.code,{children:"/versioned_docs"})," if your site uses versioning"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"To use the migration CLI, follow these steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Before using the migration CLI, ensure that ",(0,i.jsx)(t.code,{children:"/docs"}),", ",(0,i.jsx)(t.code,{children:"/blog"}),", ",(0,i.jsx)(t.code,{children:"/static"}),", ",(0,i.jsx)(t.code,{children:"sidebars.json"}),", ",(0,i.jsx)(t.code,{children:"siteConfig.js"}),", ",(0,i.jsx)(t.code,{children:"package.json"})," follow the expected structure."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"To migrate your v1 website, run the migration CLI with the appropriate filesystem paths:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"# migration command format\nnpx @docusaurus/migrate migrate <v1 website directory> <desired v2 website directory>\n\n# example\nnpx @docusaurus/migrate migrate ./v1-website ./v2-website\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsx)(t.li,{children:"To view your new website locally, go into your v2 website's directory and start your development server."}),"\n"]}),"\n",(0,i.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,i.jsx)(o.Z,{value:"npm",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"cd ./v2-website\nnpm install\nnpm start\n"})})}),(0,i.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"cd ./v2-website\nyarn install\nyarn start\n"})})}),(0,i.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"cd ./v2-website\npnpm install\npnpm start\n"})})})]}),"\n",(0,i.jsx)(t.admonition,{type:"danger",children:(0,i.jsx)(t.p,{children:"The migration CLI updates existing files. Be sure to have committed them first!"})}),"\n",(0,i.jsx)(t.h4,{id:"options",children:"Options"}),"\n",(0,i.jsx)(t.p,{children:"You can add option flags to the migration CLI to automatically migrate Markdown content and pages to v2. It is likely that you will still need to make some manual changes to achieve your desired result."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"--mdx"})}),(0,i.jsx)(t.td,{children:"Add this flag to convert Markdown to MDX automatically"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"--page"})}),(0,i.jsx)(t.td,{children:"Add this flag to migrate pages automatically"})]})]})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"# example using options\nnpx @docusaurus/migrate migrate --mdx --page ./v1-website ./v2-website\n"})}),"\n",(0,i.jsxs)(t.admonition,{type:"danger",children:[(0,i.jsx)(t.p,{children:"The migration of pages and MDX is still a work in progress."}),(0,i.jsxs)(t.p,{children:["We recommend you to try to run the pages without these options, commit, and then try to run the migration again with the ",(0,i.jsx)(t.code,{children:"--page"})," and ",(0,i.jsx)(t.code,{children:"--mdx"})," options."]}),(0,i.jsx)(t.p,{children:"This way, you'd be able to easily inspect and fix the diff."})]})]})}function m(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},58636:function(e,t,n){n.d(t,{Z:()=>a});var r=n("85893");n("67294");var i=n("90496");function a(e){let{children:t,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)("tabItem_pnkT",a),hidden:n,children:t})}},15398:function(e,t,n){n.d(t,{Z:()=>j});var r=n("85893"),i=n("67294"),a=n("90496"),s=n("54947"),o=n("3620"),l=n("844"),d=n("97486"),c=n("32263"),u=n("16971");function h(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var p=n("71607");function x(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:l}=e,d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{let t=e.currentTarget,n=l[d.indexOf(t)].value;n!==i&&(c(t),o(n))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{let n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map(e=>{let{value:t,label:n,attributes:s}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>{d.push(e)},onKeyDown:h,onClick:u,...s,className:(0,a.Z)("tabs__item","tabItem_AQgk",s?.className,{"tabs__item--active":i===t}),children:n??t},t)})})}function g(e){let{lazy:t,children:n,selectedValue:s}=e,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=o.find(e=>e.props.value===s);return e?(0,i.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:o.map((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==s}))})}function f(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:r}=e,a=function(e){let{values:t,children:n}=e;return(0,i.useMemo)(()=>{let e=t??h(n).map(e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}});return!function(e){let t=(0,c.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[s,p]=(0,i.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:a})),[x,g]=function(e){let{queryString:t=!1,groupId:n}=e,r=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d._X)(a),(0,i.useCallback)(e=>{if(!a)return;let t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})},[a,r])]}({queryString:n,groupId:r}),[f,j]=function(e){let{groupId:t}=e,n=t?`docusaurus.tab.${t}`:null,[r,a]=(0,u.Nk)(n);return[r,(0,i.useCallback)(e=>{n&&a.set(e)},[n,a])]}({groupId:r}),v=(()=>{let e=x??f;return m({value:e,tabValues:a})?e:null})();return(0,l.Z)(()=>{v&&p(v)},[v]),{selectedValue:s,selectValue:(0,i.useCallback)(e=>{if(!m({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);p(e),g(e),j(e)},[g,j,a]),tabValues:a}}(e);return(0,r.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList_Qoir"),children:[(0,r.jsx)(x,{...t,...e}),(0,r.jsx)(g,{...t,...e})]})}function j(e){let t=(0,p.Z)();return(0,r.jsx)(f,{...e,children:h(e.children)},String(t))}},80980:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return s}});var r=n(67294);let i={},a=r.createContext(i);function s(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);