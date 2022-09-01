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
import { DepartmentServiceService } from './services/department-service.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ArticlesModule } from './articles/articles.module';
import { StaticpagesModule } from './staticpages/staticpages.module';
import { CountryFormComponent } from './country-form/country-form.component';
import { CountryListComponent } from './country-list/country-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderPipe } from 'ng2-order-pipe';




@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    EmployeeComponent,
    DepartmentComponent,
    NavbarComponent,
    DepartmentFormComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PagenotfoundComponent,
    CountryFormComponent,
    CountryListComponent




  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    ArticlesModule,
    StaticpagesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPaginationModule,




  ],
  providers: [InspectionAPIServviceService,DepartmentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
