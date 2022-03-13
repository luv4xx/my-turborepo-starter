// eslint-disable-next-line no-restricted-imports
import hw from "../src/index.ts";

describe("test", () => {
  it("should", () => {
    const ret = hw();
    expect(ret).toBe("hello world");
  });
});
