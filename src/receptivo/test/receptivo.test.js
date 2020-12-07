const { expect } = require("@jest/globals");
const testTarjetaDeCredito = require("../../tarjetaDeCredito/tarjetaDeCredito");
const testCrystalExpender = require("../../crystalExpender/crystalExpender");
const singletonUfosPark = require("../../ufosPark/ufosPark");
const singletonReceptivo = require("../receptivo");

beforeEach(() => {
  receptivo = singletonReceptivo.getReceptivo();
  ufosPark = singletonUfosPark.getUfo();
  packExpender = new testCrystalExpender(100, 50);
  card = new testTarjetaDeCredito("Abradolf Lincler", "4916119711304546");

  ufosId = ["unx", "dox", "trex"];
  for (let ufo in ufosId) {
    ufosPark.addUfo(ufosId[ufo]);
  }
});

test("Comprobar singleton de ufosPark", () => {
  let ufosParkCopia = singletonUfosPark.getUfo();
  expect(ufosPark === ufosParkCopia).toBeTruthy();
});

test("Comprobar singleton de receptivo", () => {
  let receptivoCopia = singletonReceptivo.getReceptivo();
  expect(receptivo === receptivoCopia).toBeTruthy();
});

test("Comprobar receptivo chido", () => {
  receptivo.dispatch(card);
  packExpender.dispatch(card);

  expect(card.pasta).toBe(2950);
  expect(packExpender.stock).toBe(99);
  ufosPark.dispatch(card);

  expect(
    Array.from(ufosPark.flotaUfos.values()).includes(card.numeroTarjeta)
  ).toBe(true);
});
