import { Component, OnInit } from '@angular/core';
import { map, Observable, observable } from 'rxjs';
import { InspectionAPIServviceService } from 'src/app/services/inspection-api-servvice.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css'],
})
export class ShowInspectionComponent implements OnInit {
  closeResult: string = '';
  inspectionList: any;
  inspectionType: any;
  inspectionTypesListMap: any=[];


  //Add variables(Properties)
  modalTitle:string = '';
  activateAddEditInspectionComponent:boolean=false;
  inspection:any;
  // Map to display data associate with foreign key
  inspectionTypesMap: Map<number, string> = new Map();

  constructor(
    private modalService: NgbModal,
    private service: InspectionAPIServviceService
  ) {}

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.service.getInspectionList().subscribe((response: any) => {
      
      console.log('Data', response);
      this.inspectionList = response;
      this.service.getInspectionTypesList().subscribe((ob: any) => {
        console.log(ob);
        this.inspectionType = ob;
      });
    });
    this.refreshinspectionTypesMap();
  }

  refreshinspectionTypesMap(){
    
    this.service.getInspectionTypesList().subscribe((value: any) => {     
      this.inspectionTypesListMap = value;

      for(let i = 0; i<value.length; i++){
        this.inspectionTypesMap.set(this.inspectionTypesListMap[i].id,
        this.inspectionTypesListMap[i].inspectionName);
      }
  });
}


//Add Method for database 
modalAdd(){
this.inspection = {
  id: 0,
  status:null,
  comments:null,
  inspectionTypeId:null
}
this.modalTitle ="Add Inspection";
this.activateAddEditInspectionComponent = true;
}
//Edit Method for database
modalEdit(item:any) {
  
  this.inspection = item;
  this.modalTitle = "Edit Inspection";
  this.activateAddEditInspectionComponent = true;
}
modalClose() {
  this.activateAddEditInspectionComponent = false;
  this.inspectionList = this.service.getInspectionList();
}

delete(item:any) {
  if(confirm(`Are you sure you want to delete inspection ${item.id}`)) {
    debugger
    this.service.deleteInspection(item.id).subscribe(res => {
      this.inspectionList = res;
      var closeModalBtn = document.getElementById('add-edit-modal-close');
    if(closeModalBtn) {
      closeModalBtn.click();
    }

    var showDeleteSuccess = document.getElementById('delete-success-alert');
    if(showDeleteSuccess) {
      showDeleteSuccess.style.display = "block";
    }
    setTimeout(function() {
      if(showDeleteSuccess) {
        showDeleteSuccess.style.display = "none"
      }
    }, 4000);
    this.inspectionList = this.service.getInspectionList();
    })
  }
}


}
