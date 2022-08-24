import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  contactForm:FormGroup;
  closeResult = '';

  @ViewChild('content') addview! : ElementRef
  constructor(private fb: FormBuilder, private modalService: NgbModal) {

    this.contactForm = fb.group({
      name: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      number: ['',Validators.required],
    });

   }



  ngOnInit(): void {
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





}
