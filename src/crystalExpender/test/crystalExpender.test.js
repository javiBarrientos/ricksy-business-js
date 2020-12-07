const tarjetaDeCredito = require("../../tarjetaDeCredito/tarjetaDeCredito");
const crystalExpender = require("../crystalExpender");

beforeEach(() => {
  card = new tarjetaDeCredito("Maikol", "1234567890");
  expender = new crystalExpender(10, 50);
});

test("Comprobar que no sea null", () => {
  expect(expender).not.toBeNull();
});

test("Comprobar pago", () => {
  expender.dispatch(card);
  expect(card.pasta).toBe(2950);
  expect(expender.stock).toBe(9);
});

test("Comprobar pago sin pasta", () => {
  card.pago(3000);
  expect(card.pasta).toBe(0);
  expender.dispatch(card);
  expect(card.pasta).toBe(0);
});
