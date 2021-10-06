import * as rchainToolkit from "rchain-toolkit";

const main = async () => {
  const validAfterBlockNumber = await rchainToolkit.http.validAfterBlockNumber(
    "http://localhost:40403"
  );

  const transferFundsTerm = rchainToolkit.utils.transferRevTerm({
    from: "1111YT4aWjn7nZNi65bTKJF9GEtXL12raZ9GThLHDi5YMxtdiJkpM",
    to: "11112QRmNvfk9GaX6L7U1jC3Y9TqNanZc7wFEcNiYY8c29GA79MhRW",
    amount: 10,
  });

  const deployOptions = rchainToolkit.utils.getDeployOptions(
    "secp256k1",
    new Date().valueOf(),
    transferFundsTerm,
    "81f1f1b3eaa563dcaf928ee5d9aefd80fdd7300d777d3538eb10b9b10089dc65",
    "043262dd06cca940aaf306084d99eae00db225091340fc9343aa4652cf38a051a673aa3d3499dd11cf67448a5a791cc8a12fda3378e5cd9c73880065aa1aedbcf8",
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
