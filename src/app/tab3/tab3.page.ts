import { Component, OnInit } from '@angular/core'; // <-- Importamos OnInit

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit { // <-- Añadimos implements OnInit

  // Variable estrella para controlar el esqueleto en tu perfil
  cargando: boolean = true;

  constructor() {}

  ngOnInit() {
    // Simulamos la carga de los datos del perfil del usuario
    setTimeout(() => {
      this.cargando = false;
    }, 1500);
  }

}