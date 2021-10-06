import * as rchainToolkit from "rchain-toolkit";

const main = async () => {
  const validAfterBlockNumber = await rchainToolkit.http.validAfterBlockNumber(
    "http://localhost:40403"
  );

  const deployOptions = rchainToolkit.utils.getDeployOptions(
    "secp256k1",
    new Date().valueOf(),
    `new hello, stdout(\`rho:io:stdout\`) in {
      hello!("world") |
      stdout!(*hello)
    }`,
    "28a5c9ac133b4449ca38e9bdf7cacdce31079ef6b3ac2f0a080af83ecff98b36",
    "04be064356846e36e485408df50b877dd99ba406d87208add4c92b3c7d4e4c663c2fbc6a1e6534c7e5c0aec00b26486fad1daf20079423b7c8ebffbbdff3682b58",
    1,
    100000,
    validAfterBlockNumber
  );

  let result;
  try {
    result = await rchainToolkit.http.deploy(
      "http://localhost:40403",
      deployOptions,
      30000
    );
  } catch (err) {
    console.log(err);
  }

  console.log(result);
};

main();
