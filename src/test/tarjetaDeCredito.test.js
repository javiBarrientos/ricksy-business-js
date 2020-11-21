import TarjetaDeCredito from "../tarjetaDeCredito.js";

var testTarjeta = new TarjetaDeCredito("Maicol", "1234567890");

expect(testTarjeta.numeroTarjeta).toBe("1234567890");

