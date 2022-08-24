import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {

  readonly BaseUrl = "https://localhost:5001/api";
  constructor(private httpClient:HttpClient) { }

}
