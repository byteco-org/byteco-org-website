---
title: Byteco accounts
description: An explanation of Byteco accounts – their data structures and their relationship with key pair cryptography.
lang: en
sidebar: true
---

An Byteco account is an entity with an byte (BTO) balance that can send transactions on Byteco. Accounts can be user-controlled or deployed as contracts.

## Prerequisites {#prerequisites}

Accounts are a very beginner-friendly topic. But to help you better understand this page, we recommend you first read through our [introduction to Byteco](/en/developers/docs/intro-to-Byteco/).

## Account types {#types-of-account}

Byteco has two account types:


### Key differences {#key-differences}

**Externally-owned**

- Creating an account costs nothing
- Can initiate transactions
- Transactions between externally-owned accounts can only be token transfers

**Contract**

- Creating an account has a cost because you're using network storage
- Can only send transactions in response to receiving a transaction
- Transactions from an external account to a contract account can trigger code which can execute many different actions, such as transferring tokens or even creating a new contract

## An account examined {#an-account-examined}
