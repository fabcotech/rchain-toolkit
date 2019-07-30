### rchain-toolkit

**Up to date with rnode 0.9.11**

rchain-toolkit is a general purpose javascript/typescript library to interact with the RChain blockchain, and play with rholang expressions in node JS or the browser. **It is not ready for production, not stable and the development is not completed yet.**

It includes utils for easily deploying rholang code (smart contract), retreiving blocks, listen for data at unforgeable names, public names etc... All of the methods, parameters, and returned values are typed using typescript so the developer can comfortably code.

rchain-toolkit provides some GRPC utils since rnode's main API is GRPC, but it does not strictly assume the transport. This library builds proto objects based on rnode's proto definition files and some user parameters. GRPC is not included in the library, making it potentially elligible for the browser, GRPC and GRPC's proto-loader libraries must be installed separatly in your own project.

The examples folder contains example for each GRPC interface that is currently supported, each one of them exists in typescript and javascript.

#### Examples

Deploy some rholang code (smart contract) :

```typescript
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import * as rchainToolkit from "rchain-toolkit";

const main = async () => {
  const grpcClient = await rchainToolkit.grpc.getGrpcClient(
    "localhost:40401",
    grpc,
    protoLoader
  );

  const deployData = await rchainToolkit.utils.getDeployData(
    "secp256k1",
    new Date().valueOf(),
    `new hello in { hello!("world") }`,
    "de34f27c7a542935e64b8adc6c01511bb669e5c97e61f5fd582b1fa990fded87",
    "041e4b07f1d4e6f3d088ad0b9fcef8e1ded5ac337a35db332ab8d8b8d42553c35cd3032d437f3a33dc9fb0ce6817ec51a2fedbce74c646b797ca0adafe5c5be24f",
    1,
    100000,
    -1
  );

  let a;
  try {
    a = await rchainToolkit.grpc.doDeploy(deployData, grpcClient);
  } catch (err) {
    console.log(err);
  }

  console.log(a);
};

main();
```

#### Development

**Compiling**

typescript must be installed on your machine

```
npm install -g typescript
```

Compile the `.ts` files in `src` directory to the main `dist` directory.

```
npm run compile
```

**Jest tests**

The jest tests are all the tests that do not require proto-loader or GRPC, because it does not work under jest's runtime.

Run the jest tests

```
npm run test:jest
```

**Full tests**

The full tests are the tests that interact with the `.proto` files, and rnode. A local rnode instance must be running on `localhost:40401`.

Run the full tests

```
npm run compile:tests
npm run test:full
```
