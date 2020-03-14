import { Component, OnInit, Input, forwardRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Rating } from '../shared/rating.model';

@Component({
  selector: 'app-rating-input',
  templateUrl: './rating-input.component.html',
  styleUrls: ['./rating-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingInputComponent),
      multi: true
    }
  ]
})
export class RatingInputComponent implements OnInit, ControlValueAccessor {
  @Input() ratings: Rating[];
  @Input() name: string;
  selectedRating: number;

  constructor() { }

  ngOnInit(): void {
  }

  onChange = (rating: number) => {};

  onTouched = () => {};

  writeValue(rating: number): void {
    this.selectedRating = rating ? rating : 0;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
   
  }

  change(value: any) {
    this.selectedRating = value;
    this.onChange(parseInt(value));
  }
}
