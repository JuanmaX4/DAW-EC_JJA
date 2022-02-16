import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgFORComponent implements OnInit {

  constructor() { }
  
  contactos: Contacto[] = [
    new Contacto('juan', 33, '../assets/imagen.jpg'),
    new Contacto('ana', 15, '../assets/imagen.jpg' ),
    new Contacto('luis', 56, '../assets/imagen.jpg'),
    new Contacto('carla', 45, '../assets/imagen.jpg')
  ];

  ngOnInit(): void {
  }

}


class Contacto {
  constructor(public nombre: string, public edad: number, public imagen: string) { }
}
