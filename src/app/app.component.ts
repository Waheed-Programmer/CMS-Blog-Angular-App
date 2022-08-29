import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CMS-App';
  name = "Angular Name "
  message:any;
  constructor(public router:Router){}
  formSubmit(Data:any){
    console.log(Data);
  }
}
