class NotificationService {
  constructor(strategy) {
    this.strategy = strategy;
  }

  enviar(notificacion) {
    this.strategy.enviar(notificacion);
  }
}

module.exports = NotificationService;
