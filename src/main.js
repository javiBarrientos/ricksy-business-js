// Imports
var TarjetaDeCredito = require("./tarjetaDeCredito/tarjetaDeCredito.js");
var singletonUfosPark = require("./ufosPark/ufosPark.js");
var CrystalExpender = require("./crystalExpender/crystalExpender.js");

// Tarjeta de credito de abradolph
var abradolph = new TarjetaDeCredito("Abradolph Lincler", "4916119711304546");

console.log("Tarjeta de Abradolph" + "\n");
console.log(abradolph.propietario + " " + abradolph.numeroTarjeta);

// UfosPark
var getUfoPark = singletonUfosPark().getUfo();

// Dar de alta 2 ufos
var ufosId = ["unx", "dox"];
for (let ufo of ufosId) {
  getUfoPark.addUfo(ufo);
}

// Pago de abradolph
getUfoPark.dispatch(abradolph);

// ID del ufo de de abradolph
console.log("Ovni de abradolph");
console.log(getUfoPark.getUfoOf(abradolph));
console.log("\n");

// Pasta de abradolph
console.log("Pasta abradolph: " + abradolph.pasta);
console.log("\n");

console.log("Abradolph quiere otro ovni");
getUfoPark.dispatch(abradolph);
console.log("Su pasta no ha cambiado: " + abradolph.pasta);
console.log("Ovni de abradolph: " + getUfoPark.getUfoOf(abradolph));
console.log("\n");

// gearhead
console.log("\n" + "Llega gearhead");
var gearhead = new TarjetaDeCredito("Gearhead", "8888888888888888");
gearhead.pago(3000);
getUfoPark.dispatch(gearhead);
console.log("Su pasta es cero: " + gearhead.pasta);
console.log("No puede reservar ovni: " + getUfoPark.getUfoOf(gearhead));

// squanchy
console.log("\n" + "Llega squanchy");
var squanchy = new TarjetaDeCredito("Squanchy", "4444444444444444");
getUfoPark.dispatch(squanchy);
console.log("Su pasta es: " + squanchy.pasta);
console.log("Su ovni es: " + getUfoPark.getUfoOf(squanchy));

// morty
console.log("\n" + "Algun ovni para morty?");
var morty = new TarjetaDeCredito("Morty", "0000000000000000");
getUfoPark.dispatch(morty);
console.log("Su pasta no ha cambiado: " + morty.pasta);
console.log("No hay ovni para morty: " + getUfoPark.getUfoOf(morty));

// Flota de ovnis
console.log("\n" + "Flota de ovnis");
ufosId.push("trex");
console.log(ufosId);

// Crystal Expender
var expender = new CrystalExpender(3, 50);
console.log("\n" + "Crystal expender");
console.log(expender.stock + " " + expender.coste);

// Abradolph compra pack de bienvenida
expender.dispatch(abradolph);

console.log("\n" + "Abradolph compra pack");
console.log("Packs: " + expender.stock);
console.log("Credito de abradolph: " + abradolph.pasta);

// Gearhead sin pasta :(
console.log("\n" + "Gearhead no tiene pasta :(");
expender.dispatch(gearhead);
console.log("Packs: " + expender.stock);
console.log("Credito de gearhead: " + gearhead.pasta);
