import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InspectionAPIServviceService } from './services/inspection-api-servvice.service';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { DepartmentFormComponent } from './department-form/department-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    EmployeeComponent,
    DepartmentComponent,
    NavbarComponent,
    DepartmentFormComponent,

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule

  ],
  providers: [InspectionAPIServviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
