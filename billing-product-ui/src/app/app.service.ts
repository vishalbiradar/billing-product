import {Injectable} from '@angular/core';
import {HotelModel, ItemModel, TableModel} from './app.model';
import {catchError, map} from 'rxjs/operators';
import {throwError as observableThrowError, Observable} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';


@Injectable()
export class AppService {

  billingProductUrl = '/billingProduct';
  hotelDetailsUrl = this.billingProductUrl + '/hotelDetails';
  loginUrl = this.billingProductUrl + '/login';

  headers: HttpHeaders;
  options: any;


  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    this.options = {headers: this.headers};
  }

  private getServer() {
    return environment.production ? '' : 'http://localhost:8080';
  }

  getResource(url: string): Observable<any> {
    return this.http.get(this.getServer() + url, this.options)
      .pipe(catchError((error) => this.handleError(error)));
  }

  postResource(url: string, body: any): Observable<any> {
    return this.http
      .post(this.getServer() + url, body, this.options)
      .pipe(catchError((error) => this.handleError(error)));
  }

  private handleError(error: HttpErrorResponse) {
    let err: any;
    if (error && error.error) {
      err = {_body: JSON.stringify(error.error)};
      if (error.status && error.status === 401) {
        err._status = error.status;
      }
    } else {
      err = {_body: JSON.stringify({message: 'Please try again'})};
    }
    return observableThrowError(err);
  }

  /**
   * Initialize model classes
   */

  initializeHotelModel(): HotelModel {
    return {
      discount: null,
      gst: null,
      hotelAddress: null,
      hotelBranchCode: null,
      hotelBranchName: null,
      hotelDescription: null,
      hotelId: null,
      hotelName: null,
      hotelSpeciality: []
    };
  }

  initializeTableModel(): TableModel {
    return {
      tableNumber: null,
      items: [],
      isActive: null,
      total: 0,
      discount: 0,
      gst: 0,
      grandTotal: 0
    };
  }

  initializeItemModel(): ItemModel {
    return {
      itemName: null,
      quantity: 0,
      rate: 0,
      total: 0
    };
  }

  buildHotelModelWithValues(details: any): HotelModel {
    const model: HotelModel = this.initializeHotelModel();
    model.discount = details.discount;
    model.gst = details.gst;
    model.hotelAddress = details.hotelAddress;
    model.hotelBranchCode = details.hotelBranchCode;
    model.hotelBranchName = details.hotelBranchName;
    model.hotelDescription = details.hotelDescription;
    model.hotelId = details.hotelId;
    model.hotelName = details.hotelName;
    model.hotelSpeciality = details.hotelSpeciality;
    return model;
  }


  /**
   * API Calls
   */
  getHotelDetails(hotelId: number) {
    const url = this.hotelDetailsUrl + '?hotelId=' + hotelId;
    return this.getResource(url)
      .pipe(map((res: any) => {
        return res.data;
      }));
  }

  login(userName: string, password: string) {
    const loginObj = {'userName': userName, 'password': password};
    const body = JSON.stringify(loginObj);
    return this.postResource(this.loginUrl, body)
      .pipe(map((res: any) => {
        return res.data;
      }));
  }
}
