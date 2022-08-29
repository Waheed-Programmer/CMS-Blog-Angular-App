
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DepartmentServiceService } from '../services/department-service.service';
@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {
  depForm!:FormGroup;
  closeResult = '';
  errorClass = '';
  errorMessage = '';
  editData:any;
  saveResponse:any;

  @ViewChild('content') addview! : ElementRef
  constructor(private fb: FormBuilder, private modalService: NgbModal, private service: DepartmentServiceService) {

    this.depForm = fb.group({
      departmentId: [''],
      departmentName: ['',Validators.required],

    });

   }



  ngOnInit(): void {
  }
  loadEdit(id:any){

    this.open();
    this.service.getDepartment(id).subscribe(result=>{
      this.editData = result;
      this.depForm.setValue({departmentId: this.editData.departmentId,departmentName: this.editData.departmentName})

    })

  }

  ClearForm(){
    this.depForm.reset();
  }
  //Start insert fuction--->
  SaveData(){

    if(this.depForm.valid){
      //const jsonObj: any = JSON.parse(employeeString);
   const department: department = <department>this.depForm.getRawValue();
   if(department.departmentId.toString() == "")
   {
    department.departmentId = 0;
   }
      this.service.insertDepartment(department).subscribe(result=>{
        this.saveResponse = result;
        console.log(this.saveResponse)
      })
    }
    else
    {
      this.errorMessage = "Please enter valid data";
      this.errorClass = "error";
    }
  }
  //End insert fuction--->

  // Start Open Modal-->
  open() {
    this.ClearForm();
    this.modalService.open( this.addview, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

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
      return `with: ${reason}`;
    }
  }
// End Open Modal-->
    get departmentName(){
      return this.depForm.get('departmentName')
    }
}
interface department {
  departmentId: number;
  departmentName: string;
}
