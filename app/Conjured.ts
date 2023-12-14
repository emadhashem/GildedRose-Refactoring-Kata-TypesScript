import { Normal } from "./Normal";

export class Conjured extends Normal {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number
  ) {
    super(name, sellIn, quality);
  }

  updateQualityChange() {
    this.qualityChange = this.sellIn < 0 ? -4 : -2;
  }
}
