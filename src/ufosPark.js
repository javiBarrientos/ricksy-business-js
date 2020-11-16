import { pago, pasta, numeroTarjeta } from "./tarjetaDeCredito.js";

export { UfosPark, ufoFlota, dispatch, getUfoOf };

const precioUfo = 500;
var flotaUfos = new Map();

function UfosPark() {}

function ufoFlota(ufo) {
  flotaUfos.set(ufo, null);
}

function dispatch(tarjeta) {
  for (let key of flotaUfos.entries()) {
    if (key.keys() == null && tarjeta.pasta >= precioUfo) {
      tarjeta.pago(precioUfo);
      flotaUfos.set(key.keys(), tarjeta.numeroTarjeta);
    }
  }
}

function getUfoOf(usuario) {
  let nombreOvni = "";

  for (let key of flotaUfos.entries()) {
    if (key.values() == usuario) {
      nombreOvni = key.keys();
    }
  }
  return nombreOvni;
}
