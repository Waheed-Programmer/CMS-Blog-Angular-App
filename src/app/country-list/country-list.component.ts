import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryFormComponent } from '../country-form/country-form.component';
import { CountryServiceService } from '../services/country-service.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countryList:any;
  @ViewChild(CountryFormComponent) UpdateView! : CountryFormComponent
  constructor(private service: CountryServiceService) { }
  p:number = 1;
  public pageSize = 1;

  ngOnInit(): void {
    this.getCountryList();
  }

  getCountryList(){
    debugger
    this.service.getAllCountry().subscribe(result=>{
      this.countryList =result;
    })
  }

  EditFunction(Id:any){
    debugger
    console.log(Id);
    this.UpdateView.loadEdit(Id);
  }
}
