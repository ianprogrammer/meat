import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentMethod: RadioOption[] =[
    {label:"Dinheiro",value:"MON"},
    {label:"Cartão de débito",value:"DEB"},
    {label:"Cartão refeição",value:"REF"}

  ]
  constructor() { }

  ngOnInit() {
  }

 
}

