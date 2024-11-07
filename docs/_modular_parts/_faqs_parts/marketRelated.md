## **Market related**

### What value is Functor adding to the key management space?
    
Following the [Pectra hardfork](https://eip.tools/eip/7600), key management evolves from ‘protecting a private key’ to allowing users unlimited customization of their accounts through Smart Contract Accounts (SCA). This is untapping even bigger markets for Web3 such as on-chain AI agents. 

Nevertheless, one core issue is that this unlimited customization power is still fragmented across chains, i.e. users need to manage independent wallets on each chain. Keystore rollups solve this, by offering a single source of truth for accounts configurations. 

Moreover, for the specific AI agents use-case, Functor specializes in a specific kind of configuration: Session keys. This allows AI agents controlled and temporary access to our assets, mitigating risks of automatizing our on-chain future.

---

### What can AI agent providers achieve by partnering?
    
Functor allows users to limit and customize AI agents' access to their assets. This is done through a session key, living in Functor (making it cross-chain accessible), expressing permissions scope and expiration condition. Additionally, simple and case-specific AI agents can collaborate with each other through **session composition**.

---

### What market validation have you received for the AI agent’s use case?
    
From our discussions with various AI agent projects, we’ve identified several recurring concerns with existing solutions:

- Cost: Prices are too high or not suitable for the scale they operate on.
- Performance: Current options are often too slow.
- Trust: There’s a general lack of trust in the security and reliability of many available solutions.

When it comes to building their own solution, the feedback has been consistent:

- Risk: Too risky, liabilities related with handling private keys or having to develop a solution that’s outside their focus.
- Cost: The high cost of development, both in terms of time and money, is a major deterrent.
- Specialization: They prefer to focus on their AI Agent efforts instead of assuming a task that can be delegated.

---

### What are some specific use cases for cross-chain sessions and session composition?
    
Session keys by themselves unlock lots of use cases, but here are three around the cross-chain and composition properties:

- **DeFi portfolio with cross-chain liquidity**:
    
    By allowing a session key to bridge when bridging prices are within some range (and potentially other on-chain and off-chain data), complex trades can be achieved even when bridging is necessary. This could be made secure through session composition: Different keys allow restrictive permissions on each chain, and a different one for each bridge, with independent conditions. This setup allows for portfolio rebalancing and optimization of staking & yield.
    
- **Cross-play in decentralized Gaming**:
    
    Resources belonging to different decentralized games, even across chains, can be securely correlated through a session. This allows activity in one game to affect any number of other games in complex ways only limited by the composition setup relating the sessions. 
    
- **Automatic voting delegation in DAOs**:
    
    From simple setups such as “Allow person A to vote on my behalf every Friday” to much more complex ones as “Allow voting from this combination of wallets only when proposal contains X and market metric is within Y”. Aligning sessions with our beliefs simplify participation in parts of the ecosystem we care the most.

---

### How does Functor compare with other Keystore rollups?
    
Functor, as a general purpose Keystore (KS) layer, shares several standard components with every KS such as:
- Keystore contracts to store the state merkle root and keep it available for all L2s to read it.
- Minimal smart account interface for `userOperation` validation to read the KS.
- Other general L2 components, etc.

Nevertheless, Functor is pretty unique in:

- Being session key first, providing features such as session composition, arbitrary kind of permissions and a higher performance in proof production for session keys.
- Specializing for the AI agents use case by design, while keeping it general. We recognize a bright future in the intersection between Web3 and AI, and concluded immensely valuable to optimize our execution client to manage AI agent collaboration through session composition and also a possibly high number of concurrent sessions defined over a single wallet, scaling our zk proofs through proof aggregations and recursive proofs.

---

### What exactly does your traction (number of light nodes) actually mean?
    
Since Functor nodes are lightweight by design, we are in constant development of ways to run them seamlessly in computationally constraint-environment such as browser (through our chrome extension). This first wave of node users offer us a practical environment to experiment with our technology as we scale. 

In that sense, our traction means two things:
• User’s interest and willingness on being a node through a web browser. This shows market penetration and user adoption for the project.
• The initial scale at which our execution layer is expected to work.

---

### How do Functor Network’s tokenomics work?
    
Functor Network operates as a minimal keystore L2, where users pay gas fees in the native token of the chain they are interacting with. These gas fees compensate node operators for storing and managing session keys. The work done by nodes is rolled-up periodically and paid on Ethereum mainnet, ensuring network stability and sustained operations.

---
