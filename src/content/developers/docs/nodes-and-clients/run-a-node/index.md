---
title: Spin up your own Byteco node
description: General introduction to running your own instance of an Byteco client.
lang: en
sidebar: true
sidebarDepth: 2
---

Running your own node provides you various benefits, opens new possibilities, and helps to support the ecosystem. This page will guide you through spinning up your own node and taking part in validating Byteco transactions.

## Prerequisites {#prerequisites}

You should understand what an Byteco node is and why you might want to run a client. This is covered in [Nodes and clients](/en/developers/docs/nodes-and-clients/).

## Choosing an approach {#choosing-approach}

The first step in spinning up your node is choosing your approach. You have to choose the client (the software), the environment, and the parameters you want to start with.

#### Client settings {#client-settings}

Client implementations enable different sync modes and various other options. [Sync modes](/en/developers/docs/nodes-and-clients/#sync-modes) represent different methods of downloading and validating blockchain data. Before starting the node, you should decide what network and sync mode to use. The most important things to consider is the disk space and sync time client will need.


### Environment and hardware {#environment-and-hardware}

#### Local or cloud {#local-vs-cloud}

Byteco clients are able to run on consumer grade computers and don't require special hardware like mining for example. Therefore you have various options for deploying based on your needs.
To simplify let's think about running a node on both a local physical machine and a cloud server:

- Cloud
  - Providers offer high server uptime, static public IP addresses
  - Getting dedicated or virtual server can be more comfortable then building your own
  - Trade off is trusting a third party - server provider
  - Because of required storage size for full node, price of a rented server might get high
- Own hardware
  - More trustless and sovereign approach
  - One time investment
  - An option to buy preconfigured machines
  - You have to physically prepare, maintain, and potentially troubleshoot the machine



#### Hardware {#hardware}

However, a censorship-resistant, decentralized network should not rely on cloud providers. It's healthier for the ecosystem if you run your own node on hardware. The easiest options are preconfigured machines like:


#### Operating system {#operating-system}

All clients support major operating systems - Linux, MacOS, Windows. This means you can run nodes on regular desktop or server machines with the operating system (OS) that suits you the best. Make sure your OS is up to date to avoid potential issues and security vulnerabilities.

## Spinning up the node {#spinning-up-node}


### Starting the client {#starting-the-client}

Before starting Byteco client software, perform a last check that your environment is ready. For example, make sure:

- There is enough disk space considering chosen network and sync mode.
- Memory and CPU is not halted by other programs.
- Operating system is updated to latest version.
- System has correct time and date.
- Your router and firewall accept connections on listening ports. By default Byteco clients use a listener (TCP) port and a discovery (UDP) port, both on 30303 by default.

### Using the client {#using-the-client}

Clients offer RPC API endpoints that you can use to control the client and interact with the Byteco network in various ways:



### Operating the node {#operating-the-node}

You should regularly monitor your node to make sure it's running properly. You may need to do occasional maintenance.

#### Keeping node online {#keeping-node-online}

Your node doesn't have to be online nonstop but you should keep it online as much as possible to keep it in sync with the network. You can shut it down to restart it but keep in mind that:

- Shutting down can take up to a few minutes if the recent state is still being written on disk.
- Forced shut downs can damage the database.
- Your client will go out of sync with the network and will need to resync when you restart it.

_This doesn't apply on open validator nodes._ Taking your node offline will affect all services dependent on it. If you are running a node for _staking_ purposes you should try to minimize downtime as much as possible.

#### Creating client service {#creating-client-service}

Consider creating a service to run your client automatically on startup. For example on Linux servers, good practice would be creating a service that executes the client with proper config, under user with limited privileges and automatically restarts.



## Further reading {#further-reading}



## Related topics {#related-topics}
