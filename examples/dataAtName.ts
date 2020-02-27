import * as rchainToolkit from "rchain-toolkit";

const main = async () => {
  const unforgeableName =
    "172eff32aaaa49d091786b5bd5bb2ee974971651634dd610ad1ef1484306bfd7";

  const dataAtNameResponse = await rchainToolkit.http.dataAtName(
    "http://localhost:40403",
    {
      name: {
        UnforgPrivate: { data: unforgeableName }
      },
      depth: 90
    }
  );

  console.log(dataAtNameResponse);
};

main();
