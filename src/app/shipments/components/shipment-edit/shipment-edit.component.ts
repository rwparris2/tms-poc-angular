import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from "@angular/forms";

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

import { RefType } from "app/shared/models/ref-type.model";
import { ShipmentService } from "app/shipments/services/shipment.service";
import { ModeService } from "app/shipments/services/mode.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-shipment-edit',
  templateUrl: './shipment-edit.component.html',
  styleUrls: ['./shipment-edit.component.css']
})
export class ShipmentEditComponent implements OnInit {
  form: FormGroup;
  modes: Observable<RefType[]> = this.modeService.getModes();

  constructor(
    private route: ActivatedRoute,
    private modeService: ModeService,
    private shipmentService: ShipmentService,
    private fb: FormBuilder
  ) { }

  addLineItem() {
    const control = <FormArray>this.form.controls['lineItems'];
    control.push(this.initLineItem());
  }

  removeLineItem() {

  }

  save() {
    console.log('save args', arguments);
    console.log('save form', this.form);
  }

  loadShipment() {
    this.route.params
      .switchMap(params => this.shipmentService.getShipment(+params.shipmentId))
      .do(shipment => /* debug rxjs streams */ console.log('shipment', shipment))
      .subscribe(shipment => this.form.patchValue(shipment));
  }

  initLineItem() {
    return this.fb.group({
      item: ['', Validators.required],
      qty: ['', Validators.required]
    });
  }

  initForm() {
    this.form = this.fb.group({
      id: ['', Validators.required],
      origin: this.fb.group({
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.required],
      }),
      mode: [{}, Validators.required],
      hot: [false],
      lineItems: this.fb.array([
        this.initLineItem()
      ])
    });

    // example of using observables with form values changes
    this.form.valueChanges
      .map((value) => {
        if (value && value.addr1 && value.addr1.city) {
          // value.addr1.city = value.addr1.city.toUpperCase();
        }
        return value;
      })
      .filter((value) => this.form.valid)
      .subscribe((value) => {
        console.log("Model Driven Form valid value: vm = ", JSON.stringify(value, null, 2));
      });
  }

  ngOnInit() {
    this.initForm();
    this.loadShipment();
  }
}
