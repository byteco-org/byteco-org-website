---
title: Nodes and clients
description: An overview of Byteco nodes and client software, plus how to set up a node and why you should do it.
lang: en
sidebar: true
sidebarDepth: 2
---

For Byteco to work in a decentralized way it needs a distributed network of nodes that can verify blocks and transaction data. You need an application, known as a client, on your device to "run" a node.

## Prerequisites {#prerequisites}

You should understand the concept of a decentralized network before diving deeper and running your own instance of an Byteco client. Take a look at our [introduction to Byteco](/en/developers/docs/intro-to-Byteco/).

## What are nodes and clients? {#what-are-nodes-and-clients}

"Node" refers to a piece of software known as a client. A client is an implementation of Byteco that verifies all transactions in each block, keeping the network secure and the data accurate.


## Node types {#node-types}

If you want to [run your own node](/developers/docs/nodes-and-clients/run-a-node/), you should understand that there are different types of node that consume data differently. In fact, clients can run 3 different types of node - light, full and archive. There are also options of different sync strategies which enables faster synchronization time. Synchronization refers to how quickly it can get the most up-to-date information on Byteco's state.

### Full node {#full-node}

- Stores full blockchain data.
- Participates in block validation, verifies all blocks and states.
- All states can be derived from a full node.
- Serves the network and provides data on request.

### Light node {#light-node}

- Stores the header chain and requests everything else.
- Can verify the validity of the data against the state roots in the block headers.
- Useful for low capacity devices, such as embedded devices or mobile phones, which can't afford to store gigabytes of blockchain data.

### Archive node {#archive-node}


## Why should I run an Byteco node? {#why-should-i-run-an-Byteco-node}

Running a node allows you to trustlessly and privately use Byteco while supporting the ecosystem.

### Benefits to you {#benefits-to-you}

Running your own node enables you to use Byteco in a truly private, self-sufficient and trustless manner. You don't need to trust the network because you can verify the data yourself with your client. "Don't trust, verify" is a popular blockchain mantra.

- Your node verifies all the transactions and blocks against consensus rules by itself. This means you don’t have to rely on any other nodes in the network or fully trust them.
- You won't have to leak your addresses and balances to random nodes. Everything can be checked with your own client.

![How you access Byteco via your application and nodes](./nodes.png)

### Network benefits {#network-benefits}

A diverse set of nodes is important for Byteco’s health, security and operational resiliency.

- They provide access to blockchain data for lightweight clients that depend on it. In high peaks of usage, there need to be enough full nodes to help light nodes sync. Light nodes don't store the whole blockchain, instead they verify data via the [state roots in block headers](/en/developers/docs/blocks/#block-anatomy). They can request more information from blocks if they need it.
- Full nodes enforce the proof-of-work consensus rules so they can’t be tricked into accepting blocks that don't follow them. This provides extra security in the network because if all the nodes were light nodes, which don't do full verification, miners could attack the network and, for example, create blocks with higher rewards.

If you run a full node, the whole Byteco network benefits from it.

## Running your own node {#running-your-own-node}

Interested in running your own Byteco client? Learn how to [spin up your own node](/en/developers/docs/nodes-and-clients/run-a-node/)!

### Projects {#projects}

[**Select a client and follow their instructions**](#clients)

**DAppNode -** **_An operating system GUI for running Web3 nodes, including Byteco and the beacon chain, on a dedicated machine._**

- [dappnode.io](https://dappnode.io)

### Resources {#resources}



## Alternatives {#alternatives}



## Clients {#clients}

Byteco is designed to offer different clients, developed by different teams using different programming languages. This makes the network stronger and more diverse. The ideal goal is to achieve diversity without any client dominating to reduce any single points of failure.


### Advantages of different implementations {#advantages-of-different-implementations}

Each client has unique use cases and advantages, so you should choose one based on your own preferences. Diversity allows implementations to be focused on different features and user audiences. You may want to choose a client based on features, support, programming language, or licences.


#### OpenByteco {#openByteco}

OpenByteco is a fast, feature-rich and advanced CLI-based Byteco client. It's built to provide the essential infrastructure for speedy and reliable services which require fast synchronisation and maximum up-time. OpenByteco’s goal is to be the fastest, lightest, and most secure Byteco client. It provides a clean, modular codebase for:

- easy customisation.
- light integration into services or products.
- minimal memory and storage footprint.

OpenByteco is developed using the cutting-edge Rust programming language and licensed under the GPLv3.


#### Besu {#besu}

Hyperledger Besu is an enterprise-grade Byteco client for public and permissioned networks. It runs all of the Byteco mainnet features, from tracing to GraphQL, has extensive monitoring and is supported by ConsenSys, both in open community channels and through commercial SLAs for enterprises. It is written in Java and is Apache 2.0 licensed.

### Sync modes {#sync-modes}

- Full – downloads all blocks (including headers, transactions and receipts) and generates the state of the blockchain incrementally by executing every block.
- Fast (Default) – downloads all blocks (including headers, transactions and receipts), verifies all headers, and downloads the state and verifies it against the headers.
- Light – downloads all block headers, block data, and verifies some randomly.


## Hardware {#hardware}

Hardware requirements differ by client but generally are not that high since the node just needs to stay synced. Don't confuse it with mining which requires much more computing power. Sync time and performance do improve with more powerful hardware however. Depending on your needs and wants, Byteco can be run on your computer, home server, single-board computers or virtual private servers in the cloud.

An easy way to run your own node is using 'plug and play' boxes like [DAppNode](https://dappnode.io/). It provides hardware for running clients and applications that depend on them with a simple user interface.

### Requirements {#requirements}

Before installing any client, please ensure your computer has enough resources to run it. Minimum and recommended requirements can be found below, however the key part is the disk space. Syncing the Byteco blockchain is very input/output intensive. It is best to have a solid-state drive (SSD). To run an Byteco client on HDD, you will need at least 8GB of RAM to use as a cache.

#### Minimum requirements {#recommended-specifications}


#### Recommended specifications {#recommended-specifications}

- Fast CPU with 4+ cores
- 16 GB+ RAM
- Fast SSD with at least 500 GB free space
- 25+ MBit/s bandwidth


## Further reading {#further-reading}


## Related topics {#related-topics}



## Related tutorials {#related-tutorials}

