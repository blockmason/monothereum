# Monethereum

[![CircleCI](https://circleci.com/gh/blockmason/monothereum.svg?style=svg)](https://circleci.com/gh/blockmason/monothereum)

> **Note:** This is pre-alpha software and is *not* feature-complete!

An implementation of the Ethereum JSON-RPC interface suitable for private
networks. This application gives its clients the appearance of working in
an Ethereum-compatible blockchain, without actually having anything to do
with an actual blockchain.

The initial goal of this project is to provide the same sort of value that
Truffle (Ganache), Geth, Parity, or Ethermint provides when operating in a
sidechain mode. Unlike these solutions, however, this project makes no
attempt to emulate blockchain behavior, instead opting to pursue the bare
minimum replication of the Ethereum JSON RPC specification.
