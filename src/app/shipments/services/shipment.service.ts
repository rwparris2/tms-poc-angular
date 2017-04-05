import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/of';

import { ApiEntity } from "app/shared/models/api-entity.model";
import { API_URL } from "app/shared/ApplicationSettings";
import { Shipment } from "app/shipments/models/shipment.model";

@Injectable()
export class ShipmentService {
  private http: Http;
  private urls = {
    get shipments() { return API_URL + '/shipments'; },
    get shipmentsById() { return API_URL + '/shipments/{shipment_id}'; }
  };

  getShipmentsSearchResult(): Observable<Object[]> {
    return this.http
    .get(this.urls.shipments)
    .share()
    .map(response => ApiEntity.parseResponse<Object[]>(response))
    // return Observable.of(SHIPMENTS);
  }

  getShipment(id: number): Observable<Shipment> {
    id = 1; // because server is mocked
    return this.http
      .get(this.urls.shipmentsById.replace(/\{shipment_id\}/, id.toString()))
      .map(response => ApiEntity.parseResponse<Shipment>(response));
  }

  constructor(http: Http) {
    this.http = http;
  }

}
