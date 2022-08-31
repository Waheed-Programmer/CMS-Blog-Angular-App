import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  readonly BaseUrl = "https://localhost:5001/api";
  constructor(private httpClient:HttpClient) { }

   //Fetch data all Country from data base
   getAllCountry()
   {
     return this.httpClient.get(this.BaseUrl + '/Country/getListCountry')
   }

   //Add new Country

  insertCountry(Countrymodel:any){
    debugger

    return this.httpClient.post(this.BaseUrl + '/Country/addCountry',Countrymodel)
  }

  //Fetch data for single Country
  getCountryById(Id:any)
  {
    return this.httpClient.get(this.BaseUrl + '/Country/getCountryById/'+Id)
  }
}
