import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { SurveyFormService } from './survey-form/survey-form.service';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { RatingInputComponent } from './rating-input/rating-input.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    SurveyFormComponent,
    RatingInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SurveyFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
