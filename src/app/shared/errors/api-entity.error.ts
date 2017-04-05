import { Response } from "@angular/http/src/static_response";
import { ApiEntity } from "app/shared/models/api-entity.model";

export class ApiEntityError<T> extends Error {
  apiEntity: ApiEntity<T>;
  response: Response;

  constructor(message?: string, apiEntity?: ApiEntity<T>, response?: Response) {
    super(message);
    this.apiEntity = apiEntity;
    this.response = response;
  }
}