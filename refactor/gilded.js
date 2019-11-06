class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  backstage_decrease() {
    if (this.sellIn > 10) return -1;
    if (this.sellIn >= 5 && this.sellIn <= 10) return -2;
    if (this.sellIn >= 0 && this.sellIn <= 4) return -3;
    else return (this.quality *= -1);
  }

  changed_quality() {
    let value = 1;
    if (this.is_legendary()) value = 0;
    if (this.is_backstage()) value = this.backstage_decrease();
    if (this.is_increasing_quality()) value *= -1;
    if (this.past_sellIn()) value *= 2;
    if (this.is_conjured()) value *= 2;
  }

  decrease_days() {
    this.sellIn--;
  }

  is_backstage() {
    return this.name.includes("Backstage");
  }

  is_conjured() {
    return this.name.includes("Conjured");
  }

  is_increasing_quality() {
    return this.name.includes("Brie");
  }

  is_legendary() {
    return this.name.includes("Sulfuras");
  }

  minimum_quality() {
    this.quality < 0 ? (this.quality = 0) : null;
  }

  maximum_quality() {
    this.quality > 50 ? (this.quality = 50) : null;
  }

  past_sellIn() {
    return this.sellIn && this.sellIn < 0;
  }

  write() {
    document.writeln(this.name + "," + this.sellIn + "," + this.quality);
  }
}

var shop_items = [
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("Aged Brie", 2, 0),
  new Item("Elixir of the Mongoose", 5, 7),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  new Item("Conjured Mana Cake", 12, 50)
];
