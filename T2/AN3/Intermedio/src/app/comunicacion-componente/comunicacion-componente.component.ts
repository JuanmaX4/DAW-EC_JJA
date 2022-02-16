import { Component, Input, OnInit } from '@angular/core';
import { Contacto } from '../models/contacto';

@Component({
  selector: 'app-comunicacion-componente',
  templateUrl: './comunicacion-componente.component.html',
  styleUrls: ['./comunicacion-componente.component.css']
})
export class ComunicacionComponenteComponent implements OnInit {


  @Input() contacto : Contacto | undefined;
  constructor() { }
  
  ngOnInit(): void {
  }

}
