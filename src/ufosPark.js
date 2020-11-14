import {
  getterPasta,
  getterNumeroTarjeta,
  comprobarPasta,
} from "./tarjetaDeCredito.js";

export { UfosPark, getterFlota, ufoFlota };

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
