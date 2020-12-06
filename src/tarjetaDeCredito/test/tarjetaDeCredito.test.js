const { expect } = require("@jest/globals");
const tarjeta = require("../tarjetaDeCredito");

var testTarjeta = new tarjeta("Maicol", "1234567890");

test("Comprobar tarjeta not null", () => {
  expect(testTarjeta).not.toBeNull();
});

test("Comprobar numero", () => {
  expect(testTarjeta.numeroTarjeta).toBe("1234567890");
});
