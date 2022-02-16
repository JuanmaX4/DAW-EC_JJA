import { Component, OnInit } from '@angular/core';
import { Contacto } from '../models/contacto';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIFComponent implements OnInit {

  public contactos : Array<Contacto>

  constructor() { 
    this.contactos = [
      new Contacto('../../../../assets/imagen.jpg','Pepe'),
      new Contacto('../../../../assets/imagen.jpg','Ricardo'),
      new Contacto('../../../../assets/imagen.jpg','Claudette'),
    ]
  }
  

   ngOnInit(): void {
  }
  
  
}