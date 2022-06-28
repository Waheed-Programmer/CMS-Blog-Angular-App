import { Component, OnInit } from '@angular/core';
import { map, Observable, observable } from 'rxjs';
import { InspectionAPIServviceService } from 'src/app/services/inspection-api-servvice.service';


@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css']
})
export class ShowInspectionComponent implements OnInit {

  inspectionList$! : Observable<any[]>;
  inspectionType$! : Observable<any[]>;
  inspectionTypesList: any=[];

  // Map to display data associate with foreign key
  inspectionTypesMap: Map<number, string> = new Map()
  

  constructor(private service: InspectionAPIServviceService) {

    this.inspectionList$ = this.service.getInspectionList();

   }

  ngOnInit(): void {
  }

}
