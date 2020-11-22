function CrystalExpender(stock, coste) {
  this.stock = stock;
  this.coste = coste;
}

CrystalExpender.prototype.dispatch = function (propietario) {
  if (this.stock > 0) {
    if (propietario.pasta >= this.coste) {
      propietario.pago(this.coste);
      this.stock -= 1;
    }
  }
};

module.exports = CrystalExpender;