export abstract class Item {
  public category: string;
  public description: string;
  public price: number;

  constructor(category: string, description: string, price: number) {
    this.category = category;
    this.description = description;
    this.price = price;
  }
}

export abstract class TaxItem extends Item {
  public tax: number;
  constructor(category: string, description: string, price: number) {
    super(category, description, price);
    this.tax = 0;
  }

  abstract getTax(): number;
}

export class Water extends Item {
  public category: string;
  public description: string;
  public price: number;

  constructor(category: string, description: string, price: number) {
    super(category, description, price);
  }
}

export class Beer extends TaxItem {
  public tax: number;

  constructor(category: string, description: string, price: number) {
    super(category, description, price);
    this.tax = 0.2;
  }

  getTax(): number {
    return this.price * this.tax;
  }
}

export class Cigar extends TaxItem {
  public tax: number;

  constructor(category: string, description: string, price: number) {
    super(category, description, price);
    this.tax = 0.25;
  }
  
  getTax(): number {
    return this.price * this.tax;
  }
}

export class Eletronics extends TaxItem {
  constructor(category: string, description: string, price: number) {
    super(category, description, price);
    this.tax = 0.3;
  }

  getTax(): number {
    return this.price * this.tax;
  }
}
