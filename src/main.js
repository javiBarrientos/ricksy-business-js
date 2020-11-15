// Tarjeta de credito de abradolph

import {
  TarjetaDeCredito,
  pago,
  numeroTarjeta,
  pasta,
  propietario,
} from "./tarjetaDeCredito.js";

import {
  UfosPark,
  ufoFlota,
  dispatch,
  getUfoOf,
  flotaUfos,
} from "./ufosPark.js";

var abradolph = new TarjetaDeCredito("Abradolph Lincler", "4916119711304546");

console.log("Tarjeta de Abradolph" + "\n");
console.log(abradolph);

// UfosPark

var ufosPark = new UfosPark();

var ufosId = ["unx", "dox"];
for (let ufo of ufosId) {
  ufoFlota(ufo);
}

console.log("\n" + "print de flotas" + "\n");
console.log(flotaUfos);

console.log("\n" + "tarjeta abradolph" + "\n");
dispatch(abradolph.numeroTarjeta);
console.log(abradolph.numeroTarjeta);
console.log(flotaUfos);

console.log("\n" + "Ovni de Abradolph" + "\n");
console.log(getUfoOf(abradolph));
console.log("Credito de Abradolph: " + abradolph.getterPasta);
/*
console.log("\n" + "Abradolph quiere otro ovni" + "\n");
console.log("Su credito no ha cambiado: " + abradolph.credit());
console.log("Ovni de Abradolph: " + ufosPark.getUfoOf(abradolph.number()));

// UfosPark GearHead
 
console.log("Su credito es cero: " + gearHead.credit());
console.log("No puede reservar ovni: " + ufosPark.getUfoOf(gearHead.number()));

// UfosPark Squanchy

console.log("Su credito es: " + squanchy.credit());
console.log("Su ovni es: " + ufosPark.getUfoOf(squanchy.number()));

// UfosPark Morty

console.log("Su credito no ha cambiado: " + morty.credit());
console.log("No hay ovni Morty: " + ufosPark.getUfoOf(morty.number()));

// Flota de ovnis

console.log(ufosPark);

// CrystalExpender

console.log("\n" + "Packs" + "\n");
console.log(packExpender);

// Expender Abradolph

console.log("\n" + "Abradolph compra su pack" + "\n");
console.log("Packs: " + packExpender);
console.log("Credito de Abradolph: " + abradolph.credit());

// Expender GearHead

console.log("\n" + "GearHead sin credito para su pack" + "\n");
console.log("Packs: " + packExpender);
console.log("Credito de GearHead: " + gearHead.credit());

// Receptivo

console.log("Llega Squanchy");
console.log("Llega GearHead");
console.log("Llega Birdpearson!");
console.log("\n" + "Morty quiere pack y ovni pero no quedan :(" + "\n");

// 10!!

console.log("\n" + "Pedidos de RickMenus: " + "\n");
console.log("\n" + "Creditos de los invitad@s: " + "\n");
*/
