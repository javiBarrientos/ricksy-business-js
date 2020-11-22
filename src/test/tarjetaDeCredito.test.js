const tarjeta = require("../tarjetaDeCredito");

var testTarjeta = new tarjeta("Maicol", "1234567890");

test("", () => {
expect(testTarjeta.numeroTarjeta).toBe("1234567890");
});
