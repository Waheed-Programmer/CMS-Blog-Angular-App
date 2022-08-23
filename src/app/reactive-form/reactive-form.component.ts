import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  contactForm:FormGroup;
  constructor(private fb: FormBuilder) {

    this.contactForm = fb.group({
      name: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      number: ['',Validators.required],
    });

   }



  ngOnInit(): void {
  }

  postData(){
     var name = this.contactForm.get('name').value;
  }




}
