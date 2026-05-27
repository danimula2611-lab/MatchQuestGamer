import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // <-- Importamos para leer parámetros de la ruta

@Component({
  selector: 'app-chat-detalle',
  templateUrl: './chat-detalle.page.html',
  styleUrls: ['./chat-detalle.page.scss'],
  standalone: false, // Lo dejamos en false como tus otras páginas de módulos
})
export class ChatDetallePage implements OnInit {

  nombreUsuario: string = '';
  nuevoMensaje: string = '';
  
  // Lista donde guardaremos los mensajes de la conversación
  mensajes: { texto: string, esMio: boolean, hora: string }[] = [];

  // Inyectamos ActivatedRoute en el constructor
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Capturamos el nombre de la URL de forma dinámica
    this.nombreUsuario = this.route.snapshot.paramMap.get('nombre') || 'Gamer';

    // Cargamos una conversación de prueba dependiendo de quién sea
    this.cargarHistorialSimulado();
  }

  cargarHistorialSimulado() {
    if (this.nombreUsuario === 'AlexGamer_99') {
      this.mensajes = [
        { texto: '¡Hola! Vi que buscas equipo para ranked en Valorant ¿Estás disponible?', esMio: false, hora: '14:38' },
        { texto: '¡Buenas Alex! Sí, juego principalmente de Duelista o Initiator.', esMio: true, hora: '14:40' },
        { texto: '¡Perfecto! Nos falta uno para el grupo de Discord de esta tarde. ¿Le damos a las 18:00?', esMio: false, hora: '14:41' }
      ];
    } else if (this.nombreUsuario === 'Lucia_Hunter') {
      this.mensajes = [
        { texto: '- Aceptó tu solicitud para jugar LOL', esMio: false, hora: '13:56' },
        { texto: '¡Hola Lucía! Gracias por aceptar, ¿qué línea sueles jugar?', esMio: true, hora: '14:02' },
        { texto: 'Suelo ir Support o Mid, ¡estoy lista cuando quieras!', esMio: false, hora: '14:05' }
      ];
    } else {
      // Chat por defecto si pinchas en cualquier otro usuario
      this.mensajes = [
        { texto: '¡Buenas! ¿Te hace una partida rápida ahora?', esMio: false, hora: '18:56' },
        { texto: '¡Hola! Me conectro ahora mismo.', esMio: true, hora: '20:38' },
        { texto: 'Perfecto! Te espero en discord.', esMio: false, hora: '20:44' }
      ];
    }
  }

  // Función para simular el envío de tus mensajes
  enviarMensaje() {
    if (this.nuevoMensaje.trim() !== '') {
      this.mensajes.push({
        texto: this.nuevoMensaje,
        esMio: true, // true indica que es tuyo (burbuja a la derecha)
        hora: 'Ahora'
      });
      this.nuevoMensaje = ''; // Limpiamos la barra de texto
    }
  }

}