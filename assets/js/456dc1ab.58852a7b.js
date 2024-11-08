"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[233],{9629:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=s(4848),i=s(8453);const r={title:"Getting Started",sidebar_position:0,hide_table_of_contents:!0,slug:"/"},o=void 0,a={id:"getting_started",title:"Getting Started",description:"Functor Network by Security Labs is an autonomy layer for AI agents \u2014 allowing for expressive and autonomous AI to act on-chain in a well-structured and verifiable manner. Specifically, we enable:",source:"@site/docs/getting_started.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,unlisted:!1,editUrl:"https://github.com/slabsxyz/docs/tree/main/docs/getting_started.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Getting Started",sidebar_position:0,hide_table_of_contents:!0,slug:"/"},sidebar:"tutorialSidebar",next:{title:"What is Functor Network?",permalink:"/what_is_functor"}},c={},l=[{value:"More than AI \u2014 The universal access layer",id:"more-than-ai--the-universal-access-layer",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,i.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{children:(0,t.jsx)("meta",{prefix:"og: http://ogp.me/ns#"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Functor Network"})," by ",(0,t.jsx)(n.a,{href:"https://node.securitylabs.xyz/",children:"Security Labs"})," is an ",(0,t.jsx)(n.strong,{children:"autonomy layer for AI agents"})," \u2014 allowing for expressive and autonomous AI to act on-chain in a well-structured and verifiable manner. Specifically, we enable:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Cross-chain, arbitrary permissions"})," through modular session keys; providing fine-grain design of on-chain AI behaviour."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ZKP-based verifiability"})," through continuous \u2014 yet cheap \u2014 validation of their transactions against active permissions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"AI agents collaboration"})," through coupled sessions between agents, allowing for simple rules to compose into highly expressive, but still secure, behaviors."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Functor achieve this through its design as a ",(0,t.jsx)(n.strong,{children:"Keystore (KS) Rollup"}),":"]}),"\n",(0,t.jsxs)(n.admonition,{title:"Functor as a keystore Rollup",type:"info",children:[(0,t.jsxs)(n.p,{children:["A minimal decentralized ",(0,t.jsx)(n.a,{href:"/concepts/glossary/#key-value-store",children:"key/value database"})," to ",(0,t.jsx)(n.strong,{children:"store"})," and enable ",(0,t.jsx)(n.strong,{children:"cross-chain access"})," of:"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Smart contract wallet (SCW) authentication parameters"}),", e.g.:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Public keys,"}),"\n",(0,t.jsx)(n.li,{children:"Passkeys,"}),"\n",(0,t.jsx)(n.li,{children:"Signature thresholds, any other scheme-specific parameters"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/concepts/glossary/#session-key",children:(0,t.jsx)(n.strong,{children:"Session keys"})}),", e.g.:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Permissions over assets"}),"\n",(0,t.jsx)(n.li,{children:"Expiration conditions"}),"\n",(0,t.jsx)(n.li,{children:"Authentication parameters for specific situations"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["And, ",(0,t.jsx)(n.strong,{children:"any"})," other configurations you want ",(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.a,{href:"/concepts/glossary/#atomic-transaction",children:"atomically"})," updated across any L2"]}),", e.g. updates to cross-chain protocols"]}),"\n"]})]}),"\n",(0,t.jsx)(n.p,{children:"This is important for AI agents to have a single source of truth for their session keys, permissions and authentication parameters to update atomically across all L2s. Functor coordinates these updates while being a completely permissionless and decentralized infrastructure."}),"\n",(0,t.jsxs)(n.p,{children:["In a nutshell, Functor decouples ",(0,t.jsx)(n.strong,{children:"authentication logic"})," from ",(0,t.jsx)(n.strong,{children:"execution logic"}),", for the authentication to be synced across L2s. This means: ",(0,t.jsxs)("u",{children:["Configure your smart contract ",(0,t.jsx)(n.strong,{children:"once"})," and have it updated ",(0,t.jsx)(n.strong,{children:"everywhere"}),"."]})]}),"\n",(0,t.jsx)(n.h2,{id:"more-than-ai--the-universal-access-layer",children:"More than AI \u2014 The universal access layer"}),"\n",(0,t.jsx)(n.p,{children:"Sessions for AI agents are a special case for key rotation, which allows users to change their wallet's credentials securely. The problem of recovering access to a lost or stolen wallet underlies the key management space on a fundamental level. Functor solves this more general problem as a natural consequence of its design."}),"\n",(0,t.jsxs)(n.p,{children:["Some immediate benefits of using a Keystore for key recovery are outlined by ",(0,t.jsx)(n.a,{href:"https://vitalik.eth.limo/general/2023/06/09/three_transitions.html",children:"Vitalik in his origial post discussing the idea"}),". Here is a summary:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("u",{children:(0,t.jsx)(n.strong,{children:"Cheaper cross-chain updates:"})})," With Functor, only one update is needed for all chains, bundling multiple updates in a batch of zero-knowledge proofs, making it even cheaper."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("u",{children:(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.a,{href:"/concepts/glossary/#atomic-transaction",children:"Atomic"})," updates:"]})})," Meaning the update either happens ",(0,t.jsx)(n.strong,{children:"everywhere"})," or it does not happen."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("u",{children:(0,t.jsx)(n.strong,{children:"Counterfactual addresses:"})})," Counteractual refers to accounts that would be yours in other chains when you decide to use them. This include chains that doesn't even exist",(0,t.jsx)(n.sup,{children:(0,t.jsx)(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),". With Functor, all your new accounts, even before you decide to use them, will be up-to-date with your credentials \u2014 ready to use."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("u",{children:(0,t.jsx)(n.strong,{children:"Privacy friendly:"})})," If a user intentionally have many addresses to act untraceably, they certainly do not want to publicly link all of them by recovering them at or around the same time! With Functor, the update happens uncorrelated to the addresses of the accounts benefitting with the update, preserving privacy."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["See more by following the ",(0,t.jsx)(n.a,{href:"what_is_functor",children:"rest of the docs"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Additionally, if looking for something specific, here are some ",(0,t.jsx)(n.a,{href:"faqs",children:"frequently asked questions we have gathered around"}),"."]}),"\n","\n",(0,t.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,t.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{id:"user-content-fn-1",children:["\n",(0,t.jsxs)(n.p,{children:["This is possible thanks to SCW being created with ",(0,t.jsx)(n.code,{children:"CREATE2"}),", which is deterministic. ",(0,t.jsx)(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(6540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);