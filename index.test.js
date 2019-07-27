log = console.log;
expect = require("chai").expect;
assert = require("chai").assert;
should = require("chai").should();
_ = require("lodash");
const { fizzBuzz } = require("./index");


describe("test function", () => {
  it("verify throw error", () => {
    expect(fizzBuzz).to.not.throw();
  });

  it("verify string result", () => {
    expect(fizzBuzz()).to.equal("12Fizz");
  });
});
