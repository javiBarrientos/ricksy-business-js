function Receptivo() {
  this.observers = new Set();
}

Receptivo.prototype.registra = function (observer) {
  this.observers.add(observer);
};

Receptivo.prototype.dispatch = function (propietario) {
  for (let observer of this.observers) {
    observer.dispatch(propietario);
  }
};

const singletonReceptivo = (function singleReceptivo() {
  const receptivoInstance = new Receptivo();

  return {
    getReceptivo: function () {
      return receptivoInstance;
    },
  };
})();

module.exports = singletonReceptivo;
