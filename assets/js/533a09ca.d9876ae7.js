"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[607],{4852:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(9231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(r),m=a,b=g["".concat(l,".").concat(m)]||g[m]||u[m]||n;return r?o.createElement(b,s(s({ref:t},p),{},{components:r})):o.createElement(b,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7620:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var o=r(4011),a=(r(9231),r(4852));const n={sidebar_position:3},s="Create a Blog Post",i={unversionedId:"tutorial-basics/create-a-blog-post",id:"tutorial-basics/create-a-blog-post",title:"Create a Blog Post",description:"Docusaurus creates a page for each blog post, but also a blog index page, a tag system, an RSS feed...",source:"@site/docs/tutorial-basics/create-a-blog-post.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-blog-post",permalink:"/opentelemetry-sdk-workers/docs/tutorial-basics/create-a-blog-post",draft:!1,editUrl:"https://github.com/RichiCoder1/opentelemetry-sdk-workers/tree/main/docs/docs/tutorial-basics/create-a-blog-post.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create a Document",permalink:"/opentelemetry-sdk-workers/docs/tutorial-basics/create-a-document"},next:{title:"Markdown Features",permalink:"/opentelemetry-sdk-workers/docs/tutorial-basics/markdown-features"}},l={},c=[{value:"Create your first Post",id:"create-your-first-post",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-a-blog-post"},"Create a Blog Post"),(0,a.kt)("p",null,"Docusaurus creates a ",(0,a.kt)("strong",{parentName:"p"},"page for each blog post"),", but also a ",(0,a.kt)("strong",{parentName:"p"},"blog index page"),", a ",(0,a.kt)("strong",{parentName:"p"},"tag system"),", an ",(0,a.kt)("strong",{parentName:"p"},"RSS")," feed..."),(0,a.kt)("h2",{id:"create-your-first-post"},"Create your first Post"),(0,a.kt)("p",null,"Create a file at ",(0,a.kt)("inlineCode",{parentName:"p"},"blog/2021-02-28-greetings.md"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="blog/2021-02-28-greetings.md"',title:'"blog/2021-02-28-greetings.md"'},"---\nslug: greetings\ntitle: Greetings!\nauthors:\n  - name: Joel Marcey\n    title: Co-creator of Docusaurus 1\n    url: https://github.com/JoelMarcey\n    image_url: https://github.com/JoelMarcey.png\n  - name: S\xe9bastien Lorber\n    title: Docusaurus maintainer\n    url: https://sebastienlorber.com\n    image_url: https://github.com/slorber.png\ntags: [greetings]\n---\n\nCongratulations, you have made your first post!\n\nFeel free to play around and edit this post as much you like.\n")),(0,a.kt)("p",null,"A new blog post is now available at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/blog/greetings"},"http://localhost:3000/blog/greetings"),"."))}u.isMDXComponent=!0}}]);