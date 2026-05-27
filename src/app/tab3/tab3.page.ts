import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit { 

  // Variable para controlar el esqueleto de carga
  cargando: boolean = true;

  // FIJATE AQUÍ: Esta es la variable que necesita el HTML para pintar los botones de la alerta sin errores
  botonesAlert = [
    {
      text: 'Cancelar',
      role: 'cancel'
    },
    {
      text: 'Sí, salir',
      role: 'confirm',
      handler: () => {
        this.cerrarSesion(); // Si confirma, llamamos a la redirección
      }
    }
  ];

  // Inyectamos el router en el constructor
  constructor(private router: Router) {}

  ngOnInit() {
    // Simulamos la carga de los datos del perfil
    setTimeout(() => {
      this.cargando = false;
    }, 1500);
  }

  // Función que te teletransporta al Login
  cerrarSesion() {
    this.router.navigate(['/login']);
  }

}