import { Component, OnInit } from '@angular/core';
import { addition } from "../addition/addition"
import { substraction } from '../substraction/substraction';
import { multiplication } from '../multiplication/multiplication';
import { logaritmo } from '../logaritmo/logaritmo';
import { seno } from '../seno/seno';
import { coseno } from '../coseno/coseno';
import { tangente } from '../tangente/tangente';



@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }

  result = 0;
  operator1 = 0;
  operator2 = 0;

  ngOnInit() {
  }

  addition() {
    let myresult = 0;
    myresult = addition(this.operator1, this.operator2);
    this.result = myresult;
  }

  substraction() {
    let myresult =0;
    myresult = substraction(this.operator1, this.operator2);
    this.result=myresult;
  }

  logaritmo(){
    let myresult =0;
    myresult = logaritmo(this.operator1, this.operator2);
    this.result=myresult;

  }
  tangente(){
    let myresult =0;
    myresult = tangente(this.operator1, this.operator2);
    this.result=myresult;

  }
coseno(){
let result = 0;
result = coseno(this.operator1, this.operator2);
this.result=result;
}
multiplicacion(){
  let result = 0;
  result = multiplication(this.operator1, this.operator2);
  this.result=result;

}
seno(){
  let result = 0;
  result = seno(this.operator1);
  this.result=result;

}


 
}


