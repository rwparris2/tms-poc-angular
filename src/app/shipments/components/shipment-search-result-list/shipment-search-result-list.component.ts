import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ShipmentService } from "app/shipments/services/shipment.service";
import { Shipment } from "app/shipments/models/shipment.model";
import { Router } from "@angular/router";


@Component({
  selector: 'app-shipment-search-result-list',
  templateUrl: './shipment-search-result-list.component.html',
  styleUrls: ['./shipment-search-result-list.component.css']
})
export class ShipmentSearchResultListComponent implements OnInit {
  shipments: Observable<Shipment[]>;
  resultColumns: String[];

  constructor(
      private shipmentService: ShipmentService,
      private router: Router
    ) {
    this.shipmentService = shipmentService;
  }

  onSelect(shipment) {
    this.router.navigate(['/shipments', shipment.id]);
  }

  getShipments() {
    this.shipments = this.shipmentService.getShipmentsSearchResult();
  }

  ngOnInit() {
    this.getShipments();

    this.shipments.subscribe(shipments => {
      if (shipments && shipments.length) {
        this.resultColumns = Object.keys(shipments[0])
          .sort((a: any, b: any) => {
            if (a === 'id') { return -1; }
            else if (b === 'id') { return 1; }
            else return a - b;
          })
      }
    });
  }

}
