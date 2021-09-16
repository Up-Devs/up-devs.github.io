# Installing Up-Devs.DB and Node.js

## Installing Node.js
Don't installed **Node.js** yet? Download it by clicking [here](https://nodejs.org/)

::: danger
You **MUST** [install **Node.js**](#installing-node-js) before following other steps. Please double-check!
:::

::: warning
You need to have Node.js `v16` installed. Older versions may have problems.
:::

## Installing Up-Devs.DB
Now, get into the easy steps!

Installing **Up-Devs.DB** is only a 3 word command.

```sh-session
npm i up-devs.db
```

Copy this in your console.

## Run Up-Devs.DB

```js {1-2, 4}
const { MongoDB, JsonDB } = require('up-devs.db');
const db = new MongoDB('mongodb+srv://up-devs/updevs.db')
// or
const db = new JsonDB('updevs-db')

// Setting an object to this database.
db.set('countries', { list: ['Turkey'] }) // 'countries' data: { list: 'Turkey' }

// Pushing an element to this data.
db.push('countries.list', 'USA') // 'countries' data: { list: ['Turkey', 'USA'] }

// Adding to a number to an object.
db.add('countries.count', 206) // 'countries' data: { list: ['Turkey', 'USA'], count: 206  }

// Fetching those datas.
db.fetch('countries.list') // 'countries' data: ['Turkey', 'USA']
db.get('countries.count') // 'countries' data: 206
```
