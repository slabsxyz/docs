## **Keystore related**

### What is a keystore rollup?
    
A [**minimal keystore rollup**](https://docs.securitylabs.xyz/) is a cross-chain [key/value store](https://docs.securitylabs.xyz/concepts/glossary/#key-value-store) for smart wallet configurations such as [session keys](https://docs.securitylabs.xyz/concepts/glossary/#session-key) and public keys. It is **minimal** in that its nodes need only to manage this simple [key/value database](https://docs.securitylabs.xyz/concepts/glossary/#key-value-store), and not balances nor smart contracts. This makes our nodes lightweight and easy to run on computationally-constrained environment, making it possible to run light nodes even on web browsers.

---

### What are the components of a keystore rollup, specifically for Functor?
    
At a high level, it has:
- **Nodes**: Full nodes (execution clients), light nodes, data availability node, etc.
- **Infrastructure Smart contracts**: Contracts for state settlement such as Keystore contracts on the L1 and every L2, keeping the state of Functor accessible. Also, **smart account interfaces** for *anyone to inherit* the ability to use Functor inside their own smart contract design.
- **Network components**: Sequencing layer, calling interfaces (RPC providers, explorers, etc.), ZK provers layer.

---

### What exactly is a light node in Functor?
    
[‘Light node’](https://docs.securitylabs.xyz/concepts/glossary/#light-node) (also commonly known as ‘light client’) is a standard term for nodes which only download a small portion of the data in a blockchain, and use indirect means to verify that a given chain is valid. As described on [this classical paper](https://arxiv.org/pdf/1809.09044), these help scale the availability, security and performance of any blockchain. These light nodes, by being less technologically demanding, are easier to run on computationally-constrained environments such as IoT devices and web browsers. 

---

### Why is it valuable for nodes to be lightweight?
    
To fulfill our aim: Allow easy access to every user to also become a Functor node if they so desire. This not only increases our security and performance, but also their user experience by having access to part of Functor state, allowing for pre-computing and cheaper configuration (authentication, session, etc.) updates.

It is additionally worthy to note that **every** node in Functor network is lightweight in a more general sense: Consensus, data availability and execution layers are decoupled; meaning a node works by running only its [execution client](https://docs.securitylabs.xyz/concepts/glossary/#execution-client) while other components of the system work independently. Since Functor’s execution client is small by design (simplicity = more security), nodes are run on environment with more limited computational resources. 

---

### Give me more details on how the keystore contracts work.
    
Keystore contracts keep the state of Functor verifiable across any L2 and their underlying L1 as a **merkle tree root**. There are two kinds:
- **L1 keystore contract**: Functor’s consensus settles the merkle tree root here. From here it is propagated to every L2 with a L2 keystore contract.
- **L2 keystore contracts**: Every L2 that wants to store smart contract wallet’s configurations in Functor requires to at least have this contract. It allows their bundlers to verify transactions against Functor’s state root.

---
