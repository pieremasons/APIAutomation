const { getMethod, postMethod, putMethod } = require("../apiServer/apiObjects");

//test suites
describe("Testing API restful", function () {
    // Test case 1
    it("Test GET from function", async function () {
      getMethod();
    });
    it("Test POST from function", async function () {
        postMethod();
      });
      it("Test PUT from function", async function () {
        putMethod();
      });
});