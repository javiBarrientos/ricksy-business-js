var propietario = "";
var numeroTarjeta = "";
var pasta = 3000;
var tipoDeMoneda = "EZI";

export { TarjetaDeCredito, pago, numeroTarjeta, pasta, propietario };

function TarjetaDeCredito(propietario, numeroTarjeta) {
  this.propietario = propietario;
  this.numeroTarjeta = numeroTarjeta;
}

function pago(pago) {
  if (pasta >= pago) {
    pasta -= pago;
    return true;
  } else {
    return false;
  }
}
