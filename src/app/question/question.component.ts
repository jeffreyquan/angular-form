import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { Question } from './question.model';
import { ControlValueAccessor, FormGroup, FormBuilder, NG_VALUE_ACCESSOR, FormGroupDirective, ControlContainer } from '@angular/forms';

type Answer = {
  selectedRating: number;
  ratingDescription: string;
};

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => QuestionComponent),
      multi: true
    }
  ]
})
export class QuestionComponent implements OnInit, ControlValueAccessor {
  @Input() question: Question;
  value: Answer;

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit(): void {}

  onChange = (value: Answer) => {
    this.value = value;
  };

  onTouched = () => {};

  writeValue(value: Answer): void {
    this.value = value;
    this.onChange(this.value);
    console.log(this.value);
  }
  
  registerOnChange(fn: (value: Answer) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    
  }

  autoSize(event: any) {
     const ratingDescriptionInput = event.target;
     ratingDescriptionInput.style.height = "auto";
     ratingDescriptionInput.style.height = ratingDescriptionInput.scrollHeight + "px";
  }
}
