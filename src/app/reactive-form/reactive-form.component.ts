import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
  }
  contactForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    number: new FormControl('',[Validators.required]),
  });
}
