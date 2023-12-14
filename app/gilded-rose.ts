import { Item } from "./Item";
import { Resolver } from "./Resolver";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items = this.items.map((item) => {
      const ret = Resolver.resolve(item);
      ret.updateQuality();
      return new Item(ret.name, ret.sellIn, ret.quality);
    });

    return this.items;
  }
}
