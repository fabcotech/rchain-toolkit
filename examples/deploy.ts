import * as rchainToolkit from "@fabcotech/rchain-toolkit";

const main = async () => {
  const validAfterBlockNumber = await rchainToolkit.http.validAfterBlockNumber(
    "http://localhost:40403"
  );

  const deployOptions = rchainToolkit.utils.getDeployOptions(
    {
      timestamp: new Date().valueOf(),
      term: `new hello, stdout(\`rho:io:stdout\`) in {
        hello!("world") |
        stdout!(*hello)
      }`,
      shardId: 'root2',
      privateKey: "28a5c9ac133b4449ca38e9bdf7cacdce31079ef6b3ac2f0a080af83ecff98b36",
      phloPrice: 1,
      phloLimit: 100000,
      validAfterBlockNumber:  validAfterBlockNumber
    }
  );

  let deployResponse;
  try {
    deployResponse = await rchainToolkit.http.deploy(
      "http://localhost:40403",
      deployOptions
    );
  } catch (err) {
    console.log(err);
  }

  console.log(deployResponse);
};

main();
