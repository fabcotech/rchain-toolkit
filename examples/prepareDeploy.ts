import * as rchainToolkit from "rchain-toolkit";

const main = async () => {
  const timestamp = new Date().valueOf();

  let prepareDeployResponse;
  try {
    prepareDeployResponse = await rchainToolkit.http.prepareDeploy(
      "http://localhost:40403",
      {
        deployer:
          "043262dd06cca940aaf306084d99eae00db225091340fc9343aa4652cf38a051a673aa3d3499dd11cf67448a5a791cc8a12fda3378e5cd9c73880065aa1aedbcf8",
        timestamp: timestamp,
        nameQty: 3
      }
    );
  } catch (err) {
    console.log(err);
  }

  console.log("names : ", JSON.parse(prepareDeployResponse).names);
  console.log("blockNumber : ", JSON.parse(prepareDeployResponse).blockNumber);
};

main();
