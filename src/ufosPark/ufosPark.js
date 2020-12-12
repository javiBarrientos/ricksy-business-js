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
      this.validarOwnerUfo(propietario.numeroTarjeta) &&
      propietario.pasta >= this.fee &&
      value == null
    ) {
      propietario.pago(this.fee);
      this.flotaUfos.set(key, propietario.numeroTarjeta);
      break;
    }
  }
};

UfosPark.prototype.validarOwnerUfo = function (usuario) {
  return !Array.from(this.flotaUfos.values()).includes(usuario);
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

const singletonUfosPark = (function singleOvni() {
  const ufosParkInstance = new UfosPark();

  return {
    getUfo: function () {
      return ufosParkInstance;
    },
  };
})();

module.exports = singletonUfosPark;
