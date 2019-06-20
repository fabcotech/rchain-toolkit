import { testUtils } from "./utils.full-tests";
import { testGrpc } from "./grpc.full-tests";

export const run = async () => {
  try {
    await testUtils();
  } catch (err) {
    throw err;
  }
  try {
    await testGrpc();
  } catch (err) {
    throw err;
  }
};
