### rchain-toolkit

**Up to date with rnode 0.13 alpha3**

rchain-toolkit is a general purpose avascript/typescript library to interact with the RChain blockchain, and play with rholang expressions in node JS or the browser. **It is not ready for production, not stable and the development is not completed yet.**

It includes utils for easily deploying rholang code (smart contract), sending REV transactions, retreiving blocks, listen for data at unforgeable names, public names etc... All of the methods, parameters, and returned values are typed using typescript so the developer can comfortably code.

rchain-toolkit provides some GRPC utils since rnode's main API is GRPC, but it does not strictly assume the transport. This library builds proto objects based on rnode's proto definition files and some user parameters. GRPC is not included in the library, making it potentially elligible for the browser, GRPC and GRPC's proto-loader libraries must be installed separatly in your own project.

The examples folder contains example for each GRPC interface that is currently supported, each one of them exists in typescript and javascript.

#### Examples

See `examples/`

#### Development

**Compiling**

typescript must be installed on your machine

```
npm install -g typescript
```

Compile the `.ts` files in `src` directory to the main `dist` directory.

```
npm run build
```

**Jest tests**

The jest tests are all the tests that do not require proto-loader or GRPC, because it does not work under jest's runtime.

Run the jest tests

```
npm run test:jest
```

**Full tests**

The full tests are the tests that interact with the `.proto` files, and rnode. A local rnode instance must be running on `localhost:40401` with `--shard-name dev` and automatic proposal (every 5 seconds for example).

Run the full tests

```
npm run build:tests
npm run test:full -- --private-key AAA --public-key BBB
npm run test:full -- --private-key 28a5c9ac133b4449ca38e9bdf7cacdce31079ef6b3ac2f0a080af83ecff98b36 --public-key 04be064356846e36e485408df50b877dd99ba406d87208add4c92b3c7d4e4c663c2fbc6a1e6534c7e5c0aec00b26486fad1daf20079423b7c8ebffbbdff3682b58
```

**Generate javascript and typescript protos**

```
sudo npm i -g protobufjs
./generate-rnode-protos.sh
```
