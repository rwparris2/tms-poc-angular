import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TpInputComponent } from "app/shared/components/tp-input/tp-input.component";
import { TpDropdownComponent } from './shared/components/tp-dropdown/tp-dropdown.component';
import { ShipmentEditComponent } from "app/shipments/components/shipment-edit/shipment-edit.component";
import { ShipmentSearchResultListComponent } from "app/shipments/components/shipment-search-result-list/shipment-search-result-list.component";
import { TpAddressComponent } from './shared/components/tp-address/tp-address.component';

@NgModule({
  declarations: [
    AppComponent,
    TpInputComponent,
    ShipmentSearchResultListComponent,
    ShipmentEditComponent,
    TpDropdownComponent,
    TpAddressComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'shipments',
        pathMatch: 'full'
      }, {
        path: 'shipments',
        component: ShipmentSearchResultListComponent,
      }, {
        path: 'shipments/:shipmentId',
        component: ShipmentEditComponent
      }
    ], { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
