import { Component, OnInit } from '@angular/core'; // <-- Importamos OnInit

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit { // <-- Añadimos implements OnInit

  // Variable para controlar el esqueleto de carga de los mensajes
  cargando: boolean = true;

  constructor() {}

  ngOnInit() {
    // Simulamos que la app está descargando los últimos chats
    setTimeout(() => {
      this.cargando = false;
    }, 1500);
  }

}