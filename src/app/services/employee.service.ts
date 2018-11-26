import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import {EmployeeModel} from '../store/models/employee.model';
import {EmployeeCollectionModel} from '../store/models/employee-collection.model';

@Injectable()
export class EmployeeService {
  baseEndPoint:     string;
  dataEndPoint:     string;
  empEndPoint:      string;
  headers:          HttpHeaders;
  private employee: EmployeeModel;
  private dataCollection: EmployeeModel[];

  constructor(private http: HttpClient) {
    this.empEndPoint    = '/en/data/api/v1/employees';
    this.baseEndPoint   = 'http://sim-rest.poiz.me';  // http://poiz-shop.piz
    this.dataEndPoint   = this.baseEndPoint + this.empEndPoint;
  }

  private static handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  public static randomizeData(array): any[] {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // SO LONG AS WE HAVE ELEMENTS TO SHUFFLE...
    while (0 !== currentIndex) {
      // SELECT REMAINING ELEMENT...
      randomIndex   = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // THEN SWAP WITH CURRENT ELEMENT
      temporaryValue      = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex]  = temporaryValue;
    }
    return array;
  }

  getDataCollection(): Observable<EmployeeModel[]> {
    const self: EmployeeService  = this;
    if (this.dataCollection) {
        return of(this.dataCollection);
    }
    this.headers  = new HttpHeaders({
        'Content-Type':  'application/json'
    });
    const response = this.http.get<any[]>(this.dataEndPoint, {headers: this.headers});
    response.subscribe(function(data: any) {
        const collection              = EmployeeService.randomizeData(data);
        const dataCollectionModel     = new EmployeeCollectionModel(collection, self);
        self.dataCollection           = dataCollectionModel.getDataCollection();
        // console.log(self.dataCollection);
      });
    return response;
  }

}

