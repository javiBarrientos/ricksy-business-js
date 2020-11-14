import {
  getterPasta,
  getterNumeroTarjeta,
  comprobarPasta,
} from "./tarjetaDeCredito.js";

export { UfosPark, getterFlota, ufoFlota, getUfoOf };

const precioUfo = 500;
var flotaUfos = {};

function UfosPark() {}

var getterFlota = {
  get flota() {
    return (this.flotaUfos = flotaUfos);
  },
};

function ufoFlota(ufo) {
  return (flotaUfos[ufo] = null);
}

function getUfoOf(usuario) {
  let nombreOvni = "";

  for (let i = 0; i < getterFlota; i++) {
    if (getterFlota[i] == usuario) {
      nombreOvni = getterFlota[i];
    }
  }
  return nombreOvni;
}
