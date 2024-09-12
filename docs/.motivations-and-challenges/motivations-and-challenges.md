---
sidebar_position: 1
---

# Motivation and Challenges

### Motivations

Our motivation for creating a decentralized key management solution arises from the significant challenges and opportunities presented by the current state of blockchain technology. Private key storage is notoriously difficult to balance between security and convenience, with secure methods often being cumbersome and vulnerable to single points of failure. 

Moving wallets between devices is inconvenient and risky, and existing decentralized solutions like MPC are hard to scale and require all participants to be present. The blockchain ecosystem is complex and user-unfriendly, deterring widespread adoption. 

We see a huge opportunity to alleviate this friction and make blockchain technology accessible to a broader audience by simplifying its use and abstracting away its complexities. By providing the key management component of the permission layer of the CAKE framework, we aim to address these issues and create a more seamless and secure user experience.

### Challenges

Developing a solution that provides both convenience and security for private key management involves overcoming several technical challenges. The advancements in Fully Homomorphic Encryption (FHE) algorithms are critical, enabling secure data processing without exposing sensitive information, thus providing the necessary speed and efficiency for real-time operations. 

Our SDK employs Shamir's secret sharing to split private keys and authentication data on the client side, ensuring no single point of failure exists. The creation of solutions like EigenLayer secures proof of utility data by providing a robust framework for validating and rewarding node performance, while libp2p facilitates secure and efficient communication between nodes.

The decision by Ethereum to become rollup-centric has fragmented the ecosystem and worsened user experience, further complicating the landscape. To counter these issues, we integrate onion layering to anonymize data paths during distribution and Monad, a new Layer 1 blockchain, to improve transaction speed and reduce gas costs. 

Polygon's zkEVM securely stores node reputation data, computed from finalized data secured by EigenLayer. These combined technologies enable us to deliver a robust, decentralized key management solution that meets modern blockchain security and usability standards.