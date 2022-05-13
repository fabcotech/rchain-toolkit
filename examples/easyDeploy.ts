import * as rchainToolkit from "@fabcotech/rchain-toolkit";

const main = async () => {
  let result;
  try {
    result = await rchainToolkit.http.easyDeploy(
      "http://localhost:40403",
      {
        term: `new deployId(\`rho:rchain:deployId\`), stdout(\`rho:io:stdout\`) in {
          deployId!("world") |
          stdout!(*deployId)
        }`,
        shardId: 'root2',
        privateKey: "28a5c9ac133b4449ca38e9bdf7cacdce31079ef6b3ac2f0a080af83ecff98b36",
        phloPrice: 'auto',
        phloLimit: 100000,
        timeout: 30000
      }
    );
  } catch (err) {
    console.log(err);
  }

  console.log(result);
};

main();
