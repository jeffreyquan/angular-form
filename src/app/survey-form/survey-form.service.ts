import { Question } from '../question/question.model';

export class SurveyFormService {

  constructor() {}

  private questions: Question[] = [
    new Question({ selectedRating: -1, ratingDescription: ''}, 1, 'What do you think of the new Halo game?', [1, 2], [
      {
        "score": 1,
        "description": "Very dissatisfied",
        "image": "assets/sad_emoji.jpeg"
      },
      {
        "score": 2,
        "description": "Dissatisfied",
        "image": "assets/unhappy_emoji.jpeg"
      },
      {
        "score": 3,
        "description": "Satisfied",
        "image": "assets/smile_emoji.jpeg"
      },
      {
        "score": 4,
        "description": "Very satisfied",
        "image": "assets/very_happy_emoji.jpeg"
      }
    ]),
    new Question({ selectedRating: -1, ratingDescription: '' }, 2, 'Are you happy with the current NRL competition?', [1, 2], [
      {
        "score": 1,
        "description": "Very dissatisfied",
        "image": "assets/sad_emoji.jpeg"
      },
      {
        "score": 2,
        "description": "Dissatisfied",
        "image": "assets/unhappy_emoji.jpeg"
      },
      {
        "score": 3,
        "description": "Satisfied",
        "image": "assets/smile_emoji.jpeg"
      },
      {
        "score": 4,
        "description": "Very satisfied",
        "image": "assets/very_happy_emoji.jpeg"
      }
    ]),
  ];

  getQuestions() {
    return this.questions.slice();
  }
}