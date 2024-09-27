---
title: Glossary
sidebar_position: 4
customIcon: fa-solid fa-brain
---

<!-- # Key Management Abstraction -->

### Atomic Transaction
An **atomic transaction** in the context of blockchain is a transaction composed of multiple interdependent actions, potentially across different chains or involving various smart contracts, that either executes in its entirety or is fully reverted. This ensures that no partial state changes occur, preserving the system's consistency. A key example of atomic transactions is **atomic swaps**, where tokenized assets are exchanged between different blockchains without third-party intermediaries. Atomic swaps leverage cryptographic mechanisms like Hash Timelock Contracts (HTLCs) to ensure that the swap is completed fully or canceled, maintaining decentralization and preventing any party from being shortchanged.

### Consensus Client
A **consensus client** in a blockchain node implements the network's consensus mechanism, ensuring that the blockchain reaches agreement on valid data by verifying the information provided by the execution client. It enables nodes to synchronize and maintain the correct blockchain state across the network.

### Data Availability
**Data availability** refers to the guarantee that transaction data in a blockchain is published and accessible to all network participants for verification. It ensures that the data required to validate a blockchain’s state is publicly available, preventing malicious actors from withholding critical information while claiming valid execution.

### Execution Client
An **execution client** in a blockchain node processes incoming transactions, executes them in the virtual machine, and maintains the current state and database of all network data. It is responsible for listening to new transactions and updating the blockchain's ledger accordingly.

### Indexed Merkle Tree
An **Indexed Merkle tree** is a variant of the [Merkle Tree](/concepts/glossary/#merkle-tree) where each data element is associated with a specific index, enabling more efficient lookup and verification. This structure enhances data retrieval by ensuring that the position of each piece of data within the tree is explicitly defined, optimizing the process of generating proofs for individual elements.

### Key-value Store
A **key-value store** is a type of database that stores data as a collection of key-value pairs, where each key is unique and maps to a specific value. It allows for efficient retrieval of values based on their associated keys, commonly used in caching and simple data retrieval scenarios.

In the case of a keystore network, this is structured as a [Merkle Tree](/concepts/glossary/#merkle-tree). Specifically, an [Indexed Merkle Tree](/concepts/glossary/#indexed-merkle-tree), which optimizes for its access purpose.

### Light Node
A **light node** is a type of blockchain node that only downloads and verifies block headers rather than the full blockchain, allowing it to operate with minimal resource requirements. By requesting additional data from full nodes (or its modular components such as [data availability](/concepts/glossary/#data-availability) layer) when needed and verifying it against the block headers, light nodes provide access to the blockchain's functionality and security guarantees without the need for powerful hardware, making them suitable for lightweight devices and specialized networks like keystores.

### Merkle Tree
A **Merkle tree** is a cryptographic data structure that organizes data into a tree-like format, where each leaf node represents a hash of a data block, and each non-leaf node is a hash of its child nodes. This structure allows efficient and secure verification of large sets of data by providing a single root hash that represents the entire dataset, with proofs for individual data points requiring only a small portion of the tree.

### Modular Blockchain
A **modular blockchain** is a blockchain architecture that separates core functions such as execution, consensus, and data availability into specialized layers, allowing each layer to focus on one or more specific tasks. This modular approach enhances scalability, flexibility, and efficiency by enabling different blockchains to collaborate and optimize for specific roles, rather than handling all functions within a single, monolithic chain.

### Session Key
A **session key** in Web3 is a temporary, limited-permission credential that allows users or AI agents to perform specific transactions or actions on behalf of a primary account without requiring repeated wallet authentications. It consists of a signing key and a configuration that defines its permissions, such as asset usage, transaction limits, and expiration, enabling seamless interaction with decentralized applications while maintaining security.

### Force Inclusion
**Force inclusion** is a mechanism in blockchain systems that allows users to bypass a malfunctioning or unresponsive Sequencer and ensure their transaction is included in the blockchain. After a predefined delay, any user can move their pending transaction from a secondary queue (like the delayed inbox) to the primary state-processing queue (the core inbox), ensuring censorship resistance and trustless inclusion even when the Sequencer fails to perform its duties.


<!-- **Key Management Abstraction (KMA)** removes the <u>complexities</u> for users to <u>manage</u> (store, backup/retrieve, rotate, import/export, etc.) private keys in a <u>secure</u> way. The kind of complexities and what security exactly means is discussed as follows:

## Complexities to remove
Let's first understand how, and in how many layers, is key management complex, achieving at the end a specific definition for key management as we understand it for our solution.

### Traditional Cryptographic Key management
Although cryptography is ancient, as a theoretical framework for secure communication in the pressence of adversarial behavior, it was only around [1970 that important ideas](https://web.archive.org/web/20141030210530/https://cryptocellar.web.cern.ch/cryptocellar/cesg/possnse.pdf) around public key infrastructure (PKI) were introduced. PKI is able to push forward a way to protect a whole set of operations, permissions and guarantees over some sensitive resources, all summarized on the ownership of a single private key — easily verifiable by anyone with the corresponding public key.

This made clear how [important key management is](https://www.wellesu.com/10.1109/49.223881), requiring techniques to keep this single private key secure while keeping it stored and operating over it. This is framed as **traditional cryptographic key management (KM)**.

AI Agent: An autonomous program that interacts with blockchain systems to perform tasks such as transaction execution and data verification.
Verifiable Computing: A cryptographic method that allows the validation of computations without revealing the underlying data.
Zero-Knowledge Proof (ZKP): A cryptographic proof that allows one party to prove they know a value without disclosing the actual value.
Oracles: Third-party services that provide external data to smart contracts.
Keystore Network: A decentralized network designed to store and manage cryptographic keys securely.
Session Keys: Temporary cryptographic keys used to secure transactions over a specific session.
Automation: The process of making systems operate without human intervention, commonly achieved through AI agents in blockchain environments. -->

<!-- ### Key management in Web3

The concept of KM have evolved in context with Web3: The ones securing this  -->



