import * as rchainToolkit from "rchain-toolkit";

const main = async () => {
  let validAfterBlockNumber;
  try {
    validAfterBlockNumber = JSON.parse(
      await rchainToolkit.http.blocks(`http://localhost:40403`, {
        position: 1,
      })
    )[0].blockNumber;
  } catch (err) {
    console.log("Unable to get last finalized block");
    console.log(err);
    process.exit();
  }

  const deployOptions = rchainToolkit.utils.getDeployOptions(
    "secp256k1",
    new Date().valueOf(),
    `new hello, stdout(\`rho:io:stdout\`) in {
      hello!("world") |
      stdout!(*hello)
    }`,
    "e9934d79b12317d0f3dad7f915c1cc075a47cbd884fd80d7dfeefacf03fa214e",
    "0420d065ce52c1759e467b9427f494ff665210d226967e68b65eee180a96a3148fe849d1f105a7f130db938b48eb6c28f20dd530365aaeb39af8bfc00117684b18",
    1,
    100000,
    validAfterBlockNumber
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
