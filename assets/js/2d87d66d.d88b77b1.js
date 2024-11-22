"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[650],{4661:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var t=s(4848),o=s(8453);const i={title:"How is Functor enabling the on-chain autonomous world?",sidebar_position:3},r=void 0,a={id:"how_functor",title:"How is Functor enabling the on-chain autonomous world?",description:"The on-chain autonomous world refers to the future in which AI agents automatize complex data-hungry processes on-chain in a secure and verifiably way; which has the obstacles described on the previous section.",source:"@site/docs/how_functor.mdx",sourceDirName:".",slug:"/how_functor",permalink:"/how_functor",draft:!1,unlisted:!1,editUrl:"https://github.com/slabsxyz/docs/tree/main/docs/how_functor.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"How is Functor enabling the on-chain autonomous world?",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Why Functor Network?",permalink:"/why_functor"},next:{title:"Who can use Functor Network?",permalink:"/who_can_use_functor"}},c={},h=[];function l(e){const n={a:"a",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{children:(0,t.jsx)("meta",{prefix:"og: http://ogp.me/ns#"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"on-chain autonomous world"})," refers to the future in which AI agents automatize complex data-hungry processes on-chain in a secure and verifiably way; which has the obstacles described on the ",(0,t.jsx)(n.a,{href:"/why_functor",children:"previous section"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"At a high level, all an AI-agent is doing is:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Reading"})," some data"]}),"\n",(0,t.jsxs)(n.li,{children:["Acting on a system, ",(0,t.jsx)(n.strong,{children:"changing"})," its state"]}),"\n",(0,t.jsxs)(n.li,{children:["New data is ",(0,t.jsx)(n.strong,{children:"produced"})," from changed state"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"AI agent",src:s(7623).A+"",width:"737",height:"421"})}),"\n",(0,t.jsx)(n.p,{children:"All of this with some objective, sometimes as simple as buying a token at some price (need to act only once) or to maintain a portfolio in optimum market performance (which needs an ongoing agent, reading new data constantly)."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"The critical piece in this process is when AI agent changes the state of the blockchain"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Issue (1) of ",(0,t.jsx)(n.strong,{children:'"scheduling and automatizing transactions"'})," safely requires AI agents to have, not ",(0,t.jsx)(n.em,{children:"full permissions"})," over a wallet, but only granular, temporary permissions. This is achieved through ",(0,t.jsx)(n.a,{href:"/concepts/glossary/#session-key",children:(0,t.jsx)(n.strong,{children:"session keys"})}),", which:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Gives the AI agent a ",(0,t.jsx)(n.strong,{children:"signing key"})," to produce transactions."]}),"\n",(0,t.jsxs)(n.li,{children:["Gives the blockchain a ",(0,t.jsx)(n.strong,{children:"configuration"})," to ",(0,t.jsx)(n.strong,{children:"cryptographically verify"})," transactions attempted by the AI over our assets. Solving here issue (2) of ",(0,t.jsx)(n.strong,{children:'"AI\'s hallucinations"'}),", through active on-chain verification."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This configuration file must be ",(0,t.jsx)(n.strong,{children:"cross-chain"})," in order to also solve issue (3) of ",(0,t.jsx)(n.strong,{children:'"Fragmentation in Web3"'}),". Functor, as a Keystore rollup, allows these configurations to be readable in a chain-agnostic way."]}),"\n",(0,t.jsx)(n.p,{children:"An example of how AI agents work with Functor sesions is as follows:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"AI agent UX",src:s(6695).A+"",width:"1218",height:"619"})}),"\n",(0,t.jsxs)(n.p,{children:["A user or dApp can configure any agent with as much permissions as they want, during some timeframe. This AI agent will then only act as described, becoming ",(0,t.jsx)(n.strong,{children:"predictable"})," for the user, dApp and ",(0,t.jsx)(n.em,{children:"\u2014 critically \u2014 other AI agents too."})]}),"\n",(0,t.jsxs)(n.p,{children:["AI agents being predictable, and also variably so, for other AI agents allow them to collaborate in a safe manner; making them ",(0,t.jsx)(n.strong,{children:"composable"}),". Consider the following example:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Multi agent session",src:s(9247).A+"",width:"652",height:"373"})}),"\n",(0,t.jsxs)(n.p,{children:["To assets, ",(0,t.jsx)(n.strong,{children:"A1"})," and ",(0,t.jsx)(n.strong,{children:"A2"}),", are being used by independent AI agents, possibly on different chains, and reading different data they don't need to be sharing."]}),"\n",(0,t.jsxs)(n.p,{children:["A third session configurating the ",(0,t.jsx)(n.strong,{children:"relationship"})," between ",(0,t.jsx)(n.strong,{children:"A1"})," and ",(0,t.jsx)(n.strong,{children:"A2"})," is created. This will make it so ",(0,t.jsx)(n.strong,{children:"A2"})," can't be used until ",(0,t.jsx)(n.strong,{children:"A1"})," is moved first, making it possible to force a sequential constraint over AI actions ",(0,t.jsx)("u",{children:"without the need of cross-chain communication"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},7623:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/ai_agent-09f18b7a25e85352cdec0ea4ae6af94e.png"},6695:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/ai_agent_ux-ef264d2b94fbe06bc22ad48a6aceae9b.png"},9247:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/multi_agent_session-9b093378e14476ae83f725cd72397260.png"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(6540);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);