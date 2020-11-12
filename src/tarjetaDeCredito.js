var propietario = "";
var numeroTarjeta = "";
var pasta = 3000;
var tipoDeMoneda = "EZI";

export function TarjetaDeCredito(propietario, numeroTarjeta) {
  this.propietario = propietario;
  this.numeroTarjeta = numeroTarjeta;
}

function credit() {
  return (this.pasta = pasta);
}

function comprobarPasta(pago) {
  if (pasta >= pago) {
    pasta -= pago;
    return true;
  } else {
    return false;
  }
}

console.log(comprobarPasta(3001));
console.log(comprobarPasta(3000));
