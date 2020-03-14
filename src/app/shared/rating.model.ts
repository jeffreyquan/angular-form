export class Rating {
  public score: number;
  public description: string;
  public image: string;

  constructor(score: number, description: string, image: string) {
    this.score = score;
    this.description = description;
    this.image = image;
  }
}