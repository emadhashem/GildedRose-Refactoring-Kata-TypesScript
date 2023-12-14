import { AgedBrie } from "./AgedBrie";
import { BackstagePasses } from "./BackstagePasses";
import { Conjured } from "./Conjured";
import { Item } from "./Item";
import { Normal } from "./Normal";
import { Sulfuras } from "./Sulfuras";
import { Names } from "./enums/names";

export class Resolver {
  static resolve(item: Item) {
    if (item.name.includes(Names.Conjured)) {
      return new Conjured(item.name, item.sellIn, item.quality);
    }
    switch (item.name) {
      case Names.AgedBrie:
        return new AgedBrie(item.name, item.sellIn, item.quality);

      case Names.Sulfuras:
        return new Sulfuras(item.name, item.sellIn, item.quality);

      case Names.BackstagePasses:
        return new BackstagePasses(item.name, item.sellIn, item.quality);

      default:
        return new Normal(item.name, item.sellIn, item.quality);
    }
  }
}
