import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController, LoadingController } from '@ionic/angular'; // Sumamos Alert y Loading
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class LoginPage implements OnInit {

  // Variables para capturar lo que el usuario escribe en la pantalla
  usuario = {
    email: '',
    password: ''
  };

  // Metemos en el constructor los controladores de carga y alertas de Ionic
  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }

  async onLogin() {
    // 1. Validación: Si el usuario intenta entrar sin poner nada, le avisamos
    if (!this.usuario.email || !this.usuario.password) {
      const alert = await this.alertCtrl.create({
        header: '¡Faltan datos!',
        message: 'Por favor, rellena todos los campos para entrar a la arena.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    // 2. Efecto pro: Pantalla de carga simulando el acceso
    const loading = await this.loadingCtrl.create({
      message: 'Iniciando sesión gamer...',
      duration: 1000 // 1 segundo
    });
    await loading.present();

    // 3. Guardamos un token de sesión en el almacenamiento local del móvil
    localStorage.setItem('user_token', 'token_matchquestgamer_2026');
    
    // 4. Redirección definitiva a tus pestañas usando tu ruta limpia
    setTimeout(() => {
      this.router.navigate(['/tabs']);
    }, 1000);
  }

}