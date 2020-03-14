import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SurveyFormService } from './survey-form.service';
import { Question } from '../question/question.model';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {
  surveyForm: FormGroup;
  questions: Question[];
  answers: {};

  constructor(private surveyFormService: SurveyFormService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.questions = this.surveyFormService.getQuestions();
    let group: any = {};
    this.questions.forEach(question => {
      group[question.id] = this.addQuestionFormGroup();
    })
    this.surveyForm = new FormGroup(group);
  }

  addQuestionFormGroup(): FormGroup {
    return this.fb.group({
      selectedRating: [0],
      ratingDescription: [""]
    });
  }

  onSubmit() {
    console.log('clicked submit btn');
    console.log(this.surveyForm.value);
  }

}
