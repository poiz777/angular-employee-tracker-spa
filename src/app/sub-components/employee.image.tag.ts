import {Component, EventEmitter, Input, Output} from '@angular/core';
import {EmployeeModel} from '../store/models/employee.model';

@Component({
  selector: 'app-employee-image-tag',
  templateUrl: './html/employee-image-tag.html',
  styleUrls: ['./css/employee-image-tag.css']
})
export class EmployeeImageTagComponent {
  vueRoute: string;
  restAccessURI: string;
  title = 'Employee Card';
  @Input() empBlockRoot: string;
  @Input() empPageURI: string;
  @Input() employee: EmployeeModel;
  @Output() employeeWasClicked = new EventEmitter<any>();


  constructor() {
    this.restAccessURI  = 'http://sim-rest.poiz.me/en/data/api/v1/employees/';
    this.vueRoute       = this.restAccessURI;
  }

  informParent(employeePayload) {
    this.employeeWasClicked.emit(employeePayload);
  }
}
