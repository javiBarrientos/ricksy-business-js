// Imports
var TarjetaDeCredito = require("./tarjetaDeCredito/tarjetaDeCredito.js");
var singletonUfosPark = require("./ufosPark/ufosPark.js");
var CrystalExpender = require("./crystalExpender/crystalExpender.js");
var singletonReceptivo = require("./receptivo/receptivo.js");
var RickMenu = require("./rickMenu/rickMenu.js");

// Tarjeta de credito de abradolph
var abradolph = new TarjetaDeCredito("Abradolph Lincler", "4916119711304546");

console.log("Tarjeta de Abradolph" + "\n");
console.log(abradolph.propietario + " " + abradolph.numeroTarjeta);

// UfosPark
var ufoPark = singletonUfosPark().getUfo();

// Dar de alta 2 ufos
var ufosId = ["unx", "dox"];
for (let ufo of ufosId) {
  ufoPark.addUfo(ufo);
}

// Pago de abradolph
ufoPark.dispatch(abradolph);

// ID del ufo de de abradolph
console.log("Ovni de abradolph");
console.log(ufoPark.getUfoOf(abradolph));

// Pasta de abradolph
console.log("Pasta abradolph: " + abradolph.pasta);
console.log("\n");

console.log("Abradolph quiere otro ovni");
ufoPark.dispatch(abradolph);
console.log("Su pasta no ha cambiado: " + abradolph.pasta);
console.log("Ovni de abradolph: " + ufoPark.getUfoOf(abradolph));
console.log("\n");

// gearhead
console.log("\n" + "Llega gearhead");
var gearhead = new TarjetaDeCredito("Gearhead", "8888888888888888");
gearhead.pago(3000);
ufoPark.dispatch(gearhead);
console.log("Su pasta es cero: " + gearhead.pasta);
console.log("No puede reservar ovni: " + ufoPark.getUfoOf(gearhead));

// squanchy
console.log("\n" + "Llega squanchy");
var squanchy = new TarjetaDeCredito("Squanchy", "4444444444444444");
ufoPark.dispatch(squanchy);
console.log("Su pasta es: " + squanchy.pasta);
console.log("Su ovni es: " + ufoPark.getUfoOf(squanchy));

// morty
console.log("\n" + "Algun ovni para morty?");
var morty = new TarjetaDeCredito("Morty", "0000000000000000");
ufoPark.dispatch(morty);
console.log("Su pasta no ha cambiado: " + morty.pasta);
console.log("No hay ovni para morty: " + ufoPark.getUfoOf(morty));

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

// Gearhead sin pasta para su pack :(
console.log("\n" + "Gearhead no tiene pasta :(");
expender.dispatch(gearhead);
console.log("Packs: " + expender.stock);
console.log("Credito de gearhead: " + gearhead.pasta);

// Receptivo
var receptivo = singletonReceptivo().getReceptivo();

receptivo.registra(expender);
receptivo.registra(ufoPark);

// Squanchy
console.log("\n" + "LLega squanchy");
receptivo.dispatch(squanchy);
mostrarReserva(squanchy, expender, ufoPark);

// Gearhead
console.log("\n" + "LLega gearhead");
receptivo.dispatch(gearhead);
mostrarReserva(gearhead, expender, ufoPark);

// Birdpearson
console.log("\n" + "LLega birdpearson");
var birdpearson = new TarjetaDeCredito("Birdpearson", "1111111111111111");
receptivo.dispatch(birdpearson);
mostrarReserva(birdpearson, expender, ufoPark);

// Morty
console.log("\n" + "Morty quiere pack y ovni pero no quedan :(");
var morty = new TarjetaDeCredito("Birdpearson", "0000000000000000");
receptivo.dispatch(morty);
mostrarReserva(morty, expender, ufoPark);

// RickMenu
var menu = new RickMenu(100, 10);

// Receptivo registra el menu
receptivo.registra(menu);

// Lista de las tarjetas
var cards = [abradolph, squanchy, morty, gearhead, birdpearson];

for (let card of cards) {
  receptivo.dispatch(card);
}

console.log("\n" + "Pedidos de RickMenus:");
console.log(menu);
console.log("\n" + "Creditos de los invitados/as:");

for (let card of cards) {
  console.log(card);
  console.log();
}

// Mostrar reserva
function mostrarReserva(usuario, pack, ovni) {
  console.log(usuario.numeroTarjeta);
  console.log("Packs: " + pack.stock);
  console.log("Ovni: " + ovni.getUfoOf(usuario));
}
