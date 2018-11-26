import {Component, Input} from '@angular/core';
import {EmployeeModel} from '../store/models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './html/employee-details.html',
  styleUrls: ['./css/employee-details.css']
})
export class EmployeeDetailsComponent {
  title = 'Employee Details';
  @Input() employeeData: EmployeeModel;



  closeReceptacle(event) {
    const detailsBase   = document.getElementById('pz-ajax-receptacle');
    detailsBase.style.display =  'none';
    console.log(event);
  }
}
