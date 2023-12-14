import { Item } from "./Item";
import { Names } from "./enums/names";
import { GildedRose } from "./gilded-rose";

class Main {
  constructor(private shop: GildedRose) {}

  display() {
    console.log("------------\n");
    console.log("results \n");
    console.log(this.shop.updateQuality());
    console.log("------------\n");
  }
}
const randomItems = [
  new Item("+5 Dexterity Vest", 10, 20), 
  new Item("Aged Brie", 2, 0), 
  new Item("Elixir of the Mongoose", 5, 7), 
  new Item("Sulfuras, Hand of Ragnaros", 0, 80), 
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 48),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 47),
  new Item("Conjured Mana Cake", 3, 6),
];
const items = [
  new Item("Normal 1", 1, 1),
  new Item("Normal 2", 0, 4),
  new Item("Normal 3", 2, 50),
  new Item("Normal 4", 2, -1),
  new Item("Normal 5", -1, 0),
  new Item("Normal 6", 2, 60),
  new Item("Normal 7", 0, 0),
  new Item("Normal 8", -1, 1),
];

const agedBrieItems = [
  new Item(Names.AgedBrie, 1, 50),
  new Item(Names.AgedBrie, 1, 51),
  new Item(Names.AgedBrie, 4, 3),
  new Item(Names.AgedBrie, 0, 0),
  new Item(Names.AgedBrie, 0, 2),
  new Item(Names.AgedBrie, 0, 49),
];

const backstagePassesItems = [
  new Item(Names.BackstagePasses, 1, 2),
  new Item(Names.BackstagePasses, 3, 1),
  new Item(Names.BackstagePasses, 9, 3),
  new Item(Names.BackstagePasses, 10, 3),
  new Item(Names.BackstagePasses, 12, 50),
  new Item(Names.BackstagePasses, 12, 30),
  new Item(Names.BackstagePasses, 3, 51),
  new Item(Names.BackstagePasses, 3, 50),
  new Item(Names.BackstagePasses, -1, 4),
  new Item(Names.BackstagePasses, 0, 4),
  new Item(Names.BackstagePasses, 0, 51),
  new Item(Names.BackstagePasses, 3, 49),
];

const sulfurasItems = [
  new Item(Names.Sulfuras, 0, 0),
  new Item(Names.Sulfuras, 0, -2),
  new Item(Names.Sulfuras, 3, 51),
  new Item(Names.Sulfuras, 3, 80),
  new Item(Names.Sulfuras, 3, 81),
];
const main = new Main(new GildedRose(randomItems));
main.display();
