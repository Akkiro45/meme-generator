import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  
  @Output() onImgSelect = new EventEmitter();
  @Input() topTextProp;
  @Input() bottomTextProp;
  @Input() background;
  
  topTextControls = true;
  currProp = this.topTextProp;

  constructor() {}
  
  ngOnInit(): void {
    this.currProp = this.topTextProp;
  }

  // on changing controls tab
  onChangeTab() {
    this.topTextControls = !this.topTextControls;
    if(this.topTextControls) {
      this.currProp = this.topTextProp;
    } else {
      this.currProp = this.bottomTextProp;
    }
  }
}
