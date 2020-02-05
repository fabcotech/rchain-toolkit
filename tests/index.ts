import { testUtils } from "./utils.full-tests";
import { testHttp } from "./http.full-tests";

export const run = async () => {
  try {
    await testUtils();
  } catch (err) {
    throw err;
  }
  try {
    await testHttp();
  } catch (err) {
    throw err;
  }
};
