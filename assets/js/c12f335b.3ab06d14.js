"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[560],{6555:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>y,contentTitle:()=>g,default:()=>w,frontMatter:()=>m,metadata:()=>f,toc:()=>x});var t=s(4848),o=s(8453),i=(s(6540),s(5195));const r={tableOfContentsInline:"tableOfContentsInline_prmo"};function a(e){let{toc:n,minHeadingLevel:s,maxHeadingLevel:o}=e;return(0,t.jsx)("div",{className:r.tableOfContentsInline,children:(0,t.jsx)(i.A,{toc:n,minHeadingLevel:s,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null})})}function c(e){const n={a:"a",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"keystore-related",children:(0,t.jsx)(n.strong,{children:"Keystore related"})}),"\n",(0,t.jsx)(n.h3,{id:"what-is-a-keystore-rollup",children:"What is a keystore rollup?"}),"\n",(0,t.jsxs)(n.p,{children:["A\xa0",(0,t.jsx)(n.a,{href:"https://docs.securitylabs.xyz/",children:(0,t.jsx)(n.strong,{children:"minimal keystore rollup"})}),"\xa0is a cross-chain\xa0",(0,t.jsx)(n.a,{href:"https://docs.securitylabs.xyz/concepts/glossary/#key-value-store",children:"key/value store"}),"\xa0for smart wallet configurations such as\xa0",(0,t.jsx)(n.a,{href:"https://docs.securitylabs.xyz/concepts/glossary/#session-key",children:"session keys"})," and public keys. It is\xa0",(0,t.jsx)(n.strong,{children:"minimal"}),"\xa0in that its nodes need only to manage this simple\xa0",(0,t.jsx)(n.a,{href:"https://docs.securitylabs.xyz/concepts/glossary/#key-value-store",children:"key/value database"}),", and not balances nor smart contracts. This makes our nodes lightweight and easy to run on computationally-constrained environment, making it possible to run light nodes even on web browsers."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"what-are-the-components-of-a-keystore-rollup-specifically-for-functor",children:"What are the components of a keystore rollup, specifically for Functor?"}),"\n",(0,t.jsx)(n.p,{children:"At a high level, it has:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Nodes"}),": Full nodes (execution clients), light nodes, data availability node, etc."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Infrastructure Smart contracts"}),": Contracts for state settlement such as Keystore contracts on the L1 and every L2, keeping the state of Functor accessible. Also, ",(0,t.jsx)(n.strong,{children:"smart account interfaces"})," for ",(0,t.jsx)(n.em,{children:"anyone to inherit"})," the ability to use Functor inside their own smart contract design."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Network components"}),": Sequencing layer, calling interfaces (RPC providers, explorers, etc.), ZK provers layer."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"what-exactly-is-a-light-node-in-functor",children:"What exactly is a light node in Functor?"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.securitylabs.xyz/concepts/glossary/#light-node",children:"\u2018Light node\u2019"})," (also commonly known as \u2018light client\u2019) is a standard term for nodes which only download a small portion of the data in a blockchain, and use indirect means to verify that a given chain is valid. As described on ",(0,t.jsx)(n.a,{href:"https://arxiv.org/pdf/1809.09044",children:"this classical paper"}),", these help scale the availability, security and performance of any blockchain. These light nodes, by being less technologically demanding, are easier to run on computationally-constrained environments such as IoT devices and web browsers."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"why-is-it-valuable-for-nodes-to-be-lightweight",children:"Why is it valuable for nodes to be lightweight?"}),"\n",(0,t.jsx)(n.p,{children:"To fulfill our aim: Allow easy access to every user to also become a Functor node if they so desire. This not only increases our security and performance, but also their user experience by having access to part of Functor state, allowing for pre-computing and cheaper configuration (authentication, session, etc.) updates."}),"\n",(0,t.jsxs)(n.p,{children:["It is additionally worthy to note that ",(0,t.jsx)(n.strong,{children:"every"})," node in Functor network is lightweight in a more general sense: Consensus, data availability and execution layers are decoupled; meaning a node works by running only its ",(0,t.jsx)(n.a,{href:"https://docs.securitylabs.xyz/concepts/glossary/#execution-client",children:"execution client"})," while other components of the system work independently. Since Functor\u2019s execution client is small by design (simplicity = more security), nodes are run on environment with more limited computational resources."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"give-me-more-details-on-how-the-keystore-contracts-work",children:"Give me more details on how the keystore contracts work."}),"\n",(0,t.jsxs)(n.p,{children:["Keystore contracts keep the state of Functor verifiable across any L2 and their underlying L1 as a ",(0,t.jsx)(n.strong,{children:"merkle tree root"}),". There are two kinds:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"L1 keystore contract"}),": Functor\u2019s consensus settles the merkle tree root here. From here it is propagated to every L2 with a L2 keystore contract."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"L2 keystore contracts"}),": Every L2 that wants to store smart contract wallet\u2019s configurations in Functor requires to at least have this contract. It allows their bundlers to verify transactions against Functor\u2019s state root."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"session-keys-related",children:(0,t.jsx)(n.strong,{children:"Session keys related"})}),"\n",(0,t.jsx)(n.h3,{id:"what-exactly-are-session-keys",children:"What exactly are session keys?"}),"\n",(0,t.jsx)(n.p,{children:"Session keys have two parts:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Signing key"}),", used to sign transactions just as any key."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Session configuration"}),", describing permission scope and session expiration conditions. This is stored in Functor to be cheaply updateable and readable as a single source of truth from any L2."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"what-do-i-need-to-create-a-session-key",children:"What do I need to create a session key?"}),"\n",(0,t.jsx)(n.p,{children:"In practice, any authentication factor our zk-circuits support. Currently being any passkey compatible authentication factor, but more generally, imagine MFA and/or threshold signatures schemes for the future."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"okay-but-i-am-a-real-nerd-exactly-how-are-sessions-created-from-my-authentication",children:["Okay but, I am a real nerd. ",(0,t.jsx)(n.em,{children:"exactly how"})," are sessions created from my authentication?"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"More in-depth"}),": Sessions keys are ",(0,t.jsx)(n.strong,{children:"deterministically associated with smart contract account (SCA)"}),". Thanks to ",(0,t.jsx)(n.a,{href:"https://www.evm.codes/?fork=cancun#f5",children:"CREATE2"})," offering a deterministic way of having the same address across every chain, a well-defined relationship between SCAs and all its sessions can be established in Functor even if said SCAs haven\u2019t been deployed in all L2s."]}),"\n",(0,t.jsx)(n.p,{children:"This implies updates on the session configurations and new sessions need only to ask for authentication from the SCA\u2019s owner, this being anything they want to use as long as Functor\u2019s validators can verify it. Our verification process is based on zero-knowledge proofs, agnostic to proof systems. Authentication circuits for different and increasingly more general authentication schemes are being built, prioritizing the ones with good UX such as Webauthn for Passkeys."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"how-are-session-keys-used-through-functor-network",children:"How are session keys used through Functor Network?"}),"\n",(0,t.jsxs)(n.p,{children:["Once the session configuration is in Functor, ",(0,t.jsxs)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-4337#useroperation",children:[(0,t.jsx)(n.code,{children:"userOperation"}),"s"]})," sent to any L2 (where our keystore contract lies) can verify their validity against the conditions described in such configuration. This is done by checking the configuration is contained and valid in the current state of Functor, verified permissionlessly through the Keystore contract. At a more technical level, Functor\u2019s state is a special kind of merkle tree and the proof being validated is a Merkle proof framed as a SNARK to be cheaply verified on-chain."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"can-you-show-the-session-usage-in-a-diagram",children:"Can you show the session usage in a diagram?"}),"\n",(0,t.jsx)(n.p,{children:"For sure!"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"session_usage",src:s(792).A+"",width:"961",height:"546"})}),"\n",(0,t.jsx)(n.p,{children:"We have the following steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The signing key holder proves the corresponding configuration exists in Functor (Merkle proof framed as a SNARK for cheap on-chain verification)."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"userOperation"})," is produced and signed, containing the proof and the transaction logic itself."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Proof is validated by the Bundler before executing. Proof will be valid only if these three conditions are true:"}),"\n",(0,t.jsx)(n.p,{children:"a. Transaction logic is within the permission\u2019s scope.\nb. Expiration condition hasn\u2019t occurred.\nc. The Merkle proof correspond with the state root stored in the Keystore Contract"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"do-you-have-any-performance-bottlenecks",children:"Do you have any performance bottlenecks?"}),"\n",(0,t.jsxs)(n.p,{children:["Not really, Merkle proofs are fast to validate:\n\u2022 It is highly optimized for our data structure (key-value pairs with ",(0,t.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/rlp/",children:"RLP-encodable"})," values).\n\u2022 It depends on merkle siblings of the current state of Functor, which can be cached across CDNs, on data availability layers and/or on an outsourced prover\u2019s device.\n\u2022 If user is running Functor\u2019s lightnode themselves, it can be pre-computed."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"what-kind-of-permissions-can-be-described-on-a-session",children:"What kind of permissions can be described on a session?"}),"\n",(0,t.jsx)(n.p,{children:"The short answer is: Any kind of permission \u2014 bounds to asset expenditures, smart contract calls with constraint arguments, conditional logic with off-chain data, etc."}),"\n",(0,t.jsxs)(n.p,{children:["At a technical level, though, this is not a trivial problem to solve ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"efficiently"})})," for all cases. The simplest kind of permissions such as bounded asset expenditure are not an issue, since they can be included in the merkle proof during the ",(0,t.jsx)(n.code,{children:"userOperation"})," creation since all verification parameters are present in Functor already. On other hand, more complex permissions might ask for off-chain oracles\u2019 data, data on other chains, or just be too complex to efficiently include during the formation of the ",(0,t.jsx)(n.code,{children:"userOperation"}),". This is another reason to aim for complexity through ",(0,t.jsx)(n.strong,{children:"session composition"})," instead of a single complex permission scope."]}),"\n",(0,t.jsx)(n.p,{children:"Nevertheless, these complex permissions can always be encapsulated in a single zero-knowledge proof (ZKP), possibly composed of an aggregate of other ones. These ZKPs\u2019 production can be further optimized by approaches such as:\n\u2022 Delegate the ZKP production to the off-chain oracles we expect data from (for the permissions to be fulfilled). These can even be posted to a single ZKP storage for multiple users depending on the same oracle to re-use them.\n\u2022 We not necessarily have to prove consistency of the transaction with the complete set of permissions, but only on the ones the transaction actually interacts with."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"help-session-was-wrong-how-can-i-delete-it",children:"Help! Session was wrong, how can I delete it?"}),"\n",(0,t.jsx)(n.p,{children:"Sessions are designed to require an expiration condition, simply a date or a more complex dependency of off-chain and on-chain variables. This means you can be safe your session will expire eventually, being secure by default. Nevertheless, if there was something deeply unsafe about the permissions given or a powerful signing key was compromised, forcefully deleting a session key is easy:  Updating it with an empty session associated with said signing key, using the same authentication factors originally used."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"what-is-session-composition",children:"What is session composition?"}),"\n",(0,t.jsxs)(n.p,{children:["Certain use cases require session keys with broader permissions; however, optimal security is achieved when scopes are small and simple. ",(0,t.jsx)(n.strong,{children:"Session composition"})," enables independent sessions to combine and constrain their permissions with each other\u2019s, allowing users to define complex on-chain behaviors without granting excessive permissions to a single key: Security through simplicity, complexity through composition."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"so-is-functor-all-about-storing-session-configurations",children:"So, is Functor all about storing session configurations?"}),"\n",(0,t.jsx)(n.p,{children:"No! It is much more!"}),"\n",(0,t.jsxs)(n.p,{children:["Although session keys is an attractive and really general use case for a keystore rollup, Functor is still a ",(0,t.jsx)(n.strong,{children:"general purpose keystore"}),". This means we store any configuration and parameters users might want to use to customize their smart accounts and synchronize them across chains. After ",(0,t.jsx)(n.a,{href:"https://eip.tools/eip/7600",children:"Pectra"})," hardfork, complete upgradeability from EOA to Smart Accounts will be possible and EOAs can be a thing of the past. This means, Functor serves to glue the account abstracted future across the fragmented L2 world."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"web3-is-moving-forward-to-chain-abstraction-and-an-intent-centric-experience-how-does-functor-relate-with-intents",children:"Web3 is moving forward to chain abstraction and an intent-centric experience. How does Functor relate with intents?"}),"\n",(0,t.jsx)(n.p,{children:"Intent engines ultimately do two things:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Produce a sequence of transactions that achieves a desired on-chain outcome"}),"\n",(0,t.jsx)(n.li,{children:"Asks the user to sign a final end-to-end set of transactions to execute the intent."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Functor enhances and intertwines with both. For the second one, intents approval can be simplified greatly and even automated by creating a session able to initialize and approve certain types of intents within the session constraints. For the first, we allow intent engines to consider collaboration between AI agents associated with a given Smart Contract Account, so that the solver can propose richer transaction paths."}),"\n",(0,t.jsx)(n.hr,{})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"market-related",children:(0,t.jsx)(n.strong,{children:"Market related"})}),"\n",(0,t.jsx)(n.h3,{id:"what-value-is-functor-adding-to-the-key-management-space",children:"What value is Functor adding to the key management space?"}),"\n",(0,t.jsxs)(n.p,{children:["Following the ",(0,t.jsx)(n.a,{href:"https://eip.tools/eip/7600",children:"Pectra hardfork"}),", key management evolves from \u2018protecting a private key\u2019 to allowing users unlimited customization of their accounts through Smart Contract Accounts (SCA). This is untapping even bigger markets for Web3 such as on-chain AI agents."]}),"\n",(0,t.jsx)(n.p,{children:"Nevertheless, one core issue is that this unlimited customization power is still fragmented across chains, i.e. users need to manage independent wallets on each chain. Keystore rollups solve this, by offering a single source of truth for accounts configurations."}),"\n",(0,t.jsx)(n.p,{children:"Moreover, for the specific AI agents use-case, Functor specializes in a specific kind of configuration: Session keys. This allows AI agents controlled and temporary access to our assets, mitigating risks of automatizing our on-chain future."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"what-can-ai-agent-providers-achieve-by-partnering",children:"What can AI agent providers achieve by partnering?"}),"\n",(0,t.jsxs)(n.p,{children:["Functor allows users to limit and customize AI agents' access to their assets. This is done through a session key, living in Functor (making it cross-chain accessible), expressing permissions scope and expiration condition. Additionally, simple and case-specific AI agents can collaborate with each other through ",(0,t.jsx)(n.strong,{children:"session composition"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"what-market-validation-have-you-received-for-the-ai-agents-use-case",children:"What market validation have you received for the AI agent\u2019s use case?"}),"\n",(0,t.jsx)(n.p,{children:"From our discussions with various AI agent projects, we\u2019ve identified several recurring concerns with existing solutions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Cost: Prices are too high or not suitable for the scale they operate on."}),"\n",(0,t.jsx)(n.li,{children:"Performance: Current options are often too slow."}),"\n",(0,t.jsx)(n.li,{children:"Trust: There\u2019s a general lack of trust in the security and reliability of many available solutions."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"When it comes to building their own solution, the feedback has been consistent:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Risk: Too risky, liabilities related with handling private keys or having to develop a solution that\u2019s outside their focus."}),"\n",(0,t.jsx)(n.li,{children:"Cost: The high cost of development, both in terms of time and money, is a major deterrent."}),"\n",(0,t.jsx)(n.li,{children:"Specialization: They prefer to focus on their AI Agent efforts instead of assuming a task that can be delegated."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"what-are-some-specific-use-cases-for-cross-chain-sessions-and-session-composition",children:"What are some specific use cases for cross-chain sessions and session composition?"}),"\n",(0,t.jsx)(n.p,{children:"Session keys by themselves unlock lots of use cases, but here are three around the cross-chain and composition properties:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DeFi portfolio with cross-chain liquidity"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"By allowing a session key to bridge when bridging prices are within some range (and potentially other on-chain and off-chain data), complex trades can be achieved even when bridging is necessary. This could be made secure through session composition: Different keys allow restrictive permissions on each chain, and a different one for each bridge, with independent conditions. This setup allows for portfolio rebalancing and optimization of staking & yield."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Cross-play in decentralized Gaming"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"Resources belonging to different decentralized games, even across chains, can be securely correlated through a session. This allows activity in one game to affect any number of other games in complex ways only limited by the composition setup relating the sessions."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Automatic voting delegation in DAOs"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"From simple setups such as \u201cAllow person A to vote on my behalf every Friday\u201d to much more complex ones as \u201cAllow voting from this combination of wallets only when proposal contains X and market metric is within Y\u201d. Aligning sessions with our beliefs simplify participation in parts of the ecosystem we care the most."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"how-does-functor-compare-with-other-keystore-rollups",children:"How does Functor compare with other Keystore rollups?"}),"\n",(0,t.jsx)(n.p,{children:"Functor, as a general purpose Keystore (KS) layer, shares several standard components with every KS such as:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Keystore contracts to store the state merkle root and keep it available for all L2s to read it."}),"\n",(0,t.jsxs)(n.li,{children:["Minimal smart account interface for ",(0,t.jsx)(n.code,{children:"userOperation"})," validation to read the KS."]}),"\n",(0,t.jsx)(n.li,{children:"Other general L2 components, etc."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Nevertheless, Functor is pretty unique in:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Being session key first, providing features such as session composition, arbitrary kind of permissions and a higher performance in proof production for session keys."}),"\n",(0,t.jsx)(n.li,{children:"Specializing for the AI agents use case by design, while keeping it general. We recognize a bright future in the intersection between Web3 and AI, and concluded immensely valuable to optimize our execution client to manage AI agent collaboration through session composition and also a possibly high number of concurrent sessions defined over a single wallet, scaling our zk proofs through proof aggregations and recursive proofs."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"what-exactly-does-your-traction-number-of-light-nodes-actually-mean",children:"What exactly does your traction (number of light nodes) actually mean?"}),"\n",(0,t.jsx)(n.p,{children:"Since Functor nodes are lightweight by design, we are in constant development of ways to run them seamlessly in computationally constraint-environment such as browser (through our chrome extension). This first wave of node users offer us a practical environment to experiment with our technology as we scale."}),"\n",(0,t.jsx)(n.p,{children:"In that sense, our traction means two things:\n\u2022 User\u2019s interest and willingness on being a node through a web browser. This shows market penetration and user adoption for the project.\n\u2022 The initial scale at which our execution layer is expected to work."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"how-do-functor-networks-tokenomics-work",children:"How do Functor Network\u2019s tokenomics work?"}),"\n",(0,t.jsx)(n.p,{children:"Functor Network operates as a minimal keystore L2, where users pay gas fees in the native token of the chain they are interacting with. These gas fees compensate node operators for storing and managing session keys. The work done by nodes is rolled-up periodically and paid on Ethereum mainnet, ensuring network stability and sustained operations."}),"\n",(0,t.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}const m={title:"Frequently Asked Questions",sidebar_position:7,hide_table_of_contents:!0},g=void 0,f={id:"faqs",title:"Frequently Asked Questions",description:"",source:"@site/docs/faqs.mdx",sourceDirName:".",slug:"/faqs",permalink:"/faqs",draft:!1,unlisted:!1,editUrl:"https://github.com/slabsxyz/docs/tree/main/docs/faqs.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Frequently Asked Questions",sidebar_position:7,hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Glossary",permalink:"/concepts/glossary"}},y={},x=[{value:"<strong>Keystore related</strong>",id:"keystore-related",level:2},{value:"What is a keystore rollup?",id:"what-is-a-keystore-rollup",level:3},{value:"What are the components of a keystore rollup, specifically for Functor?",id:"what-are-the-components-of-a-keystore-rollup-specifically-for-functor",level:3},{value:"What exactly is a light node in Functor?",id:"what-exactly-is-a-light-node-in-functor",level:3},{value:"Why is it valuable for nodes to be lightweight?",id:"why-is-it-valuable-for-nodes-to-be-lightweight",level:3},{value:"Give me more details on how the keystore contracts work.",id:"give-me-more-details-on-how-the-keystore-contracts-work",level:3},{value:"<strong>Session keys related</strong>",id:"session-keys-related",level:2},{value:"What exactly are session keys?",id:"what-exactly-are-session-keys",level:3},{value:"What do I need to create a session key?",id:"what-do-i-need-to-create-a-session-key",level:3},{value:"Okay but, I am a real nerd. <em>exactly how</em> are sessions created from my authentication?",id:"okay-but-i-am-a-real-nerd-exactly-how-are-sessions-created-from-my-authentication",level:3},{value:"How are session keys used through Functor Network?",id:"how-are-session-keys-used-through-functor-network",level:3},{value:"Can you show the session usage in a diagram?",id:"can-you-show-the-session-usage-in-a-diagram",level:3},{value:"Do you have any performance bottlenecks?",id:"do-you-have-any-performance-bottlenecks",level:3},{value:"What kind of permissions can be described on a session?",id:"what-kind-of-permissions-can-be-described-on-a-session",level:3},{value:"Help! Session was wrong, how can I delete it?",id:"help-session-was-wrong-how-can-i-delete-it",level:3},{value:"What is session composition?",id:"what-is-session-composition",level:3},{value:"So, is Functor all about storing session configurations?",id:"so-is-functor-all-about-storing-session-configurations",level:3},{value:"Web3 is moving forward to chain abstraction and an intent-centric experience. How does Functor relate with intents?",id:"web3-is-moving-forward-to-chain-abstraction-and-an-intent-centric-experience-how-does-functor-relate-with-intents",level:3},{value:"<strong>Market related</strong>",id:"market-related",level:2},{value:"What value is Functor adding to the key management space?",id:"what-value-is-functor-adding-to-the-key-management-space",level:3},{value:"What can AI agent providers achieve by partnering?",id:"what-can-ai-agent-providers-achieve-by-partnering",level:3},{value:"What market validation have you received for the AI agent\u2019s use case?",id:"what-market-validation-have-you-received-for-the-ai-agents-use-case",level:3},{value:"What are some specific use cases for cross-chain sessions and session composition?",id:"what-are-some-specific-use-cases-for-cross-chain-sessions-and-session-composition",level:3},{value:"How does Functor compare with other Keystore rollups?",id:"how-does-functor-compare-with-other-keystore-rollups",level:3},{value:"What exactly does your traction (number of light nodes) actually mean?",id:"what-exactly-does-your-traction-number-of-light-nodes-actually-mean",level:3},{value:"How do Functor Network\u2019s tokenomics work?",id:"how-do-functor-networks-tokenomics-work",level:3}];function v(e){const{Head:n}={...(0,o.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n,{children:(0,t.jsx)("meta",{prefix:"og: http://ogp.me/ns#"})}),"\n","\n",(0,t.jsx)(a,{toc:x}),"\n",(0,t.jsx)(l,{}),"\n",(0,t.jsx)(d,{}),"\n",(0,t.jsx)(p,{})]})}function w(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(v,{...e})}):v(e)}},5195:(e,n,s)=>{s.d(n,{A:()=>g});var t=s(6540),o=s(6342);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),s=Array(7).fill(-1);n.forEach(((e,n)=>{const t=s.slice(2,e.level);e.parentIndex=Math.max(...t),s[e.level]=n}));const t=[];return n.forEach((e=>{const{parentIndex:s,...o}=e;s>=0?n[s].children.push(o):t.push(o)})),t}function r(e){let{toc:n,minHeadingLevel:s,maxHeadingLevel:t}=e;return n.flatMap((e=>{const n=r({toc:e.children,minHeadingLevel:s,maxHeadingLevel:t});return function(e){return e.level>=s&&e.level<=t}(e)?[{...e,children:n}]:n}))}function a(e){const n=e.getBoundingClientRect();return n.top===n.bottom?a(e.parentNode):n}function c(e,n){let{anchorTopOffset:s}=n;const t=e.find((e=>a(e).top>=s));if(t){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(a(t))?t:e[e.indexOf(t)-1]??null}return e[e.length-1]??null}function l(){const e=(0,t.useRef)(0),{navbar:{hideOnScroll:n}}=(0,o.p)();return(0,t.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function h(e){const n=(0,t.useRef)(void 0),s=l();(0,t.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:t,linkActiveClassName:o,minHeadingLevel:i,maxHeadingLevel:r}=e;function a(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(t),a=function(e){let{minHeadingLevel:n,maxHeadingLevel:s}=e;const t=[];for(let o=n;o<=s;o+=1)t.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(t.join()))}({minHeadingLevel:i,maxHeadingLevel:r}),l=c(a,{anchorTopOffset:s.current}),h=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,s){s?(n.current&&n.current!==e&&n.current.classList.remove(o),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===h)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,s])}var d=s(8774),u=s(4848);function p(e){let{toc:n,className:s,linkClassName:t,isChild:o}=e;return n.length?(0,u.jsx)("ul",{className:o?void 0:s,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(d.A,{to:`#${e.id}`,className:t??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(p,{isChild:!0,toc:e.children,className:s,linkClassName:t})]},e.id)))}):null}const m=t.memo(p);function g(e){let{toc:n,className:s="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:l,maxHeadingLevel:d,...p}=e;const g=(0,o.p)(),f=l??g.tableOfContents.minHeadingLevel,y=d??g.tableOfContents.maxHeadingLevel,x=function(e){let{toc:n,minHeadingLevel:s,maxHeadingLevel:o}=e;return(0,t.useMemo)((()=>r({toc:i(n),minHeadingLevel:s,maxHeadingLevel:o})),[n,s,o])}({toc:n,minHeadingLevel:f,maxHeadingLevel:y});return h((0,t.useMemo)((()=>{if(a&&c)return{linkClassName:a,linkActiveClassName:c,minHeadingLevel:f,maxHeadingLevel:y}}),[a,c,f,y])),(0,u.jsx)(m,{toc:x,className:s,linkClassName:a,...p})}},792:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/session_usage-1b80126dea27d635104ae05cbbf994a5.png"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(6540);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);