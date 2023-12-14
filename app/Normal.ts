export class Normal {
  sellInChange = -1;
  qualityChange = -1;
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number
  ) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {
    this.sellIn += this.sellInChange;
    if(this.quality <= 0) return;
    this.updateQualityChange();
    this.quality = Math.max(0, this.quality + this.qualityChange);
  }

  updateQualityChange() {
    this.qualityChange = this.sellIn < 0 ? -2 : -1;
  }
}
