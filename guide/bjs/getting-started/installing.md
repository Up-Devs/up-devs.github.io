# Installing brawlup.js and Node.js

## Installing Node.js
Don't installed **Node.js** yet? Download it by clicking [here](https://nodejs.org/)

::: danger
You **MUST** [install **Node.js**](#installing-node-js) before following other steps. Please double-check!
:::

::: warning
You need to have Node.js `v16` installed. Older versions may have problems.
:::

## Installing brawlup.js
Now, get into the easy steps!

Installing **brawlup.js** is only a 3 word command.

```sh-session
npm i brawlup.js
```

Copy this in your console.

## Run brawlup.js

```js {1-2,14}
const bs = require('brawlup.js');
const bjs = new bs.Client('BrawlStarsAccessToken')

;(async() => {
 
 //Get the player from the client.
 const player = await bsClient.getPlayer('#2YCC2P8U8')
 
 //Expected: Alpu TV ( #2YCC2P8U8 )
 console.log(`${player.name} ( ${player.tag} )`)
})()

//If you didn't provided a token for this Client, provide now.
bjs.login('BrawlStarsAccessToken')
```