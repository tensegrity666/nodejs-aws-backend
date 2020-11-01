import { getProductById } from "../src/handler.js";

describe("Get product by id", () => {
  it("should return item", () => {
    const product = getProductById("5f99e93036140b74fc35c3b6");
    expect(product.length).not.toEqual(null);
  });
});
