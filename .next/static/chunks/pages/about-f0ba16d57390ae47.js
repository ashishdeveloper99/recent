(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{6735:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return s(3927)}])},2712:function(e,t){"use strict";t.Z={src:"/_next/static/media/avatar_4.c362c4ce.png",height:320,width:453,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAS1BMVEX////HzcuZjIM5MjL//vjIxcDp7OOw1t779uj9+/P779i0ycna2MqvraeBenewnID4z6D0rCbmwF1gW1igzN6kekj/0mHMoWbalivIWtEaAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAN0lEQVQImRXGSRKAIBAAsWadQVEWBf3/SykuqQDgNxCzatq5rdcjEa6vRhGDdf+UV06MG62XJywa4QFwAc+GDwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6}},8780:function(e,t,s){"use strict";var a=s(2086),n=s(1295),r=s.n(n);let i=()=>(0,a.jsx)("div",{className:"absolute w-full z-20 top-28 md:top-20 left-0 text-fore-subtle bg-back-subtle px-8",children:(0,a.jsx)("div",{className:"py-2 text-center text-sm",children:(0,a.jsxs)(a.Fragment,{children:["You're in preview mode."," ",(0,a.jsx)(r(),{href:"/api/exit-preview",children:(0,a.jsx)("a",{className:"underline hover:text-accent transition-colors cursor-pointer",children:"Click here"})})," ","to exit."]})})});t.Z=i},7297:function(e,t,s){"use strict";s.d(t,{Z:function(){return w}});var a=s(2086),n=s(9467),r=s(1295),i=s.n(r),l=s(8651);let o=[{path:"/",label:"Home"},{path:"/works",label:"Works"},{path:"/posts",label:"Blog"},{path:"/about",label:"About"}],c=()=>{let e=e=>{e.currentTarget.blur()},t=(0,l.useRouter)().pathname;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"relative items-center justify-start flex-grow hidden space-x-6 md:flex",children:o.map(s=>(0,a.jsx)(i(),{href:s.path,children:(0,a.jsx)("a",{className:s.path===t?"text-fore-primary transition-colors font-bold tracking-wide":"text-fore-subtle transition-colors tracking-wide nav--item",onClick:e,children:s.label})},s.path))})})};var m=s(30);let d=()=>(0,a.jsxs)("footer",{className:"flex flex-col items-center md:items-stretch max-w-screen-lg mx-auto gap-y-6 py-12 px-6 md:px-12 lg:px-20",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center md:flex-row md:justify-between gap-y-6 md:gap-y-0",children:[(0,a.jsx)(c,{}),(0,a.jsx)(m.Z,{})]}),(0,a.jsx)("div",{className:"flex flex-col-reverse md:flex-row items-center md:justify-between gap-y-6 md:gap-y-0",children:(0,a.jsxs)("span",{className:"text-sm",children:["\xa9 ",new Date().getFullYear(),"    Developer Portfolio All Rights Reserved."]})})]});var x=s(2048),p=s(3236),h=s(7935);let u=e=>{let{styles:t}=e,[s,n]=(0,p.useState)(!1),{resolvedTheme:r,setTheme:i}=(0,h.F)();return((0,p.useEffect)(()=>n(!0),[]),s)?(0,a.jsx)("button",{"aria-label":"light"===r?"Activate Dark Mode":"Activate Light Mode",title:"dark"===r?"Activate Light Mode":"Activate Dark Mode",onClick:()=>{i("dark"===r?"light":"dark")},className:t,children:"dark"===r?(0,a.jsx)("span",{className:"block w-4 h-4 bg-white rounded-full group-hover:-translate-y-1 transition-transform"}):(0,a.jsx)("span",{className:"block w-4 h-4 bg-black rounded-full group-hover:-translate-y-1 transition-transform"})}):null},f=()=>(0,a.jsx)(i(),{href:"/",children:(0,a.jsx)("a",{"aria-label":"Website logo, go back to homepage.",className:"flex items-center border-white group focus-visible:outline-accent",children:(0,a.jsxs)("div",{className:"overflow-hidden transition ease-in-out rounded-full  hover:opacity-60",children:[(0,a.jsx)("span",{className:"text-sm",children:"ashishd"}),(0,a.jsx)("span",{className:"text-sm text-accent",children:".online"})]})})}),j=()=>{let[e,t]=(0,p.useState)(!1),s=(0,l.useRouter)();return(0,p.useEffect)(()=>{let t=document.body;e&&t.style.setProperty("touch-action","none"),e||t.style.removeProperty("touch-action")},[e]),(0,p.useEffect)(()=>{e&&t(!e)},[s]),(0,a.jsxs)("nav",{className:"fixed top-0 h-12 w-full md:hidden backdrop-filter backdrop-blur-sm bg-opacity-30 z-50",children:[(0,a.jsx)("button",{className:"absolute top-3 right-2 z-50","aria-label":e?"Close Menu":"Open Menu",onClick:()=>{t(!e)},children:e?(0,a.jsx)(n.Tw,{}):(0,a.jsx)(n.Oq,{})}),e?(0,a.jsxs)("div",{className:"flex flex-col z-40 h-screen w-full bg-back-primary overflow-hidden px-4 pt-16 mb-12",children:[(0,a.jsx)("ul",{className:"flex flex-col gap-y-12",children:o.map(e=>(0,a.jsx)("li",{className:"border-b border-b-slate-400 border-opacity-30 pb-2",children:(0,a.jsx)(i(),{href:e.path,children:(0,a.jsx)("a",{className:"text-fore-secondary",children:e.label})})},e.path))}),(0,a.jsx)("div",{className:"flex justify-between mt-12",children:(0,a.jsx)(u,{})})]}):(0,a.jsx)("div",{className:"absolute top-3 left-2",children:(0,a.jsx)(f,{})})]})},g=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("header",{className:"md:pt-4 container max-w-screen-lg m-auto md:px-12 lg:px-20",children:[(0,a.jsxs)("nav",{className:"hidden md:flex justify-start items-center h-full mt-auto space-x-6 text-sm lg:justify-start backdrop-filter backdrop-blur-sm  bg-opacity-30","aria-label":"Main Navigation",children:[(0,a.jsx)(f,{}),(0,a.jsx)(c,{}),(0,a.jsx)(u,{styles:"hidden transition-transform ease-in-out focus:outline-none sm:block hover:text-accent group focus-visible:outline-accent"})]}),(0,a.jsx)(j,{})]})});var b=s(8780);let v=e=>{let{children:t,preview:s}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.h_,{}),(0,a.jsx)(g,{}),s&&(0,a.jsx)(b.Z,{}),(0,a.jsx)("main",{className:"flex flex-col min-h-screen container flex-grow max-w-screen-lg px-5 m-auto mt-16 md:px-12 lg:px-20",children:t}),(0,a.jsx)(d,{})]})};var w=v},2048:function(e,t,s){"use strict";s.d(t,{SP:function(){return o},Vj:function(){return l},h_:function(){return i}});var a=s(2086),n=s(312),r=s.n(n);let i=()=>(0,a.jsxs)(r(),{children:[(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,a.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,a.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,a.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,a.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,a.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,a.jsx)("meta",{name:"theme-color",content:"#000"}),(0,a.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"})]}),l=e=>{let{title:t,description:s}=e;return(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:t}),(0,a.jsx)("meta",{name:"description",content:s}),(0,a.jsx)("meta",{property:"og:title",content:t}),(0,a.jsx)("meta",{property:"og:description",content:s}),(0,a.jsx)("meta",{property:"og:image",content:"/images/Cosmic_OGImage.png"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:site",content:"@CosmicJS"}),(0,a.jsx)("meta",{name:"twitter:title",content:t}),(0,a.jsx)("meta",{name:"twitter:description",content:s}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://cdn.cosmicjs.com/a0aa3180-a0a0-11e8-8dd8-9f9cde09837c-39b7c450-3d9b-11e8-9dd8-6123bc325337-COSMICJS.jpg"})]})},o=e=>{let{title:t,description:s,slug:n,page:i,imageUrl:l}=e;return(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:t}),(0,a.jsx)("meta",{name:"description",content:s}),(0,a.jsx)("meta",{property:"og:title",content:t}),(0,a.jsx)("meta",{property:"og:url",content:"https://nextjs-developer-portfolio-cms.vercel.app/".concat(i,"/").concat(n)}),(0,a.jsx)("meta",{property:"og:type",content:"article"}),(0,a.jsx)("meta",{property:"og:image",content:l}),(0,a.jsx)("meta",{property:"og:description",content:s}),(0,a.jsx)("meta",{property:"og:image",content:l}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:site",content:"@CosmicJS"}),(0,a.jsx)("meta",{name:"twitter:title",content:t}),(0,a.jsx)("meta",{name:"twitter:description",content:s}),(0,a.jsx)("meta",{name:"twitter:image",content:l})]})}},30:function(e,t,s){"use strict";var a=s(2086),n=s(9467);let r=()=>(0,a.jsxs)("span",{className:"flex gap-x-5",children:[(0,a.jsx)("a",{href:"mailto:ashishdhomne@hotmail.com       ",className:"group cursor-pointer","aria-label":"Email",title:"Email",children:(0,a.jsx)(n.LQ,{})}),(0,a.jsx)("a",{href:"https://github.com/ashishdeveloper99",className:"group cursor-pointer","aria-label":"Github",title:"Github",children:(0,a.jsx)(n.ET,{})}),(0,a.jsx)("a",{href:"https://www.linkedin.com/in/ashish-dhomne/",className:"group cursor-pointer","aria-label":"Linkedin",title:"Linkedin",children:(0,a.jsx)(n.pA,{})})]});t.Z=r},3927:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return x}});var a=s(2086);s(3236);var n=s(9467),r=s(30),i=s(8757),l=s.n(i),o=s(2712),c=s(2048),m=s(7297);let d=e=>{let{preview:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Vj,{title:"About | Developer Portfolio",description:"About the developer"}),(0,a.jsx)(m.Z,{preview:t,children:(0,a.jsxs)("section",{children:[(0,a.jsx)("h1",{className:"text-2xl md:text-3xl mb-12 font-bold",children:"About Me"}),(0,a.jsxs)("div",{className:"flex flex-col md:flex-row-reverse border-b pb-12",children:[(0,a.jsx)("div",{className:"flex-1 relative",children:(0,a.jsx)(l(),{src:o.Z,alt:"Ashish Dhomne",quality:85,layout:"responsive",className:"rounded-md",placeholder:"blur",priority:!0})}),(0,a.jsxs)("div",{className:"flex-1 mt-12 md:mt-0 flex flex-col justify-start gap-y-8 pr-20",children:[(0,a.jsx)("p",{children:"I love solving problems!"}),(0,a.jsx)("p",{children:"My name is Ashish. I am interested in applying for the Junior Developer position or Internship.I believe that my passion and experience in the field would be a useful addition to your team."}),(0,a.jsx)("p",{children:"I am certain my skills and qualifications will be of great use to your team.Should you decide to move forward with an interview, please reach out to me! I would be happy to answer any questions you may have and discuss how I can help your company. besides honing my skills as Web developer. nowadays I take lessons in Javascript, React technologies."}),(0,a.jsx)("p",{children:"Get in touch to create something awesome together!   "}),(0,a.jsxs)("div",{className:"flex items-center md:mt-6",children:[(0,a.jsxs)("a",{href:"https://drive.google.com/file/d/1N9qCIlF4njS6tqRxzWDfTcqY97Xea4Ru/view?usp=sharing",className:"flex items-center mr-4 text-fore-primary border-2 border-accent w-fit px-4 py-1 rounded cursor-pointer hover:text-accent transition-colors",children:[(0,a.jsx)("span",{className:"mr-2",children:(0,a.jsx)(n.At,{})}),"Resume"]}),(0,a.jsx)(r.Z,{})]})]})]})]})})]})};var x=!0;t.default=d},312:function(e,t,s){e.exports=s(7981)},8651:function(e,t,s){e.exports=s(8505)}},function(e){e.O(0,[295,757,467,774,888,179],function(){return e(e.s=6735)}),_N_E=e.O()}]);