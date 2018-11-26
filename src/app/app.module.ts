import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';



import { AppComponent } from './app.component';
import {EmployeeCardComponent} from './components/employee-card.component';
import {EmployeeCardsComponent} from './components/employee-cards.component';
import {FullTextSearchComponent} from './components/full-text-search.component';

import {EmployeeImageComponent} from './sub-components/employee.image';
import {EmployeeDetailsComponent} from './sub-components/employee.details';
import {EmployeeImageTagComponent} from './sub-components/employee.image.tag';
import {EmployeeInfoComponent} from './sub-components/employee.info';
import {EmployeeTagComponent} from './sub-components/employee.tag';
import {EmployeeService} from './services/employee.service';
import {employeeReducer} from './store/reducers/employee.reducer';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCardComponent,
    EmployeeCardsComponent,
    FullTextSearchComponent,

    // SUB-COMPONENTS
    EmployeeImageComponent,
    EmployeeDetailsComponent,
    EmployeeImageTagComponent,
    EmployeeInfoComponent,
    EmployeeTagComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    StoreModule,
    StoreModule.forFeature('employee', employeeReducer),
    StoreModule.forRoot({}),
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
