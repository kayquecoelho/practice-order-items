import Item from "./Item";

export default class Order {
  public items: Item[];

  constructor() {
    this.items = [];
  }

  addItem(newItem: Item) {
    if (newItem instanceof Item) {
      this.items.push(newItem);
    } else {
      throw Error('not a item!');
    }
  }

  getTotal() {
    const total = this.items.reduce((sumPrice, item) => sumPrice + item.price, 0);
    return total;
  }

  getTaxes() {
    const totalTax = this.items.reduce((sumTax, item) => {
      let tax = 0;

      if (item.category === 'Beer') {
        tax = 0.2;
      } else if (item.category === 'Cigar') {
        tax = 0.25;
      } else if (item.category === 'Eletronics') {
        tax = 0.3;
      }
      
      return sumTax + (item.price * tax);
    }, 0);

    return totalTax;
  }
}