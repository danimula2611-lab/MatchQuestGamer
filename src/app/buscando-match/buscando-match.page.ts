import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonSpinner, 
  IonButtons, 
  IonBackButton,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkCircle, sparkles } from 'ionicons/icons';

@Component({
  selector: 'app-buscando-match',
  templateUrl: './buscando-match.page.html',
  styleUrls: ['./buscando-match.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonSpinner, 
    IonButtons, 
    IonBackButton,
    IonIcon
  ]
})
export class BuscandoMatchPage implements OnInit {
  juego: string = '';
  estadoBusqueda: string = 'Iniciando radar de emparejamiento...';
  matchEncontrado: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Registramos los iconos que usaremos en la pantalla
    addIcons({ checkmarkCircle, sparkles });
  }

  ngOnInit() {
    // Capturamos el nombre del juego desde la URL dinámica
    this.juego = this.route.snapshot.paramMap.get('juego') || 'Juego';
    
    // Iniciamos la secuencia de simulación del MatchQuest
    this.iniciarSimulacionMatch();
  }

  iniciarSimulacionMatch() {
    // Estado 1: Buscando jugadores (0 segundos)
    setTimeout(() => {
      this.estadoBusqueda = `Buscando agentes y escuadrones disponibles en ${this.juego}...`;
    }, 1200);

    // Estado 2: Sincronizando latencias (2.5 segundos)
    setTimeout(() => {
      this.estadoBusqueda = 'Sincronizando niveles y emparejando salas de voz...';
    }, 2800);

    // Estado 3: ¡Éxito! (4.5 segundos)
    setTimeout(() => {
      this.estadoBusqueda = '¡MATCH ENCONTRADO EN LA ARENA! Conectando...';
      this.matchEncontrado = true;
    }, 4500);

    // Redirección automática a los chats (6.5 segundos)
    setTimeout(() => {
      this.router.navigate(['/tabs/tab2']);
    }, 6500);
  }
}