// Constructor
function UfosPark() {
  this.fee = 500;
  this.flotaUfos = new Map();
}

UfosPark.prototype.addUfo = function (ufo) {
  this.flotaUfos.set(ufo, null);
};

UfosPark.prototype.dispatch = function (propietario) {
  for (let [key, value] of this.flotaUfos.entries()) {
    if (
      this.validarOwnerUfo(value, propietario.numeroTarjeta) &&
      propietario.pasta >= this.fee
    ) {
      propietario.pago(this.fee);
      this.flotaUfos.set(key, propietario.numeroTarjeta);
      break;
    }
  }
};

UfosPark.prototype.validarOwnerUfo = function (valor, usuario) {
  let comprobarPosicion = Array.from(this.flotaUfos.values()).includes(
    usuario,
    0
  );
  return !comprobarPosicion && valor == null;
};

UfosPark.prototype.getUfoOf = function (usuario) {
  let nombreOvni = "";

  for (let [key, value] of this.flotaUfos.entries()) {
    if (value == usuario.numeroTarjeta) {
      nombreOvni = key;
    }
  }
  return nombreOvni;
};

function singleOvni() {
  const ufosParkInstance = new UfosPark();

  return {
    getUfo: function getUfo() {
      return ufosParkInstance;
    },
  };
}

const singletonUfosPark = function () {
  return singleOvni();
};

module.exports = singletonUfosPark;
