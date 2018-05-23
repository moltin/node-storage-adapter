# @moltin/node-storage-adapter

[![npm version](https://img.shields.io/npm/v/@moltin/node-storage-adapter.svg)](https://www.npmjs.com/package/@moltin/node-storage-adapter)

> A storage adapter for `node-localstorage` and the JS SDK. Requires JS SDK `v4.0.0`.

## 🛠 Installation

Install the package from [npm]() and import to your project.

```bash
npm install --save @moltin/node-storage-adapter
```

## ⛽️ Usage

```js
import { gateway as MoltinGateway } from '@moltin/sdk'
import NodeStorageAdapter from '@moltin/node-storage-adapter'

const Moltin = MoltinGateway({
  client_id: 'XXX',
  storage: new NodeStorageAdapter('./localStorage')
})
```
