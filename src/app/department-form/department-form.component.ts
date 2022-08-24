
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {
  depForm!:FormGroup;
  closeResult = '';

  @ViewChild('content') addview! : ElementRef
  constructor(private fb: FormBuilder, private modalService: NgbModal) {

    this.depForm = fb.group({
      departmentName: ['',Validators.required],

    });

   }



  ngOnInit(): void {
  }

  SaveData(){
    console.log(this.depForm.value)
  }
  open() {
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

    get departmentName(){
      return this.depForm.get('departmentName')
    }
}
