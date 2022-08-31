import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit {
  countryForm!: FormGroup
  closeResult!: string;
  submitted:boolean = false;
  constructor(private fb: FormBuilder,private modalService: NgbModal) {}

  openBackDropCustomClass(content:any) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }


  ngOnInit(): void {
    this.setFormState();
  }

  setFormState(){
    this.countryForm = this.fb.group({
      countryId: [0],
      countryName: ['',Validators.required],

    });
  }
  SaveData(){
    this.submitted =true;
  }

}
