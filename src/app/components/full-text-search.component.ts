import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {EmployeeModel} from '../store/models/employee.model';
// [ngModelOptions]  = {standalone: true};

@Component({
  selector: 'app-full-text-search',
  templateUrl: './html/full-text-search.component.html',
  styleUrls: ['./css/full-text-search.component.css']
})
export class FullTextSearchComponent {
  title = 'Employee Cards';
  @Input() empCollection: EmployeeModel[];
  @Output() employeeFiltered  = new EventEmitter<any>();
  filteredEmpCollection: EmployeeModel[];

  performFullTextSearch(event) {
    const initiator       = event.target;
    const searchTerm      = initiator.value;
    const fEmpCollection  = new Set([]);
    const BreakException  = {};

    this.empCollection.forEach(function(data: EmployeeModel, index) {
      const dataKeys    = Object.keys(data.toObject());
      const dataValues  = Object.values(data.toObject());

      try {
        dataValues.forEach(function (strText: any, cueKey) {
          const rx = new RegExp(searchTerm.replace(/([()])/g, '\\$1'), 'gui');
          if (rx.test(strText.toString())) {
            // PUSH THIS EMPLOYEE MODEL TO THE filteredEmpCollection ARRAY...
            fEmpCollection.add(data);
            throw BreakException;
          }
        });
      } catch (e) {
        if (e !== BreakException) { throw e; }
      }

    });
    this.filteredEmpCollection = Array.from(fEmpCollection);
    this.employeeFiltered.emit(this.filteredEmpCollection); // {data: this.filteredEmpCollection, refresh: true}
    // console.log( this.filteredEmpCollection );

  }
}
