import {Component, Input} from '@angular/core';
import {EmployeeModel} from '../store/models/employee.model';

@Component({
  selector: 'app-employee-tag',
  templateUrl: './html/employee-tag.html',
  styleUrls: ['./css/employee-tag.css']
})
export class EmployeeTagComponent {
  title = 'Employee Tag';
  @Input() employee: EmployeeModel;
  @Input() empID: number;
  @Input() empBlockRoot: string;
}
