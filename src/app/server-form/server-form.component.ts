import { Component, OnInit } from '@angular/core';
import { Question } from '../question/question.model';
import { SurveyFormService } from '../survey-form/survey-form.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.css']
})
export class ServerFormComponent implements OnInit {
  surveyForm: FormGroup;
  questions: Question[];

  constructor(private surveyFormService: SurveyFormService) { }

  ngOnInit(): void {
    this.questions = this.surveyFormService.getQuestions();
  }

  onSubmit() {

  }

}
