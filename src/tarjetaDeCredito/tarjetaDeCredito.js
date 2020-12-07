// Constructor
function TarjetaDeCredito(propietario, numeroTarjeta) {
  this.propietario = propietario;
  this.numeroTarjeta = numeroTarjeta;
  this.pasta = 3000;
  this.tipoDeMoneda = "EZI";
}

TarjetaDeCredito.prototype.pago = function (pago) {
  if (this.pasta >= pago) {
    this.pasta -= pago;
    return true;
  } else {
    return false;
  }
};

module.exports = TarjetaDeCredito;