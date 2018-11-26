import {Component, EventEmitter, Input, Output} from '@angular/core';
import {EmployeeModel} from '../store/models/employee.model';
import {EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-employee-image',
  templateUrl: './html/employee-image.html',
  styleUrls: ['./css/employee-image.css']
})
export class EmployeeImageComponent {
  title = 'Employee Card';
  @Input() employee: EmployeeModel;
  @Input() restAccessURI: string;
  @Input() empBlockRoot: string;
  @Input() empPageURI: string;
  @Output() employeeData: EmployeeModel;
  @Output() employeeClicked = new EventEmitter<any>();

  constructor() {}

  renderDetailView(employeePayload) {
    const detailsBase   = document.getElementById('pz-ajax-receptacle');
    this.employeeClicked.emit(this.employeeData);
    detailsBase.style.display =  'block';
  }
}
