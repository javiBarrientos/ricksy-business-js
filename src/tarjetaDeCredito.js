// Constructor
function TarjetaDeCredito(propietario, numeroTarjeta) {
  this.propietario = propietario;
  this.numeroTarjeta = numeroTarjeta;
  this.pasta = 3000;
  this.tipoDeMoneda = "EZI";
}

TarjetaDeCredito.prototype.comprobarPastaPago = function (pago) {
  if (this.pasta >= pago) {
    this.pasta -= pago;
    return true;
  } else {
    return false;
  }
};

/* 
// Patron singleton, una unica instancia de TarjetaDeCredito
function singleTarjeta() {
  const tajetaInstancia = new TarjetaDeCredito();

  return {
    getTarjeta: function getTarjeta() {
      return tajetaInstancia;
    },
  };
}

// Export de la variable que devuelve la instancia
exports.singletonTarjeta = function () {
  return singleTarjeta();
};
 */

export default TarjetaDeCredito;