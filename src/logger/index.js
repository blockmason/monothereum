class Logger {
  constructor({ category, shipper }) {
    this.attributes = { category, shipper };
  }

  get timestamp() {
    return new Date().toISOString();
  }

  error(type, context) {
    this.log('ERROR', type, context);
  }

  info(type, context) {
    this.log('INFO', type, context);
  }

  log(level, type, context) {
    const {
      attributes: { category, shipper },
      timestamp
    } = this;
    const event = { timestamp, level, category, type, context };
    shipper.ship(event);
  }

  subcategory(name) {
    const { attributes: { category } } = this;
    return this.category(`${category}:${name}`);
  }

  category(name) {
    const { attributes: { shipper } } = this;
    return new Logger({ category: name, shipper });
  }

  warn(type, context) {
    this.log('WARN', type, context);
  }
}

export default Logger;
