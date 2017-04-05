import { Component, OnInit, Input, Output, EventEmitter, Inject, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tp-input',
  templateUrl: './tp-input.component.html',
  styleUrls: ['./tp-input.component.css']
})
export class TpInputComponent {
  private _value: string;
  isEditing: boolean;

  @Input()
  label: string = 'label';

  @Input()
  get inputValue() {
    return this._value;
  }

  set inputValue(val) {
    this._value = val;
    this.inputValueChange.emit(this._value);
  }

  @Output()
  inputValueChange: EventEmitter<any> = new EventEmitter();

  focusInputElement() {
    setTimeout(() => {
      const inputEl = this.element.nativeElement.querySelector('input');
      inputEl.focus();
    });
  }

  toggleEditMode() {
    this.isEditing = !this.isEditing;
    if (this.isEditing) {
      this.focusInputElement();
    }
  }

  constructor( @Inject(ElementRef) private element: ElementRef) { }
}
