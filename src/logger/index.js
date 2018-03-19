class Logger {
  constructor({ category, shipper }) {
    this.attributes = { category, shipper };
  }

  error(type, context) {
    this.log('ERROR', type, context);
  }

  info(type, context) {
    this.log('INFO', type, context);
  }

  log(level, type, context) {
    const { attributes: { category, shipper } } = this;
    const timestamp = new Date().toISOString();
    shipper.ship({ category, context, level, timestamp, type });
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
