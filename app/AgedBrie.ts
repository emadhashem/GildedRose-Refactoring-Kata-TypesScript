import { Normal } from "./Normal";
import { MAX_QUALITY } from "./constants";

export class AgedBrie extends Normal {
  qualityChange: number = 1;
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number
  ) {
    super(name, sellIn, quality);
  }

  updateQuality(): void {
    this.sellIn += this.sellInChange;
    if (this.quality >= MAX_QUALITY) return;
    this.updateQualityChange();
    this.quality = Math.min(MAX_QUALITY, this.quality + this.qualityChange);
  }

  updateQualityChange(): void {
    this.qualityChange = this.sellIn < 0 ? 2 : 1;
  }
}
