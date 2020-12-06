const ufosTest = require("../ufosPark");
var testUfos = ufosTest().getUfo();

var ufosId = ["unx", "dox", "trex"];

test("Comprobar crear ufosPark", () => {
  expect(testUfos).not.toBeNull();
  for (let ovni of ufosId) {
    testUfos.addUfo(ovni);
  }
});
