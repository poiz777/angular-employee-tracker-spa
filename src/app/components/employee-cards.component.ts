import {Component, OnInit, OnDestroy, Output, Input} from '@angular/core';

import { Store } from '@ngrx/store';

import { EmployeeService } from '../services/employee.service';
import {EmployeeModel} from '../store/models/employee.model';
import {EmployeeCollectionModel} from '../store/models/employee-collection.model';

@Component({
  selector: 'app-employee-cards',
  templateUrl: './html/employee.cards.component.html',
  styleUrls: ['./css/employee.cards.component.css']
})
export class EmployeeCardsComponent implements OnInit, OnDestroy {
  title = 'Employee Cards';
  rendered = false;
  public dataList:  EmployeeModel[];
  public dataListClone:  EmployeeModel[];
  public firstData: EmployeeModel;
  public employeeData:  EmployeeModel;
  public employeeCollectionModel: EmployeeCollectionModel;
  errorMessage: string;

  constructor(private employeeService: EmployeeService, private store: Store<EmployeeModel>) {
    this.employeeData = null;
  }

  updateEmployeeData(employeePayload) {
    this.employeeData = employeePayload;
  }

  updateEmployeeCollection(filteredEmployeeCollection) {
    this.dataList = filteredEmployeeCollection;
  }

  public loadFullArticle(evt) {
    const clickedLinkID = evt.target.getAttribute('data-id');

    this.store.dispatch( {
        type    : 'FETCH_DATA',
        payload : this.employeeCollectionModel.getEmployeeModelByID(clickedLinkID)
      }
    );
  }

  ngOnInit() {
    this.employeeService.getDataCollection().subscribe(
      (collection: EmployeeModel[]) => {
        // const collection              = EmployeeService.randomizeData(data);
        this.employeeCollectionModel  = new EmployeeCollectionModel(collection, this.employeeService);
        this.dataList                 = this.employeeCollectionModel.getDataCollection();
        this.dataListClone            = this.dataList;
        this.firstData                = this.employeeCollectionModel.getEmployeeModelByIndex(0);
        this.rendered                 = true;
        // console.log(this.dataList);
        this.store.dispatch( {
            type    : 'FETCH_DATA',
            payload : this.firstData
          }
        );
      },
      (err: any) => this.errorMessage = err.error
    );

  }

  ngOnDestroy() {

  }
}

