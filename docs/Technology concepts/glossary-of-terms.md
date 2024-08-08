---
sidebar_position: 1
customIcon: fa-solid fa-brain
---

# Key Management Abstraction

**Key Management Abstraction (KMA)** removes the <u>complexities</u> for users to <u>manage</u> (store, backup/retrieve, rotate, import/export, etc.) private keys in a <u>secure</u> way. The kind of complexities and what security exactly means is discussed as follows:

## Complexities to remove
Let's first understand how, and in how many layers, is key management complex, achieving at the end a specific definition for key management as we understand it for our solution.

### Traditional Cryptographic Key management
Although cryptography is ancient, as a theoretical framework for secure communication in the pressence of adversarial behavior, it was only around [1970 that important ideas](https://web.archive.org/web/20141030210530/https://cryptocellar.web.cern.ch/cryptocellar/cesg/possnse.pdf) around public key infrastructure (PKI) were introduced. PKI is able to push forward a way to protect a whole set of operations, permissions and guarantees over some sensitive resources, all summarized on the ownership of a single private key — easily verifiable by anyone with the corresponding public key.

This made clear how [important key management is](https://www.wellesu.com/10.1109/49.223881), requiring techniques to keep this single private key secure while keeping it stored and operating over it. This is framed as **traditional cryptographic key management (KM)**.

### Key management in Web3

The concept of KM have evolved in context with Web3: The ones securing this 



