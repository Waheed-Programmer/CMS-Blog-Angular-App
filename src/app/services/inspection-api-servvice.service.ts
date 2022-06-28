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

  getInspectionList():Observable<any[]>{
    return this.http.get<any>(this.InspectionApIUrl + '/Inspections')
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

}
