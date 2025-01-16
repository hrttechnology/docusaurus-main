"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["9993"],{5641:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/social-card-73a479db9ad439c10153f05dc03fdc91.png"},30792:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/social-card-73a479db9ad439c10153f05dc03fdc91.png"},47466:function(e,s,n){n.r(s),n.d(s,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return o},metadata:function(){return t},toc:function(){return u}});var t=n(5922),r=n(85893),a=n(80980);let o={title:"Docusaurus 3.7",authors:["slorber"],tags:["release"],image:"./img/social-card.png",date:new Date("2025-01-03T00:00:00.000Z")},i=void 0,c={image:n(5641).Z,authorsImageUrls:[void 0]},u=[{value:"Highlight",id:"highlight",level:2},{value:"React 19",id:"react-19",level:3},{value:"SVGR plugin",id:"svgr-plugin",level:3},{value:"Other changes",id:"other-changes",level:2}];function l(e){let s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["We are happy to announce ",(0,r.jsx)(s.strong,{children:"Docusaurus 3.7"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Docusaurus is now compatible with ",(0,r.jsx)(s.a,{href:"https://react.dev/blog/2024/12/05/react-19",children:"React 19"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Upgrading should be easy. Our ",(0,r.jsx)(s.a,{href:"/community/release-process",children:"release process"})," respects ",(0,r.jsx)(s.a,{href:"https://semver.org/",children:"Semantic Versioning"}),". Minor versions do not include any breaking changes."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Docusaurus blog post social card",src:n(30792).Z+"",width:"1200",height:"600"})}),"\n","\n",(0,r.jsx)(s.h2,{id:"highlight",children:"Highlight"}),"\n",(0,r.jsx)(s.h3,{id:"react-19",children:"React 19"}),"\n",(0,r.jsxs)(s.p,{children:["In ",(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10763",children:"#10763"}),", we added support for ",(0,r.jsx)(s.a,{href:"https://react.dev/blog/2024/12/05/react-19",children:"React 19"}),", and the Docusaurus website is running on React 19 already."]}),"\n",(0,r.jsx)(s.p,{children:"From now on, all newly initialized sites will run on React 19 by default, and React 19 will be the minimum required version Docusaurus v4."}),"\n",(0,r.jsx)(s.p,{children:"However, React 18 remains supported, and existing Docusaurus sites can either choose to stay on React 18, or upgrade their dependencies to React 19:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:'{\n  "name": "my-docusaurus-site",\n  "dependencies": {\n-   "react": "^18.0.0",\n-   "react-dom": "^18.0.0"\n+   "react": "^19.0.0",\n+   "react-dom": "^19.0.0"\n  }\n}\n'})}),"\n",(0,r.jsxs)(s.admonition,{type:"warning",children:[(0,r.jsx)(s.p,{children:"There's no urge to upgrade your site immediately."}),(0,r.jsx)(s.p,{children:"React 19 is a bit heavier than React 18. Since we support both versions, we don't leverage yet the new features that are exclusive to React 19."}),(0,r.jsx)(s.p,{children:"However, upgrading to React 19 prepares your site for Docusaurus v4, that will drop support for React 18."}),(0,r.jsx)(s.p,{children:"Here are good reasons to upgrade your site before Docusaurus v4:"}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"You have custom React code and want to ensure it is ready for React19"}),"\n",(0,r.jsx)(s.li,{children:"You plan to leverage the brand-new React 19 features in your own code"}),"\n",(0,r.jsx)(s.li,{children:"You use custom or third-party plugins and want to ensure their compatibility"}),"\n",(0,r.jsx)(s.li,{children:"You have a monorepo and want to align the React dependency to v19 for all packages"}),"\n"]})]}),"\n",(0,r.jsxs)(s.p,{children:["Along the way, we ",(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10786",children:"fixed"})," all the remaining hydration errors reported by React 19, some of them produced by our aggressive HTML minifier settings."]}),"\n",(0,r.jsx)(s.h3,{id:"svgr-plugin",children:"SVGR plugin"}),"\n",(0,r.jsxs)(s.p,{children:["Docusaurus has built-in support for ",(0,r.jsx)(s.a,{href:"https://github.com/gregberge/svgr",children:"SVGR"}),", allowing you to seamlessly import and use SVG files as React components:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"import DocusaurusSvg from './docusaurus.svg';\n\n<DocusaurusSvg />;\n"})}),"\n",(0,r.jsxs)(s.p,{children:["This built-in support has been the source of various bug reports due to the inability to customize the ",(0,r.jsx)(s.a,{href:"https://react-svgr.com/docs/options/",children:"SVGR Options"}),", in particular the ",(0,r.jsx)(s.a,{href:"https://svgo.dev/",children:"SVG Optimizer"})," options."]}),"\n",(0,r.jsxs)(s.p,{children:["In ",(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10677",children:"#10677"}),", we extracted a new ",(0,r.jsx)(s.a,{href:"/docs/api/plugins/@docusaurus/plugin-svgr",children:(0,r.jsx)(s.code,{children:"@docusaurus/plugin-svgr"})})," that you can now configure according to your needs. It is included by default in our classic preset:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  presets: [\n    [\n      'classic',\n      {\n        svgr: {\n          svgrConfig: {\n            // Your SVGR options ...\n            svgoConfig: {\n              // Your SVGO options ...\n              // Use \"svgoConfig: undefined\" to use a svgo.config.js file\n            },\n          },\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,r.jsx)(s.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsx)(s.p,{children:"Other notable changes include:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10768",children:"#10768"}),": Blog authors have built-in icons for social platforms bluesky, mastodon, threads, twitch, youtube, instagram."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10729",children:"#10729"}),": Blog now supports ",(0,r.jsx)(s.code,{children:"frontMatter.sidebar_label"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10803",children:"#10803"}),": ",(0,r.jsx)(s.code,{children:"@docusaurus/remark-plugin-npm2yarn"})," now supports Bun conversions."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10672",children:"#10672"}),": Upgrade Algolia DocSearch to ",(0,r.jsx)(s.code,{children:"algoliasearch"})," v5."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10800",children:"#10800"}),": Docusaurus Faster turns Rspack incremental mode on by default."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10783",children:"#10783"}),": Improve Dutch theme translations."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10760",children:"#10760"}),": Improve Korean theme translations."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Check the ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/changelog/3.7.0",children:"3.7.0 changelog entry"})})," for an exhaustive list of changes."]})]})}function h(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},80980:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return o}});var t=n(67294);let r={},a=t.createContext(r);function o(e){let s=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:s},e.children)}},5922:function(e){e.exports=JSON.parse('{"permalink":"/blog/releases/3.7","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/releases/3.7/index.mdx","source":"@site/blog/releases/3.7/index.mdx","title":"Docusaurus 3.7","description":"We are happy to announce Docusaurus 3.7.","date":"2025-01-03T00:00:00.000Z","tags":[{"inline":false,"label":"Release","permalink":"/blog/tags/release","description":"Blog posts about Docusaurus\' new releases"}],"readingTime":2.41,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer, This Week In React editor","url":"https://thisweekinreact.com","page":{"permalink":"/blog/authors/slorber"},"description":"A freelance React and React-Native developer near Paris and Docusaurus maintainer. Also runs ThisWeekInReact.com, a newsletter to stay updated with the React ecosystem.","socials":{"bluesky":"https://bsky.app/profile/sebastienlorber.com","x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","instagram":"https://www.instagram.com/thisweekinreact","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"title":"Docusaurus 3.7","authors":["slorber"],"tags":["release"],"image":"./img/social-card.png","date":"2025-01-03T00:00:00.000Z"},"unlisted":false,"lastUpdatedAt":1737025058000,"lastUpdatedBy":"thapahemraj","nextItem":{"title":"Docusaurus 3.6","permalink":"/blog/releases/3.6"}}')}}]);