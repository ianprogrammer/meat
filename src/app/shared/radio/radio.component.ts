import { Component, OnInit,Input,ContentChild,AfterContentInit } from '@angular/core';
import { RadioOption } from './radio-option.model';

@Component({
  selector: 'mt-radio-container',
  templateUrl: './radio.component.html'
})
export class RadioComponent implements OnInit {

  @Input() options: RadioOption[] 
  value:any
  
  constructor() { }

  ngOnInit() {
  }
  setValue(value:any){
    this.value = value
  }
}
