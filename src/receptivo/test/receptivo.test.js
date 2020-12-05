const { expect } = require("@jest/globals");

const testReceptivo = require("../receptivo");
const testUfosPark = require("../../ufosPark/ufosPark");
const testTarjetaDeCredito = require("../../tarjetaDeCredito/tarjetaDeCredito");
const testCrystalExpender = require("../../crystalExpender/crystalExpender");

/*
var receptivoTest = testReceptivo().getReceptivo();
var ufosParkTest = testUfosPark().getUfo();
var tarjetaTest = new testTarjetaDeCredito();
*/

test("Creo ufosPark", () => {
  expect(testUfosPark().getUfo()).toBeTruthy;
});
