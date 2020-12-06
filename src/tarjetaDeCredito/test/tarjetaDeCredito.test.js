const tarjeta = require("../tarjetaDeCredito");

var testTarjeta = new tarjeta("Maicol", "1234567890");

test("Comprobar tarjeta not null", () => {
  expect(testTarjeta).not.toBeNull();
});
