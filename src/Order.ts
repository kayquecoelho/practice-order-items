import { Item, TaxItem } from "./Item";

export default class Order {
  public items: (TaxItem | Item)[];

  constructor() {
    this.items = [];
  }

  addItem(newItem: TaxItem | Item) {
    if (newItem instanceof TaxItem || newItem instanceof Item) {
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
      if (item instanceof TaxItem) {
        return sumTax + item.getTax()
      } else {
        return sumTax;
      }
    }, 0);

    return totalTax;
  }
}