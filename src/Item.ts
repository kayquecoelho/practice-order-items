export class Item {
  public category: string;
  public description: string;
  public price: number;

  constructor(category: string, description: string, price: number) {
    this.category = category;
    this.description = description;
    this.price = price;
  }
}

export class TaxItem extends Item {
  public tax: number;
  constructor(category: string, description: string, price: number) {
    super(category, description, price);
    this.tax = 0;
  }

  getTax() {
    return this.price * this.tax;
  }
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
}

export class Cigar extends TaxItem {
  public tax: number;

  constructor(category: string, description: string, price: number) {
    super(category, description, price);
    this.tax = 0.25;
  }
}

export class Eletronics extends TaxItem {
  constructor(category: string, description: string, price: number) {
    super(category, description, price);
    this.tax = 0.3;
  }
}
