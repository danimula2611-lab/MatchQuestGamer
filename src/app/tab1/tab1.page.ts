import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  // Texto que el usuario va escribiendo en la barra de búsqueda
  textoBuscar: string = '';

  // Lista de videojuegos 
  juegos = [
    {
      titulo: 'Valorant',
      subtitulo: 'Shooter / Competitivo',
      descripcion: '342 salas activas buscando miembros para ranked en este momento.',
      colorClase: 'juego-valorant',
      colorBoton: 'cyan'
    },
    {
      titulo: 'League of Legends',
      subtitulo: 'MOBA / Estrategia',
      descripcion: '595 jugadores buscando para jugar DuoQ.',
      colorClase: 'juego-lol',
      colorBoton: 'magenta'
    },
    {
      titulo: 'FC 26',
      subtitulo: 'Estrategia / Competitivo',
      descripcion: '405 jugadores buscando gente para jugar Clubes Pro o 2vs2 Division Rivals.',
      colorClase: 'juego-fc',
      colorBoton: 'yellow'
    },
    {
      titulo: 'Clash Royale',
      subtitulo: 'Estrategia',
      descripcion: '243 jugadores para jugar 1vs1 o 2vs2.',
      colorClase: 'juego-clash',
      colorBoton: 'green'
    }
  ];

  // Esta es la lista intermedia que verá el usuario y que irá cambiando al filtrar
  juegosFiltrados = [...this.juegos];

  constructor() {}

  // Esta función se activará cada vez que teclee algo en el buscador
  buscarJuego(event: any) {
    const valor = event.detail.value.toLowerCase().trim();
    this.textoBuscar = valor;

    if (this.textoBuscar === '') {
      // Si el buscador está vacío, muestra todos los juegos otra vez
      this.juegosFiltrados = [...this.juegos];
    } else {
      // Si hay texto, filtramos la lista original buscando coincidencias en el título
      this.juegosFiltrados = this.juegos.filter(juego => 
        juego.titulo.toLowerCase().includes(this.textoBuscar)
      );
    }
  }

}