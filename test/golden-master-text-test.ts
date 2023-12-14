import { Item } from "../app/Item";
import { GildedRose } from "../app/gilded-rose";

import { writeFileSync } from "fs";
import { join } from "path";

console.log("OMGHAI!");

const items = [
  new Item("+5 Dexterity Vest", 10, 20), //
  new Item("Aged Brie", 2, 0), //
  new Item("Elixir of the Mongoose", 5, 7), //
  new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 48),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 47),
  // this conjured item does not work properly yet
  new Item("Conjured Mana Cake", 3, 6),
];

const gildedRose = new GildedRose(items);

let days: number = 3;
if (process.argv.length > 2) {
  days = +process.argv[2];
}
let goldenMasterText = "";
for (let i = 0; i < days + 1; i++) {
  console.log("-------- day " + i + " --------");
  goldenMasterText += "-------- day " + i + " --------" + "\n";
  console.log("name, sellIn, quality");
  goldenMasterText += "name, sellIn, quality" + "\n";
  items.forEach((element) => {
    goldenMasterText +=
      element.name + ", " + element.sellIn + ", " + element.quality + "\n";
    console.log(element.name + ", " + element.sellIn + ", " + element.quality);
  });
  console.log();
  goldenMasterText += "\n \n";
  gildedRose.updateQuality();
}
const goldenMasterFileName = "golden-master.txt";
// writeFileSync(join(__dirname, goldenMasterFileName), goldenMasterText, {
//   flag: "w",
// });
