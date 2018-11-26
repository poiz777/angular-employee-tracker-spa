import {EmployeeModel} from './employee.model';
import {EmployeeService} from '../../services/employee.service';

export class EmployeeCollectionModel {
  public dataCollection: EmployeeModel[] = [];
  public activeEmployee: EmployeeModel;

  constructor(dataCollection: Array<object>, private employeeService: EmployeeService) {
    this.initializeCollection(dataCollection);
  }

  initializeCollection(dataCollection: Array<object>) {
    const selfRef: EmployeeCollectionModel = this;
    // RANDOMIZE EMPLOYEE COLLECTION...
    // dataCollection = EmployeeService.randomizeData(dataCollection);
    dataCollection.forEach(function(employeeItem: object) {
      selfRef.dataCollection.push(new EmployeeModel(employeeItem));
    });
  }

  getEmployeeModelByIndex(collectionIndex: any): EmployeeModel {
    return this.dataCollection[collectionIndex];
  }

  getDataCollection(): EmployeeModel[] {
    return this.dataCollection;
  }

  getEmployeeModelByID(clickedLinkID): EmployeeModel {
    const selfRef   = this;
    if (!this.dataCollection) {
      return null;
    }
    this.dataCollection.forEach(function(employeeModel: EmployeeModel, intKey: number) {
      if (employeeModel.id === clickedLinkID) {
        selfRef.activeEmployee = employeeModel;
        return true;
      }
    });
    return this.activeEmployee;
  }

  setDataCollection(dataCollection: EmployeeModel[]) {
    this.dataCollection = dataCollection;
  }

}

