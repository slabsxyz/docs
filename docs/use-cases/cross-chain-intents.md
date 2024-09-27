---
sidebar_position: 2
customIcon: fa-solid fa-arrows-alt-h
---

# Cross-Chain Intents

In decentralized systems, **intents** are predefined configurations or instructions that specify an action to be taken on a blockchain. Functor Network enables **cross-chain intents**, which allow actions to be executed seamlessly across multiple blockchains without requiring separate setups or permissions on each one.

## How Cross-Chain Intents Work

- A **user** or **dApp** configures an intent, specifying the action to be taken (e.g., transfer an asset, interact with a contract) and the conditions under which it should happen.
- Functor’s **keystore** ensures that the intent can be enforced across different chains through **session keys**, which verify the authenticity of the action in a chain-agnostic manner.
- The intent is automatically executed when the conditions are met, with no need for the user or dApp to interact with each chain individually.

## Why It’s Important

- **Efficiency:** Cross-chain intents reduce the need for manual intervention in multi-chain environments, improving the speed and accuracy of actions.
- **Security:** With cryptographically verified session keys, intents are executed in a secure and controlled manner, ensuring that the action can only take place under the specified conditions.

Cross-chain intents are crucial for enabling complex, automated workflows in decentralized ecosystems, making multi-chain applications more scalable and user-friendly.
