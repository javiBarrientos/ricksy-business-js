// Constructor
function UfosPark() {
  this.fee = 500;
  this.flotaUfos = new Map();
}

UfosPark.prototype.addUfo = function (ufo) {
  this.flotaUfos.set(ufo, null);
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
*/
