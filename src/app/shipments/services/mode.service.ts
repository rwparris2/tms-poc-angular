import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { API_URL } from "app/shared/ApplicationSettings";
import { ApiEntity } from "app/shared/models/api-entity.model";
import { RefType } from "app/shared/models/ref-type.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ModeService {
  private http: Http;
  private urls = {
    get modes() { return API_URL + '/modes'; },
  };

  getModes(): Observable<RefType[]> {
    return this.http
      .get(this.urls.modes)
      .share()
      .map(response => ApiEntity.parseResponse<RefType[]>(response))
  }

  constructor(http: Http) {
    this.http = http;
  }
}
