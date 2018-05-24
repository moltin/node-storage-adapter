# @moltin/node-storage-adapter

[![npm version](https://img.shields.io/npm/v/@moltin/node-storage-adapter.svg)](https://www.npmjs.com/package/@moltin/node-storage-adapter) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

> A storage adapter for `node-localstorage` and the JS SDK. Requires JS SDK `v4.0.0`.

## 🛠 Installation

Install the package from [npm](https://www.npmjs.com/package/@moltin/node-storage-adapter) and import to your project.

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
