import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class RegisterPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Acción al pulsar el botón REGISTRARME
  onRegister() {
    console.log('¡Usuario registrado correctamente!');
    // Una vez registrado, le mandamos directo al login o a los tabs
    this.router.navigate(['/login']);
  }

  // Acción al pulsar "Inicia sesión aquí"
  goToLogin() {
    this.router.navigate(['/login']);
  }

}