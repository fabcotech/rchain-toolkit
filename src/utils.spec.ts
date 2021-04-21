import { getPayment, revAddressFromPublicKey } from "./utils";

test("getPayment", () => {
  expect(getPayment(1, "a", 2, 3)).toEqual({
    timestamp: 1,
    term: "a",
    phloPrice: 2,
    phloLimit: 3
  });
});
