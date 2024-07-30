---
sidebar_position: 1
slug: /
---

# Introduction to Security Labs

# What is Functor Network?

Functor Network by [Security Labs](https://node.securitylabs.xyz/) provides key management for [chain abstraction](https://frontier.tech/the-cake-framework). It is a decentralized, permissionless network designed for the secure backup of sensitive data (such as private keys) and the management of [session keys](https://demo.securitylabs.xyz/). 

It offers a user experience inspired by traditional web2 applications, making it accessible and easy to use. The network supports every passkey-compatible authentication method, as well as threshold signature authentication, simple passwords, and any combination of these as flexible multi-factor authentication (MFA) options, depending on your security needs.

# Why Functor Network?

We simplify key management, by providing the missing component for the [Permission Layer in our chain-abstracted future.](https://frontier.tech/the-cake-framework) **Current key management strategies often fail because they are either:**

- **A Physical Medium:**
    
    Examples: Pieces of paper, hardware wallets with threshold signatures.
    
    Issues: Requires physical possession, making them vulnerable to theft. They are also inconvenient for regular use.
    
- **A Single Point of Failure:**
    
    Examples: Digital storage on a single device, single paper backup.
    
    Issues: High risk of loss or theft, and difficult to sync securely across multiple devices.
    
- **A Custodial Solution:**
    
    Examples: MPC-based solutions (partially custodial), services like Binance (fully custodial).
    
    Issues: Centralization risk and potential theft by the custodian, which undermines the security and trust principles of decentralized systems.
    

All of this while not providing the expected user experience that web2 has established for users.

Abstracting key management is complex to solve in a decentralized yet secure way. As seen before, existing solutions don’t quite address it.

In the past, the technologies needed to achieve our design were not mature enough.

- A healthy ecosystem of FHE libraries such as Google’s [Heir](https://github.com/google/heir), Zama’s [TFHE](https://github.com/zama-ai/tfhe-rs), and Microsoft’s [SEAL](https://github.com/microsoft/SEAL) is just now starting to mature enough for production-level use.
- The components and concepts around DePINs have just recently formalized, allowing for tools such as [EigenLayer’s](https://www.eigenlayer.xyz/) AVS for cryptoeconomic security to exist and for a culture of node operators to form.

All this has now made it possible to **eliminate theft, centralization, and unavailability risks while offering the best user experience (UX)**:

# How does Functor Network work?

![diagram_functor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/24c52350-de91-41c2-86a2-1dddab26661d/da2efc18-c7a4-4a1d-9a60-93a3ecd0098c/diagram_functor.png)

1. **Intuitive UX**: Authentication can be performed using any passkey-compatible method, threshold signatures between owned devices, passwords, or any combination of these factors. This approach offers the best and most familiar user experience with a flexible level of security.
2. **No single point of failure**: There is never a single point of failure because, from the client side, each pair of authentication information and data shards is sent independently into the mixnet for untraceable storage. This utilizes Shamir’s Secret Sharing and onion-layering techniques.
3. **Non-custodial**: The entire infrastructure is non-custodial, meaning it is only accessible through your chosen authentication methods (MFA) in a completely anonymous and uncorrelated manner. This represents true decentralization of self-custody.
4. **Universally Accessible**: Retrieval requests can be made from any device that supports the chosen authentication methods. Simply sign in through your multi-factor authentication (MFA) and seamlessly restore your private key and/or session on your new device. You can even partially restore your session with limited permissions. This is achieved by computing over encrypted data during mixing traffic, thanks to homomorphic encryption.

# Who can use Functor Network?

Functor Network is designed to benefit a wide range of users across various industries:

1. **Web3 Users and Developers:**
    
    • **Private Key Storage:** Functor Network provides a secure and user-friendly solution for storing private keys, reducing the friction for users transitioning from web2 to web3. This helps mitigate the complexity and security concerns associated with managing private keys in decentralized applications.
    
2. **AI Agents and Networks:**
    
    • **Data Security:** AI networks, which often handle high-value data like personal information and transaction records, benefit from the robust data protection offered by Functor Network. The end-to-end encryption ensures that sensitive data remains confidential and secure during decentralized processing.
    
3. **Healthcare Industry:**
    
    • **Data Security:** Healthcare providers can use Functor Network to securely store and manage sensitive patient data, ensuring compliance with privacy regulations and protecting against data breaches.
    
4. **Real Estate and Insurance Industries:**
    
    • **Sensitive Data Management:** These industries can benefit from the secure and decentralized storage solutions provided by Functor Network to protect sensitive information such as property records, insurance claims, and client data.
    
5. **Cybersecurity:**
    
    • **Secure Storage:** Cybersecurity firms can leverage Functor Network for the secure storage of cryptographic keys and sensitive data, enhancing overall security posture and reducing the risk of data compromise.