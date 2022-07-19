import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-structral-directives',
  templateUrl: './structral-directives.component.html',
  styleUrls: ['./structral-directives.component.css']
})
export class StructralDirectivesComponent implements OnInit {

  @Input('parentData') public name:any
  displayName = true;
  public color = "Yellow";
  public colors = ["red" ,"Yellow","Green","Mehroon"]
  constructor() { }

  ngOnInit(): void {
  }

}
