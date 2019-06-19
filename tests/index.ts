import { testUtils } from "./utils.full-tests";
import { testApi } from "./api.full-tests";

export const run = async () => {
  try {
    await testUtils();
  } catch (err) {
    throw err;
  }
  try {
    await testApi();
  } catch (err) {
    throw err;
  }
};
