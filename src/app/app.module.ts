import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InspectionComponent } from './inspection/inspection.component';
import { ShowInspectionComponent } from './inspection/show-inspection/show-inspection.component';
import { AddEditInspectionComponent } from './inspection/add-edit-inspection/add-edit-inspection.component';
import { InspectionAPIServviceService } from './services/inspection-api-servvice.service';


@NgModule({
  declarations: [
    AppComponent,
    InspectionComponent,
    ShowInspectionComponent,
    AddEditInspectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [InspectionAPIServviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
