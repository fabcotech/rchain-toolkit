import * as rchainToolkit from "rchain-toolkit";

const main = async () => {
  let result;
  try {
    result = await rchainToolkit.http.easyDeploy(
      "http://localhost:40403",
      `new hello, stdout(\`rho:io:stdout\`) in {
        hello!("world") |
        stdout!(*hello)
      }`,
      "28a5c9ac133b4449ca38e9bdf7cacdce31079ef6b3ac2f0a080af83ecff98b36",
      1,
      100000,
      30000
    );
  } catch (err) {
    console.log(err);
  }

  console.log(result);
};

main();
