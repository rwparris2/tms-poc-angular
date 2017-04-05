import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ShipmentService } from "app/shipments/services/shipment.service";
import { ModeService } from "app/shipments/services/mode.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShipmentService, ModeService]
})
export class AppComponent {
  title = 'app works!';
}
