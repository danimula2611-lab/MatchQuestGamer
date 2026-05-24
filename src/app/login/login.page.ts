import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    console.log('¡Botón pulsado correctamente!');
    
    // PRUEBA A: Ruta directa sin el prefijo tabs
    this.router.navigate(['/tabs']);
    
    // PRUEBA B: Si la de arriba falla, borra la de arriba y pon esta:
    // this.router.navigate(['']);
  }

}