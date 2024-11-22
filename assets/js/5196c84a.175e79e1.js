"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[708],{2717:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=s(4848),r=s(8453);const o={title:"Hackathon Guide",sidebar_position:8},a=void 0,c={id:"hackathon_guide",title:"Hackathon Guide",description:"RPC Endpoint",source:"@site/docs/hackathon_guide.mdx",sourceDirName:".",slug:"/hackathon_guide",permalink:"/hackathon_guide",draft:!1,unlisted:!1,editUrl:"https://github.com/slabsxyz/docs/tree/main/docs/hackathon_guide.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Hackathon Guide",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Frequently Asked Questions",permalink:"/faqs"}},i={},d=[{value:"RPC Endpoint",id:"rpc-endpoint",level:3},{value:"Overview",id:"overview",level:3},{value:"1. Method: <code>functor_createSmartAccount</code>",id:"1-method-functor_createsmartaccount",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Sample Request",id:"sample-request",level:3},{value:"Expected Response",id:"expected-response",level:3},{value:"2. Method: <code>functor_createSessionKey</code>",id:"2-method-functor_createsessionkey",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Sample Request",id:"sample-request-1",level:3},{value:"Expected Response",id:"expected-response-1",level:3},{value:"Process Flow for Account and Session Management",id:"process-flow-for-account-and-session-management",level:3},{value:"Usage and Architecture",id:"usage-and-architecture",level:2},{value:"Working Example",id:"working-example",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{children:(0,t.jsx)("meta",{prefix:"og: http://ogp.me/ns#"})}),"\n",(0,t.jsx)(n.h3,{id:"rpc-endpoint",children:"RPC Endpoint"}),"\n",(0,t.jsxs)(n.p,{children:["Base URL: ",(0,t.jsx)(n.a,{href:"http://54.163.51.119:3007",children:"http://54.163.51.119:3007"})]}),"\n",(0,t.jsxs)(n.p,{children:["Note: please request a working API Key to ",(0,t.jsx)(n.a,{href:"mailto:ata@securitylabs.xyz",children:"ata@securitylabs.xyz"})]}),"\n",(0,t.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Functor Network\u2019s RPC endpoint provides methods for creating and managing smart accounts and session keys. This guide explains:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Creating Smart Accounts with ",(0,t.jsx)(n.code,{children:"functor_createSmartAccount"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Creating Session Keys with ",(0,t.jsx)(n.code,{children:"functor_createSessionKey"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"The process flow for using these tools to manage accounts and sessions efficiently in the Functor Network."}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"1-method-functor_createsmartaccount",children:["1. Method: ",(0,t.jsx)(n.code,{children:"functor_createSmartAccount"})]}),"\n",(0,t.jsxs)(n.p,{children:["This method creates a smart contract wallet, or \u201csmart account,\u201d based on the ",(0,t.jsx)(n.a,{href:"https://www.erc4337.io/docs",children:"ERC-4337"})," standard. These accounts support features like multi-signature (multi-sig), social recovery, and more flexible gas payment options."]}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"owner"}),": Wallet address of the account owner."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"recoveryMechanism"}),": List of guardian addresses for account recovery."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"paymaster"}),": Address of a contract that sponsors gas payments."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sample-request",children:"Sample Request"}),"\n",(0,t.jsx)(n.p,{children:"Here\u2019s a JavaScript example using fetch to create a smart account:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'fetch(\'http://54.163.51.119:3007\', {\n  method: \'POST\',\n  headers: { \'Content-Type\': \'application/json\', \'x-api-key\': \'[Your API key goes here]\' },\n  body: JSON.stringify({\n    "id": 1,\n    "jsonrpc": "2.0",\n    "method": "functor_createSmartAccount",\n    "params": [\n      "0x1234567890abcdef1234567890abcdef12345678",\n      [\n        "0xabcdef1234567890abcdef1234567890abcdef12",\n        "0xabcdef1234567890abcdef1234567890abcdef13"\n      ],\n      "0xabcdef1234567890abcdef1234567890abcdef14"\n    ]\n  })\n})\n.then(response => response.json())\n.then(data => console.log(data));\n'})}),"\n",(0,t.jsx)(n.h3,{id:"expected-response",children:"Expected Response"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "smartAccountAddress": "0x4abd3dD0a1efccad89BE4855Ccdea32E8CCBF591",\n    "creationDate": 71773046\n  },\n  "id": 1\n}\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"2-method-functor_createsessionkey",children:["2. Method: ",(0,t.jsx)(n.code,{children:"functor_createSessionKey"})]}),"\n",(0,t.jsx)(n.p,{children:"This method creates a session key with specific permissions, allowing certain actions within a smart contract wallet based on the smart contract ABI."}),"\n",(0,t.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"walletAddress"}),": Address of the wallet to which the session key is linked."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"permissions"}),": Array of permissions defining which methods the session key can invoke."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"expiry"}),": Duration (in seconds) until the session key expires."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"metadata"}),": (Optional) Additional information, such as a label or restriction indicator."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sample-request-1",children:"Sample Request"}),"\n",(0,t.jsx)(n.p,{children:"This JavaScript example demonstrates creating a session key for a smart wallet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'fetch(\'http://54.163.51.119:3007\', {\n  method: \'POST\',\n  headers: { \'Content-Type\': \'application/json\', \'x-api-key\': \'[Your API key goes here]\' },\n  body: JSON.stringify({\n    "jsonrpc": "2.0",\n    "method": "functor_createSessionKey",\n    "params": [\n      "0x1234567890abcdef1234567890abcdef12345678", // Smart contract wallet address\n      [\n        { // Permissions Object\n          "contractAbi": "[{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"_to\\",\\"type\\":\\"address\\"},{\\"name\\":\\"_value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"transfer\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"type\\":\\"function\\"}]",\n          "allowedMethods": [\n            "transfer(address,uint256)"\n          ]\n        }\n      ],\n      3600, // Session duration in seconds\n      { // Metadata\n        "label": "AI Agent Session Key",\n        "restricted": true\n      }\n    ],\n    "id": 1\n  })\n})\n.then(response => response.json())\n.then(data => console.log(data));\n'})}),"\n",(0,t.jsx)(n.h3,{id:"expected-response-1",children:"Expected Response"}),"\n",(0,t.jsx)(n.p,{children:"The response includes details of the generated session key:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "sessionKey": "0xabc123456...",\n    "expiry": 3600,\n    "metadata": {\n      "label": "AI Agent Session Key",\n      "restricted": true\n    }\n  },\n  "id": 1\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"process-flow-for-account-and-session-management",children:"Process Flow for Account and Session Management"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Account Creation"}),": Start by creating a smart account using ",(0,t.jsx)(n.code,{children:"functor_createSmartAccount"}),". This establishes the user\u2019s wallet on the network with the owner\u2019s address and any optional recovery mechanisms."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Session Key Creation"}),": Once the account is set up, create a session key with ",(0,t.jsx)(n.code,{children:"functor_createSessionKey"}),". This key allows the user or AI agent to interact with the smart account within specified permissions and duration, enhancing security and control."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"usage-and-architecture",children:"Usage and Architecture"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Session"}),": The session key enables limited, time-bound interactions with the smart contract wallet, ideal for task automation and access delegation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Architecture"}),": The Functor Network architecture separates account management from session authorization, utilizing session keys to interact securely with smart contract wallet accounts. This minimizes risk by granting restricted access rather than full wallet control. Functor provides an L2 that serves as a single source of truth to seamlessly verify Session Key permissions across all EVM compatible blockchains."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"working-example",children:"Working Example"}),"\n",(0,t.jsx)(n.p,{children:"The following are instructions to run a working example to get you started sending requests to our RPC Endpoints. Open your terminal and execute the following commands:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir test_functor_rpc;\ncd test_functor_rpc;\nnpm init -y;\ntouch request.js;\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"NOTE"}),": This example was run using node version 20.18.0"]}),"\n",(0,t.jsxs)(n.p,{children:["Copy the following code into the ",(0,t.jsx)(n.code,{children:"request.js"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'function createSmartAccount () {\n  return new Promise((resolve, reject) => {\n    const requestBody = JSON.stringify({\n      "id": 1,\n      "jsonrpc": "2.0",\n      "method": "functor_createSmartAccount",\n      "params": [\n        "0x1234567890abcdef1234567890abcdef12345678",\n        [\n          "0xabcdef1234567890abcdef1234567890abcdef12",\n          "0xabcdef1234567890abcdef1234567890abcdef13"\n        ],\n        "0xabcdef1234567890abcdef1234567890abcdef14"\n      ]\n    });\n    console.log(\'requestBody...:\', requestBody);\n    fetch(\'http://54.163.51.119:3007\', {\n      method: \'POST\',\n      headers: { \'Content-Type\': \'application/json\' , \'x-api-key\': \'8c854746-20cc-4521-b67c-4306ff53c8ff\' },\n      body: requestBody\n    })\n    .then(async response => {\n      console.log(\'response...:\', response);\n      if (!response.ok) {\n        // If the response is not OK, try to read it as text\n        const errorText = await response.text();\n        throw new Error(`Request failed with status ${response.status}: ${errorText}`);\n      }\n      return response.json();\n    })\n    .then(data => {\n      console.log("Response data:", data);\n      resolve(data);\n    })\n    .catch(error => {\n      console.error(\'Error:\', error);\n      reject(error);\n    });\n  });\n}\n\nfunction createSessionKey(smartAccountAddress) {\n  return new Promise((resolve, reject) => {\n    fetch(\'http://54.163.51.119:3007\', {\n      method: \'POST\',\n      headers: { \'Content-Type\': \'application/json\' , \'x-api-key\': \'8c854746-20cc-4521-b67c-4306ff53c8ff\' },\n      body: JSON.stringify({\n        "jsonrpc": "2.0",\n        "method": "functor_createSessionKey",\n        "params": [\n          "0x1234567890abcdef1234567890abcdef12345678",\n          [\n            {\n              "contractAbi": "[{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"_to\\",\\"type\\":\\"address\\"},{\\"name\\":\\"_value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"transfer\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"type\\":\\"function\\"}]",\n              "allowedMethods": [\n                "transfer(address,uint256)"\n              ]\n            }\n          ],\n          3600,\n          {\n            "label": "AI Agent Session Key",\n            "restricted": true\n          }\n        ],\n        "id": 1\n      })\n    })\n    .then(response => response.json())\n    .then(data => {\n      console.log(data)\n      resolve(data);\n    })\n    .catch(error => {\n      console.error(\'Error:\', error);\n      reject(error);\n    });\n  });\n}\n\ncreateSmartAccount().then( (smartAccount) => {\n  console.log("smartAccount...:", smartAccount);\n  createSessionKey(smartAccount.result.smartAccountAddress)\n  .then( (sessionKey) => {\n    console.log("sessionKey...:", sessionKey);\n  })\n  .catch( (error) => {\n    console.error(\'Error creating sessionKey:\', error);\n  });\n});\n'})}),"\n",(0,t.jsx)(n.p,{children:"Run the code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"node request.js\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You should see the ",(0,t.jsx)(n.code,{children:"smartAccount"})," and ",(0,t.jsx)(n.code,{children:"sessionKey"})," responses printed to the terminal."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var t=s(6540);const r={},o=t.createContext(r);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);