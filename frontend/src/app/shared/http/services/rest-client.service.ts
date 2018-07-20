import {
  Observable,
  throwError as observableThrowError
} from "rxjs";

import {
  catchError,
  map
} from "rxjs/operators";
import { Injectable } from "@angular/core";
import {
  Headers,
  Http,
  RequestOptions,
  Response,
  URLSearchParams
} from "@angular/http";

import { HttpHelper } from "../helper/http.helper";
import { Store } from "@ngrx/store";
import { State } from "../../../app.reducers";
import {
  AddErrorWithKeyAction,
  AddErrorWithTextAction
} from "../../error/store/error.actions";

/*
 * Service to wrap REST HTTP calls and to provide a HAL-based API
 */
@Injectable()
export class RestClientService {

  private _baseUrl: string;
  private _headers: Headers;

  constructor(private _http: Http,
              private _httpHelper: HttpHelper,
              private _store: Store<State>) {
    this._baseUrl = this._httpHelper.getRestApiBaseUrl();
    this._headers = new Headers();
  }

  /**
   * Wrapper for HTTP GET operation
   */
  public get(url: string, paramsMap?: Map<any, any>): Observable<any> {
    this._headers.set("Cache-Control", "no-cache");
    let options = new RequestOptions({ headers: this._headers });
    if (paramsMap) {
      const requestParams: URLSearchParams = new URLSearchParams();
      paramsMap.forEach((key, value) => {
        requestParams.set(key, value);
      });
      options = new RequestOptions({ headers: this._headers, search: requestParams });
    }
    return this._http
               .get(this._baseUrl + url, options)
               .pipe(
                 map(response => this.mapResponse(response)),
                 catchError(error => this.handleError(error))
               );
  }

  /**
   * Wrapper for HTTP POST operation
   */
  public post(url: string, body?: string): Observable<any> {
    this._headers.set("Content-Type", "application/json");
    const options = new RequestOptions({ headers: this._headers });
    if (body === null) {
      body = "";
    }
    return this._http
               .post(this._baseUrl + url, body, options)
               .pipe(
                 map(response => this.mapResponse(response)),
                 catchError(error => this.handleError(error))
               );
  }

  /**
   * Wrapper for HTTP PUT operation
   */
  public put(url: string, body?: string): Observable<any> {
    this._headers.set("Content-Type", "application/json");
    const options = new RequestOptions({ headers: this._headers });
    if (body === null) {
      body = "";
    }
    return this._http
               .put(this._baseUrl + url, body, options)
               .pipe(
                 map(response => this.mapResponse(response)),
                 catchError(error => this.handleError(error))
               );
  }

  /**
   * Generic response mapper. Since JSON is the object representation in java script,
   * the mappers returns type any. The invoker can cast the response.
   */
  private mapResponse(res: Response): any {
    const body: any = res.json();
    return body || {};
  }

  private handleError(error: any) {
    let errMsg: string;
    if (error.status === 0) {
      errMsg = "REST-CLIENT-SERVICE_ERROR-SERVER-UNREACHABLE";
      this._store.dispatch(new AddErrorWithKeyAction(errMsg));
    } else {
      errMsg = error._body;
      this._store.dispatch(new AddErrorWithTextAction(errMsg));
    }
    return observableThrowError(errMsg);
  }

}
