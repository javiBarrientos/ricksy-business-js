const { expect } = require("@jest/globals");
const tarjeta = require("../tarjetaDeCredito");

beforeEach(() => {
  testTarjeta = new tarjeta("Maicol", "1234567890");
});

test("Comprobar tarjeta not null", () => {
  expect(testTarjeta).not.toBeNull();
});

test("Comprobar numero", () => {
  expect(testTarjeta.numeroTarjeta).toBe("1234567890");
});

test("Comprobar pago", () => {
  testTarjeta.pago(3000);
  expect(testTarjeta.pasta).toEqual(0);
});

test("Comprobar pago error", () => {
  testTarjeta.pago(4000);
  expect(testTarjeta.pasta).toBe(3000);
});
