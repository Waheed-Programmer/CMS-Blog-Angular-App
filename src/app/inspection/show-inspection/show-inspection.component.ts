import { Component, OnInit } from '@angular/core';
import { map, Observable, observable } from 'rxjs';
import { InspectionAPIServviceService } from 'src/app/services/inspection-api-servvice.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css']
})
export class ShowInspectionComponent implements OnInit {
  closeResult: string = '';
  inspectionList : any;
  inspectionType : any;
  inspectionTypesList: any;
  
  // Map to display data associate with foreign key
  inspectionTypesMap: Map<number, string> = new Map() 

  constructor(private modalService: NgbModal,
    private service: InspectionAPIServviceService) { }

    open(content:any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } 

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }



  ngOnInit(): void {
    this.service.getInspectionList().subscribe((response:any)=>{
      
      console.log("Data",response);
      this.inspectionList = response;
      this.inspectionType = this.service.getInspectionTypesList();

      
  })
  
  }


  

}
