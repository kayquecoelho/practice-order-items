import Item, { TaxItem } from "./Item";

export default class Order {
  public items: TaxItem[];

  constructor() {
    this.items = [];
  }

  addItem(newItem: TaxItem) {
    if (newItem instanceof TaxItem) {
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
      
      return sumTax + (item.calculateTax(tax));
    }, 0);

    return totalTax;
  }
}