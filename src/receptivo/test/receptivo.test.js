/*
const { expect } = require("@jest/globals");
const testTarjetaDeCredito = require("../../tarjetaDeCredito/tarjetaDeCredito");
const testCrystalExpender = require("../../crystalExpender/crystalExpender");
const singletonUfosPark = require("../../ufosPark/ufosPark");
const singletonReceptivo = require("../receptivo");

beforeEach(() => {
  receptivo = singletonReceptivo.getReceptivo();
  ufosPark = singletonUfosPark.getUfo();
  packExpender = new testCrystalExpender(100, 50);

  receptivo.registra(ufosPark);
  receptivo.registra(packExpender);
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
  let card = new testTarjetaDeCredito("Abradolf Lincler", "4916119711304546");
  receptivo.dispatch(card);

  expect(card.pasta).toBe(2450);

  expect(
    Array.from(ufosPark.flotaUfos.values()).includes(card.numeroTarjeta)
  ).toBe("4916119711304546");
});
*/
