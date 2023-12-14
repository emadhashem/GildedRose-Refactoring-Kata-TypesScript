import { Item } from "@/Item";
import { Names } from "@/enums/names";
import { GildedRose } from "@/gilded-rose";

describe("Testing random items", () => {
  it("run update only once", () => {
    const items = [
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
    const expectedItems = [
      new Item("+5 Dexterity Vest", 9, 19),
      new Item("Aged Brie", 1, 1),
      new Item("Elixir of the Mongoose", 4, 6),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 14, 21),
      new Item("Backstage passes to a TAFKAL80ETC concert", 9, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 9, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 50),
      new Item("Conjured Mana Cake", 2, 4),
    ];

    const shop = new GildedRose(items);
    const updatedItems = shop.updateQuality();
    expect(updatedItems).toStrictEqual(expectedItems);
  });

  it("run update 2 times", () => {
    const items = [
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
    const expectedItems = [
      new Item("+5 Dexterity Vest", 8, 18),
      new Item("Aged Brie", 0, 2),
      new Item("Elixir of the Mongoose", 3, 5),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 13, 22),
      new Item("Backstage passes to a TAFKAL80ETC concert", 8, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 8, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 3, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 3, 50),
      new Item("Conjured Mana Cake", 1, 2),
    ];

    const shop = new GildedRose(items);
    let newItems = shop.updateQuality();
    newItems = shop.updateQuality();
    expect(newItems).toStrictEqual(expectedItems);
  });
});

describe("Testing Aged Brie", () => {
  it("run update 2 times", () => {
    const items = [
      new Item(Names.AgedBrie, 1, 50),
      new Item(Names.AgedBrie, 1, 51),
      new Item(Names.AgedBrie, 4, 3),
      new Item(Names.AgedBrie, 0, 0),
      new Item(Names.AgedBrie, 0, 2),
      new Item(Names.AgedBrie, 0, 49),
    ];
    const expectedItems = [
      new Item(Names.AgedBrie, -1, 50),
      new Item(Names.AgedBrie, -1, 51),
      new Item(Names.AgedBrie, 2, 5),
      new Item(Names.AgedBrie, -2, 4),
      new Item(Names.AgedBrie, -2, 6),
      new Item(Names.AgedBrie, -2, 50),
    ];

    const shop = new GildedRose(items);
    let newItems = shop.updateQuality();
    newItems = shop.updateQuality();
    expect(newItems).toStrictEqual(expectedItems);
  });
});

describe("Testing Sulfuras", () => {
  it("run update 2 times", () => {
    const items = [new Item("Sulfuras, Hand of Ragnaros", 0, 80)];
    const expectedItems = [new Item("Sulfuras, Hand of Ragnaros", 0, 80)];

    const shop = new GildedRose(items);
    let newItems = shop.updateQuality();
    newItems = shop.updateQuality();
    expect(newItems).toStrictEqual(expectedItems);
  });
});

describe("Testing Backstage Passes", () => {
  it("run update 2 times", () => {
    const items = [
      new Item(Names.BackstagePasses, 1, 2),
      new Item(Names.BackstagePasses, 3, 1),
      new Item(Names.BackstagePasses, 9, 3),
      new Item(Names.BackstagePasses, 10, 3),
      new Item(Names.BackstagePasses, 12, 50),
      new Item(Names.BackstagePasses, 12, 30),
      new Item(Names.BackstagePasses, 3, 51), //
      new Item(Names.BackstagePasses, 3, 50), //
      new Item(Names.BackstagePasses, -1, 4),
      new Item(Names.BackstagePasses, 0, 4),
      new Item(Names.BackstagePasses, 0, 51),
      new Item(Names.BackstagePasses, 3, 49),
    ];
    const expectedItems = [
      new Item(Names.BackstagePasses, -1, 0),
      new Item(Names.BackstagePasses, 1, 7),
      new Item(Names.BackstagePasses, 7, 7),
      new Item(Names.BackstagePasses, 8, 7),
      new Item(Names.BackstagePasses, 10, 50),
      new Item(Names.BackstagePasses, 10, 32),
      new Item(Names.BackstagePasses, 1, 51),
      new Item(Names.BackstagePasses, 1, 50),
      new Item(Names.BackstagePasses, -3, 0),
      new Item(Names.BackstagePasses, -2, 0),
      new Item(Names.BackstagePasses, -2, 0),
      new Item(Names.BackstagePasses, 1, 50),
    ];

    const shop = new GildedRose(items);
    let newItems = shop.updateQuality();
    newItems = shop.updateQuality();
    expect(newItems).toStrictEqual(expectedItems);
  });
});

describe("Testing Conjured", () => {
  it("run update 2 times", () => {
    const items = [new Item("Conjured Mana Cake", 3, 6)];
    const expectedItems = [new Item("Conjured Mana Cake", 1, 2)];

    const shop = new GildedRose(items);
    let newItems = shop.updateQuality();
    newItems = shop.updateQuality();
    expect(newItems).toStrictEqual(expectedItems);
  });
});
