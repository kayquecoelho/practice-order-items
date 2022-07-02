export default class Item {
  public category: string;
  public description: string;
  public price: number;

  constructor(category: string, description: string, price: number) {
    this.category = category;
    this.description = description;
    this.price = price;
  }
}
