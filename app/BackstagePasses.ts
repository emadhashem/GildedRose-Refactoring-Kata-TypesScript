import { Normal } from "./Normal";
import { MAX_QUALITY } from "./constants";

export class BackstagePasses extends Normal {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number
  ) {
    super(name, sellIn, quality);
  }

  updateQuality(): void {
    if (this.sellIn <= 0) {
      this.sellIn += this.sellInChange;
      this.quality = 0;
      return;
    }

    this.updateQualityChange();
    this.sellIn += this.sellInChange;
    if (this.quality >= MAX_QUALITY) return;
    this.quality = Math.min(MAX_QUALITY, this.quality + this.qualityChange);
  }
  updateQualityChange(): void {
    this.qualityChange = this.sellIn <= 5 ? 3 : this.sellIn <= 10 ? 2 : 1;
  }
}
