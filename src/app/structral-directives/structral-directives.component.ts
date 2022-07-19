import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'app-structral-directives',
  templateUrl: './structral-directives.component.html',
  styleUrls: ['./structral-directives.component.css']
})
export class StructralDirectivesComponent implements OnInit {

  @Input('parentData') public name:any
  @Output() childEvent = new EventEmitter();
  displayName = true;
  public color = "Yellow";
  public colors = ["red" ,"Yellow","Green","Mehroon"]
  constructor() { }

  ngOnInit(): void {
  }
  firstEvent(){
    debugger
    this.childEvent.emit('hey Angular Dev')
  }
}
