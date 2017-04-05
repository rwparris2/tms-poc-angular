import { Component, OnInit, Input, Inject, ElementRef, Output, EventEmitter } from '@angular/core';
import { RefType } from "app/shared/models/ref-type.model";

@Component({
  selector: 'app-tp-dropdown',
  templateUrl: './tp-dropdown.component.html',
  styleUrls: ['./tp-dropdown.component.css']
})
export class TpDropdownComponent {
  private selectedItemValue: RefType;
  isEditing: boolean;

  @Input()
  label: string = '';

  @Input()
  items: RefType[];

  @Input()
  get selectedItem(): RefType {
    return this.selectedItemValue;
  };

  set selectedItem(val) {
    this.selectedItemValue = val;
    this.selectedItemChange.emit(this.selectedItemValue);
  }

  @Output()
  selectedItemChange: EventEmitter<RefType> = new EventEmitter();

  focusInputElement() {
    setTimeout(() => {

      const dropdownEl = this.element.nativeElement.querySelector('select');

      const event = document.createEvent('MouseEvents');
      event.initMouseEvent('mousedown', true, true, window, undefined, undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined);

      dropdownEl.dispatchEvent(event);
      dropdownEl.focus();
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
