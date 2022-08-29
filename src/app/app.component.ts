import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CMS-App';
  name = "Angular Name "
  message:any;

  formSubmit(Data:any){
    console.log(Data);
  }
}
