const tarjetaDeCredito = require("../../tarjetaDeCredito/tarjetaDeCredito");
const rickMenu = require("../rickMenu");

beforeEach(() => {
  card = new tarjetaDeCredito("Maikol", "1234567890");
  menu = new rickMenu(100, 10);
});

test("Comprobar tarjeta not null", () => {
  expect(card).not.toBeNull();
});

test("Comprobar pago de un menu", () => {
  menu.dispatch(card);
  expect(card.pasta).toBe(2990);
});

test("Comprobar varios pagos", () => {
  for (let i = 0; i < 10; i++) {
    menu.dispatch(card);
  }
  expect(card.pasta).toBe(2900);
});

test("Comprobar que no puedes pagar", () => {
  card.pago(3000);
  expect(card.pasta).toBe(0);
  menu.dispatch(card);
  expect(card.pasta).toBe(0);
  expect(menu.stock).toBe(100);
});
