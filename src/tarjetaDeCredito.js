var propietario = "";
var numeroTarjeta = "";
var pasta = 3000;
var tipoDeMoneda = "EZI";

export { TarjetaDeCredito, getterPasta, getterNumeroTarjeta, comprobarPasta };

function TarjetaDeCredito(propietario, numeroTarjeta) {
  this.propietario = propietario;
  this.numeroTarjeta = numeroTarjeta;
}

var getterPasta = {
  get credito() {
    return (this.pasta = pasta);
  },
};

var getterNumeroTarjeta = {
  get tarjeta() {
    return (this.tarjeta = tarjeta);
  },
};

function comprobarPasta(pago) {
  if (pasta >= pago) {
    pasta -= pago;
    return true;
  } else {
    return false;
  }
}
