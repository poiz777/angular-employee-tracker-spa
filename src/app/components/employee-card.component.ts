import {Component, EventEmitter, Input, Output} from '@angular/core';
import {EmployeeModel} from '../store/models/employee.model';

@Component({
  selector: 'app-employee-card',
  templateUrl: './html/employee.card.component.html',
  styleUrls: ['./css/employee.card.component.css']
})
export class EmployeeCardComponent {
  title = 'Employee Card';
  @Input() employee: EmployeeModel;
  @Input() colNum: number;
  @Output() employeeDetailsRequested = new EventEmitter<any>();


  constructor() {

  }


  public getColumnClass (): string {
    this.colNum = (!this.colNum) ? 12 : this.colNum;
    return 'col-xs-12 ' + 'col-md-' + this.colNum + ' col-lg-' + this.colNum;
  }

  public getBlockRootID (id, prefix): string {
    prefix = (undefined === prefix) ? '' : prefix;
    return prefix + 'pz-emp-slot-' + id;
  }

  employeeClickReceived(employeePayload) {
    this.employeeDetailsRequested.emit(employeePayload);
    // console.log('FROM EMPLOYEE-CARD');
    // console.log(employeePayload);
  }

}
