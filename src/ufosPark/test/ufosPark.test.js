const ufosTest = require("../ufosPark");

var testUfos = ufosTest().getUfo();

var ufosId = ["unx", "dox"];
for (let ufo of ufosId) {
  testUfos.addUfo(ufo);
}
