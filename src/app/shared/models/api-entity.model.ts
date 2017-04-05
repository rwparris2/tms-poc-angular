import { Response } from "@angular/http/src/static_response";
import { ApiEntityError } from "app/shared/errors/api-entity.error";

export class ApiEntity<T> {

  /**
   * Parse the response from an http.[get|post|etc] call.
   * Assumes the call returned an ApiEntity object.
   * If the server did not return success:true in it's response,
   * an error is thrown.
   * 
   * @param response The response from http.[get|post|etc]
   * @example
   * let x:Observable<Shipment[]> = this.http
   *   .get(this.urls.shipments)
   *   .map(response => ApiEntity.parseResponse<Shipment[]>(response));
   */
  public static parseResponse<T>(response: Response): T {
    if (!response) { throw new Error('Response cannot be null'); }
    if (!response.json()) {
      console.warn('Could not parse response: response has no data');
      return null;
    }

    const apiEntity = new ApiEntity<T>(response.json());
    if (!apiEntity.success) {
      throw new ApiEntityError<T>('REQUEST_NOT_SUCCESSFUL: ' +
        (apiEntity.errors || []).join(', '), apiEntity, response);
    }

    return apiEntity.data;
  }

  data: T = null;
  success: boolean = false;
  messages: string[] = [];
  errors: string[] = [];
  tid: string = null;

  constructor(opts) {
    this.data = opts.data;
    this.success = opts.success;
    this.messages = opts.messages;
    this.errors = opts.errors;
    this.tid = opts.tid;
  }
}