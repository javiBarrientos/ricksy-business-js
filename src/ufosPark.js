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
    if (value == null && propietario.pasta >= this.fee) {
      propietario.pago(this.fee);
      this.flotaUfos.set(key, propietario);
      break;
    }
  }
};

UfosPark.prototype.getUfoOf = function (usuario) {
  let nombreOvni = "";

  for (let [key, value] of this.flotaUfos.entries()) {
    if (value == usuario) {
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

export default singletonUfosPark;
