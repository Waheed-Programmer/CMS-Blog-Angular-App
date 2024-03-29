import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CountryServiceService } from '../services/country-service.service';
@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit {
  countryForm!: FormGroup
  closeResult!: string;
  submitted:boolean = false;
  saveResponse:any;
  editData:any;
  Modelref:any;
  @ViewChild('content') addview! : ElementRef
  constructor(private fb: FormBuilder,private modalService: NgbModal, private service: CountryServiceService) {}

  openBackDropCustomClass() {
    this.modalService.open(this.addview, {backdropClass: 'light-blue-backdrop'});
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
    if ((this.countryForm.invalid)) {
      return;
    }
    this.countryForm.getRawValue();
    this.service.insertCountry(this.countryForm.getRawValue()).subscribe(result=>{
      this.saveResponse = result;
      console.log(this.saveResponse)

  })
}

  // Load Data in controll fields
  loadEdit(id:any){
    this.ClearForm();
    this.Modelref =this.openBackDropCustomClass();
    this.service.getCountryById(id).subscribe(result=>{
      this.editData = result;
      this.countryForm.patchValue({countryId: this.editData.countryId,countryName: this.editData.countryName})

    })

  }
  ClearForm(){
    this.countryForm = this.fb.group({
      countryId: 0,
      countryName: ''
    });
    // this.modalRef.dismiss();
  }
}
