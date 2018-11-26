import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-employee-info',
  templateUrl: './html/employee-info.html',
  styleUrls: ['./css/employee-info.css']
})
export class EmployeeInfoComponent {
  title = 'Employee Info';
  @Input() empID;
  @Input() empName;
  @Input() employee;
  @Input() empBlockRoot;
}
