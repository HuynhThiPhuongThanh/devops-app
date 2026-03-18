

import { expect } from "chai";
import { sum } from "../src/index.js";

describe("Simple Test", () => {
  it("sum(2,3) should return 5", () => {
    expect(sum(4, 5)).to.equal(5);
  });
});