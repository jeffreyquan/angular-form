import { Rating } from '../shared/rating.model';

export class Question {
  public value: {
    selectedRating: number,
    ratingDescription: string,
  };
  public id: number;
  public title: string;
  public requiredInput: number[];
  public ratings: Rating[];

  constructor(value: any, id: number, title: string, requiredInput: number[], ratings: Rating[]) {
    this.value = value;
    this.id = id;
    this.title = title;
    this.requiredInput = requiredInput;
    this.ratings = ratings;
  }
}