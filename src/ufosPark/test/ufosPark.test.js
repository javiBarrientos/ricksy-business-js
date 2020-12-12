const singletonUfosPark = require("../ufosPark");
const tarjetaDeCredito = require("../../tarjetaDeCredito/tarjetaDeCredito");

beforeEach(() => {
  card = new tarjetaDeCredito("Maikol", "1234567890");
  segundaCard = new tarjetaDeCredito("Sech", "9876543210");
  ufosPark = singletonUfosPark.getUfo();

  ufosId = ["unx", "dox", "trex"];
  for (let ufo in ufosId) {
    ufosPark.addUfo(ufosId[ufo]);
  }
});

test("Comprobar singleton ufosPark", () => {
  let ufosParkCopia = singletonUfosPark.getUfo();
  expect(ufosPark === ufosParkCopia).toBeTruthy;
});

test("Comprobar dispatch de ufos", () => {
  let newPark = new Map();
  newPark.set("unx", card.numeroTarjeta);
  newPark.set("dox", segundaCard.numeroTarjeta);
  newPark.set("trex", null);
  ufosPark.dispatch(card);
  ufosPark.dispatch(segundaCard);
  expect(ufosPark.flotaUfos).toMatchObject(newPark);
});

test("validarOwnerUfo false", () => {
  ufosPark.dispatch(card);

  expect(ufosPark.validarOwnerUfo(card.numeroTarjeta)).toBeFalsy();
});

test("validarOwnerUfo true", () => {
  expect(ufosPark.validarOwnerUfo(card.numeroTarjeta)).toBeTruthy();
});