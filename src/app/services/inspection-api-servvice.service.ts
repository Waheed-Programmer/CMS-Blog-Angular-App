import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionAPIServviceService {
  readonly InspectionApIUrl = "https://localhost:7185/api";
  constructor(private http: HttpClient) { }

  //Inspections

  getInspectionList(): Observable<any>{
   
    return this.http.get<any>(this.InspectionApIUrl+'/Inspections')
  }

  addInspection(data:any){
    return this.http.post(this.InspectionApIUrl + '/Inspections',data)
  }
  updateInspection(id:number|string, data:any){
    return this.http.put(this.InspectionApIUrl + `/Inspections/${id}`, data)
  }

  deleteInspection(id:number|string){
    return this.http.delete(this.InspectionApIUrl + `/Inspection/${id}`)
  }

   //InspectionTypes

   getInspectionTypesList():any{
    return this.http.get<any>(this.InspectionApIUrl + '/InspectionTypes')
  }

  addInspectionTypes(data:any){
    return this.http.post(this.InspectionApIUrl + '/InspectionTypes',data)
  }
  updateInspectionTypes(id:number|string, data:any){
    return this.http.put(this.InspectionApIUrl + `/InspectionTypes/${id}`, data)
  }

  deleteInspectionTypes(id:number|string){
    return this.http.delete(this.InspectionApIUrl + `/InspectionTypes/${id}`)
  }

   //Status

   getStatusList():any{
    return this.http.get<any>(this.InspectionApIUrl + '/Status')
  }

  addStatus(data:any){
    return this.http.post(this.InspectionApIUrl + '/Status',data)
  }
  updateStatus(id:number|string, data:any){
    return this.http.put(this.InspectionApIUrl + `/Status/${id}`, data)
  }

  deleteStatus(id:number|string){
    return this.http.delete(this.InspectionApIUrl + `/Status/${id}`)
  }

}
