class ConsoleShipper {
  constructor({ console }) {
    this.attributes = { console };
  }

  ship(event) {
    const { attributes: { console } } = this;
    console.log(JSON.stringify(event));
  }
}

export default ConsoleShipper;
