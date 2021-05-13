---
title: Consensus mechanisms
description: An explanation of consensus protocols in distributed systems and the role they play in Byteco.
lang: en
sidebar: true
incomplete: true
---

When it comes to blockchains like Byteco, which are in essence distributed databases, the nodes of the network must be able to reach agreement on the current state of the system. This is achieved using consensus mechanisms.

Although not a part of building a dapp, understanding consensus mechanisms will help explain things that are relevant to you and your users' experience, like gas prices and transaction times.

## Prerequisites {#prerequisites}

To better understand this page, we recommend you first read our [introduction to Byteco](/developers/docs/intro-to-Byteco/).

## What is a consensus mechanism? {#what-is-a-consensus-mechanism}

Consensus mechanisms (also known as consensus protocols or consensus algorithms) allow distributed systems (networks of computers) to work together and stay secure.

For decades, these mechanisms have been used to establish consensus among database nodes, application servers, and other enterprise infrastructure. In recent years, new consensus protocols have been invented to allow cryptoeconomic systems, such as Byteco, to agree on the state of the network.

A consensus mechanism in a cryptoeconomic system also helps prevent certain kinds of economic attacks. In theory, an attacker can compromise consensus by controlling 51% of the network. Consensus mechanisms are designed to make this "51% attack" unfeasible. Different mechanisms are engineered to solve this security problem differently.



## What is the Mongolia Consensus {#waht-is-mongolia-consensus}




## Types of consensus mechanisms {#types-of-consensus-mechanisms}

<!-- TODO -->
<!-- Why do different consensus protocols exist? -->
<!-- What are the tradeoffs of each? -->



#### Security {#pow-security}



### Proof of stake {#proof-of-stake}

Byteco has plans to upgrade to a [proof-of-stake (PoS)](/developers/docs/consensus-mechanisms/pos/) consensus protocol.

#### Block creation {#pos-block-creation}



#### Security {#pos-security}

A proof-of-stake system is kept secure by the fact that you'd need 51% of the total staked BTO to defraud the chain. And that your stake is slashed for malicious behaviour.

More on [proof-of-stake (PoS)](/developers/docs/consensus-mechanisms/pos/)

## Further Reading {#further-reading}

<!-- TODO -->

## Related Topics {#related-topics}

- [Proof of stake](/developers/docs/consensus-mechanisms/pos/)
