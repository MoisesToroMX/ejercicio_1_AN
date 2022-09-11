let assert = require("chai").assert;
let challenge = require("../ejercicio/ejercicio_1");

describe("Test of reverseByParenthesis function", function () {
  describe("Test Cases", function () {
    it("test_reverse_by_parenthesis", function () {
      result = challenge.reverseByParenthesis("(Hola (Mundo))");

      assert.typeOf(result, "string");
      assert.equal(result, "Mundo aloH");
      assert.lengthOf(result, 10);
    });

    it("test_reverse_by_parenthesis_with_other_string", function () {
      result = challenge.reverseByParenthesis("(Hola (amigo)(Moises))");

      assert.typeOf(result, "string");
      assert.equal(result, "Moisesamigo aloH");
      assert.lengthOf(result, 16);
    });
  });
});
