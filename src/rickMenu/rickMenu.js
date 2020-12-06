function RickMenu(stock, coste) {
  this.stock = stock;
  this.coste = coste;
  this.pedidos = new Array();
}

RickMenu.prototype.dispatch = function (propietario) {
  if (this.stock > 0 && propietario.pago(this.coste)) {
    this.stock -= 1;
    this.pedidos.push(propietario.pasta);
  }
};

module.exports = RickMenu;
