---
sidebar_position: 1
customIcon: fa-solid fa-brain
---

# Account Circuit

Currently, implementing validation for Keystore updates requires writing zk circuits. However, the number of people who understand and can write zk circuits is small. This barrier to developers risks reduced adoption of the Keystore Rollup.
Comment

Additionally, these "Account Circuits" are not involved in validating signatures for user operations, just Keystore updates. This causes a divergence in account authentication where a Solidity contract and a zk circuit are responsible different halves of the same question: "can you control this account?". While enabling flexibility, a simpler and unified authentication option should exist for account developers.

To achieve this, I propose a circuit construction that enables developers to write simple Solidity libraries. The same library is used onchain for signature validation and offchain for proving keystore updates. This system fits within the existing specification with no required changes.