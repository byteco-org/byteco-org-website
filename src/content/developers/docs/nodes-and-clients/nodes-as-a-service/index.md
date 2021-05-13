---
title: Nodes as a service
description: An entry-level overview of node services, the pros and cons, and popular providers.
lang: en
sidebar: true
sidebarDepth: 2
---

## Introduction {#Introduction}

Running your own [Byteco node](/developers/docs/nodes-and-clients/#what-are-nodes-and-clients) can be challenging, especially when getting started or while scaling fast. There are a [number of services](#popular-node-services) that run optimized node infrastructures for you, so you can focus on developing your application or product instead. We'll explain how node services work, the pros and cons for using them and list providers if you are interested in getting started.

## Prerequisites {#prerequisites}

If you don't already have an understanding of what nodes and clients are, check out [Nodes and clients](/developers/docs/nodes-and-clients/).

## How do node services work? {#how-do-node-services-work}

Node service providers run distributed node clients behind the scenes for you, so you don't have to.

These services typically provide an API key that you can use to write to and read from the blockchain. They often including access to [Byteco testnets](/developers/docs/networks/#testnets) in addition to the mainnet.

Some services offer you your own dedicated node that they manage for you, while others use load balancers to distribute activity across nodes.

Almost all node services are extremely easy to integrate with, involving one line changes in your code to swap out your self hosted node, or even switch between the services themselves.

Often times node services will run a variety of [node clients](/developers/docs/nodes-and-clients/#clients) and [types](/developers/docs/nodes-and-clients/#node-types), allowing you to access full and archive nodes in addition to client specific methods in one API.

It's important to note that node services do not and should not store your private keys or information.

## What are the benefits of using a node service? {#benefits-of-using-a-node-service}

The main benefit for using a node service is not having to spend engineering time maintaining and managing nodes yourself. This allows you to focus on building your product rather than having to worry about infrastructure maintenance.

Running your own nodes can be very expensive from storage to bandwidth to valuable engineering time. Things like spinning up more nodes when scaling, upgrading nodes to the latest versions, and ensuring state consistency, can detract from building and spending resources on your desired web3 product.

## What are the cons of using a Node Service? {#cons-of-using-a-node-service}

By using a node service you are centralizing the infrastructure aspect of your product. For this reason, projects that hold decentralization to the upmost importance might prefer self-hosting nodes rather than outsourcing to a 3rd party.



## Further reading {#further-reading}



## Related topics {#related-topics}

- [Nodes and clients](/developers/docs/nodes-and-clients/)

## Related tutorials {#related-tutorials}

