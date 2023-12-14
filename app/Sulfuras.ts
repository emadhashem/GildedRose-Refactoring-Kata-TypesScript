import { Normal } from "./Normal";

export class Sulfuras extends Normal {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number
  ) {
    super(name, sellIn, quality);
  }
  updateQuality(): void {}
}
