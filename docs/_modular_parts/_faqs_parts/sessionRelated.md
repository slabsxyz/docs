## **Session keys related**

### What exactly are session keys?
    
Session keys have two parts:
- **Signing key**, used to sign transactions just as any key. 
- **Session configuration**, describing permission scope and session expiration conditions. This is stored in Functor to be cheaply updateable and readable as a single source of truth from any L2.

---

### What do I need to create a session key?
    
In practice, any authentication factor our zk-circuits support. Currently being any passkey compatible authentication factor, but more generally, imagine MFA and/or threshold signatures schemes for the future. 

---

### Okay but, I am a real nerd. *exactly how* are sessions created from my authentication?
    
**More in-depth**: Sessions keys are **deterministically associated with smart contract account (SCA)**. Thanks to [CREATE2](https://www.evm.codes/?fork=cancun#f5) offering a deterministic way of having the same address across every chain, a well-defined relationship between SCAs and all its sessions can be established in Functor even if said SCAs haven’t been deployed in all L2s. 

This implies updates on the session configurations and new sessions need only to ask for authentication from the SCA’s owner, this being anything they want to use as long as Functor’s validators can verify it. Our verification process is based on zero-knowledge proofs, agnostic to proof systems. Authentication circuits for different and increasingly more general authentication schemes are being built, prioritizing the ones with good UX such as Webauthn for Passkeys.

---

### How are session keys used through Functor Network?
    
Once the session configuration is in Functor, [`userOperation`s](https://eips.ethereum.org/EIPS/eip-4337#useroperation) sent to any L2 (where our keystore contract lies) can verify their validity against the conditions described in such configuration. This is done by checking the configuration is contained and valid in the current state of Functor, verified permissionlessly through the Keystore contract. At a more technical level, Functor’s state is a special kind of merkle tree and the proof being validated is a Merkle proof framed as a SNARK to be cheaply verified on-chain.

---

### Can you show the session usage in a diagram?
    
For sure!
    
![session_usage](/img/session_usage.png)
    
We have the following steps: 
1) The signing key holder proves the corresponding configuration exists in Functor (Merkle proof framed as a SNARK for cheap on-chain verification).
2) A `userOperation` is produced and signed, containing the proof and the transaction logic itself. 
    
3) Proof is validated by the Bundler before executing. Proof will be valid only if these three conditions are true:

    a. Transaction logic is within the permission’s scope.
    b. Expiration condition hasn’t occurred. 
    c. The Merkle proof correspond with the state root stored in the Keystore Contract

---

### Do you have any performance bottlenecks?
    
Not really, Merkle proofs are fast to validate:
• It is highly optimized for our data structure (key-value pairs with [RLP-encodable](https://ethereum.org/en/developers/docs/data-structures-and-encoding/rlp/) values). 
• It depends on merkle siblings of the current state of Functor, which can be cached across CDNs, on data availability layers and/or on an outsourced prover’s device.
• If user is running Functor’s lightnode themselves, it can be pre-computed.

---

### What kind of permissions can be described on a session?
    
The short answer is: Any kind of permission — bounds to asset expenditures, smart contract calls with constraint arguments, conditional logic with off-chain data, etc.

At a technical level, though, this is not a trivial problem to solve ***efficiently*** for all cases. The simplest kind of permissions such as bounded asset expenditure are not an issue, since they can be included in the merkle proof during the `userOperation` creation since all verification parameters are present in Functor already. On other hand, more complex permissions might ask for off-chain oracles’ data, data on other chains, or just be too complex to efficiently include during the formation of the `userOperation`. This is another reason to aim for complexity through **session composition** instead of a single complex permission scope.

Nevertheless, these complex permissions can always be encapsulated in a single zero-knowledge proof (ZKP), possibly composed of an aggregate of other ones. These ZKPs’ production can be further optimized by approaches such as:
• Delegate the ZKP production to the off-chain oracles we expect data from (for the permissions to be fulfilled). These can even be posted to a single ZKP storage for multiple users depending on the same oracle to re-use them.
• We not necessarily have to prove consistency of the transaction with the complete set of permissions, but only on the ones the transaction actually interacts with.

---

### Help! Session was wrong, how can I delete it?
    
Sessions are designed to require an expiration condition, simply a date or a more complex dependency of off-chain and on-chain variables. This means you can be safe your session will expire eventually, being secure by default. Nevertheless, if there was something deeply unsafe about the permissions given or a powerful signing key was compromised, forcefully deleting a session key is easy:  Updating it with an empty session associated with said signing key, using the same authentication factors originally used.

---

### What is session composition?
    
Certain use cases require session keys with broader permissions; however, optimal security is achieved when scopes are small and simple. **Session composition** enables independent sessions to combine and constrain their permissions with each other’s, allowing users to define complex on-chain behaviors without granting excessive permissions to a single key: Security through simplicity, complexity through composition.

---

### So, is Functor all about storing session configurations?
    
No! It is much more!

Although session keys is an attractive and really general use case for a keystore rollup, Functor is still a **general purpose keystore**. This means we store any configuration and parameters users might want to use to customize their smart accounts and synchronize them across chains. After [Pectra](https://eip.tools/eip/7600) hardfork, complete upgradeability from EOA to Smart Accounts will be possible and EOAs can be a thing of the past. This means, Functor serves to glue the account abstracted future across the fragmented L2 world. 

---

### Web3 is moving forward to chain abstraction and an intent-centric experience. How does Functor relate with intents?
    
Intent engines ultimately do two things:

1. Produce a sequence of transactions that achieves a desired on-chain outcome
2. Asks the user to sign a final end-to-end set of transactions to execute the intent.

Functor enhances and intertwines with both. For the second one, intents approval can be simplified greatly and even automated by creating a session able to initialize and approve certain types of intents within the session constraints. For the first, we allow intent engines to consider collaboration between AI agents associated with a given Smart Contract Account, so that the solver can propose richer transaction paths.

---
