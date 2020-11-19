// Constructor
function UfosPark() {
  this.fee = 500;
  this.flotaUfos = new Map();
}

UfosPark.prototype.addUfo = function (ufo) {
  this.flotaUfos.set(ufo, null);
};

UfosPark.prototype.dispatch = function (numeroTarjeta) {
  for (let [key, value] of this.flotaUfos.entries()) {
    if (value == null && numeroTarjeta.pasta >= this.fee) {
      numeroTarjeta.pago(this.fee);
      this.flotaUfos.set(key, numeroTarjeta);
    }
  }
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

export default singletonUfosPark;
/*
function getUfoOf(usuario) {
  let nombreOvni = "";

  for (let key of flotaUfos.entries()) {
    if (key.values() == usuario) {
      nombreOvni = key.keys();
    }
  }
  return nombreOvni;
}
*/
