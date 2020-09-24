import { one, two } from "../src/index";

describe("example", () => {
  it("one returns one", () => {
    return expect(one()).toEqual(1);
  });
  
  it("two returns two", () => {
    return expect(two()).resolves.toEqual(2);
  });
});