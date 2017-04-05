import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from "app/shared/models/Address.model";

@Component({
  selector: 'app-tp-address',
  templateUrl: './tp-address.component.html',
  styleUrls: ['./tp-address.component.css']
})
export class TpAddressComponent {
  private _address: Address;

  @Output()
  inputValueChange: EventEmitter<Address> = new EventEmitter();

  @Input()
  get address(): Address {
    return this._address;
  }

  set address(val: Address) {
    this._address = val;
  }
}
