import * as rchainToolkit from "rchain-toolkit";

const main = async () => {
  const validAfterBlockNumber = await rchainToolkit.http.validAfterBlockNumber(
    "http://localhost:40403"
  );

  const transferFundsTerm = rchainToolkit.utils.transferRevTerm({
    from: "1111YT4aWjn7nZNi65bTKJF9GEtXL12raZ9GThLHDi5YMxtdiJkpM",
    to: "11112QRmNvfk9GaX6L7U1jC3Y9TqNanZc7wFEcNiYY8c29GA79MhRW",
    amount: 10, // amount in dust (10e-8 REV)
  });

  const deployOptions = rchainToolkit.utils.getDeployOptions(
    {
      timestamp: new Date().valueOf(),
      term: transferFundsTerm,
      shardId: 'root2',
      privateKey: "81f1f1b3eaa563dcaf928ee5d9aefd80fdd7300d777d3538eb10b9b10089dc65",
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
